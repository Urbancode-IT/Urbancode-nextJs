'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AdminHeader from '@/app/components/feedback-admin/AdminHeader';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { MdTrendingUp, MdPeople, MdStar, MdAssignment } from 'react-icons/md';
import './Dashboard.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
);

const API_BASE_URL = process.env.NEXT_PUBLIC_FEEDBACK_API_URL || '';
const API_PATH = API_BASE_URL === '' ? '/api/feedback' : `${API_BASE_URL}/api/feedback`;

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/feedback/admin');
            return;
        }
        fetchAnalytics(token);
    }, [router]);

    const fetchAnalytics = async (token) => {
        try {
            const res = await axios.get(`${API_PATH}/responses/analytics`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setData(res.data);
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

    if (loading) {
        return (
            <div className="admin-layout">
                <AdminHeader />
                <main className="admin-content">
                    <div className="uc-loader-container">
                        <div className="uc-logo-anim"><span>U</span><span>C</span></div>
                        <div className="uc-loading-text">Loading Analytics...</div>
                    </div>
                </main>
            </div>
        );
    }

    if (!data) return <div className="loading">Error loading dashboard data.</div>;

    const barData = {
        labels: Object.keys(data.ratingsCount || {}),
        datasets: [{
            label: 'Responses',
            data: Object.values(data.ratingsCount || {}),
            backgroundColor: [
                '#17944d', // Excellent
                '#34d399', // Good
                '#fbbf24', // Average
                '#f87171', // Bad
                '#ef4444', // Very Bad
            ],
            borderRadius: 8,
        }],
    };

    const pieData = {
        labels: (data.topTrainers || []).map(t => t.name),
        datasets: [{
            data: (data.topTrainers || []).map(t => t.count),
            backgroundColor: [
                '#17944d',
                '#10b981',
                '#059669',
                '#047857',
                '#065f46',
            ],
        }],
    };

    return (
        <div className="admin-layout">
            <AdminHeader />
            <main className="admin-content">
                <div className="dashboard-container">
                    <header className="page-header">
                        <div>
                            <h1>Dashboard</h1>
                            <p>Real-time feedback insights & performance analytics</p>
                        </div>
                    </header>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: '#eff6ff', color: '#2563eb' }}><MdAssignment /></div>
                            <div className="stat-info">
                                <h3>Total Responses</h3>
                                <p>{data.totalResponses}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: '#ecfdf5', color: '#059669' }}><MdStar /></div>
                            <div className="stat-info">
                                <h3>Avg. Rating</h3>
                                <p>{data.averageRating?.toFixed(1) || '0.0'}/5</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: '#fffcf0', color: '#b45309' }}><MdPeople /></div>
                            <div className="stat-info">
                                <h3>Trainers Active</h3>
                                <p>{data.topTrainers?.length || 0}</p>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-ranks">
                        <div className="rank-card">
                            <div className="rank-title">Top Rated Trainer</div>
                            <div className="rank-name">{data.topTrainers?.[0]?.name || 'N/A'}</div>
                            <div className="rank-badge gold">{data.topTrainers?.[0]?.count || 0} Feedbacks</div>
                        </div>
                        <div className="rank-card">
                            <div className="rank-title">Most Frequent Course</div>
                            <div className="rank-name">{data.topCourses?.[0]?.name || 'N/A'}</div>
                            <div className="rank-badge blue">{data.topCourses?.[0]?.count || 0} Enrollments</div>
                        </div>
                        <div className="rank-card">
                            <div className="rank-title">Feedback Trend</div>
                            <div className="rank-name">
                                {((data.ratingsCount?.Excellent || 0) + (data.ratingsCount?.Good || 0)) >= (data.totalResponses / 2) ? 'Positive' : 'Mixed'}
                            </div>
                            <div className={`rank-badge ${((data.ratingsCount?.Excellent || 0) + (data.ratingsCount?.Good || 0)) >= (data.totalResponses / 2) ? 'green' : 'orange'}`}>
                                {data.totalResponses > 0 
                                    ? `↑ ${(((data.ratingsCount?.Excellent || 0) + (data.ratingsCount?.Good || 0)) / data.totalResponses * 100).toFixed(0)}% accuracy`
                                    : 'No data yet'}
                            </div>
                        </div>
                    </div>

                    <div className="charts-grid">
                        <div className="chart-container">
                            <h3>Performance Distribution</h3>
                            <div className="chart-box">
                                <Bar data={barData} options={{ maintainAspectRatio: false }} />
                            </div>
                        </div>
                        <div className="chart-container">
                            <h3>Summary Insights</h3>
                            <div className="insights-list">
                                <div className="insight-item">
                                    Overall satisfaction rate is <strong>{data.totalResponses > 0 ? (((data.ratingsCount?.Excellent || 0) + (data.ratingsCount?.Good || 0)) / data.totalResponses * 100).toFixed(1) : 0}%</strong>.
                                </div>
                                {data.topTrainers?.[0] && (
                                    <div className="insight-item">
                                        <strong>{data.topTrainers[0].name}</strong> is consistently high performing based on latest batches.
                                    </div>
                                )}
                                {data.topCourses?.[0] && (
                                    <div className="insight-item">
                                        Recent responses indicate <strong>{data.topCourses[0].name}</strong> has maximum interaction.
                                    </div>
                                )}
                            </div>
                            <div className="chart-box" style={{ height: '220px', marginTop: '1rem' }}>
                                <Pie data={pieData} options={{ maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
