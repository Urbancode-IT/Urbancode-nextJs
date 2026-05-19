// Coding problems data organized by topic
// Each problem includes: id, title, description, difficulty, tags, starter code, test cases, and solution

const miniStatements = [
    "Welcome to Urbancode Compiler",
    "Practice makes perfect",
    "Hello, Mini Question 3",
    "Code. Test. Improve.",
    "Think first, then code",
    "Consistency beats intensity",
    "Debugging is learning",
    "Focus on clean logic",
    "Small steps, big progress",
    "Solve one bug at a time",
    "Never stop practicing",
    "Write readable code",
    "Keep functions simple",
    "Check your edge cases",
    "Learn by building daily",
    "Strong basics win interviews",
    "Test before final submit",
    "Break problems into parts",
    "Name variables clearly",
    "Master loops and conditions",
    "Understand before optimizing",
    "Fix errors calmly",
    "Predict output first",
    "Use console logs wisely",
    "Practice arrays every day",
    "Functions make code reusable",
    "Comments should add value",
    "Validate input carefully",
    "Handle invalid cases",
    "Avoid duplicate code",
    "Read problem twice",
    "Write pseudocode first",
    "Syntax matters a lot",
    "Plan then implement",
    "Refactor for clarity",
    "One concept per session",
    "Build confidence with repetition",
    "Review solved problems",
    "Ask why, not just how",
    "Sharpen problem-solving mindset",
    "Track your learning streak",
    "Time your coding attempts",
    "Learn from wrong answers",
    "Stay curious and consistent",
    "Strong logic beats shortcuts",
    "Solve, then explain",
    "Be patient with complex bugs",
    "Improve line by line",
    "Discipline creates mastery",
    "Ready for question 50"
];

const miniProblems = miniStatements.map((statement, index) => ({
    id: index + 1,
    title: `Mini Print Challenge ${index + 1}`,
    description: `Write a JavaScript program that prints exactly this text:\n"${statement}"`,
    difficulty: 1,
    tags: ["javascript", "mini", "beginner"],
    starterCode: `// Print the exact statement below
console.log("");`,
    testCases: [
        {
            input: "No input",
            expectedOutput: statement,
        }
    ],
    solution: `console.log("${statement}");`,
    hints: ["Use console.log()", "Match the sentence exactly as given"],
    theory: "This mini challenge focuses on output formatting and basic JavaScript syntax. Use console.log() to print the exact expected text."
}));

/* Do not pad every topic to the same count — topic cards use totalProblems and would all look identical (e.g. 0/50). */
const TOPIC_MIN_PROBLEMS = 0;
const AUTO_DIFFICULTY_CYCLE = [2, 3, 2, 3, 2];
const AUTO_TASKS = [
    "Compute the sum from 1 to N",
    "Reverse a given word",
    "Count vowels in a sentence",
    "Check palindrome text",
    "Generate first N Fibonacci numbers"
];

const getDifficultyForChallenge = (challengeNo) =>
    AUTO_DIFFICULTY_CYCLE[(challengeNo - 1) % AUTO_DIFFICULTY_CYCLE.length];

const makeTaskPayload = (challengeNo) => {
    const type = (challengeNo - 1) % AUTO_TASKS.length;
    const n = 8 + (challengeNo % 9);
    const word = `compiler${challengeNo}`;
    const phrase = `Urbancode Challenge ${challengeNo}`;
    return { type, n, word, phrase };
};

const getSqlTemplate = ({ type, n, word, phrase }) => {
    if (type === 0) {
        return {
            description: `Using a CTE, generate numbers from 1 to ${n} and return their total sum as total_sum.`,
            starterCode: `-- Use recursive CTE to generate sequence and sum it
WITH RECURSIVE seq(n) AS (
  SELECT 1
  UNION ALL
  SELECT n + 1 FROM seq WHERE n < ${n}
)
SELECT 0 AS total_sum;`,
            solution: `WITH RECURSIVE seq(n) AS (
  SELECT 1
  UNION ALL
  SELECT n + 1 FROM seq WHERE n < ${n}
)
SELECT SUM(n) AS total_sum FROM seq;`
        };
    }
    if (type === 1) {
        return {
            description: `Reverse the text '${word}' using SQL string functions and return it as reversed_text.`,
            starterCode: `SELECT '' AS reversed_text;`,
            solution: `SELECT REVERSE('${word}') AS reversed_text;`
        };
    }
    if (type === 2) {
        return {
            description: `Count vowels in '${phrase}' and return the result as vowel_count.`,
            starterCode: `SELECT 0 AS vowel_count;`,
            solution: `SELECT LENGTH(LOWER('${phrase}')) - LENGTH(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(LOWER('${phrase}'),'a',''),'e',''),'i',''),'o',''),'u','')) AS vowel_count;`
        };
    }
    if (type === 3) {
        return {
            description: `Check whether '${word.split('').reverse().join('')}' is a palindrome. Return 'YES' or 'NO' as is_palindrome.`,
            starterCode: `SELECT 'NO' AS is_palindrome;`,
            solution: `SELECT CASE WHEN '${word.split('').reverse().join('')}' = REVERSE('${word.split('').reverse().join('')}') THEN 'YES' ELSE 'NO' END AS is_palindrome;`
        };
    }
    return {
        description: `Return first ${Math.min(n, 10)} Fibonacci values in ascending order as column fib_value using a recursive CTE.`,
        starterCode: `-- Return fibonacci sequence
SELECT 0 AS fib_value;`,
        solution: `WITH RECURSIVE fib(step, a, b) AS (
  SELECT 1, 0, 1
  UNION ALL
  SELECT step + 1, b, a + b FROM fib WHERE step < ${Math.min(n, 10)}
)
SELECT a AS fib_value FROM fib;`
    };
};

const getScriptTemplate = (topic, payload) => {
    const { type, n, word, phrase } = payload;
    if (type === 0) return { title: `Sum 1..${n}`, statement: String((n * (n + 1)) / 2) };
    if (type === 1) return { title: `Reverse '${word}'`, statement: word.split('').reverse().join('') };
    if (type === 2) {
        const v = (phrase.toLowerCase().match(/[aeiou]/g) || []).length;
        return { title: `Vowel Count`, statement: String(v) };
    }
    if (type === 3) {
        const text = word.split('').reverse().join('');
        return { title: `Palindrome Check`, statement: text === text.split('').reverse().join('') ? "YES" : "NO" };
    }
    const fibN = Math.min(n, 10);
    const fib = [0, 1];
    while (fib.length < fibN) fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return { title: `Fibonacci ${fibN}`, statement: fib.slice(0, fibN).join(" ") };
};

