import { normalizeCourses } from "./externalCourses";

const CRM_COURSES_CACHE = { list: null, fetchedAt: 0 };
const CACHE_TTL_MS = 60 * 60 * 1000;

/** Website / marketing titles mapped to exact Zen CRM course_name values. */
const COURSE_ALIASES = {
  "mern stack": "MERN",
  "mean stack": "MEAN",
  "java full stack development": "Java Fullstack",
  "java fullstack development": "Java Fullstack",
  "java full stack": "Java Fullstack",
  "python full stack": "Python stack",
  "python fullstack": "Python stack",
  "ai powered fullstack": "MERN",
  "next js development": "NextJS",
  "next.js development": "NextJS",
  "react js": "ReactJS",
  "react.js": "ReactJS",
  "microsoft sharepoint": "SharePoint",
  "c and c programming": "C++",
  "c and c++ programming": "C++",
  "data structures and algorithms dsa": "DSA",
  "data structures and algorithms": "DSA",
  "html and css": "HTML,CSS,JS",
  "ui ux designing": "UI/UX",
  "ui ux design": "UI/UX",
  "software testing": "Java Selenium",
  "automation testing": "Playwright",
  "power automate": "power Automation",
  "microsoft power automate": "power Automation",
  "digital marketing": "Digital marketing",
  "cloud and devops": "Devops",
  "aws cloud computing": "AWS",
  "aws cloud": "AWS",
  "data science": "AIML",
  "python with ai": "GEN AI",
  "full stack development": "Web development",
  "fullstack development": "Web development",
  "cyber security": "Cyber Security",
  "cybersecurity": "Cyber Security",
  "data analytics": "Data Analytics",
  "data engineering": "Data Engineering",
  "data visualization": "Power BI",
  "salesforce crm": "Salesforce",
  "kids courses free demo class": "Core Python for Kids",
  "kids course enrollment": "Core Python for Kids",
  "kids play zone free demo": "Scratch",
  "junior web developer": "Web development",
  "core python": "Core Python for Kids",
  "advanced python": "Advanced Python",
  "c programming": "C",
  "cpp": "C++",
  "sql": "MySQL",
  "graphic designing": "Graphic Designing",
  "ai ml": "AIML",
  "freedom sale course": "other",
  "anniversary flash sale": "other",
  "help me choose my course": "other",
  "help me choose": "other",
};

function normalizeKey(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripNoise(key) {
  return key
    .replace(/\b(stack|development|course|training|program|certification|mastery|bootcamp)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function findExactName(raw, names) {
  return names.find((name) => name.toLowerCase() === raw.toLowerCase()) || null;
}

function findAliasName(raw, names) {
  const alias = COURSE_ALIASES[normalizeKey(raw)];
  if (!alias) return null;
  return findExactName(alias, names) || alias;
}

function findFullstackMatch(raw, names) {
  const key = normalizeKey(raw);
  if (!key.includes("fullstack") && !key.includes("full stack")) return null;

  // Fullstack offerings should not map to standalone AI courses (GEN AI / AIML).
  if (key.includes("ai powered")) {
    return findExactName("MERN", names) || findExactName("Web development", names);
  }

  const priorities = ["Java Fullstack", "Python stack", "MERN", "MEAN", "Web development"];
  for (const preferred of priorities) {
    const match = findExactName(preferred, names);
    if (match) return match;
  }

  return null;
}

function findFuzzyName(raw, names) {
  const inputKey = stripNoise(normalizeKey(raw));
  if (!inputKey) return null;

  let best = null;
  let bestScore = 0;

  for (const name of names) {
    const nameKey = stripNoise(normalizeKey(name));
    if (!nameKey) continue;

    if (inputKey === nameKey) return name;

    // Avoid matching short AI tokens (e.g. "gen ai") for fullstack course titles.
    if (inputKey.includes("fullstack") || inputKey.includes("full stack")) {
      if (nameKey === "gen ai" || nameKey === "aiml") continue;
    }

    if (inputKey.includes(nameKey) || nameKey.includes(inputKey)) {
      const score = Math.min(inputKey.length, nameKey.length);
      if (score > bestScore) {
        bestScore = score;
        best = name;
      }
    }
  }

  return best;
}

/**
 * Maps a website course label to an exact Zen CRM course_name.
 * Falls back to "other" when no match exists so leads are never dropped.
 */
export function resolveCrmCourseName(input, crmCourses = []) {
  const raw = String(input || "").trim();
  if (!raw) return "other";

  const names = crmCourses
    .map((course) => (typeof course === "string" ? course : course?.course_name))
    .filter(Boolean);

  const exact = findExactName(raw, names);
  if (exact) return exact;

  const alias = findAliasName(raw, names);
  if (alias) return alias;

  const fullstack = findFullstackMatch(raw, names);
  if (fullstack) return fullstack;

  const fuzzy = findFuzzyName(raw, names);
  if (fuzzy) return fuzzy;

  if (names.includes("other")) return "other";
  return raw;
}

export async function fetchCrmCourseNames() {
  const now = Date.now();
  if (CRM_COURSES_CACHE.list && now - CRM_COURSES_CACHE.fetchedAt < CACHE_TTL_MS) {
    return CRM_COURSES_CACHE.list;
  }

  if (!process.env.CRM_API_KEY) {
    return CRM_COURSES_CACHE.list || [];
  }

  try {
    const response = await fetch("https://api.zen-urbancode.in/leads/external-courses", {
      method: "GET",
      headers: {
        "x-api-key": process.env.CRM_API_KEY,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return CRM_COURSES_CACHE.list || [];
    }

    const data = await response.json();
    const courses = normalizeCourses(data).map((course) => course.course_name);
    CRM_COURSES_CACHE.list = courses;
    CRM_COURSES_CACHE.fetchedAt = now;
    return courses;
  } catch (error) {
    console.error("[resolveCrmCourse] Failed to fetch CRM courses:", error);
    return CRM_COURSES_CACHE.list || [];
  }
}

export async function resolveCrmCourseNameAsync(input) {
  const names = await fetchCrmCourseNames();
  return resolveCrmCourseName(input, names);
}
