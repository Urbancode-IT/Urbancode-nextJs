"use client";

import Link from "next/link";
import { SITE_URL } from "../../../lib/siteConfig";

/** Convert [Label](/path) markers to plain text for JSON-LD (keeps absolute URL for SEO). */
export function faqAnswerPlainText(text = "") {
  return String(text).replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const abs = /^https?:\/\//i.test(href)
      ? href
      : `${SITE_URL}${href.startsWith("/") ? href : `/${href}`}`;
    return `${label} (${abs})`;
  });
}

/**
 * Renders FAQ answers with [Label](/path) as clickable course/page names (no raw URL shown).
 */
export default function FaqRichText({ text, className }) {
  const raw = String(text || "");
  const nodes = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match;
  let key = 0;

  while ((match = re.exec(raw)) !== null) {
    if (match.index > last) {
      nodes.push(raw.slice(last, match.index));
    }
    const label = match[1];
    const href = match[2];
    const isExternal = /^https?:\/\//i.test(href);
    const isInternal = href.startsWith("/");

    if (isInternal) {
      nodes.push(
        <Link
          key={`l-${key++}`}
          href={href}
          className="faq-inline-link"
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </Link>
      );
    } else if (isExternal) {
      nodes.push(
        <a
          key={`a-${key++}`}
          href={href}
          className="faq-inline-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </a>
      );
    } else {
      nodes.push(label);
    }
    last = match.index + match[0].length;
  }

  if (last < raw.length) {
    nodes.push(raw.slice(last));
  }

  return <p className={className}>{nodes.length ? nodes : raw}</p>;
}
