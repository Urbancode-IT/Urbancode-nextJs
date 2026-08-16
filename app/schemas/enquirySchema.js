import { z } from 'zod';
import { isGibberish } from '../utils/validationUtils';
import { parsePhoneNumberWithError } from 'libphonenumber-js';

// Base text schema with gibberish and character checking
export const nameSchema = z.string()
  .min(1, "Name is required")
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name must be maximum 50 characters")
  .regex(/^[a-zA-Z\s'\-\.]+$/, "Name can contain only letters, spaces, apostrophes, hyphens, and periods")
  .refine(name => !isGibberish(name), {
    message: "Invalid pattern."
  })
  .refine(name => name.trim().length >= 2, {
    message: "Name cannot be just spaces"
  });

export const emailSchema = z.string()
  .min(1, "Email is required")
  .trim()
  .toLowerCase()
  .email("Enter a valid email address");

export const messageSchema = z.string()
  .min(1, "Message is required")
  .min(15, "Message must contain at least 15 characters")
  .max(1000, "Message must be maximum 1000 characters")
  .refine(msg => !isGibberish(msg), {
    message: "Please enter a valid message (invalid pattern detected)"
  });

export const phoneSchema = z.string({
  required_error: "Phone number is required"
})
  .min(1, "Phone number is required")
  .refine((val) => {
    try {
      const phoneNumber = parsePhoneNumberWithError(val);
      return phoneNumber.isValid();
    } catch (error) {
      return false;
    }
  }, {
    message: "Enter a valid phone number"
  });

export const baseEnquirySchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  message: z.string().optional(), // Optional by default, can override
  honeypot: z.string().max(0, "Invalid submission").optional()
});

// Specific schemas for different forms can be extended from baseEnquirySchema
export const contactUsSchema = baseEnquirySchema.extend({
  interest: z.string().min(1, "Please select an interest"),
  selectedCourse: z.string().optional(),
  convenientTime: z.string().min(1, "Please select a convenient time"),
}).superRefine((data, ctx) => {
  if (data.interest === "Course Enquiry" && !data.selectedCourse) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please select a course",
      path: ["selectedCourse"]
    });
  }
});

// Schema for /form Google Ads landing page — course is ALWAYS required
export const enquiryFormSchema = baseEnquirySchema.extend({
  interest: z.string().min(1, "Please select an interest"),
  selectedCourse: z.string().min(1, "Please select a course"),
  convenientTime: z.string().min(1, "Please select a convenient time"),
});

export const popupSchema = baseEnquirySchema.extend({
  message: z.string().optional()
});

export const defaultSchema = baseEnquirySchema;

export const englishLanguageIntakeSchema = z.object({
  fullName: nameSchema,
  age: z.string().min(1, "Age is required"),
  email: emailSchema,
  phone: phoneSchema,
  occupation: z.string().min(1, "Occupation is required"),
  englishLevel: z.string().min(1, "English level is required"),
  reasons: z.array(z.string()).min(1, "Select at least one reason"),
  focusArea: z.string().min(1, "Focus area is required"),
  attendedBefore: z.string().min(1, "Please indicate if you have attended before"),
  comfortLevel: z.string().min(1, "Comfort level is required"),
  hoursPerWeek: z.string().min(1, "Hours per week is required"),
  learningMode: z.string().min(1, "Learning mode is required"),
  goals: z.string().optional().refine(val => !val || !isGibberish(val), "Invalid input in goals"),
  honeypot: z.string().max(0, "Invalid").optional()
});

export const bookDemoSchema = baseEnquirySchema.extend({
  course: z.string().min(1, "Please select a course"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time slot")
});

export const studyAbroadFormSchema = baseEnquirySchema.extend({
  country: z.string().min(1, "Please select a destination"),
  education: z.string().min(1, "Please select your qualification"),
  course: z.string().min(1, "Please enter your preferred course")
});

export const evaluationFormSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  qualification: z.string().min(1, "Qualification is required"),
  
  ieltsTestType: z.string().min(1, "IELTS test type is required"),
  ieltsPurpose: z.string().min(1, "Purpose is required"),
  takenIeltsBefore: z.string().min(1, "Required"),
  previousAttemptDate: z.string().optional(),
  overallBandScore: z.string().optional(),
  listeningScore: z.string().optional(),
  readingScore: z.string().optional(),
  writingScore: z.string().optional(),
  speakingScore: z.string().optional(),
  targetBandScore: z.string().optional(),
  preferredTestDate: z.string().optional(),
  
  englishProficiency: z.string().min(1, "Required"),
  challengingAreas: z.array(z.string()).optional(),
  englishStrengths: z.string().optional(),
  formalEnglishStudy: z.string().optional(),
  englishUsageFrequency: z.string().min(1, "Required"),
  
  trainingType: z.string().min(1, "Required"),
  attendedCoachingBefore: z.string().min(1, "Required"),
  previousTrainingFeedback: z.string().optional(),
  trainingExpectations: z.string().optional(),
  hoursPerWeek: z.string().optional(),
  preferredTiming: z.string().optional(),
  preferredTimingOther: z.string().optional(),
  preferredFormat: z.string().min(1, "Required"),
  
  aboutParagraph: z.string().min(1, "Required").max(2500, "Too long"),
  writingResponse: z.string().min(1, "Required").max(10000, "Too long"),
  honeypot: z.string().max(0, "Invalid").optional()
});

export const projectFormSchema = baseEnquirySchema.extend({
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long")
});

export const portfolioProjectFormSchema = baseEnquirySchema.extend({
  interestedIn: z.string().min(1, "Please select an interest"),
  message: z.string()
    .min(1, "Message is required")
    .min(5, "Message must be at least 5 characters")
    .max(1000, "Message must be maximum 1000 characters")
});




