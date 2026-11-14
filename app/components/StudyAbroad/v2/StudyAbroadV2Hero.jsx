"use client";

import Image from "next/image";
import Link from "next/link";
import "./StudyAbroadV2Hero.css";

const HERO_ASSETS = "/images/study-abroad/study-abroadv2/hero";

const DESTINATIONS = [
  { name: "United States", flag: `${HERO_ASSETS}/us-flag.webp` },
  { name: "Canada", flag: `${HERO_ASSETS}/canada-flag.webp` },
  { name: "Australia", flag: `${HERO_ASSETS}/autralia-flag.webp` },
  { name: "Germany", flag: `${HERO_ASSETS}/germany-flag.webp` },
  { name: "Ireland", flag: `${HERO_ASSETS}/ireland-flag.webp` },
  { name: "New Zealand", flag: `${HERO_ASSETS}/newzealand-flag.webp` },
  { name: "Russia", flag: `${HERO_ASSETS}/russia-flag.webp` },
  { name: "Georgia", flag: `${HERO_ASSETS}/georgia-flag.webp` },
  { name: "Kazakhstan", flag: `${HERO_ASSETS}/Kazakhstan-flag.webp` },
  { name: "Uzbekistan", flag: `${HERO_ASSETS}/Uzbekistan-flag.webp` },
];

export default function StudyAbroadV2Hero() {
  const tickerItems = [...DESTINATIONS, ...DESTINATIONS];

  const handleStudyIeltsClick = (e) => {
    const el = document.getElementById("english-proficiency");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="sa-v2-hero" aria-labelledby="sa-v2-hero-title">
      <div className="sa-v2-hero-frame">
        <div className="sa-v2-hero-media">
          <Image
            src={`${HERO_ASSETS}/study-abroad-heroimage.webp`}
            alt="Student dreaming among global landmarks"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1376px"
            className="sa-v2-hero-img"
          />
          <div className="sa-v2-hero-shade" aria-hidden="true" />
        </div>

        <div className="sa-v2-hero-content">
          <h1 id="sa-v2-hero-title" className="sa-v2-hero-title">
            Design your international
            <br />
            academic{" "}
            <span className="sa-v2-hero-title-accent">future today</span>
          </h1>

          <p className="sa-v2-hero-desc">
            Personal counselling for universities, MBBS programs, visas and
            scholarships across the world&apos;s leading study destinations.
          </p>

          <div className="sa-v2-hero-actions">
            <Link href="#destinations" className="sa-v2-hero-btn-primary">
              Explore Study Destinations
            </Link>
            <Link
              href="#english-proficiency"
              className="sa-v2-hero-btn-secondary"
              onClick={handleStudyIeltsClick}
            >
              Study IELTS
            </Link>
          </div>
        </div>

        <div className="sa-v2-hero-ticker" aria-label="Study destinations">
          <div className="sa-v2-hero-ticker-track">
            {tickerItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="sa-v2-hero-ticker-item"
              >
                <Image
                  src={item.flag}
                  alt=""
                  width={28}
                  height={20}
                  className="sa-v2-hero-flag"
                  aria-hidden="true"
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
