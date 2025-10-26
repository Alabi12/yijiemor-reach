// src/components/Dashboard/SubjectGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { mathematicsContent } from '../../data/subjects/mathematics';
import { englishContent } from '../../data/subjects/english';
import { scienceContent } from '../../data/subjects/science';
import { frenchContent } from '../../data/subjects/french';
import { moralStudiesContent } from '../../data/subjects/moralStudies';
import { computerEngineeringContent } from '../../data/subjects/computerEngineering';
import './SubjectGrid.css';

const SubjectGrid = () => {
  const { user, progress } = useUser();

  const getSubjectData = (subject) => {
    const ageGroup = user.age <= 7 ? 'ages6_7' : user.age <= 9 ? 'ages8_9' : 'ages10';
    
    switch (subject) {
      case 'mathematics':
        return mathematicsContent[ageGroup];
      case 'english':
        return englishContent[ageGroup];
      case 'science':
        return scienceContent[ageGroup];
      case 'french':
        return frenchContent[ageGroup];
      case 'moralStudies':
        return moralStudiesContent[ageGroup];
      case 'computerEngineering':
        return computerEngineeringContent[ageGroup];
      default:
        return mathematicsContent.ages6_7;
    }
  };

  const subjects = [
    { id: 'mathematics', color: '#FF6B6B' },
    { id: 'english', color: '#4ECDC4' },
    { id: 'science', color: '#45B7D1' },
    { id: 'french', color: '#96CEB4' },
    { id: 'moralStudies', color: '#FFEAA7' },
    { id: 'computerEngineering', color: '#DDA0DD' }
  ].map(subject => {
    const subjectData = getSubjectData(subject.id);
    const subjectProgress = progress[subject.id] || { proficiency: 0, completed: 0 };
    
    return {
      id: subject.id,
      name: subjectData?.title || subject.id,
      icon: subjectData?.icon || '📚',
      color: subject.color,
      progress: subjectProgress.proficiency,
      lessonsCompleted: subjectProgress.completed,
      description: subjectData?.description || 'Learn and explore!',
      availableLessons: Object.keys(subjectData?.lessons || {}).length
    };
  });

  return (
    <div className="subject-grid">
      <h2>Your Learning Subjects</h2>
      <p className="subject-grid-description">Age-appropriate lessons designed for {user.age}-year-olds</p>
      <div className="subjects-container">
        {subjects.map(subject => (
          <Link
            key={subject.id}
            to={`/lesson/${subject.id}/1`}
            className="subject-card"
            style={{ '--subject-color': subject.color }}
          >
            <div className="subject-icon">{subject.icon}</div>
            <h3 className="subject-name">{subject.name}</h3>
            <p className="subject-description">{subject.description}</p>
            <div className="subject-stats">
              <span className="lessons-available">{subject.availableLessons} lessons available</span>
              <span className="lessons-completed">{subject.lessonsCompleted} completed</span>
            </div>
            <div className="subject-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
              <div className="progress-text">
                <span className="progress-percentage">
                  {Math.round(subject.progress)}% Complete
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectGrid;