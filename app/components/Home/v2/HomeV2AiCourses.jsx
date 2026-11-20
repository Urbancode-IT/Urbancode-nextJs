"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./HomeV2AiCourses.css";

const ICONS = "/images/home/homepage-v2/AI-powered-icons";
const T = "/images/home/tools";

/** AI courses carousel — Figma glowing cards, fluid scale, color tool icons. */
const COURSES = [
  {
    id: 1,
    title: "AI-Powered Full Stack",
    desc: "Build modern web apps with AI copilots, LLM integrations and smart features.",
    level: "Beginner",
    duration: "6 months",
    theme: "orange",
    icon: `${ICONS}/AIPoweredFullstackcardicon.webp`,
    tools: [
      { name: "React", src: `${T}/react.svg` },
      { name: "Node.js", src: `${T}/nodejs.svg` },
      { name: "MongoDB", src: `${T}/mongodb.svg` },
      { name: "OpenAI", src: `${T}/openai-color.svg` },
    ],
    link: "/courses/fullstack-development/ai-powered-fullstack",
  },
  {
    id: 2,
    title: "AI Software Engineering",
    desc: "Write, test and ship production software faster with AI-assisted engineering.",
    level: "Intermediate",
    duration: "6 months",
    theme: "blue",
    icon: `${ICONS}/AISoftwareEngineeringcardicon.webp`,
    tools: [
      { name: "React", src: `${T}/react.svg` },
      { name: "Node.js", src: `${T}/nodejs.svg` },
      { name: "MongoDB", src: `${T}/mongodb.svg` },
      { name: "AWS", src: `${T}/aws.svg` },
    ],
    link: "/courses/fullstack-development/ai-software-engineering",
  },
  {
    id: 3,
    title: "AI & ML",
    desc: "Go from Python basics to training, evaluating and deploying machine learning models.",
    level: "Intermediate",
    duration: "6 months",
    theme: "purple",
    icon: `${ICONS}/AiMlcardicon.webp`,
    tools: [
      { name: "Python", src: `${T}/python.svg` },
      { name: "TensorFlow", src: `${T}/tensorflow.svg` },
      { name: "PyTorch", src: `${T}/pytorch.svg` },
      { name: "OpenAI", src: `${T}/openai-color.svg` },
    ],
    link: "/courses/ai-and-data-science/ai-and-ml",
  },
  {
    id: 4,
    title: "Power Automate",
    desc: "Automate everyday business workflows across Microsoft 365 and beyond.",
    level: "Intermediate",
    duration: "6 months",
    theme: "cyan",
    icon: `${ICONS}/PowerAutomateicon.webp`,
    tools: [
      { name: "Power Automate", src: `${T}/power-automate.svg` },
      { name: "SharePoint", src: `${T}/sharepoint-color.svg` },
      { name: "Excel", src: "/images/home/excel_logo.svg" },
      { name: "Microsoft", src: `${T}/microsoft-color.svg` },
    ],
    link: "/courses/automation/microsoft-power-automate",
  },
  {
    id: 5,
    title: "Data Analyst with Azure",
    desc: "Clean, analyse and visualise data to turn it into actionable insights.",
    level: "Intermediate",
    duration: "6 months",
    theme: "pink",
    icon: `${ICONS}/DTwithAzurecardicon.webp`,
    tools: [
      { name: "Python", src: `${T}/python.svg` },
      { name: "Power BI", src: `${T}/power-bi.svg` },
      { name: "Azure", src: `${T}/azure.svg` },
      { name: "Excel", src: "/images/home/excel_logo.svg" },
    ],
    link: "/courses/ai-and-data-science/data-analyst-with-microsoft-azure",
  },
  {
    id: 6,
    title: "Generative AI",
    desc: "Design prompts, RAG pipelines and AI agents for real products.",
    level: "Intermediate",
    duration: "6 months",
    theme: "green",
    icon: `${ICONS}/GenAIcardicon.webp`,
    tools: [
      { name: "OpenAI", src: `${T}/openai-color.svg` },
      { name: "Python", src: `${T}/python.svg` },
      { name: "Claude", src: `${T}/claude-color.svg` },
      { name: "Gemini", src: `${T}/gemini-color.svg` },
    ],
    link: "/courses/ai-and-data-science/gen-ai",
  },
  {
    id: 7,
    title: "Data Engineering (Azure)",
    desc: "Build scalable data pipelines and lakehouses on Azure.",
    level: "Intermediate",
    duration: "6 months",
    theme: "gold",
    icon: `${ICONS}/DEwithAzurecardicon.webp`,
    tools: [
      { name: "Azure", src: `${T}/azure.svg` },
      { name: "Python", src: `${T}/python.svg` },
      { name: "Spark", src: `${T}/spark.svg` },
      { name: "Databricks", src: `${T}/databricks-color.svg` },
    ],
    link: "/courses/data-engineering/data-engineering-with-microsoft-azure",
  },
];

