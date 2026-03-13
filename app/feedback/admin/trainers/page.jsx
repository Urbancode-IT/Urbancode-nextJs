'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import AdminHeader from '@/app/components/feedback-admin/AdminHeader';
import { MdAdd, MdEdit, MdDelete, MdPerson, MdCheckCircle, MdCancel, MdSearch } from 'react-icons/md';
import './TrainerManager.css';

const API_BASE_URL = process.env.NEXT_PUBLIC_FEEDBACK_API_URL || '';
const API_PATH = API_BASE_URL === '' ? '/api/feedback' : `${API_BASE_URL}/api/feedback`;

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

    const fetchTrainers = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/feedback/admin');
                return;
            }
            const res = await axios.get(`${API_PATH}/trainers`, {
                headers: { Authorization: `Bearer ${token}` }
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
        fetchTrainers();
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
                await axios.put(`${API_PATH}/trainers/${editingTrainer._id}`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                Swal.fire('Updated!', 'Trainer details updated.', 'success');
            } else {
                await axios.post(`${API_PATH}/trainers`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                Swal.fire('Added!', 'New trainer added.', 'success');
            }
            fetchTrainers();
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
                    await axios.delete(`${API_PATH}/trainers/${id}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    Swal.fire('Deleted!', 'Trainer has been removed.', 'success');
                    fetchTrainers();
                } catch (err) {
                    Swal.fire('Error', 'Delete failed', 'error');
                }
            }
        });
    };

    const toggleStatus = async (trainer) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`${API_PATH}/trainers/${trainer._id}`, { active: !trainer.active }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchTrainers();
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
            <AdminHeader />
            <main className="admin-content">
                <div className="trainer-manager-container">
                    <header className="page-header flex-header">
                        <div className="header-titles">
                            <h1>Trainer Management</h1>
                            <p>Manage courses trainers and placement coordinators</p>
                        </div>
                        <button className="btn-primary" onClick={handleOpenAdd}>
                            <MdAdd size={24} />
                            <span>Add New Trainer</span>
                        </button>
                    </header>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon total">
                                <MdPerson size={28} />
                            </div>
                            <div className="stat-info">
                                <h3>Total Trainers</h3>
                                <p>{trainers.length}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon active">
                                <MdCheckCircle size={28} />
                            </div>
                            <div className="stat-info">
                                <h3>Active</h3>
                                <p>{trainers.filter(t => t.active).length}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon inactive">
                                <MdCancel size={28} />
                            </div>
                            <div className="stat-info">
                                <h3>Inactive</h3>
                                <p>{trainers.filter(t => !t.active).length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="trainer-controls">
                        <div className="search-container">
                            <MdSearch className="search-icon" size={22} />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search specialization..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="filter-dropdown-container">
                            <select
                                className="trainer-select-dropdown"
                                onChange={(e) => setSearchTerm(e.target.value)}
                                value={searchTerm}
                            >
                                <option value="">-- All Trainers (Dropdown) --</option>
                                {trainers.map(t => (
                                    <option key={t._id} value={t.name}>{t.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <table className="trainer-table">
                            <thead>
                                <tr>
                                    <th>Trainer Details</th>
                                    <th>Specialization</th>
                                    <th>Status</th>
                                    <th>Added On</th>
                                    <th className="text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="5">
                                            <div className="uc-loader-container" style={{ minHeight: '150px' }}>
                                                <div className="uc-logo-anim" style={{ fontSize: '2.5rem' }}><span>U</span><span>C</span></div>
                                                <div className="uc-loading-text">Loading Trainers...</div>
                                            </div>
                                        </td>
                                    </tr>
                                ) : filteredTrainers.length === 0 ? (
                                    <tr><td colSpan="5" className="text-center">No trainers found.</td></tr>
                                ) : (
                                    filteredTrainers.map(trainer => (
                                        <tr key={trainer._id}>
                                            <td>
                                                <div className="trainer-profile-cell">
                                                    <div className="avatar-circle">
                                                        {trainer.name.charAt(0)}
                                                    </div>
                                                    <div className="trainer-main-info">
                                                        <span className="trainer-name-text">{trainer.name}</span>
                                                        <span className="trainer-sub-text">Trainer</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="spec-badge">{trainer.specialization || 'General'}</span>
                                            </td>
                                            <td>
                                                <button
                                                    className={`status-pill ${trainer.active ? 'active' : 'inactive'}`}
                                                    onClick={() => toggleStatus(trainer)}
                                                >
                                                    {trainer.active ? <MdCheckCircle /> : <MdCancel />}
                                                    {trainer.active ? 'Active' : 'Inactive'}
                                                </button>
                                            </td>
                                            <td>
                                                <span className="trainer-sub-text">
                                                    {new Date(trainer.createdAt).toLocaleDateString()}
                                                </span>
                                            </td>
                                            <td className="text-right">
                                                <div className="action-group">
                                                    <button className="btn-icon edit" title="Edit" onClick={() => handleOpenEdit(trainer)}>
                                                        <MdEdit size={18} />
                                                    </button>
                                                    <button className="btn-icon delete" title="Delete" onClick={() => handleDelete(trainer._id)}>
                                                        <MdDelete size={18} />
                                                    </button>
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
                <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4000 }}>
                    <div className="modal-content admin-modal" style={{ background: 'white', width: '95%', maxWidth: '600px', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.3)' }}>
                        <div className="modal-header" style={{ padding: '20px 30px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1e293b' }}>{editingTrainer ? 'Edit Trainer' : 'Add New Trainer'}</h2>
                            <button className="close-btn" onClick={handleCloseModal} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body-alt" style={{ padding: '2rem' }}>
                                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                                    <div className="form-group-alt">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Full Name*</label>
                                        <input
                                            style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: '600', outline: 'none' }}
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter trainer's full name"
                                        />
                                    </div>
                                    <div className="form-group-alt">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Specialization (Optional)</label>
                                        <input
                                            style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontWeight: '600', outline: 'none' }}
                                            type="text"
                                            value={formData.specialization}
                                            onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                                            placeholder="e.g. MERN Stack, Python, Placements"
                                        />
                                    </div>
                                    <div className="form-group-alt">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>Availability</label>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', padding: '10px 15px', borderRadius: '12px' }}>
                                            <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#475569' }}>Active Trainer Status</span>
                                            <input
                                                type="checkbox"
                                                checked={formData.active}
                                                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer-alt" style={{ padding: '20px 30px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                                <button type="button" className="btn-ghost" onClick={handleCloseModal} style={{ background: 'none', border: 'none', fontWeight: 700, color: '#64748b', cursor: 'pointer' }}>Cancel</button>
                                <button type="submit" className="btn-save-main" style={{ background: '#17944d', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '12px', fontWeight: 700, cursor: 'pointer' }}>
                                    {editingTrainer ? 'Save Changes' : 'Create Trainer'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrainerManager;
