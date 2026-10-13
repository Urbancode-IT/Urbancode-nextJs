"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiPlus, FiMinus, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { submitProjectEnquiryForm } from "@/lib/api/api";
import { getLeadSource } from "@/app/utils/leadSource";
import "./NewPortfolioDesign.css";

function toInternationalPhone(raw) {
  const value = String(raw || "").trim().replace(/[\s()-]/g, "");
  if (!value) return "";
  if (value.startsWith("+")) return value;
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.startsWith("91") && digits.length === 12) return `+${digits}`;
  return `+${digits}`;
}

function contactBubblePath(w, h) {
  const r = 24;
  const top = Math.max(r * 2, h - 108);
  const neckTop = w * 0.62;
  const neckBottom = w * 0.4;
  return [
    `M ${r} 0 H ${w - r} Q ${w} 0 ${w} ${r}`,
    `V ${top - r} Q ${w} ${top} ${w - r} ${top}`,
    `H ${neckTop + 14} Q ${neckTop} ${top} ${neckTop - 10} ${top + 12}`,
    `L ${neckBottom + 10} ${h - 14} Q ${neckBottom} ${h} ${neckBottom - 14} ${h}`,
    `H ${r} Q 0 ${h} 0 ${h - r} V ${r} Q 0 0 ${r} 0 Z`,
  ].join(" ");
}

function useBannerFrame(ref) {
  const [frame, setFrame] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () => {
      const banner = el.closest(".np-contact-banner");
      const card = el.getBoundingClientRect();
      const box = banner ? banner.getBoundingClientRect() : card;
      setFrame({
        left: box.left - card.left,
        top: box.top - card.top,
        width: box.width,
        height: box.height,
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    const banner = el.closest(".np-contact-banner");
    if (banner) ro.observe(banner);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return frame;
}

function FrostedPhoto({ frame, className }) {
  if (!frame) return null;
  return (
    <img
      src="/portfolio/formimage.webp"
      alt=""
      className={className}
      style={{
        left: `${frame.left}px`,
        top: `${frame.top}px`,
        width: `${frame.width}px`,
        height: `${frame.height}px`,
      }}
    />
  );
}

function ContactBubbleCard({ children }) {
  const ref = useRef(null);
  const frame = useBannerFrame(ref);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const d = size.w ? contactBubblePath(size.w, size.h) : "";

  return (
    <div ref={ref} className="np-contact-left-card">
      {d && (
        <>
          <div className="np-contact-left-shape" style={{ clipPath: `path("${d}")` }}>
            <FrostedPhoto frame={frame} className="np-contact-left-blur" />
            <div className="np-contact-left-glass" />
          </div>
          <svg className="np-contact-left-outline" width={size.w} height={size.h} aria-hidden="true">
            <path d={d} fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.25" />
          </svg>
        </>
      )}
      <div className="np-contact-left-inner">{children}</div>
    </div>
  );
}

function ContactFormCard({ children }) {
  const ref = useRef(null);
  const frame = useBannerFrame(ref);
  return (
    <div ref={ref} className="np-contact-form-card">
      <FrostedPhoto frame={frame} className="np-contact-form-blur" />
      <div className="np-contact-form-glass" />
      {children}
    </div>
  );
}

/* Helper component for counting up numbers when scrolled into view */
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        } else {
          setHasAnimated(false); // Reset on exit so it re-animates on every scroll into view
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      setCount(0);
      return;
    }

    const numericEnd = parseInt(end.toString().replace(/[^0-9]/g, ""), 10);
    if (isNaN(numericEnd)) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      const current = Math.floor((1 - (1 - progress) * (1 - progress)) * numericEnd);
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasAnimated, end, duration]);

  const prefix = end.toString().startsWith("+") ? "+" : "";

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

/* ── Internal Applications data ─────────────────────────────────── */
const INTERNAL_APPS = [
  {
    id: 1,
    name: "Zen",
    desc: "A company website for an engineering consultancy working in oil, gas, and industry.",
    img: "/portfolio/projects-thumbnail/zen.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/zen.gif",
  },
  {
    id: 2,
    name: "Seyal",
    desc: "A company website for an IT consultancy, laid out so services are easy to understand.",
    img: "/portfolio/projects-thumbnail/seyal.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/seyal.gif",
  },
  {
    id: 3,
    name: "Progz",
    desc: "A company website for tax consulting and GST services.",
    img: "/portfolio/projects-thumbnail/progz.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/progzvideo.gif",
  },
  {
    id: 4,
    name: "Jobzenter",
    desc: "A product website for a platform that connects candidates with employers.",
    img: "/portfolio/projects-thumbnail/jobzenter.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/jobzenter.gif",
  },
  {
    id: 6,
    name: "Placetrack",
    desc: "A product website for a dashboard that keeps candidates and progress in one view.",
    img: "/portfolio/projects-thumbnail/placetrack.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/placetrack.gif",
  },
];

const HERO_CAROUSEL_IMAGES = [
  "dryflowers",
  "jobzenter",
  "kattraan",
  "lockzie",
  "petrokens",
  "synergy",
  "techtrends",
  "vminteriors",
  "wepinit",
].map((name) => `/portfolio/projects-thumbnail/${name}.webp`);

