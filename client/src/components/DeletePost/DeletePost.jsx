import axios from "axios";
import React, { Component } from "react";
import "./deletePost.scss";
import { Link } from "react-router-dom";

export default class DeletePost extends Component {
  token = sessionStorage.getItem("token");
  config = {
    headers: { Authorization: `Bearer ${this.token}` },
  };

  refreshPage = () => {
    window.location.href = "/posts";
  };

  onDelete = () => {
    axios
      .delete(
        `http://localhost:8080/api/posts/${this.props.match.params.id}`,
        this.config
      )
      .then(alert("Post is deleted"));
  };

  render() {
    return (
      <div className="delete">
        <h1 className="delete__title">delete this post?</h1>
        <button className="delete__button" onClick={this.onDelete}>
          delete
        </button>
        <Link to="/posts" onClick={this.refreshPage}>
          <button className="delete__button">back to posts</button>
        </Link>
      </div>
    );
  }
}
