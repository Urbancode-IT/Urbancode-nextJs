"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "./ProjectShowcase.css";

export default function ProjectShowcase({ projects }) {
  return (
    <div className="project-showcase">
      {projects.map((project, index) => {
        const reversed = index % 2 === 1;

        return (
          <motion.article
            key={project.id}
            className={`project-showcase__row${reversed ? " project-showcase__row--reverse" : ""}`}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-showcase__visual pf-shine-card">
              <div className="project-showcase__head">
                <span className="project-showcase__type">{project.category}</span>
                <h4 className="project-showcase__head-title">{project.title}</h4>
              </div>
              <div className="project-showcase__visual-inner">
                <div className="project-showcase__chrome">
                  <span />
                  <span />
                  <span />
                  <div className="project-showcase__url">
                    {project.link.replace("https://", "").replace("www.", "")}
                  </div>
                </div>
                <div className="project-showcase__screen">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
              </div>
            </div>

            <div className="project-showcase__details">
              <span className="project-showcase__details-type">{project.category}</span>
              <h3 className="project-showcase__title">{project.title}</h3>
              <p className="project-showcase__desc">{project.fullDesc || project.desc}</p>

              <ul className="project-showcase__features">
                {project.features.slice(0, 4).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-showcase__tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-showcase__link pf-btn-outline"
              >
                Visit Live Site
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
