import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaAward } from "react-icons/fa";
import "./HeroSection.css";

const CUBE_LABELS = ["Innovate · 01", "Empower · 02", "Design · 03", "Code · 04"];
const AVATAR_IMAGES = ["/portfolio/avatar1.jpeg", "/portfolio/avatar3.jpeg", "/portfolio/avatar4.jpeg"];
const ANGLES      = [0, 90, 180, 270];

export default function HeroSection() {

  const [cubeIdx,  setCubeIdx]  = useState(0);

  const canvasRef    = useRef(null);
  const cubeWrapRef  = useRef(null);
  const cubeSceneRef = useRef(null);
  const cubeAutoRef  = useRef(null);
  const cubeIdxRef   = useRef(0);
  const ptsRef       = useRef([]);

  /* ── PARTICLES ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const color = () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      return isDark ? "#00ff7f" : "#1a7a3c";
    };

    ptsRef.current = Array.from({ length: 40 }, () => ({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height,
      vx:  (Math.random() - 0.5) * 0.2,
      vy:  (Math.random() - 0.5) * 0.2,
      r:   Math.random() * 1.5 + 0.5,
      o:   Math.random() * 0.15 + 0.05,
      col: color(),
    }));

    let raf;
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ptsRef.current.forEach(p => {
        p.x  += p.vx;  p.y  += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = p.o;
        ctx.fillStyle   = p.col;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* ── 3D CUBE ── */
  const applyTransform = (idx) => {
    const wrap  = cubeWrapRef.current;
    const scene = cubeSceneRef.current;
    if (!wrap || !scene) return;
    const half = scene.offsetWidth / 2;
    wrap.style.transform = `translateZ(-${half}px) rotateY(-${ANGLES[idx]}deg)`;
    wrap.querySelectorAll(".cube-face").forEach((f, i) => {
      f.style.transform = `rotateY(${ANGLES[i]}deg) translateZ(${half}px)`;
    });
  };

  const goFace = (n) => {
    const idx = (n + 4) % 4;
    cubeIdxRef.current = idx;
    setCubeIdx(idx);
    applyTransform(idx);
  };

  useEffect(() => {
    applyTransform(0);
    const onResize = () => applyTransform(cubeIdxRef.current);
    window.addEventListener("resize", onResize);
    cubeAutoRef.current = setInterval(() => goFace(cubeIdxRef.current + 1), 4000);
    return () => {
      window.removeEventListener("resize", onResize);
      clearInterval(cubeAutoRef.current);
    };
  }, []);

  const onDotClick = (i) => {
    clearInterval(cubeAutoRef.current);
    goFace(i);
    cubeAutoRef.current = setInterval(() => goFace(cubeIdxRef.current + 1), 4000);
  };

  return (
    <div className="hero-root">
      <section className="hero-section">
        <canvas ref={canvasRef} className="particles-canvas" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        
        <div className="hero-left">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Engineer <span className="pill-word">Excellence</span>
          </motion.h1>

          <motion.h2 
            className="hero-subtitle-static"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Architecting the Future through <span className="text-green">Digital Innovation.</span>
          </motion.h2>

          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Urbancode is a premier digital agency specializing in high-performance
            web applications and custom software solutions. We help businesses
            scale through innovative technology and world-class design.
          </motion.p>

          <motion.div 
            className="cta-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn-primary highlight-btn" onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
            }}>View Projects →</button>
          </motion.div>

          <motion.div 
            className="avatar-row-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="avatars-hero">
              {AVATAR_IMAGES.map((img, i) => (
                <div key={i} className="avatar-hero">
                  <img src={img} alt={`client-${i+1}`} />
                </div>
              ))}
              <div className="avatar-hero plus">+</div>
            </div>
            <span className="avatar-text-hero">
              <strong className="text-1000">50+ Happy Clients</strong> worldwide
            </span>
          </motion.div>
        </div>

        <div className="hero-right">
          <div style={{ position: "relative" }}>
            <div className="hero-floating-badges d-none d-lg-block">
              <motion.div 
                className="hero-mini-badge badge-top"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaCheckCircle className="text-green" />
                <span>Global Solutions</span>
              </motion.div>
              <motion.div 
                className="hero-mini-badge badge-bottom"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaAward className="text-gold" />
                <span>100+ Projects</span>
              </motion.div>
            </div>

            <motion.div 
              className="cube-scene" 
              ref={cubeSceneRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="cube-wrap" ref={cubeWrapRef}>
                {CUBE_LABELS.map((label, i) => (
                  <div key={i} className="cube-face">
                    <span className="face-label">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="cube-dots">
            {[0, 1, 2, 3].map(i => (
              <button
                key={i}
                className={`cube-dot${cubeIdx === i ? " active" : ""}`}
                onClick={() => onDotClick(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}