import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/3974104.jpg';
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
      // Optionally, refresh the course list or the user's enrollment status
      const updatedCourses = courses.map(course => 
        course._id === courseId 
          ? { ...course, enrolledStudents: [...course.enrolledStudents, user._id] } 
          : course
      );
      setCourses(updatedCourses);
    } catch (err) {
      console.error(err);
      alert('Failed to enroll in the course');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
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
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() => navigate(`/courses/${course._id}`)}
                  >
                    View Details
                  </button>
                  {user.role === 'instructor' && (
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                      onClick={() => navigate(`/courses/${course._id}/edit`)}
                    >
                      Edit Course
                    </button>
                  )}
                  {user.role === 'student' && !course.enrolledStudents.includes(user._id) && (
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                      onClick={() => handleEnroll(course._id)}
                    >
                      Enroll
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
  );
};

export default CourseList;
