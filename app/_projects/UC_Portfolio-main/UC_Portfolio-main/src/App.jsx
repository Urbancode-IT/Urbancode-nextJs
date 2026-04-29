
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Herosection/HeroSection";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import LiveChat from "./Components/Live/Livechat";
import AboutUs from "./Pages/Aboutus";
import ProjectsSection from "./Pages/ProjectsSection";
import Milestones from "./Components/Milestones/Milestones";
/*import Events from "./Pages/Events/Events";*/
import Courses from "./Components/Courses/Course";
import ServicesOffer from "./Pages/ServicesOffer";
import ContactSection from "./Pages/ContactSection";
import SuccessSection from "./Pages/SuccessSection";
import ClientServices from "./Pages/ClientServices";
import OurClients from "./Pages/OurClients";
import DigitalFuture from "./Pages/DigitalFuture";
/*import Testimonials from "./Pages/Testimonials";*/
/*import InDemandTools from "./Components/Tools/InDemandTools";*/
import Footer from "./Pages/Footer";

const HomePage = () => (
  <>
    <HeroSection />
    <AboutUs />
    <ProjectsSection />
    <Courses />
    <ServicesOffer />
    <OurClients />
    <DigitalFuture />
    <ClientServices />
    <Milestones />
    <ContactSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Loader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <LiveChat />
      </div>
    </Router>
  );
}

export default App;
