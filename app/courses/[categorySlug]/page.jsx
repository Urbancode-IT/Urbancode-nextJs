import Courses from "./Courses";
import categoryMetaData from "../categoryMetaData";
import { SITE_URL, DEFAULT_OG_IMAGE } from "../../../lib/siteConfig";

const CATEGORY_LABELS = {
  "fullstack-development": "Full Stack Development",
  "software-testing": "Software Testing",
  "ai-and-data-science": "AI and Data Science",
  "cloud-and-devops": "Cloud and DevOps",
  "programming-languages": "Programming Languages",
  "ui-ux-designing": "UI UX Designing",
  "data-engineering": "Data Engineering",
  database: "Database",
  "net-working": "Networking",
  "digital-marketing": "Digital Marketing",
  crm: "CRM",
  "kidz-space": "Kidz Space",
  automation: "Automation",
  languages: "Languages",
  "data-analytics": "Data Analytics",
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((categorySlug) => ({ categorySlug }));
}

export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  const meta = categoryMetaData[categorySlug];
  const label = CATEGORY_LABELS[categorySlug] || categorySlug.replace(/-/g, " ");
  const title =
    meta?.title?.trim() ||
    `${label} Courses in Chennai, Tamil Nadu | Urbancode`;
  const description =
    meta?.description ||
    `Join ${label} courses at Urbancode Edutech in Chennai, Tamil Nadu. Expert mentors, live projects, and placement assistance at Velachery & Pallikaranai.`;
  const keywords = [
    ...(meta?.keywords || []),
    `${label} course Chennai`,
    `${label} training Tamil Nadu`,
    "Urbancode Edutech",
    "IT training institute Chennai",
  ];
  const image = meta?.image
    ? `${SITE_URL}${meta.image}`
    : DEFAULT_OG_IMAGE;
  const url = `${SITE_URL}/courses/${categorySlug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Urbancode Edutech",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function Page({ params }) {
  const { categorySlug } = await params;
  return <Courses categorySlug={categorySlug} />;
}
