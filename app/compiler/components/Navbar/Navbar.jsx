'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCode, FaBook, FaTerminal } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('redirect') === 'true') {
                setIsRedirecting(true);
                const timer = setTimeout(() => {
                    window.location.href = "https://uccompiler.urbancode.in/";
                }, 2200); // 2.2 seconds animation
                return () => clearTimeout(timer);
            }
        }
    }, []);

    return (
        <>
            {isRedirecting && (
                <div className="uc-redirect-overlay">
                    <div className="uc-redirect-content">
                        <div className="uc-anim-logo-container">
                            <div className="uc-glow-effect"></div>
                            <svg className="uc-svg-logo" width="100" height="100" viewBox="0 0 100 100">
                                <circle className="uc-circle-bg" cx="50" cy="50" r="40" />
                                <circle className="uc-circle-loader" cx="50" cy="50" r="40" />
                                <text className="uc-text" x="50" y="58" textAnchor="middle">UC</text>
                            </svg>
                        </div>
                        <div className="uc-loading-text">
                            <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span><span> </span><span>C</span><span>o</span><span>m</span><span>p</span><span>i</span><span>l</span><span>e</span><span>r</span><span>.</span><span>.</span><span>.</span>
                        </div>
                    </div>
                </div>
            )}
            <nav className="compiler-navbar">
                <div className="compiler-navbar-brand">
                    <div className="brand-logo">
                        <FaTerminal />
                    </div>
                    <Link to="/problems" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h1>UC<span>Platform</span></h1>
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
                    <Link
                        to="/quiz"
                        className={`nav-link ${location.pathname.startsWith('/quiz') ? 'active' : ''}`}
                    >
                        <FaBook size={14} />
                        <span>Quiz</span>
                    </Link>
                    <a
                        href="/compiler?redirect=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link uc-compiler-btn"
                    >
                        <FaTerminal size={14} />
                        <span>UC compiler</span>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
