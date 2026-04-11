'use client';

import Image from "next/image";
import "./CoursesCategoryPage.css";

import expertImg from "@/public/images/courses-images/hero-image-compressed.webp";

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
    img: dataScienceImg, /* Note: might want to change this img mapping later if a specific one exists */
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
            <p>
              Elevate your tech career with Chennai's leading IT training institute. We offer industry-aligned certification courses in Full Stack Web Development, Python, AWS Cloud, Data Science, and Software Testing. Designed for beginners and working professionals, our expert-led programs feature hands-on coding, real-time projects, and 100% guaranteed placement assistance to help you secure top software jobs globally.
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
