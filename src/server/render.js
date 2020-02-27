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

function render(markup) {
  let html = fs.readFileSync(htmlTemplateFilename, "utf8");

  const css = assets.client.css
    ? `<link rel="stylesheet" href="${assets.client.css}">`
    : "";

  const js =
    process.env.NODE_ENV === "production"
      ? `<script src="${assets.client.js}" defer></script>`
      : `<script src="${assets.client.js}" defer crossorigin></script>`;

  html = html.replace("<!--__HEAD__-->", css + "\n" + js);

  html = html.replace("<!--__APP__-->", markup);

  return html;
}

export default render;
