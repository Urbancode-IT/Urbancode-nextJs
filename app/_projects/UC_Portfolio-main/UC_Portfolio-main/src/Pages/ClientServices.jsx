import React from "react";
import "./ClientServices.css";

const SERVICES = [
  {
    id: "01",
    label: "STRATEGY",
    title: "Discovery & Roadmapping",
    description: "Deep-dive into your goals and challenges — build a technology roadmap for measurable business success."
  },
  {
    id: "02",
    label: "BUILD",
    title: "Full-Cycle Product Development",
    description: "UI/UX design through backend APIs and cloud deployment — every layer handled by a dedicated agile team."
  },
  {
    id: "03",
    label: "INNOVATE",
    title: "AI & Automation Integration",
    description: "Embed chatbots, recommendation engines, and analytics dashboards that make your product smarter."
  },
  {
    id: "04",
    label: "TRAIN",
    title: "Team Upskilling Programs",
    description: "Custom corporate training in technologies your team needs — from full-stack to data analytics and DevOps."
  },
  {
    id: "05",
    label: "SCALE",
    title: "Cloud Infrastructure & DevOps",
    description: "Secure cloud environments with CI/CD pipelines so your product grows as your user base expands."
  },
  {
    id: "06",
    label: "SUSTAIN",
    title: "Post-Launch Support & Growth",
    description: "Ongoing maintenance, performance monitoring, and iteration — we stay with you long after launch."
  },
  {
    id: "07",
    label: "ANALYZE",
    title: "Data Analytics Dashboards",
    description: "Transform business data into powerful insights with interactive Power BI and Tableau dashboards."
  },
  {
    id: "08",
    label: "TALENT",
    title: "Dedicated Intern Pipeline",
    description: "Access trained, project-ready interns as an affordable resource extension for startups and growing teams."
  },
  {
    id: "09",
    label: "EXPAND",
    title: "Next-Gen Education Programs",
    description: "Expanding kids' coding and AI curriculum — white-label programs for schools and ed-tech brands."
  }
];

const ClientServices = () => {
  return (
    <section className="client-services" id="services">
      <div className="services-container">
        <div className="services-header">

          <h2>What We Will Do for Clients</h2>
          <p className="services-desc">
            A strategic roadmap of how Urbancode Edutech plans to build, train, and innovate alongside every client.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.id} className="service-card">
              <div className="service-card-header">
                <span className="service-id">{s.id} —</span>
                <span className="service-label">{s.label}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-description">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientServices;
