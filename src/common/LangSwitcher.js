import React from "react";

export default function LangSwitcher() {
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">Language</a>

      <div className="navbar-dropdown is-right">
        <a className="navbar-item">English</a>
        <a className="navbar-item">Arabic (عربي)</a>
      </div>
    </div>
  );
}
