'use client';
import './Kidz.css';
import Image from 'next/image';
import EnquiryFormModal from '../components/common/EnquiryFormModal';
import { useState, useEffect } from 'react';
import KidsLoader from './KidsLoader';

import BannerSlider from '../components/common/BannerSlider';
import KidsHero from './KidsHero';
import KidsInteractiveGame from '../components/CourseLayout/KidsInteractiveGame';
import { Star, Users, Clock } from "lucide-react";

const Kidz = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [levelsUnlocked, setLevelsUnlocked] = useState(false);

  useEffect(() => {
    // Show loader for 3 seconds when page loads (multi-stage animation)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Check local storage for unlocked level progress
    if (typeof window !== 'undefined') {
      const unlocked = localStorage.getItem('kidsPlayZoneUnlocked') === 'true';
      if (unlocked) {
        setLevelsUnlocked(true);
      }
    }

    return () => clearTimeout(timer);
  }, []);

  const kidsBanners = [
    {
      src: "/images/home/kidssummercamp.webp",
      alt: "Kids Summer Camp",
      type: "form-download",
      courseName: "Kids Summer Camp"
    },
    {
      src: "/images/home/kidssc.webp",
      alt: "Python for Kids",
      type: "form-download",
      courseName: "Kids Summer Camp",
      dynamicDownloads: {
        "webdevelopment": "/curriculum/webdevelopmentKids.pdf",
        "python with ai": "/curriculum/pythonforkids.pdf"
      },
      extraOptions: ["webdevelopment", "python with ai"],
      isSelectMode: true,
      useExternalCourses: false
    }
  ];

  const courses = [
    {
      title: "Junior Web Developer",
      img: "/images/KidsImages/kids8.webp",
      duration: "3 Months",
      desc: "Kickstart your journey as a developer! Learn HTML, CSS, and JavaScript to design interactive websites and gain real-world project skills.",
      stars: "★★★★★",
      rating: "5.0",
      students: 42,
      url: "/courses/kidz-space/junior-web-development",
      isSummerCamp: true
    },
    {
      title: "Core Python",
      img: "/images/KidsImages/kids2.webp",
      duration: "2 Months",
      desc: "Start from zero and build strong coding fundamentals—variables, loops, functions, OOP—and complete mini-projects with confidence.",
      stars: "★★★★★",
      rating: "5.0",
      students: 58,
      url: "/courses/kidz-space/python-core",
      isSummerCamp: true
    },
    {
      title: "Advanced Python",
      img: "/images/KidsImages/kids3.webp",
      duration: "2 Months",
      desc: "Level up with file handling, modules, APIs, testing, and best practices—prepare for automation, data, and AI tracks. Take it to next level",
      stars: "★★★★☆",
      rating: "4.8",
      students: 39,
      url: "/courses/kidz-space/advanced-python",
      isSummerCamp: true
    },
    {
      title: "C Programming",
      img: "/images/KidsImages/kids4.webp",
      duration: "2 Months",
      desc: "Understand how computers really work. Learn memory, pointers, arrays, and problem-solving that shapes logic for any language.",
      stars: "★★★★☆",
      rating: "4.0",
      students: 47,
      url: "/courses/kidz-space/c-programming"
    },
    {
      title: "CPP",
      img: "/images/KidsImages/kids5.webp",
      duration: "2 Months",
      desc: "Build high-performance apps with OOP, STL, and problem patterns used in competitive programming and real systems.",
      stars: "★★★★★",
      rating: "5.0",
      students: 34,
      url: "/courses/kidz-space/cpp-programming"
    },
    {
      title: "SQL",
      img: "/images/KidsImages/kids6.webp",
      duration: "1 Month",
      desc: "Speak the language of data. Learn queries, joins, aggregations, and build dashboards and insights with confidence.",
      stars: "★★★★☆",
      rating: "4.0",
      students: 41,
      url: "/courses/kidz-space/sql-for-kids"
    },
    {
      title: "Graphic Designing",
      img: "/images/KidsImages/kids7.webp",
      duration: "3 Months",
      desc: "Create eye-catching posters, thumbnails, and brand logos. Learn color, typography, and composition with hands-on projects.",
      stars: "★★★★★",
      rating: "5.0",
      students: 37,
      url: "/courses/kidz-space/graphic-designing"
    },
    {
      title: "AI & ML",
      img: "/images/KidsImages/kids1.webp",
      duration: "3 Months",
      desc: "Step into the future. Learn data prep, models, and decision-making. Start applying AI concepts in beginner-friendly projects.",
      stars: "★★★★★",
      rating: "5.0",
      students: 29,
      url: "/courses/kidz-space/ai-and-ml"
    },
  ];
  return (
    <div className="kidz-page color-bg">
      <KidsLoader isLoading={isLoading} />

      <KidsHero />

      { <BannerSlider banners={kidsBanners} forceEnquiry={true} /> }



      {/* Why Choose Urbancode for Kids Section */}
      <section className="why-choose-kids py-5">
        <div className="container text-center">
          {/* Heading */}
          <h2 className="kids-heading fw-semibold mb-3">
            Why Choose <span className="text-success text-shine">Urbancode for Kids?</span>
          </h2>

          {/* Subheading */}
          {/* <p className="kids-subheading mx-auto mb-5">
            More than a coding school, we craft transformative learning journeys that spark curiosity,
            foster creativity, and empower young minds to become tomorrow's innovators.
          </p> */}

          {/* Video Testimonial with Content */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="testimonial-container-card card border-0 p-4 p-md-5" style={{ borderRadius: "24px", background: "#fff", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>
                <div className="row align-items-center">
                  {/* Video Column */}
                  <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
                    <div style={{ width: "100%", maxWidth: "300px" }}>
                      <video 
                        src="/videos/kids-testimonial-video1.mp4#t=0.5" 
                  controls 
                  autoPlay={false}
                  playsInline
                  preload="auto"
                  className="bg-dark"
                  style={{
                    width: "100%",
                    aspectRatio: "9 / 16",
                    height: "auto",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "20px",
                    display: "block",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="col-md-6 text-center text-md-start px-md-5">
              <h3 className="fw-bold mb-1" style={{ color: '#2C3E50', fontSize: '28px' }}>Adhrit</h3>
              <p className="text-success fw-semibold mb-3 fs-5">Course: Python</p>
              
              <div className="position-relative text-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mb-2" viewBox="0 0 16 16" style={{ color: '#1ABC9C', opacity: 0.4 }}>
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                </svg>
                <p className="fs-6 fst-italic text-muted fw-medium" style={{ lineHeight: "1.8" }}>
                  "My experience with the Python course has been amazing. The instructors make complex concepts easy to understand through fun projects. I've learned how to build my own games and interactive applications from scratch. Urbancode provides the perfect environment for young coders like me to experiment, learn, and grow my skills for the future!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      <div id="kids-courses-section" className="container py-5">
        <h2 className="section-title">Our Kids <span className='text-success text-shine'>&nbsp;Courses</span></h2>
        <p className="section-subtitle text-muted">
          Explore expertly designed courses tailored for young learners. Each program blends engaging, interactive activities with structured learning outcomes to build strong foundational skills and future-ready knowledge.
        </p>

        {/* ☀️ Summer Camp Banner */}
        <div className="summer-camp-banner">
          <div className="summer-camp-banner-inner">
            <div className="sc-banner-icon">☀️</div>
            <div className="sc-banner-text">
              <span className="sc-banner-title">Summer Camp 2026</span>
              <span className="sc-banner-sub">Limited seats · Enroll before they fill up!</span>
            </div>
            
          </div>
        </div>

        {/* Summer Camp Courses — First 3 */}
        <div className="row g-4 mb-3">
          {courses.filter(c => c.isSummerCamp).map((course, index) => (
            <div className="col-md-6 col-lg-4" key={`sc-${index}`}>
              <div className="course-card summer-camp-card shadow-md">
                {/* Diagonal ribbon */}
                <div className="sc-ribbon"><span>☀️ Summer Camp</span></div>
                <a href={course.url} style={{textDecoration:"none"}}>
                  <div className="position-relative">
                    <Image
                      src={course.img}
                      width={400}
                      height={250}
                      alt={course.title}
                      className="w-100 course-img sc-course-img"
                    />
                    <span className="badge-duration">{course.duration}</span>
                  </div>
                  <div className="course-body">
                    <h5 className="kids-course-title">{course.title}</h5>
                    <p className="course-desc">{course.desc}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                      <div className="course-rating-pill">
                        <Star size={14} fill="#FFD700" color="#FFD700" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="course-students-pill">
                        <Users size={14} />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="course-duration-pill">
                        <Clock size={14} />
                        <span>{course.duration}</span>
                      </div>
                      <button className="btn btn-enroll sc-enroll-btn" onClick={() => setSelectedCourse(course)}>Enroll Now</button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="sc-divider">
          <span>More Courses</span>
        </div>

        {/* Regular Courses */}
        <div className="row g-4">
          {courses.filter(c => !c.isSummerCamp).map((course, index) => (
            <div className="col-md-6 col-lg-4" key={`reg-${index}`}>
              <div className="course-card shadow-md">
                <a href={course.url} style={{textDecoration:"none"}}>
                  <div className="position-relative">
                    <Image
                      src={course.img}
                      width={400}
                      height={250}
                      alt={course.title}
                      className="w-100 course-img"
                    />
                    <span className="badge-duration">{course.duration}</span>
                  </div>
                  <div className="course-body">
                    <h5 className="kids-course-title">{course.title}</h5>
                    <p className="course-desc">{course.desc}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                      <div className="course-rating-pill">
                        <Star size={14} fill="#FFD700" color="#FFD700" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="course-students-pill">
                        <Users size={14} />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="course-duration-pill">
                        <Clock size={14} />
                        <span>{course.duration}</span>
                      </div>
                      <button className="btn btn-enroll fs-11" onClick={() => setSelectedCourse(course)}>Enroll Now</button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedCourse && (
          <EnquiryFormModal
            isOpen={!!selectedCourse}
            onClose={() => setSelectedCourse(null)}
            courseName={selectedCourse.title}
          />
        )}
      </div>



      {/* Why Choose Content (moved from above) */}
      <section className="why-choose-features py-5">
        <div className="container text-center">
          <h2 className="kids-heading fw-semibold mb-3">
            Learning Made <span className="text-success text-shine">Fun &amp; Effective</span>
          </h2>
          <p className="kids-subheading mx-auto mb-5 text-muted" style={{ maxWidth: '650px', fontSize: '16px', lineHeight: '1.6' }}>
            Our structured approach helps kids build logic, creativity, and confidence through real-world programming.
          </p>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="kids-card card h-100 p-4 text-center">
                <div className="icon-wrapper mx-auto mb-3 d-flex align-items-center justify-content-center">
                  <div className="overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#1ABC9C' }} width="32" height="32" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
                      <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                    </svg>
                  </div>
                </div>
                <h5 className="kids-card-title fw-semibold">Fun Learning</h5>
                <p className="kids-card-text">
                  We make learning exciting through games, interactive projects, and hands-on activities that keep kids engaged and motivated.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="kids-card card h-100 p-4 text-center">
                <div className="icon-wrapper mx-auto mb-3 d-flex align-items-center justify-content-center">
                  <div className="overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#1ABC9C' }} width="32" height="32" fill="currentColor" className="bi bi-person-fill-gear" viewBox="0 0 16 16">
                      <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                    </svg>
                  </div>
                </div>
                <h5 className="kids-card-title fw-semibold">Expert Mentors</h5>
                <p className="kids-card-text">
                  Our approach encourages kids to think outside the box and come up with creative solutions to real-world problems.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="kids-card card h-100 p-4 text-center">
                <div className="icon-wrapper mx-auto mb-3 d-flex align-items-center justify-content-center">
                  <div className="overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#1ABC9C' }} width="32" height="32" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
                    </svg>
                  </div>
                </div>
                <h5 className="kids-card-title fw-semibold">Hands-On Projects</h5>
                <p className="kids-card-text">
                  Kids collaborate on projects, learning the value of teamwork, communication, and problem-solving together.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="kids-card card h-100 p-4 text-center">
                <div className="icon-wrapper mx-auto mb-3 d-flex align-items-center justify-content-center">
                  <div className="overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#1ABC9C' }} width="32" height="32" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                    </svg>
                  </div>
                </div>
                <h5 className="kids-card-title fw-semibold">Future-Ready Skills</h5>
                <p className="kids-card-text">
                  We prepare kids with skills for tomorrow, blending creativity, logic, and digital literacy to make them future-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Journey Section */}
      <section className="tech-journey my-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-md-6">
              <h3 className="tech-heading fw-bold mb-3">
                Ready to Start Your Child's Tech Journey?
              </h3>
              <p className="tech-subheading mb-4">
                Join hundreds of families who trust Urbancode to provide quality, engaging,
                and age-appropriate tech education for their children.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn-demo bg-success" onClick={() => setShowEnquiry(true)}>Book Free Demo Class</button>
                {showEnquiry && (
                  <EnquiryFormModal
                    isOpen={showEnquiry}
                    onClose={() => setShowEnquiry(false)}
                    courseName="Kids Courses - Free Demo Class"
                    onSuccess={() => {
                      if (typeof window !== 'undefined') {
                        localStorage.setItem('kidsPlayZoneUnlocked', 'true');
                        setLevelsUnlocked(true);
                      }
                    }}
                  />
                )}
                &nbsp;&nbsp;
                <a href="callto:+919878798797" className="btn-link text-success">Speak with Counselor →</a>
              </div>
            </div>

            {/* Right Stats */}
            <div className="col-md-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="stat-card text-center">
                    <h4>8-15</h4>
                    <p>Age Range</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card text-center">
                    <h4>8+</h4>
                    <p>Course Options</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card text-center">
                    <h4>Live</h4>
                    <p>Interactive Classes</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card text-center">
                    <h4>1:5</h4>
                    <p>Student Ratio</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Kidz;