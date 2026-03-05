'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MdDashboard, MdQuestionAnswer, MdViewList, MdLogout, MdPeople, MdMenu, MdClose } from 'react-icons/md';
import './Sidebar.css';

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/feedback/admin');
    };

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    const navItems = [
        { path: '/feedback/admin/dashboard', icon: <MdDashboard size={22} />, label: 'Dashboard' },
        { path: '/feedback/admin/responses', icon: <MdViewList size={22} />, label: 'Responses' },
        { path: '/feedback/admin/questions', icon: <MdQuestionAnswer size={22} />, label: 'Questions' },
        { path: '/feedback/admin/trainers', icon: <MdPeople size={22} />, label: 'Trainers' },
    ];

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Feedback UC</h2>
                </div>
                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`nav-item ${pathname === item.path ? 'active' : ''}`}
                            onClick={closeSidebar}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>
                <div className="sidebar-footer">
                    <button onClick={handleLogout} className="logout-btn">
                        <MdLogout size={22} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
            {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
        </>
    );
};

export default Sidebar;
