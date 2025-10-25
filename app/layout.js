import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import BootstrapClient from './components/BootstrapClient'; // 👈 Add this

export const metadata = {
  title: 'Urbancode | Learn with Experts',
  description: 'Transforming skills into success with expert-led coding courses in Chennai.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient /> {/* 👈 loads bootstrap.js only on client */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
