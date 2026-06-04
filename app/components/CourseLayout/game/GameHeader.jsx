'use client';
import { motion } from 'framer-motion';

export default function GameHeader({ level, xp, totalXp, starsEarned, completedCount }) {
  const xpPercent = Math.min((xp / totalXp) * 100, 100);

  return (
    <div className="game-header" role="banner" aria-label="Game header">
      {/* Left: Level info */}
      <div className="header-level-info">
        <motion.span
          key={level.id}
          className="header-level-badge"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {level.badge}
        </motion.span>
        <div>
          <p className="header-level-num">Level {level.id}</p>
          <h2 className="header-level-name">{level.name}</h2>
        </div>
      </div>

      {/* Center: XP bar */}
      <div className="header-xp-section" aria-label={`XP: ${xp} of ${totalXp}`}>
        <div className="header-xp-label">
          <span>⚡ XP</span>
          <span className="header-xp-value">{xp} / {totalXp}</span>
        </div>
        <div className="header-xp-track" role="progressbar" aria-valuenow={xp} aria-valuemax={totalXp}>
          <motion.div
            className="header-xp-fill"
            animate={{ width: `${xpPercent}%` }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          />
          {/* XP fill shimmer */}
          <div className="xp-shimmer" />
        </div>
      </div>

      {/* Right: Stars + progress */}
      <div className="header-right">
        <div className="header-stars" aria-label={`${starsEarned} stars earned`}>
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.span
              key={i}
              className={`header-star ${i < starsEarned ? 'star-filled' : 'star-empty'}`}
              animate={i < starsEarned ? { scale: [1, 1.3, 1], rotate: [0, 10, 0] } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {i < starsEarned ? '⭐' : '☆'}
            </motion.span>
          ))}
        </div>
        <p className="header-progress-text">
          {completedCount}/10 done
        </p>
      </div>
    </div>
  );
}
