"use client";

import React, { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlane, FaGraduationCap, FaTrophy, FaStar } from "react-icons/fa";

const DESTINATIONS = [
  "UK",
  "USA",
  "CANADA",
  "GERMANY",
  "AUSTRALIA",
  "IRELAND",
  "NEWZEALAND",
  "SINGAPORE",
];

const PLANE_BASE = 90;

function fallbackOrigin() {
  if (typeof window === "undefined") {
    return { x: 200, y: 40, size: 22 };
  }
  return {
    x: Math.min(window.innerWidth * 0.72, window.innerWidth - 80),
    y: 36,
    size: 22,
  };
}

const FlightTransition = ({ isAnimating, origin: originProp = null }) => {
  const [destination, setDestination] = useState("UK");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isAnimating) return undefined;
    setDestination("UK");
    const interval = setInterval(() => {
      setDestination((prev) => {
        const idx = DESTINATIONS.indexOf(prev);
        return DESTINATIONS[(idx + 1) % DESTINATIONS.length];
      });
    }, 375);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const origin = originProp || (isAnimating ? fallbackOrigin() : null);

  const path = useMemo(() => {
    if (!origin || typeof window === "undefined") return null;
    const midX = window.innerWidth * 0.5;
    const midY = window.innerHeight * 0.38;
    const endX = window.innerWidth * 1.15;
    const endY = -window.innerHeight * 0.25;
    const startScale = origin.size / PLANE_BASE;
    return {
      x: [origin.x, midX, endX],
      y: [origin.y, midY, endY],
      scale: [startScale, 4.2, 0.25],
      /* FaPlane points right by default; -45° matches navbar asset angle */
      rotate: [-45, -28, -12],
    };
  }, [origin]);

  const overlay = (
    <AnimatePresence>
      {isAnimating && origin && path && (
        <motion.div
          className="flight-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, #08916a 0%, #0ca678 40%, #000000 100%)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`success-${i}`}
              initial={{
                x: i % 2 === 0 ? "-20vw" : "120vw",
                y: `${Math.random() * 100}vh`,
                opacity: 0,
                rotate: 0,
              }}
              animate={{
                x: i % 2 === 0 ? "120vw" : "-20vw",
                opacity: [0, 0.3, 0],
                rotate: 360,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: 0.35 + i * 0.2,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                color: "rgba(255,255,255,0.4)",
                zIndex: 0,
              }}
            >
              {i % 3 === 0 ? (
                <FaGraduationCap size={40 + i * 5} />
              ) : i % 3 === 1 ? (
                <FaTrophy size={30 + i * 5} />
              ) : (
                <FaStar size={20 + i * 5} />
              )}
            </motion.div>
          ))}

          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`speed-${i}`}
              initial={{ x: "110vw", opacity: 0 }}
              animate={{ x: "-110vw", opacity: [0, 0.4, 0] }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                delay: 0.45 + Math.random(),
              }}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                width: "400px",
                height: "1px",
                background: "rgba(255,255,255,0.3)",
                zIndex: 1,
              }}
            />
          ))}

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            style={{
              position: "absolute",
              color: "white",
              zIndex: 0,
            }}
          >
            <FaGraduationCap size={600} />
          </motion.div>

          {/* Continues from navbar plane position — one flight only */}
          <motion.div
            initial={{
              x: path.x[0],
              y: path.y[0],
              scale: path.scale[0],
              rotate: path.rotate[0],
              opacity: 1,
            }}
            animate={{
              x: path.x,
              y: path.y,
              scale: path.scale,
              rotate: path.rotate,
              opacity: [1, 1, 0.85],
            }}
            transition={{
              duration: 3,
              times: [0, 0.48, 1],
              ease: "circOut",
            }}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: PLANE_BASE,
              height: PLANE_BASE,
              marginLeft: -PLANE_BASE / 2,
              marginTop: -PLANE_BASE / 2,
              zIndex: 30,
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              filter: "drop-shadow(0 12px 28px rgba(0,0,0,0.35))",
              pointerEvents: "none",
            }}
          >
            <FaPlane size={PLANE_BASE} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            style={{
              position: "absolute",
              bottom: "12%",
              zIndex: 20,
              color: "white",
              fontFamily: "system-ui, sans-serif",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "rgba(0,0,0,0.2)",
                backdropFilter: "blur(20px)",
                padding: "24px 48px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: "900",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <span style={{ opacity: 0.5 }}>INDIA</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                >
                  ✈
                </motion.span>
                <motion.span
                  key={destination}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    color: "#0ca678",
                    minWidth: "160px",
                    textAlign: "left",
                  }}
                >
                  {destination}
                </motion.span>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "5px",
                  color: "#fbbf24",
                  textTransform: "uppercase",
                }}
              >
                Your Career Takeoff
              </div>
            </div>
          </motion.div>

          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage:
                "radial-gradient(circle at 50% 50%, transparent 80%, rgba(255,255,255,0.02) 100%)",
              zIndex: 5,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return mounted ? createPortal(overlay, document.body) : null;
};

export default FlightTransition;
