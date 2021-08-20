import axios from "axios";
import React from "react";
import "./home.scss";

const Home = () => {
  // axios.post()
  return (
    <div>
      <h1>i'm the homepage!</h1>
      <form>
        <div>
          <label>email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">login</button>
      </form>
      <iframe
        className="embed"
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        allowfullscreen
        src="https://arcg.is/1ySDDu0"
      ></iframe>
    </div>
  );
};

export default Home;
