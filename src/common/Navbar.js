import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import LangSwitcher from "./LangSwitcher";

function Navbar() {
  const [isActive, setActive] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className="navbar is-primary has-shadow"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <strong>
              <FormattedMessage id="app.title" />
            </strong>
          </Link>

          <a
            role="button"
            aria-label="menu"
            aria-expanded="false"
            className="navbar-burger burger"
            onClick={() => setActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              <FormattedMessage id="nav.home" />
            </Link>

            <Link to="/games" className="navbar-item">
              <FormattedMessage id="nav.games" />
            </Link>
          </div>

          <div className="navbar-end">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
