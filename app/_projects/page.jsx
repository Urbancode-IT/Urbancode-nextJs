// app/projects/page.jsx

import Projects from "./components/Projects";

export const metadata = {
  title: "Student Projects | Urbancode Edutech - Web Development & IT Training Institute in Chennai",
  description:
    "Explore student projects from Urbancode Edutech — a top IT training institute in Chennai. See real-world web development, MERN Stack, Python, and data science projects built by our trainees.",
  keywords: [
    "Urbancode projects",
    "student projects Urbancode",
    "web development projects Chennai",
    "MERN stack projects",
    "Python projects Urbancode",
    "final year projects Chennai",
    "software training projects",
    "full stack projects",
    "data science projects",
  ],
  alternates: {
    canonical: "https://urbancode.in/projects",
  },
  openGraph: {
    title: "Urbancode Student Projects | Web & Software Development Training in Chennai",
    description:
      "Discover innovative student projects from Urbancode — Chennai’s best IT and coding institute. Real-world projects in MERN Stack, Python, and web development.",
    url: "https://urbancode.in/projects",
    siteName: "Urbancode Edutech",
    images: [
      {
        url: "https://urbancode.in/images/og/projects-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Urbancode Student Web Development Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* ✅ Schema for better project content discovery */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Urbancode Student Projects",
            "description": "A showcase of web development, MERN stack, Python, and data science projects by Urbancode Edutech students in Chennai.",
            "url": "https://urbancode.in/projects",
            "image": "https://urbancode.in/images/og/projects-showcase.jpg",
            "creator": {
              "@type": "EducationalOrganization",
              "name": "Urbancode Edutech",
              "url": "https://urbancode.in",
              "logo": "https://urbancode.in/images/logo.png"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "MERN Stack Project - Course Curriculum Planner"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "QR-Based Attendance Tracking App"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Certificate Generator Platform"
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61563183054002#",
              "https://www.instagram.com/urbancode_edutech/",
              "https://www.linkedin.com/company/urbanc0de"
            ]
          }
        `}
      </script>

      <Projects />
    </>
  );
}
