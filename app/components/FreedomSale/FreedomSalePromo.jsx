'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaArrowRight } from 'react-icons/fa';
import './FreedomSalePromo.css';

const STORAGE_KEY = 'freedom-sale-banner-dismissed';
const FREEDOM_SALE_LANDING = '/#featured-courses';

export default function FreedomSalePromo() {
  const [phase, setPhase] = useState('checking');
  const [bannerGlow, setBannerGlow] = useState(false);
  const bgPanelRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const introInnerRef = useRef(null);
  const bannerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setPhase('intro');
  }, []);

  useGSAP(
    () => {
      if (phase !== 'intro') return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        const t = setTimeout(() => setPhase('banner'), 400);
        return () => clearTimeout(t);
      }

      const tl = gsap.timeline({
        onComplete: () => setPhase('banner'),
      });

      // Initial state
      gsap.set(introInnerRef.current, { opacity: 0, scale: 0.5, xPercent: -50, yPercent: -50, y: 30 });
      gsap.set(bgPanelRef.current, { opacity: 1 });
      gsap.set([leftPanelRef.current, rightPanelRef.current], { opacity: 0, xPercent: 0 });

      // Animate text in
      tl.to(introInnerRef.current, {
        opacity: 1,
        scale: 1,
        xPercent: -50,
        yPercent: -50,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.5)',
      })
      // Subtle float - hold for 3 seconds
      .to(introInnerRef.current, {
        xPercent: -50,
        yPercent: -50,
        y: -15,
        duration: 3.0,
        ease: 'power1.inOut',
      }, "-=0.2")
      // Animate text out (zoom towards user)
      .to(introInnerRef.current, {
        opacity: 0,
        scale: 1.5,
        xPercent: -50,
        yPercent: -50,
        filter: 'blur(10px)',
        duration: 0.5,
        ease: 'power3.in',
      })
      // Split screen exit restored perfectly seamlessly
      .to(['.freedom-burst', '.freedom-particles'], { opacity: 0, duration: 0.3 }, "<")
      .set(bgPanelRef.current, { opacity: 0 }, "-=0.2")
      .set([leftPanelRef.current, rightPanelRef.current], { opacity: 1 }, "<")
      .to(leftPanelRef.current, {
        xPercent: -100,
        duration: 0.8,
        ease: 'power3.inOut',
      }, "<")
      .to(rightPanelRef.current, {
        xPercent: 100,
        duration: 0.8,
        ease: 'power3.inOut',
      }, "<");

      return () => {
        tl.kill();
      };
    },
    { dependencies: [phase], scope: containerRef }
  );

  useGSAP(
    () => {
      if (phase !== 'banner' || !bannerRef.current) return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const el = bannerRef.current;

      let mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        if (reduced) {
          gsap.set(el, { opacity: 1, xPercent: -50, y: 0, scale: 1 });
          setBannerGlow(true);
          return;
        }

        gsap.set(el, {
          opacity: 0,
          scale: 0.95,
          xPercent: -50,
          y: -72,
        });

        gsap.to(el, {
          opacity: 1,
          scale: 1,
          xPercent: -50,
          y: 0,
          duration: 0.65,
          ease: 'elastic.out(1, 0.75)',
          onComplete: () => setBannerGlow(true),
        });
      });

      mm.add("(max-width: 768px)", () => {
        if (reduced) {
          gsap.set(el, { opacity: 1, y: 0, scale: 1, xPercent: 0 });
          setBannerGlow(true);
          return;
        }

        gsap.set(el, {
          opacity: 0,
          scale: 0.95,
          y: -40,
          xPercent: 0,
        });

        gsap.to(el, {
          opacity: 1,
          scale: 1,
          y: 0,
          xPercent: 0,
          duration: 0.65,
          ease: 'elastic.out(1, 0.75)',
          onComplete: () => setBannerGlow(true),
        });
      });

      // Banner drop shadow pulse
      gsap.fromTo(
        el,
        { filter: 'drop-shadow(0 0 0px rgba(0,255,150,0))' },
        {
          filter: 'drop-shadow(0 0 20px rgba(0,255,150,0.35))',
          duration: 0.8,
          delay: 0.2,
          yoyo: true,
          repeat: -1,
          ease: 'power2.inOut',
        }
      );
      
      return () => mm.revert();
    },
    { dependencies: [phase], scope: bannerRef }
  );

  const handleDismiss = useCallback(() => {
    if (!bannerRef.current) {
      setPhase('hidden');
      return;
    }

    gsap.to(bannerRef.current, {
      opacity: 0,
      y: -48,
      scale: 0.98,
      duration: 0.45,
      ease: 'power3.in',
      onComplete: () => {
        setPhase('hidden');
      },
    });
  }, []);

  if (phase === 'checking' || phase === 'hidden') {
    return null;
  }

  return (
    <div ref={containerRef}>
      {phase === 'intro' && (
        <div className="freedom-sale-intro-wrapper" aria-live="polite">
          <div ref={bgPanelRef} className="freedom-sale-panel full-panel"></div>
          <div ref={leftPanelRef} className="freedom-sale-panel left-panel" style={{opacity: 0}}></div>
          <div ref={rightPanelRef} className="freedom-sale-panel right-panel" style={{opacity: 0}}></div>
          
          <div className="freedom-burst">
             <div className="burst-layer layer-1"></div>
             <div className="burst-layer layer-2"></div>
          </div>

          <div className="freedom-particles">
            <div className="particle orange-star p1"></div>
            <div className="particle white-star p2"></div>
            <div className="particle orange-star p3"></div>
            <div className="particle green-star p4"></div>
            <div className="particle green-star p5"></div>
            <div className="particle white-star p6"></div>
            <div className="particle orange-star p7"></div>
            <div className="particle green-star p8"></div>
            <div className="particle white-star p9"></div>
          </div>

          <div ref={introInnerRef} className="freedom-sale-intro-inner">
            <img src="/images/courses/new/leftsideflag.png" alt="Left Flag" className="freedom-flag left-flag" />
            <img src="/images/courses/new/rightsideflag.png" alt="Right Flag" className="freedom-flag right-flag" />
            <h2 className="freedom-sale-intro-title">
              <span className="freedom-text" data-text="FREEDOM">FREEDOM</span>
              <br />
              <span className="sale-text" data-text="SALE">SALE</span>
            </h2>
            <div className="freedom-sale-intro-sub">
              Exclusive Discounts on Course Fees!
            </div>
{/* <p className="freedom-sale-intro-desc">
  Exclusive <span className="highlight-orange">Offer</span> on Courses
</p>           */}
</div>
        </div>
      )}

      {phase === 'banner' && (
        <>
          <div 
            className="freedom-sale-banner-spacer" 
            style={{ display: phase === 'banner' ? 'block' : 'none' }}
          ></div>
          <div ref={bannerRef} className="freedom-sale-banner" role="region" aria-label="Freedom Sale offer">
            <div className={`freedom-sale-banner-inner${bannerGlow ? ' freedom-sale-glow-pulse' : ''}`}>
              <div className="freedom-sale-banner-text">
                <div className="freedom-sale-banner-label">
                  <span className="freedom-sale-intro-badge-dot" aria-hidden />
                  Freedom Sale
                </div>
                <p className="freedom-sale-banner-offer">
                  🎉Exclusive Offers on Courses
                </p>
              </div>
              <div className="freedom-sale-banner-actions">
                <Link href={FREEDOM_SALE_LANDING} className="freedom-sale-cta">
                  Claim Offer <FaArrowRight size={12} />
                </Link>
                <button
                  type="button"
                  className="freedom-sale-close"
                  onClick={handleDismiss}
                  aria-label="Close Freedom Sale banner"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
