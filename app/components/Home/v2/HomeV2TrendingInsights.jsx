"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { institutionVideosData } from "../../../data/institutionVideosData";
import "./HomeV2TrendingInsights.css";

const INSTAGRAM_HANDLE = "urbancode_edutech";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
const GAP = 24;
const AUTO_SCROLL_DELAY = 3600;

/** Exact list from app/data/institutionVideosData.js — always. */
const INSIGHTS = institutionVideosData.filter(
  (item) => (item?.reelUrl || item?.videoId || item?.mp4Src) && item?.thumbnail
);

function getVisibleCount(width) {
  if (width < 640) return 1;
  if (width < 900) return 2;
  if (width < 1100) return 3;
  return 4;
}

export default function HomeV2TrendingInsights() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);
  const [activePlayId, setActivePlayId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = Math.max(0, INSIGHTS.length - visible);
  const showNav = maxIndex > 0;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const next = getVisibleCount(el.clientWidth);
    setVisible(next);
    setIndex((prev) => Math.min(prev, Math.max(0, INSIGHTS.length - next)));
  }, []);

  const scrollToIndex = useCallback(
    (next) => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector(".home-v2-trending-tile");
      if (!card) return;
      const gap =
        parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) ||
        0;
      const step = card.offsetWidth + gap;
      const clamped = Math.max(0, Math.min(next, INSIGHTS.length - visible));
      setIndex(clamped);
      el.scrollTo({ left: clamped * step, behavior: "smooth" });
    },
    [visible]
  );

  // Measure on load and resize
  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || activePlayId !== null || maxIndex <= 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = prev >= maxIndex ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, AUTO_SCROLL_DELAY);

    return () => clearInterval(timer);
  }, [isPaused, activePlayId, maxIndex, scrollToIndex]);

  if (!INSIGHTS.length) return null;

  // Schema.org VideoObject ItemList for organic SEO traffic
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Trending Course Insights - UrbanCode Edutech",
    "description":
      "Trending course insights, career guidance, and practical software engineering tutorials from UrbanCode Edutech.",
    "itemListElement": INSIGHTS.map((video, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "VideoObject",
        "name": video.title,
        "description":
          video.description ||
          `${video.title} - Career guidance & practical tech training at UrbanCode Edutech.`,
        "thumbnailUrl": `https://www.urbancode.in${video.thumbnail}`,
        "uploadDate": video.uploadDate || "2026-06-01T10:00:00+05:30",
        "contentUrl": video.reelUrl,
        "embedUrl": `https://www.instagram.com/reel/${video.videoId}/embed/`,
        "publisher": {
          "@type": "EducationalOrganization",
          "name": "UrbanCode Edutech Solutions",
          "url": "https://www.urbancode.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.urbancode.in/images/home/og-image.jpg"
          }
        }
      }
    }))
  };

  return (
    <section
      className="home-v2-trending"
      aria-labelledby="home-v2-trending-title"
    >
      {/* Schema.org VideoObject Structured Data for Search Engine Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <div className="home-v2-trending-inner">
        <div className="home-v2-trending-head-row">
          <div className="home-v2-trending-titles">
            <p className="home-v2-trending-eyebrow">Trending on Instagram</p>
            <h2 id="home-v2-trending-title" className="home-v2-trending-title">
              Trending course insights
            </h2>
          </div>
          <div className="home-v2-trending-actions">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-v2-trending-follow"
            >
              Follow @{INSTAGRAM_HANDLE}
            </a>
            {showNav && (
              <div
                className="home-v2-trending-nav"
                aria-label="Video navigation"
              >
                <button
                  type="button"
                  className="home-v2-trending-arrow"
                  aria-label="Previous video"
                  disabled={!canPrev}
                  onClick={() => scrollToIndex(index - 1)}
                >
                  <FiArrowLeft strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  className="home-v2-trending-arrow"
                  aria-label="Next video"
                  disabled={!canNext}
                  onClick={() => scrollToIndex(index + 1)}
                >
                  <FiArrowRight strokeWidth={1.75} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className="home-v2-trending-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className="home-v2-trending-gallery"
            ref={trackRef}
            style={{
              "--trending-gap": `${GAP}px`,
              "--trending-visible": visible,
            }}
          >
            {INSIGHTS.map((video) => {
              const isPlaying = activePlayId === video.id;

              return (
                <article
                  key={video.id}
                  className="home-v2-trending-tile"
                  itemScope
                  itemType="https://schema.org/VideoObject"
                >
                  <meta itemProp="name" content={video.title} />
                  <meta itemProp="description" content={video.description} />
                  <meta
                    itemProp="thumbnailUrl"
                    content={`https://www.urbancode.in${video.thumbnail}`}
                  />
                  <meta itemProp="contentUrl" content={video.reelUrl} />
                  <meta
                    itemProp="embedUrl"
                    content={`https://www.instagram.com/reel/${video.videoId}/embed/`}
                  />

                  <div
                    className="home-v2-trending-media is-ready"
                    onClick={() => {
                      if (!isPlaying) {
                        setActivePlayId(video.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Play video: ${video.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        if (!isPlaying) setActivePlayId(video.id);
                      }
                    }}
                  >
                    {!isPlaying ? (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="home-v2-trending-thumb-img"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="home-v2-trending-gradient" aria-hidden />
                        <span
                          className="home-v2-trending-play"
                          aria-hidden
                        >
                          <span
                            className="home-v2-trending-play-icon"
                            aria-hidden
                          >
                            <span className="home-v2-trending-play-triangle" />
                          </span>
                        </span>
                        <p className="home-v2-trending-caption">{video.title}</p>
                      </>
                    ) : (
                      <div className="home-v2-trending-embed-container">
                        <iframe
                          src={`https://www.instagram.com/reel/${video.videoId}/embed/`}
                          title={video.title}
                          className="home-v2-trending-iframe"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen
                          scrolling="no"
                        />
                        <button
                          type="button"
                          className="home-v2-trending-close-btn"
                          aria-label="Close video"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePlayId(null);
                          }}
                        >
                          ✕
                        </button>

                        {/* Mask bottom area (Instagram actions/likes) & display video title + view button */}
                        <div className="home-v2-trending-bottom-bar">
                          <p className="home-v2-trending-bar-title">{video.title}</p>
                          <a
                            href={video.reelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-v2-trending-view-btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden
                            >
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                              <circle cx="12" cy="12" r="4" />
                              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                            </svg>
                            <span>View more on Instagram</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
