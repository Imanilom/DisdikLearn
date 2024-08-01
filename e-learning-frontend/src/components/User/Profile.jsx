import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import axios from 'axios';

const Profile = () => {
  // Access user information from the Redux state
  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem('token');
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [role] = useState(user?.role || ''); // Role usually shouldn't be editable by the user

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Prepare the data for update
      const updateData = { name, email };
      if (password) {
        updateData.password = password; // Include password only if it's changed
      }

      const response = await axios.patch(
        'http://localhost:3000/api/auth/me', // Replace with your API endpoint
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Optionally, update Redux state with new user data
      dispatch({ type: 'UPDATE_USER', payload: response.data });

      alert('Profile updated successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to update profile');
    }
  };

  if (!user) {
    return <p className="text-center text-red-500">You are not logged in.</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter new password if you want to change it"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700">Role</label>
            <input
              type="text"
              value={role}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
          >
            Update Profile
          </button>
        </form>
        <div className="mt-4 text-center">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Profile;
