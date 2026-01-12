import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import logo from '../../public/icon/favicon-32x32.png'
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLightMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo on far left */}
        <div className="navbar-logo">
          <div className="logo-icon"><img src={logo} alt="logo" /></div>
          <span className="logo-text">STARFETCH INNOVATIONS</span>
        </div>

        {/* Centered Navigation Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#courses" className="nav-link">COURSES</a>
          <a href="#gallery" className="nav-link">GALLERY</a>
          <div className="nav-dropdown">
            <span className="nav-link dropdown-toggle">MORE</span>
            <div className="dropdown-menu">
              <a href="#monster-series">Monster Series</a>
              <a href="#collaborators">Collaborators</a>
              <a href="#faqs">FAQs</a>
              <button 
                className="theme-toggle-btn"
                onClick={toggleTheme}
              >
                {isLightMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </div>
          </div>
        </div>

        {/* Floating Contact Button */}
        <button className="navbar-contact-btn">CONTACT US</button>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
