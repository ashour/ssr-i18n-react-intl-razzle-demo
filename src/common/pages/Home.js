import React from "react";
import { Link } from "react-router-dom";

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
          <h2 className="is-size-3">Find Your Next Game</h2>

          <p>
            Vote with thousands of other players on games and find your
            favourite!
          </p>

          <p style={{ marginTop: "1rem" }}>
            <Link to="/games" className="button is-link">
              Check out the games!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
