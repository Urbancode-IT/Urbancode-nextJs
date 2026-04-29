import React from "react";
import "./SuccessSection.css";

const SUCCESS_STORIES = [
  {
    id: 1,
    initials: "AK",
    name: "Arjun Krishnan",
    role: "Full Stack Developer",
    company: "Zoho Corporation",
    quote: "The MERN Stack course completely transformed my career. I went from a basic web developer to landing a role at Zoho within 3 months of completing the course.",
    batch: "MERN Stack — 2024 Batch",
    package: "₹8.5 LPA"
  },
  {
    id: 2,
    initials: "PS",
    name: "Priya Sundaram",
    role: "Data Analyst",
    company: "Capgemini",
    quote: "Data Analytics course was incredibly hands-on. The Power BI projects we built directly helped me in my interviews. Urbancode's placement support is unmatched.",
    batch: "Data Analytics — 2024 Batch",
    package: "₹7.2 LPA"
  },
  {
    id: 3,
    initials: "RV",
    name: "Rahul Vijayan",
    role: "Cloud DevOps Engineer",
    company: "Infosys",
    quote: "AWS DevOps certification from Urbancode opened doors I never imagined. The live project experience gave me a real edge over other candidates in the interview.",
    batch: "AWS DevOps — 2023 Batch",
    package: "₹9.0 LPA"
  },
  {
    id: 4,
    initials: "MN",
    name: "Meena Nair",
    role: "QA Automation Engineer",
    company: "TCS",
    quote: "I had zero programming background before joining Urbancode. The Automation Testing course made me completely job-ready. Got placed in TCS in the first attempt!",
    batch: "Automation Testing — 2024 Batch",
    package: "₹6.5 LPA"
  },
  {
    id: 5,
    initials: "SK",
    name: "Suresh Kumar",
    role: "AI/ML Engineer",
    company: "Amazon",
    quote: "The AI/ML course at Urbancode was industry-level. Working on TensorFlow projects during training helped me crack Amazon's technical interview with confidence.",
    batch: "AI / ML — 2024 Batch",
    package: "₹12 LPA"
  },
  {
    id: 6,
    initials: "DA",
    name: "Divya Anand",
    role: "Python Developer",
    company: "Freshworks",
    quote: "Switched from non-IT to IT through Urbancode's Python Full Stack course. The career guidance and mock interview sessions were game-changers for my transition.",
    batch: "Python Full Stack — 2024 Batch",
    package: "₹7.8 LPA"
  }
];

const SuccessSection = () => {
  return (
    <section className="success" id="success">
      <div className="success__container">
        <div className="success__header">

          <h2>Success Stories</h2>
          <p className="success__desc">
            Real students, real placements, real salary hikes. Their success is our greatest achievement.
          </p>
        </div>

        <div className="success__grid">
          {SUCCESS_STORIES.map((s) => (
            <div key={s.id} className="success__card">
              <div className="success__card-top">
                <div className="success__avatar">{s.initials}</div>
                <div className="success__info">
                  <h3 className="success__name">{s.name}</h3>
                  <p className="success__role">{s.role}</p>
                  <div className="success__company">
                    <span className="company__icon">🏢</span>
                    {s.company}
                  </div>
                </div>
              </div>
              
              <div className="success__quote">
                <span className="quote__mark">"</span>
                {s.quote}
              </div>

              <div className="success__batch">
                <span className="batch__icon">📚</span>
                {s.batch}
              </div>

              <div className="success__package-row">
                <span className="package__label">Package secured</span>
                <span className="package__value">{s.package}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;