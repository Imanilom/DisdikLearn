import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../firebase'; // Adjust the path if needed
import LogoutButton from '../Auth/LogoutButton';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem('token');
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || '');
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProfilePicture(downloadURL);
        });
      }
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updateData = { name, email, profilePicture };
      if (password) {
        updateData.password = password;
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
    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>
        <form onSubmit={handleUpdate} className="flex flex-col items-center gap-4">
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
          <div className="flex flex-col items-center mb-4">
            <img
              src={profilePicture || user.profilePicture || '/default-profile.png'}
              alt="Profile"
              className="h-32 w-32 cursor-pointer rounded-full object-cover"
              onClick={() => fileRef.current.click()}
            />
            <p className="text-sm mt-2">
              {imageError ? (
                <span className="text-red-700">
                  Error uploading image (file size must be less than 2 MB)
                </span>
              ) : imagePercent > 0 && imagePercent < 100 ? (
                <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
              ) : imagePercent === 100 ? (
                <span className="text-green-700">Image uploaded successfully</span>
              ) : (
                ''
              )}
            </p>
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter new password if you want to change it"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
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
