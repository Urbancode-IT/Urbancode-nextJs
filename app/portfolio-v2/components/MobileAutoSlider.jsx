"use client";

import React, { useEffect, useRef, useState } from "react";
import "./MobileAutoSlider.css";

export default function MobileAutoSlider({
  children,
  className = "",
  interval = 3500,
  ariaLabel = "Carousel",
}) {
  const items = React.Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile || items.length <= 1) return undefined;

    const timer = setInterval(() => {
      if (pausedRef.current) return;
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isMobile, items.length, interval]);

  const pauseBriefly = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, interval * 2);
  };

  const goTo = (i) => {
    setIndex(i);
    pauseBriefly();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    pauseBriefly();
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 40) return;
    if (diff > 0) {
      setIndex((prev) => (prev + 1) % items.length);
    } else {
      setIndex((prev) => (prev - 1 + items.length) % items.length);
    }
    pauseBriefly();
  };

  if (!isMobile) {
    return <div className={className}>{items}</div>;
  }

  return (
    <div className={`pf-auto-slider ${className}`} aria-label={ariaLabel}>
      <div
        className="pf-auto-slider__viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={pauseBriefly}
      >
        <div
          className="pf-auto-slider__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((child, i) => (
            <div key={i} className="pf-auto-slider__slide">
              {child}
            </div>
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <div className="pf-auto-slider__dots" role="tablist" aria-label={`${ariaLabel} pagination`}>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`pf-auto-slider__dot${i === index ? " pf-auto-slider__dot--active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
