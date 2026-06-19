import nodemailer from 'nodemailer';

/**
 * Creates and returns a Nodemailer transporter authenticated via Gmail App Password (SMTP).
 * No Google Cloud Console or OAuth required — just an App Password from Google Account settings.
 *
 * Required environment variables:
 *   GMAIL_SENDER       - The email address to send from (e.g. admin@urbancode.in)
 *   GMAIL_APP_PASSWORD - 16-character App Password generated from Google Account > Security > App Passwords
 */
export function getGmailTransporter() {
  const sender = process.env.GMAIL_SENDER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;

  if (!sender || !appPassword) {
    throw new Error(
      'Email is not fully configured. Ensure GMAIL_SENDER and GMAIL_APP_PASSWORD are set in .env.local'
    );
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: sender,
      pass: appPassword,
    },
  });

  return transporter;
}

/**
 * Returns the configured sender email address.
 */
export function getGmailSender() {
  return process.env.GMAIL_SENDER || 'admin@urbancode.in';
}
