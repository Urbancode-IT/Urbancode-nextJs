"use client";

import { useEffect, useState } from "react";
import BannerSlider from "../../common/BannerSlider";
import HomeV2Hero from "./HomeV2Hero";
import HomeV2MncSection from "./HomeV2MncSection";
import HomeV2AiCourses from "./HomeV2AiCourses";
import HomeV2GuaranteeSection from "./HomeV2GuaranteeSection";
import HomeV2StudyAbroad from "./HomeV2StudyAbroad";
import HomeV2Alumni from "./HomeV2Alumni";
import HomeV2TrendingInsights from "./HomeV2TrendingInsights";
import HomeV2InDemandTools from "./HomeV2InDemandTools";
import HomeV2GetCertified from "./HomeV2GetCertified";
import HomeV2VoiceVideos from "./HomeV2VoiceVideos";
import HomeV2GoogleReviews from "./HomeV2GoogleReviews";
import HomeV2Faq from "./HomeV2Faq";
import "./NewHomePage.css";

const FALLBACK_BANNERS = [
  {
    src: "/images/home/FSD_TVL_Bootcamp.webp",
    alt: "Free Zero to Hero Full Stack Development Bootcamp in Tirunelveli on 31 October 2026",
    type: "modal",
    courseName: "Full Stack Development Bootcamp - Tirunelveli",
    customTitle: "Register for Zero to Hero Bootcamp",
    hideMode: true,
    leadPlace: "Home V2 banner — FSD Tirunelveli Bootcamp",
  },
  {
    src: "/images/home/6-month-program-banner.webp",
    alt: "AI Software Engineering Certification Program (6 Months)",
    type: "link",
    link: "/courses/fullstack-development/ai-software-engineering",
  },
  {
    src: "/images/home/studyabroad.webp",
    alt: "Study Abroad 2027",
    type: "link",
    link: "/study-abroad",
  },
  {
    src: "/images/home/ieltsbanner.webp",
    alt: "IELTS Training",
    type: "link",
    link: "/study-abroad#english-proficiency",
    useFlightAnimation: true,
  },
  {
    src: "/images/home/data-engineering-with-azure.webp",
    alt: "Data Engineering with Microsoft Azure",
    type: "link",
    link: "/courses/data-engineering/data-engineering-with-microsoft-azure",
  },
];

/**
 * New home page (Home V2) — built from UC-Portfolio Figma.
 * Banners / voice can be managed at /home-admin.
 * Trending Insights always uses institutionVideosData.js.
 */
export default function NewHomePage() {
  const [banners, setBanners] = useState(FALLBACK_BANNERS);
  const [voiceVideos, setVoiceVideos] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/home-cms", { cache: "no-store" });
        const body = await res.json().catch(() => ({}));
        if (!res.ok || !body?.data || cancelled) return;
        if (Array.isArray(body.data.banners) && body.data.banners.length) {
          setBanners(body.data.banners);
        }
        if (Array.isArray(body.data.voiceVideos) && body.data.voiceVideos.length) {
          setVoiceVideos(body.data.voiceVideos);
        }
      } catch {
        /* keep static fallbacks */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="home-v2-root">
      <div className="home-v2-above-fold">
        <HomeV2Hero />

        <section className="home-v2-banners" aria-label="Promotions">
          <BannerSlider
            banners={banners}
            leadPlace="Home V2 banner section"
          />
        </section>
      </div>

      <HomeV2MncSection />

      <HomeV2AiCourses />

      <HomeV2GuaranteeSection />

      <HomeV2StudyAbroad />

      <HomeV2Alumni />

      <HomeV2TrendingInsights />

      <HomeV2InDemandTools />

      <HomeV2GetCertified />

      <HomeV2VoiceVideos videos={voiceVideos} />

      <HomeV2GoogleReviews />

      <HomeV2Faq />
    </div>
  );
}
