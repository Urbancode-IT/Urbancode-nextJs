import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTable, FaPlay, FaDatabase, FaSearch, FaHistory, FaInfoCircle } from 'react-icons/fa';
import Editor from "../Editor.jsx";
import { sqlDatabase, executeSQL } from "../../utils/codeExecutor";
import "./SqlCompiler.css";

const SqlCompiler = () => {
    const [sql, setSql] = useState(`SELECT first_name, age\nFROM CustomersArchive;`);
    const [output, setOutput] = useState([]);
    const [activeTable, setActiveTable] = useState("CustomersArchive");
    const [isExecuting, setIsExecuting] = useState(false);
    const [db, setDb] = useState(() => {
        const custom = JSON.parse(localStorage.getItem('customSqlTables') || '{}');
        return { ...sqlDatabase, ...custom };
    });
    const [dialect, setDialect] = useState('sql');

    useEffect(() => {
        const updateDb = () => {
            const custom = JSON.parse(localStorage.getItem('customSqlTables') || '{}');
            setDb({ ...sqlDatabase, ...custom });
        };
        window.addEventListener('sql-table-added', updateDb);
        return () => window.removeEventListener('sql-table-added', updateDb);
    }, []);

    const handleRun = async () => {
        setIsExecuting(true);
        // Small delay to simulate execution feel
        setTimeout(async () => {
            const result = await executeSQL(sql);
            setOutput(result);
            setIsExecuting(false);
        }, 600);
    };

    const renderTable = (tableName, tableData) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="table-viewer"
                key={tableName}
            >
                <h3>{tableName}</h3>
                <table>
                    <thead>
                        <tr>
                            {tableData.columns.map(col => (
                                <th key={col}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.data.map((row, idx) => (
                            <tr key={idx}>
                                {tableData.columns.map(col => (
                                    <td key={col}>{row[col]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="sql-compiler-container"
        >
            {/* Left Sidebar - Database Schema */}
            <div className="sql-sidebar">
                <div className="schema-header">
                    <FaDatabase size={14} color="rgba(139, 138, 138)" style={{ marginRight: '8px' }} />
                    <h3>Schema Explorer</h3>
                </div>
                <div className="schema-tables">
                    {Object.keys(db).map(tableName => (
                        <div
                            key={tableName}
                            className={`table-item ${activeTable === tableName ? 'active' : ''}`}
                            onClick={() => setActiveTable(tableName)}
                        >
                            <div className="table-name">
                                <FaTable size={12} />
                                <span>{tableName}</span>
                            </div>
                            <AnimatePresence>
                                {activeTable === tableName && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="table-columns"
                                    >
                                        {db[tableName].columns.map(col => (
                                            <div key={col} className="column-item">
                                                <span>{col}</span>
                                                <span className="column-type">
                                                    {col.includes('id') ? 'int' : 'text'}
                                                </span>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Middle - SQL Editor */}
            <div className="sql-editor-section">
                <div className="sql-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div className="sql-tab">
                            <FaSearch size={12} style={{ marginRight: '8px' }} />
                            Query Editor
                        </div>
                        <select
                            className="dialect-selector"
                            value={dialect}
                            onChange={(e) => setDialect(e.target.value)}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#94a3b8',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                padding: '2px 8px',
                                outline: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="sql">Standard SQL</option>
                            <option value="mysql">MySQL</option>
                            <option value="postgresql">PostgreSQL</option>
                            <option value="sqlite">SQLite</option>
                            <option value="oracle">Oracle SQL</option>
                        </select>
                    </div>
                    <button
                        className="run-sql-button"
                        onClick={handleRun}
                        disabled={isExecuting}
                    >
                        {isExecuting ? (
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                                <FaHistory />
                            </motion.div>
                        ) : (
                            <FaPlay size={12} style={{ marginRight: '8px' }} />
                        )}
                        {isExecuting ? 'Executing...' : 'Run Query'}
                    </button>
                </div>

                <div className="sql-editor-wrapper">
                    <div className="editor-instructions">
                        <p>-- SQL Environment is Ready.</p>
                        <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                            Tip: You can JOIN tables or use GROUP BY for complex analysis.
                        </p>
                    </div>
                    <Editor
                        label=""
                        value={sql}
                        onChange={setSql}
                        language={dialect}
                    />
                </div>

                <div className="sql-output-section">
                    <div className="output-header">
                        <FaInfoCircle size={12} style={{ marginRight: '8px' }} />
                        Console Output
                    </div>
                    <div className="output-content">
                        <AnimatePresence mode="wait">
                            {output.error ? (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="error-message"
                                >
                                    {output.error}
                                </motion.div>
                            ) : output.message ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="success-message"
                                >
                                    {output.message}
                                </motion.div>
                            ) : output.data ? (
                                <motion.div
                                    key="data"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <table className="result-table">
                                        <thead>
                                            <tr>
                                                {output.columns.map(col => (
                                                    <th key={col}>{col}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {output.data.map((row, idx) => (
                                                <tr key={idx}>
                                                    {output.columns.map(col => (
                                                        <td key={col}>{row[col]}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="nothing"
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: 1 }}
                                    className="no-output"
                                >
                                    <FaHistory size={32} />
                                    <span>Waiting for query execution...</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Available Tables Data */}
            <div className="sql-tables-panel">
                <div className="tables-header">
                    <FaTable size={14} color="#94a3b8" style={{ marginRight: '8px' }} />
                    <h3>Data Preview</h3>
                </div>
                <div className="tables-content">
                    {Object.keys(db).map(tableName =>
                        renderTable(tableName, db[tableName])
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default SqlCompiler;
