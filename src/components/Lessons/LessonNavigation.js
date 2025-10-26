// src/components/Lessons/LessonNavigation.js
import React from 'react';
import './LessonNavigation.css';

const LessonNavigation = ({ currentSection, sections, onSectionClick, completedSections }) => {
  const sectionLabels = {
    introduction: 'Introduction',
    practical: 'Practical Lesson',
    takeHome: 'Take Home Assignment'
  };

  const sectionIcons = {
    introduction: '🎬',
    practical: '🔧',
    takeHome: '🏠'
  };

  const getSectionStatus = (section) => {
    if (currentSection === section) return 'active';
    if (completedSections[section]) return 'completed';
    return 'upcoming';
  };

  return (
    <div className="lesson-navigation">
      <div className="nav-progress">
        {sections.map((section, index) => (
          <div key={section} className="nav-step">
            <div className={`step-connector ${index > 0 ? 'visible' : ''} ${getSectionStatus(section) === 'completed' || getSectionStatus(section) === 'active' ? 'completed' : ''}`}></div>
            <button
              className={`step-circle ${getSectionStatus(section)}`}
              onClick={() => onSectionClick && onSectionClick(section)}
              disabled={getSectionStatus(section) === 'upcoming' && !completedSections[sections[index - 1]]}
            >
              <span className="step-icon">
                {getSectionStatus(section) === 'completed' ? '✓' : sectionIcons[section]}
              </span>
            </button>
            <div className="step-label">
              {sectionLabels[section]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonNavigation;