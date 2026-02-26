# Project Learning Content Notes

This document contains all the learning data and problems from the project.

## Interview Preparation Problems
File: `/backend/seeders/interview_prep_data.json`

```json
[
    {
        "topic": "javascript",
        "title": "Hello JavaScript",
        "description": "Log 'Hello JavaScript' to the console.",
        "difficulty": 1,
        "tags": [
            "basics",
            "console"
        ],
        "starterCode": "// your code here",
        "solution": "console.log('Hello JavaScript');",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Sum of Two",
        "description": "Find the sum of 5 and 10 and log it.",
        "difficulty": 1,
        "tags": [
            "basics",
            "math"
        ],
        "starterCode": "// your code here",
        "solution": "console.log(5 + 10);",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Array Length",
        "description": "Log the length of array [1, 2, 3, 4, 5].",
        "difficulty": 1,
        "tags": [
            "arrays"
        ],
        "starterCode": "const arr = [1, 2, 3, 4, 5];\n// your code here",
        "solution": "const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.length);",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "String Upper",
        "description": "Convert 'hello' to uppercase and log it.",
        "difficulty": 1,
        "tags": [
            "strings"
        ],
        "starterCode": "const str = 'hello';\n// your code here",
        "solution": "const str = 'hello';\nconsole.log(str.toUpperCase());",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Even Check",
        "description": "Log whether 10 is even using modulo.",
        "difficulty": 1,
        "tags": [
            "math",
            "logic"
        ],
        "starterCode": "// your code here",
        "solution": "console.log(10 % 2 === 0);",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Simple Object",
        "description": "Create an object 'user' with name 'John' and log user.name.",
        "difficulty": 1,
        "tags": [
            "objects"
        ],
        "starterCode": "// your code here",
        "solution": "const user = { name: 'John' };\nconsole.log(user.name);",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Template Literal",
        "description": "Log a greeting 'Hi John' using template literals with variable name = 'John'.",
        "difficulty": 1,
        "tags": [
            "strings"
        ],
        "starterCode": "const name = 'John';\n// your code here",
        "solution": "const name = 'John';\nconsole.log(`Hi ${name}`);",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Type Check",
        "description": "Log the type of 123.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "// your code here",
        "solution": "console.log(typeof 123);",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Array Push",
        "description": "Add 3 to [1, 2] and log the array.",
        "difficulty": 1,
        "tags": [
            "arrays"
        ],
        "starterCode": "const arr = [1, 2];\n// your code here",
        "solution": "const arr = [1, 2];\narr.push(3);\nconsole.log(arr);",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Math Max",
        "description": "Log the maximum of 10 and 20 using Math.max.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "// your code here",
        "solution": "console.log(Math.max(10, 20));",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Python Hello",
        "description": "Print 'Hello Python'.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "# your code here",
        "solution": "print('Hello Python')",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Sum of Numbers",
        "description": "Print the sum of 7 and 8.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "# your code here",
        "solution": "print(7 + 8)",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "List Length",
        "description": "Print the length of list [10, 20, 30].",
        "difficulty": 1,
        "tags": [
            "lists"
        ],
        "starterCode": "my_list = [10, 20, 30]\n# your code here",
        "solution": "my_list = [10, 20, 30]\nprint(len(my_list))",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "String Repeat",
        "description": "Print 'Hi' 3 times using multiplication operator.",
        "difficulty": 1,
        "tags": [
            "strings"
        ],
        "starterCode": "# your code here",
        "solution": "print('Hi' * 3)",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Square Calculation",
        "description": "Print the square of 5.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "# your code here",
        "solution": "print(5 ** 2)",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "List Append",
        "description": "Append 4 to list [1, 2, 3] and print it.",
        "difficulty": 1,
        "tags": [
            "lists"
        ],
        "starterCode": "l = [1, 2, 3]\n# your code here",
        "solution": "l = [1, 2, 3]\nl.append(4)\nprint(l)",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Range Iteration",
        "description": "Print numbers from 0 to 2 using a for loop and range.",
        "difficulty": 1,
        "tags": [
            "loops"
        ],
        "starterCode": "# your code here",
        "solution": "for i in range(3):\n    print(i)",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Dictionary Check",
        "description": "Print the value of key 'a' from {'a': 1, 'b': 2}.",
        "difficulty": 1,
        "tags": [
            "dictionaries"
        ],
        "starterCode": "d = {'a': 1, 'b': 2}\n# your code here",
        "solution": "d = {'a': 1, 'b': 2}\nprint(d['a'])",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Boolean Logic",
        "description": "Print whether 10 is greater than 5 and less than 15.",
        "difficulty": 1,
        "tags": [
            "logic"
        ],
        "starterCode": "# your code here",
        "solution": "print(10 > 5 and 10 < 15)",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "String Split",
        "description": "Split string 'A,B,C' by comma and print the list.",
        "difficulty": 1,
        "tags": [
            "strings"
        ],
        "starterCode": "s = 'A,B,C'\n# your code here",
        "solution": "s = 'A,B,C'\nprint(s.split(','))",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Main Heading",
        "description": "Create an h1 tag with 'Interview Prep'.",
        "difficulty": 1,
        "tags": [
            "basics",
            "tags"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <h1>Interview Prep</h1>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Paragraph and Bold",
        "description": "Create a p tag with some bold text using b tag.",
        "difficulty": 1,
        "tags": [
            "formatting"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <p>This is <b>bold</b> text.</p>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "External Link",
        "description": "Create a link (a tag) to 'https://google.com' with text 'Google'.",
        "difficulty": 1,
        "tags": [
            "links"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <a href=\"https://google.com\">Google</a>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Unordered List",
        "description": "Create an unordered list with items 'HTML', 'CSS', 'JS'.",
        "difficulty": 1,
        "tags": [
            "lists"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JS</li>\n  </ul>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Ordered List",
        "description": "Create an ordered list with 2 items.",
        "difficulty": 1,
        "tags": [
            "lists"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <ol>\n    <li>First</li>\n    <li>Second</li>\n  </ol>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Image Element",
        "description": "Add an img tag with src 'logo.png' and alt 'Logo'.",
        "difficulty": 1,
        "tags": [
            "images"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <img src=\"logo.png\" alt=\"Logo\" />\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Basic Table",
        "description": "Create a table with one row and two cells (td).",
        "difficulty": 1,
        "tags": [
            "tables"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <table>\n    <tr>\n      <td>Cell 1</td>\n      <td>Cell 2</td>\n    </tr>\n  </table>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Input Field",
        "description": "Create a text input and a button labeled 'Submit'.",
        "difficulty": 1,
        "tags": [
            "forms"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <input type=\"text\" />\n  <button>Submit</button>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Div Container",
        "description": "Create a div with a class 'container' and some text inside.",
        "difficulty": 1,
        "tags": [
            "layout"
        ],
        "starterCode": "<!-- code here -->",
        "solution": "<div class=\"container\">Content here</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Semantic Footer",
        "description": "Create a footer tag with a paragraph 'Copyright 2025'.",
        "difficulty": 1,
        "tags": [
            "semantics"
        ],
        "starterCode": "<!-- code here -->",
        "solution": "<footer>\n  <p>Copyright 2025</p>\n</footer>",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Java Hello",
        "description": "Print 'Hello Java'.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello Java\");\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Int Addition",
        "description": "Create two integers a=10, b=20 and print their sum.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n        System.out.println(a + b);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "String Greeting",
        "description": "Create a String 'name' with 'Antigravity' and print 'Hello ' + name.",
        "difficulty": 1,
        "tags": [
            "strings"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        String name = \"Antigravity\";\n        System.out.println(\"Hello \" + name);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Array Sum Simulated",
        "description": "Create an array {1, 2, 3} and print a message 'Array exists'.",
        "difficulty": 1,
        "tags": [
            "arrays"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        System.out.println(\"Array exists\");\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Multiplication",
        "description": "Print result of 5 * 6.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(5 * 6);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Condition Check",
        "description": "Print 'True' if 10 > 5.",
        "difficulty": 1,
        "tags": [
            "logic"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        if (10 > 5) {\n            System.out.println(\"True\");\n        }\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Loop Print",
        "description": "Print 'Loop' once. (Simulated)",
        "difficulty": 1,
        "tags": [
            "loops"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Loop\");\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Variable Update",
        "description": "Create int x=5, add 2 to it, and print x.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        x += 2;\n        System.out.println(x);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Char Variable",
        "description": "Print the character 'A'.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println('A');\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Double Value",
        "description": "Print 3.14.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(3.14);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "CPP Hello",
        "description": "Print 'Hello C++'.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // code here\n    return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello C++\" << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Sum Two",
        "description": "Create int a=5, b=5 and print a+b.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // code here\n    return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 5;\n    cout << a + b << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "If Statement",
        "description": "Print 'Yes' if 10 is equal to 10.",
        "difficulty": 1,
        "tags": [
            "logic"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // code here\n    return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    if (10 == 10) {\n        cout << \"Yes\" << endl;\n    }\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Multiplication",
        "description": "Print 10 * 10.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // code here\n    return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << 10 * 10 << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Subtraction",
        "description": "Print 20 - 5.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // code here\n    return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << 20 - 5 << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "String Output",
        "description": "Print 'Interview'.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // code here\n    return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Interview\" << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Division",
        "description": "Print 100 / 2.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // code here\n    return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << 100 / 2 << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Variable Init",
        "description": "Create int x = 123 and print it.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // code here\n    return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 123;\n    cout << x << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Char Output",
        "description": "Print 'B'.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // code here\n    return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"B\" << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Endl usage",
        "description": "Print 'Line1' then 'Line2' using endl.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // code here\n    return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Line1\" << endl;\n    cout << \"Line2\" << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Interpolation",
        "description": "Display a title variable in the template using interpolation.",
        "difficulty": 1,
        "tags": [
            "interpolation"
        ],
        "starterCode": "@Component({\n  selector: 'app-root',\n  template: `<h1>{{ /* title variable */ }}</h1>`\n})\nexport class AppComponent {\n  title = 'Angular Prep';\n}",
        "solution": "@Component({\n  selector: 'app-root',\n  template: `<h1>{{ title }}</h1>`\n})\nexport class AppComponent {\n  title = 'Angular Prep';\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Click Binding",
        "description": "Bind a button click to a showMessage() method.",
        "difficulty": 1,
        "tags": [
            "events"
        ],
        "starterCode": "@Component({\n  selector: 'app-root',\n  template: `<button /* bind click */>Click</button>`\n})\nexport class AppComponent {\n  showMessage() { console.log('Hi'); }\n}",
        "solution": "@Component({\n  selector: 'app-root',\n  template: `<button (click)=\"showMessage()\">Click</button>`\n})\nexport class AppComponent {\n  showMessage() { console.log('Hi'); }\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "ngIf Directive",
        "description": "Use *ngIf to show a paragraph only if isVisible is true.",
        "difficulty": 1,
        "tags": [
            "directives"
        ],
        "starterCode": "@Component({\n  selector: 'app-root',\n  template: `\n    <p /* add ngIf */>Visible</p>\n  `\n})\nexport class AppComponent {\n  isVisible = true;\n}",
        "solution": "@Component({\n  selector: 'app-root',\n  template: `\n    <p *ngIf=\"isVisible\">Visible</p>\n  `\n})\nexport class AppComponent {\n  isVisible = true;\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "ngFor Directive",
        "description": "Use *ngFor to list items from an 'items' array.",
        "difficulty": 1,
        "tags": [
            "directives"
        ],
        "starterCode": "@Component({\n  selector: 'app-root',\n  template: `\n    <ul>\n      <li /* add ngFor */>{{ item }}</li>\n    </ul>\n  `\n})\nexport class AppComponent {\n  items = ['A', 'B', 'C'];\n}",
        "solution": "@Component({\n  selector: 'app-root',\n  template: `\n    <ul>\n      <li *ngFor=\"let item of items\">{{ item }}</li>\n    </ul>\n  `\n})\nexport class AppComponent {\n  items = ['A', 'B', 'C'];\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Property Binding",
        "description": "Bind the [src] property of an img to an imageUrl variable.",
        "difficulty": 1,
        "tags": [
            "binding"
        ],
        "starterCode": "@Component({\n  selector: 'app-root',\n  template: `<img [src]=\"/* variable */\" />`\n})\nexport class AppComponent {\n  imageUrl = 'logo.png';\n}",
        "solution": "@Component({\n  selector: 'app-root',\n  template: `<img [src]=\"imageUrl\" />`\n})\nexport class AppComponent {\n  imageUrl = 'logo.png';\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Input Binding",
        "description": "Show how to use @Input in a child component (simulated).",
        "difficulty": 1,
        "tags": [
            "input"
        ],
        "starterCode": "@Component({\n  selector: 'app-root',\n  template: `<p>{{ data }}</p>`\n})\nexport class AppComponent {\n  @Input() data: string = '';\n}",
        "solution": "@Component({\n  selector: 'app-root',\n  template: `<p>{{ data }}</p>`\n})\nexport class AppComponent {\n  @Input() data: string = '';\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Style Binding",
        "description": "Bind color style using [style.color].",
        "difficulty": 1,
        "tags": [
            "styling"
        ],
        "starterCode": "@Component({\n  selector: 'app-root',\n  template: `<p [style.color]=\"'red'\">Red Text</p>`\n})\nexport class AppComponent {}",
        "solution": "@Component({\n  selector: 'app-root',\n  template: `<p [style.color]=\"'red'\">Red Text</p>`\n})\nexport class AppComponent {}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Class Binding",
        "description": "Bind a class using [class.active].",
        "difficulty": 1,
        "tags": [
            "styling"
        ],
        "starterCode": "@Component({\n  selector: 'app-root',\n  template: `<div [class.active]=\"true\">Active</div>`\n})\nexport class AppComponent {}",
        "solution": "@Component({\n  selector: 'app-root',\n  template: `<div [class.active]=\"true\">Active</div>`\n})\nexport class AppComponent {}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Constructor Init",
        "description": "Initialize a name variable in the constructor.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "@Component({\n  selector: 'app-root', template: '{{name}}'\n})\nexport class AppComponent {\n  name: string;\n  constructor() {\n    // init name\n  }\n}",
        "solution": "@Component({\n  selector: 'app-root', template: '{{name}}'\n})\nexport class AppComponent {\n  name: string;\n  constructor() {\n    this.name = 'Test';\n  }\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "NgModel Mock",
        "description": "Show syntax for two-way binding [(ngModel)].",
        "difficulty": 1,
        "tags": [
            "binding"
        ],
        "starterCode": "@Component({\n  selector: 'app-root',\n  template: `<input [(ngModel)]=\"name\" />`\n})\nexport class AppComponent {\n  name = '';\n}",
        "solution": "@Component({\n  selector: 'app-root',\n  template: `<input [(ngModel)]=\"name\" />`\n})\nexport class AppComponent {\n  name = '';\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Text Color",
        "description": "Make the text color red for the class 'text-red'.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": ".text-red {\n  /* code here */\n}",
        "solution": ".text-red {\n  color: red;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Center Text",
        "description": "Align text to center for class 'header'.",
        "difficulty": 1,
        "tags": [
            "layout"
        ],
        "starterCode": ".header {\n  /* code here */\n}",
        "solution": ".header {\n  text-align: center;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Background Color",
        "description": "Set background color to blue for class 'box'.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": ".box {\n  /* code here */\n}",
        "solution": ".box {\n  background-color: blue;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Font Size",
        "description": "Set font size to 24px.",
        "difficulty": 1,
        "tags": [
            "typography"
        ],
        "starterCode": "h1 {\n  /* code here */\n}",
        "solution": "h1 {\n  font-size: 24px;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Border",
        "description": "Set a 1px solid black border.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "div {\n  /* code here */\n}",
        "solution": "div {\n  border: 1px solid black;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Margin",
        "description": "Add 20px margin to all sides.",
        "difficulty": 1,
        "tags": [
            "layout"
        ],
        "starterCode": "section {\n  /* code here */\n}",
        "solution": "section {\n  margin: 20px;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Padding",
        "description": "Add 10px padding.",
        "difficulty": 1,
        "tags": [
            "layout"
        ],
        "starterCode": "p {\n  /* code here */\n}",
        "solution": "p {\n  padding: 10px;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Flexbox Row",
        "description": "Set display to flex and flex-direction to row.",
        "difficulty": 1,
        "tags": [
            "flexbox"
        ],
        "starterCode": ".container {\n  /* code here */\n}",
        "solution": ".container {\n  display: flex;\n  flex-direction: row;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Font Weight",
        "description": "Set font weight to bold.",
        "difficulty": 1,
        "tags": [
            "typography"
        ],
        "starterCode": "span {\n  /* code here */\n}",
        "solution": "span {\n  font-weight: bold;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Width and Height",
        "description": "Set width and height to 100px.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": ".square {\n  /* code here */\n}",
        "solution": ".square {\n  width: 100px;\n  height: 100px;\n}",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Select All Customers",
        "description": "Select all columns from the Customers table.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT * FROM Customers",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Select Customer Names",
        "description": "Select only the customer_name column from Customers.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT customer_name FROM Customers",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Filter by City",
        "description": "Select all customers from Mumbai.",
        "difficulty": 1,
        "tags": [
            "where"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT * FROM Customers WHERE city = 'Mumbai'",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Order by Purchases",
        "description": "Select all customers and order them by total_purchases.",
        "difficulty": 1,
        "tags": [
            "order-by"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT * FROM Customers ORDER BY total_purchases",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Count Customers",
        "description": "Find the total number of customers.",
        "difficulty": 1,
        "tags": [
            "count"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT count(*) FROM Customers",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Find High Spending Customers",
        "description": "Select names of customers with total_purchases greater than 50000.",
        "difficulty": 1,
        "tags": [
            "where"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT customer_name FROM Customers WHERE total_purchases > 50000",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Find Specific Item",
        "description": "Select all orders where item is 'Keyboard'.",
        "difficulty": 1,
        "tags": [
            "where"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT * FROM Orders WHERE item = 'Keyboard'",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "High Amount Orders",
        "description": "Select orders with amount greater than 1000.",
        "difficulty": 1,
        "tags": [
            "where"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT * FROM Orders WHERE amount > 1000",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Distinct Cities",
        "description": "List all unique cities from Customers table.",
        "difficulty": 1,
        "tags": [
            "distinct"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT DISTINCT city FROM Customers",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Mumbai Customers",
        "description": "Select customer_name of customers from Mumbai.",
        "difficulty": 1,
        "tags": [
            "where"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT customer_name FROM Customers WHERE city = 'Mumbai'",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Substring Example",
        "description": "Select the first 3 characters of customer_name from the customers table.",
        "difficulty": 1,
        "tags": [
            "string-functions"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT SUBSTRING(customer_name, 1, 3) FROM customers",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Get Current Time",
        "description": "Select the current time using current_time from the customers table.",
        "difficulty": 1,
        "tags": [
            "date-functions"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT current_time FROM customers",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Get Data Status",
        "description": "Use the getdata() function to show the reading status from the customers table.",
        "difficulty": 1,
        "tags": [
            "system-functions"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT getdata() FROM customers",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Array Map",
        "description": "Double each number in [1, 2, 3] using .map() and log the result.",
        "difficulty": 1,
        "tags": [
            "arrays",
            "map"
        ],
        "starterCode": "const arr = [1, 2, 3];\n// your code here",
        "solution": "const arr = [1, 2, 3];\nconsole.log(arr.map(x => x * 2));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Array Filter",
        "description": "Filter even numbers from [1, 2, 3, 4] and log the result.",
        "difficulty": 1,
        "tags": [
            "arrays",
            "filter"
        ],
        "starterCode": "const arr = [1, 2, 3, 4];\n// your code here",
        "solution": "const arr = [1, 2, 3, 4];\nconsole.log(arr.filter(x => x % 2 === 0));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Find Element",
        "description": "Find the first number greater than 10 in [5, 12, 8, 130, 44] and log it.",
        "difficulty": 1,
        "tags": [
            "arrays",
            "find"
        ],
        "starterCode": "const arr = [5, 12, 8, 130, 44];\n// your code here",
        "solution": "const arr = [5, 12, 8, 130, 44];\nconsole.log(arr.find(x => x > 10));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Reduce Sum",
        "description": "Calculate the sum of [1, 2, 3, 4] using .reduce() and log it.",
        "difficulty": 2,
        "tags": [
            "arrays",
            "reduce"
        ],
        "starterCode": "const arr = [1, 2, 3, 4];\n// your code here",
        "solution": "const arr = [1, 2, 3, 4];\nconsole.log(arr.reduce((acc, curr) => acc + curr, 0));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "String Includes",
        "description": "Check if 'hello world' includes 'world' and log the boolean result.",
        "difficulty": 1,
        "tags": [
            "strings"
        ],
        "starterCode": "const s = 'hello world';\n// your code here",
        "solution": "const s = 'hello world';\nconsole.log(s.includes('world'));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Object Keys",
        "description": "Log the keys of object {a: 1, b: 2}.",
        "difficulty": 1,
        "tags": [
            "objects"
        ],
        "starterCode": "const obj = {a: 1, b: 2};\n// your code here",
        "solution": "const obj = {a: 1, b: 2};\nconsole.log(Object.keys(obj));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Math Random",
        "description": "Log a random number between 0 and 1 (simulated).",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "// your code here",
        "solution": "console.log(Math.random());",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "SetTimeout Basic",
        "description": "Log 'Done' after 100ms (simulated).",
        "difficulty": 2,
        "tags": [
            "async"
        ],
        "starterCode": "// your code here",
        "solution": "setTimeout(() => console.log('Done'), 100);",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Arrow function",
        "description": "Create an arrow function sum(a, b) that returns a+b and log sum(10, 5).",
        "difficulty": 1,
        "tags": [
            "functions"
        ],
        "starterCode": "// your code here",
        "solution": "const sum = (a, b) => a + b;\nconsole.log(sum(10, 5));",
        "testCases": []
    },
    {
        "topic": "javascript",
        "title": "Truthy Check",
        "description": "Log the boolean value of an empty string.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "// your code here",
        "solution": "console.log(Boolean(''));",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "List Comprehension",
        "description": "Create a list of squares for 1 to 5 using list comprehension and print it.",
        "difficulty": 2,
        "tags": [
            "lists",
            "comprehension"
        ],
        "starterCode": "# your code here",
        "solution": "print([x**2 for x in range(1, 6)])",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Dict Keys",
        "description": "Print keys of {'x': 1, 'y': 2}.",
        "difficulty": 1,
        "tags": [
            "dictionaries"
        ],
        "starterCode": "d = {'x': 1, 'y': 2}\n# your code here",
        "solution": "d = {'x': 1, 'y': 2}\nprint(d.keys())",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Default Args",
        "description": "Define a function greet(name='User') that prints 'Hello ' + name. Call it without args.",
        "difficulty": 1,
        "tags": [
            "functions"
        ],
        "starterCode": "# your code here",
        "solution": "def greet(name='User'):\n    print('Hello ' + name)\ngreet()",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Simple Class",
        "description": "Create a class Dog with a name attribute. Instantiate and print the name.",
        "difficulty": 2,
        "tags": [
            "oop"
        ],
        "starterCode": "# your code here",
        "solution": "class Dog:\n    def __init__(self, name):\n        self.name = name\nd = Dog('Buddy')\nprint(d.name)",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Exception Handling",
        "description": "Try to divide 1 by 0 and print 'Error' in the except block.",
        "difficulty": 2,
        "tags": [
            "basics"
        ],
        "starterCode": "# your code here",
        "solution": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Error')",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "F-String",
        "description": "Print 'Age: 25' using an f-string with variable age = 25.",
        "difficulty": 1,
        "tags": [
            "strings"
        ],
        "starterCode": "age = 25\n# your code here",
        "solution": "age = 25\nprint(f'Age: {age}')",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Lambda Function",
        "description": "Create a lambda to double a number and print double(10).",
        "difficulty": 2,
        "tags": [
            "functions"
        ],
        "starterCode": "# your code here",
        "solution": "double = lambda x: x * 2\nprint(double(10))",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Zip Usage",
        "description": "Zip [1, 2] and ['a', 'b'] and print the list of tuples.",
        "difficulty": 2,
        "tags": [
            "basics"
        ],
        "starterCode": "# your code here",
        "solution": "print(list(zip([1, 2], ['a', 'b'])))",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Enumerate",
        "description": "Loop through ['a', 'b'] using enumerate and print index, value.",
        "difficulty": 2,
        "tags": [
            "loops"
        ],
        "starterCode": "l = ['a', 'b']\n# your code here",
        "solution": "l = ['a', 'b']\nfor i, v in enumerate(l):\n    print(i, v)",
        "testCases": []
    },
    {
        "topic": "python",
        "title": "Set Operations",
        "description": "Print the intersection of {1, 2} and {2, 3}.",
        "difficulty": 2,
        "tags": [
            "sets"
        ],
        "starterCode": "s1 = {1, 2}\ns2 = {2, 3}\n# your code here",
        "solution": "s1 = {1, 2}\ns2 = {2, 3}\nprint(s1 & s2)",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Blockquote",
        "description": "Create a blockquote with 'To be or not to be'.",
        "difficulty": 1,
        "tags": [
            "tags"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <blockquote>To be or not to be</blockquote>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Checkbox",
        "description": "Create a checkbox input labeled 'Accept Terms'.",
        "difficulty": 1,
        "tags": [
            "forms"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <input type=\"checkbox\" id=\"terms\" />\n  <label for=\"terms\">Accept Terms</label>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Radio Buttons",
        "description": "Create two radio buttons for Gender (Male/Female) with the same name.",
        "difficulty": 1,
        "tags": [
            "forms"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <input type=\"radio\" name=\"gender\" value=\"male\"> Male\n  <input type=\"radio\" name=\"gender\" value=\"female\"> Female\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Selection Menu",
        "description": "Create a select dropdown with options 'A', 'B'.",
        "difficulty": 1,
        "tags": [
            "forms"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <select>\n    <option>A</option>\n    <option>B</option>\n  </select>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Textarea",
        "description": "Create a textarea element.",
        "difficulty": 1,
        "tags": [
            "forms"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <textarea></textarea>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Fieldset",
        "description": "Create a fieldset with a legend 'Personal Info'.",
        "difficulty": 1,
        "tags": [
            "forms"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <fieldset>\n    <legend>Personal Info</legend>\n  </fieldset>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Iframe",
        "description": "Add an iframe with src 'https://example.com'.",
        "difficulty": 2,
        "tags": [
            "embed"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <iframe src=\"https://example.com\"></iframe>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Video Tag",
        "description": "Add a video tag with a source 'movie.mp4'.",
        "difficulty": 2,
        "tags": [
            "media"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <video>\n    <source src=\"movie.mp4\" type=\"video/mp4\">\n  </video>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Audio Element",
        "description": "Add an audio tag with source 'song.mp3'.",
        "difficulty": 2,
        "tags": [
            "media"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <audio src=\"song.mp3\" controls></audio>\n</div>",
        "testCases": []
    },
    {
        "topic": "html",
        "title": "Details Tag",
        "description": "Create a details/summary element.",
        "difficulty": 1,
        "tags": [
            "interactivity"
        ],
        "starterCode": "<div>\n  <!-- code here -->\n</div>",
        "solution": "<div>\n  <details>\n    <summary>Click to show</summary>\n    <p>Hidden content</p>\n  </details>\n</div>",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "While Loop",
        "description": "Print 'Hi' once using a while loop.",
        "difficulty": 1,
        "tags": [
            "loops"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        while(i < 1) {\n            System.out.println(\"Hi\");\n            i++;\n        }\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Switch Statement",
        "description": "Use switch case for int day = 1 and print 'Mon'.",
        "difficulty": 2,
        "tags": [
            "logic"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        int day = 1;\n        // switch code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        int day = 1;\n        switch(day) {\n            case 1: System.out.println(\"Mon\"); break;\n        }\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Method Definition",
        "description": "Define a static method sayHello() that prints 'Hello'. Call it.",
        "difficulty": 2,
        "tags": [
            "methods"
        ],
        "starterCode": "public class Main {\n    // sayHello here\n    public static void main(String[] args) {\n        // call here\n    }\n}",
        "solution": "public class Main {\n    static void sayHello() { System.out.println(\"Hello\"); }\n    public static void main(String[] args) {\n        sayHello();\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Constructor",
        "description": "Create a class Person with name and a constructor. Instantiate it.",
        "difficulty": 2,
        "tags": [
            "oop"
        ],
        "starterCode": "// class Person here\npublic class Main {\n    public static void main(String[] args) {\n        // instantiate here\n    }\n}",
        "solution": "class Person {\n    String name;\n    Person(String n) { name = n; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"John\");\n        System.out.println(p.name);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Math Sqrt",
        "description": "Print the square root of 16.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(Math.sqrt(16));\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "String Concat",
        "description": "Print 'A' + 'B' result.",
        "difficulty": 1,
        "tags": [
            "strings"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"A\" + \"B\");\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Boolean OR",
        "description": "Print result of true || false.",
        "difficulty": 1,
        "tags": [
            "logic"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(true || false);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Type Casting",
        "description": "Cast double 9.5 to int and print it.",
        "difficulty": 2,
        "tags": [
            "basics"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        double d = 9.5;\n        // cast and print\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        double d = 9.5;\n        int i = (int) d;\n        System.out.println(i);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Final Variable",
        "description": "Create a final int PI = 3 and print it.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        final int PI = 3;\n        System.out.println(PI);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "java",
        "title": "Modulo Op",
        "description": "Print 10 % 3.",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // code here\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(10 % 3);\n    }\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "While Loop",
        "description": "Print 'Count' once using while.",
        "difficulty": 1,
        "tags": [
            "loops"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  int i=0; // loop here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int i=0;\n    while(i<1) { cout << \"Count\" << endl; i++; }\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Switch Case",
        "description": "Switch on int x=1, print 'One'.",
        "difficulty": 2,
        "tags": [
            "logic"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  int x=1; // switch here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int x=1;\n    switch(x) { case 1: cout << \"One\" << endl; }\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "CPP Function",
        "description": "Define greet() function and call it.",
        "difficulty": 2,
        "tags": [
            "functions"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\n// function here\nint main() {\n  // call here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nvoid greet() { cout << \"Hi\" << endl; }\nint main() {\n    greet();\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Array Iteration",
        "description": "Iterate over {1, 2} and print them. (Simulated)",
        "difficulty": 2,
        "tags": [
            "arrays"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  int arr[] = {1, 2};\n  // loop\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2};\n    for(int x : arr) cout << x << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "String Concat",
        "description": "Concat 'Hello ' and 'World'.",
        "difficulty": 1,
        "tags": [
            "strings"
        ],
        "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string s1 = \"Hello \", s2 = \"World\";\n  // print concat\n  return 0;\n}",
        "solution": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s1 = \"Hello \", s2 = \"World\";\n    cout << s1 + s2 << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Math Abs",
        "description": "Print abs(-10).",
        "difficulty": 1,
        "tags": [
            "math"
        ],
        "starterCode": "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n  // code here\n  return 0;\n}",
        "solution": "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    cout << abs(-10) << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Logic AND",
        "description": "Print result of (true && true).",
        "difficulty": 1,
        "tags": [
            "logic"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  // code here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    cout << (true && true) << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Logic OR",
        "description": "Print result of (true || false).",
        "difficulty": 1,
        "tags": [
            "logic"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  // code here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    cout << (true || false) << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Float Output",
        "description": "Print 7.5.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  // code here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    cout << 7.5 << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "c++",
        "title": "Const Int",
        "description": "Define const int K=10 and print.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "#include <iostream>\nusing namespace std;\nint main() {\n  // code here\n  return 0;\n}",
        "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    const int K = 10;\n    cout << K << endl;\n    return 0;\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "NgClass demo",
        "description": "Use [ngClass] to apply 'active' class.",
        "difficulty": 2,
        "tags": [
            "directives"
        ],
        "starterCode": "@Component({\n  selector: 'app-root', template: '<div [ngClass]=\"/* ... */\">Test</div>'\n})\nexport class AppComponent {}",
        "solution": "@Component({\n  selector: 'app-root', template: '<div [ngClass]=\"\\'active\\'\">Test</div>'\n})\nexport class AppComponent {}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "NgStyle demo",
        "description": "Use [ngStyle] to set color red.",
        "difficulty": 2,
        "tags": [
            "directives"
        ],
        "starterCode": "@Component({\n  selector: 'app-root', template: '<div [ngStyle]=\"/* ... */\">Test</div>'\n})\nexport class AppComponent {}",
        "solution": "@Component({\n  selector: 'app-root', template: '<div [ngStyle]=\"{color: \\'red\\'}\">Test</div>'\n})\nexport class AppComponent {}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Uppercase Pipe",
        "description": "Apply uppercase pipe to variable 'text'.",
        "difficulty": 1,
        "tags": [
            "pipes"
        ],
        "starterCode": "@Component({\n  selector: 'app-root', template: '{{ text | /* pipe */ }}'\n})\nexport class AppComponent { text = 'low'; }",
        "solution": "@Component({\n  selector: 'app-root', template: '{{ text | uppercase }}'\n})\nexport class AppComponent { text = 'low'; }",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Date Pipe",
        "description": "Apply date pipe.",
        "difficulty": 1,
        "tags": [
            "pipes"
        ],
        "starterCode": "@Component({\n  selector: 'app-root', template: '{{ today | /* pipe */ }}'\n})\nexport class AppComponent { today = new Date(); }",
        "solution": "@Component({\n  selector: 'app-root', template: '{{ today | date }}'\n})\nexport class AppComponent { today = new Date(); }",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "OnInit Hook",
        "description": "Implement OnInit and log 'Start'.",
        "difficulty": 2,
        "tags": [
            "lifecycle"
        ],
        "starterCode": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent implements OnInit {\n  // implement here\n}",
        "solution": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent implements OnInit {\n  ngOnInit() { console.log('Start'); }\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "OnDestroy Hook",
        "description": "Implement OnDestroy.",
        "difficulty": 2,
        "tags": [
            "lifecycle"
        ],
        "starterCode": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent implements OnDestroy {\n  // implement here\n}",
        "solution": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent implements OnDestroy {\n  ngOnDestroy() { console.log('End'); }\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Event Emitter",
        "description": "Define an @Output event emitter.",
        "difficulty": 3,
        "tags": [
            "events"
        ],
        "starterCode": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent {\n  // output here\n}",
        "solution": "@Component({ selector: 'app-root', template: '' })\nexport class AppComponent {\n  @Output() myEvent = new EventEmitter();\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "ViewChild",
        "description": "Use ViewChild to get a reference.",
        "difficulty": 3,
        "tags": [
            "basics"
        ],
        "starterCode": "@Component({ selector: 'app-root', template: '<div #box></div>' })\nexport class AppComponent {\n  // ViewChild here\n}",
        "solution": "@Component({ selector: 'app-root', template: '<div #box></div>' })\nexport class AppComponent {\n  @ViewChild('box') box: any;\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Service Inject",
        "description": "Inject a mock MyService in constructor.",
        "difficulty": 3,
        "tags": [
            "di"
        ],
        "starterCode": "@Component({ ... })\nexport class AppComponent {\n  constructor(/* inject */) {}\n}",
        "solution": "@Component({ ... })\nexport class AppComponent {\n  constructor(private myService: MyService) {}\n}",
        "testCases": []
    },
    {
        "topic": "angular",
        "title": "Safe Nav Operator",
        "description": "Use ? to safely access user?.name.",
        "difficulty": 1,
        "tags": [
            "basics"
        ],
        "starterCode": "@Component({ ... template: '{{ user?.name }}' })\nexport class AppComponent { user = null; }",
        "solution": "@Component({ ... template: '{{ user?.name }}' })\nexport class AppComponent { user = null; }",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Border Radius",
        "description": "Set border radius to 50% for class 'circle'.",
        "difficulty": 1,
        "tags": [
            "shaping"
        ],
        "starterCode": ".circle {\n  /* code here */\n}",
        "solution": ".circle {\n  border-radius: 50%;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Box Shadow",
        "description": "Add a box shadow 5px 5px 5px grey.",
        "difficulty": 2,
        "tags": [
            "effects"
        ],
        "starterCode": ".card {\n  /* code here */\n}",
        "solution": ".card {\n  box-shadow: 5px 5px 5px grey;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Opacity",
        "description": "Set opacity to 0.5.",
        "difficulty": 1,
        "tags": [
            "effects"
        ],
        "starterCode": ".ghost {\n  /* code here */\n}",
        "solution": ".ghost {\n  opacity: 0.5;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Display None",
        "description": "Hide class 'hidden' using display property.",
        "difficulty": 1,
        "tags": [
            "layout"
        ],
        "starterCode": ".hidden {\n  /* code here */\n}",
        "solution": ".hidden {\n  display: none;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Z-Index",
        "description": "Set z-index to 999.",
        "difficulty": 2,
        "tags": [
            "layout"
        ],
        "starterCode": ".modal {\n  /* code here */\n}",
        "solution": ".modal {\n  z-index: 999;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Transition",
        "description": "Set transition to all 2s.",
        "difficulty": 2,
        "tags": [
            "animations"
        ],
        "starterCode": "button {\n  /* code here */\n}",
        "solution": "button {\n  transition: all 2s;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Cursor",
        "description": "Set cursor to pointer for class 'btn'.",
        "difficulty": 1,
        "tags": [
            "interactivity"
        ],
        "starterCode": ".btn {\n  /* code here */\n}",
        "solution": ".btn {\n  cursor: pointer;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Overflow",
        "description": "Hide overflow for class 'container'.",
        "difficulty": 1,
        "tags": [
            "layout"
        ],
        "starterCode": ".container {\n  /* code here */\n}",
        "solution": ".container {\n  overflow: hidden;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Flex Wrap",
        "description": "Set flex wrap to wrap.",
        "difficulty": 2,
        "tags": [
            "flexbox"
        ],
        "starterCode": ".flex-container {\n  /* code here */\n}",
        "solution": ".flex-container {\n  flex-wrap: wrap;\n}",
        "testCases": []
    },
    {
        "topic": "css",
        "title": "Position Absolute",
        "description": "Set position to absolute.",
        "difficulty": 1,
        "tags": [
            "layout"
        ],
        "starterCode": ".overlay {\n  /* code here */\n}",
        "solution": ".overlay {\n  position: absolute;\n}",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Inner Join",
        "description": "Join Customers and Orders on customer_id.",
        "difficulty": 2,
        "tags": [
            "joins"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT * FROM Customers INNER JOIN Orders ON Customers.customer_id = Orders.customer_id",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Left Join",
        "description": "Join Customers and Orders using LEFT JOIN.",
        "difficulty": 2,
        "tags": [
            "joins"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT * FROM Customers LEFT JOIN Orders ON Customers.customer_id = Orders.customer_id",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Group By City",
        "description": "Count customers per city.",
        "difficulty": 2,
        "tags": [
            "grouping"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT city, count(*) FROM Customers GROUP BY city",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Having Clause",
        "description": "Select cities with more than 1 customer.",
        "difficulty": 3,
        "tags": [
            "grouping"
        ],
        "starterCode": "-- write query here",
        "solution": "SELECT city, count(*) FROM Customers GROUP BY city HAVING count(*) > 1",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Update Record",
        "description": "Update customer name to 'John' where id=1.",
        "difficulty": 2,
        "tags": [
            "dml"
        ],
        "starterCode": "-- write query here",
        "solution": "UPDATE Customers SET customer_name = 'John' WHERE customer_id = 1",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Delete Record",
        "description": "Delete customer where id=10.",
        "difficulty": 2,
        "tags": [
            "dml"
        ],
        "starterCode": "-- write query here",
        "solution": "DELETE FROM Customers WHERE customer_id = 10",
        "testCases": []
    },
    {
        "topic": "sql",
        "title": "Insert Into",
        "description": "Insert a new customer (ID=100, Name='New').",
        "difficulty": 2,
        "tags": [
            "dml"
        ],
        "starterCode": "-- write query here",
        "solution": "INSERT INTO Customers (customer_id, customer_name) VALUES (100, 'New')",
        "testCases": []
    }
]
```

## React Problems
File: `/backend/seeders/react_problems_data.json`

```json
[
    {
        "topic": "react",
        "title": "Hello React Component",
        "description": "Create a React component that displays 'Hello React' on the screen.",
        "difficulty": 1,
        "tags": [
            "basics",
            "jsx",
            "component"
        ],
        "starterCode": "function App() {\n  return (\n    <div>\n      {/* Your code here */}\n    </div>\n  );\n}",
        "solution": "function App() {\n  return (\n    <div>\n      <h1>Hello React</h1>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Counter Button",
        "description": "Create a button that increments a counter value each time it is clicked.",
        "difficulty": 1,
        "tags": [
            "useState",
            "events",
            "state"
        ],
        "starterCode": "function Counter() {\n  // Add state here\n  \n  return (\n    <div>\n      <p>Count: {/* display count */}</p>\n      <button onClick={/* increment function */}>Increment</button>\n    </div>\n  );\n}",
        "solution": "function Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Toggle Text Visibility",
        "description": "Create a button to toggle text visibility (Show / Hide).",
        "difficulty": 1,
        "tags": [
            "useState",
            "conditional-rendering"
        ],
        "starterCode": "function ToggleText() {\n  // Add state here\n  \n  return (\n    <div>\n      <button onClick={/* toggle function */}>\n        {/* Show/Hide text */}\n      </button>\n      {/* Conditionally render text */}\n    </div>\n  );\n}",
        "solution": "function ToggleText() {\n  const [isVisible, setIsVisible] = useState(true);\n  \n  return (\n    <div>\n      <button onClick={() => setIsVisible(!isVisible)}>\n        {isVisible ? 'Hide' : 'Show'}\n      </button>\n      {isVisible && <p>This text can be toggled!</p>}\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Input Display",
        "description": "Create an input field and display the typed value below it.",
        "difficulty": 1,
        "tags": [
            "useState",
            "onChange",
            "controlled-input"
        ],
        "starterCode": "function InputDisplay() {\n  // Add state here\n  \n  return (\n    <div>\n      <input \n        type=\"text\" \n        onChange={/* handle change */}\n        placeholder=\"Type something...\"\n      />\n      <p>You typed: {/* display text */}</p>\n    </div>\n  );\n}",
        "solution": "function InputDisplay() {\n  const [text, setText] = useState('');\n  \n  return (\n    <div>\n      <input \n        type=\"text\" \n        value={text}\n        onChange={(e) => setText(e.target.value)}\n        placeholder=\"Type something...\"\n      />\n      <p>You typed: {text}</p>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Render List with Map",
        "description": "Render a list of items using map() in React.",
        "difficulty": 2,
        "tags": [
            "map",
            "lists",
            "jsx"
        ],
        "starterCode": "function ItemList() {\n  const items = ['Apple', 'Banana', 'Orange', 'Mango'];\n  \n  return (\n    <ul>\n      {/* Use map to render items */}\n    </ul>\n  );\n}",
        "solution": "function ItemList() {\n  const items = ['Apple', 'Banana', 'Orange', 'Mango'];\n  \n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Dynamic List Addition",
        "description": "Add items to a list dynamically using an input field and button.",
        "difficulty": 2,
        "tags": [
            "useState",
            "arrays",
            "events"
        ],
        "starterCode": "function DynamicList() {\n  // Add state for items and input\n  \n  const addItem = () => {\n    // Add item logic\n  };\n  \n  return (\n    <div>\n      <input type=\"text\" placeholder=\"Enter item\" />\n      <button onClick={addItem}>Add</button>\n      <ul>\n        {/* Render items */}\n      </ul>\n    </div>\n  );\n}",
        "solution": "function DynamicList() {\n  const [items, setItems] = useState([]);\n  const [input, setInput] = useState('');\n  \n  const addItem = () => {\n    if (input.trim()) {\n      setItems([...items, input]);\n      setInput('');\n    }\n  };\n  \n  return (\n    <div>\n      <input \n        type=\"text\" \n        value={input}\n        onChange={(e) => setInput(e.target.value)}\n        placeholder=\"Enter item\" \n      />\n      <button onClick={addItem}>Add</button>\n      <ul>\n        {items.map((item, index) => (\n          <li key={index}>{item}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Props Data Passing",
        "description": "Pass data from a parent component to a child component using props.",
        "difficulty": 2,
        "tags": [
            "props",
            "components"
        ],
        "starterCode": "function Child(props) {\n  return <p>{/* Display prop data */}</p>;\n}\n\nfunction Parent() {\n  const message = \"Hello from Parent!\";\n  return (\n    <div>\n      <Child /* pass message as prop */ />\n    </div>\n  );\n}",
        "solution": "function Child(props) {\n  return <p>{props.message}</p>;\n}\n\nfunction Parent() {\n  const message = \"Hello from Parent!\";\n  return (\n    <div>\n      <Child message={message} />\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Conditional Button Disable",
        "description": "Disable a button if the input field is empty.",
        "difficulty": 2,
        "tags": [
            "useState",
            "conditional",
            "disabled"
        ],
        "starterCode": "function ConditionalButton() {\n  // Add state\n  \n  return (\n    <div>\n      <input \n        type=\"text\" \n        placeholder=\"Type to enable button\"\n      />\n      <button /* add disabled condition */>Submit</button>\n    </div>\n  );\n}",
        "solution": "function ConditionalButton() {\n  const [input, setInput] = useState('');\n  \n  return (\n    <div>\n      <input \n        type=\"text\" \n        value={input}\n        onChange={(e) => setInput(e.target.value)}\n        placeholder=\"Type to enable button\"\n      />\n      <button disabled={!input.trim()}>Submit</button>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Fetch API Users",
        "description": "Fetch data from an API and display the list of users.",
        "difficulty": 3,
        "tags": [
            "useEffect",
            "fetch",
            "api"
        ],
        "starterCode": "function UserList() {\n  // Add state for users\n  \n  // Use useEffect to fetch data\n  \n  return (\n    <div>\n      <h2>Users</h2>\n      <ul>\n        {/* Map and display users */}\n      </ul>\n    </div>\n  );\n}",
        "solution": "function UserList() {\n  const [users, setUsers] = useState([]);\n  \n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then(response => response.json())\n      .then(data => setUsers(data));\n  }, []);\n  \n  return (\n    <div>\n      <h2>Users</h2>\n      <ul>\n        {users.map(user => (\n          <li key={user.id}>{user.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Form Submission Handler",
        "description": "Create a form and handle form submission without page reload.",
        "difficulty": 2,
        "tags": [
            "onSubmit",
            "preventDefault",
            "forms"
        ],
        "starterCode": "function FormComponent() {\n  // Add state\n  \n  const handleSubmit = (e) => {\n    // Handle form submission\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input type=\"text\" placeholder=\"Name\" />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}",
        "solution": "function FormComponent() {\n  const [name, setName] = useState('');\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert(`Submitted: ${name}`);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input \n        type=\"text\" \n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder=\"Name\" \n      />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Background Color Changer",
        "description": "Create a component that changes background color when a button is clicked.",
        "difficulty": 2,
        "tags": [
            "useState",
            "style",
            "events"
        ],
        "starterCode": "function ColorChanger() {\n  // Add state for color\n  \n  return (\n    <div style={{ /* apply background color */ }}>\n      <button onClick={/* change color */}>Change Color</button>\n    </div>\n  );\n}",
        "solution": "function ColorChanger() {\n  const [color, setColor] = useState('white');\n  \n  const changeColor = () => {\n    const colors = ['red', 'blue', 'green', 'yellow', 'pink'];\n    const randomColor = colors[Math.floor(Math.random() * colors.length)];\n    setColor(randomColor);\n  };\n  \n  return (\n    <div style={{ backgroundColor: color, padding: '20px' }}>\n      <button onClick={changeColor}>Change Color</button>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Conditional Message Display",
        "description": "Show a message only if a condition is true using conditional rendering.",
        "difficulty": 1,
        "tags": [
            "conditional-rendering",
            "useState"
        ],
        "starterCode": "function ConditionalMessage() {\n  // Add state\n  \n  return (\n    <div>\n      <button onClick={/* toggle */}>Toggle Message</button>\n      {/* Conditionally render message */}\n    </div>\n  );\n}",
        "solution": "function ConditionalMessage() {\n  const [showMessage, setShowMessage] = useState(false);\n  \n  return (\n    <div>\n      <button onClick={() => setShowMessage(!showMessage)}>Toggle Message</button>\n      {showMessage && <p>This message is conditionally rendered!</p>}\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Login Form with State",
        "description": "Create a simple login form with email and password fields using state.",
        "difficulty": 2,
        "tags": [
            "useState",
            "forms",
            "multiple-inputs"
        ],
        "starterCode": "function LoginForm() {\n  // Add state for email and password\n  \n  return (\n    <div>\n      <input type=\"email\" placeholder=\"Email\" />\n      <input type=\"password\" placeholder=\"Password\" />\n      <button>Login</button>\n    </div>\n  );\n}",
        "solution": "function LoginForm() {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  \n  return (\n    <div>\n      <input \n        type=\"email\" \n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder=\"Email\" \n      />\n      <input \n        type=\"password\" \n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        placeholder=\"Password\" \n      />\n      <button>Login</button>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Click Counter with useEffect",
        "description": "Create a component that counts how many times a button is clicked using useEffect.",
        "difficulty": 2,
        "tags": [
            "useState",
            "useEffect",
            "side-effects"
        ],
        "starterCode": "function ClickCounter() {\n  // Add state\n  \n  // Use useEffect to log count\n  \n  return (\n    <div>\n      <p>Clicks: {/* display count */}</p>\n      <button onClick={/* increment */}>Click Me</button>\n    </div>\n  );\n}",
        "solution": "function ClickCounter() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    console.log(`Button clicked ${count} times`);\n  }, [count]);\n  \n  return (\n    <div>\n      <p>Clicks: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Click Me</button>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Search Filter Component",
        "description": "Create a search filter that filters a list of names as the user types.",
        "difficulty": 3,
        "tags": [
            "useState",
            "filter",
            "search"
        ],
        "starterCode": "function SearchFilter() {\n  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];\n  // Add state for search\n  \n  return (\n    <div>\n      <input type=\"text\" placeholder=\"Search names...\" />\n      <ul>\n        {/* Filter and display names */}\n      </ul>\n    </div>\n  );\n}",
        "solution": "function SearchFilter() {\n  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];\n  const [search, setSearch] = useState('');\n  \n  const filteredNames = names.filter(name => \n    name.toLowerCase().includes(search.toLowerCase())\n  );\n  \n  return (\n    <div>\n      <input \n        type=\"text\" \n        value={search}\n        onChange={(e) => setSearch(e.target.value)}\n        placeholder=\"Search names...\" \n      />\n      <ul>\n        {filteredNames.map((name, index) => (\n          <li key={index}>{name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Current Date and Time Display",
        "description": "Create a component that displays the current date and time.",
        "difficulty": 2,
        "tags": [
            "useState",
            "useEffect",
            "date"
        ],
        "starterCode": "function DateTime() {\n  // Add state for current time\n  \n  // Use useEffect to update time\n  \n  return (\n    <div>\n      <p>{/* Display date and time */}</p>\n    </div>\n  );\n}",
        "solution": "function DateTime() {\n  const [currentTime, setCurrentTime] = useState(new Date());\n  \n  useEffect(() => {\n    const timer = setInterval(() => {\n      setCurrentTime(new Date());\n    }, 1000);\n    \n    return () => clearInterval(timer);\n  }, []);\n  \n  return (\n    <div>\n      <p>{currentTime.toLocaleString()}</p>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Controlled Checkbox",
        "description": "Create a controlled checkbox and display whether it is checked or not.",
        "difficulty": 1,
        "tags": [
            "useState",
            "checkbox",
            "controlled-input"
        ],
        "starterCode": "function CheckboxComponent() {\n  // Add state\n  \n  return (\n    <div>\n      <input type=\"checkbox\" />\n      <p>Checkbox is: {/* checked/unchecked */}</p>\n    </div>\n  );\n}",
        "solution": "function CheckboxComponent() {\n  const [isChecked, setIsChecked] = useState(false);\n  \n  return (\n    <div>\n      <input \n        type=\"checkbox\" \n        checked={isChecked}\n        onChange={(e) => setIsChecked(e.target.checked)}\n      />\n      <p>Checkbox is: {isChecked ? 'Checked' : 'Unchecked'}</p>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Dropdown Select Component",
        "description": "Create a dropdown (select) and display the selected value.",
        "difficulty": 2,
        "tags": [
            "useState",
            "select",
            "onChange"
        ],
        "starterCode": "function DropdownComponent() {\n  // Add state\n  \n  return (\n    <div>\n      <select onChange={/* handle change */}>\n        <option value=\"\">Select a fruit</option>\n        <option value=\"apple\">Apple</option>\n        <option value=\"banana\">Banana</option>\n        <option value=\"orange\">Orange</option>\n      </select>\n      <p>Selected: {/* display selected */}</p>\n    </div>\n  );\n}",
        "solution": "function DropdownComponent() {\n  const [selected, setSelected] = useState('');\n  \n  return (\n    <div>\n      <select \n        value={selected}\n        onChange={(e) => setSelected(e.target.value)}\n      >\n        <option value=\"\">Select a fruit</option>\n        <option value=\"apple\">Apple</option>\n        <option value=\"banana\">Banana</option>\n        <option value=\"orange\">Orange</option>\n      </select>\n      <p>Selected: {selected}</p>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Reset Form Component",
        "description": "Create a component that resets input and state values on button click.",
        "difficulty": 2,
        "tags": [
            "useState",
            "reset",
            "forms"
        ],
        "starterCode": "function ResetForm() {\n  // Add state\n  \n  const handleReset = () => {\n    // Reset logic\n  };\n  \n  return (\n    <div>\n      <input type=\"text\" placeholder=\"Name\" />\n      <input type=\"email\" placeholder=\"Email\" />\n      <button onClick={handleReset}>Reset</button>\n    </div>\n  );\n}",
        "solution": "function ResetForm() {\n  const [name, setName] = useState('');\n  const [email, setEmail] = useState('');\n  \n  const handleReset = () => {\n    setName('');\n    setEmail('');\n  };\n  \n  return (\n    <div>\n      <input \n        type=\"text\" \n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder=\"Name\" \n      />\n      <input \n        type=\"email\" \n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder=\"Email\" \n      />\n      <button onClick={handleReset}>Reset</button>\n    </div>\n  );\n}",
        "testCases": []
    },
    {
        "topic": "react",
        "title": "Simple Todo App",
        "description": "Create a simple Todo App with add and delete functionality.",
        "difficulty": 3,
        "tags": [
            "useState",
            "arrays",
            "crud"
        ],
        "starterCode": "function TodoApp() {\n  // Add state for todos and input\n  \n  const addTodo = () => {\n    // Add todo logic\n  };\n  \n  const deleteTodo = (index) => {\n    // Delete todo logic\n  };\n  \n  return (\n    <div>\n      <input type=\"text\" placeholder=\"Add a todo\" />\n      <button onClick={addTodo}>Add</button>\n      <ul>\n        {/* Map todos with delete button */}\n      </ul>\n    </div>\n  );\n}",
        "solution": "function TodoApp() {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState('');\n  \n  const addTodo = () => {\n    if (input.trim()) {\n      setTodos([...todos, input]);\n      setInput('');\n    }\n  };\n  \n  const deleteTodo = (index) => {\n    setTodos(todos.filter((_, i) => i !== index));\n  };\n  \n  return (\n    <div>\n      <input \n        type=\"text\" \n        value={input}\n        onChange={(e) => setInput(e.target.value)}\n        placeholder=\"Add a todo\" \n      />\n      <button onClick={addTodo}>Add</button>\n      <ul>\n        {todos.map((todo, index) => (\n          <li key={index}>\n            {todo}\n            <button onClick={() => deleteTodo(index)}>Delete</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}",
        "testCases": []
    }
]
```

## Quiz Data
File: `/compiler/src/data/quizData.js`

```javascript
// Quiz questions organized by topic
// You can easily add/edit questions here

// Quiz questions organized by topic and level
export const quizData = {
    python: {
        title: "Python Programming",
        icon: "🐍",
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
                    explanation: "Variable names can contain letters, numbers, and underscores, but cannot start with a number or contain spaces/hyphens."
                },
                {
                    id: 3,
                    question: "What does the len() function do?",
                    options: ["Returns the length of an object", "Converts to lowercase", "Rounds a number", "Returns the type of object"],
                    correctAnswer: 0,
                    explanation: "The len() function returns the number of items in an object."
                }
            ],
            medium: [
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
                }
            ],
            hard: [
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
                }
            ]
        }
    },
    java: {
        title: "Java Programming",
        icon: "☕",
        color: "#f89820",
        levels: {
            beginner: [
                {
                    id: 1,
                    question: "What is the correct syntax to output 'Hello World' in Java?",
                    options: ["print('Hello World');", "System.out.println('Hello World');", "Console.WriteLine('Hello World');", "echo 'Hello World';"],
                    correctAnswer: 1,
                    explanation: "System.out.println() is used to print to the console."
                },
                {
                    id: 2,
                    question: "Which keyword is used to create a class?",
                    options: ["class", "Class", "new", "create"],
                    correctAnswer: 0,
                    explanation: "The 'class' keyword defines a new class."
                }
            ],
            medium: [
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
                }
            ],
            hard: [
                {
                    id: 1,
                    question: "What is 'reflection' in Java?",
                    options: ["A graphics library", "Examining/modifying runtime behavior", "A memory management technique", "A multi-threading tool"],
                    correctAnswer: 1,
                    explanation: "Reflection allows code to inspect other code in the same system at runtime."
                }
            ]
        }
    },
    'c++': {
        title: "C++ Programming",
        icon: "🔹",
        color: "#00599c",
        levels: {
            beginner: [
                {
                    id: 1,
                    question: "Which header file is needed for cout?",
                    options: ["<stdio.h>", "<stdlib.h>", "<iostream>", "<string>"],
                    correctAnswer: 2,
                    explanation: "iostream header is used for input/output operations."
                }
            ],
            medium: [
                {
                    id: 1,
                    question: "What is a pointer?",
                    options: ["A variable that stores memory address", "A loop type", "A class", "None"],
                    correctAnswer: 0,
                    explanation: "Pointers store the memory address of another variable."
                }
            ],
            hard: [
                {
                    id: 1,
                    question: "What is the rule of three?",
                    options: ["Destructor, Copy Constructor, Copy Assignment", "Public, Private, Protected", "Compile, Link, Run", "None"],
                    correctAnswer: 0,
                    explanation: "If a class needs a destructor, it likely needs a copy constructor and copy assignment operator."
                }
            ]
        }
    },
    html: {
        title: "HTML & Web Development",
        icon: "🌎",
        color: "#ed8936",
        levels: {
            beginner: [
                {
                    id: 1,
                    question: "What does HTML stand for?",
                    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                    correctAnswer: 0,
                    explanation: "HTML stands for Hyper Text Markup Language."
                }
            ],
            medium: [
                {
                    id: 1,
                    question: "Which attribute is used to provide an alternate text for an image?",
                    options: ["title", "alt", "src", "href"],
                    correctAnswer: 1,
                    explanation: "The alt attribute specifies an alternate text for an image."
                }
            ],
            hard: [
                {
                    id: 1,
                    question: "What is the purpose of the <canvas> tag?",
                    options: ["To display database records", "To draw graphics via scripting", "To play video", "To format text"],
                    correctAnswer: 1,
                    explanation: "<canvas> is used to draw graphics, on the fly, via scripting (usually JavaScript)."
                }
            ]
        }
    },
    sql: {
        title: "SQL & Databases",
        icon: "💾",
        color: "#4a5568",
        levels: {
            beginner: [{ id: 1, question: "Select command?", options: ["GET", "FETCH", "SELECT", "RETRIEVE"], correctAnswer: 2, explanation: "SELECT retrieves data." }],
            medium: [{ id: 1, question: "JOIN type?", options: ["INNER", "OUTER", "LEFT", "All"], correctAnswer: 3, explanation: "SQL supports multiple join types." }],
            hard: [{ id: 1, question: "ACID property?", options: ["Atomicity", "Consistency", "Isolation", "All of above"], correctAnswer: 3, explanation: "ACID properties ensure database transaction reliability." }]
        }
    },
    react: {
        title: "React Framework",
        icon: "⚛️",
        color: "#61dafb",
        levels: {
            beginner: [{ id: 1, question: "What is React?", options: ["Library", "Framework", "Database", "OS"], correctAnswer: 0, explanation: "React is a JS library." }],
            medium: [{ id: 1, question: "useEffect usage?", options: ["State", "Side effects", "Routing", "Styling"], correctAnswer: 1, explanation: "useEffect handles side effects." }],
            hard: [{ id: 1, question: "Custom Hook prefix?", options: ["get", "set", "use", "make"], correctAnswer: 2, explanation: "Custom hooks must start with 'use'." }]
        }
    },
    javascript: {
        title: "JavaScript Basics",
        icon: "📜",
        color: "#f6e05e",
        levels: {
            beginner: [{ id: 1, question: "Declare var?", options: ["var/let/const", "int/str", "dim", "val"], correctAnswer: 0, explanation: "Use var, let, or const." }],
            medium: [{ id: 1, question: "Closure?", options: ["Function w/ lexical scope", "Loop", "Object", "Error"], correctAnswer: 0, explanation: "A closure gives access to an outer function's scope." }],
            hard: [{ id: 1, question: "Event Loop?", options: ["Handles async", "Draws UI", "Compiles code", "None"], correctAnswer: 0, explanation: "Event loop handles asynchronous callbacks." }]
        }
    }
};

// Function to get quiz by topic and level
export const getQuizByTopicAndLevel = (topic, level = 'beginner') => {
    const topicData = quizData[topic];
    if (!topicData) return null;
    return {
        ...topicData,
        questions: topicData.levels[level] || []
    };
};

/* Legacy support if needed, defaults to beginner */
export const getQuizByTopic = (topic) => getQuizByTopicAndLevel(topic, 'beginner');

export const getAllTopics = () => {
    return Object.keys(quizData).map(key => {
        // Calculate total questions across all levels
        const levels = quizData[key].levels;
        const total = (levels.beginner?.length || 0) + (levels.medium?.length || 0) + (levels.hard?.length || 0);
        return {
            id: key,
            title: quizData[key].title,
            icon: quizData[key].icon,
            color: quizData[key].color,
            questionCount: total
        };
    });
};

```

## Coding Problems Data
File: `/compiler/src/data/problemsData.js`

```javascript
// Coding problems data organized by topic
// Each problem includes: id, title, description, difficulty, tags, starter code, test cases, and solution

export const problemsData = {
    sql: {
        title: "SQL Problems",
        icon: "💾",
        color: "#4a5568",
        totalProblems: 10,
        problems: [
            {
                id: 1,
                title: "The Neighborhood Pet Registry",
                description: `You are managing a pet registry database for a neighborhood. The database has a table called 'pets' with the following columns:
        
- pet_id (INT) - Primary key
- pet_name (VARCHAR)
- pet_type (VARCHAR) - e.g., 'Dog', 'Cat', 'Bird'
- owner_name (VARCHAR)
- age (INT)
- color (VARCHAR)

Write a SQL query to select all pets that are dogs and are older than 3 years.`,
                difficulty: 3,
                tags: ["sql", "pre-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT * FROM pets`,
                testCases: [
                    {
                        input: "SELECT * FROM pets WHERE pet_type = 'Dog' AND age > 3",
                        expectedOutput: "Query should return all dogs older than 3 years",
                        pass: true
                    }
                ],
                solution: `SELECT * FROM pets WHERE pet_type = 'Dog' AND age > 3;`,
                hints: ["Use WHERE clause to filter", "Combine conditions with AND"]
            },
            {
                id: 2,
                title: "High Spenders",
                description: `Find all customers who have spent more than 1000 in total.`,
                difficulty: 2,
                tags: ["sql"],
                starterCode: `-- Write your SQL query here
SELECT * FROM customers`,
                solution: `SELECT * FROM customers WHERE total_purchases > 1000;`,
                hints: ["Use WHERE clause"]
            },
            {
                id: 3,
                title: "TechCorp's Employee Management System",
                description: `An employee database has a table 'employees' with:
        
- emp_id (INT)
- emp_name (VARCHAR)
- department (VARCHAR)
- salary (DECIMAL)
- hire_date (DATE)

Write a query to select all employees from the 'IT' department ordered by salary in descending order.`,
                difficulty: 1,
                tags: ["sql", "post-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT * FROM employees`,
                solution: `SELECT * FROM employees WHERE department = 'IT' ORDER BY salary DESC;`,
                hints: ["Filter by department", "Use ORDER BY for sorting"]
            },
            {
                id: 4,
                title: "Gadget Grove's Inventory and Sales Tracking",
                description: `A gadget store has two tables:

**ElectronicsProducts** table:
- product_id (INT)
- product_name (VARCHAR)
- category (VARCHAR)
- price (DECIMAL)

**sales** table:
- sale_id (INT)
- product_id (INT)
- quantity_sold (INT)
- sale_date (DATE)

Write a query to find the total quantity sold for each product. Display product_name and total_quantity.`,
                difficulty: 3,
                tags: ["sql", "pre-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT p.product_name, SUM(s.quantity_sold) as total_quantity
FROM ElectronicsProducts p
JOIN sales s ON p.product_id = s.product_id`,
                solution: `SELECT p.product_name, SUM(s.quantity_sold) as total_quantity
FROM ElectronicsProducts p
JOIN sales s ON p.product_id = s.product_id
GROUP BY p.product_name;`,
                hints: ["Use JOIN to combine tables", "Use SUM and GROUP BY"]
            },
            {
                id: 5,
                title: "Evergreen High School's Academic Database",
                description: `A school database has a 'students' table:
        
- student_id (INT)
- student_name (VARCHAR)
- grade_level (INT)
- gpa (DECIMAL)
- enrollment_year (INT)

Write a query to find all students in grade 10 or above with a GPA greater than 3.5.`,
                difficulty: 3,
                tags: ["sql", "post-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT * FROM students`,
                solution: `SELECT * FROM students WHERE grade_level >= 10 AND gpa > 3.5;`,
                hints: ["Use >= for grade level", "Combine conditions with AND"]
            },
            {
                id: 6,
                title: "Reliance Mart Shopping Database",
                description: `A shopping database has a 'customers' table:
        
- customer_id (INT)
- customer_name (VARCHAR)
- city (VARCHAR)
- total_purchases (DECIMAL)
- membership_type (VARCHAR)

Write a query to select all 'VIP' members from 'Mumbai' who have made purchases over ₹50,000.`,
                difficulty: 2,
                tags: ["sql", "pre-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT * FROM customers`,
                solution: `SELECT * FROM customers WHERE membership_type = 'VIP' AND city = 'Mumbai' AND total_purchases > 50000;`,
                hints: ["Filter by three conditions", "Use AND to combine"]
            },
            {
                id: 7,
                title: "The Adventure Bookstore",
                description: `A bookstore has an 'orders' table:
        
- order_id (INT)
- customer_name (VARCHAR)
- book_title (VARCHAR)
- order_date (DATE)
- quantity (INT)

Write a query to count the total number of orders placed.`,
                difficulty: 1,
                tags: ["sql", "post-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT COUNT(*) FROM orders`,
                solution: `SELECT COUNT(*) as total_orders FROM orders;`,
                hints: ["Use COUNT(*) function", "Give it an alias"]
            },
            {
                id: 8,
                title: "Employee Database Management",
                description: `An 'employees' table has:
        
- emp_id (INT)
- emp_name (VARCHAR)
- position (VARCHAR)
- salary (DECIMAL)
- department (VARCHAR)

Write a query to find the average salary of employees in the 'Sales' department.`,
                difficulty: 2,
                tags: ["sql", "pre-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT AVG(salary) FROM employees`,
                solution: `SELECT AVG(salary) as average_salary FROM employees WHERE department = 'Sales';`,
                hints: ["Use AVG() function", "Filter by department"]
            },
            {
                id: 9,
                title: "Tech Haven Electronics",
                description: `An electronics store has a 'ElectronicsProducts' table:
        
- product_id (INT)
- product_name (VARCHAR)
- brand (VARCHAR)
- price (DECIMAL)
- warranty_years (INT)
        
Write a query to select all products from 'Samsung' brand with a warranty of at least 2 years, ordered by price.`,
                difficulty: 1,
                tags: ["sql", "post-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT * FROM ElectronicsProducts`,
                solution: `SELECT * FROM ElectronicsProducts WHERE brand = 'Samsung' AND warranty_years >= 2 ORDER BY price;`,
                hints: ["Filter by brand and warranty", "Use ORDER BY"]
            },
            {
                id: 10,
                title: "Customer Orders Analysis",
                description: `An e-commerce database has 'orders' table:
        
- order_id (INT)
- customer_id (INT)
- order_amount (DECIMAL)
- order_status (VARCHAR)
- order_date (DATE)

Write a query to find the maximum order amount from all completed orders (status = 'Completed').`,
                difficulty: 2,
                tags: ["sql", "pre-medium-pt-3rd-sem-2k"],
                starterCode: `-- Write your SQL query here
SELECT MAX(order_amount) FROM orders`,
                solution: `SELECT MAX(order_amount) as max_order FROM orders WHERE order_status = 'Completed';`,
                hints: ["Use MAX() function", "Filter by status"]
            }
        ]
    },

    mysql: {
        title: "MySQL Problems",
        icon: "🐬",
        color: "#00758F",
        totalProblems: 2,
        problems: [
            {
                id: 1,
                title: "Customer Countries",
                description: `Write a MySQL query to find all unique countries where your customers are from.`,
                difficulty: 1,
                tags: ["mysql", "basics"],
                starterCode: `-- Write your MySQL query here
SELECT DISTINCT country FROM CustomersArchive`,
                solution: `SELECT DISTINCT country FROM CustomersArchive;`,
                hints: ["Use DISTINCT keyword"]
            },
            {
                id: 2,
                title: "Young Customers",
                description: `Find all customers who are younger than 25.`,
                difficulty: 1,
                tags: ["mysql"],
                starterCode: `-- Write your MySQL query here
SELECT * FROM CustomersArchive`,
                solution: `SELECT * FROM CustomersArchive WHERE age < 25;`,
                hints: ["Use WHERE age < 25"]
            }
        ]
    },

    postgresql: {
        title: "PostgreSQL Problems",
        icon: "🐘",
        color: "#336791",
        totalProblems: 2,
        problems: [
            {
                id: 1,
                title: "Item Search",
                description: `Write a PostgreSQL query to find all orders for 'Keyboard'.`,
                difficulty: 1,
                tags: ["postgresql", "basics"],
                starterCode: `-- Write your PostgreSQL query here
SELECT * FROM OrdersArchive`,
                solution: `SELECT * FROM OrdersArchive WHERE item = 'Keyboard';`,
                hints: ["Filter by item name"]
            },
            {
                id: 2,
                title: "Major Orders",
                description: `Find all orders with an amount greater than 500.`,
                difficulty: 2,
                tags: ["postgresql"],
                starterCode: `-- Write your PostgreSQL query here
SELECT * FROM OrdersArchive`,
                solution: `SELECT * FROM OrdersArchive WHERE amount > 500;`,
                hints: ["Use WHERE amount > 500"]
            }
        ]
    },

    sqlserver: {
        title: "SQL Server Problems",
        icon: "🖧",
        color: "#CC2927",
        totalProblems: 2,
        problems: [
            {
                id: 1,
                title: "Shipping Status",
                description: `Write a SQL Server query to find all pending shippings.`,
                difficulty: 1,
                tags: ["sqlserver", "basics"],
                starterCode: `-- Write your SQL Server query here
SELECT * FROM ShippingsArchive`,
                solution: `SELECT * FROM ShippingsArchive WHERE status = 'Pending';`,
                hints: ["Filter by status"]
            },
            {
                id: 2,
                title: "High Amount Orders",
                description: `Find the average amount of all orders.`,
                difficulty: 2,
                tags: ["sqlserver"],
                starterCode: `-- Write your SQL Server query here
SELECT AVG(amount) FROM OrdersArchive`,
                solution: `SELECT AVG(amount) as average_amount FROM OrdersArchive;`,
                hints: ["Use AVG() function"]
            }
        ]
    },

    python: {
        title: "Python Problems",
        icon: "🐍",
        color: "#3776ab",
        totalProblems: 8,
        problems: [
            {
                id: 1,
                title: "Two Sum",
                description: `Given an array of integers and a target sum, return the indices of two numbers that add up to the target.

Example:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9`,
                difficulty: 1,
                tags: ["python", "arrays", "easy"],
                starterCode: `def two_sum(nums, target):
    # Write your code here
    pass

# Test
print(two_sum([2, 7, 11, 15], 9))`,
                solution: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
                hints: ["Use a dictionary to store seen numbers", "Check if complement exists"]
            },
            {
                id: 2,
                title: "Reverse String",
                description: `Write a function that reverses a string.

Example:
Input: "hello"
Output: "olleh"`,
                difficulty: 1,
                tags: ["python", "strings", "easy"],
                starterCode: `def reverse_string(s):
    # Write your code here
    pass

# Test
print(reverse_string("hello"))`,
                solution: `def reverse_string(s):
    return s[::-1]`,
                hints: ["Use string slicing", "[::-1] reverses a string"]
            },
            {
                id: 3,
                title: "Palindrome Check",
                description: `Write a function to check if a string is a palindrome (reads the same forwards and backwards).

Example:
Input: "racecar"
Output: True

Input: "hello"
Output: False`,
                difficulty: 1,
                tags: ["python", "strings", "easy"],
                starterCode: `def is_palindrome(s):
    # Write your code here
    pass

# Test
print(is_palindrome("racecar"))
print(is_palindrome("hello"))`,
                solution: `def is_palindrome(s):
    return s == s[::-1]`,
                hints: ["Compare string with its reverse", "Use slicing"]
            },
            {
                id: 4,
                title: "FizzBuzz",
                description: `Write a program that prints numbers from 1 to n. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both, print "FizzBuzz".

Example for n=15:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`,
                difficulty: 1,
                tags: ["python", "loops", "easy"],
                starterCode: `def fizzbuzz(n):
    # Write your code here
    pass

# Test
fizzbuzz(15)`,
                solution: `def fizzbuzz(n):
    for i in range(1, n+1):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)`,
                hints: ["Check divisibility by 15 first", "Use modulo operator %"]
            },
            {
                id: 5,
                title: "Find Maximum in Array",
                description: `Write a function to find the maximum number in an array.

Example:
Input: [3, 7, 2, 9, 1]
Output: 9`,
                difficulty: 1,
                tags: ["python", "arrays", "easy"],
                starterCode: `def find_max(arr):
    # Write your code here
    pass

# Test
print(find_max([3, 7, 2, 9, 1]))`,
                solution: `def find_max(arr):
    return max(arr)`,
                hints: ["Use built-in max() function", "Or iterate through array"]
            },
            {
                id: 6,
                title: "Count Vowels",
                description: `Write a function to count the number of vowels (a, e, i, o, u) in a string.

Example:
Input: "hello world"
Output: 3`,
                difficulty: 1,
                tags: ["python", "strings", "easy"],
                starterCode: `def count_vowels(s):
    # Write your code here
    pass

# Test
print(count_vowels("hello world"))`,
                solution: `def count_vowels(s):
    vowels = "aeiouAEIOU"
    return sum(1 for char in s if char in vowels)`,
                hints: ["Create a vowels string", "Use list comprehension"]
            },
            {
                id: 7,
                title: "Fibonacci Sequence",
                description: `Write a function to generate the first n numbers of the Fibonacci sequence.

Example:
Input: n = 7
Output: [0, 1, 1, 2, 3, 5, 8]`,
                difficulty: 2,
                tags: ["python", "recursion", "medium"],
                starterCode: `def fibonacci(n):
    # Write your code here
    pass

# Test
print(fibonacci(7))`,
                solution: `def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib`,
                hints: ["Start with [0, 1]", "Each number is sum of previous two"]
            },
            {
                id: 8,
                title: "Prime Number Checker",
                description: `Write a function to check if a number is prime.

Example:
Input: 7
Output: True

Input: 10
Output: False`,
                difficulty: 2,
                tags: ["python", "math", "medium"],
                starterCode: `def is_prime(n):
    # Write your code here
    pass

# Test
print(is_prime(7))
print(is_prime(10))`,
                solution: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True`,
                hints: ["Check divisibility up to square root", "Handle edge cases"]
            }
        ]
    },

    java: {
        title: "Java Problems",
        icon: "☕",
        color: "#f89820",
        totalProblems: 8,
        problems: [
            {
                id: 1,
                title: "Hello World",
                description: `Write a Java program that prints "Hello, World!" to the console.`,
                difficulty: 1,
                tags: ["java", "basics", "easy"],
                starterCode: `// Write your code here
System.out.println("Hello, World!");`,
                solution: `System.out.println("Hello, World!");`,
                hints: ["Use System.out.println()"]
            },
            {
                id: 2,
                title: "Sum of Two Numbers",
                description: `Write code to calculate and print the sum of two numbers.

Example:
int a = 5;
int b = 10;
Output: 15`,
                difficulty: 1,
                tags: ["java", "arithmetic", "easy"],
                starterCode: `int a = 5;
int b = 10;
// Calculate and print sum
`,
                solution: `int a = 5;
int b = 10;
int sum = a + b;
System.out.println(sum);`,
                hints: ["Create a sum variable", "Use + operator"]
            },
            {
                id: 3,
                title: "Even or Odd",
                description: `Write code to check if a number is even or odd.

Example:
int num = 7;
Output: "Odd"`,
                difficulty: 1,
                tags: ["java", "conditionals", "easy"],
                starterCode: `int num = 7;
// Check if even or odd
`,
                solution: `int num = 7;
if (num % 2 == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}`,
                hints: ["Use modulo operator %", "Use if-else"]
            },
            {
                id: 4,
                title: "Factorial Calculator",
                description: `Write code to calculate the factorial of a number.

Example:
int n = 5;
Output: 120 (5! = 5*4*3*2*1)`,
                difficulty: 2,
                tags: ["java", "loops", "medium"],
                starterCode: `int n = 5;
int factorial = 1;
// Calculate factorial
`,
                solution: `int n = 5;
int factorial = 1;
for (int i = 1; i <= n; i++) {
    factorial *= i;
}
System.out.println(factorial);`,
                hints: ["Use a for loop", "Multiply each number"]
            },
            {
                id: 5,
                title: "Array Sum",
                description: `Write code to calculate the sum of all elements in an array.

Example:
int[] arr = {1, 2, 3, 4, 5};
Output: 15`,
                difficulty: 1,
                tags: ["java", "arrays", "easy"],
                starterCode: `int[] arr = {1, 2, 3, 4, 5};
int sum = 0;
// Calculate sum
`,
                solution: `int[] arr = {1, 2, 3, 4, 5};
int sum = 0;
for (int num : arr) {
    sum += num;
}
System.out.println(sum);`,
                hints: ["Use enhanced for loop", "Add each element to sum"]
            },
            {
                id: 6,
                title: "String Reversal",
                description: `Write code to reverse a string.

Example:
String str = "hello";
Output: "olleh"`,
                difficulty: 2,
                tags: ["java", "strings", "medium"],
                starterCode: `String str = "hello";
// Reverse the string
`,
                solution: `String str = "hello";
String reversed = new StringBuilder(str).reverse().toString();
System.out.println(reversed);`,
                hints: ["Use StringBuilder", "Call reverse() method"]
            },
            {
                id: 7,
                title: "Find Largest Number",
                description: `Write code to find the largest number in an array.

Example:
int[] numbers = {3, 7, 2, 9, 1};
Output: 9`,
                difficulty: 1,
                tags: ["java", "arrays", "easy"],
                starterCode: `int[] numbers = {3, 7, 2, 9, 1};
// Find largest number
`,
                solution: `int[] numbers = {3, 7, 2, 9, 1};
int max = numbers[0];
for (int num : numbers) {
    if (num > max) {
        max = num;
    }
}
System.out.println(max);`,
                hints: ["Start with first element", "Compare each element"]
            },
            {
                id: 8,
                title: "Count Characters",
                description: `Write code to count the number of characters in a string (excluding spaces).

Example:
String text = "hello world";
Output: 10`,
                difficulty: 2,
                tags: ["java", "strings", "medium"],
                starterCode: `String text = "hello world";
// Count characters
`,
                solution: `String text = "hello world";
int count = 0;
for (char c : text.toCharArray()) {
    if (c != ' ') {
        count++;
    }
}
System.out.println(count);`,
                hints: ["Convert to char array", "Skip spaces"]
            }
        ]
    },

    'c++': {
        title: "C++ Problems",
        icon: "🔹",
        color: "#00599c",
        totalProblems: 3,
        problems: [
            {
                id: 1,
                title: "Hello C++",
                description: `Write a C++ program that prints "Hello, C++!" using cout.`,
                difficulty: 1,
                tags: ["c++", "basics", "easy"],
                starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print Hello, C++!\n    return 0;\n}`,
                solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}`,
                hints: ["Use #include <iostream>", "Use cout for printing"]
            },
            {
                id: 2,
                title: "Sum of Two Numbers",
                description: `Write code to add two integers and print the result.`,
                difficulty: 1,
                tags: ["c++", "arithmetic", "easy"],
                starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 25;\n    // Calculate sum\n    return 0;\n}`,
                solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 25;\n    cout << a + b << endl;\n    return 0;\n}`,
                hints: ["Use + operator"]
            }
        ]
    },

    javascript: {
        title: "JavaScript Problems",
        icon: "📜",
        color: "#f6e05e",
        totalProblems: 8,
        problems: [
            {
                id: 1,
                title: "Array Filter",
                description: `Use the filter() method to get all even numbers from an array.

Example:
const numbers = [1, 2, 3, 4, 5, 6];
Output: [2, 4, 6]`,
                difficulty: 1,
                tags: ["javascript", "arrays", "easy"],
                starterCode: `const numbers = [1, 2, 3, 4, 5, 6];
// Filter even numbers
const evens = numbers.filter(/* your code here */);
console.log(evens);`,
                solution: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);`,
                hints: ["Use arrow function", "Check if num % 2 === 0"]
            },
            {
                id: 2,
                title: "Object Manipulation",
                description: `Create an object representing a person with name and age properties, then add a method to greet.

Example Output:
"Hello, my name is John and I am 25 years old"`,
                difficulty: 2,
                tags: ["javascript", "objects", "medium"],
                starterCode: `const person = {
    // Add properties and method here
};

console.log(person.greet());`,
                solution: `const person = {
    name: "John",
    age: 25,
    greet() {
        return \`Hello, my name is \${this.name} and I am \${this.age} years old\`;
    }
};

console.log(person.greet());`,
                hints: ["Use template literals", "Use 'this' keyword"]
            },
            {
                id: 3,
                title: "DOM Manipulation",
                description: `Write code to change the text content of an element with id "demo" to "Hello, JavaScript!".

Note: This assumes an HTML element exists: <p id="demo">Original text</p>`,
                difficulty: 2,
                tags: ["javascript", "dom", "medium"],
                starterCode: `// Change text of element with id "demo"
`,
                solution: `document.getElementById("demo").textContent = "Hello, JavaScript!";`,
                hints: ["Use getElementById()", "Set textContent property"]
            },
            {
                id: 4,
                title: "Event Handling",
                description: `Write code to add a click event listener to a button that logs "Button clicked!" to the console.

Note: Assumes a button element exists: <button id="myButton">Click me</button>`,
                difficulty: 1,
                tags: ["javascript", "events", "easy"],
                starterCode: `// Add click event listener
`,
                solution: `document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
});`,
                hints: ["Use addEventListener()", "First parameter is 'click'"]
            },
            {
                id: 5,
                title: "Async/Await Practice",
                description: `Create an async function that simulates fetching data with a 1-second delay.

Output: "Data fetched!" (after 1 second)`,
                difficulty: 3,
                tags: ["javascript", "async", "hard"],
                starterCode: `async function fetchData() {
    // Simulate delay and return data
}

fetchData().then(data => console.log(data));`,
                solution: `async function fetchData() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Data fetched!";
}

fetchData().then(data => console.log(data));`,
                hints: ["Use Promise with setTimeout", "Return the data"]
            },
            {
                id: 6,
                title: "Array Methods",
                description: `Use map() to double all numbers in an array.

Example:
const numbers = [1, 2, 3, 4, 5];
Output: [2, 4, 6, 8, 10]`,
                difficulty: 1,
                tags: ["javascript", "arrays", "easy"],
                starterCode: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(/* your code here */);
console.log(doubled);`,
                solution: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);`,
                hints: ["Use arrow function", "Multiply by 2"]
            },
            {
                id: 7,
                title: "String Manipulation",
                description: `Write a function to capitalize the first letter of each word in a string.

Example:
Input: "hello world"
Output: "Hello World"`,
                difficulty: 1,
                tags: ["javascript", "strings", "easy"],
                starterCode: `function capitalizeWords(str) {
    // Your code here
}

console.log(capitalizeWords("hello world"));`,
                solution: `function capitalizeWords(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(capitalizeWords("hello world"));`,
                hints: ["Split by space", "Use charAt() and toUpperCase()"]
            },
            {
                id: 8,
                title: "Calculator Function",
                description: `Create a calculator function that takes two numbers and an operator (+, -, *, /) and returns the result.

Example:
calculate(10, 5, '+') → 15
calculate(10, 5, '*') → 50`,
                difficulty: 2,
                tags: ["javascript", "functions", "medium"],
                starterCode: `function calculate(a, b, operator) {
    // Your code here
}

console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '*'));`,
                solution: `function calculate(a, b, operator) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 'Invalid operator';
    }
}

console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '*'));`,
                hints: ["Use switch statement", "Handle each operator"]
            }
        ]
    },

    html: {
        title: "HTML/CSS Problems",
        icon: "🌎",
        color: "#ed8936",
        totalProblems: 6,
        problems: [
            {
                id: 1,
                title: "Create a Card Component",
                description: `Create an HTML card component with:
- A title
- An image
- A description
- A button

Style it with CSS to look like a modern card with shadow and hover effect.`,
                difficulty: 1,
                tags: ["html", "css", "easy"],
                starterCode: `<div class="card">
    <h3>Card Title</h3>
    <p>Card description goes here...</p>
    <button onclick="showAlert()">Click Me</button>
</div>

<style>
.card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    background: white;
    max-width: 250px;
    transition: transform 0.3s ease;
}
.card:hover {
    transform: translateY(-5px);
}
</style>

<script>
function showAlert() {
    console.log("Button clicked!");
    alert("Hello from JavaScript!");
}
</script>`,
                solution: `<div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Card image">
    <h3>Card Title</h3>
    <p>This is a description of the card content.</p>
    <button>Learn More</button>
</div>

<style>
.card {
    width: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background: white;
    overflow: hidden;
    transition: transform 0.3s;
}
.card:hover { transform: translateY(-5px); }
.card img { width: 100%; height: auto; }
.card h3, .card p { padding: 10px 20px; }
.card button { width: 100%; padding: 10px; border: none; background: #007bff; color: white; cursor: pointer; }
</style>`,
                hints: ["Use div for container", "Add img, h3, p, and button"]
            },
            {
                id: 2,
                title: "Responsive Navigation Bar",
                description: `Create a horizontal navigation bar with:
- Logo on the left
- Menu items on the right
- Hover effects
- Responsive design (stack vertically on mobile)`,
                difficulty: 2,
                tags: ["html", "css", "medium"],
                starterCode: `<!-- HTML -->
<nav class="navbar">
    <!-- Add your navigation here -->
</nav>`,
                solution: `<nav class="navbar">
    <div class="logo">MyLogo</div>
    <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<style>
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; background: #333; color: white; }
.nav-menu { display: flex; list-style: none; gap: 20px; }
.nav-menu a { color: white; text-decoration: none; transition: color 0.3s; }
.nav-menu a:hover { color: #ed8936; }
@media (max-width: 600px) {
    .navbar { flex-direction: column; }
    .nav-menu { flex-direction: column; align-items: center; }
}
</style>`,
                hints: ["Use flexbox for layout", "Add media queries"]
            },
            {
                id: 3,
                title: "Flexbox Layout",
                description: `Create a 3-column layout using Flexbox:
- Each column should be equal width
- Add some padding and background colors
- Make it responsive (stack on mobile)`,
                difficulty: 2,
                tags: ["html", "css", "flexbox", "medium"],
                starterCode: `<!-- HTML -->
<div class="container">
    <!-- Add your columns here -->
</div>`,
                solution: `<div class="container">
    <div class="column">Column 1</div>
    <div class="column">Column 2</div>
    <div class="column">Column 3</div>
</div>

<style>
.container { display: flex; gap: 20px; padding: 20px; }
.column { flex: 1; padding: 20px; background: #f0f0f0; border: 1px solid #ddd; text-align: center; }
@media (max-width: 768px) {
    .container { flex-direction: column; }
}
</style>`,
                hints: ["Use display: flex", "Use flex: 1 for equal width"]
            },
            {
                id: 4,
                title: "Grid Gallery",
                description: `Create a photo gallery using CSS Grid:
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Equal spacing between items`,
                difficulty: 2,
                tags: ["html", "css", "grid", "medium"],
                starterCode: `<!-- HTML -->
<div class="gallery">
    <!-- Add your images here -->
</div>`,
                solution: `<div class="gallery">
    <img src="https://via.placeholder.com/300" alt="Image 1">
    <img src="https://via.placeholder.com/300" alt="Image 2">
    <img src="https://via.placeholder.com/300" alt="Image 3">
    <img src="https://via.placeholder.com/300" alt="Image 4">
    <img src="https://via.placeholder.com/300" alt="Image 5">
    <img src="https://via.placeholder.com/300" alt="Image 6">
</div>

<style>
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 15px;
}
@media (max-width: 900px) { .gallery { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .gallery { grid-template-columns: 1fr; } }
.gallery img { width: 100%; border-radius: 8px; }
</style>`,
                hints: ["Use display: grid", "Use grid-template-columns"]
            },
            {
                id: 5,
                title: "Form Styling",
                description: `Create a styled contact form with:
- Name input
- Email input
- Message textarea
- Submit button
- Modern styling with focus effects`,
                difficulty: 1,
                tags: ["html", "css", "forms", "easy"],
                starterCode: `<!-- HTML -->
<form class="contact-form">
    <input type="text" placeholder="Name" />
    <button type="submit">Send</button>
</form>

<style>
/* Add your CSS here */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
}
</style>

<script>
// Add your JavaScript here
console.log("Form component initialized");
</script>`,
                solution: `<form class="contact-form">
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
</form>

<style>
.contact-form { display: flex; flex-direction: column; gap: 15px; max-width: 400px; margin: auto; padding: 20px; }
.contact-form input, .contact-form textarea { padding: 10px; border: 1px solid #ccc; border-radius: 4px; transition: border-color 0.3s; }
.contact-form input:focus, .contact-form textarea:focus { border-color: #007bff; outline: none; }
.contact-form button { padding: 10px; border: none; background: #007bff; color: white; border-radius: 4px; cursor: pointer; }
</style>`,
                hints: ["Use input and textarea", "Add placeholder text"]
            },
            {
                id: 6,
                title: "Animation Effects",
                description: `Create a button with:
- Smooth hover animation
- Scale effect on hover
- Color transition
- Box shadow on hover`,
                difficulty: 3,
                tags: ["html", "css", "animations", "hard"],
                starterCode: `<!-- HTML -->
<button class="animated-btn">Hover Me</button>`,
                solution: `<button class="animated-btn">Hover Me</button>

<style>
.animated-btn {
    padding: 15px 30px;
    font-size: 18px;
    background: #6a11cb;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.animated-btn:hover {
    transform: scale(1.1);
    background: #2575fc;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
</style>`,
                hints: ["Use transition property", "Use transform: scale()"]
            }
        ]
    },

    css: {
        title: "CSS Problems",
        icon: "🎨",
        color: "#38b2ac",
        totalProblems: 3,
        problems: [
            {
                id: 1,
                title: "Center Div",
                description: `Center the inner div both horizontally and vertically inside the container using Flexbox.`,
                difficulty: 1,
                tags: ["css", "flexbox", "easy"],
                starterCode: `<div class="container">
    <div class="box">Center Me</div>
</div>

<style>
.container {
    height: 300px;
    border: 2px dashed #ccc;
    display: flex;
    /* Add properties below */
    
}

.box {
    width: 100px;
    height: 100px;
    background-color: #667eea;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}
</style>`,
                solution: `<div class="container">
    <div class="box">Center Me</div>
</div>

<style>
.container {
    height: 300px;
    border: 2px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    width: 100px;
    height: 100px;
    background-color: #667eea;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}
</style>`,
                hints: ["Use justify-content: center", "Use align-items: center"]
            },
            {
                id: 2,
                title: "Grid Layout",
                description: `Create a 3-column grid layout where each item has spacing between them.`,
                difficulty: 2,
                tags: ["css", "grid", "medium"],
                starterCode: `<div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>

<style>
.grid-container {
    display: grid;
    /* Add grid columns and gap here */
}

.item {
    background: #764ba2;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
}
</style>`,
                solution: `<div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.item {
    background: #764ba2;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
}
</style>`,
                hints: ["Use grid-template-columns", "Use gap for spacing"]
            },
            {
                id: 3,
                title: "Custom Button",
                description: `Create a professional button with hover effects and transitions.`,
                difficulty: 1,
                tags: ["css", "buttons", "easy"],
                starterCode: `<button class="my-button">Hover Me</button>

<style>
.my-button {
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    /* Add transition and hover effects below */
}
</style>`,
                solution: `<button class="my-button">Hover Me</button>

<style>
.my-button {
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.my-button:hover {
    background: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>`,
                hints: ["Use transition: all 0.3s", "Use :hover selector"]
            }
        ]
    },

    angular: {
        title: "Angular Problems",
        icon: "🅰️",
        color: "#dd0031",
        totalProblems: 2,
        problems: [
            {
                id: 1,
                title: "Angular Interpolation",
                description: `Display a name variable in the template using interpolation.`,
                difficulty: 1,
                tags: ["angular", "basics"],
                starterCode: `@Component({
  selector: 'app-root',
  template: '<h1>{{ <!-- displayed here --> }}</h1>'
})
class AppComponent {
  name = 'Angular User';
}`,
                solution: `@Component({
  selector: 'app-root',
  template: '<h1>{{ name }}</h1>'
})
class AppComponent {
  name = 'Angular User';
}`,
                hints: ["Use double curly braces"]
            },
            {
                id: 2,
                title: "Angular Click Event",
                description: `Bind a click event to a button to call a method.`,
                difficulty: 2,
                tags: ["angular", "events"],
                starterCode: `<button (<!-- event -->)="doSomething()">Click</button>`,
                solution: `<button (click)="doSomething()">Click</button>`,
                hints: ["Use (click) parenthesis"]
            }
        ]
    },

    react: {
        title: "React Problems",
        icon: "⚛️",
        color: "#61dafb",
        totalProblems: 6,
        problems: [
            {
                id: 1,
                title: "Counter Component",
                description: `Create a counter component with:
- Display current count
- Increment button
- Decrement button
- Reset button

Use useState hook to manage the count state.`,
                difficulty: 1,
                tags: ["react", "hooks", "easy"],
                starterCode: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Counter = () => {
    // Add your code here
};

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);`,
                solution: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);`,
                hints: ["Use useState(0)", "Update state with setCount"]
            },
            {
                id: 2,
                title: "Todo List",
                description: `Create a todo list component with:
- Input field to add new todos
- List of todos
- Delete button for each todo
- Use useState to manage todos array`,
                difficulty: 2,
                tags: ["react", "hooks", "medium"],
                starterCode: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const TodoList = () => {
    // Add your code here
};

const root = createRoot(document.getElementById('root'));
root.render(<TodoList />);`,
                solution: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput('');
        }
    };
    
    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };
    
    return (
        <div>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<TodoList />);`,
                hints: ["Use array spread operator", "Use filter to delete"]
            },
            {
                id: 3,
                title: "Form Validation",
                description: `Create a form with validation:
- Email input
- Password input (min 6 characters)
- Show error messages
- Disable submit if invalid`,
                difficulty: 2,
                tags: ["react", "forms", "medium"],
                starterCode: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const FormValidation = () => {
    // Add your code here
};

const root = createRoot(document.getElementById('root'));
root.render(<FormValidation />);`,
                solution: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const FormValidation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    
    const validate = () => {
        const newErrors = {};
        if (!email.includes('@')) {
            newErrors.email = 'Invalid email';
        }
        if (password.length < 6) {
            newErrors.password = 'Password must be 6+ characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted!');
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            {errors.email && <p>{errors.email}</p>}
            
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {errors.password && <p>{errors.password}</p>}
            
            <button type="submit">Submit</button>
        </form>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<FormValidation />);`,
                hints: ["Validate on submit", "Store errors in state"]
            },
            {
                id: 4,
                title: "API Data Fetching",
                description: `Create a component that fetches and displays data:
- Use useEffect to fetch data on mount
- Show loading state
- Display the data
- Handle errors

Use: https://jsonplaceholder.typicode.com/users`,
                difficulty: 3,
                tags: ["react", "hooks", "api", "hard"],
                starterCode: `import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const DataFetcher = () => {
    // Add your code here
};

const root = createRoot(document.getElementById('root'));
root.render(<DataFetcher />);`,
                solution: `import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<DataFetcher />);`,
                hints: ["Use useEffect with empty dependency array", "Handle loading and error states"]
            },
            {
                id: 5,
                title: "State Management",
                description: `Create a component with multiple state values:
- Name (string)
- Age (number)
- isStudent (boolean)
- Display all values
- Buttons to update each`,
                difficulty: 2,
                tags: ["react", "state", "medium"],
                starterCode: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const StateManagement = () => {
    // Add your code here
};

const root = createRoot(document.getElementById('root'));
root.render(<StateManagement />);`,
                solution: `import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const StateManagement = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(false);
    
    return (
        <div>
            <p>Name: {name}</p>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            
            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
            
            <p>Student: {isStudent ? 'Yes' : 'No'}</p>
            <button onClick={() => setIsStudent(!isStudent)}>Toggle</button>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<StateManagement />);`,
                hints: ["Use multiple useState hooks", "Update each independently"]
            },
            {
                id: 6,
                title: "Component Props",
                description: `Create a reusable Card component that accepts props:
- title
- description
- imageUrl

Then use it to display multiple cards.`,
                difficulty: 1,
                tags: ["react", "props", "easy"],
                starterCode: `import React from "react";
import { createRoot } from "react-dom/client";

const Card = (props) => {
    // Add your code here
};

const App = () => {
    return (
        <div>
            {/* Use Card component here */}
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);`,
                solution: `import React from "react";
import { createRoot } from "react-dom/client";

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card 
                title="Card 1"
                description="This is card 1"
                imageUrl="https://via.placeholder.com/150"
            />
            <Card 
                title="Card 2"
                description="This is card 2"
                imageUrl="https://via.placeholder.com/150"
            />
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);`,
                hints: ["Destructure props", "Reuse component with different props"]
            }
        ]
    }
};

// Helper functions
export const getCustomProblems = (topic) => {
    const customProblems = JSON.parse(localStorage.getItem('customProblems') || '{}');
    return customProblems[topic] || [];
};

export const addCustomProblem = (topic, problem) => {
    const customProblems = JSON.parse(localStorage.getItem('customProblems') || '{}');
    if (!customProblems[topic]) {
        customProblems[topic] = [];
    }
    customProblems[topic].push(problem);
    localStorage.setItem('customProblems', JSON.stringify(customProblems));
};

export const deleteProblem = (topic, problemId) => {
    // Check if it's a custom problem
    const customProblems = JSON.parse(localStorage.getItem('customProblems') || '{}');
    if (customProblems[topic]) {
        const initialLength = customProblems[topic].length;
        customProblems[topic] = customProblems[topic].filter(p => p.id !== problemId);

        if (customProblems[topic].length < initialLength) {
            localStorage.setItem('customProblems', JSON.stringify(customProblems));
            return; // Deleted from custom, we are done
        }
    }

    // If not custom, assume it's static and add to deleted list
    const deletedStatic = JSON.parse(localStorage.getItem('deletedStaticProblems') || '{}');
    if (!deletedStatic[topic]) {
        deletedStatic[topic] = [];
    }
    if (!deletedStatic[topic].includes(problemId)) {
        deletedStatic[topic].push(problemId);
        localStorage.setItem('deletedStaticProblems', JSON.stringify(deletedStatic));
    }
};

export const getAllTopics = () => {
    return Object.keys(problemsData).map(key => {
        const customCount = getCustomProblems(key).length;
        return {
            id: key,
            title: problemsData[key].title,
            icon: problemsData[key].icon,
            color: problemsData[key].color,
            totalProblems: problemsData[key].totalProblems + customCount,
            solvedCount: getSolvedCount(key)
        };
    });
};

export const getProblemsByTopic = (topic) => {
    const data = problemsData[topic];
    if (!data) return null;

    const customProblems = getCustomProblems(topic);

    // Get deleted static problems
    const deletedStatic = JSON.parse(localStorage.getItem('deletedStaticProblems') || '{}');
    const deletedIds = deletedStatic[topic] || [];

    // Filter static problems
    const visibleStaticProblems = data.problems.filter(p => !deletedIds.includes(p.id));

    return {
        ...data,
        problems: [...visibleStaticProblems, ...customProblems],
        totalProblems: visibleStaticProblems.length + customProblems.length
    };
};

export const getProblemById = (topic, problemId) => {
    const topicData = getProblemsByTopic(topic);
    if (!topicData) return null;
    return topicData.problems.find(p => p.id === parseInt(problemId));
};

export const getSolvedCount = (topic) => {
    const solved = JSON.parse(localStorage.getItem('solvedProblems') || '{}');
    return solved[topic]?.length || 0;
};

export const markProblemSolved = (topic, problemId) => {
    const solved = JSON.parse(localStorage.getItem('solvedProblems') || '{}');
    if (!solved[topic]) {
        solved[topic] = [];
    }
    if (!solved[topic].includes(problemId)) {
        solved[topic].push(problemId);
        localStorage.setItem('solvedProblems', JSON.stringify(solved));
    }
};

export const isProblemSolved = (topic, problemId) => {
    const solved = JSON.parse(localStorage.getItem('solvedProblems') || '{}');
    return solved[topic]?.includes(problemId) || false;
};

export const saveUserCode = (topic, problemId, code) => {
    const userCode = JSON.parse(localStorage.getItem('userCode') || '{}');
    if (!userCode[topic]) {
        userCode[topic] = {};
    }
    userCode[topic][problemId] = code;
    localStorage.setItem('userCode', JSON.stringify(userCode));
};

export const getUserCode = (topic, problemId) => {
    const userCode = JSON.parse(localStorage.getItem('userCode') || '{}');
    return userCode[topic]?.[problemId] || null;
};

```

