import { SITE_URL } from "../../../lib/siteConfig";

export const metadata = {
  title: "All Blogs",
  description: "Browse all Urbancode Edutech blogs.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_URL}/blogs`,
  },
};

export default function AllBlogsLayout({ children }) {
  return children;
}
