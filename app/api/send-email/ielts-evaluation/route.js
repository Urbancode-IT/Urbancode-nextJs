import { NextResponse } from 'next/server';
import { getGmailTransporter, getGmailSender } from '@/lib/mailer/gmailTransporter';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECIPIENT = 'admin@urbancode.in';

const toText = (value, fallback = 'N/A') => {
  if (value === undefined || value === null) return fallback;
  if (Array.isArray(value)) return value.length ? value.join(', ') : fallback;
  const text = String(value).trim();
  return text || fallback;
};

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const row = (label, value) => `
  <tr>
    <td style="padding:11px 16px;font-size:13px;font-weight:600;color:#475569;background:#f8fafc;border-bottom:1px solid #e2e8f0;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:11px 16px;font-size:14px;color:#1a2b3c;border-bottom:1px solid #e2e8f0;white-space:pre-wrap;">${escapeHtml(toText(value))}</td>
  </tr>`;

const section = (title, rows) => `
  <tr><td colspan="2" style="padding:16px 16px 8px;background:#ffffff;">
    <h3 style="margin:0;font-size:15px;color:#1a3a5c;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #4a90c4;padding-bottom:8px;">${escapeHtml(title)}</h3>
  </td></tr>
  ${rows}`;

export async function POST(req) {
  try {
    const body = await req.json();

    const firstName = toText(body?.firstName, '');
    const lastName = toText(body?.lastName, '');
    const name = `${firstName} ${lastName}`.trim() || toText(body?.name, '');
    const email = toText(body?.email, '');
    const phone = toText(body?.phone, '');

    if (!name || name === 'N/A') {
      return NextResponse.json({ success: false, message: 'Name is required.' }, { status: 400 });
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ success: false, message: 'Valid email is required.' }, { status: 400 });
    }
    if (!phone || phone === 'N/A') {
      return NextResponse.json({ success: false, message: 'Phone number is required.' }, { status: 400 });
    }

    const sender = getGmailSender();
    const transporter = getGmailTransporter();

    const section1Rows = [
      row('Full Name', name),
      row('Email', email),
      row('Phone', phone),
      row('Date of Birth', body?.dateOfBirth),
      row('Educational Qualification', body?.qualification),
    ].join('');

    const section2Rows = [
      row('IELTS Test Type', body?.ieltsTestType),
      row('Purpose', body?.ieltsPurpose),
      row('Taken IELTS Before', body?.takenIeltsBefore),
      ...(body?.takenIeltsBefore === 'Yes'
        ? [
            row('Previous Attempt Date', body?.previousAttemptDate),
            row('Overall Band Score', body?.overallBandScore),
            row('Listening Score', body?.listeningScore),
            row('Reading Score', body?.readingScore),
            row('Writing Score', body?.writingScore),
            row('Speaking Score', body?.speakingScore),
            row('Target Band Score', body?.targetBandScore),
            row('Preferred Test Date', body?.preferredTestDate),
          ]
        : []),
    ].join('');

    const section3Rows = [
      row('English Proficiency', body?.englishProficiency),
      row('Challenging Areas', body?.challengingAreas),
      row('Strengths', body?.englishStrengths),
      row('Formal English Study', body?.formalEnglishStudy),
      row('English Usage Frequency', body?.englishUsageFrequency),
    ].join('');

    const section4Rows = [
      row('Training Type', body?.trainingType),
      row('Attended Coaching Before', body?.attendedCoachingBefore),
      row('Previous Training Feedback', body?.previousTrainingFeedback),
      row('Training Expectations', body?.trainingExpectations),
      row('Hours Per Week', body?.hoursPerWeek),
      row('Preferred Timing', body?.preferredTiming),
      row('Preferred Format', body?.preferredFormat),
    ].join('');

    const section5Rows = [
      row('About Paragraph', body?.aboutParagraph),
      row('Writing Task Response', body?.writingResponse),
      row('Uploaded File', body?.uploadedFileName),
    ].join('');

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IELTS/PTE Evaluation – ${escapeHtml(name)}</title>
</head>
<body style="margin:0;padding:0;background-color:#eef4fb;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eef4fb;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="640" cellpadding="0" cellspacing="0" border="0"
               style="max-width:640px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(26,58,92,0.12);">

          <tr>
            <td style="background:linear-gradient(135deg,#1a3a5c 0%,#2d5a87 50%,#4a90c4 100%);padding:28px 30px;text-align:center;">
              <img src="https://www.urbancode.in/images/home/logo.png" alt="UrbanCode" width="160"
                   style="display:inline-block;max-width:160px;height:auto;margin-bottom:10px;background:#ffffff;padding:8px 14px;border-radius:10px;" />
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:0.5px;">IELTS / PTE Evaluation Form</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">New submission from Study Abroad page</p>
            </td>
          </tr>

          <tr>
            <td style="padding:0 24px;">
              <div style="background:#e8f2fc;border-left:4px solid #4a90c4;border-radius:0 8px 8px 0;padding:14px 18px;margin-top:24px;">
                <p style="margin:0;font-size:13px;color:#1a3a5c;font-weight:600;">New evaluation received — please review and follow up with the student.</p>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 24px 10px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;">
                ${section('Section 1 — Student Details', section1Rows)}
                ${section('Section 2 — IELTS Goal & Background', section2Rows)}
                ${section('Section 3 — English Language Profile', section3Rows)}
                ${section('Section 4 — Learning Requirements', section4Rows)}
                ${section('Section 5 — Diagnostics', section5Rows)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:8px 24px 32px;text-align:center;">
              <a href="mailto:${escapeHtml(email)}?subject=Re: Your IELTS/PTE Evaluation at UrbanCode"
                 style="display:inline-block;background:linear-gradient(135deg,#1a3a5c 0%,#4a90c4 100%);color:#ffffff;text-decoration:none;padding:13px 32px;border-radius:30px;font-weight:600;font-size:15px;box-shadow:0 6px 18px rgba(26,58,92,0.3);">
                Reply to Student
              </a>
            </td>
          </tr>

          <tr>
            <td style="background:#1a3a5c;padding:20px 30px;text-align:center;">
              <p style="margin:0 0 4px;color:rgba(255,255,255,0.7);font-size:12px;">© ${new Date().getFullYear()} UrbanCode Training &amp; Solutions</p>
              <p style="margin:0;font-size:12px;"><a href="https://www.urbancode.in" style="color:#87ceeb;text-decoration:none;">www.urbancode.in</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const plainText = [
      'IELTS/PTE Evaluation Form Submission',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      'See HTML email for full section-wise responses.',
    ].join('\n');

    await transporter.sendMail({
      from: `"UrbanCode IELTS Evaluation" <${sender}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `IELTS/PTE Evaluation — ${name}`,
      text: plainText,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Evaluation submitted successfully.' });
  } catch (error) {
    console.error('IELTS evaluation email error:', error);
    const isAuthError = error?.code === 'EAUTH';
    const message = isAuthError
      ? 'Gmail SMTP authentication failed. Verify GMAIL_SENDER and GMAIL_APP_PASSWORD in .env.local.'
      : error?.message || 'Failed to send evaluation email.';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
