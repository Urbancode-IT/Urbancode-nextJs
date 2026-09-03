'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import '../components/Home/homePlayButton.css';
import '../components/Home/homeVideoCarousel.css';

const VIDEO_SRC = '/videos/kids-testimonial-video1.mp4';
const VIDEO_POSTER = '/images/home/test4.webp';
const POPUP_STORAGE_KEY = 'kids-testimonial-popup-v2-dismissed';
const POPUP_DELAY_MIN_MS = 3000;
const POPUP_DELAY_MAX_MS = 5000;

function TestimonialQuote() {
  return (
    <>
      <h3 className="fw-bold mb-1 kids-testimonial-student-name">Adhrit</h3>
      <p className="text-success fw-semibold mb-3 fs-5 kids-testimonial-course-label">Course: Python</p>

      <div className="position-relative text-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-quote mb-2 kids-testimonial-quote-icon"
          viewBox="0 0 16 16"
          style={{ color: '#1ABC9C' }}
          aria-hidden="true"
        >
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
        </svg>
        <p className="fs-6 fst-italic text-muted fw-medium kids-testimonial-quote-text">
          &ldquo;My experience with the Python course has been amazing. The instructors make complex concepts easy to understand through fun projects. I&apos;ve learned how to build my own games and interactive applications from scratch. Urbancode provides the perfect environment for young coders like me to experiment, learn, and grow my skills for the future!&rdquo;
        </p>
      </div>
    </>
  );
}

function KidsTestimonialVideoPlayer({ shellClassName = '' }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    el.controls = true;
    el.muted = false;
    const playPromise = el.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        el.muted = true;
        el.play().catch(() => {});
      });
    }
  };

  return (
    <div className={`home-video-media is-media-ready home-testimonial-video-media kids-testimonial-video-shell ${shellClassName}`.trim()}>
      <video
        ref={videoRef}
        className="home-testimonial-video"
        src={VIDEO_SRC}
        poster={VIDEO_POSTER}
        playsInline
        preload="metadata"
        controls={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => {
          if (videoRef.current?.paused) setIsPlaying(false);
        }}
        onEnded={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <button
          type="button"
          className="play-overlay home-testimonial-play"
          aria-label="Play Adhrit testimonial video"
          onClick={handlePlay}
        >
          <span className="video-play-btn-icon" />
        </button>
      )}
    </div>
  );
}

export default function KidsTestimonialBlock({ pageReady }) {
  const popupTimerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [inlineVisible, setInlineVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(POPUP_STORAGE_KEY) === 'true') {
      setInlineVisible(true);
    }
  }, []);

  /* Show popup 3–5s after loader finishes (once per session until dismissed) */
  useEffect(() => {
    if (!pageReady || !mounted) return;

    if (sessionStorage.getItem(POPUP_STORAGE_KEY) === 'true') {
      setInlineVisible(true);
      return;
    }

    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }

    const delay =
      POPUP_DELAY_MIN_MS +
      Math.random() * (POPUP_DELAY_MAX_MS - POPUP_DELAY_MIN_MS);

    popupTimerRef.current = setTimeout(() => {
      setShowPopup(true);
    }, delay);

    return () => {
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
        popupTimerRef.current = null;
      }
    };
  }, [pageReady, mounted]);

  useEffect(() => {
    if (!showPopup) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showPopup]);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    setInlineVisible(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(POPUP_STORAGE_KEY, 'true');
    }
  }, []);

  useEffect(() => {
    if (!showPopup) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closePopup();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showPopup, closePopup]);

  const popupContent =
    showPopup && mounted ? (
      <>
        <div
          className="kids-testimonial-backdrop"
          onClick={closePopup}
          aria-hidden="true"
        />
        <div
          className="kids-testimonial-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="kids-testimonial-popup-title"
        >
          <button
            type="button"
            className="kids-testimonial-close"
            onClick={closePopup}
            aria-label="Close testimonial video"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="kids-testimonial-heading">
            <h2 id="kids-testimonial-popup-title" className="kids-testimonial-title">
              Hear From Our Young Coders
            </h2>
            <p className="kids-testimonial-subtitle">Real experiences from Urbancode Kidspace learners</p>
          </div>

          <div className="kids-testimonial-body">
            <div className="kids-testimonial-video-wrap">
              <KidsTestimonialVideoPlayer shellClassName="kids-testimonial-popup-video-shell" />
            </div>
            <div className="kids-testimonial-quote-wrap">
              <TestimonialQuote />
            </div>
          </div>
        </div>
      </>
    ) : null;

  return (
    <>
      {mounted && popupContent && createPortal(popupContent, document.body)}

      <section className="page-section why-choose-kids">
        <div className="container text-center">
          <div className="home-section-title-wrap">
            <h2 className="section-main-title text-shine">Why Choose Urbancode for Kids?</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="testimonial-container-card card border-0 p-3 p-md-4">
                <div className="row align-items-center g-3">
                  <div className="col-md-5 d-flex justify-content-center mb-2 mb-md-0">
                    {inlineVisible ? (
                      <div className="kids-testimonial-inline-video-wrap">
                        <KidsTestimonialVideoPlayer />
                      </div>
                    ) : (
                      <div
                        className="kids-testimonial-inline-placeholder"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="col-md-6 text-center text-md-start px-md-5">
                    <TestimonialQuote />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
