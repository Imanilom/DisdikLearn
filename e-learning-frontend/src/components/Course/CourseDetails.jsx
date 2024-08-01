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
    <div className="mt-4 p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p><strong>Created by:</strong> {course.createdBy ? course.createdBy.name : 'Unknown'}</p>
      <p><strong>Enrolled Students:</strong> {course.enrolledStudents.length}</p>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Materials</h3>
        <ul className="list-disc pl-5">
          {course.materials.length > 0 ? (
            course.materials.map((material, index) => (
              <li key={index}><a href={`/${material}`} target="_blank" rel="noopener noreferrer">{material}</a></li>
            ))
          ) : (
            <p>No materials available.</p>
          )}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Lessons</h3>
        {user.role === 'instructor' && (
          <div className="mb-4">
            <Link to={`/courses/${id}/lessons/create`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Add New Lesson
              </button>
            </Link>
          </div>
        )}
        <ul className="list-disc pl-5">
          {lessons.length > 0 ? (
            lessons.map((lesson) => (
              <li key={lesson._id}>
                <Link to={`/courses/${id}/lessons/${lesson._id}`}>
                  {lesson.title || 'No title available'}
                </Link>
              </li>
            ))
          ) : (
            <p>No lessons available.</p>
          )}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Quizzes</h3>
        {user.role === 'instructor' && (
          <div className="mb-4">
            <Link to={`/courses/${id}/quizzes/create`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Add New Quiz
              </button>
            </Link>
          </div>
        )}
        <ul className="list-disc pl-5">
          {quizzes.length > 0 ? (
            quizzes.map((quiz) => (
              <li key={quiz._id}>
                <button
                  className="text-blue-500 underline"
                  onClick={() => handleQuizClick(quiz._id)}
                >
                  {quiz.title || 'No title available'}
                </button>
                {getUserLastAttempt(quiz) !== null && (
                  <span className="ml-2 text-gray-600">(Last score: {getUserLastAttempt(quiz)})</span>
                )}
              </li>
            ))
          ) : (
            <p>No quizzes available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
