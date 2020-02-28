import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./common/App";
import { determineUserLang } from "./common/i18n";

const lang = determineUserLang(
  navigator.languages || [],
  window.location.pathname,
);

hydrate(
  <BrowserRouter basename={`/${lang}`}>
    <App lang={lang} />
  </BrowserRouter>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept();
}
