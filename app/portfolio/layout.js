import { SITE_URL, DEFAULT_OG_IMAGE } from "../../lib/siteConfig";

export const metadata = {
  title: "Student Project Portfolio | Urbancode Edutech Chennai",
  description:
    "See real student projects from Full Stack, AI, Testing and more — built at Urbancode Edutech in Chennai, Tamil Nadu.",
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    title: "Student Portfolio | Urbancode Edutech",
    description: "Project showcases from Urbancode learners in Chennai.",
    url: `${SITE_URL}/portfolio`,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
};

export default function Layout({ children }) {
  return children;
}
