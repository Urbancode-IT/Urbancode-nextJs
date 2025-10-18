'use client';
import "./hero.css"
const Herosection = () => {
  return (
    <div className="aboutus-hero">
      <div className="container d-flex flex-column flex-lg-row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted">
            Urbancode Edutech Solutions Pvt. Ltd. is a premier skill development
            and technology training provider, dedicated to shaping future-ready
            professionals. We specialize in Full Stack Development, Cloud Computing,
            Data Analytics, Artificial Intelligence, Machine Learning, Cybersecurity,
            Digital Marketing, and Automation Testing. At Urbancode, we believe in
            empowering students and professionals with cutting-edge skills, placement assistance,
            and career guidance, enabling them to thrive in today's fast-evolving digital landscape.
          </p>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 d-flex justify-content-center">
          <img src="/images/about/about_siva.webp" alt="About Us" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
