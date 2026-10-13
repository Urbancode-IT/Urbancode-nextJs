"use client";

import React from "react";
import HeroSection from "./components/Herosection/HeroSection";
import AboutUs from "./pages/Aboutus";
import ProjectsSection from "./pages/ProjectsSection";
import ServicesOffer from "./pages/ServicesOffer";
import OurClients from "./pages/OurClients";
import DigitalFuture from "./pages/DigitalFuture";
import ClientServices from "./pages/ClientServices";
import Milestones from "./components/Milestones/Milestones";
import ContactSection from "./pages/ContactSection";
import MainNavbar from "@/app/components/header/Navbar";
import MainFooter from "@/app/components/footer/Footer";
import "./App.css";
import "./index.css";

export default function PortfolioClientPage() {
  return (
    <div className="portfolio-original-root" style={{ background: "#fcfcfc", minHeight: "100vh" }}>
      <MainNavbar />
      <HeroSection />
      <AboutUs />
      <ProjectsSection />
      <ServicesOffer />
      <OurClients />
      <DigitalFuture />
      <ClientServices />
      <Milestones />
      <ContactSection />
      <MainFooter />
    </div>
  );
}
