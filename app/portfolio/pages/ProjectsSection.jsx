import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectsSection.css";

// ── PROFESSIONAL COLORFUL ICONS (EMOJI-LIKE) ──
const Icons = {
  Engineering: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z" fill="#E2E8F0"/>
      <path d="M24 34a10 10 0 100-20 10 10 0 000 20z" fill="#64748B"/>
      <path d="M24 28a4 4 0 100-8 4 4 0 000 8z" fill="#94A3B8"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 10a2 2 0 012 2v2a2 2 0 11-4 0v-2a2 2 0 012-2zm9.9 4.1a2 2 0 010 2.828l-1.414 1.414a2 2 0 11-2.828-2.828l1.414-1.414a2 2 0 012.828 0zm4.1 9.9a2 2 0 01-2 2h-2a2 2 0 110-4h2a2 2 0 012 2zm-4.1 9.9a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 112.828-2.828l1.414 1.414a2 2 0 010 2.828zM24 38a2 2 0 01-2-2v-2a2 2 0 114 0v2a2 2 0 01-2 2zm-9.9-4.1a2 2 0 010-2.828l1.414-1.414a2 2 0 112.828 2.828l-1.414 1.414a2 2 0 01-2.828 0zM10 24a2 2 0 012-2h2a2 2 0 110 4h-2a2 2 0 01-2-2zm4.1-9.9a2 2 0 012.828 0l1.414 1.414a2 2 0 11-2.828 2.828L14.1 16.9a2 2 0 010-2.828z" fill="#475569"/>
    </svg>
  ),
  Consulting: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="8" width="32" height="32" rx="4" fill="#FFEDD5"/>
      <path d="M16 16h16v4H16zM16 24h16v4H16zM16 32h10v4H16z" fill="#F97316"/>
      <circle cx="34" cy="34" r="6" fill="#FB923C"/>
      <path d="M34 31v6M31 34h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Finance: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="#DCFCE7"/>
      <path d="M24 12v24M18 17h9a4 4 0 110 8h-6a4 4 0 100 8h9" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Education: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <path d="M4 16l20-10 20 10-20 10L4 16z" fill="#DBEAFE"/>
      <path d="M4 16v12c0 2 8 6 20 6s20-4 20-6V16" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 16v16" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  Careers: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" fill="#F3E8FF"/>
      <circle cx="24" cy="24" r="12" fill="#A855F7"/>
      <circle cx="24" cy="24" r="6" fill="#7E22CE"/>
    </svg>
  ),
  Ecommerce: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="12" width="36" height="28" rx="4" fill="#E0F2FE"/>
      <path d="M16 12V8a4 4 0 018 0v4M24 12V8a4 4 0 018 0v4" stroke="#0284C7" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="18" cy="24" r="4" fill="#0EA5E9"/>
    </svg>
  ),
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="#E0F2FE"/>
      <path d="M4 24h40M24 4c6 0 10 9 10 20s-4 20-10 20-10-9-10-20 4-20 10-20z" stroke="#0284C7" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  List: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="10" width="32" height="6" rx="2" fill="#F1F5F9"/>
      <rect x="8" y="21" width="32" height="6" rx="2" fill="#F1F5F9"/>
      <rect x="8" y="32" width="32" height="6" rx="2" fill="#F1F5F9"/>
      <rect x="12" y="12" width="4" height="2" rx="1" fill="#64748B"/>
      <rect x="12" y="23" width="4" height="2" rx="1" fill="#64748B"/>
      <rect x="12" y="34" width="4" height="2" rx="1" fill="#64748B"/>
    </svg>
  ),
  Check: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="#DCFCE7"/>
      <path d="M14 24l7 7 13-13" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <circle cx="20" cy="20" r="14" stroke="#64748B" strokeWidth="4"/>
      <path d="M31 31l10 10" stroke="#475569" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  ),
  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M26 4L10 26h12l-4 18 16-22H22l4-18z" fill="#FEF08A" stroke="#EAB308" strokeWidth="3" strokeLinejoin="round"/>
    </svg>
  ),
  Smartphone: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <rect x="12" y="4" width="24" height="40" rx="4" fill="#F8FAFC" stroke="#64748B" strokeWidth="3"/>
      <circle cx="24" cy="38" r="2" fill="#94A3B8"/>
      <path d="M20 8h8" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Briefcase: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="12" width="40" height="28" rx="2" fill="#FEF2F2" stroke="#EF4444" strokeWidth="3"/>
      <path d="M16 12V8a2 2 0 012-2h12a2 2 0 012 2v4" stroke="#EF4444" strokeWidth="3"/>
    </svg>
  ),
  Chart: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="24" width="6" height="16" rx="1" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2"/>
      <rect x="21" y="12" width="6" height="28" rx="1" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2"/>
      <rect x="34" y="18" width="6" height="22" rx="1" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2"/>
    </svg>
  ),
  Palette: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M24 42c10 0 18-8 18-18S34 6 24 6 6 14 6 24s8 18 18 18z" fill="#F3E8FF" stroke="#A855F7" strokeWidth="3"/>
      <circle cx="18" cy="18" r="3" fill="#A855F7"/>
      <circle cx="30" cy="18" r="3" fill="#EC4899"/>
      <circle cx="18" cy="30" r="3" fill="#F59E0B"/>
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="10" width="36" height="28" rx="2" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3"/>
      <path d="M6 10l18 14 18-14" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Book: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M8 10h24a4 4 0 014 4v24a4 4 0 01-4 4H8V10z" fill="#FEF9C3" stroke="#EAB308" strokeWidth="3"/>
      <path d="M8 10v32M12 16h16M12 24h16M12 32h10" stroke="#EAB308" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  Shield: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M24 4l16 8v12c0 10-16 18-16 18S8 34 8 24V12l16-8z" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M24 14v16M18 22l6 6 6-6" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  User: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="16" r="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="3"/>
      <path d="M8 40c0-8 8-12 16-12s16 4 16 12" fill="#F1F5F9" stroke="#64748B" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="8" width="40" height="36" rx="4" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="3"/>
      <path d="M4 18h40M14 4v8M34 4v8" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  Message: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M44 24c0 11-9 20-20 20-3 0-6-1-9-2l-11 4 4-11c-1-3-2-6-2-9 0-11 9-20 20-20s20 9 20 20z" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Target: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="#FDF2F8" stroke="#DB2777" strokeWidth="3"/>
      <circle cx="24" cy="24" r="12" stroke="#DB2777" strokeWidth="3"/>
      <circle cx="24" cy="24" r="4" fill="#DB2777"/>
    </svg>
  ),
  Graduation: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M4 16l20-10 20 10-20 10-20-10z" fill="#F3E8FF" stroke="#A855F7" strokeWidth="3"/>
      <path d="M10 20v10c0 2 6 6 14 6s14-4 14-6V20" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Handshake: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M24 40c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16z" fill="#FEF9C3" stroke="#EAB308" strokeWidth="3"/>
      <path d="M16 24h16M24 16v16" stroke="#EAB308" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  Bell: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M24 4c-7 0-10 6-10 12v12l-4 4h28l-4-4V16c0-6-3-12-10-12z" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M20 36c0 2 2 4 4 4s4-2 4-4" stroke="#16A34A" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  Cart: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <circle cx="16" cy="40" r="3" fill="#0EA5E9"/>
      <circle cx="36" cy="40" r="3" fill="#0EA5E9"/>
      <path d="M4 6h6l6 24h24l4-16H14" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  CreditCard: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="10" width="40" height="28" rx="3" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="3"/>
      <path d="M4 18h40M12 28h8" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  Package: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" fill="#FFEDD5" stroke="#F97316" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M6 14l18 10 18-10M24 44V24" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Star: () => (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M24 4l6 12 14 2-10 10 2 14-12-7-12 7 2-14-10-10 14-2 6-12z" fill="#FEF9C3" stroke="#EAB308" strokeWidth="3" strokeLinejoin="round"/>
    </svg>
  )
};

