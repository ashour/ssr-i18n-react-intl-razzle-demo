const fs = require("fs");
const path = require("path");

// We'll be in the /build dir when this runs, so we find the template
// file relative to /build.
const htmlTemplateFilename = path.resolve(
  __dirname,
  "..",
  "src",
  "server",
  "index.html",
);

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

function render(markup, options = { lang: "", dir: "", title: "" }) {
  let html = fs.readFileSync(htmlTemplateFilename, "utf8");

  const css = assets.client.css
    ? `<link rel="stylesheet" href="${assets.client.css}">`
    : "";

  const js =
    process.env.NODE_ENV === "production"
      ? `<script src="${assets.client.js}" defer></script>`
      : `<script src="${assets.client.js}" defer crossorigin></script>`;

  if (options.lang) {
    html = html.replace("__LANG__", options.lang);
  }

  if (options.dir) {
    html = html.replace("__DIR__", options.dir);
  }

  const bulmaCss =
    options.dir && options.dir === "rtl"
      ? '<link rel="stylesheet" href="/css/bulma-rtl.min.css">'
      : '<link rel="stylesheet" href="/css/bulma.min.css">';

  if (options.title) {
    html = html.replace("<!--__TITLE__-->", options.title);
  }

  html = html.replace("<!--__HEAD__-->", [bulmaCss, css, js].join("\n"));

  html = html.replace("<!--__APP__-->", markup);

  return html;
}

export default render;
