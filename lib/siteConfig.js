/** Canonical production host — hosting already 307s apex → www. */
export const SITE_URL = "https://www.urbancode.in";

export const SITE_NAME = "Urbancode Edutech";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/home/og-image.jpg`;

export function absoluteUrl(path = "/") {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
