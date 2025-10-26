// src/pages/AgeSpecificLessonPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LessonIntroduction from '../components/Lessons/LessonIntroduction';
import PracticalLesson from '../components/Lessons/PracticalLesson';
import TakeHomeAssignment from '../components/Lessons/TakeHomeAssignment';
import LessonNavigation from '../components/Lessons/LessonNavigation';
import LessonObjectives from '../components/Lessons/LessonObjectives';
import { useUser } from '../context/UserContext';
import { mathematicsContent } from '../data/subjects/mathematics';
import { englishContent } from '../data/subjects/english';
import { scienceContent } from '../data/subjects/science';
import { frenchContent } from '../data/subjects/french';
import { moralStudiesContent } from '../data/subjects/moralStudies';
import { computerEngineeringContent } from '../data/subjects/computerEngineering';
import './AgeSpecificLessonPage.css';



const AgeSpecificLessonPage = () => {
  const { subject, day } = useParams();
  const { user, updateProgress, addPoints } = useUser();
  const [currentSection, setCurrentSection] = useState('introduction');
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [sectionScores, setSectionScores] = useState({
    introduction: false,
    practical: false,
    takeHome: false
  });

  // Get subject-specific content based on age
  const getSubjectContent = () => {
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
        return mathematicsContent.ages6_7; // fallback
    }
  };

  const subjectData = getSubjectContent();
  const lesson = subjectData?.lessons?.[day];

  // If lesson data is not found, show a fallback
  if (!subjectData || !lesson) {
    return (
      <div className="lesson-page">
        <div className="lesson-not-found">
          <h2>Lesson Coming Soon! 🚧</h2>
          <p>We're creating more amazing lessons for {subject} for {user.age}-year-olds!</p>
          <p>Check back soon for new adventures!</p>
          <div className="age-info">
            <p>Currently learning at: <strong>{subjectData?.title || 'Beginner Level'}</strong></p>
          </div>
          <div className="suggested-activities">
            <h3>Try These Instead:</h3>
            <ul>
              <li>Review previous lessons</li>
              <li>Explore other subjects</li>
              <li>Check out co-curricular activities</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  const completeSection = (section, score = 10) => {
    setSectionScores(prev => ({
      ...prev,
      [section]: score
    }));
    
    addPoints(score);
    
    if (section === 'takeHome') {
      const totalScore = Object.values({...sectionScores, [section]: score}).reduce((a, b) => a + b, 0);
      updateProgress(subject, totalScore, `${subject}-day-${day}-age-${user.age}`);
      setLessonCompleted(true);
    }
  };

  const navigateToSection = (section) => {
    if (section === 'practical' && !sectionScores.introduction) return;
    if (section === 'takeHome' && !sectionScores.practical) return;
    setCurrentSection(section);
  };

  const renderSection = () => {
    const sectionData = lesson[currentSection];
    
    if (!sectionData) {
      return (
        <div className="section-not-found">
          <h3>Section not available</h3>
          <p>This section is still under development.</p>
        </div>
      );
    }

    switch (currentSection) {
      case 'introduction':
        return (
          <LessonIntroduction
            data={sectionData}
            subject={subjectData}
            lesson={lesson}
            userAge={user.age}
            onComplete={() => {
              completeSection('introduction', 5);
              setCurrentSection('practical');
            }}
          />
        );
      case 'practical':
        return (
          <PracticalLesson
            data={sectionData}
            subject={subjectData}
            userAge={user.age}
            onComplete={(score) => {
              completeSection('practical', score);
              setCurrentSection('takeHome');
            }}
          />
        );
      case 'takeHome':
        return (
          <TakeHomeAssignment
            data={sectionData}
            subject={subjectData}
            userAge={user.age}
            onComplete={() => completeSection('takeHome', 15)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="age-specific-lesson-page">
      <div className="age-header">
        <div className="age-badge">
          Learning for Age {user.age}
        </div>
        <div className="learning-style">
          Style: {user.learningStyle} 
        </div>
      </div>

      <div className="lesson-header">
        <div className="lesson-title-section">
          <div className="subject-icon" style={{ backgroundColor: subjectData.color }}>
            {subject === 'mathematics' && '🔢'}
            {subject === 'english' && '📚'}
            {subject === 'science' && '🔬'}
            {subject === 'french' && '🥐'}
            {subject === 'moralStudies' && '💖'}
            {subject === 'computerEngineering' && '💻'}
          </div>
          <div>
            <h1>{lesson.title}</h1>
            <div className="lesson-meta">
              <span className="level-badge">{lesson.level}</span>
              <span className="duration">⏱️ {lesson.duration}</span>
              <span className="age-group">{subjectData.title}</span>
            </div>
          </div>
        </div>
        
        <LessonObjectives objectives={lesson.objectives} />
      </div>

      <LessonNavigation
        currentSection={currentSection}
        sections={['introduction', 'practical', 'takeHome']}
        onSectionClick={navigateToSection}
        completedSections={sectionScores}
      />

      <div className="lesson-content">
        {renderSection()}
      </div>

      {lessonCompleted && (
        <div className="completion-celebration">
          <div className="celebration-content">
            <h2>🎉 Amazing Work! 🎉</h2>
            <p>You earned 30 points mastering {lesson.title}!</p>
            <div className="age-specific-feedback">
              <p>Great job for a {user.age}-year-old! You're learning and growing every day!</p>
            </div>
            <div className="celebration-stats">
              <div className="stat">
                <span className="value">3</span>
                <span className="label">Sections</span>
              </div>
              <div className="stat">
                <span className="value">30</span>
                <span className="label">Points</span>
              </div>
              <div className="stat">
                <span className="value">{lesson.duration}</span>
                <span className="label">Focused Learning</span>
              </div>
            </div>
            <div className="next-steps">
              <h4>What's Next?</h4>
              <p>Keep building your skills! Try another lesson or review what you learned.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeSpecificLessonPage;