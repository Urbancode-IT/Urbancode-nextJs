import { NextResponse } from "next/server";
import { getGmailTransporter, getGmailSender } from "@/lib/mailer/gmailTransporter";
import { sendExternalEnrollment, extractMobileNumber } from "@/lib/api/externalEnrollment";
import { isGibberish, validateLeadContact } from "@/app/utils/validationUtils";
import { readLeadSource, leadSourceTextLines } from "@/app/utils/leadSource";
import { recordLeadEnquiry } from "@/lib/leadEnquiriesDb";
import { buildAdminEnglishIntakeEmail } from "@/lib/mailer/emailTemplates";

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
    const age          = toText(body?.age, "N/A");
    const occupation   = toText(body?.occupation, "N/A");
    const englishLevel = toText(body?.englishLevel, "N/A");
    const reasons      = toText(body?.reasons, "N/A");
    const focusArea    = toText(body?.focusArea, "N/A");
    const attendedBefore = toText(body?.attendedBefore, "N/A");
    const comfortLevel = toText(body?.comfortLevel, "N/A");
    const hoursPerWeek = toText(body?.hoursPerWeek, "N/A");
    const learningMode = toText(body?.learningMode, "N/A");
    const goals        = toText(body?.goals, "Not specified");

    const contactError = validateLeadContact({ name, email, phone });
    if (contactError) return NextResponse.json({ success: false, message: contactError }, { status: 400 });
    if (body?.goals && isGibberish(String(body.goals))) {
      return NextResponse.json({ success: false, message: "Please enter a valid message." }, { status: 400 });
    }

    const recipient  = process.env.ENQUIRY_TO_EMAIL
      ? `${process.env.ENQUIRY_TO_EMAIL}, zen@urbancode.in, admin@urbancode.in`
      : 'zen@urbancode.in, admin@urbancode.in';
    const sender     = getGmailSender();
    const transporter = getGmailTransporter();

    const adminTpl = buildAdminEnglishIntakeEmail({
      name,
      age,
      email,
      phone,
      occupation,
      englishLevel,
      reasons,
      focusArea,
      attendedBefore,
      comfortLevel,
      hoursPerWeek,
      learningMode,
      goals,
      leadSource,
    });

    const emailPromise = transporter.sendMail({
      from: `"Urbancode" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: adminTpl.subject,
      text: [
        "English Language Course – Student Intake Form Submission",
        "---",
        `Name: ${name}`, `Age: ${age}`, `Email: ${email}`, `Phone: ${phone}`,
        `Occupation: ${occupation}`, `English Level: ${englishLevel}`,
        `Reasons: ${reasons}`, `Focus Area: ${focusArea}`,
        `Attended Before: ${attendedBefore}`, `Comfort Level: ${comfortLevel}`,
        `Hours/Week: ${hoursPerWeek}`, `Mode: ${learningMode}`,
        ...leadSourceTextLines(leadSource),
        `Goals: ${goals}`,
      ].join("\n"),
      html: adminTpl.html,
    });

    const crmPromise = sendExternalEnrollment({
      name,
      mobile_number: extractMobileNumber(phone),
      email,
      course: "English Language Training",
      requirements: `Level: ${englishLevel} | Focus: ${focusArea} | Goals: ${goals}`,
      card_type: "Training Only",
    });

    await Promise.allSettled([emailPromise, crmPromise]);

    await recordLeadEnquiry({
      name,
      email,
      phone,
      topic: englishLevel,
      channel: "english-intake",
      sourcePage: leadSource.page,
      sourceSection: leadSource.section,
      sourceForm: leadSource.form,
      sourceButton: leadSource.button,
    });

    return NextResponse.json({ success: true, message: "Intake form submitted successfully." });
  } catch (error) {
    console.error("English intake email error:", error);
    return NextResponse.json({ success: false, message: error?.message || "Failed to send intake form." }, { status: 500 });
  }
}