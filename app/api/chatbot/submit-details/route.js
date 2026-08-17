import { NextResponse } from 'next/server';
import { getGmailTransporter, getGmailSender } from '@/lib/mailer/gmailTransporter';
import { sendExternalEnrollment, extractMobileNumber } from '@/lib/api/externalEnrollment';
import { resolveCrmCourseNameAsync } from '@/lib/api/resolveCrmCourse';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const toText = (value, fallback = '') => {
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

function buildUserEmailHtml(name, course) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank you for contacting Urbancode</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f4f8;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#036c2d 0%,#17944d 100%);padding:32px 30px;text-align:center;">
              <img src="https://www.urbancode.in/images/home/logo.png" alt="UrbanCode" width="180" style="display:inline-block;max-width:180px;height:auto;background:#fff;padding:8px 14px;border-radius:10px;" />
              <p style="margin:8px 0 0;color:#d4f5e2;font-size:14px;">Training &amp; Solutions</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 30px;color:#1a2b3c;">
              <h2 style="margin:0 0 12px;font-size:22px;color:#036c2d;">Hi ${name}, thank you for reaching out!</h2>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#475569;">
                We received your enquiry for <strong style="color:#036c2d;">${course}</strong>.
              </p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#475569;">
                Our expert team will guide you, teach you with hands-on training, and help you build real skills for your career goals.
                A course coordinator will contact you shortly with the next steps.
              </p>
              <div style="background:#f8fafc;border-left:4px solid #17944d;padding:16px 18px;border-radius:0 8px 8px 0;margin:24px 0;">
                <p style="margin:0;font-size:14px;color:#036c2d;font-weight:600;">Dream big. Achieve bigger.</p>
                <p style="margin:8px 0 0;font-size:13px;color:#64748b;">From skills to success — delivering real-world learning that drives results.</p>
              </div>
              <p style="margin:0;font-size:14px;color:#64748b;">
                Questions? Reply to this email or call us at
                <a href="tel:+919878798797" style="color:#036c2d;text-decoration:none;font-weight:600;">+91 98787 98797</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#1a2b3c;padding:24px 30px;text-align:center;">
              <p style="margin:0 0 6px;color:#94a3b8;font-size:12px;">© ${new Date().getFullYear()} UrbanCode Training &amp; Solutions</p>
              <a href="https://www.urbancode.in" style="color:#17944d;text-decoration:none;font-size:12px;font-weight:600;">www.urbancode.in</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildAdminEmailHtml({ name, email, phone, course, message }) {
  return `<!DOCTYPE html>
<html lang="en"><body style="font-family:Segoe UI,sans-serif;background:#f0f4f8;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;padding:24px;">
    <h2 style="color:#036c2d;margin-top:0;">New Chatbot Enquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
    <p><strong>Course:</strong> ${course}</p>
    <p><strong>Source:</strong> Website Chatbot</p>
    ${message ? `<p><strong>Notes:</strong> ${message}</p>` : ''}
  </div>
</body></html>`;
}

async function handleSubmit(body) {
  const name = toText(body?.name, '');
  const email = toText(body?.email, '');
  const phone = toText(body?.phone || body?.mobile, '');
  const course = toText(body?.course, 'Course Enquiry');

  if (!name) {
    return NextResponse.json({ success: false, message: 'Name is required.' }, { status: 400 });
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ success: false, message: 'Valid email is required.' }, { status: 400 });
  }
  if (!phone) {
    return NextResponse.json({ success: false, message: 'Phone number is required.' }, { status: 400 });
  }

  const sender = getGmailSender();
  const transporter = getGmailTransporter();
  const adminRecipient = process.env.ENQUIRY_TO_EMAIL || 'admin@urbancode.in';
  const crmCourse = await resolveCrmCourseNameAsync(course);
  const requirements = [
    'Source: Website Chatbot',
    course !== crmCourse ? `Website course: ${course}` : '',
  ].filter(Boolean).join(' | ');

  const userEmailPromise = transporter.sendMail({
    from: `"UrbanCode" <${sender}>`,
    to: email,
    replyTo: adminRecipient,
    subject: `Thank you for your interest in ${course} — UrbanCode`,
    text: [
      `Hi ${name},`,
      '',
      `Thank you for contacting UrbanCode about ${course}.`,
      'Our expert team will guide you and teach you with practical, career-focused training.',
      'A course coordinator will reach out to you shortly.',
      '',
      'Dream big. Achieve bigger.',
      'UrbanCode Training & Solutions',
      'www.urbancode.in',
    ].join('\n'),
    html: buildUserEmailHtml(name, course),
  });

  const adminEmailPromise = transporter.sendMail({
    from: `"UrbanCode Chatbot" <${sender}>`,
    to: adminRecipient,
    replyTo: email,
    subject: `Chatbot Enquiry: ${course} — ${name}`,
    text: [
      'New chatbot enquiry:',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Course: ${course}`,
    ].join('\n'),
    html: buildAdminEmailHtml({ name, email, phone, course }),
  });

  const crmPromise = sendExternalEnrollment({
    name,
    mobile_number: extractMobileNumber(phone),
    email,
    course: crmCourse,
    requirements,
    card_type: 'Training Only',
  });

  const [userResult, adminResult, crmResult] = await Promise.allSettled([
    userEmailPromise,
    adminEmailPromise,
    crmPromise,
  ]);

  if (userResult.status === 'rejected') {
    console.error('[Chatbot] User email error:', userResult.reason);
  }
  if (adminResult.status === 'rejected') {
    console.error('[Chatbot] Admin email error:', adminResult.reason);
  }
  if (crmResult.status === 'rejected') {
    console.error('[Chatbot] CRM error:', crmResult.reason);
  } else if (crmResult.value && !crmResult.value.ok) {
    console.error('[Chatbot] CRM error:', crmResult.value.error);
  }

  const userOk = userResult.status === 'fulfilled';
  const adminOk = adminResult.status === 'fulfilled';
  const crmOk = crmResult.status === 'fulfilled' && crmResult.value?.ok;

  if (!userOk && !adminOk && !crmOk) {
    throw userResult.reason || new Error('Failed to process chatbot enquiry.');
  }

  return NextResponse.json({
    success: true,
    message: 'Details submitted successfully.',
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    return await handleSubmit(body);
  } catch (error) {
    console.error('[Chatbot] submit-details error:', error);
    const message = error?.message || 'Failed to submit chatbot enquiry.';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
