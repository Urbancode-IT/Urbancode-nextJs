const coursesData = {
  "Programming Languages": {
    mainCategoryDesc: "Build Your Tommorow with Code",
    subDesc:
      "Discover, learn, and excel in the world’s most popular programming languages including Java, Python, C, C++, and HTML. Gain the ability to design algorithms, develop scalable solutions, and innovate in high-demand fields such as software engineering, data science, cybersecurity, and automation.",
    subHeading:
      "Transform your coding knowledge into job-ready development expertise that accelerates your career.",
    mainImage: "/images/courses/Programming_Languages.webp",

    courses: [
      {
        title: "Core Java",
        desc: "Build a rock-solid programming foundation with our Core Java training. Master Object-Oriented Programming (OOP) concepts, syntax, and multithreading to crack enterprise software developer interviews.",
        rating: 4.5,
        duration: "3 months",
        students: "956",
        img: "/images/courses/java_cc.png",
        curriculumUrls: ["/curriculum/UC_Adv Java Curriculum v1.0.pdf"],
        aboutData: {
          topic:
            "Master Core Java to Build Strong Object-Oriented Programming Skills",
          content1:
            "Develop solid foundations in Java programming with hands-on experience. Learn OOP concepts, exception handling, multithreading, and collection frameworks used in enterprise applications.",
          content2:
            "The Core Java course at Urbancode prepares you for real-world software development with projects, tools, and strong programming discipline.",
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
              "Arrays and strings",
            ],
          },
          {
            id: 2,
            title: "Object-Oriented Programming",
            icon: "bi bi-diagram-3",
            items: [
              "Classes, objects, and methods",
              "Constructors and overloading",
              "Inheritance, polymorphism, abstraction, and encapsulation",
              "Interfaces and packages",
            ],
          },
          {
            id: 3,
            title: "Exception Handling & File I/O",
            icon: "bi bi-file-earmark-text",
            items: [
              "Try, catch, and finally blocks",
              "Custom exceptions",
              "Working with files and buffers",
              "Serialization basics",
            ],
          },
          {
            id: 4,
            title: "Advanced Core Concepts",
            icon: "bi bi-gear",
            items: [
              "Multithreading and concurrency",
              "Java Collection Framework",
              "JDBC database connectivity",
              "Introduction to JVM memory model",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master OOP Programming",
            desc: "Design scalable software using object-oriented principles.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Develop Console Applications",
            desc: "Build functional applications using Core Java libraries.",
            icon: "bi bi-terminal",
          },
          {
            title: "Integrate Databases",
            desc: "Apply JDBC for real-time database operations.",
            icon: "bi bi-hdd-network",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Advanced Java",
        desc: "Accelerate your backend career with Advanced Java certification. Master Spring Boot, Microservices, JDBC, and REST APIs to build enterprise-grade web applications and secure lucrative tech roles.",
        rating: 4.6,
        duration: "1 month",
        students: "784",
        img: "/images/courses/advanced-java.webp",
        curriculumUrls: ["/curriculum/UC_Adv Java Curriculum v1.0.pdf"],
        aboutData: {
          topic:
            "Master Advanced Java — From Core Concepts to Enterprise Development!",
          content1:
            "Take your Java skills beyond the basics. Learn advanced OOP, JDBC, Servlets, JSP, and Spring Boot while building scalable web and enterprise applications. This course blends theory with practical projects to make you job-ready.",
          content2:
            "The Advanced Java course by Urbancode goes beyond syntax to cover real-world application development. You’ll learn multi-threading, collections, and exception handling, then move into frameworks like Spring, Hibernate, and JPA. The course also includes training in RESTful APIs, Microservices, and DevOps integration to prepare you for enterprise-level roles in backend and full-stack development.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Core Java Refresher",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Java and JVM architecture",
              "Setting up the Java environment (JDK, IDEs)",
              "Data types, operators, and control structures",
              "Classes, objects, and methods",
              "Constructors, inheritance, and polymorphism",
              "Exception handling and debugging",
            ],
          },
          {
            id: 2,
            title: "Working with Collections",
            icon: "bi bi-database",
            items: [
              "Arrays and ArrayList",
              "Collections Framework (List, Set, Map)",
              "Generics and Wrapper classes",
              "Comparable vs Comparator",
              "Iterators and enhanced for-loops",
            ],
          },
          {
            id: 3,
            title: "Input/Output and Threads",
            icon: "bi bi-window",
            items: [
              "File handling with Java I/O and NIO",
              "Serialization and deserialization",
              "Multithreading and synchronization",
              "Thread lifecycle and concurrency",
              "Lambda expressions and functional interfaces",
            ],
          },
          {
            id: 4,
            title: "Database Connectivity (JDBC)",
            icon: "bi bi-gear",
            items: [
              "Introduction to JDBC",
              "Connecting Java with MySQL / PostgreSQL",
              "Executing SQL queries from Java",
              "PreparedStatement and ResultSet",
              "Transaction management",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Core & Advanced Java",
            desc: "Deep dive into OOP, multithreading, collections, and exception handling.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Build Enterprise Web Apps",
            desc: "Develop scalable web applications using Servlets, JSP, and Spring Boot.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Work with Databases",
            desc: "Connect Java applications to SQL databases using JDBC and Hibernate.",
            icon: "bi bi-database",
          },
          {
            title: "Create RESTful APIs",
            desc: "Build secure and efficient APIs using Spring MVC and Spring Boot.",
            icon: "bi bi-gear",
          },
          {
            title: "Learn Microservices & DevOps",
            desc: "Deploy Spring Boot microservices with Docker and CI/CD pipelines.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Capstone Project",
            desc: "Build and deploy a complete enterprise-grade application end-to-end.",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Core Python",
       curriculumUrls: ["/curriculum/UC_Core_Python v1.0.pdf"],

        desc: "Kickstart your tech career with our comprehensive Core Python programming course. Master fundamental logic, data handling, and OOP concepts to unlock high-demand opportunities in AI and Data Science.",
        rating: 4.5,
        duration: "3 months",
        students: "956",
        img: "/images/courses/python.webp",
        aboutData: {
          topic: "Build Strong Python Foundations from Scratch",
          content1:
            "Learn the fundamentals of Python programming with hands-on exercises and practical examples. Understand syntax, logic building, data structures, and modular programming techniques used in real-world applications.",
          content2:
            "This course prepares you to move confidently into advanced technologies like web development, automation, data analytics, and AI.",
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
              "Conditional statements and loops",
            ],
          },
          {
            id: 2,
            title: "Data Handling in Python",
            icon: "bi bi-collection",
            items: [
              "Lists, tuples, sets, and dictionaries",
              "String manipulation",
              "Functions and lambda expressions",
              "Modules and packages",
            ],
          },
          {
            id: 3,
            title: "Error Handling and Files",
            icon: "bi bi-file-code",
            items: [
              "Exception handling techniques",
              "Working with text and binary files",
              "Importing and using external libraries",
            ],
          },
          {
            id: 4,
            title: "Introduction to OOP",
            icon: "bi bi-diagram-2",
            items: [
              "Classes and objects",
              "Constructors and special methods",
              "Encapsulation, inheritance, and polymorphism",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Write Python Programs",
            desc: "Develop clean and efficient code with beginner-friendly syntax.",
            icon: "bi bi-lightbulb",
          },
          {
            title: "Data and File Handling",
            desc: "Work confidently with user data and file operations.",
            icon: "bi bi-folder2-open",
          },
          {
            title: "OOP Foundation",
            desc: "Build a strong base for advanced Python development.",
            icon: "bi bi-cpu",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Advanced Python",
        desc: "Become an elite Python Developer. Master Advanced Python training covering APIs, extensive data analysis, web frameworks, and automation scripts to secure top-tier backend engineering positions.",
        rating: 4.5,
        duration: "1 month",
        students: "755",
        img: "/images/courses/advanced-python.webp",
        aboutData: {
          topic:
            "Master Advanced Python — From Core Concepts to Data Science & Web Development!",
          content1:
            " Take your Python skills to the next level! Learn advanced programming concepts, data analysis, web development, and real-world project integration. This coursehelps you move from beginner to expert with hands-on exercises and live projects.",
          content2:
            "The Advanced Python course by Urbancode covers everything from Python fundamentals to complex application development. Starting with essential syntax and OOP principles, you’ll move through advanced concepts like decorators, asynchronous programming, and frameworks such as Flask and Django. The program concludes with expert-level training in Data Science, Deep Learning, and DevOps integration, making you industry-ready.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Python Fundamentals",
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
            title: "Working with Data",
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
            title: "Building Applications",
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
            title: "Advanced Python Topics",
            icon: "bi bi-gear",
            items: [
              "Decorators and closures",
              "Iterators and generators",
              "Context managers and metaclasses",
              "Asynchronous programming",
              "Unit testing and debugging",
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
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "C and C++ Programming",
                                curriculumUrls: ["/curriculum/UC_C Programming Curriculum v1.0.pdf"],
                                                        curriculumUrls: ["/curriculum/UC_C++ Programming for Beginners Curriculum v1.0.pdf"],


        desc: "Master high-performance development with our C & C++ certification. Learn logic building, memory management, and competitive programming skills essential for top-tier product company placements.",
        rating: 4.8,
        duration: "1.5 months",
        students: "527",
        img: "/images/courses/c-cpp.webp",
        aboutData: {
          topic: "Master C and C++ — Build Strong Programming Foundations!",
          content1:
            "Start your programming journey with C and C++, two of the most powerful and widely used languages in software development. Understand how computers process logic, manage memory, and execute code efficiently.",
          content2:
            "The C and C++ course by Urbancode takes you from basic syntax to advanced object-oriented programming. You'll learn how to build programs, use functions, manage data structures, and apply OOP concepts — preparing you for high-performance application development and competitive programming.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Getting Started with C",
            icon: "bi bi-terminal",
            defaultOpen: true,
            items: [
              "Introduction to C and its history",
              "Setting up the compiler and writing your first program",
              "Basic syntax, keywords, and data types",
              "Variables, constants, and operators",
              "Input and output in C",
            ],
          },
          {
            id: 2,
            title: "Control Flow and Loops",
            icon: "bi bi-arrow-repeat",
            items: [
              "Conditional statements (if, else, switch)",
              "Loops (for, while, do-while)",
              "Break, continue, and goto statements",
              "Practical examples and pattern problems",
            ],
          },
          {
            id: 3,
            title: "Functions and Arrays",
            icon: "bi bi-braces",
            items: [
              "Defining and calling functions",
              "Function parameters and return types",
              "Understanding arrays and multi-dimensional arrays",
              "Passing arrays to functions",
              "Scope and lifetime of variables",
            ],
          },
          {
            id: 4,
            title: "Pointers and Memory Management",
            icon: "bi bi-memory",
            items: [
              "Introduction to pointers and addresses",
              "Pointer arithmetic",
              "Dynamic memory allocation (malloc, calloc, free)",
              "Pointers with arrays and functions",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Core Programming Concepts",
            desc: "Understand how computers process instructions, manage memory, and execute logic.",
            icon: "bi bi-cpu",
          },
          {
            title: "Build Logic and Problem-Solving Skills",
            desc: "Practice loops, conditions, and functions to strengthen your logical thinking.",
            icon: "bi bi-lightbulb",
          },
          {
            title: "Work with Memory and Pointers",
            desc: "Gain deep knowledge of pointers, dynamic memory, and efficient resource management.",
            icon: "bi bi-memory",
          },
          {
            title: "Learn Object-Oriented Programming",
            desc: "Master OOP principles like inheritance, polymorphism, and abstraction using C++.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Explore the Standard Template Library",
            desc: "Use STL containers and algorithms to write clean, optimized, reusable code.",
            icon: "bi bi-collection",
          },
          {
            title: "Build Real-World Applications",
            desc: "Develop a functional console-based project using modern C++ practices.",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Data Structures and Algorithms (DSA)",
        desc: "Crack technical interviews at top FAANG and product-based companies. Master Data Structures and Algorithms (DSA) with extensive problem-solving, pattern recognition, and optimized logic building.",
        rating: 4.8,
        duration: "1.5 months",
        students: "200",
        img: "/images/courses/dsa.webp",
        aboutData: {
          topic:
            "Master Data Structures & Algorithms — Build Strong Foundations for Coding and Interviews!",
          content1:
            "Learn how to think like a programmer and solve complex problems efficiently. This DSA course covers every essential concept — arrays, linked lists, stacks, queues, trees, graphs, recursion, dynamic programming, and more — all taught through real coding examples and challenges.",
          content2:
            "The DSA course by Urbancode focuses on practical understanding and problem-solving. You’ll master core data structures, algorithmic techniques, and pattern-based problem-solving used in coding interviews. Each module includes coding exercises, mock tests, and real-world challenges designed to prepare you for competitive programming and top-tier tech placements.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Course Introduction & DSA Fundamentals",
            icon: "bi bi-play-circle",
            defaultOpen: true,
            items: [
              "Course roadmap and interview preparation strategy",
              "What are Data Structures and Algorithms?",
              "Real-world applications of DSA",
              "Coding platforms setup",
              "Time & Space Complexity",
              "Big O, Omega & Theta Notation",
              "Complexity analysis techniques",
            ],
          },
          {
            id: 2,
            title: "Arrays & Strings",
            icon: "bi bi-grid",
            items: [
              "Static & Dynamic Arrays",
              "Array operations and memory representation",
              "Prefix Sum & Suffix Sum",
              "Kadane's Algorithm",
              "Dutch National Flag Algorithm",
              "Moore Voting Algorithm",
              "String Fundamentals",
              "Palindrome & Anagram Problems",
              "KMP Algorithm",
              "Z Algorithm & String Hashing",
            ],
          },
          {
            id: 3,
            title: "Sorting Algorithms",
            icon: "bi bi-sort-down",
            items: [
              "Bubble Sort",
              "Selection Sort",
              "Insertion Sort",
              "Merge Sort",
              "Quick Sort",
              "Heap Sort",
              "Counting Sort",
              "Radix Sort",
              "Bucket Sort",
              "K-th Element & Sorting Patterns",
            ],
          },
          {
            id: 4,
            title: "Hashing & Hash Maps",
            icon: "bi bi-hash",
            items: [
              "Hash Functions",
              "Collision Handling",
              "Chaining & Open Addressing",
              "Linear Probing & Double Hashing",
              "HashMap & HashSet Internals",
              "Frequency Counting",
              "Duplicate Detection",
              "Caching & Database Indexing",
            ],
          },
          {
            id: 5,
            title: "Matrix & Traversal Patterns",
            icon: "bi bi-table",
            items: [
              "Matrix Representation",
              "Row & Column Traversal",
              "Spiral Traversal",
              "Diagonal Traversal",
              "Zig-Zag Traversal",
              "Matrix Problem Solving Patterns",
            ],
          },
          {
            id: 6,
            title: "Two Pointers & Sliding Window",
            icon: "bi bi-arrow-left-right",
            items: [
              "Two Pointer Technique",
              "Fast & Slow Pointer",
              "Opposite Direction Pointers",
              "Fixed Size Sliding Window",
              "Dynamic Sliding Window",
              "Monotonic Window",
            ],
          },
          {
            id: 7,
            title: "Binary Search",
            icon: "bi bi-search",
            items: [
              "Iterative Binary Search",
              "Recursive Binary Search",
              "Lower & Upper Bound",
              "Search on Answer",
              "Rotated Sorted Arrays",
              "Binary Search on Matrix",
              "2D Search Problems",
            ],
          },
          {
            id: 8,
            title: "Stack & Queue",
            icon: "bi bi-stack",
            items: [
              "Stack using Arrays & Linked Lists",
              "Monotonic Stack",
              "Expression Evaluation",
              "Parentheses Problems",
              "Queue Operations",
              "Circular Queue",
              "Deque",
              "Applications in BFS & Scheduling",
            ],
          },
          {
            id: 9,
            title: "Linked Lists",
            icon: "bi bi-diagram-3",
            items: [
              "Singly Linked List",
              "Doubly Linked List",
              "Circular Linked List",
              "Insertion & Deletion",
              "Reverse Linked List",
              "Fast & Slow Pointer Pattern",
              "Merge Linked Lists",
            ],
          },
          {
            id: 10,
            title: "Recursion & Backtracking",
            icon: "bi bi-arrow-repeat",
            items: [
              "Recursion Fundamentals",
              "Call Stack & Recursion Tree",
              "Divide and Conquer",
              "Merge Sort & Quick Sort",
              "Backtracking Basics",
              "Decision Tree Approach",
              "Advanced Backtracking Patterns",
            ],
          },
          {
            id: 11,
            title: "Heap & Priority Queue",
            icon: "bi bi-triangle",
            items: [
              "Min Heap & Max Heap",
              "Heap Operations",
              "Heapify Process",
              "Priority Queue Internals",
              "Top K Problems",
              "Real-world Applications",
            ],
          },
          {
            id: 12,
            title: "Trees & Binary Search Trees",
            icon: "bi bi-tree",
            items: [
              "Tree Terminologies",
              "Binary Tree Traversals",
              "Level Order Traversal",
              "Binary Search Trees",
              "BST Operations",
              "AVL Trees",
              "Red Black Trees",
              "B Trees & B+ Trees",
            ],
          },
          {
            id: 13,
            title: "Graphs",
            icon: "bi bi-share",
            items: [
              "Graph Representation",
              "Adjacency Matrix & List",
              "Breadth First Search (BFS)",
              "Depth First Search (DFS)",
              "Dijkstra Algorithm",
              "Bellman Ford Algorithm",
              "Kruskal & Prim's MST",
              "Topological Sort",
              "Union Find (DSU)",
            ],
          },
          {
            id: 14,
            title: "Greedy Algorithms",
            icon: "bi bi-lightning-charge",
            items: [
              "Greedy Strategy",
              "When to Use Greedy",
              "Greedy vs Dynamic Programming",
              "Classic Greedy Problems",
              "Optimization Techniques",
            ],
          },
          {
            id: 15,
            title: "Dynamic Programming",
            icon: "bi bi-cpu",
            items: [
              "Memoization",
              "Tabulation",
              "Top Down & Bottom Up DP",
              "Space Optimization",
              "Knapsack Problems",
              "DP on Strings",
              "DP on Matrix",
              "Stock DP",
              "Tree & Graph DP",
            ],
          },
          {
            id: 16,
            title: "Trie & Advanced Data Structures",
            icon: "bi bi-diagram-2",
            items: [
              "Trie Structure",
              "Insert & Search Operations",
              "Prefix Search",
              "Auto Suggest Systems",
              "Dictionary Search",
              "Word Search Problems",
            ],
          },
          {
            id: 17,
            title: "Bit Manipulation & Math for DSA",
            icon: "bi bi-calculator",
            items: [
              "Binary Numbers",
              "Bitwise Operators",
              "XOR Tricks",
              "Bit Masking",
              "Prime Numbers",
              "GCD & LCM",
              "Modular Arithmetic",
              "Fast Exponentiation",
              "Sieve of Eratosthenes",
            ],
          },
          {
            id: 18,
            title: "Design Problems & Advanced Algorithms",
            icon: "bi bi-gear-wide-connected",
            items: [
              "Design Stack & Queue",
              "Design Browser History",
              "Design Twitter Feed",
              "LRU & LFU Cache",
              "Insert Delete GetRandom O(1)",
              "Mo's Algorithm",
              "Sparse Table",
              "Sweep Line Algorithm",
            ],
          },
          {
            id: 19,
            title: "Interview Preparation & Mock Tests",
            icon: "bi bi-person-workspace",
            items: [
              "FAANG Preparation Roadmap",
              "Pattern-Based Problem Solving",
              "Array, Graph & DP Patterns",
              "Mock Coding Interviews",
              "Optimization Discussions",
              "Behavioral & HR Preparation",
            ],
          },
          {
            id: 20,
            title: "Real World Engineering & Projects",
            icon: "bi bi-award",
            items: [
              "DSA in Search Engines",
              "Caching Systems",
              "Recommendation Engines",
              "Virtual DOM Optimization",
              "Database Indexing",
              "Search Engine Project",
              "Autocomplete System",
              "URL Shortener",
              "Chat Application",
            ],
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "HTML and CSS",
        desc: "Start your front-end web development journey with expert HTML5 and CSS3 training. Learn to design stunning, responsive, and mobile-friendly websites from scratch for high-demand UI roles.",
        rating: 4.6,
        duration: "1 month",
        students: "643",
        img: "/images/courses/html-css.webp",
        aboutData: {
          topic:
            "Master HTML and CSS — Build and Design Modern, Responsive Websites!",
          content1:
            "Start your web development journey by learning how to build and style stunning websites using HTML and CSS. Understand the core structure of webpages, layout techniques, and responsive design fundamentals.",
          content2:
            "The HTML and CSS course by Urbancode covers everything from basic syntax to advanced styling techniques. You’ll learn how to create layouts, work with typography, colors, animations, and responsive design — all through hands-on projects that help you gain real-world web development experience.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Introduction to HTML",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "What is HTML and how the web works",
              "HTML structure and basic tags",
              "Headings, paragraphs, lists, and links",
              "Images, audio, and video embedding",
              "Semantic HTML and best practices",
            ],
          },
          {
            id: 2,
            title: "Page Layout and Structure",
            icon: "bi bi-columns-gap",
            items: [
              "Divs, spans, and containers",
              "Tables and forms in HTML",
              "iframes and embedding external content",
              "Meta tags, favicons, and SEO-friendly structure",
            ],
          },
          {
            id: 3,
            title: "Introduction to CSS",
            icon: "bi bi-palette",
            items: [
              "What is CSS and how it works with HTML",
              "Inline, internal, and external stylesheets",
              "Selectors, properties, and values",
              "Colors, backgrounds, and borders",
              "Typography and text styling",
            ],
          },
          {
            id: 4,
            title: "Box Model and Positioning",
            icon: "bi bi-bounding-box",
            items: [
              "Understanding the CSS box model",
              "Margins, padding, and borders",
              "Positioning: static, relative, absolute, fixed, sticky",
              "z-index and stacking context",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Build and Structure Web Pages",
            desc: "Learn HTML to create clean, semantic, and well-structured web pages.",
            icon: "bi bi-file-earmark-code",
          },
          {
            title: "Style Websites Professionally",
            desc: "Use CSS to add colors, layouts, animations, and design precision.",
            icon: "bi bi-palette",
          },
          {
            title: "Create Responsive Designs",
            desc: "Make your websites look great on all devices using media queries and grids.",
            icon: "bi bi-phone",
          },
          {
            title: "Understand Modern Layouts",
            desc: "Master Flexbox and CSS Grid for advanced layout control.",
            icon: "bi bi-layout-text-sidebar-reverse",
          },
          {
            title: "Animate with CSS",
            desc: "Add interactivity and movement using transitions and keyframes.",
            icon: "bi bi-stars",
          },
          {
            title: "Build Real Projects",
            desc: "Design and deploy a responsive website from scratch.",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },

  "Fullstack Development": {
    mainCategoryDesc: "Full Stack Web Development Mastery",
    subDesc:
      "Master the complete spectrum of frontend and backend development with in-depth training in MERN, MEAN, and Java Full Stack technologies. Develop robust, dynamic, and interactive web applications while gaining practical skills that make you industry-ready.",
    subHeading:
      "Acquire the expertise to grow as a professional Full Stack Web Developer and build a strong career in today’s digital-first world.",
    mainImage: "/images/courses/Web_Development.webp",

    courses: [
      {
        title: "AI Powered Fullstack",
        isNew: true,
        curriculumUrls: ["/curriculum/mern-stack-brochure.pdf"],
        desc: "Master modern fullstack development with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, deployment, and AI-assisted workflows using tools like ChatGPT, GitHub Copilot, Cursor, and v0.",
        rating: 4.9,
        duration: "3 months",
        students: "10",
        img: "/images/courses/new/ai-powered-fullstack.png",
        aboutData: {
          topic: "AI Powered Fullstack Curriculum",
          content1:
            "Learn fullstack development from web foundations to MERN projects while using AI for code generation, debugging, documentation, testing, review, and deployment support.",
          content2:
            "This job-focused program combines frontend, backend, database design, full-stack integration, DevOps basics, real-world projects, practical tasks, GitHub portfolio building, interview preparation, and freelancing guidance.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Web Foundations",
            icon: "bi bi-code-slash",
            defaultOpen: true,
            items: [
              "HTML5 elements, attributes, forms, semantic HTML, and accessibility basics",
              "CSS3 selectors, box model, Flexbox, Grid, animations, and transitions",
              "Responsive mobile-first design, media queries, and modern layout techniques",
              "JavaScript variables, data types, operators, functions, arrays, objects, loops, and conditionals",
              "AI usage: ChatGPT for HTML/CSS generation, AI-assisted debugging, image-to-code, and UI generation",
            ],
          },
          {
            id: 2,
            title: "Advanced JavaScript and ES6+",
            icon: "bi bi-braces",
            items: [
              "Scope, hoisting, closures, execution context, call stack, and event loop",
              "let, const, arrow functions, template literals, spread/rest, destructuring, and modules",
              "DOM manipulation, browser APIs, event handling, delegation, local storage, and session storage",
              "Callbacks, promises, async/await, and Fetch API",
              "AI usage: convert callbacks to async/await, explain complex concepts, and debug JavaScript",
            ],
          },
          {
            id: 3,
            title: "Git, GitHub and Developer Workflow",
            icon: "bi bi-git",
            items: [
              "Git commits, branching, merging, and pull requests",
              "GitHub repositories, collaboration, issues, and GitHub Actions basics",
              "AI usage: generate commit messages, review pull requests, and explain code",
            ],
          },
          {
            id: 4,
            title: "React.js",
            icon: "bi bi-window-stack",
            items: [
              "JSX, components, props, state, conditional rendering, lists, keys, and forms",
              "Hooks including useState, useEffect, useMemo, useCallback, and useRef",
              "React Router, Context API, Redux Toolkit, Axios, and Fetch API integration",
              "AI usage: generate React components, add form validation, refactor components, and document code",
            ],
          },
          {
            id: 5,
            title: "Backend Development with Node.js and Express",
            icon: "bi bi-server",
            items: [
              "Node.js runtime, modules, file system, and NPM",
              "Express routing, middleware, error handling, REST APIs, CRUD operations, API design, and status codes",
              "JWT authentication, password hashing with bcrypt, Postman, and API testing",
              "AI usage: API generation, API documentation, and test case generation",
            ],
          },
          {
            id: 6,
            title: "MongoDB and Database Design",
            icon: "bi bi-database",
            items: [
              "MongoDB CRUD operations, collections, and documents",
              "Mongoose schemas, models, and validation",
              "Database relationships, indexing, and aggregation basics",
              "AI usage: generate schemas, optimize queries, and improve data modeling",
            ],
          },
          {
            id: 7,
            title: "Full-Stack Integration and Security",
            icon: "bi bi-shield-lock",
            items: [
              "Connect React frontend with Express backend using Axios requests",
              "Environment variables and frontend-backend configuration",
              "JWT authentication, protected routes, and role-based access",
              "AI usage: generate authentication flows, debug CORS issues, and review security",
            ],
          },
          {
            id: 8,
            title: "Modern AI-Powered Development",
            icon: "bi bi-stars",
            items: [
              "AI tools: ChatGPT, Claude, GitHub Copilot, Cursor, Windsurf, Bolt.new, Lovable, v0 by Vercel, and Antigravity",
              "Prompt engineering, AI code review, AI refactoring, AI testing, AI documentation, and AI pair programming",
            ],
          },
          {
            id: 9,
            title: "Deployment and DevOps",
            icon: "bi bi-cloud-upload",
            items: [
              "Frontend deployment with Netlify and Vercel",
              "Backend deployment with Render and Railway",
              "MongoDB Atlas database hosting",
              "Environment variables, CI/CD basics, and GitHub Actions",
              "AI usage: deployment assistance, log analysis, and production debugging",
            ],
          },
          {
            id: 10,
            title: "Projects, Tasks and Career Preparation",
            icon: "bi bi-award",
            items: [
              "Projects: personal portfolio website, static business website, and student management system using MERN",
              "Frontend tasks: clone website sections, build responsive landing pages, reusable React components, validated forms, and API integrations",
              "Backend tasks: REST APIs, authentication, CRUD operations, error handling, validation, and database connections",
              "Full-stack tasks: frontend-backend integration, role-based authentication, dashboards, deployment, hosting, and production debugging",
              "Career preparation: GitHub portfolio, README writing, interview preparation, mock technical interviews, freelancing guidance, final assessment, code review, deployment review, and project presentation",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Build AI-Assisted Fullstack Apps",
            desc: "Use modern AI tools to plan, code, debug, test, document, and review applications faster.",
            icon: "bi bi-stars",
          },
          {
            title: "Master Frontend Development",
            desc: "Create responsive interfaces with HTML, CSS, JavaScript, React, routing, forms, and state management.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Develop Backend APIs",
            desc: "Build secure REST APIs with Node.js, Express, JWT authentication, bcrypt, and Postman testing.",
            icon: "bi bi-server",
          },
          {
            title: "Work with MongoDB",
            desc: "Design schemas, perform CRUD operations, model data, index collections, and optimize queries.",
            icon: "bi bi-database",
          },
          {
            title: "Deploy Real Projects",
            desc: "Publish frontend, backend, and database-backed apps using Vercel, Netlify, Render, Railway, MongoDB Atlas, and GitHub Actions.",
            icon: "bi bi-cloud-upload",
          },
          {
            title: "Prepare for Jobs and Freelancing",
            desc: "Build portfolio projects, complete 50+ practical tasks, prepare for interviews, and learn client-ready delivery workflows.",
            icon: "bi bi-briefcase",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "11:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "02:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Java Full Stack Development",
        desc: "Accelerate your tech career with our Java Full Stack Development certification. Master Spring Boot, front-end technologies, and MySQL to build scalable web apps with 100% placement support.",
        rating: 4.8,
        duration: "3 months",
        students: "765",
        img: "/images/courses/new/java-fullstack.png",
        curriculumUrls: ["/curriculum/UC_Java Full Stack v1.0.pdf"],
        aboutData: {
          topic:
            "Master Java Full Stack Development — Build Scalable Web Applications from Front-End to Back-End!",
          content1:
            "Learn how to develop complete web applications using Java technologies. This course takes you from the basics of front-end web design to advanced back-end development with Spring Boot and databases, making you a job-ready full stack developer.",
          content2:
            "The Java Full Stack Development course by Urbancode combines the power of modern front-end frameworks with robust Java-based back-end systems. You’ll gain expertise in HTML, CSS, JavaScript, Java, JDBC, Hibernate, Spring Boot, REST APIs, and MySQL — along with deployment skills using tools like Docker and AWS.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Web Foundations",
            icon: "bi bi-code-slash",
            defaultOpen: true,
            items: [
              {
                title: "HTML5 (Structure & Semantics)",
                details: [
                  "Doctype, Headings, paragraphs, text formatting",
                  "Links & images",
                  "Lists (ordered, unordered, definition)",
                  "Tables (with colspan/rowspan)",
                  "Forms & inputs (basic + HTML5 types like email, number, date)",
                  "Semantic elements (header, nav, section, article, footer, aside)",
                  "Multimedia (video, audio, iframe)",
                  "Practice: Build a multi-page portfolio structure with HTML only.",
                ],
              },
              {
                title: "CSS (Styling & Layouts)",
                details: [
                  "CSS basics:",
                  "selectors, properties, colors, fonts",
                  "Box Model (margin, padding, border)",
                  "Display: block, inline, inline-block, none",
                  "Positioning: relative, absolute, fixed, sticky",
                  "Pseudo-classes & pseudo-elements (:hover, ::before)",
                  "Practice: Style your HTML portfolio make it responsive.",
                  "Flexbox & CSS Grid",
                  "Flexbox: ",
                  "display flex",
                  "direction, wrap, justify & align content",
                  "flex grow/shrink/basis",
                  "CSS Grid",
                  "display:grid, rows & columns, grid areas",
                  "template layouts, combining grid & flexbox",
                  "Practice: Build a responsive landing page with Flexbox & Grid.",
                ],
              },
              {
                title: "JavaScript (ES6 & DOM)",
                details: [
                  "Basics",
                  "What is JS? Role in browsers",
                  "Variables (let, const, var)",
                  "Data types & operators",
                  "Strings, numbers, arrays, objects",
                  "Functions (declarations, expressions, arrow functions, higher-order functions)",
                  "Loops & conditionals",
                  "DOM & Events",
                  "DOM tree, querySelector, getElementById",
                  "Changing HTML/CSS dynamically",
                  "Event handling (addEventListener, event bubbling, delegation)",
                  "Form validation & regex",
                  "LocalStorage & SessionStorage",
                  "Advanced JS",
                  "Array methods (map, filter, reduce)",
                  "OOP (classes, constructors, this, inheritance)",
                  "JSON handling",
                  "Fetch API & async/await",
                  "Error handling (try...catch)",
                  "Modular JS (import/export)",
                  "Common design patterns (Module, Observer)",
                  "Practice Projects",
                  "To-do list with LocalStorage",
                  "Calculator app",
                  "Weather app using Fetch API",
                  "Interactive quiz app",
                ],
              },
              {
                title: "Bootstrap (Rapid UI Framework)",
                details: [
                  "Why use Bootstrap vs custom CSS",
                  "Setup via CDN & file structure",
                  "Grid system (12 columns, breakpoints)",
                  "Utilities (spacing, colors, display)",
                  "Components: navbars, buttons, forms, cards, modals",
                  "Practice: Create a responsive blog or e-commerce product grid.",
                ],
              },
              {
                title: "Web Design Principles (UI/UX)",
                details: [
                  "Color theory & accessibility contrast ratios",
                  "Typography best practices (Google Fonts)",
                  "Layout principles (proximity, alignment, white space)",
                  "Wireframing basics",
                  "UX heuristics (consistency, feedback, error prevention)",
                  "Practice: Redesign your portfolio with UI/UX principles.",
                ],
              },
              {
                title: "Angular (Frontend Framework)",
                details: [
                  "Angular Basics",
                  "Angular setup (CLI, project structure)",
                  "Components, Modules, Templates",
                  "Data Binding (Interpolation, Property, Event, Two-way)",
                  "Directives (ngIf, ngFor, ngSwitch)",
                  "Mini Project: Task Tracker App",
                  "Angular Forms & Services",
                  "Template-driven vs Reactive forms",
                  "Form validation (sync & async)",
                  "Dependency Injection",
                  "Angular Services & HttpClient (API calls)",
                  "Mini Project: Weather Dashboard with API Integration",
                  "Angular Routing + Full-Stack Integration",
                  "Angular Router (navigation, route params, guards)",
                  "Lazy loading modules",
                  "Consuming REST APIs (Spring Boot / Node backend)",
                  "Displaying data in Angular (tables, lists, cards, pagination)",
                  "Mini Project: Frontend for Product Catalog",
                  "Angular + Authentication",
                  "JWT Authentication flow (login, signup, logout)",
                  "Storing tokens (LocalStorage, Http Interceptors)",
                  "Role-based route guards (Admin/User access)",
                  "Mini Project: Secure User Login + Dashboard",
                ],
              },
            ],
          },
          {
            id: 2,
            title: "Programming with Java",
            icon: "bi bi-cup-hot",
            items: [
              "Core Java syntax and OOP principles",
              "Control structures, arrays, and strings",
              "Classes, inheritance, and polymorphism",
              "Exception handling and file I/O",
              "Collections framework and generics",
            ],
          },
          {
            id: 3,
            title: "Database Management",
            icon: "bi bi-database",
            items: [
              "Introduction to SQL and relational databases",
              "CRUD operations using MySQL",
              "Database design and normalization",
              "JDBC for database connectivity",
              "Connecting Java applications with MySQL",
            ],
          },
          {
            id: 4,
            title: "Back-End Development",
            icon: "bi bi-gear",
            items: [
              "Introduction to Java EE and Servlets",
              "JSP (JavaServer Pages) and MVC architecture",
              "Building dynamic web applications",
              "Form handling and session management",
              "Deploying Java web apps on Tomcat",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Full Stack Web Development",
            desc: "Learn to build complete web applications from front-end UI to back-end logic.",
            icon: "bi bi-code-square",
          },
          {
            title: "Master Front-End Skills",
            desc: "Create responsive web pages using HTML, CSS, JavaScript, and React.js.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Develop Robust Back-End Systems",
            desc: "Build APIs and business logic using Java, Spring Boot, and Hibernate.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Work with Databases",
            desc: "Use SQL and MySQL for data storage, retrieval, and integration with Java apps.",
            icon: "bi bi-database",
          },
          {
            title: "Deploy Applications",
            desc: "Dockerize and deploy full stack projects to AWS or cloud servers.",
            icon: "bi bi-cloud-upload",
          },
          {
            title: "Build Real-World Projects",
            desc: "Complete a full stack capstone project to showcase your skills to employers.",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "09:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "12:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Angular",
                curriculumUrls: ["/curriculum/UC_Angular Curriculumn V1.0.pdf"],

        desc: "Elevate your front-end web development skills with our complete Angular training. Master TypeScript, components, and real-world project deployment to secure top-tier UI developer roles.",
        rating: 4.8,
        duration: "1.5 months",
        students: "823",
        img: "/images/courses/new/angular.png",
        aboutData: {
          topic:
            "Master Angular — Build Modern, Scalable Front-End Applications with TypeScript!",
          content1:
            "Angular is one of the most powerful front-end frameworks for building enterprise-grade web applications. This course takes you from the fundamentals to advanced concepts with practical projects and real-world examples.",
          content2:
            "The Angular course by Urbancode helps you understand the complete architecture of Angular — from components and data binding to routing, services, and APIs. You’ll learn to build structured, maintainable, and high-performance front-end applications.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Getting Started with Angular",
            icon: "bi bi-lightbulb",
            defaultOpen: true,
            items: [
              "Introduction to Angular and its ecosystem",
              "Setting up the Angular development environment",
              "Understanding TypeScript and ES6 features",
              "Angular project structure and file organization",
              "Creating your first Angular app",
            ],
          },
          {
            id: 2,
            title: "Core Concepts",
            icon: "bi bi-box",
            items: [
              "Components and templates",
              "Data binding and interpolation",
              "Directives: built-in and custom",
              "Event handling and property binding",
              "Component communication (Input & Output)",
            ],
          },
          {
            id: 3,
            title: "Services and Dependency Injection",
            icon: "bi bi-gear",
            items: [
              "Creating and using services",
              "Dependency Injection in Angular",
              "Observable and RxJS introduction",
              "Managing data flow with services",
              "Reusable logic with service layers",
            ],
          },
          {
            id: 4,
            title: "Routing and Navigation",
            icon: "bi bi-map",
            items: [
              "Routing setup and configuration",
              "Navigating between views",
              "Route parameters and query strings",
              "Lazy loading modules",
              "Route guards and authentication",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Build Modern Web Apps",
            desc: "Develop dynamic and interactive web applications using Angular and TypeScript.",
            icon: "bi bi-code-square",
          },
          {
            title: "Master Components & Modules",
            desc: "Learn how to structure scalable applications using Angular’s modular architecture.",
            icon: "bi bi-box",
          },
          {
            title: "Integrate REST APIs",
            desc: "Connect your Angular front-end to real back-end services using HttpClient.",
            icon: "bi bi-cloud-arrow-down",
          },
          {
            title: "Work with Reactive Forms",
            desc: "Create and validate dynamic forms with Angular’s reactive form module.",
            icon: "bi bi-ui-checks-grid",
          },
          {
            title: "Use Angular Material",
            desc: "Build polished UI with Angular Material components and custom themes.",
            icon: "bi bi-palette",
          },
          {
            title: "Deploy Real Projects",
            desc: "Deploy and host your Angular applications on modern cloud platforms.",
            icon: "bi bi-cloud-upload",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "MEAN Stack",
        desc: "Dominate full-stack web development with our intensive MEAN Stack courses. Build powerful enterprise applications using MongoDB, Express.js, Angular, and Node.js with live hands-on projects.",
        rating: 4.8,
        duration: "2 months",
        students: "998",
        img: "/images/courses/new/mean.png",
        aboutData: {
          topic:
            "Master the MEAN Stack — Build Full-Stack Web Apps with MongoDB, Express, Angular, and Node.js!",
          content1:
            "The MEAN Stack course helps you become a full-stack developer capable of building end-to-end web applications. You’ll learn to manage data with MongoDB, build backend APIs with Express and Node.js, and create interactive frontends with Angular.",
          content2:
            "This program covers everything from the fundamentals of JavaScript to advanced full-stack project deployment. By the end, you’ll be able to design, develop, and deploy production-ready applications using the complete MEAN stack architecture.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Introduction to MEAN Stack",
            icon: "bi bi-lightbulb",
            defaultOpen: true,
            items: [
              "Overview of full-stack development",
              "Understanding the MEAN architecture",
              "Installing Node.js, npm, and Angular CLI",
              "Project setup and folder structure",
              "Intro to REST APIs and JSON",
            ],
          },
          {
            id: 2,
            title: "JavaScript & TypeScript Essentials",
            icon: "bi bi-code",
            items: [
              "JavaScript fundamentals and ES6 features",
              "Asynchronous programming (Promises & async/await)",
              "Working with JSON data",
              "TypeScript basics for Angular",
              "Error handling and debugging",
            ],
          },
          {
            id: 3,
            title: "Node.js and Express.js",
            icon: "bi bi-server",
            items: [
              "Creating servers with Node.js",
              "Routing and middleware in Express",
              "Handling requests and responses",
              "Building RESTful APIs",
              "Working with authentication and JWT",
            ],
          },
          {
            id: 4,
            title: "MongoDB and Mongoose",
            icon: "bi bi-database",
            items: [
              "Introduction to NoSQL databases",
              "CRUD operations in MongoDB",
              "Modeling data with Mongoose",
              "Schema validation and relationships",
              "Connecting MongoDB with Node.js",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Full-Stack Development",
            desc: "Learn to build complete web applications using MongoDB, Express, Angular, and Node.js.",
            icon: "bi bi-laptop",
          },
          {
            title: "Create RESTful APIs",
            desc: "Develop secure and scalable backend APIs using Node.js and Express.",
            icon: "bi bi-server",
          },
          {
            title: "Work with MongoDB",
            desc: "Perform CRUD operations, design schemas, and manage data using MongoDB and Mongoose.",
            icon: "bi bi-database",
          },
          {
            title: "Build Dynamic Frontends",
            desc: "Use Angular to create responsive, real-time web interfaces connected to your backend.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Implement Authentication",
            desc: "Add login, JWT authentication, and role-based authorization to your apps.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Deploy Full Projects",
            desc: "Deploy your full-stack applications to the cloud with modern DevOps practices.",
            icon: "bi bi-cloud-upload",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "01:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "MERN Stack",
        desc: "Launch your career with comprehensive MERN Stack training. Master MongoDB, Express.js, React, and Node.js through live coding exercises and guarantee your software engineering placement.",
        rating: 4.9,
        duration: "2 months",
        students: "432",
        img: "/images/courses/new/mernn.png",
        aboutData: {
          topic:
            "Master the MERN Stack — Build Powerful Full-Stack Web Applications with React and Node.js!",
          content1:
            "This course takes you through every layer of the MERN stack, combining front-end and back-end technologies to help you build complete, dynamic web applications. You’ll learn React for UI, Node.js and Express for APIs, and MongoDB for managing data.",
          content2:
            "The MERN Stack program by Urbancode covers modern JavaScript development from the ground up. You’ll move from basic React components to complex API-driven applications, finishing with deployment and optimization of real-world full-stack projects.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Introduction to MERN Stack",
            icon: "bi bi-lightbulb",
            defaultOpen: true,
            items: [
              "Overview of full-stack development",
              "Understanding the MERN architecture",
              "Setting up Node.js, npm, and MongoDB",
              "Intro to REST APIs and JSON",
              "Creating your first full-stack project structure",
            ],
          },
          {
            id: 2,
            title: "JavaScript & ES6 Essentials",
            icon: "bi bi-code",
            items: [
              "JavaScript fundamentals and modern syntax",
              "Working with arrays, objects, and functions",
              "Asynchronous JavaScript (Promises, async/await)",
              "Error handling and debugging techniques",
              "Using npm and managing dependencies",
            ],
          },
          {
            id: 3,
            title: "Node.js and Express.js",
            icon: "bi bi-server",
            items: [
              "Building a backend with Express.js",
              "Routing and middleware concepts",
              "Handling requests, responses, and validation",
              "Creating and testing RESTful APIs",
              "Authentication with JWT and bcrypt",
            ],
          },
          {
            id: 4,
            title: "MongoDB and Mongoose",
            icon: "bi bi-database",
            items: [
              "Introduction to MongoDB and NoSQL databases",
              "CRUD operations using Mongoose",
              "Schema design and data relationships",
              "Aggregation pipelines and indexing",
              "Connecting MongoDB to Node.js apps",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Full-Stack JavaScript",
            desc: "Work confidently across frontend and backend using MongoDB, Express, React, and Node.js.",
            icon: "bi bi-laptop",
          },
          {
            title: "Build Scalable REST APIs",
            desc: "Design secure and efficient APIs using Node.js and Express.js.",
            icon: "bi bi-server",
          },
          {
            title: "Develop Dynamic Frontends",
            desc: "Create powerful, component-based UIs with React and modern hooks.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Integrate Frontend & Backend",
            desc: "Connect React applications with Express APIs for smooth data flow.",
            icon: "bi bi-link-45deg",
          },
          {
            title: "Implement Authentication",
            desc: "Add JWT-based authentication and user access control to your apps.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Deploy Real Projects",
            desc: "Host and manage your MERN stack applications on cloud platforms.",
            icon: "bi bi-cloud-upload",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Microsoft SharePoint",
        desc: "Master enterprise content management with Microsoft SharePoint. Learn to build modern sites, manage metadata, develop custom SPFx web parts, and automate workflows with Power Automate.",
        rating: 4.8,
        duration: "1.5 months",
        students: "784",
        img: "/images/courses/new/share.png",
        aboutData: {
          topic:
            "Master Microsoft SharePoint — Build and Manage Modern Collaborative Workspaces!",
          content1:
            "Learn to design, configure, and develop on the SharePoint Online platform. From site architecture and permissions to custom SPFx development with React, this course prepares you for enterprise-level collaboration roles.",
          content2:
            "Our SharePoint curriculum blends administrative mastery with developer expertise. You'll master lists, libraries, and metadata management, then dive into SPFx development using Node.js. The course also covers advanced automation using Power Automate triggers specifically for SharePoint, making you a versatile SharePoint professional.",
        },
        courseContentData: [
          {
            id: 1,
            title: "SharePoint Fundamentals & Setup",
            icon: "bi bi-gear-wide-connected",
            defaultOpen: true,
            items: [
              "SharePoint Online & Architecture (Tenant, Site Collections)",
              "Overview of Sites, Lists, and Libraries",
              "Navigating the SharePoint Interface",
              "SharePoint Admin Center & Microsoft 365 Setup",
              "Practice: Creating and configuring Team Sites",
            ],
          },
          {
            id: 2,
            title: "Lists, Libraries & Metadata",
            icon: "bi bi-table",
            items: [
              "Create and customize Lists & Columns (Lookup, Person, etc.)",
              "Document Libraries: Versioning, Check-in/out",
              "Site Columns & Content Types",
              "Metadata Management (Taxonomy basics)",
              "Mini Task: Building a Leave/Asset tracker list",
            ],
          },
          {
            id: 3,
            title: "Pages, Branding & User Experience",
            icon: "bi bi-layout-text-window",
            items: [
              "Creating Modern Pages & Web Parts",
              "Site Branding: Themes, Navigation, Layouts",
              "Custom Content Types for Libraries",
              "UI/UX best practices for portals",
              "Mini Project: Building a Departmental HR/IT Portal",
            ],
          },
          {
            id: 4,
            title: "Permissions, Governance & Advanced UI",
            icon: "bi bi-shield-lock",
            items: [
              "Permission Levels, Roles & Inheritance",
              "Secure access management (Internal & External)",
              "Advanced Views & JSON Formatting",
              "Sharing governance and best practices",
              "Mini Project: Secure Document Approval Library design",
            ],
          },
          {
            id: 5,
            title: "SPFx Development & Advanced Concepts",
            icon: "bi bi-code-slash",
            items: [
              "SPFx Environment setup: Node.js",
              "Creating custom SPFx Web Parts using React",
              "SharePoint REST API & Property Pane Controls",
              "Deploying to App Catalog & Hub Site architecture",
              "Mini Project: Building a Custom SPFx Dashboard",
            ],
          },
          {
            id: 6,
            title: "Power Automate Basics for SharePoint",
            icon: "bi bi-lightning-charge",
            items: [
              "Types of Flows: Automated, Instant, Scheduled",
              "SharePoint Triggers: Created, Modified, etc.",
              "Conditions, Expressions & Approval Flows",
              "Dynamic content & Error handling",
              "Mini Project: Leave Request Approval Workflow",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Manage Site Architecture",
            desc: "Design and manage site collections, subsites, and hub sites.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Master Metadata & Lists",
            desc: "Build structured data solutions with content types and taxonomies.",
            icon: "bi bi-tags",
          },
          {
            title: "Develop with SPFx",
            desc: "Build custom web parts using React for the modern SharePoint experience.",
            icon: "bi bi-braces",
          },
          {
            title: "Secure Data Governance",
            desc: "Implement robust permission models and sharing policies.",
            icon: "bi bi-shield-check",
          },
          {
            title: "Automate Workflows",
            desc: "Connect SharePoint with Power Automate for business process automation.",
            icon: "bi bi-cpu",
          },
          {
            title: "Modern UI Branding",
            desc: "Transform standard sites into beautiful, branded internal portals.",
            icon: "bi bi-palette",
          },
        ],

        locked: false,
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "React Native",
        desc: "Build high-performance cross-platform mobile apps with expert React Native training. Master JavaScript components and Native APIs for highly lucrative iOS & Android development careers.",
        rating: 4.9,
        duration: "1.5 months",
        students: "106",
        img: "/images/courses/new/react-native.png",
        curriculumUrls: ["/curriculum/UC_FSD_React Native Curriculum v1.0.pdf"],
        aboutData: {
          topic:
            "Master React Native — Build High-Performance Cross-Platform Mobile Apps!",
          content1:
            "React Native lets you build mobile apps using JavaScript and React — no need to learn separate languages for Android or iOS. This course takes you from setup to advanced mobile development with live projects.",
          content2:
            "The React Native course by Urbancode covers everything from React fundamentals to mobile-specific APIs, navigation, and backend integration. You’ll build, test, and deploy apps that run seamlessly across both Android and iOS platforms.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Introduction to React Native",
            icon: "bi bi-lightbulb",
            defaultOpen: true,
            items: [
              "What is React Native and how it works",
              "Setting up your environment (Expo and CLI)",
              "Project structure and app components",
              "Understanding React vs React Native",
              "Running your first mobile app",
            ],
          },
          {
            id: 2,
            title: "Core Concepts",
            icon: "bi bi-box",
            items: [
              "JSX and component structure",
              "Props and state management",
              "Conditional rendering and styling",
              "Flexbox layout for mobile UI",
              "Reusable components and composition",
            ],
          },
          {
            id: 3,
            title: "Navigation and State Management",
            icon: "bi bi-compass",
            items: [
              "Using React Navigation (Stack, Tab, Drawer)",
              "Passing parameters between screens",
              "Global state management with Context API",
              "Async data flow with Redux Toolkit",
              "Persisting app data with AsyncStorage",
            ],
          },
          {
            id: 4,
            title: "Working with APIs",
            icon: "bi bi-cloud-arrow-down",
            items: [
              "Fetching data from REST APIs",
              "POST, PUT, DELETE operations",
              "Handling loading states and errors",
              "Integration with backend services",
              "Authentication using JWT tokens",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Build Cross-Platform Apps",
            desc: "Create mobile apps for Android and iOS using a single React Native codebase.",
            icon: "bi bi-phone",
          },
          {
            title: "Master React Fundamentals",
            desc: "Learn React components, state, props, and hooks tailored for mobile development.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Work with APIs",
            desc: "Fetch, send, and manage real-time data with RESTful API integration.",
            icon: "bi bi-cloud-arrow-down",
          },
          {
            title: "Use Native Device Features",
            desc: "Access camera, GPS, notifications, and sensors using React Native libraries.",
            icon: "bi bi-geo-alt",
          },
          {
            title: "Design Responsive Interfaces",
            desc: "Build pixel-perfect, adaptive UIs using Flexbox and responsive styling.",
            icon: "bi bi-palette",
          },
          {
            title: "Deploy to App Stores",
            desc: "Test, package, and publish your apps to Google Play and Apple App Store.",
            icon: "bi bi-cloud-upload",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: ".NET Angular",
        desc: "Become an elite enterprise web developer. Master full-stack architectures combining Microsoft ASP.NET backend robustness with dynamic Angular frontends for high-paying corporate tech roles.",
        rating: 4.8,
        duration: "2 months",
        students: "987",
        img: "/images/courses/new/net-angular.png",
        aboutData: {
          topic:
            "Master .NET + Angular — Build Scalable Enterprise Web Applications End-to-End!",
          content1:
            "This course combines the power of Microsoft’s .NET backend with Angular’s dynamic frontend framework. You’ll learn to build complete, production-ready web applications that integrate seamlessly between client and server.",
          content2:
            "The .NET + Angular course by Urbancode covers everything from backend API development in ASP.NET Core to creating responsive frontends in Angular. You’ll work on real-world projects, learn deployment best practices, and gain hands-on experience with full-stack architecture.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Introduction to Full-Stack Development",
            icon: "bi bi-lightbulb",
            defaultOpen: true,
            items: [
              "Overview of full-stack web development",
              "Understanding .NET and Angular architecture",
              "Setting up Visual Studio and Angular CLI",
              "Creating your first .NET + Angular project",
              "Understanding client-server communication",
            ],
          },
          {
            id: 2,
            title: "C# and ASP.NET Core Basics",
            icon: "bi bi-code",
            items: [
              "C# fundamentals and syntax",
              "OOP concepts in C#",
              "Introduction to ASP.NET Core framework",
              "Creating controllers and routes",
              "Dependency Injection and Middleware",
            ],
          },
          {
            id: 3,
            title: "Building RESTful APIs with .NET",
            icon: "bi bi-server",
            items: [
              "Setting up RESTful services with ASP.NET Core",
              "CRUD operations with Entity Framework Core",
              "Working with LINQ and data models",
              "API versioning and validation",
              "Implementing authentication and authorization",
            ],
          },
          {
            id: 4,
            title: "Frontend Development with Angular",
            icon: "bi bi-window-stack",
            items: [
              "Angular architecture and TypeScript basics",
              "Creating components, directives, and pipes",
              "Data binding and event handling",
              "Reactive forms and validations",
              "Routing and lazy loading",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Full-Stack Development",
            desc: "Build and integrate scalable frontends and backends using Angular and .NET.",
            icon: "bi bi-laptop",
          },
          {
            title: "Create RESTful APIs",
            desc: "Design, develop, and secure APIs with ASP.NET Core and Entity Framework.",
            icon: "bi bi-server",
          },
          {
            title: "Develop Dynamic Frontends",
            desc: "Use Angular to create responsive, component-driven web interfaces.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Implement Authentication",
            desc: "Add JWT-based authentication and user authorization across your stack.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Work with Databases",
            desc: "Integrate SQL Server and manage data efficiently with Entity Framework.",
            icon: "bi bi-database",
          },
          {
            title: "Deploy Enterprise Applications",
            desc: "Host and maintain your .NET + Angular projects on modern cloud platforms.",
            icon: "bi bi-cloud-upload",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "React.js",
        desc: "Master React.js from scratch. Build dynamic, high-performance web applications using modern hooks, Redux, and Context API to secure top frontend developer roles.",
        rating: 5.0,
        duration: "1 month",
        students: "564",
        img: "/images/courses/new/reactjs.png",
        curriculumUrls: ["/curriculum/UC_React Curriculum v1.0.pdf"],
        aboutData: {
          topic:
            "Master React.js — Build Dynamic, Modern Web Applications from the Ground Up!",
          content1:
            "This course takes you from the basics of React to advanced concepts like hooks, context API, and optimized rendering. You’ll learn how React works under the hood and how to build scalable, maintainable user interfaces.",
          content2:
            "Through hands-on projects, you’ll understand how to manage state effectively, interact with APIs, and deploy full React applications. By the end, you’ll have the confidence to build production-ready apps using React.js.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Getting Started with React",
            icon: "bi bi-lightbulb",
            defaultOpen: true,
            items: [
              "Introduction to React and its ecosystem",
              "Setting up the development environment",
              "JSX syntax and rendering elements",
              "Understanding components and props",
              "Creating your first React app",
            ],
          },
          {
            id: 2,
            title: "Components and State",
            icon: "bi bi-puzzle",
            items: [
              "Functional vs Class components",
              "State and setState basics",
              "Event handling in React",
              "Conditional rendering",
              "Lists and keys",
            ],
          },
          {
            id: 3,
            title: "React Hooks",
            icon: "bi bi-diagram-3",
            items: [
              "Introduction to Hooks",
              "Using useState and useEffect",
              "Managing multiple states",
              "Custom hooks and reusability",
              "Lifecycle equivalents with Hooks",
            ],
          },
          {
            id: 4,
            title: "State Management and Context API",
            icon: "bi bi-diagram-2",
            items: [
              "Prop drilling problem and solutions",
              "Using Context API for global state",
              "Building custom context providers",
              "Integrating useReducer for complex states",
              "Structuring large-scale React apps",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand React Fundamentals",
            desc: "Learn the core concepts of React including components, JSX, and props.",
            icon: "bi bi-laptop",
          },
          {
            title: "Work with Hooks",
            desc: "Master useState, useEffect, and custom hooks to manage component logic.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Manage State Efficiently",
            desc: "Use Context API and reducers to handle global application state.",
            icon: "bi bi-diagram-2",
          },
          {
            title: "Integrate APIs",
            desc: "Connect your React app with real-world APIs using Fetch or Axios.",
            icon: "bi bi-globe",
          },
          {
            title: "Optimize Performance",
            desc: "Apply techniques to reduce re-renders and boost speed in large apps.",
            icon: "bi bi-speedometer2",
          },
          {
            title: "Deploy React Apps",
            desc: "Host your React applications on platforms like Vercel or Netlify.",
            icon: "bi bi-cloud-upload",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Python Full Stack",
        desc: "Become a Python Full Stack Developer. Master Django, Flask, HTML, CSS, and database integration to build complete web applications with 100% placement assistance.",
        rating: 4.9,
        duration: "2 months",
        students: "584",
        img: "/images/courses/new/python.png",
        curriculumUrls: ["/curriculum/UC_Python Basic to Advanced Curriculum v1.0.pdf"],
        aboutData: {
          topic:
            "Master Python Full Stack Development — Build Complete Web Applications from Scratch!",
          content1:
            "This course takes you through the full journey of Python web development — from front-end design with HTML, CSS, and JavaScript to building powerful back-end applications with Flask and Django.",
          content2:
            "By the end of the course, you’ll be able to design responsive UIs, connect to databases like MySQL or MongoDB, manage APIs, and deploy full stack Python web apps on cloud platforms.",
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
              "Version control with Git and GitHub",
            ],
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
              "RESTful API creation with Flask and Django REST Framework",
            ],
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
              "MongoDB basics for NoSQL storage",
            ],
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
              "Performance optimization and caching",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Frontend Basics",
            desc: "Build visually appealing interfaces with HTML, CSS, and JavaScript.",
            icon: "bi bi-brush",
          },
          {
            title: "Develop Python Backends",
            desc: "Use Flask and Django to handle routing, logic, and APIs.",
            icon: "bi bi-cpu",
          },
          {
            title: "Work with Databases",
            desc: "Perform CRUD operations using MySQL, PostgreSQL, and MongoDB.",
            icon: "bi bi-database",
          },
          {
            title: "Integrate APIs",
            desc: "Connect the front-end and back-end seamlessly through RESTful APIs.",
            icon: "bi bi-link-45deg",
          },
          {
            title: "Deploy Applications",
            desc: "Host and manage your full stack Python projects on cloud servers.",
            icon: "bi bi-cloud-upload",
          },
          {
            title: "Build Real Projects",
            desc: "Apply everything you learn to build and deploy a complete live project.",
            icon: "bi bi-code-slash",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Next.js Development",
        desc: "Build blazing-fast, SEO-friendly web apps with Next.js. Master Server-Side Rendering (SSR), API routes, and modern React patterns to become an elite web developer.",
        rating: 4.8,
        duration: "2 months",
        students: "784",
        img: "/images/courses/new/nextjs.png",
        aboutData: {
          topic: "Master Next.js — The Leading React Framework for Production!",
          content1:
            "Learn Next.js, the powerful React framework for building fast, SEO-friendly, and production-ready web applications. This course covers everything from web fundamentals to full-stack development with AI-powered tools.",
          content2:
            "From HTML5 and React foundations to advanced Next.js features like Server Actions, App Router, MongoDB integration, and authentication — this course prepares you to build and deploy enterprise-grade applications with modern best practices.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Phase 1: Web Development Foundations",
            icon: "bi bi-globe2",
            defaultOpen: true,
            items: [
              "HTML5: Semantic HTML, Forms & Validation, Accessibility",
              "CSS3: Flexbox, Grid, Responsive Design, Animations",
              "JavaScript ES6+: Variables, Functions, Arrays & Objects",
              "Async/Await, Fetch API, Modules, Event Loop",
              "Scope & Closures, Destructuring, Spread & Rest Operators",
            ],
          },
          {
            id: 2,
            title: "Phase 2: React Fundamentals",
            icon: "bi bi-box",
            items: [
              "React Basics: JSX, Components, Props, State",
              "React Hooks: useState, useEffect, useRef, useMemo, useCallback",
              "Event Handling, Conditional Rendering, Lists & Keys",
              "Forms & Validation, Context API",
              "Component-Based Architecture & Folder Organization",
            ],
          },
          {
            id: 3,
            title: "Phase 3: Next.js Fundamentals",
            icon: "bi bi-lightning-charge",
            items: [
              "Introduction to Next.js: React vs Next.js, Benefits",
              "App Router: File-Based Routing, Nested & Dynamic Routes",
              "Catch-All Routes, Route Groups",
              "Navigation: Link Component, useRouter, Programmatic Navigation",
              "Special Files: loading.js, error.js, not-found.js",
            ],
          },
          {
            id: 4,
            title: "Phase 4: Layouts, Templates & Components",
            icon: "bi bi-layout-text-window-reverse",
            items: [
              "Root Layout, Nested Layouts, Shared Layouts",
              "Template Files & Re-rendering Behavior",
              "Server Components vs Client Components",
              "Component Composition & best practices",
            ],
          },
          {
            id: 5,
            title: "Phase 5: Data Fetching, Rendering & Caching",
            icon: "bi bi-cloud-arrow-down",
            items: [
              "Server-Side & Client-Side Data Fetching",
              "Static Rendering, Dynamic Rendering, Streaming",
              "Incremental Static Regeneration (ISR)",
              "Cache Strategies, Revalidation & Dynamic Data Updates",
            ],
          },
          {
            id: 6,
            title: "Phase 6: Server Actions & Full Stack Development",
            icon: "bi bi-server",
            items: [
              "Server Actions: Form Handling, Data Mutations, CRUD",
              "Route Handlers: GET, POST, PUT, DELETE",
              "REST API Development, Validation & Error Handling",
              "Environment Variables & Security Best Practices",
            ],
          },
          {
            id: 7,
            title: "Phase 7: MongoDB & Database Integration",
            icon: "bi bi-database",
            items: [
              "MongoDB: Collections, Documents, CRUD Operations",
              "Mongoose: Schemas, Models, Validation, Relationships",
              "One-to-One & One-to-Many Relationships",
              "Database Design Best Practices",
            ],
          },
          {
            id: 8,
            title: "Phase 8: Authentication, Authorization & Middleware",
            icon: "bi bi-shield-lock",
            items: [
              "Auth.js (NextAuth): Login, Registration, Session Management",
              "Protected Routes & Role-Based Access Control",
              "Middleware: Route Protection, Redirects, Request Validation",
              "Password Hashing, Environment Security, Secure API Development",
            ],
          },
          {
            id: 9,
            title: "Phase 9: Forms, Validation & File Uploads",
            icon: "bi bi-upload",
            items: [
              "Controlled Forms & Form Handling",
              "React Hook Form & Zod Validation",
              "Single & Multiple File Uploads, Image Uploads",
              "Cloudinary Integration & Media Management",
            ],
          },
          {
            id: 10,
            title: "Phase 10: SEO & Performance Optimization",
            icon: "bi bi-speedometer2",
            items: [
              "Metadata API, Dynamic Metadata, Open Graph Tags",
              "Sitemap Generation & Robots.txt",
              "Image & Font Optimization, Lazy Loading, Code Splitting",
              "Loading States, Error Boundaries, Performance Best Practices",
            ],
          },
          {
            id: 11,
            title: "Phase 11: Deployment & Production Readiness",
            icon: "bi bi-cloud-arrow-up",
            items: [
              "Version Control: Git & GitHub",
              "Vercel Deployment, Environment Variables, Production Configuration",
              "Logging, Error Handling & Production Debugging",
              "Project Structure, Scalability & Maintainability",
            ],
          },
          {
            id: 12,
            title: "Phase 12: AI-Powered Development",
            icon: "bi bi-cpu",
            items: [
              "AI Tools: ChatGPT, Claude, GitHub Copilot, Cursor, Windsurf, v0, Bolt.new",
              "Prompt Engineering & AI Pair Programming",
              "Code Generation, Code Reviews, Documentation Generation",
              "Debugging with AI & Feature Planning",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Web Foundations & React",
            desc: "Build strong HTML5, CSS3, JavaScript ES6+, and React skills as a base for Next.js.",
            icon: "bi bi-code-slash",
          },
          {
            title: "Navigate the Next.js App Router",
            desc: "Master file-based routing, layouts, Server & Client Components with confidence.",
            icon: "bi bi-signpost-split",
          },
          {
            title: "Build Full-Stack Applications",
            desc: "Create complete apps using Server Actions, Route Handlers, and REST APIs.",
            icon: "bi bi-stack",
          },
          {
            title: "Integrate MongoDB & Auth",
            desc: "Connect MongoDB with Mongoose and implement secure authentication using Auth.js.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Optimize SEO & Performance",
            desc: "Leverage Next.js metadata, image optimization, and caching for lightning-fast apps.",
            icon: "bi bi-speedometer2",
          },
          {
            title: "Deploy with AI-Powered Workflows",
            desc: "Ship production apps on Vercel while using AI tools like Copilot and Cursor to code faster.",
            icon: "bi bi-cloud-arrow-up",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },

  "UI UX Designing": {
    mainCategoryDesc: "UI/UX Mastery for the Future",
    subDesc:
      "Gain hands-on expertise in UI/UX design to create intuitive, impactful, and user-focused digital experiences. Learn to design seamless interfaces that prioritize user satisfaction, enhance usability, and drive engagement.",
    subHeading:
      "Transform your creativity into professional UI/UX design skills that open doors to careers in web design, app development, and product innovation.",
    mainImage: "/images/courses/UI_UX_Designing.jpg",

    courses: [
      {
        title: "Figma",
        desc: "Launch your UI/UX career by mastering Figma. Learn wireframing, prototyping, and modern interface design for web and mobile apps to land high-paying design roles.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/new/figma.png",
        aboutData: {
          topic: "Master Figma — From Basic Design to Advanced Prototyping!",
          content1:
            "Unleash your creativity and learn to design modern, engaging interfaces using Figma — the most powerful design tool for UI/UX professionals. This course will help you go from beginner to expert through hands-on exercises, real-world projects, and team collaboration features.",
          content2:
            "The Figma course by Urbancode takes you through the complete design process — from fundamentals like wireframing and layout design to advanced topics like prototyping, animations, and design systems. You’ll also learn how to collaborate effectively with developers, create responsive designs, and build interactive user experiences that stand out in real-world applications.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Getting Started with Figma",
            icon: "bi bi-cursor",
            defaultOpen: true,
            items: [
              "Introduction to Figma and its interface",
              "Setting up your Figma workspace",
              "Understanding design files, pages, and frames",
              "Working with shapes, colors, and typography",
              "Using layers and grouping",
              "Essential Figma shortcuts and tips",
            ],
          },
          {
            id: 2,
            title: "Design Fundamentals",
            icon: "bi bi-brush",
            items: [
              "Basics of UI/UX design principles",
              "Creating layouts and grids",
              "Color theory and visual hierarchy",
              "Typography and iconography",
              "Wireframing basics",
            ],
          },
          {
            id: 3,
            title: "Components & Assets",
            icon: "bi bi-puzzle",
            items: [
              "Creating and reusing components",
              "Using variants and auto layout",
              "Organizing design systems",
              "Importing and managing assets",
              "Building reusable UI kits",
            ],
          },
          {
            id: 4,
            title: "Prototyping & Interaction Design",
            icon: "bi bi-diagram-3",
            items: [
              "Creating interactive prototypes",
              "Adding animations and transitions",
              "Smart animate and micro-interactions",
              "Using overlays and scrolling frames",
              "Testing and presenting prototypes",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Figma Tools & Interface",
            desc: "Get comfortable with Figma’s interface, components, and powerful design tools.",
            icon: "bi bi-cursor",
          },
          {
            title: "Create Beautiful UI/UX Designs",
            desc: "Learn how to design user-friendly, modern, and aesthetic interfaces.",
            icon: "bi bi-brush",
          },
          {
            title: "Build Interactive Prototypes",
            desc: "Design engaging, clickable prototypes that bring your ideas to life.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Collaborate with Teams",
            desc: "Work in real-time with developers, designers, and clients using Figma’s collaboration tools.",
            icon: "bi bi-people",
          },
          {
            title: "Develop Design Systems",
            desc: "Create reusable components, libraries, and scalable design systems for large projects.",
            icon: "bi bi-diagram-2",
          },
          {
            title: "Build a Professional Portfolio",
            desc: "Work on live projects and build a portfolio that showcases your real-world design skills.",
            icon: "bi bi-briefcase",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Photoshop",
        desc: "Unleash your creativity with our Adobe Photoshop masterclass. Learn professional photo editing, graphic design, and digital art to build an impressive visual portfolio.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/new/photoshop.png",
        aboutData: {
          topic:
            "Master Adobe Photoshop — From Beginner to Professional Graphic Designer!",
          content1:
            "Learn to create stunning designs and edit photos like a pro. This comprehensive Photoshop course takes you from the basics of tools and layers to advanced techniques in retouching, digital art, and visual design. Perfect for beginners and aspiring designers alike.",
          content2:
            "The Photoshop course by Urbancode covers everything from understanding Photoshop’s interface and tools to mastering professional workflows used in the design industry. You’ll gain hands-on experience in photo manipulation, color correction, compositing, digital painting, and UI/UX asset creation. By the end, you’ll build a professional design portfolio ready for freelance or studio work.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Introduction to Photoshop",
            icon: "bi bi-palette",
            defaultOpen: true,
            items: [
              "Module Overview and Interface Introduction",
              "Basic Tools and Navigation",
              "Understanding Layers",
              "Basic Photo Editing",
            ],
          },
          {
            id: 2,
            title: "Intermediate Photoshop Techniques",
            icon: "bi bi-image",
            items: [
              "Selections and Masks",
              "Advanced Photo Editing",
              "Text and Typography",
            ],
          },
          {
            id: 3,
            title: "Advanced Photoshop Skills",
            icon: "bi bi-brush",
            items: [
              "Filters and Eects",
              "Working with Smart Objects and Smart Filters",
              "Composite Imaging and Creative Projects",
            ],
          },
          {
            id: 4,
            title: " Projects and Review",
            icon: "bi bi-layers",
            items: [
              "Project 1: Photo Manipulation",
              "Project 2: Graphic Design",
              "Portfolio Review",
              "Q&A and Further Learning",
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
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Graphic Design",
        desc: "Become an expert Graphic Designer. Master Photoshop, Illustrator, and visual storytelling to craft stunning brand identities and land creative industry jobs.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/new/graphic-design.png",
        aboutData: {
          topic:
            "Become a Professional Graphic Designer — From Design Basics to Brand Identity!",
          content1:
            "Explore the world of visual communication with this hands-on Graphic Design course. Learn how to bring ideas to life through color, typography, composition, and storytelling. Perfect for beginners and aspiring professionals looking to create visually stunning projects.",
          content2:
            "The Graphic Design course by Urbancode covers everything from the fundamentals of design to mastering tools like Adobe Photoshop, Illustrator, and Figma. You’ll learn to design logos, posters, social media content, and full brand systems. The program also includes advanced topics like UI/UX design, motion graphics, and portfolio creation to make you industry-ready.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Design Fundamentals",
            icon: "bi bi-brush",
            defaultOpen: true,
            items: [
              "Introduction to Graphic Design and Visual Communication",
              "Understanding design principles: balance, contrast, and alignment",
              "Color theory and psychology",
              "Typography basics and font pairing",
              "Composition and layout techniques",
            ],
          },
          {
            id: 2,
            title: "Working with Design Tools",
            icon: "bi bi-tools",
            items: [
              "Getting started with Adobe Photoshop",
              "Introduction to Adobe Illustrator",
              "Using Figma for design collaboration",
              "Image editing, retouching, and enhancement",
              "Creating digital illustrations and vector art",
            ],
          },
          {
            id: 3,
            title: "Branding & Identity Design",
            icon: "bi bi-palette",
            items: [
              "Understanding brand strategy and identity systems",
              "Logo design principles and process",
              "Designing brand guidelines and visual assets",
              "Packaging and print design essentials",
              "Creating mockups and presentation templates",
            ],
          },
          {
            id: 4,
            title: "UI/UX Design Essentials",
            icon: "bi bi-phone",
            items: [
              "Introduction to user experience and interface design",
              "Wireframing and prototyping with Figma",
              "Design systems and component libraries",
              "Responsive and mobile-first design",
              "Usability testing and feedback implementation",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Visual Design Principles",
            desc: "Learn color theory, typography, composition, and layout like a pro.",
            icon: "bi bi-palette",
          },
          {
            title: "Work with Industry Tools",
            desc: "Gain hands-on experience with Photoshop, Illustrator, Figma, and After Effects.",
            icon: "bi bi-tools",
          },
          {
            title: "Build Brand Identities",
            desc: "Design impactful logos, packaging, and brand systems for real-world clients.",
            icon: "bi bi-bag-check",
          },
          {
            title: "Design User Interfaces",
            desc: "Create responsive, modern UI/UX designs with Figma and prototyping tools.",
            icon: "bi bi-phone",
          },
          {
            title: "Create Motion Graphics",
            desc: "Add life to your visuals with animated graphics and storytelling design.",
            icon: "bi bi-film",
          },
          {
            title: "Build a Professional Portfolio",
            desc: "Showcase your creativity through a curated portfolio and personal brand.",
            icon: "bi bi-folder-check",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Canva",
        desc: "Master Canva design to create stunning social media graphics, presentations, and marketing materials instantly. Perfect for freelancers, marketers, and entrepreneurs.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/new/canva.png",
        aboutData: {
          topic: "Master Canva — Design Like a Pro with Ease and Creativity!",
          content1:
            "Learn how to create professional and visually appealing designs for any purpose. This Canva Mastery course helps you build confidence in visual design — from social media posts to business presentations and branding materials.",
          content2:
            "The Canva course by Urbancode takes you from beginner to expert in digital design. You'll start by understanding Canva’s interface and tools, then progress to advanced techniques like branding, animation, and marketing design. Through hands-on projects and templates, you’ll learn how to create high-quality visuals quickly and effectively — even with no prior design experience.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Getting Started with Canva",
            icon: "bi bi-brush",
            defaultOpen: true,
            items: [
              "Introduction to Canva and its uses",
              "Creating your Canva account",
              "Exploring Canva interface and dashboard",
              "Understanding templates and layouts",
              "Working with elements, shapes, and icons",
              "Saving and exporting your designs",
            ],
          },
          {
            id: 2,
            title: "Designing Basic Projects",
            icon: "bi bi-image",
            items: [
              "Designing social media posts (Instagram, Facebook, LinkedIn)",
              "Creating posters and flyers",
              "Making YouTube thumbnails and channel art",
              "Working with colors, fonts, and alignments",
              "Using Canva grids and frames",
            ],
          },
          {
            id: 3,
            title: "Advanced Design Techniques",
            icon: "bi bi-palette",
            items: [
              "Design composition and layout balance",
              "Using layers and transparency",
              "Image editing and filters",
              "Working with shapes and masks",
              "Creating animated posts and videos",
            ],
          },
          {
            id: 4,
            title: "Branding & Marketing Design",
            icon: "bi bi-megaphone",
            items: [
              "Creating a brand kit (logo, color palette, typography)",
              "Designing business cards and brochures",
              "Creating marketing ads and email banners",
              "Designing presentations and pitch decks",
              "Collaborating and sharing designs with teams",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Canva from Scratch",
            desc: "Understand Canva’s tools, interface, and design workflow — even with zero design background.",
            icon: "bi bi-brush",
          },
          {
            title: "Create Stunning Social Media Designs",
            desc: "Design eye-catching posts, stories, and ads for all social platforms.",
            icon: "bi bi-instagram",
          },
          {
            title: "Build Professional Branding",
            desc: "Develop brand kits, logos, business cards, and marketing materials for clients or businesses.",
            icon: "bi bi-megaphone",
          },
          {
            title: "Design Engaging Presentations",
            desc: "Create business, school, and marketing presentations that stand out visually.",
            icon: "bi bi-slides",
          },
          {
            title: "Animate and Edit Videos",
            desc: "Use Canva’s animation and video editing tools to create dynamic visual content.",
            icon: "bi bi-play-circle",
          },
          {
            title: "Monetize Your Canva Skills",
            desc: "Learn how to sell templates, offer freelance services, and build a design portfolio.",
            icon: "bi bi-cash-coin",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },

  "Cloud and DevOps": {
    mainCategoryDesc: "Cloud & DevOps Mastery",
    subDesc:
      "Gain in-depth expertise in Cloud Computing and DevOps practices to streamline development and operations. Learn AWS, Azure, Google Cloud, Docker, Kubernetes, Jenkins, and CI/CD pipelines to design scalable, secure, and automated solutions.",
    subHeading:
      "Become industry-ready with the skills to drive cloud-native development, deployment automation, and IT infrastructure management.",
    mainImage: "/images/courses/Cloud_DevOps.jpg",

    courses: [
      {
        title: "AWS",
                        curriculumUrls: ["/curriculum/UC_AWS_Curriculum v1.0.pdf"],

        desc: "Launch your cloud computing career with comprehensive AWS training. Master architecture, EC2, S3, and DevOps integration to secure high-paying Cloud Engineer roles.",
        rating: 5.0,
        duration: "3 months",
        students: "1,012",
        img: "/images/courses/aws1.png",
        aboutData: {
          topic:
            "Master AWS — From Cloud Fundamentals to Advanced Architecture & DevOps!",
          content1:
            "This AWS course takes you from the basics of cloud computing to advanced infrastructure design, automation, and security. Learn how to build, deploy, and manage scalable cloud applications using Amazon Web Services’ most powerful tools.",
          content2:
            "The AWS course by Urbancode covers a full spectrum of AWS technologies — from EC2, S3, and IAM to Lambda, Kubernetes, and CloudFormation. You’ll gain practical, hands-on experience in cloud architecture, serverless computing, DevOps automation, and cost optimization. By the end of the program, you’ll be ready to take AWS certification exams and excel as a cloud professional.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Cloud Fundamentals",
            icon: "bi bi-cloud",
            defaultOpen: true,
            items: [
              "Introduction to Cloud Computing",
              "Overview of AWS Global Infrastructure",
              "AWS Management Console & CLI",
              "Core AWS Services (EC2, S3, RDS, IAM)",
              "Understanding Regions and Availability Zones",
              "AWS Free Tier and Account Setup",
            ],
          },
          {
            id: 2,
            title: "Compute, Storage & Networking",
            icon: "bi bi-hdd-network",
            items: [
              "Elastic Compute Cloud (EC2) and AMIs",
              "Simple Storage Service (S3) Essentials",
              "Elastic Block Store (EBS) and Glacier",
              "Virtual Private Cloud (VPC) and Subnets",
              "Elastic Load Balancing (ELB) and Auto Scaling",
              "DNS Management with Route 53",
            ],
          },
          {
            id: 3,
            title: "AWS Security & Identity",
            icon: "bi bi-shield-lock",
            items: [
              "Identity and Access Management (IAM)",
              "Security Groups and Network ACLs",
              "Key Management Service (KMS)",
              "AWS Organizations and Billing Control",
              "AWS Shared Responsibility Model",
              "Best Practices for Cloud Security",
            ],
          },
          {
            id: 4,
            title: "Databases & Analytics",
            icon: "bi bi-database",
            items: [
              "Amazon RDS and Aurora",
              "DynamoDB (NoSQL Database)",
              "Redshift Data Warehousing",
              "ElastiCache for Performance Optimization",
              "Athena and QuickSight for Data Analytics",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand Cloud Computing & AWS Core Services",
            desc: "Gain a solid foundation in cloud infrastructure, virtualization, and AWS’s core components like EC2, S3, and RDS.",
            icon: "bi bi-cloud",
          },
          {
            title: "Design & Deploy Scalable Cloud Applications",
            desc: "Learn to architect secure, fault-tolerant, and highly available cloud solutions using real-world AWS design principles.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Master Serverless & DevOps Automation",
            desc: "Implement automation pipelines and serverless systems using Lambda, CloudFormation, and CI/CD tools.",
            icon: "bi bi-lightning",
          },
          {
            title: "Manage Security, Identity, and Compliance",
            desc: "Protect AWS workloads using IAM, KMS, and AWS Organizations for strong security and governance.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Analyze Data with AWS Analytics Tools",
            desc: "Use Redshift, Athena, and QuickSight to process, visualize, and draw insights from cloud data.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Prepare for AWS Certifications",
            desc: "Get ready for AWS Solutions Architect and DevOps Engineer certifications with guided projects and practice labs.",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Google Cloud",
        desc: "Master Google Cloud Platform (GCP). Learn to design scalable cloud infrastructure, data pipelines, and AI integrations to pass GCP certification exams.",
        rating: 5.0,
        duration: "3 months",
        students: "985",
        img: "/images/courses/gcp.webp",
        aboutData: {
          topic:
            "Master Google Cloud Platform — From Fundamentals to Advanced Cloud Solutions!",
          content1:
            "Accelerate your cloud career with comprehensive Google Cloud training. Learn how to design, deploy, and manage scalable cloud applications, build secure infrastructure, and integrate AI capabilities. This course prepares you for GCP certification and real-world enterprise cloud solutions.",
          content2:
            "The Google Cloud course by Urbancode covers cloud computing fundamentals through to expert-level solutions. You’ll explore GCP core services, networking, security, and automation while working hands-on with virtual machines, storage, and app services. The program also includes advanced topics like GCP DevOps, AI services, Kubernetes, and hybrid cloud management, ensuring you’re fully industry-ready for cloud engineering and architecture roles.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Cloud Fundamentals",
            icon: "bi bi-cloud",
            defaultOpen: true,
            items: [
              "Introduction to Cloud Computing and Google Cloud",
              "Understanding GCP architecture and regions",
              "Google Cloud Console & CLI basics",
              "Core GCP services (Compute Engine, Cloud Storage, BigQuery)",
              "Creating and managing GCP resources",
              "GCP Free Tier and account setup",
            ],
          },
          {
            id: 2,
            title: "Identity, Governance & Security",
            icon: "bi bi-shield-lock",
            items: [
              "Google Cloud Identity and Access Management (IAM)",
              "Resource hierarchy and organization policies",
              "Network security with VPC Service Controls",
              "Cloud Security Command Center",
              "Best practices for GCP security and compliance",
            ],
          },
          {
            id: 3,
            title: "GCP Networking & Storage",
            icon: "bi bi-diagram-3",
            items: [
              "Virtual Private Cloud (VPC) and subnets",
              "Cloud Load Balancing and CDN",
              "Cloud VPN and Interconnect",
              "Cloud Storage classes and lifecycle management",
              "Persistent Disks and Filestore",
            ],
          },
          {
            id: 4,
            title: "GCP Compute & Application Services",
            icon: "bi bi-cpu",
            items: [
              "Compute Engine virtual machines",
              "App Engine for serverless applications",
              "Kubernetes Engine (GKE) for container orchestration",
              "Autoscaling and load balancing in GCP",
              "Cloud Functions and Event-driven architecture",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Google Cloud Platform",
            desc: "Understand GCP core services, infrastructure, and architecture for real-world applications.",
            icon: "bi bi-cloud",
          },
          {
            title: "Deploy & Manage Cloud Solutions",
            desc: "Design, deploy, and scale virtual machines, databases, and cloud applications efficiently.",
            icon: "bi bi-gear",
          },
          {
            title: "Automate with GCP DevOps Tools",
            desc: "Build and manage CI/CD pipelines, automate infrastructure, and streamline deployments.",
            icon: "bi bi-code-slash",
          },
          {
            title: "Integrate AI & Machine Learning",
            desc: "Leverage GCP AI and ML services for intelligent cloud-based applications.",
            icon: "bi bi-robot",
          },
          {
            title: "Enhance Cloud Security",
            desc: "Apply best practices in governance, identity, and threat protection across GCP resources.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Prepare for GCP Certification",
            desc: "Gain knowledge to pass key Google Cloud certification exams (Associate Cloud Engineer, Professional Cloud Architect).",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Microsoft Azure",
        desc: "Become an Azure Cloud expert. Master cloud administration, infrastructure deployment, and DevOps practices to accelerate your career in enterprise IT.",
        rating: 5.0,
        duration: "3 months",
        students: "965",
        img: "/images/courses/azure.png",
        aboutData: {
          topic:
            "Become a Certified Microsoft Azure Cloud Expert — From Fundamentals to Advanced Cloud Solutions!",
          content1:
            "Accelerate your cloud career with comprehensive Microsoft Azure training. Learn how to design, deploy, and manage scalable cloud applications, build secure infrastructure, and integrate DevOps and AI capabilities. This course prepares you for Azure certification and real-world enterprise cloud solutions.",
          content2:
            "The Microsoft Azure course by Urbancode covers cloud computing fundamentals through to expert-level solutions. You’ll explore Azure core services, networking, security, and automation while working hands-on with virtual machines, storage, and app services. The program also includes advanced topics like Azure DevOps, AI services, Kubernetes, and hybrid cloud management, ensuring you’re fully industry-ready for cloud engineering and architecture roles.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Azure Fundamentals",
            icon: "bi bi-cloud",
            defaultOpen: true,
            items: [
              "Introduction to Cloud Computing and Azure",
              "Understanding Azure architecture and regions",
              "Azure Resource Manager (ARM) overview",
              "Core Azure services (Compute, Network, Storage)",
              "Creating and managing Azure resources",
              "Azure Portal, CLI, and PowerShell basics",
            ],
          },
          {
            id: 2,
            title: "Identity, Governance & Security",
            icon: "bi bi-shield-lock",
            items: [
              "Azure Active Directory (AAD) fundamentals",
              "Role-Based Access Control (RBAC)",
              "Azure policies and governance",
              "Network security groups and firewalls",
              "Azure Security Center and compliance management",
            ],
          },
          {
            id: 3,
            title: "Azure Networking & Storage",
            icon: "bi bi-diagram-3",
            items: [
              "Virtual Networks (VNets) and subnets",
              "Network peering and load balancing",
              "Azure VPN Gateway and ExpressRoute",
              "Blob, Table, and File storage",
              "Storage redundancy and backup strategies",
            ],
          },
          {
            id: 4,
            title: "Azure Compute & Application Services",
            icon: "bi bi-cpu",
            items: [
              "Deploying and managing Virtual Machines (VMs)",
              "App Services and Function Apps",
              "Azure Container Instances and Kubernetes Service (AKS)",
              "Autoscaling and load distribution",
              "Azure Logic Apps and Event Grid integration",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Microsoft Azure Cloud",
            desc: "Understand Azure core services, infrastructure, and architecture for real-world applications.",
            icon: "bi bi-cloud",
          },
          {
            title: "Deploy & Manage Cloud Solutions",
            desc: "Design, deploy, and scale virtual machines, databases, and cloud applications efficiently.",
            icon: "bi bi-gear",
          },
          {
            title: "Automate with Azure DevOps",
            desc: "Build and manage CI/CD pipelines, automate infrastructure, and streamline deployments.",
            icon: "bi bi-code-slash",
          },
          {
            title: "Integrate AI & Machine Learning",
            desc: "Leverage Azure AI and ML services for intelligent cloud-based applications.",
            icon: "bi bi-robot",
          },
          {
            title: "Enhance Cloud Security",
            desc: "Apply best practices in governance, identity, and threat protection across Azure resources.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Prepare for Azure Certification",
            desc: "Gain knowledge to pass key Microsoft Azure certification exams (AZ-900, AZ-104, AZ-305).",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "10:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "02:30 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "DevOps",
        desc: "Master the complete DevOps lifecycle. Automate deployments and streamline CI/CD pipelines using Git, Docker, Kubernetes, and Jenkins for elite engineering roles.",
        rating: 5.0,
        duration: "3 months",
        students: "984",
        img: "/images/courses/DevOps.webp",
        curriculumUrls: ["/curriculum/Uc_Devops curriculum.V2.0.pdf"],
        aboutData: {
          topic:
            "Become a DevOps Engineer — Automate, Integrate, and Deliver at Scale!",
          content1:
            "This DevOps course helps you understand how development and operations work together to create faster, more reliable software delivery. Learn tools like Git, Docker, Jenkins, Kubernetes, and Terraform to automate workflows and improve deployment efficiency.",
          content2:
            "You’ll gain hands-on experience in version control, CI/CD pipelines, configuration management, and infrastructure as code. The course focuses on practical implementation, preparing you for roles like DevOps Engineer, Site Reliability Engineer, or Cloud Architect.",
        },
        courseContentData: [
          {
            id: 1,
            title: "DevOps Fundamentals",
            icon: "bi bi-diagram-3",
            defaultOpen: true,
            items: [
              "Introduction to DevOps culture and principles",
              "Agile and Continuous Delivery concepts",
              "Software development lifecycle (SDLC)",
              "Version control with Git and GitHub",
              "Basics of CI/CD and automation",
            ],
          },
          {
            id: 2,
            title: "CI/CD and Automation Tools",
            icon: "bi bi-lightning",
            items: [
              "Setting up CI/CD pipelines with Jenkins",
              "Build automation using Maven and Gradle",
              "Integrating testing and deployment automation",
              "Monitoring and logging fundamentals",
            ],
          },
          {
            id: 3,
            title: "Containerization and Orchestration",
            icon: "bi bi-box",
            items: [
              "Introduction to Docker containers",
              "Container image management and networking",
              "Kubernetes basics and architecture",
              "Deploying and scaling applications on Kubernetes",
            ],
          },
          {
            id: 4,
            title: "Infrastructure as Code (IaC)",
            icon: "bi bi-code-slash",
            items: [
              "Terraform fundamentals and setup",
              "Writing and applying Terraform configurations",
              "Managing AWS and cloud resources with IaC",
              "DevOps project: CI/CD + Docker + Kubernetes + Terraform",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Implement CI/CD Pipelines",
            desc: "Build and automate software delivery pipelines using Jenkins and GitHub Actions.",
            icon: "bi bi-lightning",
          },
          {
            title: "Master Containerization",
            desc: "Work with Docker and Kubernetes to deploy and scale microservices.",
            icon: "bi bi-box",
          },
          {
            title: "Automate Infrastructure",
            desc: "Manage cloud infrastructure using Terraform and configuration management tools.",
            icon: "bi bi-gear",
          },
          {
            title: "Monitor and Optimize Systems",
            desc: "Use logging, monitoring, and alerting tools to maintain performance and reliability.",
            icon: "bi bi-bar-chart",
          },
          {
            title: "Prepare for DevOps Certification",
            desc: "Get ready for certifications like AWS DevOps Engineer or Azure DevOps Expert.",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Kubernetes",
        desc: "Dominate container orchestration with expert Kubernetes training. Learn deployment, scaling, and cluster management for modern cloud-native applications.",
        rating: 5.0,
        duration: "2 months",
        students: "862",
        img: "/images/courses/Kubernetes.webp",
        aboutData: {
          topic:
            "Master Kubernetes — The Future of Cloud-Native Application Management!",
          content1:
            "This Kubernetes course gives you the practical skills to deploy, manage, and scale applications using containers. You’ll understand how Kubernetes automates deployment, networking, scaling, and recovery for cloud workloads.",
          content2:
            "You’ll start with Docker containers, move into Kubernetes architecture, and learn hands-on with pods, services, deployments, and clusters. By the end, you’ll be confident in running production-grade containerized systems.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Kubernetes Fundamentals",
            icon: "bi bi-diagram-3",
            defaultOpen: true,
            items: [
              "Introduction to containers and Docker",
              "What is Kubernetes and why it’s used",
              "Kubernetes architecture: Master & Worker nodes",
              "Setting up Kubernetes cluster locally and on cloud",
            ],
          },
          {
            id: 2,
            title: "Core Components",
            icon: "bi bi-hdd-network",
            items: [
              "Understanding Pods, ReplicaSets, and Deployments",
              "Managing services and networking",
              "ConfigMaps and Secrets management",
              "Namespace and resource organization",
            ],
          },
          {
            id: 3,
            title: "Scaling & Monitoring",
            icon: "bi bi-bar-chart-line",
            items: [
              "Horizontal and vertical scaling",
              "Rolling updates and rollbacks",
              "Cluster monitoring with Prometheus and Grafana",
              "Log management best practices",
            ],
          },
          {
            id: 4,
            title: "Real-World Projects",
            icon: "bi bi-briefcase",
            items: [
              "Deploying microservices architecture on Kubernetes",
              "CI/CD integration with Jenkins",
              "Helm charts for deployment automation",
              "Kubernetes security and RBAC policies",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand Kubernetes Architecture",
            desc: "Learn how clusters, nodes, and pods interact to manage workloads.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Deploy & Scale Applications",
            desc: "Use deployments, services, and auto-scaling to manage performance.",
            icon: "bi bi-rocket",
          },
          {
            title: "Monitor & Troubleshoot Clusters",
            desc: "Use Prometheus and Grafana for metrics and insights.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Integrate with DevOps Tools",
            desc: "Combine Kubernetes with Jenkins and Helm for CI/CD workflows.",
            icon: "bi bi-lightning",
          },
          {
            title: "Build Production-Ready Skills",
            desc: "Work on real Kubernetes projects with container orchestration.",
            icon: "bi bi-briefcase",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Jenkins",
        desc: "Master Jenkins for robust CI/CD automation. Streamline software delivery, automate testing, and secure agile development pipelines for top enterprise roles.",
        rating: 4.9,
        duration: "1.5 months",
        students: "798",
        img: "/images/courses/Jenkins.webp",
        aboutData: {
          topic:
            "Master Jenkins — Automate Your Build and Deployment Pipeline!",
          content1:
            "This Jenkins course teaches you how to set up and manage CI/CD pipelines for modern applications. Learn pipeline scripting, plugin management, and automation for testing and deployment.",
          content2:
            "You’ll practice real-world scenarios like integrating Jenkins with GitHub, Docker, and Kubernetes. The course focuses on automation efficiency, continuous testing, and deployment best practices.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Jenkins Basics",
            icon: "bi bi-gear",
            defaultOpen: true,
            items: [
              "Introduction to DevOps and CI/CD concepts",
              "Installing and configuring Jenkins",
              "Understanding Jenkins architecture and plugins",
              "Setting up your first Jenkins job",
            ],
          },
          {
            id: 2,
            title: "Pipeline Automation",
            icon: "bi bi-lightning-charge",
            items: [
              "Declarative vs Scripted Pipelines",
              "Creating multi-stage pipelines",
              "Integrating Jenkins with GitHub and Docker",
              "Automating builds and testing",
            ],
          },
          {
            id: 3,
            title: "Integration & Deployment",
            icon: "bi bi-diagram-3",
            items: [
              "Connecting Jenkins with Kubernetes and AWS",
              "Automated deployments with Helm",
              "Pipeline security and credentials management",
              "Jenkinsfile best practices",
            ],
          },
          {
            id: 4,
            title: "Real-World Use Cases",
            icon: "bi bi-briefcase",
            items: [
              "End-to-end CI/CD pipeline setup",
              "Monitoring Jenkins jobs and performance",
              "Scaling Jenkins with agents and distributed builds",
              "DevOps project: Jenkins + Docker + Kubernetes",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Automate Build Pipelines",
            desc: "Set up CI/CD workflows for any application using Jenkins.",
            icon: "bi bi-lightning",
          },
          {
            title: "Integrate with DevOps Tools",
            desc: "Connect Jenkins with Git, Docker, Kubernetes, and AWS.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Secure and Scale Pipelines",
            desc: "Use credentials, agents, and role-based access control.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Optimize Performance",
            desc: "Monitor and troubleshoot Jenkins jobs efficiently.",
            icon: "bi bi-bar-chart",
          },
          {
            title: "Build Hands-On Projects",
            desc: "Create complete CI/CD pipelines with real-world tools.",
            icon: "bi bi-briefcase",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Terraform",
        desc: "Become an Infrastructure as Code (IaC) expert. Master Terraform to automate massive cloud deployments across AWS, Azure, and GCP seamlessly.",
        rating: 5.0,
        duration: "2 months",
        students: "654",
        img: "/images/courses/Terraform.webp",
        aboutData: {
          topic: "Master Terraform — Build and Manage Infrastructure as Code!",
          content1:
            "This Terraform course teaches you how to define and manage cloud infrastructure using code. Learn HCL syntax, providers, modules, and workflows for AWS, Azure, and GCP environments.",
          content2:
            "You’ll gain hands-on experience in writing Terraform configurations, managing state files, provisioning infrastructure, and integrating Terraform with CI/CD pipelines. Ideal for DevOps and Cloud Engineers.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Terraform Basics",
            icon: "bi bi-code",
            defaultOpen: true,
            items: [
              "Introduction to Infrastructure as Code (IaC)",
              "Setting up Terraform and providers",
              "Understanding Terraform workflow",
              "Writing your first configuration file",
            ],
          },
          {
            id: 2,
            title: "State Management & Variables",
            icon: "bi bi-database",
            items: [
              "Terraform state files and remote backends",
              "Input and output variables",
              "Using locals and data sources",
              "Environment management best practices",
            ],
          },
          {
            id: 3,
            title: "Modules & Reusability",
            icon: "bi bi-diagram-3",
            items: [
              "Creating and using Terraform modules",
              "Structuring large infrastructure projects",
              "Versioning and dependency management",
              "Integrating with Terraform Registry",
            ],
          },
          {
            id: 4,
            title: "Real-World Automation",
            icon: "bi bi-lightning",
            items: [
              "Automating infrastructure deployment via CI/CD",
              "Integrating Terraform with Jenkins and GitHub Actions",
              "Managing multi-cloud infrastructure",
              "Project: AWS infrastructure deployment with Terraform",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Build Infrastructure as Code",
            desc: "Automate cloud resource provisioning using Terraform configurations.",
            icon: "bi bi-code",
          },
          {
            title: "Manage State & Variables",
            desc: "Understand and control infrastructure changes using state files.",
            icon: "bi bi-database",
          },
          {
            title: "Create and Use Modules",
            desc: "Reuse Terraform components efficiently across environments.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Integrate with CI/CD Tools",
            desc: "Combine Terraform with Jenkins and GitHub for automation pipelines.",
            icon: "bi bi-lightning",
          },
          {
            title: "Deploy Multi-Cloud Infrastructure",
            desc: "Manage infrastructure across AWS, Azure, and GCP.",
            icon: "bi bi-globe",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },

  "AI and Data Science": {
    mainCategoryDesc: "Shape the Future with AI & Data Science",
    subDesc:
      "Dive deep into Python, Machine Learning, Generative AI, and Business Intelligence. Master the tools to analyze data, build predictive models, and create intelligent solutions that drive innovation.",
    subHeading:
      "Transform your knowledge into career-ready expertise as a Data Scientist, unlocking opportunities in AI, automation, research, and innovation.",
    mainImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",

    courses: [
      {
        title: "Data Analytics",
        desc: "Transform raw data into strategic decisions. Master Excel, SQL, Python, Power BI, and Tableau to secure lucrative roles as a professional Data Analyst.",
        rating: 4.8,
        duration: "3 months",
        students: "500",
        img: "/images/courses/new/data-analytics.png",
        aboutData: {
          topic:
            "Master Data Analytics — From Data Mining to Actionable Business Insights!",
          content1:
            "This comprehensive Data Analytics course takes you through the entire data lifecycle — from data cleaning and preparation to advanced visualization and predictive modeling. You'll master the most in-demand tools including Excel, SQL, Python, Power BI, and Tableau.",
          content2:
            "Through real-world projects and hands-on case studies, you'll learn how to derive meaningful conclusions from complex datasets and communicate them effectively to stakeholders. Whether you're a beginner or looking to upskill, this program prepares you for a successful career in one of the fastest-growing fields of the modern economy.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Advanced Excel for Data Analytics",
            icon: "bi bi-file-earmark-excel",
            items: [
              "Mastering Formulas: VLOOKUP, HLOOKUP, XLOOKUP, and Index-Match",
              "Data Cleaning: Text functions, removing duplicates, and data validation",
              "Pivot Tables & Dashboards: Creating dynamic summaries and interactive slicers",
              "Power Query: Automating data import and transformation",
              "Statistical Analysis: Using Analysis ToolPak for regression and forecasting",
            ],
          },
          {
            id: 2,
            title: "SQL Mastery (Structured Query Language)",
            icon: "bi bi-database",
            items: [
              "Database Basics: DDL, DML, and DQL commands",
              "Advanced Querying: Joins (Inner, Left, Right, Full), Unions, and Subqueries",
              "Window Functions: ROW_NUMBER, RANK, and LEAD/LAG",
              "Data Definition: Creating and Managing Tables, Views, and Indexes",
              "Optimization: Writing efficient queries for large datasets",
            ],
          },
          {
            id: 3,
            title: "Python for Data Science",
            icon: "bi bi-code-slash",
            items: [
              "Python Fundamentals: Syntax, Data structures, and Flow control",
              "NumPy: Numerical computing and array manipulation",
              "Pandas: DataFrames, Series, and advanced data cleaning",
              "Matplotlib & Seaborn: Visualizing trends and distributions",
              "Intro to Scikit-Learn: Basic predictive modeling and regression",
            ],
          },
          {
            id: 4,
            title: "Power BI Visualization",
            icon: "bi bi-bar-chart",
            items: [
              "Power BI Desktop: Connecting to diverse data sources",
              "DAX (Data Analysis Expressions): Writing complex measures and calculated columns",
              "Data Modeling: Creating relationships and star schemas",
              "Interactive Reports: Designing executive-level dashboards",
              "Power BI Service: Publishing, sharing, and scheduled refreshes",
            ],
          },
          {
            id: 5,
            title: "Tableau Visual Analytics",
            icon: "bi bi-brush",
            items: [
              "Tableau Architecture: Sheets, Dashboards, and Stories",
              "Calculated Fields: Using LOD (Level of Detail) expressions",
              "Mapping: Creating geographic and dual-axis maps",
              "Level of Detail (LOD) Expressions for granular analysis",
              "Publishing & Collaboration on Tableau Server/Public",
            ],
          },
          {
            id: 6,
            title: "Big Data with Azure Databricks",
            icon: "bi bi-cloud",
            items: [
              "Introduction to Spark: Distributed computing fundamentals",
              "Databricks Workspace: Notebook management and collaboration",
              "PySpark: Processing large-scale datasets with Python and Spark",
              "Data Lake Integration: Reading from and writing to Delta Lake",
              "ETL Pipelines: Building automated data workflows at scale",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Data Analysis Tools",
            desc: "Expertise in Excel, SQL, Python, Power BI, and Tableau.",
            icon: "bi bi-tools",
          },
          {
            title: "Build Executive Dashboards",
            desc: "Design interactive and visual stories that drive business strategy.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Work with Big Data",
            desc: "Process large-scale datasets using Spark and Azure Databricks.",
            icon: "bi bi-cloud-arrow-down",
          },
          {
            title: "Clean and Manage Data",
            desc: "Learn advanced techniques for data wrangling and transformation.",
            icon: "bi bi-stars",
          },
          {
            title: "Derive Business Insights",
            desc: "Translate complex numbers into actionable stories for stakeholders.",
            icon: "bi bi-graph-up-arrow",
          },
          {
            title: "Complete Capstone Projects",
            desc: "Apply your skills to real-world datasets and industry scenarios.",
            icon: "bi bi-briefcase",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:30 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "AI and ML",
        curriculumUrls: ["/curriculum/UC_AIML curriculum v1.0.pdf"],

        desc: "Lead the data revolution. Master Python, Artificial Intelligence, and Machine Learning algorithms to build predictive models and secure top Data Scientist roles.",
        rating: 5.0,
        duration: "1 month",
        students: "105",
        img: "/images/courses/new/ai-ml.png",
        aboutData: {
          topic:
            "Master Data Science — From Python Fundamentals to Machine Learning & AI!",
          content1:
            "Learn Data Science from scratch! Understand data manipulation, analysis, visualization, and predictive modeling. This course equips you with practical skills to work with real-world datasets and build industry-ready projects.",
          content2:
            "The Data Science course by Urbancode covers everything from Python programming essentials to advanced Machine Learning and AI. You’ll learn to clean and analyze data, build predictive models, implement AI algorithms, and create interactive dashboards. By the end, you’ll have hands-on experience in data pipelines, machine learning workflows, and deployment strategies.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Python for Data Science",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Python basics and setup for Data Science",
              "Data types, variables, and expressions",
              "Conditional statements, loops, and functions",
              "Modules and libraries (NumPy, Pandas)",
              "Data cleaning and preprocessing basics",
            ],
          },
          {
            id: 2,
            title: "Data Handling & Visualization",
            icon: "bi bi-database",
            items: [
              "Working with CSV, Excel, and JSON files",
              "Data exploration with Pandas",
              "Basic visualization with Matplotlib and Seaborn",
              "Understanding distributions and descriptive statistics",
              "Handling missing data and outliers",
            ],
          },
          {
            id: 3,
            title: "Statistical Analysis",
            icon: "bi bi-bar-chart-line",
            items: [
              "Probability concepts and distributions",
              "Hypothesis testing and confidence intervals",
              "Correlation and regression analysis",
              "Feature selection and data transformation",
              "Introduction to experimental design",
            ],
          },
          {
            id: 4,
            title: "Machine Learning Basics",
            icon: "bi bi-gear",
            items: [
              "Supervised learning: Linear and Logistic Regression",
              "Decision trees and Random Forests",
              "Unsupervised learning: Clustering and PCA",
              "Model evaluation metrics",
              "Cross-validation and hyperparameter tuning",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Data Analysis",
            desc: "Perform advanced data cleaning, manipulation, and visualization using Python libraries.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Build Machine Learning Models",
            desc: "Develop predictive models using supervised and unsupervised learning techniques.",
            icon: "bi bi-robot",
          },
          {
            title: "Apply Deep Learning & AI",
            desc: "Implement neural networks and AI algorithms for image, text, and sequential data.",
            icon: "bi bi-cpu",
          },
          {
            title: "Handle Real-World Datasets",
            desc: "Work with structured and unstructured data, clean it, and extract insights effectively.",
            icon: "bi bi-database",
          },
          {
            title: "Create Data-Driven Applications",
            desc: "Build dashboards, analytics apps, and end-to-end Data Science solutions.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Become Industry-Ready",
            desc: "Gain hands-on experience with projects, deployment workflows, and Big Data tools.",
            icon: "bi bi-gear",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Gen AI",
               curriculumUrls: ["/curriculum/UC_Gen AI curriculum v1.0.pdf"],

        desc: "Master the future of AI with Generative AI. Learn Python, LLMs, RAG, Vector Stores, and Prompt Engineering to build intelligent chatbots and agents.",
        rating: 4.9,
        duration: "3 months",
        students: "250",
        img: "/images/courses/new/geai.png",
        aboutData: {
          topic: "Master Generative AI — From LLMs to Autonomous Agents!",
          content1:
            "Dive into the cutting-edge world of Generative AI. Learn to build and deploy applications using Large Language Models (LLMs), LangChain, and Vector Databases. Master RAG (Retrieval-Augmented Generation) and Prompt Engineering to create intelligent systems.",
          content2:
            "This comprehensive course covers Python foundations, LLM ecosystems (OpenAI, Gemini, Hugging Face), and advanced frameworks like LangChain and CrewAI. You'll gain hands-on experience building chatbots, multi-agent systems, and production-ready AI applications with guardrails and PII masking.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Python & Environment Setup",
            icon: "bi bi-terminal",
            defaultOpen: true,
            items: [
              "Python and VS Code complete setup",
              "Virtual environment and jupyter notebook",
              "Github and Repo Intro",
              "Github copilot and other extensions",
              "Basic Python (Loops, If-Else, Class, Functions)",
              "Package building",
            ],
          },
          {
            id: 2,
            title: "Generative AI Basics & LLMs",
            icon: "bi bi-cpu",
            items: [
              "Generative AI – Basic theory, companies and LLMs",
              "Get LLM credentials (API key) from Gemini, OpenAI, HF, Azure Openai",
              "Basic LLM calls with temperature, top p, top k and max tokens",
              "Understanding tokens and costs",
              "Prompt Engineering techniques",
            ],
          },
          {
            id: 3,
            title: "LangChain & RAG",
            icon: "bi bi-link",
            items: [
              "LangChain – Basics and Chains",
              "RAG (Retrieval-Augmented Generation) Architecture",
              "Embedding models and Vector Stores",
              "Llama Index introduction",
              "Semantic search and document retrieval",
            ],
          },
          {
            id: 4,
            title: "Advanced AI Agents & Deployment",
            icon: "bi bi-robot",
            items: [
              "Crew AI – Multi-agent systems",
              "Guardrails and Masking PII",
              "Building production-ready Chatbots",
              "Deployment strategies for AI apps",
              "Monitoring and maintaining LLM apps",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master LLM Integration",
            desc: "Connect with OpenAI, Gemini, and Hugging Face models.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Build RAG Applications",
            desc: "Create AI systems that talk to your own documents.",
            icon: "bi bi-database-check",
          },
          {
            title: "Develop AI Agents",
            desc: "Automate complex workflows with multi-agent frameworks like CrewAI.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Implement AI Guardrails",
            desc: "Ensure safety and privacy with PII masking and output validation.",
            icon: "bi bi-shield-check",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Python for Data Analyst",
        desc: "Build a strong foundation in Python programming and data analysis. Master Python fundamentals, Pandas for data processing, and Matplotlib for insightful visualizations.",
        rating: 5.0,
        duration: "2 months",
        students: "228",
        img: "/images/courses/new/pythonfordt.png",
        aboutData: {
          topic: "Python for Data Analyst — Complete Curriculum",
          content1:
            "This curriculum is designed to provide a strong foundation in Python programming and data analysis. Students will learn Python fundamentals, advanced concepts, Pandas for data processing, and data visualization using Matplotlib.",
          content2:
            "Upon completion, students will be able to write Python programs, manipulate data structures, work with files, use Jupyter Notebook, perform data analysis using Pandas, clean datasets, and create insightful visualizations using Matplotlib.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Introduction to Python",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Python Introduction",
              "Python Installation",
              "Environment Setup (VS Code, Python Interpreter)",
              "Running Python Programs",
              "Understanding Python Development Workflow",
            ],
          },
          {
            id: 2,
            title: "Python Basics",
            icon: "bi bi-code-slash",
            items: [
              "Writing Your First Python Program",
              "Variables and Naming Conventions",
              "Data Types (int, float, string, bool)",
              "Input and Output Operations",
              "Operators and Expressions",
              {
                title: "String Manipulation",
                details: [
                  "String Methods",
                  "String Formatting",
                  "Slicing and Indexing",
                ],
              },
            ],
          },
          {
            id: 3,
            title: "Intermediate Python",
            icon: "bi bi-braces",
            items: [
              {
                title: "Control Flow Statements",
                details: ["if, elif, else"],
              },
              {
                title: "Looping Concepts",
                details: ["for loop", "while loop", "break, continue, pass"],
              },
              {
                title: "Functions",
                details: [
                  "Function Definition",
                  "Parameters and Arguments",
                  "Return Statements",
                  "Lambda Functions",
                ],
              },
            ],
          },
          {
            id: 4,
            title: "Advanced Python",
            icon: "bi bi-layers",
            items: [
              {
                title: "Data Structures",
                details: ["Lists", "Tuples", "Sets", "Dictionaries"],
              },
              "Introduction to Classes and Objects",
              "Basic Object-Oriented Programming Concepts",
              {
                title: "File Handling",
                details: [
                  "Reading Files",
                  "Writing Files",
                  "Working with CSV and Text Files",
                ],
              },
            ],
          },
          {
            id: 5,
            title: "Jupyter Notebook & Pandas Setup",
            icon: "bi bi-journal-code",
            items: [
              "What is Jupyter Notebook?",
              "Installing Jupyter Notebook",
              "Creating and Managing Notebooks",
              "What is Pandas?",
              "Why Pandas is Important for Data Analysis",
              "Installing Pandas Package",
              "Verifying Installation",
              "Importing Pandas in Python",
            ],
          },
          {
            id: 6,
            title: "Pandas Basics",
            icon: "bi bi-table",
            items: [
              "Introduction to Pandas",
              "Series",
              "DataFrame",
              "Reading CSV Files",
              "Reading JSON Files",
              "Exploring and Analyzing Data",
              "Data Selection and Filtering",
              "Sorting and Aggregation",
            ],
          },
          {
            id: 7,
            title: "Data Cleaning with Pandas",
            icon: "bi bi-funnel",
            items: [
              "Introduction to Data Cleaning",
              "Handling Missing Values",
              "Empty Data Cleaning",
              "Duplicate Data Detection and Removal",
              "Finding Wrong Data",
              "Correcting Wrong Data",
              "Identifying Wrong Formats",
              "Converting Data Types",
              "Data Standardization Techniques",
            ],
          },
          {
            id: 8,
            title: "Data Visualization",
            icon: "bi bi-bar-chart-line",
            items: [
              "Introduction to Data Visualization",
              "Correlation Analysis",
              "Introduction to Matplotlib",
              "Line Charts",
              "Bar Charts",
              "Pie Charts",
              "Histograms",
              "Scatter Plots",
              "Customizing Charts",
              "Visual Data Analysis Projects",
            ],
          },
          {
            id: 9,
            title: "Capstone Project",
            icon: "bi bi-award",
            items: [
              "Perform end-to-end data analysis using Python, Pandas, and Matplotlib",
              "Import datasets, clean data, analyze trends, and create visualizations",
              "Present findings and insights from real-world data analysis projects",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Write Python Programs",
            desc: "Build a solid foundation from variables and control flow to functions, OOP, and file handling.",
            icon: "bi bi-code-slash",
          },
          {
            title: "Work with Jupyter Notebook",
            desc: "Set up, manage, and run interactive notebooks for data exploration and analysis.",
            icon: "bi bi-journal-code",
          },
          {
            title: "Analyze Data with Pandas",
            desc: "Read CSV and JSON files, filter, sort, aggregate, and explore datasets using Series and DataFrames.",
            icon: "bi bi-table",
          },
          {
            title: "Clean and Prepare Datasets",
            desc: "Handle missing values, duplicates, wrong formats, and standardize data for reliable analysis.",
            icon: "bi bi-funnel",
          },
          {
            title: "Create Visualizations with Matplotlib",
            desc: "Build line, bar, pie, histogram, and scatter charts with customization for data storytelling.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Complete End-to-End Analysis",
            desc: "Deliver capstone projects from data import through cleaning, analysis, visualization, and presentation.",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Power BI",
                       curriculumUrls: ["/curriculum/UC_Power BI Curriculum v1.0.pdf"],

        desc: "Transform business data into actionable strategies. Master Power BI dashboard creation and DAX functions to secure lucrative Business Intelligence roles.",
        rating: 5.0,
        duration: "1 month",
        students: "337",
        img: "/images/courses/new/powerbi.png",
        aboutData: {
          topic: "Master Power BI — Transform Data into Actionable Insights!",
          content1:
            "Learn how to turn raw data into meaningful insights with Power BI. This course takes you from beginner to expert in data visualization, dashboard creation, and business intelligence, using hands-on exercises and real-world datasets.",
          content2:
            "The Power BI course by Urbancode covers everything from basic Power BI concepts to advanced analytics. Start with Power Query, data modeling, and DAX functions, then move to interactive dashboards, custom visuals, and reporting. Gain industry-ready skills in Power BI Service, Power BI Desktop, and Power BI Mobile, enabling you to drive smarter business decisions.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Module 1: Introduction to Power BI",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Overview of Business Intelligence (BI) and data analytics",
              "Power BI as a self-service BI tool by Microsoft",
              "Key components: Power BI Desktop, Power BI Service, Power BI Mobile",
              "Use cases: dashboards, reports, KPI tracking, data storytelling",
              "The ETL Pipeline: Extract, Transform, Load",
              "Data sources → Power Query → Data Model → Reports → Dashboards",
              "On-premises vs cloud data connectivity",
              "Difference between reports and dashboards",
              "Downloading and installing Power BI Desktop",
              "Navigating the Power BI Desktop interface",
              "Report View, Data View, Model View",
              "The ribbon, fields pane, filters pane, visualizations pane",
              "Connect to data source → Transform → Build data model → Create visualizations → Publish",
            ],
          },
          {
            id: 2,
            title: "Module 2: Connecting to Data Sources",
            icon: "bi bi-diagram-3",
            items: [
              "Connecting to Excel workbooks and CSV files",
              "Importing JSON and XML files",
              "Folder connector: combining multiple files",
              "PDF data extraction",
              "SQL Server, MySQL, PostgreSQL connections",
              "Import mode vs DirectQuery mode vs Live Connection",
              "Stored procedures and native queries",
              "Authentication methods (Windows, Database, OAuth)",
              "SharePoint Online Lists and Folders",
              "Azure SQL Database and Azure Data Lake",
              "Connecting to Google Analytics and Salesforce",
              "Web connector: scraping HTML tables",
              "REST API connection basics",
            ],
          },
          {
            id: 3,
            title: "Module 3: Power Query — Data Transformation",
            icon: "bi bi-sliders",
            items: [
              "Launching Power Query Editor",
              "Applied Steps panel and query settings",
              "Data type management and column profiling",
              "Query dependencies and advanced editor",
              "Remove duplicates, errors, and blank rows",
              "Replace values and fill up/down",
              "Trim, clean, and format text columns",
              "Change data types (text, number, date, boolean)",
              "Split columns by delimiter or character count",
              "Merge columns and conditional column creation",
              "Extract: first N chars, last N chars, text between",
              "Custom columns using M expressions",
              "Transpose, pivot, and unpivot columns",
              "Group By: aggregations on grouped data",
              "Append queries: stacking tables vertically",
              "Merge queries: joins (inner, left, full outer)",
              "Understanding M formula language syntax",
              "let...in expression structure",
              "Common M functions: Text.Upper, Date.Year, List.Sum",
              "Parameters and parameterized queries",
            ],
          },
          {
            id: 4,
            title: "Module 4: Data Modeling",
            icon: "bi bi-diagram-2",
            items: [
              "What is a data model and why it matters",
              "Fact tables vs dimension tables",
              "Star schema vs snowflake schema",
              "Flat tables: limitations and when to avoid them",
              "Creating relationships between tables",
              "Cardinality: One-to-Many, Many-to-One, One-to-One, Many-to-Many",
              "Cross filter direction: Single vs Both",
              "Active vs Inactive relationships",
              "USERELATIONSHIP() to activate inactive relationships",
              "Importance of a dedicated date dimension",
              "Creating a date table using DAX CALENDAR() and CALENDARAUTO()",
              "Adding Year, Quarter, Month, Week columns",
              "Marking a table as Date Table",
              "Hiding unnecessary columns from report view",
              "Setting sort-by-column (e.g., sort Month Name by Month Number)",
              "Data categories: URL, image URL, geography",
              "Hierarchies: Year > Quarter > Month > Day",
            ],
          },
          {
            id: 5,
            title: "Module 5: DAX — Data Analysis Expressions",
            icon: "bi bi-code-slash",
            items: [
              "Measures vs Calculated Columns vs Calculated Tables",
              "DAX syntax: table[column] and measure names",
              "Context: Row context vs Filter context",
              "Implicit vs explicit measures",
              "Aggregation functions: SUM, AVERAGE, MIN, MAX, COUNT, COUNTA, DISTINCTCOUNT",
              "Logical functions: IF, AND, OR, NOT, SWITCH, IFERROR",
              "Text functions: CONCATENATE, LEFT, RIGHT, MID, UPPER, LOWER, FORMAT",
              "Date & Time functions: TODAY, NOW, YEAR, MONTH, DAY, DATEDIFF, EOMONTH",
              "Math functions: DIVIDE, ROUND, ABS, INT, MOD, POWER, SQRT",
              "CALCULATE: the most important DAX function",
              "ALL, ALLEXCEPT, REMOVEFILTERS: removing filters",
              "FILTER: row-by-row filtering with conditions",
              "RELATED and RELATEDTABLE: cross-table lookups",
              "SELECTEDVALUE and HASONEVALUE",
              "TOTALYTD, TOTALQTD, TOTALMTD: period-to-date calculations",
              "DATEADD: shift dates by periods (e.g., prior year)",
              "SAMEPERIODLASTYEAR: year-over-year comparison",
              "DATESBETWEEN and DATESINPERIOD",
              "Rolling averages and running totals",
              "SUMX, AVERAGEX, MAXX, MINX: iterator (X) functions",
              "RANKX: ranking with dynamic filters",
              "TOPN: selecting top N rows",
              "VAR and RETURN: variables in DAX",
              "EARLIER and EARLIEST: row context in iterators",
            ],
          },
          {
            id: 6,
            title: "Module 6: Visualizations & Report Design",
            icon: "bi bi-graph-up",
            items: [
              "Bar / Column Chart: category comparisons",
              "Line Chart: trends over time",
              "Pie / Donut Chart: part-to-whole (max 5 slices)",
              "Card & Multi-row Card: single KPI display",
              "Table & Matrix: detailed tabular data",
              "Map / Filled Map: geographic distribution",
              "Scatter Chart: correlation analysis",
              "Treemap: hierarchical part-to-whole",
              "Gauge: progress toward target",
              "Waterfall Chart: running total changes",
              "Slicers: filtering reports by dimension",
              "Cross-filtering and cross-highlighting between visuals",
              "Drill-down and drill-through navigation",
              "Bookmarks: saving report states and creating navigation",
              "Tooltips: default, report page, and custom tooltips",
              "Buttons and actions for navigation",
              "Applying JSON themes for brand consistency",
              "Conditional formatting: background, font, data bars, icons",
              "Dynamic titles using DAX SELECTEDVALUE()",
              "Canvas background, wallpaper, and layout design",
              "Importing visuals from AppSource",
              "Deneb: Vega-Lite custom visuals",
              "HTML Content visual for rich text",
              "Using R and Python visuals",
            ],
          },
          {
            id: 7,
            title: "Module 7: Power BI Service & Deployment",
            icon: "bi bi-cloud",
            items: [
              "Workspaces: My Workspace vs shared workspaces",
              "Publishing reports from Desktop to Service",
              "Apps: packaging reports for end-user distribution",
              "Licensing: Free, Pro, and Premium Per User",
              "Scheduled refresh setup and frequency",
              "On-premises Data Gateway: purpose and configuration",
              "Incremental refresh for large datasets",
              "Refresh history and failure troubleshooting",
              "Sharing reports and dashboards with individuals",
              "Row-Level Security (RLS): static and dynamic",
              "Workspace roles: Admin, Member, Contributor, Viewer",
              "Subscriptions and email alerts",
              "Embedding reports in SharePoint and Teams",
              "Dataflows: reusable Power Query transformations in the cloud",
              "Certified and promoted datasets",
              "Shared datasets and live connections",
              "Data lineage view",
            ],
          },
          {
            id: 8,
            title: "Module 8: Advanced Topics & Best Practices",
            icon: "bi bi-gear",
            items: [
              "Performance Analyzer: identifying slow visuals",
              "Reducing model size: removing unused columns",
              "Aggregations and composite models",
              "Avoiding bi-directional relationships",
              "Using integer keys instead of text for relationships",
              "Quick Insights and AI Insights in Power BI Service",
              "Key Influencers visual: automated ML insights",
              "Decomposition Tree: drill-down analysis",
              "Anomaly Detection in line charts",
              "Smart Narratives: auto-generated summaries",
              "Q&A visual: natural language queries",
              "Running Python scripts for data transformation",
              "Python-based visualizations (matplotlib, seaborn)",
              "R scripts in Power Query and visuals",
              "Machine learning model integration via Azure ML",
              "Naming conventions for measures, tables, and columns",
              "Documentation and report annotations",
              "Version control with Tabular Editor and Git",
              "XMLA endpoint and ALM Toolkit",
              "Deployment pipelines: Dev → Test → Production",
            ],
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Tableau",
                               curriculumUrls: ["/curriculum/UC_Tableau Curriculum v1.0.pdf"],

        desc: "Become a sought-after Data Storyteller. Master Tableau's visual analytics to drive data-driven corporate decisions and command high-paying analytics jobs.",
        rating: 5.0,
        duration: "1 month",
        students: "386",
        img: "/images/courses/new/tableau.png",
        aboutData: {
          topic:
            "Master Tableau — From Basic Charts to Advanced Dashboards & Analytics!",
          content1:
            "Transform your data into meaningful insights! Learn Tableau from scratch with hands-on exercises, interactive dashboards, and real-world data projects. This course helps you become a Tableau expert, capable of delivering actionable business intelligence.",
          content2:
            "The Tableau course covers everything from fundamental data visualization principles to complex dashboards and advanced analytics. You’ll learn to connect to multiple data sources, create calculated fields, design interactive dashboards, and use advanced features like Level of Detail (LOD) expressions and Tableau Prep for data cleaning. By the end, you'll be ready to make data-driven decisions and impress stakeholders.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Module 1: Data warehouse Concepts",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction about DWC (Data warehousing Concepts)",
              "Dimensions, Measures, Keys",
              "Types of Dimensions",
              "Types of Keys",
              "Identifying Keys",
              "Types of Joins",
              "How to identify Fact and dimension tables",
              "Schema introduction",
              "Types of Schema",
              "Task",
            ],
          },
          {
            id: 2,
            title: "Module 2: Business Intelligence",
            icon: "bi bi-bar-chart",
            items: [
              "Introduction about Business Intelligence",
              "Evolution of BI",
              "Categories of BI",
              "BI tools Comparisons",
              "OLAP and OLTP concepts",
            ],
          },
          {
            id: 3,
            title: "Module 3: Tableau Introduction",
            icon: "bi bi-display",
            items: [
              "Tableau Introduction",
              "Products of Tableau",
              "Features of Tableau",
              "Architecture of Tableau",
            ],
          },
          {
            id: 4,
            title: "Module 4: Data connectivity",
            icon: "bi bi-diagram-3",
            items: [
              "Importing data to Tableau",
              "Creating relationships",
              "Manage relationships",
              "Types of Joins",
              "Star and Snowflake connectivity",
              "Join using Composite Primary Key",
              "Union",
              "Data Interpreter",
              "Task",
            ],
          },
          {
            id: 5,
            title: "Module 5: Data Source",
            icon: "bi bi-database",
            items: [
              "Data source tab Introduction",
              "Handling multiple source",
              "Types of connectivity",
              "Settings in Data Source",
              "Identify Dimension and Measure using colour.",
              "Renaming fields",
              "Pivot",
              "Task",
            ],
          },
          {
            id: 6,
            title: "Module 6: Sheet",
            icon: "bi bi-file-earmark-spreadsheet",
            items: [
              "Sheet Introduction",
              "Data tab overview",
              "Create a calculated field for Dimension and Measure.",
              "Understanding fields",
              "Aggregation Functions",
              "Date functions",
              "String functions",
              "Bin and Grouping",
              "Effective usage of columns and rows",
              "Task",
            ],
          },
          {
            id: 7,
            title: "Module 7: Filter",
            icon: "bi bi-funnel",
            items: [
              "Filter Introduction",
              "Types of Filters",
              "Data Source and Extract Filter",
              "Conditional Filter",
              "Dimension Filter",
              "Measure Filter",
              "Date Filter",
              "Relative Date Filter",
              "Relevant Value Filter",
              "Context Filter",
              "User Filter and Quick Filter",
              "Top and Bottom filter",
              "Global Filter",
              "Set Filter and its types",
              "Task",
            ],
          },
          {
            id: 8,
            title: "Module 8: Parameter",
            icon: "bi bi-sliders",
            items: [
              "Parameter Introduction",
              "Steps to create parameter.",
              "Use parameter for Dimension",
              "Use parameter for Measure",
              "Use parameter for Date",
              "Use parameter for Sorting",
              "Use parameter for filter Selection",
              "Task",
            ],
          },
          {
            id: 9,
            title: "Module 9: Data Blending and Marks",
            icon: "bi bi-pie-chart",
            items: [
              "Data Blending Introduction",
              "Join vs. Blend with practical example",
              "Blending using multiple data source",
              "Marks Introduction",
              "Marks types",
              "Effective usage of marks with practical scenarios",
              "Task",
            ],
          },
          {
            id: 10,
            title: "Module 10: Data and Worksheet menu",
            icon: "bi bi-grid-3x3",
            items: [
              "Refresh Data Source",
              "Data Source replacement",
              "Edit Data source filters",
              "Various options in Worksheet",
              "Task",
            ],
          },
          {
            id: 11,
            title: "Module 11: Charts – Show me",
            icon: "bi bi-graph-up",
            items: [
              "Stacked and Column Charts",
              "Trend Charts",
              "Table and Matrix",
              "Text and Highlight tables",
              "Circle views and Area Charts",
              "Treemaps of Scatter chart",
              "geographical maps and its properties",
              "Histogram and bubble Charts",
              "Create custom visual charts using tricks",
              "Task",
            ],
          },
          {
            id: 12,
            title: "Module 12: LOD – Level of Details",
            icon: "bi bi-layers",
            items: [
              "LOD Introduction",
              "Types of LOD",
              "Syntax",
              "Coherent Analysis using LOD",
              "Scenario questions and discussion related to LOD",
              "Task",
            ],
          },
          {
            id: 13,
            title: "Module 13: Analytics vs. Analysis",
            icon: "bi bi-bar-chart-steps",
            items: [
              "Analytics – Summarise",
              "Analytics – Model",
              "Analytics – Forecasting",
              "Custom Analytics",
              "Various options in Analysis tab",
              "Adding Totals, Grand totals, Row and Column totals",
              "Control layout and table properties",
              "Task",
            ],
          },
          {
            id: 14,
            title: "Module 14: Dashboard",
            icon: "bi bi-window-stack",
            items: [
              "Dashboard introduction",
              "Objects",
              "Dashboards for different devices",
              "Size Adjustment",
              "Dashboard layout",
              "Formatting dashboard",
              "Task",
            ],
          },
          {
            id: 15,
            title: "Module 15: Story and Actions",
            icon: "bi bi-journal-text",
            items: [
              "Story introduction",
              "Creating Storyboard",
              "Properties of Storyboard",
              "Actions introductions",
              "Types of Actions",
              "Creating actions with practical scenarios",
              "Discussion on effective usage of action in dashboard",
            ],
          },
          {
            id: 16,
            title: "Module 16: Format menu and Annotate",
            icon: "bi bi-pen",
            items: [
              "Various options in Format menu",
              "Annotate values in charts",
              "Types of Annotate",
              "Performance tuning techniques",
              "Order of Execution in Tableau",
              "Various Export Options in Tableau",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Tableau Basics",
            desc: "Learn to navigate Tableau, connect data sources, and create foundational charts.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Handle Data Efficiently",
            desc: "Use calculations, joins, data blending, and Tableau Prep for clean analysis.",
            icon: "bi bi-database",
          },
          {
            title: "Build Interactive Dashboards",
            desc: "Design professional dashboards with filters, actions, and dynamic elements.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Perform Advanced Analytics",
            desc: "Apply LOD expressions, table calculations, forecasting, and clustering techniques.",
            icon: "bi bi-gear",
          },
          {
            title: "Optimize & Share Dashboards",
            desc: "Publish, embed, and manage dashboards with performance and security best practices.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Deliver Real-World Insights",
            desc: "Work on projects across sales, marketing, finance, and executive reporting.",
            icon: "bi bi-bar-chart-line",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "SAS",
        desc: "Propel your analytics career with expert SAS training. Master data management, predictive modeling, and business intelligence to lead data-driven corporate strategies.",
        rating: 5.0,
        duration: "1 month",
        students: "986",
        img: "/images/courses/new/sas.png",
        aboutData: {
          topic: "Master SAS — From Data Management to Advanced Analytics!",
          content1:
            "Learn SAS from scratch and advance to complex data analytics, reporting, and predictive modeling. This course provides hands-on experience with real-world datasets, ensuring you gain practical skills for business and data-driven decision-making.",
          content2:
            "The SAS course covers the full spectrum of data analytics, from data manipulation and reporting to advanced analytics techniques like predictive modeling, regression analysis, and business intelligence dashboards. You'll gain expertise in Base SAS, SAS Macros, SQL, and SAS Enterprise Guide, preparing you for analytics roles across industries.",
        },
        courseContentData: [
          {
            id: 1,
            title: "SAS Base Course Curriculum",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              <div key="base-1" className="mb-4">
                <h6 className="fw-semibold text-dark mb-2">
                  Module 1: SAS Fundamentals
                </h6>
                <ul className="list-disc pl-4">
                  <li>Introduction to SAS and its applications</li>
                  <li>Installing and navigating SAS environment</li>
                  <li>Data types, variables, and datasets</li>
                  <li>Basic SAS programming syntax</li>
                  <li>Reading and writing datasets</li>
                  <li>Debugging and error handling</li>
                </ul>
              </div>,
              <div key="base-2" className="mb-4">
                <h6 className="fw-semibold text-dark mb-2">
                  Module 2: Data Management in SAS
                </h6>
                <ul className="list-disc pl-4">
                  <li>Data step basics and data manipulation</li>
                  <li>Sorting, merging, and concatenating datasets</li>
                  <li>Creating new variables and functions</li>
                  <li>Conditional logic and loops in SAS</li>
                  <li>Working with dates and character variables</li>
                </ul>
              </div>,
            ],
          },
          {
            id: 2,
            title: "SAS Advanced Course Curriculum",
            icon: "bi bi-gear",
            items: [
              <div key="adv-1" className="mb-4">
                <h6 className="fw-semibold text-dark mb-2">
                  Module 3: Advanced SAS Programming
                </h6>
                <ul className="list-disc pl-4">
                  <li>SAS Macros for automation</li>
                  <li>SQL in SAS (PROC SQL)</li>
                  <li>Arrays, Do loops, and iterative processing</li>
                  <li>Advanced data manipulation techniques</li>
                  <li>Error handling and debugging best practices</li>
                </ul>
              </div>,
              <div key="adv-2" className="mb-4">
                <h6 className="fw-semibold text-dark mb-2">
                  Module 4: Data Analysis and Reporting
                </h6>
                <ul className="list-disc pl-4">
                  <li>Descriptive statistics and summary reports</li>
                  <li>PROC MEANS, PROC FREQ, PROC UNIVARIATE</li>
                  <li>Data visualization using PROC SGPLOT & PROC REPORT</li>
                  <li>Generating automated reports</li>
                  <li>Introduction to statistical procedures</li>
                </ul>
              </div>,
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master SAS Programming",
            desc: "Learn data step, PROC SQL, SAS macros, and advanced programming concepts.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Data Management & Analytics",
            desc: "Manipulate, clean, and analyze large datasets efficiently.",
            icon: "bi bi-database",
          },
          {
            title: "Reporting & Visualization",
            desc: "Create dashboards, charts, and automated reports for business insights.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Predictive Modeling & Statistics",
            desc: "Apply regression, classification, and time series analysis using SAS.",
            icon: "bi bi-robot",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "R Programming",
        desc: "Master R Programming for data science and statistical analysis. Learn advanced algorithms, data visualization, and predictive modeling for top analytics roles.",
        rating: 5.0,
        duration: "1 month",
        students: "676",
        img: "/images/courses/new/rprogramming.png",
        aboutData: {
          topic:
            "Master R Programming — From Fundamentals to Advanced Analytics!",
          content1:
            "Learn R Programming from scratch and gain the skills to perform data analysis, statistical modeling, and visualization. This course provides hands-on projects to help you transform raw data into actionable insights.",
          content2:
            "The R Programming course by Urbancode covers everything from basic syntax to advanced data analysis techniques. You’ll start with fundamentals like vectors, lists, and data frames, then move on to visualization with ggplot2, statistical modeling, and machine learning integration. By the end, you’ll be capable of applying R for real-world analytics projects, making you ready for roles in data science, research, and analytics.",
        },
        courseContentData: [
          {
            id: 1,
            title: "R Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to R and RStudio",
              "R syntax, variables, and data types",
              "Vectors, lists, and data frames",
              "Basic operations and functions",
              "Control structures: if, for, while",
              "Reading and writing data files",
            ],
          },
          {
            id: 2,
            title: "Data Manipulation",
            icon: "bi bi-database",
            items: [
              "Data cleaning and preprocessing",
              "Using dplyr for data manipulation",
              "Filtering, sorting, and summarizing data",
              "Merging and joining datasets",
              "Handling missing values",
            ],
          },
          {
            id: 3,
            title: "Data Visualization",
            icon: "bi bi-bar-chart-line",
            items: [
              "Introduction to ggplot2",
              "Creating bar, line, and scatter plots",
              "Customizing plots with themes and labels",
              "Interactive visualizations with plotly",
              "Visualization best practices",
            ],
          },
          {
            id: 4,
            title: "Statistical Analysis",
            icon: "bi bi-calculator",
            items: [
              "Descriptive statistics",
              "Probability distributions",
              "Hypothesis testing",
              "Correlation and regression analysis",
              "ANOVA and Chi-square tests",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master R Programming Concepts",
            desc: "Understand R syntax, data structures, functions, and advanced programming techniques.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Perform Data Analysis",
            desc: "Use R for statistical analysis, hypothesis testing, and real-world data exploration.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Create Stunning Visualizations",
            desc: "Visualize data effectively using ggplot2, plotly, and interactive dashboards.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Implement Machine Learning",
            desc: "Build predictive models using regression, classification, and clustering techniques in R.",
            icon: "bi bi-robot",
          },
          {
            title: "Automate Reporting & Dashboards",
            desc: "Generate dynamic reports and interactive dashboards with R Markdown and Shiny.",
            icon: "bi bi-gear",
          },
          {
            title: "Handle Real-World Data Projects",
            desc: "Apply R programming to practical datasets, clean, analyze, and present actionable insights.",
            icon: "bi bi-cpu",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Data Analyst with Microsoft Azure",
        isNew: true,
        curriculumUrls: ["/curriculum/Data_Analyst_Azure_Curriculum.pdf"],
        tags: ["Azure", "SQL", "Python", "Power BI", "ADF", "Excel"],
        desc: "Become a job-ready Data Analyst with Microsoft Azure. Master SQL, Python, Azure Data Factory, and Power BI to extract, transform, analyze, and visualize data in cloud-powered workflows.",
        rating: 4.9,
        duration: "3 months",
        students: "10",
        img: "/images/courses/new/data_analyst_azure.webp",
        aboutData: {
          topic: "Master Data Analytics with Microsoft Azure — From SQL to Power BI Dashboards!",
          content1:
            "This comprehensive Data Analyst course takes you from SQL and Python foundations to building cloud-powered analytical workflows. Learn to ingest data with Azure Data Factory, analyze with Python and SQL, and present insights through Power BI interactive dashboards.",
          content2:
            "The Urbancode Data Analyst with Azure program covers the complete analytics lifecycle. You'll master SQL querying, Python EDA, data visualization with Matplotlib/Seaborn, Azure cloud fundamentals, ADF pipeline building, and Power BI dashboard creation. The capstone project integrates all tools into one end-to-end analytics solution, making you fully industry-ready.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Month 1, Week 1: Introduction to Data Analytics & SQL Basics",
            icon: "bi bi-bar-chart-line",
            defaultOpen: true,
            items: [
              "What is Data Analytics? Role of a Data Analyst",
              "Data Analytics Lifecycle: Collect → Clean → Analyze → Visualize → Report",
              "Types of Data: Structured, Semi-structured, Unstructured",
              "Introduction to RDBMS (MySQL / SQL Server)",
              "Installing and setting up SQL environment",
              "Basic SQL: SELECT, WHERE, ORDER BY, DISTINCT, LIMIT",
            ],
          },
          {
            id: 2,
            title: "Month 1, Week 2: Intermediate SQL",
            icon: "bi bi-table",
            items: [
              "Aggregate Functions: COUNT, SUM, AVG, MIN, MAX",
              "GROUP BY and HAVING clauses",
              "Joins: INNER, LEFT, RIGHT, FULL OUTER",
              "Subqueries and Nested Queries",
              "Set Operations: UNION, INTERSECT, EXCEPT",
            ],
          },
          {
            id: 3,
            title: "Month 1, Week 3: Advanced SQL",
            icon: "bi bi-code-slash",
            items: [
              "Window Functions: RANK, ROW_NUMBER, LEAD, LAG",
              "Common Table Expressions (CTEs) and Views",
              "Case Statements & Conditional Logic",
              "Data Cleaning using SQL (handling NULLs, duplicates)",
              "Query Optimization Basics",
              "Hands-on: Business Reporting Queries (Sales/HR dataset)",
            ],
          },
          {
            id: 4,
            title: "Month 1, Week 4: SQL Project & Data Modeling Basics",
            icon: "bi bi-diagram-3",
            items: [
              "Star Schema vs Snowflake Schema (Overview)",
              "Introduction to Data Warehousing Concepts",
              "OLTP vs OLAP",
              "Mini Project: End-to-end SQL Case Study (Data extraction + reporting)",
              "Assessment: SQL Proficiency Test",
            ],
          },
          {
            id: 5,
            title: "Month 2, Week 5: Python Programming Basics",
            icon: "bi bi-filetype-py",
            items: [
              "Python Syntax, Variables, Data Types",
              "Conditional Statements & Loops",
              "Functions and Modules",
              "Working with Lists, Tuples, Dictionaries, Sets",
              "File Handling (CSV, Excel, JSON)",
            ],
          },
          {
            id: 6,
            title: "Month 2, Week 6: Data Analysis with Python (Pandas & NumPy)",
            icon: "bi bi-graph-up",
            items: [
              "Introduction to NumPy: Arrays and Operations",
              "Pandas: Series & DataFrames",
              "Data Cleaning: Missing Values, Duplicates, Outliers",
              "Data Transformation: Merge, Join, Pivot, GroupBy",
              "Exploratory Data Analysis (EDA) techniques",
            ],
          },
          {
            id: 7,
            title: "Month 2, Week 7: Data Visualization with Python",
            icon: "bi bi-bar-chart",
            items: [
              "Introduction to Matplotlib and Seaborn",
              "Creating Charts: Bar, Line, Scatter, Histogram, Box Plot",
              "Correlation & Trend Analysis",
              "Storytelling with Data",
              "Mini Project: EDA + Visualization on a real-world dataset",
            ],
          },
          {
            id: 8,
            title: "Month 2, Week 8: Cloud Computing Fundamentals (Azure)",
            icon: "bi bi-cloud",
            items: [
              "Introduction to Cloud Computing: IaaS, PaaS, SaaS",
              "Overview of Azure Ecosystem",
              "Azure Storage: Blob Storage, Data Lake Storage",
              "Azure SQL Database Basics",
              "Introduction to Azure Portal and Resource Groups",
              "Data Security & Access Management (Basics)",
            ],
          },
          {
            id: 9,
            title: "Month 3, Week 9: Azure Data Factory (ADF) — Fundamentals",
            icon: "bi bi-arrow-left-right",
            items: [
              "Introduction to ETL/ELT and Data Pipelines",
              "Azure Data Factory Architecture & Components",
              "Linked Services, Datasets, and Pipelines",
              "Copy Data Activity: Moving data between sources",
              "Scheduling and Triggers",
            ],
          },
          {
            id: 10,
            title: "Month 3, Week 10: Azure Data Factory — Advanced",
            icon: "bi bi-gear-wide-connected",
            items: [
              "Data Flows: Mapping Data Flows for Transformation",
              "Integration Runtime concepts",
              "Monitoring & Debugging Pipelines",
              "Connecting ADF with Azure SQL, Blob Storage, and Power BI",
              "Hands-on: Build an End-to-End Data Pipeline using ADF",
            ],
          },
          {
            id: 11,
            title: "Month 3, Week 11: Power BI — Data Visualization & Reporting",
            icon: "bi bi-pie-chart",
            items: [
              "Introduction to Power BI Desktop & Service",
              "Connecting to Data Sources (SQL, Excel, Azure)",
              "Data Modeling: Relationships, Star Schema in Power BI",
              "Power Query: Data Cleaning & Transformation (M Language basics)",
              "DAX Basics: Calculated Columns & Measures",
              "Building Interactive Dashboards & Reports",
              "Publishing & Sharing Reports (Power BI Service)",
            ],
          },
          {
            id: 12,
            title: "Month 3, Week 12: Capstone Project & Interview Preparation",
            icon: "bi bi-award",
            items: [
              "Capstone: SQL + Python + Azure Data Factory + Power BI Integration",
              "Extract data → Transform via ADF → Analyze with Python/SQL → Visualize in Power BI",
              "Resume Building & Portfolio Development",
              "Mock Interviews & Commonly Asked Interview Questions",
              "Doubt-Clearing Session & Final Assessment",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master SQL for Analytics",
            desc: "Write complex SQL queries, use window functions, and extract business insights from real-world datasets.",
            icon: "bi bi-database",
          },
          {
            title: "Python Data Analysis",
            desc: "Use Pandas, NumPy, Matplotlib, and Seaborn for data cleaning, EDA, and professional visualizations.",
            icon: "bi bi-filetype-py",
          },
          {
            title: "Azure Cloud Foundations",
            desc: "Navigate Azure Portal, configure Blob Storage, Data Lake, and Azure SQL for cloud-based analytics.",
            icon: "bi bi-cloud",
          },
          {
            title: "Build ADF Pipelines",
            desc: "Create automated ETL/ELT pipelines with Azure Data Factory to move and transform data at scale.",
            icon: "bi bi-arrow-left-right",
          },
          {
            title: "Power BI Dashboards",
            desc: "Design interactive executive dashboards with DAX, data models, and Power BI Service publishing.",
            icon: "bi bi-pie-chart",
          },
          {
            title: "End-to-End Capstone Project",
            desc: "Deliver a complete analytics solution from raw data extraction to Power BI visualization for your portfolio.",
            icon: "bi bi-award",
          },
        ],
        locked: false,
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },
  "Data Engineering": {
    mainCategoryDesc: "Build the Data Pipelines of Tomorrow",
    subDesc:
      "Master the tools and techniques to design, build, and maintain data pipelines with Google Cloud, Apache Airflow, MySQL, and Python. Learn to handle big data, ensure data quality, and optimize performance for scalable data solutions.",
    subHeading:
      "Become a Data Engineer who powers the data infrastructure behind modern applications and analytics.",
    mainImage: "/images/courses/DataEngineering.jpg",

    courses: [
      {
        title: "Data Engineering with Microsoft Azure",
        isNew: true,
        curriculumUrls: ["/curriculum/Data_Engineering_Azure_Curriculum.pdf"],
        tags: ["Azure", "SQL", "Python", "Spark", "Databricks", "ADF", "Synapse"],
        desc: "Master Data Engineering on Microsoft Azure. Build scalable pipelines using Azure Synapse, Azure Data Factory, Apache Spark, and Databricks. Gain hands-on expertise for cloud data engineering roles.",
        rating: 4.9,
        duration: "3 months",
        students: "12",
        img: "/images/courses/new/data_engineering-azure.webp",
        aboutData: {
          topic: "Master Data Engineering with Microsoft Azure — From SQL Foundations to Cloud Pipelines!",
          content1:
            "Learn Data Engineering end-to-end on Microsoft Azure. Start from SQL foundations and data modeling, move into Python-based ETL, and build advanced cloud pipelines using Azure Synapse Analytics, Azure Data Factory, Apache Spark, and Databricks.",
          content2:
            "This 3-month program by Urbancode covers the complete Azure data engineering stack. You'll design star/snowflake schemas, orchestrate ELT pipelines via ADF, transform big data with PySpark, and integrate Databricks with Synapse. The capstone project ties everything together — ingest → orchestrate → transform → store & query — making you job-ready for cloud data engineering roles.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Month 1, Week 1: Introduction to Data Engineering & SQL Basics",
            icon: "bi bi-database",
            defaultOpen: true,
            items: [
              "What is Data Engineering? Role of a Data Engineer",
              "Data Lifecycle: ETL vs ELT",
              "OLTP vs OLAP, Data Warehouse vs Data Lake",
              "Batch vs Real-Time Processing",
              "Introduction to RDBMS (MySQL / SQL Server)",
              "Basic SQL: SELECT, WHERE, ORDER BY, DISTINCT, LIMIT",
            ],
          },
          {
            id: 2,
            title: "Month 1, Week 2: Intermediate SQL",
            icon: "bi bi-table",
            items: [
              "Aggregate Functions: COUNT, SUM, AVG, MIN, MAX",
              "GROUP BY and HAVING clauses",
              "Joins: INNER, LEFT, RIGHT, FULL OUTER",
              "Subqueries and Nested Queries",
              "Set Operations: UNION, INTERSECT, EXCEPT",
            ],
          },
          {
            id: 3,
            title: "Month 1, Week 3: Advanced SQL",
            icon: "bi bi-code-slash",
            items: [
              "Window Functions: RANK, ROW_NUMBER, LEAD, LAG",
              "Common Table Expressions (CTEs) and Views",
              "Data Validation & Reconciliation Queries",
              "Query Optimization Basics",
              "Hands-on: Business Reporting Queries",
            ],
          },
          {
            id: 4,
            title: "Month 1, Week 4: Data Modeling & Warehousing",
            icon: "bi bi-diagram-3",
            items: [
              "Star Schema vs Snowflake Schema Design",
              "Slowly Changing Dimensions (SCD Types)",
              "Fact and Dimension Tables",
              "Introduction to Data Warehousing Concepts",
              "Mini Project: Build and Validate a Data Warehouse Schema",
              "Assessment: SQL & Data Modeling Test",
            ],
          },
          {
            id: 5,
            title: "Month 2, Week 5: Python for Data Engineering",
            icon: "bi bi-filetype-py",
            items: [
              "Python Basics: Data Types, Loops, Functions",
              "Working with Pandas & NumPy",
              "File Handling (CSV, JSON, Parquet)",
              "API Data Extraction & Automation",
              "Error Handling, Logging & Config Management",
              "Mini Project: Python-based ETL Script",
            ],
          },
          {
            id: 6,
            title: "Month 2, Week 6: Cloud Computing Fundamentals (Azure)",
            icon: "bi bi-cloud",
            items: [
              "Introduction to Cloud Computing: IaaS, PaaS, SaaS",
              "Overview of Azure Ecosystem",
              "Azure Storage: Blob Storage, Data Lake Storage Gen2",
              "Azure SQL Database Basics",
              "Azure Portal, Resource Groups & Access Management (IAM)",
            ],
          },
          {
            id: 7,
            title: "Month 2, Week 7: Azure Synapse Analytics",
            icon: "bi bi-lightning-charge",
            items: [
              "Introduction to Azure Synapse Analytics",
              "Synapse Workspace, SQL Pools (Dedicated & Serverless)",
              "Synapse Pipelines Overview",
              "Querying Data Lake using Serverless SQL",
              "Integration of Synapse with Power BI & Spark Pools (Overview)",
              "Hands-on: Load and Query Data using Synapse SQL Pool",
            ],
          },
          {
            id: 8,
            title: "Month 2, Week 8: Azure Data Factory (ADF) — Fundamentals",
            icon: "bi bi-arrow-left-right",
            items: [
              "Introduction to ETL/ELT Pipelines in ADF",
              "ADF Architecture & Components",
              "Linked Services, Datasets, and Pipelines",
              "Copy Data Activity: Moving Data Between Sources",
              "Scheduling and Triggers",
            ],
          },
          {
            id: 9,
            title: "Month 3, Week 9: Azure Data Factory — Advanced",
            icon: "bi bi-gear-wide-connected",
            items: [
              "Data Flows: Mapping Data Flows for Transformation",
              "Integration Runtime Concepts",
              "Monitoring & Debugging Pipelines",
              "Connecting ADF with Azure SQL, Synapse, and Blob Storage",
              "Hands-on: Build an End-to-End Pipeline using ADF",
            ],
          },
          {
            id: 10,
            title: "Month 3, Week 10: Apache Spark & PySpark",
            icon: "bi bi-fire",
            items: [
              "Apache Spark Core Concepts (RDD, DataFrame, Dataset)",
              "PySpark for Data Transformation",
              "Spark SQL & Optimization Techniques",
              "Real-Time Data Processing with Spark Streaming (Overview)",
              "Project: Transform Big Data using PySpark",
            ],
          },
          {
            id: 11,
            title: "Month 3, Week 11: Databricks",
            icon: "bi bi-cpu",
            items: [
              "Introduction to Databricks Workspace & Architecture",
              "Databricks Notebooks: Clusters, Jobs, and Libraries",
              "Delta Lake: ACID Transactions, Time Travel, Schema Evolution",
              "Data Ingestion & Transformation in Databricks",
              "Integrating Databricks with Azure Data Factory & Synapse",
              "Hands-on: Build a Data Pipeline using Databricks",
            ],
          },
          {
            id: 12,
            title: "Month 3, Week 12: Capstone Project & Interview Preparation",
            icon: "bi bi-award",
            items: [
              "Capstone: SQL + Python + Azure Synapse + ADF + Spark + Databricks Integration",
              "Ingest data → Orchestrate via ADF → Transform with Spark/Databricks → Store & Query in Synapse",
              "Cloud Cost Optimization & Pipeline Monitoring",
              "Resume Building & Portfolio Development (GitHub)",
              "Mock Interviews & Commonly Asked Interview Questions",
              "Doubt-Clearing Session & Final Assessment",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master SQL & Data Modeling",
            desc: "Build solid foundations with advanced SQL, star/snowflake schemas, and data warehousing concepts.",
            icon: "bi bi-database",
          },
          {
            title: "Python ETL Engineering",
            desc: "Automate data pipelines with Python, Pandas, and file-format handling (CSV, JSON, Parquet).",
            icon: "bi bi-filetype-py",
          },
          {
            title: "Azure Synapse Analytics",
            desc: "Load, query, and analyze large datasets using Dedicated and Serverless SQL Pools.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Build ADF Pipelines",
            desc: "Design end-to-end ETL/ELT orchestration with Azure Data Factory, triggers, and data flows.",
            icon: "bi bi-arrow-left-right",
          },
          {
            title: "Apache Spark & Databricks",
            desc: "Transform big data using PySpark, Delta Lake, and Databricks integrated with Azure services.",
            icon: "bi bi-fire",
          },
          {
            title: "Cloud Data Engineering Capstone",
            desc: "Complete a real-world end-to-end Azure data engineering project for your portfolio.",
            icon: "bi bi-award",
          },
        ],
        locked: false,
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
      {
        title: "Data Engineering",
        curriculumUrls: ["/curriculum/dataengineeringcurriculum .pdf"],
        desc: "Master Data Engineering with hands-on training in Google Cloud, Apache Airflow, MySQL, and Python. Gain industry-ready skills to design, build, and maintain scalable data pipelines for modern applications.",
        rating: 5.0,
        duration: "1 month",
        students: "556",
        img: "/images/courses/dataEng.webp",
        aboutData: {
          topic:
            "Master Data Engineering — From Fundamentals to Scalable Data Pipelines!",
          content1:
            "Learn Data Engineering from scratch! Understand data pipeline design, big data processing, and cloud-based data solutions. This course equips you with practical skills to build and maintain data infrastructure for modern applications.",
          content2:
            "The Data Engineering course by Urbancode covers everything from core concepts to advanced tools like Google Cloud Platform, Apache Airflow, MySQL, and Python. You'll learn to design efficient data pipelines, handle big data with cloud services, ensure data quality, and optimize performance. By the end, you'll have hands-on experience in building scalable data solutions and be ready for industry challenges.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Data Engineering Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Data Engineering",
              "Data pipeline architecture and design patterns",
              "ETL vs ELT processes",
              "Data storage solutions (SQL, NoSQL, Data Lakes)",
              "Data quality and validation techniques",
            ],
          },
          {
            id: 2,
            title: "Cloud-Based Data Solutions",
            icon: "bi bi-cloud",
            items: [
              "Google Cloud Platform overview",
              "BigQuery for data warehousing",
              "Cloud Storage for data lakes",
              "Cloud Pub/Sub for real-time data streaming",
              "Cloud Dataflow for batch and stream processing",
            ],
          },
          {
            id: 3,
            title: "Workflow Orchestration with Apache Airflow",
            icon: "bi bi-gear",
            items: [
              "Introduction to Apache Airflow",
              "DAGs, tasks, and operators",
              "Scheduling and monitoring workflows",
              "Integrating Airflow with cloud services",
              "Best practices for workflow management",
            ],
          },
          {
            id: 4,
            title: "Data Engineering with Python & MySQL",
            icon: "bi bi-database",
            items: [
              "Python for data engineering",
              "MySQL database design and management",
              "Building data pipelines with Python and MySQL",
              "Data ingestion and transformation techniques",
              "Performance optimization for data pipelines",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Design Scalable Data Pipelines",
            desc: "Learn to architect efficient data pipelines using modern tools and best practices.",
            icon: "bi bi-gear",
          },
          {
            title: "Handle Big Data in the Cloud",
            desc: "Use Google Cloud services to manage and process large datasets effectively.",
            icon: "bi bi-cloud",
          },
          {
            title: "Orchestrate Workflows with Airflow",
            desc: "Build and manage complex data pipelines using Apache Airflow.",
          },
          {
            title: "Master Python & MySQL for Data Engineering",
            desc: "Use Python and MySQL to build, manage, and optimize data pipelines.",
            icon: "bi bi-database",
          },
          {
            title: "Ensure Data Quality & Performance",
            desc: "Implement data validation, monitoring, and optimization techniques for reliable pipelines.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Become Industry-Ready",
            desc: "Gain hands-on experience with real-world projects and be prepared for data engineering roles.",
            icon: "bi bi-lightning-charge",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },
  Database: {
    mainCategoryDesc: "The Power Behind Applications",
    subDesc:
      "Learn to design, manage, and optimize databases with SQL, MySQL, Oracle, and MongoDB. Gain hands-on expertise in building secure, scalable, and high-performance database solutions.",
    subHeading:
      "Master the backbone of modern applications and grow your career as a Database Administrator or Developer.",
    mainImage: "/images/courses/Database.jpg",

    courses: [
      {
        title: "MongoDB Database",
        desc: "Master MongoDB from basics to advanced with real-time projects and hands-on labs. Learn data modeling, indexing, aggregation, and secure deployment for modern applications.",
        rating: 5.0,
        duration: "1 month",
        students: "766",
        img: "/images/courses/MangoDB_Database.jpg",
        aboutData: {
          topic:
            "Master MongoDB — From Fundamentals to Advanced Database Management!",
          content1:
            "Learn MongoDB from the ground up! This course covers everything from basic CRUD operations to advanced aggregation, data modeling, and performance optimization. Build real-world projects and become a MongoDB expert.",
          content2:
            "The MongoDB Database course by Urbancode takes you through beginner, intermediate, and expert concepts. Start with installation, basic queries, and schema design. Move to indexing, aggregation framework, replication, sharding, and finally advanced topics like security, backup, and deployment strategies. Hands-on labs and projects ensure you're ready for industry use.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Introduction to MongoDB",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to NoSQL and MongoDB",
              "Installing MongoDB and setting up environment",
              "MongoDB architecture and collections",
              "CRUD operations: Create, Read, Update, Delete",
              "MongoDB Compass GUI overview",
            ],
          },
          {
            id: 2,
            title: "Beginner – Data Modeling & Schemas",
            icon: "bi bi-database",
            items: [
              "Understanding documents and collections",
              "Designing flexible schemas",
              "Relationships: Embedding vs Referencing",
              "Data types and BSON format",
              "Schema validation",
            ],
          },
          {
            id: 3,
            title: "Intermediate – Querying MongoDB",
            icon: "bi bi-search",
            items: [
              "Query operators and expressions",
              "Filtering, projection, and sorting",
              "Working with arrays and nested documents",
              "Aggregation framework basics",
              "Indexes for faster queries",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Advanced Aggregation & Indexing",
            icon: "bi bi-gear",
            items: [
              "Aggregation pipelines and stages",
              "Group, match, project, sort, limit",
              "Index types and performance tuning",
              "Text search and geospatial indexing",
              "Query optimization techniques",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master MongoDB Fundamentals",
            desc: "Learn CRUD operations, schema design, and NoSQL concepts in depth.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Advanced Data Modeling",
            desc: "Design efficient schemas, manage relationships, and optimize queries.",
            icon: "bi bi-database",
          },
          {
            title: "Aggregation & Indexing",
            desc: "Perform complex queries, aggregation pipelines, and use indexes for performance.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "High Availability & Security",
            desc: "Implement replication, sharding, user access control, and secure deployments.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Real-Time Applications",
            desc: "Build APIs, dashboards, and chat apps with MongoDB integration.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Deployment & Cloud Integration",
            desc: "Deploy MongoDB on servers and Atlas, monitor performance, and maintain production systems.",
            icon: "bi bi-diagram-3",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "MSSQL Database",
        desc: "Become a certified MSSQL Database Administrator. Master complex querying, performance tuning, and enterprise security for lucrative IT roles.",
        rating: 5.0,
        duration: "1 month",
        students: "506",
        img: "/images/courses/MSSQL_Database.jpg",
        aboutData: {
          topic:
            "Master MSSQL Database — From Fundamentals to Advanced Database Management!",
          content1:
            "Enhance your database skills with comprehensive MSSQL training! Learn to design, manage, and optimize relational databases, write complex queries, and implement stored procedures. This course combines theory with practical exercises to make you proficient in real-world database management.",
          content2:
            "The MSSQL Database course by Urbancode covers everything from basic SQL syntax to advanced database administration. You'll start with essential database concepts, move through writing efficient queries, indexing, stored procedures, and triggers. Advanced topics include performance tuning, security, replication, and backup strategies, preparing you for enterprise-level database challenges.",
        },
        courseContentData: [
          {
            id: 1,
            title: "MSSQL Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to MSSQL and relational databases",
              "Installing and configuring MSSQL Server",
              "Understanding databases, tables, and relationships",
              "Basic SQL queries: SELECT, INSERT, UPDATE, DELETE",
              "Primary keys, foreign keys, and constraints",
              "Data types and schema design fundamentals",
            ],
          },
          {
            id: 2,
            title: "Querying Data",
            icon: "bi bi-database",
            items: [
              "Filtering and sorting data",
              "Joins: INNER, LEFT, RIGHT, FULL OUTER",
              "Aggregations and GROUP BY",
              "Subqueries and CTEs",
              "Views and indexes",
            ],
          },
          {
            id: 3,
            title: "Advanced Queries & Functions",
            icon: "bi bi-gear",
            items: [
              "Stored procedures and functions",
              "Triggers and events",
              "Transactions and error handling",
              "Dynamic SQL and parameterized queries",
              "Optimizing queries for performance",
            ],
          },
          {
            id: 4,
            title: "Database Management",
            icon: "bi bi-window-stack",
            items: [
              "User management and roles",
              "Security and permissions",
              "Backup and restore strategies",
              "Replication and high availability concepts",
              "Monitoring and performance tuning",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master MSSQL Fundamentals",
            desc: "Learn databases, tables, SQL queries, and relational data concepts.",
            icon: "bi bi-book",
          },
          {
            title: "Write Efficient Queries",
            desc: "Use joins, subqueries, CTEs, and stored procedures for real-world scenarios.",
            icon: "bi bi-gear",
          },
          {
            title: "Manage Databases Securely",
            desc: "Handle users, roles, permissions, and implement secure database practices.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Optimize Performance",
            desc: "Learn indexing, query tuning, and advanced optimization strategies.",
            icon: "bi bi-speedometer2",
          },
          {
            title: "Backup, Restore, and Scale",
            desc: "Implement backups, replication, high availability, and disaster recovery.",
            icon: "bi bi-cloud-arrow-up",
          },
          {
            title: "Integrate and Automate",
            desc: "Use SSIS, SSRS, and automation for ETL, reporting, and enterprise integration.",
            icon: "bi bi-diagram-3",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "MySQL Database",
        desc: "Master MySQL architecture and advanced querying. Build highly optimized Relational Database systems and fast-track your backend developer career.",
        rating: 5.0,
        duration: "1 month",
        students: "406",
        img: "/images/courses/MySQL_Database.jpg",
        aboutData: {
          topic: "Master MySQL — From Basics to Advanced Database Management!",
          content1:
            "Learn how to design, query, and manage relational databases with MySQL. This course covers everything from simple SELECT statements to advanced query optimization, indexing, and transaction management. Get hands-on experience building real-world database applications.",
          content2:
            "The MySQL Database course by Urbancode takes you from the fundamentals of database design to advanced techniques used in modern applications. You’ll explore SQL queries, joins, indexing, stored procedures, triggers, and performance optimization. By the end, you’ll be equipped to design, manage, and secure complex databases effectively.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Database Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to databases and MySQL",
              "Setting up MySQL server and Workbench",
              "Understanding tables, rows, and columns",
              "Data types and constraints",
              "Primary keys, foreign keys, and indexes",
            ],
          },
          {
            id: 2,
            title: "SQL Basics",
            icon: "bi bi-database",
            items: [
              "SELECT statements and filtering data",
              "WHERE clause, ORDER BY, and LIMIT",
              "INSERT, UPDATE, and DELETE operations",
              "Using functions in SQL",
              "Basic joins: INNER JOIN, LEFT JOIN, RIGHT JOIN",
            ],
          },
          {
            id: 3,
            title: "Advanced SQL Queries",
            icon: "bi bi-gear",
            items: [
              "Advanced joins and subqueries",
              "GROUP BY and HAVING clauses",
              "Aggregate functions and complex queries",
              "UNION, INTERSECT, and CASE statements",
              "Views and temporary tables",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master SQL & Queries",
            desc: "Write complex queries, joins, subqueries, and aggregate functions with ease.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Design Efficient Databases",
            desc: "Learn normalization, indexing, and ER modeling for scalable database systems.",
            icon: "bi bi-gear",
          },
          {
            title: "Manage & Secure Databases",
            desc: "Implement user roles, privileges, and security measures to protect your data.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Optimize Database Performance",
            desc: "Tune queries, use indexing strategies, and monitor performance for efficiency.",
            icon: "bi bi-speedometer2",
          },
          {
            title: "Use Stored Procedures & Functions",
            desc: "Automate database tasks and logic with stored procedures, triggers, and functions.",
            icon: "bi bi-journal-text",
          },
          {
            title: "Build Real-World Applications",
            desc: "Integrate MySQL databases with web apps and analytics projects.",
            icon: "bi bi-window-stack",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "PostgreSQL Database",
        desc: "Master PostgreSQL from basics to advanced with hands-on projects, queries, and performance tuning. Gain industry-ready database skills to design, manage, and secure powerful applications.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/PostgreSQL_Database.jpg",
        aboutData: {
          topic:
            "Master PostgreSQL — From Fundamentals to Advanced Database Management!",
          content1:
            "Learn PostgreSQL, one of the most powerful open-source relational databases. This course covers everything from SQL basics to advanced performance tuning, indexing, and replication. Build real-world database projects and gain practical skills to manage high-performing applications.",
          content2:
            "The PostgreSQL Database course by Urbancode offers hands-on training for developers and database administrators. You’ll start with essential SQL queries, database design, and schema creation, then advance to transactions, stored procedures, triggers, and performance optimization. The course concludes with high-level concepts like replication, security best practices, and database clustering, making you fully industry-ready.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – PostgreSQL Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to PostgreSQL and its features",
              "Installing and configuring PostgreSQL",
              "Basic SQL commands: SELECT, INSERT, UPDATE, DELETE",
              "Understanding data types and constraints",
              "Creating and managing databases and tables",
              "Basic queries and filtering data",
            ],
          },
          {
            id: 2,
            title: "Beginner – Working with Data",
            icon: "bi bi-database",
            items: [
              "Advanced SELECT queries and JOINs",
              "Grouping and aggregating data",
              "Subqueries and nested queries",
              "Views and materialized views",
              "Indexes and performance basics",
            ],
          },
          {
            id: 3,
            title: "Intermediate – Database Programming",
            icon: "bi bi-gear",
            items: [
              "Transactions and ACID properties",
              "Stored procedures and functions",
              "Triggers and event handling",
              "Sequences and auto-incrementing IDs",
              "Error handling in PostgreSQL",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Advanced Data Management",
            icon: "bi bi-bar-chart-line",
            items: [
              "Partitioning large tables",
              "Advanced indexing techniques",
              "Query optimization and execution plans",
              "Using EXPLAIN and ANALYZE for performance tuning",
              "Data integrity and constraints",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master PostgreSQL Fundamentals",
            desc: "Understand database design, SQL queries, and schema management.",
            icon: "bi bi-book",
          },
          {
            title: "Work with Advanced Queries",
            desc: "Perform joins, subqueries, aggregations, and complex filtering.",
            icon: "bi bi-database",
          },
          {
            title: "Develop Database Programs",
            desc: "Use stored procedures, triggers, and transactions effectively.",
            icon: "bi bi-gear",
          },
          {
            title: "Optimize and Secure Databases",
            desc: "Learn performance tuning, indexing, and security best practices.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Ensure High Availability",
            desc: "Set up replication, clustering, and backup strategies.",
            icon: "bi bi-cloud-arrow-up",
          },
          {
            title: "Integrate with Applications",
            desc: "Use PostgreSQL with programming languages and web applications.",
            icon: "bi bi-code-slash",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },

  "Software Testing": {
    mainCategoryDesc: "Software Testing Mastery",
    subDesc:
      "Master the skills of Manual Testing, Automation Testing, Selenium, Playwright, and TestNG to ensure flawless software delivery. Learn to design test cases, execute automation scripts, and optimize performance.",
    subHeading:
      "Become an industry-ready Software Tester capable of delivering high-quality, reliable applications that meet global standards.",
    mainImage: "/images/courses/Software_Testing.jpg",

    courses: [
      {
        title: "Java",
        desc: "Learn Core Java from scratch — covering programming fundamentals, OOP, collections, exception handling, and file operations with practical examples.",
        rating: 5.0,
        duration: "1 month",
        students: "1,264",
        img: "/images/courses/new/java.png",
        aboutData: {
          topic:
            "Master Core Java — The Foundation of Every Developer & Tester!",
          content1:
            "This course is built for anyone who wants to gain strong command over Core Java. You’ll learn everything from basic syntax to advanced concepts like OOP, collections, exceptions, and file handling — all with a focus on real-world problem-solving.",
          content2:
            "The Java course takes a hands-on approach. You’ll start with programming basics and progress into object-oriented design, data structures, and multithreading. You’ll also explore Java utilities, error handling, and best practices used in software development and testing. By the end, you’ll be confident in writing efficient, reusable, and industry-ready Java code.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Java Basics",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Java and its ecosystem",
              "Installing Java and setting up IDE (Eclipse/IntelliJ)",
              "Writing your first Java program",
              "Variables, data types, and operators",
              "Conditional statements and loops",
            ],
          },
          {
            id: 2,
            title: "Beginner – Object-Oriented Programming (OOP)",
            icon: "bi bi-diagram-3",
            items: [
              "Understanding classes and objects",
              "Methods, constructors, and overloading",
              "Inheritance and method overriding",
              "Encapsulation and abstraction",
              "Polymorphism and interface concepts",
            ],
          },
          {
            id: 3,
            title: "Intermediate – Data Structures & Collections",
            icon: "bi bi-stack",
            items: [
              "Arrays and multi-dimensional arrays",
              "String and StringBuilder manipulation",
              "Introduction to the Collections Framework",
              "List, Set, and Map interfaces",
              "Generics and iterators",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Exception Handling & File Operations",
            icon: "bi bi-folder",
            items: [
              "Types of exceptions in Java",
              "Try-catch-finally and custom exceptions",
              "Working with files using FileReader and FileWriter",
              "Reading and writing data using Buffered classes",
              "Introduction to serialization and deserialization",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Core Java Programming",
            desc: "Learn the core syntax, logic building, and problem-solving in Java.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Understand OOP Concepts",
            desc: "Build scalable and reusable code using OOP principles.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Work with Data Structures",
            desc: "Use arrays, collections, and generics to manage data efficiently.",
            icon: "bi bi-stack",
          },
          {
            title: "Handle Exceptions & Files",
            desc: "Write error-free code with exception handling and file I/O operations.",
            icon: "bi bi-folder",
          },
          {
            title: "Explore Advanced Java Topics",
            desc: "Dive into multithreading, streams, and functional programming.",
            icon: "bi bi-cpu",
          },
          {
            title: "Build Real Java Projects",
            desc: "Develop console and database-based Java applications from scratch.",
            icon: "bi bi-briefcase",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "11:30 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "12:30 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Selenium",
        desc: "Master Selenium for web automation testing — learn setup, locators, waits, frameworks, and real-time project implementation from scratch.",
        rating: 5.0,
        duration: "1 month",
        students: "872",
        img: "/images/courses/new/selenium.png",
        aboutData: {
          topic:
            "Master Selenium — The Industry Standard for Web Automation Testing!",
          content1:
            "This course is designed to make you a complete Selenium automation tester. You’ll start with the basics of Selenium WebDriver and gradually move toward building full automation frameworks with TestNG, POM, and CI/CD integration.",
          content2:
            "Selenium remains the core tool for browser automation across the QA industry. In this course, you’ll learn everything — from locators, waits, and browser interactions to cross-browser testing, reporting, and integration with build tools. You’ll also get hands-on experience through real-time projects that simulate industry scenarios.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Selenium Basics",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Selenium and its architecture",
              "Setting up Selenium WebDriver and browser drivers",
              "Understanding the Selenium ecosystem",
              "Creating and executing your first test case",
              "Working with locators: ID, Name, Class, XPath, CSS",
            ],
          },
          {
            id: 2,
            title: "Beginner – Browser Automation Essentials",
            icon: "bi bi-mouse",
            items: [
              "Interacting with web elements (buttons, inputs, dropdowns)",
              "Handling alerts, popups, and frames",
              "Working with multiple browser windows and tabs",
              "Using waits: implicit and explicit",
              "Taking screenshots and managing sessions",
            ],
          },
          {
            id: 3,
            title: "Intermediate – Selenium WebDriver Advanced",
            icon: "bi bi-gear",
            items: [
              "Executing JavaScript in Selenium",
              "Mouse and keyboard interactions with Actions class",
              "Handling dynamic elements and AJAX calls",
              "Working with cookies and browser options",
              "Capturing logs and debugging automation",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Framework Design with Selenium",
            icon: "bi bi-window-stack",
            items: [
              "Building modular and reusable test scripts",
              "Understanding Page Object Model (POM)",
              "Integrating TestNG or PyTest for test management",
              "Parameterization and data-driven testing",
              "Logging and HTML report generation",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Selenium WebDriver",
            desc: "Learn to automate browsers, handle web elements, and manage sessions.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Handle Real-World Web Applications",
            desc: "Work with alerts, frames, dynamic content, and popups.",
            icon: "bi bi-mouse",
          },
          {
            title: "Design Automation Frameworks",
            desc: "Implement reusable and scalable test structures using POM and TestNG.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Execute Parallel & Cross-Browser Tests",
            desc: "Run Selenium tests across multiple browsers using Grid and CI tools.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Integrate with DevOps Tools",
            desc: "Connect Selenium with Jenkins, Maven, and Docker for automation pipelines.",
            icon: "bi bi-gear",
          },
          {
            title: "Build End-to-End Test Projects",
            desc: "Develop a complete automation project with reporting and version control.",
            icon: "bi bi-robot",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "11:30 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "12:30 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Playwright",
        desc: "Master Playwright end-to-end testing — automate modern web apps with JavaScript/TypeScript, from basics to advanced frameworks.",
        rating: 5.0,
        duration: "1 month",
        students: "11,204",
        img: "/images/courses/new/playwright.png",
        aboutData: {
          topic:
            "Master Playwright — Modern End-to-End Automation for Web Applications!",
          content1:
            "Learn Playwright from scratch and become an expert in web automation testing using JavaScript or TypeScript. This course teaches you how to automate browsers, handle dynamic elements, perform cross-browser testing, and design scalable test frameworks with ease.",
          content2:
            "The Playwright course by Urbancode covers everything from setup to deployment. You’ll begin with the fundamentals of Playwright, understand its locators, and move on to advanced testing, API automation, parallel execution, and CI/CD integration. By the end, you’ll be able to build robust, maintainable automation frameworks used in real-world QA environments.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Getting Started with Playwright",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Playwright and its advantages over Selenium",
              "Installing and setting up Playwright with Node.js",
              "Understanding browser contexts and Playwright architecture",
              "Creating and running your first test",
              "Exploring Playwright Test Runner and configuration options",
            ],
          },
          {
            id: 2,
            title: "Beginner – Working with Locators and Elements",
            icon: "bi bi-cursor",
            items: [
              "Locators: CSS, XPath, Text, Role, and advanced selectors",
              "Interacting with input fields, buttons, dropdowns, and checkboxes",
              "Handling alerts, frames, and multiple tabs",
              "Mouse and keyboard actions",
              "Dealing with dynamic elements and waits",
            ],
          },
          {
            id: 3,
            title: "Intermediate – Assertions, Waits & Debugging",
            icon: "bi bi-check2-square",
            items: [
              "Using Playwright’s built-in assertion library",
              "Waits and timeouts: automatic vs manual",
              "Network request interception and mocking",
              "Capturing screenshots, videos, and traces",
              "Debugging Playwright tests effectively",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Test Structure & Framework Design",
            icon: "bi bi-window-stack",
            items: [
              "Organizing tests and using fixtures",
              "Implementing Page Object Model (POM)",
              "Parameterization and data-driven testing",
              "Environment variables and test configuration",
              "Custom helpers and reusable utilities",
            ],
          },
          {
            id: 5,
            title: "Advanced – Cross-Browser & Parallel Execution",
            icon: "bi bi-diagram-3",
            items: [
              "Running tests across Chromium, Firefox, and WebKit",
              "Headless vs headed browser testing",
              "Parallel execution and sharding",
              "Visual testing and screenshot comparison",
              "Scaling tests using Docker and Playwright Cloud",
            ],
          },
          {
            id: 6,
            title: "Expert – CI/CD Integration & Real-World Projects",
            icon: "bi bi-robot",
            items: [
              "Integrating Playwright tests into Jenkins and GitHub Actions",
              "Building an end-to-end automation framework",
              "Testing modern SPAs (React, Angular, Vue)",
              "Generating HTML and Allure reports",
              "Implementing best practices for production-grade automation",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Playwright Fundamentals",
            desc: "Understand Playwright architecture, locators, and automation principles.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Automate Modern Web Apps",
            desc: "Create reliable automation for React, Angular, and Vue applications.",
            icon: "bi bi-browser-chrome",
          },
          {
            title: "Build Scalable Test Frameworks",
            desc: "Design maintainable frameworks using the Page Object Model pattern.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Run Tests in Parallel & Across Browsers",
            desc: "Execute tests on Chromium, Firefox, and WebKit efficiently.",
            icon: "bi bi-cpu",
          },
          {
            title: "Integrate CI/CD Pipelines",
            desc: "Automate testing workflows with Jenkins, GitHub Actions, and Docker.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Work on Real Projects",
            desc: "Develop a complete Playwright automation project from scratch with reporting and CI/CD.",
            icon: "bi bi-robot",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "TypeScript",
        desc: "Master testing in TypeScript — write reliable, maintainable, and high-quality tests using Jest, Mocha, and Playwright with TypeScript.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/new/typescript.png",
        aboutData: {
          topic:
            "Master Testing with TypeScript — From Unit Tests to End-to-End Automation!",
          content1:
            "Learn to write clean and type-safe tests for modern web applications using TypeScript. This course covers everything from unit and integration testing to end-to-end automation using tools like Jest, Mocha, Chai, and Playwright — all powered by TypeScript.",
          content2:
            "You’ll start by understanding the testing fundamentals and environment setup in TypeScript, then move to writing tests for components, APIs, and full-stack applications. The course also includes advanced topics like mocking, coverage reports, CI/CD integration, and real-world automation projects to make you job-ready.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – TypeScript & Testing Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to testing concepts and test-driven development (TDD)",
              "Setting up a TypeScript project with testing tools",
              "TypeScript basics for testing",
              "Writing your first test with Jest and Mocha",
              "Assertions, matchers, and error handling in tests",
            ],
          },
          {
            id: 2,
            title: "Beginner – Unit Testing in TypeScript",
            icon: "bi bi-lightning-charge",
            items: [
              "Testing functions, classes, and modules",
              "Working with mocks and stubs",
              "Testing async and promise-based functions",
              "Code coverage reports and analysis",
              "Best practices for writing clean unit tests",
            ],
          },
          {
            id: 3,
            title: "Intermediate – Integration Testing",
            icon: "bi bi-diagram-3",
            items: [
              "Testing APIs and services using Supertest",
              "Mocking databases and external APIs",
              "Integration testing in Node.js and Express apps",
              "Validating data flow across components",
              "Error handling and logging tests",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Frontend Testing with TypeScript",
            icon: "bi bi-window-stack",
            items: [
              "Testing React and Next.js components using Jest and Testing Library",
              "Snapshot testing and DOM assertions",
              "Mocking browser APIs",
              "Simulating user interactions and events",
              "Accessibility and UI behavior testing",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Testing in TypeScript",
            desc: "Write reliable and type-safe tests for any JavaScript or TypeScript project.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Work with Modern Testing Tools",
            desc: "Use Jest, Mocha, Chai, and Playwright to cover all testing levels.",
            icon: "bi bi-tools",
          },
          {
            title: "Perform Unit, Integration & E2E Tests",
            desc: "Test APIs, databases, and full-stack apps efficiently.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Automate Frontend Testing",
            desc: "Test UI components and user flows with Playwright and Testing Library.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Integrate with CI/CD Pipelines",
            desc: "Run automated tests across environments for continuous delivery.",
            icon: "bi bi-gear",
          },
          {
            title: "Work on Real Projects",
            desc: "Build, test, and deploy automation suites for production-grade web apps.",
            icon: "bi bi-briefcase",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },

  "Net Working": {
    mainCategoryDesc: "Defend the Digital World",
    subDesc:
      "Protect organizations from digital threats by mastering Network Security, Ethical Hacking, Cryptography, Firewalls, and Penetration Testing. Learn to secure systems, applications, and data against evolving cyber risks.",
    subHeading:
      "Build a rewarding career as a Cybersecurity Specialist, safeguarding the future of the digital-first economy.",
    mainImage: "/images/courses/Cyber_Security.webp",

    courses: [
      {
        title: "CCNA",
        desc: "Master the fundamentals of computer networks — learn IP addressing, routing, switching, and real-world troubleshooting to build a strong foundation in networking.",
        rating: 5.0,
        duration: "1 month",
        students: "8,942",
        img: "/images/courses/CCN.webp",
        aboutData: {
          topic:
            "Become a Networking Pro — Master Core Networking Concepts from the Ground Up!",
          content1:
            "This CCN course introduces you to the essential concepts of networking. You’ll understand how devices communicate, how data travels across networks, and how to configure routers and switches in real scenarios.",
          content2:
            "You’ll gain practical skills in IP addressing, subnetting, VLANs, and routing protocols. Each module is structured to bridge theory with real-world application — preparing you for both professional work environments and advanced certifications like CCNA.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Module 1 – Networking Fundamentals",
            icon: "bi bi-hdd-network",
            defaultOpen: true,
            items: [
              "Introduction to Computer Networks",
              "Types of Networks: LAN, WAN, MAN, WLAN",
              "Network Devices: Routers, Switches, Hubs, and Access Points",
              "Understanding the OSI and TCP/IP Models",
              "Data Transmission Methods and Topologies",
            ],
          },
          {
            id: 2,
            title: "Module 2 – IP Addressing and Subnetting",
            icon: "bi bi-diagram-2",
            items: [
              "IPv4 and IPv6 Addressing",
              "Public vs Private IP Addresses",
              "Subnetting and Supernetting Explained",
              "Classful and Classless Addressing (CIDR)",
              "Calculating Network and Broadcast Addresses",
            ],
          },
          {
            id: 3,
            title: "Module 3 – Switching Concepts",
            icon: "bi bi-switch",
            items: [
              "Introduction to Ethernet and Switching",
              "Understanding MAC Addresses",
              "Configuring VLANs and Trunking",
              "Inter-VLAN Communication",
              "Spanning Tree Protocol (STP) Basics",
            ],
          },
          {
            id: 4,
            title: "Module 4 – Routing Concepts",
            icon: "bi bi-router",
            items: [
              "What is Routing?",
              "Static vs Dynamic Routing",
              "Configuring Static Routes",
              "Understanding Routing Protocols: RIP, OSPF, EIGRP",
              "Troubleshooting Routing Issues",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand How Networks Work",
            desc: "Learn the core principles behind how data moves between devices across networks.",
            icon: "bi bi-hdd-network",
          },
          {
            title: "Master IP Addressing",
            desc: "Gain confidence in subnetting, IP planning, and addressing schemes for real-world networks.",
            icon: "bi bi-diagram-2",
          },
          {
            title: "Configure Routers and Switches",
            desc: "Learn to set up and manage network devices using Cisco standards.",
            icon: "bi bi-router",
          },
          {
            title: "Troubleshoot Network Issues",
            desc: "Use diagnostic tools to identify and fix common connectivity problems.",
            icon: "bi bi-tools",
          },
          {
            title: "Secure Network Devices",
            desc: "Implement ACLs, passwords, and security practices to protect network infrastructure.",
            icon: "bi bi-shield-lock",
          },
          {
            title: "Prepare for CCNA-Level Skills",
            desc: "Build a strong foundation for Cisco certifications and real-world networking jobs.",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Cybersecurity",
        desc: "Become a Cybersecurity Analyst. Master network defense, threat hunting, and modern risk management to protect enterprise data and secure elite IT security roles.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/Cybersecurity.jpg",
        aboutData: {
          topic:
            "Master Cybersecurity — From Fundamentals to Ethical Hacking & Network Defense!",
          content1:
            "Learn to protect networks, systems, and data from cyber threats! This course covers ethical hacking, penetration testing, security protocols, and incident response with hands-on labs and projects.",
          content2:
            "Our Cybersecurity course by Urbancode takes you from the basics of networking and security principles to advanced techniques in ethical hacking, threat analysis, and risk management. You’ll gain real-world skills in malware analysis, vulnerability assessment, and security tools, making you industry-ready.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Cybersecurity Fundamentals",
            icon: "bi bi-shield",
            defaultOpen: true,
            items: [
              "Introduction to Cybersecurity and its importance",
              "Types of cyber threats and attacks",
              "Basic networking concepts",
              "Security terminology and principles",
              "Setting up a secure lab environment",
            ],
          },
          {
            id: 2,
            title: "Network Security",
            icon: "bi bi-wifi",
            items: [
              "Understanding firewalls and VPNs",
              "Network protocols and services",
              "Intrusion detection and prevention systems (IDS/IPS)",
              "Packet sniffing and analysis",
              "Securing routers and switches",
            ],
          },
          {
            id: 3,
            title: "Ethical Hacking & Penetration Testing",
            icon: "bi bi-hammer",
            items: [
              "Reconnaissance and footprinting",
              "Scanning and enumeration",
              "Vulnerability assessment tools",
              "Exploitation techniques",
              "Reporting and documentation",
            ],
          },
          {
            id: 4,
            title: "Web Application Security",
            icon: "bi bi-window",
            items: [
              "OWASP Top 10 vulnerabilities",
              "SQL injection and XSS attacks",
              "Cross-Site Request Forgery (CSRF)",
              "Secure coding practices",
              "Web application penetration testing",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Cybersecurity Concepts",
            desc: "Understand core security principles, protocols, and threat landscapes.",
            icon: "bi bi-shield",
          },
          {
            title: "Ethical Hacking & Penetration Testing",
            desc: "Perform vulnerability assessments and penetration tests ethically.",
            icon: "bi bi-hammer",
          },
          {
            title: "Network & System Defense",
            desc: "Secure networks, servers, and endpoints against attacks.",
            icon: "bi bi-wifi",
          },
          {
            title: "Web Application Security",
            desc: "Identify and mitigate vulnerabilities in web applications.",
            icon: "bi bi-window",
          },
          {
            title: "Malware Analysis & Forensics",
            desc: "Analyze malicious software and investigate cyber incidents.",
            icon: "bi bi-bug",
          },
          {
            title: "Governance, Risk & Compliance",
            desc: "Implement security policies, risk management, and compliance standards.",
            icon: "bi bi-file-earmark-lock",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Ethical Hacking",
        desc: "Master the art of ethical hacking with hands-on training in cybersecurity tools and real-world simulations.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/Ethical_Hacking.jpg",
        aboutData: {
          topic:
            "Become a Certified Ethical Hacker — From Fundamentals to Red Team Operations!",
          content1:
            "Learn practical penetration testing, vulnerability assessment, and defensive techniques. This course blends theory with hands-on labs using real-world scenarios so you can think like an attacker and protect like a defender.",
          content2:
            "The Ethical Hacking course covers core cybersecurity concepts, reconnaissance, scanning, exploitation, post-exploitation, web and network penetration testing, wireless attacks, social engineering, malware basics, and reporting. You’ll practice with industry tools (Kali Linux, Nmap, Metasploit, Burp Suite, Wireshark) and finish with a full penetration test and professional security report.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Cybersecurity Fundamentals",
            icon: "bi bi-shield-lock",
            defaultOpen: true,
            items: [
              "Introduction to ethical hacking and threat landscape",
              "Legal, compliance, and ethical considerations",
              "Security concepts: CIA triad, risk, vulnerabilities",
              "Setting up a lab (Kali Linux, virtual machines)",
              "Basic Linux commands and scripting for pentesters",
            ],
          },
          {
            id: 2,
            title: "Beginner – Reconnaissance & Information Gathering",
            icon: "bi bi-people",
            items: [
              "Passive vs active reconnaissance",
              "OSINT techniques and tools",
              "Domain, subdomain, and infrastructure discovery",
              "Email harvesting and footprinting",
              "Mapping attack surface",
            ],
          },
          {
            id: 3,
            title: "Beginner – Scanning & Enumeration",
            icon: "bi bi-search",
            items: [
              "Port scanning with Nmap",
              "Service and version detection",
              "Vulnerability scanning basics",
              "Banner grabbing and fingerprinting",
              "Enumerating hosts, users, and shares",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Network & System Exploitation",
            icon: "bi bi-diagram-3",
            items: [
              "Exploitation fundamentals and exploit development overview",
              "Using Metasploit for exploits and payloads",
              "Privilege escalation techniques",
              "Post-exploitation: persistence and cleanup",
              "Hands-on Windows and Linux exploitation labs",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand Offensive & Defensive Security",
            desc: "Think like an attacker while learning how to design practical defenses.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Master Industry Tools",
            desc: "Gain hands-on experience with Kali Linux, Nmap, Metasploit, Burp Suite, Wireshark, and forensic toolkits.",
            icon: "bi bi-gear",
          },
          {
            title: "Perform Full Penetration Tests",
            desc: "From reconnaissance to exploitation and reporting — run end-to-end pentests in real labs.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Assess Web & Network Security",
            desc: "Identify and exploit common web and network vulnerabilities and suggest fixes.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Apply Malware Analysis & Forensics",
            desc: "Carry out basic malware analysis and collect forensic evidence for investigations.",
            icon: "bi bi-cpu",
          },
          {
            title: "Produce Professional Security Reports",
            desc: "Deliver clear, executive-friendly findings with prioritized remediation and compliance context.",
            icon: "bi bi-file-earmark-text",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },
  "Digital Marketing": {
    mainCategoryDesc: "Become a SEO Expert",
    subDesc:
      "Master the art of Search Engine Optimization (SEO) and learn how to drive organic traffic to your website. Understand the essential strategies for on-page and off-page SEO, keyword research, link building, and content optimization to rank higher on search engines.",
    subHeading:
      "Cybersecurity protects digital assets from cyber threats using advanced tools and practices. It ensures data privacy, integrity, and safe online operations.",
    mainImage: "/images/courses/SEO.webp",

    courses: [
      {
        title: "SEO",
        desc: "Dominate search engine rankings. Master SEO, advanced keyword strategy, and technical optimization to drive explosive organic traffic and secure top growth marketing roles.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/Digital_Marketing.jpg",
        curriculumUrls: ["/curriculum/UC_Digital marketing curriculum_V1.1.pdf"],
        aboutData: {
          topic:
            "Master Digital Marketing — From Basics to Advanced Strategies!",
          content1:
            "Take your marketing skills to the next level! Learn SEO, social media marketing, content marketing, email campaigns, Google Ads, and analytics. This course helps you develop a data-driven approach to grow businesses online with real-world projects.",
          content2:
            "The Digital Marketing course by Urbancode covers everything from marketing fundamentals to advanced growth strategies. Starting with core concepts like market research, customer personas, and content creation, you’ll move through hands-on training in SEO, social media campaigns, paid advertising, and analytics. By the end, you'll be ready to plan, execute, and optimize marketing campaigns like a professional.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Digital Marketing Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Digital Marketing",
              "Understanding Online Consumer Behavior",
              "Market Research and Competitor Analysis",
              "Customer Personas and Buyer Journeys",
              "Basics of Content Marketing",
            ],
          },
          {
            id: 2,
            title: "SEO & Content Strategy",
            icon: "bi bi-search",
            items: [
              "On-page and Off-page SEO",
              "Keyword Research Techniques",
              "Writing SEO-optimized Content",
              "Link Building Strategies",
              "Content Calendar Planning",
            ],
          },
          {
            id: 3,
            title: "Social Media Marketing",
            icon: "bi bi-share",
            items: [
              "Social Media Platforms Overview",
              "Creating Engaging Content",
              "Community Management and Engagement",
              "Social Media Ads (Facebook, Instagram, LinkedIn)",
              "Measuring Social Media ROI",
            ],
          },
          {
            id: 4,
            title: "Paid Advertising",
            icon: "bi bi-cash-stack",
            items: [
              "Google Ads Fundamentals",
              "Search, Display & Video Campaigns",
              "Budgeting and Bidding Strategies",
              "Ad Copywriting & A/B Testing",
              "Conversion Tracking & Optimization",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Marketing Fundamentals",
            desc: "Understand customer behavior, content strategy, and digital marketing channels.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Optimize SEO & Content",
            desc: "Learn keyword research, SEO tactics, and content planning for growth.",
            icon: "bi bi-search",
          },
          {
            title: "Execute Social Media Campaigns",
            desc: "Run campaigns on Facebook, Instagram, LinkedIn and measure results effectively.",
            icon: "bi bi-share",
          },
          {
            title: "Run Paid Ads",
            desc: "Master Google Ads, social media ads, and A/B testing for conversions.",
            icon: "bi bi-cash-stack",
          },
          {
            title: "Leverage Analytics",
            desc: "Track traffic, conversions, and ROI to make data-driven marketing decisions.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Implement Advanced Growth Strategies",
            desc: "Use growth hacking, omnichannel marketing, and scaling techniques to maximize impact.",
            icon: "bi bi-rocket",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Social Media Management",
        desc: "Become a Social Media expert. Master algorithm-driven content strategies across Instagram, LinkedIn, and Facebook to generate massive brand growth and secure digital marketing careers.",
        rating: 4.8,
        duration: "1 month",
        students: "984",
        img: "/images/courses/SMM.webp",
        aboutData: {
          topic:
            "Become a Social Media Expert — Build, Grow, and Manage Brands That Stand Out Online!",
          content1:
            "This course teaches you how to manage social media platforms strategically — from planning content calendars to running paid ad campaigns. Learn how to analyze insights, optimize engagement, and maintain a consistent brand presence.",
          content2:
            "The Social Media Management course by Urbancode is designed for aspiring marketers, entrepreneurs, and creators who want to turn content into growth. You’ll master content strategy, platform algorithms, ad tools, and analytics to build effective campaigns that deliver measurable impact.",
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
              "Role of a social media manager",
            ],
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
              "Community management and engagement",
            ],
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
              "Timing and frequency optimization",
            ],
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
              "Cross-platform ad integration",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Develop Social Media Strategies",
            desc: "Plan and execute social media strategies that align with brand goals.",
            icon: "bi bi-bullseye",
          },
          {
            title: "Create Engaging Content",
            desc: "Design visuals and write posts that capture attention and drive interaction.",
            icon: "bi bi-pencil-square",
          },
          {
            title: "Run Paid Ad Campaigns",
            desc: "Use Meta, LinkedIn, and Google Ads to reach targeted audiences effectively.",
            icon: "bi bi-cash",
          },
          {
            title: "Analyze Performance Metrics",
            desc: "Track engagement, impressions, and conversions using analytics tools.",
            icon: "bi bi-graph-up-arrow",
          },
          {
            title: "Manage Online Communities",
            desc: "Engage followers, handle feedback, and build long-term relationships.",
            icon: "bi bi-chat-dots",
          },
          {
            title: "Stay Ahead of Trends",
            desc: "Learn to adapt quickly to new tools, algorithms, and audience behaviors.",
            icon: "bi bi-lightning-charge",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "LinkedIn Marketing and Personal Branding",
        desc: "Accelerate your professional growth. Master LinkedIn algorithms, B2B lead generation, and elite personal branding to attract high-paying clients and career opportunities.",
        rating: 4.8,
        duration: "1 month",
        students: "891",
        img: "/images/courses/LinkedIn_Marketing.webp",
        aboutData: {
          topic:
            "Master LinkedIn Marketing — Build Influence, Grow Your Network, and Generate Business Leads!",
          content1:
            "This course teaches you how to use LinkedIn strategically — from optimizing your profile to creating impactful content that attracts the right audience. You’ll learn how to build credibility, expand your reach, and generate professional opportunities.",
          content2:
            "The LinkedIn Marketing & Personal Branding course by Urbancode helps professionals, entrepreneurs, and marketers master LinkedIn’s tools for business growth. You’ll explore personal branding techniques, content optimization, analytics, and advertising to position yourself or your brand as an industry authority.",
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
              "LinkedIn algorithm basics",
            ],
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
              "Building credibility through endorsements and recommendations",
            ],
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
              "Analyzing post engagement and insights",
            ],
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
              "B2B outreach and conversion strategies",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Optimize Your Profile",
            desc: "Create a strong, search-optimized LinkedIn profile that attracts recruiters and clients.",
            icon: "bi bi-person-check",
          },
          {
            title: "Build a Personal Brand",
            desc: "Position yourself as an expert through authentic and consistent content.",
            icon: "bi bi-star",
          },
          {
            title: "Grow Your Network",
            desc: "Connect with professionals, founders, and potential clients in your niche.",
            icon: "bi bi-people",
          },
          {
            title: "Generate Leads & Opportunities",
            desc: "Use content and outreach strategies to bring in high-quality business leads.",
            icon: "bi bi-briefcase",
          },
          {
            title: "Run LinkedIn Ads",
            desc: "Plan, create, and analyze paid campaigns for brand visibility and conversions.",
            icon: "bi bi-bullseye",
          },
          {
            title: "Track and Improve Performance",
            desc: "Use LinkedIn Analytics to measure impact, reach, and engagement.",
            icon: "bi bi-graph-up-arrow",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Meta Campaigns",
        desc: "Master Facebook and Instagram advertising. Learn algorithm-busting Meta Ads strategies to drive massive ROI and secure top-tier performance marketing roles.",
        rating: 4.9,
        duration: "1 month",
        students: "1,047",
        img: "/images/courses/Meta_Campaigns.webp",
        aboutData: {
          topic:
            "Master Meta Campaigns — Build High-Converting Facebook & Instagram Ads!",
          content1:
            "This course teaches you how to plan, launch, and optimize paid ad campaigns using Meta Ads Manager. Learn to reach the right audience, design effective creatives, and analyze campaign data to maximize ROI.",
          content2:
            "The Meta Campaigns course by Urbancode is perfect for digital marketers, entrepreneurs, and freelancers looking to scale their online presence. You’ll explore every part of Meta advertising — from strategy to ad creation, audience segmentation, budgeting, analytics, and retargeting.",
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
              "Compliance and Meta ad policies",
            ],
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
              "Access and permissions management",
            ],
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
              "Ad placement optimization across Meta platforms",
            ],
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
              "Mobile-first and performance-based design principles",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand Meta Ad Ecosystem",
            desc: "Learn how Facebook and Instagram Ads Manager works and structure campaigns efficiently.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Create Winning Ad Campaigns",
            desc: "Design and run high-converting campaigns that attract the right audience.",
            icon: "bi bi-megaphone",
          },
          {
            title: "Target the Right Audience",
            desc: "Use advanced targeting and retargeting strategies to maximize ROI.",
            icon: "bi bi-bullseye",
          },
          {
            title: "Manage Budgets & Bids",
            desc: "Plan, allocate, and optimize ad spending for better cost efficiency.",
            icon: "bi bi-cash",
          },
          {
            title: "Analyze Performance",
            desc: "Use analytics tools to measure and improve campaign success.",
            icon: "bi bi-graph-up-arrow",
          },
          {
            title: "Run Advanced Campaigns",
            desc: "Leverage dynamic ads, automation, and conversion tracking for pro-level campaigns.",
            icon: "bi bi-lightbulb",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },
  "Health Care": {
    mainCategoryDesc: "Coding for medical professionals.",
    subDesc:
      "Training in Python, R, and cybersecurity practices. Get into high demanding feilds like AI, Data Science, Web Development, and more.",
    subHeading:
      "Learn the world's most in-demand programming languages with real projects.",
    mainImage: "/images/courses/Medical_Coding.webp",

    courses: [
      {
        title: "Medical Coding",
        desc: "Launch a high-demand healthcare career. Master ICD, CPT, and HCPCS coding standardizations to secure lucrative roles in international medical billing and compliance.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/Medical_Coding1.jpg",
        aboutData: {
          topic:
            "Become a Certified Medical Coder — From Healthcare Basics to Advanced Coding!",
          content1:
            "Learn Medical Coding from scratch! Gain hands-on experience with ICD-10, CPT, and HCPCS coding systems, understand healthcare billing, and get trained on real-world scenarios. This course prepares you to become a certified medical coder ready for healthcare industry jobs.",
          content2:
            "The Medical Coding course covers everything from basic healthcare terminology to advanced coding techniques. You'll start with medical documentation and anatomy & physiology, then progress to ICD-10, CPT, and HCPCS coding. The program also includes practical billing exercises, coding audits, and preparation for certification exams like CPC, making you fully industry-ready.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Healthcare & Medical Terminology",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to healthcare industry",
              "Understanding medical records and documentation",
              "Basic medical terminology",
              "Anatomy & Physiology essentials",
              "Healthcare roles and responsibilities",
            ],
          },
          {
            id: 2,
            title: "Introduction to Medical Coding",
            icon: "bi bi-database",
            items: [
              "Overview of ICD-10, CPT, and HCPCS coding systems",
              "Understanding coding conventions and guidelines",
              "Basic coding exercises",
              "Common coding errors and how to avoid them",
            ],
          },
          {
            id: 3,
            title: "ICD-10 Coding",
            icon: "bi bi-gear",
            items: [
              "ICD-10-CM structure and chapters",
              "Coding for diseases and conditions",
              "Coding for outpatient and inpatient settings",
              "ICD-10 coding exercises and case studies",
            ],
          },
          {
            id: 4,
            title: "CPT & HCPCS Coding",
            icon: "bi bi-window-stack",
            items: [
              "CPT coding structure and categories",
              "HCPCS Level I & II coding",
              "Coding for procedures and services",
              "Medical billing process overview",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Medical Coding Systems",
            desc: "Learn ICD-10, CPT, and HCPCS coding in detail.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Perform Accurate Coding",
            desc: "Apply coding rules to real patient records and case studies.",
            icon: "bi bi-gear",
          },
          {
            title: "Understand Healthcare Documentation",
            desc: "Interpret medical records and clinical notes for precise coding.",
            icon: "bi bi-book",
          },
          {
            title: "Handle Billing & Compliance",
            desc: "Submit claims, manage denials, and follow HIPAA regulations.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Prepare for Certification",
            desc: "Get ready for CPC, CCS, or other industry-standard coding exams.",
            icon: "bi bi-cpu",
          },
          {
            title: "Gain Real-World Experience",
            desc: "Work on simulated projects and case studies for hands-on learning.",
            icon: "bi bi-window-stack",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Medical Billing",
        desc: "Become a certified Medical Billing expert. Master healthcare finance processing, accurate coding, and insurance compliance for secure, high-paying career opportunities.",
        rating: 5.0,
        duration: "1 month",
        students: "106",
        img: "/images/courses/Medical_Coding2.jpg",
        aboutData: {
          topic: "Become a Certified Medical Coding Expert!",
          content1:
            "Take your healthcare career to the next level! Learn accurate coding using ICD-10, CPT, and HCPCS codes. This course helps you gain practical knowledge to work in hospitals, clinics, and insurance companies.",
          content2:
            "The Medical Coding course covers everything from basic coding principles to advanced auditing and compliance. Starting with medical terminology and anatomy, you’ll move through coding systems, claim processing, and regulatory standards. The program concludes with practical exercises, real-world case studies, and exam preparation to make you industry-ready.",
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
              "Introduction to ICD-10, CPT, and HCPCS coding systems",
            ],
          },
          {
            id: 2,
            title: "Medical Terminology & Anatomy",
            icon: "bi bi-heart-pulse",
            items: [
              "Basic medical terms and abbreviations",
              "Human anatomy and physiology overview",
              "Organ systems and diseases",
              "Medical documentation essentials",
            ],
          },
          {
            id: 3,
            title: "ICD-10 Coding",
            icon: "bi bi-file-text",
            items: [
              "Understanding ICD-10-CM codes",
              "Coding guidelines and conventions",
              "Assigning codes for diagnoses",
              "Coding case studies and practice exercises",
            ],
          },
          {
            id: 4,
            title: "CPT Coding",
            icon: "bi bi-clipboard-check",
            items: [
              "Introduction to CPT codes for procedures",
              "Evaluation and Management (E/M) coding",
              "Surgical and procedural coding",
              "Practice coding with real cases",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master ICD-10, CPT & HCPCS Coding",
            desc: "Accurately assign codes for diagnoses, procedures, and supplies.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Understand Medical Terminology",
            desc: "Learn medical terms, abbreviations, and anatomy for coding accuracy.",
            icon: "bi bi-gear",
          },
          {
            title: "Work with Claim Processing",
            desc: "Handle electronic claims, insurance forms, and denials efficiently.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Ensure Compliance & Accuracy",
            desc: "Follow HIPAA and coding regulations to prevent errors and audits.",
            icon: "bi bi-shield-check",
          },
          {
            title: "Prepare for Certification",
            desc: "Gain skills and practice to pass coding certification exams.",
            icon: "bi bi-bookmark-check",
          },
          {
            title: "Apply Coding in Real-World Scenarios",
            desc: "Work on practical case studies from hospitals and insurance companies.",
            icon: "bi bi-briefcase",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },

  Languages: {
    mainCategoryDesc:
      "Build strong communication skills and master global languages.",
    subDesc:
      "Learn Spoken English, Corporate Communication, and foreign languages like French and German to boost your professional and personal growth.",
    subHeading:
      "Improve fluency, confidence, and cultural understanding through interactive sessions.",
    mainImage: "/images/courses/Languages.webp",

    courses: [
      {
        title: "IELTS General Training",
        desc: "Master IELTS General Training with comprehensive modules covering Listening, Reading, Writing, and Speaking to achieve your target band score.",
        rating: 4.9,
        duration: "Flexible",
        students: "50",
        img: "/images/courses-images/ielts.jpg",
        isNew: true,
        curriculumUrls: ["/curriculum/UC_IELTS_Academic Curriculum.pdf"],
        subCourses: [
          {
            name: "Complete IELTS",
            duration: "30 Hours",
            fee: "₹18000 +GST",
            desc: "A comprehensive 30-hour program designed for learners seeking end-to-end IELTS preparation.",
            features: [
              "Covers all four modules - Listening, Reading, Writing, and Speaking",
              "Language development, grammar, vocabulary enhancement",
              "Test strategies and extensive practice",
              "Personalised feedback for continuous improvement"
            ],
            curriculumData: [
              {
                id: 1,
                title: "Listening & Reading Modules",
                icon: "bi bi-headphones",
                defaultOpen: true,
                items: [
                  "Understanding test formats and question types",
                  "Skimming, scanning, and detailed reading strategies",
                  "Listening for main ideas and specific details",
                  "Time management techniques"
                ]
              },
              {
                id: 2,
                title: "Writing & Speaking Modules",
                icon: "bi bi-pencil",
                items: [
                  "Structuring letters and essays effectively",
                  "Grammar and vocabulary building",
                  "Fluency, pronunciation, and coherence",
                  "Mock interviews and feedback"
                ]
              }
            ]
          },
          {
            name: "Focused training",
            duration: "20 Hours",
            fee: "₹15000 +GST",
            desc: "A structured program tailored for candidates who already possess a good command of English but require targeted training in specific IELTS modules.",
            features: [
              "Focused training on specific modules or skills",
              "Emphasis on exam techniques and accuracy",
              "Time management strategies",
              "Guided practice to improve band scores"
            ],
            curriculumData: [
              {
                id: 1,
                title: "Targeted Module Practice",
                icon: "bi bi-target",
                defaultOpen: true,
                items: [
                  "Identifying weaknesses in specific modules",
                  "Advanced strategies for challenging question types",
                  "Intensive practice and feedback loop"
                ]
              }
            ]
          },
          {
            name: "Crash course",
            duration: "12 Hours",
            fee: "₹10000 +GST",
            desc: "A fast-paced 12-hour revision program ideal for candidates appearing for the IELTS exam in the near future.",
            features: [
              "Key test strategies and high-impact tips",
              "Common question types across all modules",
              "Mock practice for real exam experience",
              "Maximise performance in a limited timeframe"
            ],
            curriculumData: [
              {
                id: 1,
                title: "Intensive Revision & Mock Tests",
                icon: "bi bi-lightning",
                defaultOpen: true,
                items: [
                  "Quick review of essential strategies",
                  "Full-length mock tests under timed conditions",
                  "Detailed feedback and score prediction"
                ]
              }
            ]
          }
        ],
        courseContentData: [
          {
            id: 1,
            title: "IELTS Foundation & English Enhancement",
            icon: "bi bi-journal-text",
            defaultOpen: true,
            items: [
              "IELTS General Training test format, band scores, assessment criteria, and target-band planning",
              "English fundamentals: sentence structure, parts of speech, punctuation, and common grammatical errors",
              "Advanced grammar: tenses, passive voice, modal verbs, conditionals, and complex sentences",
              "Vocabulary development: synonyms, collocations, academic vocabulary, and paraphrasing techniques",
              "Outcome: Build the strong language foundation required across all four IELTS modules"
            ]
          },
          {
            id: 2,
            title: "Module 1: IELTS Listening (GT)",
            icon: "bi bi-headphones",
            items: [
              "Core techniques: predicting answers, identifying keywords, and understanding paraphrases",
              "Question types: Form/note completion, multiple-choice, matching, and map/diagram labelling",
              "Contexts covered: everyday conversations, social situations, and academic discussions",
              "Advanced strategies: recognizing speaker attitude, handling distractors, and navigating complex lectures",
              "Target: Improve accuracy while maintaining concentration throughout the full listening test"
            ]
          },
          {
            id: 3,
            title: "Module 2: IELTS Reading (GT)",
            icon: "bi bi-book",
            items: [
              "Core skills: Skimming, scanning, keyword identification, and contextual vocabulary",
              "Understanding paragraph structure and reading strategically for answers",
              "Question types: True/False/Not Given, matching headings, summary completion, and short-answer",
              "Advanced Reading: 20-minute-per-passage strategy, inference, and argument structure",
              "Target: Band 7+ reading strategy and accuracy for completing 40 questions in 60 minutes"
            ]
          },
          {
            id: 4,
            title: "Module 3: IELTS Writing (GT)",
            icon: "bi bi-pencil",
            items: [
              "Writing Foundations: Paragraph structure, PEEL framework, cohesion, and formal academic tone",
              "Task 1 (Charts & Maps): Structuring overviews, describing trends, comparing data, and sequencing processes",
              "Task 2 (Essays): Standard essay structure (Opinion, Discussion, Problem/Solution, etc.)",
              "Advanced skills: Brainstorming, strong thesis statements, and avoiding memorized templates",
              "Target: Write a well-developed 250+ word essay within approximately 40 minutes"
            ]
          },
          {
            id: 5,
            title: "Module 4: IELTS Speaking (GT)",
            icon: "bi bi-mic",
            items: [
              "Part 1: Developing natural responses for familiar topics using Answer → Reason → Detail structure",
              "Part 2 (Cue Cards): One-minute preparation, storytelling structure, and continuous 2-minute speaking",
              "Part 3 (Advanced Discussion): Analytical skills, expressing opinions, and discussing wider implications",
              "Pronunciation & Fluency: Word stress, intonation, connected speech, and reducing unnecessary pauses",
              "Advanced Vocabulary: Theme-based learning (Education, Technology, Healthcare, etc.)"
            ]
          },
          {
            id: 6,
            title: "Advanced Exam Preparation & Mock Tests",
            icon: "bi bi-award",
            items: [
              "Band 7+ Skill Development: Precision, paraphrase mastery, and systematic error correction",
              "Maintaining an Error Log (Question → Correct Answer → Why Wrong → Strategy)",
              "Full-length timed mock examinations across all four modules",
              "Individual performance analysis by skill to create personalized improvement plans",
              "Weekly progression: Foundation → Strategy Development → Timed Practice → Mock Tests"
            ]
          }
        ]
      },
      {
        title: "English Language",
        desc: "Our English language modules are designed to help you develop strong communication skills step by step. Each level focuses on building your confidence and fluency in everyday English.",
        rating: 4.9,
        duration: "3 Months",
        students: "124",
        img: "/images/courses-images/english.jpg",
        subCourses: [
          {
            name: "Beginner Level",
            duration: "3 Months",
            fee: "₹6000 + GST / Per Month",
            desc: "Start your English journey with the basics.",
            features: [
              "Learn basic vocabulary and everyday expressions",
              "Form simple sentences",
              "Improve listening comprehension",
              "Gain confidence in speaking",
              "Practice real-life conversations and activities"
            ],
            curriculumData: [
              {
                id: 1,
                title: "Basics of English",
                icon: "bi bi-book",
                defaultOpen: true,
                items: [
                  "Learn basic vocabulary and everyday expressions",
                  "Form simple sentences",
                  "Improve listening comprehension"
                ]
              },
              {
                id: 2,
                title: "Speaking & Activities",
                icon: "bi bi-mic",
                items: [
                  "Gain confidence in speaking",
                  "Practice real-life conversations and activities"
                ]
              }
            ]
          },
          {
            name: "Intermediate Level",
            duration: "3 Months",
            fee: "₹8000 + GST / Per Month",
            desc: "Strengthen your skills. Communicate with ease.",
            features: [
              "Expand vocabulary and sentence structure",
              "Improve grammar and communication skills",
              "Develop fluency in speaking and writing",
              "Better understanding of listening and reading",
              "Engage in real-life topics and discussions"
            ],
            curriculumData: [
              {
                id: 1,
                title: "Grammar & Structure",
                icon: "bi bi-pencil",
                defaultOpen: true,
                items: [
                  "Expand vocabulary and sentence structure",
                  "Improve grammar and communication skills"
                ]
              },
              {
                id: 2,
                title: "Fluency & Application",
                icon: "bi bi-chat-dots",
                items: [
                  "Develop fluency in speaking and writing",
                  "Better understanding of listening and reading",
                  "Engage in real-life topics and discussions"
                ]
              }
            ]
          },
          {
            name: "Advanced Level",
            duration: "3 Months",
            fee: "₹10000 + GST / Per Month",
            desc: "Refine your fluency. Express your ideas confidently.",
            features: [
              "Advanced vocabulary and idiomatic expressions",
              "Complex grammar and sentence mastery",
              "Improved fluency and accuracy",
              "Critical thinking and discussion skills",
              "Confident communication in any situation"
            ],
            curriculumData: [
              {
                id: 1,
                title: "Advanced Grammar & Vocabulary",
                icon: "bi bi-journal-text",
                defaultOpen: true,
                items: [
                  "Advanced vocabulary and idiomatic expressions",
                  "Complex grammar and sentence mastery"
                ]
              },
              {
                id: 2,
                title: "Critical Communication",
                icon: "bi bi-mic",
                items: [
                  "Improved fluency and accuracy",
                  "Critical thinking and discussion skills",
                  "Confident communication in any situation"
                ]
              }
            ]
          }
        ],
        courseContentData: [
          {
            id: 1,
            title: "Beginner Level Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Learn basic vocabulary and everyday expressions",
              "Form simple sentences",
              "Improve listening comprehension",
              "Gain confidence in speaking",
              "Practice real-life conversations and activities"
            ]
          },
          {
            id: 2,
            title: "Intermediate Level Progression",
            icon: "bi bi-pencil",
            items: [
              "Expand vocabulary and sentence structure",
              "Improve grammar and communication skills",
              "Develop fluency in speaking and writing",
              "Better understanding of listening and reading",
              "Engage in real-life topics and discussions"
            ]
          },
          {
            id: 3,
            title: "Advanced Level Mastery",
            icon: "bi bi-mic",
            items: [
              "Advanced vocabulary and idiomatic expressions",
              "Complex grammar and sentence mastery",
              "Improved fluency and accuracy",
              "Critical thinking and discussion skills",
              "Confident communication in any situation"
            ]
          }
        ]
      },
      {
        title: "Corporate Communication",
        desc: "Elevate your professional presence. Master corporate writing, high-impact presentations, and executive etiquette to accelerate your corporate career trajectory.",
        rating: 4.9,
        duration: "1 month",
        students: "234",
        img: "/images/courses-images/communication.jpg",
        aboutData: {
          topic: "Master the Art of Professional Communication!",
          content1:
            "Learn how to express ideas clearly and confidently in a corporate environment. This course covers email writing, business presentations, interpersonal skills, and effective communication strategies for meetings and client interactions.",
          content2:
            "You’ll gain hands-on experience through roleplays, case studies, and mock meetings. By the end, you’ll communicate with precision and impact in any business setting.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Introduction to Corporate Communication",
            icon: "bi bi-chat-dots",
            defaultOpen: true,
            items: [
              "Understanding corporate culture",
              "Basics of professional communication",
              "Communication channels and etiquette",
              "Verbal and non-verbal communication",
            ],
          },
          {
            id: 2,
            title: "Business Writing & Email Etiquette",
            icon: "bi bi-envelope",
            items: [
              "Professional email formats",
              "Writing reports and proposals",
              "Avoiding common writing errors",
              "Tone and clarity in communication",
            ],
          },
          {
            id: 3,
            title: "Presentation & Public Speaking Skills",
            icon: "bi bi-mic",
            items: [
              "Structuring impactful presentations",
              "Body language and stage presence",
              "Handling Q&A sessions confidently",
              "Using visuals effectively",
            ],
          },
          {
            id: 4,
            title: "Team & Client Communication",
            icon: "bi bi-people",
            items: [
              "Conducting meetings and briefings",
              "Negotiation and persuasion",
              "Conflict resolution techniques",
              "Cross-cultural communication",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Communicate Confidently at Work",
            desc: "Learn to express ideas clearly in meetings, presentations, and emails.",
            icon: "bi bi-chat-text",
          },
          {
            title: "Master Business Writing",
            desc: "Write concise and effective professional documents and emails.",
            icon: "bi bi-pencil-square",
          },
          {
            title: "Present with Impact",
            desc: "Develop public speaking skills and deliver powerful presentations.",
            icon: "bi bi-mic",
          },
          {
            title: "Handle Workplace Scenarios",
            desc: "Manage team communication, client calls, and negotiations effectively.",
            icon: "bi bi-people",
          },
          {
            title: "Build Leadership Presence",
            desc: "Enhance confidence and influence through strong communication.",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Spoken English",
        desc: "Speak English with supreme confidence. Master advanced pronunciation, engaging fluency, and professional grammar to unlock global career opportunities.",
        rating: 5.0,
        duration: "1 month",
        students: "548",
        img: "/images/courses-images/spoken-english.jpg",
        aboutData: {
          topic: "Speak English Fluently and Confidently!",
          content1:
            "This course helps you build real-world English communication skills for everyday and professional use. Learn grammar, vocabulary, pronunciation, and conversational fluency through interactive activities and roleplays.",
          content2:
            "From day one, you’ll start speaking confidently. You’ll practice real conversations, improve sentence structure, and build vocabulary for interviews, group discussions, and daily communication.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Grammar & Sentence Building",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Basic grammar fundamentals",
              "Tenses and sentence formation",
              "Common errors in English",
              "Word usage and structure",
            ],
          },
          {
            id: 2,
            title: "Vocabulary & Pronunciation",
            icon: "bi bi-megaphone",
            items: [
              "Daily-use vocabulary building",
              "Pronunciation practice and phonetics",
              "Accent improvement tips",
              "Listening and repetition drills",
            ],
          },
          {
            id: 3,
            title: "Speaking Practice",
            icon: "bi bi-person-lines-fill",
            items: [
              "Roleplays and conversation practice",
              "Group discussions and storytelling",
              "Interview preparation",
              "Confidence-building exercises",
            ],
          },
          {
            id: 4,
            title: "Professional English Skills",
            icon: "bi bi-briefcase",
            items: [
              "Email and phone communication",
              "Presentation language",
              "Public speaking practice",
              "Social and cultural etiquette",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Speak English Confidently",
            desc: "Practice conversations to sound fluent and natural.",
            icon: "bi bi-chat-dots",
          },
          {
            title: "Improve Pronunciation",
            desc: "Learn phonetics and stress patterns for clearer speech.",
            icon: "bi bi-megaphone",
          },
          {
            title: "Build Vocabulary",
            desc: "Use practical words and phrases for real-life situations.",
            icon: "bi bi-book",
          },
          {
            title: "Master Grammar Basics",
            desc: "Use tenses, prepositions, and sentence structures correctly.",
            icon: "bi bi-pencil",
          },
          {
            title: "Enhance Presentation Skills",
            desc: "Speak confidently in interviews, meetings, and discussions.",
            icon: "bi bi-award",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },


    ],
  },

  // "English Proficiency Exams":{
  //   mainCategoryDesc:"Ace Your English Proficiency Exams",
  //   subDesc:"Prepare for TOEFL, IELTS, and other exams with expert guidance. Build confidence in reading, writing, listening, and speaking skills.",
  //   subHeading:"English proficiency exams like IELTS, TOEFL, and PTE open doors to global education and career opportunities.",
  //   mainImage:"",
  //   courses:[
  //     {title:"TOEFL Course",desc:"Master the TOEFL exam with expert guidance, interactive practice sessions, and personalized feedback. Achieve your dream score and unlock global education opportunities.",rating:5.0,duration:"1 month",students:"106",img:""},
  //     {title:"OET Course",desc:"Master OET with expert-led training focused on real exam strategies and practical communication skills. Prepare confidently for healthcare career success worldwide.",rating:5.0,duration:"1 month",students:"106",img:""},
  //     {title:"PTE Course",desc:"Master the PTE Academic exam with expert-led training, practice tests, and personalized feedback. Achieve your dream score with proven strategies and real exam simulations.",rating:5.0,duration:"1 month",students:"106",img:""},
  //     {title:"IELTS Course",desc:"Master all four IELTS modules – Listening, Reading, Writing, and Speaking – with expert trainers and proven strategies.",rating:5.0,duration:"1 month",students:"106",img:""},
  //   ]
  // },

  "Kidz Space": {
    mainCategoryDesc: "Fun and interactive coding for kids.",
    subDesc:
      "Let your child explore coding, robotics, and creativity through hands-on projects. Courses designed for kids aged 7–16 to learn programming, logic, and problem-solving.",
    subHeading:
      "Learn coding the fun way — with games, robots, and real projects!",
    mainImage: "/images/courses/Kidz_Space_Main.jpg",

    courses: [
      {
        title: "Junior Web Development",
        desc: "Introduce kids to the digital world by teaching them how to build colorful, interactive web pages using HTML, CSS, and simple JavaScript.",
        rating: 5.0,
        duration: "1 month",
        students: "820",
        img: "/images/courses/Kidz_WebDev.webp",
        aboutData: {
          topic: "Build Your First Website — Fun, Creative, and Interactive!",
          content1:
            "This course helps kids learn how websites are made from scratch. Through hands-on lessons in HTML, CSS, and beginner JavaScript, they’ll design their own webpages, add animations, and bring creative ideas to life.",
          content2:
            "Every project is designed to spark imagination — from building a personal homepage to creating a mini game. By the end, kids will understand how the web works and gain confidence in coding visually engaging websites.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Getting Started with the Web",
            icon: "bi bi-globe2",
            defaultOpen: true,
            items: [
              "What is a website and how it works",
              "Introduction to browsers and HTML",
              "Creating your first webpage",
              "Adding titles, paragraphs, and images",
            ],
          },
          {
            id: 2,
            title: "Styling with CSS",
            icon: "bi bi-palette",
            items: [
              "Understanding colors and fonts",
              "Decorating pages with borders and backgrounds",
              "Positioning elements neatly",
              "Designing a colorful webpage layout",
            ],
          },
          {
            id: 3,
            title: "Interactive Pages with JavaScript",
            icon: "bi bi-lightning",
            items: [
              "What is JavaScript and why it’s used",
              "Adding buttons and click effects",
              "Making animations and popups",
              "Simple logic for interactivity",
            ],
          },
          {
            id: 4,
            title: "Build a Mini Website",
            icon: "bi bi-laptop",
            items: [
              "Plan and design your first website",
              "Combine HTML, CSS, and JS together",
              "Test your website in the browser",
              "Fixing small bugs and improvements",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Create Web Pages from Scratch",
            desc: "Learn how to use HTML, CSS, and JavaScript to make your own websites.",
            icon: "bi bi-code-square",
          },
          {
            title: "Use Colors and Styles",
            desc: "Decorate pages with beautiful designs and layouts.",
            icon: "bi bi-palette",
          },
          {
            title: "Add Interactivity",
            desc: "Make your site come alive with fun animations and effects.",
            icon: "bi bi-lightning",
          },
          {
            title: "Think Like a Web Designer",
            desc: "Understand how to plan and design a complete website.",
            icon: "bi bi-brush",
          },
          {
            title: "Build Confidence in Coding",
            desc: "Practice hands-on coding in a creative and safe way.",
            icon: "bi bi-rocket",
          },
          {
            title: "Showcase Your Creations",
            desc: "Share your finished projects proudly with others.",
            icon: "bi bi-trophy",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Python Core",
        desc: "A playful introduction to Python for kids — learn how to think like a programmer, write code, and create fun projects step by step.",
        rating: 5.0,
        duration: "1 month",
        students: "995",
        img: "/images/courses/Kidz_PythonCore.webp",
        aboutData: {
          topic: "Learn Python the Fun Way — Code, Create, and Explore!",
          content1:
            "Python Core is designed to help kids start coding with one of the world’s most popular programming languages. Through hands-on activities, they’ll learn how to use Python to draw shapes, solve problems, and build simple apps.",
          content2:
            "Each concept is taught through fun challenges and visual examples — no boring theory. Kids will learn loops, conditionals, and variables while developing logical thinking and creativity through interactive coding tasks.",
        },
        courseContentData: [
          {
            id: 1,
            title: "What is Python?",
            icon: "bi bi-terminal",
            defaultOpen: true,
            items: [
              "Introduction to Python and how it’s used",
              "Setting up your first Python environment",
              "Printing messages and playing with text",
              "Writing your first 'Hello, World!' program",
            ],
          },
          {
            id: 2,
            title: "Playing with Numbers and Text",
            icon: "bi bi-123",
            items: [
              "Understanding variables and data types",
              "Doing basic math with Python",
              "Working with strings and text",
              "Simple challenges to practice logic",
            ],
          },
          {
            id: 3,
            title: "Logic and Loops",
            icon: "bi bi-repeat",
            items: [
              "Making decisions with if-else conditions",
              "Creating loops to repeat actions",
              "Using comparison and logical operators",
              "Fun coding exercises and mini projects",
            ],
          },
          {
            id: 4,
            title: "Drawing with Turtle",
            icon: "bi bi-palette",
            items: [
              "Introduction to Python’s Turtle graphics",
              "Drawing shapes and colorful patterns",
              "Animating with loops and movements",
              "Building a small art project",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand the Basics of Python",
            desc: "Learn how to write and run simple Python programs.",
            icon: "bi bi-code-slash",
          },
          {
            title: "Think Logically",
            desc: "Use loops, conditions, and problem-solving to create smart code.",
            icon: "bi bi-brain",
          },
          {
            title: "Play with Turtle Graphics",
            desc: "Draw shapes and make art using Python’s Turtle module.",
            icon: "bi bi-brush",
          },
          {
            title: "Build Mini Games",
            desc: "Turn your coding skills into fun and creative projects.",
            icon: "bi bi-controller",
          },
          {
            title: "Gain Coding Confidence",
            desc: "Practice writing clean and organized code.",
            icon: "bi bi-lightning",
          },
          {
            title: "Show Off Your Work",
            desc: "Share your games and scripts proudly with family and friends.",
            icon: "bi bi-trophy",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Advanced Python",
        desc: "Take your Python skills to the next level! Learn how to build real-world apps, create smart programs, and explore cool Python libraries.",
        rating: 5.0,
        duration: "1 month",
        students: "860",
        img: "/images/courses/Kidz_AdvancedPython.webp",
        aboutData: {
          topic: "Go Beyond Basics — Build Smarter, Cooler Python Projects!",
          content1:
            "Advanced Python helps kids who already know the basics to level up their coding power. They’ll explore topics like lists, dictionaries, functions, and file handling — all through interactive games and creative coding challenges.",
          content2:
            "The course focuses on turning imagination into real projects — calculators, story generators, and even mini AI-like chat programs. By the end, kids will think like true programmers, ready to create complex ideas with confidence.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Review & Setup",
            icon: "bi bi-gear",
            defaultOpen: true,
            items: [
              "Quick recap of Python basics",
              "Understanding how programs run",
              "Exploring real-world Python examples",
              "Setting up a project workspace",
            ],
          },
          {
            id: 2,
            title: "Lists, Tuples, and Dictionaries",
            icon: "bi bi-collection",
            items: [
              "Storing and organizing data in lists",
              "Understanding tuples and their uses",
              "Working with key-value pairs in dictionaries",
              "Hands-on mini projects with collections",
            ],
          },
          {
            id: 3,
            title: "Functions and Logic Building",
            icon: "bi bi-cpu",
            items: [
              "Creating and using your own functions",
              "Understanding parameters and return values",
              "Breaking big problems into small parts",
              "Building a calculator or quiz using functions",
            ],
          },
          {
            id: 4,
            title: "Working with Files and Modules",
            icon: "bi bi-folder2-open",
            items: [
              "Reading and writing files in Python",
              "Saving game data or user inputs",
              "Using Python libraries to extend your code",
              "Exploring random and math modules",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Core Python Concepts",
            desc: "Understand lists, functions, and files like a real developer.",
            icon: "bi bi-terminal",
          },
          {
            title: "Build Real-World Projects",
            desc: "Apply your knowledge to fun coding challenges and apps.",
            icon: "bi bi-controller",
          },
          {
            title: "Write Smarter Code",
            desc: "Learn how to organize your programs with functions and logic.",
            icon: "bi bi-cpu",
          },
          {
            title: "Explore Python Libraries",
            desc: "Use built-in modules to make your projects more powerful.",
            icon: "bi bi-puzzle",
          },
          {
            title: "Develop Debugging Skills",
            desc: "Find and fix errors like a pro while improving your code.",
            icon: "bi bi-bug",
          },
          {
            title: "Create and Share Projects",
            desc: "Design cool Python apps and share them proudly with others.",
            icon: "bi bi-trophy",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "C Programming",
        desc: "Learn the basics of C programming through games, problem-solving, and fun logic-building activities designed just for kids.",
        rating: 5.0,
        duration: "1 month",
        students: "940",
        img: "/images/courses/Kidz_CProgramming.webp",
        curriculumUrls: ["/curriculum/UC_C Programming Curriculum v1.0.pdf"],
        aboutData: {
          topic: "Learn the Language Behind Every Great Program!",
          content1:
            "C Programming introduces kids to the foundation of coding used in modern technology. Through colorful examples and fun exercises, they’ll understand how computers think, calculate, and make decisions.",
          content2:
            "The course helps kids build a strong base in logic, variables, loops, and conditions while writing simple programs. By creating mini projects like number games and pattern printers, they’ll learn how real software is made — step by step.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Getting Started with C",
            icon: "bi bi-cpu",
            defaultOpen: true,
            items: [
              "What is C and why it’s important",
              "Setting up a C environment (like Code::Blocks or online compilers)",
              "Writing your first program: Hello World!",
              "Understanding compilation and output",
            ],
          },
          {
            id: 2,
            title: "Basics of Coding",
            icon: "bi bi-terminal",
            items: [
              "Variables and data types",
              "Input and output in C",
              "Operators and simple calculations",
              "Mini project: Build a basic calculator",
            ],
          },
          {
            id: 3,
            title: "Decisions and Loops",
            icon: "bi bi-arrow-repeat",
            items: [
              "Using if-else and switch statements",
              "Creating loops with for and while",
              "Solving logic-based challenges",
              "Mini project: Number guessing game",
            ],
          },
          {
            id: 4,
            title: "Arrays and Functions",
            icon: "bi bi-grid",
            items: [
              "Understanding arrays and indexing",
              "Storing multiple values efficiently",
              "Creating and using your own functions",
              "Mini project: Average marks calculator",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Learn Programming Logic",
            desc: "Understand how computers think and solve problems step-by-step.",
            icon: "bi bi-brain",
          },
          {
            title: "Write Real C Programs",
            desc: "Create your own working programs and simple apps.",
            icon: "bi bi-code-slash",
          },
          {
            title: "Understand Variables & Loops",
            desc: "Use loops and conditions to make your programs smarter.",
            icon: "bi bi-arrow-repeat",
          },
          {
            title: "Debug and Fix Code",
            desc: "Learn how to find and fix mistakes like a real programmer.",
            icon: "bi bi-bug",
          },
          {
            title: "Build Mini Projects",
            desc: "Make small but exciting programs using real C syntax.",
            icon: "bi bi-controller",
          },
          {
            title: "Gain Confidence in Coding",
            desc: "Build a solid foundation for learning any programming language.",
            icon: "bi bi-trophy",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "CPP Programming",
        desc: "Step into the world of C++ — learn how games, apps, and real software are built using fun coding projects and logical challenges.",
        rating: 5.0,
        duration: "1 month",
        students: "520",
        img: "/images/courses/Kidz_CPP.webp",
        aboutData: {
          topic:
            "Code Smarter — Build Logic, Games, and Real Programs with C++!",
          content1:
            "C++ introduces kids to the world of structured and object-oriented programming in a simple, engaging way. They’ll learn how to code step-by-step using variables, loops, and functions while building small projects.",
          content2:
            "This course helps children develop a deeper understanding of how software works. By the end, they’ll create mini games and projects using objects, functions, and logic — learning real coding skills used by game and app developers worldwide.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Getting Started with C++",
            icon: "bi bi-cpu",
            defaultOpen: true,
            items: [
              "What is C++ and how it powers games and apps",
              "Setting up your coding environment",
              "Writing your first C++ program",
              "Understanding input and output",
            ],
          },
          {
            id: 2,
            title: "Variables, Loops & Decisions",
            icon: "bi bi-arrow-repeat",
            items: [
              "Understanding variables and data types",
              "If-else conditions and decision making",
              "For and while loops for repetition",
              "Mini project: Number guessing game",
            ],
          },
          {
            id: 3,
            title: "Functions & Arrays",
            icon: "bi bi-grid",
            items: [
              "Writing and using your own functions",
              "Organizing data with arrays",
              "Exploring problem-solving techniques",
              "Mini project: Student marks calculator",
            ],
          },
          {
            id: 4,
            title: "Introduction to OOP",
            icon: "bi bi-diagram-3",
            items: [
              "What are classes and objects?",
              "Understanding how OOP makes coding easier",
              "Creating your own simple classes",
              "Mini project: Create a virtual pet or character",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand C++ Fundamentals",
            desc: "Learn how C++ works and why it’s used in real software and games.",
            icon: "bi bi-terminal",
          },
          {
            title: "Use Loops and Logic",
            desc: "Create smart programs using if-else, loops, and conditions.",
            icon: "bi bi-arrow-repeat",
          },
          {
            title: "Build with Functions",
            desc: "Organize your code using functions for reusability and clarity.",
            icon: "bi bi-gear",
          },
          {
            title: "Explore Object-Oriented Programming",
            desc: "Understand classes, objects, and how real-world software is built.",
            icon: "bi bi-diagram-3",
          },
          {
            title: "Create Exciting Projects",
            desc: "Design fun mini games and tools that bring your ideas to life.",
            icon: "bi bi-controller",
          },
          {
            title: "Think Like a Game Developer",
            desc: "Build logic, planning, and creativity — just like real developers do.",
            icon: "bi bi-lightbulb",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "SQL for Kids",
        desc: "Discover how data works! Learn how to store, search, and organize information using fun, kid-friendly SQL lessons and projects.",
        rating: 5.0,
        duration: "1 month",
        students: "780",
        img: "/images/courses/Kidz_SQL.webp",
        aboutData: {
          topic: "Learn How Apps and Games Store Their Data!",
          content1:
            "SQL for Kids introduces the idea of databases in a fun, visual way. Kids learn how to organize and find information — just like apps, websites, and games do behind the scenes.",
          content2:
            "Through hands-on examples, they’ll create simple databases, add and search records, and build mini projects like a student score tracker or favorite movies list. It’s a great way to understand how real-world apps handle data.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Understanding Data",
            icon: "bi bi-collection",
            defaultOpen: true,
            items: [
              "What is data and why is it important?",
              "How websites and games use databases",
              "Introduction to SQL and tables",
              "Creating your first table",
            ],
          },
          {
            id: 2,
            title: "Working with Tables",
            icon: "bi bi-table",
            items: [
              "Adding and viewing data using INSERT and SELECT",
              "Understanding rows and columns",
              "Exploring simple data types",
              "Mini project: Create a favorite books list",
            ],
          },
          {
            id: 3,
            title: "Searching and Filtering",
            icon: "bi bi-search",
            items: [
              "Using WHERE to filter data",
              "Sorting data with ORDER BY",
              "Using LIKE for pattern searches",
              "Mini project: Movie search database",
            ],
          },
          {
            id: 4,
            title: "Updating and Deleting Data",
            icon: "bi bi-pencil-square",
            items: [
              "Changing data with UPDATE",
              "Removing unwanted data using DELETE",
              "Maintaining clean and accurate databases",
              "Mini project: Student marks manager",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand How Data Works",
            desc: "Learn how apps, games, and websites use databases to store info.",
            icon: "bi bi-brain",
          },
          {
            title: "Write Real SQL Commands",
            desc: "Use simple SQL queries to create and explore data.",
            icon: "bi bi-terminal",
          },
          {
            title: "Search and Sort Data",
            desc: "Find information using filters, conditions, and sorting.",
            icon: "bi bi-search",
          },
          {
            title: "Manage and Update Records",
            desc: "Learn how to edit and clean data safely.",
            icon: "bi bi-pencil-square",
          },
          {
            title: "Design Mini Databases",
            desc: "Create projects like movie lists or student score systems.",
            icon: "bi bi-database",
          },
          {
            title: "Think Logically with Data",
            desc: "Build structured thinking and understand how real systems store info.",
            icon: "bi bi-lightbulb",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "Graphic Designing",
        desc: "Turn your imagination into art! Learn to design posters, logos, and digital art using simple kid-friendly design tools.",
        rating: 5.0,
        duration: "1 month",
        students: "430",
        img: "/images/courses/Kidz_GraphicDesign.webp",
        aboutData: {
          topic: "Design Like a Pro — Create Art That Tells a Story!",
          content1:
            "This course introduces kids to the colorful world of graphic design. They’ll explore shapes, colors, and typography while learning to express their creativity using digital tools.",
          content2:
            "With fun, project-based lessons, kids will design posters, logos, and social media graphics — all while understanding real design principles like balance, contrast, and layout. It’s the perfect mix of creativity and tech!",
        },
        courseContentData: [
          {
            id: 1,
            title: "Getting Started with Design",
            icon: "bi bi-palette",
            defaultOpen: true,
            items: [
              "What is graphic design?",
              "Introduction to colors, shapes, and fonts",
              "Exploring design tools like Canva or Figma",
              "Create your first digital drawing",
            ],
          },
          {
            id: 2,
            title: "Playing with Colors & Layouts",
            icon: "bi bi-brush",
            items: [
              "Understanding color theory and harmony",
              "Working with grids and spacing",
              "Designing a simple poster or greeting card",
              "Mini project: Your favorite quote poster",
            ],
          },
          {
            id: 3,
            title: "Creating Logos & Icons",
            icon: "bi bi-bounding-box-circles",
            items: [
              "How to design logos using shapes and text",
              "Understanding visual identity and branding",
              "Simplifying complex ideas into icons",
              "Mini project: Design a logo for your own brand",
            ],
          },
          {
            id: 4,
            title: "Posters, Flyers & Storyboards",
            icon: "bi bi-file-image",
            items: [
              "Creating visually balanced posters",
              "Adding images, text, and effects",
              "Making storyboards for short animations",
              "Mini project: Movie or event poster",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand Design Basics",
            desc: "Learn color theory, layout, and balance in a fun way.",
            icon: "bi bi-palette",
          },
          {
            title: "Use Real Design Tools",
            desc: "Create digital art using Canva, Figma, or similar software.",
            icon: "bi bi-brush",
          },
          {
            title: "Create Logos and Posters",
            desc: "Design real-world projects like logos and event posters.",
            icon: "bi bi-bounding-box-circles",
          },
          {
            title: "Develop Visual Thinking",
            desc: "Learn to communicate ideas visually and creatively.",
            icon: "bi bi-eye",
          },
          {
            title: "Build a Creative Portfolio",
            desc: "Showcase your best designs and personal style.",
            icon: "bi bi-collection",
          },
          {
            title: "Boost Confidence Through Art",
            desc: "Turn imagination into beautiful visual stories and projects.",
            icon: "bi bi-trophy",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      {
        title: "AI and ML",
        desc: "Discover the amazing world of Artificial Intelligence! Learn how computers recognize images, play games, and think like a human through fun, interactive projects.",
        rating: 5.0,
        duration: "1 month",
        students: "850",
        img: "/images/courses/Kidz_AI_ML.webp",
        aboutData: {
          topic: "Meet the World of Smart Machines — Learn How AI Works!",
          content1:
            "This course introduces kids to the amazing world of Artificial Intelligence and Machine Learning — in the simplest way possible. They’ll understand how computers recognize images, play games, and make predictions.",
          content2:
            "Through games, stories, and visual projects, they’ll build their own mini ‘smart’ systems using beginner-friendly tools. It’s the perfect mix of logic, creativity, and technology — no math-heavy coding required!",
        },
        courseContentData: [
          {
            id: 1,
            title: "What is AI?",
            icon: "bi bi-robot",
            defaultOpen: true,
            items: [
              "Understanding what Artificial Intelligence means",
              "Examples of AI in everyday life (Alexa, games, robots)",
              "How do computers learn from data?",
              "Activity: Spot the AI around you",
            ],
          },
          {
            id: 2,
            title: "How Machines Learn",
            icon: "bi bi-lightning",
            items: [
              "What is Machine Learning?",
              "Difference between AI and ML",
              "How computers find patterns and make predictions",
              "Mini project: Teach your computer to recognize shapes",
            ],
          },
          {
            id: 3,
            title: "Fun with Data",
            icon: "bi bi-database",
            items: [
              "Collecting and understanding data",
              "How machines use examples to learn",
              "Training your first simple model using a drag-and-drop tool",
              "Mini project: Create a mood detector using pictures",
            ],
          },
          {
            id: 4,
            title: "Image and Voice Intelligence",
            icon: "bi bi-camera-video",
            items: [
              "How AI recognizes images and sounds",
              "Exploring Teachable Machine by Google",
              "Creating your own image classification model",
              "Mini project: Build an AI that recognizes animals or emojis",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Understand AI & ML Concepts",
            desc: "Learn how computers think, learn, and make predictions.",
            icon: "bi bi-robot",
          },
          {
            title: "Play with Real AI Tools",
            desc: "Use beginner-friendly tools like Teachable Machine to train models.",
            icon: "bi bi-tools",
          },
          {
            title: "Learn Through Fun Projects",
            desc: "Build simple AI projects like image and sound recognizers.",
            icon: "bi bi-controller",
          },
          {
            title: "Boost Logical Thinking",
            desc: "Develop problem-solving and structured thinking skills.",
            icon: "bi bi-cpu",
          },
          {
            title: "Explore Future Tech",
            desc: "Understand how AI powers apps, robots, and games around us.",
            icon: "bi bi-lightbulb",
          },
          {
            title: "Create Your Own Smart Ideas",
            desc: "Apply AI creatively to design your own intelligent mini systems.",
            icon: "bi bi-stars",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },

  CRM: {
    mainCategoryDesc: "Master Customer Relationship Management",
    subDesc:
      "Unlock the potential of CRM tools and strategies to build stronger customer relationships, streamline processes, and drive business growth.",
    subHeading:
      "Our CRM streamlines lead management, client interactions, and follow-ups in one platform. Empower your team with smarter tools to boost sales and productivity.",
    mainImage: "/images/courses/CRM.webp",
    courses: [
      {
        title: "Salesforce Administrator",
        desc: "Master Salesforce Administration with hands-on training, real-time projects, and expert guidance. Build skills to manage, customize, and optimize Salesforce for any business.",
        rating: 5.0,
        duration: "1 month",
        students: "876",
        img: "/images/courses/Salesforce_Administrator.jpg",
        aboutData: {
          topic:
            "Become a Certified Salesforce Administrator — From Basics to Advanced!",
          content1:
            "Learn Salesforce administration from scratch! Gain expertise in managing users, customizing Salesforce, building reports and dashboards, and automating business processes. This course provides hands-on exercises and real-time projects to make you job-ready.",
          content2:
            "The Salesforce Administrator course covers everything from basic Salesforce navigation to advanced administration. You will learn about security, data management, workflow automation, reporting, and dashboard creation. By the end, you'll be able to optimize Salesforce for any organization, preparing you for the Salesforce Administrator certification.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Beginner – Salesforce Basics",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to Salesforce and CRM concepts",
              "Salesforce interface navigation",
              "Understanding standard objects and fields",
              "Creating and managing users",
              "Setting up roles, profiles, and permissions",
            ],
          },
          {
            id: 2,
            title: "Beginner – Data Management",
            icon: "bi bi-database",
            items: [
              "Managing data import and export",
              "Data validation rules",
              "Duplicate management",
              "Understanding record types and page layouts",
            ],
          },
          {
            id: 3,
            title: "Intermediate – Automation & Workflow",
            icon: "bi bi-gear",
            items: [
              "Creating workflow rules and process builder",
              "Automating approvals and tasks",
              "Introduction to Flow Builder",
              "Email alerts and notifications",
            ],
          },
          {
            id: 4,
            title: "Intermediate – Reports & Dashboards",
            icon: "bi bi-bar-chart-line",
            items: [
              "Creating custom reports",
              "Building dashboards for insights",
              "Using filters, formulas, and summary reports",
              "Sharing and scheduling reports",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Master Salesforce Administration",
            desc: "Understand users, security, data management, and CRM processes in Salesforce.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Automate Business Processes",
            desc: "Create workflows, approval processes, and flows to automate tasks efficiently.",
            icon: "bi bi-gear",
          },
          {
            title: "Build Reports & Dashboards",
            desc: "Generate insights with custom reports, dashboards, and advanced analytics tools.",
            icon: "bi bi-bar-chart-line",
          },
          {
            title: "Customize Salesforce Platform",
            desc: "Work with custom objects, fields, page layouts, and Lightning App Builder.",
            icon: "bi bi-window-stack",
          },
          {
            title: "Prepare for Certification",
            desc: "Gain knowledge and practice to pass the Salesforce Administrator certification exam.",
            icon: "bi bi-award",
          },
          {
            title: "Optimize Salesforce for Business",
            desc: "Enhance productivity, data accuracy, and user experience across your organization.",
            icon: "bi bi-diagram-3",
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      // {title:"Data Analysis",desc:"Master the art of Data Analysis with hands-on training in Excel, SQL, Python, and visualization tools. Gain industry-ready skills to turn raw data into powerful insights and career opportunities.",rating:5.0,duration:"1 month",students:"106",img:"/images/courses/Data_Analysis.jpg"},
      {
        title: "Salesforce Developer",
        desc: "Launch your high-paying CRM career. Master Salesforce Development, Apex coding, and Lightning components to build elite enterprise applications.",
        rating: 5.0,
        duration: "1 month",
        students: "876",
        img: "/images/courses/Data_Analysis.jpg",
        curriculumUrls: ["/curriculum/UC_SalesforceDeveloper_Curriculum.pdf"],
        aboutData: {
          topic:
            "Master Salesforce Development — From Basics to Advanced CRM Solutions!",
          content1:
            "Become a certified Salesforce Developer! Learn Apex, Visualforce, Lightning Components, and Salesforce integrations with hands-on projects and real-world scenarios. This course helps you gain industry-ready skills to excel in CRM development and automation.",
          content2:
            "The Salesforce Developer course covers everything from core platform concepts to advanced development. Start with Salesforce fundamentals, including objects, fields, and relationships. Move on to Apex programming, Visualforce pages, Lightning components, and integrating Salesforce with external systems. The course also dives into workflows, triggers, and DevOps for Salesforce, preparing you for a successful career in Salesforce development.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Salesforce Fundamentals",
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
            title: "Salesforce Administration Basics",
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
            title: "Apex Programming",
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
            title: "Visualforce & Lightning",
            icon: "bi bi-window",
            items: [
              "Building Visualforce pages",
              "Introduction to Lightning Components",
              "Lightning App Builder and UI customization",
              "Custom Lightning components with Apex controllers",
              "Deploying and managing Lightning apps",
            ],
          },
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
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },

      // {
      //   title: "Spoken English",
      //   desc: "Master fluent English with confidence through interactive sessions and real-life conversations. Build communication skills that open global career opportunities.",
      //   rating: 5.0,
      //   duration: "1 month",
      //   students: "106",
      //   img: "/images/courses/Salesforce_Administrator.jpg",
      //   aboutData: {
      //     topic: "Master Spoken English — From Basics to Fluent Conversations!",
      //     content1: "Enhance your English speaking skills with practical lessons, interactive sessions, and real-world conversation practice. This course helps you gain confidence, improve pronunciation, expand vocabulary, and speak fluently in professional and social settings.",
      //     content2: "The Spoken English course covers everything from foundational grammar to advanced conversational techniques. You’ll learn essential sentence structures, common idioms, and effective communication strategies. Through role-plays, mock interviews, and live speaking sessions, you’ll become fluent, confident, and ready to use English anywhere."
      //   },
      //   courseContentData: [
      //     {
      //       id: 1,
      //       title: "English Fundamentals",
      //       icon: "bi bi-book",
      //       defaultOpen: true,
      //       items: [
      //         "Introduction to English language skills",
      //         "Basic vocabulary and sentence structure",
      //         "Grammar essentials: tenses, articles, and prepositions",
      //         "Common phrases and greetings",
      //         "Pronunciation and phonetics practice"
      //       ]
      //     },
      //     {
      //       id: 2,
      //       title: "Everyday Conversations",
      //       icon: "bi bi-chat-left",
      //       items: [
      //         "Introducing yourself and others",
      //         "Talking about daily routines",
      //         "Asking questions and giving answers",
      //         "Shopping, travel, and food conversations",
      //         "Role-play exercises for confidence building"
      //       ]
      //     },
      //     {
      //       id: 3,
      //       title: "Advanced Grammar & Vocabulary",
      //       icon: "bi bi-journal-text",
      //       items: [
      //         "Complex sentence structures",
      //         "Idioms, phrasal verbs, and expressions",
      //         "Synonyms, antonyms, and word usage",
      //         "Listening comprehension exercises",
      //         "Storytelling and paragraph construction"
      //       ]
      //     },
      //     {
      //       id: 4,
      //       title: "Business & Professional English",
      //       icon: "bi bi-briefcase",
      //       items: [
      //         "Formal email and report writing",
      //         "Telephone and video call etiquette",
      //         "Presentation and meeting skills",
      //         "Networking and small talk techniques",
      //         "Interview preparation and mock sessions"
      //       ]
      //     },

      //   ],
      //   whatYouLearnData: [
      //     {
      //       title: "Speak English Fluently",
      //       desc: "Gain confidence and fluency in daily, social, and professional conversations.",
      //       icon: "bi bi-mic"
      //     },
      //     {
      //       title: "Improve Vocabulary & Grammar",
      //       desc: "Master essential vocabulary, idioms, phrasal verbs, and grammar structures.",
      //       icon: "bi bi-book"
      //     },
      //     {
      //       title: "Communicate Professionally",
      //       desc: "Learn business English, presentations, interviews, and email etiquette.",
      //       icon: "bi bi-briefcase"
      //     },
      //     {
      //       title: "Enhance Listening & Pronunciation",
      //       desc: "Develop listening skills and refine pronunciation for clear communication.",
      //       icon: "bi bi-headphones"
      //     },
      //     {
      //       title: "Build Confidence & Public Speaking",
      //       desc: "Participate in debates, discussions, and storytelling to boost confidence.",
      //       icon: "bi bi-person-lines-fill"
      //     },
      //     {
      //       title: "Master Global Communication",
      //       desc: "Understand cultural nuances and communicate effectively with people worldwide.",
      //       icon: "bi bi-globe"
      //     }
      //   ]
      // }
      ,
    ],
  },
  "App Development": {
    mainCategoryDesc: "Build Cutting-Edge Mobile Apps",
    subDesc:
      "Master the art of app development and create powerful, user-friendly mobile applications with expert guidance and hands-on training.",
    subHeading:
      "Build future-ready apps with seamless UI/UX, robust security, and scalable architecture. Turn your innovative ideas into high-performing mobile and web solutions.",
    mainImage: "/images/courses/App_Development.jpg",
    courses: [
      {
        title: "React Native",
        desc: "Build high-performance cross-platform mobile apps with expert React Native training. Master JavaScript components and Native APIs for highly lucrative iOS & Android development careers.",
        rating: 5.0,
        duration: "1 month",
        students: "546",
        img: "/images/courses/React_Native.jpg",
        curriculumUrls: ["/curriculum/UC_FSD_React Native Curriculum v1.0.pdf"],
        aboutData: {
          topic:
            "Master React Native — Build High-Performance Cross-Platform Mobile Apps!",
          content1:
            "Learn to create native-like mobile applications using React Native. This course covers everything from the basics of React to advanced mobile development, integrating APIs, state management, and deploying apps on Android and iOS.",
          content2:
            "The React Native course by Urbancode is designed to take you from beginner to professional mobile app developer. Starting with core JavaScript and React concepts, you’ll move into React Native components, navigation, performance optimization, and testing. By the end, you will be able to build and deploy fully functional mobile applications with real-world project experience.",
        },
        courseContentData: [
          {
            id: 1,
            title: "React & JavaScript Fundamentals",
            icon: "bi bi-book",
            defaultOpen: true,
            items: [
              "Introduction to React Native and cross-platform development",
              "JavaScript ES6+ essentials for React Native",
              "Components, props, and state",
              "JSX syntax and styling basics",
              "Debugging and development setup",
            ],
          },
          {
            id: 2,
            title: "React Native Core Concepts",
            icon: "bi bi-phone",
            items: [
              "Core components: View, Text, Image, ScrollView",
              "Handling user input and forms",
              "Event handling and gestures",
              "Navigation with React Navigation",
              "Using FlatList and SectionList for lists",
            ],
          },
          {
            id: 3,
            title: "State Management & APIs",
            icon: "bi bi-database",
            items: [
              "Managing state with useState and useReducer",
              "Context API for global state",
              "Introduction to Redux and Redux Toolkit",
              "Fetching and integrating REST APIs",
              "Handling asynchronous requests and errors",
            ],
          },
          {
            id: 4,
            title: "Styling & Animations",
            icon: "bi bi-paint-bucket",
            items: [
              "Styling with StyleSheet and inline styles",
              "Flexbox layout in React Native",
              "Animations with Animated API",
              "Gesture handling and transitions",
              "Theming and responsive design",
            ],
          },
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
          },
        ],
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },
  Automation: {
    mainCategoryDesc: "Intelligent Automation for the Modern Enterprise",
    subDesc:
      "Master Automation and transform how business works. Learn to build intelligent bots, automate repetitive tasks, and streamline complex business processes using Microsoft Power Automate and other industry-leading tools.",
    subHeading:
      "Become an Automation Expert and lead the future of digital transformation in your organization.",
    mainImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",

    courses: [
      {
        title: "Microsoft Power Automate",
        desc: "Master enterprise automation with Microsoft Power Automate. Learn to build automated, instant, and scheduled flows, integrate AI Builder, and manage professional ALM processes.",
        rating: 4.9,
        duration: "1.5 months",
        students: "745",
        img: "/images/courses/power-automate.webp",
        aboutData: {
          topic:
            "Master Power Automate — Transform Business Processes with Intelligent Automation!",
          content1:
            "Learn to build powerful workflows using Microsoft Power Automate. From SharePoint integration to AI-driven document processing, this course covers everything you need to become an automation expert.",
          content2:
            "Our curriculum takes you from basics to advanced ALM (Application Lifecycle Management). You'll master Workflow Definition Language (WDL), data operations, error handling (Try-Catch), and environment variables, ensuring your automations are professional, scalable, and secure.",
        },
        courseContentData: [
          {
            id: 1,
            title: "Foundations & Basics",
            icon: "bi bi-layers",
            defaultOpen: true,
            items: [
              "SharePoint as a Data Source: Lists vs. Libraries",
              "Understanding Column Types & Data Structures",
              "Introduction to Power Platform Ecosystem",
              "Automated, Instant, and Scheduled Flows",
              "Microsoft Copilot & Templates usage",
              "Practice: Document upload notification system",
            ],
          },
          {
            id: 2,
            title: "Logic, Loops, and Approvals",
            icon: "bi bi-diagram-2",
            items: [
              "Conditional Logic (Condition & Switch actions)",
              "The Approvals Connector: Basic vs. Custom",
              "Working with Lists & Loops (Apply to Each)",
              "Updating multiple SharePoint items",
              "Practice: Leave Request system with Manager Approval",
            ],
          },
          {
            id: 3,
            title: "Data Manipulation & Expressions",
            icon: "bi bi-braces",
            items: [
              "Introduction to WDL (Workflow Definition Language)",
              "Expressions: utcNow(), formatDateTime(), variables",
              "Data Operations: Compose, Select, and Filter Array",
              "JSON Mastery & Parse JSON action",
              "Practice: Weekly Digest flow with HTML table formatting",
            ],
          },
          {
            id: 4,
            title: "Professionalism, Error Handling, and AI",
            icon: "bi bi-shield-check",
            items: [
              "Error Handling (Try-Catch) & Configure Run After",
              "Advanced SharePoint Integration",
              "AI Builder: Extracting data from PDF/Invoices",
              "Solutions & Governance naming conventions",
              "Practice: Travel Expense Claim flow with AI receipt reading",
            ],
          },
          {
            id: 5,
            title: "The Professional Handoff (ALM)",
            icon: "bi bi-box-arrow-in-right",
            items: [
              "The Container Concept: Solutions vs. My Flows",
              "Connection References & Environment Variables",
              "Managed vs. Unmanaged Solutions",
              "ALM: Moving flows between Dev, Test, and Prod",
              "Practice: Multi-environment export/import with dynamic URLs",
            ],
          },
        ],

        whatYouLearnData: [
          {
            title: "Build Scalable Flows",
            desc: "Design automated, instant, and scheduled workflows for business tasks.",
            icon: "bi bi-lightning-charge",
          },
          {
            title: "Master Logic & Approvals",
            desc: "Implement complex business logic and multi-stage approval processes.",
            icon: "bi bi-check2-circle",
          },
          {
            title: "Clean Data without Loops",
            desc: "Use advanced data operations like Compose and Filter Array for efficiency.",
            icon: "bi bi-funnel",
          },
          {
            title: "Implement AI Builder",
            desc: "Leverage AI to process documents, invoices, and unstructured data automatically.",
            icon: "bi bi-cpu",
          },
          {
            title: "Professional ALM",
            desc: "Manage software lifecycle using Solutions and Environment Variables.",
            icon: "bi bi-box",
          },
          {
            title: "Error Proof Automations",
            desc: "Build resilient flows with Try-Catch logic and error notifications.",
            icon: "bi bi-bug",
          },
        ],

        locked: false,
        batches: [
          {
            id: 1,
            name: "Regular Classes",
            time: "10:00 AM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 2,
            name: "Fast Track",
            time: "07:00 PM IST",
            batchType: "Weekday (Mon-Fri)",
          },
          {
            id: 3,
            name: "Placement Classes",
            time: "11:00 AM IST",
            batchType: "Weekend (Sat-Sun)",
          },
        ],
      },
    ],
  },
};

// Ensure every course object has an explicit `locked` boolean flag.
// By default we mark courses as locked (true) unless a course explicitly sets `locked: false`.
Object.keys(coursesData).forEach((catKey) => {
  const cat = coursesData[catKey];
  if (cat && Array.isArray(cat.courses)) {
    cat.courses = cat.courses.map((c) => ({
      ...c,
      locked: typeof c.locked === "boolean" ? c.locked : true,
    }));
  }
});

export default coursesData;
