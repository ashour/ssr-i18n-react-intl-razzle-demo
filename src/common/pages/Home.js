import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function Home() {
  return (
    <div className="Home">
      <div className="columns">
        <div className="column">
          <figure className="image">
            <img src="/img/home.jpg" />
          </figure>
        </div>

        <div className="column">
          <h2 className="is-size-3">
            <FormattedMessage id="home.title" />
          </h2>

          <p>
            <FormattedMessage id="home.lead" />
          </p>

          <p style={{ marginTop: "1rem" }}>
            <Link to="/games" className="button is-link">
              <FormattedMessage id="home.c2a" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
