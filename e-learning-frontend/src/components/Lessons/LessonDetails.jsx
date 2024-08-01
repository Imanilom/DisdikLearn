// components/Lesson/LessonDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LessonDetails = () => {
  const { courseId, lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

    fetchLesson();
  }, [courseId, lessonId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-4">
      {lesson ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Lesson Details</h2>
          <p><strong>Title:</strong> {lesson.title}</p>
          <p><strong>Content:</strong> {lesson.content}</p>
        </div>
      ) : (
        <p>No lesson details available.</p>
      )}
    </div>
  );
};

export default LessonDetails;
