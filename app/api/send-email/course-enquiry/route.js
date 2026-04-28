import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const toText = (value, fallback = 'N/A') => {
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = (process.env.SMTP_USER || '').trim();
  // Gmail app password is often pasted with spaces; normalize it.
  const pass = (process.env.SMTP_PASS || '').trim().replace(/\s+/g, '');

  if (!host || !user || !pass) {
    throw new Error('SMTP is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and SMTP_PORT.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
};

export async function POST(req) {
  try {
    const body = await req.json();

    const name = toText(body?.name, '');
    const email = toText(body?.email, '');
    const phone = toText(body?.phone || body?.mobile || body?.phoneNumber || body?.mobileNumber, '');
    const course = toText(body?.course || body?.courseName || body?.program, 'Course Enquiry');
    const mode = toText(body?.mode, 'Not specified');
    const pin = toText(body?.pin, 'N/A');
    const message = toText(body?.message, 'No message provided');

    if (!name) {
      return NextResponse.json({ success: false, message: 'Name is required.' }, { status: 400 });
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ success: false, message: 'Valid email is required.' }, { status: 400 });
    }
    if (!phone) {
      return NextResponse.json({ success: false, message: 'Phone number is required.' }, { status: 400 });
    }

    const recipient = process.env.ENQUIRY_TO_EMAIL || 'urbancodeitteam@gmail.com';
    const sender =
      process.env.ENQUIRY_FROM_EMAIL ||
      process.env.SMTP_FROM ||
      process.env.SMTP_USER;
    const transporter = getTransporter();

    await transporter.sendMail({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `New Course Enquiry - ${course}`,
      text: [
        'New course enquiry received:',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Course: ${course}`,
        `Mode: ${mode}`,
        `PIN: ${pin}`,
        `Message: ${message}`,
      ].join('\n'),
      html: `
        <h2>New Course Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Mode:</strong> ${mode}</p>
        <p><strong>PIN:</strong> ${pin}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully.' });
  } catch (error) {
    console.error('Course enquiry email error:', error);
    const isAuthError = error?.code === 'EAUTH' || error?.responseCode === 535;
    const message = isAuthError
      ? 'SMTP authentication failed. Verify Gmail App Password and 2-Step Verification.'
      : error?.message || 'Failed to send enquiry email.';
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
