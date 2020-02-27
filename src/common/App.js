import React from "react";
import { IntlProvider } from "react-intl";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import messages from "./lang/messages";
import GameIndex from "./pages/GameIndex";

import "bulma/css/bulma.css";

const App = () => (
  <IntlProvider locale="en" messages={messages["en"]}>
    <Navbar />

    <section className="section">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games" component={GameIndex} />
        </Switch>
      </div>
    </section>
  </IntlProvider>
);

export default App;
