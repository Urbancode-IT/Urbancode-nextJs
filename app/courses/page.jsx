import Courses from "./[categorySlug]/Courses";
import { SITE_URL, DEFAULT_OG_IMAGE } from "../../lib/siteConfig";

export const metadata = {
  title: "IT & Coding Courses in Chennai, Tamil Nadu | Urbancode Edutech",
  description:
    "Browse Full Stack, AI, Software Testing, Cloud, Data Analytics and more at Urbancode Edutech — Chennai campuses in Velachery & Pallikaranai with placement support across Tamil Nadu.",
  keywords: [
    "IT courses Chennai",
    "coding courses Tamil Nadu",
    "full stack course Chennai",
    "AI course Chennai",
    "software testing course Chennai",
    "Urbancode Edutech courses",
  ],
  openGraph: {
    title: "IT & Coding Courses in Chennai | Urbancode Edutech",
    description:
      "Job-oriented courses with live projects and placement assistance in Chennai & Tamil Nadu.",
    url: `${SITE_URL}/courses`,
    siteName: "Urbancode Edutech",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT & Coding Courses in Chennai | Urbancode",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: `${SITE_URL}/courses`,
  },
};

export default function Page() {
  return <Courses />;
}
