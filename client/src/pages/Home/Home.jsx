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

      {/* resources section */}
      <section className="main__section-container">
        <h1 className="main__title">Resources</h1>
        <article className="main__card-container">
          <article className="main__card main__card--resources">
            <ul className="main__list">
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
            </ul>
          </article>

          <article className="main__card main__card--cta">
            <h3 className="main__cta-title">Report a wildfire</h3>
            <p className="main__cta-body">
              Immediately call 1 800 663-5555 toll-free, or *5555 on a cell
              phone to report wildfires, smoke columns and violations of
              wildfire regulations in British Columbia.
            </p>
          </article>
        </article>
      </section>

      {/* topics section */}
      <section className="main__section-container ">
        <h1 className="main__title">Topics</h1>
        <article className="main__card-container">
          <Link className="main__card-link" to="/posts">
            <article className="main__card main__card--support">
              <p className="main__card-title">Support</p>
            </article>
          </Link>
          <Link className="main__card-link" to="/posts">
            <article className="main__card main__card--general">
              <p className="main__card-title">General</p>
            </article>
          </Link>
        </article>
      </section>
    </main>
  );
};

export default Home;
