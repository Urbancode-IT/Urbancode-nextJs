'use client';
import { motion } from 'framer-motion';
import { LEVELS } from './levelData';

export default function LevelMap({ currentLevel, completedLevels, levelsUnlocked, onSelectLevel }) {
  return (
    <div className="level-map" role="navigation" aria-label="Level map">
      <div className="level-map-header">
        <span className="level-map-title">🗺️ Adventure Map</span>
      </div>

      <div className="level-map-nodes">
        {LEVELS.map((level, idx) => {
          const isCurrent   = level.id === currentLevel;
          const isCompleted = completedLevels.includes(level.id);
          const isLocked    = level.id > 3 && !levelsUnlocked && !isCompleted;
          const isAvailable = !isLocked;

          let statusClass = 'node-available';
          if (isCurrent)   statusClass = 'node-current';
          if (isCompleted) statusClass = 'node-completed';
          if (isLocked)    statusClass = 'node-locked';

          return (
            <div key={level.id} className="level-node-wrapper">
              {/* Connector line between nodes */}
              {idx > 0 && (
                <div
                  className={`level-connector ${isCompleted || isCurrent ? 'connector-active' : 'connector-inactive'}`}
                />
              )}

              {/* Node column: button + name */}
              <div className="level-node-col">
                <motion.button
                  className={`level-node ${statusClass}`}
                  onClick={() => isAvailable && onSelectLevel(level.id)}
                  disabled={isLocked}
                  whileHover={isAvailable ? { scale: 1.08 } : {}}
                  whileTap={isAvailable ? { scale: 0.93 } : {}}
                  aria-label={`Level ${level.id}: ${level.name}${isLocked ? ' (locked)' : isCompleted ? ' (completed)' : ''}`}
                  title={isLocked ? 'Complete enquiry to unlock' : level.name}
                >
                  <span className="node-number">
                    {isCompleted ? '✓' : isLocked ? '🔒' : level.id}
                  </span>
                  {isCurrent && (
                    <motion.div
                      className="node-pulse-ring"
                      animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}
                </motion.button>

                <div className="node-label">
                  <span className="node-name">{level.name}</span>
                  {isCompleted && <span className="node-badge">⭐</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress summary */}
      <div className="level-map-footer">
        <div className="map-progress-bar">
          <motion.div
            className="map-progress-fill"
            animate={{ width: `${(completedLevels.length / 10) * 100}%` }}
            transition={{ type: 'spring', stiffness: 60 }}
          />
        </div>
        <p className="map-progress-text">
          {completedLevels.length} / 10 levels completed
        </p>
      </div>
    </div>
  );
}
