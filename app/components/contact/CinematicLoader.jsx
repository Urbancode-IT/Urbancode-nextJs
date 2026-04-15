'use client';
import { useEffect, useState, useRef } from 'react';
import './CinematicLoader.css';

const CinematicLoader = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [phase, setPhase] = useState('entering'); // 'entering' | 'playing' | 'exiting' | 'done'
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Start entering animation
    const enterTimer = setTimeout(() => setPhase('playing'), 600);

    // Track video progress for the progress bar
    const video = videoRef.current;
    const handleTimeUpdate = () => {
      if (video && video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleVideoEnd = () => {
      triggerExit();
    };

    // Fallback: if video fails or browser blocks autoplay, exit after 4s
    timeoutRef.current = setTimeout(() => triggerExit(), 8000);

    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(timeoutRef.current);
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  const triggerExit = () => {
    clearTimeout(timeoutRef.current);
    setPhase('exiting');
    setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 1200);
  };

  if (phase === 'done') return null;

  return (
    <div
      className={`cinematic-loader ${phase}`}
      role="status"
      aria-label="Loading Urbancode office walkthrough"
    >
      {/* ── Video Layer ───────────────────────────────────── */}
      <div className="cl-video-wrap">
        <video
          ref={videoRef}
          className="cl-video"
          src="/videos/WhatsApp Video 2026-04-13 at 11.32.11 AM.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
        />

        {/* ── Cinematic Post-Processing Overlays ──────────── */}

        {/* 1. Warm amber color grade (simulates cinematic LUT) */}
        <div className="cl-grade-amber" aria-hidden="true" />

        {/* 2. Deep vignette */}
        <div className="cl-vignette" aria-hidden="true" />

        {/* 3. Volumetric light rays from top */}
        <div className="cl-light-rays" aria-hidden="true" />

        {/* 4. Subtle film grain */}
        <canvas className="cl-grain" aria-hidden="true" id="cl-grain-canvas" />

        {/* 5. Lens flare dot */}
        <div className="cl-lens-flare" aria-hidden="true" />

        {/* 6. Cinematic light leak (animated color drift) */}
        <div className="cl-light-leak" aria-hidden="true" />

        {/* 7. Letterbox bars (cinematic 2.35:1 crop feel) */}
        <div className="cl-letterbox-top" aria-hidden="true" />
        <div className="cl-letterbox-bottom" aria-hidden="true" />
      </div>

      {/* ── Branding Overlay ─────────────────────────────── */}
      <div className="cl-brand-overlay" aria-hidden="true">
        <div className="cl-brand-inner">
          <div className="cl-logo-wrap">
            <span className="cl-logo-text">URBANCODE</span>
            <span className="cl-logo-sub">— EDUTECH —</span>
          </div>
          <div className="cl-tagline">Step into the future of learning</div>
        </div>
      </div>

      {/* ── Progress Bar ─────────────────────────────────── */}
      <div className="cl-progress-wrap" aria-hidden="true">
        <div className="cl-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* ── Skip Button ──────────────────────────────────── */}
      <button
        className="cl-skip-btn"
        onClick={triggerExit}
        aria-label="Skip intro"
      >
        Skip <span className="cl-skip-arrow">›</span>
      </button>

      {/* ── Film grain canvas script ──────────────────────── */}
      <GrainCanvas />
    </div>
  );
};

/* Animated film grain via canvas */
function GrainCanvas() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById('cl-grain-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const drawGrain = () => {
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = Math.random() * 18 | 0; // very subtle alpha
      }
      ctx.putImageData(imageData, 0, 0);
      rafRef.current = requestAnimationFrame(drawGrain);
    };
    drawGrain();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return null;
}

export default CinematicLoader;
