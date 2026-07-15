import {
    FaClock,
    FaUserGraduate,
    FaChalkboardTeacher,
    FaCalendarAlt,
    FaLanguage,
    FaCertificate,
    FaBriefcase,
    FaCheckCircle,
} from "react-icons/fa";

const commonHighlights = [
    { icon: <FaClock />, label: "Duration", value: "3 Months" },
    { icon: <FaUserGraduate />, label: "Mentor", value: "Industry Experts" },
    { icon: <FaChalkboardTeacher />, label: "Class mode", value: "Online/Offline" },
    { icon: <FaCalendarAlt />, label: "Timing", value: "Weekday/Weekend" },
    { icon: <FaLanguage />, label: "Language", value: "Tamil/English" },
    { icon: <FaCertificate />, label: "Qualification", value: "Freshers/Experienced" },
    { icon: <FaBriefcase />, label: "Internship", value: "1 - 3 months" },
    { icon: <FaCheckCircle />, label: "Placement", value: "100% Job Guaranteed" },
];

const commonFaq = [
    {
        q: "Do you provide live projects?",
        a: "Yes, we provide multiple real-time live projects to help you gain hands-on experience.",
    },
    {
        q: "Do you provide internship opportunities?",
        a: "Yes, internship opportunities are provided based on performance and availability.",
    },
    {
        q: "How many real-time applications can I develop after this course?",
        a: "You can develop 5–10 real-world applications by the end of this course.",
    },
    {
        q: "Are the trainers working professionals?",
        a: "Yes, all our trainers are industry experts and working professionals.",
    },
    {
        q: "Do you support placements?",
        a: "Yes, we provide 100% placement assistance including interview preparation.",
    },
];

const automationFaq = [
    {
        q: "What is Automation Testing and why is it important?",
        a: "Automation Testing is a software testing approach where test cases are executed using scripts and tools instead of manual intervention. It is crucial for ensuring faster test execution, higher accuracy, improved test coverage, and seamless integration within CI/CD pipelines, especially in Agile and DevOps environments.",
    },
    {
        q: "Which tools are commonly used in Automation Testing?",
        a: "Popular tools include Selenium for web automation, Playwright for modern cross-browser testing, and frameworks built using TypeScript or Java. For API testing, tools like Postman and Rest Assured are widely used.",
    },
    {
        q: "What is the difference between Selenium and Playwright?",
        a: "Selenium is a widely adopted open-source tool supporting multiple languages and browsers, while Playwright offers faster execution, built-in auto-waiting, and better support for modern web applications, including multi-tab and network interception capabilities.",
    },
    {
        q: "What programming languages are used in Automation Testing?",
        a: "Automation Testing supports multiple languages such as Java, Python, JavaScript, and TypeScript. TypeScript is increasingly popular due to its static typing, scalability, and seamless integration with modern frameworks like Playwright.",
    },
    {
        q: "What is API Testing in Automation?",
        a: "API Testing focuses on validating backend services by testing endpoints for functionality, reliability, performance, and security. Tools like Postman and frameworks like Rest Assured help automate API test cases, ensuring seamless communication between microservices.",
    },
    {
        q: "What are the benefits of using Automation Testing?",
        a: "Automation Testing reduces human errors, accelerates regression testing, supports continuous integration, and improves software quality. It enables parallel execution, reusable test scripts, and faster feedback cycles, making it essential for scalable software development.",
    },
    {
        q: "What is a Test Automation Framework?",
        a: "A Test Automation Framework is a structured set of guidelines, coding standards, and tools used to design and execute automated tests. Common frameworks include Data-Driven, Keyword-Driven, Hybrid, and Page Object Model (POM), enhancing maintainability and scalability.",
    },
    {
        q: "What skills are required to become an Automation Tester?",
        a: "Key skills include programming knowledge (Java, Python, or TypeScript), understanding of testing concepts, experience with tools like Selenium or Playwright, API testing, version control (Git), and CI/CD tools like Jenkins.",
    },
    {
        q: "How does Automation Testing fit into DevOps?",
        a: "Automation Testing is a core component of DevOps, enabling continuous testing within CI/CD pipelines. Automated test scripts run during build and deployment stages, ensuring faster releases and higher software reliability.",
    },
    {
        q: "Is Automation Testing a good career in 2026?",
        a: "Yes, Automation Testing is in high demand due to rapid digital transformation, Agile adoption, and DevOps practices. Professionals skilled in tools like Selenium, Playwright, and API automation are highly sought after in the tech industry.",
    },
];

const playwrightFaq = [
    {
        q: "Can Playwright be used for API testing?",
        a: "Yes, Playwright provides built-in support for API testing through its APIRequestContext. It allows testers to send HTTP requests (GET, POST, PUT, DELETE) directly without relying on external tools, making it a powerful all-in-one solution for both UI and API automation.",
    },
    {
        q: "What is APIRequestContext in Playwright?",
        a: "APIRequestContext is a core feature in Playwright that enables direct interaction with REST APIs. It helps create isolated API sessions, manage headers, authentication tokens, and perform request chaining for end-to-end test scenarios.",
    },
    {
        q: "How does Playwright API testing differ from tools like Postman?",
        a: "While Postman is mainly used for manual and exploratory API testing, Playwright integrates API testing into automated test suites. This allows seamless end-to-end testing by combining backend API validation with frontend UI workflows in a single framework.",
    },
    {
        q: "Can Playwright handle authentication for API testing?",
        a: "Yes, Playwright supports various authentication mechanisms such as API keys, Bearer tokens, OAuth, and session cookies. You can configure headers globally or per request, making it suitable for testing secure and enterprise-grade APIs.",
    },
    {
        q: "What are the advantages of using Playwright for API + UI testing?",
        a: "Using Playwright for both API and UI testing ensures faster execution, reduced tool dependency, and better test coverage. It enables testers to validate backend responses, seed test data via APIs, and verify UI behavior in a single automated workflow, improving overall testing efficiency.",
    },
];

const ccnaFaq = [
    {
        q: "What is CCNA?",
        a: "CCNA is an entry-level networking certification offered by Cisco Systems. It validates foundational knowledge in networking concepts, IP connectivity, security fundamentals, automation, and network access.",
    },
    {
        q: "Who should pursue CCNA certification?",
        a: "CCNA is ideal for beginners, non-IT professionals transitioning into networking, and IT support engineers who want to build a strong foundation in networking and infrastructure management.",
    },
    {
        q: "What topics are covered in the CCNA syllabus?",
        a: "The CCNA curriculum includes IP addressing, subnetting, routing and switching, VLANs, NAT, network security, wireless networking, and basic automation concepts.",
    },
    {
        q: "What is the exam format for CCNA?",
        a: "The CCNA exam (200-301) consists of multiple-choice questions, drag-and-drop, simulations, and scenario-based questions designed to test practical networking skills.",
    },
    {
        q: "How long does it take to prepare for CCNA?",
        a: "Typically, it takes 3 to 6 months of consistent study, depending on your background. Hands-on practice with networking labs is crucial for success.",
    },
    {
        q: "What are the career opportunities after CCNA?",
        a: "After earning CCNA, you can pursue roles like Network Engineer, Network Administrator, System Administrator, and IT Support Engineer.",
    },
    {
        q: "Is CCNA difficult for beginners?",
        a: "CCNA can be challenging for beginners due to concepts like subnetting and routing protocols, but with proper guidance, lab practice, and structured training, it is achievable.",
    },
    {
        q: "What tools are used to practice CCNA concepts?",
        a: "Common tools include Cisco Packet Tracer and GNS3 for simulating real-world networking scenarios, helping learners gain hands-on experience.",
    },
    {
        q: "What is the validity of CCNA certification?",
        a: "The CCNA certification is valid for three years, after which you need to recertify to stay updated with current networking technologies.",
    },
    {
        q: "Is CCNA worth it in 2026?",
        a: "Yes, CCNA remains highly valuable due to the increasing demand for networking professionals in cloud computing, cybersecurity, and enterprise IT infrastructure.",
    },
    {
        q: "Do I need a technical background to learn CCNA?",
        a: "No, you don’t need a prior IT background to start CCNA. Basic computer knowledge and a willingness to learn networking concepts are enough to begin.",
    },
    {
        q: "Is CCNA suitable for beginners? (v2)",
        a: "Yes, CCNA is designed as an entry-level certification, making it ideal for beginners who want to start a career in networking.",
    },
    {
        q: "How difficult is the CCNA exam? (v2)",
        a: "The exam can be moderately challenging, especially topics like subnetting and routing. However, with consistent practice and hands-on labs, most students can clear it successfully.",
    },
    {
        q: "How much time should I study daily for CCNA?",
        a: "Students typically study 2–3 hours per day for about 3–6 months to prepare effectively for CCNA.",
    },
    {
        q: "Do I need coding knowledge for CCNA?",
        a: "No, coding is not required for CCNA. However, basic knowledge of networking automation concepts can be an added advantage.",
    },
    {
        q: "Which tools should I use to practice CCNA?",
        a: "Students commonly use Cisco Packet Tracer and GNS3 to simulate real-world networking scenarios and gain practical experience.",
    },
    {
        q: "What job roles can I get after CCNA?",
        a: "After completing CCNA, students can apply for roles such as Network Engineer, Network Administrator, IT Support Engineer, and System Administrator.",
    },
    {
        q: "Is CCNA enough to get a job?",
        a: "CCNA provides a strong foundation, but combining it with hands-on labs, internships, and basic troubleshooting skills significantly increases your chances of getting hired.",
    },
    {
        q: "What is the cost of the CCNA exam?",
        a: "The CCNA exam (200-301) typically costs around $300 (may vary by region and currency).",
    },
    {
        q: "Is CCNA still valuable in 2026? (v2)",
        a: "Yes, CCNA remains highly relevant due to increasing demand in networking, cloud computing, and cybersecurity domains.",
    },
    {
        q: "Can I learn CCNA online?",
        a: "Absolutely. Many students prepare for CCNA through online courses, virtual labs, and instructor-led training programs.",
    },
    {
        q: "What should I do after CCNA?",
        a: "After CCNA, students can advance to certifications like CCNP, or specialize in Cloud, Cybersecurity, or DevOps for better career growth.",
    },
];

