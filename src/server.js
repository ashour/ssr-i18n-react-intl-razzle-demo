import React from "react";
import express from "express";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

import App from "./common/App";
import render from "./server/render";
import messages from "./common/i18n/messages";
import { determineUserLang, dir } from "./common/i18n";

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const context = {};

    const lang = determineUserLang(req.acceptsLanguages(), req.path);

    if (req.path.trim() === "/") {
      res.redirect(`/${lang}`);
    }

    const markup = renderToString(
      <StaticRouter context={context} location={req.url} basename={`/${lang}`}>
        <App lang={lang} />
      </StaticRouter>,
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      const html = render(markup, {
        lang,
        dir: dir(lang),
        title: messages[lang]["app.title"],
      });

      res.status(200).send(html);
    }
  });

export default server;
