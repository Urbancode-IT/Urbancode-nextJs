'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './Navbar.css';
import FloatingWidgets from '../FloatingWidgets';
import { FiPhoneCall } from 'react-icons/fi';
import { FaPlane } from 'react-icons/fa';
import FlightTransition from '../animations/FlightTransition';
import BookDemoWidget from '../BookDemoWidget';
import OneOnOneWidget from '../OneOnOneWidget';
import { useStudyAbroadFlight } from '@/app/hooks/useStudyAbroadFlight';

const ChatbotWidget = dynamic(() => import('../ChatbotWidget'), { ssr: false });

/** Force WebKit/Chromium to re-paint backdrop-filter after SPA navigations. */
function rearmBackdropBlur(el) {
  if (!el || !el.classList.contains('scrolled')) return;
  el.style.setProperty('backdrop-filter', 'none');
  el.style.setProperty('-webkit-backdrop-filter', 'none');
  void el.offsetHeight;
  el.style.removeProperty('backdrop-filter');
  el.style.removeProperty('-webkit-backdrop-filter');
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const { isFlying, navigateToStudyAbroad } = useStudyAbroadFlight();
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleStudyAbroadClick = (e) => {
    e.preventDefault();
    navigateToStudyAbroad('/study-abroad');
    setIsOpen(false);
  };

  const handleKidsSpaceClick = (e) => {
    e.preventDefault();
    handleLinkClick();
    router.push('/kids-courses');
  };

  // Toggle scrolled on the DOM node (not React state) so SSR/client className always match
  const syncScrollState = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    const scrollTop = Math.max(
      window.scrollY || 0,
      document.documentElement.scrollTop || 0,
      document.body.scrollTop || 0
    );
    const shouldScroll = scrollTop > 10;
    const hadScroll = nav.classList.contains('scrolled');
    nav.classList.toggle('scrolled', shouldScroll);
    if (shouldScroll && !hadScroll) {
      rearmBackdropBlur(nav);
    }
  }, []);

  useEffect(() => {
    syncScrollState();
    // Capture phase catches scrolls from body/html scrollers too, not just window
    document.addEventListener('scroll', syncScrollState, { passive: true, capture: true });
    return () => document.removeEventListener('scroll', syncScrollState, { capture: true });
  }, [syncScrollState]);

  // After every client route change: resync scroll + re-arm blur
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

  const isFeedbackPage = pathname.startsWith('/feedback');

  if (isFeedbackPage) return null;

  // Keep site-navbar as a static string for stable hydration
  const navClassName = isOpen
    ? 'navbar site-navbar menu-open'
    : 'navbar site-navbar';

  return (
    <>
      <nav ref={navRef} className={navClassName}>
        <div className="navbar-inner">

          {/* Logo */}
          <Link href="/" className="navbar-brand" onClick={handleLinkClick}>
            <Image
              src="/images/home/logo.png"
              alt="Urban Code Logo"
              width={182}
              height={43}
              priority
            />
          </Link>

          <div className="navbar-right">
            {!isFeedbackPage && (
              <div className="navbar-phone">
                <FiPhoneCall className="phone-icon" />
                {pathname && pathname.startsWith('/study-abroad') ? (
                  <a href="/study-abroad-redirect?type=call" className="gtm-phone-call" data-gtm-label="header_phone_click">+91 8598095980</a>
                ) : (
                  <a href="tel:+919878798797" className="gtm-phone-call" data-gtm-label="header_phone_click">+91 9878798797</a>
                )}
              </div>
            )}

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
              <Link href="/courses-categories" onClick={handleLinkClick}>Courses</Link>
              <Link
                href="/study-abroad"
                onClick={handleStudyAbroadClick}
                className="study-abroad-link"
              >
                Study abroad
                <FaPlane className="plane-icon" />
              </Link>
              <Link href="/kids-courses" onClick={handleKidsSpaceClick}>Kids space</Link>
              <Link
                href="/compiler"
                onClick={handleLinkClick}
                className="compiler-link"
              >
                Online Compiler
                <svg
                  className="sparkle-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C12 7 15 12 24 12C15 12 12 17 12 24C12 17 9 12 0 12C9 12 12 7 12 0Z"
                    fill="#fab005"
                  />
                </svg>
              </Link>
              <Link href="/portfolio" onClick={handleLinkClick}>Portfolio</Link>
              <Link href="/contact-us" onClick={handleLinkClick}>Contact us</Link>
            </div>
          </div>

          <div
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      {!isFeedbackPage && (
        <>
          <FloatingWidgets />
          <ChatbotWidget />
          <BookDemoWidget />
          <OneOnOneWidget />
        </>
      )}
      <FlightTransition isAnimating={isFlying} />
    </>
  );
}
