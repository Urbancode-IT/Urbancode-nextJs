"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  HiOutlineHome,
  HiOutlineClipboardDocumentCheck,
  HiOutlineIdentification,
  HiOutlineStar,
  HiOutlineQueueList,
  HiOutlineBuildingLibrary,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal";
import "./StudyAbroadV2Services.css";

const GAP = 14;
const MOBILE_MQ = "(max-width: 767px)";

const SERVICES = [
  {
    id: "university-selection",
    title: "University Selection",
    desc: "Shortlist universities that match your profile, budget and goals.",
    href: "#destinations",
    Icon: HiOutlineHome,
  },
  {
    id: "admission-assistance",
    title: "Admission Assistance",
    desc: "Application strategy, SOP reviews and document checks.",
    href: "#cta",
    Icon: HiOutlineClipboardDocumentCheck,
  },
  {
    id: "visa-guidance",
    title: "Visa Guidance",
    desc: "Step-by-step help with visa documentation and interview prep.",
    href: "#cta",
    Icon: HiOutlineIdentification,
  },
  {
    id: "scholarship-assistance",
    title: "Scholarship Assistance",
    desc: "Identify scholarships you may be eligible for and apply on time.",
    href: "#cta",
    Icon: HiOutlineStar,
  },
  {
    id: "ielts-english-tests",
    title: "IELTS & English Tests",
    desc: "Structured preparation for IELTS, TOEFL, PTE and more.",
    href: "#english-proficiency",
    Icon: HiOutlineQueueList,
  },
  {
    id: "education-loan-guidance",
    title: "Education Loan Guidance",
    desc: "Understand loan options and prepare a clear funding plan.",
    href: "#cta",
    Icon: HiOutlineBuildingLibrary,
  },
  {
    id: "pre-departure-support",
    title: "Pre-Departure Support",
    desc: "Accommodation, travel and orientation before you fly.",
    href: "#cta",
    Icon: HiOutlinePaperAirplane,
  },
];

/** Service cards + CTA slide */
const SLIDE_COUNT = SERVICES.length + 1;

export default function StudyAbroadV2Services() {
  const [consultOpen, setConsultOpen] = useState(false);
  const trackRef = useRef(null);
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [paused, setPaused] = useState(false);

  const maxIndex = SLIDE_COUNT - 1;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const scrollToIndex = useCallback((next) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".sa-v2-services-slide");
    if (!card) return;
    const step = card.offsetWidth + GAP;
    const clamped = Math.max(0, Math.min(next, maxIndex));
    indexRef.current = clamped;
    setIndex(clamped);
    el.scrollTo({ left: clamped * step, behavior: "smooth" });
  }, [maxIndex]);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const sync = () => {
      setIsCarousel(mq.matches);
      if (!mq.matches) {
        indexRef.current = 0;
        setIndex(0);
        trackRef.current?.scrollTo({ left: 0 });
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (!isCarousel || paused) return undefined;
    timerRef.current = window.setInterval(() => {
      const current = indexRef.current;
      scrollToIndex(current >= maxIndex ? 0 : current + 1);
    }, 4000);
    return () => window.clearInterval(timerRef.current);
  }, [isCarousel, paused, maxIndex, scrollToIndex]);

  return (
    <section
      className="sa-v2-services"
      aria-labelledby="sa-v2-services-title"
      id="services"
    >
      <div className="sa-v2-services-inner">
        <div className="sa-v2-services-head-row">
          <div className="sa-v2-services-head">
            <h2 id="sa-v2-services-title" className="sa-v2-services-title">
              Our expert services
            </h2>
            <p className="sa-v2-services-desc">
              Practical guidance at every stage — so you can focus on your
              future.
            </p>
          </div>

          <div
            className="sa-v2-services-nav"
            hidden={!isCarousel}
            aria-hidden={!isCarousel}
          >
            <button
              type="button"
              className="sa-v2-services-arrow"
              aria-label="Previous service"
              disabled={!canPrev}
              onClick={() => scrollToIndex(index - 1)}
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              className="sa-v2-services-arrow"
              aria-label="Next service"
              disabled={!canNext}
              onClick={() => scrollToIndex(index + 1)}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
          className="sa-v2-services-viewport"
          onMouseEnter={() => isCarousel && setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => isCarousel && setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className={`sa-v2-services-grid${isCarousel ? " is-carousel" : ""}`}
            ref={trackRef}
            style={{ "--svc-gap": `${GAP}px` }}
          >
            {SERVICES.map(({ id, title, desc, href, Icon }) => (
              <article key={id} className="sa-v2-service-card sa-v2-services-slide">
                <span className="sa-v2-service-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="sa-v2-service-title">{title}</h3>
                <p className="sa-v2-service-desc">{desc}</p>
                <Link href={href} className="sa-v2-service-link">
                  Learn More →
                </Link>
              </article>
            ))}

            <article className="sa-v2-service-cta sa-v2-services-slide">
              <p className="sa-v2-service-cta-title">Not sure where to start?</p>
              <button
                type="button"
                className="sa-v2-service-cta-btn"
                onClick={() => setConsultOpen(true)}
              >
                Talk to an Expert
              </button>
            </article>
          </div>
        </div>
      </div>

      <EnquiryFormModal
        isOpen={consultOpen}
        onClose={() => setConsultOpen(false)}
        courseName="Study Abroad Consultation"
        leadPlace="Study Abroad V2 services — Talk to an Expert"
      />
    </section>
  );
}
