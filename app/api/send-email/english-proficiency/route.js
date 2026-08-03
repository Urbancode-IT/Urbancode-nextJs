import { NextResponse } from "next/server";
import { getGmailTransporter, getGmailSender } from "@/lib/mailer/gmailTransporter";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const consonantMashRegex = /[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{7,}/;

const toText = (value, fallback = "N/A") => {
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

export async function POST(req) {
  try {
    const body = await req.json();

    const name         = toText(body?.name, "");
    const email        = toText(body?.email, "");
    const phone        = toText(body?.phone, "");
    const pinCode      = toText(body?.pinCode, "N/A");
    const course       = toText(body?.course, "N/A");
    const mode         = toText(body?.mode, "N/A");
    const requirements = toText(body?.requirements, "None");

    if (!name)  return NextResponse.json({ success: false, message: "Name is required." }, { status: 400 });
    if (!email || !EMAIL_REGEX.test(email))
               return NextResponse.json({ success: false, message: "Valid email is required." }, { status: 400 });
    if (!phone) return NextResponse.json({ success: false, message: "Phone number is required." }, { status: 400 });

    if (consonantMashRegex.test(name))
               return NextResponse.json({ success: false, message: "Invalid input detected." }, { status: 400 });

    const recipient  = process.env.ENQUIRY_TO_EMAIL || "admin@urbancode.in";
    const sender     = getGmailSender();
    const transporter = getGmailTransporter();

    const row = (icon, label, value) => `
      <tr>
        <td style="padding:11px 16px;font-size:13px;font-weight:600;color:#475569;background:#f8fafc;border-bottom:1px solid #e2e8f0;width:38%;">${icon} ${label}</td>
        <td style="padding:11px 16px;font-size:14px;color:#1a2b3c;border-bottom:1px solid #e2e8f0;">${value}</td>
      </tr>`;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><title>English Proficiency Form - ${name}</title></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f4f8;padding:30px 0;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" border="0"
             style="max-width:620px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:linear-gradient(135deg,#036c2d 0%,#17944d 100%);padding:28px 30px;text-align:center;">
            <img src="https://www.urbancode.in/images/home/logo.png" alt="UrbanCode" width="160"
                 style="display:inline-block;max-width:160px;height:auto;background:#fff;padding:8px 14px;border-radius:10px;margin-bottom:10px;" />
            <p style="margin:0;color:#d4f5e2;font-size:14px;">Training &amp; Solutions</p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 30px;">
            <div style="background:#fff8e1;border-left:4px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;margin-top:24px;">
              <p style="margin:0;font-size:13px;color:#92400e;font-weight:600;">📋 New English Proficiency Form Submission</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 30px 10px;">
            <h2 style="margin:0 0 6px;font-size:20px;color:#1a2b3c;">New English Proficiency details</h2>
            <p style="margin:0 0 20px;font-size:14px;color:#64748b;">A new user has requested enrollment via the website.</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="border-collapse:collapse;border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;">
              ${row("👤", "Full Name", name)}
              ${row("📧", "Email", `<a href="mailto:${email}" style="color:#036c2d;font-weight:600;">${email}</a>`)}
              ${row("📞", "Phone", `<a href="tel:${phone}" style="color:#036c2d;font-weight:600;">${phone}</a>`)}
              ${row("📍", "Pin Code", pinCode)}
              ${row("📚", "Course", course)}
              ${row("💻", "Mode", mode)}
              <tr>
                <td style="padding:11px 16px;font-size:13px;font-weight:600;color:#475569;background:#f8fafc;vertical-align:top;">🌟 Requirements</td>
                <td style="padding:11px 16px;font-size:14px;color:#1a2b3c;">${requirements}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 30px 32px;text-align:center;">
            <a href="mailto:${email}?subject=Re: English Proficiency Form"
               style="display:inline-block;background:linear-gradient(90deg,#036c2d 0%,#17944d 100%);color:#fff;text-decoration:none;padding:13px 32px;border-radius:30px;font-weight:600;font-size:15px;box-shadow:0 6px 18px rgba(3,108,45,0.3);">
              Reply to ${name.split(" ")[0]}
            </a>
          </td>
        </tr>
        <tr>
          <td style="background:#f8fafc;padding:20px;text-align:center;border-top:1px solid #e2e8f0;">
            <p style="margin:0 0 4px;font-size:12px;color:#64748b;">This email was sent from the UrbanCode English Proficiency Form.</p>
            <p style="margin:0;font-size:12px;color:#94a3b8;">&copy; ${new Date().getFullYear()} UrbanCode. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
    `;

    await transporter.sendMail({
      from: sender,
      to: recipient,
      subject: \`New English Proficiency: \${name} - \${course}\`,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true, message: "Enrollment form submitted successfully." }, { status: 200 });

  } catch (error) {
    console.error("Enrollment Form Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
