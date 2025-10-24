'use client';

import Image from "next/image";
import "./CoursesCategoryPage.css";

import expertImg from "@/public/images/courses-images/courseCategory.webp";

import programmingImg from "@/public/images/courses-images/programming.webp";
import webDevImg from "@/public/images/courses-images/web.webp";
import uiuxImg from "@/public/images/courses-images/UIUX.webp";
import cloudImg from "@/public/images/courses-images/Cloud.webp";
import dataAnalysisImg from "@/public/images/courses-images/DataAnalysis.webp";
import dataScienceImg from "@/public/images/courses-images/datascience.webp";
import databaseImg from "@/public/images/courses-images/database.webp";
import dataVisualImg from "@/public/images/courses-images/dataVisual.webp";
import softwareTestingImg from "@/public/images/courses-images/softwaretesting.webp";
import cyberSecurityImg from "@/public/images/courses-images/cybersecurity.webp";
import seoImg from "@/public/images/courses-images/SEO.webp";
import medicalCodingImg from "@/public/images/courses-images/medical.webp";
import languagesImg from "@/public/images/courses-images/languages.webp";
import englishImg from "@/public/images/courses-images/english.webp";
import crmImg from "@/public/images/courses-images/CRM.webp";
import appDevImg from "@/public/images/courses-images/app.webp";

const courses = [
  {
    title: "Programming Languages",
    desc: "Programming languages are tools that let us communicate with computers to build software and applications.",
    img: programmingImg,
    link: "/courses/programming-languages",
    badge: "6 Courses",
  },
  {
    title: "Web Development",
    desc: "Build modern, responsive, and dynamic websites from scratch. Learn HTML, CSS, JavaScript, and popular frameworks step by step.",
    img: webDevImg,
    link: "/courses/web-development",
    badge: "7 Courses",
  },
  {
    title: "UI/UX Designing",
    desc: "UI/UX design blends aesthetics with usability to create seamless digital experiences.",
    img: uiuxImg,
    link: "/courses/ui-ux-designing",
    badge: "5 Courses",
  },
  {
    title: "Cloud & DevOps",
    desc: "Master the tools and practices that power modern IT infrastructures. Learn cloud platforms, CI/CD pipelines, automation, and containerization.",
    img: cloudImg,
    link: "/courses/cloud-devops",
    badge: "3 Courses",
  },
  {
    title: "Data Analytics",
    desc: "Turn raw data into powerful insights with our Data Analytics courses. Learn Excel, SQL, Power BI, and Python for real-world applications.",
    img: dataAnalysisImg,
    link: "/courses/data-analytics",
    badge: "5 Courses",
  },
  {
    title: "Data Science",
    desc: "Turn raw data into powerful insights with Data Science. Master Python, SQL, and machine learning to solve real problems.",
    img: dataScienceImg,
    link: "/courses/data-science",
    badge: "3 Courses",
  },
  {
    title: "Database",
    desc: "Learn to design and manage databases with SQL & PostgreSQL. Understand queries, relationships, and transactions through projects.",
    img: databaseImg,
    link: "/courses/database",
    badge: "4 Courses",
  },
  {
    title: "Data Visualization",
    desc: "Turn complex data into clear, meaningful insights with charts, dashboards, and storytelling techniques.",
    img: dataVisualImg,
    link: "/courses/data-visualization",
    badge: "4 Courses",
  },
  {
    title: "Software Testing",
    desc: "Gain expertise in Manual and Automation Testing tools and techniques.",
    img: softwareTestingImg,
    link: "/courses/software-testing",
    badge: "6 Courses",
  },
  {
    title: "Cyber Security",
    desc: "Gain hands-on skills to protect systems, networks, and data from cyber threats. Learn ethical hacking and security practices.",
    img: cyberSecurityImg,
    link: "/courses/cyber-security",
    badge: "2 Courses",
  },
  {
    title: "SEO",
    desc: "Learn SEO, Social Media, Email, and Ads to grow businesses online. Master tools and strategies with hands-on campaigns.",
    img: seoImg,
    link: "/courses/seo",
    badge: "3 Courses",
  },
  {
    title: "Medical Coding",
    desc: "Step into Healthcare Careers with ICD-10, CPT, and HCPCS coding systems through practical training.",
    img: medicalCodingImg,
    link: "/courses/medical-coding",
    badge: "3 Courses",
  },
  {
    title: "Languages",
    desc: "Learn to speak, read, and write with confidence in global languages like English, Spanish, French & Japanese.",
    img: languagesImg,
    link: "/courses/languages",
    badge: "5 Courses",
  },
  {
    title: "English Proficiency Exams",
    desc: "Prepare for IELTS, TOEFL, and more with expert guidance and practice sessions.",
    img: englishImg,
    link: "/courses/english-proficiency-exams",
    badge: "6 Courses",
  },
  {
    title: "CRM",
    desc: "Learn to manage customer data, track leads, and automate sales processes with CRM systems.",
    img: crmImg,
    link: "/courses/crm",
    badge: "4 Courses",
  },
  {
    title: "App Development",
    desc: "Create impactful mobile and desktop apps combining creativity and technology.",
    img: appDevImg,
    link: "/courses/app-development",
    badge: "5 Courses",
  },
];

const CourseCategoryPage = () => {
  return (
    <div className="courses-wrapper1">
      {/* Expert-Led Courses Section */}
      <section className="expert-section">
        <div className="expert-container">
          <div className="expert-text">
            <h1>
              Empower Your Future with <br />
              <span className="text-success text-shine">Expert-Led Courses</span>
            </h1>
            <p>
              Discover a diverse range of career-focused programs designed to help you master in-demand skills in programming, cloud computing, DevOps, data analytics, cybersecurity, software testing, and more. Whether you’re a beginner or a professional seeking to upgrade your expertise, our expert trainers and practical, hands-on learning approach ensure you gain the knowledge and confidence needed to excel in the real world.
            </p>
          </div>
          <div className="expert-image">
            <Image
              src={expertImg}
              alt="Student learning online"
              className="rounded-4"
              width={500}
              height={350}
              placeholder="blur"
              priority
            />
          </div>
        </div>
      </section>

      {/* Courses Header */}
      <div className="courses-header text-center">
        <h2 className="courses-title">Course <span className="text-shine">Categories</span></h2>
        <p className="courses-subtitle">
          Master the skills that drive today’s digital world. Start your learning journey today with Urbancode.
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
