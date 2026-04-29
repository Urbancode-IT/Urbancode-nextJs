import React from "react";
import "./CourseCard.css";

function CourseCard({ image, title, desc, count, variant }) {
  return (
    <div className={`cc-window ${variant}-variant`}>
      {/* Window Header / Title Bar */}
      <div className="cc-window-header">
        <div className="cc-traffic-lights">
          <span className="cc-dot cc-red"></span>
          <span className="cc-dot cc-yellow"></span>
          <span className="cc-dot cc-green"></span>
        </div>
        <div className="cc-window-title">{title}</div>
      </div>

      {/* Window Body */}
      <div className="cc-window-body">
        <div className="cc-image-container">
          <img src={image} alt={title} className="cc-window-image" />
          <div className="cc-window-badge">{count}</div>
        </div>
        
        <div className="cc-window-content">
          <p className="cc-window-desc">{desc}</p>
          <div className="cc-window-footer">
            <span className="cc-view-details">Learn More</span>
            <div className="cc-arrow-icon">→</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
