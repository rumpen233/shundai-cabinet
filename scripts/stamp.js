// Stamp every HTML shell with a content hash of the CSS/JS bundle.
//   node scripts/stamp.js .
// The hash only changes when the styles or scripts change, so the browser
// fetches new code immediately instead of waiting out GitHub Pages' 10-minute
// cache on /assets/*.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const dir = process.argv[2] || ".";
const assetDir = path.join(dir, "assets");

const files = [
  path.join(assetDir, "css", "site.css"),
  ...fs.readdirSync(path.join(assetDir, "js"))
    .filter((f) => f.endsWith(".js"))
    .sort()
    .map((f) => path.join(assetDir, "js", f)),
];

const h = crypto.createHash("md5");
for (const f of files) { h.update(fs.readFileSync(f)); h.update(path.basename(f)); }
const ver = h.digest("hex").slice(0, 8);

let touched = 0;
for (const name of fs.readdirSync(dir)) {
  if (!name.endsWith(".html") || name.startsWith("_")) continue;
  const p = path.join(dir, name);
  const before = fs.readFileSync(p, "utf8");
  let s = before;

  s = s.replace(/(assets\/css\/site\.css)(\?v=[0-9a-f]+)?/g, `$1?v=${ver}`);
  s = s.replace(/(assets\/js\/(?:app|i18n\.[a-z]{2}\.[12])\.js)(\?v=[0-9a-f]+)?/g, `$1?v=${ver}`);

  if (/name="build"/.test(s)) {
    s = s.replace(/<meta name="build" content="[^"]*">/, `<meta name="build" content="${ver}">`);
  } else {
    s = s.replace(/<meta charset="utf-8">/, `<meta charset="utf-8">\n<meta name="build" content="${ver}">`);
  }

  if (s !== before) { fs.writeFileSync(p, s); touched++; }
}

console.log(`build ${ver} — ${touched} file(s) stamped, ${files.length} asset(s) hashed`);
