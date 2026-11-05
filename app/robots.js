import { SITE_URL } from "../lib/siteConfig";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/feedback/admin",
          "/home-admin",
          "/lead-admin",
          "/thankyou",
          "/study-abroad-thankyou",
          "/study-abroad-redirect",
          "/study-abroad/evaluation-form",
          "/form",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
