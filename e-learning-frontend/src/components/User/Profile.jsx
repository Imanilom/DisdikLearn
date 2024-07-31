// components/Home.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import LogoutButton from '../Auth/LogoutButton';
const Profile = () => {
  // Access user information from the Redux state
  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem('token');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome to the E-learning Platform</h1>
        {user ? (
          <div className="text-center">
            <p className="text-xl">Hello, {user.name}!</p>
            <p className="text-md text-gray-600">Email: {user.email}</p>
            <p className="text-md text-gray-600">Role: {user.role}</p>
            
            <LogoutButton />
          </div>
        ) : (
          <p className="text-center text-red-500">You are not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