const buildAutoProblemByTopic = (topic, id, challengeNo) => {
    const payload = makeTaskPayload(challengeNo);
    const difficulty = getDifficultyForChallenge(challengeNo);
    const base = {
        id,
        title: `${topic.toUpperCase()} Challenge ${challengeNo}: ${AUTO_TASKS[payload.type]}`,
        description: `Solve this ${difficulty === 3 ? "tough" : "average"} problem: ${AUTO_TASKS[payload.type]}.`,
        difficulty,
        tags: [topic, "auto-generated", difficulty === 3 ? "tough" : "average"],
        hints: [
            "Break the problem into small steps",
            "Handle edge cases before final output"
        ],
        theory: "This auto-generated challenge focuses on algorithmic thinking, transformation logic, and clean implementation."
    };

    if (["sql", "mysql", "postgresql", "sqlserver"].includes(topic)) {
        const sql = getSqlTemplate(payload);
        return {
            ...base,
            description: sql.description,
            starterCode: sql.starterCode,
            solution: sql.solution
        };
    }

    const template = getScriptTemplate(topic, payload);

    if (topic === "python") {
        return {
            ...base,
            title: `${topic.toUpperCase()} Challenge ${challengeNo}: ${template.title}`,
            description: `${AUTO_TASKS[payload.type]} and print only the final result.`,
            starterCode: "def solve():\n    # write logic\n    pass\n\nsolve()",
            solution: `def solve():\n    print("${template.statement}")\n\nsolve()`
        };
    }

    if (topic === "java") {
        return {
            ...base,
            title: `${topic.toUpperCase()} Challenge ${challengeNo}: ${template.title}`,
            description: `${AUTO_TASKS[payload.type]} and print the result.`,
            starterCode: `public class Main {
    public static void main(String[] args) {
        // Write logic
    }
}`,
            solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("${template.statement}");
    }
}`
        };
    }

    if (topic === "c++") {
        return {
            ...base,
            title: `${topic.toUpperCase()} Challenge ${challengeNo}: ${template.title}`,
            description: `${AUTO_TASKS[payload.type]} and print the result.`,
            starterCode: `#include <iostream>
using namespace std;

int main() {
    // Write logic
    return 0;
}`,
            solution: `#include <iostream>
using namespace std;

int main() {
    cout << "${template.statement}" << endl;
    return 0;
}`
        };
    }

    if (topic === "html") {
        return {
            ...base,
            title: `${topic.toUpperCase()} Challenge ${challengeNo}: Semantic Layout`,
            description: "Build a semantic card layout with heading, paragraph, and button inside a section.",
            starterCode: `<section class="challenge-card">
</section>`,
            solution: `<section class="challenge-card">
  <h1>Challenge ${challengeNo}</h1>
  <p>Build clean semantic HTML structure.</p>
  <button>Start Solving</button>
</section>`
        };
    }

    if (topic === "css") {
        return {
            ...base,
            title: `${topic.toUpperCase()} Challenge ${challengeNo}: Card Styling`,
            description: "Style a card with gradient background, rounded corners, and hover transition.",
            starterCode: `.challenge-card {
}`,
            solution: `.challenge-card {
    background: linear-gradient(135deg, #1d4ed8, #7c3aed);
    color: #ffffff;
    border-radius: 14px;
    padding: 16px;
    transition: transform 0.25s ease;
}

.challenge-card:hover {
    transform: translateY(-4px);
}`
        };
    }

    if (topic === "react") {
        return {
            ...base,
            title: `${topic.toUpperCase()} Challenge ${challengeNo}: Dynamic Component`,
            description: "Create a React component that renders a title and maps over at least three list items.",
            starterCode: `import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return <div></div>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);`,
            solution: `import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    const items = ["Arrays", "Objects", "Functions"];
    return (
        <div>
            <h1>React Challenge ${challengeNo}</h1>
            <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);`
        };
    }

    if (topic === "angular") {
        return {
            ...base,
            title: `${topic.toUpperCase()} Challenge ${challengeNo}: Template Binding`,
            description: "Use interpolation and *ngFor style rendering in template syntax.",
            starterCode: `<h2></h2>
<ul></ul>`,
            solution: `<h2>{{title}}</h2>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>`
        };
    }

    return {
        ...base,
        title: `${topic.toUpperCase()} Challenge ${challengeNo}: ${template.title}`,
        description: `${AUTO_TASKS[payload.type]} and print final output only.`,
        starterCode: `function solve() {
  // write logic
}
solve();`,
        solution: `function solve() {
  console.log("${template.statement}");
}
solve();`
    };
};

export const problemsData = {
    mini: {
        title: "Mini JavaScript Questions",
        icon: "javascript",
        color: "#8a5cf6",
        totalProblems: 50,
        problems: miniProblems
    },
    sql: {
        title: "SQL Problems",
        icon: "sql",
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
                hints: ["Use WHERE clause to filter", "Combine conditions with AND"],
                theory: "To solve this problem, you need to filter rows based on two criteria:\n1. The pet type must be 'Dog'.\n2. The age must be greater than 3.\n\nLogic:\n1. Use the 'WHERE' clause to filter records in SQL.\n2. Combine multiple conditions using the 'AND' operator.\n3. Ensure you use single quotes for string literals like 'Dog' and numerical comparison for age."
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
                hints: ["Use WHERE clause"],
                theory: "This problem focuses on simple numerical comparison in SQL.\n\nLogic:\n1. Use the 'WHERE' clause to evaluate each row.\n2. Compare the 'total_purchases' column against the value 1000 using the greater-than (>) operator.\n3. The database engine will scan the table and return only those rows where the condition evaluates to TRUE."
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
                hints: ["Filter by department", "Use ORDER BY for sorting"],
                theory: "Managing lists often requires both filtering and sorting.\n\nLogic:\n1. **Filtering**: Use `WHERE department = 'IT'` to isolate specific employees.\n2. **Sorting**: Use `ORDER BY salary DESC` to display the highest earners first.\n3. Note: In SQL, 'DESC' stands for Descending (highest to lowest), while 'ASC' is Ascending (lowest to highest)."
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
                hints: ["Use JOIN to combine tables", "Use SUM and GROUP BY"],
                theory: "Joining tables and aggregating data is essential for relational database analysis.\n\nLogic:\n1. **Joining**: Use `JOIN` (specifically `INNER JOIN` by default) to combine the 'ElectronicsProducts' and 'sales' tables based on their shared `product_id` column.\n2. **Summarizing**: Use the `SUM(quantity_sold)` aggregate function to calculate the total units sold.\n3. **Grouping**: The `GROUP BY p.product_name` clause is mandatory when using aggregate functions with non-aggregated columns. It tells the DB to calculate the sum for each unique product name independently."
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
                hints: ["Use >= for grade level", "Combine conditions with AND"],
                theory: "This problem involves filtering based on a range and a specific threshold.\n\nLogic:\n1. Use `grade_level >= 10` to include grade 10, 11, and 12.\n2. Use `gpa > 3.5` for academic excellence.\n3. Combine these with `AND` to ensure only students meeting both criteria are returned."
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
                hints: ["Filter by three conditions", "Use AND to combine"],
                theory: "Multi-condition filtering is a common business requirement.\n\nLogic:\n1. Use `membership_type = 'VIP'` for high-value status.\n2. Use `city = 'Mumbai'` for regional targeting.\n3. Use `total_purchases > 50000` for sales volume.\n4. Join all three with `AND` to find the exact subset of customers meeting every requirement."
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
                hints: ["Use COUNT(*) function", "Give it an alias"],
                theory: "Counting records is the most fundamental aggregate operation.\n\nLogic:\n1. The `COUNT(*)` function counts every row that matches your criteria.\n2. In this case, since there is no `WHERE` clause, it counts all rows in the 'orders' table.\n3. Using `as total_orders` (aliasing) is best practice for returning a meaningful column name to the application."
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
                hints: ["Use AVG() function", "Filter by department"],
                theory: "Aggregate functions compute a single result from multiple rows.\n\nLogic:\n1. The `AVG()` function sums the values in the 'salary' column and divides by the count of rows.\n2. The `WHERE` clause ensures only 'Sales' department employees are included in the calculation.\n3. Aliasing (`as average_salary`) makes the output easier to read."
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
                hints: ["Filter by brand and warranty", "Use ORDER BY"],
                theory: "This query combines filtering across different data types (string and number) with sorting.\n\nLogic:\n1. Use `brand = 'Samsung'` for exact string matching.\n2. Use `warranty_years >= 2` for a range/threshold check.\n3. Finally, apply `ORDER BY price` to present the results in an organized way (ascending by default)."
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
                hints: ["Use MAX() function", "Filter by status"],
                theory: "Identifying extremes (like the highest price or latest date) is a frequent SQL operation.\n\nLogic:\n1. The `MAX(order_amount)` function scans values and keeps track of the highest one encountered.\n2. By using `WHERE order_status = 'Completed'`, we restrict the search space to only finalized orders, excluding cancelled or pending ones.\n3. Using an alias (`as max_order`) ensures the returned data is easily identifiable by the application."
            }
        ]
    },

    mysql: {
        title: "MySQL Problems",
        icon: "mysql",
        color: "#00758F",
        totalProblems: 4,
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
                hints: ["Use DISTINCT keyword"],
                theory: "Databases often contain redundant data entries. For analytical purposes, we frequently need to see unique values only.\n\nLogic:\n1. The `DISTINCT` keyword follows the `SELECT` statement and instructs the database engine to remove duplicate rows from the resulting set.\n2. In this case, even if you have 1,000 customers from the same country, `DISTINCT country` will return that country name only once."
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
                hints: ["Use WHERE age < 25"],
                theory: "Conditional filtering is the primary way to extract specific segments of a dataset.\n\nLogic:\n1. The `WHERE` clause acts as a gatekeeper for each row.\n2. The `<` (less than) operator performs a mathematical comparison between the value in the 'age' column and the integer 25.\n3. Only rows where the 'age' column value is numerically 24 or less will satisfy the condition and be returned."
            },
            {
                id: 3,
                title: "Update Customer Status",
                description: `Write a MySQL query to update the status of customer with ID 5 to 'Active'.`,
                difficulty: 2,
                tags: ["mysql", "dm"],
                starterCode: `-- Write your SQL update here
UPDATE CustomersArchive SET status = 'Active'`,
                solution: `UPDATE CustomersArchive SET status = 'Active' WHERE id = 5;`,
                hints: ["Use WHERE to target ID 5"],
                theory: "Data modification (DML) allows you to keep records up to date as business states change.\n\nLogic:\n1. The \`UPDATE\` command specifies the target table.\n2. The \`SET status = 'Active'\` clause defines the change to be applied.\n3. Crucially, the \`WHERE id = 5\` clause prevents the update from affecting every single row in the database, which is a common and dangerous beginner mistake!"
            },
            {
                id: 4,
                title: "Delete Inactive Orders",
                description: `Remove all orders from OrdersArchive that have a 'Cancelled' status.`,
                difficulty: 2,
                tags: ["mysql", "dm"],
                starterCode: `-- Write your SQL delete here
DELETE FROM OrdersArchive`,
                solution: `DELETE FROM OrdersArchive WHERE status = 'Cancelled';`,
                hints: ["Filter by status"],
                theory: "Purging old or irrelevant data is necessary for maintaining database performance and relevance.\n\nLogic:\n1. The \`DELETE FROM\` statement identifies the source table.\n2. The \`WHERE\` clause acts as a filter to select only those records that should be permanently removed.\n3. Always verify your filter with a SELECT query before running a DELETE in a real production environment."
            }
        ]
    },

    postgresql: {
        title: "PostgreSQL Problems",
        icon: "postgresql",
        color: "#336791",
        totalProblems: 4,
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
                hints: ["Filter by item name"],
                theory: "Searching for specific text patterns is a cornerstone of database querying.\n\nLogic:\n1. Use the `=` operator for an exact string match.\n2. String literals in SQL must be enclosed in single quotes (e.g., 'Keyboard').\n3. This query uses the `WHERE` clause to filter out every order except those where the item column matches the search term exactly."
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
                hints: ["Use WHERE amount > 500"],
                theory: "Numerical filtering allows you to identify high-value or low-value transactions.\n\nLogic:\n1. The `>` (greater than) operator is used within a `WHERE` clause.\n2. It evaluates the 'amount' column for every record.\n3. In PostgreSQL, this type of filtering is highly efficient when the 'amount' column is indexed."
            },
            {
                id: 3,
                title: "Count Items per User",
                description: `Find the total number of orders placed by each customer. Display customer_id and order_count.`,
                difficulty: 2,
                tags: ["postgresql", "aggregation"],
                starterCode: `-- Write your SQL query here
SELECT customer_id, COUNT(*) FROM OrdersArchive`,
                solution: `SELECT customer_id, COUNT(*) as order_count FROM OrdersArchive GROUP BY customer_id;`,
                hints: ["Use GROUP BY keyword"],
                theory: "Aggregation allows you to condense large datasets into summarized statistics.\n\nLogic:\n1. The \`COUNT(*)\` function calculates the number of rows.\n2. The \`GROUP BY customer_id\` clause tells PostgreSQL to perform this count separately for each unique value found in the customer_id column.\n3. This is essential for generating user activity reports."
            },
            {
                id: 4,
                title: "Range Search",
                description: `Find all orders where the amount is between 100 and 1000 inclusive.`,
                difficulty: 1,
                tags: ["postgresql", "basics"],
                starterCode: `-- Write your SQL query here
SELECT * FROM OrdersArchive`,
                solution: `SELECT * FROM OrdersArchive WHERE amount BETWEEN 100 AND 1000;`,
                hints: ["Use BETWEEN operator"],
                theory: "The BETWEEN operator provides a clean syntax for inclusive range filtering.\n\nLogic:\n1. Instead of writing \`amount >= 100 AND amount <= 1000\`, you can use the more readable \`BETWEEN\` keyword.\n2. It works with numbers, text, and dates.\n3. PostgreSQL internals optimize range queries, especially on indexed columns."
            }
        ]
    },

    sqlserver: {
        title: "SQL Server Problems",
        icon: "sqlserver",
        color: "#CC2927",
        totalProblems: 4,
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
                hints: ["Filter by status"],
                theory: "Monitoring operational status is critical for logistical applications.\n\nLogic:\n1. The \`WHERE status = 'Pending'\` clause isolates unresolved shipments for immediate action.\n2. SQL Server handles string comparisons efficiently, but remember that comparisons are generally case-insensitive or case-sensitive depending on the database collation settings (usually case-insensitive by default in many T-SQL environments)."
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
                hints: ["Use AVG() function"],
                theory: "Averages provide a 'big picture' view of a dataset, such as typical spending habits.\n\nLogic:\n1. \`AVG(amount)\` is an aggregate function that sums all values in the column and divides by the total number of non-null records.\n2. The result is a single value reflecting the mean order amount.\n3. Using an alias (\`as average_amount\`) makes the result set easier to interpret by the calling code."
            },
            {
                id: 3,
                title: "Top Order Amount",
                description: `Find the single highest order amount in the system.`,
                difficulty: 2,
                tags: ["sqlserver", "basics"],
                starterCode: `-- Write your SQL Server query here
SELECT TOP 1 amount FROM OrdersArchive`,
                solution: `SELECT TOP 1 amount FROM OrdersArchive ORDER BY amount DESC;`,
                hints: ["Use TOP 1 and ORDER BY DESC"],
                theory: "SQL Server uses the TOP keyword to limit the number of rows returned in a result set.\n\nLogic:\n1. The \`SELECT TOP 1\` part tells the engine to stop after finding the first match.\n2. To find the 'highest', we must sort the data in descending order (\`ORDER BY amount DESC\`) first.\n3. The combination ensures you get the absolute maximum value."
            },
            {
                id: 4,
                title: "Pattern Matching Names",
                description: `Find all customers whose names start with the letter 'A'.`,
                difficulty: 1,
                tags: ["sqlserver", "basics"],
                starterCode: `-- Write your SQL Server query here
SELECT * FROM CustomersArchive`,
                solution: `SELECT * FROM CustomersArchive WHERE name LIKE 'A%';`,
                hints: ["Use LIKE 'A%'"],
                theory: "The LIKE operator is used for searching for a specified pattern in a column.\n\nLogic:\n1. The \`%\` wildcard represents zero, one, or multiple characters.\n2. \`'A%'\` matches any string that starts with 'A' followed by anything else.\n3. This is essential for search features where users might only remember the beginning of a name."
            }
        ]
    },

    python: {
        title: "Python Problems",
        icon: "python",
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
                hints: ["Use a dictionary to store seen numbers", "Check if complement exists"],
                theory: "The Two Sum problem can be solved efficiently using a Hash Map (dictionary in Python).\n\nLogic:\n1. Iterate through the numbers while keeping track of the values you've already seen and their indices.\n2. For each number, calculate its 'complement' (target - current_number).\n3. If the complement exists in your map, you've found the pair!\n4. This approach reduces the time complexity from O(n²) to O(n).",
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
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
                hints: ["Use string slicing", "[::-1] reverses a string"],
                theory: "String reversal is a fundamental exercise in understanding data sequences.\n\nPythonic Logic:\nPython strings can be sliced using the syntax `[start:stop:step]`. By setting the step to -1, Python iterates through the string backwards from the end to the beginning, effectively reversing it in a single line of code.\n\nAlgorithmic Logic:\nAlternatively, you could use a loop to build a new string by taking characters from the end of the original string one by one.",
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
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
                hints: ["Compare string with its reverse", "Use slicing"],
                theory: "A palindrome is a sequence that reads the same forwards and backwards.\n\nLogic:\n1. Generate the reverse of the input string.\n2. Compare the original string with the reversed one using the equality operator (==).\n3. If they are identical, the string is a palindrome.\n\nTip: For more complex palindromes (like sentences), you would first need to remove spaces and convert all characters to lowercase."
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
                hints: ["Check divisibility by 15 first", "Use modulo operator %"],
                theory: "FizzBuzz is a classic logic test used to check basic control flow and conditional understanding.\n\nLogic:\n1. Loop from 1 to N.\n2. The most critical step is the order of checks: Check divisibility by 15 (both 3 and 5) first. If you check 3 or 5 first, you will miss the FizzBuzz cases!\n3. Use the modulo operator (%) to check remainders. If `i % X == 0`, it means `i` is perfectly divisible by `X`.",
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
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
                hints: ["Use built-in max() function", "Or iterate through array"],
                theory: "Finding the maximum value is a linear operation O(n).\n\nLogic:\n1. Initialize a variable (e.g., `max_val`) with the first element of the array.\n2. Iterate through each subsequent element.\n3. If the current element is greater than `max_val`, update `max_val` to the current element.\n4. Python's built-in `max()` function performs this optimized iteration internally."
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
                hints: ["Create a vowels string", "Use list comprehension"],
                theory: "Counting specific characters involves matching against a set of targets.\n\nLogic:\n1. Define your target set (a, e, i, o, u).\n2. Iterate through each character in the input string.\n3. Check if the lowercase version of the character exists in your target set.\n4. Increment a counter for every match found."
            },
            {
                id: 7,
                title: "Fibonacci Sequence",
                description: `Write a function to generate the first n numbers of the Fibonacci sequence.

Example:
Input: n = 7
Output: [0, 1, 1, 2, 3, 5, 8]`,
                difficulty: 2,
                tags: ["python", "recursion", "average"],
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
                hints: ["Start with [0, 1]", "Each number is sum of previous two"],
                theory: "The Fibonacci sequence is defined such that each number is the sum of the two preceding ones, starting from 0 and 1.\n\nMathematical Logic:\nF(n) = F(n-1) + F(n-2)\n\nImplementation:\n1. Handle base cases (n=0, 1, 2).\n2. Use a loop to iteratively calculate the next number in the sequence and append it to your list.\n3. This iterative approach is more memory-efficient than naive recursion for large values of n."
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
                tags: ["python", "math", "average"],
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
                hints: ["Check divisibility up to square root", "Handle edge cases"],
                theory: "A prime number is only divisible by 1 and itself.\n\nOptimized Logic:\n1. Handle numbers < 2 immediately (not prime).\n2. Instead of checking every number up to N, you only need to check up to the square root of N. If a number has a factor larger than its square root, it must also have a factor smaller than its square root!\n3. This optimization changes the complexity from O(n) to O(√n)."
            }
        ]
    },

    java: {
        title: "Java Problems",
        icon: "java",
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
                hints: ["Use System.out.println()"],
                theory: "This is the most basic program in any language.\n\nLogic:\n1. In Java, `System.out` refers to the standard output stream (usually the console).\n2. `println` is a method that prints the value followed by a new line.\n3. The double quotes denote a String literal."
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
                hints: ["Create a sum variable", "Use + operator"],
                theory: "Arithmetic in Java is performed using standard operators.\n\nLogic:\n1. Declare two integer variables (`int a` and `int b`).\n2. Use the addition operator (+) to calculate the result.\n3. Store the result in a new variable `sum` before printing.\n4. This demonstrates the basic process of Data Input -> Processing -> Output."
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
                hints: ["Use modulo operator %", "Use if-else"],
                theory: "Determining parity is a classic programming task.\n\nLogic:\n1. A number is even if it is perfectly divisible by 2.\n2. The modulo operator (%) returns the remainder of a division.\n3. If `num % 2` equals 0, the number is even. Otherwise, it is odd.\n4. This simple check is fundamental for branching logic."
            },
            {
                id: 4,
                title: "Factorial Calculator",
                description: `Write code to calculate the factorial of a number.

Example:
int n = 5;
Output: 120 (5! = 5*4*3*2*1)`,
                difficulty: 2,
                tags: ["java", "loops", "average"],
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
                hints: ["Use a for loop", "Multiply each number"],
                theory: "The factorial of N (N!) is the product of all positive integers up to N.\n\nLogic:\n1. Start with a result variable set to 1 (since multiplying by 0 would break the logic).\n2. Loop from 1 up to N.\n3. In each iteration, multiply the current result by the loop counter (`factorial *= i`).\n4. This is an O(n) iterative solution."
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
                hints: ["Use enhanced for loop", "Add each element to sum"],
                theory: "Iterating through a collection to accumulate a result is a pattern found in nearly every application.\n\nLogic:\n1. Initialize a 'running total' variable (sum) to 0.\n2. Use Java's enhanced 'for-each' loop (`for (int num : arr)`) to cleanly visit every item in the array without needing an index counter.\n3. In each step, add the current number to the running total. By the end of the loop, the variable contains the sum of all elements."
            },
            {
                id: 6,
                title: "String Reversal",
                description: `Write code to reverse a string.

Example:
String str = "hello";
Output: "olleh"`,
                difficulty: 2,
                tags: ["java", "strings", "average"],
                starterCode: `String str = "hello";
// Reverse the string
`,
                solution: `String str = "hello";
String reversed = new StringBuilder(str).reverse().toString();
System.out.println(reversed);`,
                hints: ["Use StringBuilder", "Call reverse() method"],
                theory: "Java Strings are immutable, meaning they cannot be changed once created.\n\nLogic:\n1. To reverse efficiently, we use `StringBuilder`, which is a mutable sequence of characters.\n2. The `reverse()` method of StringBuilder is highly optimized.\n3. We then convert the StringBuilder back to a standard String with `toString()` for the final output."
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
                hints: ["Start with first element", "Compare each element"],
                theory: "Finding the maximum value in a sequence requires a linear scan (O(n)).\n\nLogic:\n1. Assume the first element (`numbers[0]`) is the largest initially.\n2. Compare this 'current max' with every other element in the array.\n3. If you find an element larger than your current max, update your tracker.\n4. By the time the loop finished, the tracker is guaranteed to hold the highest value."
            },
            {
                id: 8,
                title: "Count Characters",
                description: `Write code to count the number of characters in a string (excluding spaces).

Example:
String text = "hello world";
Output: 10`,
                difficulty: 2,
                tags: ["java", "strings", "average"],
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
                hints: ["Convert to char array", "Skip spaces"],
                theory: "Conditional counting is used to quantify specific subsets of data within a sequence.\n\nLogic:\n1. Convert the String to a character array using `toCharArray()` to facilitate iteration.\n2. Use a counter variable initialized to zero.\n3. Inside a loop, evaluate each character: if it is NOT a space (`' '`), increment the counter.\n4. Spaces are ignored, giving you the net count of visible/actual characters."
            }
        ]
    },

    'c++': {
        title: "C++ Problems",
        icon: "cpp",
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
                hints: ["Use #include <iostream>", "Use cout for printing"],
                theory: "In C++, input and output are handled via 'streams'.\n\nLogic:\n1. `#include <iostream>` provides access to standard I/O streams like `cout`.\n2. `using namespace std;` allows us to use `cout` instead of the fully qualified `std::cout`.\n3. The `<<` operator sends the string 'Hello, C++!' to the output stream. `endl` inserts a newline character and flushes the buffer."
            },
            {
                id: 2,
                title: "Sum of Two Numbers",
                description: `Write code to add two integers and print the result.`,
                difficulty: 1,
                tags: ["c++", "arithmetic", "easy"],
                starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 25;\n    // Calculate sum\n    return 0;\n}`,
                solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 25;\n    cout << a + b << endl;\n    return 0;\n}`,
                hints: ["Use + operator"],
                theory: "C++ provides standard arithmetic operators for performing calculations.\n\nLogic:\n1. Declare and initialize integer variables.\n2. The `cout` stream (from `iostream`) is used to output the result to the console.\n3. The `+` operator calculates the sum of the variables directly within the output statement for efficiency."
            },
            {
                id: 3,
                title: "Find Maximum",
                description: `Write a function that takes two integers and returns the larger one.`,
                difficulty: 1,
                tags: ["c++", "conditionals", "easy"],
                starterCode: `#include <iostream>
