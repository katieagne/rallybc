import React from "react";
import axios from "axios";
import "./signup.scss";

const SignUp = () => {
  const createUser = (obj) => {
    axios.post("http://localhost:8080/api/users", obj);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value,
      postalCode: e.target.postalCode.value,
    };
    createUser(newUser);
    alert("submitted!!");
    // this.props.history.push("/login");
  }

  return (
    <div className="signup">
      <h1 className="signup__title">create an account</h1>
      <form className="signup__form" onSubmit={handleSubmit}>
        <div className="signup__input-container">
          <label className="signup__input-label">your email</label>
          <input
            className="signup__input"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="signup__input-container">
          <label className="signup__input-label">your name</label>
          <input
            className="signup__input"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="signup__input-container">
          <label className="signup__input-label">your password</label>
          <input
            className="signup__input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="signup__input-container">
          <label className="signup__input-label">your postal code</label>
          <input
            className="signup__input"
            type="text"
            name="postalCode"
            placeholder="Postal Code"
          />
        </div>
        <button className="signup__submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
