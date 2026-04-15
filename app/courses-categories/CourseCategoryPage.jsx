'use client';
import React, { useState } from 'react';
import Image from "next/image";
import "./CoursesCategoryPage.css";

import expertImg from "@/public/images/courses-images/courses-hero.jpg";

import programmingImg from "@/public/images/courses-images/programming-languages-course.jpg";
import webDevImg from "@/public/images/courses-images/web-dev-course.jpg";
import uiuxImg from "@/public/images/courses-images/ui-ux-course.webp";
import cloudImg from "@/public/images/courses-images/devops-course.webp";
import dataAnalysisImg from "@/public/images/courses-images/data-analytics-course.jpg";
import dataScienceImg from "@/public/images/courses-images/datascience.webp";
import databaseImg from "@/public/images/courses-images/db-course.jpg";
import dataengineeringImg from "@/public/images/courses-images/data-engineering-course.webp";

import dataVisualImg from "@/public/images/courses-images/data-visualization-course.webp";
import softwareTestingImg from "@/public/images/courses-images/software-testing-course.webp";
import cyberSecurityImg from "@/public/images/courses-images/cyber-course.webp";
import seoImg from "@/public/images/courses-images/cc1.jpg";
import medicalCodingImg from "@/public/images/courses-images/medical.webp";
import languagesImg from "@/public/images/courses-images/languages.webp";
import englishImg from "@/public/images/courses-images/english.webp";
import crmImg from "@/public/images/courses-images/crm-course.webp";
import appDevImg from "@/public/images/courses-images/app.webp";

