'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaLightbulb, FaTrophy } from 'react-icons/fa';
import Image from 'next/image';
import styles from '@/styles/KidsLoader.module.css';

// Python Mascot - slides in from left
const PythonMascot = ({ animationPhase }) => {
  const enterStart = 0;
  const enterEnd = 2;
  const mergeStart = 2;
  const mergeEnd = 5;
  const launchStart = 5;
  
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
          src="/images/mascots/python_mascot.png"
          alt="Python Mascot"
          width={120}
          height={140}
          priority
        />
      </div>
    </motion.div>
  );
};

// CSS Mascot - enters from right
const CSSMascot = ({ animationPhase }) => {
  const enterStart = 0.5;
  const enterEnd = 2.5;
  const mergeStart = 2;
  const mergeEnd = 5;
  const launchStart = 5;
  
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
          src="/images/mascots/css_mascot.png"
          alt="CSS Mascot"
          width={120}
          height={140}
          priority
        />
      </div>
    </motion.div>
  );
};

// SQL Mascot - drops from top
const SQLMascot = ({ animationPhase }) => {
  const enterStart = 1;
  const enterEnd = 3;
  const mergeStart = 2;
  const mergeEnd = 5;
  const launchStart = 5;
  
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
          src="/images/mascots/sql_mascot.png"
          alt="SQL Mascot"
          width={120}
          height={140}
          priority
        />
      </div>
    </motion.div>
  );
};

export default function KidsLoader({ isLoading = true }) {
  if (!isLoading) return null;

  const [animationPhase, setAnimationPhase] = useState('enter');
  const subtexts = ['Learning Python', 'Styling with CSS', 'Managing Data with SQL'];
  const [subtextIndex, setSubtextIndex] = useState(0);

  useEffect(() => {
    // Timeline for 8-second animation:
    // 0-2s: Entrance
    // 2-5s: Merge to center
    // 5-7s: Rocket charge
    // 7-8s: Launch
    
    const phaseTimers = [
      setTimeout(() => setAnimationPhase('merge'), 2000),
      setTimeout(() => setAnimationPhase('launch'), 5000),
      setTimeout(() => setAnimationPhase('complete'), 7000),
    ];

    const subtextTimer = setInterval(() => {
      setSubtextIndex(prev => (prev + 1) % subtexts.length);
    }, 2000);

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
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className={styles.glowingParticle}
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                position: 'absolute',
                zIndex: 1,
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: `hsl(${90 + Math.random() * 60}, 100%, 50%)`,
              }}
            ></motion.div>
          ))}

          {/* Floating background icons */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`icon-${i}`}
              className={styles.floatingIcon}
              initial={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                opacity: [0, 0.1, 0],
                scale: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                position: 'absolute',
                zIndex: 1,
              }}
            >
              {i % 3 === 0 ? <FaBook size={40} /> : i % 3 === 1 ? <FaLightbulb size={40} /> : <FaTrophy size={40} />}
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
                scale: animationPhase === 'merge' ? { duration: 3, delay: 2 } : { duration: 1.5, delay: 5 },
                y: animationPhase === 'launch' ? { duration: 1, delay: 5.5 } : {},
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
                  scale: { duration: 0.8, delay: 4.5 },
                  opacity: { duration: 0.5, delay: 4.5 },
                }}
              >
                {/* Charging glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animationPhase === 'launch' ? { opacity: [0.3, 1, 0] } : { opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: 5,
                  }}
                  className={styles.chargeGlow}
                ></motion.div>

                <motion.div
                  animate={animationPhase === 'launch' ? { y: -300, opacity: 0 } : { y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 5.5, ease: 'easeIn' }}
                >
                  <Image
                    src="/images/mascots/rocket_mascot.png"
                    alt="Rocket"
                    width={80}
                    height={80}
                    priority
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
                    duration: animationPhase === 'launch' ? 1.5 : 3,
                    repeat: animationPhase === 'merge' ? Infinity : 0,
                    delay: animationPhase === 'launch' ? 5.5 : 0,
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
                    duration: 8,
                    ease: 'linear',
                  }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Fun learning tags */}
            <motion.div
              className={styles.tagsContainer}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <span className={styles.tag}>🐍 Python</span>
              <span className={styles.tag}>🎨 CSS</span>
              <span className={styles.tag}>🗄️ SQL</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
