import { SITE_URL, DEFAULT_OG_IMAGE } from "../../lib/siteConfig";

export const metadata = {
  title: "IT Career Blogs & Learning Guides | Urbancode Edutech Chennai",
  description:
    "Practical guides on Full Stack, AI, testing, cloud, IELTS, and careers from Urbancode Edutech — Chennai & Tamil Nadu’s job-oriented training institute.",
  keywords: [
    "Urbancode blog",
    "IT career tips Chennai",
    "coding blog Tamil Nadu",
    "AI skills for students",
    "study abroad tips",
  ],
  alternates: {
    canonical: `${SITE_URL}/blogs`,
  },
  openGraph: {
    title: "Urbancode Blogs | IT Career & Course Guides",
    description:
      "Learn career skills, course roadmaps, and study-abroad tips from Urbancode Edutech Chennai.",
    url: `${SITE_URL}/blogs`,
    siteName: "Urbancode Edutech",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urbancode Blogs | IT Career Guides",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
