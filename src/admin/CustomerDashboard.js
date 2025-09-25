import React from 'react';
import { logout } from '../auth'; // Assuming you have logout function

const CustomerDashboard = () => {
  const handleLogout = () => {
    logout(); // Example logout function
    // Redirect to login page or homepage after logout
    window.location.href = '/login';
  };

  return (
    <div className="customer-dashboard">
      <h2>Customer Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <p>View your reservations and manage your account here.</p>
    </div>
  );
};

export default CustomerDashboard;
