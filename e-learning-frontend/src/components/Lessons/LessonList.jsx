// components/Lesson/LessonList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LessonList = () => {
  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/courses/${courseId}/lessons`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLessons(response.data.lessons);
      } catch (err) {
        setError(err.message || 'Failed to fetch lessons');
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [courseId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Lessons</h2>
      {lessons.length > 0 ? (
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson._id} className="border p-2 mb-2">
              <p><strong>Title:</strong> {lesson.title}</p>
              <p><strong>Content:</strong> {lesson.content}</p>
              <a href={`/courses/${courseId}/lessons/${lesson._id}`} className="text-blue-500 hover:underline">View Details</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No lessons available.</p>
      )}
    </div>
  );
};

export default LessonList;
