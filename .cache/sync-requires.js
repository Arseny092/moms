// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/arseny/Documents/momsband/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/arseny/Documents/momsband/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/arseny/Documents/momsband/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/arseny/Documents/momsband/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/arseny/Documents/momsband/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/arseny/Documents/momsband/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/arseny/Documents/momsband/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/arseny/Documents/momsband/.cache/json/404.json"),
  "about.json": require("/Users/arseny/Documents/momsband/.cache/json/about.json"),
  "index.json": require("/Users/arseny/Documents/momsband/.cache/json/index.json"),
  "404-html.json": require("/Users/arseny/Documents/momsband/.cache/json/404-html.json")
}