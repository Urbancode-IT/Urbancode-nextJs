'use client';
import './Kidz.css';
import Image from 'next/image';
import EnquiryFormModal from '../components/common/EnquiryFormModal';
import { useState } from 'react';
const Kidz = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const courses = [
    {
      title: "Junior Web Developer",
      img: "/images/KidsImages/junior.png",
      duration: "3 Month",
      desc: "Kickstart your journey as a developer! Learn HTML, CSS, and JavaScript to design interactive websites and gain real-world project skills.",
      stars: "★★★★★",
      rating: "5.0",
      students: 42,
    },
   
    {
      title: "Python Core",
      img: "/images/KidsImages/pythonCore.png",
      duration: "2 Month",
      desc: "Start from zero and build strong coding fundamentals—variables, loops, functions, OOP—and complete mini-projects with confidence.",
      stars: "★★★★★",
      rating: "5.0",
      students: 58,
    },
    {
      title: "Advanced Python",
      img: "/images/KidsImages/advancePython.png",
      duration: "2 Month",
      desc: "Level up with file handling, modules, APIs, testing, and best practices—prepare for automation, data, and AI tracks. Take it to next level",
      stars: "★★★★☆",
      rating: "4.0",
      students: 39,
    },
    {
      title: "C Programming",
      img: "/images/KidsImages/C.png",
      duration: "2 Month",
      desc: "Understand how computers really work. Learn memory, pointers, arrays, and problem-solving that shapes logic for any language.",
      stars: "★★★★☆",
      rating: "4.0",
      students: 47,
    },
    {
      title: "C++",
      img: "/images/KidsImages/cplus.png",
      duration: "2 Month",
      desc: "Build high-performance apps with OOP, STL, and problem patterns used in competitive programming and real systems.",
      stars: "★★★★★",
      rating: "5.0",
      students: 34,
    },
    {
      title: "SQL",
      img: "/images/KidsImages/sql.png",
      duration: "1 Month",
      desc: "Speak the language of data. Learn queries, joins, aggregations, and build dashboards and insights with confidence.",
      stars: "★★★★☆",
      rating: "4.0",
      students: 41,
    },
    {
      title: "Graphic Designing",
      img: "/images/KidsImages/new.jpg",
      duration: "3 Month",
      desc: "Create eye-catching posters, thumbnails, and brand logos. Learn color, typography, and composition with hands-on projects.",
      stars: "★★★★★",
      rating: "5.0",
      students: 37,
    },
    {
      title: "AI & ML",
      img: "/images/KidsImages/aiml.png",
      duration: "3 Month",
      desc: "Step into the future. Learn data prep, models, and decision-making. Start applying AI concepts in beginner-friendly projects.",
      stars: "★★★★★",
      rating: "5.0",
      students: 29,
    },
  ];
  return (
    <div className="kidz-page color-bg">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Left Text */}
            <div className="hero-text-area col-md-6 col-lg-6">
              <h1 className="hero-title">Next-Gen <span className="text-success text-shine">Learning</span></h1>
              <p className="hero-text text-muted">
                At Urbancode Edutech, we nurture young minds through structured coding,
                cognitive learning and problem-solving activities. Our programs combine
                hands-on projects, logical reasoning, and digital creativity to strengthen
                critical thinking and prepare kids to become the innovators and tech leaders of tomorrow.
              </p>
            </div>

            {/* Right Image */}
            <div className="hero-img-area col-md-6 col-lg-6 ">
              <img src="/images/KidsImages/hero.png" alt="Kids learning" className="hero-img m-lg-5" />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <h2 className="section-title">Our Kids <span className='text-success text-shine'>&nbsp;Courses</span></h2>
        <p className="section-subtitle text-muted">
          Explore expertly designed courses tailored for young learners. Each program blends engaging, interactive activities with structured learning outcomes to build strong foundational skills and future-ready knowledge.
        </p>

        <div className="row g-5">
          {courses.map((course, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="course-card shadow-md">
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

                  <div className="rating d-flex justify-content-between">
                    <span>
                      <span className="rating-stars">{course.stars}</span> {course.rating}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-people-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 
                      5 3 5 4-1 1-1 1zm4-6a3 3 
                      0 1 0 0-6 3 3 0 0 0 0 
                      6m-5.784 6A2.24 2.24 0 0 
                      1 5 13c0-1.355.68-2.75 
                      1.936-3.72A6.3 6.3 0 0 
                      0 5 9c-4 0-5 3-5 4s1 1 
                      1 1zM4.5 8a2.5 2.5 0 1 
                      0 0-5 2.5 2.5 0 0 0 0 5" />
                      </svg>
                      {course.students}
                    </span>
                  </div>

                  <button
                    className=" btn btn-enroll fs-11"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Enroll now
                  </button>

                  {selectedCourse && (
                    <EnquiryFormModal
                      isOpen={!!selectedCourse}
                      onClose={() => setSelectedCourse(null)}
                      courseName={selectedCourse.title}
                    />
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Urbancode for Kids Section */}
      <section className="why-choose-kids py-5">
        <div className="container text-center">
          {/* Heading */}
          <h2 className="kids-heading fw-semibold mb-3">
            Why Choose <span className="text-success text-shine">Urbancode for Kids?</span>
          </h2>

          {/* Subheading */}
          <p className="kids-subheading mx-auto mb-5">
            More than a coding school, we craft transformative learning journeys that spark curiosity,
            foster creativity, and empower young minds to become tomorrow's innovators.
          </p>

          {/* Cards Row */}
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
                    courseName="Arrange a Free Demo Class"
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