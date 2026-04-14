import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weights: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import BootstrapClient from './components/BootstrapClient'; // 👈 Add this

export const metadata = {
  title: 'Urbancode | Learn with Experts',
  description: 'Transforming skills into success with expert-led coding courses in Chennai.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZZX212RD85"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZZX212RD85');
            `,
          }}
        />
      </head>
      <body>
        <BootstrapClient /> {/* 👈 loads bootstrap.js only on client */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
