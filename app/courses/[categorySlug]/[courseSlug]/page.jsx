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

  const title = `${course.title} Course in Chennai, Tamil Nadu | Urbancode`;
  const description =
    course.shortDesc ||
    `${course.title} course in Chennai & Tamil Nadu at Urbancode Edutech — hands-on ${categoryName} training, live projects, and placement support at Velachery & Pallikaranai.`;
  const image = course.img
    ? `https://www.urbancode.in${course.img}`
    : `https://www.urbancode.in/images/home/og-image.jpg`;

  const canonicalSlug = slugifyCourseTitle(course.title);
  const url = `https://www.urbancode.in/courses/${categorySlug}/${canonicalSlug}`;

  return {
    title,
    description,
    keywords: [
      `${course.title} course Chennai`,
      `${course.title} training Tamil Nadu`,
      `${course.title} institute Chennai`,
      `${categoryName} course Chennai`,
      "IT courses Tamil Nadu",
      "Urbancode Edutech",
      "placement training Chennai",
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: "Urbancode Edutech",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${course.title} Course Chennai`,
        },
      ],
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
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

  const canonicalSlug = course ? slugifyCourseTitle(course.title) : courseSlug;
  const courseUrl = `https://www.urbancode.in/courses/${categorySlug}/${canonicalSlug}`;
  const courseSchema = course
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        name: `${course.title} Course`,
        description:
          course.shortDesc ||
          course.desc ||
          `${course.title} training at Urbancode Edutech Chennai, Tamil Nadu.`,
        provider: {
          "@type": "Organization",
          name: "Urbancode Edutech",
          sameAs: "https://www.urbancode.in",
        },
        url: courseUrl,
        image: course.img
          ? `https://www.urbancode.in${course.img}`
          : "https://www.urbancode.in/images/home/og-image.jpg",
        areaServed: ["Chennai", "Tamil Nadu", "IN"],
        inLanguage: ["en", "ta"],
      }
    : null;

  // Pass a server-resolved course snapshot so SSR HTML and client hydration match
  // (avoids client re-importing a stale webpack copy of coursesData during HMR).
  return (
    <>
      {courseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      )}
      <SingleCoursepage
        params={{ categorySlug, courseSlug }}
        course={course}
      />
    </>
  );
}