using namespace std;

int getMax(int a, int b) {
    // Write your code here
}

int main() {
    cout << getMax(10, 20) << endl;
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int getMax(int a, int b) {
    if (a > b) return a;
    return b;
}

int main() {
    cout << getMax(10, 20) << endl;
    return 0;
}`,
                hints: ["Use an if statement", "Compare a and b"],
                theory: "Conditional logic is used to make decisions in a program.\n\nLogic:\n1. Use an `if` statement to compare the two values.\n2. If `a` is greater than `b`, return `a`.\n3. Otherwise, return `b`."
            }
        ]
    },

    javascript: {
        title: "JavaScript Problems",
        icon: "javascript",
        color: "#f6e05e",
        totalProblems: 9,
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
                hints: ["Use arrow function", "Check if num % 2 === 0"],
                theory: "Filtering is a functional programming paradigm for data transformation.\n\nLogic:\n1. The `filter()` method creates a new array filled with elements that pass a test provided by a function.\n2. The arrow function `num => num % 2 === 0` is the predicate (the test).\n3. It returns `true` for even numbers and `false` for odd ones. Only the `true` elements are kept in the new array."
            },
            {
                id: 2,
                title: "Object Manipulation",
                description: `Create an object representing a person with name and age properties, then add a method to greet.

Example Output:
"Hello, my name is John and I am 25 years old"`,
                difficulty: 2,
                tags: ["javascript", "objects", "average"],
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
                hints: ["Use template literals", "Use 'this' keyword"],
                theory: "JavaScript objects allow you to group related data and functionality (state and behavior) together.\n\nLogic:\n1. **Properties**: `name` and `age` store the data about the person.\n2. **Methods**: `greet` is a function attached to the object.\n3. **Context**: Inside the method, we use `this.name` and `this.age`. The `this` keyword refers to the current object instance, allowing the function to access its own properties.\n4. **Template Literals**: Using backticks (``) allows for clean string interpolation using `${variable}` syntax."
            },
            {
                id: 3,
                title: "DOM Manipulation",
                description: `Write code to change the text content of an element with id "demo" to "Hello, JavaScript!".

Note: This assumes an HTML element exists: <p id="demo">Original text</p>`,
                difficulty: 2,
                tags: ["javascript", "dom", "average"],
                starterCode: `// Change text of element with id "demo"
`,
                solution: `document.getElementById("demo").textContent = "Hello, JavaScript!";`,
                hints: ["Use getElementById()", "Set textContent property"],
                theory: "The Document Object Model (DOM) is an interface that allows JavaScript to interact with and modify the structure, style, and content of a webpage.\n\nLogic:\n1. **Selection**: `document.getElementById('demo')` searches the entire webpage for an element with the unique ID 'demo'.\n2. **Modification**: Once the element is found, we access its `textContent` property.\n3. **Updating**: Assigning a new string to `textContent` immediately updates the text visible to the user on the page."
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
                hints: ["Use addEventListener()", "First parameter is 'click'"],
                theory: "Webpages become interactive by 'listening' for user actions called events.\n\nLogic:\n1. **Targeting**: First, find the button element using its ID.\n2. **Attachment**: Use the `addEventListener` method to register an interest in a specific event type (in this case, 'click').\n3. **Callback**: The second argument is a function (callback) that JavaScript will execute automatically whenever that button is clicked."
            },
            {
                id: 5,
                title: "Async/Await Practice",
                description: `Create an async function that simulates fetching data with a 1-second delay.

Output: "Data fetched!" (after 1 second)`,
                difficulty: 3,
                tags: ["javascript", "async", "tough"],
                starterCode: `async function fetchData() {
    // Simulate delay and return data
}

fetchData().then(data => console.log(data));`,
                solution: `async function fetchData() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Data fetched!";
}

