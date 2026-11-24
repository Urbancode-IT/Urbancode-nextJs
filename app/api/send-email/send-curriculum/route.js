import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getGmailTransporter, getGmailSender } from '@/lib/mailer/gmailTransporter';
import { validateLeadContact } from '@/app/utils/validationUtils';
import { buildStudentCurriculumEmail } from '@/lib/mailer/emailTemplates';

const toText = (value, fallback = '') => {
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

const isImageUrl = (url) => /\.(?:jpg|jpeg|png)$/i.test(url.split('?')[0]);

const getLocalBrochureAttachment = async (brochureUrl) => {
  if (!brochureUrl || /^https?:\/\//i.test(brochureUrl) || isImageUrl(brochureUrl)) {
    return null;
  }

  const pathname = new URL(brochureUrl, 'http://localhost').pathname;
  if (!pathname.startsWith('/curriculum/')) return null;

  const filename = path.basename(decodeURIComponent(pathname));
  if (!filename.toLowerCase().endsWith('.pdf')) return null;

  try {
    const content = await readFile(path.join(process.cwd(), 'public', 'curriculum', filename));
    return {
      filename,
      content,
      contentType: 'application/pdf',
    };
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      console.error('[send-curriculum] Failed to read local brochure:', error);
    }
    return null;
  }
};

export async function POST(req) {
  try {
    const body = await req.json();

    const name = toText(body?.name, '');
    const email = toText(body?.email, '');
    const course = toText(body?.course, 'Course');
    const brochureUrl = toText(body?.brochureUrl, '');

    const contactError = validateLeadContact({ name, email, requirePhone: false });
    if (contactError) {
      return NextResponse.json({ success: false, message: contactError }, { status: 400 });
    }

    const sender = getGmailSender();
    const transporter = getGmailTransporter();

    const attachments = [];
    let fileFound = false;

    let attachment = await getLocalBrochureAttachment(brochureUrl);

    // Fallback for brochures hosted outside this application.
    if (!attachment && brochureUrl && !isImageUrl(brochureUrl)) {
      try {
        const origin = new URL(req.url).origin;
        const fullUrl = brochureUrl.startsWith('http')
          ? brochureUrl
          : new URL(brochureUrl, origin).toString();

        const response = await fetch(fullUrl, { signal: AbortSignal.timeout(10000) });
        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          const filename = path.basename(new URL(fullUrl).pathname) || 'curriculum.pdf';
          attachment = {
            filename,
            content: Buffer.from(arrayBuffer),
            contentType: 'application/pdf',
          };
        } else {
          console.warn(`Brochure URL returned status: ${response.status}`);
        }
      } catch (fetchErr) {
        console.error('Failed to fetch brochure attachment:', fetchErr);
      }
    }

    if (attachment) {
      fileFound = true;
      attachments.push(attachment);
    } else if (brochureUrl && !isImageUrl(brochureUrl)) {
      console.error(`[send-curriculum] Brochure PDF missing for: ${brochureUrl}`);
      return NextResponse.json(
        { success: false, message: 'Curriculum PDF could not be found. Please try again or contact support.' },
        { status: 500 }
      );
    }

    const courseLower = course.toLowerCase();
    const isLanguageCourse =
      courseLower.includes('ielts') ||
      courseLower.includes('english') ||
      courseLower.includes('pte') ||
      courseLower.includes('duolingo');

    const studentTpl = buildStudentCurriculumEmail({
      name,
      course,
      hasAttachment: fileFound,
      isLanguageCourse,
    });

    await transporter.sendMail({
      from: `"Urbancode" <${sender}>`,
      to: email,
      subject: studentTpl.subject,
      text: studentTpl.text,
      html: studentTpl.html,
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
