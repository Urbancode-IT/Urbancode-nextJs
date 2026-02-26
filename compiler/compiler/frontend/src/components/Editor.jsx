import React from "react";
import PropTypes from "prop-types";
import { FaCode } from 'react-icons/fa';
import MonacoEditor from "./MonacoEditor.jsx";

// Backward compatibility wrapper for the new Monaco Editor
// This avoids breaking changes in all components that use <Editor />
export default function CodeEditor({ label, value, onChange, language }) {

  return (
    <div className="editor-container" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="editor-header">
        <div className="editor-label">
          <span>{label}</span>
        </div>
      </div>
      <div className="editor-wrapper" style={{ flex: 1, overflow: 'hidden' }}>
        <MonacoEditor
          language={language}
          value={value}
          onChange={onChange}
          theme="vs-dark"
        />
      </div>
    </div>
  );
}

CodeEditor.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
