// components/Lesson/EditLesson.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditLesson = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (err) {
        setError(err.message || 'Failed to fetch lesson');
      }
    };

    fetchLesson();
  }, [courseId, lessonId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/api/courses/${courseId}/lessons/${lessonId}`, {
        title,
        content,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/courses/${courseId}/lessons`);
    } catch (err) {
      setError(err.message || 'Failed to update lesson');
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Edit Lesson</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
          Update Lesson
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default EditLesson;