const GAP_DESKTOP = 24;
/** Target card width — actual width fills the track so only whole cards show. */
const CARD_WIDTH_TARGET = 300;

function getGap(width) {
  if (width < 640) return 12;
  if (width < 1024) return 16;
  return GAP_DESKTOP;
}

export default function HomeV2AiCourses() {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const indexRef = useRef(0);
  const gapRef = useRef(GAP_DESKTOP);
  const visibleRef = useRef(4);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);
  const [gap, setGap] = useState(GAP_DESKTOP);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH_TARGET);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, COURSES.length - visible);
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const width = el.clientWidth;
    if (width <= 0) return;

    const nextGap = getGap(width);
    gapRef.current = nextGap;

    let nextVisible;
    let nextCardW;

    if (width < 640) {
      nextVisible = 1;
      nextCardW = width;
    } else {
      // Only as many full target-width cards as fit — then stretch to fill exactly.
      nextVisible = Math.max(
        1,
        Math.floor((width + nextGap) / (CARD_WIDTH_TARGET + nextGap))
      );
      nextVisible = Math.min(nextVisible, COURSES.length);
      nextCardW = (width - (nextVisible - 1) * nextGap) / nextVisible;
    }

    visibleRef.current = nextVisible;
    setVisible(nextVisible);
    setGap(nextGap);
    setCardWidth(nextCardW);
    setIndex((prev) => {
      const max = Math.max(0, COURSES.length - nextVisible);
      const next = Math.min(prev, max);
      indexRef.current = next;
      el.scrollTo({ left: next * (nextCardW + nextGap), behavior: "auto" });
      return next;
    });
  }, []);

  const scrollToIndex = useCallback((next) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".home-v2-ai-card");
    if (!card) return;
    const step = card.offsetWidth + gapRef.current;
    const max = Math.max(0, COURSES.length - visibleRef.current);
    const clamped = Math.max(0, Math.min(next, max));
    indexRef.current = clamped;
    setIndex(clamped);
    el.scrollTo({ left: clamped * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    measure();
    const el = trackRef.current;
    const ro =
      el && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : null;
    ro?.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
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
      <div className="home-v2-ai-shell">
        <div className="home-v2-ai-inner">
          <div className="home-v2-ai-head-row">
            <div className="home-v2-ai-head">
              <p className="home-v2-ai-eyebrow">AI-powered courses</p>
              <h2 className="home-v2-ai-title">
                Learn the skills shaping the future of tech
              </h2>
            </div>
          </div>

          <div className="home-v2-ai-subrow">
            <p className="home-v2-ai-desc">
              Every program blends core engineering with practical AI tools, so
              you stay ahead of how modern teams work.
            </p>

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
              style={{
                "--ai-gap": `${gap}px`,
                "--ai-visible": visible,
                "--ai-card-w": `${cardWidth}px`,
              }}
            >
              {COURSES.map((course) => (
                <Link
                  key={course.id}
                  href={course.link}
                  className={`home-v2-ai-card home-v2-ai-card--${course.theme}`}
                  aria-label={`View ${course.title} course`}
                >
                  <span className="home-v2-ai-card-glow" aria-hidden="true" />

                  <span className="home-v2-ai-card-icon" aria-hidden="true">
                    <Image
                      src={course.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="home-v2-ai-card-icon-img"
                    />
                  </span>

                  <div className="home-v2-ai-card-copy">
                    <h3 className="home-v2-ai-card-title">{course.title}</h3>
                    <p className="home-v2-ai-card-desc">{course.desc}</p>
                  </div>

                  <div className="home-v2-ai-card-foot">
                    <p className="home-v2-ai-meta">
                      {course.level} · {course.duration}
                    </p>
                    <ul className="home-v2-ai-tools">
                      {course.tools.map((tool) => (
                        <li key={tool.name} className="home-v2-ai-tool">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={tool.src} alt={tool.name} loading="lazy" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
