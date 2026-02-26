import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { progressApi, problemsApi } from '../../services/api';
import { FaClipboardList, FaPencilAlt, FaList, FaSearch, FaFilter, FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import './ProblemsList.css';

const ProblemsList = () => {
    const { topic } = useParams();
    const navigate = useNavigate();
    const [topicData, setTopicData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [solvedCount, setSolvedCount] = useState(0);
    const [solvedIds, setSolvedIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [newProblem, setNewProblem] = useState({
        title: '',
        description: '',
        difficulty: 1,
        tags: '',
        starterCode: ''
    });

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await problemsApi.getProblemsByTopic(topic);
            if (response.success) {
                const getFormattedTitle = (t) => {
                    const titles = {
                        'c++': 'C++ Programming',
                        'cpp': 'C++ Programming',
                        'sql': 'SQL Databases',
                        'mysql': 'MySQL Analytics',
                        'postgresql': 'PostgreSQL Advanced',
                        'js': 'JavaScript Mastery',
                        'javascript': 'JavaScript Mastery'
                    };
                    return titles[t] || (t.charAt(0).toUpperCase() + t.slice(1) + " Challenges");
                };

                setTopicData({
                    topic: response.topic,
                    title: getFormattedTitle(response.topic),
                    icon: response.data[0]?.icon || <FaList />,
                    problems: response.data,
                    totalProblems: response.count
                });
            }

            const progressResponse = await progressApi.getSolvedCount('default-user', topic);
            if (progressResponse.success) {
                setSolvedCount(progressResponse.solvedCount);
                // Convert ObjectIds to strings for reliable comparison
                const ids = (progressResponse.solvedProblemIds || []).map(id => String(id));
                setSolvedIds(ids);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            const message = err.response?.data?.message || err.message || 'Failed to load problems.';
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [topic]);

    if (loading) return (
        <div className="loading-container">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="loader"
            />
            <p>Fetching challenges...</p>
        </div>
    );

    if (error || !topicData) {
        return (
            <div className="problems-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="problems-error"
                >
                    <h2>{error || 'Topic Not Found'}</h2>
                    <p>The topic "{topic}" could not be loaded.</p>
                    <button onClick={() => navigate('/problems')} className="btn-primary">
                        Back to Topics
                    </button>
                </motion.div>
            </div>
        );
    }

    const isProblemSolved = (id) => solvedIds.includes(String(id));

    const filteredProblems = (topicData?.problems || []).filter(problem => {
        if (!problem) return false;
        const matchesSearch = (problem.title || '').toLowerCase().includes((searchTerm || '').toLowerCase());
        const matchesStatus = statusFilter === 'all' ||
            (statusFilter === 'solved' && isProblemSolved(problem._id)) ||
            (statusFilter === 'unsolved' && !isProblemSolved(problem._id));
        const matchesDifficulty = difficultyFilter === 'all' ||
            Number(problem.difficulty) === Number(difficultyFilter);

        return matchesSearch && matchesStatus && matchesDifficulty;
    });

    const handleProblemClick = (problemId) => {
        navigate(`/problems/${topic}/${problemId}`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
    };

    return (
        <div className="problems-container">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="problems-header-minimal"
            >
                <div className="header-left">
                    <h1 className="minimal-title">{topicData.title}</h1>
                    <div className="stats-pills">
                        <div className="stat-pill">
                            <span className="stat-value">{solvedCount} / {topicData.totalProblems}</span>
                        </div>
                        {['python', 'css', 'react', 'html', 'c++', 'java', 'sql', 'javascript', 'angular'].includes(topic) && (
                            <button
                                onClick={() => navigate(`/quiz/${topic}/beginner`)}
                                className="quiz-action-btn"
                            >
                                <FaPencilAlt /> Take Quiz
                            </button>
                        )}
                    </div>
                </div>

                <div className="header-right-actions">
                    <div className="minimal-search-box">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Find a challenge..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="minimal-search-input"
                        />
                    </div>

                    <div className="filter-group-modern">
                        <div className="filter-item">
                            <FaFilter size={12} className="filter-icon" />
                            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="minimal-select">
                                <option value="all">Any Status</option>
                                <option value="solved">Solved</option>
                                <option value="unsolved">Unsolved</option>
                            </select>
                        </div>

                        <div className="filter-item">
                            <FaList size={12} className="filter-icon" />
                            <select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)} className="minimal-select">
                                <option value="all">Any Difficulty</option>
                                <option value="1">Easy</option>
                                <option value="2">Average</option>
                                <option value="3">Tough</option>
                            </select>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="problems-table-wrapper">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="challenge-list"
                >
                    <div className="list-header">
                        <div className="col-status">#</div>
                        <div className="col-title">Title</div>
                        <div className="col-difficulty">Level</div>
                        <div className="col-action"></div>
                    </div>
                    {filteredProblems.map((problem, index) => {
                        const solved = isProblemSolved(problem._id);
                        return (
                            <motion.div
                                key={problem._id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.02 }}
                                onClick={() => handleProblemClick(problem._id)}
                                className={`challenge-item ${solved ? 'is-solved' : ''}`}
                            >
                                <div className="col-status">
                                    <span className="status-number">{index + 1}</span>
                                </div>
                                <div className="col-title">
                                    <span className="problem-title">{problem.title}</span>
                                    <div className="problem-tags-minimal">
                                        {Array.isArray(problem.tags) && problem.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="mini-tag">
                                                {tag === 'medium' ? 'average' : tag === 'hard' ? 'tough' : tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-difficulty">
                                    <span className={`difficulty-pill diff-${problem.difficulty}`}>
                                        {problem.difficulty === 1 ? 'Easy' : problem.difficulty === 2 ? 'Average' : 'Tough'}
                                    </span>
                                </div>
                                <div className="col-action">
                                    <FaChevronRight className="arrow-icon" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <AnimatePresence>
                    {filteredProblems.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="no-results-empty"
                        >
                            <FaSearch size={40} />
                            <p>No matches found for your criteria.</p>
                            <button onClick={() => { setSearchTerm(''); setStatusFilter('all'); setDifficultyFilter('all'); }} className="btn-text">
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProblemsList;
