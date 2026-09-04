/**
 * Stable course URL slugs — keeps legacy behaviour except C++ titles
 * ("C and C++ Programming" → c-and-cpp-programming, not c-and-c++-programming).
 */
export function slugifyCourseTitle(title = "") {
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/\+\+/g, "cpp")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Previous slug logic (used for redirects from old links). */
export function legacyCourseSlug(title = "") {
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function slugifyCategoryName(name = "") {
  return String(name)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function findCourseBySlug(category, courseSlug) {
  if (!category?.courses || !courseSlug) return null;
  const target = String(courseSlug).trim().toLowerCase();

  return category.courses.find((course) => {
    if (!course?.title) return false;
    const slug = slugifyCourseTitle(course.title);
    const legacy = legacyCourseSlug(course.title);
    return slug === target || legacy === target;
  });
}

export function findCategoryEntry(coursesData, categorySlug) {
  return Object.entries(coursesData).find(
    ([categoryName]) => slugifyCategoryName(categoryName) === categorySlug
  );
}

/** Redirect targets for outdated course slugs. */
export const LEGACY_COURSE_SLUG_REDIRECTS = {
  "c-and-c++-programming": "c-and-cpp-programming",
};
