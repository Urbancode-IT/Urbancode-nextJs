const fs = require('fs');
const path = require('path');

const destinations = [
    {
        id: "usa",
        name: "USA",
        bannerImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1920",
        description: "Unlock endless possibilities. The United States offers the world's most versatile higher education system, state-of-the-art technology, and unmatched global career opportunities.",
        whyTitle: "Why Study in the USA?",
        quickFacts: [
            { label: "Intakes", value: "Fall (Aug/Sep), Spring (Jan), Summer (May)" },
            { label: "Post-Study Work Visa", value: "Up to 3 Years (STEM OPT)" },
            { label: "Average Tuition", value: "$20,000 - $50,000 / Year" },
            { label: "Living Expenses", value: "$10,000 - $18,000 / Year" }
        ]
    },
    {
        id: "uk",
        name: "UK",
        bannerImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1920",
        description: "Experience academic excellence and rich cultural heritage in the United Kingdom, home to some of the world's oldest and most prestigious universities.",
        whyTitle: "Why Study in the UK?",
        quickFacts: [
            { label: "Intakes", value: "September, January" },
            { label: "Post-Study Work Visa", value: "2 Years (Graduate Route)" },
            { label: "Average Tuition", value: "£12,000 - £25,000 / Year" },
            { label: "Living Expenses", value: "£9,000 - £13,000 / Year" }
        ]
    },
    {
        id: "canada",
        name: "Canada",
        bannerImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=1920",
        description: "Known for its high-quality education and friendly immigration policies. Canada offers a safe, diverse, and welcoming environment for international students.",
        whyTitle: "Why Study in Canada?",
        quickFacts: [
            { label: "Intakes", value: "Fall (Sep), Winter (Jan), Summer (May)" },
            { label: "Post-Study Work Visa", value: "Up to 3 Years (PGWP)" },
            { label: "Average Tuition", value: "CAD 15,000 - 35,000 / Year" },
            { label: "Living Expenses", value: "CAD 10,000 - 15,000 / Year" }
        ]
    },
    {
        id: "australia",
        name: "Australia",
        bannerImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1920",
        description: "Top-tier education system with vibrant cities and an amazing lifestyle. Australia is famous for its research-intensive universities and excellent student support.",
        whyTitle: "Why Study in Australia?",
        quickFacts: [
            { label: "Intakes", value: "February, July" },
            { label: "Post-Study Work Visa", value: "2 - 4 Years" },
            { label: "Average Tuition", value: "AUD 20,000 - 45,000 / Year" },
            { label: "Living Expenses", value: "AUD 21,000 - 25,000 / Year" }
        ]
    },
    {
        id: "germany",
        name: "Germany",
        bannerImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1920",
        description: "Excellence in engineering and technology with many tuition-free options at public universities. Experience world-class education in the heart of Europe.",
        whyTitle: "Why Study in Germany?",
        quickFacts: [
            { label: "Intakes", value: "Winter (Oct), Summer (Apr)" },
            { label: "Post-Study Work Visa", value: "18 Months" },
            { label: "Average Tuition", value: "Free - €3,000 / Year (Public)" },
            { label: "Living Expenses", value: "€10,000 - €12,000 / Year" }
        ]
    },
    {
        id: "ireland",
        name: "Ireland",
        bannerImage: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=1920",
        description: "A hub for technology and innovation with a welcoming atmosphere. Ireland is home to European headquarters of major tech giants.",
        whyTitle: "Why Study in Ireland?",
        quickFacts: [
            { label: "Intakes", value: "September, January" },
            { label: "Post-Study Work Visa", value: "Up to 2 Years" },
            { label: "Average Tuition", value: "€10,000 - €25,000 / Year" },
            { label: "Living Expenses", value: "€9,000 - €14,000 / Year" }
        ]
    },
    {
        id: "new-zealand",
        name: "New Zealand",
        bannerImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920",
        description: "Safe environment with globally recognized qualifications. New Zealand offers unparalleled natural beauty alongside world-class education.",
        whyTitle: "Why Study in New Zealand?",
        quickFacts: [
            { label: "Intakes", value: "February, July" },
            { label: "Post-Study Work Visa", value: "Up to 3 Years" },
            { label: "Average Tuition", value: "NZD 22,000 - 35,000 / Year" },
            { label: "Living Expenses", value: "NZD 15,000 - 20,000 / Year" }
        ]
    },
    {
        id: "singapore",
        name: "Singapore",
        bannerImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1920",
        description: "Global education hub in Asia with world-class institutions. Singapore combines Eastern and Western cultures in a safe, modern city-state.",
        whyTitle: "Why Study in Singapore?",
        quickFacts: [
            { label: "Intakes", value: "August, January" },
            { label: "Post-Study Work Visa", value: "Up to 1 Year (LTVP)" },
            { label: "Average Tuition", value: "SGD 15,000 - 35,000 / Year" },
            { label: "Living Expenses", value: "SGD 10,000 - 15,000 / Year" }
        ]
    }
];

