import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LoadingErrorPage from '../Partial/LoadingErrorPage';

const LessonDetails = () => {
  const { courseId, lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [completed, setCompleted] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchLessonAndProgress = async () => {
      try {
        const [lessonResponse, progressResponse] = await Promise.all([
          axios.get(`http://localhost:3000/api/courses/${courseId}/lessons/${lessonId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          axios.get(`http://localhost:3000/api/courses/${courseId}/checkprogress`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        setLesson(lessonResponse.data);

        const completedLessons = Array.isArray(progressResponse.data.completedLessons)
          ? progressResponse.data.completedLessons.map((lesson) => lesson._id)
          : [];

        setCompleted(completedLessons.includes(lessonId));
      } catch (err) {
        setError(err.message || 'Failed to fetch lesson or progress');
      } finally {
        setLoading(false);
      }
    };

    fetchLessonAndProgress();
  }, [courseId, lessonId, token]);

  const markLessonAsComplete = async () => {
    try {
      await axios.post(
        `http://localhost:3000/api/courses/${courseId}/lessons/${lessonId}/complete`,
        {}, // Empty object for the request body if there's no data to send
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCompleted(true);
      alert('Lesson marked as complete');
    } catch (err) {
      console.log(err);
      alert('Failed to mark lesson as complete');
    }
  };

  if (loading || error) {
    return <LoadingErrorPage loading={loading} error={error} />;
  }

  return (
    <div className="container mx-auto p-4 flex justify-center">
      {lesson ? (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-screen-lg w-2/3">
          <img
            src={lesson.image || 'https://via.placeholder.com/800x400'}
            alt={lesson.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
            <div
              className="text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />
            {!completed ? (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={markLessonAsComplete}
              >
                Mark as Complete
              </button>
            ) : (
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
