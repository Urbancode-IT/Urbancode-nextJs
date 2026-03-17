import Courses from "./[categorySlug]/Courses";
import categoryMetaData from "./categoryMetaData";

export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  const slug = categorySlug;
  const data = categoryMetaData[slug];

  if (!data) {
    return {
      title: "Course Not Found | Urbancode",
      description:
        "The course category you're looking for does not exist at Urbancode.",
    };
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.urbancode.in/courses/${slug}`,
      siteName: "Urbancode",
      images: [
        {
          url: `https://www.urbancode.in${data.image}`,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `https://www.urbancode.in/courses/${slug}`,
    },
  };
}

export default function Page() {
  return <Courses />;
}
