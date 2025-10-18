'use client';// replace with your image path
import "./TrainingSection.css";
const TrainingSection = () => {
  return (
    <div className="training_section_main_container">
      <div className="container">
      <div className="row d-flex align-items-stretch"> {/* stretch both columns */}
        {/* Left Content */}
        <div className="col-md-7 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-3">Expert Training and Instruction</h2>
          <p className="mb-2">
            At Urbancode, we specialize in providing top-notch training and
            instructional services. Our programs are designed to empower
            professionals and teams with the skills and knowledge they need to
            excel in their respective fields.
          </p>
          <p className="mb-3">
            Urbancode Edutech offers personalized IT training designed to match
            individual career goals with real-world industry skills and
            guaranteed placement support.
          </p>

          <h3 className="fw-bold mt-4 mb-3">We are Specialized In</h3>

          {/* Features Grid */}
          <div className="row g-2 mt-2">
            <div className="col-md-6">
              <div className="p-2 rounded  py-3 h-100" style={{ minHeight: 'auto' }}>
                <h6 className="fw-bold mb-1">Personalized Consultation</h6>
                <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                  Urbancode Edutech trains future-ready professionals in Full Stack, Cloud, AI, ML, Cybersecurity, and more.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-2 rounded py-3 h-100" style={{ minHeight: 'auto' }}>
                <h6 className="fw-bold mb-1">Career Guidance for IT & Non-IT Courses</h6>
                <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                  We empower learners with cutting-edge skills, placement support, and career guidance to succeed in the digital world.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-2 py-3 h-100" style={{ minHeight: 'auto' }}>
                <h6 className="fw-bold mb-1">Flexible Training & Comprehensive Modules</h6>
                <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                  Our expert programs equip professionals and teams with practical knowledge and skills to excel in their fields.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-2 py-3 h-100" style={{ minHeight: 'auto' }}>
                <h6 className="fw-bold mb-1">Placement Support & Global Opportunities</h6>
                <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                  Through placements, interview prep, and industry tie-ups, Urbancode unlocks global IT career opportunities for learners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img
            src="/images/about/g1.jpg" // replace with your image path
            alt="Training"
            className="img-fluid rounded shadow"
            style={{ height: '100%', objectFit: 'cover' }} // full height and cover
          />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default TrainingSection;
