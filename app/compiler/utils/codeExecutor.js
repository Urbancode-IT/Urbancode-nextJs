
// Mock Database for SQL
export const sqlDatabase = {
    CustomersArchive: {
        columns: ["customer_id", "first_name", "last_name", "age", "country"],
        data: [
            { customer_id: 1, first_name: "John", last_name: "Doe", age: 31, country: "USA" },
            { customer_id: 2, first_name: "Robert", last_name: "Luna", age: 22, country: "USA" },
            { customer_id: 3, first_name: "David", last_name: "Robinson", age: 22, country: "UK" },
            { customer_id: 4, first_name: "John", last_name: "Reinhardt", age: 25, country: "UK" },
            { customer_id: 5, first_name: "Betty", last_name: "Doe", age: 28, country: "UAE" }
        ]
    },
    OrdersArchive: {
        columns: ["order_id", "item", "amount", "customer_id"],
        data: [
            { order_id: 1, item: "Keyboard", amount: 400, customer_id: 4 },
            { order_id: 2, item: "Mouse", amount: 300, customer_id: 4 },
            { order_id: 3, item: "Monitor", amount: 12000, customer_id: 3 },
            { order_id: 4, item: "Keyboard", amount: 400, customer_id: 1 },
            { order_id: 5, item: "Mousepad", amount: 250, customer_id: 2 }
        ]
    },
    ShippingsArchive: {
        columns: ["shipping_id", "status", "customer_id"],
        data: [
            { shipping_id: 1, status: "Pending", customer_id: 2 },
            { shipping_id: 2, status: "Pending", customer_id: 4 }
        ]
    },
    pets: {
        columns: ["pet_id", "pet_name", "pet_type", "owner_name", "age", "color"],
        data: [
            { pet_id: 1, pet_name: "Buddy", pet_type: "Dog", owner_name: "Alice", age: 4, color: "Golden" },
            { pet_id: 2, pet_name: "Mittens", pet_type: "Cat", owner_name: "Bob", age: 2, color: "Black" },
            { pet_id: 3, pet_name: "Rex", pet_type: "Dog", owner_name: "Charlie", age: 2, color: "Brown" },
            { pet_id: 4, pet_name: "Tweety", pet_type: "Bird", owner_name: "David", age: 1, color: "Yellow" }
        ]
    },
    books: {
        columns: ["book_id", "title", "author", "price", "stock_quantity"],
        data: [
            { book_id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99, stock_quantity: 10 },
            { book_id: 2, title: "1984", author: "George Orwell", price: 8.99, stock_quantity: 20 },
            { book_id: 3, title: "Python 101", author: "John Doe", price: 25.00, stock_quantity: 5 },
            { book_id: 4, title: "Cheap Reads", author: "Jane Smith", price: 5.00, stock_quantity: 50 }
        ]
    },
    employees: {
        columns: ["emp_id", "emp_name", "department", "salary", "hire_date", "position"],
        data: [
            { emp_id: 1, emp_name: "Alice", department: "IT", salary: 70000, hire_date: "2020-01-15", position: "Developer" },
            { emp_id: 2, emp_name: "Bob", department: "HR", salary: 50000, hire_date: "2019-05-20", position: "Manager" },
            { emp_id: 3, emp_name: "Charlie", department: "IT", salary: 80000, hire_date: "2021-03-10", position: "Lead" },
            { emp_id: 4, emp_name: "David", department: "Sales", salary: 60000, hire_date: "2018-11-05", position: "Executive" },
            { emp_id: 5, emp_name: "Eve", department: "Sales", salary: 65000, hire_date: "2022-02-14", position: "Associate" }
        ]
    },
    ElectronicsProducts: {
        columns: ["product_id", "product_name", "category", "price", "brand", "warranty_years"],
        data: [
            { product_id: 1, product_name: "Laptop", category: "Electronics", price: 1000, brand: "Samsung", warranty_years: 2 },
            { product_id: 2, product_name: "Phone", category: "Electronics", price: 800, brand: "Apple", warranty_years: 1 },
            { product_id: 3, product_name: "TV", category: "Electronics", price: 1200, brand: "Samsung", warranty_years: 3 },
            { product_id: 4, product_name: "Headphones", category: "Electronics", price: 150, brand: "Sony", warranty_years: 1 }
        ]
    },
    sales: {
        columns: ["sale_id", "product_id", "quantity_sold", "sale_date"],
        data: [
            { sale_id: 1, product_id: 1, quantity_sold: 2, sale_date: "2023-01-01" },
            { sale_id: 2, product_id: 2, quantity_sold: 5, sale_date: "2023-01-02" },
            { sale_id: 3, product_id: 1, quantity_sold: 1, sale_date: "2023-01-03" }
        ]
    },
    students: {
        columns: ["student_id", "student_name", "grade_level", "gpa", "enrollment_year"],
        data: [
            { student_id: 1, student_name: "Student A", grade_level: 10, gpa: 3.8, enrollment_year: 2021 },
            { student_id: 2, student_name: "Student B", grade_level: 9, gpa: 3.2, enrollment_year: 2022 },
            { student_id: 3, student_name: "Student C", grade_level: 11, gpa: 3.9, enrollment_year: 2020 },
            { student_id: 4, student_name: "Student D", grade_level: 10, gpa: 3.4, enrollment_year: 2021 }
        ]
    },
    customers: {
        columns: ["customer_id", "customer_name", "city", "total_purchases", "membership_type"],
        data: [
            { customer_id: 1, customer_name: "Rajesh", city: "Mumbai", total_purchases: 60000, membership_type: "VIP" },
            { customer_id: 2, customer_name: "Amit", city: "Delhi", total_purchases: 30000, membership_type: "Regular" },
            { customer_id: 3, customer_name: "Priya", city: "Mumbai", total_purchases: 55000, membership_type: "VIP" },
            { customer_id: 4, customer_name: "Sonia", city: "Bangalore", total_purchases: 15000, membership_type: "Regular" }
        ]
    },
    orders: {
        columns: ["order_id", "customer_name", "customer_id", "book_title", "order_amount", "order_status", "order_date", "quantity"],
        data: [
            { order_id: 1, customer_name: "John", customer_id: 4, book_title: "The Great Gatsby", order_amount: 500, order_status: "Completed", order_date: "2023-05-10", quantity: 2 },
            { order_id: 2, customer_name: "Alice", customer_id: 1, book_title: "1984", order_amount: 1500, order_status: "Completed", order_date: "2023-06-15", quantity: 1 },
            { order_id: 3, customer_name: "John", customer_id: 4, book_title: "Python 101", order_amount: 250, order_status: "Pending", order_date: "2023-07-20", quantity: 1 },
            { order_id: 4, customer_name: "Bob", customer_id: 2, book_title: "Cheap Reads", order_amount: 1200, order_status: "Completed", order_date: "2023-08-05", quantity: 3 }
        ]
    }
};

