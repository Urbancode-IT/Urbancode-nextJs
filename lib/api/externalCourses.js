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

export function findZenCourseById(courses = [], courseId = "") {
  const id = String(courseId || "").trim();
  if (!id) return null;
  return courses.find((course) => course.course_id === id) || null;
}

export function findZenCourseByName(courses = [], name = "") {
  const raw = String(name || "").trim();
  if (!raw) return null;
  return courses.find(
    (course) => course.course_name.toLowerCase() === raw.toLowerCase()
  ) || null;
}

/** Resolve a dropdown value (course_id or legacy course_name) to Zen CRM fields. */
export function resolveZenCourseSelection(selectedValue, courses = []) {
  const value = String(selectedValue || "").trim();
  if (!value) {
    return { course_name: "", course_id: "", label: "" };
  }

  const byId = findZenCourseById(courses, value);
  if (byId) {
    return {
      course_name: byId.course_name,
      course_id: byId.course_id,
      label: courseOptionLabel(byId),
    };
  }

  const byName = findZenCourseByName(courses, value);
  if (byName) {
    return {
      course_name: byName.course_name,
      course_id: byName.course_id,
      label: courseOptionLabel(byName),
    };
  }

  return { course_name: value, course_id: "", label: value };
}

/** Match ?course= URL param to a dropdown value (prefers course_id). */
export function matchZenCourseFromUrl(courseParam, courses = []) {
  if (!courseParam || !courses.length) return "";
  const resolved = resolveZenCourseSelection(courseParam, courses);
  return resolved.course_id || resolved.course_name || courseParam;
}

/** True when value looks like a Zen CRM course_id (e.g. CRS-C-001). */
export function isZenCourseId(value = "") {
  return /^CRS-/i.test(String(value || "").trim());
}

/** Options for native select / FormSelect: value = course_id, label = display name. */
export function zenCourseSelectOptions(courses = []) {
  return courses.map((course) => ({
    value: course.course_id,
    label: courseOptionLabel(course),
  }));
}
