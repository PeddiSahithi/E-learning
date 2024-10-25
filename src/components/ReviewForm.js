import { useState } from 'react'; 
import './ReviewForm.css'; // Import CSS for styling

export default function ReviewForm({ assignmentId }) {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!feedback) {
      alert('Please provide your feedback.');
      return;
    }

    if (rating < 1 || rating > 10) {
      alert('Rating must be between 1 and 10.');
      return;
    }

    console.log('Review Submitted:', { feedback, rating });
    setMessage('Review submitted successfully!');

    // Clear the form
    setFeedback('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="form-group">
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          placeholder="Your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="rating">Rating (1-10):</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min="1"
          max="10"
          required
        />
      </div>

      <button type="submit" className="submit-button">Submit Review</button>
      
      {message && <p className="success-message">{message}</p>}
    </form>
  );
}
