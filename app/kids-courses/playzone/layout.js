// app/kids-courses/playzone/layout.js
export const metadata = {
  title: 'Kids Play Zone | IQ Games for Children | Urbancode Edutech',
  description:
    'Play IQ-boosting games designed for kids — Code the Robot, Memory Matrix, Math Blitz, and Pattern Detective. Fun brain training that sharpens logical thinking and problem-solving skills.',
  keywords: [
    'kids games online',
    'IQ games for children',
    'coding game for kids',
    'brain games kids Chennai',
    'logic games kids',
    'memory games for students',
    'Urbancode kids playzone',
  ],
  alternates: {
    canonical: 'https://urbancode.in/kids-courses/playzone',
  },
  openGraph: {
    title: 'Kids Play Zone – Fun IQ Games | Urbancode Edutech',
    description:
      "Train your child's brain with IQ-building games at Urbancode Kids Play Zone. Covers logical thinking, memory, math speed, and pattern recognition.",
    url: 'https://urbancode.in/kids-courses/playzone',
    siteName: 'Urbancode Edutech',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PlayzoneLayout({ children }) {
  return children;
}
