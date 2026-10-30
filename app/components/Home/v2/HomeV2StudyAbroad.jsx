"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineGlobeAlt,
  HiOutlineBookOpen,
  HiOutlineTrophy,
} from "react-icons/hi2";
import EnquiryFormModal from "../../common/EnquiryFormModal";
import "./HomeV2StudyAbroad.css";

const HERO_IMAGE =
  "/images/home/homepage-v2/study-abroad-home/study-abroad-home-image.webp";

const FEATURES = [
  {
    title: "Study Abroad Counselling",
    desc: "University shortlisting, applications, SOP and visa guidance.",
    Icon: HiOutlineGlobeAlt,
  },
  {
    title: "IELTS Training",
    desc: "Band-focused coaching across Listening, Reading, Writing and Speaking.",
    Icon: HiOutlineBookOpen,
  },
  {
    title: "PTE Training",
    desc: "Computer-based mock tests and scoring strategies for PTE Academic.",
    Icon: HiOutlineTrophy,
  },
];

export default function HomeV2StudyAbroad() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="home-v2-sa" aria-label="Study abroad">
      <div className="home-v2-sa-inner">
        <div className="home-v2-sa-media">
          <Image
            src={HERO_IMAGE}
            alt="Study abroad destinations collage"
            fill
            sizes="(max-width: 900px) 100vw, 580px"
            className="home-v2-sa-img"
            priority={false}
          />

          <div className="home-v2-sa-glass">
            <span className="home-v2-sa-glass-icon" aria-hidden="true">
              <HiOutlineGlobeAlt />
            </span>
            <div className="home-v2-sa-glass-text">
              <p className="home-v2-sa-glass-title">
                UK · Canada · Australia · USA
              </p>
              <p className="home-v2-sa-glass-sub">Popular study destinations</p>
            </div>
          </div>
        </div>

        <div className="home-v2-sa-content">
          <p className="home-v2-sa-eyebrow">Study abroad</p>
          <h2 className="home-v2-sa-title">
            Study Abroad and IELTS, PTE Training.
          </h2>
          <p className="home-v2-sa-desc">
            Plan your international education with expert counselling and
            language test coaching in one place.
          </p>

          <ul className="home-v2-sa-features">
            {FEATURES.map(({ title, desc, Icon }) => (
              <li key={title} className="home-v2-sa-feature">
                <span className="home-v2-sa-feature-icon" aria-hidden="true">
                  <Icon />
                </span>
                <div className="home-v2-sa-feature-body">
                  <h3 className="home-v2-sa-feature-title">{title}</h3>
                  <p className="home-v2-sa-feature-desc">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="home-v2-sa-actions">
            <button
              type="button"
              className="home-v2-sa-btn home-v2-sa-btn-primary"
              onClick={() => setIsOpen(true)}
            >
              Book Free Counselling
            </button>
            <Link
              href="/study-abroad#english-proficiency"
              className="home-v2-sa-btn home-v2-sa-btn-secondary"
            >
              Explore IELTS &amp; PTE
            </Link>
          </div>
        </div>
      </div>

      <EnquiryFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isDemoMode={true}
        isSelectMode={true}
        customTitle="Book a One on One Session"
        leadPlace="Home V2 — Study Abroad Book Free Counselling"
        useExternalCourses={false}
        extraOptions={[
          "Study in UK",
          "Study in USA",
          "Study in Canada",
          "Study in Australia",
          "Study in Germany",
          "Study in Ireland",
          "Study in New Zealand",
          "Study in Dubai",
          "Help me choose",
        ]}
      />
    </section>
  );
}
