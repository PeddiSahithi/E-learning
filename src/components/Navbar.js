import React from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar">
      <ul>
        <li className={currentPage === 'assignments' ? 'active' : ''} onClick={() => setCurrentPage('assignments')}>Assignments</li>
        <li className={currentPage === 'dashboard' ? 'active' : ''} onClick={() => setCurrentPage('dashboard')}>Dashboard</li>
        <li className={currentPage === 'reviews' ? 'active' : ''} onClick={() => setCurrentPage('reviews')}>Reviews</li>
      </ul>
    </nav>
  );
};

export default Navbar;
