import dynamic from 'next/dynamic';
import NewHeroSection from './NewHeroSection';
import './homePlayButton.css';
import './homeVideoCarousel.css';
import InstitutionVideosSkeleton from './InstitutionVideosSkeleton';

const TrendingCourses = dynamic(() => import('./TrendingCourses'));
const ProficiencyTrainingSection = dynamic(() => import('./ProficiencyTrainingSection'));
const Courses = dynamic(() => import('./Courses'));

const PlacementTestimonials = dynamic(() => import('./PlacementTestimonials'), {
  loading: () => <div className="placeholder-skeleton" style={{ height: '350px', background: '#07090d', margin: '20px 0', borderRadius: '16px' }} />
});

const InDemandTools = dynamic(() => import('./InDemandTools'), {
  loading: () => <div className="placeholder-skeleton" style={{ height: '300px', background: '#0a0d14', margin: '20px 0', borderRadius: '16px' }} />
});

const FaqBootstrap = dynamic(() => import('./Faqs'));
const Carousel = dynamic(() => import('./Carasoul'));

const VideoTestimonials = dynamic(() => import('./VideoTestimonials'));

const GoogleReviews = dynamic(() => import('../GoogleReviews/GoogleReviews'));

const InstitutionVideos = dynamic(() => import('./InstitutionVideos'), {
  loading: () => <InstitutionVideosSkeleton />,
});

const CertificationSection = dynamic(() => import('./CertificationSection'), {
  loading: () => <div className="placeholder-skeleton" style={{ height: '608px', background: 'rgba(0,181,111,0.04)', margin: '20px 0', borderRadius: '16px' }} />
});

/**
 * Previous home page UI — kept intact for restore.
 * Controlled by USE_LEGACY_HOME in homeVersion.js
 */
export default function LegacyHomePage() {
  const homeBanners = [
    {
      src: "/images/home/FSD_TVL_Bootcamp.webp",
      alt: "Free Zero to Hero Full Stack Development Bootcamp in Tirunelveli on 31 October 2026",
      type: "modal",
      courseName: "Full Stack Development Bootcamp - Tirunelveli",
      customTitle: "Register for Zero to Hero Bootcamp",
      hideMode: true,
      leadPlace: "Hero Banner — FSD Tirunelveli Bootcamp"
    },
    {
      src: "/images/home/6-month-program-banner.webp",
      alt: "AI Software Engineering Certification Program (6 Months)",
      type: "link",
      link: "/courses/fullstack-development/ai-software-engineering"
    },
    {
      src: "/images/home/studyabroad.webp",
      alt: "Study Abroad 2027",
      type: "link",
      link: "/study-abroad"
    },
    {
      src: "/images/home/ieltsbanner.webp",
      alt: "IELTS Training",
      type: "link",
      link: "/study-abroad#english-proficiency",
      useFlightAnimation: true
    },
    {
      src: "/images/home/data-engineering-with-azure.webp",
      alt: "Data Engineering with Microsoft Azure",
      type: "link",
      link: "/courses/data-engineering/data-engineering-with-microsoft-azure"
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

      <section className="home-section">
        <Courses />
      </section>
      <section id="proficiency-training" className="home-section">
        <ProficiencyTrainingSection />
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

      <section className="home-section">
        <VideoTestimonials />
      </section>
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
