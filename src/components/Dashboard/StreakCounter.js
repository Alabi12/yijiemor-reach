// src/components/Dashboard/StreakCounter.js
import React from 'react';
import { useUser } from '../../context/UserContext';
import './StreakCounter.css';

const StreakCounter = () => {
  const { user } = useUser();

  return (
    <div className="streak-counter">
      <div className="flame">🔥</div>
      <div className="streak-info">
        <span className="streak-count">{user.streak} days</span>
        <span className="streak-label">Current Streak</span>
      </div>
    </div>
  );
};

export default StreakCounter;