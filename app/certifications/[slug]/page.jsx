'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import EnquiryFormModal from '@/app/components/common/EnquiryFormModal';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import './CertificationDetails.css';

const certificationData = {
    'aws-certified-cloud-practitioner': {
        title: 'AWS Certified Cloud Practitioner',
        brand: 'Amazon Web Services',
        rating: '4.8',
        students: '12,450+',
        duration: '12 Hours',
        modules: '8 Modules',
        description: 'The AWS Certified Cloud Practitioner validates your overall understanding of the AWS Cloud platform, covering basic cloud concepts, security, compliance, technology, and billing/pricing.',
        learningPoints: [
            'Basic cloud concepts and AWS global infrastructure',
            'AWS Cloud security and compliance',
            'Core AWS services (EC2, S3, RDS, etc.)',
            'AWS billing, pricing models, and support',
            'Deployment and operation in the AWS Cloud'
        ],
        curriculum: [
            { title: 'Introduction to Cloud Computing', duration: '1.5h' },
            { title: 'AWS Global Infrastructure', duration: '2h' },
            { title: 'AWS Compute Services', duration: '2.5h' },
            { title: 'AWS Storage & Database Services', duration: '2h' },
            { title: 'Security & Compliance', duration: '2h' },
            { title: 'Pricing & Support', duration: '2h' }
        ]
    },
    'cisco-ccna': {
        title: 'Cisco Certified Network Associate (CCNA)',
        brand: 'Cisco',
        rating: '4.9',
        students: '8,200+',
        duration: '40 Hours',
        modules: '12 Modules',
        description: 'CCNA certification proves you have what it takes to navigate the ever-changing landscape of IT. CCNA exam covers networking fundamentals, IP services, security fundamentals, automation and programmability.',
        learningPoints: [
            'Network fundamentals and access',
            'IP connectivity and services',
            'Security fundamentals',
            'Automation and programmability',
            'Router and switch configuration'
        ],
        curriculum: [
            { title: 'Networking Fundamentals', duration: '6h' },
            { title: 'Network Access', duration: '8h' },
            { title: 'IP Connectivity', duration: '10h' },
            { title: 'IP Services', duration: '6h' },
            { title: 'Security Fundamentals', duration: '6h' },
            { title: 'Automation & Programmability', duration: '4h' }
        ]
    },
    'microsoft-power-bi': {
        title: 'Microsoft Power BI Data Analyst',
        brand: 'Microsoft',
        rating: '4.7',
        students: '15,000+',
        duration: '25 Hours',
        modules: '10 Modules',
        description: 'Power BI Data Analysts deliver actionable insights by leveraging available data and applying domain expertise. They provide meaningful business value through easy-to-comprehend data visualizations.',
        learningPoints: [
            'Data preparation and transformation',
            'Modeling data for performance',
            'Visualizing data and creating reports',
            'Analyzing data and trends',
            'Deploying and maintaining assets'
        ],
        curriculum: [
            { title: 'Introduction to Power BI', duration: '3h' },
            { title: 'Data Cleaning & Transformation', duration: '5h' },
            { title: 'Data Modeling & DAX', duration: '7h' },
            { title: 'Report Design & Visualization', duration: '6h' },
            { title: 'Power BI Service & Security', duration: '4h' }
        ]
    },
    'google-cloud-digital-leader': {
        title: 'Google Cloud Digital Leader',
        brand: 'Google Cloud',
        rating: '4.6',
        students: '10,000+',
        duration: '10 Hours',
        modules: '6 Modules',
        description: 'The Google Cloud Digital Leader certification is designed for cloud practitioners and professionals who want to demonstrate their knowledge of cloud technology and Google Cloud as a business transformation agent.',
        learningPoints: [
            'Core Google Cloud products and services',
            'Digital transformation with Google Cloud',
            'Innovating with data and Google Cloud',
            'Infrastructure and application modernization',
            'Google Cloud security and operations'
        ],
        curriculum: [
            { title: 'Introduction to Cloud Leadership', duration: '2h' },
            { title: 'Digital Transformation Journey', duration: '2h' },
            { title: 'Data & Google Cloud', duration: '2h' },
            { title: 'Cloud Infrastructure Essentials', duration: '2h' },
            { title: 'Cloud Operations & Security', duration: '2h' }
        ]
    }
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
