import { NextResponse } from 'next/server';
import { getGmailTransporter, getGmailSender } from '@/lib/mailer/gmailTransporter';
import { sendExternalEnrollment, extractMobileNumber } from '@/lib/api/externalEnrollment';
import { isGibberish, validateLeadContact } from '@/app/utils/validationUtils';
import { readLeadSource, leadSourceTextLines } from '@/app/utils/leadSource';
import { recordLeadEnquiry } from '@/lib/leadEnquiriesDb';
import { buildAdminMentorEmail } from '@/lib/mailer/emailTemplates';

const toText = (value, fallback = 'N/A') => {
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

export async function POST(req) {
  try {
    const body = await req.json();
    const leadSource = readLeadSource(body, toText);

    const name       = toText(body?.name, '');
    const email      = toText(body?.email, '');
    const phone      = toText(body?.phone || body?.mobile || body?.mobileNumber, '');
    const experience = toText(body?.experience, 'Not specified');
    const interest   = toText(body?.interest, 'No message provided');

    const contactError = validateLeadContact({ name, email, phone });
    if (contactError) return NextResponse.json({ success: false, message: contactError }, { status: 400 });
    if (interest && interest !== 'No message provided' && isGibberish(interest)) {
      return NextResponse.json({ success: false, message: 'Please enter a valid message.' }, { status: 400 });
    }

    const recipient   = process.env.ENQUIRY_TO_EMAIL
      ? `${process.env.ENQUIRY_TO_EMAIL}, zen@urbancode.in, admin@urbancode.in`
      : 'zen@urbancode.in, admin@urbancode.in';
    const sender      = getGmailSender();
    const transporter = getGmailTransporter();

    const adminTpl = buildAdminMentorEmail({
      name,
      email,
      phone,
      experience,
      interest,
      leadSource,
    });

    const emailPromise = transporter.sendMail({
      from: `"Urbancode" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: adminTpl.subject,
      text: [
        'New mentor application received:',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Experience: ${experience}`,
        ...leadSourceTextLines(leadSource),
        `Goals / Message: ${interest}`,
      ].join('\n'),
      html: adminTpl.html,
    });

    const crmPromise = sendExternalEnrollment({
      name,
      mobile_number: extractMobileNumber(phone),
      email,
      course: 'Mentorship Application',
      requirements: `Experience: ${experience} | Goals/Message: ${interest}`,
      card_type: 'Training Only',
    });

    await Promise.allSettled([emailPromise, crmPromise]);

    await recordLeadEnquiry({
      name,
      email,
      phone,
      topic: 'Mentor application',
      channel: 'mentor',
      sourcePage: leadSource.page,
      sourceSection: leadSource.section,
      sourceForm: leadSource.form,
      sourceButton: leadSource.button,
    });

    return NextResponse.json({ success: true, message: 'Application submitted successfully.' });
  } catch (error) {
    console.error('Mentor email error:', error);
    const isAuthError = error?.code === 'EAUTH';
    const message = isAuthError
      ? 'Gmail SMTP authentication failed. Verify GMAIL_SENDER and GMAIL_APP_PASSWORD in .env.local.'
      : error?.message || 'Failed to send mentor application email.';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
