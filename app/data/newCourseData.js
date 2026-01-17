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
    { icon: <FaBriefcase />, label: "Internship", value: "3 - 6 months" },
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
                        <li>HTML Fundamentals: Structure, Semantic HTML5, Forms, Tables, and Multimedia.</li>
                        <li>CSS Basics: Selectors, Box Model, Flexbox, Grid Layout, Animations, and Transitions.</li>
                        <li>Bootstrap: Grid System, Breakpoints, Components (Navbar, Cards, Buttons, Forms).</li>
                        <li>Responsive Design: Media Queries and Mobile-First Design Principles.</li>
                    </ul>
                )
            },
            {
                id: 3,
                title: "Module-2: Angular Framework",
                content: (
                    <ul>
                        <li>Introduction to Angular: SPA Overview, Project Setup, and Architecture.</li>
                        <li>Forms in Angular: Template-Driven and Reactive Forms, Validation and Error Handling.</li>
                        <li>Angular Material: Material Design Components, Dialogs, Tables, and Theme Customization.</li>
                        <li>Routing and Navigation: Routes, Lazy Loading, and Router Guards.</li>
                        <li>CRUD Operations: Consuming REST APIs and building a CRUD Application.</li>
                    </ul>
                )
            },
            {
                id: 4,
                title: "Module-3: C# Programming",
                content: (
                    <ul>
                        <li>Basics: Variables, Data Types, Control Structures (If, Switch, Loops), and Methods.</li>
                        <li>OOP: Classes, Objects, Inheritance, Polymorphism, Abstraction, and Interfaces.</li>
                        <li>Advanced C#: Delegates, Events, Lambda Expressions, Exception Handling, and LINQ.</li>
                    </ul>
                )
            },
            {
                id: 5,
                title: "Module-4: .NET Core 8",
                content: (
                    <ul>
                        <li>Introduction to .NET Core: Overview of .NET Core 8.</li>
                        <li>Web API Projects: Setting up a Web API Project in .NET Core.</li>
                        <li>RESTful APIs: Controllers, Routing, and HTTP Methods (GET, POST, PUT, DELETE).</li>
                        <li>Dependency Injection and Middleware in .NET Core.</li>
                    </ul>
                )
            },
            {
                id: 6,
                title: "Module-5: Entity Framework Core",
                content: (
                    <ul>
                        <li>EF Core Fundamentals: Code-First and Database-First Approaches, Setting up DbContext.</li>
                        <li>Entity Relationships: One-to-One, One-to-Many, and Many-to-Many.</li>
                        <li>Migrations: Creating and Applying Migrations, Updating Database Schema.</li>
                        <li>CRUD with EF Core: Data Manipulation and Retrieval.</li>
                    </ul>
                )
            },
            {
                id: 7,
                title: "Module-6: SQL Server",
                content: (
                    <ul>
                        <li>Intro to SQL Server: Installation, Configuration, and SSMS usage.</li>
                        <li>SQL Basics: DDL, DML, and DQL Statements (SELECT, INSERT, UPDATE, DELETE).</li>
                        <li>Advanced SQL: Joins (INNER, OUTER, LEFT, RIGHT), Subqueries, and CTEs.</li>
                        <li>Database Design: Normalization, Relational Design, and Key Constraints.</li>
                        <li>Stored Procedures, Functions, Triggers, and Indexing.</li>
                    </ul>
                )
            },
            {
                id: 8,
                title: "Module-7: Full-Stack Integration",
                content: (
                    <ul>
                        <li>Full-Stack Application: Building a Complete System (E-Commerce or Task Management).</li>
                        <li>Integration: Consuming .NET Core APIs via Angular with SQL Server persistence.</li>
                        <li>Security: JWT-Based Authentication in .NET Core and Protected Routes in Angular.</li>
                        <li>Real-Time Updates: SignalR Integration (optional).</li>
                    </ul>
                )
            },
            {
                id: 9,
                title: "Module-8: Deployment",
                content: (
                    <ul>
                        <li>Hosting: Deploying Angular on Firebase/Netlify.</li>
                        <li>Backend Hosting: Deploying .NET Core APIs on Azure or IIS.</li>
                        <li>Database Management: Backing up and Restoring Databases in SQL Server.</li>
                    </ul>
                )
            },
            {
                id: 10,
                title: "Module-9: Capstone Project",
                content: (
                    <ul>
                        <li>Final Project: Online Store / Employee Management / LMS.</li>
                        <li>Integrating all technologies: Angular, .NET Core, EF, and SQL Server.</li>
                    </ul>
                )
            },
            {
                id: 11,
                title: "CHALLENGES AND INTERACTIVE LEARNING",
                content: (
                    <p>
                        Hands-on real-world learning with engaging challenges, instant feedback, and group collaborations to build professional-grade applications.
                    </p>
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
        },
        highlightsData: commonHighlights,
        curriculumData: [
            {
                id: 1,
                title: "Module 1: Statistical Analysis & Probability",
                content: (
                    <ul>
                        <li>Introduction to Probability Theory and its role in Machine Learning.</li>
                        <li>Data Analysis: Mastering Measures of Central Tendency & Dispersion.</li>
                        <li>Probability Distributions: Normal, Poisson, and Binomial distributions.</li>
                        <li>Hypothesis Testing: Understanding Null & Alternate Hypotheses with p-values.</li>
                    </ul>
                )
            },
            {
                id: 2,
                title: "Module 2: Linear Regression Mastery",
                content: (
                    <ul>
                        <li>Basics of OLS (Ordinary Least Squares) Regression.</li>
                        <li>Core Assumptions & Features of high-performance Linear Regression.</li>
                        <li>Gradient Descent: Understanding loss functions and optimization.</li>
                        <li>Advanced Regularization: Ridge & Lasso Regression for overfitting control.</li>
                    </ul>
                )
            },
            {
                id: 3,
                title: "Module 3: Classification Algorithms",
                content: (
                    <ul>
                        <li>Logistic Regression: Binary and Multi-class classification.</li>
                        <li>Naive Bayes & Conditional Probability fundamentals.</li>
                        <li>K-Nearest Neighbors (KNN) for pattern recognition.</li>
                        <li>Ensemble Methods: Decision Trees, Random Forest, and XGBoost (Bagging & Boosting).</li>
                    </ul>
                )
            },
            {
                id: 4,
                title: "Module 4: Unsupervised Learning",
                content: (
                    <ul>
                        <li>Introduction to Clustering and Hidden Pattern discovery.</li>
                        <li>K-Means Clustering and Hierarchical Clustering techniques.</li>
                        <li>DBScan (Density-Based Spatial Clustering) for noise-heavy data.</li>
                        <li>Dimensionality Reduction: Principles of finding essential features.</li>
                    </ul>
                )
            },
            {
                id: 5,
                title: "Module 5: Text Mining & NLP",
                content: (
                    <ul>
                        <li>Text Mining & Information Retrieval: Extracting value from unstructured data.</li>
                        <li>NLP Fundamentals: Parts of Speech (POS) Tagging and tokenization.</li>
                        <li>Sentiment Analysis: Building models to detect emotional tone.</li>
                        <li>Recommender Systems: Collaborative and Content-based filtering.</li>
                    </ul>
                )
            },
            {
                id: 6,
                title: "Module 6: Advanced AI & Neural Networks",
                content: (
                    <ul>
                        <li>Deep Learning Intro: Neurons, Layers, and Activation Functions.</li>
                        <li>Computer Vision: Convoluted Neural Networks (CNN) for image processing.</li>
                        <li>Sequential Data: Recurrent Neural Networks (RNN) for time-series and speech.</li>
                        <li>Reinforcement Learning: Learning through rewards and agents.</li>
                    </ul>
                )
            },
            {
                id: 7,
                title: "Module 7: Deep Learning with PyTorch",
                content: (
                    <ul>
                        <li>PyTorch Basics: Tensors, Autograd, and dynamic computational graphs.</li>
                        <li>Building Models: Using nn.Module and optimizers in PyTorch.</li>
                        <li>Data Handling: Loading datasets and custom transformations.</li>
                        <li>Training Loops: Implementing efficient training and evaluation pipelines.</li>
                    </ul>
                )
            },
            {
                id: 8,
                title: "Module 8: Generative AI Basics & Projects",
                content: (
                    <ul>
                        <li>Introduction to Gen AI: Understanding GANs and Transformers.</li>
                        <li>Capstone Projects: Real-time Object Detection and Text Generator.</li>
                        <li>Interactive Learning: Solving real-world datasets with PyTorch.</li>
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
            { id: 10, name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
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
        faqData: commonFaq,
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
        ],
        faqData: commonFaq,
    }
};
