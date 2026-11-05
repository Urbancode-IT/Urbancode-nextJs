import { SITE_URL, DEFAULT_OG_IMAGE } from "../../lib/siteConfig";

export const metadata = {
  title: "IT Jobs & Career Openings | Urbancode Edutech Chennai",
  description:
    "Explore IT career opportunities and hiring updates connected to Urbancode Edutech’s placement network in Chennai and Tamil Nadu.",
  alternates: { canonical: `${SITE_URL}/jobs` },
  openGraph: {
    title: "IT Jobs | Urbancode Edutech Chennai",
    description: "Career openings and placement-linked opportunities from Urbancode.",
    url: `${SITE_URL}/jobs`,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
};

export default function Layout({ children }) {
  return children;
}
