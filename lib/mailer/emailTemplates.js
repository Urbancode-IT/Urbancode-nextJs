/**
 * Unified Urbancode email design system.
 * One master layout + student / admin content builders.
 * Brand: Urbancode (lowercase c). Logo: production HTTPS asset.
 */

export const EMAIL_BRAND = {
  name: "Urbancode",
  siteUrl: "https://www.urbancode.in",
  contactUrl: "https://www.urbancode.in/contact-us",
  adminEmail: "admin@urbancode.in",
  logoUrl: "https://www.urbancode.in/images/home/logo.png",
  gradient: "linear-gradient(179.32deg, #00b56f -23.31%, #004f30 99.42%)",
  colors: {
    primary: "#00b56f",
    dark: "#004f30",
    light: "#d8f5e8",
    pageBg: "#EEF2F0",
    cardBg: "#FFFFFF",
    text: "#202923",
    muted: "#68736D",
    border: "#CDE8DA",
    softBg: "#F3FAF6",
  },
};

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function toDisplay(value, fallback = "N/A") {
  if (value === undefined || value === null) return fallback;
  if (Array.isArray(value)) return value.length ? value.join(", ") : fallback;
  const text = String(value).trim();
  return text || fallback;
}

function ctaButton(label, href) {
  const { primary } = EMAIL_BRAND.colors;
  const { gradient } = EMAIL_BRAND;
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="uc-cta" style="margin:24px auto 8px;">
      <tr>
        <td align="center" bgcolor="${primary}"
            style="border-radius:8px;background-color:${primary};background-image:${gradient};box-shadow:0 8px 18px rgba(0,79,48,0.22);">
          <a href="${escapeHtml(href)}" class="uc-cta-link"
             style="display:inline-block;padding:11px 22px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;line-height:18px;color:#ffffff;text-decoration:none;border-radius:8px;background-color:${primary};background-image:${gradient};">
            ${escapeHtml(label)}
          </a>
        </td>
      </tr>
    </table>
    <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:${EMAIL_BRAND.colors.muted};text-align:center;">
      Or open: <a href="${escapeHtml(href)}" style="color:${EMAIL_BRAND.colors.dark};word-break:break-all;">${escapeHtml(href)}</a>
    </p>`;
}

function detailsTable(rows = []) {
  const { softBg, border, text, muted } = EMAIL_BRAND.colors;
  const body = rows
    .filter((r) => r && r.label)
    .map((row, index) => {
      const bg = index % 2 === 0 ? softBg : "#FFFFFF";
      const safeLabel = escapeHtml(row.label);
      let valueHtml;
      if (row.href) {
        valueHtml = `<a href="${escapeHtml(row.href)}" style="color:${EMAIL_BRAND.colors.dark};font-weight:600;text-decoration:none;">${escapeHtml(toDisplay(row.value))}</a>`;
      } else if (row.html) {
        valueHtml = row.html;
      } else {
        valueHtml = escapeHtml(toDisplay(row.value));
      }
      return `
        <tr>
          <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:${muted};background:${bg};border-bottom:1px solid ${border};width:38%;vertical-align:top;">${safeLabel}</td>
          <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:${text};background:${bg};border-bottom:1px solid ${border};vertical-align:top;white-space:pre-wrap;">${valueHtml}</td>
        </tr>`;
    })
    .join("");

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
           style="border-collapse:collapse;border:1px solid ${border};border-radius:10px;overflow:hidden;">
      ${body}
    </table>`;
}

function leadSourceRows(leadSource) {
  if (!leadSource) return [];
  return [
    { label: "Page", value: leadSource.page },
    { label: "Section", value: leadSource.section || "Not captured" },
    { label: "Form", value: leadSource.form },
    { label: "Button", value: leadSource.button },
  ];
}

