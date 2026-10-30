"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { offerLettersData } from "../../../data/offerLettersData";
import "./HomeV2OfferLetters.css";

const GAP = 20;
const OFFERS = offerLettersData.filter((item) => item?.src);

function getVisibleCount(width) {
  if (width < 640) return 1;
  if (width < 900) return 2;
  if (width < 1100) return 3;
  return 4;
}

export default function HomeV2OfferLetters() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);
  const [lightbox, setLightbox] = useState(null);

  const maxIndex = Math.max(0, OFFERS.length - visible);
  const showNav = maxIndex > 0;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const next = getVisibleCount(el.clientWidth);
    setVisible(next);
    setIndex((prev) => Math.min(prev, Math.max(0, OFFERS.length - next)));
  }, []);

  const scrollToIndex = useCallback(
    (next) => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector(".home-v2-offers-card");
      if (!card) return;
      const gap =
        parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) ||
        0;
      const step = card.offsetWidth + gap;
      const clamped = Math.max(0, Math.min(next, OFFERS.length - visible));
      setIndex(clamped);
      el.scrollTo({ left: clamped * step, behavior: "smooth" });
    },
    [visible]
  );

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (!showNav) return undefined;
    const id = window.setInterval(() => {
      setIndex((current) => {
        const next = current >= maxIndex ? 0 : current + 1;
        const el = trackRef.current;
        const card = el?.querySelector(".home-v2-offers-card");
        if (el && card) {
          const gap =
            parseFloat(
              getComputedStyle(el).columnGap || getComputedStyle(el).gap
            ) || 0;
          el.scrollTo({
            left: next * (card.offsetWidth + gap),
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 4200);
    return () => window.clearInterval(id);
  }, [showNav, maxIndex]);

  if (!OFFERS.length) return null;

  return (
    <section className="home-v2-offers" aria-labelledby="home-v2-offers-title">
      <div className="home-v2-offers-inner">
        <div className="home-v2-offers-head">
          <div className="home-v2-offers-titles">
            <p className="home-v2-offers-eyebrow">Placement proof</p>
            <h2 id="home-v2-offers-title" className="home-v2-offers-title">
              Real offer letters. Real careers.
            </h2>
            <p className="home-v2-offers-desc">
              Sample offers our learners receive after training with Urbancode.
            </p>
          </div>
          {showNav && (
            <div className="home-v2-offers-nav" aria-label="Offer letters navigation">
              <button
                type="button"
                className="home-v2-offers-arrow"
                aria-label="Previous offer"
                disabled={!canPrev}
                onClick={() => scrollToIndex(index - 1)}
              >
                <FiArrowLeft strokeWidth={1.75} />
              </button>
              <button
                type="button"
                className="home-v2-offers-arrow"
                aria-label="Next offer"
                disabled={!canNext}
                onClick={() => scrollToIndex(index + 1)}
              >
                <FiArrowRight strokeWidth={1.75} />
              </button>
            </div>
          )}
        </div>

        <div className="home-v2-offers-viewport">
          <div
            className="home-v2-offers-track"
            ref={trackRef}
            style={{
              "--offers-gap": `${GAP}px`,
              "--offers-visible": visible,
            }}
          >
            {OFFERS.map((offer) => (
              <button
                key={offer.id}
                type="button"
                className="home-v2-offers-card"
                onClick={() => setLightbox(offer)}
                aria-label={`View ${offer.alt}`}
              >
                <span className="home-v2-offers-frame">
                  <img
                    src={offer.src}
                    alt={offer.alt}
                    className="home-v2-offers-img"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="home-v2-offers-company">{offer.company}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="home-v2-offers-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="home-v2-offers-lightbox-close"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="home-v2-offers-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
