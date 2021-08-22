import axios from "axios";
import React from "react";

const PostForm = ({ user }) => {
  const createPost = (obj) => {
    axios.post("http://localhost:8080/api/posts", obj);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      title: e.target.title.value,
      content: e.target.content.value,
    };
    createPost(newPost);
    alert("post created!");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input type="text" name="title" />
        <label>post content</label>
        <textarea name="content" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default PostForm;
