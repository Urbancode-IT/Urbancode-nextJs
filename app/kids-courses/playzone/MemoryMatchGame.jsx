'use client';
import React, { useState, useEffect, useCallback } from 'react';

const EMOJIS = ['🐼','🦁','🐸','🦊','🐧','🦄','🐙','🦋','🐢','🦈','🌺','⭐'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildCards(pairs) {
  const pool = EMOJIS.slice(0, pairs);
  const doubled = [...pool, ...pool].map((emoji, i) => ({ id: i, emoji, flipped: false, matched: false }));
  return shuffle(doubled);
}

const LEVELS = [
  { label: 'Easy',   pairs: 4, peekMs: 1500 },
  { label: 'Medium', pairs: 6, peekMs: 1200 },
  { label: 'Hard',   pairs: 9, peekMs: 900  },
];

export default function MemoryMatchGame() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [cards, setCards] = useState(() => buildCards(LEVELS[0].pairs));
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);
  const [peeking, setPeeking] = useState(true);
  const [won, setWon] = useState(false);
  const [bestMoves, setBestMoves] = useState({});

  const level = LEVELS[levelIdx];

  // Peek phase — show all cards for a moment
  useEffect(() => {
    setPeeking(true);
    const t = setTimeout(() => setPeeking(false), level.peekMs);
    return () => clearTimeout(t);
  }, [cards, level.peekMs]);

  const resetGame = useCallback((lIdx = levelIdx) => {
    setLevelIdx(lIdx);
    setCards(buildCards(LEVELS[lIdx].pairs));
    setSelected([]);
    setMoves(0);
    setWon(false);
  }, [levelIdx]);

  const handleFlip = (idx) => {
    if (peeking || won) return;
    if (cards[idx].matched || cards[idx].flipped) return;
    if (selected.length === 2) return;

    const next = cards.map((c, i) => i === idx ? { ...c, flipped: true } : c);
    const newSel = [...selected, idx];
    setCards(next);
    setSelected(newSel);

    if (newSel.length === 2) {
      setMoves(m => m + 1);
      const [a, b] = newSel;
      if (next[a].emoji === next[b].emoji) {
        // Match!
        setTimeout(() => {
          setCards(prev => prev.map((c, i) =>
            i === a || i === b ? { ...c, matched: true } : c
          ));
          setSelected([]);
          setWon(prev => {
            const allMatched = next.every((c, i) =>
              (i === a || i === b) ? true : c.matched
            );
            if (allMatched) {
              setBestMoves(bm => {
                const key = levelIdx;
                return { ...bm, [key]: Math.min(bm[key] ?? Infinity, moves + 1) };
              });
              return true;
            }
            return false;
          });
        }, 400);
      } else {
        // No match — flip back
        setTimeout(() => {
          setCards(prev => prev.map((c, i) =>
            i === a || i === b ? { ...c, flipped: false } : c
          ));
          setSelected([]);
        }, 800);
      }
    }
  };

  // Check win separately (avoids stale closure issue)
  useEffect(() => {
    if (moves > 0 && cards.every(c => c.matched)) {
      setWon(true);
      setBestMoves(bm => {
        const key = levelIdx;
        return { ...bm, [key]: Math.min(bm[key] ?? Infinity, moves) };
      });
    }
  }, [cards, moves, levelIdx]);

  const cols = level.pairs <= 4 ? 4 : level.pairs <= 6 ? 4 : 6;

  return (
    <div className="memory-game">
      {/* Level Selector */}
      <div className="memory-level-bar">
        {LEVELS.map((l, i) => (
          <button
            key={l.label}
            className={`memory-level-btn ${i === levelIdx ? 'active' : ''}`}
            onClick={() => resetGame(i)}
            id={`memory-level-${l.label.toLowerCase()}`}
          >
            {l.label}
            {bestMoves[i] && <span className="memory-best">Best: {bestMoves[i]}</span>}
          </button>
        ))}
        <button className="memory-reset-btn" onClick={() => resetGame()} id="memory-reset-btn">
          🔄 Restart
        </button>
      </div>

      {/* Stats */}
      <div className="memory-stats">
        <div className="memory-stat">
          <span className="memory-stat-val">{moves}</span>
          <span className="memory-stat-label">Moves</span>
        </div>
        <div className="memory-stat">
          <span className="memory-stat-val">{cards.filter(c => c.matched).length / 2} / {level.pairs}</span>
          <span className="memory-stat-label">Matched</span>
        </div>
        {peeking && (
          <div className="memory-peek-badge">👀 Memorize!</div>
        )}
      </div>

      {/* Board */}
      <div
        className="memory-board"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {cards.map((card, idx) => (
          <div
            key={card.id}
            className={`memory-card ${(card.flipped || card.matched || peeking) ? 'flipped' : ''} ${card.matched ? 'matched' : ''} ${selected.includes(idx) && !card.matched ? 'selected' : ''}`}
            onClick={() => handleFlip(idx)}
            id={`memory-card-${idx}`}
          >
            <div className="memory-card-inner">
              <div className="memory-card-front">?</div>
              <div className="memory-card-back">{card.emoji}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Win Banner */}
      {won && (
        <div className="memory-win-banner">
          <div className="memory-win-emoji">🎉</div>
          <h3>Amazing Memory!</h3>
          <p>You matched all pairs in <strong>{moves} moves</strong>!</p>
          {bestMoves[levelIdx] === moves && <div className="memory-new-best">🏆 New Best Score!</div>}
          <div className="memory-win-actions">
            {levelIdx < LEVELS.length - 1 && (
              <button className="memory-next-btn" onClick={() => resetGame(levelIdx + 1)} id="memory-next-level-btn">
                Next Level 🚀
              </button>
            )}
            <button className="memory-retry-btn" onClick={() => resetGame()} id="memory-play-again-btn">
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
