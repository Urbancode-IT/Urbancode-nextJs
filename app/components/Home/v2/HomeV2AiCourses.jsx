"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiClock } from "react-icons/fi";
import "./HomeV2AiCourses.css";

const AI_BADGE_ICON =
  "/images/home/homepage-v2/AI-powered-icons/aipowered-imageicon.webp";

const AI_THUMBS =
  "/images/home/homepage-v2/AI-powered-icons/AI-powered-fsd";

/** Same courses as legacy home "AI Powered Courses" (NewHeroSection cardsData). */
const COURSES = [
  {
    id: 1,
    title: "AI Software Engineering",
    desc: "Fullstack web + React Native — React, Node.js, MongoDB, and AWS in 6 months.",
    level: "Advanced",
    duration: "6 months",
    tags: ["React", "Node.js", "AWS"],
    image: `${AI_THUMBS}/AIsoftwareengineering.webp`,
    link: "/courses/fullstack-development/ai-software-engineering",
  },
  {
    id: 2,
    title: "AI Powered Fullstack",
    desc: "Master HTML, CSS and React alongside AI tools to build interactive web applications.",
    level: "Beginner",
    duration: "12 weeks",
    tags: ["React", "HTML/CSS", "AI Tools"],
    image: `${AI_THUMBS}/AIpoweredfsd.webp`,
    link: "/courses/fullstack-development/ai-powered-fullstack",
  },
  {
    id: 3,
    title: "AI and ML",
    desc: "Deep dive into Machine Learning algorithms and Artificial Intelligence models.",
    level: "Advanced",
    duration: "8 weeks",
    tags: ["Python", "ML", "AI"],
    image: `${AI_THUMBS}/AIandML.webp`,
    link: "/courses/ai-and-data-science/ai-and-ml",
  },
  {
    id: 4,
    title: "Gen AI",
    desc: "Learn Generative AI to build intelligent applications and robust automation.",
    level: "Intermediate",
    duration: "10 weeks",
    tags: ["Python", "LLMs", "RAG"],
    image: `${AI_THUMBS}/GenAI.webp`,
    link: "/courses/ai-and-data-science/gen-ai",
  },
  {
    id: 5,
    title: "Power Automate",
    desc: "Automate repetitive tasks and workflows seamlessly using Microsoft Power Automate.",
    level: "Intermediate",
    duration: "14 weeks",
    tags: ["Power Automate", "Flows", "AI Builder"],
    image: `${AI_THUMBS}/MPA.webp`,
    link: "/courses/automation/microsoft-power-automate",
  },
  {
    id: 6,
    title: "Data Engineering with Azure",
    desc: "Build scalable data pipelines on Microsoft Azure using Synapse, ADF, and Databricks.",
    level: "Advanced",
    duration: "12 weeks",
    tags: ["Azure", "ADF", "Databricks"],
    image: `${AI_THUMBS}/DEwithMAzure.webp`,
    link: "/courses/data-engineering/data-engineering-with-microsoft-azure",
  },
  {
    id: 7,
    title: "Data Analyst with Azure",
    desc: "Become a Data Analyst with Azure. Master SQL, Python, ADF, and Power BI.",
    level: "Advanced",
    duration: "12 weeks",
    tags: ["SQL", "Python", "Power BI"],
    image: `${AI_THUMBS}/DAwithMA.webp`,
    link: "/courses/ai-and-data-science/data-analyst-with-microsoft-azure",
  },
];

const GAP = 24;

function getVisibleCount(width) {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
}

export default function HomeV2AiCourses() {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, COURSES.length - visible);
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const nextVisible = getVisibleCount(el.clientWidth);
    setVisible(nextVisible);
    setIndex((prev) => Math.min(prev, Math.max(0, COURSES.length - nextVisible)));
  }, []);

  const scrollToIndex = useCallback((next) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".home-v2-ai-card");
    if (!card) return;
    const step = card.offsetWidth + GAP;
    const clamped = Math.max(0, Math.min(next, COURSES.length - visible));
    indexRef.current = clamped;
    setIndex(clamped);
    el.scrollTo({ left: clamped * step, behavior: "smooth" });
  }, [visible]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (paused) return undefined;
    timerRef.current = window.setInterval(() => {
      const current = indexRef.current;
      const max = Math.max(0, COURSES.length - visible);
      scrollToIndex(current >= max ? 0 : current + 1);
    }, 4000);
    return () => window.clearInterval(timerRef.current);
  }, [paused, visible, scrollToIndex]);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  return (
    <section className="home-v2-ai" aria-label="AI-powered courses">
      <div className="home-v2-ai-inner">
        <div className="home-v2-ai-head-row">
          <div className="home-v2-ai-head">
            <p className="home-v2-ai-eyebrow">AI-powered courses</p>
            <h2 className="home-v2-ai-title">
              Learn the skills shaping the future of tech.
            </h2>
            <p className="home-v2-ai-desc">
              Every program blends core engineering with practical AI tools, so
              you stay ahead of how modern teams work.
            </p>
          </div>

          <div className="home-v2-ai-nav">
            <button
              type="button"
              className="home-v2-ai-arrow"
              aria-label="Previous course"
              disabled={!canPrev}
              onClick={() => scrollToIndex(index - 1)}
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              className="home-v2-ai-arrow"
              aria-label="Next course"
              disabled={!canNext}
              onClick={() => scrollToIndex(index + 1)}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
          className="home-v2-ai-viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className="home-v2-ai-track"
            ref={trackRef}
            data-visible={visible}
            style={{ "--ai-gap": `${GAP}px`, "--ai-visible": visible }}
          >
            {COURSES.map((course) => (
              <Link
                key={course.id}
                href={course.link}
                className="home-v2-ai-card"
                aria-label={`View ${course.title} course`}
              >
                <div className="home-v2-ai-card-media">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 390px"
                    className="home-v2-ai-card-img"
                  />
                  <span className="home-v2-ai-badge">
                    <Image
                      src={AI_BADGE_ICON}
                      alt=""
                      width={14}
                      height={14}
                      className="home-v2-ai-badge-icon"
                      aria-hidden="true"
                    />
                    AI-Powered
                  </span>
                </div>

                <div className="home-v2-ai-card-body">
                  <div className="home-v2-ai-meta">
                    <span className="home-v2-ai-level">{course.level}</span>
                    <span className="home-v2-ai-duration">
                      <FiClock aria-hidden="true" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="home-v2-ai-card-title">{course.title}</h3>
                  <p className="home-v2-ai-card-desc">{course.desc}</p>

                  <ul className="home-v2-ai-tags">
                    {course.tags.map((tag) => (
                      <li key={tag} className="home-v2-ai-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <span className="home-v2-ai-link">
                    View Course
                    <FiArrowRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
