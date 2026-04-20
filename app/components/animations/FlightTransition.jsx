'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlane, FaGraduationCap, FaTrophy, FaStar } from 'react-icons/fa';

const FlightTransition = ({ isAnimating }) => {
  const [destination, setDestination] = useState("UK");
  const destinations = ["UK", "USA", "CANADA", "GERMANY", "AUSTRALIA", "IRELAND", "NEWZEALAND", "SINGAPORE"];

  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setDestination(prev => {
        const idx = destinations.indexOf(prev);
        return destinations[(idx + 1) % destinations.length];
      });
    }, 375);
    return () => clearInterval(interval);
  }, [isAnimating, destinations]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="flight-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #08916a 0%, #0ca678 40%, #000000 100%)', 
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Background Success Patterns: Floating Graduation Caps & Stars */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`success-${i}`}
              initial={{ 
                x: i % 2 === 0 ? '-20vw' : '120vw', 
                y: `${Math.random() * 100}vh`, 
                opacity: 0, 
                rotate: 0 
              }}
              animate={{ 
                x: i % 2 === 0 ? '120vw' : '-20vw', 
                opacity: [0, 0.3, 0],
                rotate: 360
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                color: 'rgba(255,255,255,0.4)',
                zIndex: 0,
              }}
            >
              {i % 3 === 0 ? <FaGraduationCap size={40 + i * 5} /> : 
               i % 3 === 1 ? <FaTrophy size={30 + i * 5} /> : 
               <FaStar size={20 + i * 5} />}
            </motion.div>
          ))}

          {/* Speed Elements */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`speed-${i}`}
              initial={{ x: '110vw', opacity: 0 }}
              animate={{ x: '-110vw', opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.3, repeat: Infinity, delay: Math.random() }}
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                width: '400px',
                height: '1px',
                background: 'rgba(255,255,255,0.3)',
                zIndex: 1,
              }}
            />
          ))}

          {/* Centered Large Success Icon (Subtle Background) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.05, 0.1, 0.05],
                rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
                position: 'absolute',
                color: 'white',
                zIndex: 0,
            }}
          >
            <FaGraduationCap size={600} />
          </motion.div>

          {/* The Airplane: 3 SECONDS PATH */}
          <motion.div
            initial={{ 
              x: '-70vw', 
              y: '45vh', 
              rotate: -35,
              scale: 0.2 
            }}
            animate={{ 
              x: ['-70vw', '0vw', '70vw'],
              y: ['45vh', '0vh', '-45vh'],
              rotate: [-35, -15, -5],
              scale: [0.2, 4.5, 0.2], 
            }}
            transition={{ 
              duration: 3, 
              times: [0, 0.5, 1],
              ease: "circOut" 
            }}
            style={{
              zIndex: 10,
              color: '#ffffff',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
            }}
          >
            <FaPlane size={90} />
          </motion.div>

          {/* Boarding Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              position: 'absolute',
              bottom: '12%',
              zIndex: 20,
              color: 'white',
              fontFamily: 'system-ui, sans-serif',
              textAlign: 'center',
            }}
          >
            <div style={{ 
              background: 'rgba(0,0,0,0.2)',
              backdropFilter: 'blur(20px)',
              padding: '24px 48px',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}>
                <div style={{ fontSize: '26px', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ opacity: 0.5 }}>INDIA</span>
                    <motion.span 
                       animate={{ x: [0, 5, 0] }}
                       transition={{ repeat: Infinity, duration: 0.5 }}
                    >✈</motion.span>
                    <motion.span
                       key={destination}
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       style={{ color: '#0ca678', minWidth: '160px', textAlign: 'left' }}
                    >
                        {destination}
                    </motion.span>
                </div>
                <div style={{
                    marginTop: '8px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '5px',
                    color: '#fbbf24',
                    textTransform: 'uppercase'
                }}>
                    Your Career Takeoff
                </div>
            </div>
          </motion.div>

          {/* Grid lines */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `radial-gradient(circle at 50% 50%, transparent 80%, rgba(255,255,255,0.02) 100%)`,
            zIndex: 5,
          }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlightTransition;
