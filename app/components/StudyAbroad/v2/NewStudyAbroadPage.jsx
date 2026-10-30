"use client";

import StudyAbroadV2Hero from "./StudyAbroadV2Hero";
import StudyAbroadV2Services from "./StudyAbroadV2Services";
import StudyAbroadV2Destinations from "./StudyAbroadV2Destinations";
import StudyAbroadV2Mbbs from "./StudyAbroadV2Mbbs";
import StudyAbroadV2MbbsCountries from "./StudyAbroadV2MbbsCountries";
import "./NewStudyAbroadPage.css";

/**
 * Study Abroad V2 page shell.
 * Add sections here one by one (services, destinations, MBBS, etc.).
 */
export default function NewStudyAbroadPage() {
  return (
    <div className="sa-v2-root">
      <StudyAbroadV2Hero />
      <StudyAbroadV2Services />
      <StudyAbroadV2Destinations />
      <StudyAbroadV2Mbbs />
      <StudyAbroadV2MbbsCountries />
    </div>
  );
}
