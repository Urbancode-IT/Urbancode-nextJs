/** @type {import('next-sitemap').IConfig} */
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { slugifyCategoryName, slugifyCourseTitle } from "./lib/courseSlugs.js";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ✅ Safely import the data file with brackets in folder name
const coursesModule = require(path.join(__dirname, "app/courses/[categorySlug]/coursesData.js"));
const coursesData = coursesModule.default || coursesModule;

const baseUrl = "https://www.urbancode.in";

function generateDynamicPaths() {
  const paths = [];

  Object.entries(coursesData).forEach(([categoryName, category]) => {
    const categorySlug = slugifyCategoryName(categoryName);

    // Category page
    paths.push(`${baseUrl}/courses/${categorySlug}`);

    // Course pages
    category.courses.forEach((course) => {
      const courseSlug = slugifyCourseTitle(course.title);
      paths.push(`${baseUrl}/courses/${categorySlug}/${courseSlug}`);
    });
  });

  return paths;
}

export default {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/admin/*", "/api/*"],

  additionalPaths: async () => {
    const dynamicPaths = generateDynamicPaths();

    const staticPaths = [
      `${baseUrl}/`,
      `${baseUrl}/about-us`,
      `${baseUrl}/contact-us`,
      `${baseUrl}/courses-categories`,
      `${baseUrl}/internship`,
      `${baseUrl}/be-our-mentor`,
      `${baseUrl}/projects`,
      `${baseUrl}/kids-courses`,
    ];

    return [...staticPaths, ...dynamicPaths].map((url) => ({
      loc: url,
      changefreq: "weekly",
      priority: 0.8,
    }));
  },
};
