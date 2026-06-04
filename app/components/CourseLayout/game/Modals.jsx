'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';

/* ─── Confetti Burst (canvas-confetti via dynamic import) ─── */
function ConfettiBurst({ active }) {
  const fired = useRef(false);
  useEffect(() => {
    if (active && !fired.current) {
      fired.current = true;
      import('canvas-confetti').then(({ default: confetti }) => {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.55 }, colors: ['#00D084','#7C3AED','#FBBF24','#f43f5e','#3b82f6'] });
        setTimeout(() => confetti({ particleCount: 80, spread: 60, origin: { x: 0.2, y: 0.6 }, colors: ['#00D084','#FBBF24'] }), 200);
        setTimeout(() => confetti({ particleCount: 80, spread: 60, origin: { x: 0.8, y: 0.6 }, colors: ['#7C3AED','#f43f5e'] }), 350);
      });
    }
  }, [active]);
  return null;
}

/* ─── Success Modal ─── */
export function SuccessModal({ show, level, stars, commandsUsed, onNext, onRetry, isFreeLimit, isFinalLevel }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Level complete"
        >
          <ConfettiBurst active={show} />

          <motion.div
            className="success-modal-card"
            initial={{ scale: 0.4, y: 60, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            {/* Top glow ring */}
            <div className="success-glow-ring" />

            <motion.div
              className="success-emoji"
              animate={{ rotate: [0, -10, 10, -6, 6, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {isFinalLevel ? '🏆' : '🎉'}
            </motion.div>

            <h2 className="success-title">
              {isFinalLevel ? 'LOGIC MASTER!' : 'Level Complete!'}
            </h2>

            <p className="success-subtitle">
              {isFinalLevel
                ? 'You conquered all 10 levels. You\'re a coding superstar! 🚀'
                : `You solved Level ${level.id}: ${level.name}`}
            </p>

            {/* Stars earned */}
            <div className="success-stars-row" aria-label={`${stars} stars earned`}>
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.span
                  key={i}
                  className={`modal-star ${i < stars ? 'modal-star-filled' : 'modal-star-empty'}`}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 400, delay: 0.3 + i * 0.12 }}
                >
                  {i < stars ? '⭐' : '☆'}
                </motion.span>
              ))}
            </div>

            {/* Stats row */}
            <div className="success-stats">
              <div className="stat-pill">
                <span>🧩</span>
                <span>{commandsUsed} blocks used</span>
              </div>
              <div className="stat-pill">
                <span>⚡</span>
                <span>+{level.xpReward} XP</span>
              </div>
              {stars === 3 && (
                <div className="stat-pill stat-pill-gold">
                  <span>✨</span>
                  <span>Perfect!</span>
                </div>
              )}
            </div>

            {/* CTA buttons */}
            <div className="success-actions">
              {isFinalLevel ? (
                <motion.button
                  className="btn-success-primary"
                  onClick={onNext}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  🎓 Book Free Demo Class
                </motion.button>
              ) : isFreeLimit ? (
                <>
                  <p className="free-limit-msg">
                    🔓 You've completed the 3 free levels!<br />
                    <span>Fill the enquiry form to unlock Levels 4–10</span>
                  </p>
                  <motion.button
                    className="btn-success-primary"
                    onClick={onNext}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    🚀 Unlock Levels 4–10
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.button
                    className="btn-success-secondary"
                    onClick={onRetry}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    🔄 Retry
                  </motion.button>
                  <motion.button
                    className="btn-success-primary"
                    onClick={onNext}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Next Level ➡️
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Fail Modal ─── */
export function FailModal({ show, reason, onRetry }) {
  const messages = {
    obstacle:      { emoji: '💥', title: 'CRASH!',         msg: 'The robot smashed into a rock! 🪨' },
    water:         { emoji: '💦', title: 'SPLASH!',        msg: 'The robot fell into the water! 🌊' },
    out_of_bounds: { emoji: '🌌', title: 'LOST IN SPACE!', msg: 'The robot flew off the grid! 🚀' },
    missed_goal:   { emoji: '😅', title: 'SO CLOSE!',      msg: 'The robot didn\'t reach the star. Try again!' },
  };
  const info = messages[reason] || messages.missed_goal;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="modal-overlay fail-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Level failed"
        >
          <motion.div
            className="fail-modal-card"
            initial={{ y: -80, rotate: -5, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          >
            <motion.div
              className="fail-emoji"
              animate={{
                rotate: [0, -15, 15, -10, 10, -5, 5, 0],
                scale:  [1, 1.1, 1.1, 1.1, 1.1, 1, 1, 1],
              }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {info.emoji}
            </motion.div>

            <h2 className="fail-title">{info.title}</h2>
            <p className="fail-message">{info.msg}</p>

            <p className="fail-tip">💡 Check your block order and try again!</p>

            <motion.button
              className="btn-fail-retry"
              onClick={onRetry}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              🔄 Try Again
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
