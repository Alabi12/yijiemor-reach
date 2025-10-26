// src/components/Lessons/TakeHomeAssignment.js
import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import './TakeHomeAssignment.css';

const TakeHomeAssignment = ({ data, subject, userAge, onComplete }) => {
  const { addAssignment } = useUser();
  const [submission, setSubmission] = useState({
    text: '',
    images: [],
    completed: false
  });

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setSubmission(prev => ({
      ...prev,
      images: [...prev.images, ...files.map(file => ({
        file,
        name: file.name,
        size: file.size,
        type: file.type
      }))]
    }));
  };

  const removeImage = (index) => {
    setSubmission(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    const assignment = {
      type: 'take-home',
      subject: subject.title,
      task: data.task,
      instructions: data.instructions,
      materials: data.materials || [],
      duration: data.duration,
      submission: submission,
      dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      points: 25,
      ageGroup: userAge
    };

    addAssignment(assignment);
    setSubmission(prev => ({ ...prev, completed: true }));
    onComplete();
  };

  const getAgeSpecificPrompt = () => {
    if (userAge <= 7) {
      return "Ask a grownup to help you with this fun activity!";
    } else if (userAge <= 9) {
      return "You can do this! Ask for help if you need it.";
    } else {
      return "Challenge yourself! Try to complete this independently.";
    }
  };

  return (
    <div className="take-home-assignment">
      <div className="assignment-header">
        <h2>Take Home Challenge! 🏠</h2>
        <div className="assignment-badge">Due: Tomorrow</div>
      </div>

      <div className="age-prompt">
        <p>{getAgeSpecificPrompt()}</p>
      </div>

      <div className="assignment-content">
        <div className="task-card">
          <h3>Your Mission</h3>
          <p className="task-description">{data.task}</p>
          
          <div className="instructions">
            <h4>📋 Instructions:</h4>
            <p>{data.instructions}</p>
          </div>

          {data.materials && data.materials.length > 0 && (
            <div className="materials-needed">
              <h4>🛠️ Materials Needed:</h4>
              <ul>
                {data.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="time-estimate">
            <span className="time-icon">⏱️</span>
            Estimated time: {data.duration}
          </div>
        </div>

        <div className="submission-section">
          <h3>Your Submission</h3>
          
          <div className="text-submission">
            <label>
              {userAge <= 7 ? "Tell us about what you did:" : 
               userAge <= 9 ? "Describe what you did or learned:" :
               "Reflect on your experience and learning:"}
            </label>
            <textarea
              value={submission.text}
              onChange={(e) => setSubmission(prev => ({ ...prev, text: e.target.value }))}
              placeholder={
                userAge <= 7 ? "What was fun? What did you make?" :
                userAge <= 9 ? "Write about what you did and what you learned..." :
                "Share your thoughts, challenges, and what you discovered..."
              }
              rows="4"
            />
          </div>

          <div className="image-submission">
            <label>Upload photos of your work:</label>
            <div className="upload-area">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                id="file-upload"
              />
              <label htmlFor="file-upload" className="upload-button">
                📷 Choose Photos
              </label>
              <span className="upload-hint">You can upload multiple photos</span>
            </div>
            
            {submission.images.length > 0 && (
              <div className="image-preview">
                <h5>Selected Photos:</h5>
                {submission.images.map((image, index) => (
                  <div key={index} className="preview-item">
                    <span className="file-name">📷 {image.name}</span>
                    <button 
                      className="remove-button"
                      onClick={() => removeImage(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="reminder">
            <p>💡 Remember: This assignment helps you practice what you learned. Have fun with it!</p>
          </div>
        </div>
      </div>

      <button 
        className="submit-assignment"
        onClick={handleSubmit}
        disabled={!submission.text.trim() || submission.completed}
      >
        {submission.completed ? '✅ Assignment Saved' : 'Submit Assignment'}
      </button>

      {submission.completed && (
        <div className="completion-note">
          <p>Great! Your assignment has been saved. You can view it in your Assignments page.</p>
          {userAge <= 7 && (
            <p className="young-learner-note">Show your work to a grownup and tell them what you learned!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TakeHomeAssignment;