const MetricChart = ({ type, percentage, value }) => {
  if (type === "gauge") {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return (
      <div className="metric-gauge">
        <svg width="60" height="60" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r={radius} stroke="#f1f5f9" strokeWidth="4" fill="none" />
          <circle 
            cx="25" cy="25" r={radius} stroke="#00b56f" strokeWidth="4" fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
          />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="10" fontWeight="800" fill="#111827">
            {value}
          </text>
        </svg>
      </div>
    );
  }
  if (type === "timeline") {
    return (
      <div className="metric-timeline">
        <div className="timeline-bar">
          <div className="timeline-progress" style={{ width: `${percentage}%` }}></div>
        </div>
        <span className="timeline-value">{value}</span>
      </div>
    );
  }
  if (type === "reach") {
    return (
      <div className="metric-reach">
        <Icons.Globe />
        <span className="reach-value">{value}</span>
      </div>
    );
  }
  return <div className="stat-value">{value}</div>;
};

const PROJECTS = [
  {
    id: 1,
    title: "PETROKENS",
    category: "ENGINEERING",
    image: `https://s0.wp.com/mshots/v1/${encodeURIComponent("https://www.petrokens.com/")}?w=600`,
    desc: "Engineering & consultancy delivering innovative solutions across oil & gas, infrastructure, and industrial projects.",
    fullDesc: "A premium corporate website for Petrokens — an oil & gas and infrastructure consultancy. Built to inspire trust and authority, showcasing global operations, core services, and project portfolio with world-class design.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "AWS", "Tailwind CSS"],
    link: "https://www.petrokens.com/",
    features: [
      { icon: <Icons.Globe />, text: "Multi-page responsive corporate site" },
      { icon: <Icons.List />, text: "Services & capabilities showcase" },
      { icon: <Icons.Check />, text: "Project portfolio with case studies" },
      { icon: <Icons.Search />, text: "SEO optimized for global reach" },
      { icon: <Icons.Zap />, text: "98/100 Lighthouse performance" },
      { icon: <Icons.Smartphone />, text: "Mobile-first responsive design" }
    ],
    highlights: [
      { label: "Lighthouse Score", value: "98/100", type: "gauge", percentage: 98 },
      { label: "Build Time", value: "3 months", type: "timeline", percentage: 40 },
      { label: "Client Reach", value: "Global", type: "reach" }
    ],
    modalEmoji: "⚙️"
  },
  {
    id: 2,
    title: "TECHTRENDZ",
    category: "IT CONSULTING",
    image: `https://s0.wp.com/mshots/v1/${encodeURIComponent("https://tech-trendz.be/")}?w=600`,
    desc: "IT consulting services dedicated to helping businesses reach their full potential through technology.",
    fullDesc: "A modern IT consulting portal for TechTrendz — a Belgium-based digital transformation firm. Showcases services and case studies with cutting-edge design that builds instant credibility with enterprise clients worldwide.",
    tech: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Figma"],
    link: "https://tech-trendz.be/",
    features: [
      { icon: <Icons.Briefcase />, text: "Comprehensive services showcase" },
      { icon: <Icons.Chart />, text: "Case studies & success stories" },
      { icon: <Icons.Globe />, text: "International audience optimized" },
      { icon: <Icons.Zap />, text: "High-performance fast pages" },
      { icon: <Icons.Palette />, text: "Custom UI/UX design system" },
      { icon: <Icons.Mail />, text: "Integrated lead capture" }
    ],
    highlights: [
      { label: "Performance", value: "Fast", type: "gauge", percentage: 95 },
      { label: "Build Time", value: "2 months", type: "timeline", percentage: 30 },
      { label: "Target Market", value: "Enterprise", type: "reach" }
    ],
    modalEmoji: "💡"
  },
  {
    id: 3,
    title: "SYNERGY",
    category: "FINANCE & TAX",
    image: `https://s0.wp.com/mshots/v1/${encodeURIComponent("https://www.synergytaxed.com/")}?w=600`,
    desc: "Tax consulting, GST filing and financial training services dedicated to providing expert tax education.",
    fullDesc: "A comprehensive tax consulting and financial training platform. Clients access GST filing guidance, consulting services, and financial education courses with a clean interface that builds trust and authority.",
    tech: ["Angular", ".NET Core", "SQL Server", "Azure", "Bootstrap"],
    link: "https://www.synergytaxed.com/",
    features: [
      { icon: <Icons.Briefcase />, text: "GST filing guidance & resources" },
      { icon: <Icons.Book />, text: "Financial training catalog" },
      { icon: <Icons.User />, text: "Client consultation booking" },
      { icon: <Icons.List />, text: "Tax document library" },
      { icon: <Icons.Shield />, text: "Secure client data handling" },
      { icon: <Icons.Smartphone />, text: "Mobile-friendly design" }
    ],
    highlights: [
      { label: "Accuracy", value: "99.9%", type: "gauge", percentage: 99 },
      { label: "Project Duration", value: "3 months", type: "timeline", percentage: 40 },
      { label: "Industry", value: "Finance", type: "reach" }
    ],
    modalEmoji: "📊"
  },
  {
    id: 4,
    title: "Bodhi Shikshak",
    category: "EDUCATION",
    image: `https://s0.wp.com/mshots/v1/${encodeURIComponent("https://bodhishikshak.com/")}?w=600`,
    desc: "Online learning platform for Math, Science & English — personalized, student-first approach to quality education.",
    fullDesc: "An online learning platform for personalized Math, Science, and English education. Features a student-centric approach with interactive content, progress tracking, and seamless enrollment.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Socket.io"],
    link: "https://bodhishikshak.com/",
    features: [
      { icon: <Icons.Book />, text: "Math, Science & English courses" },
      { icon: <Icons.User />, text: "Personalized learning paths" },
      { icon: <Icons.Chart />, text: "Student progress tracking" },
      { icon: <Icons.Calendar />, text: "Class scheduling & booking" },
      { icon: <Icons.Message />, text: "Parent-teacher communication" },
      { icon: <Icons.Target />, text: "Assessment & quiz system" }
    ],
    highlights: [
      { label: "Uptime", value: "99.8%", type: "gauge", percentage: 99 },
      { label: "Subjects", value: "3 Main", type: "timeline", percentage: 60 },
      { label: "Delivery", value: "Online", type: "reach" }
    ],
    modalEmoji: "📚"
  },
  {
    id: 5,
    title: "Jobzenter",
    category: "ED-TECH & CAREERS",
    image: `https://s0.wp.com/mshots/v1/${encodeURIComponent("https://jobzenter.in/")}?w=600`,
    desc: "Training and placement portal for Full Stack, Software Testing and Business Intelligence — connecting talent with jobs.",
    fullDesc: "A comprehensive training and placement portal bridging IT education and employment. Connects students in Full Stack, Testing, and Business Intelligence with top companies hiring tech talent.",
    tech: ["MEAN Stack", "Angular", "Node.js", "MongoDB", "Python"],
    link: "https://jobzenter.in/",
    features: [
      { icon: <Icons.Graduation />, text: "Multi-domain course catalog" },
      { icon: <Icons.Briefcase />, text: "Job portal with listings" },
      { icon: <Icons.List />, text: "Resume builder & profiles" },
      { icon: <Icons.Handshake />, text: "Placement assistance & tracking" },
      { icon: <Icons.Chart />, text: "Student performance analytics" },
      { icon: <Icons.Bell />, text: "Real-time job alerts" }
    ],
    highlights: [
      { label: "Placements", value: "High", type: "gauge", percentage: 90 },
      { label: "Companies", value: "50+", type: "timeline", percentage: 50 },
      { label: "Domains", value: "3 Fields", type: "reach" }
    ],
    modalEmoji: "🎯"
  },
  {
    id: 6,
    title: "Craftlogically Me",
    category: "E-COMMERCE",
    image: `https://s0.wp.com/mshots/v1/${encodeURIComponent("https://www.craftlogicallyme.com/")}?w=600`,
    desc: "Boutique store for handcrafted natural stone jewelry — turquoise, amethyst, jade — refined aesthetics meets seamless shopping.",
    fullDesc: "A boutique e-commerce store for handcrafted natural stone jewelry — turquoise, amethyst, jade, and more. Combines refined aesthetics with seamless shopping, turning visitors into loyal customers.",
    tech: ["React.js", "Node.js", "Stripe", "MongoDB", "Redux"],
    link: "https://www.craftlogicallyme.com/",
    features: [
      { icon: <Icons.Engineering />, text: "Natural stone jewelry catalog" },
      { icon: <Icons.Cart />, text: "Full cart & checkout" },
      { icon: <Icons.CreditCard />, text: "Stripe payment integration" },
      { icon: <Icons.Package />, text: "Order tracking & management" },
      { icon: <Icons.Star />, text: "Product reviews & ratings" },
      { icon: <Icons.Smartphone />, text: "Mobile-first shopping" }
    ],
    highlights: [
      { label: "Sales Growth", value: "2x", type: "gauge", percentage: 80 },
      { label: "Inventory", value: "200+", type: "timeline", percentage: 70 },
      { label: "Rating", value: "5★", type: "reach" }
    ],
    modalEmoji: "🛍️"
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const handleStartSimilarProject = () => {
    closeModal();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__grid-bg"></div>
      <div className="projects__container">
        <div className="projects__header">
          <h2>Our <span className="text-green">Projects</span></h2>
          <p className="section__subtitle">Transform businesses and create exceptional digital experiences</p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <div key={p.id} className="project__card" onClick={() => { openModal(p); }}>
              <div className="project__image-box">
                <img src={p.image} alt={p.title} className="project__card-screenshot" />
                <span className="project__category">{p.category}</span>
              </div>
              <div className="project__overlay" />
              <div className="project__content">
                <h3 className="project__title">{p.title}</h3>
                <p className="project__text">{p.desc}</p>
                
                <div className="project__footer">
                  <button className="project__link-btn">View Details →</button>
                  <div className="project__tech">
                    {p.tech.slice(0, 2).map((t) => (
                      <span key={t} className="tech__tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── REDESIGNED PROJECT MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal__overlay" 
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="project-modal__box" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              {/* LEFT: VISUAL PANEL */}
              <div className="project-modal__visual-panel">
                <div className="laptop-mockup">
                  <div className="laptop-screen">
                    <div className="browser-bar">
                      <div className="browser-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="browser-address">{selectedProject.link.replace('https://', '')}</div>
                    </div>
                    <div className="project-modal__banner-wrap">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="project-modal__banner-screenshot" 
                      />
                    </div>
                  </div>
                  <div className="laptop-base"></div>
                </div>

                <div className="project-modal__visual-overlay" />
                
                <motion.div 
                  className="project-modal__visual-info"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="modal-category-pill">{selectedProject.category}</span>
                  <h2 className="modal-main-title">{selectedProject.title}</h2>
                </motion.div>
              </div>

              {/* RIGHT: CONTENT PANEL */}
              <div className="project-modal__content-panel">
                <div className="project-modal__close-btn" onClick={closeModal}>✕</div>
                
                <div className="project-modal__scroll-area">
                  <div className="modal-section">
                    <h4 className="modal-section-title">Project Overview</h4>
                    <motion.p 
                      className="modal-desc-text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {selectedProject.fullDesc}
                    </motion.p>
                  </div>

                  {/* Features */}
                  <div className="modal-section">
                    <h4 className="modal-section-title">Core Capabilities</h4>
                    <div className="modal-features-list">
                      {selectedProject.features.map((f, i) => (
                        <motion.div 
                          key={i} 
                          className="modal-feature-card"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                        >
                          <div className="feature-icon-box">{f.icon}</div>
                          <span className="feature-label-text">{f.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="modal-section">
                    <h4 className="modal-section-title">Technologies Used</h4>
                    <div className="modal-tech-flex">
                      {selectedProject.tech.map((t, i) => (
                        <motion.span 
                          key={t} 
                          className="modal-tech-pill"
                          whileHover={{ y: -2, scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.05 }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="modal-section">
                    <h4 className="modal-section-title">Success Metrics</h4>
                    <div className="modal-stats-grid">
                      {selectedProject.highlights.map((h, i) => (
                        <motion.div 
                          key={i} 
                          className={`modal-stat-item is-${h.type || 'default'}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                        >
                          <MetricChart type={h.type} percentage={h.percentage} value={h.value} />
                          <div className="stat-label">{h.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="modal-fixed-footer">
                  <motion.a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-primary-btn"
                    whileHover={{ scale: 1.02, backgroundColor: "#008f58" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Live Website →
                  </motion.a>
                  <motion.button 
                    className="modal-secondary-btn" 
                    onClick={handleStartSimilarProject}
                    whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Your Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;