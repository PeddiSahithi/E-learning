import './App.css';
import AssignmentForm from './components/AssignmentForm';
import ReviewForm from './components/ReviewForm';
import TeacherDashboard from './components/TeacherDashboard';
import TeacherAssignments from './components/TeacherAssignments';
import TeacherReviewForm from './components/TeacherReviewForm';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('assignments');
  const [role, setRole] = useState('student'); // State to track user role

  const handleLogin = (userRole) => {
    setIsLoggedIn(true);
    setRole(userRole); // Set user role on login
  };

  return (
    <div className="App">
      <h1>E-Learning Platform</h1>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} setRole={setRole} />
      ) : (
        <>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          {role === 'student' && (
            <>
              {currentPage === 'assignments' && <AssignmentForm />}
              {currentPage === 'dashboard' && <Dashboard />}
              {currentPage === 'reviews' && <ReviewForm assignmentId="1" />}
            </>
          )}
          {role === 'teacher' && (
            <>
              {currentPage === 'assignments' && <TeacherAssignments />}
              {currentPage === 'dashboard' && <TeacherDashboard />}
              {currentPage === 'reviews' && <TeacherReviewForm assignmentId="1" />}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
