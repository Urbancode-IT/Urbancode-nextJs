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

    const isActive = (path) => pathname === path;

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Feedback <span>UC</span></h2>
                </div>
                <nav className="sidebar-nav">
                    <Link 
                        href="/feedback/admin/dashboard" 
                        className={`nav-item ${isActive('/feedback/admin/dashboard') ? 'active' : ''}`}
                        onClick={closeSidebar}
                    >
                        <MdDashboard size={22} />
                        <span>Dashboard</span>
                    </Link>
                    <Link 
                        href="/feedback/admin/responses" 
                        className={`nav-item ${isActive('/feedback/admin/responses') ? 'active' : ''}`}
                        onClick={closeSidebar}
                    >
                        <MdViewList size={22} />
                        <span>Responses</span>
                    </Link>
                    <Link 
                        href="/feedback/admin/questions" 
                        className={`nav-item ${isActive('/feedback/admin/questions') ? 'active' : ''}`}
                        onClick={closeSidebar}
                    >
                        <MdQuestionAnswer size={22} />
                        <span>Questions</span>
                    </Link>
                    <Link 
                        href="/feedback/admin/trainers" 
                        className={`nav-item ${isActive('/feedback/admin/trainers') ? 'active' : ''}`}
                        onClick={closeSidebar}
                    >
                        <MdPeople size={22} />
                        <span>Trainers</span>
                    </Link>
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
