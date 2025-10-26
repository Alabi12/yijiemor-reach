// src/components/Dashboard/DailyQuest.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { mathematicsContent } from '../../data/subjects/mathematics';
import { englishContent } from '../../data/subjects/english';
import { scienceContent } from '../../data/subjects/science';
import { frenchContent } from '../../data/subjects/french';
import { moralStudiesContent } from '../../data/subjects/moralStudies';
import { computerEngineeringContent } from '../../data/subjects/computerEngineering';
import './DailyQuest.css';

const DailyQuest = () => {
  const { user, progress } = useUser();

  // Get subject-specific content based on age
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

  // Generate today's quests based on user's current day and progress
  const getTodaysQuests = () => {
    const subjects = [
      'mathematics',
      'english', 
      'science',
      'french',
      'moralStudies',
      'computerEngineering'
    ];
    
    const quests = [];
    
    // For demo purposes, show first lesson from each subject
    subjects.forEach(subject => {
      const subjectData = getSubjectData(subject);
      const firstLesson = subjectData?.lessons?.[1]; // Get first lesson
      
      if (firstLesson) {
        const lessonId = `${subject}-day-1-age-${user.age}`;
        const isCompleted = progress[subject]?.lessons?.[lessonId]?.completed || false;
        
        quests.push({
          subject: subject,
          title: firstLesson.title,
          description: firstLesson.introduction?.description?.substring(0, 60) + '...' || 'Start your learning adventure!',
          duration: firstLesson.duration || '15-20 min',
          completed: isCompleted,
          day: 1,
          icon: subjectData?.icon || '📚',
          color: subjectData?.color || '#667eea'
        });
      }
    });

    return quests.slice(0, 3); // Show only 3 quests for demo
  };

  const todaysQuests = getTodaysQuests();

  return (
    <div className="daily-quest">
      <h2>Today's Learning Adventures - Day {user.currentDay}</h2>
      <div className="quest-list">
        {todaysQuests.length === 0 ? (
          <div className="no-quests">
            <p>No quests available for today. Check back tomorrow!</p>
          </div>
        ) : (
          todaysQuests.map((quest, index) => (
            <Link 
              key={index}
              to={`/lesson/${quest.subject}/${quest.day}`}
              className={`quest-item ${quest.completed ? 'completed' : ''}`}
              style={{ borderLeftColor: quest.color }}
            >
              <div className="quest-icon" style={{ color: quest.color }}>
                {quest.completed ? '✅' : quest.icon}
              </div>
              <div className="quest-info">
                <h3>{quest.title}</h3>
                <p>{quest.description}</p>
                <span className="duration">{quest.duration}</span>
              </div>
              {!quest.completed && <button className="start-btn">Start</button>}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default DailyQuest;