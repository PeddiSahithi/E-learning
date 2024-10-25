import React, { useState } from 'react';

export default function TeacherReviewForm({ assignmentId }) {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review Submitted:', { feedback, rating });
    alert('Review submitted (mock)!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="Feedback" onChange={(e) => setFeedback(e.target.value)} />
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="10" />
      <button type="submit">Submit Review</button>
    </form>
  );
}
