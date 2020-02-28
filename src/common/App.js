import React from "react";
import { IntlProvider } from "react-intl";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import { defaultLang } from "./i18n";
import messages from "./i18n/messages";
import GameIndex from "./pages/GameIndex";

const App = ({ lang }) => (
  <IntlProvider
    locale={lang}
    messages={messages[lang]}
    defaultLocale={defaultLang}
  >
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
