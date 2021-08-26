import React from "react";
import axios from "axios";
import "./createPost.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const CreatePost = () => {
  const token = sessionStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const history = useHistory();

  const createPost = (obj) => {
    axios.post("http://localhost:8080/api/posts", obj, config);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      title: e.target.title.value,
      content: e.target.content.value,
    };
    createPost(newPost);
    alert("Your post has been created!");
    history.push("/posts");
  }

  return (
    <div className="create">
      <h1 className="create__title">create post</h1>
      <form className="create__form" onSubmit={handleSubmit}>
        <div className="create__input-container">
          <label className="create__input-label">title</label>
          <input
            className="create__input"
            type="text"
            name="title"
            placeholder="Add a title"
          />
        </div>
        <div className="create__input-container">
          <label className="create__input-label">content</label>
          <textarea
            className="create__input"
            name="content"
            placeholder="Add some text"
          />
        </div>
        <button className="create__submit" type="submit">
          submit
        </button>
        <Link className="create__button" to="/posts">
          back to posts
        </Link>
      </form>
    </div>
  );
};

export default CreatePost;
