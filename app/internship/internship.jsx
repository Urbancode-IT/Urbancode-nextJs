'use client'
import { useState } from 'react'
import { goToThankYou } from '@/lib/navigation/goToThankYou'
import './internship.css'
import { submitInternshipApplication } from '../../lib/api/api'
import { Clock } from 'lucide-react'
import { FaLaptopCode, FaUserGraduate, FaHandsHelping, FaCertificate } from 'react-icons/fa'

import { FormInput, FormSelect, FormTextarea, FormButton, FormCard } from "@/app/components/common/FormUI";
import { FormPhoneInput } from "@/app/components/common/FormPhoneInput";
import { getEmailError, getNameError, getPhoneError, isGibberish } from "@/app/utils/validationUtils";
import { getLeadSource } from "@/app/utils/leadSource";

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
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const clearFieldError = (fieldName) => {
    setErrors((prev) => ({ ...prev, [fieldName]: '' }))
  }

  const handleInputChange = (e) => {
    const { id, name, value } = e.target
    const fieldName = id || name
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }))
    clearFieldError(fieldName)
  }

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, mobile: value || '' }))
    clearFieldError('mobile')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { firstName, lastName, email, mobile, program, experience, interest } = formData
    const nextErrors = {}
    const firstNameError = getNameError(firstName, 'First name')
    const lastNameError = getNameError(lastName, 'Last name')
    const emailError = getEmailError(email)
    const phoneError = getPhoneError(mobile)

    if (firstNameError) nextErrors.firstName = firstNameError
    if (lastNameError) nextErrors.lastName = lastNameError
    if (emailError) nextErrors.email = emailError
    if (phoneError) nextErrors.mobile = phoneError
    if (!program) nextErrors.program = 'Please select a program.'
    if (!experience) nextErrors.experience = 'Please select your experience.'
    if (!interest.trim()) nextErrors.interest = 'Please tell us why you are interested in this internship.'
    else if (isGibberish(interest)) nextErrors.interest = 'Please enter a valid message.'

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    setErrors({})

    setLoading(true)
    const result = await submitInternshipApplication({
      ...formData,
      ...getLeadSource("Internship page — application form", "Internship page — Submit Application"),
    });
    setLoading(false)

    if (result.success) {
      goToThankYou();
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
      setErrors({});
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

  const programOptions = internships.map(i => i.title);
  const experienceOptions = ["Fresher", "0-1 year", "2-3 years", "3+ years"];

  const features = [
    {
      Icon: FaLaptopCode,
      title: "Real World Projects",
      text: "Build a portfolio with actual projects used by real companies."
    },
    {
      Icon: FaUserGraduate,
      title: "Mentorship Program",
      text: "Work directly with industry professionals who guide your learning journey."
    },
    {
      Icon: FaHandsHelping,
      title: "Career Support",
      text: "Lifetime access to career services, resume reviews, and interview prep."
    },
    {
      Icon: FaCertificate,
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
                <div className="course-duration-pill mt-auto mb-2" style={{ width: 'fit-content' }}>
                  <Clock size={14} /> {internship.duration}
                </div>
                <a
                  href="#application"
                  className="apply-btn"
                  onClick={() => setFormData(prev => ({ ...prev, program: internship.title }))}
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Internships Section */}
      <section className="why-internship-section">
        <div className="container">
          <h2 className="section-main-title">Why Choose Our Internships?</h2>
          <p className="section-lead">Our comprehensive approach ensures you're job-ready from day one.</p>

          {/* Cards Wrapper */}
          <div className="cards-wrapper">
            {features.map((feature, index) => (
              <div key={index} className="internship-card">
                <div className="icon-bg">
                  <feature.Icon className="icon" aria-hidden="true" />
                </div>
                <div className="card-title">{feature.title}</div>
                <div className="card-text">{feature.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="application" className="application-section">
        <div className="container">
          <div className="career-form-wrap">
            <div className="career-form-inner">
              <FormCard className="career-form-card p-4 p-md-5">
                <h2 className="section-main-title">Apply for an Internship</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <FormInput
                        label="First Name"
                        id="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="col-md-6">
                      <FormInput
                        label="Last Name"
                        id="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="col-md-6">
                      <FormInput
                        label="Email Address"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="col-md-6">
                      <FormPhoneInput
                        label="Mobile Number"
                        name="mobile"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={handlePhoneChange}
                        error={errors.mobile}
                        disabled={loading}
                      />
                    </div>
                    <div className="col-md-6">
                      <FormSelect
                        label="Select Program"
                        id="program"
                        placeholder="Select a program"
                        options={programOptions}
                        value={formData.program}
                        onChange={handleInputChange}
                        error={errors.program}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="col-md-6">
                      <FormSelect
                        label="Experience"
                        id="experience"
                        placeholder="Select your experience"
                        options={experienceOptions}
                        value={formData.experience}
                        onChange={handleInputChange}
                        error={errors.experience}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="col-12">
                      <FormTextarea
                        label="Reason for Interest"
                        id="interest"
                        rows="3"
                        placeholder="Tell us about your goals and what you hope to gain"
                        value={formData.interest}
                        onChange={handleInputChange}
                        error={errors.interest}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="col-12">
                      <FormInput
                        label="Portfolio/GitHub URL"
                        type="url"
                        id="portfolio"
                        placeholder="https://github.com/yourusername"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        disabled={loading}
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <FormButton type="submit" variant="success" className="w-100 py-3" loading={loading}>
                        Submit Application
                      </FormButton>
                    </div>
                  </div>
                </form>
              </FormCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App