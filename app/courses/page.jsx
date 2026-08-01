import Courses from "./[categorySlug]/Courses";

export const metadata = {
  title: "Courses | Urbancode",
  description: "Explore our wide range of courses and start learning today.",
  keywords: "courses, learning, education, programming, web development, app development",
  openGraph: {
    title: "Courses | Urbancode",
    description: "Explore our wide range of courses and start learning today.",
    url: `https://www.urbancode.in/courses`,
    siteName: "Urbancode",
    type: "website",
  },
  alternates: {
    canonical: `https://www.urbancode.in/courses`,
  },
};

export default function Page() {
  return <Courses />;
}
