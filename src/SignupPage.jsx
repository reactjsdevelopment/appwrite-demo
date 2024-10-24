// SignupPage.jsx
import React, { useState } from 'react';
import { account, ID } from './lib/appwrite';
import { useHistory } from 'react-router-dom';
import './SignupPage.css'; // Ensure this file exists

const SignupPage = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory(); // Hook to programmatically navigate

  const handleSignup = async () => {
    if (password !== rePassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }
    try {
      await account.create(ID.unique(), email, password);
      // Optionally, you can log in the user here
      history.push('/login'); // Redirect to login after successful signup
    } catch (error) {
      setErrorMessage('Signup failed. Please try again.');
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Mobile No"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Re-enter Password"
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
      />
      <button type="button" onClick={handleSignup}>
        Sign Up
      </button>
      <p>
        Already have an account?{' '}
        <span className="signup-link" onClick={() => history.push('/login')}>
          Sign in
        </span>
      </p>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default SignupPage;
