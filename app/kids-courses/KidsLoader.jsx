'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaLightbulb, FaTrophy } from 'react-icons/fa';
import Image from 'next/image';
import styles from './KidsLoader.module.css';

const mascotSrc = {
  python: '/images/home/kidanimation.webp',
  css: '/images/home/kidanimation1.webp',
  sql: '/images/home/kidanimation2.webp',
  rocket: '/images/home/kidanimation3.webp',
};

const seeded01 = (seed) => {
  // Deterministic 0..1 pseudo-random based on seed (no Math.random).
  const x = Math.sin(seed * 999.123) * 10000;
  return x - Math.floor(x);
};

const makeParticles = (count) =>
  Array.from({ length: count }, (_, i) => {
    const r1 = seeded01(i + 1);
    const r2 = seeded01((i + 1) * 7);
    const r3 = seeded01((i + 1) * 13);
    const hue = 90 + r1 * 60;
    const scale = 0.5 + r2 * 0.5;
    const x1 = (r3 * 200 - 100);
    const y1 = (seeded01((i + 1) * 17) * 200 - 100);
    const x2 = (seeded01((i + 1) * 19) * 200 - 100);
    const y2 = (seeded01((i + 1) * 23) * 200 - 100);
    const dur = 8 + seeded01((i + 1) * 29) * 4;
    return {
      hue,
      scale,
      x1,
      y1,
      x2,
      y2,
      dur,
      delay: i * 0.2,
    };
  });

const makeIcons = (count) =>
  Array.from({ length: count }, (_, i) => {
    const a = seeded01(i + 101);
    const b = seeded01(i + 202);
    const c = seeded01(i + 303);
    const d = seeded01(i + 404);
    const xA = a * 100 - 50;
    const yA = b * 100 - 50;
    const xB = c * 100 - 50;
    const yB = d * 100 - 50;
    const dur = 8 + seeded01(i + 505) * 4;
    return {
      xA,
      yA,
      xB,
      yB,
      dur,
      delay: i * 0.3,
      kind: i % 3,
    };
  });

