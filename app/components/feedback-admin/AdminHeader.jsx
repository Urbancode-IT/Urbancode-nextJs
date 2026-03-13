'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MdDashboard, MdQuestionAnswer, MdViewList, MdLogout, MdPeople, MdMenu, MdClose } from 'react-icons/md';
import './AdminHeader.css';

const AdminHeader = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/feedback/admin');
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path) => pathname === path;

    return (
        <header className="admin-header-main">
            <div className="admin-nav-container">
                <div className="admin-logo">
                    <Link href="/feedback/admin/dashboard">
                        <h2>Feedback <span>UC</span></h2>
                    </Link>
                </div>

                <button className="mobile-toggle-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
                </button>

                <nav className={`admin-nav-links ${isMenuOpen ? 'show' : ''}`}>
                    <Link 
                        href="/feedback/admin/dashboard" 
                        className={`admin-nav-item ${isActive('/feedback/admin/dashboard') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        <MdDashboard size={20} />
                        <span>Dashboard</span>
                    </Link>
                    <Link 
                        href="/feedback/admin/responses" 
                        className={`admin-nav-item ${isActive('/feedback/admin/responses') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        <MdViewList size={20} />
                        <span>Responses</span>
                    </Link>
                    <Link 
                        href="/feedback/admin/questions" 
                        className={`admin-nav-item ${isActive('/feedback/admin/questions') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        <MdQuestionAnswer size={20} />
                        <span>Questions</span>
                    </Link>
                    <Link 
                        href="/feedback/admin/trainers" 
                        className={`admin-nav-item ${isActive('/feedback/admin/trainers') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        <MdPeople size={20} />
                        <span>Trainers</span>
                    </Link>
                    
                    <button onClick={handleLogout} className="admin-logout-btn-header">
                        <MdLogout size={18} />
                        <span>Logout</span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default AdminHeader;
