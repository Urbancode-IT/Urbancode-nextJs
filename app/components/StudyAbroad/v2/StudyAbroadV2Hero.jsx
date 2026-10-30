"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal";
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
  const [consultOpen, setConsultOpen] = useState(false);
  const tickerItems = [...DESTINATIONS, ...DESTINATIONS];

  return (
    <section className="sa-v2-hero" aria-labelledby="sa-v2-hero-title">
      <div className="sa-v2-hero-frame">
        <div className="sa-v2-hero-media">
          <Image
            src={`${HERO_ASSETS}/study-abroad-hero-image.webp`}
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
            <button
              type="button"
              className="sa-v2-hero-btn-secondary"
              onClick={() => setConsultOpen(true)}
            >
              Book Free Consultation
            </button>
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

      <EnquiryFormModal
        isOpen={consultOpen}
        onClose={() => setConsultOpen(false)}
        isDemoMode={true}
        isSelectMode={true}
        customTitle="Book a Free Consultation"
        leadPlace="Study Abroad V2 hero — Book Free Consultation"
        useExternalCourses={false}
        extraOptions={[
          "Study in UK",
          "Study in USA",
          "Study in Canada",
          "Study in Australia",
          "Study in Germany",
          "Study in Ireland",
          "Study in New Zealand",
          "Study in Dubai",
          "Help me choose",
        ]}
      />
    </section>
  );
}
