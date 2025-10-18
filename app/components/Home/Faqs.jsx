'use client';
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./faqs.css";

const faqs = [
  {
    question: "What is Urbancode Edutech Solutions and how does it help in career growth?",
    answer:
      "Urbancode Edutech Solutions Pvt Ltd is a leading IT training and placement institute in Chennai that empowers students, freshers, and professionals with industry-relevant skills. By offering job-ready courses in Digital Marketing, Data Analytics, Full Stack Development, Cloud Computing, and more, we help learners bridge the gap between academics and corporate needs. Our programs accelerate career growth with practical training, certifications, and placement support.",
  },
  {
    question: "Which courses are offered at Urbancode Edutech Solutions?",
    answer:
      "We provide a wide range of career-oriented courses including: Digital Marketing (SEO, Social Media, Google Ads, Analytics), Data Analytics (Power BI, Tableau, Python, MSSQL, SAS), Full Stack Development (MERN, MEAN, Java Full Stack, .NET, Angular, Python), Cloud & DevOps (AWS, DevOps, CI/CD, Kubernetes, Docker), and more. Our programs are tailored for both beginners and professionals.",
  },
  {
    question: "Does Urbancode Edutech provide placement assistance after training?",
    answer:
      "Yes, Urbancode Edutech Solutions offers dedicated placement assistance. We have strong tie-ups with top IT companies, startups, and MNCs, ensuring our students get real job opportunities. From resume building, mock interviews, HR guidance to job drives, we prepare learners for success.",
  },
  {
    question: "Can I get certification after completing a course at Urbancode Edutech?",
    answer:
      "Absolutely! Every course comes with an industry-recognized certification upon successful completion, which enhances your credibility and employability in the job market.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="faq-section container  py-5">
      <h5 className="text-center mb-5 faq-subtitle">- Let's know more about us -</h5>
      <div className="row align-items-start g-4">
        {/* Left Section */}
        <div className="col-lg-4 col-md-12 ">
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
        <div className="col-lg-8 col-md-12">
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
