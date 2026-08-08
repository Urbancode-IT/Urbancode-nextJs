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
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, Users, Clock } from "lucide-react";
import { FaPlus, FaMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
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
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
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

const faqData = [
  // Page 1: Full Stack & MERN Stack Development
  {
    question: "What makes MERN Stack training in Chennai highly effective for landing full-stack developer jobs in 2026?",
    answer: "A structured MERN Stack course in Chennai at Urbancode Edutech (https://urbancode.in) focuses on React, Node.js, Express, and MongoDB, teaching you how to build responsive, real-time database-driven web applications. With hands-on mentorship, simulated corporate projects, and dedicated career guidance, freshers and professionals can easily transition into high-paying IT roles.",
    highlight: true
  },
  {
    question: "Why is Next.js preferred over standard React for modern full-stack web development?",
    answer: "Next.js brings Server-Side Rendering (SSR), Static Site Generation (SSG), and API routes built-in, offering superior performance, faster loading times, and excellent SEO capabilities out of the box. Urbancode's full-stack program includes Next.js so you master enterprise-ready React frameworks."
  },
  {
    question: "What are the core differences between MEAN Stack and MERN Stack, and which one is more in demand?",
    answer: "MEAN stack uses Angular for the frontend, whereas MERN stack uses React. MERN Stack is currently more in demand for startup and medium-sized enterprise roles due to React's flexibility and massive community support, while MEAN remains popular in legacy enterprise environments. Urbancode provides dedicated training in both architectures."
  },
  {
    question: "How can I start learning Full Stack Web Development as a complete beginner?",
    answer: "Start with HTML5, CSS3, and JavaScript basics, then progress to frontend libraries like React, followed by backend environments like Node.js/Express, and database management (SQL/NoSQL). Urbancode's coding bootcamp is designed for beginners, offering step-by-step guidance and 100% placement support."
  },

  // Page 2: AI-Powered Fullstack Development
  {
    question: "What is an AI-powered full-stack developer, and why is this role trending in 2026?",
    answer: "An AI-powered fullstack developer builds traditional web applications integrated with Generative AI capabilities, such as OpenAI API, Claude, LangChain, vector databases, and Retrieval-Augmented Generation (RAG) models. This role is trending as businesses automate operations and require developers who can seamlessly embed intelligent agents into their products.",
    highlight: true
  },
  {
    question: "How does Urbancode train developers to integrate LLM APIs and Generative AI into web applications?",
    answer: "At Urbancode Edutech (https://urbancode.in/courses), our AI-powered Fullstack Development course teaches you Python, Prompt Engineering, API integrations (OpenAI, Gemini), vector databases (ChromaDB, Pinecone), and LangChain. You will build and deploy smart chatbots, recommendation engines, and AI agents."
  },
  {
    question: "Do I need a background in advanced mathematics or machine learning to become an AI Web Developer?",
    answer: "No. You don't need a PhD or complex machine learning math to build AI-powered apps. You only need solid JavaScript/Python skills and an understanding of how to consume and orchestrate LLM APIs, vector stores, and agentic frameworks. Urbancode guides you through this step-by-step."
  },
  {
    question: "What are the job prospects for developers skilled in AI-Powered Fullstack engineering?",
    answer: "Job prospects are exceptionally high. Companies are actively refactoring legacy software to include AI features. Developers skilled in both frontend/backend and LLM orchestration command premium salaries and enjoy faster career growth in 2026."
  },

  // Page 3: Software Testing & QA Automation
  {
    question: "Why is Playwright overtaking Selenium as the trending tool for software automation testing?",
    answer: "Playwright offers faster execution speeds, built-in auto-waiting, native emulation of mobile devices, support for modern web architectures (Shadow DOM, single-page apps), and multi-browser support out-of-the-box. Our Software Testing course at Urbancode Edutech covers both Selenium and Playwright to keep you competitive.",
    highlight: true
  },
  {
    question: "What does the Software Testing placement training curriculum at Urbancode include?",
    answer: "Our curriculum covers manual testing fundamentals, automation testing with Selenium (Java) and Playwright (TypeScript/JavaScript), API testing with Postman, mobile testing, and DevOps CI/CD integration using Jenkins and Git, along with real-time project bug tracking."
  },
  {
    question: "How does learning DevOps pipelines benefit a Software Testing professional?",
    answer: "Modern QA engineers are expected to run test suites automatically within CI/CD pipelines (GitHub Actions, Jenkins). Integrating testing into DevOps ensures bugs are caught early in the development lifecycle, making QA engineers with DevOps skills highly valuable."
  },
  {
    question: "Can a non-IT graduate build a career in software automation testing?",
    answer: "Yes, software testing is one of the most accessible entry points into the IT industry. With Urbancode's focused training in logical scripting, automation tools, and intensive mock interviews, non-IT graduates routinely secure high-paying QA roles."
  },

  // Page 4: Data Analyst & Data Science
  {
    question: "What are the trending tools and skills required to become a certified Data Analyst in 2026?",
    answer: "A modern Data Analyst must master SQL for database querying, Python/Pandas for data cleaning, and business intelligence (BI) tools like Power BI and Tableau for interactive dashboard creation. Urbancode's Data Analytics program combines all these with live corporate datasets.",
    highlight: true
  },
  {
    question: "Is Python or SQL more important for landing an entry-level Data Analyst job?",
    answer: "SQL is the absolute foundation for any data role since almost all corporate data resides in databases. Python is equally important for advanced analytics, automation, and machine learning. Urbancode covers both extensively to make you a well-rounded candidate."
  },
  {
    question: "How does Urbancode help students build a professional portfolio for Data Analytics?",
    answer: "We guide students to work on real-world projects such as sales dashboards, financial forecasting models, and customer segmentation analyses. You will document and publish these projects on GitHub and Tableau Public to showcase to recruiters."
  },
  {
    question: "What is the difference between a Data Analyst and a Data Scientist?",
    answer: "Data Analysts focus on descriptive and diagnostic analytics (what happened and why) using SQL and BI tools. Data Scientists focus on predictive analytics and machine learning models (what will happen) using advanced Python algorithms. Urbancode offers specialized pathways for both careers."
  }
];

const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");
const deslugify = (slug) =>
  categories.find((cat) => slugify(cat) === slug) || categories[0];

export default function Courses({ categorySlug }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  // Use categorySlug prop or default to first category
  const [activeCategory, setActiveCategory] = useState(
    categorySlug ? categorySlug.replace(/-/g, " ") : categories[0]
  );
  
  // Keep a safe slug for routing
  const currentCategorySlug = categorySlug || slugify(activeCategory);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(faqData.length / itemsPerPage);
  const currentFaqs = faqData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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
                        const courseSlug = course.title
                          .toLowerCase()
                          .replace(/\s+/g, "-");

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
                                  className="rounded-3 card-img object-cover"
                                />
                              </div>

                              <Card.Body className="p-0 pt-3">
                                <Card.Title className="card-course-title">
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
                              "text": faq.answer
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
                                              <p>{faq.answer}</p>
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
