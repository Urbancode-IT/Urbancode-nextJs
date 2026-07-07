import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import toast from 'react-hot-toast';
import { FaEye, FaExclamationTriangle, FaTrash, FaCommentDots } from 'react-icons/fa';

export default function Preview({ srcDoc }) {
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const handler = (event) => {
            if (event.data.type === "iframe-error") {
                setErrors((prev) => [...prev, event.data]);
            } else if (event.data.type === "iframe-alert") {
                toast(event.data.message, {
                    duration: 4000,
                    icon: <FaCommentDots color="#3b82f6" />,
                });
            }
        };

        window.addEventListener("message", handler);
        return () => window.removeEventListener("message", handler);
    }, []);

    const clearErrors = () => setErrors([]);

    return (
        <div className="preview-pane">
            <div className="preview-header">
                <FaEye size={14} />
                <span>Live Preview</span>
            </div>

            <div style={{ flex: 1, position: 'relative', background: 'white' }}>
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="preview-iframe"
                />
            </div>

            {/* Error Console */}
            {errors.length > 0 && (
                <div className="error-console" style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#1e1e1e',
                    borderTop: '2px solid #ef4444',
                    maxHeight: '40%',
                    overflowY: 'auto',
                    zIndex: 10
                }}>
                    <div className="error-header" style={{
                        padding: '10px 20px',
                        background: '#2d2d2d',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #333'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fca5a5' }}>
                            <FaExclamationTriangle size={14} />
                            <h4 style={{ margin: 0, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Console Errors ({errors.length})
                            </h4>
                        </div>
                        <button
                            onClick={clearErrors}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#94a3b8',
                                cursor: 'pointer',
                                padding: '4px'
                            }}
                        >
                            <FaTrash size={12} />
                        </button>
                    </div>
                    <div style={{ padding: '15px 20px' }}>
                        {errors.map((err, i) => (
                            <pre key={i} style={{
                                margin: '0 0 10px 0',
                                color: "#fca5a5",
                                fontSize: '0.8rem',
                                fontFamily: 'Fira Code, monospace',
                                whiteSpace: 'pre-wrap'
                            }}>
                                <span style={{ opacity: 0.6 }}>[{new Date().toLocaleTimeString()}]</span> {err.message}
                                {err.lineno ? `\nAt line: ${err.lineno}, column: ${err.colno}` : ''}
                            </pre>
                        ))}
                    </div>
                </div>
            )
            }
        </div>
    );
}

Preview.propTypes = {
    srcDoc: PropTypes.string.isRequired,
};
