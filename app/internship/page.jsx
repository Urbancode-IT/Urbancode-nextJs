// app/internship/page.jsx

import App from "./internship";

export const metadata = {
  title:
    "Internship Offers with Urbancode | IT & Software Internship in Chennai (Velachery & Pallikaranai)",
  description:
    "Apply for IT internships at Urbancode Edutech in Chennai. Gain real-world experience in MERN Stack, Web Development, Python, Data Science, and Software Testing with placement assistance.",
  keywords: [
    "IT internship Chennai",
    "MERN stack internship",
    "web development internship Chennai",
    "software internship Chennai",
    "Python internship Chennai",
    "internship with placement support",
    "Urbancode internship",
    "students internship Chennai",
  ],
  alternates: {
    canonical: "https://urbancode.in/internship",
  },
  openGraph: {
    title:
      "Internship Opportunities | Urbancode Edutech Chennai",
    description:
      "Join Urbancode Edutech’s internship program in Chennai — hands-on training in full stack development, Python, and data analytics with certification and job support.",
    url: "https://urbancode.in/internship",
    siteName: "Urbancode Edutech",
    images: [
      {
        url: "https://urbancode.in/images/og/internship.jpg",
        width: 1200,
        height: 630,
        alt: "Internship at Urbancode Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function InternshipPage() {
  return (
    <>
      {/* ✅ Schema: Internship + Education Program */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "IT Internship Program at Urbancode Edutech",
            "description": "Hands-on internship training in web development, MERN stack, Python, and data science for students and graduates at Urbancode Edutech, Chennai.",
            "timeToComplete": "P3M",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Urbancode Edutech",
              "url": "https://urbancode.in",
              "logo": "https://urbancode.in/images/logo.png",
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
              ]
            },
            "occupationalCategory": "Software Development, Web Development, Data Science, Software Testing",
            "hasCourse": [
              {
                "@type": "Course",
                "name": "MERN Stack Internship"
              },
              {
                "@type": "Course",
                "name": "Python Internship"
              },
              {
                "@type": "Course",
                "name": "Data Science Internship"
              },
              {
                "@type": "Course",
                "name": "Software Testing Internship"
              }
            ],
            "educationalCredentialAwarded": "Certificate of Internship Completion",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61563183054002#",
              "https://www.instagram.com/urbancode_edutech/",
              "https://www.linkedin.com/company/urbancode-edutech/"
            ]
          }
        `}
      </script>

      <div>
        <App />
      </div>
    </>
  );
}
