import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzesApi, studentsApi } from '../../services/api';
import { FaCheck, FaTimes, FaLightbulb, FaArrowRight, FaArrowLeft, FaTrophy, FaBook, FaRocket, FaPython, FaJava, FaCode, FaHtml5, FaDatabase, FaReact, FaJs } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import './Quiz.css';

const Quiz = () => {
    const { topic, level } = useParams();
    const navigate = useNavigate();

    const [quizData, setQuizData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    // Form State for Beginner Level
    const [formData, setFormData] = useState({ email: '', phone: '' });
    const [submissionStatus, setSubmissionStatus] = useState({ loading: false, error: null, success: false });

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                setLoading(true);
                const response = await quizzesApi.getQuizByTopicAndLevel(topic, level);
                if (response.success) {
                    setQuizData(response.data);
                }
            } catch (err) {
                console.error('Error fetching quiz:', err);
                setError('Failed to load quiz questions.');
            } finally {
                setLoading(false);
            }
        };

        fetchQuiz();
        // Reset state when level changes
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setAnsweredQuestions([]);
        setQuizCompleted(false);
    }, [topic, level]);

    // Handle Form Submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus({ loading: true, error: null, success: false });

        try {
            const data = await studentsApi.submitQuiz({
                email: formData.email,
                phone: formData.phone,
                quizResult: {
                    topic,
                    level,
                    score,
                    totalQuestions: quizData.questions.length,
                    percentage: (score / quizData.questions.length) * 100,
                    passed: true
                }
            });

            setSubmissionStatus({ loading: false, error: null, success: true });
        } catch (err) {
            setSubmissionStatus({ loading: false, error: err.response?.data?.message || err.message, success: false });
        }
    };

    const getIcon = (iconName) => {
        const icons = {
            python: <FaPython />,
            java: <FaJava />,
            c: <FaCode />,
            cpp: <SiCplusplus />,
            html: <FaHtml5 />,
            sql: <FaDatabase />,
            react: <FaReact />,
            javascript: <FaJs />
        };
        return icons[iconName] || <FaCode />;
    };

    if (loading) return <div className="loading">Loading quiz...</div>;
    if (error || !quizData || !quizData.questions || quizData.questions.length === 0) {
        return (
            <div className="quiz-container">
                <div className="quiz-error">
                    <h2>{error || 'Quiz Level Not Found'}</h2>
                    <p>The {level} level for "{topic}" is not available.</p>
                    <button onClick={() => navigate('/quiz')} className="btn-primary">
                        Back to Quiz Topics
                    </button>
                </div>
            </div>
        );
    }

    const question = quizData.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

    const handleAnswerSelect = (index) => {
        if (showExplanation) return;
        setSelectedAnswer(index);
    };

    const handleSubmitAnswer = () => {
        if (selectedAnswer === null) return;

        setShowExplanation(true);

        const isCorrect = selectedAnswer === question.correctAnswer;
        if (isCorrect) {
            setScore(score + 1);
        }

        setAnsweredQuestions([
            ...answeredQuestions,
            {
                questionId: question.id,
                selectedAnswer,
                correctAnswer: question.correctAnswer,
                isCorrect
            }
        ]);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < quizData.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setAnsweredQuestions([]);
        setQuizCompleted(false);
    };

    const handleNextLevel = () => {
        const levels = ['beginner', 'average', 'tough'];
        const currentIndex = levels.indexOf(level);
        if (currentIndex < levels.length - 1) {
            navigate(`/quiz/${topic}/${levels[currentIndex + 1]}`);
        }
    };

    const getNextLevelName = () => {
        const levels = ['beginner', 'average', 'tough'];
        const currentIndex = levels.indexOf(level);
        return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;
    };

    if (quizCompleted) {
        const percentage = (score / quizData.questions.length) * 100;
        const passed = percentage >= 60;
        const nextLevel = getNextLevelName();



        return (
            <div className="quiz-container">
                {passed && (
                    <div className="confetti-container">
                        {[...Array(60)].map((_, i) => {
                            const left = Math.random() * 100;
                            const drift = (Math.random() - 0.5) * 200; // random drift between -100 and 100
                            return (
                                <motion.div
                                    key={i}
                                    className="confetti-piece"
                                    initial={{
                                        top: -20,
                                        left: `${left}%`,
                                        x: 0,
                                        backgroundColor: ['#10b981', '#34d399', '#fbbf24', '#f59e0b', '#3b82f6', '#8b5cf6'][Math.floor(Math.random() * 6)],
                                        rotate: Math.random() * 360,
                                        scale: Math.random() * 0.4 + 0.4
                                    }}
                                    animate={{
                                        top: '105vh',
                                        x: drift,
                                        rotate: Math.random() * 1000 + 500
                                    }}
                                    transition={{
                                        duration: Math.random() * 3 + 4,
                                        delay: Math.random() * 3,
                                        ease: [0.23, 1, 0.32, 1], // Custom cubic bezier for smoother fall
                                        repeat: Infinity
                                    }}
                                    style={{
                                        width: Math.random() * 12 + 6 + 'px',
                                        height: Math.random() * 10 + 4 + 'px',
                                        position: 'absolute',
                                        zIndex: 1000
                                    }}
                                />
                            );
                        })}
                    </div>
                )}
                <motion.div
                    className="quiz-results"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="results-header">
                        <span className="results-icon">{getIcon(quizData.icon)}</span>
                        <h1>{level.charAt(0).toUpperCase() + level.slice(1)} Quiz Completed!</h1>
                    </div>

                    <div className="results-body">
                        <motion.div
                            className={`score-circle ${passed ? 'passed' : 'failed'}`}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: 0.2
                            }}
                        >
                            <div className="score-value">{Math.round(percentage)}</div>
                            <div className="score-label">Your Score</div>
                        </motion.div>

                        <div className="score-details">
                            <div className="score-stat">
                                <span className="stat-label">Correct Answers</span>
                                <span className="stat-value correct">{score}</span>
                            </div>
                            <div className="score-stat">
                                <span className="stat-label">Wrong Answers</span>
                                <span className="stat-value wrong">{quizData.questions.length - score}</span>
                            </div>
                            <div className="score-stat">
                                <span className="stat-label">Total Questions</span>
                                <span className="stat-value">{quizData.questions.length}</span>
                            </div>
                        </div>

                        <motion.div
                            className={`result-message ${passed ? 'success' : 'fail'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            {passed ? (
                                <div className="result-celebration">
                                    <motion.div
                                        className="celebration-animation-wrapper"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    >
                                        <div className="trophy-container">
                                            <motion.div
                                                className="trophy-glow"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 0.8, 0.5]
                                                }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="trophy-icon-inner"
                                                animate={{
                                                    y: [0, -15, 0],
                                                    rotate: [0, 5, -5, 0]
                                                }}
                                                transition={{
                                                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                                                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                                }}
                                            >
                                                <FaTrophy fontSize="4.5rem" color="#fbbf24" />
                                            </motion.div>

                                            {/* Particles/Sparkles */}
                                            {[...Array(12)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="sparkle"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{
                                                        scale: [0, 1.2, 0],
                                                        opacity: [0, 1, 0],
                                                        x: Math.cos(i * 30 * Math.PI / 180) * 60,
                                                        y: Math.sin(i * 30 * Math.PI / 180) * 60
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: i * 0.15,
                                                        ease: "easeOut"
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="celebration-text"
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <h3><FaTrophy /> Congratulations!</h3>
                                        <p>You passed the {level} level! Great job on mastering {quizData.title}.</p>
                                    </motion.div>
                                </div>
                            ) : (
                                <>
                                    <h3><FaBook /> Keep Learning!</h3>
                                    <p>Don't give up! Review the material and try again.</p>
                                </>
                            )}
                        </motion.div>

                        <div className="results-actions">
                            <button onClick={handleRestartQuiz} className="btn-secondary">
                                Retake Quiz
                            </button>

                            {passed && nextLevel && (
                                <button onClick={handleNextLevel} className="btn-primary">
                                    Next Level: {nextLevel.charAt(0).toUpperCase() + nextLevel.slice(1)} <FaArrowRight />
                                </button>
                            )}

                            <button onClick={() => navigate('/quiz')} className="btn-secondary">
                                Back to Topics
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <div className="quiz-title">
                    <span className="quiz-icon">{getIcon(quizData.icon)}</span>
                    <h1>{quizData.title} <span style={{ fontSize: '0.6em', opacity: 0.8 }}>({level})</span></h1>
                </div>
                <button onClick={() => navigate('/quiz')} className="btn-back">
                    <FaArrowLeft /> Back to Topics
                </button>
            </div>

            <div className="quiz-progress">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="progress-text">
                    Question {currentQuestion + 1} of {quizData.questions.length}
                </div>
            </div>

            <div className="quiz-content">
                <div className="question-card">
                    <div className="question-meta-row" aria-live="polite">
                        <span className="question-number-badge">
                            Question {currentQuestion + 1} / {quizData.questions.length}
                        </span>
                    </div>
                    <h2 className="question-text">{question.question}</h2>

                    <div className="options-list">
                        {question.options.map((option, index) => {
                            let optionClass = 'option-item';

                            if (showExplanation) {
                                if (index === question.correctAnswer) {
                                    optionClass += ' correct';
                                } else if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
                                    optionClass += ' wrong';
                                }
                            } else if (selectedAnswer === index) {
                                optionClass += ' selected';
                            }

                            return (
                                <div
                                    key={index}
                                    className={optionClass}
                                    onClick={() => handleAnswerSelect(index)}
                                >
                                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                                    <span className="option-text">{option}</span>
                                    {showExplanation && index === question.correctAnswer && (
                                        <span className="option-icon"><FaCheck /></span>
                                    )}
                                    {showExplanation && index === selectedAnswer && selectedAnswer !== question.correctAnswer && (
                                        <span className="option-icon"><FaTimes /></span>
                                    )}
                                </div>
                            );
                        })}
                    </div>


                    {showExplanation && (
                        <div className="explanation-box">
                            <h3><FaLightbulb /> Explanation</h3>
                            <p>{question.explanation}</p>
                        </div>
                    )}
                </div>

                <div className="quiz-actions">
                    {!showExplanation ? (
                        <button
                            onClick={handleSubmitAnswer}
                            disabled={selectedAnswer === null}
                            className="btn-submit"
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <button
                            onClick={handleNextQuestion}
                            className="btn-next"
                        >
                            {currentQuestion < quizData.questions.length - 1 ? 'Next Question' : 'View Results'} <FaArrowRight />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
