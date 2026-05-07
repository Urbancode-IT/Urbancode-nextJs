'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import "./ImageGallery.css";

import img1 from "@/public/images/about/g1.webp";
import img2 from "@/public/images/about/g2.webp";
import img3 from "@/public/images/about/g3.webp";
import img4 from "@/public/images/about/g4.webp";
import img5 from "@/public/images/about/g5.webp";
import img6 from "@/public/images/about/g6.webp";
import img7 from "@/public/images/about/g7.webp";
import img8 from "@/public/images/about/g8.webp";
import img9 from "@/public/images/about/g9.jpg";
import img10 from "@/public/images/about/g10.jpg";
import img11 from "@/public/images/about/g11.jpg";

const GalleryItem = ({ src, index }) => {
  const itemRef = useRef(null);
  
  // Create unique parallax factors for each item for a dynamic feel
  const parallaxFactor = (index % 3) * 20 + 20; 
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(springProgress, [0, 1], [parallaxFactor, -parallaxFactor]);
  const rotate = useTransform(springProgress, [0, 1], [index % 2 === 0 ? -2 : 2, index % 2 === 0 ? 2 : -2]);
  const scale = useTransform(springProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div className="masonry-item-wrapper" ref={itemRef}>
      <motion.div
        className="masonry-item"
        style={{ y, rotate, scale }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ 
          scale: 1.05,
          rotateX: 5,
          rotateY: 5,
          z: 50,
          transition: { duration: 0.3 }
        }}
        transition={{ 
          duration: 0.8, 
          delay: (index % 3) * 0.1,
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <Image
          src={src}
          alt={`Gallery-${index + 1}`}
          placeholder="blur"
          className="img-fluid"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11
  ];

  return (
    <div className="main_gallery_container">
      {/* Background Decorative Elements */}
      <div className="gallery-bg-elements">
        <div className="gallery-glow gallery-glow-1" />
        <div className="gallery-glow gallery-glow-2" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-main-title">
            Our <span className="text-shine">Gallery</span>
          </h2>
        </motion.div>

        <div className="masonry-gallery">
          {images.map((src, index) => (
            <GalleryItem key={index} src={src} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
