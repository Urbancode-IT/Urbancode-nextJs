'use client';

import { useState, useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/** Same timing as Navbar study-abroad link (FlightTransition duration is 3s). */
export const STUDY_ABROAD_FLIGHT_MS = 3000;
const FLIGHT_RESET_MS = 500;

export function isStudyAbroadLink(link = '') {
  return (
    link === '/study-abroad' ||
    link.startsWith('/study-abroad/') ||
    link.startsWith('/study-abroad#')
  );
}

function captureFlightOrigin() {
  if (typeof window === 'undefined') return null;
  const el = document.querySelector('[data-flight-origin]');
  if (el) {
    const r = el.getBoundingClientRect();
    if (r.width || r.height) {
      return {
        x: r.left + r.width / 2,
        y: r.top + r.height / 2,
        size: Math.max(r.width, r.height, 22),
      };
    }
  }
  return {
    x: Math.min(window.innerWidth * 0.72, window.innerWidth - 80),
    y: 36,
    size: 22,
  };
}

export function useStudyAbroadFlight() {
  const [isFlying, setIsFlying] = useState(false);
  const [flightOrigin, setFlightOrigin] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/study-abroad' || pathname?.startsWith('/study-abroad/')) {
      setIsFlying(false);
      setFlightOrigin(null);
    }
  }, [pathname]);

  const navigateToStudyAbroad = useCallback((href = '/study-abroad') => {
    // Read navbar plane position before React hides it
    setFlightOrigin(captureFlightOrigin());
    setIsFlying(true);
    setTimeout(() => {
      router.push(href);
      setTimeout(() => {
        setIsFlying(false);
        setFlightOrigin(null);
      }, FLIGHT_RESET_MS);
    }, STUDY_ABROAD_FLIGHT_MS);
  }, [router]);

  return { isFlying, flightOrigin, navigateToStudyAbroad };
}
