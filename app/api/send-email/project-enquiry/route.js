import { NextResponse } from 'next/server';
import { getGmailTransporter, getGmailSender } from '@/lib/mailer/gmailTransporter';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const phone   = toText(body?.phone || body?.mobile, '');
    const subject = toText(body?.subject, 'Project Enquiry');
    const message = toText(body?.message, 'No message provided');

    if (!name)  return NextResponse.json({ success: false, message: 'Name is required.' }, { status: 400 });
    if (!email || !EMAIL_REGEX.test(email))
                return NextResponse.json({ success: false, message: 'Valid email is required.' }, { status: 400 });
    if (!phone) return NextResponse.json({ success: false, message: 'Phone number is required.' }, { status: 400 });

    // Spam Validation removed

    const recipient   = process.env.ENQUIRY_TO_EMAIL || 'admin@urbancode.in';
    const sender      = getGmailSender();
    const transporter = getGmailTransporter();

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Project Enquiry – UrbanCode</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f4f8;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0"
               style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;
                      overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#036c2d 0%,#17944d 100%);padding:32px 30px;text-align:center;">
              <img src="https://www.urbancode.in/images/home/logo.png"
                   alt="UrbanCode" width="180"
                   style="display:inline-block;max-width:180px;height:auto;margin-bottom:12px;
                          background:#ffffff;padding:8px 14px;border-radius:10px;" />
              <p style="margin:0;color:#d4f5e2;font-size:14px;letter-spacing:0.5px;">
                Training &amp; Solutions
              </p>
            </td>
          </tr>

          <!-- ALERT BADGE -->
          <tr>
            <td style="padding:0 30px;">
              <div style="background:#fce4ec;border-left:4px solid #c62828;
                          border-radius:0 8px 8px 0;padding:14px 18px;margin-top:28px;">
                <p style="margin:0;font-size:13px;color:#b71c1c;font-weight:600;">
                  🚀 New Project Enquiry — Action Required
                </p>
              </div>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:28px 30px 10px;">
              <h2 style="margin:0 0 6px;font-size:22px;color:#1a2b3c;">
                Project / Web Development Enquiry
              </h2>
              <p style="margin:0 0 24px;font-size:14px;color:#64748b;">
                A client has submitted a project enquiry via the website.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="border-collapse:collapse;border-radius:10px;overflow:hidden;
                            border:1px solid #e2e8f0;">
                <tr style="background:#f8fafc;">
                  <td style="padding:13px 16px;font-size:13px;font-weight:600;color:#475569;
                              border-bottom:1px solid #e2e8f0;width:38%;">👤 Name</td>
                  <td style="padding:13px 16px;font-size:14px;color:#1a2b3c;
                              border-bottom:1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:13px 16px;font-size:13px;font-weight:600;color:#475569;
                              border-bottom:1px solid #e2e8f0;background:#f8fafc;">📧 Email</td>
                  <td style="padding:13px 16px;font-size:14px;border-bottom:1px solid #e2e8f0;">
                    <a href="mailto:${email}" style="color:#036c2d;text-decoration:none;font-weight:600;">${email}</a>
                  </td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="padding:13px 16px;font-size:13px;font-weight:600;color:#475569;
                              border-bottom:1px solid #e2e8f0;">📞 Phone</td>
                  <td style="padding:13px 16px;font-size:14px;color:#1a2b3c;
                              border-bottom:1px solid #e2e8f0;">
                    <a href="tel:${phone}" style="color:#036c2d;text-decoration:none;font-weight:600;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:13px 16px;font-size:13px;font-weight:600;color:#475569;
                              border-bottom:1px solid #e2e8f0;background:#f8fafc;">📋 Subject</td>
                  <td style="padding:13px 16px;font-size:14px;color:#1a2b3c;
                              border-bottom:1px solid #e2e8f0;font-weight:600;">${subject}</td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="padding:13px 16px;font-size:13px;font-weight:600;color:#475569;
                              vertical-align:top;">💬 Message</td>
                  <td style="padding:13px 16px;font-size:14px;color:#1a2b3c;">${message}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:24px 30px 32px;text-align:center;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)} – UrbanCode"
                 style="display:inline-block;background:linear-gradient(90deg,#036c2d 0%,#17944d 100%);
                        color:#ffffff;text-decoration:none;padding:13px 32px;border-radius:30px;
                        font-weight:600;font-size:15px;box-shadow:0 6px 18px rgba(3,108,45,0.3);">
                Reply to Client
              </a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#1a2b3c;padding:24px 30px;text-align:center;">
              <p style="margin:0 0 6px;color:#94a3b8;font-size:12px;">
                © ${new Date().getFullYear()} UrbanCode Training &amp; Solutions. All rights reserved.
              </p>
              <p style="margin:0;font-size:12px;">
                <a href="https://www.urbancode.in" style="color:#17944d;text-decoration:none;font-weight:600;">
                  www.urbancode.in
                </a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    await transporter.sendMail({
      from: `"UrbanCode" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: `🚀 New Project Enquiry: ${subject} — ${name}`,
      text: [
        'New project enquiry received:',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Subject: ${subject}`,
        `Message: ${message}`,
      ].join('\n'),
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully.' });
  } catch (error) {
    console.error('Project enquiry email error:', error);
    const isAuthError = error?.code === 'EAUTH';
    const message = isAuthError
      ? 'Gmail SMTP authentication failed. Verify GMAIL_SENDER and GMAIL_APP_PASSWORD in .env.local.'
      : error?.message || 'Failed to send project enquiry email.';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
