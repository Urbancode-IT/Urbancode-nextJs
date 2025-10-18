 import HeroSection from './components/Home/HeroSection';
 import Courses from './components/Home/Courses';
import TestimonialCarousel from './components/Home/TestimonialCarousel';
import FaqBootstrap from './components/Home/Faqs';
import Carousel from './components/Home/Carasoul';
import Navbar from './components/header/Navbar';

export const metadata = {
  title:
    "Urbancode Edutech | Best IT & Coding Training Institute in Chennai (Velachery & Pallikaranai)",
  description:
    "Join Urbancode Edutech — Chennai’s top IT training institute offering MERN Stack, Web Development, Python, Data Science, and Software Testing courses. Learn online or offline with internship and placement support.",
  keywords: [
    "IT training institute in Chennai",
    "Best coding institute in Velachery",
    "Software training in Pallikaranai",
    "MERN Stack course Chennai",
    "Full stack web development Chennai",
    "Python training in Chennai",
    "Data science course Chennai",
    "Software testing course Chennai",
    "Internship for students in Chennai",
    "Online IT courses Chennai",
    "Job oriented courses Chennai",
  ],
  openGraph: {
    title:
      "Urbancode Edutech | Best IT Training & Coding Institute in Chennai",
    description:
      "Upskill with Urbancode — industry-focused courses in MERN Stack, Data Analytics, Python, Cloud Computing, and Software Testing with placement & internship programs.",
    url: "https://urbancode.in/",
    siteName: "Urbancode Edutech",
    images: [
      {
        url: "https://urbancode.in/images/home/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Urbancode Edutech - IT & Coding Training Institute in Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://urbancode.in/",
  },
};


export default function HomePage() {
  return (
    <>
    
      <HeroSection />
      <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Urbancode Edutech",
  "url": "https://urbancode.in",
  "logo": "https://urbancode.in/images/logo.png",
  "description": "IT and coding training institute in Chennai offering courses in web development, Python, MERN stack, and data science with internship and placement support.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Velachery & Pallikaranai",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600100",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9878798797",
    "contactType": "customer support",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61563183054002#",
    "https://www.instagram.com/urbancode_edutech/",
    "https://www.linkedin.com/company/99156099/admin/dashboard/"
  ]
}
`}
</script>

      <Courses />
      <TestimonialCarousel />
      <FaqBootstrap />
      <Carousel /> 
    </>
  );
}
