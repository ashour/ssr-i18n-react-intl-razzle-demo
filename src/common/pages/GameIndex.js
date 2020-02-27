import React from "react";

import games from "../data";

import "./GameIndex.css";
import Voting from "../components/Voting";

function GameIndex(props) {
  return (
    <div className="columns" style={{ flexWrap: "wrap" }}>
      {games["en"].map(game => (
        <div className="column is-one-third" key={game.id}>
          <div className="card">
            <div className="card-image">
              <figure className="image GameIndex__ImageContainer">
                <img src={game.imageUrl} className="GameIndex__Image" />
              </figure>

              <div className="card-content">
                <h3 className="title is-6" style={{ marginBottom: "0.5rem" }}>
                  {game.title}
                </h3>

                <p style={{ marginBottom: "0.5rem" }}>
                  <small>Added {game.addedOn}</small>
                </p>

                <Voting initialVoteCount={game.initialVoteCount} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameIndex;
