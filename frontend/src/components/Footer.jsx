import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Join Community Section */}
        <div className="footer-community">
          <h3 className="footer-community-title">JOIN OUR COMMUNITY</h3>
          <p className="footer-community-text">
            Be part of a vibrant community of innovators, learners, and creators. 
            Connect with like-minded individuals and stay updated with the latest in technology and education.
          </p>
          <div className="footer-community-buttons">
            <button className="footer-btn footer-btn-primary">REGISTER NOW</button>
            <button className="footer-btn footer-btn-secondary">LOGIN</button>
          </div>
          <div className="footer-social-large">
            <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
            <a href="#" className="social-icon" aria-label="Instagram">📷</a>
            <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
            <a href="#" className="social-icon" aria-label="YouTube">▶️</a>
            <a href="#" className="social-icon" aria-label="TikTok">🎵</a>
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className="footer-content">
          <div className="footer-column">
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Social Media</h4>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">Facebook</a>
              <a href="#" className="footer-social-link" aria-label="Instagram">Instagram</a>
              <a href="#" className="footer-social-link" aria-label="YouTube">YouTube</a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Address</h4>
            <p className="footer-address">
              2/80-5, Annur-Mettupalayam Rd,<br />
              Annur, Coimbatore,<br />
              Tamil Nadu 641653,<br />
              INDIA
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© 2023 STARFETCH INNOVATIONS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
