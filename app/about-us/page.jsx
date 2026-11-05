import Herosection from "./components/Herosection";
import OurMileStoneNew from "./components/OurMileStoneNew";
import MissionVisionNew from "./components/MissionVisionNew";
import TrainingSection from "./components/TrainingSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ImageGallery from "./components/ImageGallery";
import EventsSection from "./components/EventsSection";
import { SITE_URL, DEFAULT_OG_IMAGE } from "../../lib/siteConfig";

export const metadata = {
  title: "About Urbancode | Best IT Training Institute in Chennai, Tamil Nadu",
  description:
    "Urbancode Edutech is a leading IT training and placement institute in Chennai, Tamil Nadu — Full Stack, AI, Testing, Cloud, kids coding, and study abroad guidance with campuses in Velachery & Pallikaranai.",
  keywords: [
    "About Urbancode",
    "IT training institute Chennai",
    "best coding institute Tamil Nadu",
    "software training Velachery",
    "placement institute Chennai",
    "Urbancode Edutech",
  ],
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    title: "About Urbancode | IT Training Institute in Chennai, Tamil Nadu",
    description:
      "Expert-led IT courses, live projects, and placement support at Urbancode Edutech — Chennai & Tamil Nadu.",
    url: `${SITE_URL}/about-us`,
    siteName: "Urbancode Edutech",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "About Urbancode" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Urbancode | IT Training Institute in Chennai",
    description:
      "Leading IT training & placement institute in Chennai, Tamil Nadu.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function About() {
  return (
    <div>
      <Herosection />
      <OurMileStoneNew />
      <MissionVisionNew />
      <TrainingSection />
      <WhyChooseUs />
      <ImageGallery />
      <EventsSection />
    </div>
  );
}
