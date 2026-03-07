'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { MdSearch, MdFilterList, MdVisibility, MdDelete, MdDownload, MdCheckCircle, MdCancel } from 'react-icons/md';
import Swal from 'sweetalert2';
import './Responses.css';

const API_BASE_URL = 'https://feedback-uc-urbancode.onrender.com';

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
            const [respRes, trainRes, questRes] = await Promise.all([
                axios.get(`${API_BASE_URL}/api/responses`, { headers: { Authorization: `Bearer ${token}` } }),
                axios.get(`${API_BASE_URL}/api/trainers`, { headers: { Authorization: `Bearer ${token}` } }),
                axios.get(`${API_BASE_URL}/api/questions`, { headers: { Authorization: `Bearer ${token}` } })
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
                await axios.delete(`${API_BASE_URL}/api/responses/${id}`, {
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

        const allQuestionHeaders = [...currentQuestionTexts, ...Array.from(legacyTexts)];
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
        <div className="responses-manager-container">
            <header className="page-header flex-header">
                <div>
                    <h1>Responses</h1>
                    <p>Manage and view all participants feedback</p>
                </div>
                <button onClick={downloadCSV} className="btn-secondary-admin">
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
                    <div className="stat-icon excellent" style={{ color: '#16a34a' }}><MdCheckCircle size={28} /></div>
                    <div className="stat-info">
                        <h3>Positive Feedback</h3>
                        <p>{responses.filter(r => ['Excellent', 'Good'].includes(getOverallRating(r))).length}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon poor" style={{ color: '#ef4444' }}><MdCancel size={28} /></div>
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
                            <th>Trainer</th>
                            <th>Course</th>
                            <th>Rating</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5">
                                    <div className="uc-loader-container">
                                        <div className="uc-logo-anim"><span>U</span><span>C</span></div>
                                        <div className="uc-loading-text">Loading Responses...</div>
                                    </div>
                                </td>
                            </tr>
                        ) : filteredResponses.length === 0 ? (
                            <tr><td colSpan="5" className="text-center">No responses found.</td></tr>
                        ) : (
                            filteredResponses.map(res => {
                                const rating = getOverallRating(res);
                                return (
                                    <tr key={res._id}>
                                        <td className="date-cell">{new Date(res.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <div className="trainer-cell-info">
                                                {res.trainerEvaluations && res.trainerEvaluations.length > 0 ? (
                                                    res.trainerEvaluations.map((t, i) => (
                                                        <div key={i} className="trainer-item">
                                                            <span className="trainer-name-bold" style={{ fontWeight: '700' }}>{t.trainerName}</span>
                                                            <span className="trainer-type-small" style={{ fontSize: '0.75rem', color: '#64748b', marginLeft: '5px' }}>({t.trainerType || 'Course Training'})</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <span className="trainer-name-bold" style={{ fontWeight: '700' }}>{res.participantDetails?.trainerName || 'N/A'}</span>
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
                                            <div className="action-group">
                                                <button className="btn-icon view" onClick={() => setSelectedResponse(res)}>
                                                    <MdVisibility size={18} />
                                                </button>
                                                <button className="btn-icon delete" onClick={() => handleDelete(res._id)}>
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

            {selectedResponse && (
                <div className="modal-overlay">
                    <div className="modal-content admin-modal">
                        <div className="modal-header">
                            <h2>Feedback Detail</h2>
                            <button onClick={() => setSelectedResponse(null)} className="close-btn">&times;</button>
                        </div>
                        <div className="modal-body-alt">
                            <section className="response-section">
                                <h3>General Info</h3>
                                <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div className="info-item"><strong>Course:</strong> <span>{selectedResponse.participantDetails?.courseName || 'N/A'}</span></div>
                                    <div className="info-item"><strong>Batch:</strong> <span>{selectedResponse.participantDetails?.batch || 'N/A'}</span></div>
                                </div>
                            </section>

                            <section className="response-section">
                                <h3>Report</h3>
                                <div className="sections-display">
                                    {selectedResponse.trainerEvaluations?.map((evalItem, idx) => (
                                        <div key={idx} className="response-group-block">
                                            <h4 className="response-section-title">{evalItem.trainerName} ({evalItem.trainerType})</h4>
                                            <div className="matrix-display" style={{ background: '#f8fafc', padding: '15px', borderRadius: '12px' }}>
                                                {evalItem.ratings && Object.entries(evalItem.ratings).map(([criteria, rating]) => (
                                                    <div key={criteria} style={{ marginBottom: '8px' }}>
                                                        <strong>{criteria}:</strong> {rating}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {(() => {
                                        const grouped = (selectedResponse.dynamicAnswers || []).reduce((acc, ans) => {
                                            const currentQ = questions.find(q => q._id === ans.questionId);
                                            const section = currentQ ? currentQ.section : (ans.section || 'Other');
                                            if (!acc[section]) acc[section] = [];
                                            acc[section].push({ ...ans, section, questionText: currentQ?.questionText || ans.questionText });
                                            return acc;
                                        }, {});

                                        return Object.keys(grouped).map(section => (
                                            <div key={section} className="response-group-block" style={{ marginTop: '20px' }}>
                                                <h4 className="response-section-title" style={{ borderBottom: '2px solid #17944d', paddingBottom: '5px', marginBottom: '15px' }}>{cleanSectionTitle(section)}</h4>
                                                {grouped[section].map((ans, idx) => (
                                                    <div key={idx} style={{ marginBottom: '15px' }}>
                                                        <label style={{ fontWeight: '600', display: 'block' }}>{ans.questionText}</label>
                                                        <div style={{ color: '#475569' }}>{renderAnswer(ans)}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        ));
                                    })()}
                                </div>
                            </section>
                        </div>
                        <div className="modal-footer-alt" style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', padding: '20px' }}>
                            <button onClick={() => setSelectedResponse(null)} className="btn-secondary-admin">Close</button>
                            <button onClick={() => window.print()} className="btn-primary-admin"><MdDownload /> Print PDF</button>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                .badge { padding: 4px 12px; border-radius: 100px; font-size: 0.85rem; font-weight: 600; }
                .rating-excellent { background: #dcfce7; color: #166534; }
                .rating-good { background: #f0fdf4; color: #15803d; }
                .rating-average { background: #fefce8; color: #854d0e; }
                .rating-bad { background: #fff1f2; color: #9f1239; }
                .rating-very-bad { background: #fee2e2; color: #b91c1c; }
                .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 3000; }
                .modal-content { background: white; width: 90%; max-width: 800px; max-height: 90vh; overflow-y: auto; border-radius: 20px; }
                .modal-header { padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
                .close-btn { background: none; border: none; font-size: 2rem; cursor: pointer; }
                .modal-body-alt { padding: 20px; }
            `}</style>
        </div>
    );
};

export default Responses;
