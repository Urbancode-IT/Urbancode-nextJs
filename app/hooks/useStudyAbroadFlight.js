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

export function useStudyAbroadFlight() {
  const [isFlying, setIsFlying] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/study-abroad' || pathname?.startsWith('/study-abroad/')) {
      setIsFlying(false);
    }
  }, [pathname]);

  const navigateToStudyAbroad = useCallback((href = '/study-abroad') => {
    setIsFlying(true);
    setTimeout(() => {
      router.push(href);
      setTimeout(() => setIsFlying(false), FLIGHT_RESET_MS);
    }, STUDY_ABROAD_FLIGHT_MS);
  }, [router]);

  return { isFlying, navigateToStudyAbroad };
}
