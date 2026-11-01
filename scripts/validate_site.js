/* Static integrity check for the kantei503 site (Node, no deps).
   Usage: node validate_site.js <siteRoot> */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = process.argv[2] || ".";
const jsDir = path.join(root, "assets", "js");
const problems = [];
const warn = [];
const note = [];

/* ---- load content as the browser would ---- */
const sandbox = { window: {}, console };
vm.createContext(sandbox);
const files = fs.readdirSync(jsDir).filter((f) => /^i18n\.(zh|ja|en)\.\d\.js$/.test(f)).sort();
for (const f of files) {
  vm.runInContext(fs.readFileSync(path.join(jsDir, f), "utf8"), sandbox, { filename: f });
}
const I18N = sandbox.window.I18N || {};
const LANGS = ["zh", "ja", "en"];

/* ---- renderers declared in app.js ---- */
const appSrc = fs.readFileSync(path.join(jsDir, "app.js"), "utf8");
const renderers = new Set();
for (const m of appSrc.matchAll(/B\.(\w+)\s*=\s*function/g)) renderers.add(m[1]);

/* ---- html pages ---- */
const pages = fs.readdirSync(root).filter((f) => f.endsWith(".html"));
const pageMeta = {};
for (const f of pages) {
  const html = fs.readFileSync(path.join(root, f), "utf8");
  const key = (/<body data-page="([^"]+)"/.exec(html) || [])[1];
  pageMeta[f] = key;
}
note.push(`pages: ${pages.length} (${pages.join(", ")})`);

/* ---- walk content ---- */
const seenTypes = new Map();
function walkBlocks(blocks, where, lang) {
  (blocks || []).forEach((b, i) => {
    if (!b || !b.t) { problems.push(`${where}[${i}] block without type`); return; }
    seenTypes.set(b.t, (seenTypes.get(b.t) || 0) + 1);
    if (!renderers.has(b.t)) problems.push(`${where}[${i}] unknown block type "${b.t}"`);
    if (b.t === "sec" || b.t === "split") walkBlocks(b.blocks, `${where}[${i}].${b.t}`, lang);
    if (b.t === "cards") checkLinks((b.items || []).map((c) => [c.foot, c.href]), `${where}[${i}].cards`, lang);
    if (b.t === "links") checkLinks((b.items || []).map((c) => [c.label, c.href]), `${where}[${i}].links`, lang);
    if (b.t === "banner") checkLinks([[b.label, b.href]], `${where}[${i}].banner`, lang);
    if (b.t === "notices") checkLinks((b.items || []).map((c) => [c.text, c.href]), `${where}[${i}].notices`, lang);
    if (b.t === "figure" || b.t === "brandbar") checkImg(b, where);
    if (b.t === "p" || b.t === "lead" || b.t === "note" || b.t === "quote") {
      const text = [b.text, b.src].filter(Boolean).join(" ");
      (text.match(/\]\(([^)]+)\)/g) || []).forEach((m) => checkLinks([["inline", m.slice(2, -1)]], where, lang));
    }
  });
}

const pageIds = {}; // file -> Set(anchor ids)
function collectIds(lang) {
  const p = I18N[lang] && I18N[lang].pages;
  if (!p) return;
  for (const k in p) {
    const set = new Set();
    (function rec(blocks) {
      (blocks || []).forEach((b) => {
        if (b.id) set.add(b.id);
        if (b.blocks) rec(b.blocks);
        if (b.t === "dl") (b.items || []).forEach((_, i) => set.add("row-" + i));
      });
    })(p[k].blocks);
    pageIds[k] = set;
  }
}

function resolvePage(link) {
  const file = link.split("#")[0];
  for (const f in pageMeta) if (f === file) return pageMeta[f];
  return null;
}

function checkImg(b, where) {
  if (!b.src && !b.img) { problems.push(`${where}: figure without src`); return; }
  const src = b.src || b.img;
  if (!fs.existsSync(path.join(root, src))) problems.push(`${where}: missing image ${src}`);
  if (!b.alt) warn.push(`${where}: image without alt (${src})`);
}

function checkLinks(items, where, lang) {
  items.forEach(([label, href]) => {
    if (!href) return;
    if (/^(https?:|mailto:|tel:)/.test(href)) return;
    const [fileRaw, hash] = href.split("#");
    const file = fileRaw.split("?")[0];
    if (!file) return;
    if (!pages.includes(file)) { problems.push(`${where} (${lang}): link to missing page "${href}"`); return; }
    if (hash) {
      const key = pageMeta[file];
      const ids = pageIds[key];
      if (ids && !ids.has(hash)) problems.push(`${where} (${lang}): anchor "#${hash}" not found in ${file}`);
    }
  });
}

/* ---- per language ---- */
for (const lang of LANGS) {
  const d = I18N[lang];
  if (!d) { warn.push(`missing language pack: ${lang}`); continue; }
  note.push(`${lang}: pages=${Object.keys(d.pages || {}).length} news=${(d.news || []).length} press=${(d.press || []).length}`);
  collectIds(lang);
  for (const key in d.pages || {}) walkBlocks(d.pages[key].blocks, `${lang}.${key}`, lang);
  (d.news || []).forEach((n, i) => {
    if (!n.id) problems.push(`${lang}.news[${i}] no id`);
    if (!d.cats[n.cat]) warn.push(`${lang}.news[${i}] unknown category "${n.cat}"`);
    (n.body || []).forEach((t, j) => (t.match(/\]\(([^)]+)\)/g) || []).forEach((m) =>
      checkLinks([["inline", m.slice(2, -1)]], `${lang}.news[${i}].body[${j}]`, lang)));
  });
  (d.nav || []).forEach((n, i) => {
    if (!pages.includes(n.href)) problems.push(`${lang}.nav[${i}]: missing page ${n.href}`);
    if (!pageMeta[n.href]) problems.push(`${lang}.nav[${i}]: page ${n.href} has no data-page`);
  });
  (d.footer ? Object.values(d.footer) : []).forEach((g) => {
    if (g && g.items) checkLinks(g.items, `${lang}.footer`, lang);
  });
  (d.pages && d.pages.news && d.pages.news.side || []).forEach((s) => checkLinks(s.items || [], `${lang}.news.side`, lang));
  for (const key in d.pages || {}) (d.pages[key].side || []).forEach((s) => checkLinks(s.items || [], `${lang}.${key}.side`, lang));
}

/* ---- required pages for every data-page key ---- */
for (const f in pageMeta) {
  const key = pageMeta[f];
  if (!key) { problems.push(`${f}: body without data-page`); continue; }
  if (I18N.zh && I18N.zh.pages && !I18N.zh.pages[key] && !["home"].includes(key)) {
    problems.push(`${f}: data-page "${key}" has no zh.pages entry`);
  }
}

/* ---- report ---- */
note.push(`block types used: ${[...seenTypes.entries()].map(([k, v]) => k + "(" + v + ")").join(" ")}`);
note.push(`renderers declared: ${[...renderers].sort().join(" ")}`);
console.log(note.map((s) => "· " + s).join("\n"));
if (warn.length) console.log("\nWARN (" + warn.length + ")\n" + warn.slice(0, 40).map((s) => "  ! " + s).join("\n"));
if (problems.length) {
  console.log("\nPROBLEMS (" + problems.length + ")\n" + problems.slice(0, 60).map((s) => "  x " + s).join("\n"));
  process.exitCode = 1;
} else {
  console.log("\nOK — no structural problems.");
}
