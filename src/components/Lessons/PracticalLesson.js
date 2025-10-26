// src/components/Lessons/PracticalLesson.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PracticalLesson.css';

const PracticalLesson = ({ data, subject, userAge, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState('');

  const handleAnswer = (answer, isCorrect) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    
    // Show immediate feedback
    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedback('✅ Correct! Well done!');
    } else {
      setFeedback('❌ Good try! Let\'s learn from this.');
    }

    // Move to next question or show results
    setTimeout(() => {
      setFeedback('');
      if (currentQuestion < data.questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowResult(true);
        const finalScore = (score + (isCorrect ? 1 : 0)) / data.questions.length * 100;
        setTimeout(() => {
          onComplete(finalScore);
        }, 3000);
      }
    }, 1500);
  };

  const renderQuestion = (question) => {
    if (!question) return null;

    switch (question.type) {
      case 'counting':
        return (
          <div className="counting-question">
            <h4>{question.question}</h4>
            {question.image && (
              <div className="counting-display">{question.image}</div>
            )}
            <div className="options">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${userAnswers[currentQuestion] === option ? 'selected' : ''}`}
                  onClick={() => handleAnswer(option, option === question.correct)}
                  disabled={userAnswers[currentQuestion]}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'matching':
      case 'color-matching':
      case 'animal-groups':
        return (
          <div className="matching-question">
            <h4>{question.question}</h4>
            <div className="options">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${userAnswers[currentQuestion] === option ? 'selected' : ''}`}
                  onClick={() => handleAnswer(option, option === question.correct)}
                  disabled={userAnswers[currentQuestion]}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'audio':
        return (
          <div className="audio-question">
            <h4>Listen and Learn</h4>
            <div className="phrase-card">
              <div className="phrase-large">{question.phrase}</div>
              <div className="meaning">{question.meaning}</div>
              <div className="pronunciation">Sounds like: {question.pronunciation}</div>
              <button 
                className="speak-button"
                onClick={() => {
                  if ('speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(question.phrase);
                    utterance.lang = 'fr-FR';
                    utterance.rate = 0.8; // Slower for learning
                    speechSynthesis.speak(utterance);
                  }
                }}
              >
                🔊 Listen
              </button>
            </div>
            <button 
              className="next-button"
              onClick={() => {
                if (currentQuestion < data.questions.length - 1) {
                  setCurrentQuestion(prev => prev + 1);
                } else {
                  const finalScore = 100; // Audio lessons get full points for participation
                  setShowResult(true);
                  setTimeout(() => onComplete(finalScore), 2000);
                }
              }}
            >
              {currentQuestion < data.questions.length - 1 ? 'Next Phrase' : 'Complete'}
            </button>
          </div>
        );
      
      case 'sequencing':
      case 'algorithm-order':
        return (
          <div className="sequencing-question">
            <h4>{question.question}</h4>
            <div className="sequence-options">
              {question.correct.map((step, index) => (
                <div key={index} className="sequence-step">
                  <span className="step-number">{index + 1}</span>
                  <span className="step-text">{step}</span>
                </div>
              ))}
            </div>
            <button 
              className="next-button"
              onClick={() => {
                if (currentQuestion < data.questions.length - 1) {
                  setCurrentQuestion(prev => prev + 1);
                } else {
                  const finalScore = 100; // Sequencing gets full points for learning
                  setShowResult(true);
                  setTimeout(() => onComplete(finalScore), 2000);
                }
              }}
            >
              {currentQuestion < data.questions.length - 1 ? 'Next Question' : 'Complete'}
            </button>
          </div>
        );
      
      default:
        return (
          <div className="default-question">
            <h4>{question.question}</h4>
            <div className="options">
              {question.options && question.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${userAnswers[currentQuestion] === option ? 'selected' : ''}`}
                  onClick={() => handleAnswer(option, option === question.correct)}
                  disabled={userAnswers[currentQuestion]}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
    }
  };

  const getEncouragement = () => {
    if (userAge <= 7) return "You're doing great! 🌟";
    if (userAge <= 9) return "Keep up the good work! 💪";
    return "Excellent thinking! 🧠";
  };

  return (
    <div className="practical-lesson">
      <h2>Time to Practice! 💪</h2>
      <p className="activity-description">{data.content}</p>
      <p className="encouragement">{getEncouragement()}</p>
      
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="quiz-container"
          >
            <div className="progress-indicator">
              Question {currentQuestion + 1} of {data.questions.length}
            </div>

            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${((currentQuestion + 1) / data.questions.length) * 100}%` }}
              ></div>
            </div>

            <div className="question-area">
              {data.questions[currentQuestion] && renderQuestion(data.questions[currentQuestion])}
            </div>

            {feedback && (
              <div className={`feedback ${feedback.includes('✅') ? 'correct' : 'incorrect'}`}>
                {feedback}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="completion-message"
          >
            <h3>Great Job! 🎉</h3>
            <p>You completed all the practice questions!</p>
            {data.questions[0].type !== 'audio' && data.questions[0].type !== 'sequencing' && (
              <>
                <p>You scored {score} out of {data.questions.length}</p>
                <div className="score-display">
                  {score === data.questions.length ? 'Perfect! 🌟' : 
                   score >= data.questions.length * 0.7 ? 'Excellent! 👏' : 
                   'Good work! Keep practicing! 💪'}
                </div>
                <div className="score-circle">
                  <div className="score-text">{Math.round((score / data.questions.length) * 100)}%</div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PracticalLesson;