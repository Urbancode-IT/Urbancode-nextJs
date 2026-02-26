import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCode, FaBook, FaTerminal } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="compiler-navbar">
            <div className="compiler-navbar-brand">
                <div className="brand-logo">
                    <FaTerminal />
                </div>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h1>Koder<span>Platform</span></h1>
                </Link>
            </div>
            <div className="compiler-navbar-nav">
                <Link
                    to="/problems"
                    className={`nav-link ${location.pathname.startsWith('/problems') ? 'active' : ''}`}
                >
                    <FaCode size={14} />
                    <span>Problems</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
