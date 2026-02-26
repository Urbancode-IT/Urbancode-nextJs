import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { problemsApi } from '../../services/api';
import toast from 'react-hot-toast';
import * as XLSX from 'xlsx';
import ConfirmModal from '../Common/ConfirmModal';
import { FaSignOutAlt, FaPlus, FaTable, FaFileUpload, FaTrash, FaEye, FaEyeSlash, FaEdit, FaExclamationTriangle, FaList, FaSearch } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('problems');
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('adminAuth') === 'true');
    const [loginData, setLoginData] = useState({ id: '', password: '' });
    const [isBulkUploading, setIsBulkUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [problemToDelete, setProblemToDelete] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    // New Problem Form State
    const [newProblem, setNewProblem] = useState({
        topic: 'sql',
        title: '',
        description: '',
        difficulty: 1,
        tags: '',
        starterCode: '',
        solution: '',
        hints: ''
    });

    // New Table Form State (for SQL)
    const [newTable, setNewTable] = useState({
        name: '',
        columns: '',
        data: ''
    });

    const topics = ['sql', 'python', 'java', 'javascript', 'html', 'css', 'c++', 'react', 'angular'];

    const fetchProblems = async (topic = newProblem.topic) => {
        setLoading(true);
        try {
            const response = await problemsApi.getProblemsByTopic(topic);
            if (response.success) {
                setProblems(response.data || []);
            }
        } catch (error) {
            console.error('Error fetching problems:', error);
            setProblems([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated && activeTab === 'problems') {
            fetchProblems(newProblem.topic);
            setSearchTerm(''); // Clear search when switching topics
        }
    }, [activeTab, newProblem.topic, isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.id === 'Urbancode' && loginData.password === 'Codeurban@123') {
            setIsAuthenticated(true);
            sessionStorage.setItem('adminAuth', 'true');
            toast.success('Welcome Back, Admin!');
        } else {
            toast.error('Invalid Credentials');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('adminAuth');
        toast.success('Logged out');
    };

    const handleAddProblem = async (e) => {
        e.preventDefault();
        try {
            const problemData = {
                ...newProblem,
                tags: newProblem.tags.split(',').map(t => t.trim()).filter(t => t),
                hints: newProblem.hints.split('\n').map(h => h.trim()).filter(h => h),
                testCases: [] // Can be expanded later
            };
            const response = await problemsApi.createProblem(problemData);
            if (response.success) {
                toast.success('Problem created successfully!');
                setNewProblem({
                    topic: newProblem.topic,
                    title: '',
                    description: '',
                    difficulty: 1,
                    tags: '',
                    starterCode: '',
                    solution: '',
                    hints: ''
                });
                fetchProblems();
            }
        } catch (error) {
            toast.error('Failed to create problem');
        }
    };

    const handleDeleteProblem = (id) => {
        setProblemToDelete(id);
        setShowDeleteModal(true);
    };

    const confirmDeleteProblem = async () => {
        if (!problemToDelete) return;
        try {
            const response = await problemsApi.deleteProblem(problemToDelete);
            if (response.success) {
                toast.success('Problem deleted');
                fetchProblems();
            }
        } catch (error) {
            toast.error('Delete failed');
        } finally {
            setShowDeleteModal(false);
            setProblemToDelete(null);
        }
    };

    const handleAddTable = (e) => {
        e.preventDefault();
        try {
            // Here we would ideally tell the backend or a central state to add this table.
            // For now, we'll simulate it by saving to localStorage or just showing success.
            // In a real app, this would be a POST /api/sql/tables

            // Validate JSON data
            const parsedData = JSON.parse(newTable.data);
            const columns = newTable.columns.split(',').map(c => c.trim());

            // Store in localStorage for the session (to be picked up by codeExecutor)
            const customTables = JSON.parse(localStorage.getItem('customSqlTables') || '{}');

            // Remove any existing table with the same name (case-insensitive)
            const existingKey = Object.keys(customTables).find(k => k.toLowerCase() === newTable.name.toLowerCase());
            if (existingKey) delete customTables[existingKey];

            customTables[newTable.name] = {
                columns,
                data: parsedData
            };
            localStorage.setItem('customSqlTables', JSON.stringify(customTables));

            toast.success(`Table "${newTable.name}" created manually!`);
            setNewTable({ name: '', columns: '', data: '' });

            // Dispatch event to notify codeExecutor
            window.dispatchEvent(new Event('sql-table-added'));
        } catch (error) {
            toast.error('Invalid Table Data. Please check your JSON format.');
        }
    };

    const handleBulkUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (evt) => {
            try {
                const bstr = evt.target.result;
                const wb = XLSX.read(bstr, { type: 'binary' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);

                if (data.length === 0) {
                    toast.error('File is empty');
                    return;
                }

                setIsBulkUploading(true);
                setUploadProgress({ current: 0, total: data.length });

                let successCount = 0;
                let failCount = 0;

                for (let i = 0; i < data.length; i++) {
                    const row = data[i];
                    try {
                        const problemData = {
                            topic: String(row.topic || 'sql').toLowerCase(),
                            title: String(row.title || ''),
                            description: String(row.description || ''),
                            difficulty: parseInt(row.difficulty) || 1,
                            tags: row.tags ? String(row.tags).split(',').map(t => t.trim()).filter(t => t) : [],
                            hints: row.hints ? String(row.hints).split('\n').map(h => h.trim()).filter(h => h) : [],
                            starterCode: String(row.starterCode || ''),
                            solution: String(row.solution || ''),
                            testCases: []
                        };

                        if (!problemData.title || !problemData.description) {
                            failCount++;
                            continue;
                        }

                        const response = await problemsApi.createProblem(problemData);
                        if (response.success) {
                            successCount++;
                        } else {
                            failCount++;
                        }
                    } catch (err) {
                        failCount++;
                    }
                    setUploadProgress(prev => ({ ...prev, current: i + 1 }));
                }

                toast.success(`Upload complete! Success: ${successCount}, Failed: ${failCount}`);
                fetchProblems();
                e.target.value = ''; // Reset file input
            } catch (error) {
                toast.error('Error reading file');
                console.error(error);
            } finally {
                setIsBulkUploading(false);
            }
        };
        reader.readAsBinaryString(file);
    };

    if (!isAuthenticated) {
        return (
            <div className="admin-login-container">
                <div className="background-bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>

                <div className="login-card">
                    <div className="login-header">
                        <div className="logo-icon">UC</div>
                        <h1>Admin Login</h1>
                        <p>Welcome back! Please login to manage Urban Code.</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Admin ID</label>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    required
                                    value={loginData.id}
                                    onChange={(e) => setLoginData({ ...loginData, id: e.target.value })}
                                    placeholder="Enter your admin ID"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <div className="input-wrapper password-wrapper">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={loginData.password}
                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    className="eye-toggle-btn"
                                    onClick={() => setShowPassword(prev => !prev)}
                                    tabIndex={-1}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="login-submit-btn">
                            Sign In
                        </button>
                    </form>
                    <div className="login-footer">
                        <p>Secure Administrator Access Only</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard">
            {/* Sidebar Navigation */}
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <h2>Urban Code</h2>
                </div>
                <nav className="sidebar-nav">
                    <div
                        className={`nav-item ${activeTab === 'problems' ? 'active' : ''}`}
                        onClick={() => setActiveTab('problems')}
                    >
                        <FaList /> <span>Questions</span>
                    </div>
                    <div
                        className={`nav-item ${activeTab === 'sql' ? 'active' : ''}`}
                        onClick={() => setActiveTab('sql')}
                    >
                        <FaTable /> <span>SQL Tables</span>
                    </div>
                </nav>
                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={handleLogout}>
                        <FaSignOutAlt /> <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="admin-main-content">
                <header className="dashboard-header">
                    <div className="dashboard-header-top">
                        <div>
                            <h1>Admin Portal</h1>
                            <p>Welcome back! Here's what's happening with Urban Code today.</p>
                        </div>
                        <button className="header-logout-btn" onClick={handleLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </div>
                </header>

                {/* Quick Stats */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon emerald">
                            <FaList />
                        </div>
                        <div className="stat-info">
                            <h3>Total Problems</h3>
                            <div className="value">{problems.length}</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon blue">
                            <FaTable />
                        </div>
                        <div className="stat-info">
                            <h3>SQL Environments</h3>
                            <div className="value">{Object.keys(JSON.parse(localStorage.getItem('customSqlTables') || '{}')).length}</div>
                        </div>
                    </div>
                    <div
                        className="stat-card clickable"
                        onClick={() => {
                            setActiveTab('problems');
                            setTimeout(() => {
                                document.getElementById('create-problem-section')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                        }}
                    >
                        <div className="stat-icon amber">
                            <FaPlus />
                        </div>
                        <div className="stat-info">
                            <h3>Quick Action</h3>
                            <div className="value" style={{ fontSize: '1rem', color: 'var(--primary-color)' }}>New Problem</div>
                        </div>
                    </div>
                </div>

                <div className="admin-content">
                    {activeTab === 'problems' && (
                        <div className="tab-pane">
                            <div className="admin-grid">
                                <div className="form-section card" id="create-problem-section">
                                    <h2><FaPlus /> Create Question</h2>
                                    <form onSubmit={handleAddProblem}>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Topic</label>
                                                <select
                                                    value={newProblem.topic}
                                                    onChange={(e) => setNewProblem({ ...newProblem, topic: e.target.value })}
                                                >
                                                    {topics.map(t => <option key={t} value={t}>{t.toUpperCase()}</option>)}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Difficulty</label>
                                                <select
                                                    value={newProblem.difficulty}
                                                    onChange={(e) => setNewProblem({ ...newProblem, difficulty: e.target.value })}
                                                >
                                                    <option value="1">1 (Easy)</option>
                                                    <option value="2">2 (Average)</option>
                                                    <option value="3">3 (Tough)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input
                                                type="text"
                                                required
                                                value={newProblem.title}
                                                onChange={(e) => setNewProblem({ ...newProblem, title: e.target.value })}
                                                placeholder="e.g., Sum of Two Numbers"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea
                                                required
                                                rows="4"
                                                value={newProblem.description}
                                                onChange={(e) => setNewProblem({ ...newProblem, description: e.target.value })}
                                                placeholder="Markdown supported"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Starter Code</label>
                                            <textarea
                                                rows="3"
                                                className="code-textarea"
                                                value={newProblem.starterCode}
                                                onChange={(e) => setNewProblem({ ...newProblem, starterCode: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Solution Code</label>
                                            <textarea
                                                required
                                                rows="4"
                                                className="code-textarea"
                                                value={newProblem.solution}
                                                onChange={(e) => setNewProblem({ ...newProblem, solution: e.target.value })}
                                            />
                                        </div>
                                        <button type="submit" className="admin-btn primary">Create Question</button>
                                    </form>

                                    <div className="bulk-upload-section">
                                        <h3>Bulk Upload</h3>
                                        <div className="upload-box">
                                            <input
                                                type="file"
                                                accept=".xlsx, .xls, .csv"
                                                onChange={handleBulkUpload}
                                                disabled={isBulkUploading}
                                                id="excel-upload"
                                            />
                                            <label htmlFor="excel-upload" className={`upload-label ${isBulkUploading ? 'disabled' : ''}`}>
                                                <FaFileUpload />
                                                <span>{isBulkUploading ? `Uploading...` : 'Drop Excel/CSV here'}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="list-section card">
                                    <h2><FaList /> {newProblem.topic.toUpperCase()} Questions</h2>
                                    <div className="search-box">
                                        <div className="search-icon-wrapper">
                                            <FaSearch />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Search by title..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                    {loading ? (
                                        <p>Fetching data...</p>
                                    ) : (
                                        <div className="admin-list">
                                            {problems
                                                .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
                                                .map(prob => (
                                                    <div key={prob._id} className="admin-list-item">
                                                        <div className="item-info">
                                                            <h3>{prob.title}</h3>
                                                            <span className={`diff diff-${prob.difficulty}`}>Level {prob.difficulty}</span>
                                                        </div>
                                                        <div className="item-actions">
                                                            <button className="admin-btn icon edit" onClick={() => navigate(`/admin/edit/${prob._id}`)}>
                                                                <FaEdit />
                                                            </button>
                                                            <button className="admin-btn icon delete" onClick={() => handleDeleteProblem(prob._id)}>
                                                                <FaTrash />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'sql' && (
                        <div className="tab-pane">
                            <div className="admin-grid">
                                <div className="form-section card">
                                    <h2><FaTable /> Register SQL Table</h2>
                                    <p className="hint">Tables added here will be available in the SQL Execution engine for this session.</p>
                                    <form onSubmit={handleAddTable}>
                                        <div className="form-group">
                                            <label>Table Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={newTable.name}
                                                onChange={(e) => setNewTable({ ...newTable, name: e.target.value })}
                                                placeholder="e.g. Users"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Columns</label>
                                            <input
                                                type="text"
                                                required
                                                value={newTable.columns}
                                                onChange={(e) => setNewTable({ ...newTable, columns: e.target.value })}
                                                placeholder="id, name, email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Initial Data (JSON Array)</label>
                                            <textarea
                                                required
                                                rows="8"
                                                className="code-textarea"
                                                value={newTable.data}
                                                onChange={(e) => setNewTable({ ...newTable, data: e.target.value })}
                                                placeholder='[{"id": 1, "name": "Admin", "email": "admin@example.com"}]'
                                            />
                                        </div>
                                        <button type="submit" className="admin-btn primary">Inject Table</button>
                                    </form>
                                </div>
                                <div className="card">
                                    <h2><FaExclamationTriangle /> Important Notes</h2>
                                    <ul style={{ color: '#475569', lineHeight: '1.8' }}>
                                        <li>Questions are saved permanently to MongoDB.</li>
                                        <li>Manual SQL tables are stored in LocalStorage for testing.</li>
                                        <li>Ensure JSON formatting is correct before injecting tables.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <ConfirmModal
                isOpen={showDeleteModal}
                title="Delete Problem"
                message="Are you sure you want to permanently delete this problem?"
                onConfirm={confirmDeleteProblem}
                onCancel={() => setShowDeleteModal(false)}
            />
        </div>
    );
};

export default AdminDashboard;
