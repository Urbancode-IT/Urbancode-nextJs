'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { MdAdd, MdEdit, MdDelete, MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import './QuestionManager.css';

const API_BASE_URL = 'https://feedback-uc-urbancode.onrender.com';

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
                await axios.put(`${API_BASE_URL}/api/questions/${currentQuestion._id}`, questionData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            } else {
                await axios.post(`${API_BASE_URL}/api/questions`, questionData, {
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
        <div className="question-manager-container">
            <header className="page-header flex-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>Question Manager</h1>
                    <p>Customize your backend-driven feedback form</p>
                </div>
                <button onClick={() => openAdd()} className="btn-primary-admin">
                    <MdAdd size={24} />
                    Add New Question
                </button>
            </header>

            {loading ? (
                <div className="uc-loader-container">
                    <div className="uc-logo-anim"><span>U</span><span>C</span></div>
                    <div className="uc-loading-text">Loading Questions...</div>
                </div>
            ) : (
                <div className="sections-container">
                    {sortedSectionKeys.map(section => (
                        <div key={section} className="section-group" style={{ marginBottom: '40px' }}>
                            <div className="section-group-header" style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '15px', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h2 style={{ fontSize: '1.4rem', color: '#0f172a' }}>{cleanSectionTitle(section)}</h2>
                                <button onClick={() => openAdd(section)} className="add-in-section" style={{ background: '#f1f5f9', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', color: '#17944d', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '600' }}>
                                    <MdAdd size={20} /> Add Question
                                </button>
                            </div>
                            <div className="questions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
                                {groupedBySection[section].sort((a, b) => a.order - b.order).map((q, idx, arr) => (
                                    <div key={q._id} className="question-item-card" style={{ background: 'white', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
                                        <div className="q-card-top" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                            <span style={{ fontSize: '0.8rem', background: '#f1f5f9', padding: '4px 10px', borderRadius: '100px', fontWeight: '700', color: '#64748b' }}>{q.type}</span>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <button onClick={() => moveOrder(q._id, -1)} disabled={idx === 0} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><MdArrowUpward /></button>
                                                <button onClick={() => moveOrder(q._id, 1)} disabled={idx === arr.length - 1} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><MdArrowDownward /></button>
                                            </div>
                                        </div>
                                        <h4 style={{ fontSize: '1rem', color: '#1e293b', marginBottom: '20px', fontWeight: '600' }}>{q.questionText}</h4>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                            <button onClick={() => openEdit(q)} style={{ padding: '8px', borderRadius: '8px', border: 'none', background: '#f1f5f9', cursor: 'pointer' }}><MdEdit size={18} /></button>
                                            <button onClick={() => handleDeleteClick(q._id)} style={{ padding: '8px', borderRadius: '8px', border: 'none', background: '#fee2e2', color: '#ef4444', cursor: 'pointer' }}><MdDelete size={18} /></button>
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
                    <div className="modal-content admin-modal">
                        <form onSubmit={handleSave}>
                            <div className="modal-header">
                                <h2>{isEditing ? 'Edit Question' : 'Create Question'}</h2>
                                <button type="button" onClick={() => setShowModal(false)} className="close-btn">&times;</button>
                            </div>
                            <div className="modal-body-alt">
                                <div className="form-group">
                                    <label>Question Text</label>
                                    <textarea
                                        className="preview-input"
                                        value={currentQuestion.questionText}
                                        onChange={(e) => setCurrentQuestion({ ...currentQuestion, questionText: e.target.value })}
                                        required
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
                                    <div className="form-group">
                                        <label>Section</label>
                                        <input
                                            className="preview-input"
                                            value={currentQuestion.section}
                                            onChange={(e) => setCurrentQuestion({ ...currentQuestion, section: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Type</label>
                                        <select
                                            className="preview-input"
                                            value={currentQuestion.type}
                                            onChange={(e) => setCurrentQuestion({ ...currentQuestion, type: e.target.value })}
                                        >
                                            <option value="text">Text</option>
                                            <option value="textarea">Textarea</option>
                                            <option value="radio">Radio</option>
                                            <option value="checkbox">Checkbox</option>
                                            <option value="matrix">Matrix</option>
                                            <option value="trainer-select">Trainer Select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer-alt">
                                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary-admin">Cancel</button>
                                <button type="submit" className="btn-primary-admin">Save Question</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <style jsx>{`
                .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 3000; }
                .modal-content { background: white; width: 90%; max-width: 600px; border-radius: 20px; overflow: hidden; }
                .modal-header { padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
                .modal-body-alt { padding: 20px; }
                .modal-footer-alt { padding: 20px; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 10px; }
                .preview-input { width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 10px; outline: none; }
                .close-btn { background: none; border: none; font-size: 2rem; cursor: pointer; }
            `}</style>
        </div>
    );
};

export default QuestionManager;
