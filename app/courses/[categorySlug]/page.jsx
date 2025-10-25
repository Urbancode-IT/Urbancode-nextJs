import Courses from "./Courses";

// Generate static paths for export
export async function generateStaticParams() {
  const categories = [
    "Programming Languages",
    "Web Development",
    "UI UX Designing",
    "Cloud & DevOps",
    "Data Analytics",
    "Data Science",
    "Database",
    "Data Visualization",
    "Software Testing",
    "Cyber Security",
    "SEO",
    "Health Care",
    "CRM",
    "App Development",
  ];

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return categories.map((category) => ({
    categorySlug: slugify(category),
  }));
}

export default function Page({ params }) {
  const { categorySlug } = params;
  return <Courses categorySlug={categorySlug} />;
}
