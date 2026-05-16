'use client';
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./HeroSection.css";

export default function HeroSection() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const words = [  "Success", "Opportunity"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState("Success");
  const [isMounted, setIsMounted] = useState(false);
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
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    let isCancelled = false;
    let word = words[currentWordIndex];
    let charIndex = 0;

    const type = () => {
      if (isCancelled) return;
      if (charIndex <= word.length) {
        setDisplayedLetters(word.slice(0, charIndex));
        charIndex++;
        setTimeout(type, 120);
      } else {
        setTimeout(() => {
          if (!isCancelled) {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }, 2000);
      }
    };

    type();
    return () => { isCancelled = true; };
  }, [currentWordIndex, isMounted]);

  const images = ["/images/home/s1.webp", "/images/home/s2.webp", "/images/home/s3.webp", "/images/home/s4.webp"];
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
    <div className="home_header_main_container pt-lg-3">
      <div className="container home_header_container">
        <div className="row align-items-center justify-content-center  text-start mx-2 pt-5 pb-3">
          {/* Left Section */}
          <div className="col-lg-6 col-md-10 mb-5 mb-lg-0">
            <h1 className="fw-bold fs25rem animated-title">
              Transforming Skills into <br />
              <span
                className="text-success animated-word pe-1"
                style={{ minHeight: "45px", minWidth: "20px" }}
              >
                {isMounted ? displayedLetters : "Success"}
              </span>
            </h1>

            <p className="mt-3 fs1rem text-muted home-hero-content">
              Urbancode Edutech is Chennai's top institute for Full Stack Development and IT training. 
              We are committed to shaping skilled professionals who can thrive in today’s competitive world.
            </p>

            <div className="mt-3 stats_line">
              <span>
                <b>1000+</b> Students Empowered &nbsp;|&nbsp;
                <b>80+</b> Courses &nbsp;|&nbsp;
              </span>
              <span>
                <b>100%</b> Satisfaction &nbsp;|&nbsp;
                <b>50+</b> Instructors
              </span>
            </div>

          <div className="d-flex align-items-center justify-content-start mt-4">
<div className="d-flex align-items-center ms-2">
  {[
    "/images/home/hs1.png",
    "/images/home/hs2.png",
    "/images/home/hs3.png",
    "/images/home/hs4.png"
  ].map((src, i) => (
    <img
      key={i}
      src={src}
      alt="Indian Students"
      className="rounded-circle border border-white shadow students_img"
      style={{
        width: "60px",
        height: "60px",
        objectFit: "cover",
        marginLeft: i !== 0 ? "-12px" : "0",
        zIndex: 5 - i
      }}
    />
  ))}

  {/* Plus Circle */}
  <div
    className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center fw-bold shadow"
    style={{
      width: "60px",
      height: "60px",
      marginLeft: "-12px",
      border: "3px solid white",
      fontSize: "28px",
      zIndex: 0
    }}
  >
    +
  </div>
</div>
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
            <motion.div
              className="motion-grid mb-4"
              layout
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {imageOrder.map((imgIndex) => (
                <motion.img
                  key={`image-${imgIndex}`}
                  layoutId={`image-${imgIndex}`}
                  src={images[imgIndex]}
                  className="motion-grid-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    layout: { duration: 0.6 }
                  }}
                  alt="Best IT training course in Chennai - Urbancode Edutech"
                />
              ))}
            </motion.div>

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
