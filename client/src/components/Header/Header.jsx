import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    history.push("/");
  };
  return (
    <article className="header">
      <Link className="header__logo-link" to="/">
        <h1 className="header__logo">RallyBC</h1>
      </Link>
      <nav className="header__nav-container">
        <article className="header__links">
          <ul className="header__links-container">
            <li className="header__item">
              <Link className="header__link" to="/">
                About
              </Link>
            </li>
            <li className="header__item">
              {sessionStorage.getItem("token") === null ? (
                <Link className="header__link" to="/login">
                  Login
                </Link>
              ) : (
                <Link className="header__link" to="/" onClick={handleLogout}>
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </article>
      </nav>
    </article>
  );
};

export default Header;
