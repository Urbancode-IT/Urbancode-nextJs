// app/kids-courses/page.jsx

import Kidz from "./Kidspace";

export const metadata = {
  title:
    "Coding Courses for Kids | Urbancode Edutech Chennai (Velachery & Pallikaranai)",
  description:
    "Join Urbancode Edutech’s Kids Coding Program in Chennai! Fun and interactive courses in Scratch, Python, Web Development, and Robotics designed for school students aged 8–16.",
  keywords: [
    "coding courses for kids Chennai",
    "kids programming classes Velachery",
    "junior coding bootcamp Chennai",
    "Scratch programming for kids",
    "Python for kids Chennai",
    "robotics classes for kids",
    "kids coding institute Chennai",
    "Urbancode Edutech kids course",
  ],
  alternates: {
    canonical: "https://urbancode.in/kids-courses",
  },
  openGraph: {
    title: "Kids Coding Courses in Chennai | Urbancode Edutech",
    description:
      "Urbancode offers fun and engaging coding courses for kids in Chennai — covering Scratch, Python, and web design. Build creativity and problem-solving skills early!",
    url: "https://urbancode.in/kids-courses",
    siteName: "Urbancode Edutech",
    images: [
      {
        url: "https://urbancode.in/images/og/kids-coding.jpg",
        width: 1200,
        height: 630,
        alt: "Kids coding at Urbancode Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function KidsCourses() {
  return (
    <>
      {/* ✅ Structured data (schema.org) for Kids Courses */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Kids Coding Program",
            "description": "Interactive programming courses for children aged 8–16 at Urbancode Edutech, Chennai. Learn Scratch, Python, and basic web development with fun activities and real projects.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Urbancode Edutech",
              "url": "https://urbancode.in",
              "logo": "https://urbancode.in/images/logo.png"
            },
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "name": "Coding class for Kids",
                "courseMode": "Offline & Online",
                "location": {
                  "@type": "Place",
                  "name": "Urbancode Edutech - Velachery",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Velachery Main Road",
                    "addressLocality": "Velachery",
                    "addressRegion": "Chennai",
                    "postalCode": "600042",
                    "addressCountry": "IN"
                  }
                }
              },
              {
                "@type": "CourseInstance",
                "name": "Python for Kids",
                "courseMode": "Offline & Online",
                "location": {
                  "@type": "Place",
                  "name": "Urbancode Edutech - Pallikaranai",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Pallikaranai",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "600100",
                    "addressCountry": "IN"
                  }
                }
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

      <Kidz />
    </>
  );
}
