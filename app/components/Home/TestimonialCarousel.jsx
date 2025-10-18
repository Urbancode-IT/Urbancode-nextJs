'use client';
import { useState, useEffect, useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "./testimonials.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Priyadarshini",
    feedback:
      "Your patience and determination to teach kids shows how passionate you are towards teaching. Such a commendable teacher you are, I wish you all success and with Urbancode may your journey continue for a long tenure. We need teachers like you in today's world - Krithika Varshini M/O Anamika. Scratch Program - Trainer",
    rating: 5,
    image: "/images/home/avatar1.jpg",
  },
  {
    name: "Harathy L",
    feedback:
      "Power BI class by 'Urbancode' exceeded my expectations. The course content was comprehensive, covering all essential aspects of Power BI. The instructor's expertise and support system were excellent. The step-by-step guidance during these exercises made me feel confident in using Power BI for my own projects. I highly recommend 'Urbancode'. Thank you and Best Wishes Team!",
    rating: 5,
    image: "/images/home/avatar2.jpg",
  },
  {
    name: "Shyam Sundar",
    feedback:
      "Power BI class by 'Urbancode' exceeded my expectations. The course content was comprehensive, covering all essential aspects of Power BI. The instructor's expertise and support system were excellent. The step-by-step guidance during these exercises made me feel confident in using Power BI for my own projects. I highly recommend 'Urbancode'. Thank you and Best Wishes Team!",
    rating: 5,
    image: "/images/home/avatar3.jpg",
  },
  {
    name: "Millar Jayakumar",
    feedback:
      "Taking the Base SAS and advanced SAS classes with URBANCODE has been an enriching experience. The course provided a comprehensive understanding of SAS programming and data analysis. The trainer's depth of knowledge and engaging teaching style made complex concepts accessible, fostering a deeper understanding of both Base SAS and advanced SAS.",
    rating: 4,
    image: "/images/home/avatar4.jpg",
  },
  {
    name: "Himali",
    feedback:
      "I recently completed Advanced SAS training at Urbancode and I am thoroughly impressed. The instructors demonstrated a deep understanding of the subject, making complex concepts easy to grasp. The hands-on approach and real-world examples enriched my learning experience. Highly recommended!",
    rating: 5,
    image: "/images/home/avatar5.jpg",
  },
  {
    name: "Kannan Siva",
    feedback:
      "I would highly recommend this training. I thoroughly enjoyed all aspects of the course. Siva is an excellent and knowledgeable teacher and the classes were relaxed and yet informative.",
    rating: 5,
    image: "/images/home/avatar6.jpg",
  },
  {
    name: "Tamarai",
    feedback:
      "A good teacher will definitely identify students' strength and enhance their skills. You are doing a very good job.",
    rating: 4,
    image: "/images/home/avatar7.jpg",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const leftCardRef = useRef(null);

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) =>
      prev < testimonials.length - cardsToShow ? prev + 1 : 0
    );
  }, 2000);
  return () => clearInterval(interval);
}, [cardsToShow]);

  // Detect screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1200) setCardsToShow(2);
      else setCardsToShow(3);
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handleNext = () => {
    if (index < testimonials.length - cardsToShow) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="testimonial_main_container py-5">
      <div className="container ">
        <div className="text-center mb-5">
          <h5 className="section-title read_revire_text">
            <span className="mx-2">―</span>The Voice That Matters <span className="mx-2">―</span>
          </h5>
          <h4 className="fw-semibold text-muted">Today, we celebrate the success stories and careers we’ve proudly shaped.</h4>
        </div>

        <div className="row g-4 align-items-stretch mt-5">
          {/* Left Sidebar */}
          <div className="col-lg-3 col-md-4 col-12">
            <div
              ref={leftCardRef}
              className=" rounded-3 shadow-lg p-4 d-flex flex-column justify-content-between sidebar-equal-height"
            >
              <div>
                <FaQuoteLeft size={36} className="text-dark mb-3" />
                <h5 className="fw-bold fs-2">What our students say</h5>
              </div>

              {/* Controls */}
              <div className="d-flex align-items-center justify-content-between mt-3">
                <button
                  className="btn btn-light shadow-sm rounded-circle"
                  onClick={handlePrev}
                  disabled={index === 0}
                >
                  ←
                </button>

                <div className="progress-bar-wrapper flex-grow-1 mx-2">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${((index + 1) / (testimonials.length - cardsToShow + 1)) * 100}%`,
                    }}
                  ></div>
                </div>

                <button
                  className="btn btn-light shadow-sm rounded-circle"
                  onClick={handleNext}
                  disabled={index >= testimonials.length - cardsToShow}
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="col-lg-9 col-md-8 col-12">
            <div className="carousel-container">
  <div
    className="carousel-track"
    style={{
      transform: `translateX(-${index * (100 / cardsToShow)}%)`,
    }}
  >
    {testimonials.map((card, idx) => (
      <div
        key={idx}
        className={`testimonial-card ${
          idx >= index && idx < index + cardsToShow ? "active" : "inactive"
        }`}
        style={{ flex: `0 0 calc(${100 / cardsToShow}% - 1rem)` }}
      >
        <h5 className="fw-bold mb-2">{card.name}</h5>
        <p className="text-muted fs08rem mb-3">{card.feedback}</p>

        {/* Avatar + Rating */}
        <div className="d-flex flex-column align-items-center mt-auto">
          <div className="text-success d-flex justify-content-center gap-1 mb-2">
            {Array.from({ length: card.rating }).map((_, i) => (
              <FaStar key={i} className="opacity-75" />
            ))}
          </div>
          <div className="avatar position-relative rounded-circle overflow-hidden">
            {card.image ? (
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-fit-cover rounded-circle"
              />
            ) : (
              getInitials(card.name)
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
