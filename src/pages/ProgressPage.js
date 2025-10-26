// src/pages/ProgressPage.js
import React from 'react';
import { useUser } from '../context/UserContext';
import ProgressChart from '../components/Progress/ProgressChart';
import AchievementList from '../components/Progress/AchievementList';
import WeeklyReport from '../components/Progress/WeeklyReport';
import './ProgressPage.css';

const ProgressPage = () => {
  const { user, progress } = useUser();

  const calculateOverallProgress = () => {
    const subjects = Object.values(progress);
    const totalProficiency = subjects.reduce((sum, subject) => sum + subject.proficiency, 0);
    return totalProficiency / subjects.length;
  };

  return (
    <div className="progress-page">
      <div className="progress-header">
        <h1>Your Learning Journey 📊</h1>
        <div className="overall-progress">
          <div className="progress-circle">
            <div className="circle-background"></div>
            <div 
              className="circle-progress"
              style={{ transform: `rotate(${calculateOverallProgress() * 3.6}deg)` }}
            ></div>
            <div className="progress-text">
              <span className="percentage">{Math.round(calculateOverallProgress())}%</span>
              <span className="label">Overall</span>
            </div>
          </div>
        </div>
      </div>

      <div className="progress-content">
        <div className="progress-section">
          <h2>Subject Proficiency</h2>
          <ProgressChart progress={progress} />
        </div>

        <div className="progress-section">
          <h2>Achievements</h2>
          <AchievementList user={user} progress={progress} />
        </div>

        <div className="progress-section">
          <h2>Weekly Report</h2>
          <WeeklyReport />
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;