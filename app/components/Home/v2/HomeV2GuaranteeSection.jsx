"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import "./HomeV2GuaranteeSection.css";

const BADGE_ICON =
  "/images/home/homepage-v2/guaranteed-coursesectionicons/guaranteed-sectionicons.webp";

/** Same courses as legacy "100% Job Guaranteed Courses" (Courses.jsx). */
const GUARANTEED_COURSES = [
  {
    title: "MERN Stack",
    blurb: "React, Node & Mongo for product teams",
    path: "/courses/fullstack-development/ai-powered-fullstack",
  },
  {
    title: "MEAN Stack",
    blurb: "Angular + Node path for enterprise apps",
    path: "/training/mean-stack",
  },
  {
    title: ".NET Angular",
    blurb: "C# backends with modern Angular UIs",
    path: "/training/dotnet-angular",
  },
  {
    title: "Data Analytics",
    blurb: "SQL, dashboards & decision-ready insights",
    path: "/training/data-analytics",
  },
  {
    title: "AI/ML",
    blurb: "Python models to real business use cases",
    path: "/training/ai-ml",
  },
  {
    title: "Automation Testing",
    blurb: "Selenium, Playwright & release confidence",
    path: "/training/automation-testing",
  },
  {
    title: "AWS DevOps",
    blurb: "Pipelines, infra & cloud deployment skills",
    path: "/training/aws-devops",
  },
];

const BENEFITS = [
  "Structured interview preparation",
  "Resume & portfolio review",
  "Mock interviews with mentors",
  "Dedicated placement support",
];

const VISIBLE = 4;
const ITEM_H = 76;

