"use client";
import React from "react";
import "./ProgramCohorts.css";
import { Clock, LayoutGrid } from "lucide-react";

const ProgramCohorts = ({ onApply }) => {
  const defaultBatches = [
    {
      id: 1,
      name: "Regular Classes",
      time: "10:00 AM IST",
      batchType: "Weekday (Mon-Fri)",
    },
    {
      id: 2,
      name: "Fast Track",
      time: "07:00 PM IST",
      batchType: "Weekday (Mon-Fri)",
    },
    {
      id: 3,
      name: "Placement Classes",
      time: "11:00 AM IST",
      batchType: "Weekend (Sat-Sun)",
    },
  ];

  return (
    <div id="batches-section" className="program-cohorts-section container">
      <div className="cohorts-header-text">
        <h2 className="cohorts-title">Batches</h2>
        <p className="cohorts-subtitle">
          Enroll in our upcoming sessions and kickstart your career journey.
        </p>
      </div>

      <div className="cohorts-list">
        {defaultBatches.map((batch) => (
          <div key={batch.id} className="cohort-row-card">
            {/* Batch Name */}
            <div className="cohort-name-col">
              <span className="batch-dot"></span>
              <span className="batch-name-text">{batch.name}</span>
            </div>

            {/* TIME */}
            <div className="cohort-info-col">
              <span className="info-label">
                <Clock size={13} className="info-icon" /> TIME
              </span>
              <span className="info-value">{batch.time}</span>
            </div>

            {/* BATCH TYPE */}
            <div className="cohort-info-col">
              <span className="info-label">
                <LayoutGrid size={13} className="info-icon" /> BATCH TYPE
              </span>
              <span className="info-value">{batch.batchType}</span>
            </div>

            {/* Join Now */}
            <div className="cohort-action-col">
              <button
                className="apply-now-btn"
                onClick={() => onApply && onApply(batch)}
              >
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCohorts;
