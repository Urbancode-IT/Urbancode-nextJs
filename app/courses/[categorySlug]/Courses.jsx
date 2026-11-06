'use client';
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ListGroup
} from "react-bootstrap";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./Courses.css";
import coursesData from "./coursesData";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import { slugifyCategoryName, slugifyCourseTitle } from "@/lib/courseSlugs";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, Users, Clock } from "lucide-react";
import { FaPlus, FaMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getCategoryFaqList } from "@/app/data/seoCourseFaqs";
import FaqRichText, { faqAnswerPlainText } from "@/app/components/common/FaqRichText";
// import CourseAssistant from "@/app/components/CourseAssistant/CourseAssistant";

const categoryTools = {
  "Fullstack Development": [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_SharePoint.svg'
  ],
  "Software Testing": [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
  ],
  "Cloud and DevOps": [
    '/images/home/tools/aws.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg',
    'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg'
  ],
  "Programming Languages": [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
  ],
  "AI and Data Science": [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg',
    'https://cdn.svgporn.com/logos/microsoft-power-bi.svg',
    '/images/home/tableau_logo.svg',
  ],
  "UI UX Designing": [
    'https://cdn.svgporn.com/logos/figma.svg',
    'https://cdn.svgporn.com/logos/adobe-xd.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
  ],
  "Data Engineering": [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/apachespark/apachespark-original.svg',
    '/images/home/tools/aws.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  ],
  "Automation": [
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Power_Automate.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  ],
   "Languages":[
    "https://api.iconify.design/lucide:languages.svg",

  // Globe / Global Languages
  "https://api.iconify.design/lucide:globe.svg",

  // Translate
  // Languages (Blue)
  "https://api.iconify.design/lucide:languages.svg?color=%233B82F6",

  // Globe (Green)
  "https://api.iconify.design/lucide:globe.svg?color=%2310B981",

  // Translate (Purple)
  "https://api.iconify.design/tabler:language.svg?color=%238B5CF6",

  // Book / Learning (Orange)
  "https://api.iconify.design/lucide:book-open.svg?color=%23F59E0B",

  // Graduation (Red)
  "https://api.iconify.design/lucide:graduation-cap.svg?color=%23EF4444",

  // Speech (Cyan)
  "https://api.iconify.design/lucide:messages-square.svg?color=%2306B6D4",

  // IELTS Certificate (Emerald)
  "https://api.iconify.design/lucide:badge-check.svg?color=%23059669",

  // Dictionary (Indigo)
  "https://api.iconify.design/lucide:book-text.svg?color=%234F46E5",
   ]
};

const defaultTools = [
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
];

const categories = [
  "Fullstack Development",
  "Software Testing",
  "AI and Data Science",
  "Cloud and DevOps",
  "Programming Languages",
  "UI UX Designing",
  "Database",
  "Data Engineering",
  "Net Working",
  "Digital Marketing",
  "CRM",
  "Kidz Space",
  "Automation",
  "Languages",
];

const slugify = slugifyCategoryName;
const deslugify = (slug) =>
  categories.find((cat) => slugifyCategoryName(cat) === slug) || categories[0];

export default function Courses({ categorySlug }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  // Use categorySlug prop or default to first category
  const [activeCategory, setActiveCategory] = useState(
    categorySlug ? categorySlug.replace(/-/g, " ") : categories[0]
  );
  
  // Keep a safe slug for routing
  const currentCategorySlug = categorySlug || slugify(activeCategory);
  const faqData = getCategoryFaqList(currentCategorySlug);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.max(1, Math.ceil(faqData.length / itemsPerPage));
  const currentFaqs = faqData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  useEffect(() => {
    setCurrentPage(0);
    setOpenIndex(null);
  }, [currentCategorySlug]);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setOpenIndex(null);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setOpenIndex(null);
  };

  const isHighlightedByKeyword = (faq) => {
    if (faq.highlight) return true;
    const keywords = [".net", "angular", "mern stack", "next.js", "playwright"];
    const content = (faq.question + " " + faq.answer).toLowerCase();
    return keywords.some(keyword => content.includes(keyword));
  };

  // Autoplay Logic
  useEffect(() => {
    let interval;
    if (openIndex === null) { // Only auto-play if no question is open
      interval = setInterval(() => {
        nextSlide();
      }, 6000); // 6 seconds
    }
    return () => clearInterval(interval);
  }, [openIndex, currentPage, totalPages]);

  useEffect(() => {
    setActiveCategory(deslugify(categorySlug));
  }, [categorySlug]);

  const activeCategoryData = coursesData[activeCategory] || {};
  
  // Flatten all courses and inject their category slug for correct routing during search
  const allCourses = Object.entries(coursesData).flatMap(([categoryName, catData]) => 
    (catData.courses || []).map(course => ({
      ...course,
      parentCategorySlug: slugify(categoryName)
    }))
  );

  const filteredCourses =
    search.trim() === ""
      ? coursesData[activeCategory]?.courses || []
      : allCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(search.toLowerCase()) ||
          course.desc.toLowerCase().includes(search.toLowerCase())
      );

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="wrapper pb-5" style={{ paddingTop: 'var(--site-header-height, 72px)' }}>
      {/* Top Section */}
      <div className="container-fluid overall-bg overall-green-bg px-3 px-md-5 course-hero-wrapper">
        {/* Stars Background */}
        <div className="cosmic-stars">
          {isClient && [...Array(40)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                '--left': `${Math.random() * 100}%`,
                '--top': `${Math.random() * 100}%`,
                '--size': `${1 + Math.random() * 2}px`,
                '--delay': `${Math.random() * 5}s`,
                '--duration': `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <Container fluid>
          <Row className="py-5 align-items-center course-hero-row">
            <Col md={7} lg={7} className="my-auto course-hero-text-col">
              <h1 className="main-title">
                {(() => {
                  const title = activeCategoryData.mainCategoryDesc || "";
                  const words = title.split(" ");
                  if (words.length <= 2) {
                    return <span className="text-shine">{title}</span>;
                  }
                  const firstPart = words.slice(0, -2).join(" ");
                  const lastPart = words.slice(-2).join(" ");
                  return (
                    <>
                      {firstPart}{" "}
                      <span className="text-shine">{lastPart}</span>
                    </>
                  );
                })()}
              </h1>
              <p className="course-hero-subtext">{activeCategoryData.subDesc}</p>
            </Col>
            <Col md={5} lg={5} className="course-hero-scene-col">
              <div className="course-interactive-scene">
                <div className="saturn-scene">
                  <div className="saturn-planet">
                    <div className="planet-surface">
                      <Image
                        src="/images/courses-images/uclogo.png"
                        alt="Urbancode logo"
                        fill
                        sizes="80px"
                        className="planet-logo"
                      />
                    </div>
                    <div className="planet-glow"></div>
                  </div>
                  <div className="rings-container">
                    <div className="saturn-ring ring-1">
                      {(categoryTools[activeCategory] || defaultTools).slice(0, 8).map((logo, i, arr) => (
                        <div key={i} className="ring-item" style={{ '--index': i, '--total': arr.length }}>
                          <img src={logo} alt="tool" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Course Section */}
      <div className="container-fluid overall-bg px-3 px-md-5">
        <Container fluid className="min-vh-100 p-3 p-md-4">
          <Row>
            <Col xs={12}>
              <h1 className="text-center course-title mb-2">{activeCategory}</h1>
              <p className="text-center mb-4">{activeCategoryData.subHeading}</p>
            </Col>
          </Row>
          <Row>
            {/* Sidebar */}
            <Col xs={12} md={3} className="mb-4 mb-md-0">
              <h5 className="mb-3 text-start">Categories</h5>
              <ListGroup className="cust-bg rounded p-2 shadow-sm">
                {categories.map((cat) => (
                  <ListGroup.Item
                    key={cat}
                    action
                    active={activeCategory === cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      router.push(`/courses/${slugify(cat)}`);
                    }}
                    className="mb-1 border-0 rounded bg-transparent text-start"
                  >
                    {cat}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>

            {/* Main Content */}
            <Col xs={12} md={9}>
              {/* Search Bar */}
              <Form className="mb-4 d-flex flex-column flex-sm-row align-items-center gap-2">
                <Form.Control
                  type="text"
                  placeholder="Search Anything"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="rounded-pill search-bar w-100"
                />
                {search && (
                  <Button variant="outline-secondary" onClick={() => setSearch("")}>
                    ✕ Cancel search
                  </Button>
                )}
              </Form>

              {/* Courses Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Row>
                    {filteredCourses && filteredCourses.length > 0 ? (
                      filteredCourses.map((course, idx) => {
                        const courseSlug = slugifyCourseTitle(course.title);

                        return (
                          <Col xs={12} sm={6} lg={6} xl={4} className="mb-4" key={idx}>
                            <Card
                              className="h-100 card rounded-4 p-2 p-sm-3 p-md-3"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                const finalCategorySlug = course.parentCategorySlug || currentCategorySlug;
                                if (courseSlug === "mern-stack") {
                                  router.push(`/courses/fullstack-development/ai-powered-fullstack`);
                                } else {
                                  router.push(`/courses/${finalCategorySlug}/${courseSlug}`);
                                }
                              }}
                            >
                              <div
                                className="img-holder rounded-3 position-relative"
                                style={{ height: "200px" }}
                              >
                                {course.isNew && (
                                  <span className="course-new-badge">New</span>
                                )}
                                <Image
                                  src={course.img}
                                  alt={course.title}
                                  fill
                                  className="rounded-3 card-img object-contain"
                                />
                              </div>

                              <Card.Body className="p-0 pt-3">
                                <Card.Title className="card-course-title course-card-title-shine">
                                  {course.title}
                                </Card.Title>
                                <Card.Text className="text-muted course-desc">
                                  {course.desc}
                                </Card.Text>

                                {/* Tags */}
                                {/* {course.tags && course.tags.length > 0 && (
                                  <div className="course-tags-row">
                                    {course.tags.map((tag, ti) => (
                                      <span key={ti} className="course-tag-pill">{tag}</span>
                                    ))}
                                  </div>
                                )} */}

                                <div className="d-flex flex-wrap justify-content-between align-items-center mt-3 mb-2 gap-2">
                                  <div className="course-rating-pill">
                                    <Star size={14} fill="#FFD700" color="#FFD700" />
                                    <span>{course.rating}</span>
                                  </div>
                                  <div className="course-students-pill">
                                    <Users size={14} />
                                    <span>{course.students}</span>
                                  </div>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between align-items-center mt-2 gap-2">
                                  <div className="course-duration-pill">
                                    <Clock size={14} />
                                    <span>{course.duration}</span>
                                  </div>
                                  <Button
                                    variant="dark"
                                    size="sm"
                                    className="enroll-btn fs-11"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedCourse(course);
                                    }}
                                  >
                                    Enroll now
                                  </Button>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        );
                      })
                    ) : (
                      <p className="text-muted">No courses found.</p>
                    )}
                  </Row>
                </motion.div>
              </AnimatePresence>

              {/* Modal OUTSIDE the loop */}
              {selectedCourse && (
                <EnquiryFormModal
                  isOpen={!!selectedCourse}
                  onClose={() => setSelectedCourse(null)}
                  courseName={selectedCourse.title}
                  useCourseEnquiryApi={true}
                  leadPlace="Course category page — Enroll now"
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>

      {/* FAQ Section */}
      <motion.div 
          className="container-fluid overall-bg px-3 px-md-5 py-5 faq-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
      >
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      "mainEntity": faqData.map(faq => ({
                          "@type": "Question",
                          "name": faq.question,
                          "acceptedAnswer": {
                              "@type": "Answer",
                              "text": faqAnswerPlainText(faq.answer)
                          }
                      }))
                  })
              }}
          />
          <div className="text-center mb-5">
              <h2 className="section-main-title text-shine">Let's get you more info</h2>
          </div>
          <Container fluid className="p-0">
              <Row className="align-items-start g-4">
                  {/* Left Section */}
                  <Col lg={4} md={12} className="order-2 order-lg-1">
                      <div className="faq-left text-center text-lg-start">
                          <h4 className="faq-title fw-bold d-none d-md-block">Frequently <br /> Asked Questions</h4>
                          <div className="faq-contact-box mt-5 p-4 rounded-4 shadow-sm">
                              <h5 className="fw-semibold">Have a Question?</h5>
                              <p className="text-muted small mb-3">
                                  Send us an email and we’ll get back to you as soon as possible!
                              </p>
                              <button className="faq-mail-btn px-4 py-2 rounded-3">
                                  <a href="mailto:admin@urbancode.in">Send mail</a>
                              </button>
                          </div>
                      </div>
                  </Col>

                  {/* Right Section */}
                  <Col lg={8} md={12} className="order-1 order-lg-2">
                      <div className="faq-accordion-wrapper">
                          <AnimatePresence mode="wait">
                              <motion.div
                                  key={currentPage}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{ duration: 0.3 }}
                                  className="faq-page-content"
                              >
                                  {currentFaqs.map((faq, index) => (
                                      <div key={index} className={`faq-item mb-3 ${isHighlightedByKeyword(faq) ? 'highlighted-faq' : ''}`}>
                                          <button
                                              className={`faq-question ${openIndex === index ? 'active' : ''}`}
                                              onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                          >
                                              <span>{faq.question}</span>
                                              {openIndex === index ? <FaMinus /> : <FaPlus />}
                                          </button>
                                          <div
                                              className="faq-answer"
                                              style={{
                                                  maxHeight: openIndex === index ? '400px' : '0px',
                                              }}
                                          >
                                              <FaqRichText text={faq.answer} />
                                          </div>
                                      </div>
                                  ))}
                              </motion.div>
                          </AnimatePresence>
                      </div>

                      {/* Pagination Controls */}
                      <div className="faq-pagination mt-4 d-flex align-items-center justify-content-center gap-4">
                          <button className="faq-nav-btn" onClick={prevSlide} aria-label="Previous Slide">
                              <FaChevronLeft size={14} />
                          </button>
                          <div className="faq-dots">
                              {[...Array(totalPages)].map((_, i) => (
                                  <span
                                      key={i}
                                      className={`faq-dot ${currentPage === i ? 'active' : ''}`}
                                      onClick={() => {
                                          setCurrentPage(i);
                                          setOpenIndex(null);
                                      }}
                                  ></span>
                              ))}
                          </div>
                          <button className="faq-nav-btn" onClick={nextSlide} aria-label="Next Slide">
                              <FaChevronRight size={14} />
                          </button>
                      </div>
                  </Col>
              </Row>
          </Container>
      </motion.div>
      {/* <CourseAssistant courseName={activeCategory} /> */}
    </div>
  );
}
