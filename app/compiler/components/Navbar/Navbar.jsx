import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCode, FaBook, FaTerminal, FaPlay } from 'react-icons/fa';
import './Navbar.css';

const COMPILER_LINKS = [
    { to: '/python', label: 'Python' },
    { to: '/java', label: 'Java' },
    { to: '/c++', label: 'C++' },
    { to: '/html', label: 'HTML' },
    { to: '/sql', label: 'SQL' },
];

const Navbar = () => {
    const location = useLocation();
    const isCompilerRoute = COMPILER_LINKS.some(({ to }) => location.pathname === to);

    return (
        <nav className="compiler-navbar">
            <div className="compiler-navbar-brand">
                <div className="brand-logo">
                    <FaTerminal />
                </div>
                <Link to="/python" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h1>Koder<span>Platform</span></h1>
                </Link>
            </div>
            <div className="compiler-navbar-nav">
                <Link
                    to="/python"
                    className={`nav-link nav-link-compiler ${isCompilerRoute ? 'active' : ''}`}
                    title="Run code"
                >
                    <FaPlay size={14} />
                    <span>Compiler</span>
                </Link>
                {COMPILER_LINKS.map(({ to, label }) => (
                    <Link
                        key={to}
                        to={to}
                        className={`nav-link nav-link-lang ${location.pathname === to ? 'active' : ''}`}
                        title={label}
                    >
                        <span>{label}</span>
                    </Link>
                ))}
                <Link
                    to="/problems"
                    className={`nav-link ${location.pathname.startsWith('/problems') ? 'active' : ''}`}
                >
                    <FaCode size={14} />
                    <span>Problems</span>
                </Link>
                <Link
                    to="/quiz"
                    className={`nav-link ${location.pathname.startsWith('/quiz') ? 'active' : ''}`}
                >
                    <FaBook size={14} />
                    <span>Quiz</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
