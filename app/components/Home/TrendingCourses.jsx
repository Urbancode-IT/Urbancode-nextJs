import "./TrendingCourses.css";
import Link from "next/link";

const TrendingCourses = () => {
  const trendingCourses = [
    {
      title: "Full Stack Development",
      outcome: "Become a complete app builder from front to back",
      slug: "web-and-app-development",
      image: "/images/courses-images/web.webp",
      icon: "bi bi-code-slash",
      impact: "Build production-ready applications"
    },
    {
      title: "Data Science",
      outcome: "Turn data into million-dollar business insights",
      slug: "data-science",
      image: "/images/courses-images/datascience.webp",
      icon: "bi bi-graph-up",
      impact: "Make data-driven decisions"
    },
    {
      title: "Software Testing",
      outcome: "Ensure quality that companies depend on",
      slug: "software-testing",
      image: "/images/courses-images/softwaretesting.webp",
      icon: "bi bi-shield-check",
      impact: "Guarantee zero-defect releases"
    },
    {
      title: "Cloud & DevOps",
      outcome: "Master cloud infrastructure that scales globally",
      slug: "cloud-and-devops",
      image: "/images/courses-images/Cloud.webp",
      icon: "bi bi-cloud-check",
      impact: "Deploy at enterprise scale"
    },
    {
      title: "UI/UX Design",
      outcome: "Design experiences that users love",
      slug: "ui-ux-designing",
      image: "/images/courses-images/UIUX.webp",
      icon: "bi bi-palette",
      impact: "Create memorable user journeys"
    },
    {
      title: "Programming Languages",
      outcome: "Build your coding foundation for any tech role",
      slug: "programming-languages",
      image: "/images/courses-images/programming.webp",
      icon: "bi bi-terminal",
      impact: "Master fundamental logic"
    },
    {
      title: "Database",
      outcome: "Architect data systems that never fail",
      slug: "database",
      image: "/images/courses-images/database.webp",
      icon: "bi bi-database",
      impact: "Manage mission-critical data"
    },
    {
      title: "Digital Marketing",
      outcome: "Drive growth and build brands online",
      slug: "digital-marketing",
      image: "/images/courses-images/SEO.webp",
      icon: "bi bi-bullseye",
      impact: "Reach millions of potential customers"
    }
  ];

  return (
    <section className="trending-section">
      <div className="trending-header">
        <h2 className="trending-title">
          Your Path to a <span className="text-success">Tech Career</span>
        </h2>
        <p className="trending-subtitle">
          Join thousands of students who transformed their careers with real-world skills
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...trendingCourses, ...trendingCourses].map((course, index) => (
            <Link
              href={`/courses/${course.slug}`}
              key={index}
              className="course-card-link"
            >
              <div className="course-card">
                <div className="course-image-wrapper">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                  />
                  <div className="course-overlay"></div>
                  <div className="impact-badge">
                    <i className={course.icon}></i>
                    <span>{course.impact}</span>
                  </div>
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-outcome">{course.outcome}</p>
                  <div className="course-cta">
                    <span className="cta-text">Explore Path</span>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
