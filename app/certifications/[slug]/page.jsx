'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import EnquiryFormModal from '@/app/components/common/EnquiryFormModal';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, BookOpen, CheckCircle2, ArrowLeft } from 'lucide-react';
import './CertificationDetails.css';

import { certifications as certificationData } from '@/app/data/certificationData';

const getCourseLink = (data) => {
    if (!data) return '/courses';
    if (data.courseLink) return data.courseLink;
    
    const brandLower = data.brand?.toLowerCase() || '';
    const idLower = data.id?.toLowerCase() || '';
    
    if (brandLower === 'aws' || idLower.startsWith('aws-')) {
        return '/courses/cloud-and-devops/aws';
    }
    if (brandLower === 'ccna' || brandLower === 'ccnp' || idLower.startsWith('ccna-') || idLower.startsWith('ccnp-')) {
        return '/courses/net-working/ccna';
    }
    return '/courses';
};

const CertificationDetailPage = () => {
    const params = useParams();
    const slug = params.slug;
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (slug && certificationData[slug]) {
            setData(certificationData[slug]);
        } else {
            setData(certificationData['aws-certified-cloud-practitioner']);
        }
    }, [slug]);

    if (!data) return (
        <div className="cert-loading">
            <div className="cert-loading-spinner" />
        </div>
    );

    return (
        <div className="cert-page-container">
            <div className="max-container">
                {/* Breadcrumb */}
                <div className="breadcrumb-nav">
                    <Link href="/" className="breadcrumb-link">Home</Link>
                    <ChevronRight size={14} />
                    <Link href="/" className="breadcrumb-link">Certifications</Link>
                    <ChevronRight size={14} />
                    <span className="current-crumb">{data.title}</span>
                </div>

                <div className="cert-grid">
                    {/* Left Content */}
                    <div className="cert-main-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Badge image */}
                            {data.badgeImg && (
                                <div className="cert-badge-hero">
                                    <Image
                                        src={data.badgeImg}
                                        alt={data.title}
                                        width={140}
                                        height={140}
                                        className="cert-badge-hero-img"
                                    />
                                </div>
                            )}

                            <div className="cert-header-row">
                                <span className="cert-brand-badge">
                                    {data.brand} Certification
                                </span>
                                {data.level && (
                                    <span className="cert-level-tag">{data.level}</span>
                                )}
                            </div>

                            <h1 className="cert-main-title">
                                {data.title}
                            </h1>

                            <div className="cert-about-section">
                                <h3>About this Certification</h3>
                                <p className="cert-desc">{data.description}</p>
                            </div>

                            <div className="cert-about-section">
                                <h3>What you'll learn</h3>
                                <div className="points-grid">
                                    {data.learningPoints?.map((point, i) => (
                                        <div key={i} className="point-item">
                                            <CheckCircle2 size={18} className="stat-icon-green" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cert-about-section">
                                <h3>Preparation Course</h3>
                                <div className="cert-course-redirect-box">
                                    <p>
                                        Urbancode offers a dedicated and comprehensive training course to fully prepare you for the <strong>{data.title}</strong> exam. Learn with hands-on practice, simulated exams, and guided instruction.
                                    </p>
                                    <Link href={getCourseLink(data)} className="cert-course-link-btn">
                                        View Preparation Course
                                        <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="cert-sidebar">
                        <div className="sticky-top">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="sidebar-card"
                            >
                                {/* Show badge in sidebar too */}
                                {data.badgeImg ? (
                                    <div className="sidebar-badge-wrap">
                                        <Image
                                            src={data.badgeImg}
                                            alt={data.title}
                                            width={100}
                                            height={100}
                                            className="sidebar-badge-img"
                                        />
                                    </div>
                                ) : (
                                    <div className="sidebar-brand-logo">
                                        <img src={data.brandLogo} alt={data.brand} />
                                    </div>
                                )}

                                <h4>{data.title}</h4>
                                <p className="sidebar-desc">
                                    Get certified and start your career in tech with industry-recognised credentials.
                                </p>

                                <button
                                    onClick={() => setIsEnquiryOpen(true)}
                                    className="enquiry-trigger-btn"
                                >
                                    Enquire Now
                                </button>

                                <div className="benefit-list">
                                    <div className="benefit-item">
                                        <CheckCircle2 size={15} className="stat-icon-green" />
                                        <span>Full Lifetime Access</span>
                                    </div>
                                    <div className="benefit-item">
                                        <CheckCircle2 size={15} className="stat-icon-green" />
                                        <span>Certificate of Completion</span>
                                    </div>
                                    <div className="benefit-item">
                                        <CheckCircle2 size={15} className="stat-icon-green" />
                                        <span>Industry Expert Instructors</span>
                                    </div>
                                    <div className="benefit-item">
                                        <CheckCircle2 size={15} className="stat-icon-green" />
                                        <span>Placement Assistance</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <EnquiryFormModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
                courseName={data.title}
            />
        </div>
    );
};

export default CertificationDetailPage;
