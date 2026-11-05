import { SITE_URL } from "../../lib/siteConfig";

export const metadata = {
  title: "Online Code Compiler | Urbancode Edutech",
  description:
    "Practice coding online with Urbancode’s free compiler — built for students learning Full Stack, Python, and more in Chennai & Tamil Nadu.",
  alternates: { canonical: `${SITE_URL}/compiler` },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return children;
}
