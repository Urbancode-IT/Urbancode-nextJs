"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./DeepavaliGiftFab.css";

/**
 * Deepavali sky-rocket widget with bursting flame — start / stop fireworks.
 */
export default function DeepavaliGiftFab({ onOpen, onStop, opened = false }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <button
      type="button"
      className={`uc-dv-rocket-fab${opened ? " is-opened" : ""}`}
      onClick={opened ? onStop : onOpen}
      aria-label={opened ? "Stop Deepavali fireworks" : "Click me — Happy Deepavali"}
      title={opened ? "Stop fireworks" : "Click me"}
    >
      <span className="uc-dv-skyrocket" aria-hidden="true">
        <span className="uc-dv-skyrocket-burst">
          <i /><i /><i /><i /><i /><i />
        </span>
        <svg
          className="uc-dv-skyrocket-svg"
          viewBox="0 0 48 72"
          width="48"
          height="72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4C24 4 34 18 34 26H14C14 18 24 4 24 4Z"
            fill="url(#ucDvNose)"
            stroke="#c2410c"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <rect x="15" y="25" width="18" height="26" rx="3" fill="url(#ucDvBody)" stroke="#0e7490" strokeWidth="1" />
          <circle cx="20" cy="33" r="2.2" fill="#fb923c" />
          <circle cx="28" cy="33" r="2.2" fill="#fb923c" />
          <circle cx="20" cy="41" r="2.2" fill="#fb923c" />
          <circle cx="28" cy="41" r="2.2" fill="#fb923c" />
          <circle cx="24" cy="37" r="2.2" fill="#fdba74" />
          <rect x="22.5" y="50" width="3" height="14" rx="1" fill="url(#ucDvStick)" />
          <circle className="uc-dv-fuse-spark" cx="24" cy="49" r="2" fill="#fde047" />
          <defs>
            <linearGradient id="ucDvNose" x1="24" y1="4" x2="24" y2="26">
              <stop stopColor="#ffedd5" />
              <stop offset="0.35" stopColor="#fb923c" />
              <stop offset="1" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="ucDvBody" x1="15" y1="25" x2="33" y2="51">
              <stop stopColor="#67e8f9" />
              <stop offset="0.5" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#0891b2" />
            </linearGradient>
            <linearGradient id="ucDvStick" x1="24" y1="50" x2="24" y2="64">
              <stop stopColor="#fbbf24" />
              <stop offset="1" stopColor="#92400e" />
            </linearGradient>
          </defs>
        </svg>
        <span className="uc-dv-skyrocket-flame">
          <span className="uc-dv-skyrocket-flame-outer" />
          <span className="uc-dv-skyrocket-flame-mid" />
          <span className="uc-dv-skyrocket-flame-inner" />
        </span>
      </span>
      <span className="uc-dv-rocket-hint">{opened ? "stop" : "click me"}</span>
    </button>,
    document.body
  );
}
