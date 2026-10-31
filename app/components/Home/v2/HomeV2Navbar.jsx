"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiPhoneCall } from "react-icons/fi";
import FloatingWidgets from "../../FloatingWidgets";
import FlightTransition from "../../animations/FlightTransition";
import EnquiryFormModal from "../../common/EnquiryFormModal";
import { useStudyAbroadFlight } from "@/app/hooks/useStudyAbroadFlight";
import "./HomeV2Navbar.css";

const ChatbotWidget = dynamic(() => import("../../ChatbotWidget"), { ssr: false });

function rearmBackdropBlur(el) {
  if (!el || !el.classList.contains("is-scrolled")) return;
  el.style.setProperty("backdrop-filter", "none");
  el.style.setProperty("-webkit-backdrop-filter", "none");
  void el.offsetHeight;
  el.style.removeProperty("backdrop-filter");
  el.style.removeProperty("-webkit-backdrop-filter");
}

export default function HomeV2Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const { isFlying, flightOrigin, navigateToStudyAbroad } = useStudyAbroadFlight();

  const closeMenu = () => setIsOpen(false);

  const handleStudyAbroadClick = (e) => {
    e.preventDefault();
    navigateToStudyAbroad("/study-abroad");
    closeMenu();
  };

  const handleKidsSpaceClick = (e) => {
    e.preventDefault();
    closeMenu();
    router.push("/kids-courses");
  };

  const syncScrollState = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    const scrollTop = Math.max(
      window.scrollY || 0,
      document.documentElement.scrollTop || 0,
      document.body.scrollTop || 0
    );
    const shouldScroll = scrollTop > 10;
    const hadScroll = nav.classList.contains("is-scrolled");
    nav.classList.toggle("is-scrolled", shouldScroll);
    if (shouldScroll && !hadScroll) rearmBackdropBlur(nav);
  }, []);

  useEffect(() => {
    syncScrollState();
    document.addEventListener("scroll", syncScrollState, { passive: true, capture: true });
    return () => document.removeEventListener("scroll", syncScrollState, { capture: true });
  }, [syncScrollState]);

  useEffect(() => {
    setIsOpen(false);
    const run = () => {
      syncScrollState();
      rearmBackdropBlur(navRef.current);
    };
    run();
    const t1 = window.setTimeout(run, 0);
    const t2 = window.setTimeout(run, 100);
    const t3 = window.setTimeout(run, 350);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [pathname, syncScrollState]);

  return (
    <>
      <nav
        ref={navRef}
        className={`home-v2-nav${isOpen ? " is-menu-open" : ""}`}
      >
        <div className="home-v2-nav-inner">
          <Link href="/" className="home-v2-nav-logo" onClick={closeMenu}>
            <Image
              src="/images/home/logo.png"
              alt="Urbancode"
              width={143}
              height={31}
              priority
            />
          </Link>

          <div className={`home-v2-nav-right${isOpen ? " is-open" : ""}`}>
            <div className="home-v2-nav-links">
              {pathname?.startsWith("/study-abroad") ? (
                <a
                  href="/study-abroad-redirect?type=call"
                  className="home-v2-nav-link home-v2-nav-phone gtm-phone-call"
                  data-gtm-label="header_phone_click"
                  onClick={closeMenu}
                >
                  <FiPhoneCall className="home-v2-nav-phone-icon" aria-hidden="true" />
                  +91 8598095980
                </a>
              ) : (
                <a
                  href="tel:+919878798797"
                  className="home-v2-nav-link home-v2-nav-phone gtm-phone-call"
                  data-gtm-label="header_phone_click"
                  onClick={closeMenu}
                >
                  <FiPhoneCall className="home-v2-nav-phone-icon" aria-hidden="true" />
                  +91 9878798797
                </a>
              )}
              <Link href="/courses-categories" className="home-v2-nav-link" onClick={closeMenu}>
                Courses
              </Link>
              <Link
                href="/study-abroad"
                className={`home-v2-nav-study${isFlying ? " is-flying" : ""}`}
                onClick={handleStudyAbroadClick}
              >
                Study Abroad
                <span
                  data-flight-origin
                  className={`home-v2-nav-plane-wrap${isFlying ? " is-flying" : ""}`}
                  aria-hidden="true"
                >
                  <Image
                    src="/images/home/homepage-v2/hero-icons/navbar-flight.webp"
                    alt=""
                    width={22}
                    height={22}
                    className="home-v2-nav-plane"
                  />
                </span>
              </Link>
              <Link href="/kids-courses" className="home-v2-nav-link" onClick={handleKidsSpaceClick}>
                Kids Space
              </Link>
              <Link href="/compiler" className="home-v2-nav-link" onClick={closeMenu}>
                Online Compiler
              </Link>
              <Link href="/portfolio" className="home-v2-nav-link" onClick={closeMenu}>
                Portfolio
              </Link>
              <Link href="/contact-us" className="home-v2-nav-link" onClick={closeMenu}>
                Contact Us
              </Link>
            </div>

            <button
              type="button"
              className="home-v2-nav-demo"
              onClick={() => {
                closeMenu();
                setDemoOpen(true);
              }}
            >
              Book a demo
              <span className="home-v2-nav-demo-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>

          <button
            type="button"
            className={`home-v2-nav-burger${isOpen ? " is-active" : ""}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {isOpen && (
          <button
            type="button"
            className="home-v2-nav-scrim"
            aria-label="Close menu"
            onClick={closeMenu}
          />
        )}
      </nav>

      <FloatingWidgets />
      <ChatbotWidget />
      <FlightTransition isAnimating={isFlying} origin={flightOrigin} />

      <EnquiryFormModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        isDemoMode={true}
        isSelectMode={true}
        useCourseEnquiryApi={true}
        leadPlace="Home V2 navbar — Book a demo"
        extraOptions={[
          "Python with AI",
          "Full Stack Development",
          "Data Science",
          "Software Testing",
          "Cloud/DevOps",
          "UI/UX Design",
          "Automation",
          "Digital Marketing",
          "Help me choose",
        ]}
      />
    </>
  );
}
