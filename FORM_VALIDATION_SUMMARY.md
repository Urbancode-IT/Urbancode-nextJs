# Form Validation Constraints Summary

All inquiry and contact forms have been updated with comprehensive validation constraints for name, email, phone number, and other fields.

## 1. EnquiryPopup.jsx (`app/components/enquirypopup/`)
**Fields:** Name, Email, Phone, Message

### Validation Constraints:
- **Name:**
  - Required ✓
  - Minimum 3 characters
  - Pattern: Letters, spaces, hyphens, apostrophes only
  - Maximum 100 characters
  
- **Email:**
  - Required ✓
  - Valid email format (includes @ and domain)
  - Maximum 255 characters
  
- **Phone:**
  - Required ✓
  - Exactly 10 digits
  - Numeric input only
  - Pattern: `^\d{10}$`
  
- **Message:**
  - Optional
  - Maximum 500 characters

---

## 2. EnquiryFormModal.jsx (`app/components/common/`)
**Fields:** Name, Email, Phone, PIN, Course, Mode, Message, Preferred Date (Demo mode), Preferred Time (Demo mode)

### Validation Constraints:
- **Name:**
  - Required ✓
  - Minimum 3 characters
  - Pattern: Letters, spaces, hyphens, apostrophes only
  - Maximum 100 characters
  
- **Email:**
  - Required ✓
  - Valid email format
  - Maximum 255 characters
  
- **Phone:**
  - Required ✓
  - Exactly 10 digits
  - Numeric input only
  - Pattern: `^\d{10}$`
  
- **PIN:**
  - Optional
  - If provided: exactly 6 digits
  - Pattern: `^\d{6}$`
  
- **Course:**
  - Required ✓
  
- **Mode:**
  - Required ✓
  
- **Demo Mode Fields:**
  - Preferred Date: Required when isDemoMode is true
  - Preferred Time: Required when isDemoMode is true

---

## 3. ContactUs.jsx (`app/components/contact/`)
**Fields:** Name, Email, Mobile, Interest, Message

### Validation Constraints:
- **Name:**
  - Required ✓
  - Minimum 3 characters
  - Pattern: Letters, spaces, hyphens, apostrophes only
  - Maximum 100 characters
  - Frontend validation: 3+ chars with proper format
  
- **Email:**
  - Required ✓
  - Valid email format
  - Maximum 255 characters
  - Frontend validation: Proper email pattern
  
- **Mobile:**
  - Required ✓
  - Exactly 10 digits
  - Numeric input only
  - Maximum 10 characters
  - Pattern: `^\d{10}$`
  - Frontend validation: 10-digit check
  
- **Interest:**
  - Required ✓
  - Select from predefined options
  
- **Message:**
  - Required ✓
  - Minimum 10 characters
  - Maximum 1000 characters
  - Frontend validation: 10+ chars and non-empty

---

## 4. Projects.jsx (`app/projects/components/`)
**Fields:** Name, Email, Phone, Subject, Message

### Validation Constraints:
- **Name:**
  - Required ✓
  - Minimum 3 characters
  - Pattern: Letters, spaces, hyphens, apostrophes only
  - Maximum 100 characters
  - Frontend validation: Proper name format
  
- **Email:**
  - Required ✓
  - Valid email format
  - Maximum 255 characters
  - Frontend validation: Proper email pattern
  
- **Phone:**
  - Required ✓
  - Exactly 10 digits
  - Numeric input only
  - Maximum 10 characters
  - Pattern: `^\d{10}$`
  - Frontend validation: 10-digit check
  
- **Subject:**
  - Required ✓
  - Minimum 5 characters
  - Maximum 200 characters
  - Frontend validation: 5+ chars required
  
- **Message:**
  - Required ✓
  - Minimum 10 characters
  - Maximum 1000 characters
  - Frontend validation: 10-1000 character range

### Additional Notes:
- Added missing `axios` import for API calls
- Enhanced validation logic with detailed error messages
- All form fields disabled during submission

---

## 5. LeadCaptureModal.jsx (`app/compiler/components/Common/`)
**Fields:** Name, Email, Phone

### Validation Constraints:
- **Name:**
  - Required ✓
  - No minimum length enforced (allows flexibility)
  
- **Email:**
  - Required ✓
  - Valid email format (uses EMAIL_REGEX)
  - Pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`
  
- **Phone:**
  - Required ✓
  - Exactly 10 digits
  - Handles normalization (removes +91 country code if present)
  - Cleans input to digits only

### Additional Features:
- Phone normalization function that handles "+91" prefix
- Dual phone field compatibility (accepts both `phone` and `mobile`)
- Local lead storage with API sync
- Fire-and-forget backend submission (doesn't block on response)

---

## Common Validation Rules Applied to All Forms:

### Name Field:
- ✓ Required
- ✓ Minimum 3 characters (most forms)
- ✓ Pattern: `^[a-zA-Z\s'-]+$` (letters, spaces, hyphens, apostrophes)
- ✓ Maximum 100 characters

### Email Field:
- ✓ Required
- ✓ Valid format: `^[^\s@]+@[^\s@]+\.[^\s@]+$`
- ✓ Maximum 255 characters

### Phone Number Field:
- ✓ Required
- ✓ Exactly 10 digits
- ✓ Numeric input only
- ✓ Pattern: `^\d{10}$`
- ✓ HTML5 `inputMode="numeric"` for mobile keyboards

### HTML5 Input Attributes Added:
- `required` - Makes field mandatory
- `minLength` / `maxLength` - Character limits
- `pattern` - Regex validation
- `inputMode="numeric"` - Mobile keyboard optimization
- `disabled` - Disabled during form submission
- `type="email"` - Email validation
- `type="tel"` - Telephone field

---

## Testing Recommendations:

1. **Name Field:**
   - Test with valid names: "John Doe", "Mary-Jane", "O'Brien"
   - Test with invalid: "123", "John@123", names < 3 chars
   
2. **Email Field:**
   - Test with valid: "user@example.com", "test.email+tag@domain.co.uk"
   - Test with invalid: "user@", "@example.com", "user@domain"
   
3. **Phone Field:**
   - Test with valid: "9876543210", "9988776655"
   - Test with invalid: "987654321" (9 digits), "98765432101" (11 digits), "98-7654-3210"
   
4. **Special Cases:**
   - Attempt submission with empty fields
   - Test with spaces only
   - Test copy-paste with extra spaces
   - Test maximum character limits

