//app/courses/[categorySlug]/[courseSlug]/SingleCoursepage.jsx
'use client';
import coursesData from "../coursesData";
import './styles.css';
import { useState } from "react";
import EnquiryFormModal from "@/app/components/common/EnquiryFormModal.jsx";
import { newCourseData } from "@/app/data/newCourseData";
import NewInternalCourse from "@/app/components/CourseLayout/NewInternalCourse";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const newCourseMapping = {
  "mern-stack": "mern-stack",
  "mean-stack": "mean-stack",
  ".net-angular": "dotnet-angular",
  "data-analytics": "data-analytics",
  "ai-and-ml": "ai-ml",
  "aws-devops": "aws-devops",
  "automation-testing": "automation-testing",
};

export default function SingleCoursepage({ params }) {
  const { categorySlug, courseSlug } = params;
  const [showEnquiry, setShowEnquiry] = useState(false);

  // --- Curriculum State ---
  const [curriculumActiveIndex, setCurriculumActiveIndex] = useState(null);
  const [curriculumPage, setCurriculumPage] = useState(0);
  const [openNestedItems, setOpenNestedItems] = useState({});
  const itemsPerPage = 5;

  // Check if this course should use the new layout
  const newCourseKey = newCourseMapping[courseSlug];
  if (newCourseKey && categorySlug !== "kidz-space" && newCourseData[newCourseKey]) {
    return <NewInternalCourse data={newCourseData[newCourseKey]} />;
  }

  const category = Object.entries(coursesData).find(
    ([key]) => key.toLowerCase().replace(/\s+/g, "-") === categorySlug
  )?.[1];

  if (!category) return <div>Category not found</div>;

  const course = category.courses.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-") === courseSlug
  );

  if (!course) return <div>Course not found</div>;

  // --- Curriculum Handling ---
  const curriculumData = course.courseContentData || [];
  const totalCurriculumPages = Math.ceil(curriculumData.length / itemsPerPage);
  const currentCurriculumItems = curriculumData.slice(
    curriculumPage * itemsPerPage,
    (curriculumPage + 1) * itemsPerPage
  );

  const toggleCurriculumItem = (index) => {
    setCurriculumActiveIndex(curriculumActiveIndex === index ? null : index);
  };

  const handleCurriculumNext = () => {
    if (curriculumPage < totalCurriculumPages - 1) {
      setCurriculumPage(curriculumPage + 1);
      setCurriculumActiveIndex(null);
    }
  };

  const toggleNestedItem = (parentIndex, childIndex) => {
    const key = `${parentIndex}-${childIndex}`;
    setOpenNestedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleCurriculumPrev = () => {
    if (curriculumPage > 0) {
      setCurriculumPage(curriculumPage - 1);
      setCurriculumActiveIndex(null);
    }
  };

  return (

    <div className="single-coursepage bg-gray px-3 px-md-4 px-lg-5 pb-4 pb-md-5">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.title,
            description: course.description,
            provider: {
              "@type": "Organization",
              name: "Urbancode Edutech",
              url: "https://www.urbancode.in",
            },
          }),
        }}
      />

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

                <button 
                  className="btn btn-dark rounded-pill mt-3 px-4 py-2 enroll-btn w-sm-100 w-md-auto"
                  onClick={() => setShowEnquiry(true)}
                >
                  Enroll Today
                </button>
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
                <ul className="small px-2 px-md-3 text-secondary">
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span>Hours of Instructor-Led Training</span>
                  </li>
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span>Hands-on Projects across Web, Data & AI</span>
                  </li>
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span>Includes Beginner → Expert Level Topics</span>
                  </li>
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span>Mentor Support, Assignments & Code Reviews</span>
                  </li>
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span>Job Assistance & Portfolio Guidance</span>
                  </li>
                  <li className="mb-2 mb-md-3 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
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
                  downloadUrls={course.curriculumUrls}
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

        {/* Course Content (Premium UI) */}
        <div className="nict-curriculum-section mt-5">
            <section className="nict-course-curriculum">
                <div className="nict-curriculum-header">
                    <h2 className="fw-semibold text-center text-lg-start">Course Curriculum</h2>
                </div>

                <div className="nict-curriculum-list">
                    {currentCurriculumItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`nict-curriculum-item ${curriculumActiveIndex === index ? "active" : ""}`}
                        >
                            <div
                                className="nict-curriculum-title"
                                onClick={() => toggleCurriculumItem(index)}
                            >
                                <div className="nict-title-left">
                                    <span className="nict-index">{item.id}</span>
                                    <span className="nict-text">{item.title}</span>
                                </div>

                                {curriculumActiveIndex === index ? <FiMinus /> : <FiPlus />}
                            </div>

                            <div className="nict-curriculum-collapse">
                                <div className="nict-curriculum-content">
                                  <ul className="mb-0 ps-3">
                                    {item.items.map((subitem, i) => {
                                      if (typeof subitem === "string") {
                                        const subheadings = [
                                          "Basics:", "DOM & Events:", "Advanced JS:", "Practice Projects:",
                                          "Angular Basics:", "Angular Forms & Services:", 
                                          "Angular Routing + Full-Stack Integration:", "Angular + Authentication:",
                                          "Core Java (Foundations)", "Angular (Frontend Framework)",
                                          "Getting Started with Angular:",
                                          "Basics", "DOM & Events", "Flexbox & CSS Grid", "Flexbox: display flex", "CSS Grid",
                                          "Advanced JS", "Practice Projects",
                                          "Angular Basics", "Angular Forms & Services",
                                          "Angular Routing + Full-Stack Integration", "Angular + Authentication",
                                          "Introduction to React", "JSX", "Components", "State Basics", "Event Handling", "Rendering",
                                          "Hooks (Core)", "Forms", "React Router", "Context API", "API Integration", "Styling in React", "Lifting State Up",
                                          "Advanced Hooks", "Custom Hooks", "Code Splitting", "Error Boundaries", "Performance Optimization", "Portals", "React 18 Features",
                                          "State Management", "Authentication", "File & Folder Structure", "React Patterns", "React Suspense & Streaming", "SSR & Next.js", "Testing", "Deployment"
                                        ];
                                        const isSubheading = subheadings.some(h => subitem.trim() === h);
                                        const isGoal = subitem.trim().startsWith("Goal:") || subitem.trim().startsWith("**Goal:**");
                                        const regionPrefix = "Region:";
                                        const azPrefix = "Availability Zone:";
                                        const lambdaPrefix = "Lambda Function:";
                                        const dynamodbPrefix = "DynamoDB:";
                                        const isRegion = subitem.startsWith(regionPrefix);
                                        const isAZ = subitem.startsWith(azPrefix);
                                        const isLambda = subitem.startsWith(lambdaPrefix);
                                        const isDynamoDB = subitem.startsWith(dynamodbPrefix);

                                        return (
                                          <li key={i} className={`mb-1 lh-base${isSubheading || isGoal || isRegion || isAZ || isLambda || isDynamoDB ? " nict-practice-item" : ""}`}>
                                            {isSubheading || isGoal ? (
                                              <strong className="text-dark">{subitem.replace(/\*\*/g, '')}</strong>
                                            ) : isRegion ? (
                                              <><strong className="text-dark">{regionPrefix}</strong>{subitem.slice(regionPrefix.length)}</>
                                            ) : isAZ ? (
                                              <><strong className="text-dark">{azPrefix}</strong>{subitem.slice(azPrefix.length)}</>
                                            ) : isLambda ? (
                                              <><strong className="text-dark">{lambdaPrefix}</strong>{subitem.slice(lambdaPrefix.length)}</>
                                            ) : isDynamoDB ? (
                                              <><strong className="text-dark">{dynamodbPrefix}</strong>{subitem.slice(dynamodbPrefix.length)}</>
                                            ) : (
                                              subitem
                                            )}
                                          </li>
                                        );
                                      }

                                      const nestedKey = `${index}-${i}`;
                                      const isNestedOpen = openNestedItems[nestedKey];

                                      return (
                                        <li key={i} className="nict-nested-item mb-2">
                                          <button
                                            type="button"
                                            className="nict-nested-toggle d-flex justify-content-between align-items-center w-100 p-2 rounded-3 mb-2"
                                            onClick={() => toggleNestedItem(index, i)}
                                          >
                                            <span>{subitem.title}</span>
                                            <span className="nict-nested-icon">
                                              {isNestedOpen ? <FiMinus /> : <FiPlus />}
                                            </span>
                                          </button>

                                          {isNestedOpen && (
                                            <ul className="nict-nested-list mt-2 ps-4 mb-0">
                                              {subitem.details.map((detail, detailIndex) => {
                                                const practicePrefix = "Practice:";
                                                const isPractice = detail.startsWith(practicePrefix);
                                                
                                                // Check for subheadings
                                                   const subheadings = [
                                                     "Basics:", "DOM & Events:", "Advanced JS:", "Practice Projects:",
                                                     "Angular Basics:", "Angular Forms & Services:", 
                                                     "Angular Routing + Full-Stack Integration:", "Angular + Authentication:",
                                                     "Core Java (Foundations)",
                                                     "Basics", "DOM & Events", "Flexbox & CSS Grid", "CSS Grid",
                                                     "Advanced JS", "Practice Projects",
                                                     "Angular Basics", "Angular Forms & Services",
                                                     "Angular Routing + Full-Stack Integration", "Angular + Authentication",
                                                     "Data Binding and Its Types", "Directives and Their Types",
                                                     "Pipes and Their Types", "Forms in Angular",
                                                     "Services in Angular", "HTTP Client and API Integration",
                                                     "Authentication with Local Storage", "Authorization and Role-Based Guards",
                                                     "Student Management Project (CRUD Example)",
                                                     "Introduction to React", "JSX", "Components", "State Basics", "Event Handling", "Rendering",
                                                     "Hooks (Core)", "Forms", "React Router", "Context API", "API Integration", "Styling in React", "Lifting State Up",
                                                     "Advanced Hooks", "Custom Hooks", "Code Splitting", "Error Boundaries", "Performance Optimization", "Portals", "React 18 Features",
                                                     "State Management", "Authentication", "File & Folder Structure", "React Patterns", "React Suspense & Streaming", "SSR & Next.js", "Testing", "Deployment"
                                                   ];
                                                  const isSubheading = subheadings.some(h => detail.trim() === h);
                                                  const cssBasicsPrefix = "CSS basics:";
                                                  const flexboxPrefix = "Flexbox:";
                                                  const isCSSBasics = detail.startsWith(cssBasicsPrefix);
                                                  const isFlexbox = detail.startsWith(flexboxPrefix);
                                                  const isMiniProject = detail.startsWith("Mini Project:");
                                                  const goalPrefix = "Goal:";
                                                  const isGoal = detail.startsWith(goalPrefix);

                                                  return (
                                                    <li
                                                      key={detailIndex}
                                                      className={`mb-1 lh-base text-secondary${isPractice || isSubheading || isMiniProject || isGoal || isCSSBasics || isFlexbox ? " nict-practice-item" : ""}`}
                                                    >
                                                      {isPractice ? (
                                                        <><strong>{practicePrefix}</strong>{detail.slice(practicePrefix.length)}</>
                                                      ) : isCSSBasics ? (
                                                        <><strong className="text-dark">{cssBasicsPrefix}</strong>{detail.slice(cssBasicsPrefix.length)}</>
                                                      ) : isFlexbox ? (
                                                        <><strong className="text-dark">{flexboxPrefix}</strong>{detail.slice(flexboxPrefix.length)}</>
                                                      ) : isSubheading ? (
                                                        <strong className="text-dark">{detail}</strong>
                                                      ) : isMiniProject ? (
                                                        detail
                                                      ) : isGoal ? (
                                                        <><strong className="text-dark">{goalPrefix}</strong>{detail.slice(goalPrefix.length)}</>
                                                      ) : (
                                                        detail
                                                      )}
                                                    </li>
                                                  );
                                              })}
                                            </ul>
                                          )}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {totalCurriculumPages > 1 && (
                  <div className="nict-curriculum-navigation">
                      <button
                          className={`nict-nav-arrow ${curriculumPage === 0 ? "nict-disabled" : ""}`}
                          onClick={handleCurriculumPrev}
                          disabled={curriculumPage === 0}
                      >
                          <MdChevronLeft />
                      </button>

                      <div className="nict-nav-dots">
                          {[...Array(totalCurriculumPages)].map((_, i) => (
                              <span
                                  key={i}
                                  className={`nict-dot ${curriculumPage === i ? "active" : ""}`}
                                  onClick={() => {
                                      setCurriculumPage(i);
                                      setCurriculumActiveIndex(null);
                                  }}
                              ></span>
                          ))}
                      </div>

                      <button
                          className={`nict-nav-arrow ${curriculumPage === totalCurriculumPages - 1 ? "nict-disabled" : ""}`}
                          onClick={handleCurriculumNext}
                          disabled={curriculumPage === totalCurriculumPages - 1}
                      >
                          <MdChevronRight />
                      </button>
                  </div>
                )}
            </section>

            {/* Locked full syllabus CTA (render only when course.locked is true) */}
            {course.locked === true && (
              <div className="text-center mt-3">
                <button
                  className="btn btn-outline-secondary rounded-pill px-3 py-2 lock-cta"
                  onClick={() => setShowEnquiry(true)}
                  title="Request full syllabus"
                >
                  <i className="bi bi-lock-fill me-2"></i>
                  Full syllabus locked — Get Brochure
                </button>
              </div>
            )}
        </div>
        {/* End of Course Content */}

      </div>
    </div>
  );
}