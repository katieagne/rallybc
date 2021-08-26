import axios from "axios";
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

  posts = axios.get("http://localhost:8080/api/posts");

  handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: e.target.title.value,
      content: e.target.content.value,
    };

    if (!newPost.title || !newPost.content) {
      alert("Please fill out all fields");
    } else {
      axios
        .put(
          "http://localhost:8080/api/posts/" + this.props.match.params.id,
          newPost,
          this.config
        )
        .then(this.props.history.push("/posts"));
    }
  };

  changeTitle = (e) => {
    this.setState({ title: e.value });
  };
  changeContent = (e) => {
    this.setState({ content: e.value });
  };

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:8080/api/posts")
  //     .then((response) => {
  //       response.data.forEach((post) => {
  //         this.setState({
  //           postList: [...this.state.postList],
  //         });
  //       });
  //     })
  //     .then(console.log(this));
  //   // .then(this.setState({
  //   //     title: (this.itemDetails.categories),
  //   //     stock: (this.itemDetails.status === "In Stock"),
  //   // }))
  // }

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
