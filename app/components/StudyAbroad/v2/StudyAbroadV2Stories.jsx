"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./StudyAbroadV2Stories.css";

const GAP = 24;
const MOBILE_MQ = "(max-width: 900px)";
const DESKTOP_VISIBLE = 3;

const STORIES = [
  {
    id: "sriram",
    name: "Sriram",
    university: "Greenwich University",
    country: "UK",
    quote:
      "Urbancode helped me through every step of my UK student visa process. Their scholarship guidance was a lifesaver!",
  },
  {
    id: "ashmathi",
    name: "Ashmathi",
    university: "Dublin Business School",
    country: "Ireland",
    quote:
      "The counseling sessions were very informative. They helped me choose the perfect course that aligned with my career goals.",
  },
  {
    id: "vishnu",
    name: "Vishnu",
    university: "Coventry University",
    country: "UK",
    quote:
      "Got my UK visa in the first attempt thanks to their rigorous interview prep. Highly recommend their services!",
  },
];

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function StudyAbroadV2Stories() {
  const trackRef = useRef(null);
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, STORIES.length - 1);
  const showNav = isCarousel && STORIES.length > 1;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const scrollToIndex = useCallback((next) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".sa-v2-story-card");
    if (!card) return;
    const step = card.offsetWidth + GAP;
    const clamped = Math.max(0, Math.min(next, STORIES.length - 1));
    indexRef.current = clamped;
    setIndex(clamped);
    el.scrollTo({ left: clamped * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const sync = () => {
      const needsCarousel =
        mq.matches || STORIES.length > DESKTOP_VISIBLE;
      setIsCarousel(needsCarousel);
      if (!needsCarousel) {
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
    if (!showNav || paused) return undefined;
    timerRef.current = window.setInterval(() => {
      const current = indexRef.current;
      scrollToIndex(current >= maxIndex ? 0 : current + 1);
    }, 4500);
    return () => window.clearInterval(timerRef.current);
  }, [showNav, paused, maxIndex, scrollToIndex]);

  return (
    <section
      className="sa-v2-stories"
      aria-labelledby="sa-v2-stories-title"
      id="student-stories"
    >
      <div className="sa-v2-stories-inner">
        <div className="sa-v2-stories-head-row">
          <div className="sa-v2-stories-head">
            <p className="sa-v2-stories-eyebrow">The voice that matters</p>
            <h2 id="sa-v2-stories-title" className="sa-v2-stories-title">
              Stories from our students
            </h2>
            <p className="sa-v2-stories-desc">
              We only publish verified testimonials shared with the
              student&apos;s consent.
            </p>
          </div>

          <div
            className="sa-v2-stories-nav"
            hidden={!showNav}
            aria-hidden={!showNav}
          >
            <button
              type="button"
              className="sa-v2-stories-arrow"
              aria-label="Previous story"
              disabled={!canPrev}
              onClick={() => scrollToIndex(index - 1)}
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              className="sa-v2-stories-arrow"
              aria-label="Next story"
              disabled={!canNext}
              onClick={() => scrollToIndex(index + 1)}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
          className="sa-v2-stories-viewport"
          onMouseEnter={() => showNav && setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => showNav && setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className={`sa-v2-stories-grid${isCarousel ? " is-carousel" : ""}`}
            ref={trackRef}
            style={{ "--story-gap": `${GAP}px` }}
          >
            {STORIES.map((story) => (
              <article key={story.id} className="sa-v2-story-card">
                <div className="sa-v2-story-profile">
                  <span className="sa-v2-story-avatar" aria-hidden="true">
                    {getInitials(story.name)}
                  </span>
                  <div className="sa-v2-story-meta">
                    <p className="sa-v2-story-name">{story.name}</p>
                    <p className="sa-v2-story-place">
                      {story.university} · {story.country}
                    </p>
                  </div>
                </div>
                <p className="sa-v2-story-quote">{story.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
