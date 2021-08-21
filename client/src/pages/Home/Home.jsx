import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="main">
      <iframe
        className="main__map"
        frameBorder="0"
        scrolling="yes"
        allowfullscreen
        src="https://arcg.is/1C9Hb90"
      ></iframe>

      <section className="main__section-container">
        <h1 className="main__title">Resources</h1>
        <article className="main__card main__card--resources">
          <ul className="main__list">
            <article className="main__list-container">
              <li className="main__list-item">
                <a
                  className="main__item-link"
                  href="http://bcfireinfo.for.gov.bc.ca/hprScripts/WildfireNews/OneFire.asp?ID="
                >
                  Wildfires of Note
                </a>
              </li>
              <li className="main__list-item">
                <a className="main__item-link" href="https://www.drivebc.ca/">
                  Drive BC
                </a>
              </li>
              <li className="main__list-item">
                <a
                  className="main__item-link"
                  href="https://www.emergencyinfobc.gov.bc.ca/"
                >
                  EmergencyInfoBC
                </a>
              </li>
            </article>
            <article className="main__list-container">
              <li className="main__list-item">
                <a
                  className="main__item-link"
                  href="https://www.emergencyinfobc.gov.bc.ca/wildfires-2021/?fbclid=IwAR05GBtu0LjRgq0miGB9JWkqTdDlykerEGmqE-bKbxlBdWu4FADIdoNj0KY"
                >
                  Current Evacuation Orders and Alerts
                </a>
              </li>
              <li className="main__list-item">
                <a className="main__item-link" href="https://ess.gov.bc.ca/">
                  Register for ESS
                </a>
              </li>
            </article>
          </ul>
        </article>
      </section>

      <section className="main__section-container">
        <h1 className="main__title">Topics</h1>
        <Link className="main__card-link" to="/support">
          <article className="main__card main__card--support">
            <p className="main__card-title">Support</p>
          </article>
        </Link>
        <Link className="main__card-link" to="/general">
          <article className="main__card main__card--general">
            <p className="main__card-title">General</p>
          </article>
        </Link>
      </section>
    </main>
  );
};

export default Home;
