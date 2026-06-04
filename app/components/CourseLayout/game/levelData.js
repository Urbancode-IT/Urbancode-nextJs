/**
 * Kids Play Zone — Level Data
 * Each level defines a 2D grid maze for the robot to navigate.
 *
 * Robot directions: 0=East, 1=South, 2=West, 3=North
 * Grid: [row][col], 0-indexed from top-left
 *
 * Cell types:
 *   'empty'    — walkable floor
 *   'obstacle' — wall/rock (can't pass through)
 *   'water'    — gap (must jump over)
 *   'goal'     — target tile (star)
 */

export const DIRECTIONS = { EAST: 0, SOUTH: 1, WEST: 2, NORTH: 3 };

export const BLOCK_TYPES = {
  MOVE:       { id: 'move',       label: 'Move Forward', emoji: '⬆️',  color: 'emerald',  category: 'motion' },
  TURN_LEFT:  { id: 'turn_left',  label: 'Turn Left',    emoji: '↩️',  color: 'sky',      category: 'motion' },
  TURN_RIGHT: { id: 'turn_right', label: 'Turn Right',   emoji: '↪️',  color: 'blue',     category: 'motion' },
  JUMP:       { id: 'jump',       label: 'Jump',         emoji: '🦘',  color: 'violet',   category: 'motion' },
  REPEAT:     { id: 'repeat',     label: 'Repeat (3×)',  emoji: '🔁',  color: 'amber',    category: 'control' },
  IF_OBSTACLE:{ id: 'if_obs',     label: 'If Obstacle',  emoji: '❓',  color: 'rose',     category: 'control' },
};

