'use client';
import './Kidz.css';
import Image from 'next/image';
import EnquiryFormModal from '../components/common/EnquiryFormModal';
import { useState, useEffect } from 'react';
import KidsLoader from './KidsLoader';
import BannerSlider from '../components/common/BannerSlider';
import KidsHero from './KidsHero';
import { Star, Users, Clock, X, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const kidsFaqs = [
  // Slide 1 — Enrolment & Age
  {
    question: "What is the minimum age to join Urbancode Kids Courses?",
    answer: "Our Kids Courses are designed for children aged 8 to 15 years. We offer beginner-friendly tracks in Web Development, Python, C, C++, SQL, Graphic Designing, and AI & ML — all structured to suit young learners step-by-step.",
    color: "pink",
    emoji: "🎉"
  },
  {
    question: "Do kids need any prior coding experience to enroll?",
    answer: "Absolutely not! All our kids programs are built from scratch. Children start with the very basics — no prior programming knowledge needed. Our instructors use fun analogies, games, and visual tools to make learning easy and engaging.",
    color: "blue",
    emoji: "🚀"
  },
  {
    question: "Are the Kids Courses taught online or in-person at Urbancode?",
    answer: "Urbancode offers both online live sessions and in-person classroom training for kids. Parents can choose the mode that suits their child best. All live online sessions are interactive with screen-sharing, quizzes, and real-time Q&A.",
    color: "yellow",
    emoji: "💻"
  },
  {
    question: "What is the batch size for kids coding classes at Urbancode?",
    answer: "We maintain a small student-to-mentor ratio of 1:5 to ensure every child gets personalized attention. This means mentors can monitor each student's progress, answer questions promptly, and keep the learning pace comfortable for every child.",
    color: "green",
    emoji: "👩‍💻"
  },
  // Slide 2 — Curriculum & Courses
  {
    question: "What will my child learn in the Junior Web Developer course?",
    answer: "In our Junior Web Developer course (3 months), kids learn HTML, CSS, and JavaScript — the building blocks of every website. They build real, interactive web pages and complete projects that they can proudly show in a portfolio.",
    color: "purple",
    emoji: "🌐"
  },
  {
    question: "Why should kids learn Python at Urbancode Kids Space?",
    answer: "Python is the world's most beginner-friendly language and powers AI, data science, automation, and web backends. At Urbancode, kids learn Python through games, mini-projects, and challenges — making the process genuinely fun and deeply educational.",
    color: "orange",
    emoji: "🐍"
  },
  {
    question: "Is the AI & ML course suitable for kids with no math background?",
    answer: "Yes! Our AI & ML for Kids course starts with everyday examples of artificial intelligence before introducing concepts. We use visual models, storytelling, and beginner-friendly Python to ensure kids grasp AI ideas without needing advanced math.",
    color: "teal",
    emoji: "🤖"
  },
  {
    question: "What does the Kids Graphic Designing course cover?",
    answer: "The Graphic Designing course (3 months) teaches children how to create posters, logos, thumbnails, and social media graphics. Kids learn about color theory, typography, layout, and composition using industry tools — building a portfolio of creative work along the way.",
    color: "pink",
    emoji: "🎨"
  },
  // Slide 3 — Summer Camp & Schedule
  {
    question: "What is the Urbancode Kids Summer Camp 2026?",
    answer: "The Urbancode Kids Summer Camp 2026 is an intensive, project-based coding program running during school holidays. Kids can join Web Development or Python with AI tracks. Seats are limited — enroll early to secure your child's spot!",
    color: "yellow",
    emoji: "☀️"
  },
  {
    question: "How long are the Kids Courses and what is the schedule?",
    answer: "Course durations range from 1 month (SQL) to 3 months (Web Dev, Graphic Design, AI & ML). Classes are scheduled on weekdays or weekends to suit school timings. Parents can choose a convenient batch after discussing with our counselors.",
    color: "blue",
    emoji: "📅"
  },
  {
    question: "Will my child receive a certificate after completing the course?",
    answer: "Yes! Every child who completes an Urbancode Kids Course receives an official Urbancode Edutech completion certificate. This certificate recognizes their learning achievement and can be a proud addition to their academic portfolio.",
    color: "green",
    emoji: "🏆"
  },
  {
    question: "How can I book a free demo class for my child at Urbancode?",
    answer: "Booking a free demo class is easy! Click the 'Book Free Demo Class' button on this page, fill in your child's details, and our academic counselor will confirm a demo session within 24 hours. Alternatively, call us directly at +91 98787 98797.",
    color: "purple",
    emoji: "📞"
  }
];

const Kidz = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [levelsUnlocked, setLevelsUnlocked] = useState(false);
  const [showTestimonialPopup, setShowTestimonialPopup] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => setIsLoading(false), 3000);

    if (localStorage.getItem('kidsPlayZoneUnlocked') === 'true') {
      setLevelsUnlocked(true);
    }

    // Show popup on every page refresh — no sessionStorage gate
    const popupTimer = setTimeout(() => {
      setShowTestimonialPopup(true);
    }, 4000);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(popupTimer);
    };
  }, []);

  const closePopup = () => setShowTestimonialPopup(false);

  const scrollToCourses = () => {
    closePopup();
    setTimeout(() => {
      const section = document.getElementById('kids-courses-section');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

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
      isSelectMode: true
    }
  ];

  const courses = [
    {
      title: "Junior Web Developer",
      img: "/images/KidsImages/kids8.webp",
      duration: "3 Months",
      desc: "Kickstart your journey as a developer! Learn HTML, CSS, and JavaScript to design interactive websites and gain real-world project skills.",
      rating: "5.0", students: 42,
      url: "/courses/kidz-space/junior-web-development",
      isSummerCamp: true,
      accent: "#3b82f6", emoji: "🌐"
    },
    {
      title: "Core Python",
      img: "/images/KidsImages/kids2.webp",
      duration: "2 Months",
      desc: "Start from zero and build strong coding fundamentals—variables, loops, functions, OOP—and complete mini-projects with confidence.",
      rating: "5.0", students: 58,
      url: "/courses/kidz-space/python-core",
      isSummerCamp: true,
      accent: "#f59e0b", emoji: "🐍"
    },
    {
      title: "Advanced Python",
      img: "/images/KidsImages/kids3.webp",
      duration: "2 Months",
      desc: "Level up with file handling, modules, APIs, testing, and best practices—prepare for automation, data, and AI tracks.",
      rating: "4.8", students: 39,
      url: "/courses/kidz-space/advanced-python",
      isSummerCamp: true,
      accent: "#10b981", emoji: "⚡"
    },
    {
      title: "C Programming",
      img: "/images/KidsImages/kids4.webp",
      duration: "2 Months",
      desc: "Understand how computers really work. Learn memory, pointers, arrays, and problem-solving that shapes logic for any language.",
      rating: "4.0", students: 47,
      url: "/courses/kidz-space/c-programming",
      accent: "#8b5cf6", emoji: "🔧"
    },
    {
      title: "CPP",
      img: "/images/KidsImages/kids5.webp",
      duration: "2 Months",
      desc: "Build high-performance apps with OOP, STL, and problem patterns used in competitive programming and real systems.",
      rating: "5.0", students: 34,
      url: "/courses/kidz-space/cpp-programming",
      accent: "#ef4444", emoji: "🚀"
    },
    {
      title: "SQL",
      img: "/images/KidsImages/kids6.webp",
      duration: "1 Month",
      desc: "Speak the language of data. Learn queries, joins, aggregations, and build dashboards and insights with confidence.",
      rating: "4.0", students: 41,
      url: "/courses/kidz-space/sql-for-kids",
      accent: "#0ea5e9", emoji: "🗄️"
    },
    {
      title: "Graphic Designing",
      img: "/images/KidsImages/kids7.webp",
      duration: "3 Months",
      desc: "Create eye-catching posters, thumbnails, and brand logos. Learn color, typography, and composition with hands-on projects.",
      rating: "5.0", students: 37,
      url: "/courses/kidz-space/graphic-designing",
      accent: "#ec4899", emoji: "🎨"
    },
    {
      title: "AI & ML",
      img: "/images/KidsImages/kids1.webp",
      duration: "3 Months",
      desc: "Step into the future. Learn data prep, models, and decision-making. Start applying AI concepts in beginner-friendly projects.",
      rating: "5.0", students: 29,
      url: "/courses/kidz-space/ai-and-ml",
      accent: "#6366f1", emoji: "🤖"
    },
  ];

  return (
    <div className="kidz-page color-bg">
      <KidsLoader isLoading={isLoading} />

      {/* ── Testimonial Video — Every-refresh Popup ── */}
      {showTestimonialPopup && (
        <>
          {/* Backdrop */}
          <div className="kids-testimonial-backdrop" onClick={closePopup} />

          {/* Modal */}
          <div className="kids-testimonial-modal">
            {/* Close button */}
            <button
              onClick={closePopup}
              aria-label="Close"
              className="kids-testimonial-close"
            >
              <X size={15} color="#374151" />
            </button>

            {/* Heading */}
            <div className="kids-testimonial-heading">
              <p className="kids-testimonial-badge"> Student Story</p>
              <h2 className="kids-testimonial-title">Hear it from a real student</h2>
              <p className="kids-testimonial-subtitle">
                See how Urbancode made learning come alive for Adhrit.
              </p>
            </div>

            {/* Video + Quote side by side */}
            <div className="kids-testimonial-body">
              {/* Video */}
              <div className="kids-testimonial-video-wrap">
                <video
                  src="/videos/kids-testimonial-video1.mp4#t=0.5"
                  controls
                  playsInline
                  preload="auto"
                  className="kids-testimonial-video"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Quote */}
              <div className="kids-testimonial-quote-wrap">
                <h3 className="kids-testimonial-student-name">Adhrit</h3>
                <p className="kids-testimonial-course-label">Course: Python</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#1ABC9C"
                  className="kids-testimonial-quote-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <p className="kids-testimonial-quote-text">
                  &ldquo;My experience with the Python course has been amazing. The instructors make complex concepts easy to understand through fun projects. I&apos;ve learned how to build my own games and applications from scratch!&rdquo;
                </p>

                {/* Star rating */}
                <div className="kids-testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFD700" color="#FFD700" />
                  ))}
                  <span className="kids-testimonial-stars-count">5.0</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="kids-testimonial-cta">
              <button onClick={scrollToCourses} className="kids-testimonial-cta-btn">
                 Explore Courses
              </button>
            </div>
          </div>
        </>
      )}

      <KidsHero />
      {<BannerSlider banners={kidsBanners} forceEnquiry={true} />}

       {/* ── Unlock Your Child's Potential — on page ── */}
      <section className="why-choose-features">
        <div className="container py-5">
          <h2 className="section-title">
            Unlock Your Child's  <span className="text-success text-shine"> Potential</span>
          </h2>
          <p className="section-subtitle text-muted">
            Our structured approach helps kids build logic, creativity, and confidence through real-world programming — made fun from day one.
          </p>

          <div className="wcf-grid">
            <div className="wcf-card">
              <div className="wcf-card-inner">
                <div className="wcf-card-front">
                  <div className="wcf-icon-wrap wcf-icon-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                    </svg>
                  </div>
                  <h3 className="wcf-card-title">Fun Learning</h3>
                  <div className="wcf-card-num">01</div>
                </div>
                <div className="wcf-card-back wcf-back-green">
                  <p className="wcf-card-text">Games, challenges, and interactive projects keep kids engaged while building real skills they'll use for life.</p>
                </div>
              </div>
            </div>

            <div className="wcf-card">
              <div className="wcf-card-inner">
                <div className="wcf-card-front">
                  <div className="wcf-icon-wrap wcf-icon-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                    </svg>
                  </div>
                  <h3 className="wcf-card-title">Expert Mentors</h3>
                  <div className="wcf-card-num">02</div>
                </div>
                <div className="wcf-card-back wcf-back-teal">
                  <p className="wcf-card-text">Industry professionals who simplify complex concepts and inspire young coders with patience and passion.</p>
                </div>
              </div>
            </div>

            <div className="wcf-card">
              <div className="wcf-card-inner">
                <div className="wcf-card-front">
                  <div className="wcf-icon-wrap wcf-icon-yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
                    </svg>
                  </div>
                  <h3 className="wcf-card-title">Hands-On Projects</h3>
                  <div className="wcf-card-num">03</div>
                </div>
                <div className="wcf-card-back wcf-back-yellow">
                  <p className="wcf-card-text">Kids build real apps, websites, and games — gaining portfolio-ready experience from their very first class.</p>
                </div>
              </div>
            </div>

            <div className="wcf-card">
              <div className="wcf-card-inner">
                <div className="wcf-card-front">
                  <div className="wcf-icon-wrap wcf-icon-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                    </svg>
                  </div>
                  <h3 className="wcf-card-title">Future-Ready Skills</h3>
                  <div className="wcf-card-num">04</div>
                </div>
                <div className="wcf-card-back wcf-back-purple">
                  <p className="wcf-card-text">Python, AI, Web Dev, and more — skills that give children a head-start in tomorrow's digital economy.</p>
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

        {/* Summer Camp Banner */}
        {/* Summer Camp Courses */}
        <div className="row g-4 mb-3">
          {courses.filter(c => c.isSummerCamp).map((course, index) => (
            <div className="col-md-6 col-lg-4" key={`sc-${index}`}>
              <div className="kc-card kc-card-gold summer-camp-card shadow-md">
                <div className="sc-ribbon"><span>☀️ Summer Camp</span></div>
                <a href={course.url} style={{ textDecoration: "none" }}>
                  <div className="kc-img-wrap position-relative">
                    <Image src={course.img} width={400} height={250} alt={course.title} className="w-100 kc-img sc-course-img" />
                  </div>
                  <div className="kc-body">
                    <h5 className="kc-title">{course.title}</h5>
                    <p className="kc-desc">{course.desc}</p>
                    <div className="kc-meta">
                      <span className="kc-pill kc-pill-star"><Star size={13} fill="#FFD700" color="#FFD700" /> {course.rating}</span>
                      <span className="kc-pill kc-pill-students"><Users size={13} /> {course.students} students</span>
                      <span className="kc-pill kc-pill-clock"><Clock size={13} /> {course.duration}</span>
                    </div>
                    <button className="kc-enroll-btn kc-enroll-gold" onClick={e => { e.preventDefault(); setSelectedCourse(course); }}>Enroll Now →</button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="sc-divider"><span>More Courses</span></div>

        {/* Regular Courses */}
        <div className="row g-4">
          {courses.filter(c => !c.isSummerCamp).map((course, index) => (
            <div className="col-md-6 col-lg-4" key={`reg-${index}`}>
              <div className="kc-card kc-card-silver shadow-md">
                <a href={course.url} style={{ textDecoration: "none" }}>
                  <div className="kc-img-wrap position-relative">
                    <Image src={course.img} width={400} height={250} alt={course.title} className="w-100 kc-img" />
                  </div>
                  <div className="kc-body">
                    <h5 className="kc-title">{course.title}</h5>
                    <p className="kc-desc">{course.desc}</p>
                    <div className="kc-meta">
                      <span className="kc-pill kc-pill-star"><Star size={13} fill="#FFD700" color="#FFD700" /> {course.rating}</span>
                      <span className="kc-pill kc-pill-students"><Users size={13} /> {course.students} students</span>
                      <span className="kc-pill kc-pill-clock"><Clock size={13} /> {course.duration}</span>
                    </div>
                    <button className="kc-enroll-btn kc-enroll-silver" onClick={e => { e.preventDefault(); setSelectedCourse(course); }}>Enroll Now →</button>
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


      {/* ── Kids FAQ Section ── */}
      <KidsFaqSection />

      {/* Tech Journey Section */}
      <section className="tech-journey my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="tech-heading fw-bold mb-3">Ready to Start Your Child's Tech Journey?</h3>
              <p className="tech-subheading mb-4">
                Join hundreds of families who trust Urbancode to provide quality, engaging, and age-appropriate tech education for their children.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn-demo bg-success" onClick={() => setShowEnquiry(true)}>Book Free Demo Class</button>
                {showEnquiry && (
                  <EnquiryFormModal
                    isOpen={showEnquiry}
                    onClose={() => setShowEnquiry(false)}
                    courseName="Kids Courses - Free Demo Class"
                    onSuccess={() => {
                      localStorage.setItem('kidsPlayZoneUnlocked', 'true');
                      setLevelsUnlocked(true);
                    }}
                  />
                )}
                <a href="callto:+919878798797" className="btn-link text-success">Speak with Counselor →</a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row g-3">
                {[
                  { val: '8-15', label: 'Age Range' },
                  { val: '8+', label: 'Course Options' },
                  { val: 'Live', label: 'Interactive Classes' },
                  { val: '1:5', label: 'Student Ratio' },
                ].map((s, i) => (
                  <div className="col-6" key={i}>
                    <div className="stat-card text-center">
                      <h4>{s.val}</h4>
                      <p>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ── KidsFaqSection Component ── */
const kidsFaqColors = {
  pink:   { bg: '#fff0f6', border: '#f472b6', icon: '#e91e8c', dot: '#f472b6' },
  blue:   { bg: '#eff6ff', border: '#60a5fa', icon: '#2563eb', dot: '#60a5fa' },
  yellow: { bg: '#fffbeb', border: '#fbbf24', icon: '#d97706', dot: '#fbbf24' },
  green:  { bg: '#f0fdf4', border: '#4ade80', icon: '#16a34a', dot: '#4ade80' },
  purple: { bg: '#faf5ff', border: '#a78bfa', icon: '#7c3aed', dot: '#a78bfa' },
  orange: { bg: '#fff7ed', border: '#fb923c', icon: '#ea580c', dot: '#fb923c' },
  teal:   { bg: '#f0fdfa', border: '#2dd4bf', icon: '#0d9488', dot: '#2dd4bf' },
};

const KidsFaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const totalPages = Math.ceil(kidsFaqs.length / itemsPerPage);
  const currentFaqs = kidsFaqs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const nextSlide = () => { setCurrentPage((prev) => (prev + 1) % totalPages); setActiveIndex(null); };
  const prevSlide = () => { setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages); setActiveIndex(null); };

  useEffect(() => {
    let interval;
    if (activeIndex === null) {
      interval = setInterval(() => nextSlide(), 7000);
    }
    return () => clearInterval(interval);
  }, [activeIndex, currentPage, totalPages]);

  return (
    <motion.section
      id="kids-faq-section"
      className="kids-faq-section"
      aria-label="Frequently Asked Questions about Kids Coding Courses"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      {/* SEO Schema — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": kidsFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <div className="container py-5">
        {/* Heading */}
        <h2 className="section-title mb-5">
          Frequently Asked &nbsp;<span className="text-success text-shine">Questions</span>
        </h2>

        <div className="row align-items-start g-4">
          {/* Left Panel */}
          <div className="col-lg-4 col-md-12 order-2 order-lg-1">
            <div className="kids-faq-left">
              <h4 className="kids-faq-left-title d-none d-md-block">
                Frequently<br />Asked<br />Questions
              </h4>
              <div className="kids-faq-contact-box">
                <h5 className="kids-faq-contact-heading">Still have a question?</h5>
                <p className="kids-faq-contact-text">
                  Our counselors are happy to help you find the perfect course for your child!
                </p>
                <a
                  href="mailto:admin@urbancode.in"
                  className="kids-faq-mail-btn"
                  id="kids-faq-email-btn"
                >
                  Send us a message
                </a>
              </div>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="col-lg-8 col-md-12 order-1 order-lg-2">
            <div className="kids-faq-accordion-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="kids-faq-page-content"
                >
                  {currentFaqs.map((faq, index) => {
                    const palette = kidsFaqColors[faq.color] || kidsFaqColors.green;
                    const isOpen = activeIndex === index;
                    return (
                      <div
                        key={index}
                        className="kids-faq-item mb-3"
                        style={{
                          '--faq-bg': palette.bg,
                          '--faq-border': palette.border,
                          '--faq-icon': palette.icon,
                        }}
                        id={`kids-faq-item-${currentPage * itemsPerPage + index}`}
                      >
                        <button
                          className={`kids-faq-question ${isOpen ? 'active' : ''}`}
                          onClick={() => toggleFAQ(index)}
                          aria-expanded={isOpen}
                          id={`kids-faq-btn-${currentPage * itemsPerPage + index}`}
                        >
                          <span className="kids-faq-q-text">{faq.question}</span>
                          <span className="kids-faq-q-icon">
                            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                          </span>
                        </button>
                        <div
                          className="kids-faq-answer"
                          style={{ maxHeight: isOpen ? '400px' : '0px' }}
                        >
                          <p className="kids-faq-answer-text">{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination */}
            <div className="kids-faq-pagination mt-4">
              <button
                className="kids-faq-nav-btn"
                onClick={prevSlide}
                aria-label="Previous FAQ page"
                id="kids-faq-prev-btn"
              >
                <ChevronLeft size={14} />
              </button>
              <div className="kids-faq-dots">
                {[...Array(totalPages)].map((_, i) => {
                  const dotColor = ['#f472b6','#60a5fa','#fbbf24','#4ade80'][i % 4];
                  return (
                    <span
                      key={i}
                      className={`kids-faq-dot ${currentPage === i ? 'active' : ''}`}
                      style={currentPage === i ? { background: dotColor, boxShadow: `0 0 8px ${dotColor}` } : {}}
                      onClick={() => { setCurrentPage(i); setActiveIndex(null); }}
                      aria-label={`FAQ page ${i + 1}`}
                    />
                  );
                })}
              </div>
              <button
                className="kids-faq-nav-btn"
                onClick={nextSlide}
                aria-label="Next FAQ page"
                id="kids-faq-next-btn"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Kidz;