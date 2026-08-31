import { normalizeCourses } from './externalCourses';

/**
 * Fetches Zen course list from /api/courses with safe JSON parsing.
 * Avoids "Unexpected token '<'" when dev server returns an HTML error page.
 */
export async function fetchClientCourses() {
  const res = await fetch('/api/courses', { cache: 'no-store' });
  const contentType = res.headers.get('content-type') || '';

  if (!res.ok || !contentType.includes('application/json')) {
    throw new Error(`Courses API unavailable (${res.status})`);
  }

  const data = await res.json();
  return normalizeCourses(data);
}
