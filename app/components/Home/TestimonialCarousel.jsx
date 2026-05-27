'use client';
import { useState, useEffect, useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "./testimonials.css";
import Image from "next/image";

const testimonials = [
    {
        name: "Ashwini Raguram",
        feedback:
            "I completed my Data Analyst placement training in Urbancode under the trainer Siva. The training covered SQL and Power BI in a very practical, interview-focused manner. What stood out was the additional support provided like, separate refresh sessions, CV preparation, Naukri profile updates, and mock interviews. The training was strongly aligned with real time scenarios and interview questions, which boosted my confidence significantly. Overall, it’s a well-structured program for anyone looking to start a career in data analytics.",
        rating: 5,
        image: "/images/home/avatar1.jpg",
    },
    {
        name: "Subha V",
        feedback:
            "This place has shaped my child's learning interest . I was little confused on how my Middle school going child would be able to learn the concepts etc .. but UrbanCode has the best teachers who gives great focus to the child and makes sure that one recives a depth knowledge !We are happy and continuing with the Advanced course now . Would highly recommend for middle school or high school going kids based on my experience here .",
        rating: 5,
        image: "/images/home/avatar2.jpg",
    },
    {
        name: "Ranjith Vigneshwar",
        feedback:
            "I had a great learning experience with Urban Code Training Institute during my Data Analyst course. The trainers are very knowledgeable and supportive, making sure every concept is explained clearly. The course was structured in a practical way, which helped me gain strong hands-on experience. I learned a lot throughout the training, and the guidance I received has boosted my confidence to apply my skills in real-time projects. I truly appreciate their constant support and encouragement",
        rating: 5,
        image: "/images/home/avatar3.jpg",
    },
    {
        name: "Sadham Hussain",
        feedback:
            "I am truly thankful to the institute, especially CEO Mr. Siva and all the faculty members, for giving me hope and helping me achieve my dream job. The training here is phenomenal — if you want to become a techie and learn the latest technologies, this is the right place. You can clearly see how they prepare and guide students to succeed in their careers.I enrolled in the Java Selenium course and successfully got placed as a Software Test Engineer in a reputed company. Urban Code Training and Solutions is truly a one-stop destination for career growth. It has shaped my learning, boosted my confidence, and supported my overall growth in the best possible way.♥️ Highly recommended! ❤️(FYI: This is a genuine review, unlike some institutes that pay money to people just to write fake ones.)",
        rating: 5,
        image: "/images/home/avatar4.jpg",
    },
    {
        name: "S Raja Kohila",
        feedback:
            "I joined this institute to achieve my dream job, and it has been a really good experience. The trainers are very friendly, approachable, and highly knowledgeable, always ready to clear doubts with patience. Compared to other institutions, the fees here are quite low, but the quality of training is excellent. The atmosphere is positive and motivating, which helped me gain both skills and confidence. I could see real improvement in myself after attending the sessions. I want to give special thanks to the CEO, Mr. Siva sir, who is very kind and supportive. His personal guidance and motivation gave me the confidence to move forward without fear. Overall, this institute not only trains you but also inspires you to reach your career goals, and I am truly thankful for their support in my journey towards my dream job.",
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
        name: "Rubini",
        feedback:
            "The classes were engaging and informative. The teaching methodology was effective in helping me understand complex concepts.I appreciate the teacher's patience and willingness to clarify doubts. The classes were well-structured and easy to follow.The teaching approach was innovative and interactive, making learning enjoyable and fun.",
        rating: 5,
        image: "/images/home/avatar7.jpg",
    },
];

const TestimonialCarousel = () => {
    const [index, setIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const leftCardRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) =>
                prev < testimonials.length - cardsToShow ? prev + 1 : 0
            );
        }, 2000);
        return () => clearInterval(interval);
    }, [cardsToShow]);

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
        <div className="testimonial_main_container pt-3 pb-5">
            <div className="container ">
                {/* <div className="text-center">
                    <h2 className="section-main-title text-shine">The voice that matters</h2>
                    <p className="fs1rem text-muted">Celebrating the remarkable success stories and career breakthroughs we've proudly helped achieve.</p>
                </div> */}

                <div className="row g-4 align-items-stretch mt-5">
                    <div className="col-lg-3 col-md-4 col-12">
                        <div
                            ref={leftCardRef}
                            className=" rounded-3 shadow-sm p-4 d-flex flex-column justify-content-between sidebar-equal-height bg-white border"
                        >
                            <div>
                                <FaQuoteLeft size={36} className="text-dark mb-3" />
                                <h5 className="fw-bold fs-2">Testimonials</h5>
                            </div>

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
                                        className={`testimonial-card ${idx >= index && idx < index + cardsToShow ? "active" : "inactive"
                                            }`}
                                        style={{ flex: `0 0 calc(${100 / cardsToShow}% - 1rem)` }}
                                    >
                                        <h5 className="fw-bold mb-2">{card.name}</h5>
                                        <div className="testimonial-text-wrapper mb-3">
                                            <p className="text-muted fs08rem mb-1">{card.feedback}</p>
                                            <button 
                                                className="read-more-btn btn p-0 text-success fw-semibold fs07rem"
                                                onClick={() => setSelectedTestimonial(card)}
                                            >
                                                Read More
                                            </button>
                                        </div>

                                        <div className="d-flex flex-column align-items-center mt-auto">
                                            <div className="testimonial-stars d-flex justify-content-center gap-1 mb-2">
                                                {Array.from({ length: card.rating }).map((_, i) => (
                                                    <FaStar key={i} />
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

            {/* Full Review Modal */}
            {selectedTestimonial && (
                <div className="testimonial-modal-overlay" onClick={() => setSelectedTestimonial(null)}>
                    <div className="testimonial-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedTestimonial(null)}>×</button>
                        <div className="d-flex flex-column align-items-center">
                            <div className="testimonial-stars mb-3">
                                {Array.from({ length: selectedTestimonial.rating }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <h4 className="fw-bold mb-3">{selectedTestimonial.name}</h4>
                            <div className="testimonial-modal-body">
                                <FaQuoteLeft className="quote-icon-modal mb-2" />
                                <p className="text-muted">{selectedTestimonial.feedback}</p>
                            </div>
                            <div className="avatar-large mt-4">
                                {selectedTestimonial.image ? (
                                    <Image
                                        src={selectedTestimonial.image}
                                        alt={selectedTestimonial.name}
                                        width={80}
                                        height={80}
                                        className="rounded-circle"
                                    />
                                ) : (
                                    getInitials(selectedTestimonial.name)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialCarousel;
