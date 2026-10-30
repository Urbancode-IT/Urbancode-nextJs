"use client";

import { useEffect, useState } from "react";
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
    path: "/courses/fullstack-development/ai-powered-fullstack",
  },
  {
    title: "MEAN Stack",
    path: "/training/mean-stack",
  },
  {
    title: ".NET Angular",
    path: "/training/dotnet-angular",
  },
  {
    title: "Data Analytics",
    path: "/training/data-analytics",
  },
  {
    title: "AI/ML",
    path: "/training/ai-ml",
  },
  {
    title: "Automation Testing",
    path: "/training/automation-testing",
  },
  {
    title: "AWS DevOps",
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
const ITEM_H = 76.67;

export default function HomeV2GuaranteeSection() {
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const maxOffset = Math.max(0, GUARANTEED_COURSES.length - VISIBLE);

  useEffect(() => {
    if (maxOffset === 0 || paused) return undefined;
    const id = window.setInterval(() => {
      setOffset((prev) => (prev >= maxOffset ? 0 : prev + 1));
    }, 3200);
    return () => window.clearInterval(id);
  }, [maxOffset, paused]);

  return (
    <section className="home-v2-guarantee" aria-label="Placement guarantee">
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
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          <p className="home-v2-guarantee-eligible">Eligible programs</p>

          <div
            className="home-v2-guarantee-list-viewport"
            style={{ height: VISIBLE * ITEM_H }}
          >
            <ul
              className="home-v2-guarantee-list"
              style={{
                transform: `translateY(-${offset * ITEM_H}px)`,
              }}
            >
              {GUARANTEED_COURSES.map((course, i) => (
                <li key={course.path} className="home-v2-guarantee-item">
                  <Link href={course.path} className="home-v2-guarantee-link">
                    <span className="home-v2-guarantee-link-text">
                      <span className="home-v2-guarantee-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="home-v2-guarantee-name">
                        {course.title}
                      </span>
                    </span>
                    <span
                      className="home-v2-guarantee-arrow"
                      aria-hidden="true"
                    >
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
