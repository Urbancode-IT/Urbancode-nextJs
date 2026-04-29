
import heroImg from '../assets/hero.png.jpeg';

const aboutData = {
  mainSection: {
    title: "We are people who are invested in your",
    accent: "development.",
    description: "Urbancode Edutech Solutions is a premier skill development and technology training provider. We believe in empowering students and professionals with cutting-edge skills, enabling them to thrive in today's digital landscape.",
    cta: "Learn More"
  },
  // Data for the 3 floating/tilted cards on the right
  focusPoints: [
    {
      id: 1,
      title: "Expert Mentors",
      subtitle: "Industry Leaders",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      delay: 0
    },
    {
      id: 2,
      name: "Hands-on Projects",
      subtitle: "Real-world Experience",
      image: heroImg,
      delay: 0.2
    },
    {
      id: 3,
      name: "Placement Support",
      subtitle: "Career Guidance",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400",
      delay: 0.4
    }
  ]
};

export default aboutData;
