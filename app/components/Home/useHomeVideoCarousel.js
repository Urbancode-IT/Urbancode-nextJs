'use client';

import { useEffect, useState } from 'react';

/** Match breakpoints in homeVideoCarousel.css */
export function getHomeVideoVisibleSlots(viewportWidth) {
  if (viewportWidth >= 1500) return 5;
  if (viewportWidth >= 1180) return 4;
  if (viewportWidth >= 900) return 3;
  if (viewportWidth >= 640) return 2;
  return 1;
}

export function useHomeVideoCarousel(itemCount, sliderRef, options = {}) {
  const maxVisible = options.maxVisible ?? Infinity;
  const initialVisible = Math.min(4, itemCount, maxVisible);
  const [cardsVisible, setCardsVisible] = useState(initialVisible);
  const [shouldCenter, setShouldCenter] = useState(itemCount <= initialVisible);

  useEffect(() => {
    const update = () => {
      const slots = getHomeVideoVisibleSlots(window.innerWidth);
      const effective = Math.min(slots, itemCount, maxVisible);
      setCardsVisible(effective);
      setShouldCenter(itemCount <= slots);

      if (sliderRef?.current) {
        requestAnimationFrame(() => {
          const track = sliderRef.current;
          if (!track) return;
          setShouldCenter(track.scrollWidth <= track.clientWidth + 2);
        });
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [itemCount, maxVisible, sliderRef]);

  return { cardsVisible, shouldCenter };
}
