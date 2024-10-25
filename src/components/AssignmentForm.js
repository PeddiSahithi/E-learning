import { useState } from 'react';
import './AssignmentForm.css'; // Import your CSS file if you have styles

export default function AssignmentForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if a file is selected
    if (!file) {
      setError('Please upload a PDF file');
      return;
    }

    // Check if the uploaded file is a PDF
    if (file.type !== 'application/pdf') {
      setError('Only PDF files are allowed');
      return;
    }

    // Simulating form submission
    console.log('Assignment Submitted:', { file });
    alert('Assignment submitted (mock)!');

    // Reset form and error message
    setFile(null);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="file" 
        accept="application/pdf" 
        onChange={(e) => {
          setFile(e.target.files[0]); // Set the selected file
          setError(''); // Clear error message on input change
        }} 
      />
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <button type="submit">Submit Assignment</button>
    </form>
  );
}
