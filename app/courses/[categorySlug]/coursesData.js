const coursesData = {
  "Programming Languages": {
    mainCategoryDesc: "Build Your Tommorow with Code",
    subDesc: "Discover, learn, and excel in the world’s most popular programming languages including Java, Python, C, C++, and HTML. Gain the ability to design algorithms, develop scalable solutions, and innovate in high-demand fields such as software engineering, data science, cybersecurity, and automation.",
    subHeading: "Transform your coding knowledge into job-ready development expertise that accelerates your career.",
    mainImage: "/images/courses/Programming_Languages.jpg",

    courses: [

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
  title: "Advanced Java",
  desc: "Master Advanced Java with hands-on training in OOP, JDBC, Servlets, Spring Boot, and Microservices. Build enterprise-grade applications and become industry-ready.",
  rating: 4.6,
  duration: "1 month",
  students: "11,842",
  img: "/images/courses/Advanced_Java.png",
  aboutData: {
    topic: "Master Advanced Java — From Core Concepts to Enterprise Development!",
    content1:
      "Take your Java skills beyond the basics. Learn advanced OOP, JDBC, Servlets, JSP, and Spring Boot while building scalable web and enterprise applications. This course blends theory with practical projects to make you job-ready.",
    content2:
      "The Advanced Java course by Urbancode goes beyond syntax to cover real-world application development. You’ll learn multi-threading, collections, and exception handling, then move into frameworks like Spring, Hibernate, and JPA. The course also includes training in RESTful APIs, Microservices, and DevOps integration to prepare you for enterprise-level roles in backend and full-stack development."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Core Java Refresher",
      icon: "bi bi-book",
      defaultOpen: true,
      items: [
        "Introduction to Java and JVM architecture",
        "Setting up the Java environment (JDK, IDEs)",
        "Data types, operators, and control structures",
        "Classes, objects, and methods",
        "Constructors, inheritance, and polymorphism",
        "Exception handling and debugging"
      ]
    },
    {
      id: 2,
      title: "Beginner – Working with Collections",
      icon: "bi bi-database",
      items: [
        "Arrays and ArrayList",
        "Collections Framework (List, Set, Map)",
        "Generics and Wrapper classes",
        "Comparable vs Comparator",
        "Iterators and enhanced for-loops"
      ]
    },
    {
      id: 3,
      title: "Beginner – Input/Output and Threads",
      icon: "bi bi-window",
      items: [
        "File handling with Java I/O and NIO",
        "Serialization and deserialization",
        "Multithreading and synchronization",
        "Thread lifecycle and concurrency",
        "Lambda expressions and functional interfaces"
      ]
    },
    {
      id: 4,
      title: "Intermediate – Database Connectivity (JDBC)",
      icon: "bi bi-gear",
      items: [
        "Introduction to JDBC",
        "Connecting Java with MySQL / PostgreSQL",
        "Executing SQL queries from Java",
        "PreparedStatement and ResultSet",
        "Transaction management"
      ]
    },
    {
      id: 5,
      title: "Intermediate – Web Development with Servlets & JSP",
      icon: "bi bi-bar-chart-line",
      items: [
        "Introduction to Java EE and web architecture",
        "Servlet lifecycle and configuration",
        "Request and response handling",
        "JSP scripting and directives",
        "Session management and cookies"
      ]
    },
    {
      id: 6,
      title: "Intermediate – Frameworks and ORM",
      icon: "bi bi-window-stack",
      items: [
        "Introduction to Hibernate and JPA",
        "Object-relational mapping (ORM)",
        "Annotations and configuration",
        "CRUD operations using Hibernate",
        "Integration with Spring Boot"
      ]
    },
    {
      id: 7,
      title: "Expert – Spring & Spring Boot Development",
      icon: "bi bi-diagram-3",
      items: [
        "Spring Core and Dependency Injection",
        "Spring MVC architecture",
        "Building RESTful APIs",
        "Spring Boot auto-configuration",
        "Spring Data JPA and testing"
      ]
    },
    {
      id: 8,
      title: "Expert – Microservices and Advanced Topics",
      icon: "bi bi-robot",
      items: [
        "Microservices architecture with Spring Boot",
        "Service discovery (Eureka, API Gateway)",
        "Security and authentication with Spring Security",
        "Docker and containerization",
        "CI/CD and deployment best practices"
      ]
    },
    {
      id: 9,
      title: "Expert – Enterprise Integration & Capstone",
      icon: "bi bi-cpu",
      items: [
        "Integration with third-party APIs",
        "Performance tuning and optimization",
        "Testing and debugging enterprise apps",
        "Final project – Build a full-stack Java application"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Master Core & Advanced Java",
      desc: "Deep dive into OOP, multithreading, collections, and exception handling.",
      icon: "bi bi-lightning-charge"
    },
    {
      title: "Build Enterprise Web Apps",
      desc: "Develop scalable web applications using Servlets, JSP, and Spring Boot.",
      icon: "bi bi-window-stack"
    },
    {
      title: "Work with Databases",
      desc: "Connect Java applications to SQL databases using JDBC and Hibernate.",
      icon: "bi bi-database"
    },
    {
      title: "Create RESTful APIs",
      desc: "Build secure and efficient APIs using Spring MVC and Spring Boot.",
      icon: "bi bi-gear"
    },
    {
      title: "Learn Microservices & DevOps",
      desc: "Deploy Spring Boot microservices with Docker and CI/CD pipelines.",
      icon: "bi bi-diagram-3"
    },
    {
      title: "Capstone Project",
      desc: "Build and deploy a complete enterprise-grade application end-to-end.",
      icon: "bi bi-award"
    }
  ]
}
,
     
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
  title: "C and C++ Programming",
  desc: "Learn C and C++ programming from scratch. Master the fundamentals of logic, syntax, object-oriented programming, and efficient problem-solving through practical coding exercises.",
  rating: 4.8,
  duration: "1.5 months",
  students: "15,278",
  img: "/images/courses/C_CPP.jpeg",
  aboutData: {
    topic: "Master C and C++ — Build Strong Programming Foundations!",
    content1:
      "Start your programming journey with C and C++, two of the most powerful and widely used languages in software development. Understand how computers process logic, manage memory, and execute code efficiently.",
    content2:
      "The C and C++ course by Urbancode takes you from basic syntax to advanced object-oriented programming. You'll learn how to build programs, use functions, manage data structures, and apply OOP concepts — preparing you for high-performance application development and competitive programming."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Getting Started with C",
      icon: "bi bi-terminal",
      defaultOpen: true,
      items: [
        "Introduction to C and its history",
        "Setting up the compiler and writing your first program",
        "Basic syntax, keywords, and data types",
        "Variables, constants, and operators",
        "Input and output in C"
      ]
    },
    {
      id: 2,
      title: "Beginner – Control Flow and Loops",
      icon: "bi bi-arrow-repeat",
      items: [
        "Conditional statements (if, else, switch)",
        "Loops (for, while, do-while)",
        "Break, continue, and goto statements",
        "Practical examples and pattern problems"
      ]
    },
    {
      id: 3,
      title: "Intermediate – Functions and Arrays",
      icon: "bi bi-braces",
      items: [
        "Defining and calling functions",
        "Function parameters and return types",
        "Understanding arrays and multi-dimensional arrays",
        "Passing arrays to functions",
        "Scope and lifetime of variables"
      ]
    },
    {
      id: 4,
      title: "Intermediate – Pointers and Memory Management",
      icon: "bi bi-memory",
      items: [
        "Introduction to pointers and addresses",
        "Pointer arithmetic",
        "Dynamic memory allocation (malloc, calloc, free)",
        "Pointers with arrays and functions"
      ]
    },
    {
      id: 5,
      title: "Advanced – Structures and File Handling",
      icon: "bi bi-file-earmark-text",
      items: [
        "Structures and unions",
        "Working with files (read, write, append)",
        "Command-line arguments",
        "Error handling in C"
      ]
    },
    {
      id: 6,
      title: "Advanced – Introduction to C++",
      icon: "bi bi-code-slash",
      items: [
        "Differences between C and C++",
        "Basic syntax, I/O streams, and namespaces",
        "Functions and function overloading",
        "Introduction to classes and objects"
      ]
    },
    {
      id: 7,
      title: "Expert – Object-Oriented Programming (OOP)",
      icon: "bi bi-diagram-3",
      items: [
        "Encapsulation, inheritance, and polymorphism",
        "Constructors and destructors",
        "Operator and function overloading",
        "Friend functions and classes",
        "Virtual functions and abstract classes"
      ]
    },
    {
      id: 8,
      title: "Expert – Advanced Concepts and Project",
      icon: "bi bi-award",
      items: [
        "Templates and exception handling",
        "File handling in C++",
        "STL (Vectors, Lists, Maps, and Iterators)",
        "Mini project: Console-based application in C++"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Master Core Programming Concepts",
      desc: "Understand how computers process instructions, manage memory, and execute logic.",
      icon: "bi bi-cpu"
    },
    {
      title: "Build Logic and Problem-Solving Skills",
      desc: "Practice loops, conditions, and functions to strengthen your logical thinking.",
      icon: "bi bi-lightbulb"
    },
    {
      title: "Work with Memory and Pointers",
      desc: "Gain deep knowledge of pointers, dynamic memory, and efficient resource management.",
      icon: "bi bi-memory"
    },
    {
      title: "Learn Object-Oriented Programming",
      desc: "Master OOP principles like inheritance, polymorphism, and abstraction using C++.",
      icon: "bi bi-diagram-3"
    },
    {
      title: "Explore the Standard Template Library",
      desc: "Use STL containers and algorithms to write clean, optimized, reusable code.",
      icon: "bi bi-collection"
    },
    {
      title: "Build Real-World Applications",
      desc: "Develop a functional console-based project using modern C++ practices.",
      icon: "bi bi-award"
    }
  ]
}

,

{
  title: "Data Structures & Algorithms (DSA)",
  desc: "Master Data Structures and Algorithms with hands-on coding in C++, Java, or Python. Learn problem-solving, optimize your logic, and prepare for top tech interviews.",
  rating: 4.8,
  duration: "1.5 months",
  students: "15,204",
  img: "/images/courses/DSA.png",
  aboutData: {
    topic: "Master Data Structures & Algorithms — Build Strong Foundations for Coding and Interviews!",
    content1:
      "Learn how to think like a programmer and solve complex problems efficiently. This DSA course covers every essential concept — arrays, linked lists, stacks, queues, trees, graphs, recursion, dynamic programming, and more — all taught through real coding examples and challenges.",
    content2:
      "The DSA course by Urbancode focuses on practical understanding and problem-solving. You’ll master core data structures, algorithmic techniques, and pattern-based problem-solving used in coding interviews. Each module includes coding exercises, mock tests, and real-world challenges designed to prepare you for competitive programming and top-tier tech placements."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Programming Foundations",
      icon: "bi bi-book",
      defaultOpen: true,
      items: [
        "Introduction to programming and logic building",
        "Understanding time and space complexity",
        "Big O notation and performance analysis",
        "Recursion fundamentals",
        "Mathematical problems and patterns"
      ]
    },
    {
      id: 2,
      title: "Beginner – Arrays and Strings",
      icon: "bi bi-database",
      items: [
        "1D and 2D arrays",
        "Common array problems and optimizations",
        "String manipulation and pattern matching",
        "Sliding window and two-pointer techniques"
      ]
    },
    {
      id: 3,
      title: "Intermediate – Linked Lists & Stacks",
      icon: "bi bi-diagram-3",
      items: [
        "Singly and doubly linked lists",
        "Fast and slow pointer approaches",
        "Stack operations and implementation",
        "Applications of stacks (parsing, evaluation, etc.)"
      ]
    },
    {
      id: 4,
      title: "Intermediate – Queues & Hashing",
      icon: "bi bi-gear",
      items: [
        "Queue and circular queue implementation",
        "Priority queues and Deque",
        "Hash tables and hash maps",
        "Collision handling and optimization"
      ]
    },
    {
      id: 5,
      title: "Intermediate – Trees and Binary Search Trees",
      icon: "bi bi-tree",
      items: [
        "Binary trees and traversals (DFS, BFS)",
        "Binary Search Trees (BST) operations",
        "Tree recursion and height-balanced trees",
        "Applications in searching and sorting"
      ]
    },
    {
      id: 6,
      title: "Advanced – Heaps and Graphs",
      icon: "bi bi-diagram-2",
      items: [
        "Heap data structure and heap sort",
        "Priority queue applications",
        "Graph representations (adjacency list/matrix)",
        "BFS, DFS, shortest path (Dijkstra, Bellman-Ford)"
      ]
    },
    {
      id: 7,
      title: "Advanced – Sorting & Searching Algorithms",
      icon: "bi bi-search",
      items: [
        "Merge sort, quick sort, and heap sort",
        "Binary search and its variations",
        "Counting sort and radix sort",
        "Search optimizations and edge cases"
      ]
    },
    {
      id: 8,
      title: "Expert – Dynamic Programming",
      icon: "bi bi-cpu",
      items: [
        "Recursion to DP transition",
        "Memoization and tabulation techniques",
        "Classic DP problems (Knapsack, LCS, LIS, etc.)",
        "Optimization and overlapping subproblems"
      ]
    },
    {
      id: 9,
      title: "Expert – Advanced Topics & Interview Prep",
      icon: "bi bi-award",
      items: [
        "Greedy algorithms and backtracking",
        "Bit manipulation techniques",
        "Divide and conquer strategies",
        "Mock interview problems and contests"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Master Core DSA Concepts",
      desc: "Understand how data structures and algorithms work under the hood.",
      icon: "bi bi-lightning-charge"
    },
    {
      title: "Improve Problem-Solving Skills",
      desc: "Solve 100+ real-world problems to build strong analytical thinking.",
      icon: "bi bi-braces"
    },
    {
      title: "Crack Technical Interviews",
      desc: "Get interview-ready with pattern-based coding questions and mock tests.",
      icon: "bi bi-person-check"
    },
    {
      title: "Learn Multiple Languages",
      desc: "Practice DSA in C++, Java, or Python with language-specific examples.",
      icon: "bi bi-code-slash"
    },
    {
      title: "Understand Algorithmic Efficiency",
      desc: "Analyze and optimize your code using time and space complexity.",
      icon: "bi bi-speedometer2"
    },
    {
      title: "Capstone Problem Solving",
      desc: "Apply all concepts in advanced projects and algorithmic challenges.",
      icon: "bi bi-trophy"
    }
  ]
}
,
{
  title: "HTML and CSS",
  desc: "Master HTML and CSS from scratch. Learn to structure web pages, style them beautifully, and build responsive layouts for modern websites.",
  rating: 4.6,
  duration: "1 month",
  students: "12,432",
  img: "/images/courses/HTML_CSS.jpeg",
  aboutData: {
    topic: "Master HTML and CSS — Build and Design Modern, Responsive Websites!",
    content1:
      "Start your web development journey by learning how to build and style stunning websites using HTML and CSS. Understand the core structure of webpages, layout techniques, and responsive design fundamentals.",
    content2:
      "The HTML and CSS course by Urbancode covers everything from basic syntax to advanced styling techniques. You’ll learn how to create layouts, work with typography, colors, animations, and responsive design — all through hands-on projects that help you gain real-world web development experience."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Introduction to HTML",
      icon: "bi bi-book",
      defaultOpen: true,
      items: [
        "What is HTML and how the web works",
        "HTML structure and basic tags",
        "Headings, paragraphs, lists, and links",
        "Images, audio, and video embedding",
        "Semantic HTML and best practices"
      ]
    },
    {
      id: 2,
      title: "Beginner – Page Layout and Structure",
      icon: "bi bi-columns-gap",
      items: [
        "Divs, spans, and containers",
        "Tables and forms in HTML",
        "iframes and embedding external content",
        "Meta tags, favicons, and SEO-friendly structure"
      ]
    },
    {
      id: 3,
      title: "Intermediate – Introduction to CSS",
      icon: "bi bi-palette",
      items: [
        "What is CSS and how it works with HTML",
        "Inline, internal, and external stylesheets",
        "Selectors, properties, and values",
        "Colors, backgrounds, and borders",
        "Typography and text styling"
      ]
    },
    {
      id: 4,
      title: "Intermediate – Box Model and Positioning",
      icon: "bi bi-bounding-box",
      items: [
        "Understanding the CSS box model",
        "Margins, padding, and borders",
        "Positioning: static, relative, absolute, fixed, sticky",
        "z-index and stacking context"
      ]
    },
    {
      id: 5,
      title: "Advanced – Layout Design with Flexbox and Grid",
      icon: "bi bi-layout-text-sidebar-reverse",
      items: [
        "Introduction to Flexbox",
        "Flex container and item properties",
        "Building responsive layouts with CSS Grid",
        "Combining Flexbox and Grid for advanced designs"
      ]
    },
    {
      id: 6,
      title: "Advanced – Responsive Web Design",
      icon: "bi bi-phone",
      items: [
        "Introduction to responsive design",
        "Media queries and breakpoints",
        "Relative units (%, em, rem, vh, vw)",
        "Building mobile-first layouts"
      ]
    },
    {
      id: 7,
      title: "Expert – Advanced Styling Techniques",
      icon: "bi bi-stars",
      items: [
        "CSS transitions and animations",
        "Pseudo-classes and pseudo-elements",
        "CSS variables and custom properties",
        "Working with shadows, gradients, and filters"
      ]
    },
    {
      id: 8,
      title: "Expert – Project & Modern Practices",
      icon: "bi bi-award",
      items: [
        "Build a personal portfolio website",
        "Responsive landing page project",
        "Cross-browser compatibility",
        "Modern CSS tools and best practices"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Build and Structure Web Pages",
      desc: "Learn HTML to create clean, semantic, and well-structured web pages.",
      icon: "bi bi-file-earmark-code"
    },
    {
      title: "Style Websites Professionally",
      desc: "Use CSS to add colors, layouts, animations, and design precision.",
      icon: "bi bi-palette"
    },
    {
      title: "Create Responsive Designs",
      desc: "Make your websites look great on all devices using media queries and grids.",
      icon: "bi bi-phone"
    },
    {
      title: "Understand Modern Layouts",
      desc: "Master Flexbox and CSS Grid for advanced layout control.",
      icon: "bi bi-layout-text-sidebar-reverse"
    },
    {
      title: "Animate with CSS",
      desc: "Add interactivity and movement using transitions and keyframes.",
      icon: "bi bi-stars"
    },
    {
      title: "Build Real Projects",
      desc: "Design and deploy a responsive website from scratch.",
      icon: "bi bi-award"
    }
  ]
}


     
     


    ],
  },

  "Web and App Development": {
    mainCategoryDesc: "Full Stack Web Development Mastery",
    subDesc: "Master the complete spectrum of frontend and backend development with in-depth training in MERN, MEAN, and Java Full Stack technologies. Develop robust, dynamic, and interactive web applications while gaining practical skills that make you industry-ready.",
    subHeading: "Acquire the expertise to grow as a professional Full Stack Web Developer and build a strong career in today’s digital-first world.",
    mainImage: "/images/courses/Web_Development.jpg",

    courses: [

      {
  title: "Java Full Stack Development",
  desc: "Become a full stack Java developer by mastering both front-end and back-end technologies. Learn HTML, CSS, JavaScript, Java, Spring Boot, and databases through hands-on projects.",
  rating: 4.8,
  duration: "3 months",
  students: "17,652",
  img: "/images/courses/Java_Full_Stack.jpeg",
  aboutData: {
    topic: "Master Java Full Stack Development — Build Scalable Web Applications from Front-End to Back-End!",
    content1:
      "Learn how to develop complete web applications using Java technologies. This course takes you from the basics of front-end web design to advanced back-end development with Spring Boot and databases, making you a job-ready full stack developer.",
    content2:
      "The Java Full Stack Development course by Urbancode combines the power of modern front-end frameworks with robust Java-based back-end systems. You’ll gain expertise in HTML, CSS, JavaScript, Java, JDBC, Hibernate, Spring Boot, REST APIs, and MySQL — along with deployment skills using tools like Docker and AWS."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Web Foundations",
      icon: "bi bi-code-slash",
      defaultOpen: true,
      items: [
        "Introduction to web development and full stack architecture",
        "HTML5: structure and semantic elements",
        "CSS3: styling, layout, and responsive design",
        "JavaScript basics and DOM manipulation",
        "Version control with Git and GitHub"
      ]
    },
    {
      id: 2,
      title: "Beginner – Programming with Java",
      icon: "bi bi-cup-hot",
      items: [
        "Core Java syntax and OOP principles",
        "Control structures, arrays, and strings",
        "Classes, inheritance, and polymorphism",
        "Exception handling and file I/O",
        "Collections framework and generics"
      ]
    },
    {
      id: 3,
      title: "Intermediate – Database Management",
      icon: "bi bi-database",
      items: [
        "Introduction to SQL and relational databases",
        "CRUD operations using MySQL",
        "Database design and normalization",
        "JDBC for database connectivity",
        "Connecting Java applications with MySQL"
      ]
    },
    {
      id: 4,
      title: "Intermediate – Back-End Development",
      icon: "bi bi-gear",
      items: [
        "Introduction to Java EE and Servlets",
        "JSP (JavaServer Pages) and MVC architecture",
        "Building dynamic web applications",
        "Form handling and session management",
        "Deploying Java web apps on Tomcat"
      ]
    },
    {
      id: 5,
      title: "Advanced – Spring Framework & Hibernate",
      icon: "bi bi-diagram-3",
      items: [
        "Spring Core and Dependency Injection",
        "Spring Boot setup and auto-configuration",
        "Building RESTful APIs with Spring Boot",
        "ORM with Hibernate and JPA",
        "Spring Data JPA and query methods"
      ]
    },
    {
      id: 6,
      title: "Advanced – Front-End Integration",
      icon: "bi bi-window-stack",
      items: [
        "Advanced JavaScript and ES6 concepts",
        "Introduction to React.js for front-end UI",
        "Connecting React with REST APIs",
        "State management and component-based architecture",
        "Responsive UI design and deployment"
      ]
    },
    {
      id: 7,
      title: "Expert – DevOps & Deployment",
      icon: "bi bi-cloud-upload",
      items: [
        "Build automation using Maven and Gradle",
        "Introduction to Docker and containerization",
        "Version control and CI/CD pipelines",
        "Deploying Java apps on AWS / cloud platforms",
        "Monitoring and maintaining applications"
      ]
    },
    {
      id: 8,
      title: "Expert – Capstone Project",
      icon: "bi bi-award",
      items: [
        "Build a complete full stack project (React + Spring Boot + MySQL)",
        "Implement authentication and authorization",
        "Host and deploy your project online",
        "Final presentation and portfolio building"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Full Stack Web Development",
      desc: "Learn to build complete web applications from front-end UI to back-end logic.",
      icon: "bi bi-code-square"
    },
    {
      title: "Master Front-End Skills",
      desc: "Create responsive web pages using HTML, CSS, JavaScript, and React.js.",
      icon: "bi bi-window-stack"
    },
    {
      title: "Develop Robust Back-End Systems",
      desc: "Build APIs and business logic using Java, Spring Boot, and Hibernate.",
      icon: "bi bi-diagram-3"
    },
    {
      title: "Work with Databases",
      desc: "Use SQL and MySQL for data storage, retrieval, and integration with Java apps.",
      icon: "bi bi-database"
    },
    {
      title: "Deploy Applications",
      desc: "Dockerize and deploy full stack projects to AWS or cloud servers.",
      icon: "bi bi-cloud-upload"
    },
    {
      title: "Build Real-World Projects",
      desc: "Complete a full stack capstone project to showcase your skills to employers.",
      icon: "bi bi-award"
    }
  ]
}
,
{
  title: "Angular",
  desc: "Learn Angular to build dynamic, scalable, and modern web applications using TypeScript. Master components, directives, services, and real-world project development.",
  rating: 4.8,
  duration: "1.5 months",
  students: "11,238",
  img: "/images/courses/Angular.png",
  aboutData: {
    topic: "Master Angular — Build Modern, Scalable Front-End Applications with TypeScript!",
    content1:
      "Angular is one of the most powerful front-end frameworks for building enterprise-grade web applications. This course takes you from the fundamentals to advanced concepts with practical projects and real-world examples.",
    content2:
      "The Angular course by Urbancode helps you understand the complete architecture of Angular — from components and data binding to routing, services, and APIs. You’ll learn to build structured, maintainable, and high-performance front-end applications."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Getting Started with Angular",
      icon: "bi bi-lightbulb",
      defaultOpen: true,
      items: [
        "Introduction to Angular and its ecosystem",
        "Setting up the Angular development environment",
        "Understanding TypeScript and ES6 features",
        "Angular project structure and file organization",
        "Creating your first Angular app"
      ]
    },
    {
      id: 2,
      title: "Beginner – Core Concepts",
      icon: "bi bi-box",
      items: [
        "Components and templates",
        "Data binding and interpolation",
        "Directives: built-in and custom",
        "Event handling and property binding",
        "Component communication (Input & Output)"
      ]
    },
    {
      id: 3,
      title: "Intermediate – Services and Dependency Injection",
      icon: "bi bi-gear",
      items: [
        "Creating and using services",
        "Dependency Injection in Angular",
        "Observable and RxJS introduction",
        "Managing data flow with services",
        "Reusable logic with service layers"
      ]
    },
    {
      id: 4,
      title: "Intermediate – Routing and Navigation",
      icon: "bi bi-map",
      items: [
        "Routing setup and configuration",
        "Navigating between views",
        "Route parameters and query strings",
        "Lazy loading modules",
        "Route guards and authentication"
      ]
    },
    {
      id: 5,
      title: "Advanced – Forms and Validation",
      icon: "bi bi-ui-checks-grid",
      items: [
        "Template-driven forms",
        "Reactive forms and form groups",
        "Custom form validation",
        "Error handling and dynamic feedback",
        "Handling form submissions with APIs"
      ]
    },
    {
      id: 6,
      title: "Advanced – HTTP and APIs",
      icon: "bi bi-cloud-arrow-down",
      items: [
        "Using HttpClient for API communication",
        "GET, POST, PUT, DELETE requests",
        "Handling observables and async data",
        "Error handling and interceptors",
        "Integrating RESTful APIs"
      ]
    },
    {
      id: 7,
      title: "Expert – Advanced Features",
      icon: "bi bi-layers",
      items: [
        "Lifecycle hooks and change detection",
        "Custom pipes and directives",
        "Angular Material and UI components",
        "State management with RxJS and NgRx",
        "Optimizing performance in large applications"
      ]
    },
    {
      id: 8,
      title: "Expert – Project and Deployment",
      icon: "bi bi-award",
      items: [
        "Building a real-world Angular project",
        "Integrating backend APIs",
        "Environment configuration for production",
        "Deploying Angular apps to Firebase or Netlify",
        "Final project presentation"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Build Modern Web Apps",
      desc: "Develop dynamic and interactive web applications using Angular and TypeScript.",
      icon: "bi bi-code-square"
    },
    {
      title: "Master Components & Modules",
      desc: "Learn how to structure scalable applications using Angular’s modular architecture.",
      icon: "bi bi-box"
    },
    {
      title: "Integrate REST APIs",
      desc: "Connect your Angular front-end to real back-end services using HttpClient.",
      icon: "bi bi-cloud-arrow-down"
    },
    {
      title: "Work with Reactive Forms",
      desc: "Create and validate dynamic forms with Angular’s reactive form module.",
      icon: "bi bi-ui-checks-grid"
    },
    {
      title: "Use Angular Material",
      desc: "Build polished UI with Angular Material components and custom themes.",
      icon: "bi bi-palette"
    },
    {
      title: "Deploy Real Projects",
      desc: "Deploy and host your Angular applications on modern cloud platforms.",
      icon: "bi bi-cloud-upload"
    }
  ]
}
,

{
  title: "Mean Stack",
  desc: "Master the MEAN Stack and build powerful, full-stack web applications from scratch. Learn backend APIs with Node.js & Express and create dynamic frontends using Angular.",
  rating: 4.8,
  duration: "2 months",
  students: "10,982",
  img: "/images/courses/MEAN_Stack.png",
  aboutData: {
    topic: "Master the MEAN Stack — Build Full-Stack Web Apps with MongoDB, Express, Angular, and Node.js!",
    content1:
      "The MEAN Stack course helps you become a full-stack developer capable of building end-to-end web applications. You’ll learn to manage data with MongoDB, build backend APIs with Express and Node.js, and create interactive frontends with Angular.",
    content2:
      "This program covers everything from the fundamentals of JavaScript to advanced full-stack project deployment. By the end, you’ll be able to design, develop, and deploy production-ready applications using the complete MEAN stack architecture."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Introduction to MEAN Stack",
      icon: "bi bi-lightbulb",
      defaultOpen: true,
      items: [
        "Overview of full-stack development",
        "Understanding the MEAN architecture",
        "Installing Node.js, npm, and Angular CLI",
        "Project setup and folder structure",
        "Intro to REST APIs and JSON"
      ]
    },
    {
      id: 2,
      title: "Beginner – JavaScript & TypeScript Essentials",
      icon: "bi bi-code",
      items: [
        "JavaScript fundamentals and ES6 features",
        "Asynchronous programming (Promises & async/await)",
        "Working with JSON data",
        "TypeScript basics for Angular",
        "Error handling and debugging"
      ]
    },
    {
      id: 3,
      title: "Intermediate – Node.js and Express.js",
      icon: "bi bi-server",
      items: [
        "Creating servers with Node.js",
        "Routing and middleware in Express",
        "Handling requests and responses",
        "Building RESTful APIs",
        "Working with authentication and JWT"
      ]
    },
    {
      id: 4,
      title: "Intermediate – MongoDB and Mongoose",
      icon: "bi bi-database",
      items: [
        "Introduction to NoSQL databases",
        "CRUD operations in MongoDB",
        "Modeling data with Mongoose",
        "Schema validation and relationships",
        "Connecting MongoDB with Node.js"
      ]
    },
    {
      id: 5,
      title: "Advanced – Angular Frontend Development",
      icon: "bi bi-window-stack",
      items: [
        "Creating Angular components and modules",
        "Data binding and dependency injection",
        "Working with forms and validations",
        "Routing and navigation",
        "Integrating REST APIs with Angular services"
      ]
    },
    {
      id: 6,
      title: "Advanced – Integration and Authentication",
      icon: "bi bi-link-45deg",
      items: [
        "Connecting frontend with backend",
        "User registration and login",
        "JWT-based authentication and authorization",
        "Role-based access control",
        "Error handling between client and server"
      ]
    },
    {
      id: 7,
      title: "Expert – Deployment and DevOps Basics",
      icon: "bi bi-cloud-upload",
      items: [
        "Environment variables and configuration",
        "Preparing production builds",
        "Hosting backend on Render or AWS",
        "Deploying Angular frontend on Netlify or Firebase",
        "Connecting domain and SSL setup"
      ]
    },
    {
      id: 8,
      title: "Expert – Capstone Project",
      icon: "bi bi-award",
      items: [
        "Building a complete MEAN stack application",
        "API integration with user authentication",
        "Admin dashboard and analytics",
        "Testing and debugging full-stack workflows",
        "Final project deployment and presentation"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Master Full-Stack Development",
      desc: "Learn to build complete web applications using MongoDB, Express, Angular, and Node.js.",
      icon: "bi bi-laptop"
    },
    {
      title: "Create RESTful APIs",
      desc: "Develop secure and scalable backend APIs using Node.js and Express.",
      icon: "bi bi-server"
    },
    {
      title: "Work with MongoDB",
      desc: "Perform CRUD operations, design schemas, and manage data using MongoDB and Mongoose.",
      icon: "bi bi-database"
    },
    {
      title: "Build Dynamic Frontends",
      desc: "Use Angular to create responsive, real-time web interfaces connected to your backend.",
      icon: "bi bi-window-stack"
    },
    {
      title: "Implement Authentication",
      desc: "Add login, JWT authentication, and role-based authorization to your apps.",
      icon: "bi bi-shield-lock"
    },
    {
      title: "Deploy Full Projects",
      desc: "Deploy your full-stack applications to the cloud with modern DevOps practices.",
      icon: "bi bi-cloud-upload"
    }
  ]
}
,
{
  title: "Mern Stack",
  desc: "Master the MERN Stack and build modern full-stack web applications. Learn MongoDB, Express, React, and Node.js with real-world projects and API integration.",
  rating: 4.9,
  duration: "2 months",
  students: "14,325",
  img: "/images/courses/MERN_Stack.jpg",
  aboutData: {
    topic: "Master the MERN Stack — Build Powerful Full-Stack Web Applications with React and Node.js!",
    content1:
      "This course takes you through every layer of the MERN stack, combining front-end and back-end technologies to help you build complete, dynamic web applications. You’ll learn React for UI, Node.js and Express for APIs, and MongoDB for managing data.",
    content2:
      "The MERN Stack program by Urbancode covers modern JavaScript development from the ground up. You’ll move from basic React components to complex API-driven applications, finishing with deployment and optimization of real-world full-stack projects."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Introduction to MERN Stack",
      icon: "bi bi-lightbulb",
      defaultOpen: true,
      items: [
        "Overview of full-stack development",
        "Understanding the MERN architecture",
        "Setting up Node.js, npm, and MongoDB",
        "Intro to REST APIs and JSON",
        "Creating your first full-stack project structure"
      ]
    },
    {
      id: 2,
      title: "Beginner – JavaScript & ES6 Essentials",
      icon: "bi bi-code",
      items: [
        "JavaScript fundamentals and modern syntax",
        "Working with arrays, objects, and functions",
        "Asynchronous JavaScript (Promises, async/await)",
        "Error handling and debugging techniques",
        "Using npm and managing dependencies"
      ]
    },
    {
      id: 3,
      title: "Intermediate – Node.js and Express.js",
      icon: "bi bi-server",
      items: [
        "Building a backend with Express.js",
        "Routing and middleware concepts",
        "Handling requests, responses, and validation",
        "Creating and testing RESTful APIs",
        "Authentication with JWT and bcrypt"
      ]
    },
    {
      id: 4,
      title: "Intermediate – MongoDB and Mongoose",
      icon: "bi bi-database",
      items: [
        "Introduction to MongoDB and NoSQL databases",
        "CRUD operations using Mongoose",
        "Schema design and data relationships",
        "Aggregation pipelines and indexing",
        "Connecting MongoDB to Node.js apps"
      ]
    },
    {
      id: 5,
      title: "Advanced – React.js Frontend Development",
      icon: "bi bi-window-stack",
      items: [
        "Understanding React components and JSX",
        "State, props, and component lifecycle",
        "Hooks: useState, useEffect, and custom hooks",
        "Routing with React Router",
        "Building reusable and dynamic UI"
      ]
    },
    {
      id: 6,
      title: "Advanced – Integration and API Handling",
      icon: "bi bi-link-45deg",
      items: [
        "Connecting React frontend with Express backend",
        "Fetching data using Axios and Fetch API",
        "Handling authentication and protected routes",
        "Managing global state with Context API",
        "Error handling and data synchronization"
      ]
    },
    {
      id: 7,
      title: "Expert – Authentication & Security",
      icon: "bi bi-shield-lock",
      items: [
        "JWT-based authentication flow",
        "Password hashing with bcrypt",
        "Securing APIs and frontend routes",
        "Role-based access control",
        "Best practices for production security"
      ]
    },
    {
      id: 8,
      title: "Expert – Deployment & Capstone Project",
      icon: "bi bi-cloud-upload",
      items: [
        "Preparing environment variables and builds",
        "Deploying backend to Render or AWS",
        "Deploying frontend to Netlify or Vercel",
        "Connecting domain and SSL setup",
        "Final project: Building a complete MERN app"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Master Full-Stack JavaScript",
      desc: "Work confidently across frontend and backend using MongoDB, Express, React, and Node.js.",
      icon: "bi bi-laptop"
    },
    {
      title: "Build Scalable REST APIs",
      desc: "Design secure and efficient APIs using Node.js and Express.js.",
      icon: "bi bi-server"
    },
    {
      title: "Develop Dynamic Frontends",
      desc: "Create powerful, component-based UIs with React and modern hooks.",
      icon: "bi bi-window-stack"
    },
    {
      title: "Integrate Frontend & Backend",
      desc: "Connect React applications with Express APIs for smooth data flow.",
      icon: "bi bi-link-45deg"
    },
    {
      title: "Implement Authentication",
      desc: "Add JWT-based authentication and user access control to your apps.",
      icon: "bi bi-shield-lock"
    },
    {
      title: "Deploy Real Projects",
      desc: "Host and manage your MERN stack applications on cloud platforms.",
      icon: "bi bi-cloud-upload"
    }
  ]
}
,
{
  title: "React Native",
  desc: "Master React Native and build real-world mobile apps for Android and iOS. Learn cross-platform development using JavaScript, React, and native APIs.",
  rating: 4.9,
  duration: "1.5 months",
  students: "10,556",
  img: "/images/courses/React_Native.jpg",
  aboutData: {
    topic: "Master React Native — Build High-Performance Cross-Platform Mobile Apps!",
    content1:
      "React Native lets you build mobile apps using JavaScript and React — no need to learn separate languages for Android or iOS. This course takes you from setup to advanced mobile development with live projects.",
    content2:
      "The React Native course by Urbancode covers everything from React fundamentals to mobile-specific APIs, navigation, and backend integration. You’ll build, test, and deploy apps that run seamlessly across both Android and iOS platforms."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Introduction to React Native",
      icon: "bi bi-lightbulb",
      defaultOpen: true,
      items: [
        "What is React Native and how it works",
        "Setting up your environment (Expo and CLI)",
        "Project structure and app components",
        "Understanding React vs React Native",
        "Running your first mobile app"
      ]
    },
    {
      id: 2,
      title: "Beginner – Core Concepts",
      icon: "bi bi-box",
      items: [
        "JSX and component structure",
        "Props and state management",
        "Conditional rendering and styling",
        "Flexbox layout for mobile UI",
        "Reusable components and composition"
      ]
    },
    {
      id: 3,
      title: "Intermediate – Navigation and State Management",
      icon: "bi bi-compass",
      items: [
        "Using React Navigation (Stack, Tab, Drawer)",
        "Passing parameters between screens",
        "Global state management with Context API",
        "Async data flow with Redux Toolkit",
        "Persisting app data with AsyncStorage"
      ]
    },
    {
      id: 4,
      title: "Intermediate – Working with APIs",
      icon: "bi bi-cloud-arrow-down",
      items: [
        "Fetching data from REST APIs",
        "POST, PUT, DELETE operations",
        "Handling loading states and errors",
        "Integration with backend services",
        "Authentication using JWT tokens"
      ]
    },
    {
      id: 5,
      title: "Advanced – Native Features and Device APIs",
      icon: "bi bi-phone",
      items: [
        "Accessing camera and image gallery",
        "Working with location and maps",
        "Push notifications setup",
        "Handling permissions and native modules",
        "Integrating third-party libraries"
      ]
    },
    {
      id: 6,
      title: "Advanced – UI/UX and Animations",
      icon: "bi bi-palette",
      items: [
        "Building responsive mobile layouts",
        "Custom themes and design systems",
        "Using Animated API for transitions",
        "Gesture handling and interactions",
        "Optimizing UI for performance"
      ]
    },
    {
      id: 7,
      title: "Expert – Testing and Deployment",
      icon: "bi bi-award",
      items: [
        "Debugging and performance profiling",
        "Unit testing with Jest",
        "Preparing app for release",
        "Publishing to Google Play and App Store",
        "Maintaining app updates"
      ]
    },
    {
      id: 8,
      title: "Expert – Capstone Project",
      icon: "bi bi-star",
      items: [
        "Building a complete mobile application",
        "Integrating API and authentication",
        "Implementing navigation and state management",
        "Testing and debugging",
        "Final deployment and presentation"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Build Cross-Platform Apps",
      desc: "Create mobile apps for Android and iOS using a single React Native codebase.",
      icon: "bi bi-phone"
    },
    {
      title: "Master React Fundamentals",
      desc: "Learn React components, state, props, and hooks tailored for mobile development.",
      icon: "bi bi-lightning-charge"
    },
    {
      title: "Work with APIs",
      desc: "Fetch, send, and manage real-time data with RESTful API integration.",
      icon: "bi bi-cloud-arrow-down"
    },
    {
      title: "Use Native Device Features",
      desc: "Access camera, GPS, notifications, and sensors using React Native libraries.",
      icon: "bi bi-geo-alt"
    },
    {
      title: "Design Responsive Interfaces",
      desc: "Build pixel-perfect, adaptive UIs using Flexbox and responsive styling.",
      icon: "bi bi-palette"
    },
    {
      title: "Deploy to App Stores",
      desc: "Test, package, and publish your apps to Google Play and Apple App Store.",
      icon: "bi bi-cloud-upload"
    }
  ]
}
,

{
  title: ".NET + Angular",
  desc: "Master full-stack web development using .NET for backend and Angular for frontend. Learn to build secure, scalable, and enterprise-grade web applications with real-world projects.",
  rating: 4.8,
  duration: "2 months",
  students: "9,874",
  img: "/images/courses/DotNet_Angular.png",
  aboutData: {
    topic: "Master .NET + Angular — Build Scalable Enterprise Web Applications End-to-End!",
    content1:
      "This course combines the power of Microsoft’s .NET backend with Angular’s dynamic frontend framework. You’ll learn to build complete, production-ready web applications that integrate seamlessly between client and server.",
    content2:
      "The .NET + Angular course by Urbancode covers everything from backend API development in ASP.NET Core to creating responsive frontends in Angular. You’ll work on real-world projects, learn deployment best practices, and gain hands-on experience with full-stack architecture."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Introduction to Full-Stack Development",
      icon: "bi bi-lightbulb",
      defaultOpen: true,
      items: [
        "Overview of full-stack web development",
        "Understanding .NET and Angular architecture",
        "Setting up Visual Studio and Angular CLI",
        "Creating your first .NET + Angular project",
        "Understanding client-server communication"
      ]
    },
    {
      id: 2,
      title: "Beginner – C# and ASP.NET Core Basics",
      icon: "bi bi-code",
      items: [
        "C# fundamentals and syntax",
        "OOP concepts in C#",
        "Introduction to ASP.NET Core framework",
        "Creating controllers and routes",
        "Dependency Injection and Middleware"
      ]
    },
    {
      id: 3,
      title: "Intermediate – Building RESTful APIs with .NET",
      icon: "bi bi-server",
      items: [
        "Setting up RESTful services with ASP.NET Core",
        "CRUD operations with Entity Framework Core",
        "Working with LINQ and data models",
        "API versioning and validation",
        "Implementing authentication and authorization"
      ]
    },
    {
      id: 4,
      title: "Intermediate – Frontend Development with Angular",
      icon: "bi bi-window-stack",
      items: [
        "Angular architecture and TypeScript basics",
        "Creating components, directives, and pipes",
        "Data binding and event handling",
        "Reactive forms and validations",
        "Routing and lazy loading"
      ]
    },
    {
      id: 5,
      title: "Advanced – Connecting Angular with .NET API",
      icon: "bi bi-link-45deg",
      items: [
        "Integrating Angular frontend with .NET backend",
        "Fetching and displaying API data",
        "JWT authentication and secure endpoints",
        "Handling errors and API responses",
        "Building a role-based user management system"
      ]
    },
    {
      id: 6,
      title: "Advanced – Database & Entity Framework",
      icon: "bi bi-database",
      items: [
        "Connecting SQL Server with .NET",
        "Creating models and migrations",
        "Database relationships (One-to-Many, Many-to-Many)",
        "Stored procedures and raw queries",
        "Optimizing database performance"
      ]
    },
    {
      id: 7,
      title: "Expert – Deployment and DevOps Integration",
      icon: "bi bi-cloud-upload",
      items: [
        "Preparing production builds for Angular and .NET",
        "Hosting backend APIs on Azure or AWS",
        "Deploying Angular frontend to cloud or IIS",
        "Using CI/CD pipelines for automation",
        "Monitoring and maintaining live applications"
      ]
    },
    {
      id: 8,
      title: "Expert – Capstone Project",
      icon: "bi bi-award",
      items: [
        "Designing a full-stack .NET + Angular application",
        "Implementing authentication and CRUD modules",
        "Testing API endpoints and frontend integration",
        "Deploying the final project to production",
        "Final code review and presentation"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Master Full-Stack Development",
      desc: "Build and integrate scalable frontends and backends using Angular and .NET.",
      icon: "bi bi-laptop"
    },
    {
      title: "Create RESTful APIs",
      desc: "Design, develop, and secure APIs with ASP.NET Core and Entity Framework.",
      icon: "bi bi-server"
    },
    {
      title: "Develop Dynamic Frontends",
      desc: "Use Angular to create responsive, component-driven web interfaces.",
      icon: "bi bi-window-stack"
    },
    {
      title: "Implement Authentication",
      desc: "Add JWT-based authentication and user authorization across your stack.",
      icon: "bi bi-shield-lock"
    },
    {
      title: "Work with Databases",
      desc: "Integrate SQL Server and manage data efficiently with Entity Framework.",
      icon: "bi bi-database"
    },
    {
      title: "Deploy Enterprise Applications",
      desc: "Host and maintain your .NET + Angular projects on modern cloud platforms.",
      icon: "bi bi-cloud-upload"
    }
  ]
}
,

{
  title: "React.js",
  desc: "Learn React.js from scratch — build interactive, component-driven web applications with reusable UI, efficient state management, and real-world projects.",
  rating: 5.0,
  duration: "1 month",
  students: "12,642",
  img: "/images/courses/React.jpg",
  aboutData: {
    topic: "Master React.js — Build Dynamic, Modern Web Applications from the Ground Up!",
    content1:
      "This course takes you from the basics of React to advanced concepts like hooks, context API, and optimized rendering. You’ll learn how React works under the hood and how to build scalable, maintainable user interfaces.",
    content2:
      "Through hands-on projects, you’ll understand how to manage state effectively, interact with APIs, and deploy full React applications. By the end, you’ll have the confidence to build production-ready apps using React.js."
  },
  courseContentData: [
    {
      id: 1,
      title: "Beginner – Getting Started with React",
      icon: "bi bi-lightbulb",
      defaultOpen: true,
      items: [
        "Introduction to React and its ecosystem",
        "Setting up the development environment",
        "JSX syntax and rendering elements",
        "Understanding components and props",
        "Creating your first React app"
      ]
    },
    {
      id: 2,
      title: "Beginner – Components and State",
      icon: "bi bi-puzzle",
      items: [
        "Functional vs Class components",
        "State and setState basics",
        "Event handling in React",
        "Conditional rendering",
        "Lists and keys"
      ]
    },
    {
      id: 3,
      title: "Intermediate – React Hooks",
      icon: "bi bi-diagram-3",
      items: [
        "Introduction to Hooks",
        "Using useState and useEffect",
        "Managing multiple states",
        "Custom hooks and reusability",
        "Lifecycle equivalents with Hooks"
      ]
    },
    {
      id: 4,
      title: "Intermediate – State Management and Context API",
      icon: "bi bi-diagram-2",
      items: [
        "Prop drilling problem and solutions",
        "Using Context API for global state",
        "Building custom context providers",
        "Integrating useReducer for complex states",
        "Structuring large-scale React apps"
      ]
    },
    {
      id: 5,
      title: "Advanced – React Router and API Integration",
      icon: "bi bi-globe",
      items: [
        "Routing with React Router",
        "Dynamic routes and nested navigation",
        "Fetching data with Fetch and Axios",
        "Handling API errors and loading states",
        "Displaying and managing remote data"
      ]
    },
    {
      id: 6,
      title: "Advanced – Performance Optimization",
      icon: "bi bi-speedometer2",
      items: [
        "Memoization with React.memo and useMemo",
        "Optimizing re-renders",
        "Code splitting and lazy loading",
        "Error boundaries and fallback UI",
        "Using React DevTools for debugging"
      ]
    },
    {
      id: 7,
      title: "Expert – Project and Deployment",
      icon: "bi bi-award",
      items: [
        "Building a complete React project",
        "Connecting to APIs and managing routes",
        "Implementing form validation",
        "Optimizing and deploying to Vercel/Netlify",
        "Version control with Git and GitHub"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Understand React Fundamentals",
      desc: "Learn the core concepts of React including components, JSX, and props.",
      icon: "bi bi-laptop"
    },
    {
      title: "Work with Hooks",
      desc: "Master useState, useEffect, and custom hooks to manage component logic.",
      icon: "bi bi-diagram-3"
    },
    {
      title: "Manage State Efficiently",
      desc: "Use Context API and reducers to handle global application state.",
      icon: "bi bi-diagram-2"
    },
    {
      title: "Integrate APIs",
      desc: "Connect your React app with real-world APIs using Fetch or Axios.",
      icon: "bi bi-globe"
    },
    {
      title: "Optimize Performance",
      desc: "Apply techniques to reduce re-renders and boost speed in large apps.",
      icon: "bi bi-speedometer2"
    },
    {
      title: "Deploy React Apps",
      desc: "Host your React applications on platforms like Vercel or Netlify.",
      icon: "bi bi-cloud-upload"
    }
  ]
}
,

{
  title: "Python Full Stack",
  desc: "Master full stack web development using Python. Build dynamic web applications with front-end, back-end, and database integration using modern Python frameworks.",
  rating: 4.9,
  duration: "2 months",
  students: "11,845",
  img: "/images/courses/Python_Stack.jpg",
  aboutData: {
    topic: "Master Python Full Stack Development — Build Complete Web Applications from Scratch!",
    content1:
      "This course takes you through the full journey of Python web development — from front-end design with HTML, CSS, and JavaScript to building powerful back-end applications with Flask and Django.",
    content2:
      "By the end of the course, you’ll be able to design responsive UIs, connect to databases like MySQL or MongoDB, manage APIs, and deploy full stack Python web apps on cloud platforms."
  },
  courseContentData: [
    {
      id: 1,
      title: "Frontend Development",
      icon: "bi bi-window",
      defaultOpen: true,
      items: [
        "HTML5, CSS3, and JavaScript fundamentals",
        "Responsive layouts with Flexbox and Grid",
        "Bootstrap for rapid UI development",
        "Integrating APIs into front-end",
        "Version control with Git and GitHub"
      ]
    },
    {
      id: 2,
      title: "Backend Development with Python",
      icon: "bi bi-cpu",
      items: [
        "Python basics and object-oriented programming",
        "Flask framework – routing, templates, and APIs",
        "Django framework – MVC pattern and ORM",
        "Session and authentication handling",
        "RESTful API creation with Flask and Django REST Framework"
      ]
    },
    {
      id: 3,
      title: "Database Management",
      icon: "bi bi-database",
      items: [
        "Relational databases – MySQL and PostgreSQL",
        "CRUD operations and relationships",
        "ORM with Django models and SQLAlchemy",
        "Connecting back-end to databases",
        "MongoDB basics for NoSQL storage"
      ]
    },
    {
      id: 4,
      title: "Advanced Concepts",
      icon: "bi bi-gear",
      items: [
        "Working with JSON and APIs",
        "Error handling and logging",
        "User authentication and authorization",
        "File uploads and form validation",
        "Performance optimization and caching"
      ]
    },
    {
      id: 5,
      title: "Project & Deployment",
      icon: "bi bi-rocket",
      items: [
        "Building a complete full stack web app",
        "Integrating front-end and back-end",
        "Testing with Postman and unit tests",
        "Deploying apps to cloud (Render, Heroku, AWS)",
        "Real-world project: Task Manager or E-commerce App"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Master Frontend Basics",
      desc: "Build visually appealing interfaces with HTML, CSS, and JavaScript.",
      icon: "bi bi-brush"
    },
    {
      title: "Develop Python Backends",
      desc: "Use Flask and Django to handle routing, logic, and APIs.",
      icon: "bi bi-cpu"
    },
    {
      title: "Work with Databases",
      desc: "Perform CRUD operations using MySQL, PostgreSQL, and MongoDB.",
      icon: "bi bi-database"
    },
    {
      title: "Integrate APIs",
      desc: "Connect the front-end and back-end seamlessly through RESTful APIs.",
      icon: "bi bi-link-45deg"
    },
    {
      title: "Deploy Applications",
      desc: "Host and manage your full stack Python projects on cloud servers.",
      icon: "bi bi-cloud-upload"
    },
    {
      title: "Build Real Projects",
      desc: "Apply everything you learn to build and deploy a complete live project.",
      icon: "bi bi-code-slash"
    }
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

  "Cloud and DevOps": {
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
        title: "AI & ML",
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
          },
          
        ]
      }
      ,
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
  "title": "Java",
  "desc": "Learn Core Java from scratch — covering programming fundamentals, OOP, collections, exception handling, and file operations with practical examples.",
  "rating": 5.0,
  "duration": "1 month",
  "students": "12,364",
  "img": "/images/courses/Software_Testing.png",
  "aboutData": {
    "topic": "Master Core Java — The Foundation of Every Developer & Tester!",
    "content1": "This course is built for anyone who wants to gain strong command over Core Java. You’ll learn everything from basic syntax to advanced concepts like OOP, collections, exceptions, and file handling — all with a focus on real-world problem-solving.",
    "content2": "The Java course takes a hands-on approach. You’ll start with programming basics and progress into object-oriented design, data structures, and multithreading. You’ll also explore Java utilities, error handling, and best practices used in software development and testing. By the end, you’ll be confident in writing efficient, reusable, and industry-ready Java code."
  },
  "courseContentData": [
    {
      "id": 1,
      "title": "Beginner – Java Basics",
      "icon": "bi bi-book",
      "defaultOpen": true,
      "items": [
        "Introduction to Java and its ecosystem",
        "Installing Java and setting up IDE (Eclipse/IntelliJ)",
        "Writing your first Java program",
        "Variables, data types, and operators",
        "Conditional statements and loops"
      ]
    },
    {
      "id": 2,
      "title": "Beginner – Object-Oriented Programming (OOP)",
      "icon": "bi bi-diagram-3",
      "items": [
        "Understanding classes and objects",
        "Methods, constructors, and overloading",
        "Inheritance and method overriding",
        "Encapsulation and abstraction",
        "Polymorphism and interface concepts"
      ]
    },
    {
      "id": 3,
      "title": "Intermediate – Data Structures & Collections",
      "icon": "bi bi-stack",
      "items": [
        "Arrays and multi-dimensional arrays",
        "String and StringBuilder manipulation",
        "Introduction to the Collections Framework",
        "List, Set, and Map interfaces",
        "Generics and iterators"
      ]
    },
    {
      "id": 4,
      "title": "Intermediate – Exception Handling & File Operations",
      "icon": "bi bi-folder",
      "items": [
        "Types of exceptions in Java",
        "Try-catch-finally and custom exceptions",
        "Working with files using FileReader and FileWriter",
        "Reading and writing data using Buffered classes",
        "Introduction to serialization and deserialization"
      ]
    },
    {
      "id": 5,
      "title": "Advanced – Multithreading & Advanced Concepts",
      "icon": "bi bi-cpu",
      "items": [
        "Understanding threads and concurrency",
        "Thread lifecycle and synchronization",
        "Java Memory Management and Garbage Collection",
        "Working with Lambda expressions and Streams",
        "Functional programming in Java"
      ]
    },
    {
      "id": 6,
      "title": "Expert – Real-World Applications & Framework Integration",
      "icon": "bi bi-briefcase",
      "items": [
        "Building console-based mini projects",
        "Connecting Java with databases using JDBC",
        "Working with APIs and JSON data",
        "Introduction to Maven and version control (Git)",
        "Final project: end-to-end Java application"
      ]
    }
  ],
  "whatYouLearnData": [
    {
      "title": "Master Core Java Programming",
      "desc": "Learn the core syntax, logic building, and problem-solving in Java.",
      "icon": "bi bi-lightning-charge"
    },
    {
      "title": "Understand OOP Concepts",
      "desc": "Build scalable and reusable code using OOP principles.",
      "icon": "bi bi-diagram-3"
    },
    {
      "title": "Work with Data Structures",
      "desc": "Use arrays, collections, and generics to manage data efficiently.",
      "icon": "bi bi-stack"
    },
    {
      "title": "Handle Exceptions & Files",
      "desc": "Write error-free code with exception handling and file I/O operations.",
      "icon": "bi bi-folder"
    },
    {
      "title": "Explore Advanced Java Topics",
      "desc": "Dive into multithreading, streams, and functional programming.",
      "icon": "bi bi-cpu"
    },
    {
      "title": "Build Real Java Projects",
      "desc": "Develop console and database-based Java applications from scratch.",
      "icon": "bi bi-briefcase"
    }
  ]
}
,

{
  "title": "Selenium",
  "desc": "Master Selenium for web automation testing — learn setup, locators, waits, frameworks, and real-time project implementation from scratch.",
  "rating": 5.0,
  "duration": "1 month",
  "students": "14,872",
  "img": "/images/courses/Selenium.jpg",
  "aboutData": {
    "topic": "Master Selenium — The Industry Standard for Web Automation Testing!",
    "content1": "This course is designed to make you a complete Selenium automation tester. You’ll start with the basics of Selenium WebDriver and gradually move toward building full automation frameworks with TestNG, POM, and CI/CD integration.",
    "content2": "Selenium remains the core tool for browser automation across the QA industry. In this course, you’ll learn everything — from locators, waits, and browser interactions to cross-browser testing, reporting, and integration with build tools. You’ll also get hands-on experience through real-time projects that simulate industry scenarios."
  },
  "courseContentData": [
    {
      "id": 1,
      "title": "Beginner – Selenium Basics",
      "icon": "bi bi-book",
      "defaultOpen": true,
      "items": [
        "Introduction to Selenium and its architecture",
        "Setting up Selenium WebDriver and browser drivers",
        "Understanding the Selenium ecosystem",
        "Creating and executing your first test case",
        "Working with locators: ID, Name, Class, XPath, CSS"
      ]
    },
    {
      "id": 2,
      "title": "Beginner – Browser Automation Essentials",
      "icon": "bi bi-mouse",
      "items": [
        "Interacting with web elements (buttons, inputs, dropdowns)",
        "Handling alerts, popups, and frames",
        "Working with multiple browser windows and tabs",
        "Using waits: implicit and explicit",
        "Taking screenshots and managing sessions"
      ]
    },
    {
      "id": 3,
      "title": "Intermediate – Selenium WebDriver Advanced",
      "icon": "bi bi-gear",
      "items": [
        "Executing JavaScript in Selenium",
        "Mouse and keyboard interactions with Actions class",
        "Handling dynamic elements and AJAX calls",
        "Working with cookies and browser options",
        "Capturing logs and debugging automation"
      ]
    },
    {
      "id": 4,
      "title": "Intermediate – Framework Design with Selenium",
      "icon": "bi bi-window-stack",
      "items": [
        "Building modular and reusable test scripts",
        "Understanding Page Object Model (POM)",
        "Integrating TestNG or PyTest for test management",
        "Parameterization and data-driven testing",
        "Logging and HTML report generation"
      ]
    },
    {
      "id": 5,
      "title": "Advanced – Cross-Browser & Parallel Testing",
      "icon": "bi bi-diagram-3",
      "items": [
        "Using Selenium Grid for distributed testing",
        "Executing tests on multiple browsers and devices",
        "Integrating Selenium with CI/CD tools like Jenkins",
        "Running tests in Docker and cloud environments",
        "Best practices for scaling automation projects"
      ]
    },
    {
      "id": 6,
      "title": "Expert – Real-Time Project Implementation",
      "icon": "bi bi-robot",
      "items": [
        "Building a complete Selenium automation framework",
        "Automating a real-world web application",
        "Implementing reports and reusable utilities",
        "Integrating version control (Git) and CI pipelines",
        "Final project: end-to-end web automation delivery"
      ]
    }
  ],
  "whatYouLearnData": [
    {
      "title": "Master Selenium WebDriver",
      "desc": "Learn to automate browsers, handle web elements, and manage sessions.",
      "icon": "bi bi-lightning-charge"
    },
    {
      "title": "Handle Real-World Web Applications",
      "desc": "Work with alerts, frames, dynamic content, and popups.",
      "icon": "bi bi-mouse"
    },
    {
      "title": "Design Automation Frameworks",
      "desc": "Implement reusable and scalable test structures using POM and TestNG.",
      "icon": "bi bi-window-stack"
    },
    {
      "title": "Execute Parallel & Cross-Browser Tests",
      "desc": "Run Selenium tests across multiple browsers using Grid and CI tools.",
      "icon": "bi bi-diagram-3"
    },
    {
      "title": "Integrate with DevOps Tools",
      "desc": "Connect Selenium with Jenkins, Maven, and Docker for automation pipelines.",
      "icon": "bi bi-gear"
    },
    {
      "title": "Build End-to-End Test Projects",
      "desc": "Develop a complete automation project with reporting and version control.",
      "icon": "bi bi-robot"
    }
  ]
}

      ,
      {
  "title": "Playwright",
  "desc": "Master Playwright end-to-end testing — automate modern web apps with JavaScript/TypeScript, from basics to advanced frameworks.",
  "rating": 5.0,
  "duration": "1 month",
  "students": "11,204",
  "img": "/images/courses/Playwright.jpg",
  "aboutData": {
    "topic": "Master Playwright — Modern End-to-End Automation for Web Applications!",
    "content1": "Learn Playwright from scratch and become an expert in web automation testing using JavaScript or TypeScript. This course teaches you how to automate browsers, handle dynamic elements, perform cross-browser testing, and design scalable test frameworks with ease.",
    "content2": "The Playwright course by Urbancode covers everything from setup to deployment. You’ll begin with the fundamentals of Playwright, understand its locators, and move on to advanced testing, API automation, parallel execution, and CI/CD integration. By the end, you’ll be able to build robust, maintainable automation frameworks used in real-world QA environments."
  },
  "courseContentData": [
    {
      "id": 1,
      "title": "Beginner – Getting Started with Playwright",
      "icon": "bi bi-book",
      "defaultOpen": true,
      "items": [
        "Introduction to Playwright and its advantages over Selenium",
        "Installing and setting up Playwright with Node.js",
        "Understanding browser contexts and Playwright architecture",
        "Creating and running your first test",
        "Exploring Playwright Test Runner and configuration options"
      ]
    },
    {
      "id": 2,
      "title": "Beginner – Working with Locators and Elements",
      "icon": "bi bi-cursor",
      "items": [
        "Locators: CSS, XPath, Text, Role, and advanced selectors",
        "Interacting with input fields, buttons, dropdowns, and checkboxes",
        "Handling alerts, frames, and multiple tabs",
        "Mouse and keyboard actions",
        "Dealing with dynamic elements and waits"
      ]
    },
    {
      "id": 3,
      "title": "Intermediate – Assertions, Waits & Debugging",
      "icon": "bi bi-check2-square",
      "items": [
        "Using Playwright’s built-in assertion library",
        "Waits and timeouts: automatic vs manual",
        "Network request interception and mocking",
        "Capturing screenshots, videos, and traces",
        "Debugging Playwright tests effectively"
      ]
    },
    {
      "id": 4,
      "title": "Intermediate – Test Structure & Framework Design",
      "icon": "bi bi-window-stack",
      "items": [
        "Organizing tests and using fixtures",
        "Implementing Page Object Model (POM)",
        "Parameterization and data-driven testing",
        "Environment variables and test configuration",
        "Custom helpers and reusable utilities"
      ]
    },
    {
      "id": 5,
      "title": "Advanced – Cross-Browser & Parallel Execution",
      "icon": "bi bi-diagram-3",
      "items": [
        "Running tests across Chromium, Firefox, and WebKit",
        "Headless vs headed browser testing",
        "Parallel execution and sharding",
        "Visual testing and screenshot comparison",
        "Scaling tests using Docker and Playwright Cloud"
      ]
    },
    {
      "id": 6,
      "title": "Expert – CI/CD Integration & Real-World Projects",
      "icon": "bi bi-robot",
      "items": [
        "Integrating Playwright tests into Jenkins and GitHub Actions",
        "Building an end-to-end automation framework",
        "Testing modern SPAs (React, Angular, Vue)",
        "Generating HTML and Allure reports",
        "Implementing best practices for production-grade automation"
      ]
    }
  ],
  "whatYouLearnData": [
    {
      "title": "Master Playwright Fundamentals",
      "desc": "Understand Playwright architecture, locators, and automation principles.",
      "icon": "bi bi-lightning-charge"
    },
    {
      "title": "Automate Modern Web Apps",
      "desc": "Create reliable automation for React, Angular, and Vue applications.",
      "icon": "bi bi-browser-chrome"
    },
    {
      "title": "Build Scalable Test Frameworks",
      "desc": "Design maintainable frameworks using the Page Object Model pattern.",
      "icon": "bi bi-window-stack"
    },
    {
      "title": "Run Tests in Parallel & Across Browsers",
      "desc": "Execute tests on Chromium, Firefox, and WebKit efficiently.",
      "icon": "bi bi-cpu"
    },
    {
      "title": "Integrate CI/CD Pipelines",
      "desc": "Automate testing workflows with Jenkins, GitHub Actions, and Docker.",
      "icon": "bi bi-diagram-3"
    },
    {
      "title": "Work on Real Projects",
      "desc": "Develop a complete Playwright automation project from scratch with reporting and CI/CD.",
      "icon": "bi bi-robot"
    }
  ]
      }
      ,

      {
  "title": "TypeScript",
  "desc": "Master testing in TypeScript — write reliable, maintainable, and high-quality tests using Jest, Mocha, and Playwright with TypeScript.",
  "rating": 5.0,
  "duration": "1 month",
  "students": "10,556",
  "img": "/images/courses/TypeScript_Testing.jpg",
  "aboutData": {
    "topic": "Master Testing with TypeScript — From Unit Tests to End-to-End Automation!",
    "content1": "Learn to write clean and type-safe tests for modern web applications using TypeScript. This course covers everything from unit and integration testing to end-to-end automation using tools like Jest, Mocha, Chai, and Playwright — all powered by TypeScript.",
    "content2": "You’ll start by understanding the testing fundamentals and environment setup in TypeScript, then move to writing tests for components, APIs, and full-stack applications. The course also includes advanced topics like mocking, coverage reports, CI/CD integration, and real-world automation projects to make you job-ready."
  },
  "courseContentData": [
    {
      "id": 1,
      "title": "Beginner – TypeScript & Testing Fundamentals",
      "icon": "bi bi-book",
      "defaultOpen": true,
      "items": [
        "Introduction to testing concepts and test-driven development (TDD)",
        "Setting up a TypeScript project with testing tools",
        "TypeScript basics for testing",
        "Writing your first test with Jest and Mocha",
        "Assertions, matchers, and error handling in tests"
      ]
    },
    {
      "id": 2,
      "title": "Beginner – Unit Testing in TypeScript",
      "icon": "bi bi-lightning-charge",
      "items": [
        "Testing functions, classes, and modules",
        "Working with mocks and stubs",
        "Testing async and promise-based functions",
        "Code coverage reports and analysis",
        "Best practices for writing clean unit tests"
      ]
    },
    {
      "id": 3,
      "title": "Intermediate – Integration Testing",
      "icon": "bi bi-diagram-3",
      "items": [
        "Testing APIs and services using Supertest",
        "Mocking databases and external APIs",
        "Integration testing in Node.js and Express apps",
        "Validating data flow across components",
        "Error handling and logging tests"
      ]
    },
    {
      "id": 4,
      "title": "Intermediate – Frontend Testing with TypeScript",
      "icon": "bi bi-window-stack",
      "items": [
        "Testing React and Next.js components using Jest and Testing Library",
        "Snapshot testing and DOM assertions",
        "Mocking browser APIs",
        "Simulating user interactions and events",
        "Accessibility and UI behavior testing"
      ]
    },
    {
      "id": 5,
      "title": "Advanced – End-to-End Testing with Playwright",
      "icon": "bi bi-phone",
      "items": [
        "Setting up Playwright with TypeScript",
        "Writing end-to-end test suites",
        "Cross-browser and mobile testing",
        "Test fixtures and parallel execution",
        "Reporting and debugging automation tests"
      ]
    },
    {
      "id": 6,
      "title": "Expert – CI/CD, Test Optimization & Real Projects",
      "icon": "bi bi-gear",
      "items": [
        "Integrating tests into CI/CD pipelines (GitHub Actions, Jenkins)",
        "Optimizing test performance and speed",
        "Maintaining scalable test suites",
        "Real-world project: complete test automation for a web app",
        "Test documentation and reporting best practices"
      ]
    }
  ],
  "whatYouLearnData": [
    {
      "title": "Master Testing in TypeScript",
      "desc": "Write reliable and type-safe tests for any JavaScript or TypeScript project.",
      "icon": "bi bi-lightning-charge"
    },
    {
      "title": "Work with Modern Testing Tools",
      "desc": "Use Jest, Mocha, Chai, and Playwright to cover all testing levels.",
      "icon": "bi bi-tools"
    },
    {
      "title": "Perform Unit, Integration & E2E Tests",
      "desc": "Test APIs, databases, and full-stack apps efficiently.",
      "icon": "bi bi-diagram-3"
    },
    {
      "title": "Automate Frontend Testing",
      "desc": "Test UI components and user flows with Playwright and Testing Library.",
      "icon": "bi bi-window-stack"
    },
    {
      "title": "Integrate with CI/CD Pipelines",
      "desc": "Run automated tests across environments for continuous delivery.",
      "icon": "bi bi-gear"
    },
    {
      "title": "Work on Real Projects",
      "desc": "Build, test, and deploy automation suites for production-grade web apps.",
      "icon": "bi bi-briefcase"
    }
  ]
}







    ],
  },

  "Net Working": {
    mainCategoryDesc: "Defend the Digital World",
    subDesc: "Protect organizations from digital threats by mastering Network Security, Ethical Hacking, Cryptography, Firewalls, and Penetration Testing. Learn to secure systems, applications, and data against evolving cyber risks.",
    subHeading: "Build a rewarding career as a Cybersecurity Specialist, safeguarding the future of the digital-first economy.",
    mainImage: "/images/courses/Cyber_Security.jpg",

    courses: [
      {
  "title": "CCN",
  "desc": "Master the fundamentals of computer networks — learn IP addressing, routing, switching, and real-world troubleshooting to build a strong foundation in networking.",
  "rating": 5.0,
  "duration": "1 month",
  "students": "8,942",
  "img": "/images/courses/CCN.jpg",
  "aboutData": {
    "topic": "Become a Networking Pro — Master Core Networking Concepts from the Ground Up!",
    "content1": "This CCN course introduces you to the essential concepts of networking. You’ll understand how devices communicate, how data travels across networks, and how to configure routers and switches in real scenarios.",
    "content2": "You’ll gain practical skills in IP addressing, subnetting, VLANs, and routing protocols. Each module is structured to bridge theory with real-world application — preparing you for both professional work environments and advanced certifications like CCNA."
  },
  "courseContentData": [
    {
      "id": 1,
      "title": "Module 1 – Networking Fundamentals",
      "icon": "bi bi-hdd-network",
      "defaultOpen": true,
      "items": [
        "Introduction to Computer Networks",
        "Types of Networks: LAN, WAN, MAN, WLAN",
        "Network Devices: Routers, Switches, Hubs, and Access Points",
        "Understanding the OSI and TCP/IP Models",
        "Data Transmission Methods and Topologies"
      ]
    },
    {
      "id": 2,
      "title": "Module 2 – IP Addressing and Subnetting",
      "icon": "bi bi-diagram-2",
      "items": [
        "IPv4 and IPv6 Addressing",
        "Public vs Private IP Addresses",
        "Subnetting and Supernetting Explained",
        "Classful and Classless Addressing (CIDR)",
        "Calculating Network and Broadcast Addresses"
      ]
    },
    {
      "id": 3,
      "title": "Module 3 – Switching Concepts",
      "icon": "bi bi-switch",
      "items": [
        "Introduction to Ethernet and Switching",
        "Understanding MAC Addresses",
        "Configuring VLANs and Trunking",
        "Inter-VLAN Communication",
        "Spanning Tree Protocol (STP) Basics"
      ]
    },
    {
      "id": 4,
      "title": "Module 4 – Routing Concepts",
      "icon": "bi bi-router",
      "items": [
        "What is Routing?",
        "Static vs Dynamic Routing",
        "Configuring Static Routes",
        "Understanding Routing Protocols: RIP, OSPF, EIGRP",
        "Troubleshooting Routing Issues"
      ]
    },
    {
      "id": 5,
      "title": "Module 5 – Network Security Fundamentals",
      "icon": "bi bi-shield-lock",
      "items": [
        "Understanding Network Threats and Attacks",
        "Securing Switches and Routers",
        "Configuring Passwords and Access Control Lists (ACLs)",
        "Firewall and VPN Basics",
        "Best Practices for Network Security"
      ]
    },
    {
      "id": 6,
      "title": "Module 6 – Practical Networking & Troubleshooting",
      "icon": "bi bi-tools",
      "items": [
        "Setting up a small office network (SOHO)",
        "Using Cisco Packet Tracer for Simulations",
        "Ping, Traceroute, and Other Network Tools",
        "Troubleshooting Layer 1–3 Issues",
        "Final Networking Project and Review"
      ]
    }
  ],
  "whatYouLearnData": [
    {
      "title": "Understand How Networks Work",
      "desc": "Learn the core principles behind how data moves between devices across networks.",
      "icon": "bi bi-hdd-network"
    },
    {
      "title": "Master IP Addressing",
      "desc": "Gain confidence in subnetting, IP planning, and addressing schemes for real-world networks.",
      "icon": "bi bi-diagram-2"
    },
    {
      "title": "Configure Routers and Switches",
      "desc": "Learn to set up and manage network devices using Cisco standards.",
      "icon": "bi bi-router"
    },
    {
      "title": "Troubleshoot Network Issues",
      "desc": "Use diagnostic tools to identify and fix common connectivity problems.",
      "icon": "bi bi-tools"
    },
    {
      "title": "Secure Network Devices",
      "desc": "Implement ACLs, passwords, and security practices to protect network infrastructure.",
      "icon": "bi bi-shield-lock"
    },
    {
      "title": "Prepare for CCNA-Level Skills",
      "desc": "Build a strong foundation for Cisco certifications and real-world networking jobs.",
      "icon": "bi bi-award"
    }
  ]
}

      ,
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
  "Digital Marketing": {
    mainCategoryDesc: "Become a SEO Expert",
    subDesc: "Master the art of Search Engine Optimization (SEO) and learn how to drive organic traffic to your website. Understand the essential strategies for on-page and off-page SEO, keyword research, link building, and content optimization to rank higher on search engines.",
    subHeading: "Cybersecurity protects digital assets from cyber threats using advanced tools and practices. It ensures data privacy, integrity, and safe online operations.",
    mainImage: "/images/courses/SEO.jpg",

    courses: [
      {
        title: "SEO",
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
      {
  title: "Social Media Management",
  desc: "Master social media marketing and management. Learn to grow brands, engage audiences, and drive results across major platforms like Instagram, Facebook, LinkedIn, and X (Twitter).",
  rating: 4.8,
  duration: "1 month",
  students: "9,842",
  img: "/images/courses/SMM.jpg",
  aboutData: {
    topic: "Become a Social Media Expert — Build, Grow, and Manage Brands That Stand Out Online!",
    content1:
      "This course teaches you how to manage social media platforms strategically — from planning content calendars to running paid ad campaigns. Learn how to analyze insights, optimize engagement, and maintain a consistent brand presence.",
    content2:
      "The Social Media Management course by Urbancode is designed for aspiring marketers, entrepreneurs, and creators who want to turn content into growth. You’ll master content strategy, platform algorithms, ad tools, and analytics to build effective campaigns that deliver measurable impact."
  },
  courseContentData: [
    {
      id: 1,
      title: "Introduction to Social Media Management",
      icon: "bi bi-info-circle",
      defaultOpen: true,
      items: [
        "Overview of digital marketing and SMM",
        "Understanding social media ecosystems",
        "Popular platforms and their audiences",
        "Organic vs paid social media",
        "Role of a social media manager"
      ]
    },
    {
      id: 2,
      title: "Building a Brand Presence",
      icon: "bi bi-megaphone",
      items: [
        "Setting up business profiles on major platforms",
        "Defining brand voice and visual identity",
        "Creating a social media content strategy",
        "Hashtags, trends, and post optimization",
        "Community management and engagement"
      ]
    },
    {
      id: 3,
      title: "Content Creation & Scheduling",
      icon: "bi bi-camera-video",
      items: [
        "Types of content — images, videos, carousels, reels, and stories",
        "Content planning and calendar management",
        "Tools like Canva, Buffer, and Hootsuite",
        "Storytelling and writing effective captions",
        "Timing and frequency optimization"
      ]
    },
    {
      id: 4,
      title: "Paid Advertising & Campaigns",
      icon: "bi bi-cash-coin",
      items: [
        "Introduction to Meta Ads Manager",
        "Creating ad sets and targeting audiences",
        "Budget allocation and bidding strategies",
        "Analyzing ad performance and ROI",
        "Cross-platform ad integration"
      ]
    },
    {
      id: 5,
      title: "Analytics & Performance Tracking",
      icon: "bi bi-graph-up",
      items: [
        "Understanding reach, engagement, and conversion metrics",
        "Using platform insights (Meta, LinkedIn, X, Instagram)",
        "Google Analytics for social tracking",
        "Monthly report creation and KPIs",
        "Improving strategy through data-driven insights"
      ]
    },
    {
      id: 6,
      title: "Strategy, Trends & Tools",
      icon: "bi bi-lightbulb",
      items: [
        "Staying ahead of algorithm updates",
        "Influencer collaborations and partnerships",
        "Crisis management and online reputation handling",
        "Emerging platforms (Threads, TikTok, YouTube Shorts)",
        "Automation and AI tools for social media"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Develop Social Media Strategies",
      desc: "Plan and execute social media strategies that align with brand goals.",
      icon: "bi bi-bullseye"
    },
    {
      title: "Create Engaging Content",
      desc: "Design visuals and write posts that capture attention and drive interaction.",
      icon: "bi bi-pencil-square"
    },
    {
      title: "Run Paid Ad Campaigns",
      desc: "Use Meta, LinkedIn, and Google Ads to reach targeted audiences effectively.",
      icon: "bi bi-cash"
    },
    {
      title: "Analyze Performance Metrics",
      desc: "Track engagement, impressions, and conversions using analytics tools.",
      icon: "bi bi-graph-up-arrow"
    },
    {
      title: "Manage Online Communities",
      desc: "Engage followers, handle feedback, and build long-term relationships.",
      icon: "bi bi-chat-dots"
    },
    {
      title: "Stay Ahead of Trends",
      desc: "Learn to adapt quickly to new tools, algorithms, and audience behaviors.",
      icon: "bi bi-lightning-charge"
    }
  ]
      }
      ,

      {
  title: "LinkedIn Marketing & Personal Branding",
  desc: "Master LinkedIn marketing to build your professional brand, grow your network, and generate quality leads. Learn content strategy, analytics, and ad management to boost your visibility.",
  rating: 4.8,
  duration: "1 month",
  students: "8,913",
  img: "/images/courses/LinkedIn_Marketing.jpg",
  aboutData: {
    topic: "Master LinkedIn Marketing — Build Influence, Grow Your Network, and Generate Business Leads!",
    content1:
      "This course teaches you how to use LinkedIn strategically — from optimizing your profile to creating impactful content that attracts the right audience. You’ll learn how to build credibility, expand your reach, and generate professional opportunities.",
    content2:
      "The LinkedIn Marketing & Personal Branding course by Urbancode helps professionals, entrepreneurs, and marketers master LinkedIn’s tools for business growth. You’ll explore personal branding techniques, content optimization, analytics, and advertising to position yourself or your brand as an industry authority."
  },
  courseContentData: [
    {
      id: 1,
      title: "Introduction to LinkedIn Marketing",
      icon: "bi bi-info-circle",
      defaultOpen: true,
      items: [
        "Understanding LinkedIn as a professional network",
        "Why LinkedIn matters for personal and business branding",
        "Types of LinkedIn users and goals",
        "Overview of organic vs paid reach",
        "LinkedIn algorithm basics"
      ]
    },
    {
      id: 2,
      title: "Profile Optimization",
      icon: "bi bi-person-badge",
      items: [
        "Creating a professional and optimized profile",
        "Writing effective headlines and summaries",
        "Profile banners, featured section, and portfolios",
        "Optimizing for SEO and visibility",
        "Building credibility through endorsements and recommendations"
      ]
    },
    {
      id: 3,
      title: "Content Strategy & Growth",
      icon: "bi bi-pencil-square",
      items: [
        "Content formats: text posts, carousels, videos, and articles",
        "Crafting engaging hooks and storytelling",
        "Hashtags, tagging, and timing strategies",
        "Building consistent posting habits",
        "Analyzing post engagement and insights"
      ]
    },
    {
      id: 4,
      title: "Networking & Lead Generation",
      icon: "bi bi-people",
      items: [
        "Finding and connecting with the right audience",
        "Relationship building through comments and DMs",
        "Generating inbound leads through content",
        "LinkedIn Sales Navigator essentials",
        "B2B outreach and conversion strategies"
      ]
    },
    {
      id: 5,
      title: "Company Page Management",
      icon: "bi bi-building",
      items: [
        "Creating and managing company pages",
        "Building a brand presence for organizations",
        "Employee advocacy and engagement",
        "Cross-posting and consistency across teams",
        "Analyzing company insights and follower growth"
      ]
    },
    {
      id: 6,
      title: "LinkedIn Ads & Analytics",
      icon: "bi bi-graph-up",
      items: [
        "Introduction to LinkedIn Campaign Manager",
        "Types of ad campaigns and objectives",
        "Targeting, budgeting, and bidding strategies",
        "Performance tracking and ROI analysis",
        "Optimizing campaigns for better engagement"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Optimize Your Profile",
      desc: "Create a strong, search-optimized LinkedIn profile that attracts recruiters and clients.",
      icon: "bi bi-person-check"
    },
    {
      title: "Build a Personal Brand",
      desc: "Position yourself as an expert through authentic and consistent content.",
      icon: "bi bi-star"
    },
    {
      title: "Grow Your Network",
      desc: "Connect with professionals, founders, and potential clients in your niche.",
      icon: "bi bi-people"
    },
    {
      title: "Generate Leads & Opportunities",
      desc: "Use content and outreach strategies to bring in high-quality business leads.",
      icon: "bi bi-briefcase"
    },
    {
      title: "Run LinkedIn Ads",
      desc: "Plan, create, and analyze paid campaigns for brand visibility and conversions.",
      icon: "bi bi-bullseye"
    },
    {
      title: "Track and Improve Performance",
      desc: "Use LinkedIn Analytics to measure impact, reach, and engagement.",
      icon: "bi bi-graph-up-arrow"
    }
  ]
      }
      ,

      {
  title: "Meta Campaigns",
  desc: "Learn how to create, manage, and optimize ad campaigns on Facebook and Instagram using Meta Ads Manager. Drive traffic, leads, and conversions through data-backed advertising strategies.",
  rating: 4.9,
  duration: "1 month",
  students: "10,472",
  img: "/images/courses/Meta_Campaigns.jpg",
  aboutData: {
    topic: "Master Meta Campaigns — Build High-Converting Facebook & Instagram Ads!",
    content1:
      "This course teaches you how to plan, launch, and optimize paid ad campaigns using Meta Ads Manager. Learn to reach the right audience, design effective creatives, and analyze campaign data to maximize ROI.",
    content2:
      "The Meta Campaigns course by Urbancode is perfect for digital marketers, entrepreneurs, and freelancers looking to scale their online presence. You’ll explore every part of Meta advertising — from strategy to ad creation, audience segmentation, budgeting, analytics, and retargeting."
  },
  courseContentData: [
    {
      id: 1,
      title: "Introduction to Meta Advertising",
      icon: "bi bi-info-circle",
      defaultOpen: true,
      items: [
        "Overview of Facebook and Instagram marketing",
        "Understanding Meta ecosystem and Ads Manager",
        "Ad objectives and campaign hierarchy (Campaign → Ad Set → Ad)",
        "Organic vs Paid strategy",
        "Compliance and Meta ad policies"
      ]
    },
    {
      id: 2,
      title: "Setting Up Meta Business Suite",
      icon: "bi bi-gear",
      items: [
        "Creating and managing a Business Manager account",
        "Connecting Facebook Page and Instagram account",
        "Setting up Ad Accounts and Payment Methods",
        "Facebook Pixel and Meta Conversion API setup",
        "Access and permissions management"
      ]
    },
    {
      id: 3,
      title: "Audience Targeting & Strategy",
      icon: "bi bi-people",
      items: [
        "Understanding Core, Custom, and Lookalike Audiences",
        "Geo, demographic, and interest-based targeting",
        "Behavioral and retargeting strategies",
        "Building audience personas",
        "Ad placement optimization across Meta platforms"
      ]
    },
    {
      id: 4,
      title: "Creating Effective Ad Campaigns",
      icon: "bi bi-megaphone",
      items: [
        "Choosing the right campaign objective (Traffic, Leads, Conversions, Awareness)",
        "Designing ad creatives and copywriting best practices",
        "A/B testing creatives and CTAs",
        "Carousel, Video, and Story ad formats",
        "Mobile-first and performance-based design principles"
      ]
    },
    {
      id: 5,
      title: "Budgeting & Bidding",
      icon: "bi bi-cash-stack",
      items: [
        "Setting daily and lifetime budgets",
        "Understanding CPM, CPC, and CPA models",
        "Bid strategies: lowest cost vs cost cap",
        "Campaign scheduling and pacing",
        "Budget optimization for scaling"
      ]
    },
    {
      id: 6,
      title: "Analytics & Optimization",
      icon: "bi bi-graph-up",
      items: [
        "Tracking performance using Meta Ads Manager",
        "Key metrics: CTR, CPA, ROAS, and engagement rate",
        "Custom dashboards and reports",
        "Retargeting and lookalike campaigns",
        "Improving ad quality and relevance score"
      ]
    },
    {
      id: 7,
      title: "Advanced Campaign Strategies",
      icon: "bi bi-lightning-charge",
      items: [
        "Dynamic product ads and catalog sales",
        "Lead generation campaigns with instant forms",
        "Retargeting using Pixel data",
        "Automated rules and scaling strategies",
        "Integrating WhatsApp, Messenger, and website conversions"
      ]
    }
  ],
  whatYouLearnData: [
    {
      title: "Understand Meta Ad Ecosystem",
      desc: "Learn how Facebook and Instagram Ads Manager works and structure campaigns efficiently.",
      icon: "bi bi-diagram-3"
    },
    {
      title: "Create Winning Ad Campaigns",
      desc: "Design and run high-converting campaigns that attract the right audience.",
      icon: "bi bi-megaphone"
    },
    {
      title: "Target the Right Audience",
      desc: "Use advanced targeting and retargeting strategies to maximize ROI.",
      icon: "bi bi-bullseye"
    },
    {
      title: "Manage Budgets & Bids",
      desc: "Plan, allocate, and optimize ad spending for better cost efficiency.",
      icon: "bi bi-cash"
    },
    {
      title: "Analyze Performance",
      desc: "Use analytics tools to measure and improve campaign success.",
      icon: "bi bi-graph-up-arrow"
    },
    {
      title: "Run Advanced Campaigns",
      desc: "Leverage dynamic ads, automation, and conversion tracking for pro-level campaigns.",
      icon: "bi bi-lightbulb"
    }
  ]
      }





      ,

    ]
  },
  "Health Care": {
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