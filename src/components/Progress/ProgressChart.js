// src/components/Progress/ProgressChart.js
import React from 'react';
import './ProgressChart.css';

const ProgressChart = ({ progress }) => {
  return (
    <div className="progress-chart">
      <div className="chart-bars">
        {Object.entries(progress).map(([subject, data]) => (
          <div key={subject} className="chart-bar-container">
            <div className="chart-bar-label">{subject.charAt(0).toUpperCase() + subject.slice(1)}</div>
            <div className="chart-bar">
              <div 
                className="chart-bar-fill"
                style={{ height: `${data.proficiency}%` }}
              ></div>
            </div>
            <div className="chart-bar-value">{Math.round(data.proficiency)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;