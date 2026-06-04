"use client";
import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './KidsInteractiveGame.css';

import { LEVELS, ACHIEVEMENTS } from './game/levelData';
import { executeCommands, calculateStars } from './game/gameEngine';
import GameHeader  from './game/GameHeader';
import LevelMap    from './game/LevelMap';
import GameBoard   from './game/GameBoard';
import BlockToolbox from './game/BlockToolbox';
import ProgramArea from './game/ProgramArea';
import { SuccessModal, FailModal } from './game/Modals';

const TOTAL_XP = LEVELS.reduce((s, l) => s + l.xpReward, 0);
const FRAME_INTERVAL_MS = 520;

/* ─── tiny uid helper ─── */
let _uid = 0;
const uid = () => `blk-${++_uid}`;

export default function KidsInteractiveGame({ onUnlockClick, levelsUnlocked }) {
  /* ── Level / navigation state ── */
  const [currentLevelId,  setCurrentLevelId]  = useState(1);
  const [completedLevels, setCompletedLevels] = useState([]);
  const [showLevelMap,    setShowLevelMap]    = useState(false);

  /* ── Program blocks ── */
  const [blocks, setBlocks] = useState([]);

  /* ── Playback state ── */
  const [gameStatus, setGameStatus]     = useState('idle'); // idle | running | success | fail
  const [robotState, setRobotState]     = useState(null);
  const [failReason, setFailReason]     = useState('');
  const [activeBlockIdx, setActiveBlockIdx] = useState(-1);
  const [stars, setStars]               = useState(0);

  /* ── XP / achievements ── */
  const [xp, setXp]                     = useState(0);
  const [newAchievements, setNewAchievements] = useState([]);

  /* ── Modals ── */
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail,    setShowFail]    = useState(false);

  const timerRef = useRef(null);

  const level = LEVELS.find(l => l.id === currentLevelId) || LEVELS[0];

  /* initialise robot from level */
  const initRobot = useCallback((lv) => ({
    row: lv.robot.row,
    col: lv.robot.col,
    dir: lv.robot.dir,
  }), []);

  /* ── Add block (click or drop) ── */
  const handleAddBlock = useCallback((type) => {
    if (gameStatus === 'running') return;
    setBlocks(prev => [...prev, { id: uid(), type }]);
  }, [gameStatus]);

  /* ── Remove block ── */
  const handleDeleteBlock = useCallback((id) => {
    if (gameStatus === 'running') return;
    setBlocks(prev => prev.filter(b => b.id !== id));
  }, [gameStatus]);

  /* ── Reorder blocks (drag) ── */
  const handleReorder = useCallback((newOrder) => {
    if (gameStatus === 'running') return;
    setBlocks(newOrder);
  }, [gameStatus]);

  /* ── Reset ── */
  const handleReset = useCallback(() => {
    clearInterval(timerRef.current);
    setGameStatus('idle');
    setRobotState(initRobot(level));
    setActiveBlockIdx(-1);
    setShowSuccess(false);
    setShowFail(false);
    setBlocks([]);
  }, [level, initRobot]);

  /* ── Run program ── */
  const handleRun = useCallback(() => {
    if (blocks.length === 0 || gameStatus === 'running') return;

    const startRobot = initRobot(level);
    setRobotState(startRobot);
    setGameStatus('running');
    setShowSuccess(false);
    setShowFail(false);
    setActiveBlockIdx(-1);

    const { frames, result, reason } = executeCommands(blocks, level);

    let frameIdx = 0;
    timerRef.current = setInterval(() => {
      if (frameIdx >= frames.length) {
        clearInterval(timerRef.current);

        if (result === 'success') {
          const earned = calculateStars(blocks.length, level.optimalLength);
          setStars(earned);
          setGameStatus('success');
          setShowSuccess(true);

          // Accumulate XP
          setXp(prev => Math.min(prev + level.xpReward, TOTAL_XP));

          // Mark completed
          setCompletedLevels(prev =>
            prev.includes(level.id) ? prev : [...prev, level.id]
          );

          // Achievement check
          const stats = {
            levelsCompleted: completedLevels.length + 1,
            perfectSolutions: earned === 3 ? 1 : 0,
            fastSolves: earned === 3 ? 1 : 0,
            noHintLevels: 0,
          };
          const newAch = ACHIEVEMENTS.filter(a => a.condition(stats));
          if (newAch.length) setNewAchievements(newAch);

        } else {
          setFailReason(reason || 'missed_goal');
          setGameStatus('fail');
          setShowFail(true);
        }
        setActiveBlockIdx(-1);
        return;
      }

      const frame = frames[frameIdx];
      setRobotState({ row: frame.row, col: frame.col, dir: frame.dir });
      setActiveBlockIdx(frameIdx);
      frameIdx++;
    }, FRAME_INTERVAL_MS);
  }, [blocks, gameStatus, level, completedLevels, initRobot]);

  /* ── Next level ── */
  const handleNextLevel = useCallback(() => {
    if (level.isFreeLimit && !levelsUnlocked) {
      onUnlockClick('unlock');
      return;
    }
    if (level.isFinalLevel) {
      onUnlockClick('demo'); // Book demo
      return;
    }
    const next = LEVELS.find(l => l.id === currentLevelId + 1);
    if (next) {
      setCurrentLevelId(next.id);
      setBlocks([]);
      setGameStatus('idle');
      setRobotState(initRobot(next));
      setShowSuccess(false);
      setShowFail(false);
    }
  }, [level, levelsUnlocked, onUnlockClick, currentLevelId, initRobot]);

  /* ── Select level from map ── */
  const handleSelectLevel = useCallback((id) => {
    const lv = LEVELS.find(l => l.id === id);
    if (!lv) return;
    if (id > 3 && !levelsUnlocked && !completedLevels.includes(id)) {
      onUnlockClick('unlock');
      return;
    }
    setCurrentLevelId(id);
    setBlocks([]);
    setGameStatus('idle');
    setRobotState(initRobot(lv));
    setShowLevelMap(false);
    setShowSuccess(false);
    setShowFail(false);
  }, [levelsUnlocked, completedLevels, initRobot, onUnlockClick]);

  /* ── Hint state ── */
  const [showHint, setShowHint] = useState(false);

  /* robot display state for board */
  const displayRobot = robotState || initRobot(level);
  const boardStatus  =
    gameStatus === 'success' ? 'success' :
    gameStatus === 'fail'    ? failReason :
    gameStatus === 'running' ? 'running' :
    'idle';

  return (
    <div className="kids-game-container">

      {/* ── HEADER ── */}
      <GameHeader
        level={level}
        xp={xp}
        totalXp={TOTAL_XP}
        starsEarned={completedLevels.includes(level.id) ? 3 : 0}
        completedCount={completedLevels.length}
      />

      {/* ── LEVEL MAP TOGGLE ── */}
      <div className="game-nav-bar">
        <button
          className="nav-map-btn"
          onClick={() => setShowLevelMap(v => !v)}
          aria-label="Toggle level map"
        >
          🗺️ {showLevelMap ? 'Close Map' : 'Level Map'}
        </button>

        <div className="hint-toggle-row">
          <button
            className="hint-toggle-btn"
            onClick={() => setShowHint(v => !v)}
            aria-label="Toggle hint"
          >
            💡 {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
        </div>
      </div>

      {/* ── LEVEL MAP (collapsible) ── */}
      <AnimatePresence>
        {showLevelMap && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <LevelMap
              currentLevel={currentLevelId}
              completedLevels={completedLevels}
              levelsUnlocked={levelsUnlocked}
              onSelectLevel={handleSelectLevel}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HINT BOX ── */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            className="game-hint-box"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <span className="hint-icon-badge">💡</span>
            <p>{level.hint}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LEVEL DESCRIPTION ── */}
      <div className="level-desc-bar">
        <span className="level-desc-text">{level.description}</span>
        <span className="kids-category-tag">Icebreaker Activity</span>
      </div>

      {/* ── MAIN GAME AREA ── */}
      <div className="game-main-area">

        {/* LEFT: Game Board */}
        <div className="game-board-section">
          <GameBoard
            level={level}
            robotState={displayRobot}
            gameStatus={boardStatus}
          />
        </div>

        {/* RIGHT: Toolbox + Program */}
        <div className="game-controls-section">
          <BlockToolbox
            availableBlocks={level.availableBlocks}
            onAddBlock={handleAddBlock}
            disabled={gameStatus === 'running'}
          />

          <ProgramArea
            blocks={blocks}
            onReorder={handleReorder}
            onDelete={handleDeleteBlock}
            disabled={gameStatus === 'running'}
            activeBlockIndex={activeBlockIdx}
            onDrop={handleAddBlock}
          />

          {/* Run / Reset controls */}
          <div className="game-action-bar">
            <motion.button
              className="action-btn btn-run"
              onClick={handleRun}
              disabled={blocks.length === 0 || gameStatus === 'running'}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Run program"
            >
              ▶ Run
            </motion.button>

            <motion.button
              className="action-btn btn-reset"
              onClick={handleReset}
              disabled={gameStatus === 'running'}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Reset program"
            >
              ↺ Reset
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── ACHIEVEMENT TOAST ── */}
      <AnimatePresence>
        {newAchievements.length > 0 && (
          <motion.div
            className="achievement-toast"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onAnimationComplete={() => setTimeout(() => setNewAchievements([]), 2500)}
          >
            {newAchievements.map(a => (
              <div key={a.id} className="achievement-item">
                <span>{a.emoji}</span>
                <span><strong>Achievement:</strong> {a.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MODALS ── */}
      <SuccessModal
        show={showSuccess}
        level={level}
        stars={stars}
        commandsUsed={blocks.length}
        onNext={handleNextLevel}
        onRetry={handleReset}
        isFreeLimit={level.isFreeLimit && !levelsUnlocked}
        isFinalLevel={!!level.isFinalLevel}
      />

      <FailModal
        show={showFail}
        reason={failReason}
        onRetry={handleReset}
      />
    </div>
  );
}
