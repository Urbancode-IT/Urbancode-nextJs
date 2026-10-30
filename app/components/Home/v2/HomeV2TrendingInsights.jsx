"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { institutionVideosData } from "../../../data/institutionVideosData";
import "./HomeV2TrendingInsights.css";

const INSTAGRAM_HANDLE = "urbancode_edutech";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
const GAP = 24;

/** Exact list from app/data/institutionVideosData.js — always. */
const INSIGHTS = institutionVideosData.filter(
  (item) => (item?.videoId || item?.mp4Src) && item?.thumbnail
);

function getVisibleCount(width) {
  if (width < 640) return 1;
  if (width < 900) return 2;
  if (width < 1100) return 3;
  return 4;
}

export default function HomeV2TrendingInsights() {
  const trackRef = useRef(null);
  const [activePlay, setActivePlay] = useState({});
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);

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
      setActivePlay({});
    },
    [visible]
  );

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  if (!INSIGHTS.length) return null;

  return (
    <section
      className="home-v2-trending"
      aria-labelledby="home-v2-trending-title"
    >
      <div className="home-v2-trending-inner">
        <div className="home-v2-trending-head-row">
          <div className="home-v2-trending-titles">
            <p className="home-v2-trending-eyebrow">Trending on Instagram</p>
            <h2 id="home-v2-trending-title" className="home-v2-trending-title">
              Trending Course Insights.
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

        <div className="home-v2-trending-viewport">
          <div
            className="home-v2-trending-gallery"
            ref={trackRef}
            style={{
              "--trending-gap": `${GAP}px`,
              "--trending-visible": visible,
            }}
          >
            {INSIGHTS.map((video) => {
              const isPlaying = !!activePlay[video.id];
              return (
                <article key={video.id} className="home-v2-trending-tile">
                  <div
                    className="home-v2-trending-media is-ready"
                    onClick={() => {
                      if (!isPlaying) {
                        setActivePlay((prev) => ({
                          ...prev,
                          [video.id]: true,
                        }));
                      }
                    }}
                    style={{ cursor: isPlaying ? "default" : "pointer" }}
                  >
                    {!isPlaying ? (
                      <>
                        {/* Native img avoids Next/Image optimizer drops on large webps */}
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="home-v2-trending-thumb-img"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="home-v2-trending-gradient" aria-hidden />
                        <button
                          type="button"
                          className="home-v2-trending-play"
                          aria-label={`Play ${video.title}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePlay((prev) => ({
                              ...prev,
                              [video.id]: true,
                            }));
                          }}
                        >
                          <span
                            className="home-v2-trending-play-icon"
                            aria-hidden
                          >
                            <span className="home-v2-trending-play-triangle" />
                          </span>
                        </button>
                        <p className="home-v2-trending-caption">{video.title}</p>
                      </>
                    ) : video.mp4Src ? (
                      <video
                        src={video.mp4Src}
                        autoPlay
                        controls
                        playsInline
                        className="home-v2-trending-iframe"
                      />
                    ) : (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1&autohide=1&showinfo=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="home-v2-trending-iframe"
                      />
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
