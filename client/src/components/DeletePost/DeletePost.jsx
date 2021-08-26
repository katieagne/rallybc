import axios from "axios";
import React, { Component } from "react";
import "./deletePost.scss";
import { Link } from "react-router-dom";

export default class DeletePost extends Component {
  render() {
    return (
      <div className="delete">
        <h1 className="delete__title">delete this post?</h1>
        <button
          className="delete__button"
          onClick={() => this.props.onDelete(this.props.match.params.id)}
        >
          delete
        </button>
        <Link to="/posts">
          <button className="delete__button">back to posts</button>
        </Link>
      </div>
    );
  }
}
