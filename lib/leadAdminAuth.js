import { createHmac, timingSafeEqual } from 'crypto';

export const LEAD_ADMIN_COOKIE = 'lead_admin_session';

const PASSWORD = process.env.LEAD_ADMIN_PASSWORD || 'UcLeads@123';
const SECRET = process.env.LEAD_ADMIN_SECRET || PASSWORD;

function expectedToken() {
  return createHmac('sha256', SECRET).update('urbancode-lead-admin').digest('hex');
}

export function checkLeadAdminPassword(password) {
  return String(password || '') === PASSWORD;
}

export function leadAdminSessionValue() {
  return expectedToken();
}

export function isLeadAdminSession(token) {
  if (!token || typeof token !== 'string') return false;
  const expected = expectedToken();
  const left = Buffer.from(token);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}
