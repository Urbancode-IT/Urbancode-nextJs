import React from "react";
import "./OurClients.css";

const companies = [
  { name: "Zoho", logo: "/logos/zoho.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Capgemini", logo: "/logos/Capgemini.png" },
  { name: "Cisco", logo: "/logos/cisco.svg" },
  { name: "Deloitte", logo: "/logos/deloitte.jpg" },
  { name: "Freshworks", logo: "/logos/Freshworks.png" },
  { name: "HCL", logo: "/logos/hcl.svg" },
  { name: "IBM", logo: "/logos/ibm.svg" },
  { name: "Infosys", logo: "/logos/Infosys.png" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Oracle", logo: "/logos/oracle.svg" },
  { name: "PayPal", logo: "/logos/paypal.svg" },
  { name: "TCS", logo: "/logos/tcs.png" },
];



const OurClients = () => {
  return (
    <section className="our-clients" id="our-clients">
      <div className="our-clients-container">
        {/* Screenshot Style Header */}
        <div className="our-clients-header">

          <h2>Our Clients</h2>
          <p className="our-clients-desc">
            We are proud to collaborate with industry leaders and global tech giants to bring the best opportunities to our students.
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

