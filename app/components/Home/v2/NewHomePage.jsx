"use client";

import { useEffect, useState } from "react";
import HomeV2Hero from "./HomeV2Hero";
import HomeV2MncSection from "./HomeV2MncSection";
import HomeV2AiCourses from "./HomeV2AiCourses";
import HomeV2GuaranteeSection from "./HomeV2GuaranteeSection";
import HomeV2StudyAbroad from "./HomeV2StudyAbroad";
import HomeV2TrendingInsights from "./HomeV2TrendingInsights";
import HomeV2InDemandTools from "./HomeV2InDemandTools";
import HomeV2GetCertified from "./HomeV2GetCertified";
import HomeV2VoiceVideos from "./HomeV2VoiceVideos";
import HomeV2GoogleReviews from "./HomeV2GoogleReviews";
import HomeV2Faq from "./HomeV2Faq";
import V2PageReveal from "@/app/components/common/V2PageReveal";
import "./NewHomePage.css";

/**
 * New home page (Home V2) — built from UC-Portfolio Figma.
 * Banner section hidden; hero uses portfolio project scroller.
 * Voice videos can be managed at /home-admin.
 */
export default function NewHomePage() {
  const [voiceVideos, setVoiceVideos] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/home-cms", { cache: "no-store" });
        const body = await res.json().catch(() => ({}));
        if (!res.ok || !body?.data || cancelled) return;
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
    <V2PageReveal className="home-v2-root">
      <div className="home-v2-above-fold">
        <HomeV2Hero />
      </div>

      <HomeV2AiCourses />

      <HomeV2MncSection />

      <HomeV2GuaranteeSection />

      <HomeV2StudyAbroad />

      <HomeV2TrendingInsights />

      <HomeV2InDemandTools />

      <HomeV2GetCertified />

      <HomeV2VoiceVideos videos={voiceVideos} />

      <HomeV2GoogleReviews />

      <HomeV2Faq />
    </V2PageReveal>
  );
}
