'use client'
import { useState } from 'react'
import './internship.css'
import { submitInternshipApplication } from '../../lib/api/api'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    program: '',
    experience: '',
    interest: '',
    portfolio: ''
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { firstName, lastName, email, mobile, program, experience, interest } = formData

    if (!firstName.trim()) { alert('Please enter your first name.'); return }
    if (!lastName.trim()) { alert('Please enter your last name.'); return }
    if (!email.trim()) { alert('Please enter your email.'); return }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Please enter a valid email address.'); return }
    if (!mobile.trim()) { alert('Please enter your mobile number.'); return }
    else if (!/^\d{10}$/.test(mobile.trim())) { alert('Please enter your full 10-digit mobile number.'); return }
    if (!program) { alert('Please select a program.'); return }
    if (!experience) { alert('Please select your experience.'); return }
    if (!interest.trim()) { alert('Please tell us why you are interested in this internship.'); return }

    // Form submission logic would go here
    const result = await submitInternshipApplication(formData);

    if (result.success) {
      alert("✅ Application submitted successfully!");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        program: '',
        experience: '',
        interest: '',
        portfolio: ''
      });
    } else {
      alert(`❌ ${result.message}`);
    }
  }

  const internships = [
    {
      id: 1,
      title: "Web Development",
      description: "Master HTML, CSS, JavaScript, and frameworks to build stunning websites.",
      duration: "3 months",
      image: "/images/internship/webDevelopment.jpg"
    },
    {
      id: 2,
      title: "Data Science",
      description: "Analyze data, build models, and uncover insights using Python and ML.",
      duration: "3 months",
      image: "/images/internship/dataScience.jpg"
    },
    {
      id: 3,
      title: "UI/UX Designing",
      description: "Design user-friendly interfaces with Figma, Adobe XD, and usability testing.",
      duration: "3 months",
      image: "/images/internship/UIUX.jpg"
    },
    {
      id: 4,
      title: "Android Development",
      description: "Build powerful mobile apps using Java, Kotlin, and Android Studio.",
      duration: "3 months",
      image: "/images/internship/android.jpg"
    },
    {
      id: 5,
      title: "Java Programming",
      description: "Develop robust backend apps with OOP principles and Java frameworks.",
      duration: "3 months",
      image: "/images/internship/javaProg.jpg"
    },
    {
      id: 6,
      title: "C++ Programming",
      description: "Learn C++ for system-level development, logic building, and problem solving.",
      duration: "3 months",
      image: "/images/internship/javascript.jpg"
    },
    {
      id: 7,
      title: "Python Programming",
      description: "Automate tasks, analyze data, and build web apps using Python.",
      duration: "3 months",
      image: "/images/internship/pythonprog.jpg"
    },
    {
      id: 8,
      title: "Artificial Intelligence",
      description: "Dive into AI concepts like neural networks, NLP, and computer vision.",
      duration: "4 months",
      image: "/images/internship/AI.jpg"
    },
    {
      id: 9,
      title: "Machine Learning",
      description: "Explore supervised, unsupervised learning, and real-world ML models.",
      duration: "3 months",
      image: "/images/internship/machinelearning.jpg"
    },
    {
      id: 10,
      title: "Flutter Developer",
      description: "Create cross-platform mobile apps using Dart and the Flutter SDK.",
      duration: "3 months",
      image: "/images/internship/flutter.jpg"
    },
    {
      id: 11,
      title: "ReactJS Developer",
      description: "Build dynamic UIs and SPAs using ReactJS and modern JavaScript.",
      duration: "3 months",
      image: "/images/internship/reactjs.jpg"
    },
    {
      id: 12,
      title: "JavaScript Developer",
      description: "Master the language of the web: DOM, events, ES6+, and backend JS.",
      duration: "3 months",
      image: "/images/internship/javascript.jpg"
    }
  ]

  const features = [
    {
      icon: "fas fa-laptop-code",
      title: "Real World Projects",
      text: "Build a portfolio with actual projects used by real companies."
    },
    {
      icon: "fas fa-user-graduate",
      title: "Mentorship Program",
      text: "Work directly with industry professionals who guide your learning journey."
    },
    {
      icon: "fas fa-hands-helping",
      title: "Career Support",
      text: "Lifetime access to career services, resume reviews, and interview prep."
    },
    {
      icon: "fas fa-briefcase",
      title: "Certification",
      text: "Earn industry-recognized certificates to boost your career prospects."
    }
  ]

  return (
    <div className="internship-page">
      {/* Hero Section */}
      <section className="internship-hero d-flex align-items-center">
        <div className="container text-center">
          <h1 className="hero-title">
            Launch Your IT Career With Our <span>Internship Programs</span>
          </h1>
          <p className="hero-subtitle">
            Gain Hands-On Experience, Build Skills, and Step Into the IT Industry with Confidence.
          </p>
        </div>
      </section>

      {/* Internships Section */}
      <section className="internship-section">
        <div className="container">
          <h2 className="internship-heading">Internships We Offer</h2>
          <p className="internship-subtext">Gain Real-World Experience & Industry Exposure</p>

          {/* Cards Grid */}
          <div className="cards-container">
            {internships.map(internship => (
              <div key={internship.id} className="custom-card">
                <img src={internship.image} alt={internship.title} />
                <h5>{internship.title}</h5>
                <p>{internship.description}</p>
                <div className="duration">
                  <i className="fa-regular fa-clock"></i> {internship.duration}
                </div>
                <a href="#" className="apply-btn">Apply</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Internships Section */}
      <section className="why-internship-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Internships?</h2>
          <p className="section-subtitle">Our comprehensive approach ensures you're job-ready from day one.</p>

          {/* Cards Wrapper */}
          <div className="cards-wrapper">
            {features.map((feature, index) => (
              <div key={index} className="internship-card">
                <div className="icon-bg">
                  <i className={`${feature.icon} icon`}></i>
                </div>
                <div className="card-title">{feature.title}</div>
                <div className="card-text">{feature.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="application-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Ready to Apply</h2>
            <p className="section-subtitle">
              Submit your application today and join thousands of successful graduates 
              who have transformed their <br></br>careers with us.
            </p>
          </div>

          <div className="application-card">
            <h4 className="form-title">Apply for Internship</h4>
            <p className="form-subtitle">
              Fill out the form below to apply for one of our internship programs.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="form-control custom-input" 
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="form-control custom-input" 
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-control custom-input" 
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="mobile" 
                    className="form-control custom-input" 
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="program">Select Program</label>
                  <select 
                    id="program" 
                    className="form-select custom-input"
                    value={formData.program}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Select a program</option>
                    {internships.map(internship => (
                      <option key={internship.id} value={internship.title}>
                        {internship.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="experience">Experience</label>
                  <select 
                    id="experience" 
                    className="form-select custom-input"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Select your experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="0-1 year">0-1 year</option>
                    <option value="2-3 years">2-3 years</option>
                    <option value="3+ years">3+ years</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="interest">Why are you interested in this internship?</label>
                  <textarea 
                    id="interest" 
                    className="form-control custom-input" 
                    rows="3" 
                    placeholder="Tell us about your goals and what you hope to gain"
                    value={formData.interest}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="col-12">
                  <label htmlFor="portfolio">Portfolio/GitHub URL (Optional)</label>
                  <input 
                    type="url" 
                    id="portfolio" 
                    className="form-control custom-input" 
                    placeholder="https://github.com/yourusername"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12 text-center mt-4">
                  <button type="submit" className="btn submit-btn px-5 py-2">
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App