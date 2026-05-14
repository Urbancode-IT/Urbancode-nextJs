import { FaGraduationCap, FaFileSignature, FaPassport, FaHome, FaLanguage, FaBriefcase, FaUserCheck, FaMapMarkerAlt, FaSearch, FaUniversity, FaMoneyCheckAlt, FaPlaneDeparture } from 'react-icons/fa';

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
        title: "Course Selection",
        description: "Expert counseling to help you choose the right course that aligns with your career goals and interests.",
        icon: <FaSearch />
    },
    {
        title: "University Selection",
        description: "Shortlisting top-ranked universities globally that best fit your academic profile and budget.",
        icon: <FaUniversity />
    },
    {
        title: "Application & SOP",
        description: "End-to-end support for your application, including professional SOP editing and LOR guidance.",
        icon: <FaFileSignature />
    },
    {
        title: "Loan Application",
        description: "Assistance with educational loans through our partner banks to fund your international education.",
        icon: <FaMoneyCheckAlt />
    },
    {
        title: "Visa Success",
        description: "Expert guidance for visa documentation and mock interview preparation to ensure high success rates.",
        icon: <FaPassport />
    },
    {
        title: "Scholarship Guidance",
        description: "Identifying and applying for eligible scholarships to reduce your overall financial burden.",
        icon: <FaGraduationCap />
    },
    {
        title: "Pre-Departure Support",
        description: "Briefing sessions on culture, lifestyle, and travel essentials before you fly to your destination.",
        icon: <FaPlaneDeparture />
    },
    {
        title: "Post-Arrival Support",
        description: "Assistance with airport pickup, local accommodation, and settling into your new environment.",
        icon: <FaMapMarkerAlt />
    }
];

export const testimonials = [
    {
        name: "Sriram",
        university: "Greenwich University, UK",
        review: "Urbancode helped me through every step of my Canadian student visa process. Their scholarship guidance was a lifesaver!",
        rating: 5,
        image: "/images/home/avatar1.jpg"
    },
    {
        name: "Ashmathi",
        university: "Dublin Business School, Ireland",
        review: "The counseling sessions were very informative. They helped me choose the perfect course that aligned with my career goals.",
        rating: 5,
        image: "/images/home/avatar2.jpg"
    },
    {
        name: "Vishnu",
        university: "Coventry University, UK",
        review: "Got my Uk visa in the first attempt thanks to their rigorous interview prep. Highly recommend their services!",
        rating: 5,
        image: "/images/home/avatar3.jpg"
    }
];
