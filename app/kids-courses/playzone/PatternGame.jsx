'use client';
import React, { useState, useCallback } from 'react';

/* ─── Pattern shapes: emoji-based sequences ─── */
const SHAPE_SETS = [
  ['🔴', '🔵', '🟡', '🟢', '🟣'],
  ['⭐', '🌙', '☀️', '⚡', '❄️'],
  ['🐶', '🐱', '🐸', '🐼', '🦊'],
  ['🍎', '🍊', '🍋', '🍇', '🍓'],
  ['🎵', '🎶', '🎸', '🥁', '🎺'],
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
            <span>🔥{streak}</span>
            <label>Streak</label>
          </div>
        )}
        <div className="pattern-stat">
          <span>{accuracy}%</span>
          <label>Accuracy</label>
        </div>
      </div>

      <p className="pattern-instruction">
        🕵️ What comes in the <strong>blank</strong> tiles? Pick the correct shapes in order!
      </p>

      {/* Sequence Display */}
      <div className={`pattern-sequence ${feedback || ''}`}>
        {displayTiles.map((tile, i) => (
          <div
            key={i}
            className={`pattern-tile ${tile.isBlank ? 'blank' : ''} ${tile.val ? 'filled' : ''}`}
            id={`pattern-tile-${i}`}
          >
            {tile.val || (tile.isBlank ? '?' : '')}
          </div>
        ))}
      </div>

      {/* Feedback */}
      {feedback && (
        <div className={`pattern-feedback ${feedback}`}>
          {feedback === 'correct' ? '✅ Correct! Well done!' : `❌ The answer was: ${pattern.answers.join(' ')}`}
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
            {shape}
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
