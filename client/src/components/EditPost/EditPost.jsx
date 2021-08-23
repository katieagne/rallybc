import React, { Component } from "react";

export default class EditPost extends Component {
  token = sessionStorage.getItem("token");
  config = {
    headers: { Authorization: `Bearer ${this.token}` },
  };

  state = {
    title: null,
    content: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const newPost = {
    //   title: e.target.title.value,
    //   content: e.target.content.value,
    // };
  };

  changeTitle = (e) => {
    this.setState({ title: e.value });
  };
  changeContent = (e) => {
    this.setState({ content: e.value });
  };

  render() {
    return (
      <div>
        <h1>i am edit post</h1>
        <form onSubmit={this.handleSubmit}>
          <label>title</label>
          <input onChange={this.changeTitle} type="text" name="title" />
          <label>content</label>
          <textarea onChange={this.changeContent} name="title" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
