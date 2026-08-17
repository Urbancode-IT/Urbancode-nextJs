'use client';
import React, { useState, useEffect } from 'react';
import { 
  FaBullseye, FaBrain, FaCalculator, FaPalette, 
  FaPuzzlePiece, FaRotate, FaRulerCombined, FaBolt, FaTrophy 
} from 'react-icons/fa6';
import VisualRotationGame from './VisualRotationGame';
import EnquiryFormModal from '../../components/common/EnquiryFormModal';
import { KIDS_COURSE_OPTIONS } from '@/lib/data/kidsCourses';
import MemoryMatchGame from './MemoryMatchGame';
import MathChallengeGame from './MathChallengeGame';
import PatternGame from './PatternGame';
import './playzone.css';

export default function PlayzonePage() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [levelsUnlocked, setLevelsUnlocked] = useState(false);
  const [activeGame, setActiveGame] = useState('visual');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const unlocked = localStorage.getItem('kidsPlayZoneUnlocked') === 'true';
      setLevelsUnlocked(unlocked);
    }
  }, []);

  const games = [
    { id: 'visual',  icon: <FaBullseye size={22} />, label: 'Visual IQ',         desc: 'Shape rotation & spatial reasoning' },
    { id: 'memory',  icon: <FaBrain size={22} />,    label: 'Memory Matrix',     desc: 'Visual memory & focus' },
    { id: 'math',    icon: <FaCalculator size={22} />, label: 'Math Blitz',      desc: 'Mental arithmetic & speed' },
    { id: 'pattern', icon: <FaPalette size={22} />,  label: 'Pattern Detective', desc: 'Pattern recognition & IQ' },
  ];

  return (
    <div className="playzone-page">

      {/* ── Hero Banner ── */}
      <div className="playzone-hero">
        <div className="playzone-hero-inner">
          <h1 className="playzone-hero-title playzone-hero-animate">
            Play Smart,<br />
            <span className="playzone-hero-highlight">Grow Smarter</span>
          </h1>
          <p className="playzone-hero-sub playzone-sub-animate">
            Hand-crafted IQ-boosting games that make learning feel like play.
            Each game is designed to sharpen real cognitive skills.
          </p>
          <div className="playzone-skill-pills">
            {[
              { icon: <FaPuzzlePiece />, text: 'Problem Solving' },
              { icon: <FaRotate />, text: 'Logical Thinking' },
              { icon: <FaRulerCombined />, text: 'Pattern Recognition' },
              { icon: <FaBolt />, text: 'Mental Agility' }
            ].map((s, i) => (
              <span key={s.text} className="playzone-skill-pill" style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
                <span className="me-2 d-inline-flex align-items-center">{s.icon}</span> {s.text}
              </span>
            ))}
          </div>
        </div>
        <div className="playzone-orb orb-1" />
        <div className="playzone-orb orb-2" />
        <div className="playzone-orb orb-3" />
        <div className="hero-lines-wrap" aria-hidden="true">
          <div className="hero-line hl-1" />
          <div className="hero-line hl-2" />
          <div className="hero-line hl-3" />
          <div className="hero-line hl-4" />
          <div className="hero-line hl-5" />
          <div className="hero-line hl-6" />
          <div className="hero-beam hb-1" />
          <div className="hero-beam hb-2" />
          <div className="hero-beam hb-3" />
        </div>
      </div>

      {/* ── Game Selector Tabs ── */}
      <div className="playzone-tabs-wrap">
        <div className="playzone-tabs">
          {games.map(g => (
            <button
              key={g.id}
              className={`playzone-tab ${activeGame === g.id ? 'active' : ''}`}
              onClick={() => setActiveGame(g.id)}
              id={`game-tab-${g.id}`}
            >
              <span className="tab-icon">{g.icon}</span>
              <span className="tab-label">{g.label}</span>
              <span className="tab-desc">{g.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Game Area ── */}
      <div className="playzone-game-area">

        {activeGame === 'visual' && (
          <div className="game-section">
            <div className="game-section-header">
              <h2><FaBullseye className="me-2" color="#ef4444" /> Visual IQ</h2>
              <p>Look at the shape and pick the correctly rotated version. Builds spatial reasoning and IQ-level visual thinking.</p>
            </div>
            <VisualRotationGame />
          </div>
        )}

        {activeGame === 'memory' && (
          <div className="game-section">
            <div className="game-section-header">
              <h2><FaBrain className="me-2" color="#a855f7" /> Memory Matrix</h2>
              <p>Memorize the pattern and reproduce it! Builds visual memory, attention span, and concentration.</p>
            </div>
            <MemoryMatchGame />
          </div>
        )}

        {activeGame === 'math' && (
          <div className="game-section">
            <div className="game-section-header">
              <h2><FaCalculator className="me-2" color="#3b82f6" /> Math Blitz</h2>
              <p>Solve rapid-fire math challenges. Sharpens mental arithmetic, speed, and numerical fluency.</p>
            </div>
            <MathChallengeGame />
          </div>
        )}

        {activeGame === 'pattern' && (
          <div className="game-section">
            <div className="game-section-header">
              <h2><FaPalette className="me-2" color="#f59e0b" /> Pattern Detective</h2>
              <p>Spot the pattern and pick the next tile. Develops abstract reasoning and IQ-level thinking.</p>
            </div>
            <PatternGame />
          </div>
        )}

      </div>

      {/* ── Parent Benefits Strip ── */}
      <div className="playzone-benefits">
        <div className="playzone-benefits-inner">
          <h3>Why These Games Work</h3>
          <div className="playzone-benefits-grid">
            {[
              { icon: <FaBrain size={32} color="#8b5cf6" />, title: 'Boosts IQ',         text: 'Research shows pattern & logic games increase fluid intelligence by up to 30%.' },
              { icon: <FaBullseye size={32} color="#ef4444" />, title: 'Builds Focus',       text: 'Memory tasks train sustained attention — a key predictor of academic success.' },
              { icon: <FaBolt size={32} color="#eab308" />, title: 'Mental Speed',       text: 'Visual IQ games improve processing speed and spatial fluency in just 10 min/day.' },
              { icon: <FaTrophy size={32} color="#3b82f6" />, title: 'Builds Confidence',  text: 'Level-based progression gives kids achievable wins that motivate further learning.' },
            ].map(b => (
              <div key={b.title} className="playzone-benefit-card">
                <div className="playzone-benefit-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="playzone-cta">
        <div className="playzone-cta-inner">
          <h3>Ready to take it further?</h3>
          <p>Enroll in our structured coding courses and watch your child build real tech skills.</p>
          <div className="playzone-cta-btns">
            <button
              type="button"
              className="playzone-cta-primary"
              id="playzone-book-demo-btn"
              onClick={() => setShowEnquiry(true)}
            >
              Book Free Demo Class
            </button>
            <a href="/kids-courses" className="playzone-cta-secondary">
              View All Courses →
            </a>
          </div>
        </div>
      </div>

      {showEnquiry && (
        <EnquiryFormModal
          isOpen={showEnquiry}
          onClose={() => setShowEnquiry(false)}
          isSelectMode={true}
          isKidsMode={true}
          useExternalCourses={false}
          extraOptions={KIDS_COURSE_OPTIONS}
          useCourseEnquiryApi={true}
          onSuccess={() => {
            if (typeof window !== 'undefined') {
              localStorage.setItem('kidsPlayZoneUnlocked', 'true');
              setLevelsUnlocked(true);
            }
          }}
        />
      )}

    </div>
  );
}