import { useState } from 'react';
import './Dashboard.css'; // Import your CSS file if you have styles

export default function Dashboard() {
  // Example student profile information
  const studentProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Student',
  };

  // Sample assignments submitted by the student
  const [assignments, setAssignments] = useState([
    { assignmentId: '1', title: 'Math Assignment', status: 'submitted' },
    { assignmentId: '2', title: 'Science Project', status: 'reviewed' },
  ]);

  // Sample reviews given by the student
  const [reviews, setReviews] = useState([
    { reviewId: '1', feedback: 'Great job on the project!', rating: 8 },
    { reviewId: '2', feedback: 'Well explained, but needs more examples.', rating: 7 },
  ]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      {/* Student Profile Section */}
      <div className="profile">
        <h2>Student Profile</h2>
        <p><strong>Name:</strong> {studentProfile.name}</p>
        <p><strong>Email:</strong> {studentProfile.email}</p>
        <p><strong>Role:</strong> {studentProfile.role}</p>
      </div>

      {/* Assignments Section */}
      <h2>Your Assignments</h2>
      {assignments.length === 0 ? (
        <p>No assignments available.</p>
      ) : (
        <ul>
          {assignments.map((assignment) => (
            <li key={assignment.assignmentId}>
              {assignment.title} - Status: {assignment.status}
            </li>
          ))}
        </ul>
      )}

      {/* Reviews Section */}
      <h2>Your Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.reviewId}>
              Feedback: {review.feedback} (Rating: {review.rating})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
