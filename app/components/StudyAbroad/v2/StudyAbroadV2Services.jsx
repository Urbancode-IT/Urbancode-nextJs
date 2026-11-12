"use client";

import { useEffect, useRef } from "react";
import "./StudyAbroadV2Services.css";

const IMG_BASE =
  "/images/study-abroad/study-abroadv2/study-abroad-services";

const SERVICES = [
  {
    id: "course-selection",
    title: "Course Selection",
    desc: "Expert counseling to help you choose the right course that aligns with your career goals and interests.",
    image: `${IMG_BASE}/study-abroad-services1.webp`,
  },
  {
    id: "university-selection",
    title: "University Selection",
    desc: "Shortlisting top-ranked universities globally that best fit your academic profile and budget.",
    image: `${IMG_BASE}/study-abroad-services2.webp`,
  },
  {
    id: "application-sop",
    title: "Application & SOP",
    desc: "End-to-end support for your application, including professional SOP editing and LOR guidance.",
    image: `${IMG_BASE}/study-abroad-services3.webp`,
  },
  {
    id: "loan-application",
    title: "Loan Application",
    desc: "Assistance with educational loans through our partner banks to fund your international education.",
    image: `${IMG_BASE}/study-abroad-services4.webp`,
  },
  {
    id: "visa-success",
    title: "Visa Success",
    desc: "Expert guidance for visa documentation and mock interview preparation to ensure high success rates.",
    image: `${IMG_BASE}/study-abroad-services5.webp`,
  },
  {
    id: "scholarship-guidance",
    title: "Scholarship Guidance",
    desc: "Identifying and applying for eligible scholarships to reduce your overall financial burden.",
    image: `${IMG_BASE}/study-abroad-services6.webp`,
  },
  {
    id: "pre-departure-support",
    title: "Pre-Departure Support",
    desc: "Briefing sessions on culture, lifestyle, and travel essentials before you fly to your destination.",
    image: `${IMG_BASE}/study-abroad-services7.webp`,
  },
  {
    id: "post-arrival-support",
    title: "Post-Arrival Support",
    desc: "Assistance with airport pickup, local accommodation, and settling into your new environment.",
    image: `${IMG_BASE}/study-abroad-services8.webp`,
  },
];

const DESKTOP_MQ = "(min-width: 768px)";
const MOBILE_MQ = "(max-width: 767px)";
const TOP_OFFSET = 110;
const AUTO_SCROLL_MS = 4200;

export default function StudyAbroadV2Services() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const pin = pinRef.current;
    if (!section || !left || !pin) return undefined;

    const mq = window.matchMedia(DESKTOP_MQ);
    let raf = 0;

    const clearPin = () => {
      pin.classList.remove("is-fixed", "is-bottom");
      pin.style.width = "";
      pin.style.left = "";
      pin.style.top = "";
    };

    const update = () => {
      raf = 0;
      if (!mq.matches) {
        clearPin();
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const leftRect = left.getBoundingClientRect();
      const pinHeight = pin.offsetHeight || 120;
      const start = sectionRect.top;
      const stopFixed = sectionRect.bottom - pinHeight - TOP_OFFSET;

      if (start > TOP_OFFSET) {
        clearPin();
        return;
      }

      if (stopFixed <= 0) {
        pin.classList.remove("is-fixed");
        pin.classList.add("is-bottom");
        pin.style.width = "";
        pin.style.left = "";
        pin.style.top = "";
        return;
      }

      pin.classList.add("is-fixed");
      pin.classList.remove("is-bottom");
      pin.style.width = `${leftRect.width}px`;
      pin.style.left = `${leftRect.left}px`;
      pin.style.top = `${TOP_OFFSET}px`;
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    mq.addEventListener("change", onScrollOrResize);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      mq.removeEventListener("change", onScrollOrResize);
      clearPin();
    };
  }, []);

  /* Mobile: slow auto-advance through service cards */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const mq = window.matchMedia(MOBILE_MQ);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer = 0;
    let paused = false;
    let index = 0;

    const cards = () =>
      Array.from(track.querySelectorAll(".sa-v2-service-card"));

    const step = () => {
      const list = cards();
      if (!list.length || !mq.matches || reduce.matches || paused) return;
      const card = list[0];
      const gap =
        parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) ||
        12;
      const cardStep = card.offsetWidth + gap;
      index = index + 1 >= list.length ? 0 : index + 1;
      track.scrollTo({ left: index * cardStep, behavior: "smooth" });
    };

    const start = () => {
      window.clearInterval(timer);
      if (!mq.matches || reduce.matches) return;
      timer = window.setInterval(step, AUTO_SCROLL_MS);
    };

    const stop = () => window.clearInterval(timer);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    start();
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", resume, { passive: true });
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    mq.addEventListener("change", start);
    reduce.addEventListener("change", start);

    return () => {
      stop();
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      mq.removeEventListener("change", start);
      reduce.removeEventListener("change", start);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sa-v2-services"
      aria-labelledby="sa-v2-services-title"
      id="services"
    >
      <div className="sa-v2-services-inner">
        <aside ref={leftRef} className="sa-v2-services-left">
          <div ref={pinRef} className="sa-v2-services-pin">
            <h2 id="sa-v2-services-title" className="sa-v2-services-title">
              Our expert services
            </h2>
            <p className="sa-v2-services-desc">
              Practical guidance at every stage, so you can focus on your
              future.
            </p>
          </div>
        </aside>

        <div
          ref={trackRef}
          className="sa-v2-services-right"
          aria-label="Service cards"
        >
          {SERVICES.map(({ id, title, desc, image }) => (
            <article key={id} className="sa-v2-service-card">
              <img
                className="sa-v2-service-img"
                src={image}
                alt={title}
                loading="lazy"
              />
              <div className="sa-v2-service-fade" aria-hidden="true" />
              <div className="sa-v2-service-panel">
                <h3 className="sa-v2-service-card-title">{title}</h3>
                <p className="sa-v2-service-card-desc">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
