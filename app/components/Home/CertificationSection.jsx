"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./CertificationSection.css";

const awsCerts = [
  {
    id: "aws-solutions-architect-associate",
    badgeImg: "/images/home/certificate logo/Rectangle 585.png",
    title: "AWS solutions architect associate",
    subtitle: "Master AWS cloud infrastructure, networking, storage, security, and architecture design.",
  },
  {
    id: "aws-certified-cloud-practitioner",
    badgeImg: "/images/home/certificate logo/image 35.png",
    title: "AWS cloud practitioner",
    subtitle: "Learn AWS fundamentals, cloud services, security, and pricing concepts.",
  },
  {
    id: "aws-solutions-architect-professional",
    badgeImg: "/images/home/certificate logo/image 36.png",
    title: "AWS solutions architect professional",
    subtitle: "Master Advanced AWS Cloud Architecture & Enterprise Solutions.",
  },
];

const ccnaCerts = [
  {
    id: "ccna-introduction-to-networks",
    badgeImg: "/images/home/certificate logo/ccna2.png",
    title: "CCNA Introduction to Networks",
    subtitle: "Build a strong foundation in networking concepts, protocols, and Cisco IOS.",
  },
  {
    id: "ccna-core-certification",
    badgeImg: "/images/home/certificate logo/ccna1.webp",
    title: "CCNA Core Certification",
    subtitle: "Complete preparation for the Cisco CCNA 200-301 certification exam.",
  },
  {
    id: "ccnp-enterprise-certification",
    badgeImg: "/images/home/certificate logo/ccna3.png",
    title: "CCNP Enterprise Certification",
    subtitle: "Advanced enterprise networking for experienced network professionals.",
  },
];

function CertCard({ cert }) {
  return (
    <Link href={`/certifications/${cert.id}`} className="cs-cert-card">
      <div className="cs-badge-wrap">
        {cert.badgeImg ? (
          <Image
            src={cert.badgeImg}
            alt={cert.title}
            width={110}
            height={110}
            className="cs-badge-img"
          />
        ) : (
          <div className="cs-badge-initials" style={{ background: cert.badgeColor }}>
            {cert.badgeInitials}
          </div>
        )}
      </div>
      <div className="cs-cert-info">
        <h3 className="cs-cert-title">{cert.title}</h3>
        <p className="cs-cert-subtitle">{cert.subtitle}</p>
      </div>
    </Link>
  );
}

export default function CertificationSection() {
  const [activeTab, setActiveTab] = useState("aws");

  const certs = activeTab === "aws" ? awsCerts : ccnaCerts;

  return (
    <section className="cs-section-wrapper">
      <div className="cs-header home-section-title-wrap">
        <h2 className="section-main-title text-shine">Get Certified</h2>
      </div>

      <div className="cs-container">
        <div className="cs-left">
          <h3 className="cs-heading">
            Get certified and get ahead<br className="cs-heading-br" />in your career
          </h3>
          <p className="cs-desc">
            Prep for certifications with comprehensive courses, practice tests, and<br className="cs-heading-br" />special offers on exam vouchers.
          </p>
          <div className="cs-tabs">
            <button
              className={`cs-tab-btn ${activeTab === "aws" ? "cs-tab-active" : "cs-tab-inactive"}`}
              onClick={() => setActiveTab("aws")}
            >
              AWS
            </button>
            <button
              className={`cs-tab-btn ${activeTab === "ccna" ? "cs-tab-active" : "cs-tab-inactive"}`}
              onClick={() => setActiveTab("ccna")}
            >
              CCNA
            </button>
          </div>
        </div>

        <div className="cs-right">
          {certs.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}