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
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "12.9419;80.2076",
    "ICBM": "12.9419, 80.2076",
    "DC.title": "Urbancode | Learn with Experts",
    "DC.description": "Transforming skills into success with expert-led coding courses in Chennai.",
    "DC.publisher": "Urbancode",
    "DC.coverage": "IN-TN",
    "DC.language": "en",
    "target_country": "IN",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* ✅ Production-Ready Optimized Structured Data */}
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://urbancode.in/#organization",
                  "name": "Urbancode Edutech",
                  "legalName": "Urbancode Edutech Solutions",
                  "url": "https://urbancode.in",
                  "logo": "https://urbancode.in/images/home/logo.png",
                  "image": "https://urbancode.in/images/home/og-image.jpg",
                  "description": "Premium IT and coding training institute in Chennai providing job-oriented certification courses.",
                  "sameAs": [
                    "https://www.facebook.com/profile.php?id=61563183054002",
                    "https://www.instagram.com/urbancode_edutech/",
                    "https://www.linkedin.com/company/urbancode-edutech-solutions/",
                    "https://www.youtube.com/channel/UC7ngZ5r2ov-qoXJRjaXJGKA"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 9429694123",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": ["en", "ta"]
                  }
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Urbancode - Velachery Branch",
                  "@id": "https://urbancode.in/#velachery",
                  "parentOrganization": { "@id": "https://urbancode.in/#organization" },
                  "url": "https://urbancode.in",
                  "telephone": "+91 9429694123",
                  "priceRange": "₹₹",
                  "areaServed": "Chennai",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "52/159, Velachery Main Rd, next to GURU NANAK COLLEGE, near Phoenix Marketcity, Velachery",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "600042",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 12.9419,
                    "longitude": 80.2076
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "09:00",
                      "closes": "20:00"
                    }
                  ],
                  "hasMap": "https://www.google.com/maps?cid=9830790481062909186"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Urbancode - Pallikaranai Branch",
                  "@id": "https://urbancode.in/#pallikaranai",
                  "parentOrganization": { "@id": "https://urbancode.in/#organization" },
                  "url": "https://urbancode.in",
                  "telephone": "+91 9429694123",
                  "priceRange": "₹₹",
                  "areaServed": "Chennai",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "9/29, 5th St, Kamakoti Nagar, Pallikaranai",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "600100",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 12.9377,
                    "longitude": 80.2154
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "09:00",
                      "closes": "20:00"
                    }
                  ],
                  "hasMap": "https://www.google.com/maps?cid=3800681766627067121"
                }
              ]
            })
          }}
        />
      </head>

      <body>
        {/* ✅ Google Tag Manager - afterInteractive (Recommended for GTM) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MTFL2HHJ');
          `}
        </Script>

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