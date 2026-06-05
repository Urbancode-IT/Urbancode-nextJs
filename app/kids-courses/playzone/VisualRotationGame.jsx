'use client';
import React, { useState, useEffect } from 'react';

const SHAPES = [
  {
    id: 'arrow',
    label: 'Arrow',
    render: (color = '#6366f1') => (
      <svg viewBox="0 0 60 60" width="48" height="48">
        <polygon points="30,5 55,50 30,38 5,50" fill={color} />
      </svg>
    ),
  },
  {
    id: 'bolt',
    label: 'Lightning',
    render: (color = '#6366f1') => (
      <svg viewBox="0 0 60 60" width="48" height="48">
        <polygon points="35,5 15,32 28,32 22,58 45,28 32,28" fill={color} />
      </svg>
    ),
  },
  {
    id: 'flag',
    label: 'Flag',
    render: (color = '#6366f1') => (
      <svg viewBox="0 0 60 60" width="48" height="48">
        <rect x="10" y="5" width="6" height="50" fill={color} />
        <polygon points="16,5 50,18 16,31" fill={color} />
      </svg>
    ),
  },
  {
    id: 'house',
    label: 'House',
    render: (color = '#6366f1') => (
      <svg viewBox="0 0 60 60" width="48" height="48">
        <polygon points="30,5 55,28 5,28" fill={color} />
        <rect x="12" y="28" width="36" height="26" fill={color} />
        <rect x="24" y="38" width="12" height="16" fill="white" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'star',
    label: 'Star',
    render: (color = '#6366f1') => (
      <svg viewBox="0 0 60 60" width="48" height="48">
        <polygon points="30,4 36,22 56,22 40,34 46,52 30,40 14,52 20,34 4,22 24,22" fill={color} />
      </svg>
    ),
  },
];

function rotateStyle(deg) {
  return {
    transform: `rotate(${deg}deg)`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
}

const ROTATIONS = [0, 90, 180, 270];
const TOTAL_QUESTIONS = 8;
const COLORS = ['#6366f1','#f43f5e','#f59e0b','#10b981','#3b82f6','#8b5cf6','#ec4899','#14b8a6'];

function makeQuestion(qIndex) {
  const shape = SHAPES[qIndex % SHAPES.length];
  const baseRotation = ROTATIONS[Math.floor(Math.random() * ROTATIONS.length)];
  const correctRotation = ROTATIONS[Math.floor(Math.random() * ROTATIONS.length)];
  const wrongRotations = ROTATIONS.filter(r => r !== correctRotation);
  const shuffledWrong = wrongRotations.sort(() => Math.random() - 0.5).slice(0, 3);
  const allOptions = [...shuffledWrong, correctRotation].sort(() => Math.random() - 0.5);
  const correctIndex = allOptions.indexOf(correctRotation);

  return {
    shape,
    baseRotation,
    correctRotation,
    options: allOptions,
    correctIndex,
  };
}

function buildQuestions() {
  return Array.from({ length: TOTAL_QUESTIONS }, (_, i) => makeQuestion(i));
}

export default function VisualRotationGame() {
  const [questions, setQuestions] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState([]);
  const [finished, setFinished] = useState(false);
  const [shake, setShake] = useState(false);

  // ✅ Only runs on client — fixes hydration error
  useEffect(() => {
    setQuestions(buildQuestions());
    setMounted(true);
  }, []);

  // ✅ Loading state until client is ready
  if (!mounted || questions.length === 0) {
    return (
      <div style={{
        textAlign: 'center', padding: '60px 20px',
        color: '#94a3b8', fontSize: 16, fontWeight: 600,
      }}>
        🎯 Loading Visual IQ...
      </div>
    );
  }

  const q = questions[current];
  const color = COLORS[current % COLORS.length];

  const handleAnswer = (optionIndex) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    const isCorrect = optionIndex === q.correctIndex;
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    setAnswered(prev => [...prev, { questionIndex: current, selectedIndex: optionIndex, correct: isCorrect }]);
    setTimeout(() => {
      if (current + 1 >= TOTAL_QUESTIONS) {
        setFinished(true);
      } else {
        setCurrent(c => c + 1);
        setSelected(null);
      }
    }, 900);
  };

  const restart = () => {
    setQuestions(buildQuestions());
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setAnswered([]);
    setFinished(false);
    setShake(false);
  };

  const getIQLabel = (s) => {
    if (s >= 7) return { label: 'Genius! 🏆',          color: '#10b981' };
    if (s >= 5) return { label: 'Sharp Mind! 🌟',       color: '#6366f1' };
    if (s >= 3) return { label: 'Good Try! 💪',         color: '#f59e0b' };
    return         { label: 'Keep Practicing! 🎯',      color: '#f43f5e' };
  };

  // ── Finished Screen ────────────────────────────────────────
  if (finished) {
    const iq = getIQLabel(score);
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: 480, margin: '0 auto' }}>
        <div style={{ fontSize: 72, marginBottom: 12 }}>🧠</div>
        <div style={{ fontSize: 28, fontWeight: 900, color: iq.color, marginBottom: 8 }}>
          {iq.label}
        </div>
        <div style={{ fontSize: 18, color: '#475569', marginBottom: 24 }}>
          You got <strong>{score}</strong> out of <strong>{TOTAL_QUESTIONS}</strong> correct!
        </div>

        {/* Score bar */}
        <div style={{ background: '#f1f5f9', borderRadius: 20, height: 16, marginBottom: 28, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 20,
            width: `${(score / TOTAL_QUESTIONS) * 100}%`,
            background: `linear-gradient(90deg,${iq.color},#8b5cf6)`,
            transition: 'width 1s ease',
          }} />
        </div>

        {/* Answer review dots */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 28 }}>
          {answered.map((a, i) => (
            <div key={i} style={{
              width: 36, height: 36, borderRadius: '50%',
              background: a.correct ? '#d1fae5' : '#fee2e2',
              border: `2px solid ${a.correct ? '#10b981' : '#f43f5e'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16,
            }}>
              {a.correct ? '✓' : '✗'}
            </div>
          ))}
        </div>

        <button onClick={restart} style={{
          padding: '12px 36px', borderRadius: 24, border: 'none',
          background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
          color: '#fff', fontWeight: 800, fontSize: 16, cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
        }}>
          🔄 Play Again
        </button>
      </div>
    );
  }

  // ── Game Screen ────────────────────────────────────────────
  return (
    <div style={{ maxWidth: 540, margin: '0 auto', padding: '0 12px', fontFamily: 'inherit' }}>

      {/* Progress bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1, background: '#f1f5f9', borderRadius: 20, height: 10, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 20,
            width: `${(current / TOTAL_QUESTIONS) * 100}%`,
            background: 'linear-gradient(90deg,#6366f1,#8b5cf6)',
            transition: 'width 0.4s ease',
          }} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#6366f1', whiteSpace: 'nowrap' }}>
          {current + 1} / {TOTAL_QUESTIONS}
        </span>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#10b981', whiteSpace: 'nowrap' }}>
          ✅ {score}
        </span>
      </div>

      {/* Question card */}
      <div style={{
        background: 'linear-gradient(135deg,#f0f4ff,#e8eeff)',
        borderRadius: 20, padding: '20px 24px', marginBottom: 24,
        border: '1.5px solid #c7d2fe', textAlign: 'center',
      }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#6366f1', marginBottom: 4 }}>
          🎯 Question {current + 1}
        </div>
        <div style={{ fontSize: 17, fontWeight: 800, color: '#1e1b4b', marginBottom: 16 }}>
          Which option shows the shape rotated correctly?
        </div>

        {/* Original → Rotated display */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, marginBottom: 8 }}>Original</div>
            <div style={{
              background: '#fff', borderRadius: 16, padding: 16,
              boxShadow: '0 4px 16px rgba(99,102,241,0.15)',
              display: 'inline-flex', border: '2px solid #e0e7ff',
            }}>
              <div style={rotateStyle(q.baseRotation)}>
                {q.shape.render(color)}
              </div>
            </div>
          </div>

          <div style={{ fontSize: 28 }}>➡️</div>

          <div style={{ textAlign: 'center' }}>
            <div
              style={{ fontSize: 12, color: '#64748b', fontWeight: 600, marginBottom: 8 }}
              suppressHydrationWarning
            >
              Rotated {q.correctRotation}°
            </div>
            <div style={{
              background: '#fff', borderRadius: 16, padding: 16,
              boxShadow: '0 4px 16px rgba(99,102,241,0.15)',
              display: 'inline-flex', border: '2px solid #e0e7ff',
            }}>
              <div style={rotateStyle(q.baseRotation + q.correctRotation)}>
                {q.shape.render(color)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Answer options */}
      <div style={{ fontSize: 14, fontWeight: 700, color: '#475569', marginBottom: 12, textAlign: 'center' }}>
        👇 Pick the matching rotated shape:
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
        animation: shake ? 'shakeIt 0.4s ease' : 'none',
      }}>
        {q.options.map((rotation, i) => {
          const isCorrect = i === q.correctIndex;
          const isSelected = selected === i;
          const showResult = selected !== null;

          let bg = '#fff';
          let border = '2px solid #e2e8f0';
          let shadow = '0 2px 8px rgba(0,0,0,0.06)';

          if (showResult) {
            if (isCorrect) {
              bg = '#d1fae5'; border = '2px solid #10b981'; shadow = '0 0 0 4px #10b98133';
            } else if (isSelected) {
              bg = '#fee2e2'; border = '2px solid #f43f5e'; shadow = '0 0 0 4px #f43f5e33';
            }
          } else if (isSelected) {
            bg = '#ede9fe'; border = '2px solid #8b5cf6';
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={selected !== null}
              style={{
                background: bg, border, borderRadius: 16,
                padding: '20px 12px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 8,
                cursor: selected !== null ? 'default' : 'pointer',
                boxShadow: shadow,
                transition: 'all 0.25s',
                transform: isSelected && !showResult ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              <div style={rotateStyle(q.baseRotation + rotation)}>
                {q.shape.render(
                  showResult && isCorrect ? '#10b981'
                  : showResult && isSelected ? '#f43f5e'
                  : color
                )}
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8' }}>
                {rotation}° rotation
              </div>
              {showResult && isCorrect && <div style={{ fontSize: 18 }}>✅</div>}
              {showResult && isSelected && !isCorrect && <div style={{ fontSize: 18 }}>❌</div>}
            </button>
          );
        })}
      </div>

      <style>{`
        @keyframes shakeIt {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-8px); }
          40%      { transform: translateX(8px); }
          60%      { transform: translateX(-5px); }
          80%      { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
}