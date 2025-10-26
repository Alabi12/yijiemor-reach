// src/components/Assignments/AssignmentCard.js
import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import './AssignmentCard.css';

const AssignmentCard = ({ assignment }) => {
  const { completeAssignment } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate submission process
    setTimeout(() => {
      completeAssignment(assignment.id, assignment.points);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className={`assignment-card ${assignment.submitted ? 'completed' : ''}`}>
      <div className="assignment-header">
        <h3>{assignment.task}</h3>
        <div className="assignment-status">
          {assignment.submitted ? '✅ Completed' : '⏳ Pending'}
        </div>
      </div>
      
      <div className="assignment-details">
        <p>{assignment.instructions}</p>
        <div className="assignment-meta">
          <span>Points: {assignment.points}</span>
          <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
        </div>
      </div>

      {!assignment.submitted && (
        <button 
          className="submit-button"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Mark as Complete'}
        </button>
      )}
    </div>
  );
};

export default AssignmentCard;