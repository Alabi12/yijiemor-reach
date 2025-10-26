// src/components/Common/Footer.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

/**
 * Footer component for Reach E-Learning platform
 * Provides navigation, subject information, and contact details
 */
const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Navigation links data
  const quickLinks = [
    { path: '/', label: 'Dashboard' },
    { path: '/progress', label: 'Progress' },
    { path: '/assignments', label: 'Assignments' },
    { path: '/subjects', label: 'Subjects' }
  ];

  const subjects = [
    'Mathematics',
    'English Language',
    'Science',
    'French',
    'Moral Studies',
    'Computer Engineering'
  ];

  const contactInfo = [
    { 
      icon: '📧', 
      text: 'worankcode@gmail.com',
      href: 'mailto:worankcode@gmail.com',
      type: 'email'
    },
    { 
      icon: '🌐', 
      text: 'worank-advert.netlify.app',
      href: 'https://worank-advert.netlify.app/',
      type: 'website'
    },
    { 
      icon: '📞', 
      text: '+233-243-334-224',
      href: 'tel:+233243334224',
      type: 'phone'
    },
    { 
      icon: '🕒', 
      text: 'Mon-Fri: 8AM-6PM',
      type: 'hours'
    }
  ];

  const legalLinks = [
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/safety', label: 'Safety Guidelines' }
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section">
          <div className="footer-brand">
            <div className="footer-logo" aria-label="Reach E-Learning">
              <span className="logo-icon" role="img" aria-label="Rocket">🚀</span>
              <span className="logo-text">Reach</span>
            </div>
            <p className="footer-description">
              Empowering young minds through comprehensive e-learning for ages 6-10.
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <nav aria-label="Quick navigation">
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Subjects Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Subjects</h4>
          <ul className="footer-links">
            {subjects.map((subject, index) => (
              <li key={index}>
                <span className="subject-item">{subject}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact & Support</h4>
          <address className="footer-contact">
            <ul className="footer-links">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="contact-link"
                      aria-label={contact.type}
                    >
                      <span className="contact-icon" role="img" aria-hidden="true">
                        {contact.icon}
                      </span>
                      {contact.text}
                    </a>
                  ) : (
                    <>
                      <span className="contact-icon" role="img" aria-hidden="true">
                        {contact.icon}
                      </span>
                      {contact.text}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; {currentYear} Reach E-Learning. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="footer-legal">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;