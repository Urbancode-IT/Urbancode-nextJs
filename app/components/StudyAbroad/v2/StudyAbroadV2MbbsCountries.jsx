"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal";
import "./StudyAbroadV2MbbsCountries.css";

const MBBS_ASSETS = "/images/study-abroad/study-abroadv2/mbbs";
const FLAG_ASSETS = "/images/study-abroad/study-abroadv2/hero";
const GAP = 14;
const MOBILE_MQ = "(max-width: 900px)";

const TAGS = ["English-medium options", "Eligibility check", "Visa support"];

const COUNTRIES = [
  {
    id: "russia",
    name: "Russia",
    desc: "Long-established medical faculties; English-medium options with strong clinical exposure.",
    image: `${MBBS_ASSETS}/mbbs-campus-grads.webp`,
    flag: `${FLAG_ASSETS}/russia-flag.webp`,
  },
  {
    id: "georgia",
    name: "Georgia",
    desc: "European-style curricula with English-taught programmes and growing international intake.",
    image: `${MBBS_ASSETS}/mbbs-campus-classic.webp`,
    flag: `${FLAG_ASSETS}/georgia-flag.webp`,
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    desc: "Growing number of medical universities admitting international students with clear pathways.",
    image: `${MBBS_ASSETS}/mbbs-campus-modern.webp`,
    flag: `${FLAG_ASSETS}/Kazakhstan-flag.webp`,
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    desc: "Emerging destination with expanding English-medium MBBS seats and supportive campuses.",
    image: `${MBBS_ASSETS}/mbbs-campus-grads.webp`,
    flag: `${FLAG_ASSETS}/Uzbekistan-flag.webp`,
  },
  {
    id: "kyrgyzstan",
    name: "Kyrgyzstan",
    desc: "Popular with international students; verify recognition and fee structures before applying.",
    image: `${MBBS_ASSETS}/mbbs-campus-classic.webp`,
    flag: `${FLAG_ASSETS}/kyrgyzstan-flag.webp`,
  },
  {
    id: "philippines",
    name: "Philippines",
    desc: "US-influenced medical education system, taught in English with familiar clinical training.",
    image: `${MBBS_ASSETS}/mbbs-campus-modern.webp`,
    flag: `${FLAG_ASSETS}/philippines-flag.webp`,
  },
];

export default function StudyAbroadV2MbbsCountries() {
  const trackRef = useRef(null);
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [paused, setPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCountry, setActiveCountry] = useState("MBBS Abroad");

  const maxIndex = COUNTRIES.length - 1;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const scrollToIndex = useCallback((next) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".sa-v2-mbbs-country-card");
    if (!card) return;
    const step = card.offsetWidth + GAP;
    const clamped = Math.max(0, Math.min(next, maxIndex));
    indexRef.current = clamped;
    setIndex(clamped);
    el.scrollTo({ left: clamped * step, behavior: "smooth" });
  }, [maxIndex]);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const sync = () => {
      setIsCarousel(mq.matches);
      if (!mq.matches) {
        indexRef.current = 0;
        setIndex(0);
        trackRef.current?.scrollTo({ left: 0 });
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (!isCarousel || paused) return undefined;
    timerRef.current = window.setInterval(() => {
      const current = indexRef.current;
      scrollToIndex(current >= maxIndex ? 0 : current + 1);
    }, 4000);
    return () => window.clearInterval(timerRef.current);
  }, [isCarousel, paused, maxIndex, scrollToIndex]);

  const openDetails = (name) => {
    setActiveCountry(name);
    setModalOpen(true);
  };

  return (
    <section
      className="sa-v2-mbbs-countries"
      aria-labelledby="sa-v2-mbbs-countries-title"
      id="mbbs-countries"
    >
      <div className="sa-v2-mbbs-countries-inner">
        <div className="sa-v2-mbbs-countries-head-row">
          <div className="sa-v2-mbbs-countries-head">
            <h2
              id="sa-v2-mbbs-countries-title"
              className="sa-v2-mbbs-countries-title"
            >
              Top country for MBBS abroad
            </h2>
            <p className="sa-v2-mbbs-countries-desc">
              Recognition, fees and eligibility change frequently. Always verify
              current requirements with your national medical regulator before
              applying.
            </p>
          </div>

          <div
            className="sa-v2-mbbs-countries-nav"
            hidden={!isCarousel}
            aria-hidden={!isCarousel}
          >
            <button
              type="button"
              className="sa-v2-mbbs-countries-arrow"
              aria-label="Previous MBBS country"
              disabled={!canPrev}
              onClick={() => scrollToIndex(index - 1)}
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              className="sa-v2-mbbs-countries-arrow"
              aria-label="Next MBBS country"
              disabled={!canNext}
              onClick={() => scrollToIndex(index + 1)}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
          className="sa-v2-mbbs-countries-viewport"
          onMouseEnter={() => isCarousel && setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => isCarousel && setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className={`sa-v2-mbbs-countries-grid${isCarousel ? " is-carousel" : ""}`}
            ref={trackRef}
            style={{ "--mbbs-c-gap": `${GAP}px` }}
          >
            {COUNTRIES.map((c) => (
              <article key={c.id} className="sa-v2-mbbs-country-card">
                <div className="sa-v2-mbbs-country-media">
                  <div className="sa-v2-mbbs-country-media-frame">
                    <Image
                      src={c.image}
                      alt={`${c.name} medical campus`}
                      fill
                      sizes="(max-width: 900px) 90vw, 400px"
                      className="sa-v2-mbbs-country-img"
                    />
                    <span
                      className="sa-v2-mbbs-country-shade"
                      aria-hidden="true"
                    />
                    <span className="sa-v2-mbbs-country-badge">MBBS / MD</span>
                  </div>
                  <span className="sa-v2-mbbs-country-flag" aria-hidden="true">
                    <Image
                      src={c.flag}
                      alt=""
                      width={48}
                      height={48}
                      className="sa-v2-mbbs-country-flag-img"
                    />
                  </span>
                </div>

                <div className="sa-v2-mbbs-country-body">
                  <p className="sa-v2-mbbs-country-eyebrow">Study medicine in</p>
                  <h3 className="sa-v2-mbbs-country-name">{c.name}</h3>
                  <p className="sa-v2-mbbs-country-desc">{c.desc}</p>
                  <div className="sa-v2-mbbs-country-tags">
                    {TAGS.map((tag) => (
                      <span key={tag} className="sa-v2-mbbs-country-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="sa-v2-mbbs-country-cta-wrap">
                    <button
                      type="button"
                      className="sa-v2-mbbs-country-cta"
                      onClick={() => openDetails(c.name)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <EnquiryFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseName={`MBBS in ${activeCountry}`}
        leadPlace={`Study Abroad V2 MBBS countries — ${activeCountry}`}
      />
    </section>
  );
}
