/**
 * Sends lead data to the external UrbanCode CRM enrollment API.
 * This should be called for all course-related forms EXCEPT IELTS & Study Abroad.
 *
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.mobile_number  - plain digits
 * @param {string} data.email
 * @param {string} data.course
 * @param {string} [data.requirements]
 * @param {string} [data.card_type]
 * @returns {Promise<void>}
 */
export async function sendExternalEnrollment(data) {
  const payload = {
    name: data.name || "",
    mobile_number: data.mobile_number || "",
    email: data.email || "",
    course: data.course || "",
    source: "Website",
    businessunit: "uc",
    requirements: data.requirements || "",
    card_type: data.card_type || "Training Only",
  };

  try {
    await fetch("https://api.zen-urbancode.in/leads/external-enrollment", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "x-api-key": process.env.CRM_API_KEY
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // Non-blocking — log but never break the main form flow
    console.error("[ExternalEnrollment] Failed to send lead:", err);
  }
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
