import React, { useState } from 'react'; 
import './LoginPage.css';

const LoginPage = ({ onLogin, setRole }) => {
  const [name, setName] = useState(''); // For signup
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState(''); // For signup
  const [password, setPassword] = useState('');
  const [role, setRoleLocal] = useState('student'); // Default role is 'student'
  const [isSignup, setIsSignup] = useState(false); // Track whether it's signup or signin

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // Handle signup logic here
      console.log(`Signup - Name: ${name}, Role: ${role}, Email: ${email}, Phone No: ${phoneNo}, Password: ${password}`);
      alert('Signup successful (mock)!');
    } else {
      // Call the onLogin prop and pass the role
      console.log(`Signin - Role: ${role}, Email: ${email}, Password: ${password}`);
      onLogin(role);
    }

    // Reset form fields
    setName('');
    setEmail('');
    setPhoneNo('');
    setPassword('');
    setRoleLocal('student'); // Reset role to default
  };

  return (
    <div className="login-container">
      <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {isSignup && (
          <>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </>
        )}

        {/* Role selection for both signin and signup */}
        <div className="form-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => {
            setRoleLocal(e.target.value);
            setRole(e.target.value); // Update role in parent component
          }}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {isSignup && (
          <div className="form-group">
            <label>Phone No:</label>
            <input
              type="tel"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">{isSignup ? 'Sign Up' : 'Sign In'}</button>
      </form>

      {/* Toggle between signup and signin */}
      <p>
        {isSignup ? 'Already have an account? ' : "Don't have an account? "}
        <button onClick={() => setIsSignup(!isSignup)} className="toggle-button">
          {isSignup ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
