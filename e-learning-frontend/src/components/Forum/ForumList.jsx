import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ForumPostList = () => {
  const { courseId } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/courses/${courseId}/forums`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
              }
        });
        setPosts(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [courseId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto mt-4 p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Forum Posts</h2>
      <div className="mb-4">
        <Link to={`/courses/${courseId}/forums/create`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Create New Post
          </button>
        </Link>
      </div>
      <ul className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post._id} className="p-4 border rounded shadow-sm">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-600">{post.content}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-500">Tags: {post.tags.join(", ")}</p>
                <div className="flex items-center space-x-4">
                  <p className="text-green-600">Upvotes: {post.upvotes}</p>
                  <p className="text-red-600">Downvotes: {post.downvotes}</p>
                </div>
              </div>
              <Link
                to={`/courses/${courseId}/forums/${post._id}`}
                className="text-blue-500 underline mt-2 block"
              >
                View Post
              </Link>
            </li>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </ul>
    </div>
  );
};

export default ForumPostList;
