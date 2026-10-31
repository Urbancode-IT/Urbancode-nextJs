'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './InDemandTools.css';

const InDemandTools = () => {
    const [selectedTool, setSelectedTool] = useState(null);
    const T = '/images/home/tools';
    const row1Tools = [
        { name: 'Angular', icon: `${T}/angular.svg`, link: '/courses/fullstack-development', description: 'A robust, component-based framework for building scalable web applications with enterprise-grade performance.' },
        { name: 'GitHub', icon: `${T}/github.svg`, link: '/courses/fullstack-development', description: 'Master the industry-standard platform for version control, collaborative coding, and automated CI/CD workflows.' },
        { name: 'React', icon: `${T}/react.svg`, link: '/courses/fullstack-development', description: 'The most popular JavaScript library for building dynamic, high-performance, and interactive modern user interfaces.' },
        { name: 'Python', icon: `${T}/python.svg`, link: '/courses/programming-languages', description: 'A versatile, high-level language essential for web development, artificial intelligence, data science, and automation.' },
        { name: 'Vue.js', icon: `${T}/vue.svg`, link: '/courses/fullstack-development', isNew: true, description: 'A progressive JavaScript framework used for building modern, high-performance, and easy-to-maintain web interfaces.' },
        { name: 'Figma', icon: `${T}/figma.svg`, link: '/courses/ui-ux-designing', description: 'The ultimate collaborative design tool for creating stunning UI/UX layouts and interactive high-fidelity prototypes.' },
        { name: 'MongoDB', icon: `${T}/mongodb.svg`, link: '/courses/fullstack-development', description: 'The leading NoSQL database designed for modern application developers, offering flexibility and massive scalability.' },
        { name: 'Terraform', icon: `${T}/terraform.svg`, link: '/courses/cloud-and-devops', description: 'Safely and predictably create, change, and improve cloud infrastructure using the power of Infrastructure as Code (IaC).' },
        { name: 'Power Automate', icon: `${T}/power-automate.svg`, link: '/courses/ai-and-data-science', isNew: true, description: 'Automate repetitive business processes and complex workflows seamlessly across your favorite cloud-based apps.' },
        { name: 'Power BI', icon: `${T}/power-bi.svg`, link: '/courses/ai-and-data-science', description: 'Transform raw datasets into beautiful, interactive visualizations and actionable business intelligence insights.' },
        { name: 'GraphQL', icon: `${T}/graphql.svg`, link: '/courses/fullstack-development', isNew: true, description: 'A modern, efficient query language for APIs that enables precise data fetching and improved developer productivity.' },
        { name: 'JSON', icon: `${T}/json.svg`, link: '/courses/fullstack-development', description: 'The standard data-interchange format used across APIs, web apps, mobile apps, and modern backend services.' },
    ];

    const row2Tools = [
        { name: 'Kubernetes', icon: `${T}/kubernetes.svg`, link: '/courses/cloud-and-devops', description: 'Automate deployment, scaling, and management of containerized applications with industry-leading cloud orchestration.' },
        { name: 'AWS', icon: `${T}/aws.svg`, link: '/courses/cloud-and-devops', description: 'Master Amazon Web Services, the world\'s most comprehensive and broadly adopted cloud infrastructure platform.' },
        { name: 'Azure', icon: `${T}/azure.svg`, link: '/courses/cloud-and-devops', description: 'Build, manage, and deploy applications on a massive global network using Microsoft\'s enterprise cloud services.' },
        { name: 'Jenkins', icon: `${T}/jenkins.svg`, link: '/courses/cloud-and-devops', description: 'The leading open-source automation server used for building, deploying, and automating modern software projects.' },
        { name: 'Docker', icon: `${T}/docker.svg`, link: '/courses/cloud-and-devops', description: 'Develop, ship, and run applications anywhere with the power of modern containerization and environment isolation.' },
        { name: 'Postman', icon: `${T}/postman.svg`, link: '/courses/fullstack-development', isNew: true, description: 'The world\'s most popular industry-standard platform for building, testing, and documenting high-quality APIs.' },
        { name: 'Tableau', icon: '/images/home/tableau_logo.svg', link: '/courses/ai-and-data-science', description: 'A powerful visual analytics platform transforming the way you use data to solve problems and gain deep insights.' },
        { name: 'SharePoint', icon: '/images/home/sharepoint_logo1.png', link: '/courses/fullstack-development', isNew: true, isLarge: true, description: 'Collaborate and share knowledge and applications to empower seamless teamwork across large organizations.' },
        { name: 'Node.js', icon: `${T}/nodejs.svg`, link: '/courses/fullstack-development', description: 'Build fast, scalable network applications using JavaScript on the server-side with the high-performance Node.js runtime.' },
        { name: 'Redis', icon: `${T}/redis.svg`, link: '/courses/fullstack-development', isNew: true, description: 'The world\'s fastest in-memory data store, widely used as a high-performance database, cache, and message broker.' },
        { name: 'Data Engineering', icon: `${T}/spark.svg`, link: '/courses/data-engineering', isNew: true, description: 'Design and build complex systems for collecting, storing, and analyzing data at massive enterprise scales.' },
    ];

    const row3Tools = [
        { name: 'Express', icon: `${T}/express.svg`, link: '/courses/fullstack-development', description: 'Fast, unopinionated, and minimalist web framework for high-performance Node.js backend development.' },
        { name: 'Tailwind', icon: `${T}/tailwind.svg`, link: '/courses/fullstack-development', isNew: true, description: 'A utility-first CSS framework for rapidly building custom modern web designs without leaving your HTML.' },
        { name: 'TensorFlow', icon: `${T}/tensorflow.svg`, link: '/courses/ai-and-data-science', description: 'An end-to-end open-source platform used globally for machine learning and complex deep learning applications.' },
        { name: 'PyTorch', icon: `${T}/pytorch.svg`, link: '/courses/ai-and-data-science', description: 'Master deep learning with the most flexible and widely used AI research and production framework.' },
        { name: 'Flutter', icon: `${T}/flutter.svg`, link: '/courses/app-development', isNew: true, description: 'Build beautiful, natively compiled apps for mobile, web, and desktop from a single, high-performance codebase.' },
        { name: 'Java', icon: `${T}/java.svg`, link: '/courses/programming-languages', description: 'A robust, object-oriented language essential for enterprise-level applications and Android mobile development.' },
        { name: 'JavaScript', icon: '/images/home/js_logo.jpg', link: '/courses/programming-languages', description: 'The fundamental language of the web, enabling rich, interactive, and dynamic user experiences across browsers.' },
        { name: 'Excel', icon: '/images/home/excel_logo.svg', link: '/courses/ai-and-data-science', description: 'Master advanced data analysis, automation, and business reporting with industry-leading spreadsheet techniques.' },
        { name: 'Selenium', icon: `${T}/selenium.svg`, link: '/courses/software-testing', isNew: true, description: 'The industry-standard open-source tool for automating web browser interactions and robust software testing.' },
        { name: 'LambdaTest KaneAI', icon: `${T}/lambdatest.svg`, link: '/courses/software-testing', isNew: true, description: 'LambdaTest\'s KaneAI agent plans, authors, and runs tests in natural language across real browsers and devices.' },
        { name: 'ContextQA', icon: `${T}/contextqa.png`, link: '/courses/software-testing', isNew: true, description: 'An AI testing platform that generates, runs, and maintains end-to-end tests from product context.' },
        { name: 'Katalon', icon: `${T}/katalon.svg`, link: '/courses/software-testing', isNew: true, description: 'A complete test automation platform for web, API, mobile, and desktop testing in one workspace.' },
        { name: 'mabl', icon: `${T}/mabl.png`, link: '/courses/software-testing', isNew: true, description: 'Intelligent test automation that creates, runs, and auto-heals end-to-end tests as the product changes.' },
        { name: 'BrowserStack', icon: `${T}/browserstack.svg`, link: '/courses/software-testing', isNew: true, description: 'Test websites and mobile apps on real browsers and devices in the cloud, without a local lab.' },
        { name: 'AI and ML', icon: '/images/home/aiml_new.svg', link: '/courses/ai-and-data-science', description: 'Deep dive into Artificial Intelligence and Machine Learning to build smart, predictive, and autonomous systems.' },
        { name: 'Gen AI', icon: `${T}/openai.svg`, link: '/courses/ai-and-data-science', isNew: true, description: 'Master the future with Generative AI, LLMs, and modern creative tools like ChatGPT, Claude, and Midjourney.' },
    ];

    const row1 = [...row1Tools, ...row1Tools, ...row1Tools];
    const row2 = [...row2Tools, ...row2Tools, ...row2Tools];
    const row3 = [...row3Tools, ...row3Tools, ...row3Tools];

    const handleToolClick = (tool) => {
        setSelectedTool(tool);
    };

    return (
        <section 
            className="idt-in-demand-container"
        >
            <div className="home-section-title-wrap">
            <h2 className="section-main-title text-shine">In Demand Tools</h2>
            </div>

            <div className="idt-tools-slider-container">
                {/* Row 1 */}
                <div className="idt-slider-track idt-row-reverse">
                    {row1.map((tool, index) => (
                        <div 
                            key={`row1-${index}`} 
                            className={`idt-tool-item-wrapper ${tool.isNew ? 'idt-highlight-new' : ''}`}
                            onClick={() => handleToolClick(tool)}
                        >
                            <div className={`idt-tool-logo-base ${tool.isLarge ? 'idt-large-logo' : ''}`}>
                                {tool.isNew && <span className="idt-new-badge">New</span>}
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
                        <div 
                            key={`row2-${index}`} 
                            className={`idt-tool-item-wrapper ${tool.isNew ? 'idt-highlight-new' : ''}`}
                            onClick={() => handleToolClick(tool)}
                        >
                            <div className={`idt-tool-logo-base ${tool.isLarge ? 'idt-large-logo' : ''}`}>
                                {tool.isNew && <span className="idt-new-badge">New</span>}
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
                        <div 
                            key={`row3-${index}`} 
                            className={`idt-tool-item-wrapper ${tool.isNew ? 'idt-highlight-new' : ''}`}
                            onClick={() => handleToolClick(tool)}
                        >
                            <div className={`idt-tool-logo-base ${tool.isLarge ? 'idt-large-logo' : ''}`}>
                                {tool.isNew && <span className="idt-new-badge">New</span>}
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

            {/* Impressive Detail Modal */}
            {selectedTool && (
                <div className="idt-modal-backdrop" onClick={() => setSelectedTool(null)}>
                    <div className="idt-modal-card" onClick={(e) => e.stopPropagation()}>
                        <button className="idt-modal-close" onClick={() => setSelectedTool(null)}>&times;</button>
                        <div className="idt-modal-header">
                            <div className="idt-modal-icon-box">
                                <img src={selectedTool.icon} alt={selectedTool.name} />
                            </div>
                            <h3>{selectedTool.name}</h3>
                        </div>
                        <div className="idt-modal-body">
                            <p>{selectedTool.description}</p>
                            <Link href={selectedTool.link} className="idt-modal-action-btn">
                                Explore {selectedTool.name} Courses
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default InDemandTools;
