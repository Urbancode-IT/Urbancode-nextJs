"use client";

import StudyAbroadV2Hero from "./StudyAbroadV2Hero";
import StudyAbroadV2Services from "./StudyAbroadV2Services";
import StudyAbroadV2Destinations from "./StudyAbroadV2Destinations";
import StudyAbroadV2Mbbs from "./StudyAbroadV2Mbbs";
import StudyAbroadV2MbbsCountries from "./StudyAbroadV2MbbsCountries";
import StudyAbroadV2DreamCountry from "./StudyAbroadV2DreamCountry";
import StudyAbroadV2Stories from "./StudyAbroadV2Stories";
import StudyAbroadV2Consult from "./StudyAbroadV2Consult";
import V2PageReveal from "@/app/components/common/V2PageReveal";
import "./NewStudyAbroadPage.css";

/**
 * Study Abroad V2 page shell.
 * Add sections here one by one (services, destinations, MBBS, etc.).
 */
export default function NewStudyAbroadPage() {
  return (
    <V2PageReveal className="sa-v2-root">
      <StudyAbroadV2Hero />
      <StudyAbroadV2Services />
      <StudyAbroadV2Destinations />
      <StudyAbroadV2Mbbs />
      <StudyAbroadV2MbbsCountries />
      <StudyAbroadV2DreamCountry />
      <StudyAbroadV2Stories />
      <StudyAbroadV2Consult />
    </V2PageReveal>
  );
}
