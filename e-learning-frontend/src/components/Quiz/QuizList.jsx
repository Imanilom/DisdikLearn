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

  function getRandomImage() {
    const images = [
      "https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "http://www.petsworld.in/blog/wp-content/uploads/2014/09/running-cute-puppies.jpg",
      "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.unsplash.com/photo-1501265976582-c1e1b0bbaf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://wi.wallpapertip.com/wsimgs/156-1565522_puppies-desktop-wallpaper-desktop-background-puppies.jpg"
    ];
    return images[Math.floor(Math.random() * images.length)];
  }

  useEffect(() => {
    const fetchQuizzesAndCourse = async () => {
      try {
        const quizResponse = await axios.get(`/api/courses/${courseId}/quizzes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuizzes(quizResponse.data);

        const courseResponse = await axios.get(`/api/courses/${courseId}`, {
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
    return userAttempts[userAttempts.length - 1].score;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto mt-4 p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Quizzes for {course?.title}</h2>
      <div className="mb-4">
        {user.role === 'instructor' && (
          <Link to={`/courses/${courseId}/quizzes/create`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add New Quiz
            </button>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <div key={quiz._id} className="bg-white shadow-md rounded-md overflow-hidden">
              <img src={getRandomImage()} alt={quiz.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => handleQuizClick(quiz._id)}
                >
                  Start Quiz
                </button>
                {getUserLastAttempt(quiz) !== null && (
                  <p className="mt-2 text-gray-600">Last score: {getUserLastAttempt(quiz)}</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No quizzes available.</p>
        )}
      </div>
    </div>
  );
};

export default QuizList;
