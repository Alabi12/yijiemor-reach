// src/components/Lessons/LessonIntroduction.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LessonIntroduction.css';

const LessonIntroduction = ({ data, subject, lesson, userAge, onComplete }) => {
  const [userResponse, setUserResponse] = useState('');

  const handleSubmit = () => {
    if (userResponse.trim() || userAge <= 7) { // Younger kids might not write much
      onComplete();
    }
  };

  // Age-appropriate response placeholders
  const getPlaceholder = () => {
    if (userAge <= 7) return "Draw your answer or ask a grownup to help you write...";
    if (userAge <= 9) return "Share what you think or already know about this...";
    return "Write your thoughts, questions, or what you're curious about...";
  };

  const getButtonText = () => {
    if (userAge <= 7) return "I'm Ready to Play! 🎮";
    if (userAge <= 9) return "Let's Start Learning! 🚀";
    return "Begin the Challenge! 💪";
  };

  const renderAgeSpecificAnimation = () => {
    // Simpler animations for younger kids, more complex for older
    if (userAge <= 7) {
      return (
        <div className="simple-animation">
          <div className="animated-chars">
            {data.animation === 'counting' && '12345...'}
            {data.animation === 'animals' && '🐶🐱🐭🐹🐰'}
            {data.animation === 'shapes' && '⬜🟦🟥🟨🟩'}
            {data.animation === 'alphabet' && 'ABCDE...'}
            {data.animation === 'greetings' && '👋 Bonjour! 👋'}
            {data.animation === 'colors' && '🌈 Colors 🌈'}
            {data.animation === 'friendship' && '👫 Friends 👫'}
            {data.animation === 'computer-parts' && '💻 Computer 💻'}
          </div>
        </div>
      );
    } else {
      // More detailed animations for older kids
      return (
        <div className="detailed-animation">
          {data.animation === 'counting' && (
            <div className="number-sequence">
              <div className="numbers">1 2 3 4 5 6 7 8 9 10</div>
              <div className="number-patterns">+1 +1 +1 +1</div>
            </div>
          )}
          {data.animation === 'alphabet' && (
            <div className="alphabet-grid">
              {'ABCDEFGHIJ'.split('').map(letter => (
                <div key={letter} className="letter-tile">{letter}</div>
              ))}
            </div>
          )}
          {!data.animation && (
            <div className="default-animation">
              <div className="animation-icon">
                {subject.icon || '📚'}
              </div>
              <p>{data.videoPrompt || 'Get ready to learn!'}</p>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <motion.div 
      className="lesson-introduction"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="introduction-header">
        <h2>
          {userAge <= 7 ? "Let's Play and Learn! 🎪" : 
           userAge <= 9 ? "Time to Explore! 🔍" : 
           "Welcome to Your Learning Journey! 🧠"}
        </h2>
        <p className="lesson-description">{data.description}</p>
        {data.videoPrompt && (
          <div className="video-prompt">
            <span className="prompt-icon">
              {userAge <= 7 ? "📺" : "🎬"}
            </span>
            {data.videoPrompt}
          </div>
        )}
      </div>

      <div className="animation-placeholder">
        <div className="animation-content">
          {renderAgeSpecificAnimation()}
        </div>
      </div>

      <div className="thinking-task">
        <h3>
          {userAge <= 7 ? "What Do You Think? 🤔" :
           userAge <= 9 ? "Your Turn to Think! 💭" :
           "Critical Thinking Challenge! 🎯"}
        </h3>
        <p>{data.task}</p>
        <textarea
          value={userResponse}
          onChange={(e) => setUserResponse(e.target.value)}
          placeholder={getPlaceholder()}
          rows={userAge <= 7 ? 2 : 3}
        />
      </div>

      <button 
        className="continue-button age-adapted"
        onClick={handleSubmit}
        disabled={!userResponse.trim() && userAge > 7} // Younger kids can proceed without writing
      >
        {getButtonText()}
      </button>

      {userAge <= 7 && (
        <div className="young-learner-help">
          <p>💡 Need help? Ask a grownup to read with you!</p>
        </div>
      )}
    </motion.div>
  );
};

export default LessonIntroduction;