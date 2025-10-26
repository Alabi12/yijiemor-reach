// src/components/Lessons/LessonObjectives.js
import React from 'react';
import './LessonObjectives.css';

const LessonObjectives = ({ objectives }) => {
  return (
    <div className="lesson-objectives">
      <h3>What You'll Learn</h3>
      <ul className="objectives-list">
        {objectives.map((objective, index) => (
          <li key={index} className="objective-item">
            <span className="objective-check">✓</span>
            <span className="objective-text">{objective}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonObjectives;