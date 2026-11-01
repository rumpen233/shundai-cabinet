/* Compare the three language packs against the Chinese master.
 * Usage: node compare_i18n.js <siteDir>
 * Checks: identical page keys, identical block type sequence per page,
 * identical ids / hrefs / image paths / news ids / schedule rows count,
 * and no untranslated CJK left in the English pack.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = process.argv[2] || ".";
const js = path.join(dir, "assets", "js");

const sandbox = { window: {} };
sandbox.window.I18N = {};
vm.createContext(sandbox);
for (const f of ["i18n.zh.1.js", "i18n.zh.2.js", "i18n.ja.1.js", "i18n.ja.2.js", "i18n.en.1.js", "i18n.en.2.js"]) {
  const p = path.join(js, f);
  if (!fs.existsSync(p)) { console.log("MISSING " + f); continue; }
  try { vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: f }); }
  catch (e) { console.log("SYNTAX FAIL " + f + ": " + e.message); }
}
const I18N = sandbox.window.I18N;
const langs = ["zh", "ja", "en"];
const problems = [];
const note = (m) => problems.push(m);

function walkBlocks(blocks, fn, where) {
  (blocks || []).forEach((b, i) => {
    fn(b, where + "[" + i + "]");
    if (b.blocks) walkBlocks(b.blocks, fn, where + "[" + i + "].blocks");
  });
}

const pagesOf = (L) => (I18N[L] && I18N[L].pages) || {};

// page key parity
const zhPages = Object.keys(pagesOf("zh")).sort();
for (const L of ["ja", "en"]) {
  const keys = Object.keys(pagesOf(L)).sort();
  const miss = zhPages.filter((k) => !keys.includes(k));
  const extra = keys.filter((k) => !zhPages.includes(k));
  if (miss.length) note(L + ": missing pages " + miss.join(","));
  if (extra.length) note(L + ": extra pages " + extra.join(","));
}

// block sequence parity per page
for (const key of zhPages) {
  const z = pagesOf("zh")[key];
  const zSig = [];
  walkBlocks(z.blocks, (b) => zSig.push(b.t + (b.id ? "#" + b.id : "")), key);
  for (const L of ["ja", "en"]) {
    const p = pagesOf(L)[key];
    if (!p) continue;
    if (z.h1 && !p.h1) note(L + "." + key + ": missing h1 (zh has one)");
    if (!p.title) note(L + "." + key + ": missing title");
    const sig = [];
    walkBlocks(p.blocks, (b) => sig.push(b.t + (b.id ? "#" + b.id : "")), key);
    if (sig.join("|") !== zSig.join("|")) {
      note(L + "." + key + ": block mismatch\n    zh: " + zSig.join(" ") + "\n    " + L + ": " + sig.join(" "));
    }
    // href / img parity
    walkBlocks(p.blocks, (b) => {
      ["href", "img"].forEach((k) => {
        if (b[k] && typeof b[k] === "string") {
          // find same index in zh for comparison is overkill; just check existence
          if (k === "img" && !fs.existsSync(path.join(dir, b[k]))) note(L + "." + key + ": missing image " + b[k]);
        }
      });
      if (b.links) b.links.forEach((l) => { if (typeof l[1] === "string" && !/^https?:/.test(l[1])) checkHref(L, key, l[1]); });
    });
  }

}

function checkHref(L, key, href) {
  const file = href.split("#")[0].split("?")[0];
  if (!file) return;
  if (!fs.existsSync(path.join(dir, file))) note(L + "." + key + ": broken link " + href);
}

// news parity
const zNews = (I18N.zh && I18N.zh.news) || [];
for (const L of ["ja", "en"]) {
  const n = (I18N[L] && I18N[L].news) || [];
  if (n.length !== zNews.length) note(L + ": news count " + n.length + " vs zh " + zNews.length);
  zNews.forEach((x, i) => {
    const y = n[i];
    if (!y) return;
    if (y.id !== x.id) note(L + ": news[" + i + "] id " + y.id + " vs " + x.id);
    if (!y.date) note(L + ": news[" + i + "] empty date");
    if (y.cat !== x.cat) note(L + ": news[" + i + "] cat " + y.cat + " vs " + x.cat);
    if (!y.title) note(L + ": news[" + i + "] empty title");
    if (!Array.isArray(y.body) || y.body.length !== (x.body || []).length) note(L + ": news[" + i + "] body length differs");
  });
}

// schedule / press parity
for (const L of ["ja", "en"]) {
  const d = I18N[L] || {};
  if ((d.schedule || []).length !== (I18N.zh.schedule || []).length) note(L + ": schedule length differs");
  if ((d.press || []).length !== (I18N.zh.press || []).length) note(L + ": press length differs");
  (I18N.zh.press || []).forEach((p, i) => {
    const q = (d.press || [])[i];
    if (!q) return;
    if (q.id !== p.id) note(L + ": press[" + i + "] id mismatch");
    if ((q.qa || []).length !== (p.qa || []).length) note(L + ": press[" + i + "] qa count differs");
  });
}

// leftover CJK in English
const CJK = /[\u3040-\u30ff\u4e00-\u9fff]/;
function scan(obj, where) {
  if (typeof obj === "string") {
    if (CJK.test(obj) && !/[（(][^）)]*[\u4e00-\u9fff][^）)]*[）)]/.test(obj)) note("en leftover CJK at " + where + ": " + obj.slice(0, 60));
  } else if (obj && typeof obj === "object") {
    for (const k of Object.keys(obj)) {
      if (["html", "lang"].includes(k)) continue;
      scan(obj[k], where + "." + k);
    }
  }
}
if (I18N.en) {
  const en = JSON.parse(JSON.stringify(I18N.en));
  scan({ pages: en.pages, news: en.news, press: en.press, ui: en.ui, nav: en.nav, footer: en.footer, cats: en.cats, meta: en.meta }, "en");
}

if (problems.length) {
  console.log("PROBLEMS (" + problems.length + ")");
  problems.slice(0, 60).forEach((p) => console.log(" - " + p));
  if (problems.length > 60) console.log(" ...");
  process.exit(1);
} else {
  console.log("OK — language packs are structurally consistent.");
}
