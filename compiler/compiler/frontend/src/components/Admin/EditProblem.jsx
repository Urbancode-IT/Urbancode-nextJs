import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { problemsApi } from '../../services/api';
import toast from 'react-hot-toast';
import { runSolutionCheck } from '../../utils/codeExecutor';
import { FaArrowLeft, FaSave, FaFlask, FaTrash, FaPlus } from 'react-icons/fa';
import './EditProblem.css';

const EditProblem = () => {
    const { problemId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [problem, setProblem] = useState({
        topic: '',
        title: '',
        description: '',
        difficulty: 1,
        tags: '',
        starterCode: '',
        solution: '',
        hints: '',
        testCases: []
    });

    // Test Runner State
    const [isRunningTests, setIsRunningTests] = useState(false);
    const [testResults, setTestResults] = useState(null);

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                setLoading(true);
                const response = await problemsApi.getProblemById(problemId);
                if (response.success) {
                    const data = response.data;
                    setProblem({
                        topic: data.topic || '',
                        title: data.title || '',
                        description: data.description || '',
                        difficulty: data.difficulty || 1,
                        tags: Array.isArray(data.tags) ? data.tags.join(', ') : '',
                        starterCode: data.starterCode || '',
                        solution: data.solution || '',
                        hints: Array.isArray(data.hints) ? data.hints.join('\n') : '',
                        testCases: data.testCases || []
                    });
                } else {
                    toast.error('Failed to load problem');
                }
            } catch (error) {
                console.error('Error fetching problem:', error);
                toast.error('Error loading problem');
            } finally {
                setLoading(false);
            }
        };
        fetchProblem();
    }, [problemId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const problemData = {
                ...problem,
                tags: problem.tags.split(',').map(t => t.trim()).filter(t => t),
                hints: problem.hints.split('\n').map(h => h.trim()).filter(h => h)
            };

            const response = await problemsApi.updateProblem(problemId, problemData);
            if (response.success) {
                toast.success('Problem updated successfully!');
                navigate('/admin');
            } else {
                toast.error('Update failed: ' + response.message);
            }
        } catch (error) {
            console.error('Error updating problem:', error);
            toast.error('Failed to update problem');
        }
    };

    const handleRunTests = async () => {
        if (!problem.solution) {
            toast.error("Please provide a solution code first.");
            return;
        }
        if (!problem.testCases || problem.testCases.length === 0) {
            toast.error("No test cases defined.");
            return;
        }

        setIsRunningTests(true);
        setTestResults(null);
        toast.loading("Running test cases...", { id: "test-runner" });

        try {
            // Check for python engine if needed
            if (problem.topic === 'python' && !window.pyodideInstance) {
                // Try load
                if (window.loadPyodide) {
                    window.pyodideInstance = await window.loadPyodide({
                        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
                    });
                    // Load sqlite3 package as it is unvendored in newer Pyodide versions
                    if (window.pyodideInstance.loadPackage) {
                        await window.pyodideInstance.loadPackage('sqlite3');
                    }
                }
            }

            const { results, error } = await runSolutionCheck(problem.topic, problem.solution, problem.testCases);

            if (error) {
                toast.error(error, { id: "test-runner" });
            } else {
                setTestResults(results);
                const passed = results.filter(r => r.pass).length;
                const total = results.length;
                if (passed === total) toast.success(`All ${total} tests passed!`, { id: "test-runner" });
                else toast.error(`${passed}/${total} tests passed.`, { id: "test-runner" });
            }
        } catch (e) {
            console.error("Test run error", e);
            toast.error("Test runner failed", { id: "test-runner" });
        } finally {
            setIsRunningTests(false);
        }
    };

    // Quick add test case for demo
    const addTestCase = () => {
        const newCase = { input: "", expectedOutput: "", pass: false };
        setProblem({ ...problem, testCases: [...(problem.testCases || []), newCase] });
    };

    const updateTestCase = (index, field, value) => {
        const updated = [...(problem.testCases || [])];
        updated[index][field] = value;
        setProblem({ ...problem, testCases: updated });
    };

    const removeTestCase = (index) => {
        const updated = [...(problem.testCases || [])];
        updated.splice(index, 1);
        setProblem({ ...problem, testCases: updated });
    };

    if (loading) {
        return <div className="edit-problem-loading">Loading problem...</div>;
    }

    return (
        <div className="edit-problem-container">
            <div className="edit-problem-header">
                <button onClick={() => navigate('/admin')} className="btn-back">
                    <FaArrowLeft /> Back to Dashboard
                </button>
                <h1>Edit Problem</h1>
            </div>

            <form onSubmit={handleSubmit} className="edit-problem-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>Topic</label>
                        <select
                            value={problem.topic}
                            onChange={(e) => setProblem({ ...problem, topic: e.target.value })}
                            required
                        >
                            <option value="sql">SQL</option>
                            <option value="python">Python</option>
                            <option value="java">Java</option>
                            <option value="javascript">JavaScript</option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="c++">C++</option>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Difficulty</label>
                        <select
                            value={problem.difficulty}
                            onChange={(e) => setProblem({ ...problem, difficulty: parseInt(e.target.value) })}
                            required
                        >
                            <option value={1}>1 (Easy)</option>
                            <option value={2}>2 (Average)</option>
                            <option value={3}>3 (Tough)</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={problem.title}
                        onChange={(e) => setProblem({ ...problem, title: e.target.value })}
                        required
                        placeholder="Problem title"
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        rows="6"
                        value={problem.description}
                        onChange={(e) => setProblem({ ...problem, description: e.target.value })}
                        required
                        placeholder="Problem description"
                    />
                </div>

                <div className="form-group">
                    <label>Tags (comma-separated)</label>
                    <input
                        type="text"
                        value={problem.tags}
                        onChange={(e) => setProblem({ ...problem, tags: e.target.value })}
                        placeholder="e.g., arrays, loops, strings"
                    />
                </div>

                <div className="form-group">
                    <label>Starter Code</label>
                    <textarea
                        rows="8"
                        className="code-textarea"
                        value={problem.starterCode}
                        onChange={(e) => setProblem({ ...problem, starterCode: e.target.value })}
                        placeholder="Initial code template for students"
                    />
                </div>

                <div className="form-group">
                    <label>Solution Code</label>
                    <textarea
                        rows="8"
                        className="code-textarea"
                        value={problem.solution}
                        onChange={(e) => setProblem({ ...problem, solution: e.target.value })}
                        placeholder="Complete solution code"
                    />
                </div>

                <div className="form-group">
                    <label>Hints (one per line)</label>
                    <textarea
                        rows="4"
                        value={problem.hints}
                        onChange={(e) => setProblem({ ...problem, hints: e.target.value })}
                        placeholder="Hint 1&#10;Hint 2&#10;Hint 3"
                    />
                </div>

                {/* Test Cases Section */}
                <div className="form-group">
                    <div className="test-cases-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <label>Test Cases (For Validation)</label>
                        <button type="button" onClick={addTestCase} className="btn-add-test" style={{ padding: '4px 8px', fontSize: '12px' }}>+ Add Case</button>
                    </div>

                    <div className="test-cases-list">
                        {(problem.testCases || []).map((tc, idx) => (
                            <div key={idx} className="test-case-item" style={{ border: '1px solid #444', padding: '10px', marginBottom: '10px', borderRadius: '4px', background: '#222' }}>
                                <div style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
                                    <div style={{ flex: 1 }}>
                                        <small style={{ color: '#aaa' }}>Input</small>
                                        <textarea
                                            rows="2"
                                            style={{ width: '100%', background: '#333', color: '#fff', border: 'none', padding: '5px' }}
                                            value={tc.input}
                                            onChange={(e) => updateTestCase(idx, 'input', e.target.value)}
                                        />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <small style={{ color: '#aaa' }}>Expected Output</small>
                                        <textarea
                                            rows="2"
                                            style={{ width: '100%', background: '#333', color: '#fff', border: 'none', padding: '5px' }}
                                            value={tc.expectedOutput}
                                            onChange={(e) => updateTestCase(idx, 'expectedOutput', e.target.value)}
                                        />
                                    </div>
                                    <button type="button" onClick={() => removeTestCase(idx)} style={{ background: 'transparent', border: 'none', color: '#ff6b6b', cursor: 'pointer' }}>✖</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="test-runner-actions" style={{ marginTop: '10px' }}>
                        <button type="button" onClick={handleRunTests} disabled={isRunningTests} className="btn-run-tests" style={{ background: '#2d3748', border: '1px solid #4a5568', color: 'white', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
                            {isRunningTests ? 'Running...' : '▶ Run Verification'}
                        </button>
                    </div>

                    {testResults && (
                        <div className="test-results-panel" style={{ marginTop: '15px', background: '#1a202c', padding: '10px', borderRadius: '4px' }}>
                            <h4>Verification Results</h4>
                            {testResults.map((res, i) => (
                                <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', borderBottom: '1px solid #333', padding: '5px 0', color: res.pass ? '#48bb78' : '#f56565' }}>
                                    <span>{res.pass ? '✔ PASS' : '✖ FAIL'}</span>
                                    <span style={{ color: '#ccc' }}>Input: {res.input?.substring(0, 20)}...</span>
                                    {!res.pass && <span style={{ color: '#aaa' }}>Got: {res.actualOutput?.substring(0, 20)}...</span>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="form-actions">
                    <button type="button" onClick={() => navigate('/admin')} className="btn-cancel">
                        Cancel
                    </button>
                    <button type="submit" className="btn-save">
                        <FaSave /> Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProblem;
