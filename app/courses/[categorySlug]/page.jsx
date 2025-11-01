import Courses from "./Courses";

// Generate static paths for export
export async function generateStaticParams() {
  const categories = [
    "Programming Languages",
    "Web and App Development",
    "UI UX Designing",
    "Cloud and DevOps",
    // "Data Analytics",
    "Data Science",
    "Database",
    "Data Visualization",
    "Software Testing",
    "Net Working",
    "Digital Marketing",
    "Health Care",
    "CRM",
    "Kidz Space",
     "Languages",
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
