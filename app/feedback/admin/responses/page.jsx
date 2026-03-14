'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AdminHeader from '@/app/components/feedback-admin/AdminHeader';
import { MdSearch, MdFilterList, MdVisibility, MdDelete, MdDownload, MdCheckCircle, MdCancel } from 'react-icons/md';
import Swal from 'sweetalert2';
import './Responses.css';

const API_BASE_URL = process.env.NEXT_PUBLIC_FEEDBACK_API_URL || '';
const API_PATH = API_BASE_URL === '' ? '/api/feedback' : `${API_BASE_URL}/api/feedback`;

const Responses = () => {
    const [responses, setResponses] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [filteredResponses, setFilteredResponses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterTrainer, setFilterTrainer] = useState('');
    const [selectedResponse, setSelectedResponse] = useState(null);
    const [questions, setQuestions] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/feedback/admin');
            return;
        }
        fetchData(token);
    }, [router]);

    const fetchData = async (token) => {
        setLoading(true);
        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const [respRes, trainRes, questRes] = await Promise.all([
                axios.get(`${API_PATH}/responses`, config),
                axios.get(`${API_PATH}/trainers`, config),
                axios.get(`${API_PATH}/questions`, config)
            ]);

            setResponses(respRes.data);
            setFilteredResponses(respRes.data);
            setTrainers(trainRes.data);
            setQuestions(questRes.data);
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

    useEffect(() => {
        let temp = [...responses];
        const term = searchTerm.toLowerCase();

        if (searchTerm) {
            temp = temp.filter(r => {
                const nameInDetails = r.participantDetails?.trainerName?.toLowerCase().includes(term);
                const nameInEvals = r.trainerEvaluations?.some(t => t.trainerName?.toLowerCase().includes(term));
                return nameInDetails || nameInEvals;
            });
        }

        if (filterTrainer) {
            temp = temp.filter(r => {
                const matchInDetails = r.participantDetails?.trainerName === filterTrainer;
                const matchInEvals = r.trainerEvaluations?.some(t => t.trainerName === filterTrainer);
                return matchInDetails || matchInEvals;
            });
        }
        setFilteredResponses(temp);
    }, [searchTerm, filterTrainer, responses]);

    const getOverallRating = (res) => {
        const markedAns = res.dynamicAnswers?.find(a => {
            const currentQ = questions.find(q => q._id === a.questionId);
            return currentQ?.isOverallRating;
        });
        if (markedAns) return markedAns.value || 'N/A';

        const ans = res.dynamicAnswers?.find(a => {
            const txt = a.questionText?.toLowerCase();
            return txt?.includes('overall') || txt?.includes('experience') || txt?.includes('rating') || a.section?.includes('SECTION 2');
        });
        return ans?.value || 'N/A';
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Delete Response?',
            text: "This action cannot be undone.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                const token = localStorage.getItem('token');
                await axios.delete(`${API_PATH}/responses/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setResponses(responses.filter(r => r._id !== id));
                Swal.fire('Deleted!', 'Response has been removed.', 'success');
            } catch (err) {
                Swal.fire('Error!', 'Failed to delete response.', 'error');
            }
        }
    };

    const downloadCSV = () => {
        const escapeCSV = (val) => {
            if (val === null || val === undefined) return '""';
            let str = val.toString();
            str = str.replace(/"/g, '""');
            return `"${str}"`;
        };

        const currentQuestionTexts = [...questions].sort((a, b) => (a.order || 0) - (b.order || 0)).map(q => q.questionText);
        const legacyTexts = new Set();
        filteredResponses.forEach(r => {
            r.dynamicAnswers?.forEach(ans => {
                if (ans.questionText && !currentQuestionTexts.includes(ans.questionText)) {
                    legacyTexts.add(ans.questionText);
                }
            });
        });

        const forbiddenKeys = ['name', 'email', 'participant'];
        const allQuestionHeaders = [...currentQuestionTexts, ...Array.from(legacyTexts)]
            .filter(text => {
                const lower = text.toLowerCase();
                return !(forbiddenKeys.some(key => lower.includes(key)) && text.length < 40);
            })
            .sort((a, b) => {
                const aLow = a.toLowerCase();
                const bLow = b.toLowerCase();
                const aIsComment = aLow.includes('comment') || aLow.includes('suggestion');
                const bIsComment = bLow.includes('comment') || bLow.includes('suggestion');
                if (aIsComment && !bIsComment) return 1;
                if (!aIsComment && bIsComment) return -1;
                return 0;
            });

        const baseHeaders = ['Date', 'Main Trainer', 'Course', 'Batch', 'All Trainer Evaluations'];
        const headers = [...baseHeaders, ...allQuestionHeaders];

        const csvContent = [
            headers.map(h => escapeCSV(h)).join(','),
            ...filteredResponses.map(r => {
                const trainerEvalStr = (r.trainerEvaluations || []).map(t => {
                    const ratings = Object.entries(t.ratings || {})
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(' | ');
                    return `[${t.trainerType || 'Eval'}] ${t.trainerName}: ${ratings}`;
                }).join('\n');

                const row = [
                    escapeCSV(new Date(r.createdAt).toLocaleDateString()),
                    escapeCSV(r.participantDetails?.trainerName || 'N/A'),
                    escapeCSV(r.participantDetails?.courseName || 'N/A'),
                    escapeCSV(r.participantDetails?.batch || 'N/A'),
                    escapeCSV(trainerEvalStr)
                ];

                allQuestionHeaders.forEach(headerText => {
                    const ans = r.dynamicAnswers?.find(a => a.questionText === headerText);
                    if (!ans) {
                        row.push(escapeCSV(''));
                    } else {
                        let val = ans.value;
                        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                            val = Object.entries(val).map(([k, v]) => `${k}: ${v}`).join('; ');
                        } else if (Array.isArray(val)) {
                            val = val.join(', ');
                        }
                        row.push(escapeCSV(val));
                    }
                });
                return row.join(',');
            })
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `UC_Feedback_Report_${new Date().toISOString().split('T')[0]}.csv`);
        link.click();
    };

    const renderAnswer = (ans) => {
        const type = ans.type;
        if (type === 'matrix') {
            if (!ans.value || typeof ans.value !== 'object' || Array.isArray(ans.value)) {
                return <span>{ans.value?.toString() || 'N/A'}</span>;
            }
            return (
                <div className="matrix-display">
                    {Object.entries(ans.value).map(([row, col]) => (
                        <div key={row} className="matrix-row-val">
                            <strong>{row}:</strong> {col}
                        </div>
                    ))}
                </div>
            );
        }
        if (Array.isArray(ans.value)) {
            return <span>{ans.value.join(', ')}</span>;
        }
        return <span>{ans.value}</span>;
    };

    const cleanSectionTitle = (title) => {
        return (title || '').replace(/^\d+[\.\-\s]*/, '').replace(/^SECTION\s*\d+[\.\-\s]*/i, '').trim();
    };

    return (
        <div className="admin-layout">
            <AdminHeader />
            <main className="admin-content">
                <div className="responses-manager-container">
                    <header className="page-header flex-header">
                        <div>
                            <h1>Responses</h1>
                            <p>Manage and view all participants feedback</p>
                        </div>
                        <button onClick={downloadCSV} className="btn-secondary">
                            <MdDownload size={20} />
                            <span>Export CSV</span>
                        </button>
                    </header>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon total"><MdVisibility size={28} /></div>
                            <div className="stat-info">
                                <h3>Total Responses</h3>
                                <p>{responses.length}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon excellent"><MdCheckCircle size={28} /></div>
                            <div className="stat-info">
                                <h3>Positive Feedback</h3>
                                <p>{responses.filter(r => ['Excellent', 'Good'].includes(getOverallRating(r))).length}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon poor"><MdCancel size={28} /></div>
                            <div className="stat-info">
                                <h3>Critical Feedback</h3>
                                <p>{responses.filter(r => ['Bad', 'Very Bad'].includes(getOverallRating(r))).length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="table-controls">
                        <div className="search-container">
                            <MdSearch size={22} />
                            <input
                                type="text"
                                placeholder="Search by trainer name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="filter-box">
                            <MdFilterList size={20} />
                            <select onChange={(e) => setFilterTrainer(e.target.value)} value={filterTrainer}>
                                <option value="">All Trainers</option>
                                {trainers.map(t => (
                                    <option key={t._id} value={t.name}>{t.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Student</th>
                                    <th>Trainer</th>
                                    <th>Course</th>
                                    <th>Rating</th>
                                    <th className="text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="6">
                                            <div className="uc-loader-container" style={{ minHeight: '150px' }}>
                                                <div className="uc-logo-anim" style={{ fontSize: '2.5rem' }}><span>U</span><span>C</span></div>
                                                <div className="uc-loading-text">Loading Responses...</div>
                                            </div>
                                        </td>
                                    </tr>
                                ) : filteredResponses.length === 0 ? (
                                    <tr><td colSpan="6" className="text-center">No responses found.</td></tr>
                                ) : (
                                    filteredResponses.map(res => {
                                        const rating = getOverallRating(res);
                                        return (
                                            <tr key={res._id}>
                                                <td className="date-cell">{new Date(res.createdAt).toLocaleDateString()}</td>
                                                <td>
                                                    <div className="student-cell-info">
                                                        <div className="trainer-name-bold">{res.participantDetails?.name || 'N/A'}</div>
                                                        <div className="trainer-type-small">{res.participantDetails?.email || 'N/A'}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="trainer-cell-info">
                                                        {res.trainerEvaluations && res.trainerEvaluations.length > 0 ? (
                                                            res.trainerEvaluations.map((t, i) => (
                                                                <div key={i} className="trainer-item">
                                                                    <span className="trainer-name-bold">{t.trainerName}</span>
                                                                    <span className="trainer-type-small">({t.trainerType || 'Course Training'})</span>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <span className="trainer-name-bold">{res.participantDetails?.trainerName || 'N/A'}</span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="course-cell">{res.participantDetails?.courseName || 'N/A'}</td>
                                                <td>
                                                    <span className={`badge rating-${(rating || 'N/A').toString().toLowerCase().replace(/\s+/g, '-')}`}>
                                                        {rating}
                                                    </span>
                                                </td>
                                                <td className="text-right">
                                                    <div className="action-group" style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                                        <button className="btn-icon view" onClick={() => setSelectedResponse(res)} title="View">
                                                            <MdVisibility size={18} />
                                                        </button>
                                                        <button className="btn-icon delete" onClick={() => handleDelete(res._id)} title="Delete">
                                                            <MdDelete size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {selectedResponse && (
                    <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
                        <div className="modal-content admin-modal" style={{ background: 'white', width: '90%', maxWidth: '800px', borderRadius: '12px', overflow: 'hidden', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                            <div className="modal-header" style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="print-header-logo">
                                    <h2 style={{ color: '#17944d', margin: 0 }}>Feedback <span style={{ color: '#0f172a' }}>UC</span></h2>
                                </div>
                                <h2 className="modal-title-text">Feedback Detail</h2>
                                <button onClick={() => setSelectedResponse(null)} className="close-btn" style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
                            </div>
                            <div className="modal-body-alt" style={{ padding: '2rem', overflowY: 'auto' }}>
                                <section className="response-section" style={{ marginBottom: '2rem' }}>
                                    <h3>Student Info</h3>
                                    <div className="info-grid">
                                        <div className="info-item no-print"><span>Full Name</span><span>{selectedResponse.participantDetails?.name || 'N/A'}</span></div>
                                        <div className="info-item no-print"><span>Email Address</span><span>{selectedResponse.participantDetails?.email || 'N/A'}</span></div>
                                        <div className="info-item"><span>Course</span><span>{selectedResponse.participantDetails?.courseName || 'N/A'}</span></div>
                                        <div className="info-item"><span>Batch</span><span>{selectedResponse.participantDetails?.batch || 'N/A'}</span></div>
                                    </div>
                                </section>

                                <section className="response-section">
                                    <h3>Performance Report</h3>
                                    <div className="sections-display">
                                        {selectedResponse.trainerEvaluations && selectedResponse.trainerEvaluations.length > 0 && (
                                            <div className="response-group-block">
                                                <h4 className="response-section-title">Trainer Feedback</h4>
                                                <div className="answers-list">
                                                    {selectedResponse.trainerEvaluations.map((evalItem, idx) => (
                                                        <div key={idx} className="trainer-response-block">
                                                            <div className="trainer-label-display">
                                                                {evalItem.trainerName}
                                                                <span className="trainer-type-suffix">{evalItem.trainerType}</span>
                                                            </div>
                                                            <div className="matrix-display">
                                                                {evalItem.ratings && Object.entries(evalItem.ratings).map(([criteria, rating]) => (
                                                                    <div key={criteria} className="matrix-row-val">
                                                                        <strong>{criteria}:</strong> {rating}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {(() => {
                                            const grouped = (selectedResponse.dynamicAnswers || []).reduce((acc, ans) => {
                                                const currentQ = questions.find(q => q._id === ans.questionId);

                                                // FILTER REPEATS: If the question text matches something already in Participant Info, skip it
                                                const txt = (currentQ?.questionText || ans.questionText || '').toLowerCase();
                                                const keywordsToFilter = ['name', 'email', 'course', 'batch', 'participant'];
                                                if (keywordsToFilter.some(k => txt.includes(k)) && txt.length < 30) {
                                                    return acc;
                                                }

                                                const section = currentQ ? currentQ.section : (ans.section || 'Other');
                                                const text = currentQ ? currentQ.questionText : (ans.questionText || 'Deleted Question');

                                                if (!acc[section]) acc[section] = [];
                                                acc[section].push({ ...ans, section, questionText: text, order: currentQ?.order || 999 });
                                                return acc;
                                            }, {});

                                            const sortedSectionKeys = Object.keys(grouped).sort((a, b) => {
                                                const aL = a.toLowerCase();
                                                const bL = b.toLowerCase();
                                                const aIsC = aL.includes('comment') || aL.includes('suggestion');
                                                const bIsC = bL.includes('comment') || bL.includes('suggestion');
                                                if (aIsC && !bIsC) return 1;
                                                if (!aIsC && bIsC) return -1;

                                                const minA = Math.min(...grouped[a].map(q => q.order));
                                                const minB = Math.min(...grouped[b].map(q => q.order));
                                                return minA - minB;
                                            });

                                            return sortedSectionKeys.map(section => (
                                                <div key={section} className="response-group-block">
                                                    <h4 className="response-section-title">{cleanSectionTitle(section)}</h4>
                                                    <div className="answers-list">
                                                        {grouped[section].sort((a,b) => (a.order || 999) - (b.order || 999)).map((ans, idx) => (
                                                            <div key={idx} className="answer-item">
                                                                <label>{ans.questionText}</label>
                                                                <div className="answer-content">
                                                                    {renderAnswer(ans)}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ));
                                        })()}
                                    </div>
                                </section>
                            </div>
                            <div className="modal-footer-alt" style={{ padding: '1.5rem', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                                <button onClick={() => setSelectedResponse(null)} className="btn-ghost" style={{ background: 'none', border: 'none', color: '#64748b', fontWeight: 'bold', cursor: 'pointer' }}>Close</button>
                                <button onClick={() => window.print()} className="btn-submit-main" style={{ background: '#17944d', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}><MdDownload /> Print PDF</button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Responses;
