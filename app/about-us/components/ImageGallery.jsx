'use client';

import { motion } from "framer-motion";
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

const ImageGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  // Random direction generator for each image
const directions = [
  { x: -100, y: 0 },
  { x: 100, y: 0 },
  { x: 0, y: -100 },
  { x: 0, y: 100 },
];
// const dir = directions[index % directions.length];

  return (
    <div className="main_gallery_container py-5">
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Our <span className="text-shine">Gallery</span></h2>

        <div className="masonry-gallery">
          {images.map((src, index) => {
            const direction = directions[index % directions.length];
            return (
              <motion.div
                key={index}
                className="masonry-item position-relative"
                initial={{ opacity: "0", x: direction.x, y: direction.y, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.1,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery-${index + 1}`}
                  placeholder="blur"
                  className="img-fluid rounded-3"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
