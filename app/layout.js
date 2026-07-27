import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from 'next/font/google';

import BootstrapClient from './components/BootstrapClient';
import ConditionalLayout from './components/common/ConditionalLayout';
import Script from 'next/script';
import SmoothScroll from './components/common/SmoothScroll';

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

/* ── Explicit viewport: required by Next.js App Router to guarantee
   width=device-width, initial-scale=1 in production builds.
   Without this, some deployment platforms omit the viewport meta and
   browsers fall back to a 980px virtual viewport, scaling all px sizes. ── */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Explicit viewport — belt-and-suspenders with export const viewport below */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* FontAwesome CDN for reliable icon loading */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        {/* ✅ Google Ads / GA4 Global Site Tag — MUST be in <head> for Google tag validation */}
        <Script
          id="google-gtag"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZZX212RD85"
        />
        <Script id="google-gtag-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZZX212RD85');
          `}
        </Script>

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
                    "telephone": "+91 9878798797",
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
                  "telephone": "+91 9878798797",
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
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Urbancode - Tirunelveli Branch",
                  "@id": "https://urbancode.in/#tirunelveli",
                  "parentOrganization": { "@id": "https://urbancode.in/#organization" },
                  "url": "https://urbancode.in",
                  "telephone": "+91 9878798797",
                  "priceRange": "₹₹",
                  "areaServed": "Tirunelveli",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Fab Sapphire Towers, No.29/5, 3rd Floor, South Bye Pass Road",
                    "addressLocality": "Tirunelveli",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "627005",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 8.6988,
                    "longitude": 77.7270
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "09:00",
                      "closes": "20:00"
                    }
                  ],
                  "hasMap": "https://maps.app.goo.gl/ZzmVsSWf9RcvCQot8"
                }
              ]
            })
          }}
        />
      </head>

      <body>
        {/* ✅ GTM NoScript — must be FIRST element after <body> per Google's official instructions */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTFL2HHJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* ✅ Google Tag Manager JS - afterInteractive */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MTFL2HHJ');
          `}
        </Script>

        <BootstrapClient />
        <SmoothScroll>
          <ConditionalLayout>{children}</ConditionalLayout>
        </SmoothScroll>
      </body>
    </html>
  );
}