import React from "react";
import { motion } from "framer-motion";
import "./OurClients.css";

const companies = [
  { name: "Petrokens", logo: "/portfolio/client/client1.png" },
  { name: "TechTrendz", logo: "/portfolio/client/client2.png" },
  { name: "Synergy Tax", logo: "/portfolio/client/client3.png" },
  { name: "Bodhi Shikshak", logo: "/portfolio/client/client4.png" },
  { name: "Jobzenter", logo: "/portfolio/client/client5.png" },
  { name: "Craftlogically Me", logo: "/portfolio/client/client6.webp" },
];

const OurClients = () => {
  return (
    <section className="our-clients pf-section" id="our-clients">
      <div className="our-clients-container">
        <motion.div
          className="our-clients-header pf-section-head"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>
            Our <span className="text-green">Clients</span>
          </h2>
        </motion.div>

        <div className="clients-marquee pf-shine-card">
          <div className="clients-marquee-track">
            {[...companies, ...companies, ...companies, ...companies].map((client, i) => (
              <div className="clients-logo-item" key={`${client.name}-${i}`}>
                <img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  className="clients-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
