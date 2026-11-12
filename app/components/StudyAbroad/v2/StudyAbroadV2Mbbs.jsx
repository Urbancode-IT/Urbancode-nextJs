"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { University, SquareCheck, SquareMenu, Star } from "lucide-react";
import "./StudyAbroadV2Mbbs.css";

const MBBS_IMAGE =
  "/images/study-abroad/study-abroadv2/study-abroad-services/study-mbbs-abroad.webp";

const FEATURES = [
  {
    title: "Accredited Universities",
    desc: "WHO-listed and NMC-recognised government & private medical universities.",
    Icon: University,
  },
  {
    title: "Clinical Exposure",
    desc: "Structured hospital rotations in affiliated teaching hospitals abroad.",
    Icon: SquareCheck,
  },
  {
    title: "End-to-End Support",
    desc: "University shortlisting, visa, travel, and pre-departure briefing covered.",
    Icon: SquareMenu,
  },
  {
    title: "Affordable Education",
    desc: "Complete MBBS abroad at a fraction of Indian private college fees.",
    Icon: Star,
  },
];

const STATS = [
  { end: 10, suffix: "+", label: "MBBS Destinations" },
  { end: 50, suffix: "+", label: "Partner Universities" },
  { end: 6, suffix: "Yrs", label: "Programme Duration" },
  { end: 100, suffix: "%", label: "Admission Support" },
  { end: 95, suffix: "%", label: "Loan Approval Rate" },
];

function useCountUp(target, duration = 1600, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return undefined;
    let start = 0;
    const step = target / (duration / 16);
    const timer = window.setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => window.clearInterval(timer);
  }, [started, target, duration]);

  return count;
}

function StatCard({ end, suffix, label, started }) {
  const count = useCountUp(end, 1600, started);
  return (
    <div className="sa-v2-mbbs-stat">
      <p className="sa-v2-mbbs-stat-value">
        {count}
        {suffix}
      </p>
      <p className="sa-v2-mbbs-stat-label">{label}</p>
    </div>
  );
}

export default function StudyAbroadV2Mbbs() {
  const statsRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sa-v2-mbbs" aria-labelledby="sa-v2-mbbs-title" id="mbbs">
      <div className="sa-v2-mbbs-inner">
        <div className="sa-v2-mbbs-panel">
          <div className="sa-v2-mbbs-layout">
            <div className="sa-v2-mbbs-copy">
              <h2 id="sa-v2-mbbs-title" className="sa-v2-mbbs-title">
                Study MBBS Abroad
              </h2>
              <p className="sa-v2-mbbs-desc">
                Turn your dream of becoming a doctor into reality. Study at
                NMC-approved, WHO-listed universities across Europe and Central
                Asia — with English-medium instruction and total costs far below
                Indian private medical colleges.
              </p>

              <div className="sa-v2-mbbs-features">
                {FEATURES.map(({ title, desc, Icon }) => (
                  <article key={title} className="sa-v2-mbbs-feature">
                    <span className="sa-v2-mbbs-feature-icon" aria-hidden>
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <h3 className="sa-v2-mbbs-feature-title">{title}</h3>
                    <p className="sa-v2-mbbs-feature-desc">{desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Right medical team image pinned flush to bottom and extending outside on right */}
          <div className="sa-v2-mbbs-media">
            <Image
              src={MBBS_IMAGE}
              alt="Medical team in teal scrubs"
              fill
              sizes="(max-width: 880px) 90vw, (max-width: 1240px) 55vw, 740px"
              className="sa-v2-mbbs-img"
              priority
            />
          </div>
        </div>

        <div className="sa-v2-mbbs-stats" ref={statsRef}>
          {STATS.map((stat) => (
            <StatCard
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              started={statsStarted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
