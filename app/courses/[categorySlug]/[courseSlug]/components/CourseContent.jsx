'use client';
function CourseContent() {
  const courseContentData = [
    {
      id: "one",
      title: "Beginner – Python Fundamentals",
      icon: "bi bi-book",
      defaultOpen: true,
      items: [
        "Introduction to Python and its applications",
        "Setting up your development environment",
        "Data types, variables, and expressions",
        "Operators, conditional statements, and loops",
        "Functions and modules",
        "Debugging and error handling",
      ],
    },
    {
      id: "two",
      title: "Beginner – Working with Data",
      icon: "bi bi-database",
      items: [
        "Lists, tuples, and dictionaries",
        "String manipulation and formatting",
        "Working with files",
        "Regular expressions",
        "Basic data structures and algorithms",
      ],
    },
    {
      id: "three",
      title: "Beginner – Building Applications",
      icon: "bi bi-window",
      items: [
        "User input and output",
        "Object-oriented programming concepts",
        "Working with APIs",
        "Version control using Git",
        "Building simple GUI applications",
      ],
    },
    {
      id: "four",
      title: "Intermediate – Advanced Python Topics",
      icon: "bi bi-gear",
      items: [
        "Decorators and closures",
        "Iterators and generators",
        "Context managers and metaclasses",
        "Asynchronous programming",
        "Unit testing and debugging",
      ],
    },
    {
      id: "five",
      title: "Intermediate – Data Analysis with Python",
      icon: "bi bi-bar-chart-line",
      items: [
        "Introduction to NumPy and Pandas",
        "Data manipulation and exploration",
        "Statistical analysis and modeling",
        "Visualization with Matplotlib and Seaborn",
        "Machine learning basics",
      ],
    },
    {
      id: "six",
      title: "Intermediate – Web Development with Python",
      icon: "bi bi-window-stack",
      items: [
        "Introduction to Flask and Django frameworks",
        "Building web apps with templates and forms",
        "Database integration using SQLAlchemy",
        "API development and deployment",
      ],
    },
    {
      id: "seven",
      title: "Expert – Advanced Web Development",
      icon: "bi bi-diagram-3",
      items: [
        "Microservices architecture",
        "Authentication and authorization",
        "Security best practices",
        "DevOps and CI/CD implementation",
      ],
    },
    {
      id: "eight",
      title: "Expert – Advanced Data Science",
      icon: "bi bi-robot",
      items: [
        "Deep learning with TensorFlow and PyTorch",
        "Natural Language Processing (NLP)",
        "Computer vision and image processing",
        "Text analysis and mining",
      ],
    },
    {
      id: "nine",
      title: "Expert – Advanced System Programming",
      icon: "bi bi-cpu",
      items: [
        "Concurrency and parallelism",
        "CPython internals and optimization",
        "Python for embedded systems",
        "Network programming and sockets",
      ],
    },
  ];

  return (
    <div className="mt-5">
      <h2 className="fw-semibold mb-4">Course Content</h2>
      <div className="accordion" id="courseAccordion">
        {courseContentData.map((section) => (
          <div
            className="accordion-item mb-3 custom-accordion-item px-2"
            key={section.id}
          >
            <h2 className="accordion-header" id={`heading${section.id}`}>
              <button
                className={`accordion-button bg-transparent box-shadow-none p-2 ${
                  !section.defaultOpen ? "collapsed" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${section.id}`}
                aria-expanded={section.defaultOpen ? "true" : "false"}
                aria-controls={`collapse${section.id}`}
              >
                <i
                  className={`${section.icon} m-0 me-2 gray-bg p-2 rounded-circle`}
                ></i>
                {section.title}
              </button>
            </h2>

            <div
              id={`collapse${section.id}`}
              className={`accordion-collapse collapse ${
                section.defaultOpen ? "show" : ""
              }`}
              aria-labelledby={`heading${section.id}`}
              data-bs-parent="#courseAccordion"
            >
              <div className="accordion-body">
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseContent;
