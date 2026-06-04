'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './KidsMascot.css';

// ─── Speech messages keyed by interaction state ────────────────────────────────
const WAVE_MESSAGES = [
  "Hey there, future coder! 👋",
  "Great to see you here! 🌟",
  "You're going to love this! 😄",
  "Let's learn something epic! 🚀",
  "Click me again! I dare you 😏",
  "Coding is a superpower! ✨",
  "Every expert was once a beginner! 💪",
  "I believe in you, superstar! 🎯",
];

const EXCITED_MESSAGES = [
  "WOOHOO! You're incredible! 🎊🔥",
  "LET'S GOOO! Maximum energy! ⚡⭐",
  "This is SO EPIC! 🤩🎉",
  "DOUBLE-CLICK MASTER! 🏆",
];

const THINKING_MESSAGES = [
  "Hmm, thinking of the best code... 💭",
  "Processing at full power! 🧠⚙️",
  "Let me figure that out! 🤔",
  "Deep thought mode activated! 💡",
];

// ─── Particle burst factory ────────────────────────────────────────────────────
const PARTICLE_EMOJIS = ['🐼', '✨', '💻', '💡', '🎉', '🎊', '⚡', '🔥'];

function createParticles() {
  return Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const dist  = 60 + Math.random() * 32;
    return {
      id    : `km-p-${Date.now()}-${i}`,
      x     : Math.cos(angle) * dist,
      y     : Math.sin(angle) * dist,
      emoji : PARTICLE_EMOJIS[i],
      delay : `${(i * 0.04).toFixed(2)}s`,
    };
  });
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── Pandy the Panda SVG ──────────────────────────────────────────────────────
function PandaSVG() {
  return (
    <svg
      className="km-svg"
      viewBox="0 0 220 264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left Ear */}
      <g className="km-left-ear">
        <circle cx="62" cy="56" r="22" fill="#2C3E50" />
        <circle cx="62" cy="56" r="13" fill="#E2E8F0" />
      </g>

      {/* Right Ear */}
      <g className="km-right-ear">
        <circle cx="158" cy="56" r="22" fill="#2C3E50" />
        <circle cx="158" cy="56" r="13" fill="#E2E8F0" />
      </g>

      {/* Feet */}
      <g className="km-left-foot">
        <ellipse cx="76" cy="232" rx="18" ry="14" fill="#2C3E50" />
        <ellipse cx="76" cy="232" rx="12" ry="9" fill="#FFB7B2" opacity="0.6" />
        <circle cx="68" cy="218" r="3" fill="#FFB7B2" opacity="0.6" />
        <circle cx="76" cy="215" r="3" fill="#FFB7B2" opacity="0.6" />
        <circle cx="84" cy="218" r="3" fill="#FFB7B2" opacity="0.6" />
      </g>
      <g className="km-right-foot">
        <ellipse cx="144" cy="232" rx="18" ry="14" fill="#2C3E50" />
        <ellipse cx="144" cy="232" rx="12" ry="9" fill="#FFB7B2" opacity="0.6" />
        <circle cx="136" cy="218" r="3" fill="#FFB7B2" opacity="0.6" />
        <circle cx="144" cy="215" r="3" fill="#FFB7B2" opacity="0.6" />
        <circle cx="152" cy="218" r="3" fill="#FFB7B2" opacity="0.6" />
      </g>

      {/* Torso */}
      <ellipse cx="110" cy="188" rx="60" ry="52" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2.5" />
      <ellipse cx="110" cy="192" rx="42" ry="38" fill="#F8FAFC" />

      {/* Arms */}
      <g className="km-left-arm-group">
        <ellipse cx="50" cy="180" rx="15" ry="30" fill="#2C3E50" transform="rotate(20 50 180)" />
      </g>
      <g className="km-right-arm-group">
        <ellipse cx="170" cy="180" rx="15" ry="30" fill="#2C3E50" transform="rotate(-20 170 180)" />
      </g>

      {/* Head */}
      <g className="km-head-group">
        <ellipse cx="110" cy="100" rx="62" ry="54" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2.5" />

        {/* Blush cheeks */}
        <ellipse cx="62" cy="116" rx="9" ry="5" fill="#FFB7B2" opacity="0.5" />
        <ellipse cx="158" cy="116" rx="9" ry="5" fill="#FFB7B2" opacity="0.5" />

        {/* Eye Patches */}
        <ellipse cx="83" cy="98" rx="19" ry="23" fill="#2C3E50" transform="rotate(15 83 98)" />
        <ellipse cx="137" cy="98" rx="19" ry="23" fill="#2C3E50" transform="rotate(-15 137 98)" />

        {/* Sclera */}
        <ellipse cx="84" cy="96" rx="10" ry="12" fill="#FFFFFF" />
        <ellipse cx="136" cy="96" rx="10" ry="12" fill="#FFFFFF" />

        {/* Pupils with translation */}
        <g className="km-pupil" style={{ transform: 'translate(var(--eye-x, 0px), var(--eye-y, 0px))' }}>
          <circle cx="84" cy="96" r="6" fill="#1A1A2E" />
          <circle cx="86" cy="93.5" r="2.2" fill="#FFFFFF" />
          <circle cx="82" cy="98" r="0.9" fill="#FFFFFF" opacity="0.6" />
        </g>
        <g className="km-pupil" style={{ transform: 'translate(var(--eye-x, 0px), var(--eye-y, 0px))' }}>
          <circle cx="136" cy="96" r="6" fill="#1A1A2E" />
          <circle cx="138" cy="93.5" r="2.2" fill="#FFFFFF" />
          <circle cx="134" cy="98" r="0.9" fill="#FFFFFF" opacity="0.6" />
        </g>

        {/* Snout, Nose and Mouth */}
        <ellipse cx="110" cy="115" rx="14" ry="10" fill="#F8FAFC" />
        <ellipse cx="110" cy="110" rx="6" ry="3.5" fill="#2C3E50" />
        <path
          d="M106 115 Q110 118 110 115 Q110 118 114 115"
          stroke="#2C3E50"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Graduation Cap */}
      <g className="km-grad-cap">
        <rect x="86" y="44" width="48" height="7" rx="1.5" fill="#0f4c2a" />
        <polygon points="110,30 146,44 110,48 74,44" fill="#1B8A5A" />
        <rect x="138" y="44" width="2.5" height="13" fill="#0f4c2a" />
        <circle cx="139" cy="57" r="3.5" fill="#f5a623" />
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function KidsMascot({ courseName = 'this course' }) {
  const [mascotState, setMascotState] = useState('idle');
  const [bubble,      setBubble]      = useState({ text: '', visible: false });
  const [particles,   setParticles]   = useState([]);
  const [clicks,      setClicks]      = useState(0);

  const timerRef    = useRef(null);
  const dblRef      = useRef(null);
  const clickCountRef = useRef(0);
  const mascotRef   = useRef(null);

  const showBubble = useCallback((text, duration = 3200) => {
    setBubble({ text, visible: true });
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setBubble(b => ({ ...b, visible: false }));
    }, duration);
  }, []);

  const burst = useCallback(() => {
    const pts = createParticles();
    setParticles(pts);
    setTimeout(() => setParticles([]), 1000);
  }, []);

  const handleClick = useCallback(() => {
    clickCountRef.current += 1;
    setClicks(c => c + 1);
    const count = clickCountRef.current;

    // Double-click detection window
    clearTimeout(dblRef.current);
    dblRef.current = setTimeout(() => {
      if (clickCountRef.current >= 2) {
        // Double click → excited
        setMascotState('excited');
        burst();
        showBubble(pick(EXCITED_MESSAGES), 2800);
        setTimeout(() => setMascotState('idle'), 1900);
      } else {
        // Single click → wave or think alternately
        const nextState = count % 3 === 0 ? 'thinking' : 'waving';
        setMascotState(nextState);
        const msg = nextState === 'thinking'
          ? pick(THINKING_MESSAGES)
          : pick(WAVE_MESSAGES);
        showBubble(msg);
        setTimeout(() => setMascotState('idle'), 1600);
      }
      clickCountRef.current = 0;
    }, 320);
  }, [burst, showBubble]);

  // Idle greeting after mount
  useEffect(() => {
    const id = setTimeout(() => {
      showBubble(`Hi! I'm Pandy 🐼 Ready to explore ${courseName}?`, 4000);
    }, 1200);
    return () => {
      clearTimeout(id);
      clearTimeout(timerRef.current);
      clearTimeout(dblRef.current);
    };
  }, [courseName, showBubble]);

  // Eye tracking mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const maxDisplacement = 4.5;
      
      let shiftX = 0;
      let shiftY = 0;
      
      if (dist > 0) {
        const scale = Math.min(dist / 180, 1) * maxDisplacement;
        shiftX = (dx / dist) * scale;
        shiftY = (dy / dist) * scale;
      }
      
      mascotRef.current.style.setProperty('--eye-x', `${shiftX.toFixed(2)}px`);
      mascotRef.current.style.setProperty('--eye-y', `${shiftY.toFixed(2)}px`);
    };

    const handleMouseLeave = () => {
      if (!mascotRef.current) return;
      mascotRef.current.style.setProperty('--eye-x', '0px');
      mascotRef.current.style.setProperty('--eye-y', '0px');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`km-root km-s-${mascotState}`}>

      <div className="km-bg-elements" aria-hidden="true">
        {/* Himalayan Hills & Bamboo SVG Background */}
        <svg
          className="km-bg-svg"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cloud 1 */}
          <path d="M50 90 C50 75 70 70 80 80 C90 70 110 75 110 90 C120 90 125 100 115 105 C105 110 55 110 50 95 Z" fill="#FFFFFF" opacity="0.45" />
          {/* Cloud 2 */}
          <path d="M210 70 C210 58 226 54 234 62 C242 54 258 58 258 70 C266 70 270 78 262 82 L202 82 Z" fill="#FFFFFF" opacity="0.35" />

          {/* Far background hill */}
          <path d="M10 280 L100 170 L170 235 L260 130 L320 195 L320 300 L10 300 Z" fill="#E2E8F0" opacity="0.6" />
          
          {/* Mid background hill (Himalayan peak) */}
          <path d="M-20 300 L70 150 L150 240 L230 120 L310 230 L340 300 Z" fill="#CBD5E1" opacity="0.8" />
          
          {/* Snow caps for peaks */}
          <path d="M70 150 L53 178 L63 173 L70 180 L78 173 L87 178 Z" fill="#FFFFFF" />
          <path d="M230 120 L213 148 L223 143 L230 150 L238 143 L247 148 Z" fill="#FFFFFF" />
          
          {/* Bamboo Stalk 1 (Left) */}
          <path d="M15 300 Q20 200 10 100 Q11 100 17 100 Q27 200 22 300 Z" fill="#34D399" />
          <rect x="13" y="240" width="8" height="2" rx="0.5" fill="#059669" transform="rotate(2 13 240)" />
          <rect x="14" y="180" width="7" height="2" rx="0.5" fill="#059669" transform="rotate(2 14 180)" />
          <rect x="12" y="120" width="6" height="2" rx="0.5" fill="#059669" transform="rotate(2 12 120)" />
          
          {/* Bamboo Leaves (Left Stalk) */}
          <path d="M15 180 Q0 160 -5 150 Q7 165 15 176 Z" fill="#059669" />
          <path d="M15 180 Q30 165 40 160 Q27 172 15 178 Z" fill="#10B981" />
          <path d="M13 120 Q0 105 -5 95 Q5 110 13 116 Z" fill="#059669" />
          <path d="M13 120 Q27 110 35 105 Q23 115 13 118 Z" fill="#10B981" />

          {/* Bamboo Stalk 2 (Right, leaning in) */}
          <path d="M305 300 Q285 200 300 80 Q302 80 306 80 Q291 200 311 300 Z" fill="#34D399" />
          <rect x="295" y="230" width="8" height="2" rx="0.5" fill="#059669" transform="rotate(-6 295 230)" />
          <rect x="291" y="165" width="7" height="2" rx="0.5" fill="#059669" transform="rotate(-6 291 165)" />
          <rect x="295" y="105" width="6" height="2" rx="0.5" fill="#059669" transform="rotate(-6 295 105)" />

          {/* Bamboo Leaves (Right Stalk) */}
          <path d="M297 165 Q275 155 265 150 Q285 160 296 163 Z" fill="#059669" />
          <path d="M299 165 Q320 155 330 150 Q310 160 300 163 Z" fill="#10B981" />
          <path d="M296 105 Q275 95 265 90 Q285 100 295 103 Z" fill="#059669" />
          <path d="M297 105 Q315 95 325 90 L298 103 Z" fill="#10B981" />
        </svg>
      </div>

      {/* Speech bubble */}
      <div
        className={`km-bubble${bubble.visible ? ' km-bubble--on' : ''}`}
        role="status"
        aria-live="polite"
      >
        <div className="km-bubble-header">
          <span className="km-bubble-avatar">🐼</span>
          <span className="km-bubble-title">Pandy the Panda</span>
          <span className="km-bubble-badge">UC Guide</span>
        </div>
        <div className="km-bubble-body">{bubble.text}</div>
        <div className="km-bubble-footer">
          <span className="km-bubble-dot" />
          <span className="km-bubble-dot" />
          <span className="km-bubble-dot" />
        </div>
      </div>

      {/* Clickable mascot scene */}
      <button
        ref={mascotRef}
        className="km-scene"
        onClick={handleClick}
        aria-label="Click Pandy the Panda for a message"
        type="button"
      >
        {/* Particle burst */}
        {particles.map(p => (
          <span
            key={p.id}
            className="km-particle"
            style={{
              '--tx'  : `${p.x}px`,
              '--ty'  : `${p.y}px`,
              '--d'   : p.delay,
            }}
          >
            {p.emoji}
          </span>
        ))}

        <div className="km-mascot-image-box">
          <PandaSVG />
          <div className="km-platform" aria-hidden="true" />
        </div>
      </button>

      {/* Hint text */}
      <p className="km-hint">Click Pandy for a surprise! 🐼</p>
    </div>
  );
}