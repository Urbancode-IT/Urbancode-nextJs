'use client';
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, ListGroup } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./Courses.css";
import coursesData from "./coursesData";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const categories = [
  "Programming Languages",
  "Web Development",
  "UI UX Designing",
  "Cloud & DevOps",
  "Data Analytics",
  "Data Science",
  "Database",
  "Data Visualization",
  "Software Testing",
  "Cyber Security",
  "SEO",
  "Medical Coding",
  // "Languages",
  // "English Proficiency",
  "CRM",
  "App Development",
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

  useEffect(() => {
    setActiveCategory(deslugify(categorySlug));
  }, [categorySlug]);

  const activeCategoryData = coursesData[activeCategory] || {};
  const allCourses = Object.values(coursesData).map((cat) => cat.courses).flat();

  const filteredCourses =
    search.trim() === ""
      ? (coursesData[activeCategory]?.courses || [])
      : allCourses.filter(
          (course) =>
            course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.desc.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="wrapper py-5">
      {/* --- Top Section --- */}
      <div className="container-fluid overall-bg overall-green-bg px-3 px-md-5">
        <Container fluid>
          <Row className="py-5 align-items-center text-center text-md-start">
            <Col md={7} className="my-auto p-3 p-md-5">
              <h1 className="main-title">{activeCategoryData.mainCategoryDesc}</h1>
              <p>{activeCategoryData.subDesc}</p>
            </Col>
            <Col md={5} className="p-3">
              {activeCategoryData.mainImage && (
                <Image
                  src={activeCategoryData.mainImage}
                  alt={activeCategory}
                  width={400}
                  height={250}
                  className="rounded-4 w-100 h-auto"
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- Course Section --- */}
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
                  <Button
                    variant="outline-secondary"
                    onClick={() => setSearch("")}
                    className="w-100 w-sm-auto"
                  >
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
                    const courseSlug = course.title.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <Col xs={12} sm={6} lg={4} className="mb-4" key={idx}>
                        <Link key={course.title} href={`/courses/${categorySlug}/${courseSlug}`} style={{ textDecoration: "none" }}>
                        <Card className="h-100 card rounded-4 p-2 p-sm-3 p-md-4">
                          <div className="img-holder rounded-3 position-relative" style={{ height: "200px" }}>
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
                                onClick={() => setSelectedCourse(course)}
                              >
                                Enroll now
                              </Button>
                              {selectedCourse && (
                        <EnquiryFormModal
                          isOpen={!!selectedCourse}
                          onClose={() => setSelectedCourse(null)}
                          courseName={selectedCourse.title}
                        />
                      )}
                            </div>
                          </Card.Body>
                        </Card>
                        </Link>
                      </Col>
                    );
                  })
                ) : (
                  <p className="text-muted">No courses found.</p>
                )}
              </Row>
              </motion.div>
              </AnimatePresence>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
