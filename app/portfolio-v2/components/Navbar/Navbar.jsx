
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const UcLogo = ({ onNavigateHome }) => (
  <a
    href="/"
    className="logo__wrapper"
    onClick={(e) => {
      e.preventDefault();
      onNavigateHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
    aria-label="Go to home"
  >
    <img
      className="logo__img"
      src="/portfolio/urbancode-logo.png"
      alt="urbancode Training and Solutions"
      width={220}
      height={48}
      decoding="async"
    />
  </a>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [dark, setDark]           = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  const navLinks = [
    { label: "About",        href: "/#about" },
    { label: "Projects",     href: "/#projects" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Courses",      href: "/#courses" },
  ];

  const handleLinkClick = (path) => {
    setMenuOpen(false);
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      <div className="navbar__wrapper">
        <nav className="navbar">
          <UcLogo onNavigateHome={() => handleLinkClick("/")} />

          <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.path ? (
                  <Link 
                    to={l.path} 
                    className="nav__link"
                    onClick={() => handleLinkClick(l.path)}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a 
                    href={l.href} 
                    className="nav__link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <a
              href="/#contact"
              className="nav__contact"
              style={{ textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <button
              className="nav__toggle"
              onClick={() => setDark(!dark)}
              title={dark ? "Light Mode" : "Dark Mode"}
            >
              <div className="toggle__circle">
                {dark ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                )}
              </div>
            </button>

            <button
              className="nav__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span/>
              <span/>
              <span/>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
