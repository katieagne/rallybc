import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <article className="header">
      <Link className="header__logo-link" to="/">
        <h1 className="header__logo">RallyBC</h1>
      </Link>
      <nav className="header__nav-container">
        <article className="header__links">
          <ul className="header__links-container">
            <li className="header__item">
              <Link className="header__link" to="/about">
                About
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/login">
                Login
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/posts/new">
                post
              </Link>
            </li>
            {/* Token check to hide this^^^^^ */}
          </ul>
        </article>
      </nav>
    </article>
  );
};

export default Header;
