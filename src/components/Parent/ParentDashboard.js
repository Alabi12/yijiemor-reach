// src/components/Parent/ParentDashboard.js
import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { ageGroups } from '../../data/subjects/ageAppropriateContent';
import './ParentDashboard.css';

const ParentDashboard = () => {
  const { user, updateAge, updateLearningStyle } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    age: user.age,
    learningStyle: user.learningStyle
  });

  const handleSave = () => {
    updateAge(editForm.age);
    updateLearningStyle(editForm.learningStyle);
    setIsEditing(false);
  };

  const currentAgeGroup = user.age <= 7 ? ageGroups.ages6_7 : 
                         user.age <= 9 ? ageGroups.ages8_9 : 
                         ageGroups.ages10;

  return (
    <div className="parent-dashboard">
      <div className="parent-header">
        <h1>Parent Dashboard 👨‍👩‍👧‍👦</h1>
        <p>Manage your child's learning experience</p>
      </div>

      <div className="child-profile">
        <div className="profile-header">
          <h2>Child Profile</h2>
          <button 
            className="edit-button"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {isEditing ? (
          <div className="edit-form">
            <div className="form-group">
              <label>Child's Age:</label>
              <select 
                value={editForm.age}
                onChange={(e) => setEditForm(prev => ({ ...prev, age: parseInt(e.target.value) }))}
              >
                {[6, 7, 8, 9, 10].map(age => (
                  <option key={age} value={age}>{age} years old</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Learning Style:</label>
              <select 
                value={editForm.learningStyle}
                onChange={(e) => setEditForm(prev => ({ ...prev, learningStyle: e.target.value }))}
              >
                <option value="visual">Visual (learns by seeing)</option>
                <option value="auditory">Auditory (learns by hearing)</option>
                <option value="kinesthetic">Kinesthetic (learns by doing)</option>
              </select>
            </div>

            <button className="save-button" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        ) : (
          <div className="profile-info">
            <div className="info-item">
              <span className="label">Current Age:</span>
              <span className="value">{user.age} years old</span>
            </div>
            <div className="info-item">
              <span className="label">Age Group:</span>
              <span className="value">{currentAgeGroup.name}</span>
            </div>
            <div className="info-item">
              <span className="label">Learning Style:</span>
              <span className="value">{user.learningStyle}</span>
            </div>
          </div>
        )}
      </div>

      <div className="age-group-info">
        <h3>About {currentAgeGroup.name}</h3>
        <p>{currentAgeGroup.description}</p>
        <div className="characteristics">
          <h4>Learning Characteristics:</h4>
          <ul>
            {currentAgeGroup.characteristics.map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="learning-tips">
        <h3>Learning Tips for This Age</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>⏰ Timing</h4>
            <p>Optimal learning sessions: {user.age <= 7 ? '10-15 minutes' : user.age <= 9 ? '15-20 minutes' : '20-30 minutes'}</p>
          </div>
          <div className="tip-card">
            <h4>🎯 Focus</h4>
            <p>{user.age <= 7 ? 'Hands-on activities and games' : user.age <= 9 ? 'Problem-solving and challenges' : 'Projects and independent work'}</p>
          </div>
          <div className="tip-card">
            <h4>💝 Support</h4>
            <p>{user.age <= 7 ? 'Active participation and encouragement' : user.age <= 9 ? 'Guidance with independence' : 'Resources for self-directed learning'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;