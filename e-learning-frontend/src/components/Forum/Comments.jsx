import React, { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ postId, courseId }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/api/courses/${courseId}/forums/${postId}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const addComment = async () => {
    try {
      const newComment = { content };
      await axios.post(
        `/api/courses/${courseId}/forums/${postId}/comments`,
        newComment,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchComments();
      setContent("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <div>
        {comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.content}</p>
            <p>By: {comment.createdBy.name}</p>
          </div>
        ))}
      </div>
      <textarea
        placeholder="Add a comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default Comments;
