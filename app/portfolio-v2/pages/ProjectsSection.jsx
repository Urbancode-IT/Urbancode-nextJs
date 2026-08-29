import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "../data/projectsData";
import ProjectShowcase from "../components/ProjectShowcase";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const previewProjects = PORTFOLIO_PROJECTS.slice(0, 2);

  return (
    <section className="projects pf-section" id="projects">
      <div className="projects__grid-bg" />
      <div className="projects__container">
        <motion.div
          className="projects__header pf-section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>
            Our <span className="text-green">Projects</span>
          </h2>
        </motion.div>

        <ProjectShowcase projects={previewProjects} />

        <div className="projects__view-all-wrap">
          <Link to="/projects" className="pf-btn-shine projects__view-all-btn">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
