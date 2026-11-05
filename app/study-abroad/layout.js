import { SITE_URL, DEFAULT_OG_IMAGE } from "../../lib/siteConfig";

export const metadata = {
  title: "Study Abroad Consultants in Chennai, Tamil Nadu | Urbancode",
  description:
    "Study abroad guidance from Chennai for USA, UK, Canada, Australia, Germany, Ireland, New Zealand & Singapore — IELTS coaching, visas, and university shortlisting at Urbancode.",
  keywords: [
    "study abroad consultants Chennai",
    "study abroad Tamil Nadu",
    "IELTS coaching Chennai",
    "study in USA from Tamil Nadu",
    "overseas education Chennai",
    "Urbancode Study Abroad",
  ],
  alternates: {
    canonical: `${SITE_URL}/study-abroad`,
  },
  openGraph: {
    title: "Study Abroad Consultants in Chennai | Urbancode",
    description:
      "End-to-end overseas education support from Chennai & Tamil Nadu — IELTS, visas, and admissions.",
    url: `${SITE_URL}/study-abroad`,
    siteName: "Urbancode Edutech",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Consultants in Chennai | Urbancode",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function StudyAbroadLayout({ children }) {
  return children;
}
