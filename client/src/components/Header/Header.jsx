import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <article className="header">
      <h1 className="header__logo">RallyBC</h1>
      <nav className="header__nav-container">
        <article className="header__links">
          <ul className="header__links-container">
            <li className="header__item">
              <Link className="header__link" to="">
                About
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </article>
      </nav>
    </article>
  );
};

export default Header;
