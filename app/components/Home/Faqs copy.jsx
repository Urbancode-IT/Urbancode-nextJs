'use client';
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./faqs.css"

const faqs = [
  {
    question: "What is Urbancode Edutech Solutions and how does it help in career growth?",
    answer:
      "Urbancode Edutech Solutions Pvt Ltd is a leading IT training and placement institute in Chennai that empowers students, freshers, and professionals with industry - relevant skills.By offering job- ready courses in Digital Marketing, Data Analytics, Full Stack Development, Cloud Computing, and more, we help learners bridge the gap between academics and corporate needs.Our programs are designed to accelerate career growth with practical training, certifications, and assured placement support."  },
{
  question: "Does Urbancode charge any fees for the consultation?",
    answer:
  "We provide a wide range of career-oriented courses including: • Digital Marketing (SEO, Social Media, Google Ads, Analytics) • Data Analytics (Power BI, Tableau, Python, MSSQL, SAS) • Full Stack Development (MERN, MEAN, Java Full Stack, .NET, Angular, Python) • Cloud & DevOps (AWS, DevOps, CI/CD, Kubernetes, Docker) • Medical Coding & RCM Training with 100% placement assurance • Software Testing. Our skill-based programs are tailored for both beginners and working professionals who want to upskill or switch careers.",
  },
{
  question: "Are Urbancode Edutech courses suitable for beginners and working professionals?",
    answer:
  "Absolutely! Our IT training courses are designed to suit both fresh graduates who want to start their careers and working professionals looking to upskill or switch domains. With beginner-friendly modules, hands-on projects, and flexible schedules, Urbancode Edutech ensures personalized learning for all levels."
},
{
  question: "Does Urbancode Edutech provide placement assistance after training?",
    answer:
    "Yes, Urbancode Edutech Solutions offers dedicated placement assistance. We have strong tie-ups with top IT companies, startups, and MNCs, ensuring our students get access to real job opportunities. From resume building, mock interviews, and HR guidance to direct job placement drives, we make sure every learner is well-prepared for their career journey.",
  },
];

const FaqBootstrap = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq_main_container">
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold text-dark">FAQ'S</h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" mb-3 shadow-md position-relative rounded-4"
            style={{ overflow: "hidden", }}
          >
            {/* Question */}
            <button
              className="btn btn-light w-100 text-start px-4 py-3 d-flex justify-content-between align-items-center"
              style={{ borderRadius: 0, backgroundColor: "#80DAB74D", fontSize: "1.3rem", opacity: ".7" }}
              onClick={() => toggleFAQ(index)}
            >
              <span className="fw-medium text-dark">{faq.question}</span>
              {/* Plus/Minus Icon in Top-Right */}
              <div
                className=""
                style={{ fontSize: "1.2rem" }}
                onClick={() => toggleFAQ(index)}
              >
                {activeIndex === index ? (
                  <FaMinus className="text-dark" />
                ) : (
                  <FaPlus className="text-dark" />
                )}
              </div>
            </button>



            {/* Answer */}
            <div
              className="px-4 overflow-hidden"
              style={{
                maxHeight: activeIndex === index ? "1000px" : "0px",
                transition: "max-height 0.5s ease",
                backgroundColor: "#80DAB74D",
                opacity: ".7"
              }}
            >
              <p className="py-3 mb-0 text-dark">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default FaqBootstrap;
