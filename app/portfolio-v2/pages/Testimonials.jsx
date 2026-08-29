import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priyadarshini",
    quote: "Your patience and determination to teach kids shows how passionate you are towards teaching. Such a commendable teacher you are, I wish you all success...",
    stars: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&mouth=smile&eyebrows=default&eyes=default"
  },
  {
    id: 2,
    name: "Harathy L",
    quote: "Power BI class by 'Urbancode' exceeded my expectations. The course content was comprehensive, covering all essential aspects of Power BI. The instructor'...",
    stars: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe&mouth=smile&eyebrows=default&eyes=default"
  },
  {
    id: 3,
    name: "Shyam Sundar",
    quote: "Power BI class by 'Urbancode' exceeded my expectations. The course content was comprehensive, covering all essential aspects of Power BI. The instructor'...",
    stars: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&mouth=smile&eyebrows=default&eyes=default"
  },
  {
    id: 4,
    name: "Millar Jayakumar",
    quote: "Taking the Base SAS and advanced SAS classes with URBANCODE has been an enriching experience. The course provided a comprehensive...",
    stars: 4,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper&mouth=smile&eyebrows=default&eyes=default"
  },
  {
    id: 5,
    name: "Himali",
    quote: "I recently completed Advanced SAS training at Urbancode and I am thoroughly impressed. The instructors demonstrated a deep understanding of the...",
    stars: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna&mouth=smile&eyebrows=default&eyes=default"
  },
  {
    id: 6,
    name: "Kannan Siva",
    quote: "I would highly recommend this training. I thoroughly enjoyed all aspects of the course. Siva is an excellent and knowledgeable teacher and the classes were relax...",
    stars: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver&mouth=smile&eyebrows=default&eyes=default"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsVisible = 3;
  const maxIndex = TESTIMONIALS.length - cardsVisible;

  // ── AUTOMATIC SLIDER (AUTOPLAY) ──
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-layout">
          {/* Left Side: Heading Card */}
          <div className="testimonials-info-card">
            <div className="quote-icon-large">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.895 14.912 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 8.448 14.017 9V12C14.017 12.552 13.569 13 13.017 13H11.017C10.465 13 10.017 12.552 10.017 12V9C10.017 6.791 11.808 5 14.017 5H19.017C21.226 5 23.017 6.791 23.017 9V15C23.017 18.314 20.331 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.895 1.912 16 3.017 16H6.017C6.569 16 7.017 15.552 7.017 15V9C7.017 8.448 6.569 8 6.017 8H2.017C1.465 8 1.017 8.448 1.017 9V12C1.017 12.552 0.569 13 0.017 13H-1.983C-2.535 13 -2.983 12.552 -2.983 12V9C-2.983 6.791 -1.192 5 1.017 5H6.017C8.226 5 10.017 6.791 10.017 9V15C10.017 18.314 7.331 21 4.017 21H1.017Z" />
              </svg>
            </div>
            <h2 className="testimonials-main-title">What our students say</h2>
            <div className="slider-controls">
              <button className="slider-btn prev" onClick={prevSlide}>←</button>
              <div className="slider-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
                ></div>
              </div>
              <button className="slider-btn next" onClick={nextSlide}>→</button>
            </div>
          </div>

          {/* Right Side: Sliding Testimonial Cards */}
          <div className="testimonials-window">
            <div 
              className="testimonials-list" 
              style={{ transform: `translateX(-${currentIndex * (100 / cardsVisible + 0.5)}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="student-card">
                  <h3 className="student-name">{t.name}</h3>
                  <p className="student-quote">{t.quote}</p>
                  <div className="student-stars">
                    {[...Array(t.stars)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <div className="student-avatar-wrap">
                    <img src={t.avatar} alt={t.name} className="student-avatar" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
