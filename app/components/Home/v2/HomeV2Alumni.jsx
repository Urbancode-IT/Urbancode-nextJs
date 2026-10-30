"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./HomeV2Alumni.css";

const QUOTE_ICON =
  "/images/home/homepage-v2/Alumni-icons/alumniicon-1.webp";
const AVATAR_ICON =
  "/images/home/homepage-v2/Alumni-icons/alumniicon-2.webp";

/** Same alumni as legacy PlacementTestimonials. */
const ALUMNI = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Data Analyst",
    company: "First Source",
    package: "₹9 LPA",
    quote:
      "The hands-on projects and intensive interview preparation at Urbancode were absolute game-changers for my career transition. Mastering SQL and Power BI through real-world datasets gave me the technical edge needed to crack the interview at First Source.",
  },
  {
    id: 2,
    name: "Latha",
    role: "Frontend Developer",
    company: "Datanetiix",
    package: "₹8.0 LPA",
    quote:
      "Excellent mentors who explained complex JavaScript and React concepts in a way that was so easy to grasp. The focus on building responsive UIs and modern CSS techniques was exactly what I needed. The placement support at Urbancode is truly 100% as promised.",
  },
  {
    id: 3,
    name: "Divyabharathi",
    role: "Software Engineer",
    company: "VKnowLabs Private Limited",
    package: "₹5.2 LPA",
    quote:
      "Landing a job at VKnowLabs Private Limited was my ultimate dream. The technical rounds were exceptionally tough, but the mock interviews and deep-dives into Data Structures and Algorithms here prepared me perfectly.",
  },
  {
    id: 4,
    name: "Hemalatha",
    role: "QA Engineer",
    company: "Krypto into system pvt ltd",
    package: "₹11 LPA",
    quote:
      "The curriculum is very up-to-date with industry standards. Learning Automation Testing with Selenium and Java through real-time projects helped me land a high-paying job. The lab facilities and mentors for doubt clearing were major highlights.",
  },
  {
    id: 5,
    name: "Jayamaheshwari",
    role: "Software Engineer",
    company: "Vincilium",
    package: "₹6.5 LPA",
    quote:
      "I loved the focused learning environment at Urbancode. The deep dive into React hooks, state management, and API integration was exactly what top tech firms are looking for. Soft skills training helped me present effectively in interviews.",
  },
  {
    id: 6,
    name: "Sajina",
    role: "Quality Engineer",
    company: "Sopra Steria India Limited",
    package: "₹12 LPA",
    quote:
      "Great experience overall! The .NET ecosystem and C# fundamentals were explained in great detail. Building a comprehensive portfolio through the course projects really impressed the recruiters at Sopra Steria.",
  },
];

const GAP = 24;

function getVisibleCount(width) {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
}

export default function HomeV2Alumni() {
  const trackRef = useRef(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  const maxIndex = Math.max(0, ALUMNI.length - visible);
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const next = getVisibleCount(el.clientWidth);
    setVisible(next);
    setIndex((prev) => Math.min(prev, Math.max(0, ALUMNI.length - next)));
  }, []);

  const scrollToIndex = useCallback(
    (next) => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector(".home-v2-alumni-card");
      if (!card) return;
      const step = card.offsetWidth + GAP;
      const clamped = Math.max(0, Math.min(next, ALUMNI.length - visible));
      indexRef.current = clamped;
      setIndex(clamped);
      el.scrollTo({ left: clamped * step, behavior: "smooth" });
    },
    [visible]
  );

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (maxIndex === 0) return undefined;
    const id = window.setInterval(() => {
      const current = indexRef.current;
      scrollToIndex(current >= maxIndex ? 0 : current + 1);
    }, 4500);
    return () => window.clearInterval(id);
  }, [maxIndex, scrollToIndex]);

  return (
    <section className="home-v2-alumni" aria-label="Alumni stories">
      <div className="home-v2-alumni-inner">
        <div className="home-v2-alumni-head-row">
          <div className="home-v2-alumni-head">
            <p className="home-v2-alumni-eyebrow">Alumni</p>
            <h2 className="home-v2-alumni-title">What Our Alumni Says.</h2>
            <p className="home-v2-alumni-desc">
              Stories are published only with the alumni&apos;s approval.
            </p>
          </div>
          <div className="home-v2-alumni-nav" aria-label="Alumni navigation">
            <button
              type="button"
              className="home-v2-alumni-arrow"
              aria-label="Previous alumni"
              disabled={!canPrev}
              onClick={() => scrollToIndex(index - 1)}
            >
              <FiArrowLeft strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="home-v2-alumni-arrow"
              aria-label="Next alumni"
              disabled={!canNext}
              onClick={() => scrollToIndex(index + 1)}
            >
              <FiArrowRight strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <div className="home-v2-alumni-viewport">
          <div
            className="home-v2-alumni-track"
            ref={trackRef}
            style={{ "--alumni-gap": `${GAP}px`, "--alumni-visible": visible }}
          >
            {ALUMNI.map((item) => (
              <figure key={item.id} className="home-v2-alumni-card">
                <div className="home-v2-alumni-quote-icon">
                  <Image
                    src={QUOTE_ICON}
                    alt=""
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                </div>

                <blockquote className="home-v2-alumni-quote">
                  {item.quote}
                </blockquote>

                <figcaption className="home-v2-alumni-caption">
                  <span className="home-v2-alumni-avatar">
                    <Image
                      src={AVATAR_ICON}
                      alt=""
                      width={48}
                      height={48}
                      className="home-v2-alumni-avatar-img"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="home-v2-alumni-meta">
                    <span className="home-v2-alumni-name">{item.name}</span>
                    <span className="home-v2-alumni-role">
                      {item.role} · {item.company}
                    </span>
                  </span>
                  <span className="home-v2-alumni-salary">{item.package}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
