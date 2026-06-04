'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { getDirRotation } from './gameEngine';
import { DIRECTIONS } from './levelData';

/**
 * GameBoard — 2D CSS Grid with animated robot, obstacles, water, goal tile.
 */
export default function GameBoard({ level, robotState, gameStatus, currentFrame }) {
  const { rows, cols } = level.gridSize;

  const isObstacle = (r, c) => level.obstacles.some(o => o.row === r && o.col === c);
  const isWater    = (r, c) => (level.waters || []).some(w => w.row === r && w.col === c);
  const isGoal     = (r, c) => level.goal.row === r && level.goal.col === c;
  const isRobot    = (r, c) => robotState.row === r && robotState.col === c;

  const cellSize = cols <= 5 ? 72 : cols <= 6 ? 64 : cols <= 7 ? 56 : 50;
  const fontSize = cols <= 5 ? 32 : cols <= 6 ? 28 : cols <= 7 ? 24 : 20;

  return (
    <div
      className="game-board-wrapper"
      role="grid"
      aria-label={`Game board, ${rows} rows by ${cols} columns`}
    >
      <div
        className="game-board-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows:    `repeat(${rows}, ${cellSize}px)`,
          gap: '4px',
          position: 'relative',
        }}
      >
        {Array.from({ length: rows }, (_, r) =>
          Array.from({ length: cols }, (_, c) => {
            const obstacle = isObstacle(r, c);
            const water    = isWater(r, c);
            const goal     = isGoal(r, c);
            const robot    = isRobot(r, c);
            const crashed  = robot && (gameStatus === 'crashed' || gameStatus === 'water' || gameStatus === 'bounds');
            const success  = robot && gameStatus === 'success';

            let cellClass = 'game-cell';
            if (obstacle) cellClass += ' cell-obstacle';
            else if (water) cellClass += ' cell-water';
            else if (goal) cellClass += ' cell-goal';
            else cellClass += ' cell-floor';

            return (
              <div
                key={`${r}-${c}`}
                className={cellClass}
                style={{ width: cellSize, height: cellSize, position: 'relative', fontSize }}
                role="gridcell"
                aria-label={
                  obstacle ? 'Obstacle' :
                  water    ? 'Water gap' :
                  goal     ? 'Goal star' :
                  robot    ? 'Robot' : 'Empty'
                }
              >
                {/* Floor tile pattern */}
                {!obstacle && !water && (
                  <div className="cell-floor-inner" />
                )}

                {/* Obstacle */}
                {obstacle && (
                  <motion.span
                    className="cell-icon"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    🪨
                  </motion.span>
                )}

                {/* Water gap */}
                {water && (
                  <motion.span
                    className="cell-icon"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🌊
                  </motion.span>
                )}

                {/* Goal star */}
                {goal && gameStatus !== 'success' && (
                  <motion.div
                    className="goal-glow"
                    animate={{
                      scale:   [1, 1.15, 1],
                      rotate:  [0, 10, -10, 0],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐
                  </motion.div>
                )}

                {/* Robot */}
                <AnimatePresence>
                  {robot && (
                    <motion.div
                      className={`robot-sprite ${crashed ? 'robot-crashed' : ''} ${success ? 'robot-success' : ''}`}
                      layoutId="robot"
                      initial={false}
                      animate={{
                        rotate: crashed ? [0, -15, 15, 0] : getDirRotation(robotState.dir),
                        scale:  crashed ? 0.8 : success ? 1.3 : 1,
                        y: gameStatus === 'idle' ? [0, -3, 0] : 0,
                      }}
                      transition={{
                        rotate: crashed
                          ? { duration: 0.4, times: [0, 0.33, 0.66, 1] }
                          : { type: 'spring', stiffness: 300, damping: 20 },
                        y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
                        scale: { type: 'spring', stiffness: 400 },
                      }}
                      style={{ fontSize: fontSize + 4 }}
                    >
                      {crashed ? '💥' : success ? '🎉' : '🤖'}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>

      {/* Direction compass */}
      <div className="board-compass" aria-label="Robot direction indicator">
        <div className="compass-label">
          {robotState.dir === DIRECTIONS.NORTH && '⬆️ North'}
          {robotState.dir === DIRECTIONS.EAST  && '➡️ East'}
          {robotState.dir === DIRECTIONS.SOUTH && '⬇️ South'}
          {robotState.dir === DIRECTIONS.WEST  && '⬅️ West'}
        </div>
      </div>
    </div>
  );
}
