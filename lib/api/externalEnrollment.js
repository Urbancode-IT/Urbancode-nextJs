import { fetchCrmCourses, resolveEnrollmentCourse, findCrmCourseById } from "./resolveCrmCourse";

/**
 * Sends lead data to the external UrbanCode CRM enrollment API.
 * This should be called for all course-related forms EXCEPT IELTS & Study Abroad.
 *
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.mobile_number  - plain digits
 * @param {string} data.email
 * @param {string} data.course
 * @param {string} [data.course_id]
 * @param {string} [data.requirements]
 * @param {string} [data.card_type]
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function sendExternalEnrollment(data) {
  const rawCourse = String(data.course || "").trim();

  if (shouldSkipCrm(rawCourse)) {
    return { ok: true, skipped: true };
  }

  if (!process.env.CRM_API_KEY) {
    console.error("[ExternalEnrollment] CRM_API_KEY is missing");
    return { ok: false, error: "Missing CRM_API_KEY" };
  }

  const crmCourses = await fetchCrmCourses();
  let course = resolveEnrollmentCourse(
    { course: rawCourse, course_id: data.course_id },
    crmCourses
  );

  // Zen only accepts courses from its master list — never send an unknown title.
  const knownNames = crmCourses
    .map((item) => (typeof item === "string" ? item : item?.course_name))
    .filter(Boolean);
  const isKnown = knownNames.some(
    (name) => String(name).toLowerCase() === String(course).toLowerCase()
  );
  if (!isKnown && knownNames.length > 0) {
    const fallback =
      knownNames.find((name) => name === "MERN") ||
      knownNames.find((name) => name === "other") ||
      knownNames[0];
    console.warn(
      `[ExternalEnrollment] "${course}" not in Zen list — falling back to "${fallback}"`
    );
    course = fallback;
  }

  const matchedCourse =
    findCrmCourseById(data.course_id, crmCourses) ||
    crmCourses.find(
      (item) =>
        typeof item === "object" &&
        String(item.course_name || "").toLowerCase() === String(course).toLowerCase()
    );

  const requirements = [
    rawCourse ? `Website course: ${rawCourse}` : "",
    data.requirements || "",
  ]
    .filter(Boolean)
    .join(" | ");

  if (rawCourse && rawCourse !== course) {
    console.info(`[ExternalEnrollment] Mapped course "${rawCourse}" -> "${course}"`);
  }

  const payload = {
    name: data.name || "",
    mobile_number: data.mobile_number || "",
    email: data.email || "",
    course,
    source: "Website",
    businessunit: "uc",
    requirements,
    card_type: data.card_type || "Training Only",
  };

  const resolvedCourseId = matchedCourse?.course_id || data.course_id;
  if (resolvedCourseId) {
    payload.course_id = resolvedCourseId;
  }

  try {
    const response = await fetch("https://api.zen-urbancode.in/leads/external-enrollment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.CRM_API_KEY,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const bodyText = await response.text();
    if (!response.ok) {
      // Retry once with MERN/other if Zen still rejects the course name
      if (
        response.status === 400 &&
        /not found/i.test(bodyText) &&
        course !== "MERN" &&
        course !== "other"
      ) {
        const retryCourse =
          knownNames.find((name) => name === "MERN") ||
          knownNames.find((name) => name === "other");
        if (retryCourse) {
          const retryMatch = crmCourses.find(
            (item) =>
              typeof item === "object" &&
              String(item.course_name || "").toLowerCase() === retryCourse.toLowerCase()
          );
          const retryPayload = {
            ...payload,
            course: retryCourse,
            course_id: retryMatch?.course_id || undefined,
            requirements: [
              rawCourse ? `Website course: ${rawCourse}` : "",
              `Zen fallback from rejected course: ${course}`,
              data.requirements || "",
            ]
              .filter(Boolean)
              .join(" | "),
          };
          console.warn(
            `[ExternalEnrollment] Retrying with "${retryCourse}" after Zen rejected "${course}"`
          );
          const retryRes = await fetch("https://api.zen-urbancode.in/leads/external-enrollment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.CRM_API_KEY,
            },
            body: JSON.stringify(retryPayload),
            cache: "no-store",
          });
          const retryText = await retryRes.text();
          if (retryRes.ok) return { ok: true, retried: true };
          console.error("[ExternalEnrollment] CRM retry rejected:", retryRes.status, retryText);
          return { ok: false, error: retryText || `Status ${retryRes.status}` };
        }
      }

      console.error("[ExternalEnrollment] CRM rejected lead:", response.status, bodyText);
      return { ok: false, error: bodyText || `Status ${response.status}` };
    }

    return { ok: true };
  } catch (err) {
    console.error("[ExternalEnrollment] Failed to send lead:", err);
    return { ok: false, error: err?.message || "Network error" };
  }
}

function shouldSkipCrm(course) {
  return /^study abroad/i.test(course)
    || /^study in /i.test(course)
    || /ielts/i.test(course);
}

/**
 * Strips country code / formatting and returns the last 10 digits.
 * e.g. "+91 98765 43210" → "9876543210"
 *      "9876543210"       → "9876543210"
 */
export function extractMobileNumber(phone = "") {
  const digits = String(phone).replace(/\D/g, "");
  // If longer than 10 digits (has country code prefix) take the last 10
  return digits.length > 10 ? digits.slice(-10) : digits;
}
