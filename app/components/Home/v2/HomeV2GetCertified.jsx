"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./HomeV2GetCertified.css";

/** Same certs / badge images as legacy CertificationSection. */
const AWS_CERTS = [
  {
    id: "aws-solutions-architect-associate",
    badgeImg: "/images/home/certificate logo/Rectangle 585.png",
    title: "AWS solutions architect associate",
    subtitle:
      "Master AWS cloud infrastructure, networking, storage, security, and architecture design.",
  },
  {
    id: "aws-certified-cloud-practitioner",
    badgeImg: "/images/home/certificate logo/image 35.png",
    title: "AWS cloud practitioner",
    subtitle:
      "Learn AWS fundamentals, cloud services, security, and pricing concepts.",
  },
  {
    id: "aws-solutions-architect-professional",
    badgeImg: "/images/home/certificate logo/image 36.png",
    title: "AWS solutions architect professional",
    subtitle:
      "Master Advanced AWS Cloud Architecture & Enterprise Solutions.",
  },
];

const CCNA_CERTS = [
  {
    id: "ccna-introduction-to-networks",
    badgeImg: "/images/home/certificate logo/ccna2.png",
    title: "CCNA Introduction to Networks",
    subtitle:
      "Build a strong foundation in networking concepts, protocols, and Cisco IOS.",
  },
  {
    id: "ccna-core-certification",
    badgeImg: "/images/home/certificate logo/ccna1.webp",
    title: "CCNA Core Certification",
    subtitle:
      "Complete preparation for the Cisco CCNA 200-301 certification exam.",
  },
  {
    id: "ccnp-enterprise-certification",
    badgeImg: "/images/home/certificate logo/ccna3.png",
    title: "CCNP Enterprise Certification",
    subtitle:
      "Advanced enterprise networking for experienced network professionals.",
  },
];

function CertCard({ cert }) {
  return (
    <Link href={`/certifications/${cert.id}`} className="home-v2-cert-card">
      <div className="home-v2-cert-badge">
        <Image
          src={cert.badgeImg}
          alt={cert.title}
          width={139}
          height={139}
          className="home-v2-cert-badge-img"
        />
      </div>
      <div className="home-v2-cert-info">
        <h3 className="home-v2-cert-item-title">{cert.title}</h3>
        <p className="home-v2-cert-item-desc">{cert.subtitle}</p>
      </div>
    </Link>
  );
}

export default function HomeV2GetCertified() {
  const [activeTab, setActiveTab] = useState("aws");
  const certs = activeTab === "aws" ? AWS_CERTS : CCNA_CERTS;

  return (
    <section
      className="home-v2-cert"
      aria-labelledby="home-v2-cert-title"
      id="certification-section"
    >
      <div className="home-v2-cert-inner">
        <div className="home-v2-cert-left">
          <h2 id="home-v2-cert-title" className="home-v2-cert-title">
            Get certified and get ahead in your career
          </h2>
          <p className="home-v2-cert-desc">
            Prep for certifications with comprehensive courses, practice tests,
            and special offers on exam vouchers.
          </p>
          <div className="home-v2-cert-tabs" role="tablist" aria-label="Certification category">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "aws"}
              className={`home-v2-cert-tab${
                activeTab === "aws" ? " is-active" : ""
              }`}
              onClick={() => setActiveTab("aws")}
            >
              AWS
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "ccna"}
              className={`home-v2-cert-tab${
                activeTab === "ccna" ? " is-active" : ""
              }`}
              onClick={() => setActiveTab("ccna")}
            >
              CCNA
            </button>
          </div>
        </div>

        <div className="home-v2-cert-right" key={activeTab}>
          {certs.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
