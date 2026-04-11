'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaEye } from 'react-icons/fa';
import "./MissionVisionNew.css";

const MissionVisionNew = () => {
    return (
        <section className="mv-new-section">
            <div className="container mv-container">
                <div className="text-center mb-5">
                    <motion.h2 
                        className="section-main-title"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our <span className="text-shine">Mission & Vision</span>
                    </motion.h2>
                </div>

                <div className="mv-grid">
                    {/* Mission Item */}
                    <motion.div 
                        className="mv-card-group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mv-icon-wrapper">
                            <FaRocket />
                        </div>
                        <div className="mv-text-content">
                            <span className="mv-label">The Mission</span>
                            <h3 className="mv-title">Empowering Careers</h3>
                            <p className="mv-desc">
                                To empower students and professionals with industry-relevant skills, 
                                fostering confidence and career success through hands-on learning.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Item */}
                    <motion.div 
                        className="mv-card-group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="mv-icon-wrapper">
                            <FaEye />
                        </div>
                        <div className="mv-text-content">
                            <span className="mv-label">The Vision</span>
                            <h3 className="mv-title">Shaping Professionals</h3>
                            <p className="mv-desc">
                                To be a globally trusted hub for lifelong learning and innovation, 
                                creating a future where technology is accessible to all.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionNew;
