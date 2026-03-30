import Courses from "./Courses";

// Generate static paths for export
export async function generateStaticParams() {
  const categories = [
    "Fullstack Development",
    "Software Testing",
    "Data Analytics",
    "Cloud and DevOps",
    "Programming Languages",
    "UI UX Designing",
    "Data Science",
    "Data Engineering",
    "Database",
    "Data Visualization",
    "Net Working",
    "Digital Marketing",
    "CRM",
    "Kidz Space",
  ];

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return categories.map((category) => ({
    categorySlug: slugify(category),
  }));
}

export default async function Page({ params }) {
  const { categorySlug } = await params;
  return <Courses categorySlug={categorySlug} />;
}
