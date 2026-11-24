import { NextResponse } from 'next/server';
import { getGmailTransporter, getGmailSender } from '@/lib/mailer/gmailTransporter';
import { validateLeadContact } from '@/app/utils/validationUtils';
import { readLeadSource, leadSourceTextLines } from '@/app/utils/leadSource';
import { recordLeadEnquiry } from '@/lib/leadEnquiriesDb';
import { buildAdminIeltsEvaluationEmail } from '@/lib/mailer/emailTemplates';
const RECIPIENT = 'admin@urbancode.in';

const toText = (value, fallback = 'N/A') => {
  if (value === undefined || value === null) return fallback;
  if (Array.isArray(value)) return value.length ? value.join(', ') : fallback;
  const text = String(value).trim();
  return text || fallback;
};

export async function POST(req) {
  try {
    const body = await req.json();
    const leadSource = readLeadSource(body, toText);

    const firstName = toText(body?.firstName, '');
    const lastName = toText(body?.lastName, '');
    const name = `${firstName} ${lastName}`.trim() || toText(body?.name, '');
    const email = toText(body?.email, '');
    const phone = toText(body?.phone, '');

    const contactError = (firstName || lastName)
      ? validateLeadContact({ names: [firstName, lastName], email, phone })
      : validateLeadContact({ name, email, phone });
    if (contactError) {
      return NextResponse.json({ success: false, message: contactError }, { status: 400 });
    }

    const sender = getGmailSender();
    const transporter = getGmailTransporter();

    const adminTpl = buildAdminIeltsEvaluationEmail({
      name,
      email,
      phone,
      leadSource,
      body,
    });

    const plainText = [
      'IELTS/PTE Evaluation Form Submission',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      ...leadSourceTextLines(leadSource),
      'See HTML email for full section-wise responses.',
    ].join('\n');

    await transporter.sendMail({
      from: `"Urbancode" <${sender}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: adminTpl.subject,
      text: plainText,
      html: adminTpl.html,
    });

    await recordLeadEnquiry({
      name,
      email,
      phone,
      topic: 'IELTS / PTE evaluation',
      channel: 'ielts-evaluation',
      sourcePage: leadSource.page,
      sourceSection: leadSource.section,
      sourceForm: leadSource.form,
      sourceButton: leadSource.button,
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
