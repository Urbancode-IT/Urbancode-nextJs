"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineCodeBracket, HiOutlineGlobeAlt } from "react-icons/hi2";
import { useStudyAbroadFlight } from "@/app/hooks/useStudyAbroadFlight";
import FlightTransition from "../../animations/FlightTransition";

const HERO_ICONS = "/images/home/homepage-v2/hero-icons";

export default function HomeV2Hero() {
  const { isFlying, flightOrigin, navigateToStudyAbroad } = useStudyAbroadFlight();

  const handleStudyAbroad = (e) => {
    e.preventDefault();
    navigateToStudyAbroad("/study-abroad");
  };

  return (
    <section className="home-v2-hero">
      <FlightTransition isAnimating={isFlying} origin={flightOrigin} />
      <div className="home-v2-hero-glow" aria-hidden="true" />

      <div className="home-v2-hero-icons" aria-hidden="true">
        <Image
          src={`${HERO_ICONS}/python3d-clear.png`}
          alt=""
          width={84}
          height={68}
          className="home-v2-hero-icon home-v2-hero-icon--python"
        />
        <Image
          src={`${HERO_ICONS}/AiLogo.png`}
          alt=""
          width={84}
          height={68}
          className="home-v2-hero-icon home-v2-hero-icon--ai"
        />
        <Image
          src={`${HERO_ICONS}/canada3d-clear.png`}
          alt=""
          width={84}
          height={68}
          className="home-v2-hero-icon home-v2-hero-icon--canada"
        />
        <Image
          src={`${HERO_ICONS}/uk3d-clear.png`}
          alt=""
          width={84}
          height={68}
          className="home-v2-hero-icon home-v2-hero-icon--uk"
        />
      </div>

      <div className="home-v2-hero-inner">
        <h1 className="home-v2-hero-title">
          From job ready tech skills to overseas{" "}
          <span className="home-v2-hero-title-accent">
            education
            <Image
              src={`${HERO_ICONS}/hero-titleLine.webp`}
              alt=""
              width={365}
              height={15}
              className="home-v2-hero-title-line"
            />
          </span>
        </h1>

        <div className="home-v2-hero-icons-under-title" aria-hidden="true">
          <Image
            src={`${HERO_ICONS}/AiLogo.png`}
            alt=""
            width={56}
            height={48}
            className="home-v2-hero-icon-inline"
          />
          <Image
            src={`${HERO_ICONS}/uk3d-clear.png`}
            alt=""
            width={56}
            height={48}
            className="home-v2-hero-icon-inline"
          />
        </div>

        <p className="home-v2-hero-desc">
          Explore AI-powered courses with placement guarantee and overseas
          education consulting with expert guidance. One place for every path
          forward!
        </p>

        <div className="home-v2-hero-actions">
          <Link href="/courses-categories" className="home-v2-hero-btn-primary">
            <HiOutlineCodeBracket className="home-v2-hero-btn-icon" aria-hidden="true" />
            Explore IT Courses
          </Link>
          <Link
            href="/study-abroad"
            className="home-v2-hero-btn-secondary"
            onClick={handleStudyAbroad}
          >
            <HiOutlineGlobeAlt className="home-v2-hero-btn-icon" aria-hidden="true" />
            Plan Study Abroad
          </Link>
        </div>
      </div>
    </section>
  );
}
