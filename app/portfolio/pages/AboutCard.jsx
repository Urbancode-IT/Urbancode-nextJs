import React from "react";
import "./AboutCard.css";

function AboutCard({ icon, iconBg, title, desc, index }) {
  return (
    <div className="about-card" style={{ ["--accent"]: iconBg }}>
      {/* Animated Wire Border */}
      <div className="about-card__wire" aria-hidden="true"></div>

      <div className="about-card__badge" aria-hidden="true">
        {String(index).padStart(2, "0")}
        {/* Hanging Tag */}
        <div className="about-card__hanging-tag">
          <div className="hanging-tag-string"></div>
          <div className="hanging-tag-body">✨</div>
        </div>
      </div>

      <div className="about-card__icon" style={{ background: iconBg }}>
        <span className="about-card__icon-emoji" aria-hidden="true">
          {icon}
        </span>
      </div>
      <div className="about-card__body">
        <h3 className="about-card__title">{title}</h3>
        <p className="about-card__desc">{desc}</p>
      </div>
    </div>
  );
}

export default AboutCard;