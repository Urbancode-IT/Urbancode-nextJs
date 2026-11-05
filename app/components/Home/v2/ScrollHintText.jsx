"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Text that auto-scrolls when content overflows, so users notice it is scrollable.
 * Pauses on hover/focus/touch so they can read or scroll manually.
 * Only animates while the element is in the viewport.
 */
export default function ScrollHintText({
  as: Tag = "p",
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);
  const pausedRef = useRef(false);
  const inViewRef = useRef(true);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const check = () => {
      setOverflows(el.scrollHeight > el.clientHeight + 2);
    };
    check();

    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children]);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;

    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!overflows) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    let dir = 1;
    let pauseUntil = performance.now() + 1600;
    let last = performance.now();
    let raf = 0;
    const speed = 22;

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      if (!inViewRef.current || pausedRef.current || now < pauseUntil) {
        last = now;
        return;
      }

      const dt = Math.min(40, now - last);
      last = now;
      el.scrollTop += dir * speed * (dt / 1000);

      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      const atTop = el.scrollTop <= 0;

      if (dir > 0 && atBottom) {
        dir = -1;
        pauseUntil = now + 1400;
      } else if (dir < 0 && atTop) {
        dir = 1;
        pauseUntil = now + 2000;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [overflows, children]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <Tag
      ref={ref}
      className={`${className}${overflows ? " is-scrollable" : ""}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
      onPointerDown={pause}
      tabIndex={overflows ? 0 : undefined}
      aria-label={overflows ? "Scrollable review text" : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
