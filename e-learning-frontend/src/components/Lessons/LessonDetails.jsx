import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LessonDetails = () => {
  const { courseId, lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [completed, setCompleted] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/courses/${courseId}/lessons/${lessonId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLesson(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch lesson');
      } finally {
        setLoading(false);
      }
    };

    const fetchProgress = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/courses/${courseId}/progress`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const completedLessons = Array.isArray(response.data.completedLessons)
          ? response.data.completedLessons.map(lesson => lesson._id)
          : [];

        setCompleted(completedLessons.includes(lessonId));
      } catch (err) {
        console.error(err);
        setError(err.message || 'Failed to fetch progress');
      }
    };

    fetchLesson();
    fetchProgress();
  }, [courseId, lessonId, token]);

  const markLessonAsComplete = async () => {
    try {
      await axios.post(
        `http://localhost:3000/api/courses/${courseId}/lessons/${lessonId}/complete`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCompleted(true);
      alert('Lesson marked as complete');
    } catch (err) {
      console.error(err);
      alert('Failed to mark lesson as complete');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      {lesson ? (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
          <img
            src={lesson.imageUrl || 'https://via.placeholder.com/400x200'}
            alt={lesson.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
            <p className="text-gray-700 mb-4">{lesson.content}</p>
            {!completed && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={markLessonAsComplete}
              >
                Mark as Complete
              </button>
            )}
            {completed && (
              <p className="text-green-500 mt-4">This lesson is completed!</p>
            )}
          </div>
        </div>
      ) : (
        <p>No lesson details available.</p>
      )}
    </div>
  );
};

export default LessonDetails;
