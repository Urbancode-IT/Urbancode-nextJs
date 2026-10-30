"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { googleReviewsFallback } from "../../../data/googleReviewsFallback";
import "./HomeV2GoogleReviews.css";

const WRITE_REVIEW_LINKS = {
  Velachery: "https://g.page/r/CfH0LR1ZQro0EAE/review",
  Pallikaranai: "https://g.page/r/CQI15nsz8W2IEAE/review",
  Tirunelveli:
    "https://www.google.com/search?q=Urbancode+Training+and+Solutions+Reviews#lrd=0x3b0413c4ce75c0fd:0x4e3fe58c93ab7a34,3",
};

const GAP = 20;

function getVisibleCount(width) {
  if (width < 640) return 1;
  if (width < 900) return 2;
  if (width < 1100) return 3;
  return 4;
}

function Stars({ rating }) {
  return (
    <div className="home-v2-gr-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`home-v2-gr-star${i < rating ? " is-filled" : ""}`}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function HomeV2GoogleReviews() {
  const trackRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, reviews.length - visible);
  const showNav = maxIndex > 0;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/google-reviews");
        const contentType = response.headers.get("content-type") || "";
        if (!response.ok || !contentType.includes("application/json")) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        if (data.success && data.data?.length) {
          setReviews(data.data);
        } else {
          setReviews(googleReviewsFallback);
        }
      } catch {
        setReviews(googleReviewsFallback);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    if (!modalOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modalOpen]);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const next = getVisibleCount(el.clientWidth);
    setVisible(next);
    setIndex((prev) => Math.min(prev, Math.max(0, reviews.length - next)));
  }, [reviews.length]);

  const scrollToIndex = useCallback(
    (next) => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector(".home-v2-gr-card");
      if (!card) return;
      const gap =
        parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) ||
        0;
      const step = card.offsetWidth + gap;
      const clamped = Math.max(0, Math.min(next, reviews.length - visible));
      setIndex(clamped);
      el.scrollTo({ left: clamped * step, behavior: "smooth" });
    },
    [reviews.length, visible]
  );

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (!showNav || paused || loading) return undefined;
    const id = window.setInterval(() => {
      setIndex((current) => {
        const next = current >= maxIndex ? 0 : current + 1;
        const el = trackRef.current;
        const card = el?.querySelector(".home-v2-gr-card");
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
    }, 4000);
    return () => window.clearInterval(id);
  }, [showNav, paused, loading, maxIndex]);

  return (
    <section className="home-v2-gr" aria-labelledby="home-v2-gr-title">
      <div className="home-v2-gr-inner">
        <div className="home-v2-gr-head-row">
          <div className="home-v2-gr-titles">
            <p className="home-v2-gr-eyebrow">Google Reviews</p>
            <h2 id="home-v2-gr-title" className="home-v2-gr-title">
              What learners say on Google.
            </h2>
          </div>
          <button
            type="button"
            className="home-v2-gr-write"
            onClick={() => setModalOpen(true)}
          >
            Write a review
          </button>
        </div>

        <div
          className="home-v2-gr-viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {loading ? (
            <div className="home-v2-gr-loading">Loading reviews…</div>
          ) : (
            <div
              className="home-v2-gr-track"
              ref={trackRef}
              style={{ "--gr-gap": `${GAP}px`, "--gr-visible": visible }}
            >
              {reviews.map((review, idx) => (
                <article
                  key={`${review._id || review.googleReviewId || "r"}-${idx}`}
                  className="home-v2-gr-card"
                >
                  <div className="home-v2-gr-profile">
                    <span className="home-v2-gr-avatar" aria-hidden>
                      G
                    </span>
                    <div className="home-v2-gr-meta">
                      <p className="home-v2-gr-name">{review.authorName}</p>
                      <p className="home-v2-gr-source">Google review</p>
                    </div>
                  </div>
                  <Stars rating={Number(review.rating) || 5} />
                  <p className="home-v2-gr-text">
                    {review.text?.length > 140
                      ? `${review.text.slice(0, 137)}…`
                      : review.text}
                  </p>
                  <span className="home-v2-gr-badge">
                    {review.branchName || "Google"}
                  </span>
                </article>
              ))}
            </div>
          )}
        </div>

        {showNav && (
          <div className="home-v2-gr-nav" aria-label="Reviews navigation">
            <button
              type="button"
              className="home-v2-gr-nav-btn"
              aria-label="Previous reviews"
              disabled={!canPrev}
              onClick={() => scrollToIndex(index - 1)}
            >
              <FiChevronLeft strokeWidth={2.25} />
            </button>
            <button
              type="button"
              className="home-v2-gr-nav-btn"
              aria-label="Next reviews"
              disabled={!canNext}
              onClick={() => scrollToIndex(index + 1)}
            >
              <FiChevronRight strokeWidth={2.25} />
            </button>
          </div>
        )}
      </div>

      {modalOpen && (
        <div
          className="home-v2-gr-modal-overlay"
          onClick={() => setModalOpen(false)}
          role="presentation"
        >
          <div
            className="home-v2-gr-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-v2-gr-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="home-v2-gr-modal-close"
              aria-label="Close"
              onClick={() => setModalOpen(false)}
            >
              <FiX strokeWidth={2.25} />
            </button>
            <div className="home-v2-gr-modal-head">
              <h3 id="home-v2-gr-modal-title">Select a Branch</h3>
              <p>Where would you like to leave a review?</p>
            </div>
            <div className="home-v2-gr-modal-options">
              {Object.entries(WRITE_REVIEW_LINKS).map(([branch, link]) => (
                <a
                  key={branch}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-v2-gr-modal-branch"
                  onClick={() => setModalOpen(false)}
                >
                  {branch}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
