// src/App.js (updated)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Dashboard from './pages/Dashboard';
import AgeSpecificLessonPage from './pages/AgeSpecificLessonPage';
import ProgressPage from './pages/ProgressPage';
import AssignmentsPage from './pages/AssignmentsPage';
import ParentDashboard from './components/Parent/ParentDashboard';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/lesson/:subject/:day" element={<AgeSpecificLessonPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/assignments" element={<AssignmentsPage />} />
              <Route path="/parent" element={<ParentDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;