"use client";

import { USE_LEGACY_STUDY_ABROAD } from "@/app/components/StudyAbroad/studyAbroadVersion";
import NewStudyAbroadPage from "@/app/components/StudyAbroad/v2/NewStudyAbroadPage";
import LegacyStudyAbroadPage from "./LegacyStudyAbroadPage";

export default function StudyAbroadPage() {
  if (USE_LEGACY_STUDY_ABROAD) {
    return <LegacyStudyAbroadPage />;
  }

  return <NewStudyAbroadPage />;
}
