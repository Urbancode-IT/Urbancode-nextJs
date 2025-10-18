'use client';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./HeroSection.css";

export default function HeroSection() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const words = ["Opportunities", "Possibilities", "Success"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState("");
  const maxWordLength = Math.max(...words.map((w) => w.length));
  
  const socialLinks = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/profile.php?id=61563183054002#", 
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/urbancode_edutech/", 
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/99156099/admin/dashboard/", 
  },
];

  useEffect(() => {
    const word = words[currentWordIndex];
    let letterIndex = 0;
    setDisplayedLetters("");

    const letterInterval = setInterval(() => {
      setDisplayedLetters(word.slice(0, letterIndex + 1));
      letterIndex++;
      if (letterIndex === word.length) {
        clearInterval(letterInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 120);

    return () => clearInterval(letterInterval);
  }, [currentWordIndex]);

  const images = ["/images/home/img5.jpg", "/images/home/img6.jpg", "/images/home/img7.jpg", "/images/home/img8.jpg"];
  const [imageOrder, setImageOrder] = useState([0, 1, 2, 3]);

  useEffect(() => {
    let timeout;
    const swapImages = () => {
      const i1 = Math.floor(Math.random() * 4);
      let i2 = Math.floor(Math.random() * 4);
      while (i1 === i2) i2 = Math.floor(Math.random() * 4);

      setImageOrder((prev) => {
        const newOrder = [...prev];
        [newOrder[i1], newOrder[i2]] = [newOrder[i2], newOrder[i1]];
        return newOrder;
      });

      timeout = setTimeout(swapImages, 1500);
    };

    swapImages();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="home_header_main_container pt-5">
      <div className="container home_header_container">
        <div className="row align-items-center justify-content-center  text-start mx-2 py-5">
          {/* Left Section */}
          <div className="col-lg-6 col-md-10 mb-5 mb-lg-0">
            <h1 className="fw-bold fs25rem animated-title">
              Transforming Skills into <br/>
              <span
                className="text-success animated-word"
              >
                {displayedLetters?displayedLetters:"|"}
              </span>
            </h1>

            <p className="mt-3 fs1rem text-muted home-hero-content">
              To become a trusted global training partner recognized for
              excellence, innovation, and commitment to shaping skilled
              professionals who can thrive in today’s competitive world.
            </p>

            <div className="mt-3 stats_line">
              <span>
                <b>800+</b> Students Empowered &nbsp;|&nbsp;
                <b>80+</b> Courses &nbsp;|&nbsp;
              </span>
              <span>
                <b>100%</b> Satisfaction &nbsp;|&nbsp;
                <b>50+</b> Instructors
              </span>
            </div>

            <div className="d-flex align-items-center justify-content-start mt-4">
              <div className="d-flex ms-2">
                {["men/32", "women/65", "men/45", "women/12"].map((u, i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/${u}.jpg`}
                    alt="Students learning MERN Stack at Urbancode Chennai"
                    className="rounded-circle border border-white shadow students_img"
                  
                  />
                ))}
              </div>
              <span className="ms-2 fw-bold">+</span>
            </div>

            <button className="btn enroll_btn rounded-pill px-4 py-2 mt-5"
               onClick={() => setShowEnquiry(true)}>
        <span>Enroll now →</span>
      </button>

      {/* Popup Form */}
      <EnquiryFormModal
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        courseName="Full Stack Development"
      />
          </div>

          {/* Right Section */}
          <div className="col-lg-6 col-md-10 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center justify-content-lg-end">
            <div className="motion-grid mb-4">
              {imageOrder.map((imgIndex) => (
                <motion.img
                  key={images[imgIndex]}
                  src={images[imgIndex]}
                  className="motion-grid-img"
                  layout
                  transition={{ duration: 0.5 }}
                  alt="course"
                />
              ))}
            </div>

            {/* Social Icons */}
            <div className="d-flex gap-3 flex-row flex-md-column">
      {socialLinks.map(({ icon: Icon, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon d-flex justify-content-center align-items-center border rounded-circle"
        >
          <Icon />
        </a>
      ))}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
