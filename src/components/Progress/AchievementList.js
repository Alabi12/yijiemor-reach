// src/components/Progress/AchievementList.js
import React from 'react';
import './AchievementList.css';

const AchievementList = ({ user, progress }) => {
  const achievements = [
    {
      id: 1,
      name: 'First Steps',
      description: 'Complete your first lesson',
      icon: '👣',
      condition: (user, progress) => user.currentDay >= 1,
      unlocked: user.currentDay >= 1
    },
    {
      id: 2,
      name: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      icon: '🔥',
      condition: (user, progress) => user.streak >= 7,
      unlocked: user.streak >= 7
    },
    {
      id: 3,
      name: 'Math Whiz',
      description: 'Achieve 80% in Mathematics',
      icon: '🔢',
      condition: (user, progress) => progress.mathematics.proficiency >= 80,
      unlocked: progress.mathematics.proficiency >= 80
    },
    {
      id: 4,
      name: 'Bookworm',
      description: 'Complete 10 English lessons',
      icon: '📚',
      condition: (user, progress) => progress.english.completed >= 10,
      unlocked: progress.english.completed >= 10
    },
    {
      id: 5,
      name: 'Young Scientist',
      description: 'Complete 5 Science experiments',
      icon: '🔬',
      condition: (user, progress) => progress.science.completed >= 5,
      unlocked: progress.science.completed >= 5
    },
    {
      id: 6,
      name: 'Polyglot',
      description: 'Learn 20 French words',
      icon: '🥐',
      condition: (user, progress) => progress.french.completed >= 5,
      unlocked: progress.french.completed >= 5
    },
    {
      id: 7,
      name: 'Good Citizen',
      description: 'Complete all Moral Studies lessons',
      icon: '💖',
      condition: (user, progress) => progress.moralStudies.completed >= 8,
      unlocked: progress.moralStudies.completed >= 8
    },
    {
      id: 8,
      name: 'Tech Genius',
      description: 'Write your first program',
      icon: '💻',
      condition: (user, progress) => progress.computerEngineering.completed >= 3,
      unlocked: progress.computerEngineering.completed >= 3
    }
  ];

  const unlockedCount = achievements.filter(ach => ach.unlocked).length;

  return (
    <div className="achievement-list">
      <div className="achievement-header">
        <h3>Achievements</h3>
        <div className="achievement-stats">
          {unlockedCount} / {achievements.length} Unlocked
        </div>
      </div>
      
      <div className="achievements-grid">
        {achievements.map(achievement => (
          <div 
            key={achievement.id} 
            className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
          >
            <div className="achievement-icon">
              {achievement.icon}
              {achievement.unlocked && <div className="unlocked-badge">✓</div>}
            </div>
            <div className="achievement-info">
              <h4 className="achievement-name">{achievement.name}</h4>
              <p className="achievement-description">{achievement.description}</p>
            </div>
            <div className="achievement-status">
              {achievement.unlocked ? 'Unlocked' : 'Locked'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementList;