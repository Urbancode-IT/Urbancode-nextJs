"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import "./StudyAbroadV2EnglishProficiency.css";

const IMG_BASE = "/images/study-abroad/study-abroadv2/english-proficiency";

const COURSES = [
  {
    id: "ielts",
    label: "IELTS",
    labelColor: "#6B3B9D",
    labelBorder: "#BEA7D6",
    gradient:
      "linear-gradient(144.55deg, rgba(221, 186, 255, 0.81) -2.68%, rgba(132, 112, 153, 0.81) 120.67%)",
    btnGradient: "linear-gradient(180deg, #FFFFFF 28.41%, #DEC2FC 132.95%)",
    title: "Achieve 7+ Band in IELTS in just 4 weeks!",
    desc: "Boost your IELTS score with Urbancode's expert coaching, proven strategies, and personalized plans covering all four modules.",
    image: `${IMG_BASE}/Ielts.webp`,
    imageAlt: "IELTS exam preparation students",
  },
  {
    id: "pte",
    label: "PTE",
    labelColor: "#437414",
    labelBorder: "#B4DC8F",
    gradient:
      "linear-gradient(144.55deg, rgba(220, 255, 186, 0.81) -2.68%, rgba(81, 156, 7, 0.81) 120.67%)",
    btnGradient: "linear-gradient(180deg, #FFFFFF 28.41%, #B3DC8D 132.95%)",
    title: "Achieve Your Target PTE Score in 4 weeks!",
    desc: "Achieve your target PTE score with expert guidance. A computer-based English proficiency test for students aspiring to study abroad.",
    image: `${IMG_BASE}/PTE.webp`,
    imageAlt: "PTE Core mock test classroom",
  },
  {
    id: "duolingo",
    label: "DUOLINGO",
    labelColor: "#914F13",
    labelBorder: "#EEBF92",
    gradient:
      "linear-gradient(144.55deg, rgba(255, 221, 186, 0.81) -2.68%, rgba(217, 135, 51, 0.81) 120.67%)",
    btnGradient: "linear-gradient(180deg, #FFFFFF 28.41%, #F0C49A 132.95%)",
    title: "Master the Duolingo English Test with Ease!",
    desc: "A convenient, affordable online English proficiency test with flexible, anytime access and comprehensive preparation in under an hour.",
    image: `${IMG_BASE}/Dualingo.webp`,
    imageAlt: "Interactive Duolingo language learning",
  },
];

export default function StudyAbroadV2EnglishProficiency() {
  return (
    <section
      className="sa-v2-ep"
      aria-labelledby="sa-v2-ep-title"
      id="english-proficiency"
    >
      {/* Top curved boundary spanning full width */}
      <div className="sa-v2-ep-curve sa-v2-ep-curve-top" aria-hidden="true">
        <svg viewBox="0 0 1440 36" fill="none" preserveAspectRatio="none">
          <path d="M0,36 C480,0 960,0 1440,36 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="sa-v2-ep-inner">
        {/* Header row: title left, desc aligned over Duolingo column */}
        <div className="sa-v2-ep-head">
          <h2 id="sa-v2-ep-title" className="sa-v2-ep-title">
            Master your english<br />proficiency
          </h2>
          <p className="sa-v2-ep-desc">
            Small batches, expert trainers, and mock tests that mirror the real
            exam.
          </p>
        </div>

        {/* Cards grid */}
        <div className="sa-v2-ep-grid">
          {COURSES.map((c) => (
            <article
              key={c.id}
              className="sa-v2-ep-card"
              style={{ background: c.gradient }}
            >
              {/* Arrow button — absolute top-right */}
              <button
                type="button"
                className="sa-v2-ep-card-btn"
                style={{ background: c.btnGradient }}
                aria-label={`Explore ${c.label} preparation`}
              >
                <FiArrowUpRight className="sa-v2-ep-card-btn-icon" />
              </button>

              {/* Top row: label pill only */}
              <div className="sa-v2-ep-card-top">
                <span
                  className="sa-v2-ep-card-label"
                  style={{
                    color: c.labelColor,
                    borderColor: c.labelBorder,
                  }}
                >
                  {c.label}
                </span>
              </div>

              {/* Text content */}
              <h3 className="sa-v2-ep-card-title">{c.title}</h3>
              <p className="sa-v2-ep-card-text">{c.desc}</p>

              {/* Course image: gap on left, bleeds right */}
              <div className="sa-v2-ep-card-img-wrap">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 44vw, 403px"
                  className="sa-v2-ep-card-img"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom curved boundary spanning full width */}
      <div className="sa-v2-ep-curve sa-v2-ep-curve-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 36" fill="none" preserveAspectRatio="none">
          <path d="M0,0 C480,36 960,36 1440,0 L1440,36 L0,36 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
