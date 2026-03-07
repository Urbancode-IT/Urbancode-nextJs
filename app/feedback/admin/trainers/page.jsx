'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
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
        <div className="trainer-manager-container">
            <header className="page-header flex-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="header-titles">
                    <h1>Trainer Management</h1>
                    <p>Manage courses trainers and placement coordinators</p>
                </div>
                <button className="btn-primary-admin" onClick={handleOpenAdd}>
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
                                        <div className="uc-logo-anim"><span>U</span><span>C</span></div>
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

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content admin-modal">
                        <div className="modal-header">
                            <h2>{editingTrainer ? 'Edit Trainer' : 'Add New Trainer'}</h2>
                            <button className="close-btn" onClick={handleCloseModal}>&times;</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body-alt">
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Full Name*</label>
                                    <input
                                        style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }}
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Enter trainer's full name"
                                    />
                                </div>
                                <div className="form-group" style={{ marginTop: '15px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Specialization</label>
                                    <input
                                        style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }}
                                        type="text"
                                        value={formData.specialization}
                                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                                        placeholder="e.g. MERN Stack, Python"
                                    />
                                </div>
                                <div className="form-group" style={{ marginTop: '15px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                        <input
                                            type="checkbox"
                                            checked={formData.active}
                                            onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                        />
                                        <span style={{ fontWeight: '600' }}>Active Trainer Status</span>
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer-alt">
                                <button type="button" className="btn-ghost" onClick={handleCloseModal} style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}>Cancel</button>
                                <button type="submit" className="btn-save-main" style={{ background: '#17944d', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer' }}>
                                    {editingTrainer ? 'Save Changes' : 'Create Trainer'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <style jsx>{`
                .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 3000; }
                .modal-content { background: white; width: 90%; max-width: 500px; border-radius: 20px; overflow: hidden; }
                .modal-header { padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
                .modal-body-alt { padding: 20px; }
                .modal-footer-alt { padding: 20px; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 10px; }
                .close-btn { background: none; border: none; font-size: 2rem; cursor: pointer; }
            `}</style>
        </div>
    );
};

export default TrainerManager;
