// src/pages/Dashboard.js
import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import DailyQuest from '../components/Dashboard/DailyQuest';
import SubjectGrid from '../components/Dashboard/SubjectGrid';
import ProgressOverview from '../components/Dashboard/ProgressOverview';
import StreakCounter from '../components/Dashboard/StreakCounter';
import AgeWelcome from '../components/Dashboard/AgeWelcome';
import './Dashboard.css';

const Dashboard = () => {
  const { user, updateStreak } = useUser();

  useEffect(() => {
    updateStreak();
  }, []);

  return (
    <div className="dashboard">
      <AgeWelcome />
      
      <div className="welcome-section">
        <div className="welcome-header">
          <h1>Good Morning, {user.name}! 🌟</h1>
          <StreakCounter />
        </div>
        <div className="user-stats">
          <div className="stat">
            <span className="stat-value">{user.points}</span>
            <span className="stat-label">Total Points</span>
          </div>
          <div className="stat">
            <span className="stat-value">{user.streak}</span>
            <span className="stat-label">Day Streak</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {Object.values(user.progress || {}).reduce((acc, subject) => acc + subject.completed, 0)}
            </span>
            <span className="stat-label">Lessons Completed</span>
          </div>
        </div>
      </div>

      <DailyQuest />
      
      <div className="dashboard-grid">
        <div className="main-content">
          <SubjectGrid />
        </div>
        <div className="sidebar">
          <ProgressOverview />
          <WeeklyPreview />
        </div>
      </div>

      <div className="co-curricular">
        <h2>Co-Curricular Activities</h2>
        <div className="activity-grid">
          <div className="activity-card">
            <span className="activity-icon">🎨</span>
            <span className="activity-name">Creative Arts</span>
          </div>
          <div className="activity-card">
            <span className="activity-icon">🏃</span>
            <span className="activity-name">Physical Education</span>
          </div>
          <div className="activity-card">
            <span className="activity-icon">💡</span>
            <span className="activity-name">Life Skills</span>
          </div>
          <div className="activity-card">
            <span className="activity-icon">♟️</span>
            <span className="activity-name">Logic & Chess</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeeklyPreview = () => (
  <div className="weekly-preview">
    <h3>This Week's Challenge</h3>
    <div className="challenge-card">
      <h4>Science Fair Project</h4>
      <p>Create a volcano eruption experiment</p>
      <div className="challenge-meta">
        <span>Due: 5 days</span>
        <span>Points: 100</span>
      </div>
    </div>
  </div>
);

export default Dashboard;