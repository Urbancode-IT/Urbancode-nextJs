import { SITE_URL, DEFAULT_OG_IMAGE } from "../../lib/siteConfig";

const COUNTRIES = {
  usa: {
    name: "USA",
    title: "Study in USA from Chennai, Tamil Nadu | Urbancode Study Abroad",
    description:
      "Study in the USA with Urbancode Study Abroad Chennai — university shortlisting, SOP, visas, and IELTS coaching for students across Tamil Nadu.",
  },
  uk: {
    name: "UK",
    title: "Study in UK from Chennai, Tamil Nadu | Urbancode Study Abroad",
    description:
      "UK admissions support from Chennai — course selection, IELTS, visas, and scholarships with Urbancode Study Abroad.",
  },
  canada: {
    name: "Canada",
    title: "Study in Canada from Chennai, Tamil Nadu | Urbancode Study Abroad",
    description:
      "Canada study abroad consultants in Chennai helping Tamil Nadu students with colleges, visas, and IELTS/PTE prep.",
  },
  australia: {
    name: "Australia",
    title: "Study in Australia from Chennai, Tamil Nadu | Urbancode Study Abroad",
    description:
      "Australia university admissions and visa guidance from Urbancode Study Abroad Chennai for Tamil Nadu students.",
  },
  germany: {
    name: "Germany",
    title: "Study in Germany from Chennai, Tamil Nadu | Urbancode Study Abroad",
    description:
      "Germany study abroad counselling in Chennai — public universities, visas, and language/IELTS guidance.",
  },
  ireland: {
    name: "Ireland",
    title: "Study in Ireland from Chennai, Tamil Nadu | Urbancode Study Abroad",
    description:
      "Ireland education consultants in Chennai offering admissions, visas, and IELTS support for Tamil Nadu applicants.",
  },
  "new-zealand": {
    name: "New Zealand",
    title: "Study in New Zealand from Chennai | Urbancode Study Abroad",
    description:
      "New Zealand study abroad guidance from Chennai — universities, visas, and IELTS coaching for Tamil Nadu students.",
  },
  singapore: {
    name: "Singapore",
    title: "Study in Singapore from Chennai, Tamil Nadu | Urbancode Study Abroad",
    description:
      "Singapore education consultants in Chennai helping with institutes, visas, and career-focused programs.",
  },
};

export function getCountryMetadata(slug) {
  const c = COUNTRIES[slug];
  if (!c) {
    return {
      title: "Study Abroad | Urbancode",
      description: "Study abroad consultants in Chennai, Tamil Nadu.",
    };
  }
  const url = `${SITE_URL}/study-abroad/${slug}`;
  return {
    title: c.title,
    description: c.description,
    keywords: [
      `study in ${c.name} from Chennai`,
      `study in ${c.name} Tamil Nadu`,
      "study abroad consultants Chennai",
      "Urbancode Study Abroad",
      "IELTS coaching Chennai",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: c.title,
      description: c.description,
      url,
      siteName: "Urbancode Edutech",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export const STUDY_ABROAD_COUNTRY_SLUGS = Object.keys(COUNTRIES);
