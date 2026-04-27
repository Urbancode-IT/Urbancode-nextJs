//app/page.js

import HeroSection from './components/Home/HeroSection';
import TrendingCourses from './components/Home/TrendingCourses';
import Courses from './components/Home/Courses';
import InDemandTools from './components/Home/InDemandTools';
import FaqBootstrap from './components/Home/Faqs';
import Carousel from './components/Home/Carasoul';
import VideoTestimonials from './components/Home/VideoTestimonials';
import TestimonialCarousel from './components/Home/TestimonialCarousel';
import BannerSlider from './components/common/BannerSlider';
import GetCertified from './components/Home/GetCertified';
import FestivePopup from './components/FestivePopup/FestivePopup';
import SuccessStories from './components/Home/SuccessStories';

export const metadata = {
  title: "Software Training Institute in Chennai | Urbancode",
  description: "Learn Full Stack, MERN, Testing, Gen AI and more at Urbancode Chennai. Industry experts, hands-on projects and placement assistance.",
  verification: {
    google: "WEXErXa5JBg5hZPCEKFY_g1UVf9R3AxHCZYgQWjQspY",
  },
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
    "Placement assistance Chennai",
    "Job support Chennai"
  ],
  openGraph: {
    title: "Urbancode Edutech | Best Full Stack Development & IT Training Institute in Chennai",
    description: "Upskill with Urbancode — industry-focused courses in Full Stack Development, MERN Stack, Data Analytics, Python, Cloud Computing, and Software Testing with placement & internship programs.",
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
  const homeBanners = [
    {
      src: "/images/home/studyabroad.webp",
      alt: "Study Abroad",
      type: "link",
      link: "/study-abroad"
    },
    {
      src: "/images/home/kidssummercamp.webp",
      alt: "Kids Summer Camp",
      type: "form-download",
      courseName: "Kids Summer Camp",
      downloadUrls: ["/curriculum/pythonforkids.pdf", "/curriculum/webdevelopmentKids.pdf"]
    },
    {
      src: "/images/home/dataengineering.webp",
      alt: "New Course: Data Engineering",
      type: "link",
      link: "/courses/data-engineering/data-engineering"
    }
  ];

  return (
    <>
      {/* <FestivePopup /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Urbancode Edutech",
  "url": "https://urbancode.in",
  "logo": "https://urbancode.in/images/logo.png",
  "description": "IT and coding training institute in Chennai offering courses in Full Stack Development, Python, MERN stack, and data science with internship and placement support.",
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
`
        }}
      />
      <div className="home-section">
        <HeroSection />
      </div>
      <div className="home-section">
        <BannerSlider banners={homeBanners} />
      </div>
      <div className="home-section">
        <Carousel />
      </div>
      <div className="home-section">
        <Courses />
      </div>
      <div className="home-section">
        <InDemandTools />
      </div>
      <div className="home-section">
        <SuccessStories />
      </div>

      <div className="home-section">
        <VideoTestimonials />
      </div>
      <div className="home-section">
        <TestimonialCarousel />
      </div>
      <div className="home-section">
        <FaqBootstrap />
      </div>
      <div className="home-section">
        <TrendingCourses />
      </div>
    </>
  );
}