import initSqlJs from 'sql.js';

let sqlEngine = null;

// Update to improve error logging
const getSqlEngine = async () => {
    if (sqlEngine) return sqlEngine;
    try {
        const SQL = await initSqlJs({
            locateFile: file => `/sql-wasm.wasm`
        });
        sqlEngine = new SQL.Database();

        // Add common function aliases
        try {
            sqlEngine.create_function("substring", (str, start, len) => {
                if (str === null || str === undefined) return null;
                const s = String(str);
                const startIdx = Math.max(0, (Number(start) || 1) - 1);
                if (len === undefined) return s.substring(startIdx);
                return s.substring(startIdx, startIdx + Number(len));
            });
            sqlEngine.create_function("len", (str) => (str !== null && str !== undefined) ? String(str).length : null);
            sqlEngine.create_function("charindex", (sub, str, start) => {
                if (!sub || !str) return 0;
                const idx = String(str).indexOf(String(sub), (Number(start) || 1) - 1);
                return idx === -1 ? 0 : idx + 1;
            });
            sqlEngine.create_function("left", (str, len) => (str !== null && str !== undefined) ? String(str).substring(0, Number(len)) : null);
            sqlEngine.create_function("right", (str, len) => (str !== null && str !== undefined) ? String(str).slice(-Number(len)) : null);
            sqlEngine.create_function("replace", (str, oldSub, newSub) => (str !== null) ? String(str).split(String(oldSub)).join(String(newSub)) : null);
            sqlEngine.create_function("reverse", (str) => (str !== null) ? String(str).split('').reverse().join('') : null);
            sqlEngine.create_function("stuff", (str, start, len, newStr) => {
                if (!str) return null;
                const s = String(str);
                const sIdx = Math.max(0, (Number(start) || 1) - 1);
                return s.substring(0, sIdx) + String(newStr) + s.substring(sIdx + Number(len));
            });
            sqlEngine.create_function("getdate", () => new Date().toISOString().replace('T', ' ').split('.')[0]);
            sqlEngine.create_function("now", () => new Date().toISOString().replace('T', ' ').split('.')[0]);
            sqlEngine.create_function("curdate", () => new Date().toISOString().split('T')[0]);
            sqlEngine.create_function("year", (d) => d ? new Date(d).getFullYear() : null);
            sqlEngine.create_function("month", (d) => d ? new Date(d).getMonth() + 1 : null);
            sqlEngine.create_function("day", (d) => d ? new Date(d).getDate() : null);
            sqlEngine.create_function("iif", (cond, t, f) => cond ? t : f);
            sqlEngine.create_function("isnull", (val, fallback) => (val === null || val === undefined) ? fallback : val);
            sqlEngine.create_function("ceiling", (x) => (x !== null && x !== undefined) ? Math.ceil(x) : null);
            sqlEngine.create_function("floor", (x) => (x !== null && x !== undefined) ? Math.floor(x) : null);
            sqlEngine.create_function("sqrt", (x) => (x !== null && x !== undefined) ? Math.sqrt(x) : null);
            sqlEngine.create_function("square", (x) => (x !== null && x !== undefined) ? x * x : null);
            sqlEngine.create_function("power", (x, y) => (x !== null && y !== null) ? Math.pow(x, y) : null);
            sqlEngine.create_function("round", (x, d) => (x !== null) ? Number(x.toFixed(Number(d) || 0)) : null);
            sqlEngine.create_function("concat", (...args) => args.map(a => (a === null || a === undefined) ? '' : String(a)).join(''));
            sqlEngine.create_function("current_time", () => new Date().toTimeString().split(' ')[0]);
            sqlEngine.create_function("getdata", () => "Data Loaded");
        } catch (fErr) {
            console.warn("Could not create SQL function aliases:", fErr);
        }

        // Merge standard database with custom tables from localStorage
        const customTables = JSON.parse(localStorage.getItem('customSqlTables') || '{}');
        const finalDatabase = { ...sqlDatabase };

        // Merge case-insensitively: custom tables overwrite built-in ones
        Object.entries(customTables).forEach(([key, val]) => {
            const existingKey = Object.keys(finalDatabase).find(k => k.toLowerCase() === key.toLowerCase());
            if (existingKey) delete finalDatabase[existingKey];
            finalDatabase[key] = val;
        });

        // Seed the database
        for (const [tableName, tableInfo] of Object.entries(finalDatabase)) {
            const columnsDef = tableInfo.columns.map(col => `"${col}"`).join(', ');

            // Clean drop and recreate to ensure schema match
            sqlEngine.run(`DROP TABLE IF EXISTS "${tableName}"`);
            sqlEngine.run(`CREATE TABLE "${tableName}" (${columnsDef})`);

            if (tableInfo.data && tableInfo.data.length > 0) {
                const placeholders = tableInfo.columns.map(() => '?').join(', ');
                const stmt = sqlEngine.prepare(`INSERT INTO "${tableName}" VALUES (${placeholders})`);

                tableInfo.data.forEach(row => {
                    const values = tableInfo.columns.map(col => row[col]);
                    stmt.run(values);
                });
                stmt.free();
            }
        }

        // Create MS SQL Metadata Tables (INFORMATION_SCHEMA)
        try {
            sqlEngine.run(`DROP TABLE IF EXISTS "INFORMATION_SCHEMA.TABLES"`);
            sqlEngine.run(`CREATE TABLE "INFORMATION_SCHEMA.TABLES" (TABLE_CATALOG TEXT, TABLE_SCHEMA TEXT, TABLE_NAME TEXT, TABLE_TYPE TEXT)`);

            sqlEngine.run(`DROP TABLE IF EXISTS "INFORMATION_SCHEMA.COLUMNS"`);
            sqlEngine.run(`CREATE TABLE "INFORMATION_SCHEMA.COLUMNS" (TABLE_CATALOG TEXT, TABLE_SCHEMA TEXT, TABLE_NAME TEXT, COLUMN_NAME TEXT, DATA_TYPE TEXT, IS_NULLABLE TEXT)`);

            const tableInsert = sqlEngine.prepare(`INSERT INTO "INFORMATION_SCHEMA.TABLES" VALUES (?, ?, ?, ?)`);
            const columnInsert = sqlEngine.prepare(`INSERT INTO "INFORMATION_SCHEMA.COLUMNS" VALUES (?, ?, ?, ?, ?, ?)`);

            Object.entries(finalDatabase).forEach(([name, info]) => {
                tableInsert.run(['master', 'dbo', name, 'BASE TABLE']);
                info.columns.forEach(col => {
                    columnInsert.run(['master', 'dbo', name, col, col.toLowerCase().includes('id') ? 'int' : 'nvarchar', 'YES']);
                });
            });

            tableInsert.free();
            columnInsert.free();
        } catch (metaErr) {
            console.warn("Failed to create MS SQL metadata tables:", metaErr);
        }
        return sqlEngine;
    } catch (err) {
        console.error("Failed to initialize SQL engine:", err);
        throw err;
    }
};

