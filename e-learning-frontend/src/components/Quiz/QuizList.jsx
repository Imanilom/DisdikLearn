import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const QuizList = () => {
  const { courseId } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchQuizzesAndCourse = async () => {
      try {
        // Fetch quizzes
        const quizResponse = await axios.get(`http://localhost:3000/api/courses/${courseId}/quizzes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuizzes(quizResponse.data);

        // Fetch course details
        const courseResponse = await axios.get(`http://localhost:3000/api/courses/${courseId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourse(courseResponse.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch quizzes or course details');
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzesAndCourse();
  }, [courseId, token]);

  const handleQuizClick = (quizId) => {
    const confirmMessage = "Do you want to start this quiz now? Click 'OK' to proceed or 'Cancel' to go back.";
    if (window.confirm(confirmMessage)) {
      navigate(`/courses/${courseId}/quizzes/${quizId}`);
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
      <h2 className="text-2xl font-bold mb-2">Quizzes for {course?.title}</h2>
      <div className="mb-4">
        {user.role === 'instructor' && (
          <Link to={`/courses/${courseId}/quizzes/create`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add New Quiz
            </button>
          </Link>
        )}
      </div>
      <ul className="list-disc pl-5">
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <li key={quiz._id}>
              <button
                className="text-blue-500 underline"
                onClick={() => handleQuizClick(quiz._id)}
              >
                {quiz.title}
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
  );
};

export default QuizList;
