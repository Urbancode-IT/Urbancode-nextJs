import { NextResponse } from 'next/server';
import { getGmailTransporter, getGmailSender } from '@/lib/mailer/gmailTransporter';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const toText = (value, fallback = '') => {
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

export async function POST(req) {
  try {
    const body = await req.json();

    const name = toText(body?.name, '');
    const email = toText(body?.email, '');
    const course = toText(body?.course, 'Course');
    const brochureUrl = toText(body?.brochureUrl, '');

    if (!name) {
      return NextResponse.json({ success: false, message: 'Name is required.' }, { status: 400 });
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ success: false, message: 'Valid email is required.' }, { status: 400 });
    }

    // --- Spam Validation ---
    const localPart = email.split('@')[0];
    const dotCount = (localPart.match(/\\./g) || []).length;
    if (email.toLowerCase().endsWith('@gmail.com') && dotCount >= 3) {
      return NextResponse.json({ success: false, message: 'Invalid email format.' }, { status: 400 });
    }

    if (name && !name.includes(' ') && name.length > 15) {
      return NextResponse.json({ success: false, message: 'Please provide a valid full name.' }, { status: 400 });
    }
    
    const consonantMashRegex = /[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{7,}/;
    if (name && consonantMashRegex.test(name)) {
      return NextResponse.json({ success: false, message: 'Invalid input detected.' }, { status: 400 });
    }
    // -----------------------

    const sender = getGmailSender();
    const transporter = getGmailTransporter();

    // Prepare attachment if file exists
    const attachments = [];
    let fileFound = false;
    let pdfFileName = '';

    if (brochureUrl && !brochureUrl.endsWith('.jpg') && !brochureUrl.endsWith('.png')) {
      try {
        const origin = new URL(req.url).origin;
        const fullUrl = brochureUrl.startsWith('http')
          ? brochureUrl
          : new URL(brochureUrl, origin).toString();

        const response = await fetch(fullUrl);
        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          fileFound = true;
          pdfFileName = brochureUrl.split('/').pop() || 'curriculum.pdf';
          attachments.push({
            filename: pdfFileName,
            content: buffer,
            contentType: 'application/pdf',
          });
        } else {
          console.warn(`Brochure URL returned status: ${response.status}`);
        }
      } catch (fetchErr) {
        console.error('Failed to fetch brochure attachment:', fetchErr);
      }
    }

    // Short & sweet html message to attract them to enroll
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Your ${course} Curriculum</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f6f8;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
          .email-container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0,0,0,0.05);
            border: 1px solid #eef2f5;
          }
          .header {
            background: linear-gradient(135deg, #036c2d 0%, #17944d 100%);
            padding: 32px 30px;
            text-align: center;
            color: #ffffff;
          }
          .header-logo {
            display: inline-block;
            background: #ffffff;
            padding: 8px 16px;
            border-radius: 10px;
            margin-bottom: 14px;
          }
          .header-logo img {
            display: block;
            height: 48px;
            width: auto;
          }
          .header p {
            margin: 6px 0 0 0;
            font-size: 14px;
            color: #d4f5e2;
            letter-spacing: 0.4px;
          }
          .content {
            padding: 40px 30px;
            color: #2c3e50;
            line-height: 1.7;
          }
          .content h2 {
            font-size: 22px;
            color: #036c2d;
            margin-top: 0;
            margin-bottom: 20px;
          }
          .content p {
            font-size: 15px;
            margin-bottom: 20px;
          }
          .features {
            background-color: #f7f9fb;
            border-left: 4px solid #17944d;
            padding: 20px;
            border-radius: 0 8px 8px 0;
            margin: 25px 0;
          }
          .features-title {
            font-weight: 700;
            color: #036c2d;
            margin-bottom: 10px;
            font-size: 15px;
          }
          .feature-item {
            margin-bottom: 8px;
            font-size: 14px;
          }
          .feature-item strong {
            color: #1a2b3c;
          }
          .cta-box {
            text-align: center;
            margin: 35px 0 10px 0;
          }
          .cta-btn {
            display: inline-block;
            background: linear-gradient(90deg, #036c2d 0%, #17944d 100%);
            color: #ffffff !important;
            text-decoration: none;
            padding: 14px 35px;
            font-weight: 600;
            font-size: 16px;
            border-radius: 30px;
            box-shadow: 0 8px 20px rgba(3, 108, 45, 0.25);
            transition: all 0.3s ease;
          }
          .footer {
            background-color: #1a2b3c;
            padding: 30px;
            text-align: center;
            color: #a0aec0;
            font-size: 12px;
            border-top: 1px solid #2d3748;
          }
          .footer a {
            color: #17944d;
            text-decoration: none;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <div class="header-logo">
              <img src="https://www.urbancode.in/images/home/logo.png" alt="UrbanCode" />
            </div>
            <p>Empowering Next-Gen Tech Talents</p>
          </div>
          <div class="content">
            <h2>Hi ${name},</h2>
            <p>Thank you for your interest in our <strong>${course}</strong> program. Your course curriculum has been successfully delivered and is attached directly to this email!</p>
            
            <p>At UrbanCode, we don't just teach code—we build careers. Our training is structured to transform beginners into highly proficient developers who are ready to excel in the tech industry.</p>
            
            <div class="features">
              <div class="features-title">Why Students Choose UrbanCode:</div>
              <div class="feature-item">🚀 <strong>Industry-Ready Syllabus:</strong> Learn in-demand skills updated for today's market.</div>
              <div class="feature-item">🤝 <strong>1-on-1 Mentorship:</strong> Direct project guidance and reviews from senior developers.</div>
              <div class="feature-item">💼 <strong>Placement Assistance:</strong> Real mock interviews, resume reviews, and direct hiring partner referrals.</div>
              <div class="feature-item">💻 <strong>Interactive Cohorts:</strong> Choose between flexible online and immersive offline classes.</div>
            </div>

            <p>We'd love to invite you for a <strong>Free 1-on-1 Interactive Demo Session</strong>. Let's discuss your career goals and how we can achieve them together.</p>
            
            <div class="cta-box">
              <a href="https://www.urbancode.in/contact-us" class="cta-btn">Book Your Free Demo Class</a>
            </div>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} UrbanCode. All rights reserved.</p>
            <p>Have questions? Email us at <a href="mailto:admin@urbancode.in">admin@urbancode.in</a> or visit <a href="https://www.urbancode.in">www.urbancode.in</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"UrbanCode" <${sender}>`,
      to: email,
      subject: `Your ${course} Course Curriculum from UrbanCode 🚀`,
      text: `Hi ${name},\n\nThank you for your interest in our ${course} program. Your course curriculum is attached to this email.\n\nWhy choose UrbanCode?\n- Industry-Ready Syllabus\n- 1-on-1 Mentorship\n- Placement Assistance\n- Flexible Online/Offline Cohorts\n\nBook your free interactive demo class here: https://www.urbancode.in/contact-us\n\nBest regards,\nThe UrbanCode Team`,
      html: htmlContent,
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: 'Curriculum sent successfully via email.',
      attached: fileFound,
    });
  } catch (error) {
    console.error('Curriculum send email error:', error);
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to send curriculum email.' },
      { status: 500 }
    );
  }
}
