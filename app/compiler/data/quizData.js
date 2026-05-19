// Quiz questions organized by topic
// You can easily add/edit questions here

// Quiz questions organized by topic and level
export const quizData = {
    python: {
        title: "Python Programming",
        icon: "python",
        color: "#3776ab",
        levels: {
            beginner: [
                {
                    id: 1,
                    question: "What is the correct way to print 'Hello World' in Python?",
                    options: ["echo('Hello World')", "print('Hello World')", "console.log('Hello World')", "printf('Hello World')"],
                    correctAnswer: 1,
                    explanation: "In Python, we use the print() function to display output."
                },
                {
                    id: 2,
                    question: "Which of the following is a valid variable name in Python?",
                    options: ["2variable", "variable-name", "variable_name", "variable name"],
                    correctAnswer: 2,
                    explanation: "Variable names can contain letters, numbers, and underscores, but cannot start with a number."
                },
                {
                    id: 3,
                    question: "What does the len() function do?",
                    options: ["Returns length of an object", "Converts to lowercase", "Rounds a number", "Returns the type"],
                    correctAnswer: 0,
                    explanation: "len() returns the number of items in an object."
                },
                {
                    id: 4,
                    question: "Which keyword is used for comments in Python?",
                    options: ["#", "//", "/*", "--"],
                    correctAnswer: 0,
                    explanation: "Python uses # for single-line comments."
                },
                {
                    id: 5,
                    question: "What is the correct file extension for Python files?",
                    options: [".python", ".pyt", ".py", ".pyc"],
                    correctAnswer: 2,
                    explanation: ".py is the standard extension for Python scripts."
                }
            ],
            average: [
                {
                    id: 1,
                    question: "What is the output of: print(type([]))",
                    options: ["<class 'tuple'>", "<class 'dict'>", "<class 'list'>", "<class 'set'>"],
                    correctAnswer: 2,
                    explanation: "[] denotes a list in Python."
                },
                {
                    id: 2,
                    question: "How do you handle exceptions in Python?",
                    options: ["try/catch", "try/except", "do/catch", "try/rescue"],
                    correctAnswer: 1,
                    explanation: "Python uses try/except blocks for error handling."
                },
                {
                    id: 3,
                    question: "Which keyword is used for defining a function?",
                    options: ["func", "def", "function", "define"],
                    correctAnswer: 1,
                    explanation: "The 'def' keyword is used to define functions in Python."
                },
                {
                    id: 4,
                    question: "How do you create a list in Python?",
                    options: ["list = {}", "list = []", "list = ()", "list = ||"],
                    correctAnswer: 1,
                    explanation: "Square brackets [] are used to create lists."
                },
                {
                    id: 5,
                    question: "What is the difference between list and tuple?",
                    options: ["Tuple is mutable, list is not", "List is mutable, tuple is not", "Both are mutable", "Both are immutable"],
                    correctAnswer: 1,
                    explanation: "Lists can be modified after creation, while tuples cannot."
                }
            ],
            tough: [
                {
                    id: 1,
                    question: "What is a decorator in Python?",
                    options: ["A function that modifies another function", "A class for styling", "A variable type", "A database connector"],
                    correctAnswer: 0,
                    explanation: "Decorators allow you to modify the behavior of a function or class."
                },
                {
                    id: 2,
                    question: "What is the Global Interpreter Lock (GIL)?",
                    options: ["A security feature", "A mutex that allows only one thread to execute", "A database lock", "A memory manager"],
                    correctAnswer: 1,
                    explanation: "The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once."
                },
                {
                    id: 3,
                    question: "What are *args and **kwargs?",
                    options: ["Special data types", "Variable-length arguments", "Boolean operators", "Loop keywords"],
                    correctAnswer: 1,
                    explanation: "*args allows passing many positional arguments, and **kwargs allows many keyword arguments."
                },
                {
                    id: 4,
                    question: "What is list comprehension?",
                    options: ["A way to summarize lists", "A concise way to create lists", "A sorting algorithm", "A debugging tool"],
                    correctAnswer: 1,
                    explanation: "List comprehension provides a concise way to create lists based on existing lists."
                },
                {
                    id: 5,
                    question: "What is a generator in Python?",
                    options: ["A hardware component", "A function that yields values", "A random number generator", "A type of class"],
                    correctAnswer: 1,
                    explanation: "Generators are functions that return an iterator, yielding one item at a time."
                }
            ]
        }
    },
    java: {
        title: "Java Programming",
        icon: "java",
        color: "#f89820",
        levels: {
            beginner: [
                {
                    id: 1,
                    question: "What is the correct syntax to output 'Hello World' in Java?",
                    options: ["print('Hello World');", "System.out.println('Hello World');", "Console.Write('Hello World');", "echo 'Hello World';"],
                    correctAnswer: 1,
                    explanation: "System.out.println() is the standard way to print output in Java."
                },
                {
                    id: 2,
                    question: "Which keyword is used to create a class?",
                    options: ["class", "Class", "new", "create"],
                    correctAnswer: 0,
                    explanation: "The 'class' keyword is used to define a new class."
                },
                {
                    id: 3,
                    question: "Which data type is used to create a variable that should store text?",
                    options: ["String", "txt", "char[]", "Chars"],
                    correctAnswer: 0,
                    explanation: "String is used for text in Java."
                },
                {
                    id: 4,
                    question: "How do you create a variable with the numeric value 5?",
                    options: ["num x = 5;", "float x = 5;", "int x = 5;", "x = 5;"],
                    correctAnswer: 2,
                    explanation: "int is used for integers."
                },
                {
                    id: 5,
                    question: "How do you call a method in Java?",
                    options: ["methodName[];", "methodName();", "(methodName);", ".methodName;"],
                    correctAnswer: 1,
                    explanation: "Methods are called using parentheses ()."
                }
            ],
            average: [
                {
                    id: 1,
                    question: "What is the parent class of all classes in Java?",
                    options: ["Main", "Object", "Class", "Super"],
                    correctAnswer: 1,
                    explanation: "The Object class is the root of the class hierarchy."
                },
                {
                    id: 2,
                    question: "Which collection stores unique elements?",
                    options: ["List", "Map", "Set", "Array"],
                    correctAnswer: 2,
                    explanation: "A Set is a collection that contains no duplicate elements."
                },
                {
                    id: 3,
                    question: "Which keyword is used for inheritance in Java?",
                    options: ["inherits", "extends", "implements", "super"],
                    correctAnswer: 1,
                    explanation: "The 'extends' keyword is used for class inheritance."
                },
                {
                    id: 4,
                    question: "What is an Interface in Java?",
                    options: ["A concrete class", "A blueprint for a class", "A method type", "A variable"],
                    correctAnswer: 1,
                    explanation: "An interface is a abstract type that is used to specify a behavior that classes must implement."
                },
                {
                    id: 5,
                    question: "What is the use of the 'final' keyword?",
                    options: ["To end a loop", "To make a variable/method constant", "To finish a program", "To delete an object"],
                    correctAnswer: 1,
                    explanation: "Final prevents a variable from being changed, a method from being overridden, or a class from being inherited."
                }
            ],
            tough: [
                {
                    id: 1,
                    question: "What is 'reflection' in Java?",
                    options: ["A graphics library", "Examining/modifying runtime behavior", "A memory management technique", "A multi-threading tool"],
                    correctAnswer: 1,
                    explanation: "Reflection allows code to inspect other code in the same system at runtime."
                },
                {
                    id: 2,
                    question: "What is JVM (Java Virtual Machine)?",
                    options: ["A compiler", "A runtime environment", "A database", "A web server"],
                    correctAnswer: 1,
                    explanation: "JVM executes Java bytecode and provides an environment for Java programs."
                },
                {
                    id: 3,
                    question: "What is the purpose of 'volatile' keyword?",
                    options: ["Speed up memory access", "Ensure visibility of changes to variables across threads", "Make a variable immutable", "Prevent garbage collection"],
                    correctAnswer: 1,
                    explanation: "Volatile guarantees that changes to a variable are always visible to other threads."
                },
                {
                    id: 4,
                    question: "What is a 'deadlock' in multi-threading?",
                    options: ["A finished thread", "A state where threads wait for each other infinitely", "A crashed program", "A memory leak"],
                    correctAnswer: 1,
                    explanation: "Deadlock occurs when two or more threads are blocked forever, each waiting for the other to release a resource."
                },
                {
                    id: 5,
                    question: "What is the Garbage Collector?",
                    options: ["Deletes unused files", "Reclaims unused memory automatically", "Clears the console", "None"],
                    correctAnswer: 1,
                    explanation: "Java's GC automatically handles memory management by removing objects that are no longer reachable."
                }
            ]
        }
    },
    c: {
        title: "C Programming",
        icon: "c",
        color: "#283593",
        levels: {
            beginner: [
                { id: 1, question: "Which function prints formatted text to stdout using specifiers such as %d and %s?", options: ["scanf", "printf", "fread", "perror"], correctAnswer: 1, explanation: "printf writes formatted output to the standard output stream." },
                { id: 2, question: "Which function reads formatted input from stdin according to a format string?", options: ["gets", "scanf", "fgets", "strcpy"], correctAnswer: 1, explanation: "scanf parses stdin using conversion specifiers in the format string." },
                { id: 3, question: "Which function writes a single character to stdout?", options: ["putc", "putchar", "puts", "ungetc"], correctAnswer: 1, explanation: "putchar writes one character to the standard output stream." },
                { id: 4, question: "Which function reads the next character from stdin (as an unsigned char converted to int, or EOF)?", options: ["puts", "getchar", "fopen", "sprintf"], correctAnswer: 1, explanation: "getchar reads a single character from the standard input stream." },
                { id: 5, question: "What does sizeof(int) evaluate to?", options: ["Always 4", "The size in bytes of int on the implementation", "The value stored in an int", "The number of bits only"], correctAnswer: 1, explanation: "sizeof yields the size in bytes of a type or expression for the current implementation." },
                { id: 6, question: "Which header declares printf and scanf?", options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<ctype.h>"], correctAnswer: 1, explanation: "Standard I/O declarations live in <stdio.h>." },
                { id: 7, question: "Which macro is commonly used for successful program termination from stdlib.h?", options: ["EXIT_FAIL", "EXIT_SUCCESS", "OK_EXIT", "END_MAIN"], correctAnswer: 1, explanation: "EXIT_SUCCESS is the portable macro for normal termination status." },
                { id: 8, question: "Which function prints a string followed by a newline to stdout?", options: ["puts", "putc", "fscanf", "memcmp"], correctAnswer: 0, explanation: "puts writes a string and appends a newline to stdout." },
                { id: 9, question: "Which function converts a string to a long with base detection and error reporting hooks?", options: ["atoi", "atol", "strtol", "strlen"], correctAnswer: 2, explanation: "strtol parses a string to a long and supports radix and end-pointer error checking." }
            ],
            average: [
                { id: 1, question: "What does malloc return if allocation fails?", options: ["A null pointer", "Zero-filled memory", "A trap representation always", "The stack pointer"], correctAnswer: 0, explanation: "malloc returns NULL on failure; it does not zero memory." },
                { id: 2, question: "How does calloc differ from malloc for the allocated bytes?", options: ["calloc may be faster always", "calloc sets all bytes to zero", "calloc cannot fail", "No difference"], correctAnswer: 1, explanation: "calloc allocates and initializes storage to all-bits-zero." },
                { id: 3, question: "What may realloc do when growing a block?", options: ["Always shrink in place", "Move the block to a new address and free the old conceptually", "Never change the pointer value", "Call free automatically without returning"], correctAnswer: 1, explanation: "realloc may relocate the object; the old pointer must not be used after a successful move." },
                { id: 4, question: "What is the effect of free(NULL) in standard C?", options: ["Undefined behavior", "Crash", "No operation", "Double free"], correctAnswer: 2, explanation: "free(NULL) is explicitly a no-op in the C standard." },
                { id: 5, question: "Why is strcpy considered risky for arbitrary input?", options: ["It always truncates", "It does not check destination bounds", "It allocates memory", "It skips null terminators"], correctAnswer: 1, explanation: "strcpy copies until '\\0' with no length limit, enabling buffer overflows." },
                { id: 6, question: "If two buffers overlap, which function is required for copying between them?", options: ["memcpy", "memmove", "memcmp", "memset"], correctAnswer: 1, explanation: "Overlapping copies are only guaranteed safe with memmove, not memcpy." },
                { id: 7, question: "What does strcmp return when the strings are equal?", options: ["1", "0", "-1", "The length"], correctAnswer: 1, explanation: "strcmp returns 0 when both C strings compare equal." },
                { id: 8, question: "What does strlen compute?", options: ["The allocated buffer size", "The number of characters before '\\0'", "The struct size", "The file size"], correctAnswer: 1, explanation: "strlen counts bytes until but not including the terminating null character." }
            ],
            tough: [
                { id: 1, question: "What does the restrict keyword promise about pointers in C99?", options: ["They point to const data", "They do not alias the same object for the duration", "They are thread-local", "They are always volatile"], correctAnswer: 1, explanation: "restrict tells the compiler the pointed-to object is not accessed via another unqualified pointer in that scope." },
                { id: 2, question: "Is volatile alone sufficient to implement thread-safe mutexes in portable C?", options: ["Yes", "No", "Only on Windows", "Only for float"], correctAnswer: 1, explanation: "volatile does not provide atomicity or ordering guarantees needed for synchronization." },
                { id: 3, question: "What does the offsetof macro yield?", options: ["Size of struct", "Byte offset of a member from struct start", "Alignment of malloc", "Index in an array"], correctAnswer: 1, explanation: "offsetof expands to a byte offset of a member within its structure type." },
                { id: 4, question: "What precondition does bsearch assume about the array?", options: ["It is heap-ordered", "It is sorted by the same comparison relation", "It is unique-only", "It is empty"], correctAnswer: 1, explanation: "bsearch requires the array to be sorted according to the comparator used." },
                { id: 5, question: "Does the C standard require qsort to be a stable sort?", options: ["Yes always", "No", "Only for integers", "Only if comparator returns -1,0,1"], correctAnswer: 1, explanation: "Stability is not required; qsort only guarantees sorted order per the comparator." },
                { id: 6, question: "What linkage does static at file scope give a function in C?", options: ["External by default", "Internal linkage (translation-unit local)", "Inline only", "Weak symbol always"], correctAnswer: 1, explanation: "static on a file-scope function limits its name to the current translation unit." },
                { id: 7, question: "Reading an uninitialized automatic int and using its value is:", options: ["Always zero", "Implementation-defined only", "Undefined behavior", "Well-defined if volatile"], correctAnswer: 2, explanation: "Indeterminate reads of uninitialized automatic storage invoke undefined behavior." },
                { id: 8, question: "What does assert(expression) do when expression is false (with assertions enabled)?", options: ["Returns 0", "Prints and may abort the program", "Ignores silently", "Throws C++ style"], correctAnswer: 1, explanation: "assert typically prints diagnostics and calls abort when the predicate is false." }
            ]
        }
    },
    'c++': {
        title: "C++ Programming",
        icon: "cpp",
        color: "#00599c",
        levels: {
            beginner: [
                {
                    id: 1,
                    question: "Which header file is needed for cout?",
                    options: ["<stdio.h>", "<stdlib.h>", "<iostream>", "<string>"],
                    correctAnswer: 2,
                    explanation: "iostream header is used for input/output operations."
                },
                {
                    id: 2,
                    question: "How do you insert a comment in C++?",
                    options: ["# Comment", "// Comment", "/* Comment", "All of above"],
                    correctAnswer: 1,
                    explanation: "// is used for single-line comments in C++."
                },
                {
                    id: 3,
                    question: "Which data type is used to create a variable that should store text?",
                    options: ["String", "txt", "string", "text"],
                    correctAnswer: 2,
                    explanation: "std::string is used for text in C++."
                },
                {
                    id: 4,
                    question: "How do you create a variable with the numeric value 5?",
                    options: ["num x = 5;", "double x = 5;", "int x = 5;", "x = 5;"],
                    correctAnswer: 2,
                    explanation: "int is used for integers."
                },
                {
                    id: 5,
                    question: "Which operator is used to add together two values?",
                    options: ["*", "&", "+", "/"],
                    correctAnswer: 2,
                    explanation: "+ is the addition operator."
                },
                {
                    id: 6,
                    question: "Which manipulator inserts a newline and flushes the cout buffer?",
                    options: ["ends", "endl", "ws", "dec"],
                    correctAnswer: 1,
                    explanation: "endl inserts a newline character and flushes the stream."
                },
                {
                    id: 7,
                    question: "What does `using namespace std;` do?",
                    options: ["Imports only macros", "Brings std names into scope without std:: prefix", "Deletes unused symbols", "Links object files"], correctAnswer: 1,
                    explanation: "It is a using-directive that makes unqualified lookup consider names from namespace std."
                },
                {
                    id: 8,
                    question: "Which operator allocates a single dynamic object in C++?",
                    options: ["malloc", "new", "alloca", "reserve"],
                    correctAnswer: 1,
                    explanation: "new allocates storage for an object and runs constructors for class types."
                },
                {
                    id: 9,
                    question: "Which form should be used to release an array allocated with `new T[n]`?",
                    options: ["delete", "delete[]", "free", "dispose"],
                    correctAnswer: 1,
                    explanation: "delete[] matches array allocation from new[] and runs destructors for each element."
                },
                {
                    id: 10,
                    question: "What is the default access level for members of a `class`?",
                    options: ["public", "protected", "private", "internal"],
                    correctAnswer: 2,
                    explanation: "Class members are private by default in C++."
                },
                {
                    id: 11,
                    question: "Which keyword marks a member function that does not modify logical object state?",
                    options: ["static", "inline", "const after the parameter list", "virtual only"],
                    correctAnswer: 2,
                    explanation: "A const member function promises not to modify *this for users of const objects."
                },
                {
                    id: 12,
                    question: "Which header is the usual place for std::string?",
                    options: ["<cstring>", "<string>", "<strings>", "<strstream>"], correctAnswer: 1,
                    explanation: "std::string is declared in the <string> header."
                },
                {
                    id: 13,
                    question: "What does `std::cin >> x` skip by default before reading?",
                    options: ["Nothing", "Leading whitespace", "Only newlines", "Comments"], correctAnswer: 1,
                    explanation: "Formatted extraction skips leading whitespace by default."
                }
            ],
            average: [
                {
                    id: 1,
                    question: "What is a pointer?",
                    options: ["A variable that stores memory address", "A loop type", "A class", "None"],
                    correctAnswer: 0,
                    explanation: "Pointers store the memory address of another variable."
                },
                {
                    id: 2,
                    question: "What is a reference in C++?",
                    options: ["An alias for a variable", "A copy of a variable", "A pointer", "An object"],
                    correctAnswer: 0,
                    explanation: "A reference is another name for an existing variable."
                },
                {
                    id: 3,
                    question: "What is the use of 'virtual' keyword in C++?",
                    options: ["Speed up code", "Support polymorphism", "Make a variable private", "None"],
                    correctAnswer: 1,
                    explanation: "Virtual functions allow a derived class to override methods from a base class."
                },
                {
                    id: 4,
                    question: "What is 'this' pointer?",
                    options: ["A pointer to the current object", "A global variable", "A static pointer", "None"],
                    correctAnswer: 0,
                    explanation: "'this' is a constant pointer that holds the memory address of the current object."
                },
                {
                    id: 5,
                    question: "What is a Destructor?",
                    options: ["A function that creates an object", "A function that deletes an object", "A function that copies an object", "None"],
                    correctAnswer: 1,
                    explanation: "A destructor is called when an object goes out of scope or is deleted."
                },
                {
                    id: 6,
                    question: "What does std::vector::push_back do?",
                    options: ["Removes the last element", "Appends an element to the end", "Sorts the vector", "Clears memory without destroying"],
                    correctAnswer: 1,
                    explanation: "push_back appends a new element to the end, growing the sequence as needed."
                },
                {
                    id: 7,
                    question: "Compared to std::unordered_map, what does std::map guarantee about key order?",
                    options: ["No ordering", "Sorted order by key using the comparator", "Random shuffle each access", "Insertion order only"], correctAnswer: 1,
                    explanation: "std::map is an ordered associative container sorted by the key comparison."
                },
                {
                    id: 8,
                    question: "What does marking a single-argument constructor `explicit` prevent?",
                    options: ["Inheritance", "Implicit conversions from that argument type", "Virtual dispatch", "Move semantics"], correctAnswer: 1,
                    explanation: "explicit disables implicit conversion construction from the parameter type."
                },
                {
                    id: 9,
                    question: "What is nullptr in C++11?",
                    options: ["A macro equal to 0", "A null pointer literal of type std::nullptr_t", "A keyword for volatile pointers", "A smart pointer"], correctAnswer: 1,
                    explanation: "nullptr is a pointer literal with its own type that converts to any pointer type."
                },
                {
                    id: 10,
                    question: "What does the `override` contextual keyword document?",
                    options: ["A final class", "That a virtual function intends to override a base virtual", "That a function is noexcept", "That a template is exported"], correctAnswer: 1,
                    explanation: "override makes overriding intent explicit and ill-formed if no base virtual matches."
                },
                {
                    id: 11,
                    question: "The Rule of Five adds which two operations beyond the Rule of Three?",
                    options: ["Move constructor and move assignment", "Swap and clone", "Hash and compare", "Lock and unlock"], correctAnswer: 0,
                    explanation: "Move constructor and move assignment join destructor, copy ctor, and copy assign for resource types."
                },
                {
                    id: 12,
                    question: "Can std::unique_ptr be copied?",
                    options: ["Yes, always", "No, only moved", "Yes, if T is trivial", "Yes, with shared_ptr only"], correctAnswer: 1,
                    explanation: "unique_ptr is move-only; copy operations are deleted."
                },
                {
                    id: 13,
                    question: "What does `auto x = expr;` typically do in C++11?",
                    options: ["Forces int", "Deduces the type of x from expr", "Always makes a pointer", "Disables templates"], correctAnswer: 1,
                    explanation: "auto performs type deduction from the initializer."
                },
                {
                    id: 14,
                    question: "Which cast is the safest first choice for numeric conversions like double to int?",
                    options: ["reinterpret_cast", "static_cast", "const_cast", "C-style only"], correctAnswer: 1,
                    explanation: "static_cast expresses well-known conversions checked at compile time where possible."
                }
            ],
            tough: [
                {
                    id: 1,
                    question: "What is the rule of three?",
                    options: ["Destructor, Copy Constructor, Copy Assignment", "Public, Private, Protected", "Compile, Link, Run", "None"],
                    correctAnswer: 0,
                    explanation: "If a class needs a destructor, it likely needs a copy constructor and copy assignment operator."
                },
                {
                    id: 2,
                    question: "What is RAII?",
                    options: ["Resource Acquisition Is Initialization", "Random Access Input Initialization", "Read All Important Information", "None"],
                    correctAnswer: 0,
                    explanation: "RAII is a programming idiom where resource management is tied to object lifetime."
                },
                {
                    id: 3,
                    question: "What are templates in C++?",
                    options: ["Pre-designed UIs", "Generic programming tool", "Debugging framework", "None"],
                    correctAnswer: 1,
                    explanation: "Templates allow writing code that works with different data types without rewriting it."
                },
                {
                    id: 4,
                    question: "What is the difference between struct and class in C++?",
                    options: ["No difference", "Default access modifier (public for struct, private for class)", "Structs cannot have methods", "None"],
                    correctAnswer: 1,
                    explanation: "Members of a struct are public by default, while members of a class are private by default."
                },
                {
                    id: 5,
                    question: "What is std::move?",
                    options: ["Moves a file", "Enables move semantics", "Copies a variable", "None"],
                    correctAnswer: 1,
                    explanation: "std::move is used to indicate that an object can be 'moved' from, avoiding expensive copies."
                },
                {
                    id: 6,
                    question: "What does SFINAE refer to in template metaprogramming?",
                    options: ["Slow functions are not allowed", "Substitution Failure Is Not An Error", "Static final inline analysis", "Single file includes no aliases"], correctAnswer: 1,
                    explanation: "Invalid template substitutions are ignored during overload resolution instead of hard errors."
                },
                {
                    id: 7,
                    question: "What pattern is the Curiously Recurring Template Pattern (CRTP)?",
                    options: ["A virtual base class for all widgets", "A derived class inherits a base templated on the derived type", "A mutex wrapper", "A constexpr random generator"], correctAnswer: 1,
                    explanation: "CRTP uses static polymorphism by inheriting from a template instantiated with the derived class."
                },
                {
                    id: 8,
                    question: "What does constexpr on a function promise (C++11/14 sense)?",
                    options: ["It must throw", "It may be evaluated at compile time if used in constant contexts", "It cannot recurse", "It disables inlining"], correctAnswer: 1,
                    explanation: "constexpr functions can participate in constant evaluation when arguments are constant expressions."
                },
                {
                    id: 9,
                    question: "What does std::optional<T> model?",
                    options: ["A pointer that never nulls", "A value that may or may not be present", "A thread-local T", "A vector of size 1"], correctAnswer: 1,
                    explanation: "optional represents either a contained value or an empty state."
                },
                {
                    id: 10,
                    question: "What is Argument-Dependent Lookup (ADL)?",
                    options: ["Only macros expand", "Overload resolution also searches namespaces associated with argument types", "Templates must be exported", "Lambda capture rules"], correctAnswer: 1,
                    explanation: "ADL brings associated namespaces of function arguments into consideration for unqualified calls."
                },
                {
                    id: 11,
                    question: "Reading an uninitialized automatic `int` and branching on it is typically:",
                    options: ["Well-defined zero", "Implementation-defined only", "Undefined behavior", "Safe with -O0"], correctAnswer: 2,
                    explanation: "Using an indeterminate automatic variable value is undefined behavior."
                },
                {
                    id: 12,
                    question: "What is std::variant?",
                    options: ["A discriminated union of alternatives", "A vector of void*", "A tuple of references only", "A thread pool"], correctAnswer: 0,
                    explanation: "variant is a type-safe sum type holding one of several alternatives."
                },
                {
                    id: 13,
                    question: "Why mark move operations noexcept when designing containers like std::vector?",
                    options: ["To forbid exceptions in destructors", "So strong exception safety can use move on reallocation when safe", "To disable RTTI", "To make them private"], correctAnswer: 1,
                    explanation: "noexcept move operations allow containers to prefer moves during reallocation under exception safety guarantees."
                }
            ],
        }
    },
    html: {
        title: "HTML & Web Development",
        icon: "html",
        color: "#ed8936",
        levels: {
            beginner: [
                {
                    id: 1,
                    question: "What does HTML stand for?",
                    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                    correctAnswer: 0,
                    explanation: "HTML stands for Hyper Text Markup Language."
                },
                {
                    id: 2,
                    question: "Choose the correct HTML element for the largest heading:",
                    options: ["<heading>", "<h6>", "<head>", "<h1>"],
                    correctAnswer: 3,
                    explanation: "<h1> is the standard tag for the most important heading."
                },
                {
                    id: 3,
                    question: "What is the correct HTML element for inserting a line break?",
                    options: ["<lb>", "<br>", "<break>", "<hr>"],
                    correctAnswer: 1,
                    explanation: "<br> inserts a single line break."
                },
                {
                    id: 4,
                    question: "What is the correct HTML for creating a hyperlink?",
                    options: ["<a href='url'>Link</a>", "<a>url</a>", "<link href='url'>", "<a url='url'>"],
                    correctAnswer: 0,
                    explanation: "The <a> tag with href attribute is used for links."
                },
                {
                    id: 5,
                    question: "Which character is used to indicate an end tag?",
                    options: ["/", "<", "*", "^"],
                    correctAnswer: 0,
                    explanation: "Forward slash / is used in closing tags (e.g., </h1>)."
                }
            ],
            average: [
                {
                    id: 1,
                    question: "Which attribute is used to provide an alternate text for an image?",
                    options: ["title", "alt", "src", "href"],
                    correctAnswer: 1,
                    explanation: "The alt attribute specifies an alternate text for an image if it cannot be displayed."
                },
                {
                    id: 2,
                    question: "Which HTML element is used to define important text?",
                    options: ["<important>", "<strong>", "<i>", "<mark>"],
                    correctAnswer: 1,
                    explanation: "<strong> is used to define text with strong importance."
                },
                {
                    id: 3,
                    question: "How can you make a numbered list?",
                    options: ["<ul>", "<list>", "<ol>", "<dl>"],
                    correctAnswer: 2,
                    explanation: "<ol> stands for Ordered List, which displays numbers."
                },
                {
                    id: 4,
                    question: "What is the correct HTML for making a checkbox?",
                    options: ["<checkbox>", "<input type='checkbox'>", "<check>", "<input type='check'>"],
                    correctAnswer: 1,
                    explanation: "<input type='checkbox'> creates a checkbox."
                },
                {
                    id: 5,
                    question: "Which HTML element is used to specify a footer for a document or section?",
                    options: ["<bottom>", "<footer>", "<section>", "<aside>"],
                    correctAnswer: 1,
                    explanation: "The <footer> tag defines a footer for a document/section."
                }
            ],
            tough: [
                {
                    id: 1,
                    question: "What is the purpose of the <canvas> tag?",
                    options: ["To display database records", "To draw graphics via scripting", "To play video", "To format text"],
                    correctAnswer: 1,
                    explanation: "<canvas> is used to draw graphics, on the fly, via scripting (usually JavaScript)."
                },
                {
                    id: 2,
                    question: "What does semantic HTML mean?",
                    options: ["HTML with a lot of CSS", "HTML that reflects the meaning of its content", "HTML that uses divs for everything", "HTML that is optimized for speed"],
                    correctAnswer: 1,
                    explanation: "Semantic HTML uses tags that explain the meaning of the content (like <article>, <nav>, <main>)."
                },
                {
                    id: 3,
                    question: "Which tag is used for an SVG image?",
                    options: ["<img>", "<svg>", "<vector>", "<graphics>"],
                    correctAnswer: 1,
                    explanation: "The <svg> tag is used to embed Scalable Vector Graphics."
                },
                {
                    id: 4,
                    question: "What is the difference between <div> and <span>?",
                    options: ["Div is block, span is inline", "Span is block, div is inline", "Both are block", "Both are inline"],
                    correctAnswer: 0,
                    explanation: "<div> is a block-level container, whereas <span> is an inline container."
                },
                {
                    id: 5,
                    question: "What is a 'void element' in HTML?",
                    options: ["An element with no content or closing tag", "An empty string", "A hidden element", "An element that causes an error"],
                    correctAnswer: 0,
                    explanation: "Void elements (like <img>, <br>, <hr>) do not have closing tags and cannot contain content."
                }
            ]
        }
    },
    javascript: {
        title: "JavaScript Basics",
        icon: "javascript",
        color: "#f6e05e",
        levels: {
            beginner: [
                { id: 1, question: "How do you declare a variable?", options: ["var/let/const", "int/str", "dim", "val"], correctAnswer: 0, explanation: "JavaScript uses var, let, or const keywords." },
                { id: 2, question: "Inside which HTML element do we put the JavaScript?", options: ["<js>", "<scripting>", "<script>", "<javascript>"], correctAnswer: 2, explanation: "The <script> tag is used to embed JS." },
                { id: 3, question: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"], correctAnswer: 2, explanation: "The alert() function shows a popup." },
                { id: 4, question: "How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "None"], correctAnswer: 0, explanation: "Use the 'function' keyword followed by the name." },
                { id: 5, question: "How to write an IF statement in JavaScript?", options: ["if i = 5 then", "if (i == 5)", "if i == 5 then", "if i = 5"], correctAnswer: 1, explanation: "Standard JS if syntax uses parentheses." }
            ],
            average: [
                { id: 1, question: "What is a closure?", options: ["Function w/ lexical scope", "Loop", "Object", "Error"], correctAnswer: 0, explanation: "A closure gives access to an outer function's scope from an inner function." },
                { id: 2, question: "How do you add an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: 0, explanation: "push() adds to the end, whereas unshift() adds to the beginning." },
                { id: 3, question: "What is the output of '2' + 2?", options: ["4", "22", "NaN", "Error"], correctAnswer: 1, explanation: "JS performs concatenation when one operand is a string." },
                { id: 4, question: "Which operator is used to compare both value and type?", options: ["==", "=", "===", "!=="], correctAnswer: 2, explanation: "=== checks for strict equality." },
                { id: 5, question: "What is 'NaN'?", options: ["Null and None", "Not a Number", "Not a Name", "None of above"], correctAnswer: 1, explanation: "NaN represents a value that is not a valid number." }
            ],
            tough: [
                { id: 1, question: "What is the Event Loop?", options: ["Handles async", "Draws UI", "Compiles code", "None"], correctAnswer: 0, explanation: "The event loop coordinates the execution of code, collecting and processing events." },
                { id: 2, question: "What is 'hoisting'?", options: ["Lifting weights", "Moving declarations to the top", "Deleting variables", "None"], correctAnswer: 1, explanation: "Variable and function declarations are moved to the top of their scope during compilation." },
                { id: 3, question: "What is a Promise?", options: ["A guarantee", "An object representing future completion of async task", "A function", "None"], correctAnswer: 1, explanation: "Promises represent values that may be available now, later, or never." },
                { id: 4, question: "What is the difference between 'call' and 'apply'?", options: ["No difference", "Apply takes arguments as array, Call takes them individually", "Call is faster", "None"], correctAnswer: 1, explanation: "Both change 'this', but they differ in how they handle additional arguments." },
                { id: 5, question: "What are 'Generators' in JS?", options: ["Functions that can be paused and resumed", "Random number functions", "Class creators", "None"], correctAnswer: 0, explanation: "Defined with function*, they return an iterator and can yield multiple values." }
            ]
        }
    },
    css: {
        title: "CSS Styles",
        icon: "css",
        color: "#30a9dc",
        levels: {
            beginner: [
                { id: 1, question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets", "Computer Style Sheets"], correctAnswer: 0, explanation: "CSS stands for Cascading Style Sheets." },
                { id: 2, question: "Where in an HTML document is the correct place to refer to an external style sheet?", options: ["In the <body> section", "At the end of the document", "In the <head> section", "In the <title> section"], correctAnswer: 2, explanation: "Link tags belong in the <head>." },
                { id: 3, question: "Which HTML tag is used to define an internal style sheet?", options: ["<css>", "<script>", "<style>", "<link>"], correctAnswer: 2, explanation: "Use the <style> tag for internal CSS." },
                { id: 4, question: "Which HTML attribute is used to define inline styles?", options: ["class", "styles", "style", "font"], correctAnswer: 2, explanation: "The style attribute is used for inline styles." },
                { id: 5, question: "Which is the correct CSS syntax?", options: ["{body:color=black;}", "body {color: black;}", "body:color=black;", "{}body:color=black"], correctAnswer: 1, explanation: "Selector { property: value; } is the correct syntax." }
            ],
            average: [
                { id: 1, question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo", "*demo"], correctAnswer: 0, explanation: "# is for ID, . is for class." },
                { id: 2, question: "How do you select elements with class name 'test'?", options: ["#test", ".test", "test", "*test"], correctAnswer: 1, explanation: "Use a dot . for class selectors." },
                { id: 3, question: "What is the default value of the position property?", options: ["relative", "fixed", "absolute", "static"], correctAnswer: 3, explanation: "static is the default position value." },
                { id: 4, question: "Which property is used to change the background color?", options: ["color", "bgcolor", "background-color", "style"], correctAnswer: 2, explanation: "background-color changes the element's background." },
                { id: 5, question: "How do you make the text bold?", options: ["font:bold;", "style:bold;", "font-weight:bold;", "text-decoration:bold;"], correctAnswer: 2, explanation: "font-weight: bold makes text thicker." }
            ],
            tough: [
                { id: 1, question: "What is the CSS Box Model?", options: ["A layout model with margin, border, padding, and content", "A tool for fixing bugs", "A database system", "None"], correctAnswer: 0, explanation: "It describes the rectangular boxes generated for elements in the document tree." },
                { id: 2, question: "What is Flexbox?", options: ["A muscle exercise", "A layout module for 1D designs", "A flex-only library", "None"], correctAnswer: 1, explanation: "Flexbox provides an efficient way to layout, align and distribute space among items." },
                { id: 3, question: "What is CSS Grid?", options: ["A 2D layout system", "A 1D layout system", "A table system", "None"], correctAnswer: 0, explanation: "Grid is a powerful 2D layout system for the web." },
                { id: 4, question: "What does 'z-index' do?", options: ["Scales objects", "Changes stacking order of elements", "Rotates objects", "None"], correctAnswer: 1, explanation: "Z-index controls the vertical stacking of elements that overlap." },
                { id: 5, question: "What is 'specificity' in CSS?", options: ["Speed of loading", "The priority given to CSS rules", "The length of CSS file", "None"], correctAnswer: 1, explanation: "Specificity determines which CSS rules are applied when multiple rules match." }
            ]
        }
    },
    react: {
        title: "React Framework",
        icon: "react",
        color: "#61dafb",
        levels: {
            beginner: [
                { id: 1, question: "What is React?", options: ["Library", "Framework", "Database", "OS"], correctAnswer: 0, explanation: "React is a JavaScript library for building user interfaces." },
                { id: 2, question: "What is JSX?", options: ["A CSS tool", "JavaScript XML", "A database language", "A server type"], correctAnswer: 1, explanation: "JSX allows writing HTML-like code inside JavaScript." },
                { id: 3, question: "How many elements can a React component return?", options: ["Only one", "Infinite", "Exactly two", "None"], correctAnswer: 0, explanation: "A component must return a single root element (or Fragment)." },
                { id: 4, question: "What are 'props'?", options: ["Proper objects", "Properties passed to components", "Prototypal inheritance", "None"], correctAnswer: 1, explanation: "Props are used to pass data from parent to child components." },
                { id: 5, question: "Which hook is used for state?", options: ["useEffect", "useContext", "useState", "useReducer"], correctAnswer: 2, explanation: "useState adds local state to functional components." }
            ],
            average: [
                { id: 1, question: "useEffect usage?", options: ["State management", "Side effects", "Routing", "Styling"], correctAnswer: 1, explanation: "useEffect handles side effects like fetching data or subscriptions." },
                { id: 2, question: "What is the 'key' prop used for?", options: ["Security", "Identifying items in a list", "Styling", "None"], correctAnswer: 1, explanation: "Keys help React identify which items have changed, been added or removed." },
                { id: 3, question: "What is 'lifting state up'?", options: ["Moving state to a higher ancestor", "Deleting state", "Using global state only", "None"], correctAnswer: 0, explanation: "Moving state to the closest common ancestor to share it between components." },
                { id: 4, question: "What is React Fragment?", options: ["A broken component", "A way to group multiple children without adding extra nodes to DOM", "A styling tool", "None"], correctAnswer: 1, explanation: "Fragments allow returning multiple elements without adding a <div>." },
                { id: 5, question: "What is the Virtual DOM?", options: ["A direct copy of DOM", "A lightweight representation of actual DOM", "A database", "None"], correctAnswer: 1, explanation: "React uses a Virtual DOM to optimize updates to the real DOM." }
            ],
            tough: [
                { id: 1, question: "Custom Hook prefix?", options: ["get", "set", "use", "make"], correctAnswer: 2, explanation: "Custom hooks must start with 'use' to follow React rules." },
                { id: 2, question: "What is React.memo?", options: ["A way to store data", "A HOC to optimize performance of functional components", "A memory manager", "None"], correctAnswer: 1, explanation: "It prevents unnecessary re-renders when props haven't changed." },
                { id: 3, question: "What is 'useCallback'?", options: ["A way to call functions", "Returns a memoized version of a callback", "A networking hook", "None"], correctAnswer: 1, explanation: "It returns a memoized callback function that only changes if dependencies change." },
                { id: 4, question: "What is the purpose of 'useContext'?", options: ["To share state globally without props drilling", "To use external libraries", "To style components", "None"], correctAnswer: 0, explanation: "Context provides a way to pass data through the component tree without prop drilling." },
                { id: 5, question: "What is Reconciliation?", options: ["The process of merging files", "The algorithm React uses to diff OMT trees", "A database sync", "None"], correctAnswer: 1, explanation: "Reconciliation is the process React uses to update the DOM based on Virtual DOM changes." }
            ]
        }
    },
    sql: {
        title: "SQL & Databases",
        icon: "sql",
        color: "#4a5568",
        levels: {
            beginner: [
                { id: 1, question: "Which command is used to select data?", options: ["GET", "FETCH", "SELECT", "EXTRACT"], correctAnswer: 2, explanation: "SELECT retrieves data from a database." },
                { id: 2, question: "What does SQL stand for?", options: ["Strong Query Language", "Structured Query Language", "Simple Query Language", "None"], correctAnswer: 1, explanation: "SQL stands for Structured Query Language." },
                { id: 3, question: "Which statement is used to update data?", options: ["SAVE", "MODIFY", "UPDATE", "CHANGE"], correctAnswer: 2, explanation: "UPDATE modifies existing records." },
                { id: 4, question: "Which statement is used to delete data?", options: ["REMOVE", "DELETE", "DROP", "TRUNCATE"], correctAnswer: 1, explanation: "DELETE removes rows from a table." },
                { id: 5, question: "Which statement is used to insert new data?", options: ["ADD", "INSERT INTO", "NEW", "CREATE"], correctAnswer: 1, explanation: "INSERT INTO adds new records." }
            ],
            average: [
                { id: 1, question: "Which JOIN returns all records when there is a match in either table?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correctAnswer: 3, explanation: "FULL JOIN returns all records from both tables." },
                { id: 2, question: "Which operator is used to search for a specified pattern?", options: ["SEARCH", "LIKE", "MATCH", "FIND"], correctAnswer: 1, explanation: "LIKE is used in a WHERE clause for pattern matching." },
                { id: 3, question: "Which statement is used to sort the result-set?", options: ["SORT BY", "ORDER BY", "ALIGN BY", "GROUP BY"], correctAnswer: 1, explanation: "ORDER BY sorts the results ascending or descending." },
                { id: 4, question: "What is a PRIMARY KEY?", options: ["A secret code", "A unique identifier for a record", "A password", "None"], correctAnswer: 1, explanation: "Primary key uniquely identifies each record in a table." },
                { id: 5, question: "What does the GROUP BY statement do?", options: ["Sorts data", "Groups rows that have the same values into summary rows", "Deletes duplicates", "None"], correctAnswer: 1, explanation: "GROUP BY is often used with aggregate functions." }
            ],
            tough: [
                { id: 1, question: "ACID property stands for?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Internal, Data", "Auto, Class, Import, Delete", "None"], correctAnswer: 0, explanation: "ACID ensures reliable database transactions." },
                { id: 2, question: "What is a 'transaction' in SQL?", options: ["A payment", "A single unit of work containing multiple steps", "A data transfer", "None"], correctAnswer: 1, explanation: "Transactions ensure all or nothing execution of a group of commands." },
                { id: 3, question: "What is a FOREIGN KEY?", options: ["A key from another country", "A field that refers to Primary Key in another table", "A backup key", "None"], correctAnswer: 1, explanation: "Foreign keys link two tables together." },
                { id: 4, question: "Difference between DELETE and TRUNCATE?", options: ["No difference", "Truncate is faster and removes all rows without logging individual deletions", "Delete is faster", "None"], correctAnswer: 1, explanation: "TRUNCATE is a DDL operation and is generally much faster than DELETE." },
                { id: 5, question: "What is an Index in SQL?", options: ["A page number", "A way to speed up data retrieval", "A table header", "None"], correctAnswer: 1, explanation: "Indexes are used to quickly find data without searching every row." }
            ]
        }
    },
    angular: {
        title: "Angular Framework",
        icon: "angular",
        color: "#dd0031",
        levels: {
            beginner: [
                { id: 1, question: "What is Angular?", options: ["A JS library", "A TypeScript-based framework", "A database", "A server"], correctAnswer: 1, explanation: "Angular is a platform and framework for building single-page client applications." },
                { id: 2, question: "Which language is primarily used in Angular?", options: ["Python", "JavaScript", "TypeScript", "Kotlin"], correctAnswer: 2, explanation: "Angular is written in TypeScript." },
                { id: 3, question: "What command creates a new Angular project?", options: ["ng new", "ng create", "ng start", "npm install angular"], correctAnswer: 0, explanation: "The CLI command 'ng new' starts a new project." },
                { id: 4, question: "Which decorator is used for components?", options: ["@Directive", "@Injectable", "@Component", "@NgModule"], correctAnswer: 2, explanation: "@Component identifies a class as an Angular component." },
                { id: 5, question: "How do you bind to a property?", options: ["{{}}", "()", "[]", "[[]]"], correctAnswer: 2, explanation: "Square brackets [] are used for property binding." }
            ],
            average: [
                { id: 1, question: "What is an Angular Module?", options: ["A file", "A container for a cohesive block of code", "A CSS style", "A database table"], correctAnswer: 1, explanation: "NgModules organize an application into cohesive blocks of functionality." },
                { id: 2, question: "What is the purpose of Services?", options: ["To style components", "To share data and logic across components", "To handle routing only", "None"], correctAnswer: 1, explanation: "Services are singleton objects that can be shared across the app." },
                { id: 3, question: "Which hook is called after component initialization?", options: ["ngOnChanges", "ngOnInit", "ngDoCheck", "ngOnDestroy"], correctAnswer: 1, explanation: "ngOnInit is called once after the first ngOnChanges." },
                { id: 4, question: "How do you handle events in Angular?", options: ["[]", "()", "{{}}", "*ngIf"], correctAnswer: 1, explanation: "Parentheses () are used for event binding." },
                { id: 5, question: "What is data binding?", options: ["Connecting UI to data", "Saving to database", "Writing CSS", "None"], correctAnswer: 0, explanation: "Data binding is a core technique that enables communication between a component and the view." }
            ],
            tough: [
                { id: 1, question: "What is RxJS used for?", options: ["Styling", "Reactive programming with observables", "Routing", "Compiling"], correctAnswer: 1, explanation: "Angular uses RxJS for handling asynchronous operations and events." },
                { id: 2, question: "What is AOT compilation?", options: ["Ahead-of-Time compilation", "Always-On Tuning", "Angular Output Template", "None"], correctAnswer: 0, explanation: "AOT compiles your app and libraries during the build process, before the browser downloads it." },
                { id: 3, question: "What is a pure pipe?", options: ["A pipe that doesn't use data", "A pipe that only recalculates when input changes", "A pipe for cleaning data", "None"], correctAnswer: 1, explanation: "Pure pipes are only executed when a pure change to the input value is detected." },
                { id: 4, question: "What is Dependency Injection?", options: ["A security flaw", "A pattern where a class requests dependencies from external sources", "A database tool", "None"], correctAnswer: 1, explanation: "DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself." },
                { id: 5, question: "How do you lazy load a module?", options: ["Using standard imports", "Using loadChildren in routing configuration", "Using @NgModule", "None"], correctAnswer: 1, explanation: "loadChildren allows Angular to load modules only when they are needed." }
            ]
        }
    }
};

// Function to get quiz by topic and level
export const getQuizByTopicAndLevel = (topic, level = 'beginner') => {
    const topicData = quizData[topic];
    if (!topicData) return null;
    const raw = topicData.levels[level] || [];
    /* Stable per-level serial (1..n) for UI keys; source data often repeats id: 1 across levels. */
    const questions = raw.map((q, index) => ({
        ...q,
        id: index + 1,
        serial: index + 1
    }));
    return {
        ...topicData,
        questions
    };
};

/* Legacy support if needed, defaults to beginner */
export const getQuizByTopic = (topic) => getQuizByTopicAndLevel(topic, 'beginner');

export const getAllTopics = () => {
    return Object.keys(quizData).map(key => {
        // Calculate total questions across all levels
        const levels = quizData[key].levels;
        const total = (levels.beginner?.length || 0) + (levels.average?.length || 0) + (levels.tough?.length || 0);
        return {
            id: key,
            title: quizData[key].title,
            icon: quizData[key].icon,
            color: quizData[key].color,
            questionCount: total
        };
    });
};
