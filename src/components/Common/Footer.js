// src/components/Common/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">Reach</span>
          </div>
          <p className="footer-description">
            Empowering young minds through comprehensive e-learning for ages 6-10.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Dashboard</a></li>
            <li><a href="/progress">Progress</a></li>
            <li><a href="/assignments">Assignments</a></li>
            <li><a href="/subjects">Subjects</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Subjects</h4>
          <ul className="footer-links">
            <li>Mathematics</li>
            <li>English Language</li>
            <li>Science</li>
            <li>French</li>
            <li>Moral Studies</li>
            <li>Computer Engineering</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact & Support</h4>
          <ul className="footer-links">
            <li>📧 https://worank-advert.netlify.app</li>
            <li>📞 +233-243-334-224</li>
            <li>🕒 Mon-Fri: 8AM-6PM</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Reach E-Learning. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/safety">Safety Guidelines</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;