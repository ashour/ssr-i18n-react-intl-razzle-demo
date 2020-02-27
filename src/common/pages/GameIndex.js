import React from "react";
import { useIntl, FormattedMessage } from "react-intl";

import games from "../data";

import "./GameIndex.css";
import Voting from "../components/Voting";

function GameIndex(props) {
  const intl = useIntl();

  return (
    <div className="columns" style={{ flexWrap: "wrap" }}>
      {games[intl.locale].map(game => (
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
                  <small>
                    <FormattedMessage
                      id="games.addedOn"
                      values={{ addedOn: new Date(game.addedOn) }}
                    />
                  </small>
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
