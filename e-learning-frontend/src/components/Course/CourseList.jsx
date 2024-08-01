// components/Course/CourseList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/courses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCourses(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        setError(err.message || 'Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
      {courses.length > 0 ? (
        <ul>
          {courses.map((course) => (
            <li key={course._id} className="border p-2 mb-2">
              <p><strong>Title:</strong> {course.title}</p>
              <p><strong>Description:</strong> {course.description}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-md"
                  onClick={() => navigate(`/courses/${course._id}`)}
                >
                  View Details
                </button>
                {user.role === 'instructor' && (
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-md"
                    onClick={() => navigate(`/courses/${course._id}/edit`)}
                  >
                    Edit Course
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default CourseList;
