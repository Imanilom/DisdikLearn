import React, { useState } from "react";
import axios from "axios";
import Comments from "./Comments";

const Post = ({ post, courseId }) => {
  const [votes, setVotes] = useState(post.votes.reduce((acc, vote) => acc + vote.vote, 0));
  const [acceptedAnswer, setAcceptedAnswer] = useState(post.acceptedAnswer);

  const token = localStorage.getItem('token');

  const vote = async (voteValue) => {
    try {
      const response = await axios.patch(
        `/api/courses/${courseId}/forums/${post._id}/vote`,
        { vote: voteValue },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setVotes(response.data.votes.reduce((acc, vote) => acc + vote.vote, 0));
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const acceptAnswer = async () => {
    try {
      const response = await axios.patch(
        `/api/courses/${courseId}/forums/${post._id}/accept`,
        { accepted: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAcceptedAnswer(true);
    } catch (error) {
      console.error("Error accepting answer:", error);
    }
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Tags: {post.tags.join(", ")}</p>
      <p>Votes: {votes}</p>
      <button onClick={() => vote(1)}>Upvote</button>
      <button onClick={() => vote(-1)}>Downvote</button>
      {post.createdBy && <p>Created by: {post.createdBy.name}</p>}
      {acceptedAnswer ? (
        <p>Answer accepted</p>
      ) : (
        <button onClick={acceptAnswer}>Accept Answer</button>
      )}
      <Comments postId={post._id} courseId={courseId} />
    </div>
  );
};

export default Post;
