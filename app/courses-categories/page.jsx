// app/courses-categories/page.jsx

import CourseCategoryPage from "./CourseCategoryPage";

export const metadata = {
  title: "IT Course Categories | Urbancode Edutech Chennai",
  description:
    "Explore Urbancode Edutech’s wide range of IT and software training categories — from Web Development, Data Science, and Cloud Computing to Digital Marketing and UI/UX Design. Learn from expert trainers in Chennai with internship and placement support.",
  keywords: [
    "IT course categories",
    "Software training in Chennai",
    "Coding courses Chennai",
    "Web development courses Chennai",
    "Python and Data Science training",
    "UI/UX and cloud computing courses",
    "Digital marketing and database training",
    "Best IT institute in Velachery and Pallikaranai",
    "IT internship and placement courses Chennai",
  ],
  alternates: {
    canonical: "https://urbancode.in/courses-categories",
  },
  openGraph: {
    title: "Explore IT Course Categories | Urbancode Edutech Chennai",
    description:
      "Discover Urbancode’s range of IT and software course categories — Web Development, Data Science, Cloud, UI/UX, and more. Learn from expert trainers with internship and placement programs.",
    url: "https://urbancode.in/courses-categories",
    siteName: "Urbancode Edutech",
    images: [
      {
        url: "https://urbancode.in/images/home/courses-category-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Urbancode Course Categories Overview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function CoursesCategoriesPage() {
  return <CourseCategoryPage />;
}