export const LEVELS = [
  // ─────────────────────────── LEVEL 1 ────────────────────────────
  {
    id: 1,
    name: 'First Steps',
    description: 'Move forward to reach the star!',
    hint: 'The path is clear ahead. Just move forward 4 times to reach the ⭐.',
    badge: '🌱 Beginner',
    gridSize: { rows: 5, cols: 5 },
    robot: { row: 4, col: 2, dir: DIRECTIONS.NORTH },
    goal:  { row: 0, col: 2 },
    obstacles: [],
    waters: [],
    availableBlocks: ['move', 'jump'],
    optimalLength: 4,
    xpReward: 50,
  },

  // ─────────────────────────── LEVEL 2 ────────────────────────────
  {
    id: 2,
    name: 'Rock Dodge',
    description: 'A boulder blocks your path — go around it!',
    hint: 'Move forward once, turn right, move, turn left, then head to the star.',
    badge: '🪨 Explorer',
    gridSize: { rows: 5, cols: 5 },
    robot: { row: 4, col: 1, dir: DIRECTIONS.NORTH },
    goal:  { row: 0, col: 1 },
    obstacles: [{ row: 2, col: 1 }],
    waters: [],
    availableBlocks: ['move', 'turn_left', 'turn_right', 'jump'],
    optimalLength: 6,
    xpReward: 75,
  },

  // ─────────────────────────── LEVEL 3 ────────────────────────────
  {
    id: 3,
    name: 'The Corner',
    description: 'Navigate the L-shaped path.',
    hint: 'Go north, then turn and move east to reach the star in the corner.',
    badge: '🔄 Navigator',
    gridSize: { rows: 5, cols: 5 },
    robot: { row: 4, col: 0, dir: DIRECTIONS.NORTH },
    goal:  { row: 0, col: 4 },
    obstacles: [
      { row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 },
      { row: 1, col: 1 }, { row: 2, col: 1 }, { row: 3, col: 1 },
    ],
    waters: [],
    availableBlocks: ['move', 'turn_left', 'turn_right', 'jump', 'repeat'],
    optimalLength: 8,
    xpReward: 100,
    isLocked: false,
    isFreeLimit: true, // after completing this, prompt enquiry to continue
  },

  // ─────────────────────────── LEVEL 4 ────────────────────────────
  {
    id: 4,
    name: 'The Great Leap',
    description: 'Leap over the water gap to safety!',
    hint: 'Move to the edge of the water, then JUMP to leap across to the other side!',
    badge: '🦘 Jumper',
    gridSize: { rows: 5, cols: 6 },
    robot: { row: 2, col: 0, dir: DIRECTIONS.EAST },
    goal:  { row: 2, col: 5 },
    obstacles: [],
    waters: [{ row: 2, col: 2 }, { row: 2, col: 3 }],
    availableBlocks: ['move', 'turn_left', 'turn_right', 'jump'],
    optimalLength: 5,
    xpReward: 125,
  },

  // ─────────────────────────── LEVEL 5 ────────────────────────────
  {
    id: 5,
    name: 'Fork in the Road',
    description: 'Multiple paths — find the one that leads to the star!',
    hint: 'Some paths are dead ends. Think ahead before you move!',
    badge: '🗺️ Pathfinder',
    gridSize: { rows: 6, cols: 6 },
    robot: { row: 5, col: 2, dir: DIRECTIONS.NORTH },
    goal:  { row: 0, col: 5 },
    obstacles: [
      { row: 3, col: 2 }, { row: 2, col: 2 },
      { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 },
    ],
    waters: [{ row: 3, col: 4 }],
    availableBlocks: ['move', 'turn_left', 'turn_right', 'jump'],
    optimalLength: 9,
    xpReward: 150,
  },

  // ─────────────────────────── LEVEL 6 ────────────────────────────
  {
    id: 6,
    name: 'Loop de Loop',
    description: 'Use the Repeat block to avoid writing the same command over and over!',
    hint: 'The robot needs to move forward 3 times. Use Repeat(3) + Move to do it in 2 blocks!',
    badge: '🔁 Looper',
    gridSize: { rows: 5, cols: 5 },
    robot: { row: 4, col: 2, dir: DIRECTIONS.NORTH },
    goal:  { row: 1, col: 2 },
    obstacles: [],
    waters: [],
    availableBlocks: ['move', 'turn_left', 'turn_right', 'jump', 'repeat'],
    optimalLength: 2,
    xpReward: 175,
  },

  // ─────────────────────────── LEVEL 7 ────────────────────────────
  {
    id: 7,
    name: 'Smart Robot',
    description: 'Use If Obstacle to make your robot think!',
    hint: 'Place "If Obstacle" before a move — the robot will automatically dodge the rock!',
    badge: '🧠 Logic Pro',
    gridSize: { rows: 6, cols: 6 },
    robot: { row: 5, col: 0, dir: DIRECTIONS.NORTH },
    goal:  { row: 0, col: 5 },
    obstacles: [{ row: 3, col: 0 }, { row: 1, col: 3 }],
    waters: [],
    availableBlocks: ['move', 'turn_left', 'turn_right', 'jump', 'repeat', 'if_obs'],
    optimalLength: 8,
    xpReward: 200,
  },

  // ─────────────────────────── LEVEL 8 ────────────────────────────
  {
    id: 8,
    name: 'The Maze',
    description: 'A real maze — use everything you know!',
    hint: 'Plan the full route before you run. Use Repeat and If Obstacle wisely.',
    badge: '🏰 Maze Master',
    gridSize: { rows: 7, cols: 7 },
    robot: { row: 6, col: 0, dir: DIRECTIONS.NORTH },
    goal:  { row: 0, col: 6 },
    obstacles: [
      { row: 5, col: 2 }, { row: 4, col: 2 }, { row: 3, col: 2 }, { row: 3, col: 3 },
      { row: 3, col: 4 }, { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 },
      { row: 1, col: 4 },
    ],
    waters: [{ row: 5, col: 4 }, { row: 5, col: 5 }],
    availableBlocks: ['move', 'turn_left', 'turn_right', 'jump', 'repeat', 'if_obs'],
    optimalLength: 12,
    xpReward: 250,
  },

  // ─────────────────────────── LEVEL 9 ────────────────────────────
  {
    id: 9,
    name: 'The Gauntlet',
    description: 'Obstacles everywhere — only the sharpest logic wins!',
    hint: 'Think of it like writing real code: plan loops, handle obstacles, then execute.',
    badge: '⚔️ Code Warrior',
    gridSize: { rows: 8, cols: 8 },
    robot: { row: 7, col: 0, dir: DIRECTIONS.EAST },
    goal:  { row: 0, col: 7 },
    obstacles: [
      { row: 7, col: 3 }, { row: 6, col: 3 }, { row: 5, col: 3 },
      { row: 4, col: 5 }, { row: 3, col: 5 }, { row: 2, col: 5 },
      { row: 0, col: 2 }, { row: 0, col: 3 }, { row: 0, col: 4 },
    ],
    waters: [{ row: 5, col: 6 }, { row: 4, col: 1 }],
    availableBlocks: ['move', 'turn_left', 'turn_right', 'jump', 'repeat', 'if_obs'],
    optimalLength: 14,
    xpReward: 300,
  },

  // ─────────────────────────── LEVEL 10 ───────────────────────────
  {
    id: 10,
    name: 'FINAL CHALLENGE',
    description: 'The ultimate test. Complete it and become a Logic Master!',
    hint: 'You have all the tools. Trust your logic. You\'ve got this! 🚀',
    badge: '🏆 Logic Master',
    gridSize: { rows: 8, cols: 8 },
    robot: { row: 7, col: 7, dir: DIRECTIONS.NORTH },
    goal:  { row: 0, col: 0 },
    obstacles: [
      { row: 6, col: 5 }, { row: 5, col: 5 }, { row: 5, col: 3 },
      { row: 4, col: 3 }, { row: 3, col: 3 }, { row: 3, col: 1 },
      { row: 2, col: 6 }, { row: 2, col: 5 }, { row: 2, col: 4 },
      { row: 1, col: 6 },
    ],
    waters: [
      { row: 6, col: 2 }, { row: 4, col: 6 }, { row: 1, col: 3 },
    ],
    availableBlocks: ['move', 'turn_left', 'turn_right', 'jump', 'repeat', 'if_obs'],
    optimalLength: 16,
    xpReward: 500,
    isFinalLevel: true,
  },
];

export const ACHIEVEMENTS = [
  { id: 'first_win',     label: 'First Win',       emoji: '🏆', condition: (stats) => stats.levelsCompleted >= 1 },
  { id: 'perfect',       label: 'Perfect Solution', emoji: '⭐', condition: (stats) => stats.perfectSolutions >= 1 },
  { id: 'logic_master',  label: 'Logic Master',     emoji: '🚀', condition: (stats) => stats.levelsCompleted >= 10 },
  { id: 'speed_run',     label: 'Speed Run',        emoji: '⚡', condition: (stats) => stats.fastSolves >= 1 },
  { id: 'no_hints',      label: 'No Hints Used',    emoji: '🧠', condition: (stats) => stats.noHintLevels >= 3 },
];
