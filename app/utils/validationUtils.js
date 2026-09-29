import { parsePhoneNumberFromString } from 'libphonenumber-js';

const NAME_PATTERN = /^[a-zA-Z\s'.-]+$/;
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Carrier addresses that turn an email into an SMS. Bots use these to spam inboxes.
const SMS_GATEWAY_DOMAINS = new Set([
  'txt.att.net',
  'mms.att.net',
  'page.att.net',
  'cingularme.com',
  'vtext.com',
  'vzwpix.com',
  'tmomail.net',
  'sms.myboostmobile.com',
  'myboostmobile.com',
  'messaging.sprintpcs.com',
  'pm.sprint.com',
  'vmobl.com',
  'vmpix.com',
  'mmst5.tracfone.com',
  'mypixmessages.com',
  'mms.cricketwireless.net',
  'sms.cricketwireless.net',
  'msg.fi.google.com',
  'text.republicwireless.com',
  'sms.rogers.com',
  'pcs.rogers.com',
  'txt.bell.ca',
  'txt.bellmobility.ca',
  'mms.bell.ca',
  'msg.telus.com',
  'txt.telusmobility.com',
  'fido.ca',
  'sms.fido.ca',
  'mms.alltelwireless.com',
  'sms.alltelwireless.com',
  'text.wireless.alltel.com',
  'mymetropcs.com',
  'viaerosms.com',
  'cwemail.com',
  'gocbw.com',
]);

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com',
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.org',
  '10minutemail.com',
  'tempmail.com',
  'temp-mail.org',
  'yopmail.com',
  'trashmail.com',
  'getnada.com',
  'sharklasers.com',
  'dispostable.com',
  'maildrop.cc',
  'fakeinbox.com',
  'throwawaymail.com',
  'mailnesia.com',
  'tempail.com',
  'emailondeck.com',
  'moakt.com',
  'mintemail.com',
  'guerrillamail.biz',
  'spam4.me',
  'trashmail.de',
]);

const domainMatches = (domain, list) => {
  if (list.has(domain)) return true;
  for (const blocked of list) {
    if (domain.endsWith(`.${blocked}`)) return true;
  }
  return false;
};

const hasChaoticCasing = (text) => {
  const words = String(text).split(/[^A-Za-z]+/).filter(Boolean);
  for (const word of words) {
    if (word.length < 4) continue;
    const letters = word.split('');
    const upper = letters.filter((char) => char !== char.toLowerCase()).length;
    if (upper === 0 || upper === letters.length) continue;

    let internalCaps = 0;
    for (let i = 1; i < letters.length; i += 1) {
      const char = letters[i];
      if (char !== char.toLowerCase()) internalCaps += 1;
    }
    // Real names are title case, all lower, or all caps.
    // A random token like nJFeowtbABUCRCTbGbFQ has many capitals after the first letter.
    if (internalCaps >= 3) return true;
  }
  return false;
};

export const isGibberish = (text) => {
  if (!text) return false;
  const value = String(text);

  if (/(.)\1{4,}/.test(value)) return true;

  if (/[bcdfghjklmnpqrstvwxyz]{6,}/i.test(value)) return true;

  const keyboardPatterns = [
    'asdfgh', 'qwerty', 'zxcvbn', '12345', '09876', 'qweasd', 'asdqwe'
  ];
  const lowerText = value.toLowerCase();
  for (const pattern of keyboardPatterns) {
    if (lowerText.includes(pattern)) return true;
  }

  const words = lowerText.split(/[^a-z]+/).filter((word) => word.length >= 5);
  for (const word of words) {
    if (!/[aeiouy]/.test(word)) return true;
  }

  return false;
};

export const isSpamName = (text) => hasChaoticCasing(text) || isGibberish(text);

export const getNameError = (name, label = 'Name') => {
  const value = String(name || '').trim().replace(/\s+/g, ' ');
  if (!value) return `${label} is required.`;
  if (value.length < 2) return `${label} must be at least 2 characters.`;
  if (value.length > 50) return `${label} must be at most 50 characters.`;
  if (!NAME_PATTERN.test(value)) {
    return `${label} can contain only letters, spaces, apostrophes, hyphens, and periods.`;
  }
  if (isSpamName(value)) return `Please enter a valid ${label.toLowerCase()}.`;
  return null;
};

export const getEmailError = (email) => {
  const value = String(email || '').trim().toLowerCase();
  if (!value) return 'Email is required.';
  if (value.length > 254) return 'Email is too long.';
  if (!EMAIL_PATTERN.test(value) || value.includes('..')) return 'Enter a valid email address.';

  const at = value.lastIndexOf('@');
  const local = value.slice(0, at);
  const domain = value.slice(at + 1);
  if (!local || !domain || domain.startsWith('.') || domain.endsWith('.')) {
    return 'Enter a valid email address.';
  }

  if (domainMatches(domain, SMS_GATEWAY_DOMAINS) || domainMatches(domain, DISPOSABLE_EMAIL_DOMAINS)) {
    return 'Please enter a valid personal or work email address.';
  }

  const letters = local.replace(/[^a-z]/g, '');
  const digits = local.replace(/\D/g, '');
  if (!letters && digits.length >= 7) {
    return 'Please enter a valid personal or work email address.';
  }

  if ((domain === 'gmail.com' || domain === 'googlemail.com') && (local.match(/\./g) || []).length >= 3) {
    return 'Please enter a valid personal or work email address.';
  }

  const localForGibberish = local.replace(/[0-9._+-]/g, '');
  if (localForGibberish && isGibberish(localForGibberish)) {
    return 'Please enter a valid personal or work email address.';
  }

  return null;
};

export const getPhoneError = (phone) => {
  const value = String(phone || '').trim();
  if (!value) return 'Phone number is required.';
  if (!value.startsWith('+')) {
    return 'Select a country code and enter your phone number.';
  }

  const parsed = parsePhoneNumberFromString(value);
  if (!parsed || !parsed.isValid()) {
    return 'Enter a valid phone number for the selected country.';
  }

  const national = String(parsed.nationalNumber || '');
  if (/^(\d)\1+$/.test(national) || /^(?:0123456789|1234567890)$/.test(national)) {
    return 'Enter a valid phone number for the selected country.';
  }

  // Indian mobiles are 10 digits and start with 6, 7, 8, or 9.
  if (parsed.country === 'IN' && !/^[6-9]\d{9}$/.test(national)) {
    return 'Enter a valid phone number for the selected country.';
  }

  return null;
};

export const validateLeadContact = ({
  name,
  names,
  email,
  phone,
  requirePhone = true,
} = {}) => {
  const nameValues = Array.isArray(names) && names.length ? names : [name];
  for (const item of nameValues) {
    const nameError = getNameError(item);
    if (nameError) return nameError;
  }

  const emailError = getEmailError(email);
  if (emailError) return emailError;

  const hasPhone = String(phone || '').trim().length > 0;
  if (requirePhone || hasPhone) {
    const phoneError = getPhoneError(phone);
    if (phoneError) return phoneError;
  }

  return null;
};
