// src/components/Common/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './Header.css';

const Header = () => {
  const { user } = useUser();
  const location = useLocation();

  const navigation = [
    { path: '/', label: 'Dashboard', icon: '🏠' },
    { path: '/assignments', label: 'Assignments', icon: '📝' },
    { path: '/progress', label: 'Progress', icon: '📊' },
    { path: '/parent', label: 'Parent', icon: '👨‍👩‍👧‍👦' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">Reach</span>
          <span className="age-indicator">Age {user.age}</span>
        </Link>

        <nav className="navigation">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="user-info">
          <div className="user-avatar">{user.avatar}</div>
          <div className="user-details">
            <span className="user-name">{user.name}</span>
            <span className="user-level">{user.level}</span>
          </div>
          <div className="points-badge">
            ⭐ {user.points}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;