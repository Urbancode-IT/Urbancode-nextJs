import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import './components/Home/homeCarouselNav.css';
import './styles/pageShineCards.css';
import "bootstrap-icons/font/bootstrap-icons.css";
/* Self-hosted Inter (variable, 100–900) — do NOT use next/font/google here:
   it downloads the font from Google at build time and fails the Vercel
   build whenever that fetch is blocked/times out. */
import '@fontsource-variable/inter';

import BootstrapClient from './components/BootstrapClient';
import ConditionalLayout from './components/common/ConditionalLayout';
import SmoothScroll from './components/common/SmoothScroll';

export const metadata = {
  metadataBase: new URL('https://www.urbancode.in'),
  title: 'Urbancode Edutech | IT Training Institute in Chennai, Tamil Nadu',
  description:
    'Job-oriented IT & coding courses in Chennai and Tamil Nadu — Full Stack, AI, Testing, Cloud, kids coding, and study abroad guidance with placement support.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Urbancode Edutech',
    url: 'https://www.urbancode.in',
  },
  twitter: {
    card: 'summary_large_image',
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai, Tamil Nadu",
    "geo.position": "12.9419;80.2076",
    "ICBM": "12.9419, 80.2076",
    "DC.title": "Urbancode Edutech | IT Training Institute in Chennai, Tamil Nadu",
    "DC.description": "Job-oriented coding courses in Chennai and Tamil Nadu with placement support.",
    "DC.publisher": "Urbancode Edutech",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Viewport comes from `export const viewport` only — duplicate meta tags hurt Lighthouse */}
        <link rel="dns-prefetch" href="https://uc-chatbot.netlify.app" />

        {/*
          Google Tag Manager — one plain script in <head> only.
          Do not use next/script here: it injects the same snippet again after
          load, so GTM (and any Google / Meta tags inside it) fire twice.
        */}
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `if(!window.__UC_GTM__){window.__UC_GTM__=1;(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTFL2HHJ');}`,
          }}
        />

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
                  "@id": "https://www.urbancode.in/#organization",
                  "name": "Urbancode Edutech",
                  "legalName": "Urbancode Edutech Solutions",
                  "url": "https://www.urbancode.in",
                  "logo": "https://www.urbancode.in/images/home/logo.png",
                  "image": "https://www.urbancode.in/images/home/og-image.jpg",
                  "description": "Premium IT and coding training institute in Chennai, Tamil Nadu providing job-oriented certification courses.",
                  "sameAs": [
                    "https://www.facebook.com/profile.php?id=61563183054002",
                    "https://www.instagram.com/urbancode_edutech/",
                    "https://www.linkedin.com/company/urbanc0de",
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
                  "@id": "https://www.urbancode.in/#velachery",
                  "parentOrganization": { "@id": "https://www.urbancode.in/#organization" },
                  "url": "https://www.urbancode.in",
                  "telephone": "+91 9878798797",
                  "priceRange": "₹₹",
                  "areaServed": ["Chennai", "Tamil Nadu"],
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
                  "@id": "https://www.urbancode.in/#pallikaranai",
                  "parentOrganization": { "@id": "https://www.urbancode.in/#organization" },
                  "url": "https://www.urbancode.in",
                  "telephone": "+91 9429694123",
                  "priceRange": "₹₹",
                  "areaServed": ["Chennai", "Tamil Nadu"],
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
                  "@id": "https://www.urbancode.in/#tirunelveli",
                  "parentOrganization": { "@id": "https://www.urbancode.in/#organization" },
                  "url": "https://www.urbancode.in",
                  "telephone": "+91 9878798797",
                  "priceRange": "₹₹",
                  "areaServed": ["Tirunelveli", "Tamil Nadu"],
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
        {/* GTM noscript — required pair with the head snippet (JS-disabled browsers only) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTFL2HHJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <BootstrapClient />
        <SmoothScroll>
          <ConditionalLayout>{children}</ConditionalLayout>
        </SmoothScroll>
      </body>
    </html>
  );
}