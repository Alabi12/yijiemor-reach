// src/pages/LessonPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LessonIntroduction from '../components/Lessons/LessonIntroduction';
import PracticalLesson from '../components/Lessons/PracticalLesson';
import TakeHomeAssignment from '../components/Lessons/TakeHomeAssignment';
import LessonNavigation from '../components/Lessons/LessonNavigation';
import { useUser } from '../context/UserContext';
import { lessonData } from '../data/lessonData';
import './LessonPage.css';

const LessonPage = () => {
  const { subject, day } = useParams();
  const { updateProgress, addPoints } = useUser();
  const [currentSection, setCurrentSection] = useState('introduction');
  const [lessonCompleted, setLessonCompleted] = useState(false);

  // Get the specific lesson data with safe fallbacks
  const subjectData = lessonData[subject];
  const lesson = subjectData?.lessons?.[day];
  
  // If lesson data is not found, show a fallback
  if (!subjectData || !lesson) {
    return (
      <div className="lesson-page">
        <div className="lesson-not-found">
          <h2>Lesson Not Found</h2>
          <p>We couldn't find the lesson for {subject} - Day {day}.</p>
          <p>Please check the dashboard for available lessons.</p>
        </div>
      </div>
    );
  }

  const completeSection = (score = 10) => {
    addPoints(score);
    if (currentSection === 'takeHome') {
      updateProgress(subject, score, `${subject}-day-${day}`);
      setLessonCompleted(true);
    }
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
            onComplete={() => {
              setCurrentSection('practical');
              completeSection(5);
            }}
          />
        );
      case 'practical':
        return (
          <PracticalLesson
            data={sectionData}
            onComplete={() => {
              setCurrentSection('takeHome');
              completeSection(10);
            }}
          />
        );
      case 'takeHome':
        return (
          <TakeHomeAssignment
            data={sectionData}
            onComplete={() => completeSection(15)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="lesson-page">
      <div className="lesson-header">
        <h1>{lesson.title}</h1>
        <span className="subject-badge" style={{ backgroundColor: subjectData.color }}>
          {subjectData.title}
        </span>
      </div>

      <LessonNavigation
        currentSection={currentSection}
        sections={['introduction', 'practical', 'takeHome']}
      />

      <div className="lesson-content">
        {renderSection()}
      </div>

      {lessonCompleted && (
        <div className="completion-celebration">
          <h2>🎉 Lesson Completed! 🎉</h2>
          <p>You earned 30 points! Great job!</p>
        </div>
      )}
    </div>
  );
};

export default LessonPage;