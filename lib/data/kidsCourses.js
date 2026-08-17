/** Kids courses for Kidspace enquiry dropdowns — label shown in UI, crmCourse sent to CRM. */
export const KIDS_COURSE_OPTIONS = [
  { course_id: "kids-1", course_name: "Junior Web Developer", crmCourse: "Web development" },
  { course_id: "kids-2", course_name: "Core Python", crmCourse: "Core Python for Kids" },
  { course_id: "kids-3", course_name: "Advanced Python", crmCourse: "Advanced Python" },
  { course_id: "kids-4", course_name: "C Programming", crmCourse: "C" },
  { course_id: "kids-5", course_name: "CPP", crmCourse: "C++" },
  { course_id: "kids-6", course_name: "SQL", crmCourse: "MySQL" },
  { course_id: "kids-7", course_name: "Graphic Designing", crmCourse: "Graphic Designing" },
  { course_id: "kids-8", course_name: "AI & ML", crmCourse: "AIML" },
];

export function getKidsCourseLabel(crmCourse, options = KIDS_COURSE_OPTIONS) {
  const match = options.find(
    (opt) => opt.crmCourse === crmCourse || opt.course_name === crmCourse
  );
  return match?.course_name || crmCourse;
}

export function getKidsCrmCourse(displayName, options = KIDS_COURSE_OPTIONS) {
  const match = options.find(
    (opt) => opt.course_name.toLowerCase() === String(displayName || "").toLowerCase()
  );
  return match?.crmCourse || displayName;
}
