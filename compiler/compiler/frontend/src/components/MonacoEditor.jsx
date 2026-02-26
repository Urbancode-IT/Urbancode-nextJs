import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import PropTypes from "prop-types";

const MonacoEditor = ({ language, value, onChange, theme = "vs-dark", height = "100%" }) => {
    const editorRef = useRef(null);
    const [isEditorReady, setIsEditorReady] = useState(false);

    // Map internal language names to Monaco language IDs
    const getMonacoLanguage = (lang) => {
        const langMap = {
            'python': 'python',
            'java': 'java',
            'c++': 'cpp',
            'cpp': 'cpp',
            'javascript': 'javascript',
            'js': 'javascript',
            'html': 'html',
            'css': 'css',
            'sql': 'sql',
            'react': 'javascript', // JSX support via javascript
            'angular': 'typescript'
        };
        return langMap[lang.toLowerCase()] || 'plaintext';
    };

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
        setIsEditorReady(true);

        // Ensure layout is correct on mount
        editor.layout();
    }

    return (
        <div style={{ height: height, width: "100%", overflow: "hidden", borderRadius: "8px" }}>
            <Editor
                height={height}
                language={getMonacoLanguage(language)}
                value={value}
                theme={theme}
                onChange={(value) => onChange(value)}
                onMount={handleEditorDidMount}
                options={{
                    minimap: { enabled: true },
                    fontSize: 14,
                    fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
                    fontLigatures: true,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    padding: { top: 16, bottom: 16 },
                    cursorBlinking: "smooth",
                    cursorSmoothCaretAnimation: "on",
                    formatOnPaste: true,
                    formatOnType: true,
                    autoClosingTags: true,
                    autoClosingBrackets: "always",
                    autoClosingQuotes: "always",
                    autoClosingOvertype: "always",
                    autoIndent: "full"
                }}
                loading={<div style={{ color: '#fff', padding: '20px' }}>Loading Editor...</div>}
            />
        </div>
    );
};

MonacoEditor.propTypes = {
    language: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    theme: PropTypes.string,
    height: PropTypes.string
};

export default MonacoEditor;

