import React, { Component } from "react";
import axios from "axios";
import "./posts.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostsList from "../../components/PostsList/PostsList";
import CreatePost from "../../components/CreatePost/CreatePost";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import EditPost from "../../components/EditPost/EditPost";
import DeletePost from "../../components/DeletePost/DeletePost";
import up from "../../assets/icons/up-arrow.png";

class Posts extends Component {
  state = {
    posts: [],
  };

  token = sessionStorage.getItem("token");
  config = {
    headers: { Authorization: `Bearer ${this.token}` },
  };

  // scroll to top
  useEffect = () => {
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/posts")
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((error) => console.log(error));
  }

  // delete a post
  onDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/posts/${id}`, this.config)
      .then((res) => {
        this.setState({ posts: res.data });
        alert("Post is deleted");
      })
      .catch((e) => {
        alert("You need to be signed in to delete this post");
      });
  };

  render() {
    return (
      <div className="posts">
        {this.state.posts && (
          <BrowserRouter>
            <Switch>
              <Route exact path="/posts">
                <PostsList allPosts={this.state.posts} />
              </Route>

              <ProtectedRoute
                exact
                path="/posts/new"
                allPosts={this.state.posts}
                component={CreatePost}
              />

              <Route
                exact
                path="/posts/edit/:id"
                render={(routerParams) => {
                  return (
                    <>
                      <EditPost {...routerParams} allPosts={this.state.posts} />
                    </>
                  );
                }}
              ></Route>

              <Route
                exact
                path="/posts/delete/:id"
                render={(routerParams) => {
                  return (
                    <>
                      <DeletePost
                        {...routerParams}
                        allPosts={this.state.posts}
                        onDelete={this.onDelete}
                      />
                    </>
                  );
                }}
              ></Route>

              {/* <ProtectedRoute exact path="/posts/new" component={CreatePost} /> */}
            </Switch>
          </BrowserRouter>
        )}
        <button className="posts__top-btn" onClick={this.useEffect}>
          <img className="posts__btn-img" src={up} alt="arrow to scroll up" />
        </button>
      </div>
    );
  }
}

export default Posts;
