"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal";
import "./StudyAbroadV2DreamCountry.css";

const DREAM_ASSETS = "/images/study-abroad/study-abroadv2/dream-country";
const FLAG_ASSETS = "/images/study-abroad/study-abroadv2/hero";

const COUNTRIES = [
  {
    id: "australia",
    shortName: "Australia",
    eyebrow: "Study in Australia",
    headline: "Your gateway to innovation and growth",
    btnText: "Talk to an Australia expert",
    flag: `${FLAG_ASSETS}/autralia-flag.webp`,
    bgImage: `${DREAM_ASSETS}/BDC-main.webp`,
    secondaryImage: `${DREAM_ASSETS}/BDC-secondary.webp`,
    highlights: [
      "Globally recognized degrees from highly ranked institutions.",
      "Stay and work in Australia for up to 3 years after graduation.",
      "Choose from over 22,000 diverse postgraduate programs.",
      "Dependent visa holders can work full-time during your studies.",
      "Structured pathways for permanent residency and local settlement.",
    ],
  },
  {
    id: "usa",
    shortName: "USA",
    eyebrow: "Study in USA",
    headline: "The ultimate destination for tech & research",
    btnText: "Talk to a USA expert",
    flag: `${FLAG_ASSETS}/us-flag.webp`,
    bgImage:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200",
    secondaryImage:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=600",
    highlights: [
      "Access state-of-the-art labs and Ivy League academic standards.",
      "Work in the US for up to 36 months under the STEM OPT program.",
      "Generous assistantships, research fellowships, and grants.",
      "Direct proximity to Silicon Valley and global tech headquarters.",
      "Unrivaled industry networking and startup incubation hubs.",
    ],
  },
  {
    id: "uk",
    shortName: "UK",
    eyebrow: "Study in UK",
    headline: "Accelerated learning in a historic academic hub",
    btnText: "Talk to a UK expert",
    flag: `${FLAG_ASSETS}/uk-flag.webp`,
    bgImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200",
    secondaryImage:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=600&auto=format&fit=crop",
    highlights: [
      "Complete your postgraduate degree in just 12 fast-paced months.",
      "Secure a 2-year post-study work permit via the Graduate Route.",
      "Learn at historic Russell Group universities with high global rank.",
      "Access comprehensive medical coverage under the NHS program.",
      "Center of international finance and world culture.",
    ],
  },
  {
    id: "canada",
    shortName: "Canada",
    eyebrow: "Study in Canada",
    headline: "Diverse culture, quality education, and PR focus",
    btnText: "Talk to a Canada expert",
    flag: `${FLAG_ASSETS}/canada-flag.webp`,
    bgImage:
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=1200",
    secondaryImage:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=600",
    highlights: [
      "Gain paid professional corporate experience through Co-Op terms.",
      "Work post-graduation for up to 3 years with PGWP status.",
      "Highly structured immigration pathways for qualified graduates.",
      "Extremely safe, welcoming, and culturally diverse communities.",
      "Highly subsidized living and tuition support systems.",
    ],
  },
  {
    id: "ireland",
    shortName: "Ireland",
    eyebrow: "Study in Ireland",
    headline: "Europe’s tech capital for aspiring minds",
    btnText: "Talk to an Ireland expert",
    flag: `${FLAG_ASSETS}/ireland-flag.webp`,
    bgImage:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=1200",
    secondaryImage:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=600&auto=format&fit=crop",
    highlights: [
      "Study in the European hub of Google, Meta, Apple, and Pfizer.",
      "Stay and work in Ireland for up to 2 years after your degree.",
      "The leading English-speaking country in the Eurozone.",
      "Ranked among the top 10 peaceful countries on the Global Index.",
      "Rich tradition of innovation, creative arts, and research.",
    ],
  },
  {
    id: "germany",
    shortName: "Germany",
    eyebrow: "Study in Germany",
    headline: "Zero tuition fees and engineering leadership",
    btnText: "Talk to a Germany expert",
    flag: `${FLAG_ASSETS}/germany-flag.webp`,
    bgImage:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1200",
    secondaryImage:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600",
    highlights: [
      "Tuition-free master's education at state-funded public institutions.",
      "Direct corporate integration with automotive and tech titans.",
      "18-month post-grad job-seeker visa to launch your career.",
      "Access major career options in the largest economy in Europe.",
      "Excellent social benefits, safety, and high living standards.",
    ],
  },
  {
    id: "france",
    shortName: "France",
    eyebrow: "Study in France",
    headline: "Culinary, business, and tech innovation hub",
    btnText: "Talk to a France expert",
    flag: `${FLAG_ASSETS}/france-flag.webp`,
    bgImage:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
    secondaryImage:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&q=80&w=600",
    highlights: [
      "Study at world-class triple-accredited schools (HEC, INSEAD).",
      "Highly subsidized tuition fee structure for public universities.",
      "Secure up to a 2-year work search visa (APS) post-graduation.",
      "Access housing subsidies (CAF) to significantly reduce costs.",
      "Gateway to European tech clusters and multinational brands.",
    ],
  },
  {
    id: "singapore",
    shortName: "Singapore",
    eyebrow: "Study in Singapore",
    headline: "Global financial hub & academic excellence",
    btnText: "Talk to a Singapore expert",
    flag: `${FLAG_ASSETS}/singapore-flag.webp`,
    bgImage:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200",
    secondaryImage:
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=600",
    highlights: [
      "Study at prestigious universities like NUS and NTU (Ranked #1 in Asia).",
      "Direct corporate gateway to Asian headquarters of leading global MNCs.",
      "Safe, clean, and modern society with student-friendly culture.",
      "Outstanding local employment rate and high-paying starting salaries.",
      "Strategic global hub with seamless international travel links.",
    ],
  },
];

