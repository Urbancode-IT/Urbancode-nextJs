import { NextResponse } from 'next/server';
import { getGmailTransporter, getGmailSender } from '@/lib/mailer/gmailTransporter';
import { sendExternalEnrollment, extractMobileNumber } from '@/lib/api/externalEnrollment';
import { isZenCourseId } from '@/lib/api/externalCourses';
import { readLeadSource, leadSourceTextLines } from '@/app/utils/leadSource';
import { recordLeadEnquiry } from '@/lib/leadEnquiriesDb';
import { validateLeadContact } from '@/app/utils/validationUtils';
import {
  buildAdminCourseEnquiryEmail,
  buildStudentCourseEnquiryEmail,
} from '@/lib/mailer/emailTemplates';
const CRM_TIMEOUT_MS = 5000;

const withTimeout = (promise, timeoutMs, message) =>
  Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(message)), timeoutMs);
    }),
  ]);

const toText = (value, fallback = 'N/A') => {
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

export async function POST(req) {
  try {
    const body = await req.json();

    const name    = toText(body?.name, '');
    const email   = toText(body?.email, '');
    const phone   = toText(body?.phone || body?.mobile || body?.phoneNumber || body?.mobileNumber, '');
    let course  = toText(body?.course || body?.courseName || body?.program, 'Course Enquiry');
    let course_id = toText(body?.course_id || body?.courseId, '');
    const websiteCourse = course; // capture original human-readable course name before potential Zen ID swap

    if (!course_id && isZenCourseId(course)) {
      course_id = course;
      course = '';
    }
    const mode    = toText(body?.mode, 'Not specified');
    const pin     = toText(body?.pin, 'N/A');
    const message = toText(body?.message, 'No message provided');
    const card_type = toText(body?.card_type, 'Training Only');
    const leadSource = readLeadSource(body, toText);
    const source_page = leadSource.page;

    const contactError = validateLeadContact({ name, email, phone });
    if (contactError) return NextResponse.json({ success: false, message: contactError }, { status: 400 });

    const recipient = [...new Set(
      (process.env.ENQUIRY_TO_EMAIL
        ? `${process.env.ENQUIRY_TO_EMAIL}, zen@urbancode.in, admin@urbancode.in`
        : 'zen@urbancode.in, admin@urbancode.in'
      )
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
    )].join(', ');
    const sender     = getGmailSender();
    const transporter = getGmailTransporter();
    const displayCourse = websiteCourse && websiteCourse !== 'N/A' ? websiteCourse : course;

    const adminTpl = buildAdminCourseEnquiryEmail({
      name,
      email,
      phone,
      course: displayCourse,
      mode,
      pin,
      message,
      leadSource,
    });
    const studentTpl = buildStudentCourseEnquiryEmail({
      name,
      course: displayCourse,
    });

    const adminEmailPromise = transporter.sendMail({
      from: `"Urbancode" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: adminTpl.subject,
      text: [
        'New course enquiry received:',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Course: ${displayCourse}`,
        `Mode: ${mode}`,
        `PIN: ${pin}`,
        ...leadSourceTextLines(leadSource),
        `Message: ${message}`,
      ].join('\n'),
      html: adminTpl.html,
    });

    const studentEmailPromise = transporter.sendMail({
      from: `"Urbancode" <${sender}>`,
      to: email,
      subject: studentTpl.subject,
      text: studentTpl.text,
      html: studentTpl.html,
    });

    const isBootcamp = /bootcamp/i.test(websiteCourse) || /bootcamp/i.test(leadSource.form) || /bootcamp/i.test(leadSource.button);
    const requirements = [
      isBootcamp ? '[BOOTCAMP FORM SUBMISSION]' : '',
      websiteCourse && websiteCourse !== 'Course Enquiry' && websiteCourse !== 'N/A'
        ? `Website course: ${websiteCourse}`
        : '',
      source_page && source_page !== 'Not captured' && source_page !== 'N/A' ? `Page: ${source_page}` : '',
      leadSource.form && leadSource.form !== 'Not captured' ? `Form: ${leadSource.form}` : '',
      leadSource.button && leadSource.button !== 'Not captured' ? `Button: ${leadSource.button}` : '',
      mode && mode !== 'Not specified' ? `Mode: ${mode}` : '',
      pin && pin !== 'N/A' ? `PIN: ${pin}` : '',
      message && message !== 'No message provided' ? message : '',
    ].filter(Boolean).join(' | ');

    // Await CRM so Next.js does not kill the request when the response is sent
    // Pass the original website course name — sendExternalEnrollment maps it to a Zen course.
    const crmPromise = withTimeout(
      sendExternalEnrollment({
        name,
        mobile_number: extractMobileNumber(phone),
        email,
        course: websiteCourse,
        course_id: course_id || undefined,
        requirements,
        card_type,
      }),
      CRM_TIMEOUT_MS,
      'CRM request timed out.'
    );

    const [adminEmailResult, studentEmailResult, crmResult] = await Promise.allSettled([
      adminEmailPromise,
      studentEmailPromise,
      crmPromise,
    ]);

    if (adminEmailResult.status === 'rejected') {
      console.error('Course enquiry admin email error:', adminEmailResult.reason);
    }
    if (studentEmailResult.status === 'rejected') {
      console.error('Course enquiry student email error:', studentEmailResult.reason);
    }
    if (crmResult.status === 'rejected') {
      console.error('Course enquiry CRM error:', crmResult.reason);
    } else if (crmResult.value && !crmResult.value.ok) {
      console.error('Course enquiry CRM error:', crmResult.value.error);
    }

    const adminEmailOk = adminEmailResult.status === 'fulfilled';
    const studentEmailOk = studentEmailResult.status === 'fulfilled';
    const emailOk = adminEmailOk || studentEmailOk;
    const crmOk = crmResult.status === 'fulfilled' && crmResult.value?.ok;

    // Prefer delivering mail; do not hide SMTP failures behind CRM success alone.
    if (!adminEmailOk && !studentEmailOk) {
      throw adminEmailResult.reason || studentEmailResult.reason || new Error('Failed to send enquiry emails.');
    }

    if (!emailOk && !crmOk) {
      throw adminEmailResult.reason || new Error('Failed to submit enquiry to email and CRM.');
    }

    await recordLeadEnquiry({
      name,
      email,
      phone,
      topic: course,
      channel: 'course-enquiry',
      sourcePage: leadSource.page,
      sourceSection: leadSource.section,
      sourceForm: leadSource.form,
      sourceButton: leadSource.button,
    });

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully.' });
  } catch (error) {
    console.error('Course enquiry email error:', error);
    const isAuthError = error?.code === 'EAUTH';
    const message = isAuthError
      ? 'Gmail SMTP authentication failed. Verify your GMAIL_SENDER and GMAIL_APP_PASSWORD in .env.local.'
      : error?.message || 'Failed to send enquiry email.';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
