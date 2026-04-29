import React from 'react';
import './Milestones.css';

const Milestones = () => {
  const milestones = [
    { number: "800+", label: "Students Trained", subtitle: "Placed in top MNCs" },
    { number: "50+", label: "Projects Completed", subtitle: "Across 10+ industries" },
    { number: "80+", label: "Courses Available", subtitle: "Beginner to advanced" },
    { number: "50+", label: "Expert Instructors", subtitle: "Industry practitioners" },
    { number: "25+", label: "Happy Clients", subtitle: "90% repeat clients" },
    { number: "30+", label: "Five-Star Reviews", subtitle: "100% satisfaction" },
    { number: "5+", label: "Years Excellence", subtitle: "Est. Chennai, TN" },
    { number: "14+", label: "MNCs Hiring Alumni", subtitle: "Amazon, TCS & more" }
  ];

  return (
    <div className="milestones-container">
      {/* Background Animated Elements */}
      <div className="milestones-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Milestones Section */}
          <section id="achievements" className="milestones-section">

            <h2 className="milestones-title">Our Milestones</h2>
            <p className="milestones-subtitle">5 years of excellence in training, building, and delivering results.</p>
            
            {/* Statistics Grid */}
            <div className="stats-grid">
              {milestones.map((milestone, index) => {
                return (
                  <div key={index} className="stat-card">
                    <div className="stat-number">
                      {milestone.number}
                    </div>
                    <div className="stat-label">{milestone.label}</div>
                    <div className="stat-subtitle">{milestone.subtitle}</div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Milestones;