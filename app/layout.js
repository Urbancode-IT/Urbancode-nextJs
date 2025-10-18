import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
  title: 'Urbancode | Learn with Experts',
  description: 'Transforming skills into success with expert-led coding courses in Chennai.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
