import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const QuizDetails = () => {
  const { courseId, quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/courses/${courseId}/quizzes/${quizId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuiz(response.data);
        setAnswers(new Array(response.data.questions.length).fill(null));
      } catch (err) {
        setError(err.message || 'Failed to fetch quiz details');
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [courseId, quizId, token]);

  const handleOptionChange = (qIndex, oIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = oIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`http://localhost:3000/api/courses/${courseId}/quizzes/${quizId}/attempt`, {
        answers,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/courses/${courseId}/quizzes`);
    } catch (err) {
      setError(err.message || 'Failed to submit quiz');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto mt-4 p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{quiz.title}</h2>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-4">
            <h3 className="text-lg font-semibold">{question.question}</h3>
            {question.options.map((option, oIndex) => (
              <div key={oIndex} className="mt-2 flex items-center">
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  checked={answers[qIndex] === oIndex}
                  onChange={() => handleOptionChange(qIndex, oIndex)}
                  className="mr-2"
                />
                <label>{option.option}</label>
              </div>
            ))}
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
        >
          {loading ? 'Submitting...' : 'Submit Answers'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default QuizDetails;
