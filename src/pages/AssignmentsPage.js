// src/pages/AssignmentsPage.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import AssignmentCard from '../components/Assignments/AssignmentCard';
import './AssignmentsPage.css';

const AssignmentsPage = () => {
  const { assignments } = useUser();
  const [filter, setFilter] = useState('all');

  const filteredAssignments = assignments.filter(assignment => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !assignment.submitted;
    if (filter === 'completed') return assignment.submitted;
    return true;
  });

  return (
    <div className="assignments-page">
      <div className="assignments-header">
        <h1>Your Assignments 📝</h1>
        <div className="assignment-stats">
          <div className="stat">
            <span className="count">{assignments.filter(a => !a.submitted).length}</span>
            <span>Pending</span>
          </div>
          <div className="stat">
            <span className="count">{assignments.filter(a => a.submitted).length}</span>
            <span>Completed</span>
          </div>
        </div>
      </div>

      <div className="filter-tabs">
        <button 
          className={`tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Assignments
        </button>
        <button 
          className={`tab ${filter === 'pending' ? 'active' : ''}`}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
        <button 
          className={`tab ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <div className="assignments-grid">
        {filteredAssignments.length === 0 ? (
          <div className="no-assignments">
            <h3>No assignments found 🎉</h3>
            <p>You're all caught up! Check back later for new assignments.</p>
          </div>
        ) : (
          filteredAssignments.map(assignment => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))
        )}
      </div>

      <div className="weekly-assignments">
        <h2>Weekly Challenges</h2>
        <div className="weekly-grid">
          <div className="weekly-card">
            <h3>Science Project</h3>
            <p>Create a plant growth diary</p>
            <div className="weekly-meta">
              <span>100 points</span>
              <span>7 days left</span>
            </div>
          </div>
          {/* Add more weekly assignments */}
        </div>
      </div>
    </div>
  );
};

export default AssignmentsPage;