fetchData().then(data => console.log(data));`,
                hints: ["Use Promise with setTimeout", "Return the data"],
                theory: "Asynchronous programming allows JavaScript to perform long-running tasks without blocking the main thread (freezing the UI).\n\nLogic:\n1. **Async Keyword**: Marking a function as `async` ensures it always returns a Promise.\n2. **Await Keyword**: The `await` keyword pauses the execution of the function until the following Promise resolves.\n3. **Simulation**: By wrapping a `setTimeout` in a Promise, we create a controllable delay. The function waits for the second to pass before returning the final string."
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
                hints: ["Use arrow function", "Multiply by 2"],
                theory: "The `map()` method is a core functional programming tool used to transform every item in a list according to a specific rule.\n\nLogic:\n1. It iterates through the entire input array.\n2. For each element, it runs the provided function (`num => num * 2`).\n3. The result of that function for each element is collected into a **brand new array**.\n4. Crucially, the original array remains unchanged (immutability)."
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
                hints: ["Split by space", "Use charAt() and toUpperCase()"],
                theory: "Processing strings often requires breaking them down into smaller pieces (tokens).\n\nLogic:\n1. **Tokenize**: Use `split(' ')` to turn the sentence into an array of individual words.\n2. **Transform**: Use `map()` to process each word. Take the first character (`charAt(0)`), uppercase it, and then append the rest of the word (`slice(1)`).\n3. **Reconstruct**: Use `join(' ')` to glue the modified words back together into a single sentence with spaces."
            },
            {
                id: 8,
                title: "Calculator Function",
                description: `Create a calculator function that takes two numbers and an operator (+, -, *, /) and returns the result.

