"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";
import { DESTINATION_IMAGES } from "@/app/study-abroad/destinationImages";
import "./StudyAbroadV2Destinations.css";

const FLAG_ASSETS = "/images/study-abroad/study-abroadv2/hero";
const GAP = 14;
const MOBILE_MQ = "(max-width: 900px)";

const DESTINATIONS = [
  {
    id: "usa",
    name: "United States",
    desc: "Flexible curricula and a wide range of programs.",
    href: "/study-abroad/usa",
    image: DESTINATION_IMAGES.usa,
    flag: `${FLAG_ASSETS}/us-flag.webp`,
  },
  {
    id: "canada",
    name: "Canada",
    desc: "Welcoming communities and high quality of life.",
    href: "/study-abroad/canada",
    image: DESTINATION_IMAGES.canada,
    flag: `${FLAG_ASSETS}/canada-flag.webp`,
  },
  {
    id: "australia",
    name: "Australia",
    desc: "Practical learning in vibrant coastal cities.",
    href: "/study-abroad/australia",
    image: DESTINATION_IMAGES.australia,
    flag: `${FLAG_ASSETS}/autralia-flag.webp`,
  },
  {
    id: "germany",
    name: "Germany",
    desc: "Strong research culture and engineering programs.",
    href: "/study-abroad/germany",
    image: DESTINATION_IMAGES.germany,
    flag: `${FLAG_ASSETS}/germany-flag.webp`,
  },
  {
    id: "ireland",
    name: "Ireland",
    desc: "English-speaking hub for technology and business.",
    href: "/study-abroad/ireland",
    image: DESTINATION_IMAGES.ireland,
    flag: `${FLAG_ASSETS}/ireland-flag.webp`,
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    desc: "Safe, scenic and student-friendly environment.",
    href: "/study-abroad/new-zealand",
    image: DESTINATION_IMAGES["new-zealand"],
    flag: `${FLAG_ASSETS}/newzealand-flag.webp`,
  },
  {
    id: "uk",
    name: "United Kingdom",
    desc: "World-class universities and rich academic heritage.",
    href: "/study-abroad/uk",
    image: DESTINATION_IMAGES.uk,
    flag: `${FLAG_ASSETS}/uk-flag.webp`,
  },
  {
    id: "singapore",
    name: "Singapore",
    desc: "Asia’s education hub with strong career pathways.",
    href: "/study-abroad/singapore",
    image: DESTINATION_IMAGES.singapore,
    flag: `${FLAG_ASSETS}/singapore-flag.webp`,
  },
];

export default function StudyAbroadV2Destinations() {
  const trackRef = useRef(null);
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [paused, setPaused] = useState(false);

  const maxIndex = DESTINATIONS.length - 1;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const scrollToIndex = useCallback((next) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".sa-v2-dest-card");
    if (!card) return;
    const step = card.offsetWidth + GAP;
    const clamped = Math.max(0, Math.min(next, DESTINATIONS.length - 1));
    indexRef.current = clamped;
    setIndex(clamped);
    el.scrollTo({ left: clamped * step, behavior: "smooth" });
  }, []);

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

  return (
    <section
      className="sa-v2-destinations"
      aria-labelledby="sa-v2-destinations-title"
      id="destinations"
    >
      <div className="sa-v2-destinations-inner">
        <div className="sa-v2-destinations-head-row">
          <div className="sa-v2-destinations-head">
            <h2
              id="sa-v2-destinations-title"
              className="sa-v2-destinations-title"
            >
              Top study destinations
            </h2>
            <p className="sa-v2-destinations-desc">
              Choose your pathway to global excellence. We represent top
              universities across 8+ major educational hubs worldwide.
            </p>
          </div>

          <div
            className="sa-v2-destinations-nav"
            hidden={!isCarousel}
            aria-hidden={!isCarousel}
          >
            <button
              type="button"
              className="sa-v2-destinations-arrow"
              aria-label="Previous destination"
              disabled={!canPrev}
              onClick={() => scrollToIndex(index - 1)}
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              className="sa-v2-destinations-arrow"
              aria-label="Next destination"
              disabled={!canNext}
              onClick={() => scrollToIndex(index + 1)}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
          className="sa-v2-destinations-viewport"
          onMouseEnter={() => isCarousel && setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => isCarousel && setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className={`sa-v2-destinations-grid${isCarousel ? " is-carousel" : ""}`}
            ref={trackRef}
            style={{ "--dest-gap": `${GAP}px` }}
          >
            {DESTINATIONS.map((dest) => (
              <Link
                key={dest.id}
                href={dest.href}
                className="sa-v2-dest-card"
                aria-label={`Explore ${dest.name}`}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 900px) 90vw, (max-width: 1100px) 33vw, 295px"
                  className="sa-v2-dest-card-image"
                />
                <span className="sa-v2-dest-card-overlay" aria-hidden="true" />

                <span className="sa-v2-dest-flag" aria-hidden="true">
                  <Image
                    src={dest.flag}
                    alt=""
                    width={24}
                    height={24}
                    className="sa-v2-dest-flag-img"
                  />
                </span>

                <div className="sa-v2-dest-card-body">
                  <h3 className="sa-v2-dest-card-title">{dest.name}</h3>
                  <p className="sa-v2-dest-card-desc">{dest.desc}</p>
                  <div className="sa-v2-dest-card-footer">
                    <span className="sa-v2-dest-explore">Explore</span>
                    <span className="sa-v2-dest-arrow" aria-hidden="true">
                      <HiArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
