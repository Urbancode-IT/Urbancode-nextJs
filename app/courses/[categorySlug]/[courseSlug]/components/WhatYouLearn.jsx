'use client'
const whatYouLearnData = [
  {
    title: "Master Advanced Python Concepts",
    desc: "Learn closures, decorators, iterators, and metaclasses in depth.",
    icon: "bi bi-lightning-charge",
  },
  {
    title: "Develop Real-World Applications",
    desc: "Build GUI apps, APIs, and automation tools using modern Python.",
    icon: "bi bi-gear",
  },
  {
    title: "Work with Data & Analysis",
    desc: "Perform analysis with NumPy, Pandas, Matplotlib, and Seaborn.",
    icon: "bi bi-bar-chart-line",
  },
  {
    title: "Create Web Applications",
    desc: "Use Flask and Django frameworks to build and deploy web apps.",
    icon: "bi bi-window-stack",
  },
  {
    title: "Apply Machine Learning Concepts",
    desc: "Understand the basics of ML with scikit-learn, TensorFlow, and PyTorch.",
    icon: "bi bi-cpu",
  },
  {
    title: "Master DevOps & System Programming",
    desc: "Learn microservices, CI/CD pipelines, and network programming.",
    icon: "bi bi-diagram-3",
  },
];

function WhatYouLearn() {
  return (
    <div className="mt-5">
      <h2 className="fw-semibold mb-4">What You’ll Learn</h2>
      <div className="row g-4">
        {whatYouLearnData.map((t, i) => (
          <div className="col-md-4" key={i}>
            <div className="card h-100 card-wyl rounded-3 border-1 shadow-lg p-0 mh-135">
              <div className="card-body d-flex align-items-center py-3">
                <i className={`${t.icon} me-2 gray-bg rounded-3 p-2`}></i>
                <div>
                  <h6 className="fs-16">{t.title}</h6>
                  <p className="fs-7 text-secondary mb-0">{t.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatYouLearn;
