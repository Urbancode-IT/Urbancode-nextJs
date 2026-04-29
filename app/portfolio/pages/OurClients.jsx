import React from "react";
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
    <section className="our-clients" id="our-clients">
      <div className="our-clients-container">
        {/* Screenshot Style Header */}
        <div className="our-clients-header">

          <h2>Our <span className="text-green">Clients</span></h2>
          <p className="our-clients-desc">
            We are proud to collaborate with businesses across diverse industries, delivering tailored digital solutions that drive growth and innovation.
          </p>
        </div>

        {/* Single Row Marquee */}
        <div className="clients-marquee">
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

