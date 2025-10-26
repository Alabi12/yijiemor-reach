// src/context/UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAgeAppropriateLessons } from '../data/subjects/ageAppropriateContent';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('reach-user');
    return saved ? JSON.parse(saved) : {
      name: 'Yijiemor',
      age: 7,
      level: 'Explorer',
      avatar: '👦',
      points: 0,
      streak: 0,
      currentDay: 1,
      lastActive: new Date().toDateString(),
      learningStyle: 'visual'
    };
  });

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('reach-progress');
    return saved ? JSON.parse(saved) : {
      mathematics: { completed: 0, proficiency: 0, lessons: {} },
      english: { completed: 0, proficiency: 0, lessons: {} },
      science: { completed: 0, proficiency: 0, lessons: {} },
      french: { completed: 0, proficiency: 0, lessons: {} },
      moralStudies: { completed: 0, proficiency: 0, lessons: {} },
      computerEngineering: { completed: 0, proficiency: 0, lessons: {} }
    };
  });

  const [assignments, setAssignments] = useState([]);
  
  // Get age-appropriate lessons
  const ageGroup = getAgeAppropriateLessons(user.age);

  useEffect(() => {
    localStorage.setItem('reach-user', JSON.stringify(user));
    localStorage.setItem('reach-progress', JSON.stringify(progress));
  }, [user, progress]);

  const updateProgress = (subject, score, lessonId) => {
    setProgress(prev => ({
      ...prev,
      [subject]: {
        completed: prev[subject].completed + 1,
        proficiency: Math.min(100, (prev[subject].proficiency + score) / 2),
        lessons: {
          ...prev[subject].lessons,
          [lessonId]: { completed: true, score, date: new Date() }
        }
      }
    }));
  };

  const addPoints = (points) => {
    setUser(prev => ({ ...prev, points: prev.points + points }));
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    if (user.lastActive !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (user.lastActive === yesterday.toDateString()) {
        setUser(prev => ({ ...prev, streak: prev.streak + 1, lastActive: today }));
      } else {
        setUser(prev => ({ ...prev, streak: 1, lastActive: today }));
      }
    }
  };

  const addAssignment = (assignment) => {
    setAssignments(prev => [...prev, { ...assignment, id: Date.now(), submitted: false }]);
  };

  const completeAssignment = (assignmentId, score) => {
    setAssignments(prev => 
      prev.map(assignment => 
        assignment.id === assignmentId 
          ? { ...assignment, submitted: true, score }
          : assignment
      )
    );
    addPoints(score);
  };

  const updateAge = (newAge) => {
    setUser(prev => ({ ...prev, age: newAge }));
  };

  const updateLearningStyle = (style) => {
    setUser(prev => ({ ...prev, learningStyle: style }));
  };

  const value = {
    user,
    setUser,
    progress,
    updateProgress,
    addPoints,
    updateStreak,
    assignments,
    addAssignment,
    completeAssignment,
    updateAge,
    updateLearningStyle,
    ageGroup
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};