// Python Mascot - slides in from left
const PythonMascot = ({ animationPhase }) => {
  const enterStart = 0;
  const enterEnd = 0.8;
  const mergeStart = 0.8;
  const mergeEnd = 1.8;
  const launchStart = 1.8;
  
  return (
    <motion.div
      className={styles.mascot}
      initial={{ x: -300, opacity: 0 }}
      animate={
        animationPhase === 'enter'
          ? { x: 0, opacity: 1, rotateZ: [-5, 5, -5] }
          : animationPhase === 'merge'
          ? { x: 0, y: -50, opacity: 0, scale: 0.5 }
          : animationPhase === 'launch'
          ? { opacity: 0, y: -200, scale: 0 }
          : {}
      }
      transition={{
        x: { duration: enterEnd - enterStart, delay: enterStart, ease: 'easeOut' },
        rotateZ: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
        y: animationPhase === 'merge' 
          ? { duration: mergeEnd - mergeStart, delay: mergeStart } 
          : { duration: 1.5, delay: launchStart },
        opacity: animationPhase === 'merge'
          ? { duration: 0.5, delay: mergeStart + 2.5 }
          : animationPhase === 'launch'
          ? { duration: 0.3, delay: launchStart + 1.5 }
          : { duration: 1, delay: 0 },
        scale: animationPhase === 'merge'
          ? { duration: 3, delay: mergeStart }
          : animationPhase === 'launch'
          ? { duration: 0.5, delay: launchStart + 1 }
          : {},
      }}
    >
      <div className={styles.mascotImage}>
        <Image
          src={mascotSrc.python}
          alt="Kids Space Mascot"
          className={styles.kidsMascotImg}
          width={120}
          height={140}
          priority
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

// CSS Mascot - enters from right
const CSSMascot = ({ animationPhase }) => {
  const enterStart = 0.2;
  const enterEnd = 1;
  const mergeStart = 0.8;
  const mergeEnd = 1.8;
  const launchStart = 1.8;
  
  return (
    <motion.div
      className={styles.mascot}
      initial={{ x: 300, opacity: 0 }}
      animate={
        animationPhase === 'enter'
          ? { x: 0, opacity: 1, rotateZ: [5, -5, 5] }
          : animationPhase === 'merge'
          ? { x: 0, y: -50, opacity: 0, scale: 0.5 }
          : animationPhase === 'launch'
          ? { opacity: 0, y: -200, scale: 0 }
          : {}
      }
      transition={{
        x: { duration: enterEnd - enterStart, delay: enterStart, ease: 'easeOut' },
        rotateZ: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        y: animationPhase === 'merge' 
          ? { duration: mergeEnd - mergeStart, delay: mergeStart } 
          : { duration: 1.5, delay: launchStart },
        opacity: animationPhase === 'merge'
          ? { duration: 0.5, delay: mergeStart + 2.5 }
          : animationPhase === 'launch'
          ? { duration: 0.3, delay: launchStart + 1.5 }
          : { duration: 1, delay: 0 },
        scale: animationPhase === 'merge'
          ? { duration: 3, delay: mergeStart }
          : animationPhase === 'launch'
          ? { duration: 0.5, delay: launchStart + 1 }
          : {},
      }}
    >
      <div className={styles.mascotImage}>
        <Image
          src={mascotSrc.css}
          alt="Kids Space Mascot"
          className={styles.kidsMascotImg}
          width={120}
          height={140}
          priority
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

// SQL Mascot - drops from top
const SQLMascot = ({ animationPhase }) => {
  const enterStart = 0.4;
  const enterEnd = 1.2;
  const mergeStart = 0.8;
  const mergeEnd = 1.8;
  const launchStart = 1.8;
  
  return (
    <motion.div
      className={styles.mascot}
      initial={{ y: -300, opacity: 0 }}
      animate={
        animationPhase === 'enter'
          ? { y: 0, opacity: 1, rotateZ: [-5, 5, -5] }
          : animationPhase === 'merge'
          ? { x: 0, y: -50, opacity: 0, scale: 0.5 }
          : animationPhase === 'launch'
          ? { opacity: 0, y: -200, scale: 0 }
          : {}
      }
      transition={{
        y: { duration: enterEnd - enterStart, delay: enterStart, ease: 'easeOut' },
        rotateZ: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
        opacity: animationPhase === 'merge'
          ? { duration: 0.5, delay: mergeStart + 2.5 }
          : animationPhase === 'launch'
          ? { duration: 0.3, delay: launchStart + 1.5 }
          : { duration: 1, delay: 0 },
        scale: animationPhase === 'merge'
          ? { duration: 3, delay: mergeStart }
          : animationPhase === 'launch'
          ? { duration: 0.5, delay: launchStart + 1 }
          : {},
      }}
    >
      <div className={styles.mascotImage}>
        <Image
          src={mascotSrc.sql}
          alt="Kids Space Mascot"
          className={styles.kidsMascotImg}
          width={120}
          height={140}
          priority
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

export default function KidsLoader({ isLoading = true }) {
  const [animationPhase, setAnimationPhase] = useState('enter');
  const subtexts = ['Learning Python', 'Styling with CSS', 'Managing Data with SQL'];
  const [subtextIndex, setSubtextIndex] = useState(0);
  const particles = React.useMemo(() => makeParticles(12), []);
  const icons = React.useMemo(() => makeIcons(8), []);

  useEffect(() => {
    // Timeline for 8-second animation:
    // 0-2s: Entrance
    // 2-5s: Merge to center
    // 5-7s: Rocket charge
    // 7-8s: Launch
    
    const phaseTimers = [
      setTimeout(() => setAnimationPhase('merge'), 800),
      setTimeout(() => setAnimationPhase('launch'), 1800),
      setTimeout(() => setAnimationPhase('complete'), 2600),
    ];

    const subtextTimer = setInterval(() => {
      setSubtextIndex(prev => (prev + 1) % subtexts.length);
    }, 800);

    return () => {
      phaseTimers.forEach(timer => clearTimeout(timer));
      clearInterval(subtextTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loaderContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Gradient Background */}
          <motion.div
            className={styles.gradientBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          {/* Glowing particles */}
          {particles.map((p, i) => (
            <motion.div
              key={`particle-${i}`}
              className={styles.glowingParticle}
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: p.scale,
              }}
              animate={{
                x: [p.x1, p.x2],
                y: [p.y1, p.y2],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                delay: p.delay,
              }}
              style={{
                position: 'absolute',
                zIndex: 1,
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: `hsl(${p.hue}, 100%, 50%)`,
              }}
            ></motion.div>
          ))}

          {/* Floating background icons */}
          {icons.map((ic, i) => (
            <motion.div
              key={`icon-${i}`}
              className={styles.floatingIcon}
              initial={{
                x: ic.xA,
                y: ic.yA,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: [ic.xA, ic.xB],
                y: [ic.yA, ic.yB],
                opacity: [0, 0.1, 0],
                scale: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: ic.dur,
                repeat: Infinity,
                delay: ic.delay,
              }}
              style={{
                position: 'absolute',
                zIndex: 1,
              }}
            >
              {ic.kind === 0 ? <FaBook size={40} /> : ic.kind === 1 ? <FaLightbulb size={40} /> : <FaTrophy size={40} />}
            </motion.div>
          ))}

          {/* Center content */}
          <motion.div
            className={styles.centerContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Mascot Characters Wrapper */}
            <motion.div
              className={styles.mascotsWrapper}
              animate={
                animationPhase === 'merge' 
                  ? { scale: 0.8 } 
                  : animationPhase === 'launch'
                  ? { scale: 0, y: -200 }
                  : {}
              }
              transition={{
                scale: animationPhase === 'merge' ? { duration: 1, delay: 0.8 } : { duration: 0.6, delay: 1.8 },
                y: animationPhase === 'launch' ? { duration: 0.4, delay: 2.1 } : {},
              }}
            >
              {/* Python Mascot */}
              <motion.div
                className={styles.mascotPosition1}
              >
                <PythonMascot animationPhase={animationPhase} />
              </motion.div>
              
              {/* Central Rocket - appears after merge */}
              <motion.div
                className={styles.rocketContainer}
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  animationPhase === 'merge' || animationPhase === 'launch' || animationPhase === 'complete'
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  scale: { duration: 0.3, delay: 1.6 },
                  opacity: { duration: 0.2, delay: 1.6 },
                }}
              >
                {/* Charging glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animationPhase === 'launch' ? { opacity: [0.3, 1, 0] } : { opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.8,
                  }}
                  className={styles.chargeGlow}
                ></motion.div>

                <motion.div
                  animate={animationPhase === 'launch' ? { y: -300, opacity: 0 } : { y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 2.1, ease: 'easeIn' }}
                >
                  <Image
                    src={mascotSrc.rocket}
                    alt="Rocket"
                    className={styles.kidsRocketImg}
                    width={80}
                    height={80}
                    priority
                    draggable={false}
                  />
                </motion.div>

                {/* Glow ring */}
                <motion.div
                  className={styles.glowRing}
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={
                    animationPhase === 'merge' 
                      ? { scale: [1, 1.3, 1], opacity: [0.6, 0.3, 0.6] }
                      : animationPhase === 'launch'
                      ? { scale: [1.3, 2, 0], opacity: [0.6, 0.2, 0] }
                      : {}
                  }
                  transition={{
                    duration: animationPhase === 'launch' ? 0.6 : 1.2,
                    repeat: animationPhase === 'merge' ? Infinity : 0,
                    delay: animationPhase === 'launch' ? 2.1 : 0,
                  }}
                ></motion.div>
              </motion.div>

              {/* CSS Mascot */}
              <motion.div
                className={styles.mascotPosition2}
              >
                <CSSMascot animationPhase={animationPhase} />
              </motion.div>
            </motion.div>

            {/* SQL Mascot - standalone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: animationPhase === 'enter' ? 1 : 0 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                position: 'absolute',
                top: '10%',
                zIndex: 8,
              }}
            >
              <SQLMascot animationPhase={animationPhase} />
            </motion.div>

            {/* Loading text */}
            <motion.div
              className={styles.loadingTextContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className={styles.mainText}>
                Loading Your <br /> Coding Journey
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </h2>
              <motion.p
                className={styles.subText}
                key={`subtext-${subtextIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {subtexts[subtextIndex]}
              </motion.p>
            </motion.div>

            {/* Progress indicator - shortened */}
            <motion.div
              className={styles.progressContainer}
              initial={{ opacity: 0 }}
              animate={animationPhase === 'enter' || animationPhase === 'merge' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: '0%' }}
                  animate={{ width: ['0%', '100%'] }}
                  transition={{
                    duration: 3,
                    ease: 'linear',
                  }}
                ></motion.div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