function sectionBlock(title, rows) {
  const { dark, text } = EMAIL_BRAND.colors;
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;">
      <tr>
        <td style="padding:0 0 10px;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:22px;font-weight:700;color:${dark};">${escapeHtml(title)}</p>
        </td>
      </tr>
      <tr>
        <td>${detailsTable(rows)}</td>
      </tr>
    </table>`;
}

/**
 * Master layout — green hero, centered logo, 600px card, shared footer.
 * Motion is progressive (Apple Mail / iOS / some webmail); others fall back static.
 * @param {'student'|'admin'} footerVariant
 */
export function renderMasterEmail({
  documentTitle = "Urbancode",
  preheader = "",
  heading = "",
  heroTitle = "",
  heroSubtitle = "",
  bodyHtml = "",
  footerVariant = "student",
}) {
  const { name, siteUrl, adminEmail, logoUrl, colors, gradient } = EMAIL_BRAND;
  const year = new Date().getFullYear();
  const showHeroCopy = Boolean(heroTitle || heroSubtitle);

  const footerInner =
    footerVariant === "admin"
      ? `
        <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;color:${colors.muted};text-align:center;">
          Urbancode Website Notifications
        </p>
        <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;text-align:center;">
          <a href="${siteUrl}" style="color:${colors.dark};font-weight:700;text-decoration:none;">www.urbancode.in</a>
        </p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:${colors.muted};text-align:center;">
          &copy; ${year} Urbancode. All rights reserved.
        </p>`
      : `
        <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;font-weight:700;color:${colors.text};text-align:center;">
          Urbancode
        </p>
        <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:${colors.muted};text-align:center;">
          Professional training and career development
        </p>
        <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;text-align:center;">
          <a href="${siteUrl}" style="color:${colors.dark};font-weight:700;text-decoration:none;">www.urbancode.in</a>
        </p>
        <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;text-align:center;">
          <a href="mailto:${adminEmail}" style="color:${colors.dark};font-weight:700;text-decoration:none;">${adminEmail}</a>
        </p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:${colors.muted};text-align:center;">
          &copy; ${year} Urbancode. All rights reserved.
        </p>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${escapeHtml(documentTitle)}</title>
  <style type="text/css">
    @keyframes ucFadeUp {
      from { opacity: 0; transform: translateY(14px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes ucSoftPulse {
      0%, 100% { box-shadow: 0 12px 28px rgba(0, 79, 48, 0.28); transform: translateY(0); }
      50% { box-shadow: 0 16px 34px rgba(0, 181, 111, 0.4); transform: translateY(-2px); }
    }
    .uc-card { animation: ucFadeUp 0.55s ease-out both; }
    .uc-hero-copy { animation: ucFadeUp 0.55s ease-out both; }
    .uc-body { animation: ucFadeUp 0.65s ease-out 0.14s both; }
    .uc-cta { animation: ucFadeUp 0.55s ease-out 0.22s both, ucSoftPulse 2.8s ease-in-out 0.9s infinite; }
    .uc-cta-link:hover { filter: brightness(1.06); }
    @media only screen and (max-width: 620px) {
      .uc-card { width: 100% !important; }
      .uc-body-pad { padding: 22px 18px 8px !important; }
      .uc-header-pad { padding: 24px 18px 22px !important; }
      .uc-hero-title { font-size: 28px !important; line-height: 34px !important; }
    }
    @media (prefers-reduced-motion: reduce) {
      .uc-card, .uc-hero-copy, .uc-body, .uc-cta {
        animation: none !important;
      }
    }
  </style>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${colors.pageBg};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:${colors.pageBg};padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="uc-card"
               style="width:100%;max-width:600px;background:${colors.cardBg};border-radius:18px;overflow:hidden;border:1px solid ${colors.border};box-shadow:0 18px 40px rgba(0,79,48,0.14);">

          <!-- Green hero -->
          <tr>
            <td class="uc-header-pad" align="center" bgcolor="${colors.dark}"
                style="background-color:${colors.dark};background-image:${gradient};padding:28px 28px 26px;text-align:center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding:0 0 ${showHeroCopy ? "18px" : "0"};">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="center" bgcolor="#FFFFFF"
                            style="background:#FFFFFF;border-radius:12px;padding:10px 16px;box-shadow:0 8px 18px rgba(0,0,0,0.12);">
                          <img src="${logoUrl}" alt="${name}" width="150" height="auto"
                               style="display:block;margin:0 auto;max-width:150px;height:auto;border:0;" />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${
                  showHeroCopy
                    ? `<tr>
                  <td align="center" class="uc-hero-copy" style="padding:0 8px 0;">
                    ${
                      heroTitle
                        ? `<p class="uc-hero-title" style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:34px;line-height:40px;font-weight:800;color:#ffffff;letter-spacing:-0.4px;">
                      ${escapeHtml(heroTitle)}
                    </p>`
                        : ""
                    }
                    ${
                      heroSubtitle
                        ? `<p style="margin:0 auto;max-width:440px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:rgba(255,255,255,0.92);">
                      ${escapeHtml(heroSubtitle)}
                    </p>`
                        : ""
                    }
                  </td>
                </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="uc-body uc-body-pad" style="padding:28px 28px 8px;font-family:Arial,Helvetica,sans-serif;color:${colors.text};">
              ${
                heading
                  ? `<h1 style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:32px;font-weight:700;color:${colors.text};">${escapeHtml(heading)}</h1>`
                  : ""
              }
              ${bodyHtml}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:22px 28px 26px;background:${colors.softBg};border-top:1px solid ${colors.border};text-align:center;">
              ${footerInner}
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function studentSignOff() {
  const { colors } = EMAIL_BRAND;
  return `
    <p style="margin:28px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      Regards,
    </p>
    <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;font-weight:700;color:${colors.text};">
      Team Urbancode
    </p>`;
}

/* ───────────── 1. Course Enquiry – Student ───────────── */
export function buildStudentCourseEnquiryEmail({ name, course }) {
  const displayName = toDisplay(name, "there");
  const displayCourse = toDisplay(course, "our program");
  const safeName = escapeHtml(displayName);
  const safeCourse = escapeHtml(displayCourse);
  const { colors, contactUrl } = EMAIL_BRAND;

  const bodyHtml = `
    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      Hi ${safeName},
    </p>
    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      Thank you for your interest in the <strong>${safeCourse}</strong> program at Urbancode. We have successfully received your enquiry.
    </p>
    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      Our team will review your requirements and contact you shortly with details about the curriculum, training formats and available schedules.
    </p>
    <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      If you would like to speak with us sooner, you can book a free consultation to discuss your goals and identify the right learning path.
    </p>
    ${ctaButton("Book a Free Consultation", contactUrl)}
    <p style="margin:22px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      We look forward to supporting your learning journey.
    </p>
    ${studentSignOff()}`;

  return {
    subject: `Thank you for your ${displayCourse} enquiry | Urbancode`,
    text: `Hi ${displayName},\n\nThank you for your interest in the ${displayCourse} program at Urbancode. We have successfully received your enquiry.\n\nOur team will review your requirements and contact you shortly.\n\nBook a free consultation: ${contactUrl}\n\nRegards,\nTeam Urbancode\nwww.urbancode.in`,
    html: renderMasterEmail({
      documentTitle: "Course enquiry received",
      preheader: `We received your ${displayCourse} enquiry.`,
      heroTitle: `Hello ${displayName}`,
      heroSubtitle:
        "Our advisors are ready to help you choose the right learning path.",
      bodyHtml,
      footerVariant: "student",
    }),
  };
}

/* ───────────── 2. Curriculum / Brochure – Student ───────────── */
export function buildStudentCurriculumEmail({
  name,
  course,
  hasAttachment = false,
  isLanguageCourse = false,
}) {
  const safeName = escapeHtml(toDisplay(name, "there"));
  const safeCourse = escapeHtml(toDisplay(course, "our program"));
  const { colors, contactUrl, adminEmail } = EMAIL_BRAND;

  const attachmentCopy = hasAttachment
    ? `The course curriculum is attached to this email. It outlines the modules, topics and practical skills covered throughout the program.`
    : `We will send you the detailed curriculum shortly, along with further information about the program.`;

  const whyItems = isLanguageCourse
    ? [
        ["Structured curriculum", "Complete coverage of every language skill and exam component."],
        ["Personalised guidance", "Individual assessment and targeted improvement plans."],
        ["Mock tests and feedback", "Regular practice under exam conditions, with detailed review."],
        ["Communication skills", "Stronger grammar, vocabulary and fluency for academic, professional and everyday use."],
        ["Flexible formats", "Online and offline classes to suit your schedule."],
      ]
    : [
        ["Industry-aligned curriculum", "Content that reflects the skills employers currently look for."],
        ["Project-based learning", "Hands-on experience through real-world projects and assignments."],
        ["Experienced mentors", "Technical guidance and constructive feedback from working professionals."],
        ["Career support", "Resume preparation, mock interviews and placement assistance."],
        ["Flexible formats", "Online and offline training options to suit your schedule."],
      ];

  const whyHtml = whyItems
    .map(
      ([title, desc]) => `
      <tr>
        <td valign="top" width="18" style="padding:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:22px;color:${colors.primary};font-weight:700;">•</td>
        <td style="padding:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:${colors.text};">
          <strong style="color:${colors.dark};">${escapeHtml(title)}:</strong> ${escapeHtml(desc)}
        </td>
      </tr>`
    )
    .join("");

  const bodyHtml = `
    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      Hi ${safeName},
    </p>
    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      Thank you for your interest in <strong>${safeCourse}</strong> at Urbancode.
    </p>
    <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      ${escapeHtml(attachmentCopy)}
    </p>
    <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:24px;font-weight:700;color:${colors.text};">
      Why learners choose Urbancode
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;">
      ${whyHtml}
    </table>
    <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:22px;font-weight:700;color:${colors.text};">
      Your Next Step
    </p>
    <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      Book a free one-to-one demo session to experience our teaching approach and discuss which program best fits your goals.
    </p>
    ${ctaButton("Book Your Free Demo", contactUrl)}
    ${studentSignOff()}`;

  return {
    subject: `Your ${toDisplay(course, "course")} curriculum | Urbancode`,
    text: `Hi ${toDisplay(name, "there")},\n\nThank you for your interest in ${toDisplay(course, "our program")} at Urbancode.\n\n${attachmentCopy}\n\nBook your free demo: ${contactUrl}\n\nRegards,\nTeam Urbancode\n${adminEmail}\nwww.urbancode.in`,
    html: renderMasterEmail({
      documentTitle: "Your curriculum",
      preheader: `Your ${toDisplay(course, "course")} curriculum from Urbancode.`,
      heroTitle: "Your curriculum",
      heroSubtitle:
        "Explore the modules, projects and skills covered in your program.",
      bodyHtml,
      footerVariant: "student",
    }),
  };
}

/* ───────────── Admin notification builder ───────────── */
export function buildAdminNotificationEmail({
  subject,
  heading,
  intro,
  introHtml,
  detailsHeading = "Submitted Details",
  detailRows = [],
  leadSource,
  actionText,
  replyEmail,
  replyName,
  replySubject,
  sections,
}) {
  const { colors } = EMAIL_BRAND;
  const nameForReply = toDisplay(replyName, "applicant");
  const mailto = `mailto:${encodeURIComponent(replyEmail || "")}?subject=${encodeURIComponent(replySubject || `Re: Your message to Urbancode`)}`;

  const allRows = [...detailRows, ...leadSourceRows(leadSource)];

  const detailsHtml = sections?.length
    ? sections.map((s) => sectionBlock(s.title, s.rows)).join("")
    : `
      <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:22px;font-weight:700;color:${colors.dark};">
        ${escapeHtml(detailsHeading)}
      </p>
      ${detailsTable(allRows)}`;

  const leadOnly =
    sections?.length && leadSource
      ? `
      <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:22px;font-weight:700;color:${colors.dark};">
        Source
      </p>
      ${detailsTable(leadSourceRows(leadSource))}`
      : "";

  const introContent = introHtml || escapeHtml(intro || "");

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;">
      <tr>
        <td style="background:${colors.light};border-left:4px solid ${colors.primary};border-radius:0 8px 8px 0;padding:12px 14px;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:19px;font-weight:700;color:${colors.dark};">
            Website notification — action required
          </p>
        </td>
      </tr>
    </table>
    <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${colors.text};">
      ${introContent}
    </p>
    ${leadOnly}
    ${detailsHtml}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0 0;">
      <tr>
        <td style="background:${colors.softBg};border:1px solid ${colors.border};border-radius:10px;padding:16px 18px;">
          <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:22px;font-weight:700;color:${colors.dark};">
            Recommended Action
          </p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:${colors.text};">
            ${escapeHtml(actionText)}
          </p>
        </td>
      </tr>
    </table>
    ${ctaButton(`Reply to ${nameForReply}`, mailto)}`;

  return {
    subject,
    html: renderMasterEmail({
      documentTitle: heading,
      preheader: intro || heading,
      heroTitle: heading,
      heroSubtitle: "New website submission — please review and follow up.",
      bodyHtml,
      footerVariant: "admin",
    }),
  };
}

/* Convenience admin templates */

export function buildAdminCourseEnquiryEmail(data) {
  const course = toDisplay(data.course, "Course Enquiry");
  const name = toDisplay(data.name, "Student");
  return buildAdminNotificationEmail({
    subject: `New course enquiry: ${course} | ${name}`,
    heading: "New Course Enquiry",
    intro:
      "A prospective student has submitted a course enquiry on the Urbancode website.",
    detailRows: [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email, href: `mailto:${data.email}` },
      { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
      { label: "Course", value: course },
      { label: "Mode", value: data.mode },
      { label: "PIN Code", value: data.pin },
      { label: "Message", value: data.message },
    ],
    leadSource: data.leadSource,
    actionText:
      "Contact the student with course information, available formats and next steps.",
    replyEmail: data.email,
    replyName: name,
    replySubject: `Re: Your enquiry for ${course} at Urbancode`,
  });
}

export function buildAdminContactEmail(data) {
  const name = toDisplay(data.name, "Visitor");
  return buildAdminNotificationEmail({
    subject: `New contact message | ${name}`,
    heading: "New Contact Message",
    intro:
      "A visitor has sent a message through the Contact Us form on the Urbancode website.",
    detailRows: [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email, href: `mailto:${data.email}` },
      { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
      { label: "Interest", value: data.interest },
      { label: "Best Time to Call", value: data.convenientTime },
      { label: "Message", value: data.message },
    ],
    leadSource: data.leadSource,
    actionText:
      "Review the message and respond using the contact details provided.",
    replyEmail: data.email,
    replyName: name,
    replySubject: "Re: Your contact message at Urbancode",
  });
}

export function buildAdminProjectEnquiryEmail(data) {
  const subject = toDisplay(data.subject, "Project Enquiry");
  const name = toDisplay(data.name, "Client");
  return buildAdminNotificationEmail({
    subject: `New project enquiry: ${subject} | ${name}`,
    heading: "New Project Enquiry",
    intro:
      "A prospective client has submitted a project enquiry on the Urbancode website.",
    detailRows: [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email, href: `mailto:${data.email}` },
      { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
      { label: "Subject", value: subject },
      { label: "Message", value: data.message },
    ],
    leadSource: data.leadSource,
    actionText:
      "Review the requirements and contact the client to discuss scope, technical needs and next steps.",
    replyEmail: data.email,
    replyName: name,
    replySubject: `Re: Your project enquiry (${subject}) at Urbancode`,
  });
}

export function buildAdminInternshipEmail(data) {
  const program = toDisplay(data.program, "Internship");
  const name = toDisplay(data.name, "Candidate");
  return buildAdminNotificationEmail({
    subject: `New internship application: ${program} | ${name}`,
    heading: "New Internship Application",
    intro:
      "A candidate has applied for an internship program on the Urbancode website.",
    detailsHeading: "Application Details",
    detailRows: [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email, href: `mailto:${data.email}` },
      { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
      { label: "Program", value: program },
      { label: "Experience", value: data.experience },
      { label: "Interest / Message", value: data.interest },
      { label: "Portfolio", value: data.portfolio },
    ],
    leadSource: data.leadSource,
    actionText:
      "Review the candidate's qualifications and program preferences, then proceed with the appropriate follow-up.",
    replyEmail: data.email,
    replyName: name,
    replySubject: `Re: Your internship application at Urbancode`,
  });
}

export function buildAdminMentorEmail(data) {
  const name = toDisplay(data.name, "Applicant");
  return buildAdminNotificationEmail({
    subject: `New mentor application | ${name}`,
    heading: "New Mentor Application",
    intro: "A professional has applied to become a mentor at Urbancode.",
    detailsHeading: "Application Details",
    detailRows: [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email, href: `mailto:${data.email}` },
      { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
      { label: "Experience", value: data.experience },
      { label: "Interest / Message", value: data.interest },
    ],
    leadSource: data.leadSource,
    actionText:
      "Review the applicant's background, expertise and mentoring interests, then contact them to discuss the next steps in the selection process.",
    replyEmail: data.email,
    replyName: name,
    replySubject: "Re: Your mentor application at Urbancode",
  });
}

export function buildAdminEnglishIntakeEmail(data) {
  const name = toDisplay(data.name, "Student");
  const englishLevel = toDisplay(data.englishLevel, "N/A");
  return buildAdminNotificationEmail({
    subject: `New English intake form: ${name} | ${englishLevel}`,
    heading: "New English Language Intake",
    intro:
      "A prospective student has completed the English Language Intake Form on the Urbancode website.",
    detailsHeading: "Intake Details",
    detailRows: [
      { label: "Full Name", value: data.name },
      { label: "Age", value: data.age },
      { label: "Email", value: data.email, href: `mailto:${data.email}` },
      { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
      { label: "Occupation", value: data.occupation },
      { label: "English Level", value: englishLevel },
      { label: "Reasons for Improvement", value: data.reasons },
      { label: "Focus Area", value: data.focusArea },
      { label: "Attended Course Before", value: data.attendedBefore },
      { label: "Comfort Level", value: data.comfortLevel },
      { label: "Hours per Week", value: data.hoursPerWeek },
      { label: "Preferred Mode", value: data.learningMode },
      { label: "Goals", value: data.goals },
    ],
    leadSource: data.leadSource,
    actionText:
      "Review the student's current level, goals and preferences to identify the most suitable program, then follow up to discuss the recommended learning path.",
    replyEmail: data.email,
    replyName: name,
    replySubject: "Re: Your English language intake at Urbancode",
  });
}

export function buildAdminEnglishProficiencyEmail(data) {
  const name = toDisplay(data.name, "Student");
  const firstName = name.split(" ")[0] || name;
  const course = toDisplay(data.course, "English Proficiency");
  return buildAdminNotificationEmail({
    subject: `New English proficiency enquiry: ${name} | ${course}`,
    heading: "New English Proficiency Enquiry",
    intro: `A user has submitted the English Proficiency Form on the Urbancode website and expressed interest in the ${course} program.`,
    introHtml: `A user has submitted the English Proficiency Form on the Urbancode website and expressed interest in the <strong>${escapeHtml(course)}</strong> program.`,
    detailsHeading: "Submission Details",
    detailRows: [
      { label: "Full Name", value: data.name },
      { label: "Email", value: data.email, href: `mailto:${data.email}` },
      { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
      { label: "Pin Code", value: data.pinCode },
      { label: "Course", value: course },
      { label: "Mode", value: data.mode },
      { label: "Requirements", value: data.requirements },
    ],
    leadSource: data.leadSource,
    actionText:
      "Review the submission and contact the student to discuss their current proficiency, learning requirements and suitable training options.",
    replyEmail: data.email,
    replyName: firstName,
    replySubject: `Re: Your ${course} enquiry at Urbancode`,
  });
}

export function buildAdminIeltsEvaluationEmail(data) {
  const name = toDisplay(data.name, "Student");
  const body = data.body || {};
  const section1 = [
    { label: "Full Name", value: name },
    { label: "Email", value: data.email, href: `mailto:${data.email}` },
    { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
    { label: "Date of Birth", value: body.dateOfBirth },
    { label: "Educational Qualification", value: body.qualification },
  ];
  const section2 = [
    { label: "IELTS Test Type", value: body.ieltsTestType },
    { label: "Purpose", value: body.ieltsPurpose },
    { label: "Taken IELTS Before", value: body.takenIeltsBefore },
    ...(body.takenIeltsBefore === "Yes"
      ? [
          { label: "Previous Attempt Date", value: body.previousAttemptDate },
          { label: "Overall Band Score", value: body.overallBandScore },
          { label: "Listening Score", value: body.listeningScore },
          { label: "Reading Score", value: body.readingScore },
          { label: "Writing Score", value: body.writingScore },
          { label: "Speaking Score", value: body.speakingScore },
          { label: "Target Band Score", value: body.targetBandScore },
          { label: "Preferred Test Date", value: body.preferredTestDate },
        ]
      : []),
  ];
  const section3 = [
    { label: "English Proficiency", value: body.englishProficiency },
    { label: "Challenging Areas", value: body.challengingAreas },
    { label: "Strengths", value: body.englishStrengths },
    { label: "Formal English Study", value: body.formalEnglishStudy },
    { label: "English Usage Frequency", value: body.englishUsageFrequency },
  ];
  const section4 = [
    { label: "Training Type", value: body.trainingType },
    { label: "Attended Coaching Before", value: body.attendedCoachingBefore },
    { label: "Previous Training Feedback", value: body.previousTrainingFeedback },
    { label: "Training Expectations", value: body.trainingExpectations },
    { label: "Hours Per Week", value: body.hoursPerWeek },
    {
      label: "Preferred Timing",
      value:
        body.preferredTiming === "Other"
          ? `Other (${toDisplay(body.preferredTimingOther, "Not specified")})`
          : body.preferredTiming,
    },
    { label: "Preferred Format", value: body.preferredFormat },
  ];
  const section5 = [
    { label: "About Paragraph", value: body.aboutParagraph },
    { label: "Writing Task Response", value: body.writingResponse },
  ];

  return buildAdminNotificationEmail({
    subject: `New IELTS / PTE evaluation request | ${name}`,
    heading: "New IELTS / PTE Evaluation Request",
    intro:
      "A student has submitted an evaluation request through the Study Abroad section of the Urbancode website. The details are organised into five sections below.",
    leadSource: data.leadSource,
    sections: [
      { title: "Section 1 — Student Details", rows: section1 },
      { title: "Section 2 — IELTS Goal & Background", rows: section2 },
      { title: "Section 3 — English Language Profile", rows: section3 },
      { title: "Section 4 — Learning Requirements", rows: section4 },
      { title: "Section 5 — Diagnostics", rows: section5 },
    ],
    actionText:
      "Assess the student's current proficiency and areas for improvement, then contact them to discuss preparation strategies and suitable training options.",
    replyEmail: data.email,
    replyName: name,
    replySubject: "Re: Your IELTS / PTE evaluation at Urbancode",
  });
}
