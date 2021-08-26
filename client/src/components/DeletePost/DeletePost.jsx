import React from "react";
import "./deletePost.scss";
import { Link } from "react-router-dom";

const DeletePost = ({ match, onDelete }) => {
  return (
    <div className="delete">
      <h1 className="delete__title">delete this post?</h1>
      <button
        className="delete__button"
        onClick={() => onDelete(match.params.id)}
      >
        delete
      </button>
      <Link to="/posts">
        <button className="delete__button">Cancel</button>
      </Link>
    </div>
  );
};
export default DeletePost;
