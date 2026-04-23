import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { problemsApi } from '../../services/api';
import LeadCaptureModal from '../Common/LeadCaptureModal';
import './ProblemsTopics.css';

// Import icons (using react-icons for better quality match to screenshot)
import { FaPython, FaDatabase, FaJs, FaCss3Alt, FaReact, FaHtml5, FaJava, FaAngular, FaPencilAlt } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiPostgresql } from 'react-icons/si';

const ProblemsTopics = () => {
    const navigate = useNavigate();
    const [topics, setTopics] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [failedImages, setFailedImages] = React.useState({});
    const [loadedImages, setLoadedImages] = React.useState({});
    const [leadModalOpen, setLeadModalOpen] = React.useState(false);
    const [pendingTopicId, setPendingTopicId] = React.useState(null);
    const [pendingTopicTitle, setPendingTopicTitle] = React.useState('');

    const handleImageError = (id) => {
        setFailedImages(prev => ({ ...prev, [id]: true }));
    };

    const handleImageLoad = (id) => {
        setLoadedImages(prev => ({ ...prev, [id]: true }));
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: {
            scale: 1.02,
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.98 }
    };

    // Metadata for topics (icons, titles, and descriptions/images)
    const topicsMetadata = {
        python: {
            icon: <FaPython />,
            title: 'Python Development',
            description: 'Master Python basics to advanced concepts. Learn automation, data structures, and backend development.',
            imageUrl: '',
            gradient: 'linear-gradient(135deg, #3776AB 0%, #FFD43B 100%)'
        },
        sql: {
            icon: <FaDatabase />,
            title: 'SQL Databases',
            description: 'Learn to design, query, and manage relational databases using SQL. Essential for backend and data roles.',
            imageUrl: '',
            gradient: 'linear-gradient(135deg, #4479A1 0%, #00758F 100%)'
        },
        javascript: {
            icon: <FaJs />,
            title: 'JavaScript Mastery',
            description: 'Build modern, responsive, and dynamic websites from scratch. Learn HTML, CSS, JavaScript, and modern frameworks.',
            imageUrl: '',
            gradient: 'linear-gradient(135deg, #F7DF1E 0%, #FFB000 100%)'
        },
        css: {
            icon: <FaCss3Alt />,
            title: 'CSS & Design',
            description: 'Master the art of styling web pages. Learn Flexbox, Grid, animations, and responsive design techniques.',
            imageUrl: '',
            gradient: 'linear-gradient(135deg, #1572B6 0%, #33A9DC 100%)'
        },
        react: {
            icon: <FaReact />,
            title: 'React Components',
            description: 'Build powerful modern web interfaces with React. Learn hooks, state management, and component architecture.',
            imageUrl: '',
            gradient: 'linear-gradient(135deg, #61DAFB 0%, #2185D0 100%)'
        },
        html: {
            icon: <FaHtml5 />,
            title: 'HTML Essentials',
            description: 'The foundation of the web. Learn semantic HTML, forms, and accessibility best practices.',
            imageUrl: '',
            gradient: 'linear-gradient(135deg, #E34F26 0%, #F06529 100%)'
        },
        java: {
            icon: <FaJava />,
            title: 'Java Programming',
            description: 'Enterprise-grade programming. Learn OOP, multi-threading, and robust backend system design.',
            imageUrl: '',
            gradient: 'linear-gradient(135deg, #007396 0%, #ED8B00 100%)'
        },
        'c++': {
            icon: <SiCplusplus />,
            title: 'C++ Systems',
            description: 'High-performance computing. Master memory management, performance optimization, and systems software.',
            imageUrl: '',
            gradient: 'linear-gradient(135deg, #00599C 0%, #004482 100%)'
        },
        angular: {
            icon: <FaAngular />,
            title: 'Angular Framework',
            description: 'Build enterprise-scale web applications with Angular. Master TypeScript, modules, and reactive programming.',
            imageUrl: '',
            gradient: 'linear-gradient(135deg, #DD0031 0%, #C3002F 100%)'
        },
    };

    React.useEffect(() => {
        const fetchTopics = async () => {
            try {
                setLoading(true);
                const response = await problemsApi.getAllTopics();
                if (response.success) {
                    // Merge API data with metadata
                    const mergedTopics = response.data.map(topic => {
                        const meta = topicsMetadata[topic.id] || {
                            icon: <FaDatabase />,
                            title: topic.title,
                            description: 'Explore coding problems in this topic and improve your logical thinking skills.',
                            imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
                        };
                        return {
                            ...topic,
                            ...meta,
                            solvedCount: 0 // Default
                        };
                    });

                    // Sort to maintain a consistent order
                    const order = ['python', 'sql', 'javascript', 'css', 'react', 'html', 'java', 'c++', 'angular'];
                    mergedTopics.sort((a, b) => {
                        const indexA = order.indexOf(a.id);
                        const indexB = order.indexOf(b.id);
                        if (indexA === -1) return 1;
                        if (indexB === -1) return -1;
                        return indexA - indexB;
                    });

                    const filtered = mergedTopics.filter(t => t.id !== 'sqlserver');
                    setTopics(filtered);

                    // Fetch solved counts in background
                    const topicsWithProgress = await Promise.all(filtered.map(async (topic) => {
                        try {
                            const progressRes = await problemsApi.getSolvedCount('default-user', topic.id);
                            return {
                                ...topic,
                                solvedCount: progressRes.success ? progressRes.solvedCount : 0
                            };
                        } catch (err) {
                            return topic;
                        }
                    }));
                    setTopics(topicsWithProgress);
                }
            } catch (err) {
                console.error('Error fetching topics:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTopics();
    }, []);

    const hasCompletedCompilerLead = () => {
        try {
            if (localStorage.getItem('uc_compiler_lead_submitted') === 'true') {
                return true;
            }
            const leads = JSON.parse(localStorage.getItem('uc_local_leads') || '[]');
            return Array.isArray(leads) && leads.some((lead) =>
                String(lead?.courseName || '').toLowerCase().includes('compiler')
            );
        } catch {
            return false;
        }
    };

    const handleTopicClick = (topicKey) => {
        if (hasCompletedCompilerLead()) {
            try {
                localStorage.setItem('uc_start_coding', 'true');
            } catch { }
            navigate(`/problems/${topicKey}`);
            return;
        }
        const t = topics.find((x) => x.id === topicKey);
        setPendingTopicId(topicKey);
        setPendingTopicTitle(t?.title || '');
        setLeadModalOpen(true);
    };

    const handleLeadSuccess = () => {
        const targetId = pendingTopicId;
        setLeadModalOpen(false);
        setPendingTopicId(null);
        setPendingTopicTitle('');
        try {
            localStorage.setItem('uc_compiler_lead_submitted', 'true');
        } catch { }

        if (targetId) {
            // Tell ProblemDetail page to show "Starting coding..." after editor loads.
            try {
                localStorage.setItem('uc_start_coding', 'true');
            } catch { }
            navigate(`/problems/${targetId}`);
        }
    };

    if (loading) return <div className="loading">Loading topics...</div>;

    return (
        <div className="problems-topics-page">
            <motion.div
                className="topics-header-section"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Don't stop at concepts, <br /> <span className="text-gradient">Start coding immediately</span></h1>
                <div className="header-features">
                    <span className="feature-tag">Practice while you learn</span>
                    <span className="feature-tag">Write code instantly</span>
                    <span className="feature-tag">Build confidence</span>
                </div>
                <p className="header-description">
                    The best way to understand coding is to practice while you learn.<br></br> Use our online compiler to 
                    write code instantly, test programs, fix mistakes, and build confidence while learning.
                </p>
            </motion.div>

            <div className="problems-topics-container">
                <motion.div
                    className="topics-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {topics.map((topic) => {
                        const progress = topic.totalProblems > 0
                            ? Math.round((topic.solvedCount / topic.totalProblems) * 100)
                            : 0;

                        return (
                            <motion.div
                                key={topic.id}
                                className="problems-topic-card"
                                onClick={() => handleTopicClick(topic.id)}
                                variants={cardVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <div
                                    className="topic-image-container"
                                    style={{ background: topic.gradient }}
                                >
                                    {failedImages[topic.id] ? (
                                        <div className="topic-fallback">
                                            <div className="fallback-icon">
                                                {topic.icon}
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {!loadedImages[topic.id] && (
                                                <div className="topic-fallback pulse-animation">
                                                    <div className="fallback-icon">
                                                        {topic.icon}
                                                    </div>
                                                </div>
                                            )}
                                            {topic.imageUrl &&
                                                <img
                                                    src={topic.imageUrl}
                                                    alt={topic.title}
                                                    className={loadedImages[topic.id] ? 'is-loaded' : 'is-loading'}
                                                    onError={() => handleImageError(topic.id)}
                                                    onLoad={() => handleImageLoad(topic.id)}
                                                />}
                                        </>
                                    )}
                                </div>
                                <div className="topic-content">
                                    <h3>{topic.title}</h3>
                                    <p className="topic-description">{topic.description}</p>

                                    <div className="topic-mastery-section">
                                        <div className="mastery-label">
                                            <span>Mastery</span>
                                            <span>{progress}%</span>
                                        </div>
                                        <div className="mastery-progress-bg">
                                            <div 
                                                className="mastery-progress-fill" 
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="topic-footer">
                                        <div className="topic-badge">
                                            {topic.solvedCount} / {topic.totalProblems} Solved
                                        </div>
                                        {['python', 'sql', 'javascript', 'css', 'react', 'html', 'java', 'c++', 'angular'].includes(topic.id) && (
                                            <button
                                                className="take-quiz-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate(`/quiz/${topic.id}/beginner`);
                                                }}
                                            >
                                                <FaPencilAlt /> Quiz
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            <LeadCaptureModal
                isOpen={leadModalOpen}
                onClose={() => {
                    setLeadModalOpen(false);
                    setPendingTopicId(null);
                    setPendingTopicTitle('');
                }}
                context={{
                    courseName: pendingTopicTitle ? `Compiler - ${pendingTopicTitle}` : 'Compiler - Coding Challenges',
                    message: pendingTopicTitle ? `Interested in: ${pendingTopicTitle}` : 'No message provided',
                    mode: 'lets decide later',
                }}
                onSuccess={handleLeadSuccess}
            />
        </div>
    );
};

export default ProblemsTopics;

