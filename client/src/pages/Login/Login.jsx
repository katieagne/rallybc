import axios from "axios";
import React, { Component } from "react";
import "./login.scss";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    formData: null,
  };

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/login", this.state.formData)
      .then((res) => {
        sessionStorage.setItem("token", res.data.userToken);
        this.props.history.push("/");
      })
      .catch((e) => console.log(e.message));
  };

  render() {
    return (
      <div className="login">
        <h1 className="login__title">login</h1>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <div className="login__input-container">
            <label className="login__input-label">email</label>
            <input
              className="login__input"
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="login__input-container">
            <label className="login__input-label">password</label>
            <input
              className="login__input"
              type="password"
              name="password"
              placeholder="Your Password"
              onChange={this.handleChange}
            />
          </div>
          <button className="login__submit" type="submit">
            login
          </button>
          <Link className="login__new" to="/signup">
            create an account
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
