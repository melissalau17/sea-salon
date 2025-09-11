import React, { useState } from 'react';
import { logout } from '../auth'; // Assuming you have logout function
import axios from 'axios'; // Assuming you use axios for API requests

const AdminDashboard = () => {
  const [branchName, setBranchName] = useState('');
  const [branchLocation, setBranchLocation] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');

  const handleLogout = () => {
    logout(); // Example logout function
    // Redirect to login page or homepage after logout
    window.location.href = '/login';
  };

  const handleAddBranch = () => {
    // Example API call to add new branch
    const newBranch = { branchName, branchLocation, openingTime, closingTime };
    axios.post('/api/branches', newBranch)
      .then(response => {
        alert(`Branch ${branchName} added successfully!`);
        // Clear form fields after successful submission
        setBranchName('');
        setBranchLocation('');
        setOpeningTime('');
        setClosingTime('');
      })
      .catch(error => {
        console.error('Error adding branch:', error);
        alert('Failed to add branch. Please try again.');
      });
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>

      {/* Add Branch Form */}
      <div>
        <h3>Add New Branch</h3>
        <form onSubmit={handleAddBranch}>
          <div>
            <label>Branch Name:</label>
            <input type="text" value={branchName} onChange={(e) => setBranchName(e.target.value)} required />
          </div>
          <div>
            <label>Location:</label>
            <input type="text" value={branchLocation} onChange={(e) => setBranchLocation(e.target.value)} required />
          </div>
          <div>
            <label>Opening Time:</label>
            <input type="time" value={openingTime} onChange={(e) => setOpeningTime(e.target.value)} required />
          </div>
          <div>
            <label>Closing Time:</label>
            <input type="time" value={closingTime} onChange={(e) => setClosingTime(e.target.value)} required />
          </div>
          <button type="submit">Add Branch</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
