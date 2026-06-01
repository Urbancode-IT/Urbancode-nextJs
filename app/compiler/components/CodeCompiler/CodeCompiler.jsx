import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaPlay, FaExclamationCircle } from "react-icons/fa";
import Editor from "../Editor.jsx";
import { executeCode, getPyodide } from "../../utils/codeExecutor";

const CodeCompiler = ({ language, label }) => {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [isRunning, setIsExecuting] = useState(false);
    const [error, setError] = useState("");
    const [pythonReady, setPythonReady] = useState(language !== "python");

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
        setOutput("");
        setError("");
        setPythonReady(language !== "python");
    }, [language]);

    useEffect(() => {
        if (language !== "python") return;
        let cancelled = false;
        setOutput("Initializing Python environment...");
        getPyodide()
            .then(() => {
                if (!cancelled) {
                    setPythonReady(true);
                    setOutput("Python ready. Click Run Code.");
                }
            })
            .catch((e) => {
                if (!cancelled) {
                    setError(
                        e?.message ||
                            "Failed to load Python engine. Check your internet connection."
                    );
                    setOutput("");
                }
            });
        return () => {
            cancelled = true;
        };
    }, [language]);

    const handleRun = async () => {
        if (language === "python" && !pythonReady) {
            setError("Python engine is still loading. Please wait.");
            return;
        }
        setIsExecuting(true);
        setOutput("");
        setError("");
        try {
            const res = await executeCode(language, code);
            if (res.error) setError(res.error);
            if (res.output) setOutput(res.output);
        } catch (e) {
            setError(e?.message || "Execution failed.");
        } finally {
            setIsExecuting(false);
        }
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
                    disabled={isRunning || (language === "python" && !pythonReady)}
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
