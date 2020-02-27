import React, { useState } from "react";

function Voting(props) {
  const [voteCount, setVoteCount] = useState(props.initialVoteCount);

  const voteCountTextClass =
    voteCount < 0 ? "has-text-danger" : "has-text-success";

  return (
    <p style={{ display: "flex", alignItems: "center" }}>
      <strong
        className={voteCountTextClass}
        style={{ marginRight: "1rem", width: "1.5rem" }}
      >
        {voteCount}
      </strong>

      <button
        className="button"
        style={{ marginRight: "0.25rem" }}
        onClick={() => setVoteCount(voteCount + 1)}
      >
        <span className="icon is-small">
          <i className="far fa-thumbs-up"></i>
        </span>
      </button>

      <button className="button" onClick={() => setVoteCount(voteCount - 1)}>
        <span className="icon is-small">
          <i className="far fa-thumbs-down"></i>
        </span>
      </button>
    </p>
  );
}

export default Voting;