Example:
calculate(10, 5, '+') → 15
calculate(10, 5, '*') → 50`,
                difficulty: 2,
                tags: ["javascript", "functions", "average"],
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
                hints: ["Use switch statement", "Handle each operator"],
                theory: "Functions encapsulate logic that can be reused with different inputs.\n\nLogic:\n1. A `switch` statement is cleaner than multiple `if-else` blocks when checking one variable against many possible values.\n2. Each `case` handles a specific operator and returns the mathematical result immediately.\n3. The `default` case handles unexpected inputs, ensuring the function doesn't fail silently."
            },
            {
                id: 9,
                title: "String Repeat",
                description: `Write a function that repeats the given string 's' exactly 'n' times.

Example:
repeatString("abc", 3) → "abcabcabc"`,
                difficulty: 1,
                tags: ["javascript", "strings", "easy"],
                starterCode: `function repeatString(s, n) {
    // Your code here
}

console.log(repeatString("abc", 3));`,
                solution: `function repeatString(s, n) {
    return s.repeat(n);
}`,
                hints: ["Use modern JS .repeat() method", "Or use a for loop"],
                theory: "Repeating a string is a common task for generating patterns or UI elements.\n\nModern Logic:\nIn modern JavaScript (ES6+), the `.repeat(n)` method is the most efficient way to achieve this. It creates a new string by concatenating the original string `n` times.\n\nLooping Logic:\nIf you were to implement this manually, you would create an empty result string and use a `for` loop that runs `n` times, adding the target string to the result in each iteration."
            }
        ]
    },

    html: {
        title: "HTML/CSS Problems",
        icon: "html",
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
                hints: ["Use div for container", "Add img, h3, p, and button"],
                theory: "Modern web components rely on a combination of semantic HTML for structure and CSS for visual hierarchy.\n\nLogic:\n1. **Semantic Structure**: Use focused elements like `<h3>` for headings and `<p>` for body text to help screen readers and SEO.\n2. **Visual Box Model**: Setting `border-radius: 8px` softens the edges, while `overflow: hidden` ensures the image doesn't bleed over the rounded corners of the container.\n3. **Depth**: `box-shadow` adds a layer of depth (perception of elevation), which is a core principle of Material and Fluent design systems.\n4. **Interaction**: Adding a CSS `transition` and `transform: translateY` on hover provides the user with clear visual feedback that the element is interactive."
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
                tags: ["html", "css", "average"],
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
                hints: ["Use flexbox for layout", "Add media queries"],
                theory: "Navigation bars must work across all devices, from desktops to mobile phones.\n\nLogic:\n1. **Flexbox Layout**: By setting the navbar to `display: flex` and using `justify-content: space-between`, the logo and menu are automatically pushed to opposite sides of the viewport.\n2. **Responsive Flow**: Using a `@media` query allows us to change the 'direction' of the flex container. When the screen width is small, we switch to `flex-direction: column`, which stacks the logo and menu vertically.\n3. **Affordance**: Hover effects on links (like changing color) provide an 'affordance'—a hint to the user that the text can be clicked."
            },
            {
                id: 3,
                title: "Flexbox Layout",
                description: `Create a 3-column layout using Flexbox:
