import coursesData from "./courses/[categorySlug]/coursesData";
import blogsData from "../lib/data/blogsData.json";
import { certifications } from "./data/certificationData";
import { SITE_URL } from "../lib/siteConfig";
import {
  slugifyCategoryName,
  slugifyCourseTitle,
} from "../lib/courseSlugs";

const STUDY_ABROAD_COUNTRIES = [
  "usa",
  "uk",
  "canada",
  "australia",
  "germany",
  "ireland",
  "new-zealand",
  "singapore",
];

function entry(path, priority = 0.7, changeFrequency = "weekly") {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap() {
  const staticRoutes = [
    entry("/", 1, "daily"),
    entry("/about-us", 0.8),
    entry("/contact-us", 0.8),
    entry("/courses", 0.9, "daily"),
    entry("/courses-categories", 0.8),
    entry("/study-abroad", 0.9),
    entry("/kids-courses", 0.8),
    entry("/internship", 0.8),
    entry("/be-our-mentor", 0.6),
    entry("/blogs", 0.8, "daily"),
    entry("/book-demo", 0.7),
    entry("/compiler", 0.5),
    entry("/portfolio", 0.6),
    entry("/jobs", 0.6),
    entry("/privacy-policy", 0.3, "yearly"),
    entry("/terms-and-conditions", 0.3, "yearly"),
    entry("/policies", 0.3, "yearly"),
    entry("/disclaimer", 0.3, "yearly"),
    entry("/cookie-policy", 0.3, "yearly"),
  ];

  const categoryRoutes = Object.keys(coursesData).map((categoryName) =>
    entry(`/courses/${slugifyCategoryName(categoryName)}`, 0.85, "weekly")
  );

  const courseRoutes = [];
  Object.entries(coursesData).forEach(([categoryName, category]) => {
    const categorySlug = slugifyCategoryName(categoryName);
    (category.courses || []).forEach((course) => {
      if (!course?.title || course.locked) return;
      courseRoutes.push(
        entry(
          `/courses/${categorySlug}/${slugifyCourseTitle(course.title)}`,
          0.9,
          "weekly"
        )
      );
    });
  });

  const blogRoutes = (Array.isArray(blogsData) ? blogsData : [])
    .filter((blog) => blog?.slug)
    .map((blog) => entry(`/blogs/${blog.slug}`, 0.7, "monthly"));

  const studyAbroadRoutes = STUDY_ABROAD_COUNTRIES.map((country) =>
    entry(`/study-abroad/${country}`, 0.8)
  );

  const certificationRoutes = Object.keys(certifications || {}).map((slug) =>
    entry(`/certifications/${slug}`, 0.7)
  );

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...courseRoutes,
    ...blogRoutes,
    ...studyAbroadRoutes,
    ...certificationRoutes,
  ];
}
