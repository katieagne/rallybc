import axios from "axios";
import React, { Component } from "react";
import "./login.scss";
import { API_URL } from "../../utils/util";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    formData: null,
  };

  // config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.formData);
    axios
      .post(`${API_URL}/api/users/login`, this.state.formData)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("token", res.data.userToken);
        // this.props.history.push("/");
      })
      .catch((e) => console.log(e.message));
  };
  render() {
    console.log(this);
    return (
      <div className="login">
        <form classname="login__form" onSubmit={this.handleSubmit}>
          <div className="login__input-container">
            <label className="login__input-label">email</label>
            <input
              className="login__input"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="login__input-container">
            <label className="login__input-label">password</label>
            <input
              className="login__input"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">login</button>
          <Link to="/signup">create an account</Link>
        </form>
      </div>
    );
  }
}

export default Login;
