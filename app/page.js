import { USE_LEGACY_HOME } from './components/Home/homeVersion';
import LegacyHomePage from './components/Home/LegacyHomePage';
import NewHomePage from './components/Home/v2/NewHomePage';

export const metadata = {
  title: "Software Training Institute in Chennai | Urbancode",
  description: "Learn Full Stack, MERN, Testing, Gen AI and more at Urbancode Chennai. Industry experts, hands-on projects and placement assistance.",
  verification: {
    google: "WEXErXa5JBg5hZPCEKFY_g1UVf9R3AxHCZYgQWjQspY",
  },
  keywords: [
    "IT training institute in Chennai",
    "Best coding institute in Velachery",
    "Software training in Pallikaranai",
    "MERN Stack course Chennai",
    "Full stack web development Chennai",
    "Python training in Chennai",
    "Data science course Chennai",
    "Software testing course Chennai",
    "Internship for students in Chennai",
    "Online IT courses Chennai",
    "Job oriented courses Chennai",
    "Placement assistance Chennai",
    "Job support Chennai"
  ],
  openGraph: {
    title: "Urbancode Edutech | Best Full Stack Development & IT Training Institute in Chennai",
    description: "Upskill with Urbancode — industry-focused courses in Full Stack Development, MERN Stack, Data Analytics, Python, Cloud Computing, and Software Testing with placement & internship programs.",
    url: "https://urbancode.in/",
    siteName: "Urbancode Edutech",
    images: [
      {
        url: "https://urbancode.in/images/home/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Urbancode Edutech - IT & Coding Training Institute in Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://urbancode.in/",
  },
};

export default function HomePage() {
  // Flip USE_LEGACY_HOME in homeVersion.js to restore the previous home UI
  if (USE_LEGACY_HOME) {
    return <LegacyHomePage />;
  }

  return <NewHomePage />;
}
