// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { account, ID } from './lib/appwrite';
import './LoginPage.css';

// eslint-disable-next-line react/prop-types
const LoginPage = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      setLoggedInUser(await account.get());
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.');
      console.error('Error logging in:', error);
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      login(email, password);
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
      console.error('Error registering user:', error);
    }
  }

  return (
    <div className="login-container">
      <form>
        <h2>Login</h2>
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

        <button type="button" onClick={() => login(email, password)}>
          Login
        </button>

        <button type="button" onClick={() => register(email, password)}>
          Register
        </button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
