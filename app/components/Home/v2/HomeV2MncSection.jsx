"use client";

import Image from "next/image";

const COMPANIES = [
  { id: 1, name: "Amazon", logo: "/images/home/amazon.png" },
  { id: 2, name: "Capgemini", logo: "/images/home/capgemini.png" },
  { id: 3, name: "Cisco", logo: "/images/home/cisco.png" },
  { id: 4, name: "Deloitte", logo: "/images/home/deloitte.png" },
  { id: 5, name: "Saint-Gobain", logo: "/images/home/saint-gobain.png" },
  { id: 6, name: "GitHub", logo: "/images/home/github.png" },
  { id: 7, name: "HCL", logo: "/images/home/hcl.png" },
  { id: 8, name: "IBM", logo: "/images/home/ibm.png" },
  { id: 9, name: "Infosys", logo: "/images/home/infosys.png" },
  { id: 10, name: "Microsoft", logo: "/images/home/microsoft.png" },
  { id: 11, name: "Oracle", logo: "/images/home/oracle.png" },
  { id: 12, name: "PayPal", logo: "/images/home/paypal.png" },
  { id: 13, name: "TCS", logo: "/images/home/tcs.png" },
  { id: 14, name: "Zoho", logo: "/images/home/zoho.png" },
];

export default function HomeV2MncSection() {
  const loop = [...COMPANIES, ...COMPANIES];

  return (
    <section className="home-v2-mnc" aria-label="Hiring partners">
      <div className="home-v2-mnc-head">
        <h2 className="home-v2-mnc-title">Our Students Thrive in Top MNCs.</h2>
      </div>

      <div className="home-v2-mnc-viewport">
        <div className="home-v2-mnc-track">
          {loop.map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              className="home-v2-mnc-card"
            >
              <span className="home-v2-mnc-logo">
                <Image
                  src={company.logo}
                  alt=""
                  width={36}
                  height={36}
                  className="home-v2-mnc-logo-img"
                />
              </span>
              <span className="home-v2-mnc-name">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