const reactNativeFaq = [
    {
        q: "What is React Native?",
        a: "React Native is an open-source framework developed by Meta that allows developers to build cross-platform mobile applications using JavaScript and React, enabling a single codebase for both Android and iOS.",
    },
    {
        q: "How is React Native different from native app development?",
        a: "Unlike native development (Java/Kotlin for Android, Swift for iOS), React Native uses a shared codebase, reducing development time and cost while still providing near-native performance.",
    },
    {
        q: "What programming language is used in React Native?",
        a: "React Native primarily uses JavaScript and can also be enhanced with TypeScript for better scalability, type safety, and maintainability.",
    },
    {
        q: "Can React Native apps achieve native performance?",
        a: "Yes, React Native delivers near-native performance using native components and bridges, and can be further optimized with native modules when required.",
    },
    {
        q: "What are the advantages of using React Native?",
        a: "Key benefits include faster development, code reusability, strong community support, hot reloading, and cost-effective cross-platform deployment.",
    },
    {
        q: "What tools are commonly used with React Native?",
        a: "Developers often use tools like Visual Studio Code, Android Studio, Xcode, and debugging tools like React DevTools and Flipper.",
    },
    {
        q: "Is React Native suitable for beginners?",
        a: "Yes, React Native is beginner-friendly, especially for those with basic JavaScript or React knowledge, making it a popular choice for new developers.",
    },
    {
        q: "What types of apps can be built using React Native?",
        a: "You can build e-commerce apps, social media apps, fintech applications, healthcare apps, and enterprise mobile solutions using React Native.",
    },
    {
        q: "How does React Native handle API integration?",
        a: "React Native supports seamless API integration using fetch, Axios, or other libraries to connect with RESTful or GraphQL APIs for dynamic data handling.",
    },
    {
        q: "Is React Native a good career choice in 2026?",
        a: "Yes, React Native remains in high demand due to the growing need for cross-platform mobile applications, offering strong career opportunities in startups and enterprise companies.",
    },
];