- Each column should be equal width
- Add some padding and background colors
- Make it responsive (stack on mobile)`,
                difficulty: 2,
                tags: ["html", "css", "flexbox", "average"],
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
                hints: ["Use display: flex", "Use flex: 1 for equal width"],
                theory: "The Flexbox `flex: 1` property is a shorthand for growing, shrinking, and setting an initial size.\n\nLogic:\n1. **Equal Sizing**: When multiple sibling elements all have `flex: 1`, they each take up an exactly equal portion of the available space in their container.\n2. **Spacing**: The `gap` property on the container is the modern way to provide gutter space between items without needing manually calculated margins.\n3. **Modern Design**: This pattern is the foundation for creating rows of feature cards, pricing tables, or multi-column text layouts."
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
                tags: ["html", "css", "grid", "average"],
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
                hints: ["Use display: grid", "Use grid-template-columns"],
                theory: "CSS Grid is the most powerful tool for two-dimensional layouts (rows and columns).\n\nLogic:\n1. **Fractional Units**: The `1fr` unit represents a 'fraction' of the available space. `repeat(3, 1fr)` creates three columns of equal width.\n2. **Breakpoint Strategy**: By progressively lowering the number of columns in media queries (3 -> 2 -> 1), you ensure that the gallery remains readable even as physical screen space decreases.\n3. **Image Control**: Setting `width: 100%` on images is crucial; it forces the image to fill the grid cell rather than spilling out at its original full resolution."
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
                hints: ["Use input and textarea", "Add placeholder text"],
                theory: "Forms are the primary way users send data to a website. Accessibility and focus states are critical for a good user experience.\n\nLogic:\n1. **Interactive States**: Using the `:focus` selector allows you to highlight the input the user is currently typing in (e.g., by changing the border color). This provides a clear 'visual anchor'.\n2. **Styling Defaults**: Browsers have ugly default styles for forms. By setting `border: 1px solid #ccc` and `border-radius: 4px`, you overwrite these for a consistent, professional brand look.\n3. **Layout**: `flex-direction: column` and `gap` ensure that labels and inputs stack neatly with consistent spacing."
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
                tags: ["html", "css", "animations", "tough"],
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
                hints: ["Use transition property", "Use transform: scale()"],
                theory: "Animations bring life to a UI and help it feel 'fluid' and high-quality.\n\nLogic:\n1. **Transition**: The `transition: all 0.3s ease` property tells the browser to 'tween' or interpolate between states instead of jumping instantly from one to the other.\n2. **Scaling**: `transform: scale(1.1)` makes the button physically larger, which simulates it popping 'out' toward the user.\n3. **Shadow Dynamics**: Increasing the `box-shadow` on hover simulates the button getting closer to a light source as it 'risess', reinforcing the 3D perception."
            }
        ]
    },

    css: {
        title: "CSS Problems",
        icon: "css",
        color: "#38b2ac",
        totalProblems: 5,
        problems: [
            {
                id: 1,
                title: "Text Styling",
                description: `Apply the following styles to the h1 element:
- Color: deepskyblue
- Font size: 32px
- Text alignment: center
- Font family: Arial`,
                difficulty: 1,
                tags: ["css", "basics", "easy"],
                starterCode: `<h1>Styled Heading</h1>

<style>
h1 {
    /* Add styles here */
}
</style>`,
                solution: `<h1>Styled Heading</h1>

<style>
h1 {
    color: deepskyblue;
    font-size: 32px;
    text-align: center;
    font-family: Arial, sans-serif;
}
</style>`,
                hints: ["Use color and font-size", "Use text-align"],
                theory: "CSS (Cascading Style Sheets) is used to control the visual presentation of HTML elements.\n\nLogic:\n1. **Selectors**: The `h1` selector targets all first-level headings on the page.\n2. **Declarations**: Each line inside the braces is a declaration (property: value).\n3. **Hierarchy**: CSS flows from top to bottom, with more specific rules overriding general ones."
            },
            {
                id: 2,
                title: "Grid Layout",
                description: `Create a 3-column grid layout with a 15px gap.`,
                difficulty: 2,
                tags: ["css", "grid", "average"],
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
    /* Add grid styles here */
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
                hints: ["Use grid-template-columns", "Use gap for spacing"],
                theory: "CSS Grid excels at dividing space into a predictable matrix.\n\nLogic:\n1. **Defining Structure**: `grid-template-columns` defines the width of each column. `repeat(3, 1fr)` is a clean way to say 'three columns of equal width'.\n2. **The Gutter**: The `gap` property provides a uniform space between grid cells without affecting the spacing at the edges of the container.\n3. **Implicit Rows**: Because we have 6 items but only 3 columns, the grid 'implicitly' creates a second row for the remaining 3 items automatically."
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
                hints: ["Use transition: all 0.3s", "Use :hover selector"],
                theory: "Interactive elements like buttons should feel responsive to user input.\n\nLogic:\n1. Use the `transition` property to define the duration and easing of the state change.\n2. Use the `:hover` pseudo-selector to apply new styles (like color or shadow) when the mouse is over the button.\n3. Using `translateY` creates a subtle 'lifting' effect that provides tactile feedback."
            },
            {
                id: 4,
                title: "Circular Image",
                description: `Style an image to be a perfect circle with a width and height of 200px.`,
                difficulty: 1,
                tags: ["css", "basics"],
                starterCode: `<img src="https://via.placeholder.com/200" class="profile-pic">

<style>
.profile-pic {
    /* Add styles here */
}
</style>`,
                solution: `<img src="https://via.placeholder.com/200" class="profile-pic">

<style>
.profile-pic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}
</style>`,
                hints: ["Use border-radius: 50%"],
                theory: "Creating circular elements is a staple of modern web design, often used for profile pictures and icons.\n\nLogic:\n1. **Prerequisite**: The element must be a perfect square (`width` must equal `height`).\n2. **The Trick**: Setting `border-radius` to 50% pulls the corners in exactly to the center point of each side, forming a circle.\n3. **Containment**: Use `object-fit: cover` to ensure the image fills the circle without being stretched or squished.",
            },
            {
                id: 5,
                title: "Flexbox Centering",
                description: `Center a small box perfectly in the middle of a large container.`,
                difficulty: 2,
                tags: ["css", "flexbox"],
                starterCode: `<div class="container">
    <div class="box">Center Me</div>
</div>

<style>
.container {
    width: 100%;
    height: 300px;
    background: #eee;
    /* Add flex styles here */
}
.box {
    padding: 20px;
    background: coral;
}
</style>`,
                solution: `<div class="container">
    <div class="box">Center Me</div>
</div>

<style>
.container {
    width: 100%;
    height: 300px;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    padding: 20px;
    background: coral;
}
</style>`,
                hints: ["Use display: flex", "Use justify-content and align-items"],
                theory: "Flexbox is designed for one-dimensional layouts, providing high control over alignment and distribution of space.\n\nLogic:\n1. **Activation**: `display: flex` turns the container into a flex context.\n2. **X-Axis**: `justify-content: center` aligns items along the main axis (horizontal by default).\n3. **Y-Axis**: `align-items: center` aligns items along the cross axis (vertical by default). Together, they result in perfect centering.",
            }
        ]
    },

    angular: {
        title: "Angular Problems",
        icon: "angular",
        color: "#dd0031",
        totalProblems: 4,
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
} `,
                solution: `@Component({
    selector: 'app-root',
    template: '<h1>{{ name }}</h1>'
})
class AppComponent {
    name = 'Angular User';
} `,
                hints: ["Use double curly braces"],
                theory: "Interpolation is the most common way to display data from an Angular component to its template.\n\nLogic:\n1. **The Binding**: Putting a variable name inside double curly braces `{ { name } } ` tells Angular to replace that placeholder with the actual value of the variable.\n2. **Dynamic Updates**: If the value of `name` changes in your TypeScript file, Angular's change detection system will automatically update the text in the browser instantly without a page refresh."
            },
            {
                id: 2,
                title: "Angular Click Event",
                description: `Bind a click event to a button to call a method.`,
                difficulty: 2,
                tags: ["angular", "events"],
                starterCode: `<button (click)="<!-- method here -->">Click</button>`,
                solution: `<button (click)="doSomething()">Click</button>`,
                hints: ["Use (click) parenthesis"],
                theory: "Event binding in Angular uses parentheses to signify an event moving from the View (HTML) to the Component (TS).\n\nLogic:\n1. **Syntax**: `(event_name)=\"function_to_call()\"`.\n2. **Action**: When the user performs the 'click' action on the button, Angular catches the browser event and executes the `doSomething()` method defined on your class.\n3. This is the foundation of user interaction in the Angular framework."
            },
            {
                id: 3,
                title: "Conditional Content with *ngIf",
                description: `Display a success message only if the 'isSubmitted' property is true.`,
                difficulty: 2,
                tags: ["angular", "directives"],
                starterCode: `<div <!-- directive -->="isSubmitted">Form submitted successfully!</div>`,
                solution: `<div *ngIf="isSubmitted">Form submitted successfully!</div>`,
                hints: ["Use *ngIf structural directive"],
                theory: "Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.\n\nLogic:\n1. The asterisk (*) prefix is a shorthand for Angular's template syntax.\n2. When expression evaluates to true, Angular adds the element to the DOM; when false, it removes the element entirely (not just hiding it with CSS).",
            },
            {
                id: 4,
                title: "Looping with *ngFor",
                description: `Display a list of user names from an array called 'users'.`,
                difficulty: 2,
                tags: ["angular", "directives"],
                starterCode: `<ul>
  <li <!-- directive -->="let user of users">{{ user }}</li>
</ul>`,
                solution: `<ul>
  <li *ngFor="let user of users">{{ user }}</li>
</ul>`,
                hints: ["Use *ngFor structural directive"],
                theory: "The ngFor directive acts as a repeater, allowing you to build complex lists or tables from arrays of data.\n\nLogic:\n1. `let user` defines a local variable representing the current item in the iteration.\n2. `of users` specifies the source array to loop through.\n3. Angular automatically manages the creation and tracking of these DOM elements as the underlying array changes.",
            }
        ]
    },

    react: {
        title: "React Problems",
        icon: "react",
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
                hints: ["Use useState(0)", "Update state with setCount"],
                theory: "React manages UI updates through 'State'.\n\nLogic:\n1. The `useState` hook returns an array with the current value and a function to update it.\n2. Calling the setter function (e.g., `setCount`) triggers a re-render of the component.\n3. This ensures the DOM always reflects the latest state of the data."
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
                tags: ["react", "hooks", "average"],
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
                hints: ["Use array spread operator", "Use filter to delete"],
                theory: "Managing lists is a fundamental pattern in web development, often involving adding and removing items from a state array.\n\nLogic:\n1. **Immutability**: React state should never be modified directly. Instead of `todos.push()`, we use `setTodos([...todos, newItem])`. The spread operator (`...`) creates a copy of the existing items and adds the new one at the end.\n2. **Deletion**: To delete an item, we use `.filter()`. This creates a new array containing every item EXCEPT the one that matches our target index.\n3. **Controlled Inputs**: By setting the input's `value` to a state variable and updating it via `onChange`, we ensure React is the 'single source of truth' for what the user is typing."
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
                tags: ["react", "forms", "average"],
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
                hints: ["Validate on submit", "Store errors in state"],
                theory: "Validation ensures data integrity and provides a better user experience by catching mistakes early.\n\nLogic:\n1. **Capture**: Store form values in React state as the user types.\n2. **Evaluate**: On submission (or on change), run a function to check if values meet your business rules (e.g., character length or presence of '@').\n3. **Feedback**: If rules are broken, store descriptive error messages in a separate 'errors' state object.\n4. **Display**: Use conditional rendering `{errors.field && <p>{errors.field}</p>}` to show these messages to the user."
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
                tags: ["react", "hooks", "api", "tough"],
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
                hints: ["Use useEffect with empty dependency array", "Handle loading and error states"],
                theory: "Real-world apps fetch data from external servers. Managing the lifecycle of these requests is a critical skill.\n\nLogic:\n1. **The Hook**: Use `useEffect` to trigger the fetch. The empty dependency array `[]` ensures it only runs once when the component first appears ('mounts').\n2. **The states**: You need three distinct states: `data` (the results), `loading` (a boolean to show a spinner), and `error` (a place to store failure messages).\n3. **Conditional Rendering**: In the return statement, use `if` blocks to handle the loading and error states separately, keeping the main 'success' UI clean and focused on data display."
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
                tags: ["react", "state", "average"],
                starterCode: `import React, { useState } => "react";
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
                hints: ["Use multiple useState hooks", "Update each independently"],
                theory: "Components often need to track multiple unrelated pieces of information. React allows you to use `useState` as many times as needed.\n\nLogic:\n1. **Independence**: Updating one state variable (like `age`) does not affect the others (like `name`). React efficiently only updates the specific parts of the DOM that changed.\n2. **Type Flexibility**: Each state variable can hold any data type—strings, numbers, booleans, or even complex objects.\n3. **Event Drivers**: Use different user actions (typing, clicking) to drive different state updates, creating a rich interactive experience."
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
                hints: ["Destructure props", "Reuse component with different props"],
                theory: "Props (Properties) are the mechanism for passing data from a parent component down to its children.\n\nLogic:\n1. **Reusability**: Props allow you to write one component once and display it many times with different content.\n2. **One-way Flow**: Data in React moves downwards. The parent defines what the data is, and the child simply renders it.\n3. **Destructuring**: Using `{ title, description }` in the component arguments is a clean JS shortcut to access features directly instead of saying `props.title` everywhere."
            }
        ]
    }
};

const ensureMinimumProblemsPerTopic = (data, minCount = TOPIC_MIN_PROBLEMS) => {
    Object.keys(data).forEach((topic) => {
        const topicData = data[topic];
        if (!topicData || !Array.isArray(topicData.problems)) return;

        const existingIds = topicData.problems
            .map((p) => Number(p.id))
            .filter((n) => Number.isFinite(n));
        let nextId = existingIds.length ? Math.max(...existingIds) + 1 : 1;

        const needed = Math.max(0, minCount - topicData.problems.length);
        for (let i = 0; i < needed; i += 1) {
            const challengeNo = topicData.problems.length + 1;
            topicData.problems.push(buildAutoProblemByTopic(topic, nextId, challengeNo));
            nextId += 1;
        }

        topicData.totalProblems = topicData.problems.length;
    });
};

ensureMinimumProblemsPerTopic(problemsData);

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
