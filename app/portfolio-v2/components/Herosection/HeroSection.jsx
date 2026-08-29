import { useEffect, useRef } from "react";
import HeroProjectTwister from "./HeroProjectTwister";
import "./HeroSection.css";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const ptsRef = useRef([]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    ptsRef.current = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.5 + 0.4,
      o: Math.random() * 0.18 + 0.04,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ptsRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.globalAlpha = p.o;
        ctx.fillStyle = "#00b56f";
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

  return (
    <div className="hero-root">
      <section className="hero-section">
        <canvas ref={canvasRef} className="particles-canvas" />
        <div className="hero-mesh" aria-hidden="true" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <div className="hero-left">
          <h1 className="hero-title">
            We Build Products
            <br />
            Clients <span className="pf-gradient-text">Choose to Trust</span>
          </h1>

          <p className="hero-desc">
            High-performance web apps, mobile platforms, and AI solutions engineered
            for scale. Partner with us to ship faster, look sharper, and win more business.
          </p>

          <div className="cta-row">
            <button type="button" className="pf-btn-shine" onClick={() => scrollTo("contact")}>
              Start Your Project
            </button>
            <button type="button" className="pf-btn-outline" onClick={() => scrollTo("projects")}>
              Explore Our Work
            </button>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="hero-stat-num pf-gradient-text">20+</span>
              <span className="hero-stat-label">Projects Delivered</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num pf-gradient-text">6</span>
              <span className="hero-stat-label">Industries Served</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num pf-gradient-text">Global</span>
              <span className="hero-stat-label">Client Reach</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <HeroProjectTwister />
        </div>
      </section>
    </div>
  );
}
