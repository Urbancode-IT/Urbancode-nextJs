"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiClock, FiUsers, FiAward, FiArrowRight } from "react-icons/fi";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import StudyAbroadV2Consult from "./StudyAbroadV2Consult";
import "./StudyAbroadV2EnglishProficiencyInternal.css";

const COURSES_DATA = {
  ielts: {
    slug: "ielts",
    tag: "IELTS",
    tagTextColor: "#5B2C9E",
    bgGradient:
      "linear-gradient(135deg, #E4D4FB 0%, #E2D1FA 8.33%, #DFCEF9 16.67%, #DDCAF8 25%, #DBC7F7 33.33%, #D9C4F7 41.67%, #D6C1F6 50%, #D4BEF5 58.33%, #D2BBF4 66.67%, #D0B7F3 75%, #CDB4F2 83.33%, #CBB1F1 91.67%, #C9AEF0 100%)",
    accentColor: "#5B2C9E",
    accentBg: "rgba(91, 44, 158, 0.1)",
    title: "Reach your target IELTS band with confidence",
    desc: "Expert coaching, proven strategies and personalised plans covering all four modules.",
    image:
      "/images/study-abroad/study-abroadv2/english-proficiency/internal-pages/internal-Ielts-image.webp",
    imageAlt: "Students preparing for IELTS preparation class",
    targetScore: "Band 7.5+",
    duration: "4 to 6 Weeks",
    modulesTitle: "IELTS 4 Core Modules We Master",
    modules: [
      {
        badge: "Module 1",
        name: "Listening",
        details:
          "4 recorded sections with 40 questions covering British, Australian, and North American native accents.",
      },
      {
        badge: "Module 2",
        name: "Reading",
        details:
          "Skimming, scanning, and in-depth analytical reading strategies for academic passages and complex texts.",
      },
      {
        badge: "Module 3",
        name: "Writing",
        details:
          "Comprehensive guidance for Task 1 (charts, maps, diagrams) and Task 2 structured opinion essays.",
      },
      {
        badge: "Module 4",
        name: "Speaking",
        details:
          "One-on-one simulated interviews with native trainers to build fluency, vocabulary, and confident articulation.",
      },
    ],
  },
  pte: {
    slug: "pte",
    tag: "PTE",
    tagTextColor: "#2F6B12",
    bgGradient:
      "linear-gradient(135deg, #E2F8C8 0%, #DEF6C3 8.33%, #DAF5BE 16.67%, #D7F3B9 25%, #D3F1B4 33.33%, #CFEFAF 41.67%, #CBEEAA 50%, #C8ECA5 58.33%, #C4EAA0 66.67%, #C0E89B 75%, #BDE796 83.33%, #B9E591 91.67%, #B5E38C 100%)",
    accentColor: "#2F6B12",
    accentBg: "rgba(47, 107, 18, 0.1)",
    title: "Achieve your target PTE score",
    desc: "A computer-based English test for students aspiring to study abroad, with expert guidance.",
    image:
      "/images/study-abroad/study-abroadv2/english-proficiency/internal-pages/internal-PTE-image.webp",
    imageAlt: "Student preparing for PTE computer-based test",
    targetScore: "Score 79+",
    duration: "3 to 4 Weeks",
    modulesTitle: "PTE Academic Sections & Scoring",
    modules: [
      {
        badge: "Section 1",
        name: "Speaking & Writing",
        details:
          "Read aloud, repeat sentence, describe image, answer short questions, and essay writing with AI scoring metrics.",
      },
      {
        badge: "Section 2",
        name: "Reading",
        details:
          "Fill in the blanks, re-order paragraphs, and multiple choice questions testing advanced vocabulary and logic.",
      },
      {
        badge: "Section 3",
        name: "Listening",
        details:
          "Summarize spoken text, highlight incorrect words, and write from dictation with high precision accuracy.",
      },
      {
        badge: "Mock Lab",
        name: "AI Test Engine",
        details:
          "Official PTE exam software simulations with instant AI scoring report and personalized error breakdown.",
      },
    ],
  },
  duolingo: {
    slug: "duolingo",
    tag: "Duolingo",
    tagTextColor: "#8A4310",
    bgGradient:
      "linear-gradient(135deg, #FBE3CF 0%, #FAE0CB 7.69%, #FADDC6 15.38%, #F9DBC2 23.08%, #F8D8BD 30.77%, #F8D5B9 38.46%, #F7D2B4 46.15%, #F6D0B0 53.85%, #F6CDAB 61.54%, #F5CAA7 69.23%, #F4C7A3 76.92%, #F4C59E 84.62%, #F3C29A 92.31%, #F2BF95 100%)",
    accentColor: "#8A4310",
    accentBg: "rgba(138, 67, 16, 0.1)",
    title: "Prepare for the Duolingo English Test",
    desc: "A convenient online English test with flexible access. We help you prepare for every question type.",
    image:
      "/images/study-abroad/study-abroadv2/english-proficiency/internal-pages/internal-Dualingo-image.webp",
    imageAlt: "Student taking Duolingo English Test online",
    targetScore: "Score 125+",
    duration: "2 to 3 Weeks",
    modulesTitle: "Duolingo English Subscores & Skills",
    modules: [
      {
        badge: "Subscore 1",
        name: "Literacy",
        details:
          "Read and select real words, complete c-test missing letters, and read in context to test comprehension.",
      },
      {
        badge: "Subscore 2",
        name: "Comprehension",
        details:
          "Listen and type what you hear, interactive reading passages, and audio multiple choice questions.",
      },
      {
        badge: "Subscore 3",
        name: "Conversation",
        details:
          "Listen then speak, speak about the photo, and spontaneous conversational fluency drills.",
      },
      {
        badge: "Subscore 4",
        name: "Production",
        details:
          "Write about the photo, 5-minute extended writing response, and video interview preparation.",
      },
    ],
  },
};

