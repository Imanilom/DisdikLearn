import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LoadingErrorPage from '../Partial/LoadingErrorPage';

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

  if (loading || error) {
    return <LoadingErrorPage loading={loading} error={error} />;
  }

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Lessons</h2>
      {lessons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lessons.map((lesson) => (
            <div key={lesson._id} className="border rounded-lg shadow-lg overflow-hidden">
              <img
                src={lesson.image || 'https://via.placeholder.com/400x200'}
                alt={lesson.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                <a href={`/courses/${courseId}/lessons/${lesson._id}`} className="text-blue-500 hover:underline">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No lessons available.</p>
      )}
    </div>
  );
};

export default LessonList;
