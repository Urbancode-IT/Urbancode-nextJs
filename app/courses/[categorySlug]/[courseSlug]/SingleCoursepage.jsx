//app/courses/[categorySlug]/[courseSlug]/SingleCoursepage.jsx
'use client';
import coursesData from "../coursesData"; 
import './styles.css';
import { useState } from "react";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";

export default function SingleCoursepage({ params }) {
  const { categorySlug, courseSlug } = params;
  const [showEnquiry, setShowEnquiry] = useState(false);

  const category = Object.entries(coursesData).find(
    ([key]) => key.toLowerCase().replace(/\s+/g, "-") === categorySlug
  )?.[1];

  if (!category) return <div>Category not found</div>;

  const course = category.courses.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-") === courseSlug
  );

  if (!course) return <div>Course not found</div>;

  return (
    <div className="single-coursepage bg-gray px-3 px-md-4 px-lg-5 py-4 py-md-5 mt-3 mt-md-5">

      <div className="container py-3 py-md-4 py-lg-5">
        {/* Top Section */}
        <div className="row g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-column justify-content-around h-100">
              {/* breadcrumb */}
              <p className="text-secondary opacity-75 small mb-2 mb-md-3">
                <a
                  className="text-decoration-none text-dark fw-medium"
                  href={`/courses/${categorySlug}`}
                >
                  {categorySlug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
                </a>
                <span className="mx-1 mx-md-2 text-muted">›</span>
                <span className="text-dark">
                  {course.title}
                </span>
              </p>
              <h1 className="fw-bold mb-3 mb-md-4 text-center text-lg-start">
                {course.aboutData.topic}
              </h1>
              <div>
                <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 mb-3 text-muted small">
                  <span>⭐ {course.rating}/5</span>
                  <span>👩‍🎓 {course.students}+ students</span>
                </div>
                <p className="text-secondary fs-md-9 lh-base">
                  {course.aboutData.content1}
                </p>

               <a
                  href={`https://wa.me/919429694123?text=${encodeURIComponent(
                    `Hi there, I would like to enroll in this course ${course.title} from Urbancode. Please share more details.`
                  )}`}
                  style={{ textDecoration: "none" }}
                >
                  <button className="btn btn-dark rounded-pill mt-3 px-4 py-2 enroll-btn w-sm-100 w-md-auto">
                    Enroll Today
                  </button>
                </a>
              </div>
              <div className="mt-4 mt-md-5">
                <h2 className="fw-semibold mb-3 text-center text-lg-start">About This Course</h2>
                <p className="text-secondary fs-md-9 lh-base">
                  {course.aboutData.content2}
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-5">
            <div className="card shadow-md px-3 px-md-4 py-3 py-md-4 rounded-4 rounded-lg-5 border-0 sticky-lg-top">
              <img
                src={course.img}
                className="card-img-top rounded-4 my-2 my-md-3 img-fluid w-100"
                alt={course.title}
              />
              <div className="card-body d-flex flex-column justify-content-around p-0">
                <ul className="list-unstyled small px-2 px-md-3 text-secondary">
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <span className="me-2">⏰</span>
                    <span>Hours of Instructor-Led Training</span>
                  </li>
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <span className="me-2">💻</span>
                    <span>Hands-on Projects across Web, Data & AI</span>
                  </li>
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <span className="me-2">🧠</span>
                    <span>Includes Beginner → Expert Level Topics</span>
                  </li>
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <span className="me-2">👨‍🏫</span>
                    <span>Mentor Support, Assignments & Code Reviews</span>
                  </li>
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <span className="me-2">💼</span>
                    <span>Job Assistance & Portfolio Guidance</span>
                  </li>
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <span className="me-2">📜</span>
                    <span>Urbancode Certificate of Completion</span>
                  </li>
                </ul>
                <button 
                  className="btn btn-dark w-100 dark-shine-btn rounded-4 mt-2"  
                  onClick={() => setShowEnquiry(true)}
                >
                  Get Brochure
                </button>
                 {/* Popup Form */}
                <EnquiryFormModal
                  isOpen={showEnquiry}
                  onClose={() => setShowEnquiry(false)}
                  courseName={course.title}
                />
              </div>
            </div>
          </div>
          {/* End of Right Section */}
        </div>

        {/* What You'll Learn */}
        <div className="mt-4 mt-md-5">
          <h2 className="fw-semibold mb-3 mb-md-4 text-center text-lg-start">What You'll Learn</h2>
          <div className="row g-3 g-md-4">
            {course.whatYouLearnData.map((t, i) => (
              <div className="col-12 col-sm-6 col-lg-4" key={i}>
                <div className="card h-100 card-wyl rounded-3 border-1 shadow-sm shadow-md-lg p-0 mh-135">
                  <div className="card-body d-flex align-items-start py-3">
                    <i className={`${t.icon} me-3 gray-bg rounded-3 p-2 flex-shrink-0`}></i>
                    <div className="flex-grow-1">
                      <h6 className="fs-16 mb-1">{t.title}</h6>
                      <p className="fs-7 text-secondary mb-0 lh-sm">{t.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of What You'll Learn */}

        {/* Course Content */}
        <div className="mt-4 mt-md-5">
          <h2 className="fw-semibold mb-3 mb-md-4 text-center text-lg-start">Course Content</h2>
          <div className="accordion" id="courseAccordion">
            {course.courseContentData.map((section) => (
              <div
                className="accordion-item mb-2 mb-md-3 custom-accordion-item px-2 px-md-3 "
                key={section.id}
              >
                <h2 className="accordion-header" id={`heading${section.id}`}>
                  <button
                    className={`accordion-button bg-transparent box-shadow-none p-2 p-md-3 ${!section.defaultOpen ? "collapsed" : ""
                      }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${section.id}`}
                    aria-expanded={section.defaultOpen ? "true" : "false"}
                    aria-controls={`collapse${section.id}`}
                  >
                    <i
                      className={`${section.icon} m-0 me-2 me-md-3 gray-bg p-2 rounded-circle flex-shrink-0 fs-6`}
                    ></i>
                    <span className="text-start fs-6 fs-md-inherit">{section.title}</span>
                  </button>
                </h2>

                <div
                  id={`collapse${section.id}`}
                  className={`accordion-collapse collapse ${section.defaultOpen ? "show" : ""
                    }`}
                  aria-labelledby={`heading${section.id}`}
                  data-bs-parent="#courseAccordion"
                >
                  <div className="accordion-body px-3 px-md-4">
                    <ul className="mb-0 ps-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="mb-1 lh-base">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of Course Content */}

      </div>
    </div>
  );
}