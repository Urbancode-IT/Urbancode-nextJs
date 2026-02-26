import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaPlay, FaCode, FaExclamationCircle } from "react-icons/fa";
import Editor from "../Editor.jsx";

const CodeCompiler = ({ language, label }) => {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [isRunning, setIsExecuting] = useState(false);
    const variables = useRef({});

    useEffect(() => {
        const starterCode = {
            python: 'print("Hello, Python!")',
            java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
            'c++': '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}',
            sql: 'SELECT * FROM users;'
        };
        if (starterCode[language]) {
            setCode(starterCode[language]);
        }
    }, [language]);

    const [error, setError] = useState("");
    const pyodideRef = useRef(null);

    useEffect(() => {
        if (language === "python" && !pyodideRef.current) {
            const loadPyodideEngine = async () => {
                try {
                    if (window.loadPyodide) {
                        setOutput("Initializing Python environment...");
                        const pyodide = await window.loadPyodide({
                            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
                        });
                        // Load sqlite3 package as it is unvendored in newer Pyodide versions
                        await pyodide.loadPackage('sqlite3');
                        pyodideRef.current = pyodide;
                        setOutput((prev) => prev + "\nPython Ready.");
                    }
                } catch (e) {
                    console.error("Failed to load Pyodide:", e);
                    setError("Failed to load Python engine. Please check internet connection.");
                }
            };
            setTimeout(loadPyodideEngine, 1000);
        }
    }, [language]);

    const runPython = async (sourceCode) => {
        if (!pyodideRef.current) {
            return { error: "Python engine not loaded yet. Please wait." };
        }
        try {
            let capturedOutput = "";
            pyodideRef.current.setStdout({
                batched: (msg) => {
                    capturedOutput += msg + "\n";
                    setOutput((prev) => prev + msg + "\n");
                }
            });
            await pyodideRef.current.runPythonAsync(sourceCode);
            return { output: capturedOutput };
        } catch (error) {
            return { error: error.message };
        }
    };

    const runJava = (sourceCode) => {
        let outputBuffer = "";
        const vars = {};

        const evaluateExpression = (expr) => {
            expr = expr.trim();
            if (expr.startsWith('"') && expr.endsWith('"')) return expr.slice(1, -1);
            if (!isNaN(expr)) return Number(expr);
            if (vars[expr] !== undefined) return vars[expr];

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
                        default: return expr;
                    }
                }
                if (op === '+') return val1 + "" + val2;
            }
            return expr;
        };

        const lines = sourceCode.split('\n');
        try {
            lines.forEach(line => {
                line = line.trim();
                const intMatch = line.match(/int\s+(\w+)\s*=\s*(\d+);/);
                if (intMatch) vars[intMatch[1]] = Number(intMatch[2]);

                const strMatch = line.match(/String\s+(\w+)\s*=\s*"(.*)";/);
                if (strMatch) vars[strMatch[1]] = strMatch[2];

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
            return { error: e.message, output: outputBuffer };
        }

        if (!outputBuffer) outputBuffer = "Build Success. (No output captured)";
        return { output: outputBuffer };
    };

    const runCPlusPlus = (sourceCode) => {
        let outputBuffer = "";
        const lines = sourceCode.split('\n');
        try {
            lines.forEach(line => {
                line = line.trim();
                const intMatch = line.match(/int\s+(\w+)\s*=\s*(\d+);/);
                if (intMatch) variables.current[intMatch[1]] = Number(intMatch[2]);

                if (line.includes('cout')) {
                    const match = line.match(/cout\s*<<\s*"(.*)"\s*(<<\s*endl|;)?/);
                    if (match) {
                        outputBuffer += match[1] + "\n";
                    } else {
                        const varMatch = line.match(/cout\s*<<\s*(\w+)\s*(<<\s*endl|;)?/);
                        if (varMatch && variables.current[varMatch[1]]) {
                            outputBuffer += variables.current[varMatch[1]] + "\n";
                        }
                    }
                }
            });
        } catch (e) {
            return { error: e.message, output: outputBuffer };
        }
        if (!outputBuffer) outputBuffer = "Build Success. (No output captured)";
        return { output: outputBuffer };
    };

    const runSQL = (sourceCode) => {
        if (sourceCode.toLowerCase().includes('select')) {
            return { output: "Query Executed Successfully.\n\n| id | name      | role      |\n|----|-----------|-----------|\n| 1  | John Doe  | Admin     |\n| 2  | Jane Doe  | User      |\n| 3  | Bob Smith | Editor    |" };
        } else if (sourceCode.trim()) {
            return { output: "Command Executed Successfully (1 row affected)." };
        }
        return { output: "" };
    };

    const handleRun = async () => {
        setIsExecuting(true);
        setOutput("");
        setError("");

        setTimeout(async () => {
            let res = { output: "" };
            if (language === "python") {
                res = await runPython(code);
            } else if (language === "java") {
                res = runJava(code);
            } else if (language === "c++") {
                res = runCPlusPlus(code);
            } else if (language === "sql") {
                res = runSQL(code);
            } else {
                res = { error: `Execution not implemented for ${language}` };
            }

            if (res.error) setError(res.error);
            if (res.output && language !== "python") setOutput(res.output);
            setIsExecuting(false);
        }, 800);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="code-compiler-container"
        >
            <div className="compiler-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>{label} Compiler</h2>
                </div>
                <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="run-button"
                >
                    {isRunning ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                            <FaTerminal />
                        </motion.div>
                    ) : (
                        <FaPlay />
                    )}
                    <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>
            </div>

            <div className="compiler-body">
                <div className="compiler-editor-container">
                    <div className="editor-header-label">
                        <span>Source Code</span>
                    </div>
                    <Editor
                        label={label}
                        value={code}
                        onChange={setCode}
                        language={language}
                    />
                </div>

                <div className="compiler-output-container">
                    <div className="output-label">
                        <FaTerminal size={12} />
                        <span>Terminal Output</span>
                    </div>
                    <div className="terminal-body">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={output + error}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ width: '100%' }}
                            >
                                {error && (
                                    <div className="error-message">
                                        <FaExclamationCircle /> {error}
                                    </div>
                                )}
                                <pre className="output-pre">
                                    {output || (!error && "Ready to execute...")}
                                </pre>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

CodeCompiler.propTypes = {
    language: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default CodeCompiler;
