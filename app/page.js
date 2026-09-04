import dynamic from 'next/dynamic';
import NewHeroSection from './components/Home/NewHeroSection';
import './components/Home/homePlayButton.css';
import './components/Home/homeVideoCarousel.css';
import InstitutionVideosSkeleton from './components/Home/InstitutionVideosSkeleton';

// Branch announcement popup (client-only, uses sessionStorage)
const BranchAnnouncement = dynamic(() => import('./components/BranchAnnouncement/BranchAnnouncement'));

// Coming Soon popup (client-only, uses sessionStorage)
// const ComingSoonPopup = dynamic(() => import('./components/ComingSoonPopup/ComingSoonPopup'));

// Code-splitting below-the-fold sections for massive initial bundle savings
const TrendingCourses = dynamic(() => import('./components/Home/TrendingCourses'));
const ProficiencyTrainingSection = dynamic(() => import('./components/Home/ProficiencyTrainingSection'));
const Courses = dynamic(() => import('./components/Home/Courses'));

const PlacementTestimonials = dynamic(() => import('./components/Home/PlacementTestimonials'), {
  loading: () => <div className="placeholder-skeleton" style={{ height: '350px', background: '#07090d', margin: '20px 0', borderRadius: '16px' }} />
});

const InDemandTools = dynamic(() => import('./components/Home/InDemandTools'), {
  loading: () => <div className="placeholder-skeleton" style={{ height: '300px', background: '#0a0d14', margin: '20px 0', borderRadius: '16px' }} />
});

const FaqBootstrap = dynamic(() => import('./components/Home/Faqs'));
const Carousel = dynamic(() => import('./components/Home/Carasoul'));

const VideoTestimonials = dynamic(() => import('./components/Home/VideoTestimonials'));

const TestimonialCarousel = dynamic(() => import('./components/Home/TestimonialCarousel'));

const GoogleReviews = dynamic(() => import('./components/GoogleReviews/GoogleReviews'));

const InstitutionVideos = dynamic(() => import('./components/Home/InstitutionVideos'), {
  loading: () => <InstitutionVideosSkeleton />,
});

// const GetCertified = dynamic(() => import('./components/Home/GetCertified'));

const CertificationSection = dynamic(() => import('./components/Home/CertificationSection'), {
  loading: () => <div className="placeholder-skeleton" style={{ height: '608px', background: 'rgba(0,181,111,0.04)', margin: '20px 0', borderRadius: '16px' }} />
});

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
    // {
    //   src: "/images/home/ai-software-engineering-banner.webp",
    //   alt: "AI Software Engineering Certification Program (6 Months)",
    //   type: "link",
    //   link: "/courses/fullstack-development/ai-software-engineering"
    // },
    {
      src: "/images/home/tvlbanner.png",
      alt: "Urbancode Tirunelveli Branch - Now Open",
      type: "enquiry",
      courseName: "Tirunelveli Branch Enquiry",
      customTitle: "Enquire – Tirunelveli Branch",
      isSelectMode: true,
      extraOptions: [
        "Full Stack Development",
        "Python with AI",
        "Data Science",
        "MERN Stack",
        "Software Testing",
        "Digital Marketing",
        "UI/UX Design",
        "AWS / Cloud Computing",
        "Cybersecurity",
        "Help me choose my course",
      ]
    },
    {
      src: "/images/home/study-abroad-2027.webp",
      alt: "Study Abroad",
      type: "link",
      link: "/study-abroad"
    },
    // {
    //   src: "/images/home/kidssummercamp.webp",
    //   alt: "Kids Summer Camp",
    //   type: "form-download",
    //   courseName: "Kids Summer Camp",
    //   downloadUrls: ["/curriculum/pythonforkids.pdf", "/curriculum/webdevelopmentKids.pdf"]
    // },
    {
      src: "/images/home/dataengineering.webp",
      alt: "New Course: Data Engineering",
      type: "link",
      link: "/courses/data-engineering/data-engineering"
    }
  ];

  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/home/home-hero/bg-image-1.webp"
        fetchPriority="high"
      />
      {/* <BranchAnnouncement /> */}
      {/* <ComingSoonPopup /> */}
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
    "https://www.linkedin.com/company/urbanc0de"
  ]
}
`
        }}
      />
    
      <section className="home-section home-section--hero">
        <NewHeroSection banners={homeBanners} />
      </section>
      
 
 {/*
<section id="proficiency-training" className="home-section">
  <ProficiencyTrainingSection />
</section>
*/}


      <section className="home-section">
        <Courses />
      </section>
       <section className="home-section">
        <Carousel />
      </section>
      <section className="home-section">
        <PlacementTestimonials />
      </section>
      <section className="home-section">
        <InstitutionVideos />
      </section>
      <section className="home-section">
        <InDemandTools />
      </section>
      <section id="certification-section" className="home-section">
        <CertificationSection />
      </section>

      {/* <div className="home-section">
        <GetCertified />
      </div> */}

      <section className="home-section">
        <VideoTestimonials />
      </section>
      {/* <section className="home-section">
        <TestimonialCarousel />
      </section> */}
      <section className="home-section">
        <GoogleReviews />
      </section>
       <section id="featured-courses" className="home-section">
        <TrendingCourses />
      </section>
      <section className="home-section">
        <FaqBootstrap />
      </section>
     
    </>
  );
}