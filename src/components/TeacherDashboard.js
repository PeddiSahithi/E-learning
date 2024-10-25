import React, { useEffect, useState } from 'react';

export default function TeacherDashboard() {
  const [teacherProfile, setTeacherProfile] = useState({});
  const [reviews, setReviews] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Mock API calls to fetch teacher data (replace with actual API calls)
    const fetchTeacherProfile = async () => {
      // Fetch profile data
      const profileData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        subject: 'Mathematics'
      };
      setTeacherProfile(profileData);
    };

    const fetchReviews = async () => {
      // Fetch reviews data
      const reviewsData = [
        { id: 1, student: 'Student A', review: 'Excellent work on algebra problems.' },
        { id: 2, student: 'Student B', review: 'Good effort on calculus assignment.' }
      ];
      setReviews(reviewsData);
    };

    const fetchAssignments = async () => {
      // Fetch assignments data
      const assignmentsData = [
        { id: 1, title: 'Algebra Assignment', student: 'Student C', status: 'Corrected' },
        { id: 2, title: 'Geometry Assignment', student: 'Student D', status: 'Corrected' }
      ];
      setAssignments(assignmentsData);
    };

    fetchTeacherProfile();
    fetchReviews();
    fetchAssignments();
  }, []);

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <p>Here you can view and manage assignments and reviews.</p>

      {/* Teacher Profile Section */}
      <section>
        <h2>Profile</h2>
        <p><strong>Name:</strong> {teacherProfile.name}</p>
        <p><strong>Email:</strong> {teacherProfile.email}</p>
        <p><strong>Subject:</strong> {teacherProfile.subject}</p>
      </section>

      {/* Reviews Section */}
      <section>
        <h2>Reviews Submitted</h2>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p><strong>Student:</strong> {review.student}</p>
                <p><strong>Review:</strong> {review.review}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews submitted yet.</p>
        )}
      </section>

      {/* Assignments Section */}
      <section>
        <h2>Assignments Corrected</h2>
        {assignments.length > 0 ? (
          <ul>
            {assignments.map(assignment => (
              <li key={assignment.id}>
                <p><strong>Title:</strong> {assignment.title}</p>
                <p><strong>Student:</strong> {assignment.student}</p>
                <p><strong>Status:</strong> {assignment.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No assignments corrected yet.</p>
        )}
      </section>
    </div>
  );
}
