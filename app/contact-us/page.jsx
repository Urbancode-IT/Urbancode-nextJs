// app/contact-us/page.jsx


import ContactUs from "../components/contact/ContactUs";


export const metadata = {
  title: "Contact Urbancode | IT Training Institute in Chennai",
  description:
    "Get in touch with Urbancode Edutech for course details, admissions, internships, and corporate training programs. Call or message us anytime.",
  keywords: [
    "Contact Urbancode",
    "Urbancode Chennai",
    "IT training contact",
    "software courses inquiry",
    "Urbancode Edutech phone number",
  ],
  alternates: {
    canonical: "https://urbancode.in/contact-us",
  },
  openGraph: {
    title: "Contact Urbancode | Learn with Experts",
    description:
      "Reach out to Urbancode Edutech for admissions, internship queries, or training collaborations.",
    url: "https://urbancode.in/contact-us",
    siteName: "Urbancode Edutech",
    images: [
      {
        url: "https://urbancode.in/images/home/contact-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Urbancode Edutech Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <ContactUs />
  );
}
