import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditQuiz = () => {
  const { courseId, quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/quizzes/${quizId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuiz(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch quiz details');
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId, token]);

  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const newQuestions = [...quiz.questions];
    newQuestions[index][name] = value;
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleOptionChange = (qIndex, oIndex, e) => {
    const { value } = e.target;
    const newQuestions = [...quiz.questions];
    newQuestions[qIndex].options[oIndex].option = value;
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleCorrectAnswerChange = (qIndex, oIndex) => {
    const newQuestions = [...quiz.questions];
    newQuestions[qIndex].correctAnswer = oIndex;
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleAddOption = (index) => {
    const newQuestions = [...quiz.questions];
    newQuestions[index].options.push({ option: '' });
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleAddQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [...quiz.questions, { question: '', options: [{ option: '' }], correctAnswer: 0 }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:3000/api/quizzes/${quizId}`, quiz, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/courses/${courseId}/quizzes`);
    } catch (err) {
      setError(err.message || 'Failed to update quiz');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-4 p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Edit Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        {quiz.questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-4">
            <label className="block text-gray-700">Question {qIndex + 1}</label>
            <input
              type="text"
              name="question"
              value={question.question}
              onChange={(e) => handleQuestionChange(qIndex, e)}
              className="border rounded px-3 py-2 w-full"
              required
            />
            {question.options.map((option, oIndex) => (
              <div key={oIndex} className="mt-2 flex items-center">
                <input
                  type="text"
                  value={option.option}
                  onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                  className="border rounded px-3 py-2 w-full"
                  required
                />
                <input
                  type="checkbox"
                  checked={question.correctAnswer === oIndex}
                  onChange={() => handleCorrectAnswerChange(qIndex, oIndex)}
                  className="ml-2"
                />
                <label className="ml-1">Correct Answer</label>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddOption(qIndex)}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300"
            >
              Add Option
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddQuestion}
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300"
        >
          Add Question
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
        >
          {loading ? 'Updating...' : 'Update Quiz'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default EditQuiz;
