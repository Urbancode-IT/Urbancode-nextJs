import { certifications } from "@/app/data/certificationData";
import { SITE_URL, DEFAULT_OG_IMAGE } from "../../../lib/siteConfig";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = certifications?.[slug];
  const name = data?.title || data?.name || slug?.replace(/-/g, " ");
  const title = `${name} Certification Training in Chennai | Urbancode`;
  const description =
    data?.description ||
    `${name} certification training at Urbancode Edutech Chennai, Tamil Nadu — expert mentors and placement-focused prep.`;
  const url = `${SITE_URL}/certifications/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
  };
}

export default function Layout({ children }) {
  return children;
}
