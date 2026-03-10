'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Sidebar from '@/app/components/feedback-admin/Sidebar';
import { MdAdd, MdEdit, MdDelete, MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import './QuestionManager.css';

const API_BASE_URL = process.env.NEXT_PUBLIC_FEEDBACK_API_URL || 'https://urbancode-nextjs.onrender.com';

const QuestionManager = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({
        questionText: '',
        type: 'text',
        options: [],
        rows: [],
        columns: [],
        section: '',
        order: 0,
        required: false,
        isTrainerEval: false,
        isOverallRating: false
    });
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/feedback/admin');
            return;
        }
        fetchQuestions(token);
    }, [router]);

    const fetchQuestions = async (token) => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/questions`, {
                headers: { Authorization: `Bearer ${token}` },
                timeout: 30000
            });
            setQuestions(res.data);
        } catch (err) {
            console.error(err);
            if (err.response?.status === 401) {
                localStorage.removeItem('token');
                router.push('/feedback/admin');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const { _id, __v, createdAt, updatedAt, ...questionData } = currentQuestion;

            if (isEditing) {
                await axios.put(`${API_BASE_URL}/api/questions/${currentQuestion._id}`, questionData, {
                    headers: { Authorization: `Bearer ${token}` },
                    timeout: 30000
                });
            } else {
                await axios.post(`${API_BASE_URL}/api/questions`, questionData, {
                    headers: { Authorization: `Bearer ${token}` },
                    timeout: 30000
                });
            }
            setShowModal(false);
            fetchQuestions(token);
            Swal.fire({
                icon: 'success',
                title: 'Saved!',
                text: `Question ${isEditing ? 'updated' : 'created'} successfully.`,
                timer: 2000,
                showConfirmButton: false
            });
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to save question'
            });
        }
    };

    const handleDeleteClick = (id) => {
        Swal.fire({
            title: 'Delete Question?',
            text: "This question will be permanently removed from the form.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const token = localStorage.getItem('token');
                try {
                    await axios.delete(`${API_BASE_URL}/api/questions/${id}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    fetchQuestions(token);
                    Swal.fire('Deleted!', 'Question removed.', 'success');
                } catch (err) {
                    Swal.fire('Error!', 'Error deleting question.', 'error');
                }
            }
        });
    };

    const moveOrder = async (id, direction) => {
        const targetQ = questions.find(q => q._id === id);
        if (!targetQ) return;

        const sectionQuestions = questions
            .filter(q => q.section === targetQ.section)
            .sort((a, b) => a.order - b.order);

        const index = sectionQuestions.findIndex(q => q._id === id);
        if ((direction === -1 && index === 0) || (direction === 1 && index === sectionQuestions.length - 1)) return;

        const otherQ = sectionQuestions[index + direction];
        const token = localStorage.getItem('token');

        try {
            await Promise.all([
                axios.put(`${API_BASE_URL}/api/questions/${targetQ._id}`, { ...targetQ, order: otherQ.order }, { headers: { Authorization: `Bearer ${token}` } }),
                axios.put(`${API_BASE_URL}/api/questions/${otherQ._id}`, { ...otherQ, order: targetQ.order }, { headers: { Authorization: `Bearer ${token}` } })
            ]);
            fetchQuestions(token);
        } catch (err) {
            console.error('Failed to update order');
        }
    };

    const openEdit = (q) => {
        setCurrentQuestion({
            ...q,
            options: q.options || [],
            rows: q.rows || [],
            columns: q.columns || [],
            required: !!q.required,
            isTrainerEval: !!q.isTrainerEval,
            isOverallRating: !!q.isOverallRating
        });
        setIsEditing(true);
        setShowModal(true);
    };

    const openAdd = (section = null, order = null) => {
        let calculatedOrder = order;
        let targetSection = section || 'General';

        if (calculatedOrder === null) {
            calculatedOrder = questions.length > 0 ? Math.max(...questions.map(q => q.order || 0)) + 1 : 0;
        }

        setCurrentQuestion({
            questionText: '',
            type: 'text',
            options: [],
            rows: [],
            columns: [],
            section: targetSection,
            order: calculatedOrder,
            required: false,
            isTrainerEval: false,
            isOverallRating: false
        });
        setIsEditing(false);
        setShowModal(true);
    };

    const addListOption = (field) => {
        setCurrentQuestion({ ...currentQuestion, [field]: [...currentQuestion[field], ''] });
    };

    const handleListOptionChange = (field, index, value) => {
        const newList = [...currentQuestion[field]];
        newList[index] = value;
        setCurrentQuestion({ ...currentQuestion, [field]: newList });
    };

    const removeListOption = (field, index) => {
        setCurrentQuestion({ ...currentQuestion, [field]: currentQuestion[field].filter((_, i) => i !== index) });
    };

    const handleToggleTrainerEval = (checked) => {
        if (checked) {
            setCurrentQuestion({
                ...currentQuestion,
                isTrainerEval: true,
                isOverallRating: false, // Mutual exclusivity for logic clarity
                type: 'matrix',
                questionText: 'Trainer Evaluation',
                rows: [
                    "How do you rate the domain Knowledge of the Trainer?",
                    "Level of delivery?",
                    "Response to queries & overall coaching skills?",
                    "Interaction with participants & Punctuality?",
                    "Are you happy with the training and overall uc service?"
                ],
                columns: ["Very Poor", "Poor", "Average", "Good", "Excellent"]
            });
        } else {
            setCurrentQuestion({ ...currentQuestion, isTrainerEval: false });
        }
    };

    const handleToggleOverallRating = (checked) => {
        if (checked) {
            setCurrentQuestion({
                ...currentQuestion,
                isOverallRating: true,
                isTrainerEval: false,
                type: 'radio',
                questionText: 'How would you rate your overall experience with Urbancode?',
                options: ["Exceptional", "Good", "Average", "Below Average", "Poor"]
            });
        } else {
            setCurrentQuestion({ ...currentQuestion, isOverallRating: false });
        }
    };

    const cleanSectionTitle = (title) => {
        return (title || '').replace(/^\d+[\.\-\s]*/, '').replace(/^SECTION\s*\d+[\.\-\s]*/i, '').trim();
    };

    const groupedBySection = (questions || []).reduce((acc, q) => {
        if (!acc[q.section]) acc[q.section] = [];
        acc[q.section].push(q);
        return acc;
    }, {});

    const sortedSectionKeys = Object.keys(groupedBySection).sort((a, b) => {
        const isFinalA = a.toLowerCase().includes('final');
        const isFinalB = b.toLowerCase().includes('final');
        if (isFinalA && !isFinalB) return 1;
        if (!isFinalA && isFinalB) return -1;
        const numA = parseInt(a.match(/\d+/)?.[0] || 999);
        const numB = parseInt(b.match(/\d+/)?.[0] || 999);
        if (numA !== numB) return numA - numB;
        return a.localeCompare(b);
    });

    const uniqueSections = [...new Set(questions.map(q => q.section))];

    return (
        <div className="admin-layout">
            <Sidebar />
            <main className="admin-content">
                <div className="question-manager-container">
                    <header className="page-header flex-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h1>Question Manager</h1>
                            <p>Customize your backend-driven feedback form</p>
                        </div>
                        <button onClick={() => openAdd()} className="btn-primary" style={{ background: '#17944d', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                            <MdAdd size={24} />
                            Add New Question
                        </button>
                    </header>

                    {loading ? (
                        <div className="uc-loader-container" style={{ height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="uc-logo-anim" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#17944d', marginBottom: '20px', letterSpacing: '0.1em' }}><span>U</span><span>C</span></div>
                            <div className="uc-loading-text">Loading Questions...</div>
                        </div>
                    ) : (
                        <div className="sections-container">
                            {sortedSectionKeys.map(section => (
                                <div key={section} className="section-group">
                                    <div className="section-group-header-premium">
                                        <div className="section-title-wrapper">
                                            <span className="section-accent"></span>
                                            <h2>{cleanSectionTitle(section)}</h2>
                                        </div>
                                        <button onClick={() => openAdd(section)} className="add-question-btn-premium">
                                            <MdAdd size={20} />
                                            <span>Add Question</span>
                                        </button>
                                    </div>
                                    <div className="questions-list">
                                        {groupedBySection[section].sort((a, b) => a.order - b.order).map((q, idx, arr) => (
                                            <div key={q._id} className="question-card-premium">
                                                <div className="q-card-header-premium">
                                                    <div className="header-left-badges">
                                                        <span className="badge-premium badge-type">{q.type}</span>
                                                        {q.required && <span className="badge-premium badge-required">REQUIRED</span>}
                                                        {q.type === 'matrix' && <span className="badge-premium badge-matrix">MATRIX</span>}
                                                    </div>
                                                    <div className="header-right-controls">
                                                        <div className="move-to-wrapper">
                                                            <span>Move to:</span>
                                                            <select
                                                                className="move-to-select"
                                                                value={q.section}
                                                                onChange={async (e) => {
                                                                    const token = localStorage.getItem('token');
                                                                    try {
                                                                        await axios.put(`${API_BASE_URL}/api/questions/${q._id}`, { ...q, section: e.target.value }, { headers: { Authorization: `Bearer ${token}` } });
                                                                        fetchQuestions(token);
                                                                    } catch (err) { console.error(err); }
                                                                }}
                                                            >
                                                                {uniqueSections.map(s => <option key={s} value={s}>{cleanSectionTitle(s)}</option>)}
                                                            </select>
                                                        </div>
                                                        <span className="q-index-pill">#{idx + 1}</span>
                                                        <div className="order-arrows">
                                                            <button className="arrow-btn" onClick={() => moveOrder(q._id, -1)} disabled={idx === 0}><MdArrowUpward size={18} /></button>
                                                            <button className="arrow-btn" onClick={() => moveOrder(q._id, 1)} disabled={idx === arr.length - 1}><MdArrowDownward size={18} /></button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="q-card-body-premium">
                                                    <h4 className="question-text-main">{q.questionText}</h4>

                                                    {/* Matrix Preview */}
                                                    {q.type === 'matrix' && q.rows?.length > 0 && (
                                                        <div className="matrix-preview-container">
                                                            <table className="matrix-table-premium">
                                                                <thead>
                                                                    <tr>
                                                                        <th></th>
                                                                        {q.columns?.map((col, i) => <th key={i}>{col}</th>) || (
                                                                            <>
                                                                                <th>VERY POOR</th>
                                                                                <th>POOR</th>
                                                                                <th>AVERAGE</th>
                                                                                <th>GOOD</th>
                                                                                <th>EXCELLENT</th>
                                                                            </>
                                                                        )}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {q.rows.map((row, i) => (
                                                                        <tr key={i}>
                                                                            <td className="criteria-cell">{row}</td>
                                                                            {(q.columns || [1, 2, 3, 4, 5]).map((_, j) => (
                                                                                <td key={j}><div className="radio-circle"></div></td>
                                                                            ))}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    )}

                                                    {/* Radio & Checkbox Preview */}
                                                    {(q.type === 'radio' || q.type === 'checkbox') && q.options?.length > 0 && (
                                                        <div className="options-preview-container">
                                                            {q.options.map((opt, i) => (
                                                                <div key={i} className="preview-option-item">
                                                                    <div className={q.type === 'radio' ? "radio-circle" : "checkbox-square"}></div>
                                                                    <span>{opt}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="q-card-footer-premium">
                                                    <div className="footer-stats">
                                                        {q.type === 'matrix' ? `${q.rows?.length || 0} CRITERIA` : (q.type === 'radio' || q.type === 'checkbox') ? `${q.options?.length || 0} OPTIONS` : `${q.type.toUpperCase()} TYPE`}
                                                    </div>
                                                    <div className="footer-actions">
                                                        <button onClick={() => openEdit(q)} className="action-btn-square btn-edit"><MdEdit size={18} /></button>
                                                        <button onClick={() => handleDeleteClick(q._id)} className="action-btn-square btn-delete"><MdDelete size={18} /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {showModal && (
                        <div className="modal-overlay">
                            <div className="modal-content premium-editor-modal">
                                <form onSubmit={handleSave}>
                                    <div className="modal-header-premium">
                                        <h2>{isEditing ? 'Edit Question Details' : 'Design New Question'}</h2>
                                        <button type="button" onClick={() => setShowModal(false)} className="btn-close-round">&times;</button>
                                    </div>
                                    <div className="modal-body-alt">
                                        <div className="form-row-premium">
                                            <div className="form-group-premium" style={{ flex: '2' }}>
                                                <label className="label-premium">Question Text</label>
                                                <textarea
                                                    className="input-premium"
                                                    value={currentQuestion.questionText}
                                                    onChange={(e) => setCurrentQuestion({ ...currentQuestion, questionText: e.target.value })}
                                                    required
                                                    rows="3"
                                                ></textarea>
                                            </div>
                                            <div className="form-group-premium" style={{ flex: '1' }}>
                                                <label className="label-premium">Section Name</label>
                                                <input
                                                    className="input-premium"
                                                    value={currentQuestion.section}
                                                    onChange={(e) => setCurrentQuestion({ ...currentQuestion, section: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row-premium grid-3">
                                            <div className="form-group-premium">
                                                <label className="label-premium">Display Order</label>
                                                <input
                                                    type="number"
                                                    className="input-premium"
                                                    value={currentQuestion.order}
                                                    onChange={(e) => setCurrentQuestion({ ...currentQuestion, order: parseInt(e.target.value) })}
                                                />
                                            </div>
                                            <div className="form-group-premium">
                                                <label className="label-premium">Component Type</label>
                                                <select
                                                    className="input-premium"
                                                    value={currentQuestion.type}
                                                    onChange={(e) => setCurrentQuestion({ ...currentQuestion, type: e.target.value })}
                                                >
                                                    <option value="text">Input Box (Short)</option>
                                                    <option value="textarea">Description Box (Long)</option>
                                                    <option value="radio">Single Choice (Radio)</option>
                                                    <option value="checkbox">Multiple Choice (Checkbox)</option>
                                                    <option value="matrix">Matrix / Grid</option>
                                                    <option value="trainer-select">Trainer List Selection</option>
                                                </select>
                                            </div>
                                            <div className="form-group-premium">
                                                <label className="label-premium">Required Field</label>
                                                <label className="toggle-wrapper-premium clickable">
                                                    <span>MANDATORY</span>
                                                    <div className="switch">
                                                        <input
                                                            type="checkbox"
                                                            checked={currentQuestion.required}
                                                            onChange={(e) => setCurrentQuestion({ ...currentQuestion, required: e.target.checked })}
                                                        />
                                                        <span className="slider round"></span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-section-premium" style={{ marginTop: '25px' }}>
                                            <label className="label-premium">Form Bridge Tags</label>
                                            <div className="bridge-tags-grid">
                                                <label className="toggle-wrapper-premium fill clickable">
                                                    <span>Trainer Eval Block</span>
                                                    <div className="switch">
                                                        <input
                                                            type="checkbox"
                                                            checked={currentQuestion.isTrainerEval}
                                                            onChange={(e) => handleToggleTrainerEval(e.target.checked)}
                                                        />
                                                        <span className="slider round"></span>
                                                    </div>
                                                </label>
                                                <label className="toggle-wrapper-premium fill clickable">
                                                    <span>Overall Performance Rating</span>
                                                    <div className="switch">
                                                        <input
                                                            type="checkbox"
                                                            checked={currentQuestion.isOverallRating}
                                                            onChange={(e) => handleToggleOverallRating(e.target.checked)}
                                                        />
                                                        <span className="slider round"></span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Choices Manager for list-types */}
                                        {(currentQuestion.type === 'radio' || currentQuestion.type === 'checkbox') && (
                                            <div className="options-manager-premium">
                                                <div className="manager-header">
                                                    <label className="label-premium">Available Options</label>
                                                    <button type="button" onClick={() => addListOption('options')} className="btn-add-mini"><MdAdd /> ADD OPTION</button>
                                                </div>
                                                <div className="options-list-editor">
                                                    {currentQuestion.options.map((opt, idx) => (
                                                        <div key={idx} className="option-edit-row">
                                                            <input className="input-premium mini" value={opt} onChange={(e) => handleListOptionChange('options', idx, e.target.value)} placeholder={`Option ${idx + 1}`} />
                                                            <button type="button" onClick={() => removeListOption('options', idx)} className="btn-del-mini"><MdDelete /></button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {currentQuestion.type === 'matrix' && (
                                            <div className="matrix-manager-premium">
                                                <div className="manager-header">
                                                    <label className="label-premium">Matrix Config</label>
                                                    <div style={{ display: 'flex', gap: '10px' }}>
                                                        <button type="button" onClick={() => addListOption('rows')} className="btn-add-mini"><MdAdd /> ADD ROW</button>
                                                        <button type="button" onClick={() => addListOption('columns')} className="btn-add-mini"><MdAdd /> ADD COL</button>
                                                    </div>
                                                </div>
                                                <div className="matrix-edit-grid">
                                                    <div className="matrix-edit-col">
                                                        <span className="label-premium mini">Rows (Criteria)</span>
                                                        {currentQuestion.rows.map((row, idx) => (
                                                            <div key={idx} className="option-edit-row">
                                                                <input className="input-premium mini" value={row} onChange={(e) => handleListOptionChange('rows', idx, e.target.value)} />
                                                                <button type="button" onClick={() => removeListOption('rows', idx)} className="btn-del-mini"><MdDelete /></button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="matrix-edit-col">
                                                        <span className="label-premium mini">Columns (Ratings)</span>
                                                        {currentQuestion.columns.map((col, idx) => (
                                                            <div key={idx} className="option-edit-row">
                                                                <input className="input-premium mini" value={col} onChange={(e) => handleListOptionChange('columns', idx, e.target.value)} />
                                                                <button type="button" onClick={() => removeListOption('columns', idx)} className="btn-del-mini"><MdDelete /></button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="modal-footer-alt">
                                        <button type="button" onClick={() => setShowModal(false)} className="btn-cancel-link">Cancel</button>
                                        <button type="submit" className="btn-save-premium">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
};

export default QuestionManager;
