'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Sidebar from '@/app/components/feedback-admin/Sidebar';
import { MdAdd, MdEdit, MdDelete, MdPerson, MdCheckCircle, MdCancel, MdSearch } from 'react-icons/md';
import './TrainerManager.css';

const API_BASE_URL = 'https://feedback-uc-urbancode.onrender.com';

const TrainerManager = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingTrainer, setEditingTrainer] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        specialization: '',
        active: true
    });
    const router = useRouter();

    const fetchTrainers = async (token) => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/trainers`, {
                headers: { Authorization: `Bearer ${token}` },
                timeout: 30000
            });
            setTrainers(res.data);
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
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/feedback/admin');
            return;
        }
        fetchTrainers(token);
    }, [router]);

    const handleOpenAdd = () => {
        setEditingTrainer(null);
        setFormData({ name: '', specialization: '', active: true });
        setShowModal(true);
    };

    const handleOpenEdit = (trainer) => {
        setEditingTrainer(trainer);
        setFormData({
            name: trainer.name,
            specialization: trainer.specialization || '',
            active: trainer.active
        });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingTrainer(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            if (editingTrainer) {
                await axios.put(`${API_BASE_URL}/api/trainers/${editingTrainer._id}`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                Swal.fire('Updated!', 'Trainer details updated.', 'success');
            } else {
                await axios.post(`${API_BASE_URL}/api/trainers`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                Swal.fire('Added!', 'New trainer added.', 'success');
            }
            fetchTrainers(token);
            handleCloseModal();
        } catch (err) {
            Swal.fire('Error', err.response?.data?.message || 'Action failed', 'error');
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Delete Trainer?',
            text: "This will permanently remove this trainer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const token = localStorage.getItem('token');
                    await axios.delete(`${API_BASE_URL}/api/trainers/${id}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    Swal.fire('Deleted!', 'Trainer has been removed.', 'success');
                    fetchTrainers(token);
                } catch (err) {
                    Swal.fire('Error', 'Delete failed', 'error');
                }
            }
        });
    };

    const toggleStatus = async (trainer) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`${API_BASE_URL}/api/trainers/${trainer._id}`, { active: !trainer.active }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchTrainers(token);
        } catch (err) {
            Swal.fire('Error', 'Failed to update status', 'error');
        }
    };

    const filteredTrainers = trainers.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.specialization?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="admin-layout">
            <Sidebar />
            <main className="admin-content">
                <div className="trainer-manager-container">
                    <header className="page-header flex-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="header-titles">
                            <h1>Trainer Management</h1>
                            <p>Manage courses trainers and placement coordinators</p>
                        </div>
                        <button className="btn-primary" onClick={handleOpenAdd} style={{ background: '#17944d', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                            <MdAdd size={24} />
                            <span>Add New Trainer</span>
                        </button>
                    </header>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon total"><MdPerson size={28} /></div>
                            <div className="stat-info">
                                <h3>Total Trainers</h3>
                                <p>{trainers.length}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon active" style={{ color: '#16a34a' }}><MdCheckCircle size={28} /></div>
                            <div className="stat-info">
                                <h3>Active</h3>
                                <p>{trainers.filter(t => t.active).length}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon inactive" style={{ color: '#ef4444' }}><MdCancel size={28} /></div>
                            <div className="stat-info">
                                <h3>Inactive</h3>
                                <p>{trainers.filter(t => !t.active).length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="trainer-controls" style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                        <div className="search-container" style={{ flex: 1, display: 'flex', alignItems: 'center', background: 'white', padding: '10px 15px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <MdSearch size={22} color="#64748b" />
                            <input
                                type="text"
                                style={{ border: 'none', outline: 'none', marginLeft: '10px', width: '100%' }}
                                placeholder="Search trainers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <table className="trainer-table" style={{ width: '100%', background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                            <thead style={{ background: '#f8fafc' }}>
                                <tr>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Trainer Name</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Specialization</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Status</th>
                                    <th style={{ padding: '15px', textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="4">
                                            <div className="uc-loader-container" style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                <div className="uc-logo-anim" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#17944d', marginBottom: '20px', letterSpacing: '0.1em' }}><span>U</span><span>C</span></div>
                                                <div className="uc-loading-text">Loading Trainers...</div>
                                            </div>
                                        </td>
                                    </tr>
                                ) : filteredTrainers.length === 0 ? (
                                    <tr><td colSpan="4" style={{ padding: '20px', textAlign: 'center' }}>No trainers found.</td></tr>
                                ) : (
                                    filteredTrainers.map(trainer => (
                                        <tr key={trainer._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '15px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <div style={{ width: '40px', height: '40px', background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#17944d' }}>{trainer.name.charAt(0)}</div>
                                                    <span style={{ fontWeight: '600' }}>{trainer.name}</span>
                                                </div>
                                            </td>
                                            <td style={{ padding: '15px' }}>{trainer.specialization || 'General'}</td>
                                            <td style={{ padding: '15px' }}>
                                                <button
                                                    onClick={() => toggleStatus(trainer)}
                                                    style={{ border: 'none', background: trainer.active ? '#dcfce7' : '#fee2e2', color: trainer.active ? '#166534' : '#9f1239', padding: '6px 12px', borderRadius: '100px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', fontWeight: '600' }}
                                                >
                                                    {trainer.active ? <MdCheckCircle /> : <MdCancel />}
                                                    {trainer.active ? 'Active' : 'Inactive'}
                                                </button>
                                            </td>
                                            <td style={{ padding: '15px', textAlign: 'right' }}>
                                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                                    <button onClick={() => handleOpenEdit(trainer)} style={{ background: '#f1f5f9', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer' }}><MdEdit size={18} /></button>
                                                    <button onClick={() => handleDelete(trainer._id)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer' }}><MdDelete size={18} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content premium-editor-modal">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header-premium">
                                <h2>{editingTrainer ? 'Edit Trainer' : 'Add New Trainer'}</h2>
                                <button type="button" className="btn-close-round" onClick={handleCloseModal}>&times;</button>
                            </div>
                            <div className="modal-body-alt">
                                <div className="form-group-premium">
                                    <label className="label-premium">FULL NAME*</label>
                                    <input
                                        className="input-premium"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Enter trainer's full name"
                                    />
                                </div>
                                <div className="form-group-premium" style={{ marginTop: '25px' }}>
                                    <label className="label-premium">SPECIALIZATION (OPTIONAL)</label>
                                    <input
                                        className="input-premium"
                                        type="text"
                                        value={formData.specialization}
                                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                                        placeholder="e.g. MERN Stack, Python"
                                    />
                                </div>
                                <div className="form-section-premium" style={{ marginTop: '25px' }}>
                                    <label className="label-premium">AVAILABILITY</label>
                                    <label className="toggle-wrapper-premium clickable">
                                        <span>ACTIVE TRAINER STATUS</span>
                                        <div className="switch">
                                            <input
                                                type="checkbox"
                                                checked={formData.active}
                                                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                            />
                                            <span className="slider round"></span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer-alt">
                                <button type="button" className="btn-cancel-link" onClick={handleCloseModal}>Cancel</button>
                                <button type="submit" className="btn-save-premium">
                                    {editingTrainer ? 'Save Changes' : 'Create Trainer'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <style jsx>{`
                .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 23, 42, 0.4); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 4000; }
                .premium-editor-modal { background: white; width: 95%; max-width: 750px; border-radius: 32px; overflow: hidden; box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.3); border: 1px solid #f1f5f9; }
                
                .modal-header-premium { padding: 30px 40px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; }
                .modal-header-premium h2 { font-size: 1.3rem; font-weight: 800; color: #1e293b; margin: 0; }
                .btn-close-round { background: #f1f5f9; border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #64748b; font-size: 1.1rem; transition: all 0.2s; }
                .btn-close-round:hover { background: #e2e8f0; color: #1e293b; }

                .modal-body-alt { padding: 40px; }
                .form-group-premium { display: flex; flex-direction: column; gap: 12px; }
                .label-premium { font-size: 0.75rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
                
                .input-premium { width: 100%; padding: 15px 20px; border: 1px solid transparent; border-radius: 16px; font-size: 0.95rem; color: #1e293b; outline: none; transition: all 0.2s; background: #f8fafc; font-weight: 600; }
                .input-premium:focus { background: #fff; border-color: #17944d; box-shadow: 0 0 0 4px rgba(23, 148, 77, 0.1); }

                /* Custom Switch Toggles */
                .toggle-wrapper-premium { display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: 16px; color: #475569; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; }
                .toggle-wrapper-premium.clickable { cursor: pointer; border: 1px solid transparent; }
                .toggle-wrapper-premium.clickable:hover { background: #f1f5f9; border-color: #e2e8f0; }
                
                .switch { position: relative; display: inline-block; width: 44px; height: 24px; }
                .switch input { opacity: 0; width: 0; height: 0; }
                .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #cbd5e1; transition: .4s; }
                .slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; }
                input:checked + .slider { background-color: #17944d; }
                input:checked + .slider:before { transform: translateX(20px); }
                .slider.round { border-radius: 34px; }
                .slider.round:before { border-radius: 50%; }

                .modal-footer-alt { padding: 30px 40px; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; align-items: center; gap: 30px; }
                .btn-cancel-link { background: transparent; border: none; color: #64748b; font-weight: 700; cursor: pointer; font-size: 0.95rem; }
                .btn-save-premium { background: #17944d; color: white; border: none; padding: 15px 40px; border-radius: 16px; font-weight: 700; cursor: pointer; transition: all 0.2s; font-size: 0.95rem; }
                .btn-save-premium:hover { transform: scale(1.02); background: #15803d; }

                /* Loading Animations */
                .uc-loader-container { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; min-height: 200px; width: 100%; }
                
                @keyframes bounce-stagger {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-15px) scale(1.1); }
                }

                @keyframes pulse-soft {
                    0%, 100% { opacity: 0.5; transform: scale(0.98); }
                    50% { opacity: 1; transform: scale(1); }
                }

                .uc-logo-anim span {
                    display: inline-block;
                    animation: bounce-stagger 1.2s infinite ease-in-out;
                }

                .uc-logo-anim span:nth-child(2) {
                    animation-delay: 0.15s;
                }

                .uc-loading-text {
                    animation: pulse-soft 2s infinite ease-in-out;
                    margin-top: 15px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    color: #64748b;
                }
            `}</style>
        </div>
    );
};

export default TrainerManager;
