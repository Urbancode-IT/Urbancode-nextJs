// app/be-our-mentor/page.jsx

import Mentor from "./Mentor";

export const metadata = {
  title: "Become a Mentor, Trainer & Educator at Urbancode | Inspire Future Developers",
  description:
    "Join Urbancode Edutech as a mentor, trainer, or educator to guide aspiring developers. Teach, inspire, and shape the next generation of IT professionals with Urbancode.",
  keywords: [
    "Urbancode mentor",
    "Become a mentor Urbancode",
    "trainer at Urbancode",
    "educator Urbancode",
    "teacher Urbancode Chennai",
    "teach coding Chennai",
    "mentor IT students",
    "Urbancode Edutech mentor program",
    "software trainer Chennai",
    "coding educator Urbancode",
  ],
  alternates: {
    canonical: "https://urbancode.in/be-our-mentor",
  },
  openGraph: {
    title: "Become a Mentor, Trainer & Educator at Urbancode | Guide Future Tech Professionals",
    description:
      "Empower aspiring developers by joining Urbancode as a mentor, trainer, or educator. Share your knowledge, teach coding, and make a lasting impact in tech education.",
    url: "https://urbancode.in/be-our-mentor",
    siteName: "Urbancode Edutech",
    images: [
      {
        url: "https://urbancode.in/images/mentor-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Become a Mentor, Trainer, or Educator at Urbancode",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function MentorPage() {
  return (
    <div>
      <Mentor />
    </div>
  );
}
