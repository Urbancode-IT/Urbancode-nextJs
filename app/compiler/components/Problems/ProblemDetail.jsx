import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaArrowLeft,
    FaPlay,
    FaCheck,
    FaUndo,
    FaSave,
    FaTerminal,
    FaCode,
    FaCheckCircle,
    FaInfoCircle,
    FaExclamationCircle
} from 'react-icons/fa';
import { problemsApi, progressApi } from '../../services/api';
import { executeCode, sqlDatabase, getPyodide } from '../../utils/codeExecutor';
import CodeEditor from '../Editor';
import InputModal from '../Common/InputModal';
import './ProblemDetail.css';

const ProblemDetail = () => {
    const { topic, problemId } = useParams();
    const navigate = useNavigate();
    const [problem, setProblem] = useState(null);
    const [code, setCode] = useState('');
    const [output, setOutput] = useState(null);
    const [testResults, setTestResults] = useState([]);
    const [isSolved, setIsSolved] = useState(false);
    const [isExecuting, setIsExecuting] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sqlDialect, setSqlDialect] = useState('sql');
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('adminAuth') === 'true');
    const [showInputModal, setShowInputModal] = useState(false);

    useEffect(() => {
        if (topic === 'python') {
            getPyodide().catch(err => console.error("Pre-loading Pyodide failed:", err));
        }
        if (topic === 'sqlserver') {
            setSqlDialect('sqlserver');
        }
    }, [topic]);

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                setLoading(true);
                const response = await problemsApi.getProblemById(problemId);
                if (response.success) {
                    setProblem(response.data);
                    const progressResponse = await progressApi.getUserProgress('default-user', topic);
                    if (progressResponse.success) {
                        const userProgress = progressResponse.data.find(p => (p.problemId?._id || p.problemId) === problemId);
                        if (userProgress) {
                            setCode(userProgress.savedCode || response.data.starterCode);
                            setIsSolved(userProgress.isSolved);
                        } else {
                            setCode(response.data.starterCode);
                        }
                    } else {
                        setCode(response.data.starterCode);
                    }
                }
            } catch (err) {
                console.error('Error fetching problem:', err);
                setError('Failed to load problem.');
            } finally {
                setLoading(false);
            }
        };
        fetchProblem();
    }, [topic, problemId]);

    const handleCodeChange = (newCode) => {
        setCode(newCode);
        progressApi.saveUserCode({
            userId: 'default-user',
            topic,
            problemId,
            savedCode: newCode
        }).catch(err => console.error('Error saving code:', err));
    };

    const hasSyntaxErrors = (uCode, currentTopic) => {
        const stack = [];
        const pairs = { '(': ')', '{': '}', '[': ']' };
        const openers = new Set(['(', '{', '[']);
        const closers = new Set([')', '}', ']']);

        const cleanCode = uCode
            .replace(/\/\/.*/g, '')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/'[^']*'/g, "''")
            .replace(/"[^"]*"/g, '""')
            .replace(/`[^`]*`/g, '``');

        for (let char of cleanCode) {
            if (openers.has(char)) {
                stack.push(char);
            } else if (closers.has(char)) {
                if (stack.length === 0) return true;
                const lastOpener = stack.pop();
                if (pairs[lastOpener] !== char) return true;
            }
        }

        if (currentTopic === 'html' || currentTopic === 'react') {
            const tagRegex = /<\/?([a-z0-9]+)\b[^>]*>/gi;
            const tagStack = [];
            const selfClosingTags = new Set(['img', 'br', 'hr', 'input', 'link', 'meta', 'base', 'col', 'embed', 'area', 'param', 'source', 'track', 'wbr']);
            let match;
            while ((match = tagRegex.exec(uCode)) !== null) {
                const fullTag = match[0];
                const tagName = match[1].toLowerCase();
                const isClosing = fullTag.startsWith('</');
                const isSelfClosing = fullTag.endsWith('/>') || selfClosingTags.has(tagName);
                if (isSelfClosing && !isClosing) continue;
                if (isClosing) {
                    if (tagStack.length === 0) return true;
                    if (tagStack.pop() !== tagName) return true;
                } else {
                    tagStack.push(tagName);
                }
            }
            if (tagStack.length > 0) return true;
        }
        return stack.length > 0;
    };

    const areResultsEqual = (res1, res2, userCode, solutionCode) => {
        if (!res1 || !res2) return false;
        if (!userCode || userCode.trim().length < 5) return false;
        if (!solutionCode || solutionCode.trim().length === 0) return false;

        const currentTopic = (topic || '').toLowerCase();
        const isEasy = (problem?.difficulty === 1);

        if (['javascript', 'react', 'angular', 'js', 'html', 'css'].includes(currentTopic) && hasSyntaxErrors(userCode, currentTopic)) {
            return false;
        }

        const checkRequiredKeywords = (user, solution) => {
            const stripComments = (c) => c.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/#.*$/gm, '');
            const cleanUser = stripComments(user).toLowerCase().replace(/\s/g, '');
            const cleanSolution = stripComments(solution).toLowerCase().replace(/\s/g, '');
            const boilerplateKeywords = new Set(['public', 'class', 'static', 'void', 'function', 'class', 'main', 'args', 'import', 'export', 'default', 'print', 'console', 'log', 'component', 'selector', 'template', 'styles']);

            const requiredKeywordsList = [
                'useState', 'useEffect', 'useCallback', 'useMemo', 'useRef', 'useContext',
                'onClick', 'onChange', 'onSubmit', 'fetch', 'axios', '.map(', '.filter(', '.reduce(',
                'for', 'while', 'if', 'else', 'function', 'public', 'class', 'static', 'void',
                'int', 'string', 'bool', 'true', 'false', 'cout', 'cin', 'system.out', 'print(', 'console.log',
                '@Component', 'selector', 'template', 'ngModule', 'NgModule', '*ngIf', '*ngFor', '{{',
                '<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>', '<p>', '<div>', '<span>',
                '<button', '<input', '<ul', '<li', '<ol', '<a', '<table', '<tr', '<td', '<th',
                '<img', '<form'
            ];

            let activeKeywords = [...requiredKeywordsList];

            // Add identifiers from solution that look like business logic
            const identifiers = solution.match(/\b[a-zA-Z_]\w*\b/g) || [];
            identifiers.forEach(id => {
                const idLower = id.toLowerCase();
                if (id.length > 2 && !boilerplateKeywords.has(idLower) && !activeKeywords.includes(idLower)) {
                    activeKeywords.push(idLower);
                }
            });

            if (currentTopic === 'css') {
                const cssProps = solution.match(/[-\w]+\s*:/g) || [];
                cssProps.forEach(p => {
                    const cleanP = p.trim().replace(':', '');
                    if (!activeKeywords.includes(cleanP)) {
                        activeKeywords.push(cleanP);
                    }
                });

                const commonValues = ['red', 'blue', 'green', 'center', 'flex', 'grid', 'none', 'block', 'absolute', 'relative', 'fixed', 'bold', 'italic'];
                commonValues.forEach(val => {
                    if (cleanSolution.includes(val) && !activeKeywords.includes(val)) {
                        activeKeywords.push(val);
                    }
                });
            }

            for (let keyword of activeKeywords) {
                const cleanKey = keyword.toLowerCase().replace(/[()]/g, '');
                const isBoilerplate = boilerplateKeywords.has(cleanKey);
                if (isEasy && isBoilerplate) continue;
                const cleanKeyword = keyword.toLowerCase().replace(/[()]/g, '').replace(/\s/g, '');
                if (cleanSolution.includes(cleanKeyword) && !cleanUser.includes(cleanKeyword)) return false;
            }
            return true;
        };

        // --- DEDICATED CSS RULE-BASED VALIDATION ---
        if (currentTopic === 'css') {
            const parseCSSRules = (css) => {
                const rules = {};
                const cleanCSS = css.replace(/\/\*[\s\S]*?\*\//g, '');
                const ruleRegex = /([^{};]+)\{([^}]+)\}/g;
                let match;
                while ((match = ruleRegex.exec(cleanCSS)) !== null) {
                    const selector = match[1].trim().toLowerCase().replace(/\s+/g, ' ');
                    const body = match[2].trim();
                    const declarations = new Set();
                    body.split(';').forEach(decl => {
                        const cleanDecl = decl.trim().toLowerCase().replace(/\s+/g, '');
                        if (cleanDecl) declarations.add(cleanDecl);
                    });
                    if (selector && declarations.size > 0) {
                        if (!rules[selector]) rules[selector] = new Set();
                        declarations.forEach(d => rules[selector].add(d));
                    }
                }
                return rules;
            };

            const userRules = parseCSSRules(userCode);
            const solutionRules = parseCSSRules(solutionCode);

            if (Object.keys(solutionRules).length === 0) {
                return checkRequiredKeywords(userCode, solutionCode);
            }

            for (const selector in solutionRules) {
                const userSelectors = Object.keys(userRules);
                const matchingSelector = userSelectors.find(us =>
                    us === selector || us.includes(selector) || selector.includes(us)
                );

                if (!matchingSelector) return false;

                for (const decl of solutionRules[selector]) {
                    if (!userRules[matchingSelector].has(decl)) return false;
                }
            }
            return true;
        }

        if (res1.data && res2.data) {
            if (res1.data.length !== res2.data.length) return false;
            const normalizeRow = (row) => {
                const sortedRow = {};
                Object.keys(row).sort().forEach(key => { sortedRow[key] = row[key]; });
                return sortedRow;
            };
            const sortRows = (rows) => [...rows].map(normalizeRow).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
            return JSON.stringify(sortRows(res1.data)) === JSON.stringify(sortRows(res2.data));
        }

        if (res1.html && res2.html) {
            const extractVisibleText = (c, t) => {
                if (['react', 'angular'].includes(t)) {
                    // Extract text between tags >TEXT<
                    const tagContent = (c.match(/>([^<>{}\n]+)</g) || []).map(m => m.slice(1, -1).trim());
                    // Extract strings in quotes "TEXT", 'TEXT', `TEXT`
                    const quoteContent = (c.match(/["'`]([^"'`]{3,})["'`](?!\s*:)/g) || []).map(m => m.slice(1, -1).trim());
                    const combined = [...tagContent, ...quoteContent].join(' ').toLowerCase().replace(/\s+/g, ' ').trim();
                    if (combined.length > 2) return combined;
                }
                // Fallback for HTML or when tag extraction fails
                return c.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
            };

            const userText = extractVisibleText(userCode, currentTopic);
            const solutionText = extractVisibleText(solutionCode, currentTopic);

            const extractTags = (c) => {
                const tags = c.match(/<[a-z][a-z0-9]*/gi) || [];
                return new Set(tags.map(t => t.toLowerCase()).filter(t => !['<html', '<body'].includes(t)));
            };
            const uTags = extractTags(userCode);
            const sTags = extractTags(solutionCode);
            const tagMatchCount = Array.from(sTags).filter(t => uTags.has(t)).length;
            const tagRatio = sTags.size > 0 ? tagMatchCount / sTags.size : 1;

            const minTagRatio = isEasy ? (currentTopic === 'html' ? 0.8 : 0.5) : (currentTopic === 'html' ? 0.85 : 0.8);
            const structuralMatch = (tagRatio >= minTagRatio);

            const keywordsMatch = checkRequiredKeywords(userCode, solutionCode);

            // For text matching, check if user has the solution's core text
            const textMatches = userText === solutionText || userText.includes(solutionText) || solutionText.includes(userText);

            // If primary text match fails but it's an easy problem, check a more stripped version
            let secondaryMatch = false;
            if (!textMatches && isEasy) {
                const sStrip = solutionText.replace(/[^a-z0-9]/g, '');
                const uStrip = userText.replace(/[^a-z0-9]/g, '');
                secondaryMatch = uStrip.includes(sStrip) || sStrip.includes(uStrip);
            }

            return keywordsMatch && structuralMatch && (textMatches || secondaryMatch);
        }

        if (res1.output !== undefined && res2.output !== undefined) {
            const normalize = (s) => s.toString().trim().toLowerCase().replace(/\s+/g, ' ');
            const uOut = normalize(res1.output);
            const sOut = normalize(res2.output);
            const outputMatches = uOut === sOut || uOut.includes(sOut) || sOut.includes(uOut);
            if (isEasy && outputMatches) return true;
            return outputMatches && checkRequiredKeywords(userCode, solutionCode);
        }

        if (problem?.title === 'Get Current Time' && res1?.data) {
            const hasCorrectTime = res1.data.some(row => Object.values(row).includes('12:00:00'));
            if (hasCorrectTime) return true;
        }

        return JSON.stringify(res1) === JSON.stringify(res2);
    };

    const handleRun = async () => {
        const cleanCode = code.replace(/#.*$/gm, '');
        if (topic === 'python' && /\binput\s*\(/.test(cleanCode)) {
            setShowInputModal(true);
            return;
        }
        await executeWithInputs([]);
    };

    const executeWithInputs = async (inputs = []) => {
        setIsExecuting(true);
        setOutput(null);
        setTestResults([]);
        try {
            const result = await executeCode(topic === 'sql' ? sqlDialect : topic, code, { inputs });
            setOutput(result);
            if (result.error) {
                setTestResults([{ pass: false, error: result.error }]);
            }
        } catch (e) {
            setOutput({ error: e.message });
            setTestResults([{ pass: false, error: e.message }]);
        } finally {
            setIsExecuting(false);
        }
    };

    const handleSubmit = async () => {
        setIsExecuting(true);
        setTestResults([]);
        try {
            if (problem.testCases && problem.testCases.length > 0) {
                const results = [];
                let allPassed = true;
                for (let i = 0; i < problem.testCases.length; i++) {
                    const testCase = problem.testCases[i];
                    let userTestCode = code;
                    let solutionTestCode = problem.solution;
                    if (topic === 'javascript' || topic === 'js') {
                        const funcMatch = problem.starterCode.match(/function\s+(\w+)/);
                        const funcName = funcMatch ? funcMatch[1] : '';
                        userTestCode += `\nconsole.log(${funcName}(${testCase.input}));`;
                        solutionTestCode += `\nconsole.log(${funcName}(${testCase.input}));`;
                    } else if (topic === 'python') {
                        const funcMatch = problem.starterCode.match(/def\s+(\w+)/);
                        const funcName = funcMatch ? funcMatch[1] : '';
                        userTestCode += `\nprint(${funcName}(${testCase.input}))`;
                        solutionTestCode += `\nprint(${funcName}(${testCase.input}))`;
                    }
                    const userRes = await executeCode(topic === 'sql' ? sqlDialect : topic, userTestCode);
                    const solRes = await executeCode(topic === 'sql' ? sqlDialect : topic, solutionTestCode);
                    if (userRes.error) {
                        results.push({ pass: false, error: `Error: ${userRes.error}` });
                        allPassed = false;
                        continue;
                    }
                    const isMatch = areResultsEqual(userRes, solRes, userTestCode, solutionTestCode);
                    results.push({ pass: isMatch, error: isMatch ? null : `Output Mismatch` });
                    if (!isMatch) allPassed = false;
                }
                setTestResults(results);
                if (allPassed) {
                    await progressApi.markProblemSolved({ userId: 'default-user', topic, problemId });
                    setIsSolved(true);
                    toast.success('Success! All test cases passed.');
                } else {
                    toast.error('Check failed. Please review your logic.');
                }
                return;
            }

            const userResult = await executeCode(topic === 'sql' ? sqlDialect : topic, code);
            if (userResult.error) {
                setTestResults([{ pass: false, error: userResult.error }]);
                setOutput(userResult);
                toast.error('Syntax error detected. Fix your code to proceed.');
                return;
            }
            if (!problem.solution || !problem.solution.trim()) {
                toast.error('Solution not configured. Please use "Set Solution".');
                return;
            }
            const solutionResult = await executeCode(topic === 'sql' ? sqlDialect : topic, problem.solution);
            const isMatch = areResultsEqual(userResult, solutionResult, code, problem.solution);
            if (isMatch) {
                await progressApi.markProblemSolved({ userId: 'default-user', topic, problemId });
                setIsSolved(true);
                setTestResults([{ pass: true, message: "Correct!" }]);
                setOutput(userResult);
                toast.success('Problem solved successfully!');
            } else {
                setTestResults([{ pass: false, error: "Output Mismatch" }]);
                setOutput(userResult);
                toast.error('Output doesn\'t match the expected solution.');
            }
        } catch (e) {
            setTestResults([{ pass: false, error: "Validation Error: " + e.message }]);
        } finally {
            setIsExecuting(false);
        }
    };

    const handleInputSubmit = (inputValue) => {
        setShowInputModal(false);
        const inputs = inputValue ? inputValue.split('\n') : [];
        executeWithInputs(inputs);
    };

    const handleReset = () => {
        setCode(problem.starterCode);
        setOutput(null);
        setTestResults([]);
        progressApi.saveUserCode({ userId: 'default-user', topic, problemId, savedCode: problem.starterCode });
    };

    const getDifficultyText = (level) => {
        const text = { 1: 'Easy', 2: 'Average', 3: 'Tough' };
        return text[level] || 'Unknown';
    };

    const renderOutputContent = () => {
        if (!output) return (
            <div style={{ color: '#94a3b8', padding: '12px', fontFamily: 'monospace', fontSize: '14px' }}>
                Waiting for execution...
            </div>
        );

        return (
            <div style={{ fontFamily: 'monospace', fontSize: '13px' }}>
                {output.error && (
                    <div style={{ color: '#fca5a5', background: 'rgba(239,68,68,0.1)', padding: '12px', borderRadius: '6px', borderLeft: '4px solid #ef4444', marginBottom: '8px' }}>
                        ❌ {output.error}
                    </div>
                )}
                {output.message && (
                    <div style={{ color: '#86efac', background: 'rgba(34,197,94,0.1)', padding: '12px', borderRadius: '6px', borderLeft: '4px solid #10b981', marginBottom: '8px' }}>
                        ✅ {output.message}
                    </div>
                )}
                {output.html && (
                    <div style={{ width: '100%', height: '350px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                        <iframe srcDoc={output.html} title="Output" sandbox="allow-scripts allow-same-origin" style={{ width: '100%', height: '100%', border: 'none' }} />
                    </div>
                )}
                {output.columns && output.data && (
                    <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #333' }}>
                        {output.data.length > 0 ? (
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr>
                                        {output.columns.map((col, i) => (
                                            <th key={i} style={{ textAlign: 'left', color: '#94a3b8', fontSize: '0.75rem', padding: '8px 12px', borderBottom: '1px solid #333', background: '#0f172a' }}>{col}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {output.data.map((row, idx) => (
                                        <tr key={idx} style={{ background: idx % 2 === 0 ? '#0f172a' : '#1e293b' }}>
                                            {output.columns.map((col, i) => (
                                                <td key={i} style={{ color: '#e2e8f0', fontSize: '0.875rem', padding: '8px 12px', borderBottom: '1px solid #1e293b' }}>
                                                    {row[col] !== null && row[col] !== undefined ? String(row[col]) : 'NULL'}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div style={{ color: '#64748b', padding: '20px', textAlign: 'center' }}>Query OK. 0 rows returned.</div>
                        )}
                    </div>
                )}
                {output.output && <pre style={{ color: '#e2e8f0', margin: 0 }}>{output.output}</pre>}
            </div>
        );
    };

    const relevantTables = (() => {
        if (!['sql', 'mysql', 'postgresql', 'sqlserver'].includes(topic) || !problem) return [];
        const custom = JSON.parse(localStorage.getItem('customSqlTables') || '{}');
        const mergedTables = { ...sqlDatabase };
        Object.entries(custom).forEach(([key, val]) => {
            const existingKey = Object.keys(mergedTables).find(k => k.toLowerCase() === key.toLowerCase());
            if (existingKey) delete mergedTables[existingKey];
            mergedTables[key] = val;
        });

        const tableNames = Object.keys(mergedTables).filter(name =>
            new RegExp(`\\b${name}\\b`, 'i').test(problem.description)
        );

        return tableNames.map(name => ({ name, ...mergedTables[name] }));
    })();

    if (loading) return (
        <div className="loading">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{ fontSize: '2rem', marginBottom: '1rem', color: 'rgba(139, 138, 138)' }}
            >
                <FaTerminal />
            </motion.div>
            <span>Preparing Environment...</span>
        </div>
    );

    if (error || !problem) return (
        <div className="problem-error">
            <FaExclamationCircle size={48} color="#ef4444" />
            <h2>{error || "Problem not found"}</h2>
            <button onClick={() => navigate('/problems')} className="btn-back">Go Back</button>
        </div>
    );

    return (
        <div className="problem-detail-container">
            <header className="problem-detail-header">
                <button onClick={() => navigate(`/problems/${topic}`)} className="btn-back">
                    <FaArrowLeft /> Back to List
                </button>
                <div className="problem-status-indicator">
                    {isSolved && (
                        <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="solved-badge"
                        >
                            <FaCheckCircle /> Solved
                        </motion.span>
                    )}
                </div>
            </header>

            <main className="problem-detail-content">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="problem-description-panel"
                >
                    <div className="problem-header-info">
                        <h1>{problem.title}</h1>
                        <div className="problem-meta">
                            <span className={`difficulty-badge difficulty-${problem.difficulty}`}>
                                {getDifficultyText(problem.difficulty)}
                            </span>
                            <div className="problem-tags-list">
                                {problem.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                            </div>
                        </div>
                    </div>

                    <div className="problem-description">
                        <h3><FaInfoCircle /> Description</h3>
                        <div className="description-text">
                            {problem.description.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                        </div>
                    </div>

                    {relevantTables.length > 0 && (
                        <div className="question-tables-section">
                            <h3><FaTerminal /> Required Tables</h3>
                            {relevantTables.map((table, idx) => (
                                <div key={idx} className="question-table-wrapper">
                                    <h4>{table.name}</h4>
                                    <div className="table-scroll-container">
                                        <table className="question-table">
                                            <thead>
                                                <tr>{table.columns.map(col => <th key={col}>{col}</th>)}</tr>
                                            </thead>
                                            <tbody>
                                                {table.data.map((row, i) => (
                                                    <tr key={i}>
                                                        {table.columns.map(col => <td key={col}>{row[col]}</td>)}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="problem-editor-panel"
                >
                    <div className="editor-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <h3>Editor</h3>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            {topic === 'sql' && (
                                <select
                                    className="dialect-selector"
                                    value={sqlDialect}
                                    onChange={(e) => setSqlDialect(e.target.value)}
                                >
                                    <option value="sql">Standard SQL</option>
                                    <option value="mysql">MySQL</option>
                                    <option value="postgresql">PostgreSQL</option>
                                    <option value="sqlite">SQLite</option>
                                    <option value="oracle">Oracle SQL</option>
                                </select>
                            )}
                            <button onClick={handleReset} className="btn-reset">
                                <FaUndo /> Reset
                            </button>
                        </div>
                    </div>

                    <div className="code-editor-wrapper">
                        <CodeEditor
                            value={code}
                            onChange={handleCodeChange}
                            language={topic === 'sql' ? sqlDialect : topic}
                        />
                    </div>

                    <div className="editor-buttons">
                        <button
                            onClick={handleRun}
                            className="btn-run"
                            disabled={isExecuting}
                        >
                            {isExecuting ? (
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                                    <FaTerminal />
                                </motion.div>
                            ) : (
                                <FaPlay />
                            )}
                            {isExecuting ? 'Running...' : 'Run Code'}
                        </button>
                        <button onClick={handleSubmit} className="btn-submit">
                            <FaCheck /> Submit Solution
                        </button>
                    </div>

                    <div className="output-panel">
                        <h4>Terminal</h4>
                        {renderOutputContent()}
                    </div>

                    {testResults.length > 0 && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="test-results"
                        >
                            <h4>Test Results</h4>
                            {testResults.map((res, i) => (
                                <div key={i} className={`test-case ${res.pass ? 'pass' : 'fail'}`}>
                                    {res.pass ? <FaCheckCircle /> : <FaExclamationCircle />}
                                    <span>Case {i + 1}: {res.pass ? 'Passed' : res.error}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </main>

            <InputModal
                isOpen={showInputModal}
                title="Program Input Required"
                message="Your code uses the input() function. Please provide the inputs below (one per line):"
                onSubmit={handleInputSubmit}
                onCancel={() => setShowInputModal(false)}
            />
        </div>
    );
};

export default ProblemDetail;
