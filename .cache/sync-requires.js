// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/arseny/Documents/momsband/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/arseny/Documents/momsband/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/arseny/Documents/momsband/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/arseny/Documents/momsband/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/arseny/Documents/momsband/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/arseny/Documents/momsband/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/arseny/Documents/momsband/.cache/json/layout-index.json"),
  "alla.json": require("/Users/arseny/Documents/momsband/.cache/json/alla.json"),
  "dasha.json": require("/Users/arseny/Documents/momsband/.cache/json/dasha.json"),
  "404.json": require("/Users/arseny/Documents/momsband/.cache/json/404.json"),
  "about.json": require("/Users/arseny/Documents/momsband/.cache/json/about.json"),
  "blog.json": require("/Users/arseny/Documents/momsband/.cache/json/blog.json"),
  "index.json": require("/Users/arseny/Documents/momsband/.cache/json/index.json"),
  "404-html.json": require("/Users/arseny/Documents/momsband/.cache/json/404-html.json")
}