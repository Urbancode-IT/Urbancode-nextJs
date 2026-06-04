'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';

const MODES = [
  { id: 'add',   label: '➕ Addition',       ops: ['+'],           range: [1, 20], timeLimit: 30 },
  { id: 'mix',   label: '🔀 Mixed',          ops: ['+', '-', '×'], range: [1, 12], timeLimit: 45 },
  { id: 'fast',  label: '⚡ Speed Round',    ops: ['+', '-', '×'], range: [2, 15], timeLimit: 20 },
];

function generateQuestion(ops, [min, max]) {
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a = Math.floor(Math.random() * (max - min + 1)) + min;
  let b = Math.floor(Math.random() * (max - min + 1)) + min;
  let answer;
  if (op === '+') { answer = a + b; }
  else if (op === '-') {
    if (a < b) [a, b] = [b, a];
    answer = a - b;
  } else {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    answer = a * b;
  }
  const display = op === '×' ? '×' : op;
  // Generate wrong choices
  const choices = new Set([answer]);
  while (choices.size < 4) {
    const offset = Math.floor(Math.random() * 10) - 5;
    if (offset !== 0) choices.add(answer + offset);
  }
  const shuffled = [...choices].sort(() => Math.random() - 0.5);
  return { a, b, op: display, answer, choices: shuffled };
}

export default function MathChallengeGame() {
  const [modeIdx, setModeIdx] = useState(0);
  const [gameState, setGameState] = useState('idle'); // idle | playing | ended
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong'
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [highScore, setHighScore] = useState({});
  const timerRef = useRef(null);

  const mode = MODES[modeIdx];

  const newQuestion = useCallback(() => {
    setQuestion(generateQuestion(mode.ops, mode.range));
    setFeedback(null);
  }, [mode]);

  const startGame = useCallback(() => {
    setScore(0);
    setStreak(0);
    setTotalAnswered(0);
    setTimeLeft(mode.timeLimit);
    setGameState('playing');
    setQuestion(generateQuestion(mode.ops, mode.range));
    setFeedback(null);
  }, [mode]);

  // Countdown timer
  useEffect(() => {
    if (gameState !== 'playing') return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setGameState('ended');
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [gameState]);

  const handleAnswer = useCallback((choice) => {
    if (gameState !== 'playing' || feedback) return;
    const correct = choice === question.answer;
    setFeedback(correct ? 'correct' : 'wrong');
    setTotalAnswered(t => t + 1);
    if (correct) {
      const points = 10 + streak * 2; // streak bonus
      setScore(s => s + points);
      setStreak(s => {
        const ns = s + 1;
        setBestStreak(b => Math.max(b, ns));
        return ns;
      });
    } else {
      setStreak(0);
    }
    setTimeout(() => {
      newQuestion();
    }, 400);
  }, [gameState, feedback, question, streak, newQuestion]);

  // Save high score on end
  useEffect(() => {
    if (gameState === 'ended') {
      setHighScore(hs => ({ ...hs, [modeIdx]: Math.max(hs[modeIdx] ?? 0, score) }));
    }
  }, [gameState, score, modeIdx]);

  const accuracy = totalAnswered > 0 ? Math.round(((score / 10) / totalAnswered) * 100) : 0;
  const timerPct = (timeLeft / mode.timeLimit) * 100;
  const timerColor = timerPct > 50 ? '#00b56f' : timerPct > 25 ? '#f59e0b' : '#ef4444';

  return (
    <div className="math-game">
      {/* Mode Selector */}
      <div className="math-mode-bar">
        {MODES.map((m, i) => (
          <button
            key={m.id}
            className={`math-mode-btn ${i === modeIdx ? 'active' : ''}`}
            onClick={() => { setModeIdx(i); setGameState('idle'); }}
            disabled={gameState === 'playing'}
            id={`math-mode-${m.id}`}
          >
            {m.label}
            {highScore[i] ? <span className="math-high-score">Best: {highScore[i]}</span> : null}
          </button>
        ))}
      </div>

      {gameState === 'idle' && (
        <div className="math-start-screen">
          <div className="math-start-emoji">🔢</div>
          <h3>Math Blitz</h3>
          <p>Answer as many questions as you can in <strong>{mode.timeLimit} seconds</strong>!<br />Streaks earn bonus points.</p>
          <button className="math-start-btn" onClick={startGame} id="math-start-btn">
            ▶ Start Game
          </button>
        </div>
      )}

      {gameState === 'playing' && question && (
        <div className="math-playing">
          {/* Timer Bar */}
          <div className="math-timer-bar">
            <div
              className="math-timer-fill"
              style={{ width: `${timerPct}%`, background: timerColor, transition: 'width 1s linear, background 0.3s' }}
            />
          </div>
          <div className="math-timer-label" style={{ color: timerColor }}>
            ⏱ {timeLeft}s
          </div>

          {/* Score & Streak */}
          <div className="math-stats-row">
            <div className="math-stat-pill math-score-pill">⭐ {score} pts</div>
            {streak >= 2 && <div className="math-stat-pill math-streak-pill">🔥 x{streak} Streak!</div>}
          </div>

          {/* Question */}
          <div className={`math-question-card ${feedback || ''}`}>
            <div className="math-equation">
              <span className="math-num">{question.a}</span>
              <span className="math-op">{question.op}</span>
              <span className="math-num">{question.b}</span>
              <span className="math-op">=</span>
              <span className="math-blank">?</span>
            </div>
          </div>

          {/* Choices */}
          <div className="math-choices">
            {question.choices.map((c, i) => (
              <button
                key={i}
                className={`math-choice-btn ${feedback && c === question.answer ? 'correct' : ''} ${feedback === 'wrong' && c !== question.answer ? 'wrong-option' : ''}`}
                onClick={() => handleAnswer(c)}
                id={`math-choice-${i}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {gameState === 'ended' && (
        <div className="math-end-screen">
          <div className="math-end-emoji">{score >= 80 ? '🏆' : score >= 40 ? '🥈' : '💪'}</div>
          <h3>Time's Up!</h3>
          <div className="math-end-stats">
            <div className="math-end-stat"><span>{score}</span><label>Total Points</label></div>
            <div className="math-end-stat"><span>{totalAnswered}</span><label>Answered</label></div>
            <div className="math-end-stat"><span>{bestStreak}</span><label>Best Streak</label></div>
            <div className="math-end-stat"><span>{accuracy}%</span><label>Accuracy</label></div>
          </div>
          {highScore[modeIdx] === score && score > 0 && (
            <div className="math-new-best">🏆 New High Score!</div>
          )}
          <div className="math-end-actions">
            <button className="math-start-btn" onClick={startGame} id="math-play-again-btn">
              🔄 Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
