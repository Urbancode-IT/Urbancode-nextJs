const coursesData = {
  "Programming Languages": {
    mainCategoryDesc: "Build Your Tommorow with Code",
    subDesc: "Discover, learn, and excel in the world’s most popular programming languages including Java, Python, C, C++, and HTML. Gain the ability to design algorithms, develop scalable solutions, and innovate in high-demand fields such as software engineering, data science, cybersecurity, and automation.",
    subHeading: "Transform your coding knowledge into job-ready development expertise that accelerates your career.",
    mainImage: "/images/courses/Programming_Languages.jpg",

    courses: [
      {
        title: "Advanced Python",
        desc: "Master Advanced Python with hands-on training in OOP, APIs, Data Science, and Automation. Build real-world projects and get industry-ready.",
        rating: 4.5,
        duration: "1 month",
        students: "12,556",
        img: "/images/courses/Advanced_Python.jpg",
        aboutData:
        {
          topic: "Master Advanced Python — From Core Concepts to Data Science & Web Development!",
          content1: " Take your Python skills to the next level! Learn advanced programming concepts, data analysis, web development, and real-world project integration. This coursehelps you move from beginner to expert with hands-on exercises and live projects.",
          content2: "The Advanced Python course by Urbancode covers everything from Python fundamentals to complex application development. Starting with essential syntax and OOP principles, you’ll move through advanced concepts like decorators, asynchronous programming, and frameworks such as Flask and Django. The program concludes with expert-level training in Data Science, Deep Learning, and DevOps integration, making you industry-ready."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Python Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Python and its applications",
              "Setting up your development environment",
              "Data types, variables, and expressions",
              "Operators, conditional statements, and loops",
              "Functions and modules",
              "Debugging and error handling",
            ],
          },
          {
            id: 2,
            title: "Beginner – Working with Data",
            icon: "bi bi-database",
            items: [
              "Lists, tuples, and dictionaries",
              "String manipulation and formatting",
              "Working with files",
              "Regular expressions",
              "Basic data structures and algorithms",
            ],
          },
          {
            id: 3,
            title: "Beginner – Building Applications",
            icon: "bi bi-window",
            items: [
              "User input and output",
              "Object-oriented programming concepts",
              "Working with APIs",
              "Version control using Git",
              "Building simple GUI applications",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Advanced Python Topics",
            icon: "bi bi-gear",
            items: [
              "Decorators and closures",
              "Iterators and generators",
              "Context managers and metaclasses",
              "Asynchronous programming",
              "Unit testing and debugging",
            ],
          },
          {
            id: 5,
            title: "Intermediate – Data Analysis with Python",
            icon: "bi bi-bar-chart-line",
            items: [
              "Introduction to NumPy and Pandas",
              "Data manipulation and exploration",
              "Statistical analysis and modeling",
              "Visualization with Matplotlib and Seaborn",
              "Machine learning basics",
            ],
          },
          {
            id: 6,
            title: "Intermediate – Web Development with Python",
            icon: "bi bi-window-stack",
            items: [
              "Introduction to Flask and Django frameworks",
              "Building web apps with templates and forms",
              "Database integration using SQLAlchemy",
              "API development and deployment",
            ],
          },
          {
            id: 7,
            title: "Expert – Advanced Web Development",
            icon: "bi bi-diagram-3",
            items: [
              "Microservices architecture",
              "Authentication and authorization",
              "Security best practices",
              "DevOps and CI/CD implementation",
            ],
          },
          {
            id: 8,
            title: "Expert – Advanced Data Science",
            icon: "bi bi-robot",
            items: [
              "Deep learning with TensorFlow and PyTorch",
              "Natural Language Processing (NLP)",
              "Computer vision and image processing",
              "Text analysis and mining",
            ],
          },
          {
            id: 9,
            title: "Expert – Advanced System Programming",
            icon: "bi bi-cpu",
            items: [
              "Concurrency and parallelism",
              "CPython internals and optimization",
              "Python for embedded systems",
              "Network programming and sockets",
            ],
          },
        ],
        whatYouLearnData: [
          {
            title: "Master Advanced Python Concepts",
            desc: "Learn closures, decorators, iterators, and metaclasses in depth.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Develop Real-World Applications",
            desc: "Build GUI apps, APIs, and automation tools using modern Python.",
            icon: "bi bi-gear",
          },
          {
            title: "Work with Data & Analysis",
            desc: "Perform analysis with NumPy, Pandas, Matplotlib, and Seaborn.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Create Web Applications",
            desc: "Use Flask and Django frameworks to build and deploy web apps.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Apply Machine Learning Concepts",
            desc: "Understand the basics of ML with scikit-learn, TensorFlow, and PyTorch.",
            icon: "bi bi-cpu",
          },
          {
            title: "Master DevOps & System Programming",
            desc: "Learn microservices, CI/CD pipelines, and network programming.",
            icon: "bi bi-diagram-3",
          },
        ]
      },
      {
        title: "HTML",
        desc: "Master the building blocks of web development with our hands-on HTML training. Learn to create structured, responsive, and professional websites from scratch.",
        rating: 5.0,
        duration: "1 month",
        students: "7,556",
        img: "/images/courses/HTML.jpg",
        aboutData: {
          topic: "Master the Foundations of Web Development with HTML",
          content1: "Learn how the web works by mastering HTML, the core language behind every website. Understand page structuring, semantic elements, media integration, and accessibility standards to build professional web pages from scratch.",
          content2: "The HTML course at Urbancode focuses on developing strong fundamentals through hands-on practice. You will create structured, responsive layouts and learn the latest HTML5 features used in modern web development."
        },
        courseContentData: [
          {
            id: 1,
            title: "HTML Basics",
            icon: "bi bi-code-slash",
            defaultOpen: true,
            items: [
              "What is HTML and how the web works",
              "HTML document structure",
              "Tags, elements, and attributes",
              "Head vs body sections",
              "Text formatting elements"
            ]
          },
          {
            id: 2,
            title: "Working with Page Layout",
            icon: "bi bi-layout-sidebar",
            items: [
              "HTML lists and tables",
              "Hyperlinks and navigation",
              "Images and media elements",
              "Divs, spans, and semantic elements",
              "Metadata and SEO basics"
            ]
          },
          {
            id: 3,
            title: "Forms & User Input",
            icon: "bi bi-ui-checks-grid",
            items: [
              "Form tags and controls",
              "Input types and validation",
              "Labels, fieldsets, and accessibility",
              "Form submission and method types"
            ]
          },
          {
            id: 4,
            title: "HTML5 Advanced Features",
            icon: "bi bi-boxes",
            items: [
              "Audio and video elements",
              "Canvas and SVG graphics",
              "Local storage and geolocation",
              "Responsive structure with semantic tags"
            ]
          }
        ],
        whatYouLearnData: [
          { title: "Build Web Page Structures", desc: "Create properly structured HTML pages with professional standards.", icon: "bi bi-diagram-3" },
          { title: "Use Modern HTML5 Elements", desc: "Leverage multimedia and graphics capabilities.", icon: "bi bi-camera-video" },
          { title: "Work with Forms & SEO", desc: "Build interactive forms and optimize pages for search engines.", icon: "bi bi-search" }
        ]

      },
      {
        title: "Core JAVA",
        desc: "Master the fundamentals of Core Java with hands-on projects, OOP concepts, and industry-relevant exercises. Build strong programming skills to kickstart your career in software development.",
        rating: 4.5,
        duration: "3 months",
        students: "9,556",
        img: "/images/courses/Core_JAVA.jpg",
        aboutData: {
          topic: "Master Core Java to Build Strong Object-Oriented Programming Skills",
          content1: "Develop solid foundations in Java programming with hands-on experience. Learn OOP concepts, exception handling, multithreading, and collection frameworks used in enterprise applications.",
          content2: "The Core Java course at Urbancode prepares you for real-world software development with projects, tools, and strong programming discipline."
        },
        courseContentData: [
          {
            id: 1,
            title: "Java Fundamentals",
            icon: "bi bi-braces",
            defaultOpen: true,
            items: [
              "Java environment setup",
              "Syntax and data types",
              "Control statements and operators",
              "Arrays and strings"
            ]
          },
          {
            id: 2,
            title: "Object-Oriented Programming",
            icon: "bi bi-diagram-3",
            items: [
              "Classes, objects, and methods",
              "Constructors and overloading",
              "Inheritance, polymorphism, abstraction, and encapsulation",
              "Interfaces and packages"
            ]
          },
          {
            id: 3,
            title: "Exception Handling & File I/O",
            icon: "bi bi-file-earmark-text",
            items: [
              "Try, catch, and finally blocks",
              "Custom exceptions",
              "Working with files and buffers",
              "Serialization basics"
            ]
          },
          {
            id: 4,
            title: "Advanced Core Concepts",
            icon: "bi bi-gear",
            items: [
              "Multithreading and concurrency",
              "Java Collection Framework",
              "JDBC database connectivity",
              "Introduction to JVM memory model"
            ]
          }
        ],
        whatYouLearnData: [
          { title: "Master OOP Programming", desc: "Design scalable software using object-oriented principles.", icon: "bi bi-lightning-charge" },
          { title: "Develop Console Applications", desc: "Build functional applications using Core Java libraries.", icon: "bi bi-terminal" },
          { title: "Integrate Databases", desc: "Apply JDBC for real-time database operations.", icon: "bi bi-hdd-network" }
        ]

      },
      {
        title: "C and C++",
        desc: "Master the fundamentals of programming with our C & C++ training program. Build strong problem-solving skills and develop a solid foundation for advanced technologies.",
        rating: 4.5,
        duration: "3 months",
        students: "9,556",
        img: "/images/courses/c.jpg",
        aboutData: {
          topic: "Master Structured and Object-Oriented Programming with C and C++",
          content1: "Start with strong programming fundamentals using C and progress into advanced object-oriented concepts with C++. Develop problem-solving and coding skills that build a solid foundation for a software career.",
          content2: "This comprehensive course takes you from logic building to advanced C++ applications. Practice memory management, file handling, and real-time programming techniques used in system-level development."
        },
        courseContentData: [
          {
            id: 1,
            title: "Programming Basics with C",
            icon: "bi bi-code-square",
            defaultOpen: true,
            items: [
              "Introduction to programming and IDE setup",
              "Variables, operators, and data types",
              "Conditional statements and loops",
              "Functions and recursion",
              "Arrays and strings"
            ]
          },
          {
            id: 2,
            title: "Advanced C Concepts",
            icon: "bi bi-motherboard",
            items: [
              "Pointers and memory management",
              "Structures, unions, and enums",
              "Dynamic memory allocation",
              "File handling and modular programming"
            ]
          },
          {
            id: 3,
            title: "Transition to C++",
            icon: "bi bi-shuffle",
            items: [
              "Difference between C and C++",
              "Basic syntax, streams, and namespaces",
              "Inline functions and function overloading"
            ]
          },
          {
            id: 4,
            title: "Object-Oriented Programming in C++",
            icon: "bi bi-cpu",
            items: [
              "Classes and objects",
              "Constructors and destructors",
              "Inheritance, polymorphism, abstraction, and encapsulation",
              "Operator overloading and templates"
            ]
          }
        ],
        whatYouLearnData: [
          { title: "Strong Logic Building", desc: "Write optimized and structured programs using C.", icon: "bi bi-bar-chart-line" },
          { title: "Master OOP", desc: "Develop scalable software using C++ object-oriented concepts.", icon: "bi bi-diagram-3" },
          { title: "Work with Memory and Files", desc: "Handle pointers, memory allocation, and file operations confidently.", icon: "bi bi-hdd" }
        ]

      },
      {
        title: "Core Python",
        desc: "Master the foundations of Python programming with hands-on projects, logic building, and real-world applications. Build a strong coding base to excel in advanced technologies and kickstart your IT career.",
        rating: 4.5,
        duration: "3 months",
        students: "9,556",
        img: "/images/courses/Core_Python.jpg",
        aboutData: {
          topic: "Build Strong Python Foundations from Scratch",
          content1: "Learn the fundamentals of Python programming with hands-on exercises and practical examples. Understand syntax, logic building, data structures, and modular programming techniques used in real-world applications.",
          content2: "This course prepares you to move confidently into advanced technologies like web development, automation, data analytics, and AI."
        },
        courseContentData: [
          {
            id: 1,
            title: "Python Basics",
            icon: "bi bi-braces",
            defaultOpen: true,
            items: [
              "Python installation and IDE usage",
              "Variables, data types, and operators",
              "Input, output, and type casting",
              "Conditional statements and loops"
            ]
          },
          {
            id: 2,
            title: "Data Handling in Python",
            icon: "bi bi-collection",
            items: [
              "Lists, tuples, sets, and dictionaries",
              "String manipulation",
              "Functions and lambda expressions",
              "Modules and packages"
            ]
          },
          {
            id: 3,
            title: "Error Handling and Files",
            icon: "bi bi-file-code",
            items: [
              "Exception handling techniques",
              "Working with text and binary files",
              "Importing and using external libraries"
            ]
          },
          {
            id: 4,
            title: "Introduction to OOP",
            icon: "bi bi-diagram-2",
            items: [
              "Classes and objects",
              "Constructors and special methods",
              "Encapsulation, inheritance, and polymorphism"
            ]
          }
        ],
        whatYouLearnData: [
          { title: "Write Python Programs", desc: "Develop clean and efficient code with beginner-friendly syntax.", icon: "bi bi-lightbulb" },
          { title: "Data and File Handling", desc: "Work confidently with user data and file operations.", icon: "bi bi-folder2-open" },
          { title: "OOP Foundation", desc: "Build a strong base for advanced Python development.", icon: "bi bi-cpu" }
        ]

      },
      {
        title: "PySpark",
        desc: "Master PySpark with hands-on training designed to handle big data processing at scale. Learn real-world data engineering and analytics skills to excel in modern data-driven careers.",
        rating: 4.5,
        duration: "3 months",
        students: "9,556",
        img: "/images/courses/PySpark.jpg",
        aboutData: {
          topic: "Master PySpark for Big Data Processing & Analytics",
          content1: "Learn PySpark to process and analyze large-scale datasets efficiently. Gain real-world data engineering and distributed computation skills required in modern industries.",
          content2: "This course covers PySpark RDDs, DataFrames, streaming, MLlib, and performance optimization. You will work with real-time workflows and enterprise-level datasets."
        },
        courseContentData: [
          {
            id: 1,
            title: "Big Data & PySpark Fundamentals",
            icon: "bi bi-cloud-arrow-up",
            defaultOpen: true,
            items: [
              "Introduction to Big Data and Hadoop ecosystem",
              "Apache Spark architecture",
              "Installing and configuring PySpark",
              "RDD basics and transformations"
            ]
          },
          {
            id: 2,
            title: "DataFrames & SQL Analytics",
            icon: "bi bi-table",
            items: [
              "Creating and managing DataFrames",
              "Spark SQL operations",
              "Schema handling and data cleaning",
              "Joins, aggregations, and window functions"
            ]
          },
          {
            id: 3,
            title: "Machine Learning with PySpark",
            icon: "bi bi-brain",
            items: [
              "Using MLlib",
              "Supervised and unsupervised models",
              "Feature engineering and pipelines"
            ]
          },
          {
            id: 4,
            title: "Spark Streaming & Optimization",
            icon: "bi bi-speedometer2",
            items: [
              "Structured streaming basics",
              "Performance tuning",
              "Cluster deployment overview",
              "Integrating with cloud platforms"
            ]
          }
        ],
        whatYouLearnData: [
          { title: "Work with Distributed Data", desc: "Process massive datasets using Spark RDDs and DataFrames.", icon: "bi bi-database" },
          { title: "Perform Big Data Analytics", desc: "Apply SQL and ML techniques on real-time data flows.", icon: "bi bi-graph-up-arrow" },
          { title: "Optimize and Deploy Workloads", desc: "Tune performance and manage distributed applications.", icon: "bi bi-gear" }
        ]

      },


    ],
  },

  "Web Development": {
    mainCategoryDesc: "Full Stack Web Development Mastery",
    subDesc: "Master the complete spectrum of frontend and backend development with in-depth training in MERN, MEAN, and Java Full Stack technologies. Develop robust, dynamic, and interactive web applications while gaining practical skills that make you industry-ready.",
    subHeading: "Acquire the expertise to grow as a professional Full Stack Web Developer and build a strong career in today’s digital-first world.",
    mainImage: "/images/courses/Web_Development.jpg",

    courses: [
      {
        title: "JavaScript",
        desc: "Master JavaScript from basics to advanced with hands-on projects, real-world use cases, and expert guidance. Build strong coding logic, interactive web apps, and prepare for high-demand developer roles.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/JAVA_Script.jpg",
        aboutData: {
          topic: "Master JavaScript — From Fundamentals to Full-Stack Development!",
          content1:
            "Learn JavaScript from the ground up and gain the skills needed to become a professional developer. From core syntax to asynchronous programming, DOM manipulation, APIs, and frameworks, this course helps you build dynamic and interactive web applications.",
          content2:
            "The JavaScript course by Urbancode covers everything from basic syntax to advanced concepts like ES6+, promises, async/await, and modular programming. You’ll also dive into real-world applications using React, Node.js, and Express. By the end of this course, you’ll be ready to build responsive websites, APIs, and modern full-stack applications."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – JavaScript Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to JavaScript and its role in web development",
              "Setting up the development environment",
              "Variables, constants, and data types",
              "Operators and expressions",
              "Conditional statements and loops",
              "Functions and scope"
            ]
          },
          {
            id: 2,
            title: "Beginner – Working with the DOM",
            icon: "bi bi-braces",
            items: [
              "Understanding the Document Object Model (DOM)",
              "Selecting and manipulating HTML elements",
              "Handling user events",
              "Dynamic content updates",
              "Form validation and interactivity"
            ]
          },
          {
            id: 3,
            title: "Beginner – Working with Data",
            icon: "bi bi-database",
            items: [
              "Arrays and array methods",
              "Objects and object manipulation",
              "JSON and data structures",
              "LocalStorage and SessionStorage",
              "Fetching and displaying data"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Advanced JavaScript Concepts",
            icon: "bi bi-gear",
            items: [
              "ES6+ features (let, const, arrow functions, destructuring, spread/rest)",
              "Modules and imports/exports",
              "Closures, callbacks, and higher-order functions",
              "Promises, async/await, and the event loop",
              "Error handling and debugging"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Browser & APIs",
            icon: "bi bi-window",
            items: [
              "Browser events and event propagation",
              "Web APIs and Fetch API",
              "AJAX and asynchronous requests",
              "Working with third-party APIs",
              "CORS and data security"
            ]
          },
          {
            id: 6,
            title: "Intermediate – Object-Oriented JavaScript",
            icon: "bi bi-diagram-3",
            items: [
              "Prototypes and inheritance",
              "Classes and constructors (ES6)",
              "Encapsulation and polymorphism",
              "Design patterns and modular code"
            ]
          },
          {
            id: 7,
            title: "Expert – Frontend Frameworks",
            icon: "bi bi-window-stack",
            items: [
              "Introduction to React.js and component-based architecture",
              "State management and hooks",
              "Routing and single-page applications (SPA)",
              "Working with APIs in React",
              "Building and deploying React apps"
            ]
          },
          {
            id: 8,
            title: "Expert – Backend with Node.js",
            icon: "bi bi-cpu",
            items: [
              "Introduction to Node.js and npm",
              "Creating servers with Express.js",
              "Routing and middleware",
              "Working with databases (MongoDB)",
              "Authentication and JWT tokens"
            ]
          },
          {
            id: 9,
            title: "Expert – Full-Stack JavaScript Projects",
            icon: "bi bi-layers",
            items: [
              "Building RESTful APIs",
              "Connecting frontend and backend",
              "Real-time apps with WebSockets",
              "Deploying full-stack applications",
              "Version control and DevOps integration"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Core JavaScript Concepts",
            desc: "Learn variables, data types, loops, and ES6+ syntax with real examples.",
            icon: "bi bi-lightning-charge"
          },
          {
            title: "Build Interactive Web Applications",
            desc: "Use DOM manipulation, events, and APIs to create dynamic web pages.",
            icon: "bi bi-braces"
          },
          {
            title: "Work with Modern JavaScript Tools",
            desc: "Use Node.js, npm, and Webpack for modern development workflows.",
            icon: "bi bi-tools"
          },
          {
            title: "Create Scalable Frontend Apps",
            desc: "Develop powerful user interfaces using React and component-based design.",
            icon: "bi bi-window-stack"
          },
          {
            title: "Develop Full-Stack Projects",
            desc: "Integrate frontend and backend with Node.js, Express, and MongoDB.",
            icon: "bi bi-layers"
          },
          {
            title: "Get Industry-Ready Skills",
            desc: "Learn debugging, version control, deployment, and best coding practices.",
            icon: "bi bi-briefcase"
          }
        ]
      }
      ,
      {
        title: "Full Stack Development",
        desc: "Master Full Stack Development with hands-on training in Frontend, Backend, Databases, and Deployment. Transform into an industry-ready developer with real-time projects and placement assistance.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Full_Stack_Development.jpg",
        aboutData: {
          topic: "Become a Full Stack Developer — From Frontend to Backend & Deployment!",
          content1: "This Full Stack Development course takes you from beginner to expert with a practical, project-driven approach. You’ll learn to build complete web applications — from creating stunning frontends with HTML, CSS, and JavaScript to managing databases and deploying scalable backends.",
          content2: "The program covers core technologies like React, Node.js, Express, and MongoDB. You’ll gain hands-on experience in API integration, authentication, cloud deployment, and version control. By the end of this course, you’ll have the skills and portfolio to become a job-ready Full Stack Developer capable of building modern, high-performance web applications."
        },
        courseContentData: [
          {
            id: 1,
            title: "Frontend Fundamentals – HTML, CSS & JavaScript",
            icon: "bi bi-window",
            defaultOpen: true,
            items: [
              "Introduction to Web Development",
              "HTML structure and semantic elements",
              "CSS styling, flexbox, and grid layouts",
              "Responsive design and media queries",
              "JavaScript basics – variables, functions, DOM manipulation",
              "Creating interactive web pages"
            ]
          },
          {
            id: 2,
            title: "Frontend Framework – React.js",
            icon: "bi bi-layers",
            items: [
              "Introduction to React and component architecture",
              "JSX and state management",
              "Props, events, and hooks (useState, useEffect)",
              "React Router and navigation",
              "Working with APIs in React",
              "Building single-page applications (SPAs)"
            ]
          },
          {
            id: 3,
            title: "Backend Development – Node.js & Express.js",
            icon: "bi bi-server",
            items: [
              "Introduction to Node.js environment",
              "Setting up Express servers",
              "Routing and middleware",
              "RESTful APIs and CRUD operations",
              "Error handling and API validation",
              "Authentication using JWT"
            ]
          },
          {
            id: 4,
            title: "Database Management – MongoDB & SQL",
            icon: "bi bi-database",
            items: [
              "Introduction to Databases – SQL vs NoSQL",
              "MongoDB CRUD operations",
              "Mongoose for data modeling",
              "Database relationships and schema design",
              "Aggregation and indexing",
              "Connecting backend with database"
            ]
          },
          {
            id: 5,
            title: "Version Control & Collaboration",
            icon: "bi bi-git",
            items: [
              "Git and GitHub basics",
              "Branching and merging",
              "Collaborating on projects",
              "Using Git in real-world development"
            ]
          },
          {
            id: 6,
            title: "Deployment & DevOps Basics",
            icon: "bi bi-cloud-upload",
            items: [
              "Hosting static and dynamic websites",
              "Deploying Node.js apps on cloud (Render, Vercel, Netlify, etc.)",
              "Environment variables and configuration",
              "Introduction to CI/CD pipelines",
              "Monitoring and scaling applications"
            ]
          },
          {
            id: 7,
            title: "Advanced Topics & Real-World Projects",
            icon: "bi bi-rocket-takeoff",
            items: [
              "Advanced React (Context API, Redux Toolkit)",
              "Authentication & Authorization (JWT, OAuth)",
              "File upload and storage (Cloudinary, AWS S3)",
              "Building and integrating REST APIs",
              "Final Full Stack Project – MERN App Deployment"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Build Full Stack Web Applications",
            desc: "Learn to design, develop, and deploy complete web apps using MERN stack.",
            icon: "bi bi-window-stack"
          },
          {
            title: "Master Frontend Development",
            desc: "Create modern, responsive, and interactive UIs with HTML, CSS, JavaScript, and React.",
            icon: "bi bi-laptop"
          },
          {
            title: "Develop Powerful Backends",
            desc: "Build RESTful APIs and scalable server-side applications using Node.js and Express.js.",
            icon: "bi bi-hdd-network"
          },
          {
            title: "Work with Databases",
            desc: "Integrate MongoDB and SQL databases for data storage, querying, and optimization.",
            icon: "bi bi-database"
          },
          {
            title: "Implement Authentication & Security",
            desc: "Secure your apps using JWT, OAuth, and best practices for data protection.",
            icon: "bi bi-shield-lock"
          },
          {
            title: "Deploy and Maintain Applications",
            desc: "Host, monitor, and scale your web apps using modern DevOps and cloud tools.",
            icon: "bi bi-cloud-arrow-up"
          }
        ]
      }
      ,
      {
        title: "MERN Stack",
        desc: "Master MongoDB, Express, React, and Node.js with real-world projects and hands-on learning. Build full-stack apps and launch your career with industry-ready skills.",
        rating: 5.0,
        duration: "1 month",
        students: "7,556",
        img: "/images/courses/MERN_Stack.jpg",

        aboutData: {
          topic: "Become a Full-Stack Web Developer with MERN — MongoDB, Express, React, and Node.js!",
          content1:
            "Dive into full-stack web development with the MERN stack. Learn how to build scalable web applications from scratch using MongoDB, Express.js, React.js, and Node.js. This course combines backend logic, frontend interactivity, and database integration to make you a complete developer.",
          content2:
            "The MERN Stack course by Urbancode takes you from web fundamentals to advanced full-stack projects. You’ll start by understanding how the stack components interact, then learn to create RESTful APIs, dynamic UIs, authentication systems, and deploy production-ready apps. By the end, you’ll be ready to build and deploy full-scale applications with confidence."
        },

        courseContentData: [
          {
            id: 1,
            title: "Beginner – Web Development Fundamentals",
            icon: "bi bi-globe",
            defaultOpen: true,
            items: [
              "Introduction to full-stack development",
              "Overview of MERN architecture",
              "HTML, CSS, and JavaScript basics",
              "Version control with Git and GitHub",
              "Understanding client-server communication",
              "Setting up VS Code and Node.js environment"
            ]
          },
          {
            id: 2,
            title: "Beginner – JavaScript Essentials",
            icon: "bi bi-code-slash",
            items: [
              "ES6+ features and syntax",
              "Functions, promises, and async/await",
              "Modules and package management with npm",
              "Error handling and debugging",
              "APIs and JSON data handling"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Node.js and Express.js",
            icon: "bi bi-server",
            items: [
              "Introduction to Node.js and its architecture",
              "Building RESTful APIs using Express.js",
              "Routing, middleware, and controllers",
              "Working with MongoDB and Mongoose",
              "CRUD operations and validation",
              "Authentication with JWT"
            ]
          },
          {
            id: 4,
            title: "Intermediate – React.js Frontend Development",
            icon: "bi bi-laptop",
            items: [
              "Introduction to React and component architecture",
              "JSX and props handling",
              "State management and hooks",
              "Routing with React Router",
              "Forms and controlled components",
              "Connecting React frontend with backend APIs"
            ]
          },
          {
            id: 5,
            title: "Intermediate – MongoDB and Database Design",
            icon: "bi bi-database",
            items: [
              "Introduction to NoSQL databases",
              "MongoDB CRUD operations",
              "Schema design and relationships",
              "Aggregation pipelines and indexing",
              "Using Mongoose ORM effectively",
              "Database security and optimization"
            ]
          },
          {
            id: 6,
            title: "Expert – Advanced MERN Concepts",
            icon: "bi bi-gear",
            items: [
              "State management using Redux or Context API",
              "File uploads and cloud storage",
              "Authentication and role-based authorization",
              "Error handling and logging",
              "Building reusable components",
              "Environment variables and configuration management"
            ]
          },
          {
            id: 7,
            title: "Expert – Deployment & DevOps",
            icon: "bi bi-cloud-arrow-up",
            items: [
              "Preparing apps for production",
              "Environment setup for deployment",
              "Hosting backend and frontend apps",
              "Using services like Vercel, Render, and MongoDB Atlas",
              "Continuous Integration/Continuous Deployment (CI/CD)",
              "Performance optimization and monitoring"
            ]
          },
          {
            id: 8,
            title: "Expert – Capstone Full-Stack Project",
            icon: "bi bi-briefcase",
            items: [
              "Plan and structure a complete MERN project",
              "Build a real-world web application (e.g., e-commerce or social media app)",
              "Implement authentication, API integration, and data storage",
              "Deploy and maintain the app on cloud servers",
              "Showcase project on portfolio and GitHub"
            ]
          }
        ],

        whatYouLearnData: [
          {
            title: "Master the MERN Stack",
            desc: "Learn MongoDB, Express.js, React.js, and Node.js from basics to advanced level.",
            icon: "bi bi-layers"
          },
          {
            title: "Build Full-Stack Applications",
            desc: "Create real-world, data-driven applications with frontend and backend integration.",
            icon: "bi bi-window-stack"
          },
          {
            title: "Work with Databases",
            desc: "Design, query, and manage NoSQL databases using MongoDB and Mongoose.",
            icon: "bi bi-database"
          },
          {
            title: "Develop RESTful APIs",
            desc: "Build and test secure APIs for scalable and maintainable web architectures.",
            icon: "bi bi-link-45deg"
          },
          {
            title: "Master React Development",
            desc: "Learn React Hooks, routing, and state management to build interactive UIs.",
            icon: "bi bi-code"
          },
          {
            title: "Deploy and Manage Apps",
            desc: "Deploy apps using Vercel, Render, or AWS with CI/CD automation and monitoring.",
            icon: "bi bi-cloud-upload"
          }
        ]
      }
      ,
      {
        title: "HTML and CSS",
        desc: "Master the fundamentals of web design with our HTML & CSS Training Program. Build responsive, modern websites from scratch with hands-on projects.",
        rating: 5.0,
        duration: "1 month",
        students: "7,556",
        img: "/images/courses/HTML_and_CSS.jpg",
        aboutData: {
          topic: "Learn HTML & CSS — Build Beautiful, Responsive Websites from Scratch!",
          content1: "This course is the ultimate starting point for your web development journey. Learn how to structure web pages with HTML and bring them to life with CSS. Whether you’re a complete beginner or refreshing your skills, this hands-on program will teach you everything from web page fundamentals to modern responsive design.",
          content2: "The HTML & CSS course by Urbancode provides in-depth training on front-end web development. You’ll master semantic HTML, forms, multimedia integration, layout design using Flexbox and Grid, and responsive design techniques. By the end, you’ll be able to design and launch stunning websites that work seamlessly across all devices."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Introduction to HTML",
            icon: "bi bi-filetype-html",
            defaultOpen: true,
            items: [
              "What is HTML and how the web works",
              "HTML document structure and elements",
              "Headings, paragraphs, and text formatting",
              "Links, images, and lists",
              "Creating tables and forms",
              "Best practices for clean and semantic HTML"
            ]
          },
          {
            id: 2,
            title: "Beginner – Introduction to CSS",
            icon: "bi bi-filetype-css",
            items: [
              "Understanding CSS syntax and selectors",
              "Applying inline, internal, and external styles",
              "Colors, backgrounds, borders, and typography",
              "Box model and element sizing",
              "Using classes and IDs effectively"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Layouts & Positioning",
            icon: "bi bi-layout-text-window",
            items: [
              "Display, position, and z-index properties",
              "Creating multi-column layouts",
              "Flexbox fundamentals",
              "Grid layout techniques",
              "Centering elements perfectly"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Responsive Web Design",
            icon: "bi bi-phone",
            items: [
              "Introduction to responsive design principles",
              "Using media queries for different screen sizes",
              "Viewport and relative units (em, rem, %, vw, vh)",
              "Building mobile-first websites",
              "Responsive navigation menus"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Advanced Styling Techniques",
            icon: "bi bi-palette",
            items: [
              "CSS variables and custom properties",
              "Pseudo-classes and pseudo-elements",
              "Transitions, transforms, and animations",
              "Hover effects and visual enhancements",
              "Using Google Fonts and icon libraries"
            ]
          },
          {
            id: 6,
            title: "Expert – Modern Web Design Projects",
            icon: "bi bi-window-stack",
            items: [
              "Building a personal portfolio website",
              "Designing landing pages with responsive layouts",
              "Creating modern navigation bars and hero sections",
              "Using Flexbox and Grid together for advanced layouts",
              "Optimizing and deploying your website"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master HTML Structure",
            desc: "Learn to build semantic and accessible web pages using proper HTML tags.",
            icon: "bi bi-filetype-html"
          },
          {
            title: "Style with Modern CSS",
            desc: "Use CSS to design visually stunning, responsive layouts and interfaces.",
            icon: "bi bi-palette"
          },
          {
            title: "Build Responsive Websites",
            desc: "Make websites look great on all devices using Flexbox, Grid, and media queries.",
            icon: "bi bi-phone"
          },
          {
            title: "Create Interactive UI Effects",
            desc: "Add animations, transitions, and hover effects to enhance user experience.",
            icon: "bi bi-stars"
          },
          {
            title: "Work on Real Projects",
            desc: "Design and build your own portfolio website and landing pages from scratch.",
            icon: "bi bi-window"
          },
          {
            title: "Prepare for Front-End Development",
            desc: "Gain the foundational skills needed to move into JavaScript and React.",
            icon: "bi bi-code-slash"
          }
        ]
      }
      ,
      {
        title: "Robotic Process Automation",
        desc: "Master the future of automation with our RPA Training Program—learn to design, build, and deploy bots that transform business processes. Gain hands-on expertise in leading RPA tools to accelerate your career in intelligent automation.",
        rating: 5.0,
        duration: "1 month",
        students: "7,556",
        img: "/images/courses/Robotic_Process_Automation.jpg",

        aboutData: {
          topic: "Become an RPA Expert — Automate, Optimize, and Transform Business Operations!",
          content1:
            "Learn how to automate repetitive business tasks using Robotic Process Automation. This course covers every aspect of RPA — from the fundamentals of automation to advanced bot deployment and management using tools like UiPath, Blue Prism, and Automation Anywhere.",
          content2:
            "The RPA Training Program by Urbancode helps you build a strong foundation in automation design, development, and orchestration. Through hands-on projects, you’ll master process discovery, workflow creation, AI integration, and enterprise-level automation. Perfect for professionals aiming to lead the digital transformation era."
        },

        courseContentData: [
          {
            id: 1,
            title: "Beginner – Introduction to RPA",
            icon: "bi bi-robot",
            defaultOpen: true,
            items: [
              "Understanding Robotic Process Automation (RPA)",
              "History and evolution of automation",
              "Key RPA concepts and terminology",
              "Business benefits and use cases of RPA",
              "Overview of top RPA tools: UiPath, Blue Prism, Automation Anywhere"
            ]
          },
          {
            id: 2,
            title: "Beginner – Process Identification & Design",
            icon: "bi bi-diagram-3",
            items: [
              "Identifying automation opportunities",
              "Process mapping and documentation",
              "RPA lifecycle and project phases",
              "Designing automation workflows",
              "Understanding process exceptions and business rules"
            ]
          },
          {
            id: 3,
            title: "Beginner – Getting Started with UiPath",
            icon: "bi bi-window",
            items: [
              "Setting up the UiPath Studio environment",
              "Building your first automation project",
              "Working with variables, arguments, and data types",
              "Recording and playback of automation steps",
              "Debugging and publishing simple bots"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Advanced Workflow Automation",
            icon: "bi bi-gear",
            items: [
              "Control flow and exception handling",
              "Data manipulation using Excel, PDFs, and emails",
              "Web and desktop automation",
              "Selectors, anchors, and dynamic elements",
              "Error handling and debugging advanced workflows"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Integration & Orchestration",
            icon: "bi bi-link-45deg",
            items: [
              "Integrating APIs and databases in RPA workflows",
              "Using Orchestrator for bot management",
              "Scheduling, queuing, and monitoring robots",
              "Version control and deployment best practices"
            ]
          },
          {
            id: 6,
            title: "Intermediate – Automation Anywhere & Blue Prism",
            icon: "bi bi-layers",
            items: [
              "Introduction to Automation Anywhere and its architecture",
              "Creating and managing bots in Automation Anywhere",
              "Overview of Blue Prism Studio and Process Designer",
              "Best practices across RPA tools"
            ]
          },
          {
            id: 7,
            title: "Expert – Cognitive Automation & AI Integration",
            icon: "bi bi-cpu",
            items: [
              "Introduction to Intelligent Automation",
              "Integrating AI, ML, and OCR into RPA",
              "Natural Language Processing (NLP) for document and chat automation",
              "Cognitive decision-making and predictive automation"
            ]
          },
          {
            id: 8,
            title: "Expert – Enterprise RPA Implementation",
            icon: "bi bi-building-check",
            items: [
              "RPA Center of Excellence (CoE) setup",
              "Governance, compliance, and scalability strategies",
              "Monitoring and maintaining large-scale bots",
              "Security and data privacy in automation",
              "Case studies of enterprise RPA success"
            ]
          },
          {
            id: 9,
            title: "Expert – Capstone Project",
            icon: "bi bi-award",
            items: [
              "End-to-end RPA project design and execution",
              "Process discovery, documentation, and automation build",
              "Testing, deployment, and monitoring of bots",
              "Final project presentation and review"
            ]
          }
        ],

        whatYouLearnData: [
          {
            title: "Master RPA Tools",
            desc: "Gain hands-on experience with UiPath, Automation Anywhere, and Blue Prism for real-world automation.",
            icon: "bi bi-robot"
          },
          {
            title: "Design and Build Bots",
            desc: "Learn to design, develop, test, and deploy bots for various business processes.",
            icon: "bi bi-gear"
          },
          {
            title: "Automate Complex Workflows",
            desc: "Automate repetitive and data-heavy tasks using control flow, loops, and conditional logic.",
            icon: "bi bi-diagram-3"
          },
          {
            title: "Integrate AI & Cognitive Technologies",
            desc: "Enhance automation with AI, OCR, NLP, and machine learning models.",
            icon: "bi bi-cpu"
          },
          {
            title: "Manage Enterprise Automation",
            desc: "Deploy bots at scale with Orchestrator, manage resources, and ensure compliance.",
            icon: "bi bi-building-check"
          },
          {
            title: "Lead Digital Transformation",
            desc: "Drive organizational efficiency and innovation through intelligent process automation.",
            icon: "bi bi-lightning-charge"
          }
        ]
      }
      ,
      {
        title: ".Net + Angular Full Stack",
        desc: "Master modern full-stack development with .Net & Angular—build enterprise-grade apps from front-end to back-end. Gain hands-on projects, expert mentorship, and job-ready skills to excel in today’s IT industry.",
        rating: 5.0,
        duration: "1 month",
        students: "7,556",
        img: "/images/courses/Net_Angular_Full_Stack.jpg",

        aboutData: {
          topic: "Become a Full Stack Developer with .Net & Angular — Build Scalable, Enterprise-Grade Applications!",
          content1: "This course takes you on a complete journey through full-stack development using .NET for the backend and Angular for the frontend. You’ll learn to design robust APIs, build responsive single-page applications (SPAs), and integrate modern development practices like authentication, testing, and deployment.",
          content2: "The .Net + Angular Full Stack course by Urbancode is designed for those who want to master both front-end and back-end technologies. You’ll start with C# and ASP.NET Core fundamentals, progress through Entity Framework and RESTful API development, and then dive into Angular for building interactive UI. By the end, you’ll develop full-fledged enterprise-level applications and deploy them using CI/CD pipelines and cloud technologies."
        },

        courseContentData: [
          {
            id: 1,
            title: "Beginner – Getting Started with .Net & Angular",
            icon: "bi bi-rocket-takeoff",
            defaultOpen: true,
            items: [
              "Introduction to Full Stack Development",
              "Overview of .NET and Angular",
              "Setting up Visual Studio & Node.js",
              "Understanding C#, TypeScript, and ES6",
              "Basic project setup and architecture overview"
            ],
          },
          {
            id: 2,
            title: "Beginner – Core C# & ASP.NET Fundamentals",
            icon: "bi bi-code-square",
            items: [
              "C# syntax and data types",
              "Classes, objects, and inheritance",
              "Collections and LINQ",
              "Working with ASP.NET Core MVC",
              "Routing, controllers, and models"
            ],
          },
          {
            id: 3,
            title: "Beginner – Frontend Basics with Angular",
            icon: "bi bi-window",
            items: [
              "Introduction to Angular and TypeScript",
              "Angular CLI and project setup",
              "Components, modules, and templates",
              "Data binding and event handling",
              "Services and dependency injection"
            ],
          },
          {
            id: 4,
            title: "Intermediate – Backend Development with .NET Core",
            icon: "bi bi-hdd-network",
            items: [
              "Building RESTful APIs with ASP.NET Core",
              "Entity Framework Core and database migrations",
              "CRUD operations and repositories",
              "Data validation and exception handling",
              "Authentication and JWT implementation"
            ],
          },
          {
            id: 5,
            title: "Intermediate – Advanced Angular Concepts",
            icon: "bi bi-stack",
            items: [
              "Routing and navigation",
              "Reactive forms and validation",
              "HTTP client and API integration",
              "Angular Pipes and Directives",
              "State management with RxJS and Observables"
            ],
          },
          {
            id: 6,
            title: "Intermediate – Integrating Frontend and Backend",
            icon: "bi bi-link-45deg",
            items: [
              "Connecting Angular app with ASP.NET API",
              "Handling HTTP requests and responses",
              "Managing authentication and tokens",
              "Error handling and user feedback",
              "Building a complete full-stack CRUD project"
            ],
          },
          {
            id: 7,
            title: "Expert – Enterprise Architecture & Best Practices",
            icon: "bi bi-diagram-3",
            items: [
              "Clean architecture and SOLID principles",
              "Dependency injection and middleware",
              "Advanced API security and authorization",
              "Performance optimization and caching",
              "Version control and Git workflow"
            ],
          },
          {
            id: 8,
            title: "Expert – Deployment & DevOps Integration",
            icon: "bi bi-cloud-upload",
            items: [
              "Containerization with Docker",
              "CI/CD pipelines using Azure DevOps or GitHub Actions",
              "Cloud deployment on Azure or AWS",
              "Monitoring and logging with Serilog and Application Insights",
              "Final project deployment and testing"
            ],
          },
          {
            id: 9,
            title: "Expert – Capstone Project",
            icon: "bi bi-award",
            items: [
              "Design and plan a full-stack project",
              "Develop both backend and frontend",
              "Implement authentication and authorization",
              "Deploy application to cloud",
              "Project presentation and review"
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master .NET Core and C#",
            desc: "Develop scalable, high-performance back-end systems using ASP.NET Core and C#.",
            icon: "bi bi-code-square",
          },
          {
            title: "Build Dynamic Angular Applications",
            desc: "Create powerful single-page apps using Angular, TypeScript, and RxJS.",
            icon: "bi bi-window",
          },
          {
            title: "Develop RESTful APIs",
            desc: "Design, build, and test secure APIs with ASP.NET Core and integrate them with front-end apps.",
            icon: "bi bi-hdd-network",
          },
          {
            title: "Integrate Frontend & Backend Seamlessly",
            desc: "Connect Angular UI with .NET Core APIs for complete full-stack functionality.",
            icon: "bi bi-link-45deg",
          },
          {
            title: "Learn DevOps & Cloud Deployment",
            desc: "Use Docker, Azure DevOps, and CI/CD pipelines to deploy and manage applications.",
            icon: "bi bi-cloud-upload",
          },
          {
            title: "Build Real-World Enterprise Projects",
            desc: "Work on capstone projects to showcase full-stack expertise in modern business solutions.",
            icon: "bi bi-award",
          },
        ]
      }
      ,
    ],
  },

  "UI UX Designing": {
    mainCategoryDesc: "UI/UX Mastery for the Future",
    subDesc: "Gain hands-on expertise in UI/UX design to create intuitive, impactful, and user-focused digital experiences. Learn to design seamless interfaces that prioritize user satisfaction, enhance usability, and drive engagement.",
    subHeading: "Transform your creativity into professional UI/UX design skills that open doors to careers in web design, app development, and product innovation.",
    mainImage: "/images/courses/UI_UX_Designing.jpg",

    courses: [
      {
        title: "Figma",
        desc: "Learn to design stunning, user-friendly interfaces with Figma. Master collaborative design tools, workflows, and real-world projects. Turn your creativity into professional UI/UX design skills.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Figma.jpg",
        aboutData: {
          topic: "Master Figma — From Basic Design to Advanced Prototyping!",
          content1:
            "Unleash your creativity and learn to design modern, engaging interfaces using Figma — the most powerful design tool for UI/UX professionals. This course will help you go from beginner to expert through hands-on exercises, real-world projects, and team collaboration features.",
          content2:
            "The Figma course by Urbancode takes you through the complete design process — from fundamentals like wireframing and layout design to advanced topics like prototyping, animations, and design systems. You’ll also learn how to collaborate effectively with developers, create responsive designs, and build interactive user experiences that stand out in real-world applications."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Getting Started with Figma",
            icon: "bi bi-cursor",
            defaultOpen: true,
            items: [
              "Introduction to Figma and its interface",
              "Setting up your Figma workspace",
              "Understanding design files, pages, and frames",
              "Working with shapes, colors, and typography",
              "Using layers and grouping",
              "Essential Figma shortcuts and tips"
            ]
          },
          {
            id: 2,
            title: "Beginner – Design Fundamentals",
            icon: "bi bi-brush",
            items: [
              "Basics of UI/UX design principles",
              "Creating layouts and grids",
              "Color theory and visual hierarchy",
              "Typography and iconography",
              "Wireframing basics"
            ]
          },
          {
            id: 3,
            title: "Beginner – Components & Assets",
            icon: "bi bi-puzzle",
            items: [
              "Creating and reusing components",
              "Using variants and auto layout",
              "Organizing design systems",
              "Importing and managing assets",
              "Building reusable UI kits"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Prototyping & Interaction Design",
            icon: "bi bi-diagram-3",
            items: [
              "Creating interactive prototypes",
              "Adding animations and transitions",
              "Smart animate and micro-interactions",
              "Using overlays and scrolling frames",
              "Testing and presenting prototypes"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Collaboration & Handoff",
            icon: "bi bi-people",
            items: [
              "Real-time collaboration and feedback",
              "Commenting and version control",
              "Design handoff for developers",
              "Using Figma Inspect and Dev Mode",
              "Sharing projects and maintaining versions"
            ]
          },
          {
            id: 6,
            title: "Expert – Advanced Design Systems",
            icon: "bi bi-diagram-2",
            items: [
              "Building scalable design systems",
              "Using tokens and style guides",
              "Component libraries and team management",
              "Design consistency and accessibility",
              "Managing updates and documentation"
            ]
          },
          {
            id: 7,
            title: "Expert – Responsive & Interactive Design",
            icon: "bi bi-phone",
            items: [
              "Designing for different devices and screens",
              "Responsive auto layouts",
              "Advanced animations and timelines",
              "Prototyping complex interactions",
              "Creating mobile-first and adaptive designs"
            ]
          },
          {
            id: 8,
            title: "Expert – Portfolio & Real-World Projects",
            icon: "bi bi-briefcase",
            items: [
              "Designing a full web app UI",
              "Creating a mobile app prototype",
              "Redesigning existing products",
              "Presenting your design case study",
              "Building your design portfolio"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Figma Tools & Interface",
            desc: "Get comfortable with Figma’s interface, components, and powerful design tools.",
            icon: "bi bi-cursor"
          },
          {
            title: "Create Beautiful UI/UX Designs",
            desc: "Learn how to design user-friendly, modern, and aesthetic interfaces.",
            icon: "bi bi-brush"
          },
          {
            title: "Build Interactive Prototypes",
            desc: "Design engaging, clickable prototypes that bring your ideas to life.",
            icon: "bi bi-diagram-3"
          },
          {
            title: "Collaborate with Teams",
            desc: "Work in real-time with developers, designers, and clients using Figma’s collaboration tools.",
            icon: "bi bi-people"
          },
          {
            title: "Develop Design Systems",
            desc: "Create reusable components, libraries, and scalable design systems for large projects.",
            icon: "bi bi-diagram-2"
          },
          {
            title: "Build a Professional Portfolio",
            desc: "Work on live projects and build a portfolio that showcases your real-world design skills.",
            icon: "bi bi-briefcase"
          }
        ]
      }
      ,
      {
        title: "Photoshop",
        desc: "Unleash your creativity with professional Photoshop skills. Learn photo editing, graphic design, and digital art from scratch. Master tools and techniques to bring your ideas to life.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Photoshop.jpg",
        aboutData: {
          topic: "Master Adobe Photoshop — From Beginner to Professional Graphic Designer!",
          content1:
            "Learn to create stunning designs and edit photos like a pro. This comprehensive Photoshop course takes you from the basics of tools and layers to advanced techniques in retouching, digital art, and visual design. Perfect for beginners and aspiring designers alike.",
          content2:
            "The Photoshop course by Urbancode covers everything from understanding Photoshop’s interface and tools to mastering professional workflows used in the design industry. You’ll gain hands-on experience in photo manipulation, color correction, compositing, digital painting, and UI/UX asset creation. By the end, you’ll build a professional design portfolio ready for freelance or studio work."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Getting Started with Photoshop",
            icon: "bi bi-palette",
            defaultOpen: true,
            items: [
              "Introduction to Adobe Photoshop",
              "Understanding the workspace and tools",
              "Working with layers and selections",
              "Using brushes, gradients, and shapes",
              "Saving and exporting projects",
            ],
          },
          {
            id: 2,
            title: "Beginner – Photo Editing Essentials",
            icon: "bi bi-image",
            items: [
              "Cropping, resizing, and straightening images",
              "Adjusting brightness, contrast, and color",
              "Removing backgrounds and unwanted objects",
              "Basic retouching and healing tools",
              "Using adjustment layers and masks",
            ],
          },
          {
            id: 3,
            title: "Intermediate – Creative Graphic Design",
            icon: "bi bi-brush",
            items: [
              "Working with text and typography",
              "Creating posters, banners, and social media ads",
              "Layer styles, blending modes, and smart objects",
              "Using filters and effects creatively",
              "Designing with grids and alignment tools",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Advanced Photo Manipulation",
            icon: "bi bi-layers",
            items: [
              "Compositing multiple images",
              "Lighting and shadow manipulation",
              "Color grading and mood creation",
              "Using Camera Raw for detailed edits",
              "Creative surreal art projects",
            ],
          },
          {
            id: 5,
            title: "Intermediate – Digital Painting & Illustration",
            icon: "bi bi-pencil",
            items: [
              "Using brushes and custom brush settings",
              "Sketching and line art in Photoshop",
              "Coloring techniques and shading",
              "Digital painting workflows",
              "Blending and texture techniques",
            ],
          },
          {
            id: 6,
            title: "Expert – Professional Design Techniques",
            icon: "bi bi-palette-fill",
            items: [
              "Mockup creation and product presentation",
              "UI/UX asset design and export",
              "Logo design and branding elements",
              "Batch processing and automation",
              "Working with Adobe Creative Cloud",
            ],
          },
          {
            id: 7,
            title: "Expert – Portfolio & Final Projects",
            icon: "bi bi-folder2-open",
            items: [
              "Building a professional design portfolio",
              "Real-world design challenges",
              "Freelancing tips and project management",
              "Exporting designs for print and web",
              "Final review and certification",
            ],
          },
        ],
        whatYouLearnData: [
          {
            title: "Master Photoshop Tools & Interface",
            desc: "Understand every essential tool and workflow to create professional designs.",
            icon: "bi bi-tools",
          },
          {
            title: "Professional Photo Editing",
            desc: "Enhance, retouch, and color-correct photos with precision and style.",
            icon: "bi bi-image",
          },
          {
            title: "Creative Graphic Design",
            desc: "Design posters, social media creatives, banners, and digital marketing assets.",
            icon: "bi bi-brush",
          },
          {
            title: "Advanced Photo Manipulation",
            desc: "Blend, composite, and manipulate images to create surreal and realistic artwork.",
            icon: "bi bi-layers",
          },
          {
            title: "Digital Painting & Illustration",
            desc: "Learn sketching, coloring, and digital artistry using Photoshop’s powerful brush tools.",
            icon: "bi bi-pencil",
          },
          {
            title: "Build a Professional Portfolio",
            desc: "Apply your skills in real projects and prepare a portfolio for freelance or job opportunities.",
            icon: "bi bi-folder2-open",
          },
        ]
      }
      ,
      {
        title: "Graphic Design",
        desc: "Unleash your creativity with industry-leading design tools. Learn branding, UI/UX, and visual storytelling from experts. Build a stunning portfolio to launch your creative career.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Graphic_Design.jpg",
        aboutData: {
          topic: "Become a Professional Graphic Designer — From Design Basics to Brand Identity!",
          content1: "Explore the world of visual communication with this hands-on Graphic Design course. Learn how to bring ideas to life through color, typography, composition, and storytelling. Perfect for beginners and aspiring professionals looking to create visually stunning projects.",
          content2: "The Graphic Design course by Urbancode covers everything from the fundamentals of design to mastering tools like Adobe Photoshop, Illustrator, and Figma. You’ll learn to design logos, posters, social media content, and full brand systems. The program also includes advanced topics like UI/UX design, motion graphics, and portfolio creation to make you industry-ready."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Design Fundamentals",
            icon: "bi bi-brush",
            defaultOpen: true,
            items: [
              "Introduction to Graphic Design and Visual Communication",
              "Understanding design principles: balance, contrast, and alignment",
              "Color theory and psychology",
              "Typography basics and font pairing",
              "Composition and layout techniques"
            ]
          },
          {
            id: 2,
            title: "Beginner – Working with Design Tools",
            icon: "bi bi-tools",
            items: [
              "Getting started with Adobe Photoshop",
              "Introduction to Adobe Illustrator",
              "Using Figma for design collaboration",
              "Image editing, retouching, and enhancement",
              "Creating digital illustrations and vector art"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Branding & Identity Design",
            icon: "bi bi-palette",
            items: [
              "Understanding brand strategy and identity systems",
              "Logo design principles and process",
              "Designing brand guidelines and visual assets",
              "Packaging and print design essentials",
              "Creating mockups and presentation templates"
            ]
          },
          {
            id: 4,
            title: "Intermediate – UI/UX Design Essentials",
            icon: "bi bi-phone",
            items: [
              "Introduction to user experience and interface design",
              "Wireframing and prototyping with Figma",
              "Design systems and component libraries",
              "Responsive and mobile-first design",
              "Usability testing and feedback implementation"
            ]
          },
          {
            id: 5,
            title: "Advanced – Motion Graphics & Digital Art",
            icon: "bi bi-film",
            items: [
              "Introduction to motion graphics and animation",
              "Creating animated social media posts",
              "Designing for video and multimedia platforms",
              "Using Adobe After Effects for basic motion design",
              "Storyboarding and visual storytelling techniques"
            ]
          },
          {
            id: 6,
            title: "Advanced – Portfolio Development",
            icon: "bi bi-folder-check",
            items: [
              "Curating your best design work",
              "Creating a professional design portfolio",
              "Preparing case studies and client presentations",
              "Tips for freelancing and personal branding",
              "Final project: Design your brand and portfolio website"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Visual Design Principles",
            desc: "Learn color theory, typography, composition, and layout like a pro.",
            icon: "bi bi-palette"
          },
          {
            title: "Work with Industry Tools",
            desc: "Gain hands-on experience with Photoshop, Illustrator, Figma, and After Effects.",
            icon: "bi bi-tools"
          },
          {
            title: "Build Brand Identities",
            desc: "Design impactful logos, packaging, and brand systems for real-world clients.",
            icon: "bi bi-bag-check"
          },
          {
            title: "Design User Interfaces",
            desc: "Create responsive, modern UI/UX designs with Figma and prototyping tools.",
            icon: "bi bi-phone"
          },
          {
            title: "Create Motion Graphics",
            desc: "Add life to your visuals with animated graphics and storytelling design.",
            icon: "bi bi-film"
          },
          {
            title: "Build a Professional Portfolio",
            desc: "Showcase your creativity through a curated portfolio and personal brand.",
            icon: "bi bi-folder-check"
          }
        ]
      }
      ,
      {
        title: "Canva",
        desc: "Master Canva with hands-on training designed for students and professionals. Learn to design stunning graphics, social media posts, and presentations with ease.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Canva.jpg",
        aboutData: {
          topic: "Master Canva — Design Like a Pro with Ease and Creativity!",
          content1: "Learn how to create professional and visually appealing designs for any purpose. This Canva Mastery course helps you build confidence in visual design — from social media posts to business presentations and branding materials.",
          content2: "The Canva course by Urbancode takes you from beginner to expert in digital design. You'll start by understanding Canva’s interface and tools, then progress to advanced techniques like branding, animation, and marketing design. Through hands-on projects and templates, you’ll learn how to create high-quality visuals quickly and effectively — even with no prior design experience."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Getting Started with Canva",
            icon: "bi bi-brush",
            defaultOpen: true,
            items: [
              "Introduction to Canva and its uses",
              "Creating your Canva account",
              "Exploring Canva interface and dashboard",
              "Understanding templates and layouts",
              "Working with elements, shapes, and icons",
              "Saving and exporting your designs"
            ]
          },
          {
            id: 2,
            title: "Beginner – Designing Basic Projects",
            icon: "bi bi-image",
            items: [
              "Designing social media posts (Instagram, Facebook, LinkedIn)",
              "Creating posters and flyers",
              "Making YouTube thumbnails and channel art",
              "Working with colors, fonts, and alignments",
              "Using Canva grids and frames"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Advanced Design Techniques",
            icon: "bi bi-palette",
            items: [
              "Design composition and layout balance",
              "Using layers and transparency",
              "Image editing and filters",
              "Working with shapes and masks",
              "Creating animated posts and videos"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Branding & Marketing Design",
            icon: "bi bi-megaphone",
            items: [
              "Creating a brand kit (logo, color palette, typography)",
              "Designing business cards and brochures",
              "Creating marketing ads and email banners",
              "Designing presentations and pitch decks",
              "Collaborating and sharing designs with teams"
            ]
          },
          {
            id: 5,
            title: "Expert – Professional Design Projects",
            icon: "bi bi-stars",
            items: [
              "Building complete brand identities",
              "Designing social media campaigns",
              "Creating eBooks, infographics, and reports",
              "Designing for print and digital media",
              "Customizing Canva templates for clients"
            ]
          },
          {
            id: 6,
            title: "Expert – Advanced Tips & Monetization",
            icon: "bi bi-cash-coin",
            items: [
              "Using Canva Pro features effectively",
              "Batch designing for productivity",
              "Creating and selling Canva templates",
              "Freelancing with Canva",
              "Real-world Canva projects and portfolio building"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Canva from Scratch",
            desc: "Understand Canva’s tools, interface, and design workflow — even with zero design background.",
            icon: "bi bi-brush"
          },
          {
            title: "Create Stunning Social Media Designs",
            desc: "Design eye-catching posts, stories, and ads for all social platforms.",
            icon: "bi bi-instagram"
          },
          {
            title: "Build Professional Branding",
            desc: "Develop brand kits, logos, business cards, and marketing materials for clients or businesses.",
            icon: "bi bi-megaphone"
          },
          {
            title: "Design Engaging Presentations",
            desc: "Create business, school, and marketing presentations that stand out visually.",
            icon: "bi bi-slides"
          },
          {
            title: "Animate and Edit Videos",
            desc: "Use Canva’s animation and video editing tools to create dynamic visual content.",
            icon: "bi bi-play-circle"
          },
          {
            title: "Monetize Your Canva Skills",
            desc: "Learn how to sell templates, offer freelance services, and build a design portfolio.",
            icon: "bi bi-cash-coin"
          }
        ]
      }
      ,
    ],
  },

  "Cloud & DevOps": {
    mainCategoryDesc: "Cloud & DevOps Mastery",
    subDesc: "Gain in-depth expertise in Cloud Computing and DevOps practices to streamline development and operations. Learn AWS, Azure, Google Cloud, Docker, Kubernetes, Jenkins, and CI/CD pipelines to design scalable, secure, and automated solutions.",
    subHeading: "Become industry-ready with the skills to drive cloud-native development, deployment automation, and IT infrastructure management.",
    mainImage: "/images/courses/Cloud_DevOps.jpg",

    courses: [
      {
        title: "AWS",
        desc: "Master cloud computing with our AWS Training Program — from fundamentals to advanced services. Gain hands-on skills and industry-ready expertise for top IT careers.",
        rating: 5.0,
        duration: "3 months",
        students: "10,126",
        img: "/images/courses/AWS.jpg",
        aboutData: {
          topic: "Master AWS — From Cloud Fundamentals to Advanced Architecture & DevOps!",
          content1:
            "This AWS course takes you from the basics of cloud computing to advanced infrastructure design, automation, and security. Learn how to build, deploy, and manage scalable cloud applications using Amazon Web Services’ most powerful tools.",
          content2:
            "The AWS course by Urbancode covers a full spectrum of AWS technologies — from EC2, S3, and IAM to Lambda, Kubernetes, and CloudFormation. You’ll gain practical, hands-on experience in cloud architecture, serverless computing, DevOps automation, and cost optimization. By the end of the program, you’ll be ready to take AWS certification exams and excel as a cloud professional."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Cloud Fundamentals",
            icon: "bi bi-cloud",
            defaultOpen: true,
            items: [
              "Introduction to Cloud Computing",
              "Overview of AWS Global Infrastructure",
              "AWS Management Console & CLI",
              "Core AWS Services (EC2, S3, RDS, IAM)",
              "Understanding Regions and Availability Zones",
              "AWS Free Tier and Account Setup"
            ]
          },
          {
            id: 2,
            title: "Beginner – Compute, Storage & Networking",
            icon: "bi bi-hdd-network",
            items: [
              "Elastic Compute Cloud (EC2) and AMIs",
              "Simple Storage Service (S3) Essentials",
              "Elastic Block Store (EBS) and Glacier",
              "Virtual Private Cloud (VPC) and Subnets",
              "Elastic Load Balancing (ELB) and Auto Scaling",
              "DNS Management with Route 53"
            ]
          },
          {
            id: 3,
            title: "Intermediate – AWS Security & Identity",
            icon: "bi bi-shield-lock",
            items: [
              "Identity and Access Management (IAM)",
              "Security Groups and Network ACLs",
              "Key Management Service (KMS)",
              "AWS Organizations and Billing Control",
              "AWS Shared Responsibility Model",
              "Best Practices for Cloud Security"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Databases & Analytics",
            icon: "bi bi-database",
            items: [
              "Amazon RDS and Aurora",
              "DynamoDB (NoSQL Database)",
              "Redshift Data Warehousing",
              "ElastiCache for Performance Optimization",
              "Athena and QuickSight for Data Analytics"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Serverless & Application Services",
            icon: "bi bi-lightning",
            items: [
              "AWS Lambda and Serverless Architecture",
              "API Gateway and EventBridge",
              "Simple Queue Service (SQS) and SNS",
              "Step Functions and CloudWatch Events",
              "Building and Deploying Serverless Applications"
            ]
          },
          {
            id: 6,
            title: "Advanced – Infrastructure as Code & Automation",
            icon: "bi bi-code-slash",
            items: [
              "AWS CloudFormation Templates",
              "AWS CDK (Cloud Development Kit)",
              "Terraform Integration with AWS",
              "Configuration Management with Ansible",
              "Automated Deployments and CI/CD Pipelines"
            ]
          },
          {
            id: 7,
            title: "Advanced – DevOps and Monitoring",
            icon: "bi bi-gear",
            items: [
              "AWS CodeCommit, CodeBuild, CodeDeploy, and CodePipeline",
              "Continuous Integration/Continuous Delivery (CI/CD)",
              "Monitoring with CloudWatch and CloudTrail",
              "Logging and Tracing with AWS X-Ray",
              "Incident Management and Troubleshooting"
            ]
          },
          {
            id: 8,
            title: "Advanced – Cloud Architecture & Best Practices",
            icon: "bi bi-diagram-3",
            items: [
              "Designing High Availability & Fault Tolerance",
              "Scalability and Load Balancing Strategies",
              "Disaster Recovery and Backup Plans",
              "Cost Optimization and AWS Trusted Advisor",
              "Multi-Account and Multi-Region Architecture"
            ]
          },
          {
            id: 9,
            title: "Expert – Machine Learning, Containers & Certification",
            icon: "bi bi-cpu",
            items: [
              "AWS SageMaker for Machine Learning",
              "Containers with ECS and EKS (Kubernetes)",
              "Serverless AI & Automation",
              "AWS Certification Preparation (Solutions Architect, DevOps Engineer)",
              "Capstone Project: Deploying a Scalable Cloud Application"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Understand Cloud Computing & AWS Core Services",
            desc: "Gain a solid foundation in cloud infrastructure, virtualization, and AWS’s core components like EC2, S3, and RDS.",
            icon: "bi bi-cloud"
          },
          {
            title: "Design & Deploy Scalable Cloud Applications",
            desc: "Learn to architect secure, fault-tolerant, and highly available cloud solutions using real-world AWS design principles.",
            icon: "bi bi-diagram-3"
          },
          {
            title: "Master Serverless & DevOps Automation",
            desc: "Implement automation pipelines and serverless systems using Lambda, CloudFormation, and CI/CD tools.",
            icon: "bi bi-lightning"
          },
          {
            title: "Manage Security, Identity, and Compliance",
            desc: "Protect AWS workloads using IAM, KMS, and AWS Organizations for strong security and governance.",
            icon: "bi bi-shield-lock"
          },
          {
            title: "Analyze Data with AWS Analytics Tools",
            desc: "Use Redshift, Athena, and QuickSight to process, visualize, and draw insights from cloud data.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Prepare for AWS Certifications",
            desc: "Get ready for AWS Solutions Architect and DevOps Engineer certifications with guided projects and practice labs.",
            icon: "bi bi-award"
          }
        ]
      }
      ,
      {
        title: "Microsoft Azure",
        desc: "Master Microsoft Azure with hands-on training in cloud computing, DevOps, and AI integration. Unlock global career opportunities with industry-recognized Azure certification.",
        rating: 5.0,
        duration: "3 months",
        students: "9,650",
        img: "/images/courses/Microsoft_Azure.jpg",
        aboutData: {
          topic: "Become a Certified Microsoft Azure Cloud Expert — From Fundamentals to Advanced Cloud Solutions!",
          content1: "Accelerate your cloud career with comprehensive Microsoft Azure training. Learn how to design, deploy, and manage scalable cloud applications, build secure infrastructure, and integrate DevOps and AI capabilities. This course prepares you for Azure certification and real-world enterprise cloud solutions.",
          content2: "The Microsoft Azure course by Urbancode covers cloud computing fundamentals through to expert-level solutions. You’ll explore Azure core services, networking, security, and automation while working hands-on with virtual machines, storage, and app services. The program also includes advanced topics like Azure DevOps, AI services, Kubernetes, and hybrid cloud management, ensuring you’re fully industry-ready for cloud engineering and architecture roles."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Azure Fundamentals",
            icon: "bi bi-cloud",
            defaultOpen: true,
            items: [
              "Introduction to Cloud Computing and Azure",
              "Understanding Azure architecture and regions",
              "Azure Resource Manager (ARM) overview",
              "Core Azure services (Compute, Network, Storage)",
              "Creating and managing Azure resources",
              "Azure Portal, CLI, and PowerShell basics"
            ]
          },
          {
            id: 2,
            title: "Beginner – Identity, Governance & Security",
            icon: "bi bi-shield-lock",
            items: [
              "Azure Active Directory (AAD) fundamentals",
              "Role-Based Access Control (RBAC)",
              "Azure policies and governance",
              "Network security groups and firewalls",
              "Azure Security Center and compliance management"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Azure Networking & Storage",
            icon: "bi bi-diagram-3",
            items: [
              "Virtual Networks (VNets) and subnets",
              "Network peering and load balancing",
              "Azure VPN Gateway and ExpressRoute",
              "Blob, Table, and File storage",
              "Storage redundancy and backup strategies"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Azure Compute & Application Services",
            icon: "bi bi-cpu",
            items: [
              "Deploying and managing Virtual Machines (VMs)",
              "App Services and Function Apps",
              "Azure Container Instances and Kubernetes Service (AKS)",
              "Autoscaling and load distribution",
              "Azure Logic Apps and Event Grid integration"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Databases & Monitoring",
            icon: "bi bi-database",
            items: [
              "Azure SQL Database and Cosmos DB",
              "Connecting apps to databases",
              "Backup and restore strategies",
              "Azure Monitor, Log Analytics, and Application Insights",
              "Implementing alerts and dashboards"
            ]
          },
          {
            id: 6,
            title: "Expert – Azure DevOps & Automation",
            icon: "bi bi-gear",
            items: [
              "Introduction to Azure DevOps Services",
              "CI/CD pipeline setup and management",
              "Infrastructure as Code (IaC) using ARM templates and Bicep",
              "Automating tasks with Azure Automation and PowerShell",
              "Integrating GitHub Actions with Azure"
            ]
          },
          {
            id: 7,
            title: "Expert – Advanced Cloud Architecture",
            icon: "bi bi-diagram-2",
            items: [
              "Designing scalable cloud architectures",
              "Implementing high availability and disaster recovery",
              "Hybrid cloud and multi-cloud solutions",
              "Azure Governance and Cost Optimization",
              "Cloud migration and modernization best practices"
            ]
          },
          {
            id: 8,
            title: "Expert – AI, Data & Security Integration",
            icon: "bi bi-robot",
            items: [
              "Azure Machine Learning and Cognitive Services",
              "AI model deployment in Azure",
              "Big data solutions with Synapse Analytics",
              "Azure Security best practices",
              "Zero Trust architecture implementation"
            ]
          },
          {
            id: 9,
            title: "Expert – Certification & Real-World Projects",
            icon: "bi bi-award",
            items: [
              "Microsoft Certified: Azure Fundamentals (AZ-900) overview",
              "Microsoft Certified: Azure Administrator (AZ-104) preparation",
              "Microsoft Certified: Azure Solutions Architect (AZ-305) insights",
              "Hands-on capstone projects",
              "Portfolio development and job readiness training"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Microsoft Azure Cloud",
            desc: "Understand Azure core services, infrastructure, and architecture for real-world applications.",
            icon: "bi bi-cloud"
          },
          {
            title: "Deploy & Manage Cloud Solutions",
            desc: "Design, deploy, and scale virtual machines, databases, and cloud applications efficiently.",
            icon: "bi bi-gear"
          },
          {
            title: "Automate with Azure DevOps",
            desc: "Build and manage CI/CD pipelines, automate infrastructure, and streamline deployments.",
            icon: "bi bi-code-slash"
          },
          {
            title: "Integrate AI & Machine Learning",
            desc: "Leverage Azure AI and ML services for intelligent cloud-based applications.",
            icon: "bi bi-robot"
          },
          {
            title: "Enhance Cloud Security",
            desc: "Apply best practices in governance, identity, and threat protection across Azure resources.",
            icon: "bi bi-shield-lock"
          },
          {
            title: "Prepare for Azure Certification",
            desc: "Gain knowledge to pass key Microsoft Azure certification exams (AZ-900, AZ-104, AZ-305).",
            icon: "bi bi-award"
          }
        ]
      }
      ,
      {
        title: "Google Cloud Platform",
        desc: "Master Google Cloud Platform with hands-on training in cloud infrastructure, DevOps, and AI services. Build real-world projects and earn career-boosting certifications.",
        rating: 5.0,
        duration: "3 months",
        students: "5,650",
        img: "/images/courses/Google_Cloud_Platform.jpg",
        aboutData: {
          topic: "Master Google Cloud Platform — From Cloud Fundamentals to AI & DevOps Integration!",
          content1: "Take your cloud computing skills to the next level! Learn to design, deploy, and manage scalable applications using Google Cloud services. This course prepares you for professional certifications like GCP Associate Engineer and Professional Cloud Architect.",
          content2: "The Google Cloud Platform (GCP) course by Urbancode provides a deep understanding of Google’s cloud ecosystem. You’ll explore core concepts such as compute, storage, networking, IAM, DevOps automation, and machine learning tools. Through hands-on labs and projects, you’ll master cloud deployment, Kubernetes, CI/CD pipelines, and AI integrations using TensorFlow on GCP."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Cloud Fundamentals",
            icon: "bi bi-cloud",
            defaultOpen: true,
            items: [
              "Introduction to Cloud Computing",
              "Overview of Google Cloud Platform (GCP)",
              "GCP Console and Cloud Shell setup",
              "Understanding projects, billing, and IAM",
              "Regions, zones, and resources overview"
            ]
          },
          {
            id: 2,
            title: "Beginner – Core Services",
            icon: "bi bi-hdd-network",
            items: [
              "Compute Engine basics",
              "Cloud Storage and Databases (Cloud SQL, Firestore, Bigtable)",
              "Networking fundamentals – VPC, subnets, and firewalls",
              "Identity and Access Management (IAM) essentials",
              "Monitoring and logging with Cloud Operations Suite"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Infrastructure & Deployment",
            icon: "bi bi-diagram-3",
            items: [
              "Managing Virtual Machines (VMs)",
              "Load balancing and autoscaling",
              "Containerization with Docker",
              "Kubernetes Engine (GKE) fundamentals",
              "Infrastructure as Code with Terraform"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Data & Analytics",
            icon: "bi bi-bar-chart-line",
            items: [
              "BigQuery for large-scale data analysis",
              "Dataflow and Dataproc pipelines",
              "Pub/Sub for real-time messaging",
              "Building data lakes on GCP",
              "Integrating AI and ML APIs with datasets"
            ]
          },
          {
            id: 5,
            title: "Intermediate – DevOps & Automation",
            icon: "bi bi-gear",
            items: [
              "Cloud Build for CI/CD",
              "Container Registry and Artifact Registry",
              "Monitoring pipelines with Cloud Logging",
              "Deployment Manager and automation scripts",
              "Continuous integration with GitHub Actions"
            ]
          },
          {
            id: 6,
            title: "Expert – Cloud Security & Governance",
            icon: "bi bi-shield-lock",
            items: [
              "Security best practices in GCP",
              "Managing IAM policies and roles",
              "VPC Service Controls and data protection",
              "Compliance and governance frameworks",
              "Auditing and monitoring for security"
            ]
          },
          {
            id: 7,
            title: "Expert – AI & Machine Learning on GCP",
            icon: "bi bi-robot",
            items: [
              "AI Platform and Vertex AI overview",
              "Training ML models on GCP",
              "Deploying TensorFlow models",
              "Natural Language API and Vision API",
              "MLOps and model lifecycle management"
            ]
          },
          {
            id: 8,
            title: "Expert – Real-World Projects & Certification Prep",
            icon: "bi bi-award",
            items: [
              "Deploying scalable web applications",
              "Building serverless apps with Cloud Functions",
              "Integrating APIs with Firebase and Cloud Run",
              "Final capstone project (end-to-end deployment)",
              "GCP Associate and Professional Certification guidance"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master GCP Core Services",
            desc: "Understand Compute, Storage, Networking, and IAM in Google Cloud.",
            icon: "bi bi-hdd-network"
          },
          {
            title: "Deploy Scalable Cloud Applications",
            desc: "Use Kubernetes, Docker, and Terraform for automated deployments.",
            icon: "bi bi-diagram-3"
          },
          {
            title: "Analyze and Process Big Data",
            desc: "Work with BigQuery, Dataflow, and Pub/Sub for large-scale analytics.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Implement DevOps & CI/CD Pipelines",
            desc: "Automate builds and deployments using Cloud Build and GitHub Actions.",
            icon: "bi bi-gear"
          },
          {
            title: "Integrate AI & ML Services",
            desc: "Leverage Vertex AI, TensorFlow, and Google APIs for intelligent solutions.",
            icon: "bi bi-robot"
          },
          {
            title: "Earn GCP Certifications",
            desc: "Prepare for Associate Cloud Engineer and Professional Cloud Architect certifications.",
            icon: "bi bi-award"
          }
        ]
      }
      ,
    ],
  },

  "Data Analytics": {
    mainCategoryDesc: "Turn Data into Decisions",
    subDesc: "Master the art of transforming raw data into actionable insights with SQL, Excel, Power BI, and Tableau. Learn to analyze, visualize, and interpret data to support strategic business decisions. ",
    subHeading: "Build a career as a Data Analyst equipped with skills that empower organizations to grow smarter and faster.",
    mainImage: "/images/courses/DataAnalytics.jpg",

    courses: [
      {
        title: "SAS",
        desc: "Master SAS with hands-on training designed for real-world data analytics and business intelligence applications. Join our program to gain in-demand skills and boost your career in analytics.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/SAS.jpg",
        aboutData: {
          topic: "Master SAS — From Data Management to Advanced Analytics!",
          content1: "Learn SAS from scratch and advance to complex data analytics, reporting, and predictive modeling. This course provides hands-on experience with real-world datasets, ensuring you gain practical skills for business and data-driven decision-making.",
          content2: "The SAS course covers the full spectrum of data analytics, from data manipulation and reporting to advanced analytics techniques like predictive modeling, regression analysis, and business intelligence dashboards. You'll gain expertise in Base SAS, SAS Macros, SQL, and SAS Enterprise Guide, preparing you for analytics roles across industries."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – SAS Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to SAS and its applications",
              "Installing and navigating SAS environment",
              "Data types, variables, and datasets",
              "Basic SAS programming syntax",
              "Reading and writing datasets",
              "Debugging and error handling"
            ]
          },
          {
            id: 2,
            title: "Beginner – Data Management in SAS",
            icon: "bi bi-database",
            items: [
              "Data step basics and data manipulation",
              "Sorting, merging, and concatenating datasets",
              "Creating new variables and functions",
              "Conditional logic and loops in SAS",
              "Working with dates and character variables"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Advanced SAS Programming",
            icon: "bi bi-gear",
            items: [
              "SAS Macros for automation",
              "SQL in SAS (PROC SQL)",
              "Arrays, Do loops, and iterative processing",
              "Advanced data manipulation techniques",
              "Error handling and debugging best practices"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Data Analysis and Reporting",
            icon: "bi bi-bar-chart-line",
            items: [
              "Descriptive statistics and summary reports",
              "PROC MEANS, PROC FREQ, PROC UNIVARIATE",
              "Data visualization using PROC SGPLOT & PROC REPORT",
              "Generating automated reports",
              "Introduction to statistical procedures"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Business Intelligence with SAS",
            icon: "bi bi-window-stack",
            items: [
              "SAS Enterprise Guide basics",
              "Creating dashboards and reports",
              "Exporting results to Excel and PDF",
              "Integrating SAS with databases",
              "Automation of recurring analytics tasks"
            ]
          },
          {
            id: 6,
            title: "Expert – Predictive Analytics & Advanced Modeling",
            icon: "bi bi-robot",
            items: [
              "Regression analysis and forecasting",
              "Time series analysis",
              "Logistic regression and classification",
              "Predictive modeling using SAS procedures",
              "Best practices in analytics projects"
            ]
          },
          {
            id: 7,
            title: "Expert – SAS for Real-World Projects",
            icon: "bi bi-diagram-3",
            items: [
              "Data cleansing and preparation at scale",
              "Advanced reporting and visualization",
              "Implementing business rules and logic",
              "Project work with real-world datasets",
              "SAS certification preparation guidance"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master SAS Programming",
            desc: "Learn data step, PROC SQL, SAS macros, and advanced programming concepts.",
            icon: "bi bi-lightning-charge"
          },
          {
            title: "Data Management & Analytics",
            desc: "Manipulate, clean, and analyze large datasets efficiently.",
            icon: "bi bi-database"
          },
          {
            title: "Reporting & Visualization",
            desc: "Create dashboards, charts, and automated reports for business insights.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Predictive Modeling & Statistics",
            desc: "Apply regression, classification, and time series analysis using SAS.",
            icon: "bi bi-robot"
          },
          {
            title: "Business Intelligence Skills",
            desc: "Build real-world BI projects using SAS Enterprise Guide.",
            icon: "bi bi-window-stack"
          },
          {
            title: "Industry-Ready SAS Expertise",
            desc: "Gain practical skills applicable to analytics, data science, and BI roles.",
            icon: "bi bi-diagram-3"
          }
        ]
      }
      ,
      {
        "title": "R Programming",
        "desc": "Master R Programming with hands-on training designed for data analysis, visualization, and statistical modeling. Gain industry-ready skills to excel in analytics, research, and data-driven decision making.",
        "rating": 5.0,
        "duration": "1 month",
        "students": "10,556",
        "img": "/images/courses/R_Programming.jpg",
        "aboutData": {
          "topic": "Master R Programming — From Fundamentals to Advanced Analytics!",
          "content1": "Learn R Programming from scratch and gain the skills to perform data analysis, statistical modeling, and visualization. This course provides hands-on projects to help you transform raw data into actionable insights.",
          "content2": "The R Programming course by Urbancode covers everything from basic syntax to advanced data analysis techniques. You’ll start with fundamentals like vectors, lists, and data frames, then move on to visualization with ggplot2, statistical modeling, and machine learning integration. By the end, you’ll be capable of applying R for real-world analytics projects, making you ready for roles in data science, research, and analytics."
        },
        "courseContentData": [
          {
            "id": 1,
            "title": "Beginner – R Fundamentals",
            "icon": "bi bi-book",
            "defaultOpen": true,
            "items": [
              "Introduction to R and RStudio",
              "R syntax, variables, and data types",
              "Vectors, lists, and data frames",
              "Basic operations and functions",
              "Control structures: if, for, while",
              "Reading and writing data files"
            ]
          },
          {
            "id": 2,
            "title": "Beginner – Data Manipulation",
            "icon": "bi bi-database",
            "items": [
              "Data cleaning and preprocessing",
              "Using dplyr for data manipulation",
              "Filtering, sorting, and summarizing data",
              "Merging and joining datasets",
              "Handling missing values"
            ]
          },
          {
            "id": 3,
            "title": "Intermediate – Data Visualization",
            "icon": "bi bi-bar-chart-line",
            "items": [
              "Introduction to ggplot2",
              "Creating bar, line, and scatter plots",
              "Customizing plots with themes and labels",
              "Interactive visualizations with plotly",
              "Visualization best practices"
            ]
          },
          {
            "id": 4,
            "title": "Intermediate – Statistical Analysis",
            "icon": "bi bi-calculator",
            "items": [
              "Descriptive statistics",
              "Probability distributions",
              "Hypothesis testing",
              "Correlation and regression analysis",
              "ANOVA and Chi-square tests"
            ]
          },
          {
            "id": 5,
            "title": "Intermediate – Working with Real Data",
            "icon": "bi bi-folder",
            "items": [
              "Exploratory data analysis (EDA)",
              "Time series analysis",
              "Data reshaping with tidyr",
              "Working with large datasets",
              "Project: Analyzing real-world datasets"
            ]
          },
          {
            "id": 6,
            "title": "Expert – Advanced R Programming",
            "icon": "bi bi-gear",
            "items": [
              "Writing custom functions and packages",
              "Functional programming in R",
              "Error handling and debugging",
              "Advanced data structures",
              "Performance optimization"
            ]
          },
          {
            "id": 7,
            "title": "Expert – Machine Learning with R",
            "icon": "bi bi-robot",
            "items": [
              "Introduction to machine learning concepts",
              "Linear and logistic regression",
              "Decision trees and random forests",
              "Clustering and classification",
              "Integrating R with ML libraries"
            ]
          },
          {
            "id": 8,
            "title": "Expert – Reporting and Dashboards",
            "icon": "bi bi-window-stack",
            "items": [
              "Creating reproducible reports with R Markdown",
              "Interactive dashboards with Shiny",
              "Data storytelling techniques",
              "Automating reports and workflows"
            ]
          }
        ],
        "whatYouLearnData": [
          {
            "title": "Master R Programming Concepts",
            "desc": "Understand R syntax, data structures, functions, and advanced programming techniques.",
            "icon": "bi bi-lightning-charge"
          },
          {
            "title": "Perform Data Analysis",
            "desc": "Use R for statistical analysis, hypothesis testing, and real-world data exploration.",
            "icon": "bi bi-bar-chart-line"
          },
          {
            "title": "Create Stunning Visualizations",
            "desc": "Visualize data effectively using ggplot2, plotly, and interactive dashboards.",
            "icon": "bi bi-window-stack"
          },
          {
            "title": "Implement Machine Learning",
            "desc": "Build predictive models using regression, classification, and clustering techniques in R.",
            "icon": "bi bi-robot"
          },
          {
            "title": "Automate Reporting & Dashboards",
            "desc": "Generate dynamic reports and interactive dashboards with R Markdown and Shiny.",
            "icon": "bi bi-gear"
          },
          {
            "title": "Handle Real-World Data Projects",
            "desc": "Apply R programming to practical datasets, clean, analyze, and present actionable insights.",
            "icon": "bi bi-cpu"
          }
        ]
      }
      ,
    ],
  },

  "Data Science": {
    mainCategoryDesc: "Shape the Future with Data",
    subDesc: "Dive deep into Python, R, Machine Learning, AI, and Big Data to master the core of Data Science. Learn to clean, analyze, and model data to solve real-world challenges.",
    subHeading: "Transform your knowledge into career-ready expertise as a Data Scientist, unlocking opportunities in AI, automation, research, and innovation.",
    mainImage: "/images/courses/DataScience.jpg",

    courses: [
      {
        title: "Data Science",
        desc: "Master Data Science with hands-on training in Python, Machine Learning, and AI. Gain industry-ready skills to build a rewarding career in analytics.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Data_Science.jpg",
        aboutData: {
          topic: "Master Data Science — From Python Fundamentals to Machine Learning & AI!",
          content1: "Learn Data Science from scratch! Understand data manipulation, analysis, visualization, and predictive modeling. This course equips you with practical skills to work with real-world datasets and build industry-ready projects.",
          content2: "The Data Science course by Urbancode covers everything from Python programming essentials to advanced Machine Learning and AI. You’ll learn to clean and analyze data, build predictive models, implement AI algorithms, and create interactive dashboards. By the end, you’ll have hands-on experience in data pipelines, machine learning workflows, and deployment strategies."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Python for Data Science",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Python basics and setup for Data Science",
              "Data types, variables, and expressions",
              "Conditional statements, loops, and functions",
              "Modules and libraries (NumPy, Pandas)",
              "Data cleaning and preprocessing basics"
            ]
          },
          {
            id: 2,
            title: "Beginner – Data Handling & Visualization",
            icon: "bi bi-database",
            items: [
              "Working with CSV, Excel, and JSON files",
              "Data exploration with Pandas",
              "Basic visualization with Matplotlib and Seaborn",
              "Understanding distributions and descriptive statistics",
              "Handling missing data and outliers"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Statistical Analysis",
            icon: "bi bi-bar-chart-line",
            items: [
              "Probability concepts and distributions",
              "Hypothesis testing and confidence intervals",
              "Correlation and regression analysis",
              "Feature selection and data transformation",
              "Introduction to experimental design"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Machine Learning Basics",
            icon: "bi bi-gear",
            items: [
              "Supervised learning: Linear and Logistic Regression",
              "Decision trees and Random Forests",
              "Unsupervised learning: Clustering and PCA",
              "Model evaluation metrics",
              "Cross-validation and hyperparameter tuning"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Advanced Machine Learning",
            icon: "bi bi-robot",
            items: [
              "Support Vector Machines and Ensemble methods",
              "Gradient Boosting and XGBoost",
              "Time series analysis and forecasting",
              "Natural Language Processing basics",
              "Recommendation systems fundamentals"
            ]
          },
          {
            id: 6,
            title: "Expert – Deep Learning & AI",
            icon: "bi bi-cpu",
            items: [
              "Neural networks with TensorFlow and PyTorch",
              "Convolutional Neural Networks for image data",
              "Recurrent Neural Networks for sequential data",
              "AI model deployment and optimization",
              "Ethics and interpretability in AI"
            ]
          },
          {
            id: 7,
            title: "Expert – Real-World Data Science Projects",
            icon: "bi bi-window-stack",
            items: [
              "End-to-end project: Data cleaning to model deployment",
              "Interactive dashboards with Plotly and Dash",
              "Working with Big Data tools (Spark, Hadoop basics)",
              "Collaborative workflows using Git and GitHub",
              "Portfolio building for career-ready projects"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Data Analysis",
            desc: "Perform advanced data cleaning, manipulation, and visualization using Python libraries.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Build Machine Learning Models",
            desc: "Develop predictive models using supervised and unsupervised learning techniques.",
            icon: "bi bi-robot"
          },
          {
            title: "Apply Deep Learning & AI",
            desc: "Implement neural networks and AI algorithms for image, text, and sequential data.",
            icon: "bi bi-cpu"
          },
          {
            title: "Handle Real-World Datasets",
            desc: "Work with structured and unstructured data, clean it, and extract insights effectively.",
            icon: "bi bi-database"
          },
          {
            title: "Create Data-Driven Applications",
            desc: "Build dashboards, analytics apps, and end-to-end Data Science solutions.",
            icon: "bi bi-window-stack"
          },
          {
            title: "Become Industry-Ready",
            desc: "Gain hands-on experience with projects, deployment workflows, and Big Data tools.",
            icon: "bi bi-gear"
          }
        ]
      }
      ,
      {
        title: "Python Plus ChatGPT",
        desc: "Master Python and AI with our Python Plus ChatGPT Training Program — hands-on, industry-ready, and future-focused.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Python_Plus_ChatGPT.jpg",
        aboutData: {
          topic: "Master Python & ChatGPT — From Core Programming to AI Integration!",
          content1: "Take your Python skills to the next level and dive into AI with ChatGPT. Learn Python fundamentals, advanced concepts, and AI integration techniques with hands-on exercises and real-world projects.",
          content2: "The Python Plus ChatGPT course by Urbancode covers everything from Python basics to advanced AI integration. You'll explore Python programming, data handling, API usage, and finally leverage ChatGPT and OpenAI APIs to build intelligent applications. By the end, you'll be able to create Python-powered AI solutions and be ready for industry challenges."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Python Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Python and applications",
              "Setting up Python and IDEs",
              "Variables, data types, expressions",
              "Conditional statements and loops",
              "Functions and modules",
              "Error handling and debugging"
            ]
          },
          {
            id: 2,
            title: "Beginner – Data Handling in Python",
            icon: "bi bi-database",
            items: [
              "Lists, tuples, dictionaries, and sets",
              "String formatting and manipulation",
              "Working with files (txt, CSV, JSON)",
              "Introduction to Python libraries (NumPy, Pandas)",
              "Basic data structures and algorithms"
            ]
          },
          {
            id: 3,
            title: "Intermediate – APIs & Automation",
            icon: "bi bi-window",
            items: [
              "Working with REST APIs in Python",
              "Automating tasks with Python scripts",
              "Web scraping with BeautifulSoup",
              "Version control using Git",
              "Building command-line tools"
            ]
          },
          {
            id: 4,
            title: "Intermediate – ChatGPT & OpenAI API",
            icon: "bi bi-robot",
            items: [
              "Introduction to ChatGPT and GPT models",
              "Setting up OpenAI API in Python",
              "Generating text, summaries, and responses",
              "Fine-tuning prompts for better output",
              "Integrating ChatGPT into Python applications"
            ]
          },
          {
            id: 5,
            title: "Intermediate – AI Projects with ChatGPT",
            icon: "bi bi-lightning-charge",
            items: [
              "Chatbots and virtual assistants",
              "Text-based applications (summarizer, translator)",
              "Data analysis with AI insights",
              "Combining Python automation with AI",
              "Deploying AI-powered applications"
            ]
          },
          {
            id: 6,
            title: "Expert – Advanced Python & AI Integration",
            icon: "bi bi-gear",
            items: [
              "Advanced Python concepts (decorators, generators, context managers)",
              "Handling asynchronous API calls",
              "Creating intelligent multi-functional apps",
              "Integrating AI in web applications (Flask/Django)",
              "Best practices for AI application security and performance"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Python Programming",
            desc: "From basics to advanced Python concepts including functions, OOP, and async programming.",
            icon: "bi bi-book"
          },
          {
            title: "Leverage ChatGPT & AI",
            desc: "Understand GPT models and integrate AI into Python projects using OpenAI API.",
            icon: "bi bi-robot"
          },
          {
            title: "Build Real-World Applications",
            desc: "Create chatbots, automation scripts, and AI-powered tools with Python and ChatGPT.",
            icon: "bi bi-gear"
          },
          {
            title: "Work with Data Efficiently",
            desc: "Perform data manipulation, analysis, and visualization with Python libraries.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Deploy AI Solutions",
            desc: "Learn to deploy AI-powered applications in web environments and automate workflows.",
            icon: "bi bi-window-stack"
          },
          {
            title: "Enhance Industry Readiness",
            desc: "Combine Python programming and AI integration skills to be job-ready for modern tech roles.",
            icon: "bi bi-lightning-charge"
          }
        ]
      }
      ,
    ],
  },

  "Database": {
    mainCategoryDesc: "The Power Behind Applications",
    subDesc: "Learn to design, manage, and optimize databases with SQL, MySQL, Oracle, and MongoDB. Gain hands-on expertise in building secure, scalable, and high-performance database solutions.",
    subHeading: "Master the backbone of modern applications and grow your career as a Database Administrator or Developer.",
    mainImage: "/images/courses/Database.jpg",

    courses: [
      {
        "title": "MongoDB Database",
        "desc": "Master MongoDB from basics to advanced with real-time projects and hands-on labs. Learn data modeling, indexing, aggregation, and secure deployment for modern applications.",
        "rating": 5.0,
        "duration": "1 month",
        "students": "10,556",
        "img": "/images/courses/MangoDB_Database.jpg",
        "aboutData": {
          "topic": "Master MongoDB — From Fundamentals to Advanced Database Management!",
          "content1": "Learn MongoDB from the ground up! This course covers everything from basic CRUD operations to advanced aggregation, data modeling, and performance optimization. Build real-world projects and become a MongoDB expert.",
          "content2": "The MongoDB Database course by Urbancode takes you through beginner, intermediate, and expert concepts. Start with installation, basic queries, and schema design. Move to indexing, aggregation framework, replication, sharding, and finally advanced topics like security, backup, and deployment strategies. Hands-on labs and projects ensure you're ready for industry use."
        },
        "courseContentData": [
          {
            "id": 1,
            "title": "Beginner – Introduction to MongoDB",
            "icon": "bi bi-book",
            "defaultOpen": true,
            "items": [
              "Introduction to NoSQL and MongoDB",
              "Installing MongoDB and setting up environment",
              "MongoDB architecture and collections",
              "CRUD operations: Create, Read, Update, Delete",
              "MongoDB Compass GUI overview"
            ]
          },
          {
            "id": 2,
            "title": "Beginner – Data Modeling & Schemas",
            "icon": "bi bi-database",
            "items": [
              "Understanding documents and collections",
              "Designing flexible schemas",
              "Relationships: Embedding vs Referencing",
              "Data types and BSON format",
              "Schema validation"
            ]
          },
          {
            "id": 3,
            "title": "Intermediate – Querying MongoDB",
            "icon": "bi bi-search",
            "items": [
              "Query operators and expressions",
              "Filtering, projection, and sorting",
              "Working with arrays and nested documents",
              "Aggregation framework basics",
              "Indexes for faster queries"
            ]
          },
          {
            "id": 4,
            "title": "Intermediate – Advanced Aggregation & Indexing",
            "icon": "bi bi-gear",
            "items": [
              "Aggregation pipelines and stages",
              "Group, match, project, sort, limit",
              "Index types and performance tuning",
              "Text search and geospatial indexing",
              "Query optimization techniques"
            ]
          },
          {
            "id": 5,
            "title": "Intermediate – Data Management & Security",
            "icon": "bi bi-shield-lock",
            "items": [
              "Replication and high availability",
              "Sharding for horizontal scaling",
              "Backups and restores",
              "User roles and access control",
              "Security best practices"
            ]
          },
          {
            "id": 6,
            "title": "Expert – Advanced MongoDB Features",
            "icon": "bi bi-diagram-3",
            "items": [
              "MongoDB transactions",
              "Change streams for real-time apps",
              "Performance monitoring and profiling",
              "Working with MongoDB Atlas",
              "Integration with Node.js and Python"
            ]
          },
          {
            "id": 7,
            "title": "Expert – Real-Time Projects",
            "icon": "bi bi-window-stack",
            "items": [
              "Building a REST API with MongoDB",
              "Designing e-commerce database",
              "Implementing analytics dashboards",
              "Real-time chat application using MongoDB",
              "Deploying MongoDB in production environments"
            ]
          }
        ],
        "whatYouLearnData": [
          {
            "title": "Master MongoDB Fundamentals",
            "desc": "Learn CRUD operations, schema design, and NoSQL concepts in depth.",
            "icon": "bi bi-lightning-charge"
          },
          {
            "title": "Advanced Data Modeling",
            "desc": "Design efficient schemas, manage relationships, and optimize queries.",
            "icon": "bi bi-database"
          },
          {
            "title": "Aggregation & Indexing",
            "desc": "Perform complex queries, aggregation pipelines, and use indexes for performance.",
            "icon": "bi bi-bar-chart-line"
          },
          {
            "title": "High Availability & Security",
            "desc": "Implement replication, sharding, user access control, and secure deployments.",
            "icon": "bi bi-shield-lock"
          },
          {
            "title": "Real-Time Applications",
            "desc": "Build APIs, dashboards, and chat apps with MongoDB integration.",
            "icon": "bi bi-window-stack"
          },
          {
            "title": "Deployment & Cloud Integration",
            "desc": "Deploy MongoDB on servers and Atlas, monitor performance, and maintain production systems.",
            "icon": "bi bi-diagram-3"
          }
        ]
      }
      ,
      {
        title: "MSSQL Database",
        desc: "Master MSSQL Database with hands-on training in queries, procedures, and optimization. Gain industry-ready skills to manage, secure, and scale enterprise databases.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/MSSQL_Database.jpg",
        aboutData: {
          topic: "Master MSSQL Database — From Fundamentals to Advanced Database Management!",
          content1: "Enhance your database skills with comprehensive MSSQL training! Learn to design, manage, and optimize relational databases, write complex queries, and implement stored procedures. This course combines theory with practical exercises to make you proficient in real-world database management.",
          content2: "The MSSQL Database course by Urbancode covers everything from basic SQL syntax to advanced database administration. You'll start with essential database concepts, move through writing efficient queries, indexing, stored procedures, and triggers. Advanced topics include performance tuning, security, replication, and backup strategies, preparing you for enterprise-level database challenges."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – MSSQL Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to MSSQL and relational databases",
              "Installing and configuring MSSQL Server",
              "Understanding databases, tables, and relationships",
              "Basic SQL queries: SELECT, INSERT, UPDATE, DELETE",
              "Primary keys, foreign keys, and constraints",
              "Data types and schema design fundamentals"
            ]
          },
          {
            id: 2,
            title: "Beginner – Querying Data",
            icon: "bi bi-database",
            items: [
              "Filtering and sorting data",
              "Joins: INNER, LEFT, RIGHT, FULL OUTER",
              "Aggregations and GROUP BY",
              "Subqueries and CTEs",
              "Views and indexes"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Advanced Queries & Functions",
            icon: "bi bi-gear",
            items: [
              "Stored procedures and functions",
              "Triggers and events",
              "Transactions and error handling",
              "Dynamic SQL and parameterized queries",
              "Optimizing queries for performance"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Database Management",
            icon: "bi bi-window-stack",
            items: [
              "User management and roles",
              "Security and permissions",
              "Backup and restore strategies",
              "Replication and high availability concepts",
              "Monitoring and performance tuning"
            ]
          },
          {
            id: 5,
            title: "Expert – Data Modeling & Optimization",
            icon: "bi bi-diagram-3",
            items: [
              "Normalization and denormalization",
              "Indexing strategies and query optimization",
              "Partitioning and data warehousing",
              "Analyzing query execution plans",
              "Advanced performance troubleshooting"
            ]
          },
          {
            id: 6,
            title: "Expert – Integration & Reporting",
            icon: "bi bi-bar-chart-line",
            items: [
              "Integrating MSSQL with applications",
              "Using SSIS for ETL processes",
              "Creating reports with SSRS",
              "Automation with jobs and schedules",
              "Connecting to cloud services and BI tools"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master MSSQL Fundamentals",
            desc: "Learn databases, tables, SQL queries, and relational data concepts.",
            icon: "bi bi-book"
          },
          {
            title: "Write Efficient Queries",
            desc: "Use joins, subqueries, CTEs, and stored procedures for real-world scenarios.",
            icon: "bi bi-gear"
          },
          {
            title: "Manage Databases Securely",
            desc: "Handle users, roles, permissions, and implement secure database practices.",
            icon: "bi bi-shield-lock"
          },
          {
            title: "Optimize Performance",
            desc: "Learn indexing, query tuning, and advanced optimization strategies.",
            icon: "bi bi-speedometer2"
          },
          {
            title: "Backup, Restore, and Scale",
            desc: "Implement backups, replication, high availability, and disaster recovery.",
            icon: "bi bi-cloud-arrow-up"
          },
          {
            title: "Integrate and Automate",
            desc: "Use SSIS, SSRS, and automation for ETL, reporting, and enterprise integration.",
            icon: "bi bi-diagram-3"
          }
        ]
      }
      ,
      {
        title: "MySQL Database",
        desc: "Master MySQL Database from fundamentals to advanced queries with real-time projects and hands-on practice. Build strong SQL skills to manage, analyze, and secure data effectively for modern applications.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/MySQL_Database.jpg",
        aboutData: {
          topic: "Master MySQL — From Basics to Advanced Database Management!",
          content1: "Learn how to design, query, and manage relational databases with MySQL. This course covers everything from simple SELECT statements to advanced query optimization, indexing, and transaction management. Get hands-on experience building real-world database applications.",
          content2: "The MySQL Database course by Urbancode takes you from the fundamentals of database design to advanced techniques used in modern applications. You’ll explore SQL queries, joins, indexing, stored procedures, triggers, and performance optimization. By the end, you’ll be equipped to design, manage, and secure complex databases effectively."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Database Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to databases and MySQL",
              "Setting up MySQL server and Workbench",
              "Understanding tables, rows, and columns",
              "Data types and constraints",
              "Primary keys, foreign keys, and indexes"
            ]
          },
          {
            id: 2,
            title: "Beginner – SQL Basics",
            icon: "bi bi-database",
            items: [
              "SELECT statements and filtering data",
              "WHERE clause, ORDER BY, and LIMIT",
              "INSERT, UPDATE, and DELETE operations",
              "Using functions in SQL",
              "Basic joins: INNER JOIN, LEFT JOIN, RIGHT JOIN"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Advanced SQL Queries",
            icon: "bi bi-gear",
            items: [
              "Advanced joins and subqueries",
              "GROUP BY and HAVING clauses",
              "Aggregate functions and complex queries",
              "UNION, INTERSECT, and CASE statements",
              "Views and temporary tables"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Database Design & Normalization",
            icon: "bi bi-window-stack",
            items: [
              "Entity-Relationship (ER) modeling",
              "Normalization: 1NF, 2NF, 3NF",
              "Designing relational database schemas",
              "Indexes and query performance",
              "Referential integrity and constraints"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Stored Procedures & Functions",
            icon: "bi bi-journal-text",
            items: [
              "Creating stored procedures and functions",
              "Triggers and events",
              "Cursors and error handling",
              "Transactions and rollback mechanisms",
              "Optimizing stored routines for performance"
            ]
          },
          {
            id: 6,
            title: "Expert – Database Security & Backup",
            icon: "bi bi-shield-lock",
            items: [
              "User management and privileges",
              "Authentication and encryption",
              "Backup and restore strategies",
              "Replication and high availability",
              "Securing databases against SQL injection"
            ]
          },
          {
            id: 7,
            title: "Expert – Performance Tuning & Optimization",
            icon: "bi bi-speedometer2",
            items: [
              "Query optimization techniques",
              "Index optimization and query execution plans",
              "Partitioning and caching strategies",
              "Monitoring database performance",
              "Handling large datasets efficiently"
            ]
          },
          {
            id: 8,
            title: "Expert – Real-World Projects",
            icon: "bi bi-window",
            items: [
              "Designing a complete database system",
              "Building a transactional application",
              "Analytics and reporting with SQL",
              "Integrating MySQL with web applications",
              "Final project: End-to-end database application"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master SQL & Queries",
            desc: "Write complex queries, joins, subqueries, and aggregate functions with ease.",
            icon: "bi bi-lightning-charge"
          },
          {
            title: "Design Efficient Databases",
            desc: "Learn normalization, indexing, and ER modeling for scalable database systems.",
            icon: "bi bi-gear"
          },
          {
            title: "Manage & Secure Databases",
            desc: "Implement user roles, privileges, and security measures to protect your data.",
            icon: "bi bi-shield-lock"
          },
          {
            title: "Optimize Database Performance",
            desc: "Tune queries, use indexing strategies, and monitor performance for efficiency.",
            icon: "bi bi-speedometer2"
          },
          {
            title: "Use Stored Procedures & Functions",
            desc: "Automate database tasks and logic with stored procedures, triggers, and functions.",
            icon: "bi bi-journal-text"
          },
          {
            title: "Build Real-World Applications",
            desc: "Integrate MySQL databases with web apps and analytics projects.",
            icon: "bi bi-window-stack"
          }
        ]
      }
      ,
      {
        "title": "PostgreSQL Database",
        "desc": "Master PostgreSQL from basics to advanced with hands-on projects, queries, and performance tuning. Gain industry-ready database skills to design, manage, and secure powerful applications.",
        "rating": 5.0,
        "duration": "1 month",
        "students": "10,556",
        "img": "/images/courses/PostgreSQL_Database.jpg",
        "aboutData": {
          "topic": "Master PostgreSQL — From Fundamentals to Advanced Database Management!",
          "content1": "Learn PostgreSQL, one of the most powerful open-source relational databases. This course covers everything from SQL basics to advanced performance tuning, indexing, and replication. Build real-world database projects and gain practical skills to manage high-performing applications.",
          "content2": "The PostgreSQL Database course by Urbancode offers hands-on training for developers and database administrators. You’ll start with essential SQL queries, database design, and schema creation, then advance to transactions, stored procedures, triggers, and performance optimization. The course concludes with high-level concepts like replication, security best practices, and database clustering, making you fully industry-ready."
        },
        "courseContentData": [
          {
            "id": 1,
            "title": "Beginner – PostgreSQL Fundamentals",
            "icon": "bi bi-book",
            "defaultOpen": true,
            "items": [
              "Introduction to PostgreSQL and its features",
              "Installing and configuring PostgreSQL",
              "Basic SQL commands: SELECT, INSERT, UPDATE, DELETE",
              "Understanding data types and constraints",
              "Creating and managing databases and tables",
              "Basic queries and filtering data"
            ]
          },
          {
            "id": 2,
            "title": "Beginner – Working with Data",
            "icon": "bi bi-database",
            "items": [
              "Advanced SELECT queries and JOINs",
              "Grouping and aggregating data",
              "Subqueries and nested queries",
              "Views and materialized views",
              "Indexes and performance basics"
            ]
          },
          {
            "id": 3,
            "title": "Intermediate – Database Programming",
            "icon": "bi bi-gear",
            "items": [
              "Transactions and ACID properties",
              "Stored procedures and functions",
              "Triggers and event handling",
              "Sequences and auto-incrementing IDs",
              "Error handling in PostgreSQL"
            ]
          },
          {
            "id": 4,
            "title": "Intermediate – Advanced Data Management",
            "icon": "bi bi-bar-chart-line",
            "items": [
              "Partitioning large tables",
              "Advanced indexing techniques",
              "Query optimization and execution plans",
              "Using EXPLAIN and ANALYZE for performance tuning",
              "Data integrity and constraints"
            ]
          },
          {
            "id": 5,
            "title": "Intermediate – Security and Access Control",
            "icon": "bi bi-shield-lock",
            "items": [
              "User roles and privileges",
              "Authentication and authorization",
              "Row-level security",
              "Encrypting data in PostgreSQL",
              "Backup and restore strategies"
            ]
          },
          {
            "id": 6,
            "title": "Expert – Replication and High Availability",
            "icon": "bi bi-cloud-arrow-up",
            "items": [
              "Streaming replication setup",
              "Logical replication",
              "Failover and recovery techniques",
              "Clustering with Patroni or Pgpool-II",
              "Load balancing and high availability"
            ]
          },
          {
            "id": 7,
            "title": "Expert – Advanced Performance Tuning",
            "icon": "bi bi-speedometer2",
            "items": [
              "Query performance monitoring",
              "VACUUM, ANALYZE, and autovacuum tuning",
              "Caching and indexing strategies",
              "Partitioning for large datasets",
              "Best practices for production databases"
            ]
          },
          {
            "id": 8,
            "title": "Expert – PostgreSQL for Developers",
            "icon": "bi bi-code-slash",
            "items": [
              "Using PostgreSQL with Python, Node.js, and Java",
              "JSON, JSONB, and NoSQL features",
              "Full-text search implementation",
              "Advanced data types and extensions",
              "Integrating PostgreSQL in web applications"
            ]
          }
        ],
        "whatYouLearnData": [
          {
            "title": "Master PostgreSQL Fundamentals",
            "desc": "Understand database design, SQL queries, and schema management.",
            "icon": "bi bi-book"
          },
          {
            "title": "Work with Advanced Queries",
            "desc": "Perform joins, subqueries, aggregations, and complex filtering.",
            "icon": "bi bi-database"
          },
          {
            "title": "Develop Database Programs",
            "desc": "Use stored procedures, triggers, and transactions effectively.",
            "icon": "bi bi-gear"
          },
          {
            "title": "Optimize and Secure Databases",
            "desc": "Learn performance tuning, indexing, and security best practices.",
            "icon": "bi bi-shield-lock"
          },
          {
            "title": "Ensure High Availability",
            "desc": "Set up replication, clustering, and backup strategies.",
            "icon": "bi bi-cloud-arrow-up"
          },
          {
            "title": "Integrate with Applications",
            "desc": "Use PostgreSQL with programming languages and web applications.",
            "icon": "bi bi-code-slash"
          }
        ]
      }
      ,
    ],
  },

  "Data Visualization": {
    mainCategoryDesc: "Data Visualization Expertise",
    subDesc: "Transform complex datasets into impactful visuals with Tableau, Power BI, and Python visualization tools. Learn to design dashboards, graphs, and reports that drive clarity and business intelligence.",
    subHeading: "Build a career in Data Visualization by combining analytical skills with storytelling that inspires action.",
    mainImage: "/images/courses/Data_Visualization.jpg",

    courses: [
      {
        title: "Power BI",
        desc: "Master data visualization and business intelligence with our hands-on Power BI training. Learn to create interactive dashboards, analyze data, and drive smarter decisions.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Power_BI.jpg",
        aboutData: {
          topic: "Master Power BI — Transform Data into Actionable Insights!",
          content1: "Learn how to turn raw data into meaningful insights with Power BI. This course takes you from beginner to expert in data visualization, dashboard creation, and business intelligence, using hands-on exercises and real-world datasets.",
          content2: "The Power BI course by Urbancode covers everything from basic Power BI concepts to advanced analytics. Start with Power Query, data modeling, and DAX functions, then move to interactive dashboards, custom visuals, and reporting. Gain industry-ready skills in Power BI Service, Power BI Desktop, and Power BI Mobile, enabling you to drive smarter business decisions."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Introduction to Power BI",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Overview of Power BI and its ecosystem",
              "Installing and setting up Power BI Desktop",
              "Understanding data sources and connectors",
              "Power BI Service and Power BI Mobile overview",
              "Navigating the interface and basic features"
            ]
          },
          {
            id: 2,
            title: "Beginner – Data Loading & Transformation",
            icon: "bi bi-database",
            items: [
              "Connecting to Excel, CSV, SQL, and cloud data sources",
              "Introduction to Power Query Editor",
              "Data cleaning and transformation techniques",
              "Merging, appending, and shaping data",
              "Handling errors and missing data"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Data Modeling & DAX",
            icon: "bi bi-gear",
            items: [
              "Introduction to data modeling concepts",
              "Creating relationships between tables",
              "Understanding DAX (Data Analysis Expressions)",
              "Calculated columns, measures, and tables",
              "Time intelligence functions"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Visualizations & Reports",
            icon: "bi bi-bar-chart-line",
            items: [
              "Creating charts, tables, and maps",
              "Using slicers and filters for interactive dashboards",
              "Custom visuals and themes",
              "Report formatting and best practices",
              "Bookmarks, buttons, and navigation"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Power BI Service & Collaboration",
            icon: "bi bi-cloud",
            items: [
              "Publishing reports to Power BI Service",
              "Creating dashboards in the cloud",
              "Sharing and collaboration with teams",
              "Row-level security (RLS)",
              "Power BI apps and workspaces"
            ]
          },
          {
            id: 6,
            title: "Expert – Advanced Analytics & AI",
            icon: "bi bi-robot",
            items: [
              "Using advanced DAX for complex calculations",
              "Integration with Python and R for analytics",
              "AI visuals and cognitive services",
              "Predictive analytics and forecasting",
              "Custom connectors and API integration"
            ]
          },
          {
            id: 7,
            title: "Expert – Real-World Power BI Projects",
            icon: "bi bi-diagram-3",
            items: [
              "Building interactive dashboards from scratch",
              "End-to-end business reporting solutions",
              "Optimizing performance for large datasets",
              "Designing executive-level reports",
              "Deploying solutions for enterprise environments"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Power BI Fundamentals",
            desc: "Learn to connect, transform, and model data efficiently.",
            icon: "bi bi-lightning-charge"
          },
          {
            title: "Create Interactive Dashboards",
            desc: "Build reports with charts, tables, maps, slicers, and custom visuals.",
            icon: "bi bi-gear"
          },
          {
            title: "Perform Advanced Analytics",
            desc: "Use DAX, AI visuals, forecasting, and predictive analytics.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Collaborate & Share Insights",
            desc: "Publish dashboards, set up workspaces, and manage access in Power BI Service.",
            icon: "bi bi-window-stack"
          },
          {
            title: "Work with Real-World Projects",
            desc: "Create end-to-end reporting solutions and optimize performance for enterprise datasets.",
            icon: "bi bi-cpu"
          },
          {
            title: "Gain Business Intelligence Skills",
            desc: "Turn data into actionable insights to drive smarter business decisions.",
            icon: "bi bi-diagram-3"
          }
        ]
      }
      ,

      {
        title: "Tableau",
        desc: "Master the art of data visualization with Tableau and turn raw data into powerful business insights. Learn hands-on dashboards, reports, and analytics to boost your career in data-driven decision-making.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Tableau.jpg",
        aboutData: {
          topic: "Master Tableau — From Basic Charts to Advanced Dashboards & Analytics!",
          content1: "Transform your data into meaningful insights! Learn Tableau from scratch with hands-on exercises, interactive dashboards, and real-world data projects. This course helps you become a Tableau expert, capable of delivering actionable business intelligence.",
          content2: "The Tableau course covers everything from fundamental data visualization principles to complex dashboards and advanced analytics. You’ll learn to connect to multiple data sources, create calculated fields, design interactive dashboards, and use advanced features like Level of Detail (LOD) expressions and Tableau Prep for data cleaning. By the end, you'll be ready to make data-driven decisions and impress stakeholders."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Tableau Basics",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Tableau and its interface",
              "Connecting Tableau to different data sources",
              "Understanding dimensions, measures, and data types",
              "Creating basic charts: bar, line, pie, scatter",
              "Sorting, filtering, and grouping data"
            ]
          },
          {
            id: 2,
            title: "Beginner – Data Handling & Calculations",
            icon: "bi bi-database",
            items: [
              "Working with calculated fields",
              "Using basic functions and aggregations",
              "Understanding date and string calculations",
              "Data blending and joins",
              "Introduction to Tableau Prep"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Visual Analytics",
            icon: "bi bi-bar-chart-line",
            items: [
              "Building interactive dashboards",
              "Using parameters for dynamic visualizations",
              "Advanced chart types: heat maps, bullet charts, treemaps",
              "Storytelling with Tableau",
              "Design best practices for dashboards"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Advanced Analytics",
            icon: "bi bi-gear",
            items: [
              "Level of Detail (LOD) expressions",
              "Table calculations",
              "Trend lines, forecasting, and clustering",
              "Advanced filtering and sets",
              "Conditional formatting and dynamic visuals"
            ]
          },
          {
            id: 5,
            title: "Expert – Dashboard Optimization & Sharing",
            icon: "bi bi-window-stack",
            items: [
              "Dashboard performance optimization",
              "Publishing dashboards to Tableau Server & Online",
              "Embedding visualizations into web applications",
              "User interactivity and action filters",
              "Security and permissions management"
            ]
          },
          {
            id: 6,
            title: "Expert – Real-World Projects",
            icon: "bi bi-diagram-3",
            items: [
              "Sales and marketing analytics dashboard",
              "Financial reporting and KPIs",
              "Customer behavior analysis",
              "Executive-level interactive dashboards",
              "Capstone project: end-to-end Tableau solution"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Tableau Basics",
            desc: "Learn to navigate Tableau, connect data sources, and create foundational charts.",
            icon: "bi bi-lightning-charge"
          },
          {
            title: "Handle Data Efficiently",
            desc: "Use calculations, joins, data blending, and Tableau Prep for clean analysis.",
            icon: "bi bi-database"
          },
          {
            title: "Build Interactive Dashboards",
            desc: "Design professional dashboards with filters, actions, and dynamic elements.",
            icon: "bi bi-window-stack"
          },
          {
            title: "Perform Advanced Analytics",
            desc: "Apply LOD expressions, table calculations, forecasting, and clustering techniques.",
            icon: "bi bi-gear"
          },
          {
            title: "Optimize & Share Dashboards",
            desc: "Publish, embed, and manage dashboards with performance and security best practices.",
            icon: "bi bi-diagram-3"
          },
          {
            title: "Deliver Real-World Insights",
            desc: "Work on projects across sales, marketing, finance, and executive reporting.",
            icon: "bi bi-bar-chart-line"
          }
        ]
      }
      ,
      {
        title: "Power Apps",
        desc: "Master Microsoft Power Apps to design custom business apps without coding. Learn hands-on to automate processes, boost productivity, and transform workflows.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Power_Apps.jpg",
        aboutData: {
          topic: "Master Microsoft Power Apps — Build No-Code Apps for Business Efficiency!",
          content1: "Learn to create powerful business applications without writing a single line of code! This Power Apps course covers canvas apps, model-driven apps, and integration with Microsoft 365 and Dataverse, enabling you to automate workflows and streamline business operations.",
          content2: "The Power Apps course by Urbancode guides you from basic app design to advanced app deployment. You'll gain hands-on experience building apps, connecting to data sources, using Power Automate for automation, and implementing best practices for enterprise solutions."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Introduction to Power Apps",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Overview of Power Platform and Power Apps",
              "Understanding canvas vs model-driven apps",
              "Setting up your Power Apps environment",
              "Navigating Power Apps Studio",
              "App templates and examples"
            ]
          },
          {
            id: 2,
            title: "Beginner – Building Canvas Apps",
            icon: "bi bi-window",
            items: [
              "Creating a canvas app from scratch",
              "Working with screens and controls",
              "Data connections with Excel, SharePoint, and Dataverse",
              "Using formulas and expressions",
              "App testing and debugging"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Model-Driven Apps",
            icon: "bi bi-diagram-3",
            items: [
              "Introduction to Dataverse and entities",
              "Creating model-driven apps",
              "Working with forms, views, and dashboards",
              "Implementing business rules and workflows",
              "Security roles and permissions"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Power Automate Integration",
            icon: "bi bi-flow-chart",
            items: [
              "Automating processes with Power Automate",
              "Creating flows triggered from apps",
              "Integrating approvals and notifications",
              "Connecting Power Apps to external services",
              "Error handling and monitoring flows"
            ]
          },
          {
            id: 5,
            title: "Expert – Advanced App Development",
            icon: "bi bi-gear",
            items: [
              "Advanced formulas and conditional logic",
              "Custom components and reusable controls",
              "App performance optimization",
              "Embedding Power BI visuals in apps",
              "Packaging and deploying apps in enterprise environments"
            ]
          },
          {
            id: 6,
            title: "Expert – Governance & Best Practices",
            icon: "bi bi-shield-lock",
            items: [
              "Managing environments and data policies",
              "Version control and app lifecycle management",
              "Compliance and security considerations",
              "Collaboration with teams",
              "Tips for building maintainable and scalable apps"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Build No-Code Business Apps",
            desc: "Design canvas and model-driven apps without coding using Power Apps Studio.",
            icon: "bi bi-laptop"
          },
          {
            title: "Automate Workflows",
            desc: "Use Power Automate to streamline approvals, notifications, and business processes.",
            icon: "bi bi-flow-chart"
          },
          {
            title: "Connect to Data Sources",
            desc: "Integrate apps with Dataverse, SharePoint, Excel, and other Microsoft 365 services.",
            icon: "bi bi-database"
          },
          {
            title: "Create Enterprise-Ready Solutions",
            desc: "Implement security, compliance, and performance best practices in apps.",
            icon: "bi bi-shield-lock"
          },
          {
            title: "Analyze and Visualize Data",
            desc: "Embed Power BI reports into apps for advanced insights and dashboards.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Collaborate and Scale",
            desc: "Manage environments, team collaboration, and app lifecycle effectively.",
            icon: "bi bi-people"
          }
        ]
      }
      ,
      {
        title: "Alteryx",
        desc: "Master data preparation, blending, and advanced analytics with our hands-on Alteryx training program. Empower your career by learning automation-driven insights for real-world business success.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Alteryx.jpg",
        aboutData: {
          topic: "Master Alteryx — From Data Preparation to Advanced Analytics!",
          content1: "Enhance your data analytics skills with Alteryx! Learn to prepare, blend, and analyze data efficiently. This course provides hands-on experience with real-world datasets and automation-driven insights.",
          content2: "The Alteryx course covers all essential topics, from basic workflow creation to advanced predictive analytics. You'll learn how to automate processes, integrate with databases and APIs, and generate actionable business insights using Alteryx Designer, Alteryx Server, and Alteryx Intelligence Suite."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Introduction to Alteryx",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Overview of Alteryx and its applications",
              "Installing and navigating Alteryx Designer",
              "Understanding the interface and workflow basics",
              "Working with tools and tool categories",
              "Basic data input and output operations"
            ]
          },
          {
            id: 2,
            title: "Beginner – Data Preparation & Blending",
            icon: "bi bi-database",
            items: [
              "Connecting to multiple data sources",
              "Data cleansing and preparation techniques",
              "Filtering, sorting, and selecting data",
              "Joining and unioning datasets",
              "Introduction to macros for automation"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Transforming Data",
            icon: "bi bi-bar-chart-line",
            items: [
              "Using formulas and expressions",
              "Aggregating and summarizing data",
              "Working with dates, strings, and numbers",
              "Spatial data processing",
              "Error handling and workflow validation"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Reporting & Analytics",
            icon: "bi bi-window-stack",
            items: [
              "Generating reports and dashboards",
              "Visualization techniques",
              "Introduction to predictive analytics tools",
              "Using R and Python integration within Alteryx",
              "Workflow optimization and performance tuning"
            ]
          },
          {
            id: 5,
            title: "Expert – Advanced Analytics & Automation",
            icon: "bi bi-gear",
            items: [
              "Predictive modeling and machine learning workflows",
              "Spatial and location analytics",
              "Building and deploying analytic apps",
              "Scheduling workflows with Alteryx Server",
              "Advanced macros and automation techniques"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Data Preparation",
            desc: "Clean, transform, and blend data from multiple sources efficiently.",
            icon: "bi bi-lightning-charge"
          },
          {
            title: "Develop Automated Workflows",
            desc: "Build repeatable workflows to streamline business processes.",
            icon: "bi bi-gear"
          },
          {
            title: "Perform Advanced Analytics",
            desc: "Apply predictive and spatial analytics using Alteryx tools.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Integrate with R & Python",
            desc: "Enhance analytics capabilities by integrating scripting languages.",
            icon: "bi bi-window-stack"
          },
          {
            title: "Generate Reports & Dashboards",
            desc: "Create interactive reports and dashboards for data visualization.",
            icon: "bi bi-cpu"
          },
          {
            title: "Deploy & Automate Workflows",
            desc: "Schedule and deploy workflows using Alteryx Server for business automation.",
            icon: "bi bi-diagram-3"
          }
        ]
      }
      ,

    ],
  },

  "Software Testing": {
    mainCategoryDesc: "Software Testing Mastery",
    subDesc: "Master the skills of Manual Testing, Automation Testing, Selenium, Playwright, and TestNG to ensure flawless software delivery. Learn to design test cases, execute automation scripts, and optimize performance.",
    subHeading: "Become an industry-ready Software Tester capable of delivering high-quality, reliable applications that meet global standards.",
    mainImage: "/images/courses/Software_Testing.jpg",

    courses: [
      {
        "title": "Selenium with Python",
        "desc": "Learn Selenium with Python to master automation testing – from basics to advanced frameworks, with real-time hands-on projects.",
        "rating": 5.0,
        "duration": "1 month",
        "students": "10,556",
        "img": "/images/courses/Selenium_with_Python.jpg",
        "aboutData": {
          "topic": "Master Selenium Automation — From Basics to Advanced Python Frameworks!",
          "content1": "Become an expert in automation testing using Selenium with Python! Learn to create robust test scripts, automate web applications, and integrate frameworks for real-world testing scenarios. This course helps you move from beginner to automation expert with hands-on exercises and live projects.",
          "content2": "The Selenium with Python course covers everything from the fundamentals of Selenium and Python to advanced automation frameworks. Starting with Python basics and Selenium setup, you'll progress through WebDriver, locators, waits, and browser interactions. Advanced topics include Page Object Model, TestNG/PyTest integration, and CI/CD pipeline implementation for automated testing. By the end, you'll be ready to work as a professional automation tester."
        },
        "courseContentData": [
          {
            "id": 1,
            "title": "Beginner – Python & Selenium Fundamentals",
            "icon": "bi bi-book",
            "defaultOpen": true,
            "items": [
              "Introduction to Python for automation",
              "Setting up Selenium with Python",
              "Overview of WebDriver and browser automation",
              "Understanding locators: ID, Name, Class, XPath, CSS",
              "Navigating web pages and handling elements",
              "Basic scripting and debugging"
            ]
          },
          {
            "id": 2,
            "title": "Beginner – Handling Web Elements",
            "icon": "bi bi-mouse",
            "items": [
              "Working with text boxes, buttons, and links",
              "Dropdowns, checkboxes, and radio buttons",
              "Handling alerts, frames, and windows",
              "Mouse actions: hover, drag-and-drop",
              "Keyboard interactions"
            ]
          },
          {
            "id": 3,
            "title": "Intermediate – Selenium WebDriver Advanced",
            "icon": "bi bi-gear",
            "items": [
              "Explicit and implicit waits",
              "Handling dynamic elements",
              "Working with JavaScriptExecutor",
              "Capturing screenshots and logs",
              "Managing cookies and sessions"
            ]
          },
          {
            "id": 4,
            "title": "Intermediate – Test Automation Frameworks",
            "icon": "bi bi-window-stack",
            "items": [
              "Introduction to PyTest and unittest frameworks",
              "Creating reusable test scripts",
              "Parameterization and data-driven testing",
              "Page Object Model (POM) implementation",
              "Logging and reporting with Allure or HTML reports"
            ]
          },
          {
            "id": 5,
            "title": "Advanced – CI/CD & Automation Integration",
            "icon": "bi bi-diagram-3",
            "items": [
              "Integrating Selenium tests with Jenkins",
              "Running automated tests in parallel",
              "Cross-browser testing using Selenium Grid",
              "Docker and cloud-based test execution",
              "Best practices for scalable automation frameworks"
            ]
          },
          {
            "id": 6,
            "title": "Expert – Real-Time Project Implementation",
            "icon": "bi bi-robot",
            "items": [
              "Building an end-to-end automation project",
              "Automating a web application workflow",
              "Integrating API testing with Selenium scripts",
              "Generating test reports and dashboards",
              "Industry-level project deployment and CI/CD"
            ]
          }
        ],
        "whatYouLearnData": [
          {
            "title": "Master Selenium Basics",
            "desc": "Understand WebDriver, locators, waits, and browser interactions.",
            "icon": "bi bi-lightning-charge"
          },
          {
            "title": "Develop Automation Scripts",
            "desc": "Write robust Python scripts for automated web testing.",
            "icon": "bi bi-gear"
          },
          {
            "title": "Build Automation Frameworks",
            "desc": "Implement Page Object Model, PyTest, and unittest frameworks.",
            "icon": "bi bi-window-stack"
          },
          {
            "title": "Integrate CI/CD",
            "desc": "Run tests on Jenkins, Docker, Selenium Grid, and cloud platforms.",
            "icon": "bi bi-diagram-3"
          },
          {
            "title": "Work on Real Projects",
            "desc": "Automate web applications end-to-end and generate reports.",
            "icon": "bi bi-robot"
          },
          {
            "title": "Cross-Browser & Parallel Testing",
            "desc": "Ensure test reliability with Selenium Grid and multiple browsers.",
            "icon": "bi bi-cpu"
          }
        ]
      }
      ,

    ],
  },

  "Cyber Security": {
    mainCategoryDesc: "Defend the Digital World",
    subDesc: "Protect organizations from digital threats by mastering Network Security, Ethical Hacking, Cryptography, Firewalls, and Penetration Testing. Learn to secure systems, applications, and data against evolving cyber risks.",
    subHeading: "Build a rewarding career as a Cybersecurity Specialist, safeguarding the future of the digital-first economy.",
    mainImage: "/images/courses/Cyber_Security.jpg",

    courses: [
      {
        title: "Cybersecurity",
        desc: "Empower your future with our Cybersecurity Training Program—master ethical hacking, network defense, and risk management.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Cybersecurity.jpg",
        aboutData: {
          topic: "Master Cybersecurity — From Fundamentals to Ethical Hacking & Network Defense!",
          content1: "Learn to protect networks, systems, and data from cyber threats! This course covers ethical hacking, penetration testing, security protocols, and incident response with hands-on labs and projects.",
          content2: "Our Cybersecurity course by Urbancode takes you from the basics of networking and security principles to advanced techniques in ethical hacking, threat analysis, and risk management. You’ll gain real-world skills in malware analysis, vulnerability assessment, and security tools, making you industry-ready."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Cybersecurity Fundamentals",
            icon: "bi bi-shield",
            defaultOpen: true,
            items: [
              "Introduction to Cybersecurity and its importance",
              "Types of cyber threats and attacks",
              "Basic networking concepts",
              "Security terminology and principles",
              "Setting up a secure lab environment"
            ]
          },
          {
            id: 2,
            title: "Beginner – Network Security",
            icon: "bi bi-wifi",
            items: [
              "Understanding firewalls and VPNs",
              "Network protocols and services",
              "Intrusion detection and prevention systems (IDS/IPS)",
              "Packet sniffing and analysis",
              "Securing routers and switches"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Ethical Hacking & Penetration Testing",
            icon: "bi bi-hammer",
            items: [
              "Reconnaissance and footprinting",
              "Scanning and enumeration",
              "Vulnerability assessment tools",
              "Exploitation techniques",
              "Reporting and documentation"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Web Application Security",
            icon: "bi bi-window",
            items: [
              "OWASP Top 10 vulnerabilities",
              "SQL injection and XSS attacks",
              "Cross-Site Request Forgery (CSRF)",
              "Secure coding practices",
              "Web application penetration testing"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Malware Analysis & Digital Forensics",
            icon: "bi bi-bug",
            items: [
              "Introduction to malware types and behaviors",
              "Static and dynamic malware analysis",
              "Forensic investigation techniques",
              "File and memory forensics",
              "Incident response process"
            ]
          },
          {
            id: 6,
            title: "Expert – Advanced Threats & Defense",
            icon: "bi bi-shield-lock",
            items: [
              "Advanced persistent threats (APT)",
              "Network and endpoint defense strategies",
              "Threat hunting and intelligence",
              "Penetration testing automation",
              "Security monitoring and SIEM tools"
            ]
          },
          {
            id: 7,
            title: "Expert – Cybersecurity Governance & Risk Management",
            icon: "bi bi-file-earmark-lock",
            items: [
              "Security policies and compliance standards",
              "Risk assessment and mitigation strategies",
              "Business continuity planning",
              "Disaster recovery planning",
              "Ethics and legal considerations in cybersecurity"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Cybersecurity Concepts",
            desc: "Understand core security principles, protocols, and threat landscapes.",
            icon: "bi bi-shield"
          },
          {
            title: "Ethical Hacking & Penetration Testing",
            desc: "Perform vulnerability assessments and penetration tests ethically.",
            icon: "bi bi-hammer"
          },
          {
            title: "Network & System Defense",
            desc: "Secure networks, servers, and endpoints against attacks.",
            icon: "bi bi-wifi"
          },
          {
            title: "Web Application Security",
            desc: "Identify and mitigate vulnerabilities in web applications.",
            icon: "bi bi-window"
          },
          {
            title: "Malware Analysis & Forensics",
            desc: "Analyze malicious software and investigate cyber incidents.",
            icon: "bi bi-bug"
          },
          {
            title: "Governance, Risk & Compliance",
            desc: "Implement security policies, risk management, and compliance standards.",
            icon: "bi bi-file-earmark-lock"
          }
        ]
      }
      ,
      {
        "title": "Ethical Hacking",
        "desc": "Master the art of ethical hacking with hands-on training in cybersecurity tools and real-world simulations.",
        "rating": 5.0,
        "duration": "1 month",
        "students": "10,556",
        "img": "/images/courses/Ethical_Hacking.jpg",
        "aboutData": {
          "topic": "Become a Certified Ethical Hacker — From Fundamentals to Red Team Operations!",
          "content1": "Learn practical penetration testing, vulnerability assessment, and defensive techniques. This course blends theory with hands-on labs using real-world scenarios so you can think like an attacker and protect like a defender.",
          "content2": "The Ethical Hacking course covers core cybersecurity concepts, reconnaissance, scanning, exploitation, post-exploitation, web and network penetration testing, wireless attacks, social engineering, malware basics, and reporting. You’ll practice with industry tools (Kali Linux, Nmap, Metasploit, Burp Suite, Wireshark) and finish with a full penetration test and professional security report."
        },
        "courseContentData": [
          {
            "id": 1,
            "title": "Beginner – Cybersecurity Fundamentals",
            "icon": "bi bi-shield-lock",
            "defaultOpen": true,
            "items": [
              "Introduction to ethical hacking and threat landscape",
              "Legal, compliance, and ethical considerations",
              "Security concepts: CIA triad, risk, vulnerabilities",
              "Setting up a lab (Kali Linux, virtual machines)",
              "Basic Linux commands and scripting for pentesters"
            ]
          },
          {
            "id": 2,
            "title": "Beginner – Reconnaissance & Information Gathering",
            "icon": "bi bi-people",
            "items": [
              "Passive vs active reconnaissance",
              "OSINT techniques and tools",
              "Domain, subdomain, and infrastructure discovery",
              "Email harvesting and footprinting",
              "Mapping attack surface"
            ]
          },
          {
            "id": 3,
            "title": "Beginner – Scanning & Enumeration",
            "icon": "bi bi-search",
            "items": [
              "Port scanning with Nmap",
              "Service and version detection",
              "Vulnerability scanning basics",
              "Banner grabbing and fingerprinting",
              "Enumerating hosts, users, and shares"
            ]
          },
          {
            "id": 4,
            "title": "Intermediate – Network & System Exploitation",
            "icon": "bi bi-diagram-3",
            "items": [
              "Exploitation fundamentals and exploit development overview",
              "Using Metasploit for exploits and payloads",
              "Privilege escalation techniques",
              "Post-exploitation: persistence and cleanup",
              "Hands-on Windows and Linux exploitation labs"
            ]
          },
          {
            "id": 5,
            "title": "Intermediate – Web Application Hacking",
            "icon": "bi bi-window-stack",
            "items": [
              "Web architecture and attack surface",
              "Common vulnerabilities: XSS, SQLi, CSRF, SSRF",
              "Burp Suite workflows and manual testing",
              "API security testing and JSON/XML attacks",
              "Secure coding countermeasures and remediation"
            ]
          },
          {
            "id": 6,
            "title": "Intermediate – Wireless & Network Attacks",
            "icon": "bi bi-wifi",
            "items": [
              "Wi‑Fi fundamentals and protocols",
              "Attacking WPA/WPA2–PSK and captive portals",
              "Bluetooth and IoT device enumeration",
              "ARP spoofing, MITM, and DNS attacks",
              "Network segmentation and defensive strategies"
            ]
          },
          {
            "id": 7,
            "title": "Expert – Malware, Reverse Engineering & Forensics",
            "icon": "bi bi-robot",
            "items": [
              "Malware types, delivery vectors, and detection evasion",
              "Static and dynamic analysis basics",
              "Intro to reverse engineering (IDA/Ghidra concepts)",
              "Memory forensics and evidence collection",
              "Anti-forensics and defensive countermeasures"
            ]
          },
          {
            "id": 8,
            "title": "Expert – Red Teaming & Advanced Attack Techniques",
            "icon": "bi bi-person-check",
            "items": [
              "Red team vs penetration test methodologies",
              "Adversary emulation and attack chains",
              "Command and control (C2) concepts",
              "Social engineering and phishing simulations",
              "Operational planning and safe rules of engagement"
            ]
          },
          {
            "id": 9,
            "title": "Expert – Reporting, Remediation & Blue Team Collaboration",
            "icon": "bi bi-file-earmark-text",
            "items": [
              "Writing professional penetration test reports",
              "Risk ranking and actionable remediation steps",
              "Communicating with developers and security teams",
              "Hardening systems and patch management",
              "Preparing for certifications and continuous learning"
            ]
          }
        ],
        "whatYouLearnData": [
          {
            "title": "Understand Offensive & Defensive Security",
            "desc": "Think like an attacker while learning how to design practical defenses.",
            "icon": "bi bi-lightning-charge"
          },
          {
            "title": "Master Industry Tools",
            "desc": "Gain hands-on experience with Kali Linux, Nmap, Metasploit, Burp Suite, Wireshark, and forensic toolkits.",
            "icon": "bi bi-gear"
          },
          {
            "title": "Perform Full Penetration Tests",
            "desc": "From reconnaissance to exploitation and reporting — run end-to-end pentests in real labs.",
            "icon": "bi bi-bar-chart-line"
          },
          {
            "title": "Assess Web & Network Security",
            "desc": "Identify and exploit common web and network vulnerabilities and suggest fixes.",
            "icon": "bi bi-window-stack"
          },
          {
            "title": "Apply Malware Analysis & Forensics",
            "desc": "Carry out basic malware analysis and collect forensic evidence for investigations.",
            "icon": "bi bi-cpu"
          },
          {
            "title": "Produce Professional Security Reports",
            "desc": "Deliver clear, executive-friendly findings with prioritized remediation and compliance context.",
            "icon": "bi bi-file-earmark-text"
          }
        ]
      }
      ,
    ],
  },
  "SEO": {
    mainCategoryDesc: "Become a SEO Expert",
    subDesc: "Master the art of Search Engine Optimization (SEO) and learn how to drive organic traffic to your website. Understand the essential strategies for on-page and off-page SEO, keyword research, link building, and content optimization to rank higher on search engines.",
    subHeading: "Cybersecurity protects digital assets from cyber threats using advanced tools and practices. It ensures data privacy, integrity, and safe online operations.",
    mainImage: "/images/courses/SEO.jpg",

    courses: [
      {
        title: "Digital Marketing",
        desc: "Master SEO, Social Media, Google Ads, and Analytics with our hands-on Digital Marketing program. Gain real-time skills to boost careers and drive business growth.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Digital_Marketing.jpg",
        aboutData: {
          topic: "Master Digital Marketing — From Basics to Advanced Strategies!",
          content1: "Take your marketing skills to the next level! Learn SEO, social media marketing, content marketing, email campaigns, Google Ads, and analytics. This course helps you develop a data-driven approach to grow businesses online with real-world projects.",
          content2: "The Digital Marketing course by Urbancode covers everything from marketing fundamentals to advanced growth strategies. Starting with core concepts like market research, customer personas, and content creation, you’ll move through hands-on training in SEO, social media campaigns, paid advertising, and analytics. By the end, you'll be ready to plan, execute, and optimize marketing campaigns like a professional."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Digital Marketing Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Digital Marketing",
              "Understanding Online Consumer Behavior",
              "Market Research and Competitor Analysis",
              "Customer Personas and Buyer Journeys",
              "Basics of Content Marketing"
            ]
          },
          {
            id: 2,
            title: "Beginner – SEO & Content Strategy",
            icon: "bi bi-search",
            items: [
              "On-page and Off-page SEO",
              "Keyword Research Techniques",
              "Writing SEO-optimized Content",
              "Link Building Strategies",
              "Content Calendar Planning"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Social Media Marketing",
            icon: "bi bi-share",
            items: [
              "Social Media Platforms Overview",
              "Creating Engaging Content",
              "Community Management and Engagement",
              "Social Media Ads (Facebook, Instagram, LinkedIn)",
              "Measuring Social Media ROI"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Paid Advertising",
            icon: "bi bi-cash-stack",
            items: [
              "Google Ads Fundamentals",
              "Search, Display & Video Campaigns",
              "Budgeting and Bidding Strategies",
              "Ad Copywriting & A/B Testing",
              "Conversion Tracking & Optimization"
            ]
          },
          {
            id: 5,
            title: "Intermediate – Email & Affiliate Marketing",
            icon: "bi bi-envelope",
            items: [
              "Email Campaign Creation",
              "Segmentation and Personalization",
              "Automation and Drip Campaigns",
              "Affiliate Marketing Basics",
              "Tracking and Optimizing Campaigns"
            ]
          },
          {
            id: 6,
            title: "Expert – Analytics & Reporting",
            icon: "bi bi-bar-chart-line",
            items: [
              "Google Analytics Setup and Tracking",
              "Analyzing Traffic and Conversions",
              "Reporting KPIs and Insights",
              "Data-driven Marketing Decisions",
              "Marketing Attribution Models"
            ]
          },
          {
            id: 7,
            title: "Expert – Advanced Growth Strategies",
            icon: "bi bi-rocket",
            items: [
              "Growth Hacking Techniques",
              "SEO for Competitive Markets",
              "Advanced Paid Advertising Strategies",
              "Omnichannel Marketing Integration",
              "Scaling Campaigns for Maximum ROI"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Marketing Fundamentals",
            desc: "Understand customer behavior, content strategy, and digital marketing channels.",
            icon: "bi bi-lightning-charge"
          },
          {
            title: "Optimize SEO & Content",
            desc: "Learn keyword research, SEO tactics, and content planning for growth.",
            icon: "bi bi-search"
          },
          {
            title: "Execute Social Media Campaigns",
            desc: "Run campaigns on Facebook, Instagram, LinkedIn and measure results effectively.",
            icon: "bi bi-share"
          },
          {
            title: "Run Paid Ads",
            desc: "Master Google Ads, social media ads, and A/B testing for conversions.",
            icon: "bi bi-cash-stack"
          },
          {
            title: "Leverage Analytics",
            desc: "Track traffic, conversions, and ROI to make data-driven marketing decisions.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Implement Advanced Growth Strategies",
            desc: "Use growth hacking, omnichannel marketing, and scaling techniques to maximize impact.",
            icon: "bi bi-rocket"
          }
        ]
      }

      ,

    ]
  },
  "Medical Coding": {
    mainCategoryDesc: "Coding for medical professionals.",
    subDesc: "Training in Python, R, and cybersecurity practices. Get into high demanding feilds like AI, Data Science, Web Development, and more.",
    subHeading: "Learn the world's most in-demand programming languages with real projects.",
    mainImage: "/images/courses/Medical_Coding.jpg",

    courses: [
      {
        title: "Medical Coding",
        desc: "Master Medical Coding with hands-on training in ICD, CPT, HCPCS coding, and healthcare compliance.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Medical_Coding1.jpg",
        aboutData: {
          topic: "Become a Certified Medical Coder — From Healthcare Basics to Advanced Coding!",
          content1: "Learn Medical Coding from scratch! Gain hands-on experience with ICD-10, CPT, and HCPCS coding systems, understand healthcare billing, and get trained on real-world scenarios. This course prepares you to become a certified medical coder ready for healthcare industry jobs.",
          content2: "The Medical Coding course covers everything from basic healthcare terminology to advanced coding techniques. You'll start with medical documentation and anatomy & physiology, then progress to ICD-10, CPT, and HCPCS coding. The program also includes practical billing exercises, coding audits, and preparation for certification exams like CPC, making you fully industry-ready."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Healthcare & Medical Terminology",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to healthcare industry",
              "Understanding medical records and documentation",
              "Basic medical terminology",
              "Anatomy & Physiology essentials",
              "Healthcare roles and responsibilities"
            ]
          },
          {
            id: 2,
            title: "Beginner – Introduction to Medical Coding",
            icon: "bi bi-database",
            items: [
              "Overview of ICD-10, CPT, and HCPCS coding systems",
              "Understanding coding conventions and guidelines",
              "Basic coding exercises",
              "Common coding errors and how to avoid them"
            ]
          },
          {
            id: 3,
            title: "Intermediate – ICD-10 Coding",
            icon: "bi bi-gear",
            items: [
              "ICD-10-CM structure and chapters",
              "Coding for diseases and conditions",
              "Coding for outpatient and inpatient settings",
              "ICD-10 coding exercises and case studies"
            ]
          },
          {
            id: 4,
            title: "Intermediate – CPT & HCPCS Coding",
            icon: "bi bi-window-stack",
            items: [
              "CPT coding structure and categories",
              "HCPCS Level I & II coding",
              "Coding for procedures and services",
              "Medical billing process overview"
            ]
          },
          {
            id: 5,
            title: "Expert – Advanced Coding & Compliance",
            icon: "bi bi-diagram-3",
            items: [
              "Coding audits and quality checks",
              "Advanced coding scenarios and case studies",
              "HIPAA compliance and regulations",
              "Preparation for CPC or CCS certification exams"
            ]
          },
          {
            id: 6,
            title: "Expert – Practical Billing & Real-World Training",
            icon: "bi bi-bar-chart-line",
            items: [
              "Medical billing and claim submission",
              "Handling denials and rejections",
              "Electronic Health Records (EHR) integration",
              "Simulated projects with real medical data"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Medical Coding Systems",
            desc: "Learn ICD-10, CPT, and HCPCS coding in detail.",
            icon: "bi bi-lightning-charge"
          },
          {
            title: "Perform Accurate Coding",
            desc: "Apply coding rules to real patient records and case studies.",
            icon: "bi bi-gear"
          },
          {
            title: "Understand Healthcare Documentation",
            desc: "Interpret medical records and clinical notes for precise coding.",
            icon: "bi bi-book"
          },
          {
            title: "Handle Billing & Compliance",
            desc: "Submit claims, manage denials, and follow HIPAA regulations.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Prepare for Certification",
            desc: "Get ready for CPC, CCS, or other industry-standard coding exams.",
            icon: "bi bi-cpu"
          },
          {
            title: "Gain Real-World Experience",
            desc: "Work on simulated projects and case studies for hands-on learning.",
            icon: "bi bi-window-stack"
          }
        ]
      }
      ,
      {
        title: "Medical Billing",
        desc: "Master Medical Coding with hands-on training in ICD-10, CPT, and HCPCS coding. Learn to code accurately and efficiently for healthcare billing and compliance.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Medical_Coding2.jpg",
        aboutData: {
          topic: "Become a Certified Medical Coding Expert!",
          content1: "Take your healthcare career to the next level! Learn accurate coding using ICD-10, CPT, and HCPCS codes. This course helps you gain practical knowledge to work in hospitals, clinics, and insurance companies.",
          content2: "The Medical Coding course covers everything from basic coding principles to advanced auditing and compliance. Starting with medical terminology and anatomy, you’ll move through coding systems, claim processing, and regulatory standards. The program concludes with practical exercises, real-world case studies, and exam preparation to make you industry-ready."
        },
        courseContentData: [
          {
            id: 1,
            title: "Introduction to Medical Coding",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Overview of Medical Coding and Health Information Management",
              "Importance of accuracy and compliance",
              "Career opportunities in Medical Coding",
              "Introduction to ICD-10, CPT, and HCPCS coding systems"
            ]
          },
          {
            id: 2,
            title: "Medical Terminology & Anatomy",
            icon: "bi bi-heart-pulse",
            items: [
              "Basic medical terms and abbreviations",
              "Human anatomy and physiology overview",
              "Organ systems and diseases",
              "Medical documentation essentials"
            ]
          },
          {
            id: 3,
            title: "ICD-10 Coding",
            icon: "bi bi-file-text",
            items: [
              "Understanding ICD-10-CM codes",
              "Coding guidelines and conventions",
              "Assigning codes for diagnoses",
              "Coding case studies and practice exercises"
            ]
          },
          {
            id: 4,
            title: "CPT Coding",
            icon: "bi bi-clipboard-check",
            items: [
              "Introduction to CPT codes for procedures",
              "Evaluation and Management (E/M) coding",
              "Surgical and procedural coding",
              "Practice coding with real cases"
            ]
          },
          {
            id: 5,
            title: "HCPCS Coding",
            icon: "bi bi-file-earmark-medical",
            items: [
              "Understanding HCPCS Level I & II",
              "Coding medical supplies, equipment, and drugs",
              "Billing and insurance considerations",
              "Case studies and coding exercises"
            ]
          },
          {
            id: 6,
            title: "Claim Processing & Compliance",
            icon: "bi bi-file-earmark-text",
            items: [
              "Medical billing workflow",
              "Electronic claims and insurance forms",
              "HIPAA compliance and regulations",
              "Error detection and claim denial management"
            ]
          },
          {
            id: 7,
            title: "Advanced Coding & Auditing",
            icon: "bi bi-search",
            items: [
              "Auditing medical records for accuracy",
              "Advanced coding scenarios",
              "Handling complex cases",
              "Preparing for certification exams"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master ICD-10, CPT & HCPCS Coding",
            desc: "Accurately assign codes for diagnoses, procedures, and supplies.",
            icon: "bi bi-lightning-charge"
          },
          {
            title: "Understand Medical Terminology",
            desc: "Learn medical terms, abbreviations, and anatomy for coding accuracy.",
            icon: "bi bi-gear"
          },
          {
            title: "Work with Claim Processing",
            desc: "Handle electronic claims, insurance forms, and denials efficiently.",
            icon: "bi bi-bar-chart-line"
          },
          {
            title: "Ensure Compliance & Accuracy",
            desc: "Follow HIPAA and coding regulations to prevent errors and audits.",
            icon: "bi bi-shield-check"
          },
          {
            title: "Prepare for Certification",
            desc: "Gain skills and practice to pass coding certification exams.",
            icon: "bi bi-bookmark-check"
          },
          {
            title: "Apply Coding in Real-World Scenarios",
            desc: "Work on practical case studies from hospitals and insurance companies.",
            icon: "bi bi-briefcase"
          }
        ]
      }
      ,
    ]
  },
  // "Languages":{
  //   mainCategoryDesc:"Master New Languages with Ease",
  //   subDesc:"Embark on a journey to fluency. Learn Spanish, French, Mandarin, and more with structured lessons and immersive practice.",
  //   subHeading:"Master global languages with ease through expert-designed courses. Build fluency, cultural understanding, and career opportunities worldwide.",
  //   mainImage:"",
  //   courses:[
  //     {title:"Spoken English",desc:"Master fluent English with confidence through interactive sessions and real-life conversations. Build communication skills that open global career opportunities.",rating:5.0,duration:"1 month",students:"10,556",img:""},
  //     {title:"French",desc:"Master French with our expert-led training program designed for all levels, from beginners to advanced learners. Build fluency, confidence, and cultural understanding to excel globally.",rating:5.0,duration:"1 month",students:"10,556",img:""},
  //     {title:"German",desc:"Master German from beginner to advanced with expert trainers and interactive sessions. Build fluency, boost career opportunities, and connect globally.",rating:5.0,duration:"1 month",students:"10,556",img:""},
  //     {title:"Spanish",desc:"Master Spanish from basics to fluency with interactive sessions led by expert trainers.Build confidence in speaking, reading, and writing for global opportunities.",rating:5.0,duration:"1 month",students:"10,556",img:""},
  //     {title:"Japanese",desc:"Master the Japanese language with expert-led sessions designed for speaking, reading, and writing excellence. Unlock global career and cultural opportunities with our structured training program.",rating:5.0,duration:"1 month",students:"10,556",img:""},
  //     {title:"Malayalam",desc:"Master Malayalam with our expert-led program designed for beginners and professionals alike. Build fluency in speaking, reading, and writing with practical, culture-rich lessons.",rating:5.0,duration:"1 month",students:"10,556",img:""},
  //   ]
  // },
  // "English Proficiency Exams":{
  //   mainCategoryDesc:"Ace Your English Proficiency Exams",
  //   subDesc:"Prepare for TOEFL, IELTS, and other exams with expert guidance. Build confidence in reading, writing, listening, and speaking skills.",
  //   subHeading:"English proficiency exams like IELTS, TOEFL, and PTE open doors to global education and career opportunities.",
  //   mainImage:"",
  //   courses:[
  //     {title:"TOEFL Course",desc:"Master the TOEFL exam with expert guidance, interactive practice sessions, and personalized feedback. Achieve your dream score and unlock global education opportunities.",rating:5.0,duration:"1 month",students:"10,556",img:""},
  //     {title:"OET Course",desc:"Master OET with expert-led training focused on real exam strategies and practical communication skills. Prepare confidently for healthcare career success worldwide.",rating:5.0,duration:"1 month",students:"10,556",img:""},
  //     {title:"PTE Course",desc:"Master the PTE Academic exam with expert-led training, practice tests, and personalized feedback. Achieve your dream score with proven strategies and real exam simulations.",rating:5.0,duration:"1 month",students:"10,556",img:""},
  //     {title:"IELTS Course",desc:"Master all four IELTS modules – Listening, Reading, Writing, and Speaking – with expert trainers and proven strategies.",rating:5.0,duration:"1 month",students:"10,556",img:""},

  //   ]
  // },
  "CRM": {
    mainCategoryDesc: "Master Customer Relationship Management",
    subDesc: "Unlock the potential of CRM tools and strategies to build stronger customer relationships, streamline processes, and drive business growth.",
    subHeading: "Our CRM streamlines lead management, client interactions, and follow-ups in one platform. Empower your team with smarter tools to boost sales and productivity.",
    mainImage: "/images/courses/CRM.jpg",
    courses: [
      {
        "title": "Salesforce Administrator",
        "desc": "Master Salesforce Administration with hands-on training, real-time projects, and expert guidance. Build skills to manage, customize, and optimize Salesforce for any business.",
        "rating": 5.0,
        "duration": "1 month",
        "students": "10,556",
        "img": "/images/courses/Salesforce_Administrator.jpg",
        "aboutData": {
          "topic": "Become a Certified Salesforce Administrator — From Basics to Advanced!",
          "content1": "Learn Salesforce administration from scratch! Gain expertise in managing users, customizing Salesforce, building reports and dashboards, and automating business processes. This course provides hands-on exercises and real-time projects to make you job-ready.",
          "content2": "The Salesforce Administrator course covers everything from basic Salesforce navigation to advanced administration. You will learn about security, data management, workflow automation, reporting, and dashboard creation. By the end, you'll be able to optimize Salesforce for any organization, preparing you for the Salesforce Administrator certification."
        },
        "courseContentData": [
          {
            "id": 1,
            "title": "Beginner – Salesforce Basics",
            "icon": "bi bi-book",
            "defaultOpen": true,
            "items": [
              "Introduction to Salesforce and CRM concepts",
              "Salesforce interface navigation",
              "Understanding standard objects and fields",
              "Creating and managing users",
              "Setting up roles, profiles, and permissions"
            ]
          },
          {
            "id": 2,
            "title": "Beginner – Data Management",
            "icon": "bi bi-database",
            "items": [
              "Managing data import and export",
              "Data validation rules",
              "Duplicate management",
              "Understanding record types and page layouts"
            ]
          },
          {
            "id": 3,
            "title": "Intermediate – Automation & Workflow",
            "icon": "bi bi-gear",
            "items": [
              "Creating workflow rules and process builder",
              "Automating approvals and tasks",
              "Introduction to Flow Builder",
              "Email alerts and notifications"
            ]
          },
          {
            "id": 4,
            "title": "Intermediate – Reports & Dashboards",
            "icon": "bi bi-bar-chart-line",
            "items": [
              "Creating custom reports",
              "Building dashboards for insights",
              "Using filters, formulas, and summary reports",
              "Sharing and scheduling reports"
            ]
          },
          {
            "id": 5,
            "title": "Intermediate – Security & Access",
            "icon": "bi bi-shield-lock",
            "items": [
              "Setting up profiles and permission sets",
              "Field-level security and sharing rules",
              "Organization-wide defaults",
              "Role hierarchy and record access"
            ]
          },
          {
            "id": 6,
            "title": "Advanced – Salesforce Customization",
            "icon": "bi bi-window-stack",
            "items": [
              "Custom objects, fields, and relationships",
              "Page layouts and Lightning App Builder",
              "Validation rules and formula fields",
              "Managing apps and tabs"
            ]
          },
          {
            "id": 7,
            "title": "Advanced – Advanced Automation",
            "icon": "bi bi-diagram-3",
            "items": [
              "Complex Flows and Process automation",
              "Approval processes and automation strategies",
              "Integration basics with external apps",
              "Optimizing automation for business efficiency"
            ]
          },
          {
            "id": 8,
            "title": "Expert – Preparing for Certification",
            "icon": "bi bi-award",
            "items": [
              "Salesforce Administrator certification overview",
              "Best practices and exam strategies",
              "Practice exams and quizzes",
              "Real-time project scenarios"
            ]
          }
        ],
        "whatYouLearnData": [
          {
            "title": "Master Salesforce Administration",
            "desc": "Understand users, security, data management, and CRM processes in Salesforce.",
            "icon": "bi bi-lightning-charge"
          },
          {
            "title": "Automate Business Processes",
            "desc": "Create workflows, approval processes, and flows to automate tasks efficiently.",
            "icon": "bi bi-gear"
          },
          {
            "title": "Build Reports & Dashboards",
            "desc": "Generate insights with custom reports, dashboards, and advanced analytics tools.",
            "icon": "bi bi-bar-chart-line"
          },
          {
            "title": "Customize Salesforce Platform",
            "desc": "Work with custom objects, fields, page layouts, and Lightning App Builder.",
            "icon": "bi bi-window-stack"
          },
          {
            "title": "Prepare for Certification",
            "desc": "Gain knowledge and practice to pass the Salesforce Administrator certification exam.",
            "icon": "bi bi-award"
          },
          {
            "title": "Optimize Salesforce for Business",
            "desc": "Enhance productivity, data accuracy, and user experience across your organization.",
            "icon": "bi bi-diagram-3"
          }
        ]
      }
      ,
      // {title:"Data Analysis",desc:"Master the art of Data Analysis with hands-on training in Excel, SQL, Python, and visualization tools. Gain industry-ready skills to turn raw data into powerful insights and career opportunities.",rating:5.0,duration:"1 month",students:"10,556",img:"/images/courses/Data_Analysis.jpg"},
      {
        title: "Salesforce Developer",
        desc: "Master Salesforce Development with hands-on training, real-time projects, and expert mentorship. Build in-demand CRM skills to boost your career opportunities.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Data_Analysis.jpg",
        aboutData: {
          topic: "Master Salesforce Development — From Basics to Advanced CRM Solutions!",
          content1: "Become a certified Salesforce Developer! Learn Apex, Visualforce, Lightning Components, and Salesforce integrations with hands-on projects and real-world scenarios. This course helps you gain industry-ready skills to excel in CRM development and automation.",
          content2: "The Salesforce Developer course covers everything from core platform concepts to advanced development. Start with Salesforce fundamentals, including objects, fields, and relationships. Move on to Apex programming, Visualforce pages, Lightning components, and integrating Salesforce with external systems. The course also dives into workflows, triggers, and DevOps for Salesforce, preparing you for a successful career in Salesforce development."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Salesforce Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Salesforce and CRM concepts",
              "Salesforce platform overview",
              "Objects, fields, and relationships",
              "Salesforce data model and security",
              "Introduction to Salesforce Lightning Experience",
            ],
          },
          {
            id: 2,
            title: "Beginner – Salesforce Administration Basics",
            icon: "bi bi-gear",
            items: [
              "User management and profiles",
              "Roles, permissions, and sharing rules",
              "Reports and dashboards",
              "Data import/export and validation rules",
              "Workflow rules and process automation basics",
            ],
          },
          {
            id: 3,
            title: "Intermediate – Apex Programming",
            icon: "bi bi-code-slash",
            items: [
              "Apex classes and triggers",
              "SOQL and SOSL queries",
              "Exception handling and testing",
              "Asynchronous Apex (Future, Queueable, Batch Apex)",
              "Best practices for Apex development",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Visualforce & Lightning",
            icon: "bi bi-window",
            items: [
              "Building Visualforce pages",
              "Introduction to Lightning Components",
              "Lightning App Builder and UI customization",
              "Custom Lightning components with Apex controllers",
              "Deploying and managing Lightning apps",
            ],
          },
          {
            id: 5,
            title: "Intermediate – Salesforce Integrations",
            icon: "bi bi-cloud-arrow-up",
            items: [
              "Connecting Salesforce with external systems",
              "REST and SOAP APIs",
              "Using Salesforce Connect and External Objects",
              "Working with Platform Events",
              "Integration best practices",
            ],
          },
          {
            id: 6,
            title: "Expert – Advanced Automation & DevOps",
            icon: "bi bi-diagram-3",
            items: [
              "Advanced workflow rules and process builder",
              "Flow Builder automation",
              "Triggers vs Flows – when to use what",
              "CI/CD for Salesforce using DevOps tools",
              "Debugging and performance optimization",
            ],
          },
          {
            id: 7,
            title: "Expert – Real-Time Projects & Certification Prep",
            icon: "bi bi-rocket",
            items: [
              "Hands-on CRM development projects",
              "End-to-end Salesforce app creation",
              "Best practices for deployment and version control",
              "Preparation for Salesforce Platform Developer I & II certifications",
              "Mock projects and assessments",
            ],
          }
        ],
        whatYouLearnData: [
          {
            title: "Master Salesforce Platform",
            desc: "Understand Salesforce architecture, data model, and platform capabilities.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Develop with Apex & Visualforce",
            desc: "Build custom applications and workflows using Apex and Visualforce.",
            icon: "bi bi-code-slash",
          },
          {
            title: "Build Lightning Components",
            desc: "Create modern, responsive UIs using Salesforce Lightning framework.",
            icon: "bi bi-window",
          },
          {
            title: "Integrate Salesforce with External Systems",
            desc: "Use REST/SOAP APIs, Salesforce Connect, and platform events for integrations.",
            icon: "bi bi-cloud-arrow-up",
          },
          {
            title: "Automate Business Processes",
            desc: "Leverage Flow Builder, Process Builder, and workflow rules effectively.",
            icon: "bi bi-gear",
          },
          {
            title: "Prepare for Certification & Projects",
            desc: "Gain real-world project experience and prepare for Salesforce Developer certifications.",
            icon: "bi bi-rocket",
          }
        ]
      }
      ,
      {
        title: "Spoken English",
        desc: "Master fluent English with confidence through interactive sessions and real-life conversations. Build communication skills that open global career opportunities.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/Salesforce_Administrator.jpg",
        aboutData: {
          topic: "Master Spoken English — From Basics to Fluent Conversations!",
          content1: "Enhance your English speaking skills with practical lessons, interactive sessions, and real-world conversation practice. This course helps you gain confidence, improve pronunciation, expand vocabulary, and speak fluently in professional and social settings.",
          content2: "The Spoken English course covers everything from foundational grammar to advanced conversational techniques. You’ll learn essential sentence structures, common idioms, and effective communication strategies. Through role-plays, mock interviews, and live speaking sessions, you’ll become fluent, confident, and ready to use English anywhere."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – English Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to English language skills",
              "Basic vocabulary and sentence structure",
              "Grammar essentials: tenses, articles, and prepositions",
              "Common phrases and greetings",
              "Pronunciation and phonetics practice"
            ]
          },
          {
            id: 2,
            title: "Beginner – Everyday Conversations",
            icon: "bi bi-chat-left",
            items: [
              "Introducing yourself and others",
              "Talking about daily routines",
              "Asking questions and giving answers",
              "Shopping, travel, and food conversations",
              "Role-play exercises for confidence building"
            ]
          },
          {
            id: 3,
            title: "Intermediate – Advanced Grammar & Vocabulary",
            icon: "bi bi-journal-text",
            items: [
              "Complex sentence structures",
              "Idioms, phrasal verbs, and expressions",
              "Synonyms, antonyms, and word usage",
              "Listening comprehension exercises",
              "Storytelling and paragraph construction"
            ]
          },
          {
            id: 4,
            title: "Intermediate – Business & Professional English",
            icon: "bi bi-briefcase",
            items: [
              "Formal email and report writing",
              "Telephone and video call etiquette",
              "Presentation and meeting skills",
              "Networking and small talk techniques",
              "Interview preparation and mock sessions"
            ]
          },
          {
            id: 5,
            title: "Expert – Conversational Fluency",
            icon: "bi bi-person-lines-fill",
            items: [
              "Debating and discussion skills",
              "Public speaking practice",
              "Storytelling and persuasive communication",
              "Accent and pronunciation refinement",
              "Confidence building through live conversations"
            ]
          },
          {
            id: 6,
            title: "Expert – Cultural & Global Communication",
            icon: "bi bi-globe",
            items: [
              "Cross-cultural communication",
              "Understanding idioms and slang",
              "Participating in international discussions",
              "Building professional relationships globally",
              "Advanced listening and comprehension practice"
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Speak English Fluently",
            desc: "Gain confidence and fluency in daily, social, and professional conversations.",
            icon: "bi bi-mic"
          },
          {
            title: "Improve Vocabulary & Grammar",
            desc: "Master essential vocabulary, idioms, phrasal verbs, and grammar structures.",
            icon: "bi bi-book"
          },
          {
            title: "Communicate Professionally",
            desc: "Learn business English, presentations, interviews, and email etiquette.",
            icon: "bi bi-briefcase"
          },
          {
            title: "Enhance Listening & Pronunciation",
            desc: "Develop listening skills and refine pronunciation for clear communication.",
            icon: "bi bi-headphones"
          },
          {
            title: "Build Confidence & Public Speaking",
            desc: "Participate in debates, discussions, and storytelling to boost confidence.",
            icon: "bi bi-person-lines-fill"
          },
          {
            title: "Master Global Communication",
            desc: "Understand cultural nuances and communicate effectively with people worldwide.",
            icon: "bi bi-globe"
          }
        ]
      }
      ,

    ]
  },
  "App Development": {
    mainCategoryDesc: "Build Cutting-Edge Mobile Apps",
    subDesc: "Master the art of app development and create powerful, user-friendly mobile applications with expert guidance and hands-on training.",
    subHeading: "Build future-ready apps with seamless UI/UX, robust security, and scalable architecture. Turn your innovative ideas into high-performing mobile and web solutions.",
    mainImage: "/images/courses/App_Development.jpg",
    courses: [
      {
        title: "React Native",
        desc: "Master cross-platform mobile app development with React Native—build, test, and deploy real-world apps from scratch.",
        rating: 5.0,
        duration: "1 month",
        students: "10,556",
        img: "/images/courses/React_Native.jpg",
        aboutData: {
          topic: "Master React Native — Build High-Performance Cross-Platform Mobile Apps!",
          content1: "Learn to create native-like mobile applications using React Native. This course covers everything from the basics of React to advanced mobile development, integrating APIs, state management, and deploying apps on Android and iOS.",
          content2: "The React Native course by Urbancode is designed to take you from beginner to professional mobile app developer. Starting with core JavaScript and React concepts, you’ll move into React Native components, navigation, performance optimization, and testing. By the end, you will be able to build and deploy fully functional mobile applications with real-world project experience."
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – React & JavaScript Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to React Native and cross-platform development",
              "JavaScript ES6+ essentials for React Native",
              "Components, props, and state",
              "JSX syntax and styling basics",
              "Debugging and development setup",
            ]
          },
          {
            id: 2,
            title: "Beginner – React Native Core Concepts",
            icon: "bi bi-phone",
            items: [
              "Core components: View, Text, Image, ScrollView",
              "Handling user input and forms",
              "Event handling and gestures",
              "Navigation with React Navigation",
              "Using FlatList and SectionList for lists",
            ]
          },
          {
            id: 3,
            title: "Intermediate – State Management & APIs",
            icon: "bi bi-database",
            items: [
              "Managing state with useState and useReducer",
              "Context API for global state",
              "Introduction to Redux and Redux Toolkit",
              "Fetching and integrating REST APIs",
              "Handling asynchronous requests and errors",
            ]
          },
          {
            id: 4,
            title: "Intermediate – Styling & Animations",
            icon: "bi bi-paint-bucket",
            items: [
              "Styling with StyleSheet and inline styles",
              "Flexbox layout in React Native",
              "Animations with Animated API",
              "Gesture handling and transitions",
              "Theming and responsive design",
            ]
          },
          {
            id: 5,
            title: "Intermediate – Navigation & Performance",
            icon: "bi bi-speedometer2",
            items: [
              "Stack, Tab, and Drawer navigation",
              "Optimizing app performance",
              "Lazy loading components",
              "Profiling and debugging mobile apps",
              "Handling offline data and caching",
            ]
          },
          {
            id: 6,
            title: "Expert – Advanced React Native",
            icon: "bi bi-gear",
            items: [
              "Native modules and bridges",
              "Integrating third-party libraries",
              "Push notifications and background tasks",
              "App security best practices",
              "CI/CD pipelines for mobile apps",
            ]
          },
          {
            id: 7,
            title: "Expert – Testing & Deployment",
            icon: "bi bi-check2-circle",
            items: [
              "Unit and integration testing with Jest",
              "End-to-end testing with Detox",
              "Debugging and performance monitoring",
              "Publishing apps on Play Store and App Store",
              "Maintaining and updating mobile applications",
            ]
          }
        ],
        whatYouLearnData: [
          {
            title: "Master React Native Fundamentals",
            desc: "Learn components, state, props, and JSX for building mobile apps.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Build Cross-Platform Apps",
            desc: "Create apps that run on both Android and iOS using a single codebase.",
            icon: "bi bi-phone",
          },
          {
            title: "Integrate APIs & Manage State",
            desc: "Use Redux, Context API, and REST APIs to handle data efficiently.",
            icon: "bi bi-database",
          },
          {
            title: "Style & Animate Apps",
            desc: "Apply responsive styling, animations, and gestures to enhance UX.",
            icon: "bi bi-paint-bucket",
          },
          {
            title: "Optimize & Secure Apps",
            desc: "Improve app performance, handle offline data, and implement security best practices.",
            icon: "bi bi-speedometer2",
          },
          {
            title: "Test & Deploy Mobile Applications",
            desc: "Perform testing, debug apps, and deploy to Play Store and App Store.",
            icon: "bi bi-check2-circle",
          }
        ]
      }
      ,

    ]
  },


};

export default coursesData;