"use client";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/Herosection/HeroSection";
import "./App.css";
import "./index.css";
import AboutUs from "./pages/Aboutus";
import ProjectsSection from "./pages/ProjectsSection";
import Milestones from "./components/Milestones/Milestones";
import ServicesOffer from "./pages/ServicesOffer";
import ContactSection from "./pages/ContactSection";
import OurClients from "./pages/OurClients";
import DigitalFuture from "./pages/DigitalFuture";
import ClientServices from "./pages/ClientServices";
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

export default function PortfolioPage() {
  // Ensure we are on client side for the router
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Router basename="/portfolio">
      <div className="portfolio-vibe">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
