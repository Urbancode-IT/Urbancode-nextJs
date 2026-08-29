import React from "react";
import { Globe, Smartphone, Database } from "lucide-react";
import { motion } from "framer-motion";
import MobileAutoSlider from "../components/MobileAutoSlider";
import "./ServicesOffer.css";

const OFFERS = [
  {
    id: 1,
    icon: <Globe size={22} />,
    title: "Custom Web Development",
    description: "Responsive, fast, SEO-optimized websites and web applications built for production.",
    tags: ["MERN", "MEAN", ".NET", "Python"],
  },
  {
    id: 2,
    icon: <Smartphone size={22} />,
    title: "Mobile App Development",
    description: "Cross-platform apps with Flutter and React Native for iOS and Android.",
    tags: ["Flutter", "React Native", "Firebase"],
  },
  {
    id: 3,
    icon: <Database size={22} />,
    title: "AI & Data Solutions",
    description: "Dashboards, ML integrations, and intelligent features for business workflows.",
    tags: ["Power BI", "Tableau", "ML", "Python"],
  },
];

const ServicesOffer = () => (
  <section className="services-offer pf-section" id="services-offer">
    <div className="offer-container">
      <div className="offer-header pf-section-head">
        <h2>
          Services for <span className="text-green">Clients</span>
        </h2>
      </div>

      <MobileAutoSlider className="offer-grid" ariaLabel="Services for clients">
        {OFFERS.map((o, i) => (
          <motion.div
            key={o.id}
            className="offer-card-industrial pf-shine-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
          >
            <div className="offer-icon-box">{o.icon}</div>
            <h3 className="offer-title">{o.title}</h3>
            <p className="offer-description">{o.description}</p>
            <div className="offer-tags">
              {o.tags.map((tag) => (
                <span key={tag} className="offer-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </MobileAutoSlider>
    </div>
  </section>
);

export default ServicesOffer;
