"use client";

import { useEffect, useRef } from "react";
import "./V2PageReveal.css";

/**
 * Light page enter + section fade-up on scroll.
 * Skips motion when prefers-reduced-motion is set.
 */
export default function V2PageReveal({ children, className = "" }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("is-ready");

    const targets = Array.from(
      root.querySelectorAll(
        ":scope > section, :scope > .home-v2-above-fold, section"
      )
    );

    // De-dupe nested matches (above-fold + its child sections)
    const unique = [...new Set(targets)];

    unique.forEach((el) => el.classList.add("v2-reveal-target"));

    if (reduce) {
      unique.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }

    const markInView = () => {
      const vh = window.innerHeight || 800;
      unique.forEach((el) => {
        if (el.classList.contains("is-in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add("is-in");
        }
      });
    };

    markInView();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );

    unique.forEach((el) => {
      if (!el.classList.contains("is-in")) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={`v2-page-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