const basePath = 'd:/urbancode/Urbancode-nextJs/app/study-abroad';

destinations.forEach(dest => {
    const dirPath = path.join(basePath, dest.id);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    const content = `'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaGlobeAmericas, FaUniversity, FaCheckCircle } from 'react-icons/fa';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import '../../StudyAbroad.css';

const StudyIn${dest.id.replace('-', '').toUpperCase()} = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const why${dest.id.replace('-', '').toUpperCase()} = [
        {
            icon: <FaUniversity className="text-primary fs-1 mb-3" />,
            title: "Academic Excellence",
            desc: "Home to highly ranked universities globally, offering renowned academic programs and cutting-edge research facilities."
        },
        {
            icon: <FaGlobeAmericas className="text-success fs-1 mb-3" />,
            title: "Cultural Diversity",
            desc: "Experience a melting pot of cultures, making it easier for international students to adapt and build global networks."
        },
        {
            icon: <FaGraduationCap className="text-warning fs-1 mb-3" />,
            title: "Flexible Education System",
            desc: "Unique academic flexibility allows you to explore various subjects and customize your learning experience."
        },
        {
            icon: <FaBriefcase className="text-info fs-1 mb-3" />,
            title: "Career Opportunities",
            desc: "Excellent post-study work opportunities allowing international students to gain valuable international work experience."
        }
    ];

    const quickFacts = ${JSON.stringify(dest.quickFacts, null, 8).replace(/"/g, '"')};

    return (
        <div className="study-abroad-container bg-light min-vh-100 pb-5">
            {/* Hero Section with Banner Image */}
            <section className="study-hero position-relative overflow-hidden text-center d-flex align-items-center justify-content-center" 
                style={{ 
                    backgroundImage: \`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('\${"${dest.bannerImage}"}')\`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '60vh',
                    padding: '80px 0'
                }}>
                <div className="container position-relative z-index-1">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge bg-success mb-3 px-3 py-2 rounded-pill">Top Destination</span>
                        <h1 className="display-4 fw-bold text-white mb-4">
                            Study in <span className="text-success">${dest.name}</span>
                        </h1>
                        <p className="lead text-white-50 mx-auto mb-5" style={{ maxWidth: "800px" }}>
                            ${dest.description}
                        </p>
                        <button 
                            onClick={() => setIsModalOpen(true)} 
                            className="btn btn-success btn-lg px-5 py-3 rounded-pill fw-bold shadow"
                        >
                            Get Free Consultation
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Why Section */}
            <section className="section-padding py-5">
                <div className="container mt-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-dark">${dest.whyTitle}</h2>
                        <p className="text-muted">Discover what makes ${dest.name} a leading choice for international students.</p>
                    </div>
                    
                    <div className="row g-4">
                        {why${dest.id.replace('-', '').toUpperCase()}.map((feature, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <motion.div 
                                    className="card h-100 border-0 shadow-sm p-4 text-center rounded-4 bg-white"
                                    whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div>{feature.icon}</div>
                                    <h5 className="fw-bold mt-3 text-dark">{feature.title}</h5>
                                    <p className="text-muted small mt-2">{feature.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Facts Section */}
            <section className="section-padding py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center bg-light rounded-4 p-4 shadow-sm">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <h3 className="fw-bold text-dark mb-3">Quick Facts About ${dest.name}</h3>
                            <p className="text-muted mb-4">Everything you need to know at a glance to start planning your academic journey to ${dest.name}.</p>
                            <button onClick={() => setIsModalOpen(true)} className="btn btn-outline-success rounded-pill px-4">
                                Download Info Brochure
                            </button>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-3">
                                {quickFacts.map((fact, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="d-flex align-items-start p-3 bg-white rounded-3 shadow-sm h-100 border-start border-success border-4">
                                            <FaCheckCircle className="text-success mt-1 me-3 flex-shrink-0" />
                                            <div>
                                                <h6 className="fw-bold mb-1 text-dark">{fact.label}</h6>
                                                <span className="text-muted small">{fact.value}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process CTA */}
            <section className="section-padding py-5 text-center">
                <div className="container">
                    <div className="card border-0 shadow-lg text-white rounded-4 overflow-hidden position-relative"
                         style={{ background: "linear-gradient(135deg, #198754 0%, #0f5132 100%)" }}>
                        <div className="card-body p-5 position-relative z-index-1">
                            <h3 className="fw-bold mb-3 text-white">Ready to Start Your Journey?</h3>
                            <p className="mb-4 text-white-50 mx-auto" style={{ maxWidth: "600px" }}>
                                Let our expert counselors guide you through university selection, application process, and visa assistance for ${dest.name}.
                            </p>
                            <button 
                                onClick={() => setIsModalOpen(true)} 
                                className="btn btn-light text-success btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <EnquiryFormModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                courseName="Study in ${dest.name}" 
            />
        </div>
    );
};

export default StudyIn${dest.id.replace('-', '').toUpperCase()};
`;

    fs.writeFileSync(path.join(dirPath, 'page.jsx'), content);
    console.log(`Created page for ${dest.name}`);
});
