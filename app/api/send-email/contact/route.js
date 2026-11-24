import { NextResponse } from 'next/server';
import { getGmailTransporter, getGmailSender } from '@/lib/mailer/gmailTransporter';
import { sendExternalEnrollment, extractMobileNumber } from '@/lib/api/externalEnrollment';
import { isZenCourseId } from '@/lib/api/externalCourses';
import { validateLeadContact } from '@/app/utils/validationUtils';
import { readLeadSource, leadSourceTextLines } from '@/app/utils/leadSource';
import { recordLeadEnquiry } from '@/lib/leadEnquiriesDb';
import { buildAdminContactEmail } from '@/lib/mailer/emailTemplates';

const toText = (value, fallback = 'N/A') => {
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

export async function POST(req) {
  try {
    const body = await req.json();
    const leadSource = readLeadSource(body, toText);

    const name    = toText(body?.name, '');
    const email   = toText(body?.email, '');
    const phone   = toText(body?.phone || body?.mobile || body?.mobileNumber || body?.phoneNumber, '');
    const message = toText(body?.message, 'No message provided');
    const interest = toText(body?.interest, 'Not specified');
    let selectedCourse = toText(body?.selectedCourse, '');
    let course_id = toText(body?.course_id || body?.courseId, '');

    if (!course_id && isZenCourseId(selectedCourse)) {
      course_id = selectedCourse;
      selectedCourse = '';
    }

    const convenientTime = toText(body?.convenientTime, 'Not specified');

    const contactError = validateLeadContact({ name, email, phone });
    if (contactError) return NextResponse.json({ success: false, message: contactError }, { status: 400 });

    const recipient   = process.env.ENQUIRY_TO_EMAIL
      ? `${process.env.ENQUIRY_TO_EMAIL}, zen@urbancode.in, admin@urbancode.in`
      : 'zen@urbancode.in, admin@urbancode.in';
    const sender      = getGmailSender();
    const transporter = getGmailTransporter();

    const adminTpl = buildAdminContactEmail({
      name,
      email,
      phone,
      interest,
      convenientTime,
      message,
      leadSource,
    });

    const emailPromise = transporter.sendMail({
      from: `"Urbancode" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: adminTpl.subject,
      text: [
        'New contact message received:',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Interest: ${interest}`,
        `Best Time to Call: ${convenientTime}`,
        ...leadSourceTextLines(leadSource),
        `Message: ${message}`,
      ].join('\n'),
      html: adminTpl.html,
    });

    const crmPromise = sendExternalEnrollment({
      name,
      mobile_number: extractMobileNumber(phone),
      email,
      course: interest === 'Course Enquiry' && selectedCourse ? selectedCourse : (interest || 'Contact Form Enquiry'),
      course_id: course_id || undefined,
      requirements: `Interest: ${interest} | Convenient Time: ${convenientTime} | Message: ${message}`,
      card_type: 'Training Only',
    });

    const [emailResult, crmResult] = await Promise.allSettled([emailPromise, crmPromise]);

    if (emailResult.status === 'rejected') {
      console.error('Contact email error:', emailResult.reason);
    }
    if (crmResult.status === 'rejected') {
      console.error('Contact CRM error:', crmResult.reason);
    } else if (crmResult.value && !crmResult.value.ok) {
      console.error('Contact CRM error:', crmResult.value.error);
    }

    const emailOk = emailResult.status === 'fulfilled';
    const crmOk = crmResult.status === 'fulfilled' && crmResult.value?.ok;

    if (!emailOk && !crmOk) {
      throw emailResult.reason || new Error('Failed to send contact message.');
    }

    await recordLeadEnquiry({
      name,
      email,
      phone,
      topic: interest,
      channel: 'contact',
      sourcePage: leadSource.page,
      sourceSection: leadSource.section,
      sourceForm: leadSource.form,
      sourceButton: leadSource.button,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact email error:', error);
    const isAuthError = error?.code === 'EAUTH';
    const message = isAuthError
      ? 'Gmail SMTP authentication failed. Verify GMAIL_SENDER and GMAIL_APP_PASSWORD in .env.local.'
      : error?.message || 'Failed to send contact email.';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
