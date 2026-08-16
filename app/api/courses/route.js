import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch("https://api.zen-urbancode.in/leads/external-courses", {
      method: "GET",
      headers: {
        "x-api-key": process.env.CRM_API_KEY,
        "Content-Type": "application/json"
      },
      next: { revalidate: 3600 } // Cache for 1 hour to avoid hitting CRM too often
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch courses. Status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ success: true, courses: data });
  } catch (error) {
    console.error("Error fetching external courses:", error);
    // Return a fallback list in case the API is down or incorrect
    const fallbackCourses = [
      "Full Stack Development",
      "Python with AI",
      "Data Science",
      "MERN Stack",
      "Software Testing",
      "Digital Marketing",
      "UI/UX Design",
      "AWS / Cloud Computing",
      "Cybersecurity",
      "Help me choose my course"
    ];
    return NextResponse.json({ success: false, courses: fallbackCourses, error: error.message });
  }
}
