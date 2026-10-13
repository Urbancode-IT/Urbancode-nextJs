"use client";

// Portfolio V2 — active version served at /portfolio
// V1 backup is preserved in page.client.v1.jsx — restore it here to revert.
import NewPortfolioDesign from "@/app/portfolio-v2/components/NewPortfolioDesign";

export default function PortfolioV2ClientPage() {
  return (
    <div className="portfolio-v2-main-wrapper">
      <NewPortfolioDesign />
    </div>
  );
}
