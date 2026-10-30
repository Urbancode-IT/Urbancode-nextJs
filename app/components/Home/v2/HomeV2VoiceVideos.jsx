"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { videoData } from "../../../data/videoTestimonialsData";
import { getOptimizedVideoUrl } from "@/lib/cloudinary";
import "./HomeV2VoiceVideos.css";

const GAP = 24;
const FALLBACK_VIDEOS = videoData.filter((v) => v?.src);

function getVisibleCount(width) {
  if (width < 640) return 1;
  if (width < 900) return 2;
  if (width < 1100) return 3;
  return 4;
}

export default function HomeV2VoiceVideos({ videos = null }) {
  const trackRef = useRef(null);
  const videoRefs = useRef([]);
  const [playingId, setPlayingId] = useState(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);

  const VIDEOS =
    Array.isArray(videos) && videos.length
      ? videos.filter((v) => v?.src)
      : FALLBACK_VIDEOS;

  const maxIndex = Math.max(0, VIDEOS.length - visible);
  const showNav = maxIndex > 0;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const next = getVisibleCount(el.clientWidth);
    setVisible(next);
    setIndex((prev) => Math.min(prev, Math.max(0, VIDEOS.length - next)));
  }, [VIDEOS.length]);

  const scrollToIndex = useCallback(
    (next) => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector(".home-v2-voice-tile");
      if (!card) return;
      const gap =
        parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) ||
        0;
      const step = card.offsetWidth + gap;
      const clamped = Math.max(0, Math.min(next, VIDEOS.length - visible));
      setIndex(clamped);
      el.scrollTo({ left: clamped * step, behavior: "smooth" });

      videoRefs.current.forEach((v) => {
        if (v) {
          v.pause();
          v.controls = false;
        }
      });
      setPlayingId(null);
    },
    [visible, VIDEOS.length]
  );

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const handlePlay = (videoId, idx) => {
    videoRefs.current.forEach((el, i) => {
      if (el && i !== idx) {
        el.pause();
        el.controls = false;
      }
    });

    setPlayingId(videoId);
    const videoEl = videoRefs.current[idx];
    if (!videoEl) return;

    videoEl.controls = true;
    videoEl.muted = false;
    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        videoEl.muted = true;
        videoEl.play().catch(() => {});
      });
    }
  };

  if (!VIDEOS.length) return null;

  return (
    <section
      className="home-v2-voice"
      aria-labelledby="home-v2-voice-title"
    >
      <div className="home-v2-voice-inner">
        <div className="home-v2-voice-head-row">
          <div className="home-v2-voice-titles">
            <p className="home-v2-voice-eyebrow">Video testimonials</p>
            <h2 id="home-v2-voice-title" className="home-v2-voice-title">
              Voices That Matter.
            </h2>
            <p className="home-v2-voice-desc">
              Hear directly from learners about their experience with Urbancode.
            </p>
          </div>
          {showNav && (
            <div className="home-v2-voice-nav" aria-label="Video navigation">
              <button
                type="button"
                className="home-v2-voice-arrow"
                aria-label="Previous video"
                disabled={!canPrev}
                onClick={() => scrollToIndex(index - 1)}
              >
                <FiArrowLeft strokeWidth={1.75} />
              </button>
              <button
                type="button"
                className="home-v2-voice-arrow"
                aria-label="Next video"
                disabled={!canNext}
                onClick={() => scrollToIndex(index + 1)}
              >
                <FiArrowRight strokeWidth={1.75} />
              </button>
            </div>
          )}
        </div>

        <div className="home-v2-voice-viewport">
          <div
            className="home-v2-voice-gallery"
            ref={trackRef}
            style={{ "--voice-gap": `${GAP}px`, "--voice-visible": visible }}
          >
            {VIDEOS.map((video, idx) => {
              const isPlaying = playingId === video.id;
              const label =
                video.alumnusName || video.title || `Student video ${idx + 1}`;
              return (
                <article key={video.id} className="home-v2-voice-tile">
                  <div className="home-v2-voice-media">
                    <video
                      ref={(el) => {
                        videoRefs.current[idx] = el;
                      }}
                      className="home-v2-voice-video"
                      src={getOptimizedVideoUrl(video.src, {
                        format: "f_mp4",
                      })}
                      poster={video.poster}
                      playsInline
                      preload="metadata"
                      controls={isPlaying}
                      aria-label={`${label} testimonial video`}
                      onPlay={() => setPlayingId(video.id)}
                      onPause={() => {
                        if (playingId === video.id) setPlayingId(null);
                      }}
                      onEnded={() => setPlayingId(null)}
                    />
                    {!isPlaying && (
                      <button
                        type="button"
                        className="home-v2-voice-play"
                        aria-label={`Play ${label}`}
                        onClick={() => handlePlay(video.id, idx)}
                      >
                        <span className="home-v2-voice-play-icon" aria-hidden>
                          <span className="home-v2-voice-play-triangle" />
                        </span>
                      </button>
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
