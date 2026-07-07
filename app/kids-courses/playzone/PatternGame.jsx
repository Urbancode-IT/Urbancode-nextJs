'use client';
import React, { useState, useCallback } from 'react';
import { FaFire, FaUserSecret, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import { 
  FaCircle, FaStar, FaMoon, FaSun, FaBolt, FaSnowflake, 
  FaDog, FaCat, FaFrog, FaBug, FaFish, 
  FaAppleWhole, FaLemon, FaCarrot, FaLeaf, FaTree, 
  FaMusic, FaGuitar, FaDrum, FaHeadphones, FaMicrophone
} from 'react-icons/fa6';

const iconColorMap = {
  'circle-red': { icon: FaCircle, color: '#ef4444' },
  'circle-blue': { icon: FaCircle, color: '#3b82f6' },
  'circle-yellow': { icon: FaCircle, color: '#eab308' },
  'circle-green': { icon: FaCircle, color: '#22c55e' },
  'circle-purple': { icon: FaCircle, color: '#a855f7' },
  'star': { icon: FaStar, color: '#fbbf24' },
  'moon': { icon: FaMoon, color: '#94a3b8' },
  'sun': { icon: FaSun, color: '#f59e0b' },
  'bolt': { icon: FaBolt, color: '#eab308' },
  'snowflake': { icon: FaSnowflake, color: '#60a5fa' },
  'dog': { icon: FaDog, color: '#8b5cf6' },
  'cat': { icon: FaCat, color: '#f43f5e' },
  'frog': { icon: FaFrog, color: '#22c55e' },
  'bug': { icon: FaBug, color: '#ef4444' },
  'fish': { icon: FaFish, color: '#3b82f6' },
  'apple': { icon: FaAppleWhole, color: '#ef4444' },
  'lemon': { icon: FaLemon, color: '#eab308' },
  'carrot': { icon: FaCarrot, color: '#f97316' },
  'leaf': { icon: FaLeaf, color: '#22c55e' },
  'tree': { icon: FaTree, color: '#16a34a' },
  'music': { icon: FaMusic, color: '#ec4899' },
  'guitar': { icon: FaGuitar, color: '#f97316' },
  'drum': { icon: FaDrum, color: '#06b6d4' },
  'headphones': { icon: FaHeadphones, color: '#8b5cf6' },
  'microphone': { icon: FaMicrophone, color: '#3b82f6' }
};

const renderShape = (shapeId, size = 32) => {
  if (!shapeId) return null;
  const cfg = iconColorMap[shapeId];
  if (!cfg) return shapeId;
  const Icon = cfg.icon;
  return <Icon size={size} color={cfg.color} />;
};

/* ─── Pattern shapes: icon-based sequences ─── */
const SHAPE_SETS = [
  ['circle-red', 'circle-blue', 'circle-yellow', 'circle-green', 'circle-purple'],
  ['star', 'moon', 'sun', 'bolt', 'snowflake'],
  ['dog', 'cat', 'frog', 'bug', 'fish'],
  ['apple', 'lemon', 'carrot', 'leaf', 'tree'],
  ['music', 'guitar', 'drum', 'headphones', 'microphone'],
];

const LEVELS = [
  { name: 'Starter',    seqLen: 4, missing: 1, choices: 3 },
  { name: 'Apprentice', seqLen: 5, missing: 1, choices: 4 },
  { name: 'Explorer',   seqLen: 6, missing: 2, choices: 4 },
  { name: 'Master',     seqLen: 6, missing: 2, choices: 5 },
];

function generatePattern(levelCfg) {
  const set = SHAPE_SETS[Math.floor(Math.random() * SHAPE_SETS.length)];
  const patternLen = Math.min(3, set.length); // repeating unit length
  const unit = set.slice(0, patternLen);

  // Build full sequence by repeating unit
  const full = [];
  while (full.length < levelCfg.seqLen) {
    for (const s of unit) {
      if (full.length < levelCfg.seqLen) full.push(s);
    }
  }

  // Pick indices to hide
  const indices = [];
  while (indices.length < levelCfg.missing) {
    const idx = Math.floor(Math.random() * levelCfg.seqLen);
    if (!indices.includes(idx)) indices.push(idx);
  }
  indices.sort((a, b) => a - b);

  // Build display sequence (with blanks)
  const display = full.map((v, i) => indices.includes(i) ? null : v);

  // Correct answers in order
  const answers = indices.map(i => full[i]);

  // Generate choices (correct + distractors from other sets)
  const allShapes = SHAPE_SETS.flat();
  const distractors = allShapes.filter(s => !set.includes(s));
  const choiceSet = new Set([...answers]);
  while (choiceSet.size < Math.min(levelCfg.choices, allShapes.length)) {
    choiceSet.add(distractors[Math.floor(Math.random() * distractors.length)]);
  }
  const choices = [...choiceSet].sort(() => Math.random() - 0.5);

  return { display, full, indices, answers, choices };
}

export default function PatternGame() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [pattern, setPattern] = useState(() => generatePattern(LEVELS[0]));
  const [userAnswers, setUserAnswers] = useState([]); // filled in order
  const [feedback, setFeedback] = useState(null); // null | 'correct' | 'wrong'
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [streak, setStreak] = useState(0);

  const level = LEVELS[levelIdx];

  const newRound = useCallback((lIdx = levelIdx) => {
    setLevelIdx(lIdx);
    setPattern(generatePattern(LEVELS[lIdx]));
    setUserAnswers([]);
    setFeedback(null);
  }, [levelIdx]);

  const handleChoice = useCallback((shape) => {
    if (feedback) return;
    const next = [...userAnswers, shape];
    setUserAnswers(next);

    if (next.length === pattern.answers.length) {
      // Check all answers
      const allCorrect = next.every((ans, i) => ans === pattern.answers[i]);
      setFeedback(allCorrect ? 'correct' : 'wrong');
      setQuestionsAnswered(q => q + 1);
      if (allCorrect) {
        setScore(s => s + 10 + streak * 3);
        setStreak(s => s + 1);
      } else {
        setStreak(0);
      }
      setTimeout(() => {
        if (allCorrect && levelIdx < LEVELS.length - 1) {
          // Auto-advance on correct after a delay
        }
        newRound(levelIdx);
      }, 1000);
    }
  }, [feedback, userAnswers, pattern, streak, levelIdx, newRound]);

  const removeLastAnswer = () => {
    if (feedback || userAnswers.length === 0) return;
    setUserAnswers(a => a.slice(0, -1));
  };

  // Build display tiles
  let blanksFilled = 0;
  const displayTiles = pattern.display.map((val, i) => {
    if (val !== null) return { val, isBlank: false, idx: i };
    const filled = userAnswers[blanksFilled];
    blanksFilled++;
    return { val: filled || null, isBlank: true, idx: i };
  });

  const accuracy = questionsAnswered > 0
    ? Math.round((score / 10 / questionsAnswered) * 100) : 0;

  return (
    <div className="pattern-game">
      {/* Level Tabs */}
      <div className="pattern-level-bar">
        {LEVELS.map((l, i) => (
          <button
            key={l.name}
            className={`pattern-level-btn ${i === levelIdx ? 'active' : ''}`}
            onClick={() => newRound(i)}
            id={`pattern-level-${l.name.toLowerCase()}`}
          >
            {l.name}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="pattern-stats">
        <div className="pattern-stat">
          <span>{score}</span>
          <label>Score</label>
        </div>
        <div className="pattern-stat">
          <span>{questionsAnswered}</span>
          <label>Solved</label>
        </div>
        {streak >= 2 && (
          <div className="pattern-stat streak">
            <span><FaFire color="orange" className="me-1"/>{streak}</span>
            <label>Streak</label>
          </div>
        )}
        <div className="pattern-stat">
          <span>{accuracy}%</span>
          <label>Accuracy</label>
        </div>
      </div>

      <p className="pattern-instruction">
        <FaUserSecret className="me-2" size={20} /> What comes in the <strong>blank</strong> tiles? Pick the correct shapes in order!
      </p>

      {/* Sequence Display */}
      <div className={`pattern-sequence ${feedback || ''}`}>
        {displayTiles.map((tile, i) => (
          <div
            key={i}
            className={`pattern-tile ${tile.isBlank ? 'blank' : ''} ${tile.val ? 'filled' : ''}`}
            id={`pattern-tile-${i}`}
          >
            {tile.val ? renderShape(tile.val) : (tile.isBlank ? '?' : '')}
          </div>
        ))}
      </div>

      {/* Feedback */}
      {feedback && (
        <div className={`pattern-feedback ${feedback}`}>
          {feedback === 'correct' ? <><FaCheckCircle className="me-1"/> Correct! Well done!</> : <><FaTimesCircle className="me-1"/> The answer was: <span className="ms-2 d-inline-flex gap-2">{pattern.answers.map((ans, i) => <span key={i}>{renderShape(ans, 20)}</span>)}</span></>}
        </div>
      )}

      {/* Choice Buttons */}
      <div className="pattern-choices">
        {pattern.choices.map((shape, i) => (
          <button
            key={i}
            className={`pattern-choice-btn ${feedback ? 'disabled' : ''}`}
            onClick={() => handleChoice(shape)}
            disabled={!!feedback}
            id={`pattern-choice-${i}`}
          >
            {renderShape(shape, 28)}
          </button>
        ))}
      </div>

      {/* Undo & Skip */}
      <div className="pattern-actions">
        <button className="pattern-undo-btn" onClick={removeLastAnswer} disabled={!!feedback || userAnswers.length === 0} id="pattern-undo-btn">
          ↩ Undo
        </button>
        <button className="pattern-skip-btn" onClick={() => newRound()} id="pattern-skip-btn">
          ⏭ New Pattern
        </button>
      </div>
    </div>
  );
}
