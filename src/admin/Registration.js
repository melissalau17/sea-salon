import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../auth'; // Assuming you have authentication functions

const Registration = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic - e.g., send data to backend or store in state/context
    // For demonstration, let's assume registration immediately logs in the user
    const { email, password } = formData;
    const user = authenticate(email, password); // Example authentication function

    if (user) {
      alert('Registration successful!');
      // Redirect based on user role
      if (user.role === 'admin') {
        history.push('/admin');
      } else if (user.role === 'customer') {
        history.push('/customer');
      }
    } else {
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