const toolLogos = [
  { name: 'Angular', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg', desc: 'Master Angular to build industry-ready single-page applications. Our curriculum focuses on TypeScript, RxJS, and high-performance front-end architecture.', link: '/courses/fullstack-development' },
  { name: 'GitHub', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', desc: 'Global standard for version control. Learn Git workflows, pull requests, and CI/CD integration to succeed in modern collaborative coding environments.', link: '/courses/software-testing' },
  { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', desc: 'React is the most popular library for modern web interfaces. Learn hooks, state management, and component-driven design in our expert-led modules.', link: '/courses/fullstack-development' },
  { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', desc: 'The preferred language for Data Science and AI. Learn Python fundamentals to advanced automation and machine learning at Chennai\'s top IT institute.', link: '/courses/programming-languages' },
  { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', desc: 'Master NoSQL with MongoDB. Gain expertise in document-based databases, indexing, and aggregation for scalable, data-intensive modern applications.', link: '/courses/database' },
  { name: 'Terraform', logo: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg', desc: 'Infrastructure as Code (IaC) with Terraform. Learn to automate cloud infrastructure across AWS and Azure for faster and safer deployments.', link: '/courses/cloud-and-devops' },
  { name: 'Kubernetes', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg', desc: 'Orchestrate containers like a pro. Master Kubernetes (K8s) for scaling, managing, and automating containerized applications in production.', link: '/courses/cloud-and-devops' },
  { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', desc: 'Get certified in AWS Cloud. Learn EC2, S3, Lambda, and cloud security from industry experts to lead cloud transformation projects.', link: '/courses/cloud-and-devops' },
  { name: 'Azure', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg', desc: 'Scale with Microsoft Azure. Our training covers cloud solutions architecture, virtual machines, and cloud-native application development.', link: '/courses/cloud-and-devops' },
  { name: 'Jenkins', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg', desc: 'Automate your life with Jenkins. Master CI/CD pipelines, build automation, and DevOps integration to speed up software delivery cycles.', link: '/courses/cloud-and-devops' },
  { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', desc: 'Containerization simplified with Docker. Learn to package, ship, and run any application as a portable container for consistent development.', link: '/courses/cloud-and-devops' },
  { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', desc: 'High-speed backend development with Node.js. Master asynchronous programming, Express, and REST APIs for scalable real-time web applications.', link: '/courses/fullstack-development' },
  { name: 'TensorFlow', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg', desc: 'Build brain-like models with TensorFlow. Dive into Deep Learning, Neural Networks, and AI-driven automation using powerful frameworks.', link: '/courses/data-science' },
  { name: 'PyTorch', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg', desc: 'Flexible Deep Learning with PyTorch. Master computer vision, natural language processing (NLP), and sophisticated AI model development.', link: '/courses/data-science' },
  { name: 'Java', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', desc: 'Robust enterprise development starts here. Master Java Collections, Multi-threading, and Spring Boot to build large-scale secure software systems.', link: '/courses/programming-languages' },
  { name: 'Gen AI', logo: 'https://cdn.svgporn.com/logos/openai-icon.svg', desc: 'Join the AI revolution. Learn Generative AI, Large Language Models (LLMs), and Prompt Engineering to stay ahead in the age of Automation.', link: '/courses/data-science' },
  { name: 'Power BI', logo: 'https://cdn.svgporn.com/logos/microsoft-power-bi.svg', desc: 'Visualize data effectively with Power BI. Learn to create professional business intelligence reports and interactive dashboards for data-driven decisions.', link: '/courses/data-analytics' },
  { name: 'Spark', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apachespark/apachespark-original.svg', desc: 'Process Big Data at lightning speed. Master Spark for large-scale data processing, streaming, and SQL analytics in modern data environments.', link: '/courses/data-engineering' }
];

const courses = [
  {
    title: "Fullstack Development",
    desc: "Master Web Development with our full stack training. Learn HTML, CSS, JavaScript, React, and Node.js through hands-on projects and guaranteed placement support.",
    img: webDevImg,
    link: "/courses/fullstack-development",
    badge: "7 Courses",
  },
  {
    title: "Software Testing",
    desc: "Launch your QA career with top software testing courses. Master manual testing, Selenium automation, and CI/CD tools to deliver bug-free applications globally.",
    img: softwareTestingImg,
    link: "/courses/software-testing",
    badge: "6 Courses",
  },
  {
    title: "Data Analytics",
    desc: "Become a proficient data analyst. Master end-to-end Data Analytics using Python, SQL, Excel, and Power BI to drive business decisions and secure high-paying jobs.",
    img: dataAnalysisImg,
    link: "/courses/data-analytics",
    badge: "5 Courses",
  },
  {
    title: "Cloud & DevOps",
    desc: "Accelerate your career with our Cloud Computing & DevOps certification. Master AWS, Docker, Kubernetes, and CI/CD pipelines for scalable modern IT infrastructure.",
    img: cloudImg,
    link: "/courses/cloud-and-devops",
    badge: "3 Courses",
  },
  {
    title: "Programming Languages",
    desc: "Build a strong coding foundation with our core programming language courses. Master C, C++, Java, and Python through hands-on logic building and software development.",
    img: programmingImg,
    link: "/courses/programming-languages",
    badge: "6 Courses",
  },
  {
    title: "UI/UX Designing",
    desc: "Design seamless digital experiences with our professional UI/UX Design training. Master Figma, wireframing, user research, and prototyping to build user-centric applications.",
    img: uiuxImg,
    link: "/courses/ui-ux-designing",
    badge: "5 Courses",
  },
  {
    title: "Data Science",
    desc: "Unlock lucrative career opportunities with our Data Science certification. Master machine learning, deep learning, NLP, and Python to build AI-driven predictive models.",
    img: dataScienceImg,
    link: "/courses/data-science",
    badge: "3 Courses",
  },
  {
    title: "Data Engineering",
    desc: "Learn to architect scalable data pipelines. Our Data Engineering courses cover big data frameworks, Hadoop, Spark, and cloud solutions for modern data ecosystems.",
    img: dataengineeringImg, /* Note: might want to change this img mapping later if a specific one exists */
    link: "/courses/data-engineering",
    badge: "3 Courses",
  },
  {
    title: "Database",
    desc: "Master database management systems. Learn SQL, PostgreSQL, and NoSQL architecture to efficiently design, query, and manage complex enterprise data structures.",
    img: databaseImg,
    link: "/courses/database",
    badge: "4 Courses",
  },
  {
    title: "Data Visualization",
    desc: "Transform complex data into actionable insights. Master Data Visualization tools like Tableau, Power BI, and D3.js to create compelling business intelligence dashboards.",
    img: dataVisualImg,
    link: "/courses/data-visualization",
    badge: "4 Courses",
  },
  {
    title: "Cybersecurity & Networking",
    desc: "Protect digital assets with our Cybersecurity & Networking training. Learn ethical hacking, network protocols, and security practices to defend against cyber threats.",
    img: cyberSecurityImg,
    link: "/courses/net-working",
    badge: "2 Courses",
  },
  {
    title: "Digital Marketing",
    desc: "Dominate the digital space with our comprehensive Digital Marketing courses. Master SEO, SEM, social media management, and analytics to drive exponential business growth.",
    img: seoImg,
    link: "/courses/digital-marketing",
    badge: "3 Courses",
  },
  {
    title: "CRM",
    desc: "Optimize client relationships with professional CRM training. Learn Salesforce and other top platforms to automate sales workflows and manage customer data effectively.",
    img: crmImg,
    link: "/courses/crm",
    badge: "4 Courses",
  },
];

const CourseCategoryPage = () => {
  const [selectedTool, setSelectedTool] = React.useState(null);

  return (
    <div className="courses-wrapper1 ">
      {/* Expert-Led Courses Section */}
      <section className="expert-section">
        <div className="expert-container">
          <div className="expert-text">
            <h1>
              Empower Your Future with <br />
              <span className="text-success text-shine">Expert-Led Courses</span>
            </h1>
            
            {/* Conditional Info Display */}
            {selectedTool ? (
              <div className="tool-info-card shadow-sm">
                <h3 className="text-success mb-2 d-flex align-items-center gap-2">
                  <img src={selectedTool.logo} alt={selectedTool.name} width="24" height="24" />
                  {selectedTool.name}
                </h3>
                <p className="tool-seo-desc">{selectedTool.desc}</p>
                <button className="btn btn-sm btn-outline-success mt-1" onClick={() => window.location.href = selectedTool.link}>View Course</button>
              </div>
            ) : (
              <p>
                Elevate your tech career with Chennai's leading IT training institute. We offer industry-aligned certification courses in Full Stack Web Development, Python, AWS Cloud, Data Science, and Software Testing. Designed for beginners and working professionals, our expert-led programs feature hands-on coding, real-time projects, and 100% guaranteed placement assistance to help you secure top software jobs globally.
              </p>
            )}
          </div>
          <div className="expert-interactive">
             <div className="saturn-scene">
                {/* Central Planet Core */}
                <div className="saturn-planet" onClick={() => setSelectedTool(null)}>
                   <div className="planet-surface">UC</div>
                   <div className="planet-glow"></div>
                </div>
                
                {/* Orbital Rings */}
                <div className="rings-container">
                   {/* Ring 1 - Inner */}
                   <div className="saturn-ring ring-1">
                      {toolLogos.slice(0, 8).map((tool, i) => (
                        <div key={i} className={`ring-item ${selectedTool?.name === tool.name ? 'active' : ''}`} style={{ '--index': i, '--total': 8 }} onClick={() => setSelectedTool(tool)}>
                           <img src={tool.logo} alt={tool.name} title={tool.name} />
                        </div>
                      ))}
                   </div>
                   
                   {/* Ring 2 - Outer */}
                   <div className="saturn-ring ring-2">
                      {toolLogos.slice(8, 18).map((tool, i) => (
                        <div key={i} className={`ring-item ${selectedTool?.name === tool.name ? 'active' : ''}`} style={{ '--index': i, '--total': 10 }} onClick={() => setSelectedTool(tool)}>
                           <img src={tool.logo} alt={tool.name} title={tool.name} />
                        </div>
                      ))}
                   </div>
                </div>

                {/* Stars/Dust particles */}
                <div className="cosmic-stars">
                  {[...Array(60)].map((_, i) => (
                    <div 
                      key={i} 
                      className="star" 
                      style={{ 
                        '--left': `${Math.random() * 100}%`,
                        '--top': `${Math.random() * 100}%`,
                        '--size': `${Math.random() * 3}px`,
                        '--delay': `${Math.random() * 5}s`,
                        '--duration': `${3 + Math.random() * 4}s`
                      }}
                    ></div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Courses Header */}
      <div className="courses-header text-center">
        <h2 className="courses-title">Course <span className="text-shine">Categories</span></h2>
        <p className="courses-subtitle">
          Explore our comprehensive IT training courses. Master the industry-relevant software skills that drive today's digital world and securely launch your tech career with Urbancode.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid-container">
        {courses.map((course, index) => (
          <div
            key={index}
            className="card"
            onClick={() => (window.location.href = course.link)}
          >
            <div className="card-image-wrapper">
              <Image
                src={course.img}
                alt={course.title}
                className="card-image"
                width={400}
                height={250}
                placeholder="blur"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="card-title">{course.title}</h3>
            <p className="card-text text-muted">{course.desc}</p>
            <div className="badge">{course.badge}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCategoryPage;
