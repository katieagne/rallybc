import React from "react";
import axios from "axios";

const CreatePost = () => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const createPost = (obj) => {
    axios.post("http://localhost:8080/api/posts", obj, config);
    console.log("inside create post");
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
      <h1>create post</h1>
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

export default CreatePost;
