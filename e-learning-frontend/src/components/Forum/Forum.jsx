import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const { courseId } = useParams();

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/courses/${courseId}/forums`, { headers: { Authorization: `Bearer ${token}` } });
      setPosts(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const createPost = async () => {
    try {
      const newPost = { title, content, tags: tags.split(",") };
      await axios.post(
        `http://localhost:3000/api/courses/${courseId}/forums`,
        newPost,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchPosts();
      setTitle("");
      setContent("");
      setTags("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Forum</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        ></textarea>
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <button
          onClick={createPost}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Post
        </button>
      </div>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="p-4 mb-4 bg-white shadow rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
              <div className="text-sm text-gray-500">
                Tags: {post.tags.join(", ")}
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

export default Forum;
