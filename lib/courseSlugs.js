/**
 * Stable course URL slugs — keeps legacy behaviour except C++ titles
 * ("C and C++ Programming" → c-and-cpp-programming, not c-and-c++-programming).
 */
export function slugifyCourseTitle(title = "") {
  return String(title)
    .toLowerCase()
    .replace(/\+\+/g, "cpp")
    .replace(/\s+/g, "-");
}

/** Previous slug logic (used for redirects from old links). */
export function legacyCourseSlug(title = "") {
  return String(title).toLowerCase().replace(/\s+/g, "-");
}

export function slugifyCategoryName(name = "") {
  return String(name).toLowerCase().replace(/\s+/g, "-");
}

export function findCourseBySlug(category, courseSlug) {
  if (!category?.courses || !courseSlug) return null;

  return category.courses.find((course) => {
    if (!course?.title) return false;
    const slug = slugifyCourseTitle(course.title);
    const legacy = legacyCourseSlug(course.title);
    return slug === courseSlug || legacy === courseSlug;
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
