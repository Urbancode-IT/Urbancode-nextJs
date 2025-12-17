'use client';
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./faqs.css";

const faqs = [
  {
    question: "Why should I choose a Full Stack Development course for my career growth?",
    answer:
      "A Full Stack Development course gives you complete control over building modern web and mobile applications from start to finish. By learning in-demand technologies like MERN Stack, React Native, and .NET with Angular, you become job-ready with skills companies actively look for. For students searching for a trusted full stack course near me, this training focuses on real-world projects, industry practices, and career-focused learning that leads to long-term growth.",
  },
  {
    question: "What technologies are covered in this Full Stack training program?",
    answer:
      "This Full Stack training program covers MERN Stack (MongoDB, Express.js, React.js, Node.js), React Native for mobile app development, and .NET with Angular for enterprise applications. You gain hands-on experience in frontend and backend development, API integration, database management, authentication, and deployment. These technologies are widely used by top companies, making this a practical choice for anyone looking for a full stack developer course near them.",
  },
  {
    question: "Does this Full Stack course provide placement assistance and career support?",
    answer:
      "Yes, this Full Stack Development course includes strong placement assistance and career guidance. Learners receive support with resume preparation, interview training, real-time coding practice, and job referrals. For those searching online for a reliable full stack training institute near me, this program is designed to build confidence, technical expertise, and interview readiness.",
  },
  {
    question: "Will I receive certification and real project experience after completing the course?",
    answer:
      "Yes, upon successful completion, learners receive an industry-recognized Full Stack Development certification along with hands-on project experience. You work on real-time applications using MERN Stack, React Native, and .NET with Angular, which helps you build a strong portfolio. This combination of certification and practical exposure improves credibility and helps your profile stand out in full stack developer job searches.",
  },
];



const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="faq-section container  py-5">
      
      <div className="row align-items-start g-4">
        {/* Left Section */}
        <div className="col-lg-4 col-md-12 order-1 order-sm-2order-lg-1 ">
          <div className="faq-left text-center text-lg-start">
            <h4 className="faq-title fw-bold d-none d-md-block">Frequently <br /> Asked Questions</h4>
            <div className="faq-contact-box mt-5 p-4 rounded-4 shadow-sm">
              <h5 className="fw-semibold">Have a Question?</h5>
              <p className="text-muted small mb-3">
                Can’t find the answer to your question? Send us an email and we’ll get back to you as soon as possible!
              </p>
              <button className="faq-mail-btn px-4 py-2 rounded-3"><a href="mailto:admin@urbancode.in">Send mail</a></button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-8 col-md-12 order-2 order-sm-1 order-lg-2">
          <h5 className="text-center mb-5 faq-subtitle">- Let's get you more info -</h5>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-3">
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? '400px' : '0px',
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