export default function HomeV2GuaranteeSection({ attentionMode = false }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const listRef = useRef(null);
  const total = GUARANTEED_COURSES.length;
  const featured = GUARANTEED_COURSES[active];

  /** Scroll only inside the list container — never the page. */
  const scrollListToIndex = (index, behavior = "smooth") => {
    const viewport = listRef.current;
    if (!viewport) return;
    const maxScroll = Math.max(0, viewport.scrollHeight - viewport.clientHeight);
    const top = Math.min(Math.max(0, index * ITEM_H), maxScroll);
    viewport.scrollTo({ top, behavior });
  };

  const goTo = (index, { scroll = true } = {}) => {
    const next = ((index % total) + total) % total;
    setActive(next);
    setAnimKey((k) => k + 1);
    if (scroll) scrollListToIndex(next);
  };

  // Keep wheel scroll locked to the list (block page scroll chaining)
  useEffect(() => {
    const viewport = listRef.current;
    if (!viewport) return undefined;

    const onWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!attentionMode) setPaused(true);
      viewport.scrollTop += e.deltaY;

      const idx = Math.min(
        total - 1,
        Math.max(0, Math.round(viewport.scrollTop / ITEM_H))
      );
      setActive((prev) => {
        if (prev === idx) return prev;
        setAnimKey((k) => k + 1);
        return idx;
      });
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [attentionMode, total]);

  // Normal auto-rotate (paused during Deepavali attention showcase / manual use)
  useEffect(() => {
    if (attentionMode || paused || total <= 1) return undefined;
    const id = window.setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % total;
        setAnimKey((k) => k + 1);
        scrollListToIndex(next);
        return next;
      });
    }, 3400);
    return () => window.clearInterval(id);
  }, [paused, total, attentionMode]);

  // Deepavali gift: bring each guaranteed course to the front one by one
  useEffect(() => {
    if (!attentionMode || total <= 1) return undefined;

    setActive(0);
    setAnimKey((k) => k + 1);
    scrollListToIndex(0, "auto");

    let stepIdx = 0;
    const id = window.setInterval(() => {
      stepIdx = (stepIdx + 1) % total;
      setActive(stepIdx);
      setAnimKey((k) => k + 1);
      scrollListToIndex(stepIdx);
    }, 1600);

    return () => window.clearInterval(id);
  }, [attentionMode, total]);

  return (
    <section
      id="home-v2-guarantee"
      className={`home-v2-guarantee${attentionMode ? " is-attention" : ""}`}
      aria-label="Placement guarantee"
    >
      <div className="home-v2-guarantee-card">
        <div className="home-v2-guarantee-left">
          <span className="home-v2-guarantee-badge">
            <Image
              src={BADGE_ICON}
              alt=""
              width={16}
              height={16}
              className="home-v2-guarantee-badge-icon"
              aria-hidden="true"
            />
            100% Placement Guarantee
          </span>

          <h2 className="home-v2-guarantee-title">
            Courses backed by our 100% guarantee.
          </h2>

          <p className="home-v2-guarantee-desc">
            Complete the program, meet the eligibility criteria, and we commit
            to supporting you until you&apos;re placed.
          </p>

          <ul className="home-v2-guarantee-points">
            {BENEFITS.map((item) => (
              <li key={item} className="home-v2-guarantee-point">
                <span className="home-v2-guarantee-check" aria-hidden="true">
                  <FiCheck />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link href="/courses-categories" className="home-v2-guarantee-cta">
            View Guarantee Courses
          </Link>

          <p className="home-v2-guarantee-terms">
            Terms &amp; eligibility conditions apply.
          </p>
        </div>

        <div
          className="home-v2-guarantee-right"
          onMouseEnter={() => {
            if (!attentionMode) setPaused(true);
          }}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => {
            if (!attentionMode) setPaused(true);
          }}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          <div className="home-v2-guarantee-right-head">
            <div>
              <p className="home-v2-guarantee-eligible">Top guaranteed courses</p>
              <p className="home-v2-guarantee-offers">Exciting offers are live</p>
              <p className="home-v2-guarantee-eligible-sub">
                Pick a path that comes with placement support
              </p>
            </div>
            <span className="home-v2-guarantee-count">{total} programs</span>
          </div>

          <Link
            href={featured.path}
            className="home-v2-guarantee-spotlight"
            aria-label={`Explore ${featured.title}`}
          >
            <div key={animKey} className="home-v2-guarantee-spotlight-inner">
              <span className="home-v2-guarantee-spotlight-num" aria-hidden>
                {String(active + 1).padStart(2, "0")}
              </span>
              <div className="home-v2-guarantee-spotlight-body">
                <span className="home-v2-guarantee-spotlight-kicker">
                  Guaranteed placement path
                </span>
                <span className="home-v2-guarantee-spotlight-title">
                  {featured.title}
                </span>
                <span className="home-v2-guarantee-spotlight-blurb">
                  {featured.blurb}
                </span>
              </div>
              <span className="home-v2-guarantee-spotlight-cta">
                Explore
                <FiArrowRight aria-hidden />
              </span>
            </div>
          </Link>

          <div
            ref={listRef}
            className="home-v2-guarantee-list-viewport"
            style={{ height: VISIBLE * ITEM_H }}
            onTouchStart={() => {
              if (!attentionMode) setPaused(true);
            }}
          >
            <ul className="home-v2-guarantee-list">
              {GUARANTEED_COURSES.map((course, i) => (
                <li key={course.path} className="home-v2-guarantee-item">
                  <Link
                    href={course.path}
                    className={`home-v2-guarantee-link${
                      i === active ? " is-active" : ""
                    }`}
                    onMouseEnter={() => {
                      if (!attentionMode) goTo(i, { scroll: false });
                    }}
                    onFocus={() => {
                      if (!attentionMode) goTo(i, { scroll: false });
                    }}
                    onClick={() => {
                      if (!attentionMode) setPaused(true);
                    }}
                    aria-current={i === active ? "true" : undefined}
                  >
                    <span className="home-v2-guarantee-link-text">
                      <span className="home-v2-guarantee-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="home-v2-guarantee-name">
                        {course.title}
                      </span>
                    </span>
                    <span className="home-v2-guarantee-arrow" aria-hidden="true">
                      <FiArrowRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
