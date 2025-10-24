// app/courses/[categorySlug]/[courseSlug]/page.jsx
import coursesData from "../coursesData";
import SingleCoursepage from "./SingleCoursepage";
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



export default async function Coursepage({ params }) {
  const { categorySlug, courseSlug } = await params;
  return <SingleCoursepage params={{ categorySlug, courseSlug }} />;
}
