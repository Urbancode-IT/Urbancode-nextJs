import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from 'next/font/google';

import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import BootstrapClient from './components/BootstrapClient';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // ✅ fixed (weight, not weights)
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Urbancode | Learn with Experts',
  description: 'Transforming skills into success with expert-led coding courses in Chennai.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* ✅ Google Tag Manager - MUST be before interactive */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MTFL2HHJ');
            `,
          }}
        />
      </head>

      <body>
        {/* ✅ GTM NoScript (correct placement) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTFL2HHJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <BootstrapClient />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}