// Listen for custom table additions to reset engine
if (typeof window !== 'undefined') {
    window.addEventListener('sql-table-added', () => {
        sqlEngine = null; // Forces re-initialization on next execution
    });
}

export const executeSQL = async (query) => {
    try {
        let engine;
        try {
            engine = await getSqlEngine();
        } catch (e) {
            throw new Error(`SQL Engine Init Error: ${e.message}`);
        }

        if (!engine) throw new Error("SQL Engine not initialized (unknown reason)");

        const normalizedQuery = query.trim();
        const lowerQuery = normalizedQuery.toLowerCase();

        // Translate MySQL / SQL-Server functions to SQLite equivalents
        // so standard SQL queries work without syntax errors
        let processedQuery = normalizedQuery
            .replace(/\bcurrent_time\s*\(\s*\)/gi, "strftime('%H:%M:%S','now')")
            .replace(/\bcurrent_date\s*\(\s*\)/gi, "date('now')")
            .replace(/\bcurrent_timestamp\s*\(\s*\)/gi, "datetime('now')")
            .replace(/\bnow\s*\(\s*\)/gi, "datetime('now')")
            .replace(/\bgetdate\s*\(\s*\)/gi, "datetime('now')")
            .replace(/\bcurdate\s*\(\s*\)/gi, "date('now')")
            .replace(/\bcurtime\s*\(\s*\)/gi, "strftime('%H:%M:%S','now')")
            .replace(/\bisnull\s*\(/gi, "IFNULL(")
            .replace(/\bNVL\s*\(/gi, "IFNULL(")
            .replace(/\bCONVERT\s*\(\s*(\w+)\s*,\s*([^)]+)\)/gi, "CAST($2 AS $1)")
            .replace(/\bTOP\s+(\d+)\b/gi, "LIMIT $1")
            .replace(/\bLEN\s*\(/gi, "LENGTH(");

        // Execute query (exec returns an array of results for each statement)
        const res = engine.exec(processedQuery);

        if (res.length === 0) {
            const executionTime = Date.now();
            // Check if it was a non-SELECT statement that affected rows
            if (!lowerQuery.startsWith('select')) {
                let message = "Command executed successfully";
                if (lowerQuery.startsWith('insert')) message = "Query OK, 1 row inserted";
                if (lowerQuery.startsWith('update')) message = "Query OK, rows affected";
                if (lowerQuery.startsWith('delete')) message = "Query OK, rows deleted";
                if (lowerQuery.startsWith('create')) message = "Table created successfully";
                if (lowerQuery.startsWith('drop')) message = "Table dropped successfully";

                // Try to auto-fetch the affected table content
                try {
                    const match = normalizedQuery.match(/(?:insert\s+into|update|delete\s+from|create\s+table)\s+["']?([a-zA-Z0-9_\.]+)["']?/i);
                    if (match && match[1]) {
                        const tableName = match[1].replace(/['"]/g, '');
                        // Only auto-fetch if it's not a schema change statement that might have dropped the table
                        if (!lowerQuery.startsWith('drop')) {
                            const checkRes = engine.exec(`SELECT * FROM "${tableName}" LIMIT 20`);
                            if (checkRes.length > 0) {
                                const resultSet = checkRes[0];
                                const columns = resultSet.columns || resultSet.lc || [];
                                const data = (resultSet.values || []).map(values => {
                                    const obj = {};
                                    columns.forEach((col, i) => { obj[col] = values[i]; });
                                    return obj;
                                });
                                return { message, columns, data, executionTime };
                            }
                        }
                    }
                } catch (autoSelectErr) {
                    console.warn("Auto-select failed:", autoSelectErr);
                }

                return { message, executionTime };
            }
            return { columns: [], data: [], executionTime };
        }

        // Handle multiple statements: 
        // 1. Find the first statement that actually returned values (data)
        // 2. If none returned values, return the last statement's column info
        let lastResult = res.find(r => r.values && r.values.length > 0) || res[res.length - 1];

        if (!lastResult) {
            return { columns: [], data: [], executionTime: Date.now() };
        }

        // IMPORTANT: sql.js may use 'lc' instead of 'columns' for column names
        const columns = lastResult.columns || lastResult.lc || [];
        const data = (lastResult.values || []).map(rowValues => {
            const obj = {};
            columns.forEach((col, i) => {
                let val = rowValues[i];
                let key = col;
                // Normalize column names from translated functions to clean display names
                if (col === 'current_time' || col === 'current_time()' || col.startsWith("strftime('%H:%M:%S')")) {
                    key = 'current_time';
                } else if (col.startsWith("datetime('now')") || col === 'getdate' || col === 'now()') {
                    key = 'current_datetime';
                } else if (col.startsWith("date('now')") || col === 'curdate()') {
                    key = 'current_date';
                }
                obj[key] = val;
            });
            return obj;
        });

        // Normalize column names for display
        const normalizedColumns = columns.map(c => {
            if (c === 'current_time()' || c.startsWith("strftime('%H:%M:%S')")) return 'current_time';
            if (c.startsWith("datetime('now')")) return 'current_datetime';
            if (c.startsWith("date('now')")) return 'current_date';
            return c;
        });

        return {
            columns: normalizedColumns,
            data,
            executionTime: Date.now()
        };

    } catch (error) {
        console.error("Real SQL Error:", error);
        return { error: error.message, executionTime: Date.now() };
    }
};


export const executeJava = (sourceCode) => {

    let outputBuffer = "";
    const variables = {};

    // Helper to evaluate simple expressions
    const evaluateExpression = (expr) => {
        expr = expr.trim();
        // String literal
        if (expr.startsWith('"') && expr.endsWith('"')) return expr.slice(1, -1);
        // Number literal
        if (!isNaN(expr)) return Number(expr);
        // Variable
        if (variables[expr] !== undefined) return variables[expr];

        // Simple Math (binary)
        const mathMatch = expr.match(/([\w\d]+)\s*([\+\-\*\/])\s*([\w\d]+)/);
        if (mathMatch) {
            const val1 = evaluateExpression(mathMatch[1]);
            const val2 = evaluateExpression(mathMatch[3]);
            const op = mathMatch[2];
            if (typeof val1 === 'number' && typeof val2 === 'number') {
                switch (op) {
                    case '+': return val1 + val2;
                    case '-': return val1 - val2;
                    case '*': return val1 * val2;
                    case '/': return val1 / val2;
                }
            }
            // String concat
            if (op === '+') return val1 + "" + val2;
        }
        return expr;
    };

    const lines = sourceCode.split('\n');

    try {
        lines.forEach(line => {
            line = line.trim();
            if (!line) return;

            // int[] arr = {1, 2, 3};
            const arrayMatch = line.match(/int\[\]\s+(\w+)\s*=\s*\{(.*)\};/);
            if (arrayMatch) {
                const values = arrayMatch[2].split(',').map(v => evaluateExpression(v.trim()));
                variables[arrayMatch[1]] = values;
            }

            // Multi-variable mismatch fix
            const multiVarMatch = line.match(/(?:int|String|double|float|char)\s+(.+);/);
            if (multiVarMatch && !line.includes('[]') && !line.includes('(')) {
                const typePart = multiVarMatch[0].trim().split(/\s+/)[0];
                const decls = multiVarMatch[1].split(',');
                decls.forEach(decl => {
                    const parts = decl.split('=');
                    const varName = parts[0].trim();
                    if (parts.length === 2) {
                        variables[varName] = evaluateExpression(parts[1].trim());
                    } else {
                        variables[varName] = (typePart === 'String' ? "" : 0);
                    }
                });
            }

            // sum += num;
            const addAssignMatch = line.match(/(\w+)\s*\+=\s*(.+);/);
            if (addAssignMatch) {
                const varName = addAssignMatch[1];
                if (variables[varName] !== undefined) {
                    const addedVal = evaluateExpression(addAssignMatch[2]);
                    if (typeof addedVal === 'number') {
                        variables[varName] += addedVal;
                    }
                }
            }

            // for (int num : arr)
            const forMatch = line.match(/for\s*\(int\s+(\w+)\s*:\s*(\w+)\)/);
            if (forMatch) {
                const iterVar = forMatch[1];
                const arrayVar = forMatch[2];
                if (Array.isArray(variables[arrayVar])) {
                    // Simple simulation
                    const nextLine = lines[lines.indexOf(line) + 1] || "";
                    if (nextLine.includes('+=') && nextLine.includes(iterVar)) {
                        const targetVarMatch = nextLine.match(/(\w+)\s*\+=/);
                        if (targetVarMatch) {
                            const targetVar = targetVarMatch[1];
                            variables[arrayVar].forEach(val => {
                                variables[targetVar] += val;
                            });
                        }
                    }
                }
            }

            // String s = "Text";
            const strMatch = line.match(/String\s+(\w+)\s*=\s*"(.*)";/);
            if (strMatch) variables[strMatch[1]] = strMatch[2];

            // System.out.println(...)
            if (line.includes('System.out.println')) {
                const match = line.match(/System\.out\.println\((.*)\);/);
                if (match) {
                    let content = match[1];
                    const parts = content.split('+');
                    let lineOut = "";
                    parts.forEach(part => {
                        lineOut += evaluateExpression(part);
                    });
                    outputBuffer += lineOut + "\n";
                }
            }
        });
    } catch (e) {
        outputBuffer += `\nError parsing Java: ${e.message}`;
        return { error: outputBuffer };
    }

    if (!outputBuffer) outputBuffer = "Build Success. (No output captured)";
    return { output: outputBuffer };
};

export const executeCpp = (sourceCode) => {
    let outputBuffer = "";
    const variables = {};
    const lines = sourceCode.split('\n');
    try {
        lines.forEach(line => {
            line = line.trim();
            if (!line) return;

            // Support int/float/double/char a = 10, b = 20;
            const multiVarMatch = line.match(/(?:int|float|double|char|string)\s+(.+);/);
            if (multiVarMatch && !line.includes('(')) {
                const decls = multiVarMatch[1].split(',');
                decls.forEach(decl => {
                    const parts = decl.split('=');
                    if (parts.length === 2) {
                        const varName = parts[0].trim();
                        const val = parts[1].trim();
                        if (!isNaN(val)) variables[varName] = Number(val);
                        else {
                            const mathMatch = val.match(/([\w\d]+)\s*([\+\-\*\/])\s*([\w\d]+)/);
                            if (mathMatch) {
                                const v1 = !isNaN(mathMatch[1]) ? Number(mathMatch[1]) : variables[mathMatch[1]];
                                const v2 = !isNaN(mathMatch[3]) ? Number(mathMatch[3]) : variables[mathMatch[3]];
                                if (v1 !== undefined && v2 !== undefined) {
                                    if (mathMatch[2] === '+') variables[varName] = v1 + v2;
                                    if (mathMatch[2] === '-') variables[varName] = v1 - v2;
                                    if (mathMatch[2] === '*') variables[varName] = v1 * v2;
                                    if (mathMatch[2] === '/') variables[varName] = v1 / v2;
                                }
                            }
                        }
                    } else {
                        const varName = parts[0].trim();
                        variables[varName] = 0;
                    }
                });
            }

            // Naive cout parser
            if (line.includes('cout')) {
                // Remove cout << and ending semicolon/endl
                let content = line.replace(/cout\s*<</, '').replace(/<<\s*endl\s*;?/, '').replace(/;/, '').trim();

                // Try to resolve content
                if (content.startsWith('"') && content.endsWith('"')) {
                    outputBuffer += content.slice(1, -1) + "\n";
                } else if (variables[content] !== undefined) {
                    outputBuffer += variables[content] + "\n";
                } else {
                    // Try simple math in cout
                    const mathMatch = content.match(/([\w\d]+)\s*([\+\-\*\/])\s*([\w\d]+)/);
                    if (mathMatch) {
                        const v1 = !isNaN(mathMatch[1]) ? Number(mathMatch[1]) : variables[mathMatch[1]];
                        const v2 = !isNaN(mathMatch[3]) ? Number(mathMatch[3]) : variables[mathMatch[3]];
                        if (v1 !== undefined && v2 !== undefined) {
                            if (mathMatch[2] === '+') outputBuffer += (v1 + v2) + "\n";
                            if (mathMatch[2] === '-') outputBuffer += (v1 - v2) + "\n";
                            if (mathMatch[2] === '*') outputBuffer += (v1 * v2) + "\n";
                            if (mathMatch[2] === '/') outputBuffer += (v1 / v2) + "\n";
                        }
                    }
                }
            }
        });
    } catch (e) {
        outputBuffer += `\nError parsing C++: ${e.message}`;
        return { error: outputBuffer };
    }
    if (!outputBuffer) outputBuffer = "Build Success. (No output captured)";
    return { output: outputBuffer };
};

// New Helper: Check Solution against Test Cases
export const runSolutionCheck = async (language, userCode, testCases) => {
    const results = [];

    // Normalize language
    const lang = (language || '').toLowerCase();

    // Just a basic check for supported languages initially
    if (!['python', 'java', 'c++', 'javascript', 'js'].includes(lang)) {
        return { error: `Test runner not fully supported for ${lang} yet` };
    }

    /*
     * Note: This runs test cases sequentially.
     * Since we are using simulated/browser-based execution, we can iterate and check outputs.
     * For Python, we need the context with pyodide.
     */

    for (const testCase of testCases) {
        let actualOutput = "";
        let isPass = false;

        try {
            // Prepare inputs context
            // Assuming testCase.input is a string like "10\n20" or just "10"
            // We split by newline to simulate multiple inputs if needed
            const inputs = testCase.input ? testCase.input.split('\n') : [];

            // Execute
            // We need to pass the global pyodide instance if it's python
            const executionContext = {};
            if (lang === 'python' && window.pyodideInstance) {
                executionContext.pyodide = window.pyodideInstance;
            }
            executionContext.inputs = inputs;

            const result = await executeCode(lang, userCode, executionContext);

            if (result.error) {
                actualOutput = "Error: " + result.error;
                isPass = false;
            } else {
                actualOutput = result.output ? result.output.trim() : "";
                const expected = testCase.expectedOutput ? testCase.expectedOutput.trim() : "";
                isPass = actualOutput === expected;
            }

        } catch (err) {
            actualOutput = "Execution Crash: " + err.message;
            isPass = false;
        }

        results.push({
            input: testCase.input,
            expectedOutput: testCase.expectedOutput,
            actualOutput: actualOutput,
            pass: isPass
        });
    }

    return { results };
};

// Resource loading utility
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            if (existing.getAttribute('data-loaded') === 'true') return resolve();
            existing.addEventListener('load', resolve);
            existing.addEventListener('error', reject);
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.setAttribute('data-loaded', 'false');
        script.onload = () => {
            script.setAttribute('data-loaded', 'true');
            resolve();
        };
        script.onerror = (e) => {
            script.remove();
            reject(new Error(`Failed to load script: ${src}`));
        };
        document.head.appendChild(script);
    });
};

// Global singleton for Pyodide
let pyodideInstance = null;
let pyodidePromise = null;

export const getPyodide = async () => {
    if (pyodideInstance) return pyodideInstance;
    if (pyodidePromise) return pyodidePromise;

    pyodidePromise = (async () => {
        try {
            const pyodideUrl = "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js";
            await loadScript(pyodideUrl);

            // Safety wait for global to appear if script execution is slightly delayed
            let attempts = 0;
            while (typeof window.loadPyodide !== 'function' && attempts < 50) {
                await new Promise(r => setTimeout(r, 100));
                attempts++;
            }

            if (typeof window.loadPyodide !== 'function') {
                throw new Error("Pyodide script loaded but window.loadPyodide is not defined.");
            }

            const py = await window.loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
            });

            await py.loadPackage('sqlite3');
            pyodideInstance = py;
            window.pyodideInstance = py; // Ensure it's globally available for other components
            return py;
        } catch (err) {
            console.error("Pyodide Init Failed:", err);
            pyodidePromise = null;
            throw err;
        }
    })();

    return pyodidePromise;
};

export const executeCode = async (language, code, context = {}) => {
    const lang = (language || '').toLowerCase();

    if (['sql', 'mysql', 'postgresql', 'sqlserver', 'sqlite', 'oracle'].includes(lang)) {
        const result = await executeSQL(code);
        return result;
    }

    if (lang === 'java') {
        return executeJava(code);
    }

    if (lang === 'c++' || lang === 'cpp') {
        return executeCpp(code);
    }

    if (lang === 'python') {
        const py = context.pyodide || await getPyodide();
        if (!py) {
            return { error: 'Python engine not initialized.' };
        }
        let output = "";
        try {
            py.setStdout({
                batched: (msg) => { output += msg + "\n"; }
            });

            // Mock input() if inputs are provided
            let codeToRun = code;
            if (context.inputs && Array.isArray(context.inputs)) {
                // Escape input strings to avoid injection or syntax errors in Python string
                const safeInputs = context.inputs.map(i => String(i).replace(/"/g, '\\"').replace(/\n/g, '\\n'));
                const inputList = `["${safeInputs.join('", "')}"]`;

                const mockInput = `
import sys
_input_buffer = ${inputList}
_input_idx = 0
def input(prompt=None):
    global _input_idx
    if prompt:
        print(prompt, end='')
    if _input_idx < len(_input_buffer):
        val = _input_buffer[_input_idx]
        _input_idx += 1
        return str(val)
    raise EOFError("EOF when reading a line")
`;
                codeToRun = mockInput + "\n" + code;
            }

            const result = await py.runPythonAsync(codeToRun);
            if (!output && result !== undefined) {
                output = result.toString();
            }
            return { output: output || "Executed successfully." };
        } catch (error) {
            return {
                error: error.message,
                output: output // Include partial output before error
            };
        }
    }

    if (lang === 'javascript' || lang === 'js') {
        try {
            // Check for syntax errors first
            new Function(code);

            let logs = [];
            const originalLog = console.log;
            console.log = (...args) => logs.push(args.join(' '));
            new Function(code)();
            console.log = originalLog;
            return { output: logs.join('\n') || "Executed successfully." };
        } catch (e) {
            return { error: `Syntax/Runtime Error: ${e.message}` };
        }
    }

    if (lang === 'html' || lang === 'css') {
        const hasHtmlTags = /<[a-z][\s\S]*>/i.test(code);
        const isFullHtml = /<html[\s\S]*>/i.test(code);

        if (isFullHtml) {
            return { html: code };
        }

        const processedCode = (lang === 'css' && !hasHtmlTags)
            ? `<style>${code}</style>
               <div class="container">
                 <div class="box text-red text-blue primary active">Default Box (Styled Area)</div>
                 <h1 class="header">Main Heading</h1>
                 <p class="text-p">This is a sample paragraph for styling.</p>
                 <a href="#" class="link">Sample Link</a>
                 <button class="btn">Button</button>
                 <ul class="list">
                   <li>List Item 1</li>
                   <li>List Item 2</li>
                 </ul>
               </div>`
            : code;

        // Use Base64 to safely inject code and avoid any template literal escaping issues
        const base64Code = btoa(unescape(encodeURIComponent(processedCode)));

        const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 0; color: #333; margin: 0; background: #fff; display: flex; flex-direction: column; height: 100vh; }
    #output-viewport { flex: 1; padding: 20px; overflow-y: auto; box-sizing: border-box; }
    #console-logs { 
        height: 150px; 
        background: #1e1e1e; 
        color: #d4d4d4; 
        padding: 10px; 
        font-family: 'SFMono-Regular', Consolas, monospace; 
        font-size: 12px; 
        overflow-y: auto; 
        border-top: 2px solid #333;
        box-sizing: border-box;
    }
    .log-entry { margin-bottom: 4px; padding: 2px 4px; border-radius: 2px; white-space: pre-wrap; word-break: break-all; }
    .log-info { color: #9cdcfe; }
    .log-error { color: #f48771; background: rgba(244, 135, 113, 0.1); }
    .log-warn { color: #cca700; }
    
    .container { border: 2px dashed #ccc; padding: 20px; min-height: 100px; border-radius: 8px; margin-bottom: 15px; }
    .box { background: #4a5568; color: white; padding: 15px; border-radius: 4px; text-align: center; }
  </style>
  <script>
    window.onerror = function(msg, url, line, col, error) {
      const logContainer = document.getElementById('console-logs');
      if (logContainer) {
        const div = document.createElement('div');
        div.className = 'log-entry log-error';
        div.textContent = 'Error: ' + msg;
        logContainer.appendChild(div);
        logContainer.scrollTop = logContainer.scrollHeight;
      }
      return false;
    };

    window.alert = function(message) {
      window.parent.postMessage({
        type: "iframe-alert",
        message: message
      }, "*");
    };

  </script>
</head>
<body>
  <div id="output-viewport"></div>
  <div id="console-logs"></div>
  <script>
    (function() {
      const logContainer = document.getElementById('console-logs');
      const originalLog = console.log;
      const originalError = console.error;
      const originalWarn = console.warn;
      
      const addLog = (msg, type = 'info') => {
        const div = document.createElement('div');
        div.className = 'log-entry log-' + type;
        div.textContent = (type === 'error' ? 'Error: ' : type === 'warn' ? 'Warn: ' : '> ') + 
                          (typeof msg === 'object' ? JSON.stringify(msg) : msg);
        logContainer.appendChild(div);
        logContainer.scrollTop = logContainer.scrollHeight;
      };

      console.log = (...args) => { addLog(args.join(' '), 'info'); originalLog.apply(console, args); };
      console.error = (...args) => { addLog(args.join(' '), 'error'); originalError.apply(console, args); };
      console.warn = (...args) => { addLog(args.join(' '), 'warn'); originalWarn.apply(console, args); };

      // Safely inject code
      try {
        const decodedCode = decodeURIComponent(escape(atob('${base64Code}')));
        document.getElementById('output-viewport').innerHTML = decodedCode;
        
        // Execute scripts in injected content
        const scripts = document.getElementById('output-viewport').querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
      } catch (e) {
        addLog('Injection Error: ' + e.message, 'error');
      }
    })();
  </script>
</body>
</html>
        `;
        return { html: htmlTemplate };
    }

    if (lang === 'react') {
        // Pre-validate React syntax if Babel is available in main thread
        if (typeof Babel !== 'undefined') {
            try {
                Babel.transform(code, { presets: ['react'] });
            } catch (e) {
                return { error: `Syntax Error: ${e.message}` };
            }
        }

        const base64Code = btoa(unescape(encodeURIComponent(code)));
        const reactTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 0; color: #333; margin: 0; background: #fff; display: flex; flex-direction: column; height: 100vh; }
    #root { flex: 1; min-height: 100px; padding: 20px; box-sizing: border-box; overflow-y: auto; }
    #console-logs { 
        height: 150px; 
        background: #1e1e1e; 
        color: #d4d4d4; 
        padding: 10px; 
        font-family: 'SFMono-Regular', Consolas, monospace; 
        font-size: 12px; 
        overflow-y: auto; 
        border-top: 2px solid #333;
    }
    .log-entry { margin-bottom: 4px; padding: 2px 4px; border-radius: 2px; white-space: pre-wrap; word-break: break-all; }
    .log-info { color: #9cdcfe; }
    .log-error { color: #f48771; background: rgba(244, 135, 113, 0.1); }
    .log-warn { color: #cca700; }
  </style>
</head>
<body>
  <div id="root"></div>
  <div id="console-logs"></div>
  <script>
    const logContainer = document.getElementById('console-logs');
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    const addLog = (msg, type = 'info') => {
        const div = document.createElement('div');
        div.className = 'log-entry log-' + type;
        div.textContent = (type === 'error' ? '✖ ' : type === 'warn' ? '⚠ ' : '› ') + (typeof msg === 'object' ? JSON.stringify(msg) : msg);
        logContainer.appendChild(div);
        logContainer.scrollTop = logContainer.scrollHeight;
    };
    console.log = (...args) => { addLog(args.join(' '), 'info'); originalLog.apply(console, args); };
    console.error = (...args) => { addLog(args.join(' '), 'error'); originalError.apply(console, args); };
    console.warn = (...args) => { addLog(args.join(' '), 'warn'); originalWarn.apply(console, args); };
    
    const { useState, useEffect, useCallback, useMemo, useRef, useReducer, useContext } = React;
    
    try {
        const code = decodeURIComponent(escape(atob('${base64Code}')));
        const processedCode = code
            .replace(/import\\s+[\\s\\S]*?\\s+from\\s+['"].*?['"];?/g, '')
            .replace(/export default (\\w+);?/g, 'window.DefaultExport = $1;')
            .replace(/export (const|class|function)/g, '$1');

        const evalCode = Babel.transform(processedCode, { presets: ['react'] }).code;
        
        // Execute in global scope
        window.eval(evalCode);
        
        let ComponentToRender = null;
        if (window.DefaultExport) {
            ComponentToRender = window.DefaultExport;
        } else if (window.App) {
            ComponentToRender = window.App;
        } else if (window.Counter) {
            ComponentToRender = window.Counter;
        } else if (typeof App !== 'undefined') {
            ComponentToRender = App;
        } else if (typeof Counter !== 'undefined') {
            ComponentToRender = Counter;
        } else {
            // Search all window properties for likely components
            const potentialNames = Object.keys(window).filter(key => 
                typeof window[key] === 'function' && 
                !['React', 'ReactDOM', 'Babel'].includes(key) &&
                (/^[A-Z]/.test(key) || key.toLowerCase() === 'app' || key.toLowerCase() === 'counter')
            );
            if (potentialNames.length > 0) {
                // Prefer App or Counter if they exist among these
                const bestMatch = potentialNames.find(n => n.toLowerCase() === 'app' || n.toLowerCase() === 'counter') || potentialNames[0];
                ComponentToRender = window[bestMatch];
            }
        }

        if (ComponentToRender) {
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(React.createElement(ComponentToRender));
        } else {
            addLog('Could not find a React component to render. Make sure your component name is capitalized (e.g., function App() { ... }).', 'error');
        }
    } catch (e) {
        addLog('Runtime Error: ' + e.message, 'error');
    }
  </script>
</body>
</html>
        `;
        return { html: reactTemplate };
    }

    if (lang === 'angular') {
        // Pre-validate Angular/TS syntax
        if (typeof Babel !== 'undefined') {
            try {
                Babel.transform(code, {
                    presets: ['typescript'],
                    plugins: [
                        ['proposal-decorators', { legacy: true }],
                        ['proposal-class-properties', { loose: true }]
                    ]
                });
            } catch (e) {
                return { error: `Syntax/TS Error: ${e.message}` };
            }
        }
        const base64Code = btoa(unescape(encodeURIComponent(code)));
        const angularTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/reflect-metadata@0.1.13/Reflect.js"></script>
  <script src="https://unpkg.com/zone.js@0.14.4/bundles/zone.umd.min.js"></script>
  <script src="https://unpkg.com/rxjs@7.8.1/dist/bundles/rxjs.umd.min.js"></script>
  <script src="https://unpkg.com/@angular/core@12.2.16/bundles/core.umd.js"></script>
  <script src="https://unpkg.com/@angular/common@12.2.16/bundles/common.umd.js"></script>
  <script src="https://unpkg.com/@angular/compiler@12.2.16/bundles/compiler.umd.js"></script>
  <script src="https://unpkg.com/@angular/platform-browser@12.2.16/bundles/platform-browser.umd.js"></script>
  <script src="https://unpkg.com/@angular/platform-browser-dynamic@12.2.16/bundles/platform-browser-dynamic.umd.js"></script>
  <script src="https://unpkg.com/@angular/forms@12.2.16/bundles/forms.umd.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body { font-family: 'Inter', system-ui, sans-serif; padding: 20px; margin: 0; background: #fff; color: #1e293b; }
    .status-container { text-align: center; padding: 40px; color: #64748b; font-size: 14px; background: #f8fafc; border-radius: 12px; margin: 20px; border: 1px dashed #e2e8f0; }
    #console-logs { 
        position: fixed; bottom: 0; left: 0; right: 0;
        height: 100px; background: #0f172a; color: #e2e8f0; 
        padding: 10px; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 11px; 
        overflow-y: auto; border-top: 1px solid #334155; z-index: 1000;
    }
    .log-entry { margin-bottom: 4px; display: flex; gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 2px; }
    .log-error { color: #f87171; }
    .log-info { color: #38bdf8; }
    app-root { display: block; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; min-height: 50px; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 120px; }
    .error-card { background: #fef2f2; border: 1px solid #fee2e2; color: #991b1b; padding: 16px; border-radius: 8px; margin: 10px 0; font-family: monospace; font-size: 11px; white-space: pre-wrap; word-break: break-all; line-height: 1.4; }
  </style>
</head>
<body>
  <app-root>
    <div class="status-container">
      <div style="font-weight: 600; margin-bottom: 12px; color: #0f172a; font-size: 16px;">Angular Compiler Environment</div>
      <div id="status-msg">Waking up the engine...</div>
      <div style="margin-top: 20px; height: 4px; background: #e2e8f0; border-radius: 2px; overflow: hidden;">
        <div id="progress-bar" style="width: 20%; height: 100%; background: #3b82f6; transition: width 0.3s;"></div>
      </div>
    </div>
  </app-root>
  <div id="console-logs"></div>
  <script>
    const logContainer = document.getElementById('console-logs');
    const statusEl = document.getElementById('status-msg');
    const progressEl = document.getElementById('progress-bar');
    
    const setStatus = (msg, progress) => {
        if (statusEl) statusEl.textContent = msg;
        if (progressEl) progressEl.style.width = progress + '%';
        console.log('› Status: ' + msg);
    };

    const addLog = (msg, type = 'info') => {
        const div = document.createElement('div');
        div.className = 'log-entry log-' + type;
        div.textContent = (type === 'error' ? '✖ ' : '› ') + (typeof msg === 'object' ? JSON.stringify(msg) : msg);
        logContainer.appendChild(div);
        logContainer.scrollTop = logContainer.scrollHeight;
    };

    const showError = (msg) => {
        const root = document.querySelector('app-root');
        if (root) {
            root.innerHTML = '<div class="error-card"><strong>Angular Boot Error</strong><br><br>' + 
                            msg.replace(/\\n/g, '<br>') + '</div>';
        }
        addLog(msg, 'error');
    };
    
    // Setup Console Redirection
    const _log = console.log;
    const _error = console.error;
    console.log = (...args) => { addLog(args.join(' ')); _log.apply(console, args); };
    console.error = (...args) => { addLog(args.join(' '), 'error'); _error.apply(console, args); };
    window.onerror = (msg) => showError(msg);

    async function bootstrap() {
      try {
        setStatus('Warming up engines...', 20);
        let attempts = 0;
        while ((typeof ng === 'undefined' || typeof Babel === 'undefined') && attempts < 200) {
          await new Promise(r => setTimeout(r, 100));
          attempts++;
        }

        if (typeof ng === 'undefined') throw new Error('Angular core failed to load from CDN. Please check your internet connection.');
        
        setStatus('Preparing code pipeline...', 40);
        const rawCode = decodeURIComponent(escape(atob('${base64Code}')));
        
        // Comprehensive Import/Export Stripping
        let processedCode = rawCode
            .replace(/import\\s+[\\s\\S]*?from\\s+['"][\\s\\S]*?['"];?/gi, '')
            .replace(/import\\s+['"][\\s\\S]*?['"];?/gi, '')
            .replace(/\\bexport\\s+class\\b/gi, 'class')
            .replace(/\\bexport\\s+interface\\b/gi, 'interface')
            .replace(/\\bexport\\s+type\\b/gi, 'type')
            .replace(/\\bexport\\s+/gi, ''); // Final catch-all for 'export default' etc
        
        // Smart Wrapping Logic
        if (!processedCode.includes('@Component')) {
            setStatus('Auto-wrapping class...', 50);
            processedCode = \`
              @Component({
                selector: 'app-root',
                template: \\\`
                  <div class="p-4 border border-blue-100 rounded-lg bg-blue-50/30">
                    \${processedCode.includes('<') ? processedCode : '<h3 class="text-lg font-bold text-blue-900 mb-2">Angular Preview</h3><p class="text-blue-700">Your component class logic is active.</p>'}
                  </div>
                \\\`
              })
              class AppComponent {
                \${!processedCode.includes('<') ? processedCode : ''}
              }
            \`;
        }

        // Setup Framework Globals
        const { Component, NgModule } = ng.core || {};
        const { BrowserModule } = ng.platformBrowser || {};
        const { platformBrowserDynamic } = ng.platformBrowserDynamic || {};
        const { CommonModule } = ng.common || {};
        const { FormsModule, ReactiveFormsModule } = ng.forms || {};

        if (!Component || !platformBrowserDynamic) throw new Error('Angular UMD modules are incomplete or corrupted.');

        window.Component = Component;
        window.NgModule = NgModule;
        window.CommonModule = CommonModule;
        window.BrowserModule = BrowserModule;
        window.FormsModule = FormsModule;
        window.ReactiveFormsModule = ReactiveFormsModule;

        setStatus('Compiling TypeScript...', 70);
        let transpiled;
        try {
            transpiled = Babel.transform(processedCode, {
                filename: 'dynamic.ts',
                presets: ['typescript'],
                plugins: [
                    ['proposal-decorators', { legacy: true }],
                    ['proposal-class-properties', { loose: true }]
                ]
            }).code;
        } catch (e) {
            throw new Error('TS Compilation Error: ' + e.message);
        }

        setStatus('Executing logic...', 80);
        const classNameMatch = processedCode.match(/class\\s+([\\w$]+)/i);
        const className = classNameMatch ? classNameMatch[1] : 'AppComponent';
        
        // AGGRESSIVE STRIP and Force Registration to window
        const executableCode = transpiled.replace(/\\bexport\\s+/g, '') + \`\\nwindow['\${className}'] = \${className};\`;

        try {
            window.eval(executableCode);
        } catch (e) {
            throw new Error('Runtime Class Error: ' + e.message);
        }
        
        const RootComponent = window[className];
        
        if (!RootComponent) throw new Error('Could not find class: ' + className + '. Ensure your class name matches the one defined in your code.');
        window['RootComponent'] = RootComponent;

        setStatus('Linking AppModule...', 90);
        const moduleCode = Babel.transform(\`
            @NgModule({
              imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
              declarations: [window['\${className}']],
              bootstrap: [window['\${className}']]
            })
            class AppModule {}
            window.AppModule = AppModule;
        \`, {
            filename: 'module.ts',
            presets: ['typescript'],
            plugins: [
                ['proposal-decorators', { legacy: true }],
                ['proposal-class-properties', { loose: true }]
            ]
        }).code;

        try {
            window.eval(moduleCode);
        } catch (e) {
            throw new Error('Module Linking Fail: ' + e.message);
        }

        setStatus('Bootstrapping...', 95);
        platformBrowserDynamic().bootstrapModule(window.AppModule)
          .then(() => {
              setStatus('Ready', 100);
              const status = document.querySelector('.status-container');
              if (status) status.style.opacity = '0';
              setTimeout(() => { if (status) status.style.display = 'none'; }, 300);
          })
          .catch(err => showError('Bootstrap Error: ' + err.message));

      } catch (err) {
        showError(err.message);
      }
    }

    // Start execution with a safety delay
    setTimeout(bootstrap, 500);
  </script>
</body>
</html>
        `;
        return { html: angularTemplate };
    }

    return { error: `Execution for ${language} is not supported yet.` };
};
