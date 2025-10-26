// src/components/Progress/WeeklyReport.js
import React from 'react';
import './WeeklyReport.css';

const WeeklyReport = () => {
  const weeklyData = {
    lessonsCompleted: 12,
    pointsEarned: 340,
    timeSpent: '5h 30m',
    favoriteSubject: 'Mathematics',
    streak: 7,
    assignmentsCompleted: 8
  };

  const subjects = [
    { name: 'Mathematics', progress: 85, color: '#FF6B6B' },
    { name: 'English', progress: 78, color: '#4ECDC4' },
    { name: 'Science', progress: 92, color: '#45B7D1' },
    { name: 'French', progress: 65, color: '#96CEB4' }
  ];

  return (
    <div className="weekly-report">
      <h3>This Week's Performance</h3>
      
      <div className="report-stats">
        <div className="stat-card">
          <div className="stat-value">{weeklyData.lessonsCompleted}</div>
          <div className="stat-label">Lessons</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{weeklyData.pointsEarned}</div>
          <div className="stat-label">Points</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{weeklyData.timeSpent}</div>
          <div className="stat-label">Time Spent</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{weeklyData.streak}</div>
          <div className="stat-label">Day Streak</div>
        </div>
      </div>

      <div className="subject-performance">
        <h4>Subject Performance</h4>
        <div className="subject-bars">
          {subjects.map(subject => (
            <div key={subject.name} className="subject-bar">
              <div className="subject-info">
                <span className="subject-name">{subject.name}</span>
                <span className="subject-percentage">{subject.progress}%</span>
              </div>
              <div className="bar-container">
                <div 
                  className="bar-fill"
                  style={{ 
                    width: `${subject.progress}%`,
                    backgroundColor: subject.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="weekly-highlights">
        <h4>Weekly Highlights</h4>
        <ul>
          <li>✅ Completed Science project with perfect score</li>
          <li>🏆 Maintained 7-day learning streak</li>
          <li>⭐ Earned "Math Whiz" achievement</li>
          <li>📈 Improved French pronunciation by 25%</li>
        </ul>
      </div>
    </div>
  );
};

export default WeeklyReport;