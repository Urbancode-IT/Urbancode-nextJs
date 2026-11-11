"use client";

import Link from "next/link";
import { useStudyAbroadFlight } from "@/app/hooks/useStudyAbroadFlight";
import FlightTransition from "../../animations/FlightTransition";

export default function HomeV2Hero() {
  const { isFlying, flightOrigin, navigateToStudyAbroad } = useStudyAbroadFlight();

  const handleStudyAbroad = (e) => {
    e.preventDefault();
    navigateToStudyAbroad("/study-abroad");
  };

  return (
    <section className="home-v2-hero">
      <FlightTransition isAnimating={isFlying} origin={flightOrigin} />

      <div className="home-v2-hero-inner">
        <h1 className="home-v2-hero-title">
          <span className="home-v2-hero-line">From job ready tech skills</span>
          <span className="home-v2-hero-line">
            to overseas{" "}
            <span className="home-v2-hero-title-accent">education</span>
          </span>
        </h1>

        <p className="home-v2-hero-desc">
          <span className="home-v2-hero-desc-desktop">
            Explore AI-powered courses with placement guarantee and 
            <br />
            overseas education consulting with expert guidance. 
          </span>
          <span className="home-v2-hero-desc-mobile">
            <span className="home-v2-hero-desc-line">
              Explore AI-powered courses with placement
            </span>
            <span className="home-v2-hero-desc-line">
              guarantee and overseas education consulting
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
            onClick={handleStudyAbroad}
          >
            Plan Study Abroad
          </Link>
        </div>
      </div>
    </section>
  );
}
