import { NextResponse } from 'next/server';
import { getGmailTransporter, getGmailSender } from '@/lib/mailer/gmailTransporter';
import { sendExternalEnrollment, extractMobileNumber } from '@/lib/api/externalEnrollment';
import { isGibberish, validateLeadContact } from '@/app/utils/validationUtils';
import { readLeadSource, leadSourceTextLines } from '@/app/utils/leadSource';
import { recordLeadEnquiry } from '@/lib/leadEnquiriesDb';
import { buildAdminInternshipEmail } from '@/lib/mailer/emailTemplates';

const toText = (value, fallback = 'N/A') => {
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

export async function POST(req) {
  try {
    const body = await req.json();
    const leadSource = readLeadSource(body, toText);

    const firstName  = toText(body?.firstName, '');
    const lastName   = toText(body?.lastName, '');
    const name       = toText(body?.name, firstName && lastName ? `${firstName} ${lastName}` : '');
    const email      = toText(body?.email, '');
    const phone      = toText(body?.phone || body?.mobile || body?.mobileNumber, '');
    const program    = toText(body?.program || body?.course || body?.courseName, 'Not specified');
    const experience = toText(body?.experience, 'Not specified');
    const interest   = toText(body?.interest, 'No message provided');
    const portfolio  = toText(body?.portfolio, 'N/A');

    const displayName = name || (firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName || '');

    const contactError = (firstName || lastName)
      ? validateLeadContact({ names: [firstName, lastName], email, phone })
      : validateLeadContact({ name: displayName, email, phone });
    if (contactError) return NextResponse.json({ success: false, message: contactError }, { status: 400 });
    if (interest && interest !== 'No message provided' && isGibberish(interest)) {
      return NextResponse.json({ success: false, message: 'Please enter a valid message.' }, { status: 400 });
    }

    const recipient   = process.env.ENQUIRY_TO_EMAIL
      ? `${process.env.ENQUIRY_TO_EMAIL}, zen@urbancode.in, admin@urbancode.in`
      : 'zen@urbancode.in, admin@urbancode.in';
    const sender      = getGmailSender();
    const transporter = getGmailTransporter();

    const adminTpl = buildAdminInternshipEmail({
      name: displayName,
      email,
      phone,
      program,
      experience,
      interest,
      portfolio,
      leadSource,
    });

    const emailPromise = transporter.sendMail({
      from: `"Urbancode" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: adminTpl.subject,
      text: [
        'New internship application received:',
        `Name: ${displayName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Program: ${program}`,
        `Experience: ${experience}`,
        `Portfolio: ${portfolio}`,
        ...leadSourceTextLines(leadSource),
        `Reason: ${interest}`,
      ].join('\n'),
      html: adminTpl.html,
    });

    const crmPromise = sendExternalEnrollment({
      name: displayName,
      mobile_number: extractMobileNumber(phone),
      email,
      course: program || 'Internship Application',
      requirements: `Experience: ${experience} | Portfolio: ${portfolio} | Reason: ${interest}`,
      card_type: 'Training Only',
    });

    await Promise.allSettled([emailPromise, crmPromise]);

    await recordLeadEnquiry({
      name: displayName,
      email,
      phone,
      topic: program,
      channel: 'internship',
      sourcePage: leadSource.page,
      sourceSection: leadSource.section,
      sourceForm: leadSource.form,
      sourceButton: leadSource.button,
    });

    return NextResponse.json({ success: true, message: 'Application submitted successfully.' });
  } catch (error) {
    console.error('Internship email error:', error);
    const isAuthError = error?.code === 'EAUTH';
    const message = isAuthError
      ? 'Gmail SMTP authentication failed. Verify GMAIL_SENDER and GMAIL_APP_PASSWORD in .env.local.'
      : error?.message || 'Failed to send internship application email.';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
