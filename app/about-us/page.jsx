import React from "react";
import Head from "next/head";
import Herosection from "./components/Herosection";
import OurMileStone from "./components/OurMileStone";
import MissionVision from "./components/MissionVision";
import TrainingSection from "./components/TrainingSection";
import FeaturesSection from "./components/FeaturesSection";
import ImageGallery from "./components/ImageGallery";
import EventsSection from "./components/EventsSection";

const About = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>About Urbancode | Best IT Training & Placement Institute in Chennai</title>
        <meta
          name="description"
          content="Learn about Urbancode — a leading IT training and placement institute in Chennai. We offer expert-led courses in Full Stack Development, Python, Java, Data Science, and more."
        />
        <meta
          name="keywords"
          content="Urbancode, About Urbancode, IT training Chennai, placement institute Chennai, full stack developer course, Python training Chennai, web development institute"
        />
        <meta name="author" content="Urbancode" />
        <link rel="canonical" href="https://urbancode.in/about-us" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content="About Urbancode | IT Training Institute in Chennai" />
        <meta
          property="og:description"
          content="Urbancode is one of Chennai’s top IT training and placement institutes, offering hands-on learning and real-world project experience."
        />
        <meta property="og:url" content="https://urbancode.in/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Urbancode" />
        <meta
          property="og:image"
          content="https://urbancode.in/images/og/urbancode-about.jpg"
        />

        {/* Instagram will also use these OG tags */}

        {/* Robots & Indexing */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />

        {/* Optional favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Herosection />
        <OurMileStone />
        <MissionVision />
        <TrainingSection />
        <FeaturesSection />
        <ImageGallery />
        <EventsSection />
      </div>
    </>
  );
};

export default About;
