// src/components/Dashboard/ProgressOverview.js
import React from 'react';
import { useUser } from '../../context/UserContext';
import './ProgressOverview.css';

const ProgressOverview = () => {
  const { progress } = useUser();

  const totalLessons = Object.values(progress).reduce((total, subject) => total + subject.completed, 0);
  const averageProficiency = Object.values(progress).reduce((total, subject) => total + subject.proficiency, 0) / Object.values(progress).length || 0;

  const progressItems = [
    {
      label: 'Total Lessons',
      value: totalLessons,
      icon: '📚'
    },
    {
      label: 'Average Proficiency',
      value: `${Math.round(averageProficiency)}%`,
      icon: '📊'
    },
    {
      label: 'Subjects Started',
      value: Object.values(progress).filter(subject => subject.completed > 0).length,
      icon: '🎯'
    }
  ];

  return (
    <div className="progress-overview">
      <h3>Learning Summary</h3>
      <div className="progress-stats">
        {progressItems.map((item, index) => (
          <div key={index} className="progress-stat">
            <div className="stat-icon">{item.icon}</div>
            <div className="stat-info">
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="weekly-focus">
        <h4>This Week's Focus</h4>
        <ul>
          <li>✅ Complete 2 Math lessons</li>
          <li>🔲 Read one English story</li>
          <li>🔲 Science experiment</li>
          <li>🔲 Learn 5 French words</li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressOverview;