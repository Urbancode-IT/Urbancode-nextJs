import React from "react";
import "./Events.css";
import EventCard from "./EventCard";
import eventsData from "./eventsData";

function Events() {
  return (
    <section id="events" className="events-page">
      <div className="events-container">
        <div className="events-tag">Campus Events</div>
        <h2 className="events-title">Events & Seminars</h2>
        <p className="events-sub">
          Empowering students with skills, industry exposure and career
          opportunities through engaging campus events.
        </p>
        <div className="events-grid">
          {eventsData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;