import React from "react";
import { Users, Bot, Trophy, Lightbulb, Rocket, Smartphone, Cloud } from "lucide-react";
import "./EventCard.css";

const IconMap = {
  Bot: Bot,
  Trophy: Trophy,
  Lightbulb: Lightbulb,
  Rocket: Rocket,
  Smartphone: Smartphone,
  Cloud: Cloud,
};

function EventCard({ type, color, iconName, date, title, desc, attendees, venue, status }) {
  const IconComponent = IconMap[iconName] || Lightbulb;

  return (
    <div className="ev-card">
      <div className="ev-img" style={{ background: color }}>
        <span className="ev-badge">{type}</span>
        <div className="ev-icon-wrapper">
          <IconComponent size={80} strokeWidth={1.5} color="white" className="ev-icon" />
        </div>
      </div>
      <div className="ev-body">
        <p className="ev-date">{date}</p>
        <h3 className="ev-title">{title}</h3>
        <p className="ev-desc">{desc}</p>
        <div className="ev-footer">
          <div className="ev-venue">
            <Users size={14} strokeWidth={1.8} className="ev-venue-icon" />
            <span className="ev-venue-text">
              {attendees ? `${attendees} · ${venue}` : venue}
            </span>
          </div>
          <span className={`ev-status ${status === "Upcoming" ? "upcoming" : "completed"}`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
