export const isGibberish = (text) => {
  if (!text) return false;
  // Check for repeating characters (e.g., AAAAAAAAA, 1111111) - more than 4 times
  const repeatRegex = /(.)\1{4,}/;
  if (repeatRegex.test(text)) return true;

  // Check for consonant mash (e.g., dfghjklm) - 6 or more consonants in a row
  const consonantMashRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{6,}/;
  if (consonantMashRegex.test(text)) return true;

  // Check for common keyboard patterns
  const keyboardPatterns = [
    'asdfgh', 'qwerty', 'zxcvbn', '12345', '09876', 'qweasd', 'asdqwe'
  ];
  const lowerText = text.toLowerCase();
  for (const pattern of keyboardPatterns) {
    if (lowerText.includes(pattern)) return true;
  }

  return false;
};
