/**
 * Kids Play Zone — Game Engine
 * Pure functions — no React, no side effects.
 * Takes a command list + initial state → returns animation frames.
 */

import { DIRECTIONS } from './levelData';

const DIR_DELTAS = {
  [DIRECTIONS.EAST]:  { dr:  0, dc:  1 },
  [DIRECTIONS.SOUTH]: { dr:  1, dc:  0 },
  [DIRECTIONS.WEST]:  { dr:  0, dc: -1 },
  [DIRECTIONS.NORTH]: { dr: -1, dc:  0 },
};

const TURN_LEFT = {
  [DIRECTIONS.EAST]:  DIRECTIONS.NORTH,
  [DIRECTIONS.NORTH]: DIRECTIONS.WEST,
  [DIRECTIONS.WEST]:  DIRECTIONS.SOUTH,
  [DIRECTIONS.SOUTH]: DIRECTIONS.EAST,
};

const TURN_RIGHT = {
  [DIRECTIONS.EAST]:  DIRECTIONS.SOUTH,
  [DIRECTIONS.SOUTH]: DIRECTIONS.WEST,
  [DIRECTIONS.WEST]:  DIRECTIONS.NORTH,
  [DIRECTIONS.NORTH]: DIRECTIONS.EAST,
};

/**
 * Check if a position is a wall/obstacle.
 */
function isObstacle(row, col, level) {
  return level.obstacles.some(o => o.row === row && o.col === col);
}

/**
 * Check if a position is a water gap.
 */
function isWater(row, col, level) {
  return (level.waters || []).some(w => w.row === row && w.col === col);
}

/**
 * Check if a position is out of bounds.
 */
function isOutOfBounds(row, col, level) {
  return row < 0 || row >= level.gridSize.rows || col < 0 || col >= level.gridSize.cols;
}

/**
 * Expand repeat blocks into flat command list.
 * 'repeat' command expands the NEXT block 3 times.
 */
function expandCommands(commands) {
  const expanded = [];
  let i = 0;
  while (i < commands.length) {
    const cmd = commands[i];
    if (cmd.type === 'repeat') {
      const repeatCount = cmd.count || 3;
      const nextCmd = commands[i + 1];
      if (nextCmd) {
        for (let r = 0; r < repeatCount; r++) {
          expanded.push({ ...nextCmd, isRepeat: true, repeatIndex: r });
        }
        i += 2; // skip next command since we expanded it
      } else {
        i++;
      }
    } else {
      expanded.push(cmd);
      i++;
    }
  }
  return expanded;
}

/**
 * Execute commands against a level and return animation frames.
 * Each frame: { row, col, dir, type, status }
 * status: 'ok' | 'crashed' | 'water' | 'bounds' | 'goal'
 */
export function executeCommands(commands, level) {
  const frames = [];
  let { row, col, dir } = level.robot;

  // Initial frame
  frames.push({ row, col, dir, type: 'start', status: 'ok' });

  const expanded = expandCommands(commands);

  for (const cmd of expanded) {
    if (cmd.type === 'move') {
      const { dr, dc } = DIR_DELTAS[dir];
      const newRow = row + dr;
      const newCol = col + dc;

      if (isOutOfBounds(newRow, newCol, level)) {
        frames.push({ row, col, dir, type: 'move', status: 'bounds' });
        return { frames, result: 'fail', reason: 'out_of_bounds' };
      }
      if (isObstacle(newRow, newCol, level)) {
        frames.push({ row: newRow, col: newCol, dir, type: 'move', status: 'crashed' });
        return { frames, result: 'fail', reason: 'obstacle' };
      }
      if (isWater(newRow, newCol, level)) {
        frames.push({ row: newRow, col: newCol, dir, type: 'move', status: 'water' });
        return { frames, result: 'fail', reason: 'water' };
      }
      row = newRow;
      col = newCol;
      frames.push({ row, col, dir, type: 'move', status: 'ok' });

    } else if (cmd.type === 'jump') {
      const { dr, dc } = DIR_DELTAS[dir];
      const midRow = row + dr;
      const midCol = col + dc;
      const newRow = row + dr * 2;
      const newCol = col + dc * 2;

      if (isOutOfBounds(newRow, newCol, level)) {
        frames.push({ row, col, dir, type: 'jump', status: 'bounds' });
        return { frames, result: 'fail', reason: 'out_of_bounds' };
      }
      if (isObstacle(newRow, newCol, level)) {
        frames.push({ row: newRow, col: newCol, dir, type: 'jump', status: 'crashed' });
        return { frames, result: 'fail', reason: 'obstacle' };
      }
      // Can jump OVER obstacles and water in the middle cell
      row = newRow;
      col = newCol;
      frames.push({ row, col, dir, type: 'jump', status: 'ok', jumpMid: { row: midRow, col: midCol } });

    } else if (cmd.type === 'turn_left') {
      dir = TURN_LEFT[dir];
      frames.push({ row, col, dir, type: 'turn', status: 'ok' });

    } else if (cmd.type === 'turn_right') {
      dir = TURN_RIGHT[dir];
      frames.push({ row, col, dir, type: 'turn', status: 'ok' });

    } else if (cmd.type === 'if_obs') {
      // Check if next cell in current direction has obstacle
      const { dr, dc } = DIR_DELTAS[dir];
      const nextRow = row + dr;
      const nextCol = col + dc;
      const hasObstacle = isObstacle(nextRow, nextCol, level) || isOutOfBounds(nextRow, nextCol, level);
      frames.push({ row, col, dir, type: 'if_check', status: 'ok', triggered: hasObstacle });
      if (hasObstacle) {
        // Auto turn right
        dir = TURN_RIGHT[dir];
        frames.push({ row, col, dir, type: 'turn', status: 'ok', isAuto: true });
      }
    }

    // Check if goal reached
    if (row === level.goal.row && col === level.goal.col) {
      frames[frames.length - 1] = { ...frames[frames.length - 1], status: 'goal' };
      return { frames, result: 'success' };
    }
  }

  // Ran out of commands — check if at goal
  if (row === level.goal.row && col === level.goal.col) {
    return { frames, result: 'success' };
  }

  return { frames, result: 'fail', reason: 'missed_goal' };
}

/**
 * Calculate star rating (1–3 stars) based on solution length vs optimal.
 */
export function calculateStars(commandsUsed, optimalLength) {
  if (commandsUsed <= optimalLength) return 3;
  if (commandsUsed <= optimalLength + 2) return 2;
  return 1;
}

/**
 * Get direction emoji for robot rendering.
 */
export function getDirEmoji(dir) {
  const map = {
    [DIRECTIONS.EAST]:  '➡️',
    [DIRECTIONS.SOUTH]: '⬇️',
    [DIRECTIONS.WEST]:  '⬅️',
    [DIRECTIONS.NORTH]: '⬆️',
  };
  return map[dir];
}

/**
 * Get CSS rotation degrees for robot sprite.
 */
export function getDirRotation(dir) {
  const map = {
    [DIRECTIONS.NORTH]: 0,
    [DIRECTIONS.EAST]:  90,
    [DIRECTIONS.SOUTH]: 180,
    [DIRECTIONS.WEST]:  270,
  };
  return map[dir] ?? 0;
}
