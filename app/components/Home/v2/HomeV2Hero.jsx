"use client";

import Link from "next/link";
import { useStudyAbroadFlight } from "@/app/hooks/useStudyAbroadFlight";
import FlightTransition from "../../animations/FlightTransition";

const BANNER_BASE = "/images/home/homepage-v2/small-banners";

/** Home hero scroller — small-banners with course/page links. */
const HERO_BANNERS = [
  {
    id: "software-engineering",
    src: `${BANNER_BASE}/HomeSoftwareEngineeringbanner.webp`,
    alt: "AI Software Engineering — 6-Months Certification Program",
    href: "/courses/fullstack-development/ai-software-engineering",
  },
  {
    id: "data-engineering",
    src: `${BANNER_BASE}/homeDEbanner.webp`,
    alt: "Data Engineering with Microsoft Azure",
    href: "/courses/data-engineering/data-engineering-with-microsoft-azure",
  },
  {
    id: "sas",
    src: `${BANNER_BASE}/homeSasbanner.webp`,
    alt: "SAS course",
    href: "/courses/ai-and-data-science/sas",
  },
  {
    id: "study-abroad",
    src: `${BANNER_BASE}/homeStudyAbroadbanner.webp`,
    alt: "Study Abroad",
    href: "/study-abroad",
    useFlight: true,
  },
  {
    id: "ielts",
    src: `${BANNER_BASE}/homeieltsbanner.webp`,
    alt: "IELTS Training",
    href: "/study-abroad#english-proficiency",
    useFlight: true,
  },
];

export default function HomeV2Hero() {
  const { isFlying, flightOrigin, navigateToStudyAbroad } = useStudyAbroadFlight();

  const handleStudyAbroadCta = (e) => {
    e.preventDefault();
    navigateToStudyAbroad("/study-abroad");
  };

  const handleBannerClick = (e, banner) => {
    if (!banner.useFlight) return;
    e.preventDefault();
    navigateToStudyAbroad(banner.href);
  };

  const renderBanner = (banner, key) => (
    <Link
      key={key}
      href={banner.href}
      className="home-v2-hero-card"
      aria-label={banner.alt}
      onClick={(e) => handleBannerClick(e, banner)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={banner.src} alt={banner.alt} loading="lazy" />
    </Link>
  );

  return (
    <section className="home-v2-hero">
      <FlightTransition isAnimating={isFlying} origin={flightOrigin} />

      <div className="home-v2-hero-inner">
        <h1 className="home-v2-hero-title">
          <span className="home-v2-hero-line"> Gateway to tech careers and</span>
          <span className="home-v2-hero-line">
           overseas{" "}
            <span className="home-v2-hero-title-accent">education</span>
          </span>
        </h1>

        <p className="home-v2-hero-desc">
          <span className="home-v2-hero-desc-desktop">
            Explore AI-powered courses with placement guarantee and 
            <br />
            study abroad consulting with expert guidance. 
          </span>
          <span className="home-v2-hero-desc-mobile">
            <span className="home-v2-hero-desc-line">
              Explore AI-powered courses with placement
            </span>
            <span className="home-v2-hero-desc-line">
              guarantee and study abroad consulting
            </span>
            <span className="home-v2-hero-desc-line">
              with expert guidance.
            </span>
          </span>
        </p>

        <div className="home-v2-hero-actions">
          <Link href="/courses-categories" className="home-v2-hero-btn-primary">
            Explore IT Courses
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/study-abroad"
            className="home-v2-hero-btn-secondary"
            onClick={handleStudyAbroadCta}
          >
            Plan Study Abroad
          </Link>
        </div>
      </div>

      <div className="home-v2-hero-carousel-wrap" aria-label="Featured programs">
        <div className="home-v2-hero-carousel-track">
          {HERO_BANNERS.map((banner) => renderBanner(banner, banner.id))}
          {HERO_BANNERS.map((banner) =>
            renderBanner(banner, `${banner.id}-dup`)
          )}
        </div>
      </div>
    </section>
  );
}
