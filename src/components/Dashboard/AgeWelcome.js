// src/components/Dashboard/AgeWelcome.js
import React from 'react';
import { useUser } from '../../context/UserContext';
import { ageGroups } from '../../data/subjects/ageAppropriateContent';
import './AgeWelcome.css';

const AgeWelcome = () => {
  const { user } = useUser();
  
  const currentAgeGroup = user.age <= 7 ? ageGroups.ages6_7 : 
                         user.age <= 9 ? ageGroups.ages8_9 : 
                         ageGroups.ages10;

  const getAgeSpecificMessage = () => {
    if (user.age <= 7) {
      return "Ready for some fun learning adventures?";
    } else if (user.age <= 9) {
      return "Ready to explore and discover new things?";
    } else {
      return "Ready to take on new challenges?";
    }
  };

  const getAgeIcon = () => {
    if (user.age <= 7) return "🎮";
    if (user.age <= 9) return "🔍";
    return "💪";
  };

  return (
    <div className="age-welcome">
      <div className="age-welcome-content">
        <div className="age-icon">{getAgeIcon()}</div>
        <div className="age-welcome-text">
          <h2>Welcome to {currentAgeGroup.name} Learning!</h2>
          <p>{getAgeSpecificMessage()}</p>
          <div className="age-characteristics">
            <span className="characteristic">Perfect for {user.age}-year-olds</span>
            <span className="characteristic">{currentAgeGroup.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeWelcome;