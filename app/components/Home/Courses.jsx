'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import './courses.css';

const Courses = () => {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Avoid "window is not defined" during SSR
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const courses = [
    {
      title: 'Programming Languages',
      description:
        'Programming languages like Python and JavaScript serve as excellent starting points for beginners and are essential in modern web development. Alongside powerful languages such as C++, Java, HTML, and CSS, they form the foundation for building dynamic, scalable, and interactive digital experiences.',
      courses: '6 Courses',
      img: '/images/home/img1.webp',
      link:"/courses/programming-languages"
    },
    {
      title: 'Data Analytics & Visualization',
      description:
        'UI/UX design blends aesthetics with usability to create seamless digital experiences. UI focuses on visual elements like layout, colors, and typography to guide user interaction. UX ensures smooth navigation, accessibility, and satisfaction throughout the user journey. Together, they shape products that are intuitive, engaging, and user-centered.',
      courses: '4 Courses',
      img: '/images/home/img2.webp',
      link:"/courses/data-analytics"
    },
    {
      title: 'Software Testing',
      description:
        'With the cutting-edge Software Testing tools and frameworks like Selenium and Playwright, learn to automate, validate, and enhance application performance using JavaScript and TypeScript, and gain the skills to ensure seamless, high-quality software delivery.',
      courses: '3 Courses',
      img: '/images/home/img3.webp',
      link:"/courses/software-testing"
    },
    {
      title: 'Full Stack Development',
      description:
        'In Full Stack Development with in-demand technologies like MERN, MEAN, Java Stack, .Net Angular and React Native. Master end-to-end web and mobile application development — from dynamic frontends to powerful backends.',
      courses: '5 Courses',
      img: '/images/home/img4.webp',
      link:"/courses/web-development"
    },
  ];

  return (
    <div className="it_career_card">
      <div className="container p-lg-5">
        <h5 className="section-title text-center">
          <span className="mx-2">―</span>
          Explore our courses
          <span className="mx-2">―</span>
        </h5>

        <h4 className="text-center text-muted mb-5 fw-semibold">
          Discover tailored learning paths designed to <br />
          match every IT career
        </h4>
        <div className="row g-4 mb-5">
          {courses.map((course, index) => (
            <div className="col-12 col-lg-6" key={index}>
              <div className="card custom-card shadow-lg border-0 d-flex flex-column h-100 rounded-5 p-3 p-lg-5" onClick={() => window.location.href = course.link} style={{cursor: 'pointer'}}>
                <div className="card-img-container overflow-hidden mb-3">
                  <Image
                    src={course.img}
                    alt={course.title}
                    width={600}
                    height={350}
                    className="card-img-top w-100 h-auto"
                  />
                </div>
                <div className="card-body flex-grow-1 p-0">
                  <h5 className="card-title fw-bold careerCardTitleText">
                    {course.title}
                  </h5>
                  <p className="fw-normal m-0 careerCardDescription text-muted">
                    {course.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 d-flex justify-content-end p-0 mt-3">
                  <button className="btn btn-secondary btn-green rounded-pill px-4 py-0 careerGoalBtn">
                    {course.courses}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All button */}
        <div className="d-flex justify-content-center align-items-center">
          <button className="gradient-btn d-flex align-items-center justify-content-between px-5 py-2 rounded-pill border-0 text-dark" onClick={() => window.location.href = '/courses-categories'}>
            <span className="me-3 fw-semibold">View all courses</span>
            <span className="arrow-circle">
              <FaArrowRight />
            </span>
          </button>
        </div>

        {/* Student Lifecycle Image */}
        <div className="student-lifecycle-container text-center py-3 py-lg-5 py-sm-2">
          <Image
            src={
              isMobile
                ? '/images/home/lifecycle-mob.png'
                : '/images/home/lifecycle.png'
            }
            alt="Student lifecycle"
            width={1200}
            height={600}
            className="student-lifecycle-img img-fluid w-100"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
