"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { googleReviewsFallback } from "../../../data/googleReviewsFallback";
import ScrollHintText from "./ScrollHintText";
import "./HomeV2GoogleReviews.css";

const WRITE_REVIEW_LINKS = {
  Velachery: "https://g.page/r/CfH0LR1ZQro0EAE/review",
  Pallikaranai: "https://g.page/r/CQI15nsz8W2IEAE/review",
  Tirunelveli:
    "https://www.google.com/search?q=Urbancode+Training+and+Solutions+tirunelveli#lrd=",
};

const BRANCH_TABS = [
  { id: "All", label: "All Branches" },
  { id: "Velachery", label: "Velachery" },
  { id: "Pallikaranai", label: "Pallikaranai" },
  { id: "Tirunelveli", label: "Tirunelveli" },
];

/** Merge API reviews with local fallback for complete branch coverage */
function mergeBranchReviews(apiReviews, fallback) {
  const list = Array.isArray(apiReviews) ? apiReviews : [];
  const branchesInApi = new Set(
    list.map((r) => r.branchName).filter(Boolean)
  );
  const missingFallback = fallback.filter(
    (r) => r.branchName && !branchesInApi.has(r.branchName)
  );
  return [...list, ...missingFallback];
}

/** Determine course tag dynamically based on review text if not explicitly provided */
function getReviewCourse(review) {
  if (review.course) return review.course;
  const text = (review.text || "").toLowerCase();
  if (
    text.includes("data analyst") ||
    text.includes("data analytics") ||
    text.includes("power bi") ||
    text.includes("powerbi")
  ) {
    return "Data Analytics";
  }
  if (text.includes("data science") || text.includes("machine learning")) {
    return "Data Science";
  }
  if (text.includes("generative ai") || text.includes("gen ai")) {
    return "Generative AI";
  }
  if (text.includes("ielts")) {
    return "IELTS Training";
  }
  if (text.includes("pte")) {
    return "PTE Training";
  }
  if (
    text.includes("study abroad") ||
    text.includes("visa") ||
    text.includes("overseas")
  ) {
    return "Study Abroad";
  }
  if (
    text.includes("testing") ||
    text.includes("selenium") ||
    text.includes("automation testing") ||
    text.includes("sdet")
  ) {
    return "Software Testing";
  }
  if (text.includes("python")) {
    return "Python Full Stack";
  }
  if (text.includes("sql") || text.includes("database")) {
    return "SQL & Analytics";
  }
  if (text.includes("placement") || text.includes("career")) {
    return "Career Placement";
  }
  return "Full Stack";
}

