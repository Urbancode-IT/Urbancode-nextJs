import { FaGraduationCap, FaFileSignature, FaPassport, FaHome, FaLanguage, FaBriefcase, FaUserCheck, FaMapMarkerAlt } from 'react-icons/fa';

export const destinations = [
    {
        country: "USA",
        description: "Home to world-renowned universities and cutting-edge research opportunities.",
        universities: "4000+ Universities",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800"
    },
    {
        country: "UK",
        description: "Experience academic excellence and rich cultural heritage in the United Kingdom.",
        universities: "160+ Universities",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800"
    },
    {
        country: "Canada",
        description: "Known for its high-quality education and friendly immigration policies.",
        universities: "100+ Universities",
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=800"
    },
    {
        country: "Australia",
        description: "Top-tier education system with vibrant cities and amazing lifestyle.",
        universities: "40+ Universities",
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800"
    },
    {
        country: "Germany",
        description: "Excellence in engineering and technology with many tuition-free options.",
        universities: "400+ Universities",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800"
    },
    {
        country: "Ireland",
        description: "A hub for technology and innovation with a welcoming atmosphere.",
        universities: "30+ Universities",
        image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=800"
    },
    {
        country: "New Zealand",
        description: "Safe environment with globally recognized qualifications.",
        universities: "8 Universities",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
    },
    {
        country: "Singapore",
        description: "Global education hub in Asia with world-class institutions.",
        universities: "30+ Universities",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800"
    }
];

export const services = [
    {
        title: "Scholarship Assistance",
        description: "We help you find and apply for scholarships to reduce your financial burden.",
        icon: <FaGraduationCap />
    },
    {
        title: "Visa Success",
        description: "Expert guidance for visa documentation and interview preparation to ensure high success rates.",
        icon: <FaPassport />
    },
    {
        title: "University Admissions",
        description: "Get admission to top-ranked universities tailored to your profile and interests.",
        icon: <FaFileSignature />
    },
    {
        title: "Application Support",
        description: "End-to-end support for your application, from SOP to recommendation letters.",
        icon: <FaUserCheck />
    },
    {
        title: "Career Guidance",
        description: "Professional counseling to help you choose the right course and career path.",
        icon: <FaBriefcase />
    },
    {
        title: "Accommodation",
        description: "Assistance in finding safe and affordable housing near your university.",
        icon: <FaHome />
    },
    {
        title: "Language Coaching",
        description: "Expert training for IELTS, TOEFL, PTE, and other language proficiency tests.",
        icon: <FaLanguage />
    },
    {
        title: "Post-Arrival Support",
        description: "We help you settle in with airport pickup, bank account setup, and more.",
        icon: <FaMapMarkerAlt />
    }
];

export const testimonials = [
    {
        name: "Rahul Sharma",
        university: "University of Toronto, Canada",
        review: "Urbancode helped me through every step of my Canadian student visa process. Their scholarship guidance was a lifesaver!",
        rating: 5,
        image: "/images/home/avatar1.jpg"
    },
    {
        name: "Sneha Reddy",
        university: "University of Manchester, UK",
        review: "The counseling sessions were very informative. They helped me choose the perfect course that aligned with my career goals.",
        rating: 5,
        image: "/images/home/avatar2.jpg"
    },
    {
        name: "Arjun Mehta",
        university: "Arizona State University, USA",
        review: "Got my US visa in the first attempt thanks to their rigorous interview prep. Highly recommend their services!",
        rating: 5,
        image: "/images/home/avatar3.jpg"
    }
];
