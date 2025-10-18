'use client';
import Image from "next/image";
import "./carousel.css";
const Carousel = () => {

    const companies = [
    {id:1,name:"amazon",logo:"/images/home/amazon.png"},
    {id:2,name:"capgemini",logo:"/images/home/capgemini.png"},
    {id:3,name:"cisco",logo:"/images/home/cisco.png"},
    {id:4,name:"deloitte",logo:"/images/home/deloitte.png"},
    {id:5,name:"freshworks",logo:"/images/home/freshworks.png"},
    {id:6,name:"github",logo:"/images/home/github.png"},
    {id:7,name:"hcl",logo:"/images/home/hcl.png"},
    {id:8,name:"ibm",logo:"/images/home/ibm.png"},
    {id:9,name:"infosys",logo:"/images/home/infosys.png"},
    {id:10,name:"microsoft",logo:"/images/home/microsoft.png"},
    {id:11,name:"oracle",logo:"/images/home/oracle.png"},
    {id:12,name:"paypal",logo:"/images/home/paypal.png"},
    {id:13,name:"tcs",logo:"/images/home/tcs.png"},
    {id:14,name:"zoho",logo:"/images/home/zoho.png"},
  ];

  const duplicatedCompanies = [...companies, ...companies,];

  return (
    <div className="mnc_carasoul">
        {/* carasoul */}
        
    <div className=" company-carousel-container">
      <div className="company-carousel">
        <div className="text-center my-5">
      <h4 className="">
        Our students thrive in top MNCs
      </h4>
      {/* Green underline */}
      <div
        className="mx-auto my-2"
        style={{
          width: "60px",
          height: "3px",
          backgroundColor: "#198754", // green color
          borderRadius: "2px",
        }}
      ></div>
      <p className="text-muted">
        <b>"</b><i>We go beyond conventional education, empowering you with the skills to create a successful and sustainable career.</i><b>"</b>
      </p>
    </div>
        <div className="company-track">
          {duplicatedCompanies.map((company, index) => (
            <div key={`${company.id}-${index}`} className="company-slide">
              <div className="company-logo object-fit-contain position-relative">
                {/* Replace with actual logo images */}
                {/* <span className="logo-text">{company.name}</span> */}
                <Image src={company.logo} fill alt={company.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Carousel
