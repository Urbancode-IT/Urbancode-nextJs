const fs = require('fs');
const path = require('path');

const destinations = [
    {
        id: "usa",
        name: "USA",
        bannerImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1920",
        description: "Studying in the USA offers international students access to cutting-edge technology, world-class research, and advanced English language skills, all while gaining valuable intercultural experience. The U.S. education system is renowned for its academic standards, diverse institutions, and a vast array of specialized degrees.",
        extendedDesc: "Studying in the USA provides a dynamic and diverse educational experience. The education system emphasizes a broad-based approach to learning, allowing students to explore various fields before specializing, and encouraging interdisciplinary studies that prepare them for complex, real-world challenges.",
        highlights: [
            "Study in top USA universities at affordable cost",
            "Consistently ranks among the world's top education institutions",
            "Wide availability of scholarships for international students",
            "High average salary for graduates globally",
            "Post study work permit up to 3 years (STEM)",
            "Global leader in technological advancements and research",
            "Flexible academic environment to explore interests",
            "Over 4,000 higher education institutions to choose from"
        ],
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
        description: "The UK is home to some of the world's oldest and most prestigious universities. Studying here offers a globally recognized education, a rich cultural history, and shorter course durations which help reduce overall tuition and living costs.",
        extendedDesc: "The UK education system is designed to foster independent thinking and academic excellence. With a strong focus on research and innovation, UK institutions provide students with the skills required by top employers globally.",
        highlights: [
            "Shorter degree durations (3 years for Bachelors, 1 year for Masters)",
            "World-renowned academic institutions like Oxford and Cambridge",
            "2-year post-study work visa (Graduate Route)",
            "Rich cultural heritage and diverse student community",
            "Excellent global employability for graduates",
            "Free medical treatment through the NHS",
            "High quality of teaching and research standards"
        ],
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
        description: "Canada consistently ranks as one of the best countries in the world for quality of life and education. With its welcoming immigration policies and vibrant multicultural cities, it's a top destination for international students.",
        extendedDesc: "Canadian universities are known for their high standards and rigorous quality controls. A Canadian degree is globally recognized as equivalent to those from the US, UK, or Australia. The country also provides excellent co-op programs that integrate academic studies with paid work experience.",
        highlights: [
            "Highly affordable tuition fees compared to other top destinations",
            "Up to 3-year Post-Graduation Work Permit (PGWP)",
            "Clear pathways to Permanent Residency (PR)",
            "Consistently ranked among the safest countries in the world",
            "Excellent co-op programs and internship opportunities",
            "High quality of life and welcoming multicultural society"
        ],
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
        description: "Australia offers a diverse and vibrant education experience with top-tier universities, stunning landscapes, and a laid-back lifestyle. It is renowned for its strong focus on research and innovation.",
        extendedDesc: "The Australian education system is heavily regulated by the government to maintain premium standards. It emphasizes practical learning and industry connections, making graduates highly sought after in the global job market.",
        highlights: [
            "Seven of the top 100 universities in the world",
            "Excellent post-study work rights (up to 4 years)",
            "High minimum wage and permission to work while studying",
            "Incredible natural beauty and high standard of living",
            "Strong focus on technological innovation and research",
            "Safe, friendly, and diverse society"
        ],
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
        description: "Germany is the heart of European engineering and technology. It offers world-class education, largely tuition-free at public universities, making it an incredibly attractive destination for international students.",
        extendedDesc: "German universities provide an outstanding academic standard and are highly respected by employers worldwide. The education system strongly integrates theoretical learning with practical application, especially in STEM fields.",
        highlights: [
            "Little to no tuition fees at most public universities",
            "World leader in engineering, technology, and sciences",
            "18-month post-study work visa to find employment",
            "Strong economy offering excellent job prospects",
            "Central location in Europe for easy travel",
            "High quality of life with affordable living costs"
        ],
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
        description: "Known as the Silicon Valley of Europe, Ireland hosts the European headquarters for major global tech and pharmaceutical companies. It offers a friendly, English-speaking environment with excellent career prospects.",
        extendedDesc: "Ireland's education system is among the best in Europe, strongly aligned with industry needs. Universities collaborate closely with enterprise, ensuring that courses are relevant and graduates are employment-ready.",
        highlights: [
            "European hub for top MNCs like Google, Apple, and Meta",
            "English-speaking country with a welcoming culture",
            "Up to 2-year post-study work visa for master's graduates",
            "High global ranking for quality of education",
            "Safe environment with rich history and culture",
            "Strong research initiatives and funding opportunities"
        ],
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
        description: "New Zealand offers a progressive and safe learning environment. Its education system encourages students to ask questions and think critically, set against the backdrop of unparalleled natural beauty.",
        extendedDesc: "All eight of New Zealand's universities rank in the top 3% globally. The educational approach balances academic excellence with practical, hands-on learning, heavily supported by the government's rigorous quality assurance.",
        highlights: [
            "Globally recognized qualifications from top-ranked universities",
            "Post-study work rights allowing up to 3 years of employment",
            "Highly safe and peaceful country with low crime rates",
            "Incredible outdoor lifestyle and stunning landscapes",
            "Supportive learning environment for international students",
            "Pioneering research opportunities"
        ],
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
        description: "Singapore is Asia's premier education hub, offering a unique blend of Eastern and Western cultures. It provides a highly safe, modern, and English-speaking environment with world-class institutions.",
        extendedDesc: "Singapore's universities frequently rank at the top in Asia and globally. The education system is renowned for its rigor and emphasis on math, science, and innovation, preparing students for the fast-paced global economy.",
        highlights: [
            "Home to highly ranked global universities like NUS and NTU",
            "Extremely safe and clean global city",
            "Strategic business hub offering excellent networking",
            "English is the primary language of instruction",
            "Close proximity to India for easier travel",
            "Strong government investment in research and development"
        ],
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
    
    // We will get 3 random other destinations for the footer
    const otherDestinations = destinations.filter(d => d.id !== dest.id).sort(() => 0.5 - Math.random()).slice(0, 3);

    const content = `'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaGlobeAmericas, FaUniversity, FaCheckCircle, FaChevronRight, FaBookOpen, FaUserTie, FaCheckDouble, FaMapMarkerAlt, FaMedal } from 'react-icons/fa';
import Link from 'next/link';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import '../StudyAbroad.css';

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
            {/* Breadcrumb */}
            <div className="container pt-4 pb-2">
                <div className="d-flex align-items-center text-muted small fw-medium">
                    <Link href="/" className="text-decoration-none text-muted hover-success">Home</Link>
                    <FaChevronRight className="mx-2" style={{ fontSize: '0.7rem' }} />
                    <Link href="/study-abroad" className="text-decoration-none text-muted hover-success">Study Abroad</Link>
                    <FaChevronRight className="mx-2" style={{ fontSize: '0.7rem' }} />
                    <span className="text-dark fw-bold">${dest.name}</span>
                </div>
            </div>

            {/* Banner Section inside Page content */}
            <div className="container mt-2 mb-5">
                <div className="position-relative overflow-hidden rounded-4 shadow-lg d-flex align-items-center" 
                    style={{ 
                        backgroundImage: \`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('\${"${dest.bannerImage}"}')\`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '400px'
                    }}>
                    <div className="position-relative z-index-1 p-5 w-100">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="display-3 fw-bold text-white mb-3" style={{ letterSpacing: '-1px' }}>
                                Study in <span className="text-success">${dest.name}</span>
                            </h1>
                            <p className="lead text-white-50 mb-0" style={{ maxWidth: "600px", fontSize: '1.1rem' }}>
                                Your ultimate guide to global education, top universities, and career success.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Intro & Promo Card Section */}
            <section className="section-padding py-3">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <h2 className="fw-bold text-dark mb-4" style={{ fontSize: '2.5rem' }}>Study in <span className="text-success">${dest.name}</span></h2>
                            <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                ${dest.description}
                            </p>
                            <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                ${dest.extendedDesc}
                            </p>
                            <button onClick={() => setIsModalOpen(true)} className="btn btn-success px-4 py-2 rounded-pill fw-bold shadow-sm">
                                Request Callback
                            </button>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0 rounded-4 overflow-hidden position-relative shadow-lg" style={{ background: 'linear-gradient(135deg, #ff7e67 0%, #ff5b4f 100%)', color: 'white' }}>
                                <div className="card-body p-5 position-relative z-index-1">
                                    <div className="mb-4 text-center">
                                        {/* Placeholder for illustration */}
                                        <div className="d-inline-flex align-items-center justify-content-center bg-white text-danger rounded-circle shadow" style={{ width: '80px', height: '80px', fontSize: '30px' }}>
                                            <FaMedal />
                                        </div>
                                    </div>
                                    <h3 className="fw-bold mb-3">Scholarships</h3>
                                    <p className="mb-4" style={{ fontSize: '0.95rem', opacity: '0.9', lineHeight: '1.6' }}>
                                        Every Urbancode student gets expert guidance to win a scholarship at their dream university. Rewards include tuition fee discounts ranging from partial up to 100% waivers. Call us now to apply!
                                    </p>
                                    <button onClick={() => setIsModalOpen(true)} className="btn btn-dark w-100 rounded-pill py-3 fw-bold">
                                        Request Callback
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section-padding py-5 bg-white">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7">
                            <h2 className="fw-bold text-dark mb-4">Highlights of Studying in ${dest.name}</h2>
                            <ul className="list-unstyled">
                                ${dest.highlights.map((item, i) => `
                                <li className="d-flex align-items-start mb-3">
                                    <span className="text-success fw-bold me-3" style={{ fontSize: '1.1rem' }}>${i + 1}.</span>
                                    <span className="text-muted" style={{ fontSize: '1.05rem' }}>${item}</span>
                                </li>`).join('')}
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0 rounded-4 shadow-sm" style={{ backgroundColor: '#fcf6e3' }}>
                                <div className="card-body p-4 p-lg-5 text-center">
                                    <h4 className="fw-bold mb-4 text-dark">Everything you need for your ${dest.name} Dream</h4>
                                    
                                    <div className="row g-3 mb-4">
                                        <div className="col-6">
                                            <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                                                <FaUserTie className="text-warning fs-3 mb-2" />
                                                <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>Personalised Guidance</h6>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                                                <FaBookOpen className="text-primary fs-3 mb-2" />
                                                <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>Test Prep Coaching</h6>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                                                <FaUniversity className="text-danger fs-3 mb-2" />
                                                <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>University Shortlist</h6>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                                                <FaCheckDouble className="text-success fs-3 mb-2" />
                                                <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>Visa Assurance</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsModalOpen(true)} className="btn btn-dark w-100 rounded-pill py-3 fw-bold shadow-sm">
                                        Request Callback
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Info Section */}
            <section className="section-padding py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h3 className="fw-bold text-dark mb-4">Top Programs to Study in ${dest.name}</h3>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                In ${dest.name}, academic degrees are categorized into several levels. Foundation courses provide basic preparatory education. Bachelor degrees represent the completion of undergraduate studies, typically lasting three to four years. Master degrees follow, offering advanced, specialized knowledge usually attained within one to two years. Doctorate degrees are the highest academic qualifications, involving rigorous research.
                            </p>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                The best courses in ${dest.name} offer diverse specializations, including Computer Science, Data Science, Business Analytics, Engineering, Health Informatics, and Artificial Intelligence. These programs provide cutting-edge education and prepare students for global opportunities.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold text-dark mb-4">Study Bachelors & Masters in ${dest.name}</h3>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                Top-ranked universities in ${dest.name} offer high-quality education, producing graduates excelling in their fields. The programs provide academic versatility, allowing for customized study experiences with flexible courses and extracurricular activities.
                            </p>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                These programs help students succeed both academically and professionally by sharpening their competitive edge and boosting their marketability. Graduating from an institution in ${dest.name} significantly enhances global career prospects and networking opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Facts Section */}
            <section className="section-padding py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center bg-light rounded-4 p-4 p-lg-5 shadow-sm">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <h3 className="fw-bold text-dark mb-3">Quick Facts About ${dest.name}</h3>
                            <p className="text-muted mb-4">Everything you need to know at a glance to start planning your academic journey.</p>
                            <button onClick={() => setIsModalOpen(true)} className="btn btn-outline-success rounded-pill px-4 py-2 fw-bold">
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

            {/* Other Destinations Suggestion */}
            <section className="section-padding py-5">
                <div className="container">
                    <h3 className="fw-bold text-dark mb-4 text-center">Explore Other Destinations</h3>
                    <div className="row g-4 justify-content-center">
                        ${otherDestinations.map(d => `
                        <div className="col-lg-4 col-md-6">
                            <Link href="/study-abroad/${d.id}" className="text-decoration-none">
                                <motion.div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100"
                                    whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}>
                                    <div style={{ height: '200px', backgroundImage: \`url('\${"${d.bannerImage}"}')\`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div className="card-body p-4 text-center bg-white">
                                        <h4 className="fw-bold text-dark mb-2">Study in ${d.name}</h4>
                                        <span className="text-success fw-bold d-flex align-items-center justify-content-center gap-2">
                                            Explore <FaChevronRight size={12} />
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>`).join('')}
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
    console.log(`Rewritten page for ${dest.name}`);
});
