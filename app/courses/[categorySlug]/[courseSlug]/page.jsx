// app/courses/[categorySlug]/[courseSlug]/page.jsx
import coursesData from "../coursesData";
import SingleCoursepage from "./SingleCoursepage";
import { redirect } from "next/navigation";
import {
  slugifyCategoryName,
  slugifyCourseTitle,
  findCategoryEntry,
  findCourseBySlug,
  LEGACY_COURSE_SLUG_REDIRECTS,
} from "@/lib/courseSlugs";

// Pre-generate all static paths
export async function generateStaticParams() {
  const params = [];

  Object.entries(coursesData).forEach(([categoryName, category]) => {
    const categorySlug = slugifyCategoryName(categoryName);
    category.courses.forEach((course) => {
      params.push({ categorySlug, courseSlug: slugifyCourseTitle(course.title) });
    });
  });

  return params;
}

// ✅ Dynamic SEO for each course
export async function generateMetadata({ params }) {
  const { categorySlug, courseSlug } = await params;

  const categoryEntry = findCategoryEntry(coursesData, categorySlug);

  if (!categoryEntry) {
    return {
      title: "Course Not Found | Urbancode",
      description: "The requested course could not be found at Urbancode.",
    };
  }

  const [categoryName, categoryData] = categoryEntry;
  const course = findCourseBySlug(categoryData, courseSlug);

  if (!course) {
    return {
      title: `${categoryName} | Urbancode`,
      description: `Learn ${categoryName} and enhance your skills with Urbancode’s expert training.`,
    };
  }

  const title = `${course.title} Course | Urbancode Edutech Chennai`;
  const description =
    course.shortDesc ||
    `${course.title} training course at Urbancode Edutech Chennai — learn ${categoryName} concepts through hands-on projects and expert mentorship.`;
  const image = course.img
    ? `https://www.urbancode.in${course.img}`
    : `https://www.urbancode.in/images/home/og-image.jpg`;

  const canonicalSlug = slugifyCourseTitle(course.title);

  return {
    title,
    description,
    keywords: [
      `${course.title} course`,
      `${course.title} training`,
      `${course.title} certification`,
      `${categoryName} Chennai`,
      "IT courses Chennai",
      "Urbancode Edutech",
    ],
    openGraph: {
      title,
      description,
      url: `https://www.urbancode.in/courses/${categorySlug}/${canonicalSlug}`,
      siteName: "Urbancode Edutech",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${course.title} Course`,
        },
      ],
      type: "article",
      locale: "en_IN",
    },
    alternates: {
      canonical: `https://www.urbancode.in/courses/${categorySlug}/${canonicalSlug}`,
    },
  };
}

export default async function Coursepage({ params }) {
  const { categorySlug, courseSlug } = await params;
  if (courseSlug === "mern-stack") {
    redirect("/courses/fullstack-development/ai-powered-fullstack");
  }
  const legacyTarget = LEGACY_COURSE_SLUG_REDIRECTS[courseSlug];
  if (legacyTarget) {
    redirect(`/courses/${categorySlug}/${legacyTarget}`);
  }

  const categoryEntry = findCategoryEntry(coursesData, categorySlug);
  const category = categoryEntry?.[1] || null;
  const course = category ? findCourseBySlug(category, courseSlug) : null;

  // Pass a server-resolved course snapshot so SSR HTML and client hydration match
  // (avoids client re-importing a stale webpack copy of coursesData during HMR).
  return (
    <SingleCoursepage
      params={{ categorySlug, courseSlug }}
      course={course}
    />
  );
}
