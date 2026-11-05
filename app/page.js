import { USE_LEGACY_HOME } from './components/Home/homeVersion';
import LegacyHomePage from './components/Home/LegacyHomePage';
import NewHomePage from './components/Home/v2/NewHomePage';
import { SITE_URL, DEFAULT_OG_IMAGE } from '../lib/siteConfig';

export const metadata = {
  title: "Software Training Institute in Chennai, Tamil Nadu | Urbancode",
  description: "Best IT training institute in Chennai & Tamil Nadu. Learn Full Stack, AI, Testing, Cloud & more at Urbancode Velachery & Pallikaranai — live projects and placement assistance.",
  verification: {
    google: "WEXErXa5JBg5hZPCEKFY_g1UVf9R3AxHCZYgQWjQspY",
  },
  keywords: [
    "IT training institute in Chennai",
    "Best coding institute in Tamil Nadu",
    "Software training institute Tamil Nadu",
    "Best coding institute in Velachery",
    "Software training in Pallikaranai",
    "MERN Stack course Chennai",
    "Full stack web development Chennai",
    "Python training in Chennai",
    "Data science course Chennai",
    "Software testing course Chennai",
    "AI course Chennai Tamil Nadu",
    "Internship for students in Chennai",
    "Online IT courses Chennai",
    "Job oriented courses Chennai",
    "Placement assistance Chennai",
    "Job support Chennai"
  ],
  openGraph: {
    title: "Urbancode Edutech | Best IT Training Institute in Chennai, Tamil Nadu",
    description: "Upskill with Urbancode — Full Stack, AI, Data Analytics, Cloud, Software Testing with placement & internship programs across Tamil Nadu.",
    url: `${SITE_URL}/`,
    siteName: "Urbancode Edutech",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Urbancode Edutech - IT & Coding Training Institute in Chennai, Tamil Nadu",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urbancode Edutech | IT Training Institute in Chennai, Tamil Nadu",
    description: "Full Stack, AI, Testing & Cloud courses with placement support in Chennai.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function HomePage() {
  // Flip USE_LEGACY_HOME in homeVersion.js to restore the previous home UI
  if (USE_LEGACY_HOME) {
    return <LegacyHomePage />;
  }

  return <NewHomePage />;
}
