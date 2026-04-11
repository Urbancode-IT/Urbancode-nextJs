'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaUserGraduate, FaCode, FaBriefcase } from 'react-icons/fa';
import "./TrainingSection.css";

const TrainingSection = () => {
    const specializations = [
        {
            icon: <FaChalkboardTeacher />,
            title: "Personalized Consultation",
            desc: "Urbancode Edutech trains future-ready professionals in Full Stack, Cloud, AI, ML, Cybersecurity, and more.",
            posClass: "node-top-left"
        },
        {
            icon: <FaUserGraduate />,
            title: "Expert Career Guidance",
            desc: "We empower learners with cutting-edge skills, placement assistance, and career pathways for long-term success.",
            posClass: "node-top-right"
        },
        {
            icon: <FaCode />,
            title: "Flexible Training Modules",
            desc: "Our expert programs equip professionals and teams with practical knowledge to excel in their respective fields.",
            posClass: "node-bottom-left"
        },
        {
            icon: <FaBriefcase />,
            title: "Global IT Opportunities",
            desc: "Through placements and industry tie-ups, Urbancode unlocks global career opportunities for every learner.",
            posClass: "node-bottom-right"
        }
    ];

    return (
        <section className="training_section_main_container">
            <div className="container">
                {/* Clean Narrative Header */}
                <motion.div
                    className="training-intro-block"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-main-title">
                        <span className="text-shine">Expert Training and Instruction</span>
                    </h2>
                    <p className="text-lg">
                        At Urbancode, we specialize in providing top-notch training and instructional services. 
                        Our programs are designed to empower professionals and teams with the skills to excel.
                    </p>
                    <p className="text-lg">
                        Offering personalized IT training designed to match individual career goals with 
                        real-world industry skills and guaranteed placement assistance.
                    </p>
                </motion.div>

                {/* The Data Hub System */}
                <div className="skills-activation-system">
                    {/* HIGH VISIBILITY DATA STREAMS (SVG) */}
                    <svg className="data-stream-svg" viewBox="0 0 1100 650" preserveAspectRatio="xMidYMid slice">
                        {/* Define the paths once for both static and flowing lines */}
                        <defs>
                            <path id="path-TL" d="M 550 325 Q 400 325, 200 150" />
                            <path id="path-TR" d="M 550 325 Q 700 325, 900 150" />
                            <path id="path-BL" d="M 550 325 Q 400 325, 200 500" />
                            <path id="path-BR" d="M 550 325 Q 700 325, 900 500" />
                        </defs>

                        {/* Static Base Lines (for shape) */}
                        <use href="#path-TL" className="stream-path" />
                        <use href="#path-TR" className="stream-path" />
                        <use href="#path-BL" className="stream-path" />
                        <use href="#path-BR" className="stream-path" />

                        {/* HIGHLY VISIBLE GLOWING FLOW SREAMS */}
                        <use href="#path-TL" className="stream-flow-line" />
                        <use href="#path-TR" className="stream-flow-line" />
                        <use href="#path-BL" className="stream-flow-line" />
                        <use href="#path-BR" className="stream-flow-line" />
                    </svg>

                    {/* Central Hub */}
                    <motion.div 
                        className="core-hub"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hub-pulse-ring"></div>
                        <div className="hub-outer-ring"></div>
                        <div className="hub-center-plate">
                            <h3>We are<br/>Specialized<br/>In</h3>
                        </div>
                    </motion.div>

                    {/* Expertise Nodes */}
                    {specializations.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`skill-node ${item.posClass}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                        >
                            <div className="skill-card-modern">
                                <div className="node-icon-highlight">
                                    {item.icon}
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingSection;
