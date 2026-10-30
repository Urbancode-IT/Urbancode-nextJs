"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { homeFaqs } from "../../../data/homeFaqs";
import "./HomeV2Faq.css";

const PAGE_SIZE = 3;
const AUTO_MS = 5000;

function chunkFaqs(items, size) {
  const pages = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(
      items.slice(i, i + size).map((faq, offset) => ({
        ...faq,
        globalIndex: i + offset,
      }))
    );
  }
  return pages;
}

export default function HomeV2Faq() {
  const pageIndexRef = useRef(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [paused, setPaused] = useState(false);

  const pages = useMemo(() => chunkFaqs(homeFaqs, PAGE_SIZE), []);
  const maxIndex = Math.max(0, pages.length - 1);
  const canPrev = pageIndex > 0;
  const canNext = pageIndex < maxIndex;

  const scrollToPage = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(next, maxIndex));
      pageIndexRef.current = clamped;
      setPageIndex(clamped);
      setOpenIndex(null);
    },
    [maxIndex]
  );

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    pageIndexRef.current = pageIndex;
  }, [pageIndex]);

  useEffect(() => {
    if (maxIndex === 0 || paused || openIndex != null) return undefined;
    const id = window.setInterval(() => {
      const current = pageIndexRef.current;
      scrollToPage(current >= maxIndex ? 0 : current + 1);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [maxIndex, paused, openIndex, scrollToPage]);

  return (
    <section className="home-v2-faq" aria-labelledby="home-v2-faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="home-v2-faq-inner">
        <div className="home-v2-faq-head">
          <p className="home-v2-faq-eyebrow">FAQ</p>
          <h2 id="home-v2-faq-title" className="home-v2-faq-title">
            Frequently asked questions.
          </h2>
          <p className="home-v2-faq-desc">
            Can&apos;t find what you&apos;re looking for? Our advisors are happy
            to help.
          </p>
        </div>

        <div
          className="home-v2-faq-panel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          <div className="home-v2-faq-viewport">
            <div
              className="home-v2-faq-track"
              role="list"
              aria-live="polite"
              style={{
                transform: `translate3d(-${pageIndex * 100}%, 0, 0)`,
              }}
            >
              {pages.map((page, pageIdx) => (
                <div
                  key={pageIdx}
                  className="home-v2-faq-page"
                  role="group"
                  aria-label={`FAQ section ${pageIdx + 1} of ${pages.length}`}
                >
                  {page.map((faq) => {
                    const isOpen = openIndex === faq.globalIndex;
                    return (
                      <div
                        key={faq.globalIndex}
                        className={`home-v2-faq-item${isOpen ? " is-open" : ""}`}
                        role="listitem"
                      >
                        <button
                          type="button"
                          className="home-v2-faq-trigger"
                          aria-expanded={isOpen}
                          aria-controls={`home-v2-faq-answer-${faq.globalIndex}`}
                          id={`home-v2-faq-question-${faq.globalIndex}`}
                          onClick={() => toggle(faq.globalIndex)}
                        >
                          <span className="home-v2-faq-question">
                            {faq.question}
                          </span>
                          <span className="home-v2-faq-icon" aria-hidden>
                            <span className="home-v2-faq-icon-plus" />
                          </span>
                        </button>
                        <div
                          id={`home-v2-faq-answer-${faq.globalIndex}`}
                          className="home-v2-faq-answer"
                          role="region"
                          aria-labelledby={`home-v2-faq-question-${faq.globalIndex}`}
                        >
                          <div className="home-v2-faq-answer-inner">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="home-v2-faq-nav" aria-label="FAQ navigation">
            <button
              type="button"
              className="home-v2-faq-arrow"
              aria-label="Previous FAQ section"
              disabled={!canPrev}
              onClick={() => scrollToPage(pageIndex - 1)}
            >
              <FiArrowLeft strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="home-v2-faq-arrow"
              aria-label="Next FAQ section"
              disabled={!canNext}
              onClick={() => scrollToPage(pageIndex + 1)}
            >
              <FiArrowRight strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
