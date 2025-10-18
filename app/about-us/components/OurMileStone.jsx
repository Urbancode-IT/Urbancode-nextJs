
'use client';
import "./OurMileStone.css";
const OurMileStone = () => {
  return (
    <div className="milestone_main_conatiner">
        <div className="milestone-section text-center py-5 container">
      <h2 className="milestone-title fw-bold">
        Our Milestone
      </h2>
      <p className="milestone-subtitle">
        From a small vision to a thriving institute, we’ve empowered thousands of learners with real-world skills.
      </p>

      {/* Internal Video */}
      <div className="milestone-video-container mt-4 mx-auto">
        <video 
          src="/images/about/video/our1.mp4"
          autoPlay 
          muted 
          loop 
          className="milestone-video w-100"
        />
      </div>
    </div>
    </div>
    
  );
};

export default OurMileStone;