const TEAM = [
  { name: "Pushparaj", role: "Developer", img: "/portfolio/our-team/pusparajportfolio.webp" },
  { name: "Siva Shankar", role: "Developer", img: "/portfolio/our-team/sivashankarportfolio.webp" },
  { name: "Rohini", role: "Developer", img: "/portfolio/our-team/rohiniportfolio.webp" },
  { name: "Abinash", role: "Developer", img: "/portfolio/our-team/Abinashportfolio.webp" },
  { name: "Subiksha", role: "Developer", img: "/portfolio/our-team/subikshaportfolio.webp" },
  { name: "Suchithra", role: "Developer", img: "/portfolio/our-team/suchithraportfolio.webp" },
  { name: "Jaswanth", role: "Designer", img: "/portfolio/our-team/jashwanthportfolio.webp" },
];

const ABOUT_IMAGES = {
  teamMain: "/portfolio/other assets/aboutusleftimage.webp",
  collaboration: "/portfolio/other assets/whychooseusmain.webp",
  experienceCity: "/portfolio/other assets/aboutusrightimage.webp",
  avatars: [1, 2, 3, 4].map((n) => `/portfolio/other assets/aboutusclient${n}.webp`),
};

const CLIENT_LOGOS = [
  "/portfolio/client/client1.png",
  "/portfolio/client/client2.png",
  "/portfolio/client/client3.png",
  "/portfolio/client/client4.png",
  "/portfolio/client/client5.png",
  "/portfolio/client/client6.webp",
  "/portfolio/client/lockzie.png",
];

const SERVICES_LIST = [
  {
    num: "[01]",
    title: "Web Development",
    desc: "We build fast, secure, and scalable websites tailored to your business goals. From corporate websites to custom web applications, we deliver responsive solutions that provide an exceptional user experience across all devices.",
    images: [
      "/portfolio/services/web1.webp",
      "/portfolio/services/web2.webp",
    ]
  },
  {
    num: "[02]",
    title: "App Development",
    desc: "Build powerful, scalable, and user-friendly mobile applications tailored to your business needs. We develop high-performance Android and iOS apps that deliver seamless experiences and drive business growth.",
    images: [
      "/portfolio/services/app1.webp",
      "/portfolio/services/app2.webp",
    ]
  },
  {
    num: "[03]",
    title: "AI & Data Solutions",
    desc: "Intelligent dashboards, ML models, and AI features embedded into your business workflows.",
    images: [
      "/portfolio/services/aisolutions1.webp",
      "/portfolio/services/ai2.webp",
    ]
  },
];

const FAQ_ITEMS = [
  {
    q: "What is a portfolio project?",
    a: "A portfolio project is a website or digital product we designed and built for a client. Every card in Our Works is a real project, such as Petrokens, Techtrendz, Lockzie, and Craftlogically Me.",
  },
  {
    q: "What kinds of projects are in this portfolio?",
    a: "Company websites, product sites, and online stores across interiors, jewellery, IT, finance, and engineering. The work covers web development, app development, and AI and data solutions.",
  },
  {
    q: "What is the difference between Our Works and Internal Applications?",
    a: "Our Works is the client project gallery. Internal Applications highlights products we built ourselves, including Zen, Seyal, Progz, Jobzenter, and Placetrack.",
  },
  {
    q: "Can you build a project like one of these for my business?",
    a: "Yes. These projects show the kind of sites and products we deliver. Tell us about your business and we will design and build a custom website or app for you.",
  },
  {
    q: "How do I start a project with Urbancode?",
    a: "Use Get Started or Got Questions and send your name, email, phone, and a short note about what you need. Our team will get back to you to plan the next step.",
  },
];

