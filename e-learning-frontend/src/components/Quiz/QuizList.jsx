import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const QuizList = () => {
  const { courseId } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/courses/${courseId}/quizzes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuizzes(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch quizzes');
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [courseId, token]);

  const handleQuizClick = (quizId) => {
    const confirmMessage = "Do you want to start this quiz now? Click 'OK' to proceed or 'Cancel' to go back.";
    if (window.confirm(confirmMessage)) {
      navigate(`/courses/${courseId}/quizzes/${quizId}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-4 p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Quizzes</h2>
      <div className="mb-4">
        <Link to={`/courses/${courseId}/quizzes/create`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add New Quiz
          </button>
        </Link>
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