export const newCourseData = {
    "mern-stack": {
        heroData: {
            titleTop: "Fast track your career growth",
            highlightText: "MERN Stack Development",
            subtitle: "Master modern web development with MERN Stack. Build real-world projects and get 100% placement support.",
            rating: 4.8,
            reviewCount: "400+",
            totalStars: 5,
            image: "/images/courses/z1.webp",
            brochure: "/curriculum/mern-stack-brochure.pdf",
        },
        highlightsData: commonHighlights,
        curriculumData: [
            {
                id: 1,
                title: "Web Development Fundamentals",
                content: (
                    <ul>
                        <li>Understand how websites work and the roles of HTML, CSS, and JavaScript in web development.</li>
                        <li>Learn how the internet functions, including how websites are hosted and served.</li>
                        <li>Gain hands-on experience with Git, GitHub, and version control.</li>
                        <li>Develop key troubleshooting and debugging skills to apply to your projects.</li>
                    </ul>
                )
            },
            {
                id: 2,
                title: "HTML 5",
                content: (
                    <ul>
                        <li>HTML Expedition: Learn HTML syntax to structure your digital world.</li>
                        <li>Base Camp Setup: Use HTML boilerplate and understand doctypes.</li>
                        <li>Nesting Mastery: Apply indentation and nesting for clean code.</li>
                        <li>Tag Treasures: Use HTML tags for headings and paragraphs.</li>
                        <li>Conquer Lists: Create ordered and unordered lists.</li>
                        <li>Capture Moments: Insert images with the &lt;img&gt; tag.</li>
                        <li>Link Builder: Create page links with anchor tags.</li>
                        <li>Multi-Page Adventure: Design interconnected web pages.</li>
                        <li>Navigate HTML: Use best practices for effective coding.</li>
                    </ul>
                )
            },
            {
                id: 3,
                title: "CSS",
                content: (
                    <ul>
                        <li>CSS Basics: Discover how cascading style sheets bring your website to life.</li>
                        <li>Selector Skills: Master CSS selectors and properties for styling.</li>
                        <li>Inline to External: Learn to apply CSS using inline, internal, and external methods.</li>
                        <li>Best Practices: Follow CSS coding best practices for clean styles.</li>
                        <li>Specificity Secrets: Understand CSS specificity and inheritance rules.</li>
                        <li>Box Model Blueprint: Dive into the CSS Box Model for layout control.</li>
                        <li>Inspect &amp; Diagnose: Use developer tools to troubleshoot CSS.</li>
                        <li>Positioning &amp; Display: Explore CSS positioning and display techniques.</li>
                        <li>Font Styling: Style text with CSS and web-safe fonts.</li>
                        <li>Responsive Magic: Implement responsiveness using media queries.</li>
                        <li>Float &amp; Clear: Utilize float and clear properties for layout.</li>
                        <li>Selector Mastery: Combine CSS selectors and grasp their priorities.</li>
                    </ul>
                )
            },
            {
                id: 4,
                title: "FLEXBOX",
                content: (
                    <ul>
                        <li>Flexbox Origins: Learn why Flexbox was introduced to CSS.</li>
                        <li>Display Flex: Understand display: flex for flexible layouts.</li>
                        <li>Direction Control: Master flex-direction to control layout flow.</li>
                        <li>Align &amp; Justify: Position child items using alignment and justification.</li>
                        <li>Sizing &amp; Distribution: Use the flex shorthand to control child item sizing.</li>
                    </ul>
                )
            },
            {
                id: 5,
                title: "GRIDS",
                content: (
                    <ul>
                        <li>Grid vs. Flexbox: Explore differences and strengths of Grid layout.</li>
                        <li>Grid Display: Use display: grid for structured designs.</li>
                        <li>Grid Sizing: Create and arrange grids with tracks and gaps.</li>
                        <li>Positioning: Place items across rows and columns.</li>
                        <li>Combine Forces: Mix Grid with Flexbox for complex layouts.</li>
                    </ul>
                )
            },
            {
                id: 6,
                title: "BOOTSTRAP",
                content: (
                    <ul>
                        <li>Native vs. Frameworks: Explore the differences between CSS tooling and external frameworks.</li>
                        <li>Bootstrap Installation: Learn to add Bootstrap to your website for rapid styling.</li>
                        <li>12-Column Layout: Master the Bootstrap grid system for flexible layouts.</li>
                        <li>Components Galore: Use Bootstrap's buttons, carousels, cards, and navbars.</li>
                        <li>Icon Access: Incorporate designer icons from Bootstrap’s collection.</li>
                        <li>Quick Builds: Use code snippets, examples, and templates to create stunning, mobile-first websites.</li>
                    </ul>
                )
            },
            {
                id: 7,
                title: "WEB DESIGN",
                content: (
                    <ul>
                        <li>Design Principles: Master the fundamentals of web design, UI, and UX.</li>
                        <li>Color Theory: Explore modern color palettes for a professional website look.</li>
                        <li>Typography: Choose stylish, free-for-commercial-use fonts for a user-friendly design.</li>
                        <li>UI Focus: Learn to manage user attention using key UI design principles.</li>
                        <li>UX Mastery: Design user-friendly websites by understanding core UX concepts.</li>
                    </ul>
                )
            },
            {
                id: 8,
                title: "DOCUMENT OBJECT MODEL(DOM)",
                content: (
                    <ul>
                        <li>HTML Tree: Explore the tree structure of HTML-based websites.</li>
                        <li>DOM Navigation: Traverse the document using object notation.</li>
                        <li>Separation of Concerns: Apply coding best practices for clean, maintainable code.</li>
                        <li>Element Manipulation: Change HTML elements using your DOM mastery.</li>
                    </ul>
                )
            },
            {
                id: 9,
                title: "JAVASCRIPT ES6",
                content: (
                    <ul>
                        <li>Language Showdown: Compare JavaScript with scripting, markup, and stylesheet languages.</li>
                        <li>JavaScript Overview: Explore JS and its versatile uses in web development.</li>
                        <li>Coding Tools: Learn to work with code editors and IDEs.</li>
                        <li>Syntax &amp; Data Types: Understand variables (let, const), data types, and operators.</li>
                        <li>Control Structures: Master if/else, loops (for, while, for...of, for...in) for code flow.</li>
                        <li>Functions: Explore function declarations, scope, closures, arrow functions, and higher-order functions.</li>
                        <li>Array Mastery: Create, manipulate, and use methods (map, filter, reduce, slice, concat).</li>
                        <li>Spread Syntax: Utilize ... for array and function call expansion.</li>
                        <li>OOP in JS: Create objects using literals, constructors, and classes; understand this and super.</li>
                        <li>Object Handling: Use Object.keys, Object.values, and Object.assign for manipulation.</li>
                    </ul>
                )
            },
            {
                id: 10,
                title: "REACT.JS",
                content: (
                    <ul>
                        <li>React Adventure: Dive into front-end development with React.</li>
                        <li>Component Mastery: Learn when and how to use React components.</li>
                        <li>Prop Passing: Discover how to pass and use props effectively.</li>
                        <li>JSX Magic: Write and understand JSX syntax for dynamic UI.</li>
                        <li>React DOM: Explore the React DOM for rendering components.</li>
                        <li>State Management: Master state handling in React.</li>
                        <li>Hook Exploration: Learn about React Hooks for enhanced functionality.</li>
                        <li>Conditional Rendering: Implement conditional logic in your components.</li>
                        <li>Component Types: Understand the difference between class and functional components.</li>
                    </ul>
                )
            },
            {
                id: 11,
                title: "GIT, GITHUB, AND VERSION CONTROL",
                content: (
                    <ul>
                        <li>Version Control Basics: Use Git for version control and seamless collaboration.</li>
                        <li>Fork, Branch &amp; Clone: Master forking, branching, and cloning for efficient workflows.</li>
                        <li>Remote Repos: Utilize GitHub as your remote code repository.</li>
                        <li>Change Management: Learn to checkout and roll back changes using Git.</li>
                        <li>Git with Xcode: Integrate Git and GitHub into your Xcode projects.</li>
                    </ul>
                )
            },
            {
                id: 12,
                title: "NODE.JS",
                content: (
                    <ul>
                        <li>Back-End Basics: Explore the components of back-end development using an MVC framework.</li>
                        <li>OOP in Node: Apply data types, objects, methods, and classes to back-end development.</li>
                        <li>Server-Side JavaScript: Dive into JavaScript for server-side programming.</li>
                        <li>Node Command Line: Use Node.js commands for back-end tasks.</li>
                        <li>NPM Power: Manage packages with Node Package Manager (NPM).</li>
                        <li>Build Processes: Learn JavaScript build processes for efficient development.</li>
                        <li>Event Loop: Understand Node's event loop and emitters for asynchronous operations.</li>
                        <li>File System: Interact with the file system using Node.js.</li>
                        <li>Modular Magic: Work with modules for organized, reusable code.</li>
                        <li>Native Drivers: Utilize native Node.js drivers for various database interactions.</li>
                    </ul>
                )
            },
            {
                id: 13,
                title: "EXPRESS.JS",
                content: (
                    <ul>
                        <li>Express Setup: Learn how to install and use Express in Node applications.</li>
                        <li>Server Creation: Build servers using Node and Express.</li>
                        <li>RESTful Routing: Master routing to handle requests with Express.</li>
                        <li>Middleware Magic: Implement middleware for enhanced Node applications.</li>
                    </ul>
                )
            },
            {
                id: 14,
                title: "APPLICATION PROGRAMMING INTERFACE (API)",
                content: (
                    <ul>
                        <li>API Basics: Explore what APIs are and how they function.</li>
                        <li>Deep Dive into HTTP: Understand the role of HTTP in API communication.</li>
                        <li>API Calls: Learn how to make API requests effectively.</li>
                        <li>Read the Docs: Navigate and understand API documentation.</li>
                        <li>API Authentication: Grasp basic authentication methods for secure access.</li>
                        <li>Server Communication: Implement server-to-server interactions.</li>
                        <li>Data Formats: Compare JSON and XML for data exchange.</li>
                    </ul>
                )
            },
            {
                id: 15,
                title: "MONGO DB",
                content: (
                    <ul>
                        <li>Introduction to MongoDB: Discover the world of NoSQL databases with MongoDB.</li>
                        <li>Setting Up: Learn how to install and set up MongoDB for your projects.</li>
                        <li>Database Structure: Explore collections and documents as the building blocks of MongoDB.</li>
                        <li>CRUD Operations: Master Create, Read, Update, and Delete operations in MongoDB.</li>
                        <li>Querying the Database: Use queries to search and filter data effectively.</li>
                        <li>Schema Design: Understand schema-less design and data modeling for flexibility.</li>
                        <li>Aggregation: Harness aggregation pipelines to process and analyze data.</li>
                        <li>Indexes: Learn to create indexes for faster search and query performance.</li>
                        <li>Relationships: Implement relationships between data using references and embedding.</li>
                        <li>Integration with Node.js: Connect your MongoDB database to Node.js applications.</li>
                    </ul>
                )
            },
            {
                id: 16,
                title: "PROJECTS",
                content: (
                    <ul>
                        <li>Personal Portfolio Website</li>
                        <li>QR Code Generator</li>
                        <li>Building a React Advice App with API Integration</li>
                        <li>Weather App with React</li>
                        <li>BMI Calculator App with React</li>
                        <li>Currency Converter App with React</li>
                        <li>Digital Clock with React</li>
                        <li>Strong Password Generator in React</li>
                        <li>Quiz App with React</li>
                        <li>CRUD Application with React.js Frontend and Node.js Backend</li>
                    </ul>
                )
            },
            {
                id: 17,
                title: "CHALLENGES AND INTERACTIVE LEARNING",
                content: (
                    <p>
                        Each topic features engaging challenges to provide hands-on, real-world learning experiences. These activities start easy, building up in difficulty to reinforce concepts. Students receive instant feedback, collaborate in groups, and participate in friendly competitions to boost skills and confidence. Advanced learners can "challenge a mentor" for deeper insights, ensuring a dynamic, enjoyable, and practical learning journey. This approach makes the course interactive, motivating, and memorable.
                    </p>
                )
            },
            {
                id: 18,
                title: "AI TOOLS FOR MODERN DEVELOPERS",
                content: (
                    <p>
                        In addition to MERN stack development, students will learn to use powerful AI tools that improve productivity, design, and coding efficiency.
                    </p>
                )
            },
            {
                id: 19,
                title: "AI TOOLS COVERED:",
                content: (
                    <ul>
                        <li><strong>Claude</strong> - AI assistant for coding help, debugging, and documentation writing.</li>
                        <li><strong>Vercel</strong> - AI-powered deployment platform for hosting and scaling full-stack applications.</li>
                        <li><strong>Antigravity</strong> - AI development tool for faster coding workflows and automation.</li>
                        <li><strong>Figma</strong> - AI-assisted UI/UX design tool to create modern website and app designs.</li>
                        <li><strong>Miro</strong> - AI collaboration and brainstorming tool for planning projects, system design, and workflows.</li>
                    </ul>
                )
            },
            {
                id: 20,
                title: "WHAT STUDENTS WILL LEARN:",
                content: (
                    <ul>
                        <li>Using AI for code generation and debugging</li>
                        <li>Designing UI prototypes before development</li>
                        <li>Deploying MERN applications using modern cloud tools</li>
                        <li>Project planning and collaboration with AI tools</li>
                        <li>Increasing developer productivity using AI workflows</li>
                    </ul>
                )
            },
        ],
        toolsData: [
            { id: 1, name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { id: 2, name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { id: 3, name: "Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { id: 4, name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { id: 5, name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { id: 6, name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { id: 7, name: "Node.Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { id: 8, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { id: 9, name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
            { id: 10, name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        ],
        faqData: commonFaq,
    },
    "mean-stack": {
        heroData: {
            titleTop: "Advanced training in",
            highlightText: "MEAN Stack Development",
            subtitle: "Become a professional developer with MongoDB, Express.js, Angular, and Node.js. Build scalable apps from scratch.",
            rating: 4.7,
            reviewCount: "350+",
            totalStars: 5,
            image: "/images/courses/z2.webp",
            brochure: "/curriculum/mern-stack-brochure.pdf",
        },
        highlightsData: commonHighlights,
        curriculumData: [
            {
                id: 1,
                title: "Web Development Fundamentals",
                content: (
                    <ul>
                        <li>Understand how websites work and the roles of HTML, CSS, and JavaScript in web development.</li>
                        <li>Learn how the internet functions, including how websites are hosted and served.</li>
                        <li>Gain hands-on experience with Git, GitHub, and version control.</li>
                        <li>Develop key troubleshooting and debugging skills to apply to your projects.</li>
                    </ul>
                )
            },
            {
                id: 2,
                title: "HTML 5",
                content: (
                    <ul>
                        <li>HTML Expedition: Learn HTML syntax to structure your digital world.</li>
                        <li>Base Camp Setup: Use HTML boilerplate and understand doctypes.</li>
                        <li>Nesting Mastery: Apply indentation and nesting for clean code.</li>
                        <li>Tag Treasures: Use HTML tags for headings and paragraphs.</li>
                        <li>Conquer Lists: Create ordered and unordered lists.</li>
                        <li>Capture Moments: Insert images with the &lt;img&gt; tag.</li>
                        <li>Link Builder: Create page links with anchor tags.</li>
                        <li>Multi-Page Adventure: Design interconnected web pages.</li>
                        <li>Navigate HTML: Use best practices for effective coding.</li>
                    </ul>
                )
            },
            {
                id: 3,
                title: "CSS",
                content: (
                    <ul>
                        <li>CSS Basics: Discover how cascading style sheets bring your website to life.</li>
                        <li>Selector Skills: Master CSS selectors and properties for styling.</li>
                        <li>Inline to External: Learn to apply CSS using inline, internal, and external methods.</li>
                        <li>Best Practices: Follow CSS coding best practices for clean styles.</li>
                        <li>Specificity Secrets: Understand CSS specificity and inheritance rules.</li>
                        <li>Box Model Blueprint: Dive into the CSS Box Model for layout control.</li>
                        <li>Inspect &amp; Diagnose: Use developer tools to troubleshoot CSS.</li>
                        <li>Positioning &amp; Display: Explore CSS positioning and display techniques.</li>
                        <li>Font Styling: Style text with CSS and web-safe fonts.</li>
                        <li>Responsive Magic: Implement responsiveness using media queries.</li>
                        <li>Float &amp; Clear: Utilize float and clear properties for layout.</li>
                        <li>Selector Mastery: Combine CSS selectors and grasp their priorities.</li>
                    </ul>
                )
            },
            {
                id: 4,
                title: "FLEXBOX",
                content: (
                    <ul>
                        <li>Flexbox Origins: Learn why Flexbox was introduced to CSS.</li>
                        <li>Display Flex: Understand display: flex for flexible layouts.</li>
                        <li>Direction Control: Master flex-direction to control layout flow.</li>
                        <li>Align &amp; Justify: Position child items using alignment and justification.</li>
                        <li>Sizing &amp; Distribution: Use the flex shorthand to control child item sizing.</li>
                    </ul>
                )
            },
            {
                id: 5,
                title: "GRIDS",
                content: (
                    <ul>
                        <li>Grid vs. Flexbox: Explore differences and strengths of Grid layout.</li>
                        <li>Grid Display: Use display: grid for structured designs.</li>
                        <li>Grid Sizing: Create and arrange grids with tracks and gaps.</li>
                        <li>Positioning: Place items across rows and columns.</li>
                        <li>Combine Forces: Mix Grid with Flexbox for complex layouts.</li>
                    </ul>
                )
            },
            {
                id: 6,
                title: "BOOTSTRAP",
                content: (
                    <ul>
                        <li>Native vs. Frameworks: Explore the differences between CSS tooling and external frameworks.</li>
                        <li>Bootstrap Installation: Learn to add Bootstrap to your website for rapid styling.</li>
                        <li>12-Column Layout: Master the Bootstrap grid system for flexible layouts.</li>
                        <li>Components Galore: Use Bootstrap's buttons, carousels, cards, and navbars.</li>
                        <li>Icon Access: Incorporate designer icons from Bootstrap’s collection.</li>
                        <li>Quick Builds: Use code snippets, examples, and templates to create stunning, mobile-first websites.</li>
                    </ul>
                )
            },
            {
                id: 7,
                title: "WEB DESIGN",
                content: (
                    <ul>
                        <li>Design Principles: Master the fundamentals of web design, UI, and UX.</li>
                        <li>Color Theory: Explore modern color palettes for a professional website look.</li>
                        <li>Typography: Choose stylish, free-for-commercial-use fonts for a user-friendly design.</li>
                        <li>UI Focus: Learn to manage user attention using key UI design principles.</li>
                        <li>UX Mastery: Design user-friendly websites by understanding core UX concepts.</li>
                    </ul>
                )
            },
            {
                id: 8,
                title: "DOCUMENT OBJECT MODEL(DOM)",
                content: (
                    <ul>
                        <li>HTML Tree: Explore the tree structure of HTML-based websites.</li>
                        <li>DOM Navigation: Traverse the document using object notation.</li>
                        <li>Separation of Concerns: Apply coding best practices for clean, maintainable code.</li>
                        <li>Element Manipulation: Change HTML elements using your DOM mastery.</li>
                    </ul>
                )
            },
            {
                id: 9,
                title: "JAVASCRIPT ES6",
                content: (
                    <ul>
                        <li>Language Showdown: Compare JavaScript with scripting, markup, and stylesheet languages.</li>
                        <li>JavaScript Overview: Explore JS and its versatile uses in web development.</li>
                        <li>Coding Tools: Learn to work with code editors and IDEs.</li>
                        <li>Syntax &amp; Data Types: Understand variables (let, const), data types, and operators.</li>
                        <li>Control Structures: Master if/else, loops (for, while, for...of, for...in) for code flow.</li>
                        <li>Functions: Explore function declarations, scope, closures, arrow functions, and higher-order functions.</li>
                        <li>Array Mastery: Create, manipulate, and use methods (map, filter, reduce, slice, concat).</li>
                        <li>Spread Syntax: Utilize ... for array and function call expansion.</li>
                        <li>OOP in JS: Create objects using literals, constructors, and classes; understand this and super.</li>
                        <li>Object Handling: Use Object.keys, Object.values, and Object.assign for manipulation.</li>
                    </ul>
                )
            },
            {
                id: 10,
                title: "TypeScript Introduction",
                content: (
                    <ul>
                        <li>Overview of TypeScript</li>
                        <li>Why TypeScript for Angular</li>
                        <li>TypeScript vs JavaScript</li>
                        <li>Setting up TypeScript Environment</li>
                        <li>Key Concepts in TypeScript: Static typing, Interfaces, and Decorators.</li>
                    </ul>
                )
            },
            {
                id: 11,
                title: "Angular Framework & Installation",
                content: (
                    <ul>
                        <li>Angular Installation: Node.js, npm, and Angular CLI setup.</li>
                        <li>Creating a New Angular Project and building the application.</li>
                        <li>Understanding Angular Project Structure: main.ts, app.module.ts, and folder organization.</li>
                        <li>Components, Modules, and Templates: The building blocks of Angular.</li>
                    </ul>
                )
            },
            {
                id: 12,
                title: "Angular Routing",
                content: (
                    <ul>
                        <li>Introduction to Angular Routing and configuring app-routing.module.ts.</li>
                        <li>Advanced Routing: Route Parameters and dynamic data.</li>
                        <li>Route Guards: Implementing Navigation Control for security.</li>
                    </ul>
                )
            },
            {
                id: 13,
                title: "Data Binding in Angular",
                content: (
                    <ul>
                        <li>Concept of Data Binding: Interpolation for dynamic data.</li>
                        <li>Property Binding: Binding DOM properties.</li>
                        <li>Event Binding: Listening to user actions.</li>
                        <li>Two-Way Binding: Synchronizing data between UI and Model.</li>
                    </ul>
                )
            },
            {
                id: 14,
                title: "Directives & Pipes",
                content: (
                    <ul>
                        <li>Structural Directives: *ngIf, *ngFor, and *ngSwitch.</li>
                        <li>Attribute Directives: ngClass and ngStyle.</li>
                        <li>Built-in Pipes: Date, Currency, Uppercase, and Async Pipe.</li>
                        <li>Custom Directives &amp; Pipes: Creating and registering your own logic.</li>
                    </ul>
                )
            },
            {
                id: 15,
                title: "Forms in Angular",
                content: (
                    <ul>
                        <li>Template-Driven Forms: Simple form syntax.</li>
                        <li>Reactive Forms: Master FormBuilder and FormGroup.</li>
                        <li>Form Validation: implementing built-in and custom validators.</li>
                        <li>CRUD Operations: Using forms to manage application data.</li>
                        <li>Custom Toast Service for feedback.</li>
                    </ul>
                )
            },
            {
                id: 16,
                title: "Services & API Integration",
                content: (
                    <ul>
                        <li>Decorators in Angular: Understanding @Component, @Injectable, etc.</li>
                        <li>Services in Angular: Single Responsibility and Dependency Injection.</li>
                        <li>HTTP Client: Performing GET, POST, PUT, DELETE requests.</li>
                        <li>RxJS Operators: Handling Observables and stream management.</li>
                        <li>API Error Handling: Managing responses and server status.</li>
                    </ul>
                )
            },
            {
                id: 17,
                title: "Auth & Role-Based Access",
                content: (
                    <ul>
                        <li>Authentication with Local Storage: Managing user sessions and Login/Logout.</li>
                        <li>Angular Guards: Implementing CanActivate and CanActivateChild for route protection.</li>
                        <li>Role-Based Access Controls: Creating secure user levels.</li>
                    </ul>
                )
            },
            {
                id: 18,
                title: "Student Management Project (CRUD Example)",
                content: (
                    <ul>
                        <li>Project Setup: Creating Components and Models.</li>
                        <li>Implementing CRUD: Create, Read, Update, Delete operations.</li>
                        <li>Frontend Integration: Reactive Forms and Role-Based Guards.</li>
                        <li>Final Project Assembly.</li>
                    </ul>
                )
            },
            {
                id: 19,
                title: "NODE.JS",
                content: (
                    <ul>
                        <li>Back-End Basics: Explore the components of back-end development using an MVC framework.</li>
                        <li>OOP in Node: Apply data types, objects, methods, and classes to back-end development.</li>
                        <li>Server-Side JavaScript: Dive into JavaScript for server-side programming.</li>
                        <li>Node Command Line: Use Node.js commands for back-end tasks.</li>
                        <li>NPM Power: Manage packages with Node Package Manager (NPM).</li>
                        <li>Build Processes: Learn JavaScript build processes for efficient development.</li>
                        <li>Event Loop: Understand Node's event loop and emitters for asynchronous operations.</li>
                        <li>File System: Interact with the file system using Node.js.</li>
                        <li>Modular Magic: Work with modules for organized, reusable code.</li>
                        <li>Native Drivers: Utilize native Node.js drivers for various database interactions.</li>
                    </ul>
                )
            },
            {
                id: 20,
                title: "EXPRESS.JS",
                content: (
                    <ul>
                        <li>Express Setup: Learn how to install and use Express in Node applications.</li>
                        <li>Server Creation: Build servers using Node and Express.</li>
                        <li>RESTful Routing: Master routing to handle requests with Express.</li>
                        <li>Middleware Magic: Implement middleware for enhanced Node applications.</li>
                    </ul>
                )
            },
            {
                id: 21,
                title: "APPLICATION PROGRAMMING INTERFACE (API)",
                content: (
                    <ul>
                        <li>API Basics: Explore what APIs are and how they function.</li>
                        <li>Deep Dive into HTTP: Understand the role of HTTP in API communication.</li>
                        <li>API Calls: Learn how to make API requests effectively.</li>
                        <li>Read the Docs: Navigate and understand API documentation.</li>
                        <li>API Authentication: Grasp basic authentication methods for secure access.</li>
                        <li>Server Communication: Implement server-to-server interactions.</li>
                        <li>Data Formats: Compare JSON and XML for data exchange.</li>
                    </ul>
                )
            },
            {
                id: 22,
                title: "MONGO DB",
                content: (
                    <ul>
                        <li>Introduction to MongoDB: Discover the world of NoSQL databases with MongoDB.</li>
                        <li>Setting Up: Learn how to install and set up MongoDB for your projects.</li>
                        <li>Database Structure: Explore collections and documents as the building blocks of MongoDB.</li>
                        <li>CRUD Operations: Master Create, Read, Update, and Delete operations in MongoDB.</li>
                        <li>Querying the Database: Use queries to search and filter data effectively.</li>
                        <li>Schema Design: Understand schema-less design and data modeling for flexibility.</li>
                        <li>Aggregation: Harness aggregation pipelines to process and analyze data.</li>
                        <li>Indexes: Learn to create indexes for faster search and query performance.</li>
                        <li>Relationships: Implement relationships between data using references and embedding.</li>
                        <li>Integration with Node.js: Connect your MongoDB database to Node.js applications.</li>
                    </ul>
                )
            },
            {
                id: 23,
                title: "PROJECTS",
                content: (
                    <ul>
                        <li>Personal Portfolio Website</li>
                        <li>Angular Dashboard with API Integration</li>
                        <li>Real-time Student Management system</li>
                        <li>Weather App with Angular</li>
                        <li>Quiz App with Angular</li>
                        <li>CRUD Application with Angular Frontend and Node.js Backend</li>
                    </ul>
                )
            },
            {
                id: 24,
                title: "CHALLENGES AND INTERACTIVE LEARNING",
                content: (
                    <p>
                        Each topic features engaging challenges to provide hands-on, real-world learning experiences. These activities start easy, building up in difficulty to reinforce concepts. Students receive instant feedback, collaborate in groups, and participate in friendly competitions to boost skills and confidence. Advanced learners can "challenge a mentor" for deeper insights, ensuring a dynamic, enjoyable, and practical learning journey. This approach makes the course interactive, motivating, and memorable.
                    </p>
                )
            }
        ],
        toolsData: [
            { id: 1, name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
            { id: 2, name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { id: 3, name: "Node.Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { id: 4, name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { id: 5, name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { id: 6, name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { id: 7, name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { id: 8, name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { id: 9, name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { id: 10, name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        ],
        faqData: commonFaq,
    },
    "dotnet-angular": {
        heroData: {
            titleTop: "Master Enterprise Tech",
            highlightText: ".NET Angular Development",
            subtitle: "Combine the power of C# .NET with Angular to build industry-level enterprise applications.",
            rating: 4.9,
            reviewCount: "250+",
            totalStars: 5,
            image: "/images/courses/z3.webp",
            brochure: "/curriculum/UC_Angular Curriculumn V1.0.pdf",
        },
        highlightsData: commonHighlights,
        curriculumData: [
            {
                id: 1,
                title: "Introduction to Full-Stack Development",
                content: (
                    <ul>
                        <li>Overview of Front-End, Back-End, and Database.</li>
                        <li>Role of Angular, C#, .NET Core, and SQL Server in Full-Stack Development.</li>
                        <li>Setting Up the Development Environment: Visual Studio, SQL Server, Angular CLI, and Node.js.</li>
                    </ul>
                )
            },
            {
                id: 2,
                title: "Module-1: HTML, CSS, and Bootstrap",
                content: (
                    <ul>
                        <li>HTML Fundamentals: Structure of an HTML Document,Semantic HTML5, Forms, Tables, and Multimedia</li>
                        <li>CSS Basics: Selectors, Box Model, Flexbox, Grid Layout,Styling Forms, Animations, and Transitions</li>
                        <li>Bootstrap: Grid System and Breakpoints, Components(Navbar, Cards, Buttons, Forms), Customizing Themes</li>
                        <li>Bootstrap: Grid System and Breakpoints, Components(Navbar, Cards, Buttons, Forms), Customizing Themes</li>
                    </ul>
                )
            },
            {
                id: 3,
                title: "Module-2: Angular Framework",
                content: (
                    <ul>
                        <li>Introduction to Angular: SPA (Single Page Application)Overview, Setting up an Angular Project, Angular Architecture (Modules, Components, Templates)</li>
                        <li>Forms in Angular: Template-Driven and Reactive Forms,Validation and Error Handling</li>
                        <li>Angular Material: Material Design Components, Navigation,Dialogs, Tables, and Theme Customization</li>
                        <li>Routing and Navigation: Setting up Routes and Lazy Loading,Router Guards</li>
                        <li>CRUD Operations: Consuming REST APIs, Creating a CRUD Application with Angular and APIs</li>
                    </ul>
                )
            },
            {
                id: 4,
                title: "Module-3: C# Programming",
                content: (
                    <ul>
                        <li>Basics: Variables, Data Types, Control Structures (If, Switch, Loops), Methods and Functions.</li>
                        <li>Object-Oriented Programming: Classes, Objects, and Constructors, Inheritance, Polymorphism, Abstraction,Interfaces</li>
                        <li>Advanced C#: Delegates, Events, and Lambda Expressions,Exception Handling, LINQ (Language Integrated Query)</li>
                    </ul>
                )
            },
            {
                id: 5,
                title: "Module-4: .NET Core 8",
                content: (
                    <ul>
                        <li>Introduction to .NET Core: Overview of .NET Core 8, Setting up a Web API Project in .NET Core</li>
                        <li>RESTful APIs: Creating Controllers and Routes, Handling HTTPMethods (GET, POST, PUT, DELETE), Dependency Injection in .NET Core</li>
                        <li>Middleware in .NET Core: Custom Middleware, Authentication and Authorization (JWT)</li>
                        <li>Working with Configuration and Services</li>
                        <li>Error Handling and Logging</li>
                    </ul>
                )
            },
            {
                id: 6,
                title: "Module-5: Entity Framework Core",
                content: (
                    <ul>
                        <li>Introduction to Entity Framework Core: Code-First and Database-First Approaches, Setting up DbContext</li>
                        <li>Entity Relationships: One-to-One, One-to-Many, and Many-to-Many, Navigational Properties</li>
                        <li>Migrations: Creating and Applying Migrations, Updating the Database Schema</li>
                        <li>CRUD Operations with Entity Framework Core: Adding, Updating, Deleting, and Retrieving Data</li>
                    </ul>
                )
            },
            {
                id: 7,
                title: "Module-6: SQL Server",
                content: (
                    <ul>
                        <li>Introduction to SQL Server: Installing and Configuring SQL Server, SQL Server Management Studio (SSMS)</li>
                        <li>SQL Basics: DDL, DML, and DQL Statements, Creating and Managing Tables, Writing Queries (SELECT, INSERT, UPDATE, DELETE)</li>
                        <li>Advanced SQL: Joins (INNER, OUTER, LEFT, RIGHT), Subqueries and Common Table Expressions (CTEs), Stored Procedures and Functions, Triggers and Indexing</li>
                        <li>Database Design: Normalization and Denormalization, Designing Relational Databases, Creating Relationships with Primary and Foreign Keys</li>
                    </ul>
                )
            },
            {
                id: 8,
                title: "Module-7: Full-Stack Integration",
                content: (
                    <ul>
                        <li>Building a Complete Full-Stack Application: Example (E-Commerce or Task Management System)</li>
                        <li>Integration: Using Angular to Consume .NET Core APIs, Persisting Data in SQL Server via Entity Framework</li>
                        <li>Authentication and Authorization: JWT-Based Authentication in .NET Core, Protecting Routes in Angular</li>
                        <li>Real-Time Updates: SignalR Integration (optional)</li>
                    </ul>
                )
            },
            {
                id: 9,
                title: "Module-8: Deployment",
                content: (
                    <ul>
                        <li>Deploying the Application: Hosting Angular on Firebase/Netlify, Hosting .NET Core APIs on Azure or IIS</li>
                        <li>Database Management: Backing up and Restoring Databases in SQL Server</li>
                    </ul>
                )
            },
            {
                id: 10,
                title: "Module-9: Capstone Project",
                content: (
                    <ul>
                        <li>Develop a Full-Stack Application integrating Angular,.NET Core, Entity Framework, and SQL Server.</li>
                        <li>Example Projects: Online Store, Employee Management System, Learning Management System</li>
                    </ul>
                )
            },
            {
                id: 11,
                title: "Course Duration",
                content: (
                    <ul>
                    <li>Total Duration: 16 to 20 weeks</li>
                    <li>Front-End: 6-8 weeks</li>
                    <li>Back-End (C#, .NET Core, Entity Framework): 6-8 weeks</li>
                    <li>Database (SQL Server): 3-4 weeks</li>
                    <li>Project Development: 2-4 weeks</li>
                    </ul>
                )
            }
        ],
        toolsData: [
            { id: 1, name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
            { id: 2, name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
            { id: 3, name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
            { id: 4, name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
            { id: 5, name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { id: 6, name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { id: 7, name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { id: 8, name: "Entity Framework", icon: "https://raw.githubusercontent.com/dotnet/brand/main/logo/dotnet-logo.png" },
            { id: 9, name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { id: 10, name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
        ],
        faqData: commonFaq,
    },
    "data-analytics": {
        heroData: {
            titleTop: "Drive Business Decisions",
            highlightText: "Data Analytics",
            subtitle: "Learn to visualize and analyze data using Python, Excel, SQL, and Power BI. From data mining to insights.",
            rating: 4.8,
            reviewCount: "500+",
            totalStars: 5,
            image: "/images/courses/z4.webp",
        },
        highlightsData: commonHighlights,
        curriculumData: [
            {
                id: 1,
                title: "Advanced Excel for Data Analytics",
                content: (
                    <ul>
                        <li>Mastering Formulas: VLOOKUP, HLOOKUP, XLOOKUP, and Index-Match.</li>
                        <li>Data Cleaning: Text functions, removing duplicates, and data validation.</li>
                        <li>Pivot Tables & Dashboards: Creating dynamic summaries and interactive slicers.</li>
                        <li>Power Query: Automating data import and transformation.</li>
                        <li>Statistical Analysis: Using Analysis ToolPak for regression and forecasting.</li>
                    </ul>
                )
            },
            {
                id: 2,
                title: "SQL Mastery (Structured Query Language)",
                content: (
                    <ul>
                        <li>Database Basics: DDL, DML, and DQL commands.</li>
                        <li>Advanced Querying: Joins (Inner, Left, Right, Full), Unions, and Subqueries.</li>
                        <li>Window Functions: ROW_NUMBER, RANK, and LEAD/LAG.</li>
                        <li>Data Definition: Creating and Managing Tables, Views, and Indexes.</li>
                        <li>Optimization: Writing efficient queries for large datasets.</li>
                    </ul>
                )
            },
            {
                id: 3,
                title: "Python for Data Science",
                content: (
                    <ul>
                        <li>Python Fundamentals: Syntax, Data structures, and Flow control.</li>
                        <li>NumPy: Numerical computing and array manipulation.</li>
                        <li>Pandas: DataFrames, Series, and advanced data cleaning.</li>
                        <li>Matplotlib & Seaborn: Visualizing trends and distributions.</li>
                        <li>Intro to Scikit-Learn: Basic predictive modeling and regression.</li>
                    </ul>
                )
            },
            {
                id: 4,
                title: "Power BI Visualization",
                content: (
                    <ul>
                        <li>Power BI Desktop: Connecting to diverse data sources.</li>
                        <li>DAX (Data Analysis Expressions): Writing complex measures and calculated columns.</li>
                        <li>Data Modeling: Creating relationships and star schemas.</li>
                        <li>Interactive Reports: Designing executive-level dashboards.</li>
                        <li>Power BI Service: Publishing, sharing, and scheduled refreshes.</li>
                    </ul>
                )
            },
            {
                id: 5,
                title: "Tableau Visual Analytics",
                content: (
                    <ul>
                        <li>Tableau Architecture: Sheets, Dashboards, and Stories.</li>
                        <li>Calculated Fields: Using LOD (Level of Detail) expressions.</li>
                        <li>Mapping: Creating geographic and dual-axis maps.</li>
                        <li>Level of Detail (LOD) Expressions for granular analysis.</li>
                        <li>Publishing & Collaboration on Tableau Server/Public.</li>
                    </ul>
                )
            },
            {
                id: 6,
                title: "Big Data with Azure Databricks",
                content: (
                    <ul>
                        <li>Introduction to Spark: Distributed computing fundamentals.</li>
                        <li>Databricks Workspace: Notebook management and collaboration.</li>
                        <li>PySpark: Processing large-scale datasets with Python and Spark.</li>
                        <li>Data Lake Integration: Reading from and writing to Delta Lake.</li>
                        <li>ETL Pipelines: Building automated data workflows at scale.</li>
                    </ul>
                )
            },
            {
                id: 7,
                title: "Capstone Projects",
                content: (
                    <ul>
                        <li>E-commerce Sales Analysis Dashboard.</li>
                        <li>Financial Risk Prediction Model using Python.</li>
                        <li>Interactive Supply Chain Visualization with Tableau.</li>
                        <li>Big Data ETL Pipeline in Azure Databricks.</li>
                    </ul>
                )
            },
            {
                id: 8,
                title: "CHALLENGES AND INTERACTIVE LEARNING",
                content: (
                    <p>
                        Solve real-world business case studies, participate in data hackathons, and receive 1-on-1 mentorship to transform your data skills into actionable business insights.
                    </p>
                )
            }
        ],
        toolsData: [
            { id: 1, name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { id: 2, name: "Excel", icon: "/images/home/excel_logo.svg" },
            { id: 3, name: "SQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
            { id: 4, name: "Power BI", icon: "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg" },
            { id: 5, name: "Tableau", icon: "/images/home/tableau_logo.svg" },
            { id: 6, name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
            { id: 7, name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
            { id: 8, name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
            { id: 9, name: "Seaborn", icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
            { id: 10, name: "Databricks", icon: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" },
        ],
        faqData: commonFaq,
    },
    "ai-ml": {
        heroData: {
            titleTop: "Build Intelligent Systems",
            highlightText: "AI & Machine Learning",
            subtitle: "Master Deep Learning, Neural Networks, and AI algorithms to build the future of technology.",
            rating: 4.9,
            reviewCount: "300+",
            totalStars: 5,
            image: "/images/courses/z5.webp",
            brochure: "/curriculum/UC_AIML curriculum v1.0.pdf",
        },
        highlightsData: commonHighlights,
        curriculumData: [
            {
                id: 1,
                title: "Module 1:Introduction to Data Science",
                content: (
                    <ul>
                        <li>What is Data Science?</li>
                        <li>What is Machine Learning?</li>
                        <li>What is Deep Learning?</li>
                        <li>What is Al?</li>
                        <li>Data Analytics & it's types</li>
                    </ul>
                )
            },
            {
                id: 2,
                title: "Module 2:Introduction to Python",
                content: (
                    <ul>
                        <li>What is Python?</li>
                        <li>Why Python?</li>
                        <li>Installing Python</li>
                        <li>Python IDEs</li>
                        <li>Jupyter Notebook Overview</li>
                    </ul>
                )
            },
            {
                id: 3,
                title: "Module 3:Python Basics",
                content: (
                    <ul>
                        <li>Python Basic Data types</li>
                        <li>Lists</li>
                        <li>Slicing</li>
                        <li>IF statements</li>
                        <li>Loops</li>
                        <li>Dictionaries</li>
                        <li>Tuples</li>
                        <li>Functions</li>
                        <li>Array</li>
                        <li>Selection by position & Labels</li>
                    </ul>
                )
            },
            {
                id: 4,
                title: "Module 4: Python Packages",
                content: (
                    <ul>
                        <li>Pandas</li>
                        <li>Numpy</li>
                        <li>Sci-kit Learn</li>
                        <li>Mat-plot library</li>
                        
                    </ul>
                )
            },
            {
                id: 5,
                title: "Module 5:Importing Data",
                content: (
                    <ul>
                        <li>Reading CSV files</li>
                        <li>Saving in Python dat</li>
                        <li>Loading Python data objects</li>
                        <li>Writing data to csv file</li>
                    </ul>
                )
            },
            {
                id: 6,
                title: "Module 6:Manipulating Data",
                content: (
                    <ul>
                        <li>Selecting rows/observations</li>
                        <li>Rounding Number</li>
                        <li>Selecting columns/fields</li>
                        <li>Merging data</li>
                        <li>Data aggregation</li>
                        <li>Data munging techniques</li>
                    
                    </ul>
                )
            },
            {
                id: 7,
                title: "Module 7: Statistics Basics",
                content: (
                    <ul>
                        <li className="font-semibold mb-2 mt-2">Central Tendency
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>Mean</li>
                                <li>Median</li>
                                <li>Mode</li>
                                <li>Skewness</li>
                                <li>Normal Distribution</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Probability Basics
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>What does mean by probability?</li>
                                <li>Types of Probability</li>
                                <li>Mode</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Standard Deviation
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>Data deviation & distribution</li>
                                <li>Variance</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Bias variance Trade off
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>Underfitting</li>
                                <li>Overfitting</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Distance metrics
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>Euclidean Distance</li>
                                <li>Manhattan Distance</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Outlier analysis
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>What is an Outlier?</li>
                                <li>Inter Quartile</li>
                                <li>Range</li>
                                <li>Box & whisker plot</li>
                                <li>Upper Whisker</li>
                                <li>Lower Whisker</li>
                                <li>Scatter plot</li>
                                <li>Cook's Distance</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Missing Value treatment
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>What is a NA?</li>
                                <li>Central Imputation</li>
                                <li>KNN imputation</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Data Transformation
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>Dummification</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Correlation
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>Pearson correlation</li>
                                <li>Positive & Negative correlation</li>
                            </ul>
                        </li>
                    </ul>
                )
            },
            {
                id: 8,
                title: "Module 8: Error Metrics",
                content: (
                    <ul>
                        <li className="font-semibold mb-2 mt-2">Classification
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>Confusion Matrix</li>
                                <li>Precision</li>
                                <li>Recall</li>
                                <li>Dummification</li>
                                <li>Specificity</li>
                                <li>F1 Score</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Regression
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>MSE</li>
                                <li>RMSE</li>
                                <li>MAPE</li>
                            </ul>
                        </li>
                    </ul>
                )
            },
            {
                id: 9,
                title: "Module 9: Machine Learning",
                content: (
                    <ul>
                        <li className="font-semibold mb-2 mt-2">Supervised Learning
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li className="font-medium mt-1">Linear Regression
                                    <ul className="list-disc pl-5 font-normal mt-1 mb-2">
                                        <li>Linear Equation</li>
                                        <li>Slope</li>
                                        <li>Intercept</li>
                                        <li>R square value</li>
                                    </ul>
                                </li>
                                <li className="font-medium">Logistic regression
                                    <ul className="list-disc pl-5 font-normal mt-1">
                                        <li>ODDS ratio</li>
                                        <li>Probability of success</li>
                                        <li>Probability of failure</li>
                                        <li>Bias Variance Tradeoff</li>
                                        <li>ROC curve</li>
                                        <li>Bias Variance Tradeoff curve</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Unsupervised Learning
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>K-Means</li>
                                <li>K-Means ++</li>
                                <li>Hierarchical Clustering</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">SVM
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>Support Vectors</li>
                                <li>Hyperplanes</li>
                                <li>2-D Case</li>
                                <li>Linear Hyperplane</li>
                                <li>SVM Kernel</li>
                                <li>Linear</li>
                                <li>Polynomial</li>
                            </ul>
                        </li>
                        <li className="font-semibold mb-2 mt-2">Other Machine Learning algorithms
                            <ul className="list-disc pl-5 font-normal mt-1">
                                <li>K - Nearest Neighbour</li>
                                <li>Naïve Bayes Classifier</li>
                                <li>Decision Tree — CART</li>
                                <li>Decision Tree - C50</li>
                                <li>Random Forest</li>
                            </ul>
                        </li>
                    </ul>
                )
            },
            {
                id: 10,
                title: "Module 10: Artificial Intelligence Introduction",
                content: (
                    <ul className="list-disc pl-5">
                        <li className="mt-1">Perceptron</li>
                        <li className="mt-1">Multi-Layer perceptron</li>
                        <li className="mt-1">Markov Decision Process</li>
                        <li className="mt-1">Logical Agent & First Order Logic</li>
                        <li className="mt-1">AI Applications</li>
                    </ul>
                )
            },
            {
                id: 11,
                title: "Module 11: Deep Learning Algorithms",
                content: (
                    <ul className="list-disc pl-5">
                        <li className="mt-1">CNN - Convolutional Neural Network</li>
                        <li className="mt-1">RNN - Recurrent Neural Network</li>
                        <li className="mt-1">ANN - Artificial Neural Network</li>
                        <li className="mt-1">Introduction to NLP</li>
                        <li className="mt-1">Text Pre-processing o Noise Removal</li>
                        <li className="mt-1">Lexicon Normalization o Lemmatization</li>
                        <li className="mt-1">Stemming o Object Standardization</li>
                        <li className="mt-1">Text to Features (Feature Engineering)</li>
                        <li className="mt-1">Syntactical Parsing o Dependency Grammar</li>
                        <li className="mt-1">Part of Speech Tagging o Entity Parsing</li>
                        <li className="mt-1">Named Entity Recognition o Topic Modelling</li>
                        <li className="mt-1">N-Grams</li>
                        <li className="mt-1">TF-IDF</li>
                        <li className="mt-1">Frequency / Density Features</li>
                        <li className="mt-1">Word Embedding's o Tasks of NLP</li>
                        <li className="mt-1">Text Classification o Text Matching</li>
                        <li className="mt-1">Levenshtein Distance o Phonetic Matching</li>
                        <li className="mt-1">Flexible String Matching</li>
                    </ul>
                )
            }
        ],
        toolsData: [
            { id: 1, name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { id: 2, name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
            { id: 3, name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
            { id: 4, name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
            { id: 5, name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
            { id: 6, name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
            { id: 7, name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
            { id: 8, name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
            { id: 9, name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        ],
        faqData: commonFaq,
    },
    "automation-testing": {
        heroData: {
            titleTop: "Ensure Quality and Speed",
            highlightText: "Automation Testing",
            subtitle: "Master Selenium, Java, and modern testing frameworks to automate the software lifecycle.",
            rating: 4.7,
            reviewCount: "450+",
            totalStars: 5,
            image: "/images/courses/z6.webp",
            brochure: "/curriculum/UC_Software Testing curriculum_V1.1.pdf",
        },
        highlightsData: commonHighlights,
        curriculumData: [
            {
                id: 1,
                title: "Core Java for Automation",
                content: (
                    <ul>
                        <li>Java Basics: Variables, Data Types, and Operators.</li>
                        <li>Control Statements: If-Else, Switch, and Loops (For, While, Do-While).</li>
                        <li>Object-Oriented Programming (OOP): Classes, Objects, Inheritance, Polymorphism, Abstraction, and Interfaces.</li>
                        <li>Collections Framework: Working with List, Set, and Map.</li>
                        <li>Exception Handling: Try-Catch, Finally, and Throw/Throws.</li>
                    </ul>
                )
            },
            {
                id: 2,
                title: "Selenium WebDriver Fundamentals",
                content: (
                    <ul>
                        <li>Introduction to Selenium: Architecture and Components.</li>
                        <li>Locator Strategies: ID, Name, ClassName, Xpath, and CSS Selectors.</li>
                        <li>Interacting with Web Elements: Buttons, Inputs, Dropdowns, and Checkboxes.</li>
                        <li>Handling Alerts, Frames, and Multiple Windows.</li>
                        <li>Synchronization: Implicit, Explicit, and Fluent Waits.</li>
                    </ul>
                )
            },
            {
                id: 3,
                title: "Advanced Selenium & Frameworks",
                content: (
                    <ul>
                        <li>TestNG Framework: Annotations, Assertions, and Parallel Execution.</li>
                        <li>Data-Driven Testing: Using Apache POI for Excel integration.</li>
                        <li>Page Object Model (POM): Design Pattern for maintainable code.</li>
                        <li>Screenshot and Reporting: Integrating Extent Reports.</li>
                    </ul>
                )
            },
            {
                id: 4,
                title: "TypeScript for Automation",
                content: (
                    <ul>
                        <li>Intro to TypeScript: Static Typing and Interfaces.</li>
                        <li>ES6 Features: Arrow Functions, Destructuring, and Modules.</li>
                        <li>Asynchronous Programming: Promises and Async/Await.</li>
                        <li>Configuring TypeScript for Playwright projects.</li>
                    </ul>
                )
            },
            {
                id: 5,
                title: "Playwright Automation Mastery",
                content: (
                    <ul>
                        <li>Playwright Basics: Installation and setup with TypeScript.</li>
                        <li>Auto-waits and Locators: Modern way of finding elements.</li>
                        <li>Tracing and Debugging: Using Playwright Inspector and Trace Viewer.</li>
                        <li>Mobile Emulation and Network Interception.</li>
                        <li>Multi-browser and Multi-tab testing.</li>
                    </ul>
                )
            },
            {
                id: 6,
                title: "API Testing & Integration",
                content: (
                    <ul>
                        <li>Rest API Basics: HTTP Methods and Status Codes.</li>
                        <li>API Automation with Playwright: Request and Response handling.</li>
                        <li>JSON Parsing and Schema Validation.</li>
                        <li>Integrating API and UI tests.</li>
                    </ul>
                )
            },
            {
                id: 7,
                title: "DevOps for QA",
                content: (
                    <ul>
                        <li>Version Control: Git and GitHub for collaboration.</li>
                        <li>CI/CD: Running tests in Jenkins and GitHub Actions.</li>
                        <li>Docker for QA: Running tests in containers.</li>
                    </ul>
                )
            },
            {
                id: 8,
                title: "Projects",
                content: (
                    <ul>
                        <li>Hybrid Automation Framework for E-commerce.</li>
                        <li>Modern Web App Testing with Playwright & TypeScript.</li>
                        <li>End-to-End API Testing Suite.</li>
                    </ul>
                )
            },
            {
                id: 9,
                title: "CHALLENGES AND INTERACTIVE LEARNING",
                content: (
                    <p>
                        Real-world scenarios and bug-finding challenges. Learn to build scalable automation suites that can handle complex enterprise applications.
                    </p>
                )
            }
        ],
        toolsData: [
            { id: 1, name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
            { id: 2, name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { id: 3, name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
            { id: 4, name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
            { id: 5, name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
            { id: 6, name: "TestNG", icon: "https://raw.githubusercontent.com/cbeust/testng/master/src/main/resources/testng.png" },
            { id: 7, name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { id: 8, name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
            { id: 9, name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { id: 10, name: "Cucumber", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg" },
        ],
        faqData: [...automationFaq, ...playwrightFaq],
    },
    "aws-devops": {
        heroData: {
            titleTop: "Infrastructure as Code",
            highlightText: "AWS & DevOps",
            subtitle: "Learn cloud automation, CI/CD, and scaling on Amazon Web Services. Master the DevOps culture.",
            rating: 4.9,
            reviewCount: "600+",
            totalStars: 5,
            image: "/images/courses/z7.webp",
            brochure: "/curriculum/UC_AWS DevOps Curriculum v1.0.pdf",
        },
        highlightsData: commonHighlights,
        curriculumData: [
            {
                id: 1,
                title: "Module 1: Fundamentals of DevOps",
                content: (
                    <ul>
                        <li>What is DevOps? Lifecycle and key benefits.</li>
                        <li>Agile, Scrum, and ITIL integration in DevOps workflows.</li>
                        <li>Introduction to Continuous Integration & Continuous Deployment (CI/CD).</li>
                        <li>Overview of popular DevOps tools and the DevOps culture.</li>
                    </ul>
                )
            },
            {
                id: 2,
                title: "Module 2: AWS Cloud Basics & Infrastructure",
                content: (
                    <ul>
                        <li>AWS Global Infrastructure: Regions, Availability Zones, and Edge Locations.</li>
                        <li>IAM: Identity & Access Management, Users, Groups, and Roles.</li>
                        <li>Core Services: EC2 (Compute), S3 (Storage), and VPC (Networking).</li>
                        <li>Monitoring & Governance: CloudWatch and CloudTrail.</li>
                        <li>Database & Serverless: RDS, Route53, and AWS Lambda.</li>
                        <li>Advanced Networking: ELB, Auto Scaling, and Load Balancing.</li>
                        <li>Working with AWS CLI and SDKs.</li>
                    </ul>
                )
            },
            {
                id: 3,
                title: "Module 3: AWS DevOps Tools & Services",
                content: (
                    <ul>
                        <li>AWS CodeCommit: Git-based version control for secure collaboration.</li>
                        <li>AWS CodeBuild: Fully managed build and test service.</li>
                        <li>AWS CodeDeploy: Automating software deployments to any instance.</li>
                        <li>AWS CodePipeline: Orchestrating continuous delivery pipelines.</li>
                        <li>Infrastructure as Code: AWS CloudFormation basics.</li>
                        <li>Rapid Deployment: Elastic Beanstalk architecture.</li>
                    </ul>
                )
            },
            {
                id: 4,
                title: "Module 4: Docker – Containerization Mastery",
                content: (
                    <ul>
                        <li>What is Docker? Comparison with Virtual Machines.</li>
                        <li>Architecture & Installation: Images, Containers, Volumes, and Networks.</li>
                        <li>Dockerfile: Creating, building, and publishing custom images.</li>
                        <li>Docker Compose: Orchestrating multi-container applications.</li>
                        <li>Registry Management: Docker Hub and Private Registries.</li>
                        <li>Advanced Container Networking and CLI commands.</li>
                    </ul>
                )
            },
            {
                id: 5,
                title: "Module 5: Jenkins – Continuous Integration",
                content: (
                    <ul>
                        <li>Jenkins Architecture: Installing on Local and AWS EC2.</li>
                        <li>Job Management: Freestyle vs Pipeline Jobs.</li>
                        <li>Pipeline as Code: Writing Jenkinsfile (Declarative & Scripted).</li>
                        <li>Integrations: CI/CD with GitHub, Maven, and Docker.</li>
                        <li>Notifications & Collaboration: Slack and Email integration.</li>
                    </ul>
                )
            },
            {
                id: 6,
                title: "Module 6: Kubernetes – Orchestration & Monitoring",
                content: (
                    <ul>
                        <li>K8s Architecture: Master/Worker Nodes, Pods, and Services.</li>
                        <li>Deployment Config: YAML for Deployments, Services, and Ingress.</li>
                        <li>Core Components: ReplicaSets, ConfigMaps, Secrets, and Namespaces.</li>
                        <li>Package Management: Using Helm Charts.</li>
                        <li>Advanced Ops: Rolling updates, Rollbacks, and Health Checks.</li>
                        <li>Observability: Monitoring with Prometheus and Grafana.</li>
                    </ul>
                )
            },
            {
                id: 7,
                title: "Module 7: Terraform – Infrastructure as Code (IaC)",
                content: (
                    <ul>
                        <li>Terraform Fundamentals: Commands, Variables, and Documentation.</li>
                        <li>Resource Provisioning: Creating EC2, VPC, and S3 resources.</li>
                        <li>Modular Architecture: Writing re-usable code with Modules.</li>
                        <li>State Management: S3 remote backends, State commands, and Import.</li>
                        <li>Advanced IaC: Data Sources and High Availability VPC design.</li>
                    </ul>
                )
            },
            {
                id: 8,
                title: "Capstone Projects & Final Integration",
                content: (
                    <ul>
                        <li>CI/CD Pipeline: Build, test, containerize, and deploy a web app using Jenkins and Docker.</li>
                        <li>Microservices on K8s: Deploying a microservices app on a Kubernetes cluster.</li>
                        <li>Cloud Scaling: Auto-scaling web app deployment on AWS.</li>
                        <li>Full Integration Project: Combining AWS, Docker, Jenkins, Kubernetes, and Terraform.</li>
                        <li>Azure DevOps bridge: Overview of pipeline automation in Azure.</li>
                    </ul>
                )
            },
            {
                id: 9,
                title: "CHALLENGES AND INTERACTIVE LEARNING",
                content: (
                    <p>
                        Engage in real-world infrastructure challenges, automated rollback scenarios, and disaster recovery drills to gain professional DevOps confidence.
                    </p>
                )
            },
        ],
        toolsData: [
            { id: 1, name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { id: 2, name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { id: 3, name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { id: 4, name: "Terraform", icon: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
            { id: 5, name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { id: 6, name: "ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
            { id: 7, name: "prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
            { id: 8, name: "ELK stack", icon: "https://garutilorenzo.github.io/images/elk-logo.png" },
            { id: 9, name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
            { id: 10, name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        ],
        faqData: commonFaq,
    }
};
