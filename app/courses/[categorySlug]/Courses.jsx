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

  // JSON (no official → use JS)
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',

  // HTML
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',



  // Microsoft (general / Copilot fallback)
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
    question: "Who can enroll in these courses?",
    answer:
      "Anyone interested in upskilling can enroll. No prior experience is required unless mentioned in the course details.",
  },
  {
    question: "Do I get a certificate after completion?",
    answer:
      "Yes, you’ll receive a completion certificate after successfully finishing the course.",
  },
  {
    question: "Are the classes online or offline?",
    answer:
      "Most of our courses are conducted online through live sessions, but some categories offer hybrid options.",
  },
  {
    question: "Can I access the course materials after completion?",
    answer:
      "Yes, lifetime access is provided to all recorded sessions and materials.",
  },
  {
    question: "Is there any refund policy?",
    answer:
      "Refunds are available within the first 7 days of enrollment if you are not satisfied with the course.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, selected courses come with career guidance, resume preparation, and placement support from our team.",
  },
  {
    question: "What technologies are covered in the MERN Stack course?",
    answer:
      "Our MERN Stack training covers MongoDB, Express.js, React.js, and Node.js with real-time projects and industry-standard practices.",
  },
  {
    question: "Do you offer .NET with Angular training?",
    answer:
      "Yes, we provide comprehensive training in .NET with Angular for students looking to build enterprise-scale applications.",
  },
];

const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");
const deslugify = (slug) =>
  categories.find((cat) => slugify(cat) === slug) || categories[0];

export default function Courses({ categorySlug }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    categorySlug ? categorySlug.replace(/-/g, " ") : categories[0]
  );
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
  const allCourses = Object.values(coursesData)
    .map((cat) => cat.courses)
    .flat();

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
          <Row className="py-5 align-items-center text-center text-md-start">
            <Col md={7} className="my-auto p-3 p-md-5">
              <h1 className="main-title">{activeCategoryData.mainCategoryDesc}</h1>
              <p>{activeCategoryData.subDesc}</p>
            </Col>
            <Col md={5} className="p-3">
              <div className="course-interactive-scene">
                 <div className="saturn-scene">
                    <div className="saturn-planet">
                       <div className="planet-surface">UC</div>
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
                          <Col xs={12} sm={6} lg={4} className="mb-4" key={idx}>
                            <Card
                              className="h-100 card rounded-4 p-2 p-sm-3 p-md-4"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                router.push(`/courses/${categorySlug}/${courseSlug}`)
                              }
                            >
                              <div
                                className="img-holder rounded-3 position-relative"
                                style={{ height: "200px" }}
                              >
                                <Image
                                  src={course.img}
                                  alt={course.title}
                                  fill
                                  className="rounded-3 card-img object-cover"
                                />
                              </div>

                              <Card.Body className="p-0 pt-3">
                                <Card.Title className="card-course-title text-center">
                                  {course.title}
                                </Card.Title>
                                <Card.Text className="text-muted course-desc text-center text-sm-start">
                                  {course.desc}
                                </Card.Text>

                                <div className="d-flex justify-content-between text-muted fs-11">
                                  <span>★★★★★ {course.rating}</span>
                                  <span>👥 {course.students}</span>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-2 fs-11">
                                  <span className="text-muted small">
                                    ⏳ {course.duration}
                                  </span>
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
    </div>
  );
}
