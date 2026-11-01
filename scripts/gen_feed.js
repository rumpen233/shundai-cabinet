/* Generate assets/news.xml (Atom 1.0) from the Chinese news data.
 * Usage: node gen_feed.js <siteDir>
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = process.argv[2] || ".";
const js = path.join(dir, "assets", "js");
const sandbox = { window: { I18N: {} } };
vm.createContext(sandbox);
for (const f of ["i18n.zh.1.js", "i18n.zh.2.js"]) {
  vm.runInContext(fs.readFileSync(path.join(js, f), "utf8"), sandbox, { filename: f });
}
const D = sandbox.window.I18N.zh;
const news = D.news || [];

const site = "https://www.kantei.go.jp/503/";
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/* 2026年12月16日 -> 2026-12-16T18:00:00+09:00 */
function iso(d) {
  const m = String(d).match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (!m) return new Date().toISOString();
  const p = (n) => String(n).padStart(2, "0");
  return m[1] + "-" + p(m[2]) + "-" + p(m[3]) + "T18:00:00+09:00";
}

const updated = news.length ? iso(news[0].date) : new Date().toISOString();

const entries = news
  .map(
    (n) => `  <entry>
    <title>${esc(n.title)}</title>
    <link rel="alternate" type="text/html" href="${site}article.html?id=${encodeURIComponent(n.id)}"/>
    <id>${site}article.html?id=${encodeURIComponent(n.id)}</id>
    <updated>${iso(n.date)}</updated>
    <published>${iso(n.date)}</published>
    <category term="${esc(n.cat)}" label="${esc((D.cats || {})[n.cat] || n.cat)}"/>
    <summary type="text">${esc(n.lead || "")}</summary>
  </entry>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="zh-Hans">
  <title>${esc(D.meta.site)} — ${esc(D.cats ? "新闻发布" : "News")}</title>
  <subtitle>${esc(D.meta.siteFull || "")}</subtitle>
  <link rel="alternate" type="text/html" href="${site}news.html"/>
  <link rel="self" type="application/atom+xml" href="${site}assets/news.xml"/>
  <id>${site}news.xml</id>
  <updated>${updated}</updated>
  <author><name>${esc(D.meta.publisher || D.meta.site)}</name></author>
${entries}
</feed>
`;

const out = path.join(dir, "assets", "news.xml");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, xml, "utf8");
console.log("wrote " + out + " (" + news.length + " entries)");
