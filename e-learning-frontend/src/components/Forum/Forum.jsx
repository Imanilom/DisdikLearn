import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Forums = () => {
  const { courseId } = useParams();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', tags: '' });
  const [searchTags, setSearchTags] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/courses/${courseId}/forums`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch forums posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [courseId, token]);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/courses/${courseId}/forums`,
        { ...newPost },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPosts([response.data, ...posts]);
      setNewPost({ title: '', content: '', tags: '' });
    } catch (err) {
      setError(err.message || 'Failed to create post');
    }
  };

  const handleSearchPosts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/courses/${courseId}/forums/search`,
        {
          params: { tags: searchTags },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPosts(response.data);
    } catch (err) {
      setError(err.message || 'Failed to search posts');
    }
  };

  const handleVotePost = async (postId, vote) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/courses/${courseId}/forums/${postId}/vote`,
        { vote },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPosts(posts.map(post => (post._id === postId ? response.data : post)));
    } catch (err) {
      setError(err.message || 'Failed to vote on post');
    }
  };

  const handleAcceptAnswer = async (postId, accepted) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/courses/${courseId}/forums/${postId}/accept`,
        { accepted },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPosts(posts.map(post => (post._id === postId ? response.data : post)));
    } catch (err) {
      setError(err.message || 'Failed to accept answer');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Forums</h2>

      <form onSubmit={handleCreatePost} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Post Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-2">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Post Content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Tags (comma-separated)"
            value={newPost.tags}
            onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Post
        </button>
      </form>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Search by tags (comma-separated)"
          value={searchTags}
          onChange={(e) => setSearchTags(e.target.value)}
        />
        <button onClick={handleSearchPosts} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
          Search Posts
        </button>
      </div>

      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="border p-4 rounded mb-4">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p>{post.content}</p>
              <p className="text-sm text-gray-500">Tags: {post.tags.join(', ')}</p>
              <p className="text-sm text-gray-500">Created by: {post.createdBy.name}</p>

              <div className="mt-4">
                <button
                  onClick={() => handleVotePost(post._id, 1)}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Upvote
                </button>
                <button
                  onClick={() => handleVotePost(post._id, -1)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Downvote
                </button>
                {post.acceptedAnswer ? (
                  <span className="ml-4 text-green-500">Answer Accepted</span>
                ) : (
                  user && user.role === 'instructor' && (
                    <button
                      onClick={() => handleAcceptAnswer(post._id, true)}
                      className="bg-blue-500 text-white px-2 py-1 rounded ml-4"
                    >
                      Accept Answer
                    </button>
                  )
                )}
              </div>

              <div className="mt-4">
                <Link to={`/courses/${courseId}/forums/${post._id}/comments`}>
                  <button className="bg-gray-500 text-white px-2 py-1 rounded">
                    View Comments
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Forums;
