"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "../data/projectsData";
import ProjectShowcase from "../components/ProjectShowcase";
import "./AllProjectsPage.css";

export default function AllProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="projects-all-page pf-section">
      <div className="projects-all-page__container">
        <motion.div
          className="projects-all-page__top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="projects-all-page__back">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <h1>
            All <span className="text-green">Projects</span>
          </h1>
        </motion.div>

        <ProjectShowcase projects={PORTFOLIO_PROJECTS} />
      </div>
    </section>
  );
}
