"use client";
import React from "react";
import "./ProgramCohorts.css";
import { CalendarDays, Clock, Users } from "lucide-react";

const ProgramCohorts = ({ batches, onApply }) => {
  // Dummy batches as requested, can be overridden by props
  const defaultBatches = [
    {
      id: 1,
      name: "Regular Classes",
      date: "16th May 2026",
      time: "10:00 AM IST",
      type: "Weekend (Sat-Sun)"
    },
    {
      id: 2,
      name: "Fast Track",
      date: "25th May 2026",
      time: "07:00 PM IST",
      type: "Weekday (Mon-Fri)"
    }
  ];

  const displayBatches = batches || defaultBatches;

  return (
    <div className="program-cohorts-section container">
      <h2 className="cohorts-title">Program Batches</h2>
      <p className="cohorts-subtitle">Next Batches</p>
      
      <div className="cohorts-container">
        <table className="cohorts-table">
          <thead className="cohorts-header">
            <tr>
              <th></th>
              <th>
                <div className="header-content">
                  <CalendarDays className="header-icon" size={18} />
                  <span>DATE</span>
                </div>
              </th>
              <th>
                <div className="header-content">
                  <Clock className="header-icon" size={18} />
                  <span>TIME</span>
                </div>
              </th>
              <th>
                <div className="header-content">
                  <Users className="header-icon" size={18} />
                  <span>BATCH TYPE</span>
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {displayBatches.map((batch) => (
              <tr key={batch.id} className="cohort-row">
                <td>
                  <div className="cohort-name-cell">
                    <span className="status-dot"></span>
                    <span className="batch-name">{batch.name}</span>
                  </div>
                </td>
                <td data-label="DATE" className="date-cell">
                  {batch.date}
                </td>
                <td data-label="TIME" className="time-cell">
                  {batch.time}
                </td>
                <td data-label="BATCH TYPE" className="type-cell">
                  {batch.type}
                </td>
                <td className="apply-btn-cell">
                  <button 
                    className="apply-now-btn"
                    onClick={() => onApply && onApply(batch)}
                  >
                    Apply Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgramCohorts;
