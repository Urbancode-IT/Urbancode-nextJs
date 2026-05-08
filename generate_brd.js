const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, ShadingType } = require('docx');
const fs = require('fs');

const doc = new Document({
  sections: [{
    properties: {},
    children: [

      // Title
      new Paragraph({ heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "BUSINESS REQUIREMENT DOCUMENT (BRD)", bold: true, size: 56, color: "1a3c1a" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Urbancode Edutech — IT Training & Services Platform", size: 28, italics: true, color: "555555" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "https://www.urbancode.in  |  urbancode.in", size: 24, color: "198754" })] }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),
      new Paragraph({ children: [new TextRun({ text: "Version: 1.0   |   Date: May 2026   |   Prepared By: Urbancode Dev Team", size: 22, color: "777777" })] }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // 1. Project Overview
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "1. PROJECT OVERVIEW", bold: true, color: "198754" })] }),
      new Paragraph({ children: [new TextRun({ text: "Urbancode Edutech is a full-stack, cloud-deployed IT education and services platform operating under the domain urbancode.in. The platform was developed as a migration from a legacy system to a modern Next.js 15 architecture. It serves as a central hub for aspiring developers, students, and corporates, offering structured IT training courses, an online coding compiler, AI-powered course assistance, portfolio showcasing, and business lead generation." })] }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),
      new Paragraph({ children: [new TextRun({ text: "The system is multi-tiered: a high-performance frontend deployed on Vercel, a dedicated backend compiler service hosted on Render, and a PostgreSQL database provisioned via Linode (Akamai Cloud). The application is SEO-optimised, GSAP/Framer Motion animated, and fully responsive across all screen sizes.", italics: true })] }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // 2. Business Objectives
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "2. BUSINESS OBJECTIVES", bold: true, color: "198754" })] }),
      ...[
        "Migrate the legacy Urbancode website to a scalable, SEO-friendly Next.js 15 platform.",
        "Generate leads via course enquiry forms, Book-a-Demo modals, and contact pages.",
        "Provide real-time coding practice through an integrated online compiler.",
        "Showcase Urbancode's portfolio and services for corporate/B2B clients.",
        "Enable AI-driven student support via Gemini-powered chatbot assistant.",
        "Build brand trust through placement success stories, testimonials, and campus event showcases.",
        "Support diverse learning tracks — Full Stack, Kids Courses, Study Abroad, Internships.",
      ].map(obj => new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: obj })] })),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // 3. Stakeholders
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "3. STAKEHOLDERS & TARGET AUDIENCE", bold: true, color: "198754" })] }),
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({ children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Stakeholder", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Role / Need", bold: true })] })] }),
          ]}),
          ...[ ["Students & Developers", "Browse courses, use the compiler, enquire & enrol"],
               ["Young Learners (Kids)", "Access gamified kids courses with mascot-driven UI"],
               ["Corporate Clients", "Review portfolio, request services, contact sales"],
               ["Mentors", "Apply to join via the 'Be Our Mentor' portal"],
               ["Admin Team", "Manage feedback, view enquiry analytics, moderate content"],
               ["Search Engines", "SEO metadata, sitemap, robots.txt, structured JSON-LD"],
          ].map(([s, r]) => new TableRow({ children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: s })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: r })] })] }),
          ]}))
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // 4. Tech Stack
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "4. TECHNICAL STACK", bold: true, color: "198754" })] }),
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({ children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Layer", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Technology", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Purpose", bold: true })] })] }),
          ]}),
          ...[ ["Frontend Framework", "Next.js 15 (App Router)", "SSR, routing, SEO, API routes"],
               ["UI Language", "React 19 + Hooks", "Component-based interactive UI"],
               ["Styling", "Vanilla CSS + Bootstrap 5", "Design system, responsiveness"],
               ["Animations", "GSAP + Framer Motion", "Scroll animations, micro-interactions"],
               ["Database", "PostgreSQL via Linode", "Feedback, compiler problems, responses"],
               ["ORM / DB Client", "Mongoose (MongoDB legacy) + direct PG", "Data modelling & queries"],
               ["AI Integration", "Google Gemini 2.0 Flash Lite", "Course assistant chatbot"],
               ["Code Editor", "Monaco Editor (@monaco-editor/react)", "Online compiler IDE"],
               ["Email Service", "Nodemailer + Gmail SMTP", "Course enquiry email delivery"],
               ["Auth", "JSON Web Token (jsonwebtoken)", "Admin panel authentication"],
               ["Frontend Deploy", "Vercel", "Serverless Next.js deployment"],
               ["Backend Deploy", "Render", "Compiler execution backend service"],
               ["Database Host", "Linode (Akamai Cloud) — PostgreSQL", "Managed cloud database"],
               ["Domain", "urbancode.in", "Primary production domain"],
               ["Icon Library", "Lucide React + React Icons", "UI iconography"],
               ["Charts", "Chart.js + react-chartjs-2", "Feedback analytics dashboard"],
          ].map(([l, t, p]) => new TableRow({ children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: l })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: t, bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: p })] })] }),
          ]}))
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // 5. Deployment Architecture
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "5. DEPLOYMENT ARCHITECTURE", bold: true, color: "198754" })] }),
      new Paragraph({ children: [new TextRun({ text: "FRONTEND (Vercel)", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "The Next.js 15 application is deployed on Vercel's serverless infrastructure. Vercel handles build pipelines, CDN distribution, environment variable injection, and automatic deployments from the Git repository. All Next.js API routes (/api/*) run as Edge/Serverless functions on Vercel." })] }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),
      new Paragraph({ children: [new TextRun({ text: "BACKEND — COMPILER SERVICE (Render)", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "A standalone backend service for executing user-submitted code is hosted on Render. The frontend proxies requests to this service via /compiler-remote-api/* (configured in next.config.mjs rewrites) to avoid CORS issues. This backend handles Python and other language execution in a sandboxed environment." })] }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),
      new Paragraph({ children: [new TextRun({ text: "DATABASE (Linode / PostgreSQL)", bold: true })] }),
      new Paragraph({ children: [new TextRun({ text: "PostgreSQL is provisioned on Linode (Akamai Cloud). It stores: compiler problem sets, theory/logic content, student feedback responses, trainer profiles, and feedback questions. Connection is handled via environment variables (DATABASE_URL / PG connection string)." })] }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // 6. Page Sections
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "6. PAGE SECTIONS & RATIONALE", bold: true, color: "198754" })] }),
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({ children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Page / Section", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Route", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Purpose", bold: true })] })] }),
          ]}),
          ...[ ["Home — Hero Section", "/", "Brand intro, primary CTA for lead gen"],
               ["Home — Banner Slider", "/", "Promotional banners: Study Abroad, Kids Camp, New Courses"],
               ["Home — Courses Carousel", "/", "Showcase of job-guaranteed courses with auto-scroll"],
               ["Home — Placement Testimonials", "/", "Social proof from placed students, builds trust"],
               ["Home — Institution Videos", "/", "Campus event highlights for credibility"],
               ["Home — In-Demand Tools", "/", "Tools/technologies taught, reinforces curriculum value"],
               ["Home — Video Testimonials", "/", "Student success video stories"],
               ["Home — Testimonial Carousel", "/", "Written reviews with star ratings"],
               ["Home — FAQs", "/", "Reduce support queries, improve SEO ranking"],
               ["Home — Featured Courses", "/", "Latest/trending courses with enquiry modal"],
               ["About Us", "/about-us", "Company story, team, campus events, credibility"],
               ["Courses", "/courses", "All course listings with dynamic routing"],
               ["Course Detail", "/training/[slug]", "Individual course with syllabus, compiler, AI assistant"],
               ["Online Compiler", "/compiler", "Monaco editor + backend execution for practice"],
               ["Contact Us", "/contact-us", "Enquiry form + Nodemailer email delivery"],
               ["Book a Demo", "/book-demo", "Specific lead capture for demo sessions"],
               ["Internship", "/internship", "Internship program details and application"],
               ["Jobs", "/jobs", "Job openings and career opportunities"],
               ["Blog", "/blogs", "SEO-rich articles for organic traffic"],
               ["Certifications", "/certifications/[slug]", "Dynamic certification pages"],
               ["Portfolio", "/portfolio", "Case studies and client services showcase"],
               ["Study Abroad", "/study-abroad", "International education programs"],
               ["Kids Courses", "/kids-courses", "Gamified learning for young learners"],
               ["Be Our Mentor", "/be-our-mentor", "Mentor recruitment portal"],
               ["Feedback", "/feedback", "Student feedback collection form"],
               ["Testimonials", "/testimonials", "Aggregated student review page"],
               ["Thank You", "/thankyou", "Post-form submission confirmation"],
               ["Policies", "/privacy-policy, /terms, /cookie-policy, /disclaimer", "Legal compliance pages"],
          ].map(([page, route, purpose]) => new TableRow({ children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: page, bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: route, size: 18, color: "198754" })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: purpose })] })] }),
          ]}))
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // 7. API Calls
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "7. API ENDPOINTS", bold: true, color: "198754" })] }),
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({ children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Method", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Endpoint", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Description", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Auth", bold: true })] })] }),
          ]}),
          ...[ ["POST", "/api/auth/login", "Admin login — returns JWT token for feedback admin panel", "None"],
               ["POST", "/api/chat", "Gemini AI course assistant — accepts message + history + courseFaq", "None"],
               ["POST", "/api/send-email/course-enquiry", "Sends course enquiry email via Nodemailer/Gmail SMTP", "None"],
               ["GET", "/api/feedback/questions", "Fetches all feedback questions from PostgreSQL (Linode)", "None"],
               ["POST", "/api/feedback/responses", "Submits student feedback responses to PostgreSQL", "None"],
               ["GET", "/api/feedback/responses/analytics", "Returns aggregated response data for admin dashboard", "JWT"],
               ["GET", "/api/feedback/responses/[id]", "Fetch a specific feedback response by ID", "JWT"],
               ["GET", "/api/feedback/trainers", "Lists available trainers for feedback selection", "None"],
               ["GET", "/api/google-reviews", "Fetches Google Business reviews (currently stubbed)", "None"],
               ["POST", "/compiler-remote-api/*", "Proxied to Render backend — executes user code (Python, SQL)", "None"],
          ].map(([m, e, d, a]) => new TableRow({ children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: m, bold: true, color: m === "POST" ? "c0392b" : "1a6b3a" })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: e, size: 17, color: "444444" })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: d })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: a, color: a === "JWT" ? "c0392b" : "555555" })] })] }),
          ]}))
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // 8. Uniqueness
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "8. WHAT MAKES THIS PLATFORM UNIQUE", bold: true, color: "198754" })] }),
      ...[
        "Integrated Online Compiler: A Monaco Editor-powered coding environment embedded inside a Next.js page, connected to a Render backend for live code execution — rare for IT training institute websites.",
        "AI Course Assistant: Uses Google Gemini 2.0 Flash Lite with dynamic system prompting per course page. The bot is seeded with course-specific FAQ data, providing accurate, context-aware responses.",
        "Cinematic UX Animations: GSAP timelines and Framer Motion scroll animations are used for stacked card events, testimonial carousels, and section reveals — delivering a premium user experience.",
        "Kids Learning Space: A visually distinct sub-section with mascot-driven gamified aesthetics, completely separate design language from the main site.",
        "Fully SSR + SEO: Structured JSON-LD schema, Open Graph metadata, a generated sitemap, and robots.txt ensure maximum search engine discoverability.",
        "Multi-modal Lead Capture: Contact form, Book-a-Demo widget, floating WhatsApp/Call widgets, course enquiry modals — all feeding into email notifications and Google Analytics events.",
        "Linode-backed PostgreSQL: Production-grade managed database for compiler content, unlike typical institute sites that rely solely on static data.",
        "Premium Black & Green Design System: A bespoke CSS design system with dark luxury cards, glassmorphism, animated gradient text (text-shine), and responsive grid systems built entirely in Vanilla CSS.",
      ].map((u, i) => new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: `${u}` })] })),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // 9. Known Flaws
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "9. KNOWN FLAWS & LIMITATIONS", bold: true, color: "c0392b" })] }),
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({ children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Area", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Issue", bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Impact", bold: true })] })] }),
          ]}),
          ...[ ["Admin Authentication", "JWT secret and credentials are partially hardcoded with fallback values in source code", "Security Risk — Medium"],
               ["Compiler Backend (Render)", "Render free-tier instances sleep after inactivity causing cold-start delays of 30-50s", "UX — High"],
               ["Google Reviews API", "The /api/google-reviews endpoint is stubbed (empty directory), feature is non-functional", "Feature Gap — Low"],
               ["No Payment Gateway", "Course enrolment redirects to WhatsApp/call — no online payment or LMS enrolment flow", "Business Gap — High"],
               ["Mongoose + PostgreSQL Mixed", "Legacy Mongoose code co-exists with PostgreSQL — dual DB strategy increases maintenance overhead", "Technical Debt — Medium"],
               ["Missing Student Dashboard", "No logged-in student portal for tracking progress, assignments, or course material", "Feature Gap — High"],
               ["Mobile Compiler UX", "Monaco Editor on mobile is difficult to use due to its desktop-first design", "UX — Medium"],
               ["No CI/CD Pipeline", "Deployments rely on manual Git pushes without automated testing or staging environments", "DevOps Gap — Medium"],
               ["Static Blog Content", "Blog articles appear to be static/hardcoded without a CMS for content team management", "Scalability — Medium"],
               ["Feedback Admin Access", "Admin panel is accessible via direct URL with no IP whitelisting or 2FA", "Security Risk — Low"],
          ].map(([a, i, imp]) => new TableRow({ children: [
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: a, bold: true })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: i })] })] }),
            new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: imp, color: imp.includes("High") ? "c0392b" : imp.includes("Medium") ? "e67e22" : "27ae60" })] })] }),
          ]}))
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // 10. Future Roadmap
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "10. FUTURE ROADMAP", bold: true, color: "198754" })] }),
      ...[
        "Student LMS Dashboard: Login portal for enrolled students to access course material, assignments, and progress tracking.",
        "Payment Gateway Integration: Razorpay/Stripe integration for direct online course enrolment.",
        "CMS for Blog: Integrate Sanity.io or Contentful for the content team to manage blog posts without code.",
        "Compiler Upgrade: Migrate to a dedicated Judge0 or self-hosted execution backend on a persistent Linode VM.",
        "Push Notifications: Browser push for batch start reminders and promotional campaigns.",
        "Gamified Leaderboard: Track top performers on the compiler problem-solving hub.",
        "Multi-language Compiler: Expand beyond Python/SQL to include Java, C++, and JavaScript execution.",
        "CI/CD Pipeline: Implement GitHub Actions for automated testing, linting, and staging deployments.",
      ].map(r => new Paragraph({ bullet: { level: 0 }, children: [new TextRun({ text: r })] })),
      new Paragraph({ children: [new TextRun({ text: "" })] }),

      // Footer
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "─────────────────────────────────────────────", color: "cccccc" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Urbancode Edutech  |  urbancode.in  |  BRD v1.0  |  May 2026  |  Confidential", size: 18, color: "aaaaaa", italics: true })] }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('docs/Urbancode_BRD.docx', buffer);
  console.log('✅ BRD generated: docs/Urbancode_BRD.docx');
});