const SELECTED_WORKS = [
  {
    id: 1,
    bannerTitle: "A website for an interior design company.",
    mockupImg: "/portfolio/projects-thumbnail/vminteriors.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/vminteriors.gif",
    tags: ["Web Development", "Interior"],
    cardTitle: "VM Plus Interior",
    cardDesc: "A website that presents interior projects and services in a calm, image-led layout.",
    bgTheme: "linear-gradient(165deg, #f6f1ec 0%, #e4d9d0 48%, #c9bbb0 100%)",
    link: "",
  },
  {
    id: 2,
    bannerTitle: "An online store for handcrafted jewellery.",
    tags: ["Web Dev", "E-Commerce"],
    mockupImg: "/portfolio/projects-thumbnail/craftlogicallly.png",
    gif: "/portfolio/portfolio-thumbnail-gif/craftlogically.gif",
    cardTitle: "Craftlogically Me",
    cardDesc: "A storefront where rings, earrings, and custom pieces are easy to browse and buy.",
    bgTheme: "linear-gradient(165deg, #fff1dc 0%, #f8d7a8 50%, #e8b56d 100%)",
    link: "https://www.craftlogicallyme.com/",
  },
  {
    id: 3,
    bannerTitle: "A website for a hiring platform.",
    tags: ["Web Dev", "Portfolio"],
    mockupImg: "/portfolio/projects-thumbnail/jobzenter.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/jobzenter.gif",
    cardTitle: "Jobzenter",
    cardDesc: "A product website that shows how candidates and employers connect.",
    bgTheme: "linear-gradient(165deg, #fff9e4 0%, #ffe7a3 52%, #f5cc62 100%)",
    link: "https://jobzenter.in/",
  },
  {
    id: 11,
    bannerTitle: "A website for an engineering consultancy.",
    tags: ["Web Dev", "CRM"],
    mockupImg: "/portfolio/projects-thumbnail/zen.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/zen.gif",
    cardTitle: "Zen",
    cardDesc: "A company website for oil, gas, and industrial engineering services.",
    bgTheme: "linear-gradient(165deg, #f4f7fa 0%, #d5dee8 52%, #b4c3d2 100%)",
    link: "",
  },
  {
    id: 9,
    bannerTitle: "A brand website for hair extensions.",
    tags: ["Web Dev", "Portfolio"],
    mockupImg: "/portfolio/projects-thumbnail/lockzie.webp",
    cardTitle: "Lockzie",
    cardDesc: "A brand site where customers can browse styles and send an enquiry.",
    bgTheme: "linear-gradient(165deg, #f5f7f9 0%, #e0e6ec 52%, #c5d0da 100%)",
    link: "",
  },
  {
    id: 4,
    bannerTitle: "A website for an oil and gas company.",
    tags: ["Web Dev", "Portfolio"],
    mockupImg: "/portfolio/projects-thumbnail/petrokens.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/petrokens.gif",
    cardTitle: "Petrokens",
    cardDesc: "A company website that explains engineering services in a clear, professional layout.",
    bgTheme: "linear-gradient(165deg, #eef6ff 0%, #c9e0fb 50%, #8fbfef 100%)",
    link: "https://www.petrokens.com/",
  },
  {
    id: 12,
    bannerTitle: "A website for an IT consultancy.",
    tags: ["Web Dev", "ERP"],
    mockupImg: "/portfolio/projects-thumbnail/seyal.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/seyal.gif",
    cardTitle: "Seyal",
    cardDesc: "A service website that explains what the consultancy offers and how to get in touch.",
    bgTheme: "linear-gradient(165deg, #edfbf4 0%, #c4f0d8 50%, #86d7ae 100%)",
    link: "",
  },
  {
    id: 5,
    bannerTitle: "A website for an IT services company.",
    tags: ["Web Dev", "Portfolio"],
    mockupImg: "/portfolio/projects-thumbnail/techtrends.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/techtrendz.gif",
    cardTitle: "Techtrendz",
    cardDesc: "A company website that presents IT services and makes it easy to enquire.",
    bgTheme: "linear-gradient(165deg, #f8f2ff 0%, #e6d4fb 50%, #c9a6ee 100%)",
    link: "https://tech-trendz.be/",
  },
  {
    id: 6,
    bannerTitle: "A website for a finance and tax firm.",
    tags: ["Web Dev", "Portfolio"],
    mockupImg: "/portfolio/projects-thumbnail/synergy.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/synergy.gif",
    cardTitle: "Synergy",
    cardDesc: "A company website that explains tax and finance services without the clutter.",
    bgTheme: "linear-gradient(165deg, #f2fbff 0%, #d0f0fb 50%, #8fd6f0 100%)",
    link: "https://www.synergytaxed.com/",
  },
  {
    id: 14,
    bannerTitle: "A product website for a tracking dashboard.",
    tags: ["Web Dev", "CRM"],
    mockupImg: "/portfolio/projects-thumbnail/placetrack.webp",
    gif: "/portfolio/portfolio-thumbnail-gif/placetrack.gif",
    cardTitle: "Placetrack",
    cardDesc: "A product site that shows how candidates and progress stay in one view.",
    bgTheme: "linear-gradient(165deg, #fdf4ff 0%, #f0d4fb 50%, #dba6ef 100%)",
    link: "",
  },
  {
    id: 7,
    bannerTitle: "An online store for floral arrangements.",
    tags: ["Web Dev", "E-Commerce"],
    mockupImg: "/portfolio/projects-thumbnail/dryflowers.webp",
    cardTitle: "Dry Flowers",
    cardDesc: "A shop website for fresh and dried flowers, built for browsing and orders.",
    bgTheme: "linear-gradient(165deg, #fff2f8 0%, #fbcfe3 50%, #f3a4c6 100%)",
    link: "",
  },
  {
    id: 8,
    bannerTitle: "A website for an online learning platform.",
    tags: ["Web Dev", "LMS"],
    mockupImg: "/portfolio/projects-thumbnail/kattraan.webp",
    cardTitle: "Kattraan",
    cardDesc: "A product website where people can find a program and continue through it.",
    bgTheme: "linear-gradient(165deg, #f7fee8 0%, #d9f99d 50%, #b4e056 100%)",
    link: "",
  },
  {
    id: 10,
    bannerTitle: "A corporate website.",
    tags: ["Web Dev", "E-Commerce"],
    mockupImg: "/portfolio/projects-thumbnail/wepinit.webp",
    cardTitle: "Wepenit",
    cardDesc: "A company website that presents services and gives visitors a clear next step.",
    bgTheme: "linear-gradient(165deg, #fff8ea 0%, #ffe4ad 52%, #f0c15c 100%)",
    link: "",
  },
];

