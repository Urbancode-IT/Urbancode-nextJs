import { NextResponse } from 'next/server';
import { normalizeCourses } from '@/lib/api/externalCourses';

const FALLBACK_COURSES = [
  "Full Stack Development",
  "Python with AI",
  "Data Science",
  "MERN Stack",
  "Software Testing",
  "Digital Marketing",
  "UI/UX Design",
  "AWS / Cloud Computing",
  "Cybersecurity",
  "Help me choose my course",
];

export async function GET() {
  try {
    const response = await fetch("https://api.zen-urbancode.in/leads/external-courses", {
      method: "GET",
      headers: {
        "x-api-key": process.env.CRM_API_KEY,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch courses. Status: ${response.status}`);
    }

    const data = await response.json();
    const courses = normalizeCourses(data);

    if (!courses.length) {
      throw new Error("External courses API returned an empty list");
    }

    return NextResponse.json({ success: true, courses });
  } catch (error) {
    console.error("Error fetching external courses:", error);
    return NextResponse.json({
      success: false,
      courses: normalizeCourses(FALLBACK_COURSES),
      error: error.message,
    });
  }
}