function Stars({ rating = 5 }) {
  return (
    <div className="home-v2-gr-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`home-v2-gr-star${i < rating ? " is-filled" : ""}`}
          aria-hidden="true"
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
  const [activeBranch, setActiveBranch] = useState("All");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const filteredReviews =
    activeBranch === "All"
      ? reviews
      : reviews.filter(
          (r) => (r.branchName || "Velachery") === activeBranch
        );

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
          setReviews(mergeBranchReviews(data.data, googleReviewsFallback));
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

  // Lock body scroll when branch modal is open
  useEffect(() => {
    if (!modalOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modalOpen]);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, filteredReviews]);

  const handleBranchChange = (branchId) => {
    setActiveBranch(branchId);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".home-v2-gr-card");
    const step = card ? card.offsetWidth + 20 : 340;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  // Subtle auto-scroll when not hovered
  useEffect(() => {
    if (isPaused || loading || filteredReviews.length <= 4) return undefined;
    const timer = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 15) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const card = el.querySelector(".home-v2-gr-card");
        const step = card ? card.offsetWidth + 20 : 340;
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, loading, filteredReviews.length]);

  return (
    <section className="home-v2-gr" aria-labelledby="home-v2-gr-title">
      {/* Background Watermark Logo - positioned high up behind header & cards */}
      <div className="home-v2-gr-watermark" aria-hidden="true">
        <img
          src="/images/home/homepage-v2/google-reviews/google_background.webp"
          alt=""
          className="home-v2-gr-watermark-img"
        />
      </div>

      <div className="home-v2-gr-container">
        {/* Header Section */}
        <div className="home-v2-gr-header">
          {/* Left Titles */}
          <div className="home-v2-gr-titles">
            <span className="home-v2-gr-eyebrow">GOOGLE REVIEWS</span>
            <h2 id="home-v2-gr-title" className="home-v2-gr-title">
              What learners say on Google.
            </h2>
          </div>

          {/* Right Column: Rating Card & Branch Filter Tabs */}
          <div className="home-v2-gr-right-col">
            {/* Top-Right Google Rating Summary Card */}
            <div className="home-v2-gr-rating-card">
              {/* Glass shine and dark tint layers from Figma */}
              <div className="home-v2-gr-glass-tint" aria-hidden="true" />
              <div className="home-v2-gr-glass-shine" aria-hidden="true" />

              <div className="home-v2-gr-rating-icon-box">
                <img
                  src="/images/home/homepage-v2/google-reviews/google_logo.webp"
                  alt="Google"
                  className="home-v2-gr-rating-gicon"
                  width={27}
                  height={27}
                />
              </div>

              <div className="home-v2-gr-rating-info">
                <div className="home-v2-gr-rating-score">4.6 / 5</div>
                <div
                  className="home-v2-gr-rating-stars-row"
                  aria-hidden="true"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="home-v2-gr-gold-star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="home-v2-gr-rating-subtitle">
                  All branches · connect Google rating
                </p>
              </div>

              <button
                type="button"
                className="home-v2-gr-write-btn"
                onClick={() => setModalOpen(true)}
              >
                Write a review
              </button>
            </div>

            {/* Filter Tabs by Branch */}
            <div
              className="home-v2-gr-tabs-pill"
              role="tablist"
              aria-label="Filter reviews by branch"
            >
              {/* Glass shine and dark tint layers from Figma */}
              <div className="home-v2-gr-glass-tint" aria-hidden="true" />
              <div className="home-v2-gr-glass-shine" aria-hidden="true" />

              {BRANCH_TABS.map((tab) => {
                const isActive = activeBranch === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`home-v2-gr-tab-btn${isActive ? " is-active" : ""}`}
                    onClick={() => handleBranchChange(tab.id)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Carousel & Cards Track Area */}
        <div
          className="home-v2-gr-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {loading ? (
            <div className="home-v2-gr-loading">Loading reviews…</div>
          ) : filteredReviews.length === 0 ? (
            <div className="home-v2-gr-empty">
              No reviews for {activeBranch} yet.
            </div>
          ) : (
            <div className="home-v2-gr-track" ref={trackRef}>
              {filteredReviews.map((review, idx) => {
                const author = review.authorName || "Reviewer";
                const initial = author.trim().charAt(0).toUpperCase() || "R";
                const branch = review.branchName || "Velachery";
                const course = getReviewCourse(review);

                return (
                  <article
                    key={`${review._id || review.googleReviewId || "r"}-${idx}`}
                    className="home-v2-gr-card"
                  >
                    {/* Card Top: Avatar, Name, Source & G Logo */}
                    <div className="home-v2-gr-card-head">
                      <div className="home-v2-gr-card-profile">
                        <div className="home-v2-gr-avatar" aria-hidden="true">
                          {initial}
                        </div>
                        <div className="home-v2-gr-user-info">
                          <h3 className="home-v2-gr-author-name">{author}</h3>
                          <span className="home-v2-gr-source-label">
                            Posted on Google
                          </span>
                        </div>
                      </div>

                      <img
                        src="/images/home/homepage-v2/google-reviews/google_logo.webp"
                        alt="Google"
                        className="home-v2-gr-card-gicon"
                        width={20}
                        height={20}
                      />
                    </div>

                    {/* Card Rating Stars */}
                    <Stars rating={Number(review.rating) || 5} />

                    {/* Card Review Content with Invisible Mini Scroller */}
                    <div className="home-v2-gr-card-body">
                      <ScrollHintText className="home-v2-gr-card-quote">
                        “{review.text}”
                      </ScrollHintText>
                    </div>

                    {/* Card Footer Badges: Branch Pin + Course */}
                    <div className="home-v2-gr-card-footer">
                      <span className="home-v2-gr-branch-pill">
                        <img
                          src="/images/home/homepage-v2/google-reviews/location_icon.webp"
                          alt=""
                          className="home-v2-gr-pin-icon"
                          width={12}
                          height={12}
                          aria-hidden="true"
                        />
                        {branch}
                      </span>
                      <span className="home-v2-gr-course-pill">{course}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Navigation Controls */}
          {filteredReviews.length > 4 && (
            <div className="home-v2-gr-nav" aria-label="Reviews navigation">
              <button
                type="button"
                className="home-v2-gr-nav-btn"
                aria-label="Previous reviews"
                disabled={!canScrollLeft}
                onClick={() => scrollByCard(-1)}
              >
                <FiChevronLeft strokeWidth={2.25} />
              </button>
              <button
                type="button"
                className="home-v2-gr-nav-btn"
                aria-label="Next reviews"
                disabled={!canScrollRight}
                onClick={() => scrollByCard(1)}
              >
                <FiChevronRight strokeWidth={2.25} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Write a Review Branch Modal */}
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
