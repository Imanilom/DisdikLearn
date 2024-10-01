import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CommentsPage = () => {
  const { courseId, postId } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `/api/courses/${courseId}/forums/${postId}/comments`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );
        setComments(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch comments');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [courseId, postId]);

  const handleAddComment = async () => {
    try {
      const response = await axios.post(
        `/api/courses/${courseId}/forums/${postId}/comments`,
        { content: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (err) {
      setError(err.message || 'Failed to add comment');
    }
  };

  const handleUpdateComment = async (commentId, updatedContent) => {
    try {
      const response = await axios.put(
        `/api/courses/${courseId}/forums/${postId}/comments/${commentId}`,
        { content: updatedContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments(comments.map(comment => (comment._id === commentId ? response.data : comment)));
    } catch (err) {
      setError(err.message || 'Failed to update comment');
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `/api/courses/${courseId}/forums/${postId}/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments(comments.filter(comment => comment._id !== commentId));
    } catch (err) {
      setError(err.message || 'Failed to delete comment');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto mt-4 p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment._id} className="mb-4 p-4 border rounded bg-gray-100">
            <p>{comment.content}</p>
            <small>By: {comment.createdBy.name}</small>
            {user && user._id === comment.createdBy._id && (
              <div className="mt-2">
                <button
                  className="text-blue-500 underline mr-2"
                  onClick={() => {
                    const updatedContent = prompt('Update your comment:', comment.content);
                    if (updatedContent) handleUpdateComment(comment._id, updatedContent);
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 underline"
                  onClick={() => handleDeleteComment(comment._id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No comments available.</p>
      )}

      <div className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsPage;
