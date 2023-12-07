import React, { useState } from 'react';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegistration = async () => {
    try {
      // Basic form validation
      if (!username || !password || !confirmPassword) {
        console.log('Please fill in all fields');
        return;
      }
  
      // Check if the password and confirm password match
      if (password !== confirmPassword) {
        console.log('Passwords do not match');
        return;
      }
  
      // Make an API call to register the user
      const response = await fetch('insert API endpoint URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      // Check the response status
      if (response.ok) {
        console.log('Registration successful!');
        // You can redirect the user to a login page or perform any other actions here
      } else {
        // Handle registration failure, e.g., display an error message
        console.log('Registration failed. Please try again.');
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error('An error occurred during registration:', error);
    }
  };
  
  return (
    <div>
      <h2>User Registration</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
