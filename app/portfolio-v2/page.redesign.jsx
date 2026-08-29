"use client";

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/Herosection/HeroSection";
import "./App.css";
import "./index.css";
import "./portfolio-v2-theme.css";
import "./portfolio-v2-industrial.css";
import "./components/MobileAutoSlider.css";
import AboutUs from "./pages/Aboutus";
import ProjectsSection from "./pages/ProjectsSection";
import Milestones from "./components/Milestones/Milestones";
import ServicesOffer from "./pages/ServicesOffer";
import ContactSection from "./pages/ContactSection";
import OurClients from "./pages/OurClients";
import DigitalFuture from "./pages/DigitalFuture";
import ClientServices from "./pages/ClientServices";
import AllProjectsPage from "./pages/AllProjectsPage";

const HomePage = () => (
  <>
    <HeroSection />
    <OurClients />
    <AboutUs />
    <ProjectsSection />
    <ServicesOffer />
    <DigitalFuture />
    <ClientServices />
    <Milestones />
    <ContactSection />
  </>
);

function syncPortfolioV2Theme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
}

export default function PortfolioV2Page() {
  useEffect(() => {
    syncPortfolioV2Theme();
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => syncPortfolioV2Theme();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Router basename="/portfolio-v2">
      <div className="portfolio-v2-vibe">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
