import { createHmac, timingSafeEqual } from "crypto";

export const HOME_CMS_COOKIE = "home_cms_admin_session";

const PASSWORD = process.env.HOME_CMS_PASSWORD || process.env.LEAD_ADMIN_PASSWORD || "UcHome@123";
const SECRET = process.env.HOME_CMS_SECRET || PASSWORD;

function expectedToken() {
  return createHmac("sha256", SECRET).update("urbancode-home-cms-admin").digest("hex");
}

export function checkHomeCmsPassword(password) {
  return String(password || "") === PASSWORD;
}

export function homeCmsSessionValue() {
  return expectedToken();
}

export function isHomeCmsSession(token) {
  if (!token || typeof token !== "string") return false;
  const expected = expectedToken();
  const left = Buffer.from(token);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}
