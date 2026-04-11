'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChartLine, FaHandshake, FaGlobe } from 'react-icons/fa';
import "./OurMileStoneNew.css";

const milestoneSteps = [
    {
        year: "2021",
        title: "The Vision",
        description: "Founded with a mission to deliver world-class IT education.",
        icon: <FaGlobe />
    },
    {
        year: "2022",
        title: "Exponential Growth",
        description: "Expanded horizons and empowered over 1,000 students.",
        icon: <FaChartLine />
    },
    {
        year: "2023",
        title: "Strategic Partnerships",
        description: "Collaborated with 100+ global firms for top-tier placements.",
        icon: <FaHandshake />
    },
    {
        year: "2024",
        title: "Premier IT Hub",
        description: "Celebrating 5,000+ graduates leading the tech industry.",
        icon: <FaGraduationCap />
    }
];

const OurMileStoneNew = () => {
    return (
        <section className="milestone-new-section">
            <div className="container map-container">
                <div className="text-center mb-5">
                    <motion.h2 
                        className="section-main-title"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-shine">Our Milestones</span>
                    </motion.h2>
                </div>

                <div className="time-map">
                    {/* Dynamic SVG Path */}
                    <div className="map-path-container d-none d-lg-block">
                        <svg width="100%" height="120" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
                            <path 
                                d="M0 60 Q 250 10, 500 60 T 1000 60" 
                                stroke="url(#journeyGradient)" 
                                strokeWidth="3" 
                                strokeDasharray="10 10"
                                className="animated-path"
                            />
                            <defs>
                                <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#198754" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#198754" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#198754" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    
                    <div className="map-points">
                        {milestoneSteps.map((step, index) => (
                            <motion.div 
                                className={`map-node node-${index}`} 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                            >
                                <div className="node-marker-wrapper">
                                    <div className="node-pulse"></div>
                                    <div className="node-icon-box">
                                        {step.icon}
                                    </div>
                                    <div className="node-year-tag">{step.year}</div>
                                </div>
                                <div className="node-details">
                                    <h4 className="node-title-main">{step.title}</h4>
                                    <p className="node-desc-text">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMileStoneNew;
