import { NextResponse } from "next/server";
import { getGmailTransporter, getGmailSender } from "@/lib/mailer/gmailTransporter";
import { sendExternalEnrollment, extractMobileNumber } from "@/lib/api/externalEnrollment";
import { validateLeadContact } from "@/app/utils/validationUtils";
import { readLeadSource } from "@/app/utils/leadSource";
import { recordLeadEnquiry } from "@/lib/leadEnquiriesDb";
import { buildAdminEnglishProficiencyEmail } from "@/lib/mailer/emailTemplates";

const toText = (value, fallback = "N/A") => {
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

export async function POST(req) {
  try {
    const body = await req.json();
    const leadSource = readLeadSource(body, toText);

    const name         = toText(body?.name, "");
    const email        = toText(body?.email, "");
    const phone        = toText(body?.phone, "");
    const pinCode      = toText(body?.pinCode, "N/A");
    const course       = toText(body?.course, "N/A");
    const mode         = toText(body?.mode, "N/A");
    const requirements = toText(body?.requirements, "None");

    const contactError = validateLeadContact({ name, email, phone });
    if (contactError) return NextResponse.json({ success: false, message: contactError }, { status: 400 });

    const recipient  = process.env.ENQUIRY_TO_EMAIL
      ? `${process.env.ENQUIRY_TO_EMAIL}, zen@urbancode.in, admin@urbancode.in`
      : 'zen@urbancode.in, admin@urbancode.in';
    const sender     = getGmailSender();
    const transporter = getGmailTransporter();

    const adminTpl = buildAdminEnglishProficiencyEmail({
      name,
      email,
      phone,
      pinCode,
      course,
      mode,
      requirements,
      leadSource,
    });

    const emailPromise = transporter.sendMail({
      from: `"Urbancode" <${sender}>`,
      to: recipient,
      subject: adminTpl.subject,
      html: adminTpl.html,
      replyTo: email,
    });

    const crmPromise = sendExternalEnrollment({
      name,
      mobile_number: extractMobileNumber(phone),
      email,
      course,
      requirements: `PinCode: ${pinCode} | Mode: ${mode} | Requirements: ${requirements}`,
      card_type: "Training Only",
    });

    await Promise.allSettled([emailPromise, crmPromise]);

    await recordLeadEnquiry({
      name,
      email,
      phone,
      topic: course,
      channel: "english-proficiency",
      sourcePage: leadSource.page,
      sourceSection: leadSource.section,
      sourceForm: leadSource.form,
      sourceButton: leadSource.button,
    });

    return NextResponse.json({ success: true, message: "Enrollment form submitted successfully." }, { status: 200 });

  } catch (error) {
    console.error("Enrollment Form Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
