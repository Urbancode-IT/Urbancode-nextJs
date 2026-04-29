import React from "react";
import "./DigitalFuture.css";

const DigitalFuture = () => {
  return (
    <section className="digital-future" id="digital-future">
      <div className="digital-future__container">
        <div className="digital-future__hero">
          <div className="digital-future__hero-left">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <span className="phone-logo">UC</span>
                  <div className="phone-menu"><span></span><span></span></div>
                </div>
                <div className="phone-content-wrapper">
                  <div className="phone-content">
                    {/* First Set of Cards */}
                    <div className="phone-card dark">
                      <div className="phone-card-top">
                        <span className="phone-emoji">🚀</span>
                      </div>
                      <span className="phone-tag green">LATEST UPDATE</span>
                      <h4 className="phone-card-title">New MERN Stack Batch Starting!</h4>
                      <div className="phone-card-stats">
                        <div className="stat-item">
                          <span className="stat-num">25+</span>
                          <span className="stat-desc">Joined</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-num">Live</span>
                          <span className="stat-desc">Status</span>
                        </div>
                      </div>
                    </div>

                    <div className="phone-card dark">
                      <div className="phone-card-top">
                        <span className="phone-emoji">🎨</span>
                      </div>
                      <span className="phone-tag green">WORKSHOP</span>
                      <h4 className="phone-card-title">Free UI/UX Design Workshop</h4>
                      <div className="phone-card-stats">
                        <div className="stat-item">
                          <span className="stat-num">500+</span>
                          <span className="stat-desc">Joined</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-num">Register</span>
                          <span className="stat-desc">Status</span>
                        </div>
                      </div>
                    </div>

                    <div className="phone-card dark main-card">
                      <div className="phone-card-header">
                        <span className="phone-tag green">📱 APP DEV</span>
                        <div className="phone-avatar">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=student1" alt="student" />
                        </div>
                      </div>
                      <h4 className="phone-card-title">Mobile Apps <br/><span className="text-green">Built with Flutter</span></h4>
                      <div className="phone-card-stats">
                        <div className="stat-item">
                          <span className="stat-num">10+</span>
                          <span className="stat-desc">DELIVERED</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-num">Android/iOS</span>
                          <span className="stat-desc">PLATFORMS</span>
                        </div>
                      </div>
                    </div>

                    <div className="phone-card dark">
                      <div className="phone-card-top">
                        <span className="phone-emoji">📍</span>
                      </div>
                      <span className="phone-tag green">NEW BRANCH</span>
                      <h4 className="phone-card-title">Now open in Pallikaranai!</h4>
                      <div className="phone-card-stats">
                        <div className="stat-item">
                          <span className="stat-num">2</span>
                          <span className="stat-desc">Locations</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-num">Chennai</span>
                          <span className="stat-desc">Status</span>
                        </div>
                      </div>
                    </div>

                    <div className="phone-bottom-btn">
                      Explore More
                    </div>
                    
                    {/* Duplicate Set for Loop */}
                    <div className="phone-card dark">
                      <div className="phone-card-top">
                        <span className="phone-emoji">🚀</span>
                      </div>
                      <span className="phone-tag green">LATEST UPDATE</span>
                      <h4 className="phone-card-title">New MERN Stack Batch Starting!</h4>
                      <div className="phone-card-stats">
                        <div className="stat-item">
                          <span className="stat-num">25+</span>
                          <span className="stat-desc">Joined</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-num">Live</span>
                          <span className="stat-desc">Status</span>
                        </div>
                      </div>
                    </div>

                    <div className="phone-card dark">
                      <div className="phone-card-top">
                        <span className="phone-emoji">🎨</span>
                      </div>
                      <span className="phone-tag green">WORKSHOP</span>
                      <h4 className="phone-card-title">Free UI/UX Design Workshop</h4>
                      <div className="phone-card-stats">
                        <div className="stat-item">
                          <span className="stat-num">500+</span>
                          <span className="stat-desc">Joined</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-num">Register</span>
                          <span className="stat-desc">Status</span>
                        </div>
                      </div>
                    </div>

                    <div className="phone-card dark main-card">
                      <div className="phone-card-header">
                        <span className="phone-tag green">📱 APP DEV</span>
                        <div className="phone-avatar">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=student1" alt="student" />
                        </div>
                      </div>
                      <h4 className="phone-card-title">Mobile Apps <br/><span className="text-green">Built with Flutter</span></h4>
                      <div className="phone-card-stats">
                        <div className="stat-item">
                          <span className="stat-num">10+</span>
                          <span className="stat-desc">DELIVERED</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-num">Android/iOS</span>
                          <span className="stat-desc">PLATFORMS</span>
                        </div>
                      </div>
                    </div>

                    <div className="phone-card dark">
                      <div className="phone-card-top">
                        <span className="phone-emoji">📍</span>
                      </div>
                      <span className="phone-tag green">NEW BRANCH</span>
                      <h4 className="phone-card-title">Now open in Pallikaranai!</h4>
                      <div className="phone-card-stats">
                        <div className="stat-item">
                          <span className="stat-num">2</span>
                          <span className="stat-desc">Locations</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-num">Chennai</span>
                          <span className="stat-desc">Status</span>
                        </div>
                      </div>
                    </div>

                    <div className="phone-bottom-btn">
                      Explore More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="digital-future__hero-right">
            <h2>Digital <span className="text-green">Future</span></h2>
            <p className="digital-future__subheading">
              Whether you need a product built, a team trained, or a long-term technology partner — 
              Urbancode Edutech is your answer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalFuture;
