import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CourseDetails = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/courses/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCourse(response.data);

        // Fetch lesson details
        if (response.data.lessons && response.data.lessons.length > 0) {
          const lessonRequests = response.data.lessons.map((lessonId) =>
            axios.get(`http://localhost:3000/api/courses/${id}/lessons/${lessonId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
          );
          const lessonsResponses = await Promise.all(lessonRequests);
          setLessons(lessonsResponses.map(res => res.data));
        }

        // Fetch quizzes
        const quizzesResponse = await axios.get(`http://localhost:3000/api/courses/${id}/quizzes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuizzes(quizzesResponse.data);

      } catch (err) {
        setError(err.message || 'Failed to fetch course details');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id, token]);

  const handleQuizClick = (quizId) => {
    const confirmMessage = "Do you want to start this quiz now? Click 'OK' to proceed or 'Cancel' to go back.";
    if (window.confirm(confirmMessage)) {
      navigate(`/courses/${id}/quizzes/${quizId}`);
    }
  };

  const getUserLastAttempt = (quiz) => {
    if (!user || !quiz.attempts) return null;
    const userAttempts = quiz.attempts.filter(attempt => attempt.student === user._id);
    if (userAttempts.length === 0) return null;
    return userAttempts[userAttempts.length - 1].score; // Assuming last entry is the latest
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      {course ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <img
              src={course.image || 'https://via.placeholder.com/1200x400'}
              alt={course.title}
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
          <p className="text-gray-800 mb-4">{course.description}</p>
          <p className="text-lg font-semibold"><strong>Created by:</strong> {course.createdBy ? course.createdBy.name : 'Unknown'}</p>
          <p className="text-lg font-semibold"><strong>Enrolled Students:</strong> {course.enrolledStudents.length}</p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-3">Materials</h3>
            <div className="mb-4">
                <Link to={`/courses/${id}/material`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Add New Lesson
                  </button>
                </Link>
              </div>
            <ul className="list-disc pl-5">
              {course.materials.length > 0 ? (
                course.materials.map((material, index) => (
                  <li key={index} className="mb-1">
                    <a href={`http://localhost:3000/${material}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{material}</a>
                  </li>
                ))
              ) : (
                <p>No materials available.</p>
              )}
            </ul>
          </div>

          {/* Display Lesson Management based on Role */}
          {user.role === 'instructor' && (
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-3">Lessons</h3>
              <div className="mb-4">
                <Link to={`/courses/${id}/lessons/create`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Add New Lesson
                  </button>
                </Link>
              </div>
              {/* Display only if the user is an instructor */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lessons.length > 0 ? (
                  lessons.map((lesson) => (
                    <div key={lesson._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                      <img
                        src={lesson.image || 'https://via.placeholder.com/400x200'}
                        alt={lesson.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-xl font-semibold mb-2">{lesson.title || 'No title available'}</h4>
                        <Link to={`/courses/${id}/lessons/${lesson._id}/edit`} className="text-blue-500 hover:underline">Edit Lesson</Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No lessons available.</p>
                )}
              </div>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-3">Quizzes</h3>
            {user.role === 'instructor' && (
              <div className="mb-4">
                <Link to={`/courses/${id}/quizzes/create`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Add New Quiz
                  </button>
                </Link>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quizzes.length > 0 ? (
                quizzes.map((quiz) => (
                  <div key={quiz._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                      src={quiz.imageUrl || 'https://via.placeholder.com/400x200'}
                      alt={quiz.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-xl font-semibold mb-2">{quiz.title || 'No title available'}</h4>
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                        onClick={() => handleQuizClick(quiz._id)}
                      >
                        Start Quiz
                      </button>
                      {user.role === 'instructor' && (
                        <Link to={`/courses/${id}/quizzes/${quiz._id}/edit`} className="ml-4 text-blue-500 hover:underline">
                          Edit Quiz
                        </Link>
                      )}
                      {getUserLastAttempt(quiz) !== null && (
                        <span className="ml-2 text-gray-600">(Last score: {getUserLastAttempt(quiz)})</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p>No quizzes available.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>No course details available.</p>
      )}
    </div>
  );
};

export default CourseDetails;
