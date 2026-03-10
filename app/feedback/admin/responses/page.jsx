'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Sidebar from '@/app/components/feedback-admin/Sidebar';
import { MdSearch, MdFilterList, MdVisibility, MdDelete, MdDownload, MdCheckCircle, MdCancel } from 'react-icons/md';
import Swal from 'sweetalert2';
import './Responses.css';

const API_BASE_URL = process.env.NEXT_PUBLIC_FEEDBACK_API_URL || 'https://urbancode-nextjs.onrender.com';

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
        let isMounted = true;
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/feedback/admin');
            return;
        }

        const initFetch = async () => {
            // Tiny delay to ensure hydration is stable and avoid Turbopack/Next.js hydration aborts
            await new Promise(resolve => setTimeout(resolve, 100));
            if (isMounted) fetchData(token, isMounted);
        };

        initFetch();

        return () => { isMounted = false; };
    }, [router]);

    const fetchData = async (token, isMounted = true) => {
        setLoading(true);
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` },
                timeout: 30000 // 30 second timeout for waking up free-tier backend
            };

            // Sequential fetch instead of Promise.all to prevent "Request aborted" on slow Render free tier
            const respRes = await axios.get(`${API_BASE_URL}/api/responses`, config);
            if (!isMounted) return;

            const trainRes = await axios.get(`${API_BASE_URL}/api/trainers`, config);
            if (!isMounted) return;

            const questRes = await axios.get(`${API_BASE_URL}/api/questions`, config);
            if (!isMounted) return;

            setResponses(respRes.data);
            setFilteredResponses(respRes.data);
            setTrainers(trainRes.data);
            setQuestions(questRes.data);
        } catch (err) {
            if (axios.isCancel(err) || err.code === 'ECONNABORTED' || err.message?.includes('aborted')) {
                console.log('Fetch aborted or timed out, retrying if mounted...');
                return;
            }
            console.error(err);
            if (err.response?.status === 401) {
                localStorage.removeItem('token');
                router.push('/feedback/admin');
            }
        } finally {
            if (isMounted) setLoading(false);
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
                return <span className="qa-value-bold">{ans.value?.toString() || 'N/A'}</span>;
            }
            return (
                <div className="ratings-grid-premium">
                    {Object.entries(ans.value).map(([row, col]) => (
                        <div key={row} className="rating-item-box">
                            <span className="rating-criteria">{row}:</span>
                            <span className="rating-val">{col}</span>
                        </div>
                    ))}
                </div>
            );
        }
        if (Array.isArray(ans.value)) {
            return <span className="qa-value-bold">{ans.value.join(', ')}</span>;
        }
        return <span className="qa-value-bold">{ans.value}</span>;
    };

    const cleanSectionTitle = (title) => {
        return (title || '').replace(/^\d+[\.\-\s]*/, '').replace(/^SECTION\s*\d+[\.\-\s]*/i, '').trim();
    };

    return (
        <div className="admin-layout">
            <Sidebar />
            <main className="admin-content">
                <div className="responses-manager-container">
                    <header className="page-header flex-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h1>Responses</h1>
                            <p>Manage and view all participants feedback</p>
                        </div>
                        <button onClick={downloadCSV} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', border: '1px solid #e2e8f0', background: 'white', fontWeight: '600', cursor: 'pointer' }}>
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
                                            <div className="uc-loader-container" style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                <div className="uc-logo-anim" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#17944d' }}><span>U</span><span>C</span></div>
                                                <div className="uc-loading-text" style={{ color: '#64748b' }}>Loading Responses...</div>
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
                                                    <div className="action-group" style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                                        <button className="btn-icon view" onClick={() => setSelectedResponse(res)} style={{ background: '#f1f5f9', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer' }}>
                                                            <MdVisibility size={18} />
                                                        </button>
                                                        <button className="btn-icon delete" onClick={() => handleDelete(res._id)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer' }}>
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
                    <div className="modal-overlay">
                        <div className="modal-content admin-modal premium-modal">
                            <div className="modal-header">
                                <h2 className="modal-title">Anonymous Feedback Detail</h2>
                                <button onClick={() => setSelectedResponse(null)} className="close-btn-round">&times;</button>
                            </div>
                            <div className="modal-body-premium">
                                {/* General Info Section */}
                                <section className="response-section-premium">
                                    <h3 className="section-label">General Info</h3>
                                    <div className="info-card-grid">
                                        <div className="info-pill">
                                            <span className="pill-label">COURSE</span>
                                            <span className="pill-value">{selectedResponse.participantDetails?.courseName || 'N/A'}</span>
                                        </div>
                                        <div className="info-pill">
                                            <span className="pill-label">BATCH</span>
                                            <span className="pill-value">{selectedResponse.participantDetails?.batch || 'N/A'}</span>
                                        </div>
                                    </div>
                                </section>

                                {/* Performance Report Section */}
                                <section className="response-section-premium">
                                    <h3 className="section-label">Performance Report</h3>

                                    {/* Trainer Feedback Sub-block */}
                                    <div className="feedback-sub-card">
                                        <div className="card-accent-header">
                                            <span className="accent-bar"></span>
                                            <h4>: Trainer Feedback</h4>
                                        </div>

                                        {selectedResponse.trainerEvaluations?.map((evalItem, idx) => (
                                            <div key={idx} className="trainer-eval-block">
                                                <div className="trainer-info-row">
                                                    <span className="trainer-name-label">{evalItem.trainerName}</span>
                                                    <span className="trainer-type-tag">{evalItem.trainerType}</span>
                                                </div>
                                                <div className="ratings-grid-premium">
                                                    {evalItem.ratings && Object.entries(evalItem.ratings).map(([criteria, rating]) => (
                                                        <div key={criteria} className="rating-item-box">
                                                            <span className="rating-criteria">{criteria}:</span>
                                                            <span className="rating-val">{rating}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {(() => {
                                        // Improved strict deduplication and trainer-filtering logic
                                        const seenQuestions = new Set();
                                        const grouped = (selectedResponse.dynamicAnswers || [])
                                            .filter(ans => {
                                                const currentQ = questions.find(q => q._id === ans.questionId);
                                                const sectionName = (currentQ ? currentQ.section : (ans.section || '')).toLowerCase();
                                                const qText = (ans.questionText || '').toLowerCase();

                                                // Strictly exclude trainer-related and duplicates
                                                if (sectionName.includes('trainer') || qText.includes('trainer')) return false;

                                                // Filter out questions already in the source (like overall)
                                                if (seenQuestions.has(qText)) return false;
                                                seenQuestions.add(qText);
                                                return true;
                                            })
                                            .reduce((acc, ans) => {
                                                const currentQ = questions.find(q => q._id === ans.questionId);
                                                const section = currentQ ? currentQ.section : (ans.section || 'Other');
                                                if (!acc[section]) acc[section] = [];
                                                acc[section].push({ ...ans, section, questionText: currentQ?.questionText || ans.questionText });
                                                return acc;
                                            }, {});

                                        return Object.keys(grouped).map(section => (
                                            <div key={section} className="feedback-sub-card dynamic-sub-card">
                                                <div className="card-accent-header">
                                                    <span className="accent-bar"></span>
                                                    <h4>: {cleanSectionTitle(section)}</h4>
                                                </div>
                                                <div className="dynamic-content-grid">
                                                    {grouped[section].map((ans, idx) => (
                                                        <div key={idx} className="dynamic-qa-item">
                                                            <label className="qa-label-caps">{ans.questionText?.toUpperCase()}</label>
                                                            <div className="qa-value-clean">{renderAnswer(ans)}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ));
                                    })()}
                                </section>
                            </div>
                            <div className="modal-footer-premium">
                                <button onClick={() => setSelectedResponse(null)} className="btn-close-text">Close</button>
                                <button onClick={() => window.print()} className="btn-print-premium">
                                    <MdDownload size={18} />
                                    <span>Print PDF</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
};

export default Responses;
