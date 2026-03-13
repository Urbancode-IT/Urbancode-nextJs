'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import AdminHeader from '@/app/components/feedback-admin/AdminHeader';
import { MdAdd, MdEdit, MdDelete, MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import './QuestionManager.css';

const API_BASE_URL = process.env.NEXT_PUBLIC_FEEDBACK_API_URL || '';
const API_PATH = API_BASE_URL === '' ? '/api/feedback' : `${API_BASE_URL}/api/feedback`;

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
            const res = await axios.get(`${API_PATH}/questions`, {
                headers: { Authorization: `Bearer ${token}` }
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
                await axios.put(`${API_PATH}/questions/${currentQuestion._id}`, questionData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            } else {
                await axios.post(`${API_PATH}/questions`, questionData, {
                    headers: { Authorization: `Bearer ${token}` }
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
        const qToDelete = questions.find(q => q._id === id);
        if (!qToDelete) return;

        Swal.fire({
            title: 'Delete Question?',
            text: "This question will be permanently removed from the form and remaining questions will be reordered.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff7e5f',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const token = localStorage.getItem('token');
                try {
                    await axios.delete(`${API_PATH}/questions/${id}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    
                    // Auto-reorder logic for the remaining questions in the same section
                    const sectionQuestions = questions
                        .filter(q => q.section === qToDelete.section && q._id !== id)
                        .sort((a, b) => a.order - b.order);

                    const updates = sectionQuestions
                        .filter(q => q.order > qToDelete.order)
                        .map(q => ({ ...q, order: q.order - 1 }));

                    if (updates.length > 0) {
                        const config = { headers: { Authorization: `Bearer ${token}` } };
                        await Promise.all(updates.map(q => {
                            const { _id, __v, createdAt, updatedAt, ...cleanData } = q;
                            return axios.put(`${API_PATH}/questions/${_id}`, cleanData, config);
                        }));
                    }

                    fetchQuestions(token);
                    Swal.fire('Deleted!', 'Question removed and orders adjusted.', 'success');
                } catch (err) {
                    console.error('Delete/Reorder Error:', err);
                    Swal.fire('Error!', 'Failed to delete question or reorder.', 'error');
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
            const config = { headers: { Authorization: `Bearer ${token}` } };
            await Promise.all([
                axios.put(`${API_PATH}/questions/${targetQ._id}`, { ...targetQ, order: otherQ.order }, config),
                axios.put(`${API_PATH}/questions/${otherQ._id}`, { ...otherQ, order: targetQ.order }, config)
            ]);
            fetchQuestions(token);
        } catch (err) {
            console.error('Failed to update order');
        }
    };

    const moveToSection = async (id, newSection) => {
        const token = localStorage.getItem('token');
        const q = questions.find(item => item._id === id);
        if (!q || q.section === newSection) return;

        let sectionToUse = newSection;

        if (newSection === 'New Section') {
            const { value: sectionName } = await Swal.fire({
                title: 'New Section Name',
                input: 'text',
                inputPlaceholder: 'Enter section name (e.g., Infrastructure)',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) return 'You need to write something!';
                }
            });
            if (!sectionName) return;
            sectionToUse = sectionName;
        }

        try {
            await axios.put(`${API_PATH}/questions/${id}`, { ...q, section: sectionToUse }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchQuestions(token);
            Swal.fire({
                icon: 'success',
                title: 'Moved!',
                text: `Question moved to ${cleanSectionTitle(sectionToUse)}`,
                timer: 1500,
                showConfirmButton: false
            });
        } catch (err) {
            Swal.fire('Error', 'Failed to move question', 'error');
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
            if (section) {
                const sectionQs = questions.filter(q => q.section === section);
                if (sectionQs.length > 0) {
                    calculatedOrder = Math.max(...sectionQs.map(q => q.order || 0)) + 1;
                } else {
                    calculatedOrder = questions.length > 0 ? Math.max(...questions.map(q => q.order || 0)) + 1 : 0;
                }
            } else {
                calculatedOrder = questions.length > 0
                    ? Math.max(...questions.map(q => q.order || 0)) + 1
                    : 0;
            }
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

    const handleTypeChange = (newType) => {
        if (newType === 'trainer-eval-matrix') {
            setCurrentQuestion({
                ...currentQuestion,
                type: 'matrix',
                questionText: 'Trainer Evaluation',
                isTrainerEval: true,
                rows: [
                    'Subject Knowledge',
                    'Communication Skills',
                    'Clarity of Explanation',
                    'Practical Examples',
                    'Doubt Clarification',
                    'Engagement & Interaction'
                ],
                columns: ['VERY POOR', 'POOR', 'AVERAGE', 'GOOD', 'EXCELLENT']
            });
            return;
        }
        setCurrentQuestion({ ...currentQuestion, type: newType });
    };

    const handleListOptionChange = (field, index, value) => {
        const newList = [...currentQuestion[field]];
        newList[index] = value;
        setCurrentQuestion({ ...currentQuestion, [field]: newList });
    };

    const removeListOption = (field, index) => {
        setCurrentQuestion({ ...currentQuestion, [field]: currentQuestion[field].filter((_, i) => i !== index) });
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
        const minA = Math.min(...groupedBySection[a].map(q => q.order || 0));
        const minB = Math.min(...groupedBySection[b].map(q => q.order || 0));
        return minA - minB;
    });

    const uniqueSections = [...new Set(questions.map(q => q.section))];

    return (
        <div className="admin-layout">
            <AdminHeader />
            <main className="admin-content">
                <div className="question-manager-container">
                    <header className="page-header flex-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <div>
                            <h1>Question Manager</h1>
                            <p>Customize your backend-driven feedback form</p>
                        </div>
                        <button onClick={() => openAdd()} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '12px', background: '#17944d', color: 'white', border: 'none', fontWeight: '700', cursor: 'pointer' }}>
                            <MdAdd size={24} />
                            Add New Question
                        </button>
                    </header>

                    {loading ? (
                        <div className="uc-loader-container">
                            <div className="uc-logo-anim" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#17944d', textAlign: 'center' }}><span>U</span><span>C</span></div>
                            <div className="uc-loading-text" style={{ textAlign: 'center', color: '#64748b' }}>Loading Questions...</div>
                        </div>
                    ) : (
                        <div className="sections-container">
                            {sortedSectionKeys.map(section => (
                                <div key={section} className="section-group">
                                    <div className="section-group-header">
                                        <h2>{cleanSectionTitle(section)}</h2>
                                        <button onClick={() => openAdd(section)} className="add-in-section">
                                            <MdAdd size={20} />
                                            Add Question
                                        </button>
                                    </div>
                                    <div className="questions-grid">
                                        {groupedBySection[section].sort((a, b) => a.order - b.order).map((q, idx, arr) => (
                                            <React.Fragment key={q._id}>
                                                <div className="question-item-card">
                                                    <div className="q-card-top">
                                                        <div className="badges">
                                                            <span className="type-badge-alt clickable" onClick={() => openEdit(q)} title="Click to edit type">{q.type}</span>
                                                            {q.required && <span className="req-badge clickable" onClick={() => openEdit(q)} title="Click to edit requirement">Required</span>}
                                                        </div>

                                                        <div className="section-mover">
                                                            <span>Move to:</span>
                                                            <select
                                                                value={q.section}
                                                                onChange={(e) => moveToSection(q._id, e.target.value)}
                                                            >
                                                                {sortedSectionKeys.map(s => (
                                                                    <option key={s} value={s}>{cleanSectionTitle(s)}</option>
                                                                ))}
                                                                <option value="New Section">+ New Section...</option>
                                                            </select>
                                                        </div>

                                                        <div className="order-controls">
                                                            <span className="order-badge">#{q.order}</span>
                                                            <button
                                                                onClick={() => moveOrder(q._id, -1)}
                                                                disabled={idx === 0}
                                                                title="Move Up"
                                                            >
                                                                <MdArrowUpward size={18} />
                                                            </button>
                                                            <button
                                                                onClick={() => moveOrder(q._id, 1)}
                                                                disabled={idx === arr.length - 1}
                                                                title="Move Down"
                                                            >
                                                                <MdArrowDownward size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="q-card-text" onClick={() => openEdit(q)} title="Click to edit question">
                                                        {q.questionText}
                                                    </div>

                                                    <div className="q-preview-area">
                                                        {q.type === 'text' && <input type="text" disabled placeholder="Short Text" className="preview-input" />}
                                                        {q.type === 'textarea' && <textarea disabled placeholder="Paragraph Text" className="preview-input textarea"></textarea>}
                                                        {q.type === 'radio' && (
                                                            <div className="preview-options">
                                                                {q.options.map((opt, i) => (
                                                                    <div key={i} className="preview-opt"><div className="radio-circle"></div> {opt}</div>
                                                                ))}
                                                            </div>
                                                        )}
                                                        {q.type === 'checkbox' && (
                                                            <div className="preview-options">
                                                                {q.options.map((opt, i) => (
                                                                    <div key={i} className="preview-opt"><div className="check-box"></div> {opt}</div>
                                                                ))}
                                                            </div>
                                                        )}
                                                        {q.type === 'trainer-select' && (
                                                            <select disabled className="preview-input">
                                                                <option>-- Select Trainer (Auto-populated) --</option>
                                                            </select>
                                                        )}
                                                        {q.type === 'matrix' && (
                                                            <div className="mini-matrix-wrapper">
                                                                <table className="mini-matrix">
                                                                    <thead>
                                                                        <tr>
                                                                            <th></th>
                                                                            {q.columns?.map(c => <th key={c}>{c}</th>)}
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {q.rows?.map(r => (
                                                                            <tr key={r}>
                                                                                <td>{r}</td>
                                                                                {q.columns?.map(c => <td key={c}><div className="radio-circle"></div></td>)}
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="q-card-actions">
                                                        <div className="stats-info">
                                                            {q.type === 'matrix' ? `${q.rows?.length || 0} Criteria` : (q.options?.length ? `${q.options.length} Options` : 'Free Text')}
                                                        </div>
                                                        <div className="btns">
                                                            <button onClick={() => openEdit(q)} className="btn-icon-alt edit" title="Edit"><MdEdit size={18} /></button>
                                                            <button onClick={() => handleDeleteClick(q._id)} className="btn-icon-alt delete" title="Delete"><MdDelete size={18} /></button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {idx < arr.length - 1 && (
                                                    <div className="insert-divider">
                                                        <div className="insert-line"></div>
                                                        <button
                                                            className="insert-btn"
                                                            onClick={() => openAdd(section, q.order + 1)}
                                                            title="Insert Question Here"
                                                        >
                                                            <MdAdd size={20} />
                                                        </button>
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {showModal && (
                        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4000 }}>
                            <div className="modal-content admin-modal" style={{ background: 'white', width: '95%', maxWidth: '850px', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.3)' }}>
                                <form onSubmit={handleSave}>
                                    <div className="modal-header" style={{ padding: '20px 30px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1e293b' }}>{isEditing ? 'Edit Question' : 'Create Question'}</h2>
                                        <button type="button" onClick={() => setShowModal(false)} className="close-btn" style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
                                    </div>
                                    <div className="modal-body-alt">
                                        <div className="form-grid">
                                            <div className="form-group-alt full-col">
                                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Question Text</label>
                                                <textarea
                                                    style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: '600', outline: 'none' }}
                                                    value={currentQuestion.questionText}
                                                    onChange={(e) => setCurrentQuestion({ ...currentQuestion, questionText: e.target.value })}
                                                    required
                                                    placeholder="Example: How would you rate the training infrastructure?"
                                                    rows="3"
                                                ></textarea>
                                            </div>

                                            <div className="form-group-alt">
                                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Section Name</label>
                                                <input
                                                    style={{ width: '100%', padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: '600', outline: 'none' }}
                                                    list="sections-list"
                                                    value={currentQuestion.section}
                                                    onChange={(e) => setCurrentQuestion({ ...currentQuestion, section: e.target.value })}
                                                    required
                                                    placeholder="e.g. Infrastructure"
                                                />
                                                <datalist id="sections-list">
                                                    {uniqueSections.map(s => <option key={s} value={s} />)}
                                                </datalist>
                                            </div>

                                            <div className="form-group-alt">
                                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Display Order</label>
                                                <input
                                                    style={{ width: '100%', padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: '600', outline: 'none' }}
                                                    type="number"
                                                    value={currentQuestion.order || ''}
                                                    onChange={(e) => {
                                                        const val = parseInt(e.target.value);
                                                        setCurrentQuestion({ ...currentQuestion, order: isNaN(val) ? 0 : val });
                                                    }}
                                                    required
                                                />
                                            </div>

                                            <div className="form-group-alt">
                                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Component Type</label>
                                                <select
                                                    style={{ width: '100%', padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: '600', outline: 'none' }}
                                                    value={currentQuestion.isTrainerEval && currentQuestion.type === 'matrix' ? 'trainer-eval-matrix' : currentQuestion.type}
                                                    onChange={(e) => handleTypeChange(e.target.value)}
                                                >
                                                    <option value="text">Input Box (Short)</option>
                                                    <option value="textarea">Paragraph Box (Long)</option>
                                                    <option value="radio">Selection (Radio)</option>
                                                    <option value="checkbox">Multi-Select (Checkbox)</option>
                                                    <option value="matrix">Matrix Grid (Criteria)</option>
                                                    <option value="trainer-eval-matrix">Trainer Evaluation Matrix (Standard)</option>
                                                    <option value="trainer-select">Trainer Dropdown (Auto-populated)</option>
                                                </select>
                                            </div>

                                            <div className="form-group-alt">
                                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Required Field</label>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', padding: '10px 15px', borderRadius: '12px' }}>
                                                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#475569' }}>Mandatory</span>
                                                    <input
                                                        type="checkbox"
                                                        checked={currentQuestion.required}
                                                        onChange={(e) => setCurrentQuestion({ ...currentQuestion, required: e.target.checked })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group-alt">
                                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Form Bridge Tags</label>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', padding: '10px 15px', borderRadius: '12px' }}>
                                                        <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#475569' }}>Trainer Eval Block</span>
                                                        <input
                                                            type="checkbox"
                                                            checked={currentQuestion.isTrainerEval}
                                                            onChange={(e) => setCurrentQuestion({ ...currentQuestion, isTrainerEval: e.target.checked })}
                                                        />
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', padding: '10px 15px', borderRadius: '12px' }}>
                                                        <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#475569' }}>Overall Performance Rating</span>
                                                        <input
                                                            type="checkbox"
                                                            checked={currentQuestion.isOverallRating}
                                                            onChange={(e) => setCurrentQuestion({ ...currentQuestion, isOverallRating: e.target.checked })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {(currentQuestion.type === 'radio' || currentQuestion.type === 'checkbox') && (
                                            <div className="builder-area">
                                                <div className="builder-header"><span>Selection Options</span></div>
                                                {(currentQuestion.options || []).map((opt, i) => (
                                                    <div key={i} className="dynamic-row" style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                                        <input
                                                            style={{ flex: 1, padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'white', fontWeight: '600', outline: 'none' }}
                                                            type="text"
                                                            value={opt}
                                                            onChange={(e) => handleListOptionChange('options', i, e.target.value)}
                                                            placeholder={`Option ${i + 1}`}
                                                            required
                                                        />
                                                        <button type="button" onClick={() => removeListOption('options', i)} className="btn-remove-row" style={{ background: '#fff1f2', color: '#ef4444', border: 'none', padding: '10px', borderRadius: '12px', cursor: 'pointer' }}><MdDelete size={20} /></button>
                                                    </div>
                                                ))}
                                                <button type="button" onClick={() => addListOption('options')} className="btn-add-item" style={{ background: 'none', border: 'none', color: '#17944d', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}><MdAdd /> Add Option</button>
                                            </div>
                                        )}

                                        {currentQuestion.type === 'matrix' && (
                                            <div className="matrix-builder-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                                <div className="builder-area">
                                                    <div className="builder-header"><span>Row Questions</span></div>
                                                    {(currentQuestion.rows || []).map((row, i) => (
                                                        <div key={i} className="dynamic-row" style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                                            <input
                                                                style={{ flex: 1, padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'white', fontWeight: '600', outline: 'none' }}
                                                                type="text"
                                                                value={row}
                                                                onChange={(e) => handleListOptionChange('rows', i, e.target.value)}
                                                                placeholder="Rating criteria..."
                                                                required
                                                            />
                                                            <button type="button" onClick={() => removeListOption('rows', i)} className="btn-remove-row" style={{ background: '#fff1f2', color: '#ef4444', border: 'none', padding: '10px', borderRadius: '12px', cursor: 'pointer' }}><MdDelete size={20} /></button>
                                                        </div>
                                                    ))}
                                                    <button type="button" onClick={() => addListOption('rows')} className="btn-add-item" style={{ background: 'none', border: 'none', color: '#17944d', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}><MdAdd /> Add Row</button>
                                                </div>
                                                <div className="builder-area">
                                                    <div className="builder-header"><span>Column Values</span></div>
                                                    {(currentQuestion.columns || []).map((col, i) => (
                                                        <div key={i} className="dynamic-row" style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                                            <input
                                                                style={{ flex: 1, padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'white', fontWeight: '600', outline: 'none' }}
                                                                type="text"
                                                                value={col}
                                                                onChange={(e) => handleListOptionChange('columns', i, e.target.value)}
                                                                placeholder="Rating scale..."
                                                                required
                                                            />
                                                            <button type="button" onClick={() => removeListOption('columns', i)} className="btn-remove-row" style={{ background: '#fff1f2', color: '#ef4444', border: 'none', padding: '10px', borderRadius: '12px', cursor: 'pointer' }}><MdDelete size={20} /></button>
                                                        </div>
                                                    ))}
                                                    <button type="button" onClick={() => addListOption('columns')} className="btn-add-item" style={{ background: 'none', border: 'none', color: '#17944d', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}><MdAdd /> Add Column</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="modal-footer-alt" style={{ padding: '20px 30px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                                        <button type="button" onClick={() => setShowModal(false)} className="btn-ghost" style={{ background: 'none', border: 'none', fontWeight: 700, color: '#64748b', cursor: 'pointer' }}>Cancel</button>
                                        <button type="submit" className="btn-save-main" style={{ background: '#17944d', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '12px', fontWeight: 700, cursor: 'pointer' }}>
                                            {isEditing ? 'Save Changes' : 'Create Question'}
                                        </button>
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
