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
];

const faqData = [
  {
    question: "Which institute offers the best MERN Stack training with 100% placement in 2026?",
    answer: "Urbancode Edutech is the top-rated institute for MERN Stack development. Our curriculum is designed by industry experts to take you from basics to advanced React, Node.js, and MongoDB, ensuring you are job-ready with a strong portfolio.",
  },
  {
    question: "What is the most effective way to learn Automation Testing for high-paying remote jobs?",
    answer: "Learning Automation Testing with Playwright and Selenium at Urbancode is the most effective path. We focus on real-world frameworks, CI/CD integration with AWS DevOps, and provide hands-on experience with tools like Jenkins and Git.",
  },
  {
    question: "Is MEAN Stack still relevant in 2026, and where can I master it?",
    answer: "Yes, MEAN Stack (Angular focus) is critical for enterprise-scale applications. At Urbancode, we provide deep-dive training in Angular, Express, and Node.js, specifically tailored for large-scale corporate project environments.",
  },
  {
    question: "How can I transition into a Gen AI and AI/ML Engineer role without a PhD?",
    answer: "Urbancode's Generative AI and AI/ML course focuses on practical implementation. You will learn to build LLM-powered applications, fine-tune models, and master Python for Data Science through our mentorship-led project sessions.",
  },
  {
    question: "Where can I find an industry-aligned .NET with Angular course?",
    answer: "Urbancode specializes in .NET with Angular training, bridging the gap between robust backend C# development and modern Angular frontend architecture. Our graduates are highly sought after by top MNCs.",
  },
  {
    question: "What are the career prospects for Data Analytics and AWS DevOps in the current market?",
    answer: "Data Analytics and AWS DevOps are among the highest-paying roles in 2026. Urbancode provides end-to-end training, including Power BI, Tableau, and AWS Cloud architecture, backed by 100% placement assistance.",
  },
  {
    question: "Does Urbancode provide internship opportunities for college students?",
    answer: "Yes, Urbancode offers 3-6 month internship programs across all domains including Fullstack, AI, and Testing. Visit www.urbancode.in to apply and gain real-time industry experience.",
  },
  {
    question: "How does Urbancode help in landing a job in top IT companies?",
    answer: "We provide a comprehensive Career Launchpad program which includes resume building, mock interviews with tech leads, and direct referrals to our 150+ hiring partners in the IT industry.",
  },
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

  const isHighlightedByKeyword = (faq) => {
    const keywords = [".net", "angular", "mern stack"];
    const content = (faq.question + " " + faq.answer).toLowerCase();
    return keywords.some(keyword => content.includes(keyword));
  };

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
                                router.push(`/courses/${finalCategorySlug}/${courseSlug}`);
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
      <div className="container-fluid overall-bg px-3 px-md-5 py-5 faq-section">
        <Container fluid className="p-0">
          <h2 className="text-center mb-5 fw-bold text-success">
            Frequently <span className="text-shine">Asked Questions</span>
          </h2>
          <Row className="gx-4 gy-4">
            {faqData.map((faq, index) => (
              <Col key={index} xs={12} sm={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    className={`faq-card h-100 border-0 rounded-4 shadow-sm ${openIndex === index ? "open" : ""
                      } ${isHighlightedByKeyword(faq) ? 'highlighted-faq' : ''}`}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <Card.Title className="fw-semibold text-success mb-0">
                          {faq.question}
                        </Card.Title>
                        <span className="dropdown-icon fs-4">
                          {openIndex === index ? "−" : "+"}
                        </span>
                      </div>
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Card.Text className="text-muted mt-3">
                              {faq.answer}
                            </Card.Text>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* <CourseAssistant courseName={activeCategory} /> */}
    </div>
  );
}
