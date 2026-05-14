'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import EnquiryFormModal from '@/app/components/common/EnquiryFormModal';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import './CertificationDetails.css';
import ProgramCohorts from '@/app/components/CourseLayout/ProgramCohorts';

import { certifications as certificationData } from '@/app/data/certificationData';

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

    if (!data) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="cert-page-container">
            <div className="max-container">
                {/* Breadcrumb */}
                <div className="breadcrumb-nav">
                    <Link href="/" className="breadcrumb-link">Home</Link>
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
                            <span className="cert-brand-badge">
                                {data.brand} Certification
                            </span>
                            <h1 className="cert-main-title">
                                {data.title}
                            </h1>
                            
                            <div className="cert-meta-stats">
                                <div className="stat-item">
                                    <Star size={18} className="text-warning fill-warning" />
                                    <strong>{data.rating}</strong>
                                    <span>({data.students} students)</span>
                                </div>
                                <div className="stat-item">
                                    <Clock size={18} className="stat-icon-green" />
                                    <span>{data.duration}</span>
                                </div>
                                <div className="stat-item">
                                    <BookOpen size={18} className="stat-icon-green" />
                                    <span>{data.modules}</span>
                                </div>
                            </div>

                            <div className="cert-about-section">
                                <h3>About this Certification</h3>
                                <p className="cert-desc">{data.description}</p>
                            </div>

                            <div className="cert-about-section">
                                <h3>What you'll learn</h3>
                                <div className="points-grid">
                                    {data.learningPoints.map((point, i) => (
                                        <div key={i} className="point-item">
                                            <CheckCircle2 size={20} className="stat-icon-green mt-1" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3>Curriculum</h3>
                                <div className="curriculum-box">
                                    {data.curriculum.map((item, i) => (
                                        <div key={i} className="curr-item">
                                            <div className="curr-info">
                                                <span className="curr-num">{i + 1}</span>
                                                <span className="curr-title">{item.title}</span>
                                            </div>
                                            <span className="curr-duration">{item.duration}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Sidebar - Sticky */}
                    <div className="cert-sidebar">
                        <div className="sticky-top">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="sidebar-card"
                            >
                                <Award size={64} className="sidebar-icon" />
                                <h4>Career Guaranteed</h4>
                                <p className="sidebar-desc">Get certified and start your career in tech with industry recognized credentials.</p>


                                <button 
                                    onClick={() => setIsEnquiryOpen(true)}
                                    className="enquiry-trigger-btn"
                                >
                                    Enquire Now
                                </button>

                                <div className="benefit-list mt-4">
                                    <div className="benefit-item">
                                        <CheckCircle2 size={16} className="stat-icon-green" />
                                        <span>Full Lifetime Access</span>
                                    </div>
                                    <div className="benefit-item">
                                        <CheckCircle2 size={16} className="stat-icon-green" />
                                        <span>Certificate of Completion</span>
                                    </div>
                                    <div className="benefit-item">
                                        <CheckCircle2 size={16} className="stat-icon-green" />
                                        <span>Industry Expert Instructors</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                
                {/* Program Cohorts Section */}
                {/* <ProgramCohorts onApply={() => setIsEnquiryOpen(true)} /> */}
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
