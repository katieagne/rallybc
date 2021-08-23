import React, { Component } from "react";
import axios from "axios";
import "./posts.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostsList from "../../components/PostsList/PostsList";
import CreatePost from "../../components/CreatePost/CreatePost";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import EditPost from "../../components/EditPost/EditPost";
import DeletePost from "../../components/DeletePost/DeletePost";
import SpecPost from "../../components/SpecPost/SpecPost";

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
    return (
      <div className="posts">
        {this.state.posts && (
          <BrowserRouter>
            <Switch>
              <Route exact path="/posts">
                <PostsList allPosts={this.state.posts} />
              </Route>
              <Route exact path="/posts/new">
                <ProtectedRoute
                  allPosts={this.state.posts}
                  component={CreatePost}
                />
              </Route>
              <Route exact path="/posts/edit/:id">
                <ProtectedRoute
                  allPosts={this.state.posts}
                  component={EditPost}
                />
              </Route>
              {/* <Route exact path="/posts/delete/:id">
                <ProtectedRoute
                  allPosts={this.state.posts}
                  component={DeletePost}
                />
              </Route> */}

              <Route
                exact
                path="/posts/delete/:id"
                render={(routerParams) => {
                  return (
                    <>
                      <DeletePost
                        {...routerParams}
                        allPosts={this.state.posts}
                      />
                    </>
                  );
                }}
              ></Route>

              <Route exact path="/posts/:id">
                <ProtectedRoute
                  allPosts={this.state.posts}
                  component={SpecPost}
                />
              </Route>
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default Posts;
