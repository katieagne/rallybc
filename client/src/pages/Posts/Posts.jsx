import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostsList from "../../components/PostsList/PostsList";
import CreatePost from "../../components/CreatePost/CreatePost";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/posts")
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="posts">
        <h1 className="posts__title">posts page</h1>
        {this.state.posts && (
          <BrowserRouter>
            <Switch>
              <Route exact path="/posts">
                <PostsList allPosts={this.state.posts} />
              </Route>
              <Route exact path="/posts/new">
                <ProtectedRoute component={CreatePost} />
              </Route>
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default Posts;
