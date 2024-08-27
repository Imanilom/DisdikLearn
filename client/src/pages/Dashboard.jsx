import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import CourseList from '../components/Course/CourseList';
import LoadingErrorPage from '../components/Partial/LoadingErrorPage'; // Import the component

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/courses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourses(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch courses');
      }
    };

    fetchCourses();
  }, [token]);

  const handleEnroll = async (courseId) => {
    try {
      await axios.post(
        `http://localhost:3000/api/courses/${courseId}/enroll`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Successfully enrolled in the course');
    } catch (err) {
      console.error(err);
      alert('Failed to enroll in the course');
    }
  };

  if (error) {
    return <LoadingErrorPage error={error} />;
  }

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold mb-4">Dashboard</h3>
      {user && user.role === 'instructor' ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Manage Courses</h2>
            {/* Button to link to CreateCourse */}
            <Link to="/courses/create">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Create New Course
              </button>
            </Link>
          </div>
          <CourseList courses={courses} onEnroll={handleEnroll} />
        </div>
      ) : (
        <div>
          <CourseList courses={courses} onEnroll={handleEnroll} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
