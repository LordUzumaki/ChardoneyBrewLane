// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {/* Add more user details here */}
    </div>
  );
};

export default UserProfile;
