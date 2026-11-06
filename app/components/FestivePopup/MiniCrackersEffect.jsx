"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Fireworks } from "fireworks-js";
import "./MiniCrackersEffect.css";

function getFireworksProfile() {
  const w = typeof window !== "undefined" ? window.innerWidth : 1280;

  // Mobile
  if (w <= 640) {
    return {
      opacity: 0.78,
      particles: 28,
      traceLength: 2,
      traceSpeed: 8,
      explosion: 4,
      intensity: 18,
      flickering: 35,
      delay: { min: 45, max: 80 },
      lineWidth: {
        explosion: { min: 0.8, max: 2 },
        trace: { min: 0.6, max: 1.2 },
      },
      launchCount: 2,
      burstCount: 1,
      intervalMs: 4200,
    };
  }

  // Tablet
  if (w <= 1024) {
    return {
      opacity: 0.85,
      particles: 45,
      traceLength: 3,
      traceSpeed: 10,
      explosion: 5,
      intensity: 28,
      flickering: 45,
      delay: { min: 28, max: 55 },
      lineWidth: {
        explosion: { min: 1, max: 3 },
        trace: { min: 0.8, max: 1.8 },
      },
      launchCount: 3,
      burstCount: 1,
      intervalMs: 3600,
    };
  }

  // Desktop
  return {
    opacity: 0.92,
    particles: 75,
    traceLength: 4,
    traceSpeed: 12,
    explosion: 7,
    intensity: 42,
    flickering: 55,
    delay: { min: 18, max: 40 },
    lineWidth: {
      explosion: { min: 1.5, max: 4 },
      trace: { min: 1, max: 2.5 },
    },
    launchCount: 4,
    burstCount: 2,
    intervalMs: 3200,
  };
}

/**
 * Realistic Deepavali sky-rocket fireworks via fireworks-js.
 * Particle size / intensity scales down on tablet & mobile.
 */
export default function MiniCrackersEffect({ active = false }) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const fwRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !active || !containerRef.current) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    let cancelled = false;
    let burst = 0;
    let fireworks = null;

    const startShow = () => {
      if (cancelled || !containerRef.current) return;

      if (fireworks) {
        fireworks.stop(true);
        fireworks = null;
      }

      const profile = getFireworksProfile();
      fireworks = new Fireworks(containerRef.current, {
        autoresize: true,
        opacity: profile.opacity,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.45,
        particles: profile.particles,
        traceLength: profile.traceLength,
        traceSpeed: profile.traceSpeed,
        explosion: profile.explosion,
        intensity: profile.intensity,
        flickering: profile.flickering,
        lineStyle: "round",
        hue: { min: 0, max: 60 },
        delay: profile.delay,
        rocketsPoint: { min: 15, max: 85 },
        lineWidth: profile.lineWidth,
        brightness: { min: 55, max: 90 },
        decay: { min: 0.012, max: 0.028 },
        mouse: { click: false, move: false, max: 1 },
        sound: { enabled: false },
      });

      fwRef.current = fireworks;
      fireworks.start();
      fireworks.launch(profile.launchCount);

      window.clearInterval(burst);
      burst = window.setInterval(() => {
        fireworks?.launch(profile.burstCount);
      }, profile.intervalMs);
    };

    startShow();

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(startShow, 250);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
      window.clearInterval(burst);
      if (fireworks) fireworks.stop(true);
      fwRef.current = null;
    };
  }, [mounted, active]);

  if (!mounted || !active) return null;

  return createPortal(
    <div
      id="ucDeepavaliFireworks"
      ref={containerRef}
      aria-hidden="true"
      className="uc-dv-fireworks-canvas"
    />,
    document.body
  );
}
