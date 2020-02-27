import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import GameIndex from "./pages/GameIndex";

import "bulma/css/bulma.css";

const App = () => (
  <>
    <Navbar />

    <section className="section">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games" component={GameIndex} />
        </Switch>
      </div>
    </section>
  </>
);

export default App;
