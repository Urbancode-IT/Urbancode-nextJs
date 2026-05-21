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
        review: "Urbancode helped me through every step of my UK student visa process. Their scholarship guidance was a lifesaver!",
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

export const showcaseData = {
    Australia: {
        title: "AUSTRALIA",
        subtitle: "Your Gateway to Innovation & Growth",
        bgImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1200",
        flagEmoji: "🇦🇺",
        flagName: "Australia",
        highlights: [
            "Globally recognized degrees from highly ranked institutions.",
            "Stay and work in Australia for up to 3 years after graduation.",
            "Choose from over 22,000 diverse postgraduate programs.",
            "Dependent visa holders can work full-time during your studies.",
            "Structured pathways for permanent residency and local settlement."
        ],
        accentColor: "#00B56F",
        btnText: "Talk to an Australia expert",
        landmarkUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600",
        flagUrl: "https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&q=80&w=600",
        gradient: "linear-gradient(135deg, rgba(8, 24, 68, 0.96) 0%, rgba(13, 50, 125, 0.88) 55%, rgba(220, 53, 69, 0.5) 100%)"
    },
    USA: {
        title: "USA",
        subtitle: "The Ultimate Destination for Tech & Research",
        bgImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200",
        flagEmoji: "🇺🇸",
        flagName: "USA",
        highlights: [
            "Access state-of-the-art labs and Ivy League academic standards.",
            "Work in the US for up to 36 months under the STEM OPT program.",
            "Generous assistantships, research fellowships, and grants.",
            "Direct proximity to Silicon Valley and global tech headquarters.",
            "Unrivaled industry networking and startup incubation hubs."
        ],
        accentColor: "#0d6efd",
        btnText: "Talk to a USA expert",
        landmarkUrl: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=600",
        flagUrl: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?auto=format&fit=crop&q=80&w=600",
        gradient: "linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(30, 41, 59, 0.88) 55%, rgba(220, 53, 69, 0.5) 100%)"
    },
    UK: {
        title: "UNITED KINGDOM",
        subtitle: "Accelerated Learning in a Historic Academic Hub",
        bgImage: "https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&q=80&w=1200",
        flagEmoji: "🇬🇧",
        flagName: "UK",
        highlights: [
            "Complete your postgraduate degree in just 12 fast-paced months.",
            "Secure a 2-year post-study work permit via the Graduate Route.",
            "Learn at historic Russell Group universities with high global rank.",
            "Access comprehensive medical coverage under the NHS program.",
            "Center of international finance and world culture."
        ],
        accentColor: "#dc3545",
        btnText: "Talk to a UK expert",
        landmarkUrl: "https://images.unsplash.com/photo-1486894980609-e35c7269654f?auto=format&fit=crop&q=80&w=600",
        flagUrl: "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?auto=format&fit=crop&q=80&w=600",
        gradient: "linear-gradient(135deg, rgba(20, 10, 35, 0.96) 0%, rgba(45, 15, 60, 0.88) 55%, rgba(220, 53, 69, 0.4) 100%)"
    },
    Canada: {
        title: "CANADA",
        subtitle: "Diverse Culture, Quality Education, and PR Focus",
        bgImage: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=1200",
        flagEmoji: "🇨🇦",
        flagName: "Canada",
        highlights: [
            "Gain paid professional corporate experience through Co-Op terms.",
            "Work post-graduation for up to 3 years with PGWP status.",
            "Highly structured immigration pathways for qualified graduates.",
            "Extremely safe, welcoming, and culturally diverse communities.",
            "Highly subsidized living and tuition support systems."
        ],
        accentColor: "#ff4d4d",
        btnText: "Talk to a Canada expert",
        landmarkUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=600",
        flagUrl: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&q=80&w=600",
        gradient: "linear-gradient(135deg, rgba(50, 10, 10, 0.96) 0%, rgba(90, 20, 20, 0.88) 55%, rgba(255, 255, 255, 0.3) 100%)"
    },
    Ireland: {
        title: "IRELAND",
        subtitle: "Europe's Tech Capital for Aspiring Minds",
        bgImage: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=1200",
        flagEmoji: "🇮🇪",
        flagName: "Ireland",
        highlights: [
            "Study in the European hub of Google, Meta, Apple, and Pfizer.",
            "Stay and work in Ireland for up to 2 years after your degree.",
            "The leading English-speaking country in the Eurozone.",
            "Ranked among the top 10 peaceful countries on the Global Index.",
            "Rich tradition of innovation, creative arts, and research."
        ],
        accentColor: "#198754",
        btnText: "Talk to an Ireland expert",
        landmarkUrl: "https://images.unsplash.com/photo-1543832903-43af43d61183?auto=format&fit=crop&q=80&w=600",
        flagUrl: "https://images.unsplash.com/photo-1563821034440-b3fae3fb280c?auto=format&fit=crop&q=80&w=600",
        gradient: "linear-gradient(135deg, rgba(10, 45, 25, 0.96) 0%, rgba(20, 80, 40, 0.88) 55%, rgba(253, 126, 20, 0.4) 100%)"
    },
    Germany: {
        title: "GERMANY",
        subtitle: "Zero Tuition Fees and Engineering Leadership",
        bgImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1200",
        flagEmoji: "🇩🇪",
        flagName: "Germany",
        highlights: [
            "Tuition-free master's education at state-funded public institutions.",
            "Direct corporate integration with automotive and tech titans.",
            "18-month post-grad job-seeker visa to launch your career.",
            "Access major career options in the largest economy in Europe.",
            "Excellent social benefits, safety, and high living standards."
        ],
        accentColor: "#ffc107",
        btnText: "Talk to a Germany expert",
        landmarkUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600",
        flagUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=600",
        gradient: "linear-gradient(135deg, rgba(20, 20, 20, 0.96) 0%, rgba(40, 40, 40, 0.88) 55%, rgba(255, 193, 7, 0.3) 100%)"
    },
    France: {
        title: "FRANCE",
        subtitle: "Culinary, Business, and Tech Innovation Hub",
        bgImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
        flagEmoji: "🇫🇷",
        flagName: "France",
        highlights: [
            "Study at world-class triple-accredited schools (HEC, INSEAD).",
            "Highly subsidized tuition fee structure for public universities.",
            "Secure up to a 2-year work search visa (APS) post-graduation.",
            "Access housing subsidies (CAF) to significantly reduce costs.",
            "Gateway to European tech clusters and multinational brands."
        ],
        accentColor: "#0d6efd",
        btnText: "Talk to a France expert",
        landmarkUrl: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&q=80&w=600",
        flagUrl: "https://images.unsplash.com/photo-1539069000497-2a543b295325?auto=format&fit=crop&q=80&w=600",
        gradient: "linear-gradient(135deg, rgba(8, 24, 68, 0.96) 0%, rgba(13, 50, 125, 0.88) 55%, rgba(220, 53, 69, 0.4) 100%)"
    },
    Singapore: {
        title: "SINGAPORE",
        subtitle: "Global Financial Hub & Academic Excellence",
        bgImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200",
        flagEmoji: "🇸🇬",
        flagName: "Singapore",
        highlights: [
            "Study at prestigious universities like NUS and NTU (Ranked #1 in Asia).",
            "Direct corporate gateway to Asian headquarters of leading global MNCs.",
            "Safe, clean, and modern society with student-friendly culture.",
            "Outstanding local employment rate and high-paying starting salaries.",
            "Strategic global hub with seamless international travel links."
        ],
        accentColor: "#e61919",
        btnText: "Talk to a Singapore expert",
        landmarkUrl: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=600",
        flagUrl: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&q=80&w=600",
        gradient: "linear-gradient(135deg, rgba(8, 24, 68, 0.96) 0%, rgba(13, 50, 125, 0.88) 55%, rgba(230, 25, 25, 0.4) 100%)"
    }
};