const TESTIMONIALS = [
  {
    name: "Petrokens",
    role: "Oil & Gas Engineering",
    logo: "/portfolio/client/client1.png",
    text: "Our engineering work now has a clear, professional home online that clients can trust at a glance.",
  },
  {
    name: "Synergy",
    role: "Finance & Tax",
    logo: "/portfolio/client/client3.png",
    text: "Clients find our tax and finance services quickly, and the site explains what we do without the clutter.",
  },
  {
    name: "Techtrendz",
    role: "IT Services",
    logo: "/portfolio/client/client2.png",
    text: "The website presents our services clearly, and visitors know exactly how to reach us.",
  },
  {
    name: "Jobzenter",
    role: "Hiring Platform",
    logo: "/portfolio/client/client5.png",
    text: "The website explains the platform simply, so candidates and employers know what to do next.",
  },
  {
    name: "Lockzie",
    role: "Hair Extensions",
    logo: "/portfolio/client/lockzie.png",
    text: "Our collections look premium online, and customers can browse styles and book without friction.",
  },
];

export default function NewPortfolioDesign() {
  const [openService, setOpenService] = useState(-1);
  const [openFaq, setOpenFaq] = useState(-1);
  const [showAllWorks, setShowAllWorks] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", text: "" });
  const [formSending, setFormSending] = useState(false);
  const testiCount = TESTIMONIALS.length;
  const [testiIndex, setTestiIndex] = useState(testiCount);
  const [testiJumping, setTestiJumping] = useState(false);
  const [testiPaused, setTestiPaused] = useState(false);
  const teamCount = TEAM.length;
  const [teamIndex, setTeamIndex] = useState(teamCount);
  const [teamJumping, setTeamJumping] = useState(false);
  const [teamPaused, setTeamPaused] = useState(false);
  const [hoverKey, setHoverKey] = useState(null); // "work-<id>" / "app-<id>" currently hovered (shows its GIF)
  const [activeAppIndex, setActiveAppIndex] = useState(INTERNAL_APPS.length);

  const [appsInView, setAppsInView] = useState(false);
  const internalSectionRef = useRef(null);
  const appCount = INTERNAL_APPS.length;
  /* three copies of the list so the row can slide forever in either direction */
  const loopedApps = [...INTERNAL_APPS, ...INTERNAL_APPS, ...INTERNAL_APPS];
  const [appJumping, setAppJumping] = useState(false);
  const appBusyRef = useRef(false);
  const appTimerRef = useRef(null);

  const goToApp = (target) => {
    if (appBusyRef.current) return;
    appBusyRef.current = true;
    setActiveAppIndex(target);
    clearTimeout(appTimerRef.current);
    appTimerRef.current = setTimeout(() => {
      /* after the slide ends, silently jump back into the middle copy */
      const normalized = ((target % appCount) + appCount) % appCount + appCount;
      if (normalized !== target) {
        setAppJumping(true);
        setActiveAppIndex(normalized);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setAppJumping(false);
            appBusyRef.current = false;
          })
        );
      } else {
        appBusyRef.current = false;
      }
    }, 840);
  };

  useEffect(() => () => clearTimeout(appTimerRef.current), []);

  useEffect(() => {
    const el = internalSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAppsInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (testiPaused) return undefined;
    const id = setInterval(() => setTestiIndex((current) => current + 1), 4200);
    return () => clearInterval(id);
  }, [testiPaused]);

  useEffect(() => {
    if (testiIndex >= testiCount && testiIndex < testiCount * 2) return undefined;
    const timer = setTimeout(() => {
      const normalized = ((testiIndex % testiCount) + testiCount) % testiCount + testiCount;
      setTestiJumping(true);
      setTestiIndex(normalized);
      requestAnimationFrame(() => requestAnimationFrame(() => setTestiJumping(false)));
    }, 680);
    return () => clearTimeout(timer);
  }, [testiIndex, testiCount]);

  useEffect(() => {
    if (teamPaused) return undefined;
    const id = setInterval(() => setTeamIndex((current) => current + 1), 4200);
    return () => clearInterval(id);
  }, [teamPaused]);

  useEffect(() => {
    if (teamIndex >= teamCount && teamIndex < teamCount * 2) return undefined;
    const timer = setTimeout(() => {
      const normalized = ((teamIndex % teamCount) + teamCount) % teamCount + teamCount;
      setTeamJumping(true);
      setTeamIndex(normalized);
      requestAnimationFrame(() => requestAnimationFrame(() => setTeamJumping(false)));
    }, 680);
    return () => clearTimeout(timer);
  }, [teamIndex, teamCount]);

  const handlePortfolioSubmit = async (e) => {
    e.preventDefault();
    if (formSending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setFormSending(true);
    setFormStatus({ type: "", text: "" });
    const response = await submitProjectEnquiryForm({
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: toInternationalPhone(data.get("phone")),
      subject: "Project Lead",
      message: String(data.get("message") || "").trim() || "No message provided",
      ...getLeadSource("Portfolio page — Get in touch form", "Portfolio page — Submit"),
    });
    setFormSending(false);
    if (response.success) {
      form.reset();
      setFormStatus({ type: "ok", text: "Sent. We'll get back to you shortly." });
    } else {
      setFormStatus({ type: "err", text: response.message || "Could not send. Please try again." });
    }
  };

  const scrollToSection = (id) => (e) => {
    e?.preventDefault?.();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goToWorks = scrollToSection("our-works");
  const goToForm = scrollToSection("contact-form");
  const goToServices = scrollToSection("services");

  // On phones these rows are native scroll-snap lists, so arrows scroll one whole card.
  const isPhone = () => typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  const swipeRow = (root, selector, dir) => {
    const el = root?.querySelector(selector);
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth + 14), behavior: "smooth" });
  };
  const swipeFromButton = (e, selector, dir) =>
    swipeRow(e.currentTarget.closest("section"), selector, dir);

  const handlePrev = () => {
    if (isPhone()) return swipeRow(internalSectionRef.current, ".np-internal-stage", -1);
    goToApp(activeAppIndex - 1);
  };
  const handleNext = () => {
    if (isPhone()) return swipeRow(internalSectionRef.current, ".np-internal-stage", 1);
    goToApp(activeAppIndex + 1);
  };

  return (
    <div className="new-portfolio-root">
      {/* Hero Section */}
      <section className="np-hero-section">
        <div className="np-container">
          <h1 className="np-hero-title">
            <span className="np-hero-line">Designing websites that</span>
            <span className="np-hero-line">help businesses <span className="np-text-green">grow.</span></span>
          </h1>

          <p className="np-hero-subtitle">
            A selection of websites and products we designed and built for clients, <br />
            from brand sites and online stores to web apps.
          </p>

          <div className="np-hero-buttons">
            <button type="button" className="np-btn-dark" onClick={goToForm}>
              Get Started
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button type="button" className="np-btn-outline" onClick={goToWorks}>
              View Work
            </button>
          </div>

          {/* Horizontal Image Carousel Bar */}
          <div className="np-hero-carousel-wrap">
            <div className="np-hero-carousel-track">
              {HERO_CAROUSEL_IMAGES.map((img, idx) => (
                <div key={idx} className="np-hero-card">
                  <img src={img} alt={`Work sample ${idx + 1}`} loading="lazy" />
                </div>
              ))}
              {HERO_CAROUSEL_IMAGES.map((img, idx) => (
                <div key={`dup-${idx}`} className="np-hero-card">
                  <img src={img} alt={`Work sample ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Client Ticker */}
      <section className="np-trusted-section">
        <p className="np-trusted-label">TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</p>
          <div className="np-ticker-wrap">
          <div className="np-ticker-track">
            {[0, 1].map((copy) => (
              <div className="np-ticker-group" key={copy}>
                {Array.from({ length: 4 }).map((_, repeat) =>
                  CLIENT_LOGOS.map((logo, logoIndex) => (
                    <span key={`${copy}-${repeat}-${logoIndex}`} className="np-ticker-item"><img src={logo} alt="Client logo" loading="lazy" /></span>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="np-about-section">
        <div className="np-container">
          <div className="np-badge-wrap">
            <span className="np-pill-badge">About us</span>
          </div>

          <h2 className="np-about-headline">
            <strong className="np-text-bold">We design and build websites and digital products for businesses.</strong>{" "}
            <span className="np-text-muted">
              Each project is planned and built so visitors understand the business and know what to do next.
            </span>
          </h2>

          {/* About Bento Grid */}
          <div className="np-about-bento">
            <div className="np-bento-card np-bento-img-card">
              <img src={ABOUT_IMAGES.teamMain} alt="Our team" className="np-bento-bg" />
              <div className="np-bento-icon-top">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <div className="np-bento-bottom-glass">
                <h3><AnimatedCounter end="50" suffix="+" /></h3>
                <p>Delivering impactful digital solutions across diverse industries with quality, creativity, and precision.</p>
              </div>
            </div>

            <div className="np-bento-card np-bento-light-card">
              <span className="np-bento-sublabel">Happy Clients</span>
              <h3 className="np-bento-big-stat"><AnimatedCounter end="50" suffix="+" /></h3>
              <div className="np-avatar-stack">
                {ABOUT_IMAGES.avatars.map((av, i) => (
                  <img key={i} src={av} alt={`Client avatar ${i}`} className="np-avatar-img" />
                ))}
              </div>
              <p className="np-bento-foot-text">
                Trusted by 50+ clients who chose us to turn their ideas into impactful digital experiences.
              </p>
            </div>

            <div className="np-bento-col-stack">
              <div className="np-bento-card np-bento-city-card">
                <img src={ABOUT_IMAGES.experienceCity} alt="City experience" className="np-bento-bg" />
                <div className="np-bento-overlay-text">
                  <span className="np-micro-label">Experience</span>
                  <h3 className="np-city-stat"><AnimatedCounter end="3" suffix="+ Years" /></h3>
                  <p>Delivering thoughtful, user-focused digital experiences through design and creativity.</p>
                </div>
              </div>

              <div className="np-bento-card np-bento-dark-stat">
                <div className="np-dark-stat-inner">
                  <span>Client Satisfaction</span>
                  <strong><AnimatedCounter end="99" suffix="%" /></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="np-why-section">
        <div className="np-container">
          <div className="np-badge-wrap">
            <span className="np-pill-badge">Why choose us</span>
          </div>

          <h2 className="np-why-headline">
            We create high-performing websites and mobile apps that combine intuitive design with reliable technology, helping brands launch faster and grow with confidence.
          </h2>

          <div className="np-why-stage">
            <svg className="np-why-arc" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="npWhyArcFade" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="#d4d4d4" stopOpacity="0" />
                  <stop offset="0.2" stopColor="#d4d4d4" stopOpacity="1" />
                  <stop offset="0.8" stopColor="#d4d4d4" stopOpacity="1" />
                  <stop offset="1" stopColor="#d4d4d4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 98 Q500 -75 1000 98" fill="none" stroke="url(#npWhyArcFade)" strokeWidth="1.2" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
            </svg>
          <div className="np-why-curved-wrapper">
            <div className="np-why-left-features">
              <div className="np-why-feat-item">
                <h3>Expert Team</h3>
                <span className="np-feat-sub">Design &amp; Development Specialists</span>
                <p>Skilled designers and developers working together from idea to launch.</p>
              </div>
              <div className="np-why-feat-item">
                <h3>Tailored Solutions</h3>
                <span className="np-feat-sub">Designed Around Your Needs</span>
                <p>Every website and app is shaped to fit your brand, users and goals</p>
              </div>
            </div>

            <div className="np-why-center-image-card">
              <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
                <defs>
                  <clipPath id="npCurvedClip" clipPathUnits="objectBoundingBox">
                    <path d="M0,0 Q0.5,0.12 1,0 L1,0.78 Q0.5,1.2 0,0.78 Z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="np-curved-mask">
                <img src={ABOUT_IMAGES.collaboration} alt="Team collaboration" />
              </div>
            </div>

            <div className="np-why-right-features">
              <div className="np-why-feat-item">
                <h3>Proven Results</h3>
                <span className="np-feat-sub">Built For Business Growth</span>
                <p>Fast, scalable digital products focused on real user and business outcomes.</p>
              </div>
              <div className="np-why-feat-item">
                <h3>End-To-End Support</h3>
                <span className="np-feat-sub">From Strategy To Launch</span>
                <p>We handle UX, UI, development, testing and ongoing support in one place.</p>
              </div>
            </div>
          </div>
            <div className="np-why-bottom-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Dark services section */}
      <section className="np-services-section" id="services">
        <div className="np-container">
          <div className="np-dark-services-card">
            <div className="np-services-header">
              <span className="np-dark-pill">✦ Services</span>
              <h2>
                Crafting Experiences That <br />
                Leave A Lasting Mark
              </h2>
            </div>

            <div className="np-services-accordion">
              {SERVICES_LIST.map((srv, index) => {
                const isOpen = openService === index;
                return (
                  <div
                    key={srv.num}
                    className={`np-accordion-row ${isOpen ? "is-open" : ""}`}
                    onClick={() => setOpenService(isOpen ? -1 : index)}
                  >
                    <div className="np-accordion-main">
                      <span className="np-srv-num">{srv.num}</span>
                      <div className="np-srv-body">
                        <h3 className="np-srv-title">{srv.title}</h3>
                        <p className="np-srv-desc">{srv.desc}</p>
                        <div className="np-srv-previews">
                          <div className="np-srv-previews-clip">
                            <div className="np-srv-preview-cards">
                              {srv.images.map((imgUrl, i) => (
                                <div key={i} className="np-srv-preview-frame">
                                  <img src={imgUrl} alt={`${srv.title} preview ${i + 1}`} />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="np-srv-toggle" aria-label="Toggle details">
                        <span className="np-srv-toggle-icon">{isOpen ? "−" : "+"}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="np-services-footer">
              <button type="button" className="np-btn-white" onClick={goToForm}>
                Let's Talk →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="np-works-section" id="our-works">
        <div className="np-container">
          <div className="np-works-header">
            <div>
              <span className="np-pill-badge">Our Works</span>
              <h2 className="np-works-title">Selected Work</h2>
            </div>
            <button
              type="button"
              className="np-view-all-link"
              onClick={() => setShowAllWorks((v) => !v)}
              aria-expanded={showAllWorks}
            >
              {showAllWorks ? "Show less ↑" : "View all projects →"}
            </button>
          </div>

          <div className={`np-works-grid ${showAllWorks ? "" : "is-collapsed"}`}>
            {(showAllWorks ? SELECTED_WORKS : SELECTED_WORKS.slice(0, 6)).map((work) => {
              const card = (
                <>
                  <div className="np-work-banner-box" style={{ background: work.bgTheme }}>
                    <div className="np-work-banner-top">
                      <h3>{work.bannerTitle}</h3>
                      <div className="np-work-tags">
                        {work.tags.map((t) => (
                          <span key={t} className="np-work-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="np-work-screen-frame">
                      <img
                        src={hoverKey === `work-${work.id}` && work.gif ? work.gif : work.mockupImg}
                        alt={work.cardTitle}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="np-work-card-info">
                    <h3>{work.cardTitle}</h3>
                    <p>{work.cardDesc}</p>
                  </div>
                </>
              );
              const hoverProps = {
                onMouseEnter: () => setHoverKey(`work-${work.id}`),
                onMouseLeave: () => setHoverKey(null),
                onFocus: () => setHoverKey(`work-${work.id}`),
                onBlur: () => setHoverKey(null),
              };
              return work.link ? (
                <a
                  key={work.id}
                  href={work.link}
                  className="np-work-card-unit"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...hoverProps}
                >
                  {card}
                </a>
              ) : (
                <div key={work.id} className="np-work-card-unit" {...hoverProps}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Internal Applications – fixed-size card row ── */}
      <section
        ref={internalSectionRef}
        className={`np-internal-section ${appsInView ? "is-inview" : ""}`}
      >
        <div className="np-container">
          <h2 className="np-internal-title">Our Internal Applications</h2>
          <div className="np-internal-stage">
            <div
              className={`np-internal-track ${appJumping ? "is-jumping" : ""}`}
              style={{ "--app-index": activeAppIndex }}
            >
            {loopedApps.map((app, index) => {
              const isFeatured = index === activeAppIndex;
              return (
                <div
                  key={`${app.id}-${index}`}
                  className={`np-app-slot ${isFeatured ? "is-featured" : "is-side"} ${index < appCount || index >= appCount * 2 ? "is-clone" : ""}`}
                  style={{ "--reveal-delay": `${Math.max(0, index - appCount) * 110}ms` }}
                  onClick={() => !isFeatured && goToApp(index)}
                  onMouseEnter={() => setHoverKey(`app-${app.id}`)}
                  onMouseLeave={() => setHoverKey(null)}
                >
                  <div className="np-app-panel">
                    <div className="np-app-shot">
                      <img
                        src={hoverKey === `app-${app.id}` && app.gif ? app.gif : app.img}
                        alt={app.name}
                      />
                    </div>
                  </div>
                  <div className="np-app-copy np-app-copy--below">
                    <h3>{app.name}</h3>
                    <p>{app.desc}</p>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
          <div className="np-internal-nav">
              <button type="button" className="np-arrow-btn" onClick={handlePrev} aria-label="Previous app">
                <FiChevronLeft size={20} strokeWidth={1.75} />
              </button>
              <button type="button" className="np-arrow-btn" onClick={handleNext} aria-label="Next app">
                <FiChevronRight size={20} strokeWidth={1.75} />
              </button>
          </div>
        </div>
      </section>

      {/* ── Meet Our Team: one-card row ── */}
      <section className="np-team-section">
        <div className="np-container">
          <div className="np-badge-wrap" style={{ justifyContent: 'flex-start' }}>
            <span className="np-pill-badge">Our Team</span>
          </div>

          <div className="np-team-header-row">
            <h2 className="np-team-title">Meet Our Team</h2>
            <div className="np-team-arrows">
              <button type="button" className="np-team-arrow-btn" aria-label="Previous" onClick={() => setTeamIndex((current) => current - 1)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button type="button" className="np-team-arrow-btn" aria-label="Next" onClick={() => setTeamIndex((current) => current + 1)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l6 6-6 6"/></svg>
              </button>
            </div>
          </div>

          <div
            className="np-team-viewport"
            onMouseEnter={() => setTeamPaused(true)}
            onMouseLeave={() => setTeamPaused(false)}
          >
            <div
              className={`np-team-track ${teamJumping ? "is-jumping" : ""}`}
              style={{ "--team-index": teamIndex }}
            >
              {[0, 1, 2].map((copy) =>
                TEAM.map((member) => (
                  <div className="np-team-card" key={`${copy}-${member.name}`}>
                    <img src={member.img} alt={member.name} />
                    <div className="np-team-info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Section (Uploaded Image 2) ── */}
      <section className="np-testimonials-section">
        <div className="np-container">
          <div className="np-badge-wrap" style={{ justifyContent: 'flex-start' }}>
            <span className="np-pill-badge">Testimonials</span>
          </div>

          <div className="np-testimonials-header">
            <h2>What People Are Saying</h2>
            <div className="np-testimonials-arrows">
              <button type="button" className="np-arrow-btn-light" aria-label="Previous" onClick={() => setTestiIndex((current) => current - 1)}>←</button>
              <button type="button" className="np-arrow-btn-light" aria-label="Next" onClick={() => setTestiIndex((current) => current + 1)}>→</button>
            </div>
          </div>

          <div
            className="np-testi-viewport"
            onMouseEnter={() => setTestiPaused(true)}
            onMouseLeave={() => setTestiPaused(false)}
          >
            <div
              className={`np-testi-track ${testiJumping ? "is-jumping" : ""}`}
              style={{ "--testi-index": testiIndex }}
            >
              {[0, 1, 2].map((copy) =>
                TESTIMONIALS.map((item, i) => (
                  <div className="np-testimonial-card" key={`${copy}-${item.name}`}>
                    <div className="np-testi-top">
                      <span className="np-testi-star">★ 5/5</span>
                      <span className="np-testi-num">{i + 1}/{testiCount}</span>
                    </div>
                    <p className="np-testi-text">{item.text}</p>
                    <div className="np-testi-user">
                      <img src={item.logo} alt={`${item.name} logo`} />
                      <div>
                        <h4>{item.name}</h4>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section (Uploaded Image 2) ── */}
      <section className="np-faq-section">
        <div className="np-container">
          <div className="np-faq-layout">
            <div className="np-faq-left">
              <h2>Frequently Asked Question</h2>
              <p className="np-faq-sub">
                Find quick answers about our portfolio projects, the work we show, and how to start a project with us.
              </p>

              <div className="np-faq-callout-card">
                <h3>Got A Question?</h3>
                <p>Ask us about a project you saw, or tell us what you want to build next.</p>
                <button type="button" className="np-faq-callout-btn" onClick={goToForm}>Got Questions?</button>
                <div className="np-faq-question-watermark" aria-hidden="true">
                  <IoChatbubblesOutline />
                </div>
              </div>
            </div>

            <div className="np-faq-right">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={item.q}
                    className={`np-faq-item ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="np-faq-item-header"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <h4>{item.q}</h4>
                      <span className="np-faq-icon">
                        {isOpen ? <FiMinus size={18} strokeWidth={2} /> : <FiPlus size={18} strokeWidth={2} />}
                      </span>
                    </button>
                    <div className="np-faq-panel">
                      <div className="np-faq-item-body">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Get In Touch Contact Glassmorphism Section (Uploaded Image 3) ── */}
      <section className="np-contact-section" id="contact-form">
        <div className="np-container">
          <div className="np-contact-banner">
            <img
              src="/portfolio/formimage.webp"
              alt="Office background"
              className="np-contact-bg-img"
            />
            <div className="np-contact-overlay"></div>

            <div className="np-contact-content-grid">
              {/* Left Column: Glassmorphism Info */}
              <ContactBubbleCard>
                <h2>
                  <span className="np-contact-title-white">Want to <br />talk to us?</span> <br />
                  <span className="np-text-green-accent">Get in touch</span>
                </h2>

                <div className="np-contact-field-group">
                  <span className="np-contact-chip">Address</span>
                  <p>
                    52/159, Velachery Rd, Next to Guru Nanak College,<br />
                    Near Phoenix Marketcity, Velachery, Chennai, 600042
                  </p>
                </div>

                <div className="np-contact-field-group">
                  <span className="np-contact-chip">Email</span>
                  <p>admin@urbancode.in</p>
                </div>

                <div className="np-contact-field-group">
                  <span className="np-contact-chip">Phone</span>
                  <p>+91 98787 98797</p>
                </div>
              </ContactBubbleCard>

              <ContactFormCard>
                <form onSubmit={handlePortfolioSubmit}>
                  <div className="np-form-group">
                    <input type="text" name="name" placeholder="Name" required autoComplete="name" />
                  </div>
                  <div className="np-form-group">
                    <input type="email" name="email" placeholder="Email" required autoComplete="email" />
                  </div>
                  <div className="np-form-group">
                    <input type="tel" name="phone" placeholder="Phone" required autoComplete="tel" />
                  </div>
                  <div className="np-form-group">
                    <textarea name="message" placeholder="Message" rows={4}></textarea>
                  </div>
                  <div className="np-form-actions">
                    <button type="submit" className="np-contact-submit-btn" disabled={formSending}>
                      {formSending ? "Sending…" : "Submit"}
                    </button>
                  </div>
                  {formStatus.text ? (
                    <p className={`np-form-status is-${formStatus.type}`}>{formStatus.text}</p>
                  ) : null}
                </form>
              </ContactFormCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── New Footer matching design screenshot ── */}
      <footer className="np-footer">
        <div className="np-footer-top">
          <div className="np-footer-brand">
            <img src="/images/home/logo.png" alt="Urbancode" className="np-footer-logo" />
            <div className="np-footer-socials">
              <a href="https://www.linkedin.com/company/urbanc0de" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="np-footer-soc-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61563183054002" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="np-footer-soc-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.8.714-1.8 1.768v2.319h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/urbancode_edutech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="np-footer-soc-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.074 4.771 4.771.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.074 4.771-4.771 4.771-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.074-4.771-4.771-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.074-4.771 4.771-4.771 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.76 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.76-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UC7ngZ5r2ov-qoXJRjaXJGKA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="np-footer-soc-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=919878798797&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="np-footer-soc-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="np-footer-tagline-col">
            <p className="np-footer-tagline">
              We design powerful digital experiences. From responsive websites to intuitive mobile apps,{" "}
              <span className="np-footer-tagline-highlight">we turn your ideas into products that grow your business.</span>
            </p>
            <a href="#services" className="np-footer-cta-btn" onClick={goToServices}>
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="np-footer-bottom">
          <a href="/terms-and-conditions" className="np-footer-bottom-link">Terms &amp; Conditions</a>
          <p className="np-footer-copy">© 2026 Urbancode. All rights reserved.</p>
          <a href="/privacy-policy" className="np-footer-bottom-link">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}



