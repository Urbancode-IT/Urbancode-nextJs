/**
 * Zen returns { success, count, courses: [{ course_id, course_name, course_type }] }.
 * Older wrappers nested that object under `courses`, so always flatten to an array.
 */
export function normalizeCourses(payload) {
  let list = [];

  if (Array.isArray(payload)) {
    list = payload;
  } else if (Array.isArray(payload?.courses?.courses)) {
    list = payload.courses.courses;
  } else if (Array.isArray(payload?.courses)) {
    list = payload.courses;
  } else if (Array.isArray(payload?.data)) {
    list = payload.data;
  }

  return list
    .map((item) => {
      if (typeof item === "string") {
        const name = item.trim();
        return name ? { course_id: name, course_name: name, course_type: "" } : null;
      }
      if (!item || typeof item !== "object") return null;

      const course_name = String(
        item.course_name || item.name || item.course || ""
      ).trim();
      if (!course_name) return null;

      return {
        course_id: String(item.course_id || item.id || course_name).trim(),
        course_name,
        course_type: String(item.course_type || item.type || "").trim(),
      };
    })
    .filter(Boolean);
}

export function courseOptionLabel(course) {
  if (!course) return "";
  if (typeof course === "string") return course;
  if (course.course_type) {
    return `${course.course_name} (${course.course_type})`;
  }
  return course.course_name;
}
