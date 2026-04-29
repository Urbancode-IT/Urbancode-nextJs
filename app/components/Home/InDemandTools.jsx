'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './InDemandTools.css';

const InDemandTools = () => {
    const row1Tools = [
        { name: 'Angular', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg', link: '/courses/fullstack-development' },
        { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', link: '/courses/fullstack-development' },
        { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', link: '/courses/fullstack-development' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', link: '/courses/programming-languages' },
        { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', link: '/courses/database' },
        { name: 'Terraform', icon: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg', link: '/courses/cloud-and-devops' },
        { name: 'Power Automate', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Power_Automate.svg', link: '/courses/automation', isNew: true },
        { name: 'Power BI', icon: 'https://cdn.svgporn.com/logos/microsoft-power-bi.svg', link: '/courses/ai-and-data-science' },
    ];

    const row2Tools = [
        { name: 'Kubernetes', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg', link: '/courses/cloud-and-devops' },
        { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', link: '/courses/cloud-and-devops' },
        { name: 'Azure', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg', link: '/courses/cloud-and-devops' },
        { name: 'Jenkins', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg', link: '/courses/cloud-and-devops' },
        { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', link: '/courses/cloud-and-devops' },
        { name: 'Tableau', icon: '/images/home/tableau_logo.svg', link: '/courses/ai-and-data-science' },
{
  name: 'SharePoint',
  icon:  '/images/home/sharepoint_logo1.png',
  link: '/courses/fullstack-development',
  isNew: true,
  isLarge: true
},       { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', link: '/courses/fullstack-development' },
        { name: 'Data Engineering', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apachespark/apachespark-original.svg', link: '/courses/data-engineering', isNew: true },
    ];

    const row3Tools = [
        { name: 'Express', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg', link: '/courses/fullstack-development' },
        { name: 'TensorFlow', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg', link: '/courses/ai-and-data-science' },
        { name: 'PyTorch', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg', link: '/courses/ai-and-data-science' },
        { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', link: '/courses/programming-languages' },
        { name: 'JavaScript', icon: '/images/home/js_logo.jpg', link: '/courses/programming-languages' },
        { name: 'Excel', icon: '/images/home/excel_logo.svg', link: '/courses/ai-and-data-science' },
        { name: 'AI and ML', icon: '/images/home/aiml_new.svg', link: '/courses/ai-and-data-science' },
        { name: 'Gen AI', icon: 'https://cdn.svgporn.com/logos/openai-icon.svg', link: '/courses/ai-and-data-science', isNew: true },
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
            <h2 className="section-main-title text-shine">In Demand Tools</h2>

            <div className="idt-tools-slider-container">
                {/* Row 1 */}
                <div className="idt-slider-track idt-row-reverse">
                    {row1.map((tool, index) => (
                        <Link key={`row1-${index}`} href={tool.link || '/courses'} className={`idt-tool-item-wrapper ${tool.isNew ? 'idt-highlight-new' : ''}`}>
                            <div className={`idt-tool-logo-base ${tool.isLarge ? 'idt-large-logo' : ''}`}>
                                {tool.isNew && <span className="idt-new-badge">New</span>}
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="idt-tool-icon"
                                />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="idt-slider-track">
                    {row2.map((tool, index) => (
                        <Link key={`row2-${index}`} href={tool.link || '/courses'} className={`idt-tool-item-wrapper ${tool.isNew ? 'idt-highlight-new' : ''}`}>
                            <div className={`idt-tool-logo-base ${tool.isLarge ? 'idt-large-logo' : ''}`}>
                                {tool.isNew && <span className="idt-new-badge">New</span>}
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="idt-tool-icon"
                                />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Row 3 */}
                <div className="idt-slider-track idt-row-reverse">
                    {row3.map((tool, index) => (
                        <Link key={`row3-${index}`} href={tool.link || '/courses'} className={`idt-tool-item-wrapper ${tool.isNew ? 'idt-highlight-new' : ''}`}>
                            <div className={`idt-tool-logo-base ${tool.isLarge ? 'idt-large-logo' : ''}`}>
                                {tool.isNew && <span className="idt-new-badge">New</span>}
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="idt-tool-icon"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default InDemandTools;