export default function StudyAbroadV2DreamCountry() {
  const [activeId, setActiveId] = useState("australia");
  const [modalOpen, setModalOpen] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const tabRefs = useRef({});
  const active = COUNTRIES.find((c) => c.id === activeId) || COUNTRIES[0];

  const selectCountry = (id) => {
    if (id === activeId) return;
    setActiveId(id);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    const el = tabRefs.current[activeId];
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId]);

  return (
    <section
      className="sa-v2-dream"
      aria-labelledby="sa-v2-dream-title"
      id="dream-country"
    >
      <div className="sa-v2-dream-inner">
        <div className="sa-v2-dream-head">
          <h2 id="sa-v2-dream-title" className="sa-v2-dream-title">
            Benefits of your dream country
          </h2>
          <p className="sa-v2-dream-desc">
            Get a detailed overview of what makes each destination a top choice
            for international studies, tailored to your career aspirations.
          </p>
        </div>

        <div className="sa-v2-dream-card">
          <div className="sa-v2-dream-card-bg-stack" aria-hidden="true">
            {COUNTRIES.map((c) => (
              <Image
                key={`bg-${c.id}`}
                src={c.bgImage}
                alt=""
                fill
                sizes="(max-width: 1240px) 100vw, 1240px"
                className={`sa-v2-dream-card-bg${
                  c.id === activeId ? " is-active" : ""
                }`}
                unoptimized={c.bgImage.startsWith("http")}
                priority={c.id === "australia"}
              />
            ))}
          </div>
          <span className="sa-v2-dream-card-shade" aria-hidden="true" />

          <div className="sa-v2-dream-card-content">
            <div
              className="sa-v2-dream-tabs"
              role="tablist"
              aria-label="Dream country"
            >
              {COUNTRIES.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    ref={(node) => {
                      tabRefs.current[c.id] = node;
                    }}
                    className={`sa-v2-dream-tab${isActive ? " is-active" : ""}`}
                    onClick={() => selectCountry(c.id)}
                  >
                    <Image
                      src={c.flag}
                      alt=""
                      width={24}
                      height={24}
                      className="sa-v2-dream-tab-flag"
                    />
                    <span>{c.shortName}</span>
                  </button>
                );
              })}
            </div>

            <div key={animKey} className="sa-v2-dream-panel">
              <p className="sa-v2-dream-eyebrow">{active.eyebrow}</p>
              <h3 className="sa-v2-dream-headline">{active.headline}</h3>

              <ul className="sa-v2-dream-points">
                {active.highlights.map((text, idx) => (
                  <li
                    key={text}
                    className="sa-v2-dream-point"
                    style={{ "--sa-dream-i": idx }}
                  >
                    <span className="sa-v2-dream-tick" aria-hidden="true">
                      ✓
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="sa-v2-dream-cta"
                onClick={() => setModalOpen(true)}
              >
                {active.btnText}
              </button>
            </div>

            <div className="sa-v2-dream-secondary" aria-hidden="true">
              <div className="sa-v2-dream-secondary-glass" />
              <div className="sa-v2-dream-secondary-frame">
                {COUNTRIES.map((c) => (
                  <Image
                    key={`sec-${c.id}`}
                    src={c.secondaryImage}
                    alt=""
                    fill
                    sizes="240px"
                    className={`sa-v2-dream-secondary-img${
                      c.id === activeId ? " is-active" : ""
                    }`}
                    unoptimized={c.secondaryImage.startsWith("http")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseName={`Study in ${active.shortName}`}
        leadPlace={`Study Abroad V2 dream country — ${active.shortName}`}
      />
    </section>
  );
}
