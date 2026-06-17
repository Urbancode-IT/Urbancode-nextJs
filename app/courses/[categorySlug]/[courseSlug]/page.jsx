// app/courses/[categorySlug]/[courseSlug]/page.jsx
import coursesData from "../coursesData";
import SingleCoursepage from "./SingleCoursepage";
import { redirect } from "next/navigation";

// Pre-generate all static paths
export async function generateStaticParams() {
  const params = [];

  Object.entries(coursesData).forEach(([categoryName, category]) => {
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");
    category.courses.forEach((course) => {
      const courseSlug = course.title.toLowerCase().replace(/\s+/g, "-");
      params.push({ categorySlug, courseSlug });
    });
  });

  return params;
}

// ✅ Dynamic SEO for each course page
export async function generateMetadata({ params }) {
  const { categorySlug, courseSlug } = await params;

  // Find category and course
  const categoryEntry = Object.entries(coursesData).find(
    ([categoryName]) =>
      categoryName.toLowerCase().replace(/\s+/g, "-") === categorySlug
  );

  if (!categoryEntry) {
    return {
      title: "Course Not Found | Urbancode",
      description: "The requested course could not be found at Urbancode.",
    };
  }

  const [categoryName, categoryData] = categoryEntry;
  const course = categoryData.courses.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-") === courseSlug
  );

  if (!course) {
    return {
      title: `${categoryName} | Urbancode`,
      description: `Learn ${categoryName} and enhance your skills with Urbancode’s expert training.`,
    };
  }

  // Course metadata
  const title = `${course.title} Course | Urbancode Edutech Chennai`;
  const description =
    course.shortDesc ||
    `${course.title} training course at Urbancode Edutech Chennai — learn ${categoryName} concepts through hands-on projects and expert mentorship.`;
  const image = course.image
    ? `https://www.urbancode.in${course.image}`
    : `https://www.urbancode.in/images/home/og-image.jpg`;

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
      url: `https://www.urbancode.in/courses/${categorySlug}/${courseSlug}`,
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
      canonical: `https://www.urbancode.in/courses/${categorySlug}/${courseSlug}`,
    },
  };
}

export default async function Coursepage({ params }) {
  const { categorySlug, courseSlug } = await params;
  if (courseSlug === "mern-stack") {
    redirect("/courses/fullstack-development/ai-powered-fullstack");
  }
  return <SingleCoursepage params={{ categorySlug, courseSlug }} />;
}
