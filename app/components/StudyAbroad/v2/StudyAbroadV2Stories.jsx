"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCode, FiGlobe, FiTarget } from "react-icons/fi";
import "./StudyAbroadV2Stories.css";

const GAP = 28;
const CARD_W = 380;

/** Retain existing study-abroad testimonials; first 3 Figma accent colors. */
const STORIES = [
  {
    id: "sriram",
    name: "Sriram",
    program: "Greenwich University · UK",
    quote:
      "Urbancode helped me through every step of my UK student visa process. Their scholarship guidance was a lifesaver!",
    theme: "orange",
    Icon: FiCode,
  },
  {
    id: "ashwathi",
    name: "Aswathi",
    program: "Dublin Business School · Ireland",
    quote:
      "The counseling sessions were very informative. They helped me choose the perfect course that aligned with my career goals.",
    theme: "green",
    Icon: FiTarget,
  },
  {
    id: "vishnu",
    name: "Vishnu",
    program: "Coventry University · UK",
    quote:
      "Got my UK visa in the first attempt thanks to their rigorous interview prep. Highly recommend their services!",
    theme: "blue",
    Icon: FiGlobe,
  },
];

export default function StudyAbroadV2Stories() {
  const trackRef = useRef(null);
  const indexRef = useRef(0);
  const maxIndexRef = useRef(0);
  const timerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const needsScroll = maxIndex > 0;
  const canPrev = index > 0;
  const canNext = index < maxIndex;
  const progress = maxIndex <= 0 ? 1 : index / maxIndex;

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".sa-v2-alumni-card");
    if (!card) return;
    const step = card.offsetWidth + GAP;
    const overflow = el.scrollWidth - el.clientWidth;
    const nextMax = overflow > 8 ? Math.max(0, Math.ceil(overflow / step)) : 0;
    maxIndexRef.current = nextMax;
    setMaxIndex(nextMax);
    if (indexRef.current > nextMax) {
      indexRef.current = nextMax;
      setIndex(nextMax);
      el.scrollTo({ left: nextMax * step, behavior: "auto" });
    }
  }, []);

  const scrollToIndex = useCallback((next) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".sa-v2-alumni-card");
    if (!card) return;
    const step = card.offsetWidth + GAP;
    const clamped = Math.max(0, Math.min(next, maxIndexRef.current));
    indexRef.current = clamped;
    setIndex(clamped);
    el.scrollTo({ left: clamped * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    measure();
    const el = trackRef.current;
    if (!el) return undefined;
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    ro?.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    if (paused || maxIndex <= 0) return undefined;
    timerRef.current = window.setInterval(() => {
      const current = indexRef.current;
      const max = maxIndexRef.current;
      scrollToIndex(current >= max ? 0 : current + 1);
    }, 4500);
    return () => window.clearInterval(timerRef.current);
  }, [paused, maxIndex, scrollToIndex]);

  const onTrackScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".sa-v2-alumni-card");
    if (!card) return;
    const step = card.offsetWidth + GAP;
    const next = Math.round(el.scrollLeft / step);
    const clamped = Math.max(0, Math.min(next, maxIndexRef.current));
    if (clamped !== indexRef.current) {
      indexRef.current = clamped;
      setIndex(clamped);
    }
  };

  return (
    <section
      className="sa-v2-alumni"
      aria-labelledby="sa-v2-alumni-title"
      id="student-stories"
    >
      <div className="sa-v2-alumni-inner">
        <header className="sa-v2-alumni-head">
          <p className="sa-v2-alumni-eyebrow">What our alumni says</p>
          <h2 id="sa-v2-alumni-title" className="sa-v2-alumni-title">
            Alumni
          </h2>
        </header>

        <div
          className={`sa-v2-alumni-stage${needsScroll ? "" : " sa-v2-alumni-stage--static"}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className="sa-v2-alumni-track"
            ref={trackRef}
            onScroll={onTrackScroll}
            style={{ "--alumni-gap": `${GAP}px`, "--alumni-card-w": `${CARD_W}px` }}
          >
            {STORIES.map((story) => {
              const Icon = story.Icon;
              return (
                <article
                  key={story.id}
                  className={`sa-v2-alumni-card sa-v2-alumni-card--${story.theme}`}
                >
                  <span className="sa-v2-alumni-icon" aria-hidden="true">
                    <Icon />
                  </span>

                  <p className="sa-v2-alumni-quote">{story.quote}</p>

                  <div className="sa-v2-alumni-foot">
                    <p className="sa-v2-alumni-name">{story.name}</p>
                    <p className="sa-v2-alumni-program">{story.program}</p>
                    <span className="sa-v2-alumni-line" aria-hidden="true" />
                  </div>
                </article>
              );
            })}
          </div>

          {needsScroll ? (
            <div className="sa-v2-alumni-controls">
              <div
                className="sa-v2-alumni-progress"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress * 100)}
                aria-label="Alumni carousel progress"
              >
                <span
                  className="sa-v2-alumni-progress-fill"
                  style={{ width: `${Math.max(12, progress * 100)}%` }}
                />
              </div>

              <div className="sa-v2-alumni-nav">
                <button
                  type="button"
                  className="sa-v2-alumni-arrow"
                  aria-label="Previous alumni"
                  disabled={!canPrev}
                  onClick={() => scrollToIndex(index - 1)}
                >
                  <FiArrowLeft />
                </button>
                <button
                  type="button"
                  className="sa-v2-alumni-arrow"
                  aria-label="Next alumni"
                  disabled={!canNext}
                  onClick={() => scrollToIndex(index + 1)}
                >
                  <FiArrowRight />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
