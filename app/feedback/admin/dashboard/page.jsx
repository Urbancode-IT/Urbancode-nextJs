'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { MdPeople, MdStar, MdThumbUp } from 'react-icons/md';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const API_BASE_URL = '';

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        let isMounted = true;
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/feedback/admin');
            return;
        }

        const runFetch = async () => {
            // Small delay to ensure hydration is finished before network requests start
            await new Promise(resolve => setTimeout(resolve, 100));
            if (isMounted) fetchAnalytics(token, isMounted);
        };

        runFetch();

        return () => { isMounted = false; };
    }, [router]);

    const fetchAnalytics = async (token, isMounted = true) => {
        setLoading(true);
        try {
            const res = await axios.get(`${API_BASE_URL}/api/responses/analytics`, {
                headers: { Authorization: `Bearer ${token}` },
                timeout: 30000 // Extended timeout for free Render tiers
            });
            if (isMounted) setStats(res.data);
        } catch (err) {
            if (axios.isCancel(err) || err.code === 'ECONNABORTED' || err.message?.includes('aborted')) {
                console.log('Analytics fetch aborted or interrupted.');
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

    if (loading) return (
        <div className="uc-loader-container">
            <div className="uc-logo-anim"><span>U</span><span>C</span></div>
            <div className="uc-loading-text">Loading Dashboard...</div>
        </div>
    );

    const trainerData = {
        labels: Object.keys(stats?.trainerStats || {}),
        datasets: [{
            label: 'Avg Rating per Trainer',
            data: Object.values(stats?.trainerStats || {}).map(s => (s.total / s.count).toFixed(1)),
            backgroundColor: 'rgba(99, 102, 241, 0.6)',
            borderColor: 'rgb(99, 102, 241)',
            borderWidth: 1
        }]
    };

    return (
        <>
            <header className="page-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>Training feedback overview & analytics</p>
                </div>
            </header>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon"><MdPeople /></div>
                    <div className="stat-info">
                        <h3>Total Responses</h3>
                        <p>{stats?.totalResponses}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon"><MdStar /></div>
                    <div className="stat-info">
                        <h3>Average Rating</h3>
                        <p>{stats?.averageRating}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon"><MdThumbUp /></div>
                    <div className="stat-info">
                        <h3>Recommendation</h3>
                        <p>{stats?.recommendationPercentage}%</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-ranks">
                <div className="rank-card">
                    <div className="rank-title">🏆 Top Trainer</div>
                    <div className="rank-name">{stats?.rankings?.topTrainer}</div>
                    <span className="rank-badge gold">Most Recommended</span>
                </div>
                <div className="rank-card">
                    <div className="rank-title">⭐ Highest Rated</div>
                    <div className="rank-name">{stats?.rankings?.highestRatedTrainer}</div>
                    <span className="rank-badge green">Best Average Rating</span>
                </div>
                <div className="rank-card">
                    <div className="rank-title">📉 Needs Improvement</div>
                    <div className="rank-name">{stats?.rankings?.leastFavTrainer}</div>
                    <span className="rank-badge red">Lowest Average</span>
                </div>
                <div className="rank-card">
                    <div className="rank-title">📊 Most Feedback</div>
                    <div className="rank-name">{stats?.rankings?.mostRatedTrainer}</div>
                    <span className="rank-badge blue">Most Responses</span>
                </div>
            </div>

            <div className="charts-grid">
                <div className="chart-container">
                    <h3>Trainer Ratings Overview</h3>
                    <div className="chart-box">
                        <Bar
                            data={trainerData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: { legend: { display: false } },
                                scales: { y: { beginAtZero: true, max: 5 } }
                            }}
                        />
                    </div>
                </div>
                <div className="chart-container">
                    <h3>Key Improvement Areas</h3>
                    <div className="insights-list">
                        {stats?.improvements?.length > 0 ? (
                            stats.improvements.map((imp, i) => (
                                <div key={i} className="insight-item">{imp}</div>
                            ))
                        ) : (
                            <div className="insight-item">No feedback improvements recorded yet.</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
