// app/contact-us/page.jsx

import { Suspense } from "react";
import ContactUs from "../components/contact/ContactUs";

export const metadata = {
  title: "Contact Urbancode | Best IT Training Institute in Chennai (Velachery & Pallikaranai)",
  description:
    "Contact Urbancode Edutech — Chennai’s trusted IT training and placement institute. Visit our branches in Velachery and Pallikaranai or call us to learn about web development, Python, and full stack courses with internship support.",
  keywords: [
    "Contact Urbancode Chennai",
    "Urbancode Velachery",
    "Urbancode Pallikaranai",
    "IT training institute contact",
    "software course admission Chennai",
    "coding institute phone number Chennai",
    "Urbancode Edutech contact details",
    "Internship and placement support Chennai",
  ],
  alternates: {
    canonical: "https://urbancode.in/contact-us",
  },
  openGraph: {
    title: "Contact Urbancode | IT & Coding Training in Chennai",
    description:
      "Reach out to Urbancode Edutech — top IT training institute in Chennai with expert trainers, internship programs, and placement support.",
    url: "https://urbancode.in/contact-us",
    siteName: "Urbancode Edutech",
    images: [
      {
        url: "https://urbancode.in/images/og/contact-us.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Urbancode Edutech - Chennai IT Institute",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <>
      {/* ✅ Add Local Business Schema for better visibility in Google Maps & local search */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Urbancode Edutech",
            "url": "https://urbancode.in/contact-us",
            "logo": "https://urbancode.in/images/logo.png",
            "description": "Urbancode Edutech is a leading IT and coding training institute in Chennai offering courses in web development, MERN stack, Python, and software testing with placement support.",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Velachery Main Road",
                "addressLocality": "Velachery",
                "addressRegion": "Chennai",
                "postalCode": "600042",
                "addressCountry": "IN"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Pallikaranai",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600100",
                "addressCountry": "IN"
              }
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-9878798797",
                "contactType": "customer support",
                "areaServed": "IN",
                "availableLanguage": ["en", "ta"]
              }
            ],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61563183054002#",
              "https://www.instagram.com/urbancode_edutech/",
              "https://www.linkedin.com/company/urbancode-edutech/"
            ]
          }
        `}
      </script>

      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
        <ContactUs />
      </Suspense>
    </>
  );
}
