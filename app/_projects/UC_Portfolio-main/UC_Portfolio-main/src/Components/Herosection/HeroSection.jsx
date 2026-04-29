import { useEffect, useRef, useState } from "react";
import "./HeroSection.css";
import avatar1 from "../../assets/avatar1.jpeg";
import avatar3 from "../../assets/avatar3.jpeg";
import avatar4 from "../../assets/avatar4.jpeg";

const NAV_LINKS   = ["About", "Projects", "Achievements", "Courses", "Success"];
const TW_WORDS    = ["Master MERN Stack."];
const CUBE_LABELS = ["Innovate · 01", "Empower · 02", "Design · 03", "Code · 04"];
const AVATAR_IMAGES = [avatar1, avatar3, avatar4];
const ANGLES      = [0, 90, 180, 270];

export default function HeroSection() {

  const [twText,   setTwText]   = useState("");
  const [cubeIdx,  setCubeIdx]  = useState(0);

  const canvasRef    = useRef(null);
  const mouseRef     = useRef({ x: 0, y: 0 });
  const cubeWrapRef  = useRef(null);
  const cubeSceneRef = useRef(null);
  const cubeAutoRef  = useRef(null);
  const cubeIdxRef   = useRef(0);
  const ptsRef       = useRef([]);

  /* ── CURSOR ── */
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);


  /* ── PARTICLES ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const color = () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const c = isDark
        ? ["#00ff7f", "#39ff14", "#00ffc8", "#b44fff"]
        : ["#1a7a3c", "#2ecc71", "#27ae60", "#7c3aed"];
      return c[Math.floor(Math.random() * 4)];
    };

    ptsRef.current = Array.from({ length: 55 }, () => ({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height,
      vx:  (Math.random() - 0.5) * 0.28,
      vy:  (Math.random() - 0.5) * 0.28,
      r:   Math.random() * 1.7 + 0.3,
      o:   Math.random() * 0.22 + 0.06,
      col: color(),
    }));

    const mx = { x: canvas.width / 2, y: canvas.height / 2 };
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mx.x = e.clientX - r.left;
      mx.y = e.clientY - r.top;
    };
    window.addEventListener("mousemove", onMove);

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ptsRef.current.forEach(p => {
        const dx = p.x - mx.x, dy = p.y - mx.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          const f = (130 - d) / 130;
          p.vx += (dx / d) * f * 1.6;
          p.vy += (dy / d) * f * 1.6;
        }
        p.vx *= 0.93; p.vy *= 0.93;
        p.x  += p.vx;  p.y  += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = p.o;
        ctx.fillStyle   = p.col;
        ctx.shadowBlur  = 5;
        ctx.shadowColor = p.col;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      for (let i = 0; i < ptsRef.current.length; i++) {
        for (let j = i + 1; j < ptsRef.current.length; j++) {
          const dx = ptsRef.current[i].x - ptsRef.current[j].x;
          const dy = ptsRef.current[i].y - ptsRef.current[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 85) {
            ctx.globalAlpha = 0.08 * (1 - d / 85);
            ctx.strokeStyle = ptsRef.current[i].col;
            ctx.lineWidth   = 0.55;
            ctx.beginPath();
            ctx.moveTo(ptsRef.current[i].x, ptsRef.current[i].y);
            ctx.lineTo(ptsRef.current[j].x, ptsRef.current[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
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
    cubeAutoRef.current = setInterval(() => goFace(cubeIdxRef.current + 1), 3800);
    return () => {
      window.removeEventListener("resize", onResize);
      clearInterval(cubeAutoRef.current);
    };
  }, []);

  const onDotClick = (i) => {
    clearInterval(cubeAutoRef.current);
    goFace(i);
    cubeAutoRef.current = setInterval(() => goFace(cubeIdxRef.current + 1), 3800);
  };

  /* ── TYPEWRITER (Loops) ── */
  useEffect(() => {
    let charIdx = 0;
    let isDeleting = false;
    let timer;

    const tick = () => {
      const fullText = TW_WORDS[0];
      const speed = isDeleting ? 30 : 60; // Faster: 30ms deleting, 60ms typing

      if (!isDeleting && charIdx <= fullText.length) {
        setTwText(fullText.slice(0, charIdx++));
        timer = setTimeout(tick, speed + Math.random() * 20);
      } else if (isDeleting && charIdx >= 0) {
        setTwText(fullText.slice(0, charIdx--));
        timer = setTimeout(tick, speed);
      } else if (!isDeleting && charIdx > fullText.length) {
        // Pause at end
        timer = setTimeout(() => {
          isDeleting = true;
          tick();
        }, 1500); // Shorter pause: 1.5 seconds
      } else if (isDeleting && charIdx < 0) {
        // Pause before restart
        isDeleting = false;
        charIdx = 0;
        timer = setTimeout(tick, 600); // Shorter pause before restart: 0.6 seconds
      }
    };

    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, []);

  /* ══════════════════════════════
     RENDER
  ══════════════════════════════ */
  return (
    <div className="hero-root">



      {/* ════════ HERO ════════ */}
      <section className="hero-section">

        {/* Particles */}
        <canvas ref={canvasRef} className="particles-canvas" />

        {/* Background blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        {/* ── LEFT ── */}
        <div className="hero-left">


          {/* Headline */}
          <h1 className="hero-title">
            We Build <span className="pill-word">Skills</span>
          </h1>

          {/* Typewriter */}
          <div className="typewriter-row fw-bold fs25rem animated-title">
            <span className="tw-text">{twText}</span>
            <span className="tw-cursor" />
          </div>


          {/* Description */}
          <p className="hero-desc">
            Urbancode Edutech is your gateway to world-class IT training and 
            cutting-edge software solutions. Master the latest technologies and 
            launch your career with Chennai's most trusted partner.
          </p>

          {/* CTA buttons */}
          <div className="cta-row">
            <button className="btn-outline" onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}>View Projects</button>
          </div>

          {/* Avatars */}
          <div className="avatar-row">
            <div className="avatars">
              {AVATAR_IMAGES.map((img, i) => (
                <div key={i} className="avatar">
                  <img src={img} alt={`student-${i+1}`} />
                </div>
              ))}
              <div className="avatar plus">+</div>
            </div>
            <span className="avatar-text">
              <strong>800+ professionals</strong> trained &amp; placed
            </span>
          </div>
        </div>

        {/* ── RIGHT (3D Cube) ── */}
        <div className="hero-right">
          <div style={{ position: "relative" }}>

            {/* 3D Cube */}
            <div className="cube-scene" ref={cubeSceneRef}>


              <div className="cube-wrap" ref={cubeWrapRef}>
                {CUBE_LABELS.map((label, i) => (
                  <div key={i} className="cube-face">
                    <span className="face-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot navigation */}
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
        </div>



      </section>
    </div>
  );
}