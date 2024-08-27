import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../firebase';
import LogoutButton from '../Auth/LogoutButton';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem('token');
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || '');
  const [courses, setCourses] = useState([]);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserCourses = async () => {
      try {
        const response = await axios.get(`/api/courses`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const enrolledCourses = response.data.filter(course =>
          course.enrolledStudents.includes(user._id)
        );
        
        setCourses(enrolledCourses);
      } catch (err) {
        console.error("Failed to fetch user courses", err);
      }
    };

    fetchUserCourses();
  }, [user._id, token]);

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
        '/api/auth/me',
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
    <div className="container mx-auto mt-8">
      <div className="flex justify-between">
        <div className="w-1/3 bg-white p-8 rounded-md shadow-md">
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

        <div className="w-2/3 bg-white p-8 rounded-md shadow-md ml-8">
          <h2 className="text-2xl font-bold mb-4">My Courses</h2>
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {courses.map((course) => (
                <div key={course._id} className="bg-white border rounded-lg shadow-md overflow-hidden">
                  <img
                    src={course.image} // Replace with the path to your default image
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-700 mb-4">{course.description.slice(0, 100)}...</p>
                    
                    <div className="flex flex-col space-y-2">
                      {course.lessons && course.lessons.length > 0 ? (
                        <div className="w-full bg-gray-400 rounded-full h-8 mb-4">
                          <div className="bg-blue-500 h-8 rounded-full" style={{ width: `${course.completionPercentage}%` }}>
                            <p className="text-white p-1 pl-2">{course.completionPercentage}%</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-500 mb-4">No lessons available</p>
                      )}
                      
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={() => navigate(`/courses/${course._id}`)}
                      >
                        View Details
                      </button>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={() => navigate(`/courses/${course._id}/forumslist`)}
                      >
                        Go To Forum
                      </button>
                      {user.role === 'instructor' && (
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                          onClick={() => navigate(`/courses/${course._id}/edit`)}
                        >
                          Edit Course
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No courses available.</p>
          )}


        </div>
      </div>
    </div>
  );
};

export default Profile;
