'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './InDemandTools.css';

const InDemandTools = () => {
    const row1Tools = [
        { name: 'Angular', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
        { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
        { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
        { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
        { name: 'Terraform', icon: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg' },
        { name: 'DevOps', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azuredevops/azuredevops-original.svg' },
        { name: 'Power BI', icon: 'https://cdn.svgporn.com/logos/microsoft-power-bi.svg' },
    ];

    const row2Tools = [
        { name: 'Kubernetes', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Azure', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
        { name: 'Jenkins', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg' },
        { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
        { name: 'Tableau', icon: '/images/home/tableau_logo.svg' },
        { name: 'SQL', icon: '/images/home/sql_logo.svg' },
        { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    ];

    const row3Tools = [
        { name: 'Express', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
        { name: 'TensorFlow', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg' },
        { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: '/images/home/js_logo.jpg' },
        { name: 'Excel', icon: '/images/home/excel_logo.svg' },
        { name: 'AI and ML', icon: '/images/home/ai_ml_logo.png' },
    ];

    const row1 = [...row1Tools, ...row1Tools, ...row1Tools];
    const row2 = [...row2Tools, ...row2Tools, ...row2Tools];
    const row3 = [...row3Tools, ...row3Tools, ...row3Tools];

    return (
        <motion.section 
            className="idt-in-demand-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="section-main-title text-shine">In demand tools</h2>

            <div className="idt-tools-slider-container">
                {/* Row 1 */}
                <div className="idt-slider-track idt-row-reverse">
                    {row1.map((tool, index) => (
                        <div key={`row1-${index}`} className="idt-tool-item-wrapper">
                            <div
                                className="idt-tool-logo-base"
                                style={tool.name === 'AI and ML' ? { background: '#000' } : {}}
                            >
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="idt-tool-icon"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="idt-slider-track">
                    {row2.map((tool, index) => (
                        <div key={`row2-${index}`} className="idt-tool-item-wrapper">
                            <div className="idt-tool-logo-base">
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="idt-tool-icon"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 3 */}
                <div className="idt-slider-track idt-row-reverse">
                    {row3.map((tool, index) => (
                        <div key={`row3-${index}`} className="idt-tool-item-wrapper">
                            <div
                                className="idt-tool-logo-base"
                                style={tool.name === 'AI and ML' ? { background: '#000' } : {}}
                            >
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="idt-tool-icon"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default InDemandTools;