export default function StudyAbroadV2EnglishProficiencyInternal({ course = "ielts" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("");

  const data = COURSES_DATA[course.toLowerCase()] || COURSES_DATA.ielts;

  const openModal = (sourceLabel) => {
    setModalSource(`${data.tag} Page — ${sourceLabel}`);
    setModalOpen(true);
  };

  const otherCourses = Object.values(COURSES_DATA).filter(
    (c) => c.slug !== data.slug
  );

  return (
    <main className="sa-v2-internal-root">
      {/* Hero Section */}
      <section className="sa-v2-internal-hero-wrap" aria-label={`${data.tag} Course Overview`}>
        <div
          className="sa-v2-internal-hero-card"
          style={{ background: data.bgGradient }}
        >
          <div className="sa-v2-internal-hero-grid">
            {/* Left Content Column */}
            <div className="sa-v2-internal-hero-content">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="sa-v2-internal-breadcrumbs">
                <Link href="/">Home</Link>
                <span className="sa-v2-internal-breadcrumbs-sep">/</span>
                <Link href="/study-abroad#english-proficiency">Test Prep</Link>
                <span className="sa-v2-internal-breadcrumbs-sep">/</span>
                <span className="sa-v2-internal-breadcrumbs-current">
                  {data.tag}
                </span>
              </nav>

              {/* Tag / Pill */}
              <div className="sa-v2-internal-tag">
                <span
                  className="sa-v2-internal-tag-text"
                  style={{ color: data.tagTextColor }}
                >
                  {data.tag}
                </span>
              </div>

              {/* Heading */}
              <h1 className="sa-v2-internal-title">{data.title}</h1>

              {/* Description */}
              <p className="sa-v2-internal-desc">{data.desc}</p>

              {/* CTA Row */}
              <div className="sa-v2-internal-cta-row">
                <button
                  type="button"
                  className="sa-v2-internal-btn-primary"
                  onClick={() => openModal("Start Your Preparation")}
                >
                  Start Your Preparation
                </button>
                <button
                  type="button"
                  className="sa-v2-internal-btn-secondary"
                  onClick={() => openModal("Book a Free Demo Class")}
                >
                  Book a Free Demo Class
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="sa-v2-internal-hero-img-wrap">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                priority
                sizes="(max-width: 991px) 90vw, 572px"
                className="sa-v2-internal-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights & Features */}
      <section className="sa-v2-internal-section">
        <div className="sa-v2-internal-sec-head">
          <h2 className="sa-v2-internal-sec-title">
            Why Prepare for {data.tag} with Urbancode?
          </h2>
          <p className="sa-v2-internal-sec-desc">
            Proven coaching methodologies, high-yield practice materials, and certified
            mentors to help you hit your target score on your very first attempt.
          </p>
        </div>

        <div className="sa-v2-internal-features-grid">
          <div className="sa-v2-internal-feature-card">
            <div
              className="sa-v2-internal-feature-icon"
              style={{ background: data.accentBg, color: data.accentColor }}
            >
              <FiAward />
            </div>
            <h3 className="sa-v2-internal-feature-title">Certified Master Trainers</h3>
            <p className="sa-v2-internal-feature-desc">
              Trained by British Council, IDP, and Pearson certified educators with 10+ years experience.
            </p>
          </div>

          <div className="sa-v2-internal-feature-card">
            <div
              className="sa-v2-internal-feature-icon"
              style={{ background: data.accentBg, color: data.accentColor }}
            >
              <FiCheckCircle />
            </div>
            <h3 className="sa-v2-internal-feature-title">Real Exam Simulations</h3>
            <p className="sa-v2-internal-feature-desc">
              15+ full-length mock tests mirroring official scoring software, acoustic environments, and timers.
            </p>
          </div>

          <div className="sa-v2-internal-feature-card">
            <div
              className="sa-v2-internal-feature-icon"
              style={{ background: data.accentBg, color: data.accentColor }}
            >
              <FiUsers />
            </div>
            <h3 className="sa-v2-internal-feature-title">Small Batch Sizes</h3>
            <p className="sa-v2-internal-feature-desc">
              Max 10-12 students per batch ensuring dedicated speaking evaluations and personalized feedback.
            </p>
          </div>

          <div className="sa-v2-internal-feature-card">
            <div
              className="sa-v2-internal-feature-icon"
              style={{ background: data.accentBg, color: data.accentColor }}
            >
              <FiClock />
            </div>
            <h3 className="sa-v2-internal-feature-title">Flexible Schedules</h3>
            <p className="sa-v2-internal-feature-desc">
              Weekday morning/evening and weekend-only batches tailored for college students and working professionals.
            </p>
          </div>
        </div>

        {/* Exam Modules Section */}
        <div className="sa-v2-internal-modules-box">
          <div className="sa-v2-internal-sec-head" style={{ marginBottom: 0 }}>
            <h3 className="sa-v2-internal-sec-title">{data.modulesTitle}</h3>
            <p className="sa-v2-internal-sec-desc">
              Target score: <strong style={{ color: data.accentColor }}>{data.targetScore}</strong> · Duration: <strong>{data.duration}</strong>
            </p>
          </div>

          <div className="sa-v2-internal-modules-grid">
            {data.modules.map((m, idx) => (
              <div key={idx} className="sa-v2-internal-module-item">
                <span
                  className="sa-v2-internal-module-badge"
                  style={{ background: data.accentBg, color: data.accentColor }}
                >
                  {m.badge}
                </span>
                <h4 className="sa-v2-internal-module-name">{m.name}</h4>
                <p className="sa-v2-internal-module-details">{m.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Other Test Preps */}
        <div className="sa-v2-internal-other-tests">
          <h4 className="sa-v2-internal-other-tests-title">
            Explore Other English Proficiency Tests
          </h4>
          <div className="sa-v2-internal-other-pills">
            {otherCourses.map((c) => (
              <Link
                key={c.slug}
                href={`/study-abroad/${c.slug}`}
                className="sa-v2-internal-other-pill"
              >
                <span>{c.tag} Preparation</span>
                <FiArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <StudyAbroadV2Consult />

      {/* Modal Integration */}
      <EnquiryFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseName={`${data.tag} Preparation`}
        leadPlace={modalSource || `${data.tag} Page Enquiry`}
      />
    </main>
  );
}

