import React from "react";
import "./AboutCards.css";
import AboutCard from "./AboutCard";

function AboutCards({ cards }) {
  return (
    <div className="about-cards__grid">
      {cards.map((card, i) => (
        <AboutCard
          key={i}
          index={i + 1}
          icon={card.icon}
          iconBg={card.iconBg}
          title={card.title}
          desc={card.desc}
        />
      ))}
    </div>
  );
}

export default AboutCards;