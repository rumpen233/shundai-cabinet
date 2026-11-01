/* =====================================================================
   首相官邸503 — site application
   Classic script (no modules) so the site also runs from file://
   ===================================================================== */
(function () {
  "use strict";

  var LANGS = ["zh", "ja", "en"];
  var FB = "zh";
  var L = FB;
  var RAW = window.I18N || {};
  var D = null;

  /* ---------------- utils ---------------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function fmt(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  }
  function merge(base, over) {
    if (Array.isArray(base) || Array.isArray(over)) return over === undefined ? base : over;
    if (base && over && typeof base === "object" && typeof over === "object") {
      var o = {};
      for (var k in base) o[k] = merge(base[k], over[k]);
      for (var j in over) if (!(j in o)) o[j] = over[j];
      return o;
    }
    return over === undefined || over === null || over === "" ? base : over;
  }
  function q(sel, root) { return (root || document).querySelector(sel); }
  function qa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var ICON = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5 21 21"/></svg>',
    globe: '<svg class="lang-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.4 2.6 15.6 0 18M12 3c-2.6 2.4-2.6 15.6 0 18"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    arrow: "\u2192"
  };

  /* ---------------- language ---------------- */
  function readLang() {
    var m = /[?&]lang=([a-z]{2})/.exec(location.search);
    var cand = m ? m[1] : null;
    if (!cand) { try { cand = localStorage.getItem("kantei503.lang"); } catch (e) {} }
    if (LANGS.indexOf(cand) < 0) cand = FB;
    return cand;
  }
  function saveLang(l) {
    try { localStorage.setItem("kantei503.lang", l); } catch (e) {}
    var u = location.href.replace(/([?&])lang=[a-z]{2}&?/, "$1").replace(/[?&]$/, "");
    var sep = u.indexOf("?") >= 0 ? "&" : "?";
    try { history.replaceState(null, "", u + sep + "lang=" + l); } catch (e) {}
  }
  function buildData() {
    var base = RAW[FB] || {};
    D = L === FB ? base : merge(base, RAW[L] || {});
  }

  /* ---------------- shell ---------------- */
  function renderChrome() {
    var m = D.meta, u = D.ui;

    /* the shell nodes carry the component class, so ".util .wrap" etc. match */
    [["util", "util"], ["mast", "mast"], ["nav", "nav"], ["foot", "foot"]].forEach(function (p) {
      var el = q("#" + p[0]);
      if (el && el.className.indexOf(" ") < 0) el.className = p[1];
    });

    /* utility bar */
    var fs = document.documentElement.getAttribute("data-fs") === "large" ? "large" : "normal";
    q("#util").innerHTML =
      '<div class="wrap">' +
        '<div class="util-left">' +
          '<span class="util-label">' + esc(u.fontsize) + "</span>" +
          '<div class="fs-group" role="group" aria-label="' + esc(u.fontsize) + '">' +
            '<button type="button" data-fs="normal" aria-pressed="' + (fs === "normal") + '">' + esc(u.normal) + "</button>" +
            '<button type="button" data-fs="large" aria-pressed="' + (fs === "large") + '">' + esc(u.large) + "</button>" +
          "</div>" +
          '<a href="info.html">' + esc(u.aboutSite) + "</a>" +
        "</div>" +
        '<div class="util-right">' +
          '<a href="sitemap.html">' + esc(u.sitemap) + "</a>" +
          '<a href="privacy.html">' + esc(u.privacy) + "</a>" +
          '<span class="lang" role="group" aria-label="' + esc(u.langLabel) + '">' + ICON.globe +
            LANGS.map(function (l) {
              return '<button type="button" data-lang="' + l + '" lang="' + l + '" aria-pressed="' + (l === L) + '">' + esc(D.langs[l]) + "</button>";
            }).join("") +
          "</span>" +
        "</div>" +
      "</div>";

    /* masthead */
    q("#mast").innerHTML =
      '<div class="wrap">' +
        '<a class="brand" href="index.html">' +
          '<img src="assets/img/emblem.png" alt="' + esc(m.site) + ' ' + esc(m.emblemAlt) + '">' +
          '<span class="brand-txt">' +
            '<span class="brand-name">' + esc(m.site) + "</span>" +
            '<span class="brand-sub">' + esc(m.siteFull) + "</span>" +
            '<span class="brand-en">' + esc(m.en) + " · OSAKA 503</span>" +
          "</span>" +
        "</a>" +
        '<div class="mast-tools">' +
          '<form class="search" role="search" action="search.html">' +
            ICON.search +
            '<input type="search" name="q" placeholder="' + esc(u.searchPlaceholder) + '" aria-label="' + esc(u.search) + '">' +
            '<button type="submit">' + esc(u.search) + "</button>" +
          "</form>" +
          '<div class="mast-kantei">' +
            "<b>" + esc(m.kanteiNo) + "</b>" +
            "<span>" + esc(m.cabinetName) + "</span>" +
          "</div>" +
        "</div>" +
      "</div>";

    /* nav */
    var page = document.body.getAttribute("data-page") || "home";
    q("#nav").innerHTML =
      '<div class="wrap">' +
        D.nav.map(function (n) {
          var cur = n.key === page || (page === "article" && n.key === "news") || (page === "search" && n.key === "news");
          return '<a href="' + n.href + '"' + (cur ? ' aria-current="page"' : "") + ">" + esc(n.label) + "</a>";
        }).join("") +
        '<div class="nav-end"><a href="press.html">' + esc(u.pressRoom) + " " + ICON.arrow + "</a></div>" +
      "</div>";
    q("#nav").setAttribute("aria-label", u.mainNav);

    /* footer */
    var f = D.footer;
    q("#foot").innerHTML =
      '<div class="foot-top"><div class="wrap">' +
        '<div class="foot-brand">' +
          '<img src="assets/img/mark.png" alt="' + esc(m.site) + '">' +
          "<p>" + esc(m.siteFull) + "</p>" +
          "<p>" + esc(m.address) + "</p>" +
          "<p>" + esc(m.telLabel) + " " + esc(m.tel) + "</p>" +
          "<p>" + esc(m.hours) + "</p>" +
        "</div>" +
        '<div><h2>' + esc(f.office.title) + "</h2><ul>" +
          f.office.items.map(function (i) { return '<li><a href="' + i[1] + '">' + esc(i[0]) + "</a></li>"; }).join("") +
        "</ul></div>" +
        '<div><h2>' + esc(f.links.title) + "</h2><ul>" +
          f.links.items.map(function (i) { return '<li><a href="' + i[1] + '">' + esc(i[0]) + "</a></li>"; }).join("") +
        "</ul></div>" +
        '<div><h2>' + esc(f.info.title) + "</h2><ul>" +
          f.info.items.map(function (i) { return '<li><a href="' + i[1] + '">' + esc(i[0]) + "</a></li>"; }).join("") +
        "</ul>" +
        '<h2 style="margin-top:1.6rem">' + esc(f.langTitle) + "</h2>" +
        '<div class="foot-lang">' +
          LANGS.map(function (l) { return '<a href="?lang=' + l + '" data-lang="' + l + '" lang="' + l + '">' + esc(D.langs[l]) + "</a>"; }).join("") +
        "</div></div>" +
      "</div></div>" +
      '<div class="foot-bottom"><div class="wrap">' +
        "<span>" + esc(m.copyright) + "</span>" +
        '<span class="fic">' + esc(m.disclaimer) + "</span>" +
      "</div></div>";

    document.title = document.title.replace(/^.*?｜/, "");
    var sk = q("#skip"); if (sk) sk.textContent = u.skip;
    var tt = q("#totop");
    if (tt) { tt.setAttribute("aria-label", u.top); tt.innerHTML = ICON.up; }
  }

  /* ---------------- block renderers ---------------- */
  function inline(s) { return fmt(s); }

  function rowsHTML(items) {
    return items.map(function (n) {
      return '<li><a class="news-row" href="article.html?id=' + n.id + '">' +
        '<span class="news-date">' + esc(n.date) + "</span>" +
        '<span class="news-cat">' + esc(D.cats[n.cat] || n.cat) + "</span>" +
        '<span class="news-title">' + esc(n.title) + "</span>" +
        '<span class="news-arw" aria-hidden="true">' + ICON.arrow + "</span>" +
      "</a></li>";
    }).join("");
  }

  var B = {};

  B.p = function (b) { return '<p class="body-p">' + inline(b.text) + "</p>"; };
  B.lead = function (b) { return '<p class="a-lead" style="font-family:var(--serif);font-size:1.02rem;line-height:1.95;color:var(--ink);margin:0 0 1.3em">' + inline(b.text) + "</p>"; };
  B.h2 = function (b) { return '<h2 class="h"' + (b.id ? ' id="' + b.id + '"' : "") + ">" + esc(b.text) + "</h2>"; };
  B.h3 = function (b) { return '<h3 class="h3"' + (b.id ? ' id="' + b.id + '"' : "") + ">" + esc(b.text) + "</h3>"; };
  B.ul = function (b) { return "<ul>" + b.items.map(function (i) { return "<li>" + inline(i) + "</li>"; }).join("") + "</ul>"; };
  B.ol = function (b) { return "<ol>" + b.items.map(function (i) { return "<li>" + inline(i) + "</li>"; }).join("") + "</ol>"; };
  B.dl = function (b) {
    return '<div class="dl">' + b.items.map(function (i) {
      return '<div class="dl-row"><dt>' + esc(i[0]) + "</dt><dd>" + inline(i[1]) + "</dd></div>";
    }).join("") + "</div>";
  };
  B.table = function (b) {
    var h = "";
    if (b.head) {
      h = "<thead><tr>" + b.head.map(function (c) { return "<th scope=\"col\">" + esc(c) + "</th>"; }).join("") + "</tr></thead>";
    }
    var body = "<tbody>" + b.rows.map(function (r) {
      return "<tr>" + r.map(function (c, i) {
        return i === 0 && !b.head ? '<th scope="row">' + esc(c) + "</th>" : "<td>" + inline(c) + "</td>";
      }).join("") + "</tr>";
    }).join("") + "</tbody>";
    return '<div class="tbl-wrap"><table class="tbl">' +
      (b.caption ? "<caption>" + esc(b.caption) + "</caption>" : "") + h + body + "</table></div>" +
      (b.note ? '<p class="tbl-note">' + inline(b.note) + "</p>" : "");
  };
  B.cards = function (b) {
    return '<div class="cards cards--' + (b.cols || 3) + '">' + b.items.map(function (c, i) {
      var tag = c.tag ? '<div class="card-tag">' + esc(c.tag) + "</div>" : "";
      var num = c.num === false ? "" : '<div class="card-num">' + (c.num || ("0" + (i + 1)).slice(-2)) + "</div>";
      var inner = num + tag + "<h3>" + esc(c.title) + "</h3><p>" + inline(c.text) + "</p>" +
        (c.foot ? '<div class="card-foot">' + esc(c.foot) + "</div>" : "");
      return c.href
        ? '<a class="card" href="' + c.href + '">' + inner + "</a>"
        : '<div class="card">' + inner + "</div>";
    }).join("") + "</div>";
  };
  B.stats = function (b) {
    return '<div class="stats">' + b.items.map(function (s) {
      return '<div class="stat"><div class="stat-v">' + esc(s.value) +
        (s.unit ? "<small>" + esc(s.unit) + "</small>" : "") + "</div>" +
        '<div class="stat-l">' + esc(s.label) + "</div>" +
        (s.note ? '<div class="stat-n">' + esc(s.note) + "</div>" : "") + "</div>";
    }).join("") + "</div>";
  };
  B.quote = function (b) {
    return '<figure class="quote"><div class="quote-in"><div class="quote-mark" aria-hidden="true">\u201C</div><div>' +
      "<blockquote" + (b.lang ? ' lang="' + b.lang + '"' : "") + ">" + esc(b.text) + "</blockquote>" +
      "<figcaption><b>" + esc(b.name) + "</b><span>" + esc(b.role) + "</span>" +
      (b.src ? '<span style="opacity:.6">' + esc(b.src) + "</span>" : "") +
      "</figcaption></div></div></figure>";
  };
  B.note = function (b) {
    return '<div class="note">' + (b.title ? '<span class="note-t">' + esc(b.title) + "</span>" : "") +
      inline(b.text) + "</div>";
  };
  B.links = function (b) {
    return '<ul class="links">' + b.items.map(function (i) {
      return '<li><a href="' + i.href + '"><span class="ln-t">' + esc(i.label) + "</span>" +
        (i.note ? '<span class="ln-note">' + esc(i.note) + "</span>" : "") + "</a></li>";
    }).join("") + "</ul>";
  };
  B.timeline = function (b) {
    return '<ul class="tl">' + b.items.map(function (i) {
      return "<li><time>" + esc(i.date) + "</time><div class=\"tl-body\"><b>" + esc(i.title) + "</b><span>" + inline(i.text) + "</span></div></li>";
    }).join("") + "</ul>";
  };
  B.people = function (b) {
    return '<div class="people">' + b.items.map(function (p) {
      return '<article class="person">' +
        '<div class="seal' + (p.ink ? " seal--ink" : "") + '" aria-hidden="true">' + esc(p.seal || (p.name || "").slice(-1)) + "</div>" +
        "<div>" +
          '<div class="person-role">' + esc(p.role) + "</div>" +
          '<h3 class="person-name">' + esc(p.name) + "</h3>" +
          '<div class="person-kana">' + esc(p.kana || "") + "</div>" +
          '<p class="person-bio">' + inline(p.bio) + "</p>" +
          (p.tags && p.tags.length ? '<div class="person-tags">' + p.tags.map(function (t) {
            return '<span class="chip' + (t.charAt(0) === "!" ? " chip--red" : "") + '">' + esc(t.replace(/^!/, "")) + "</span>";
          }).join("") + "</div>" : "") +
        "</div></article>";
    }).join("") + "</div>";
  };
  B.figure = function (b) {
    var src = b.src || b.img, cap = b.caption || b.cap;
    return '<figure class="fig" style="--figw:' + (b.width || "30rem") + '"><img src="' + src + '" alt="' + esc(b.alt || "") + '" loading="lazy">' +
      (cap ? "<figcaption>" + esc(cap) + "</figcaption>" : "") +
      "</figure>";
  };
  B.brandbar = function (b) {
    var tag = b.href ? "a" : "div";
    return "<" + tag + ' class="brandbar' + (b.cls ? " brandbar--" + b.cls : "") + '"' +
      (b.href ? ' href="' + b.href + '"' : "") + ">" +
      '<img src="' + b.img + '" alt="' + esc(b.alt || "") + '">' +
      '<span class="brandbar-t"><b>' + esc(b.title) + "</b><span>" + esc(b.sub || "") + "</span></span>" +
      "</" + tag + ">";
  };
  B.split = function (b) {
    return '<div class="split">' +
      "<div>" + (b.img ? '<img src="' + b.img + '" alt="' + esc(b.alt || "") + '">' : "") + "</div>" +
      "<div>" + (b.blocks || []).map(renderBlock).join("") + "</div>" +
      "</div>";
  };
  B.banner = function (b) {
    return '<div class="banner"><div><div class="banner-k">' + esc(b.kicker) + "</div><h2>" + esc(b.title) + "</h2><p>" + inline(b.text) + "</p></div>" +
      '<a class="btn" href="' + b.href + '">' + esc(b.label) + " <span class=\"arw\">" + ICON.arrow + "</span></a></div>";
  };
  B.hero = function (b) {
    return '<section class="hero"><div class="wrap">' +
      '<div class="hero-txt">' +
        '<div class="hero-kicker">' + esc(b.kicker) + "</div>" +
        "<h1>" + b.title + "</h1>" +
        '<p class="hero-lead">' + inline(b.lead) + "</p>" +
        '<div class="hero-acts">' + b.actions.map(function (a, i) {
          return '<a class="btn' + (i === 0 ? " btn--red" : "") + '" href="' + a.href + '">' + esc(a.label) +
            (i === 0 ? ' <span class="arw">' + ICON.arrow + "</span>" : "") + "</a>";
        }).join("") + "</div>" +
      "</div>" +
      '<div class="hero-mark"><div><img src="assets/img/emblem.png" alt="' + esc(D.meta.site) + '"><p class="hero-cap">' + esc(b.caption || "") + "</p></div></div>" +
      '<svg class="hero-wave" viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 66C120 30 210 78 330 52 450 26 520 74 650 44 780 14 860 66 980 40 1080 19 1150 46 1200 34" fill="none" stroke="#a51d1f" stroke-width="1.4"/></svg>' +
      "</div></section>";
  };
  B.notices = function (b) {
    return '<div class="notices"><div class="wrap"><div class="notices-label">' + esc(b.label) + "</div><ul>" +
      b.items.map(function (n) {
        return "<li><time>" + esc(n.date) + "</time><a href=\"" + n.href + '">' + esc(n.text) + "</a></li>";
      }).join("") + "</ul></div></div>";
  };
  B.news = function (b) {
    var items = D.news.slice(0, b.count || 6);
    return '<ul class="news">' + rowsHTML(items) + "</ul>";
  };
  B.sec = function (b) {
    var cls = "sec" + (b.cls ? " " + b.cls : "");
    var inner = (b.blocks || []).map(renderBlock).join("");
    var head = b.title
      ? '<div class="sec-head"><div>' + (b.over ? '<span class="overline">' + esc(b.over) + "</span>" : "") +
        "<h2>" + esc(b.title) + "</h2></div>" +
        (b.more ? '<a class="sec-more" href="' + b.more.href + '">' + esc(b.more.label) + "</a>" : "") + "</div>"
      : "";
    return '<section class="' + cls + '"' + (b.id ? ' id="' + b.id + '"' : "") + '><div class="wrap">' + head +
      (b.intro ? '<p class="sec-intro">' + inline(b.intro) + "</p>" : "") + inner + "</div></section>";
  };

  function renderBlock(b) {
    var fn = B[b.t];
    return fn ? fn(b) : "<!-- unknown block: " + esc(b.t) + " -->";
  }

  /* ---------------- page ---------------- */
  function crumbsHTML(page) {
    var items = [{ label: D.ui.home, href: "index.html" }];
    (page.crumbs || []).forEach(function (c) { items.push(c); });
    return '<nav class="crumbs" aria-label="' + esc(D.ui.breadcrumb) + '">' +
      items.map(function (c, i) {
        var t = i === items.length - 1
          ? "<span>" + esc(c.label) + "</span>"
          : '<a href="' + c.href + '">' + esc(c.label) + "</a>";
        return (i ? '<span class="sep" aria-hidden="true">/</span>' : "") + t;
      }).join("") + "</nav>";
  }

  function pageHead(page) {
    return '<div class="pagehead"><div class="wrap">' +
      '<img class="ph-mark" src="assets/img/emblem.png" alt="" aria-hidden="true">' +
      crumbsHTML(page) +
      "<h1>" + esc(page.h1 || page.title) + "</h1>" +
      (page.lead ? '<p class="ph-lead">' + inline(page.lead) + "</p>" : "") +
      '<div class="ph-meta">' +
        (page.updated ? "<span>" + esc(D.ui.updated) + " " + esc(page.updated) + "</span>" : "") +
        (page.meta ? page.meta.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") : "") +
      "</div></div></div>";
  }

  function tocHTML(blocks) {
    var hs = blocks.filter(function (b) { return b.t === "h2" && b.id; });
    if (hs.length < 2) return "";
    return '<div class="toc"><h2>' + esc(D.ui.toc) + '</h2><ol>' +
      hs.map(function (h) { return '<li><a href="#' + h.id + '">' + esc(h.text) + "</a></li>"; }).join("") +
      "</ol></div>";
  }

  function sideHTML(side) {
    if (!side || !side.length) return "";
    /* drop an anchor-only block: the in-page table of contents already lists those */
    var list = side.filter(function (s) {
      if (!s.items || !s.items.length) return true;
      return !s.items.every(function (i) { return String(i[1]).charAt(0) === "#"; });
    });
    if (!list.length) return "";
    return '<aside class="side">' + list.map(function (s) {
      return '<div class="side-block"><h2>' + esc(s.title) + "</h2>" +
        (s.items
          ? '<ul class="side-links">' + s.items.map(function (i) {
              return '<li><a href="' + i[1] + '">' + esc(i[0]) + "</a></li>";
            }).join("") + "</ul>"
          : '<p class="side-note">' + inline(s.text) + "</p>") + "</div>";
    }).join("") + "</aside>";
  }

  function renderPage() {
    var key = document.body.getAttribute("data-page") || "home";
    var main = q("#main");

    if (key === "sitemap" || key === "privacy" || key === "info") {
      main.innerHTML = pageHead(D.pages[key]) + '<div class="layout"><article class="body">' +
        (D.pages[key].blocks || []).map(renderBlock).join("") +
        '<div class="updated"><span>' + esc(D.ui.updated) + " " + esc(D.pages[key].updated || "") + "</span></div>" +
        "</article>" + sideHTML(D.pages[key].side) + "</div>";
      document.title = D.pages[key].title + "｜" + D.meta.site;
      return;
    }

    if (key === "news" || key === "press" || key === "article" || key === "search") return;

    var page = D.pages[key];
    if (!page) return;
    var blocks = page.blocks || [];
    var head = page.noHead ? "" : pageHead(page);
    var toc = page.toc ? tocHTML(blocks) : "";
    var body;

    if (key === "home") {
      body = blocks.map(renderBlock).join("");
    } else {
      body = '<div class="layout"><article class="body">' + toc +
        blocks.map(renderBlock).join("") +
        '<div class="updated"><span>' + esc(D.ui.updated) + " " + esc(page.updated || "") + "</span>" +
        '<a href="#main" class="top-link">' + esc(D.ui.top) + "</a></div>" +
        "</article>" + sideHTML(page.side) + "</div>";
    }
    main.innerHTML = head + body;
    document.title = page.title + "｜" + D.meta.site;
    var md = q('meta[name="description"]');
    if (md && page.lead) md.setAttribute("content", page.lead);
  }

  /* ---------------- news page ---------------- */
  function renderNews() {
    var p = D.pages.news, main = q("#main");
    var cats = [];
    D.news.forEach(function (n) { if (cats.indexOf(n.cat) < 0) cats.push(n.cat); });
    main.innerHTML = pageHead(p) +
      '<div class="layout"><article class="body">' +
      '<div class="tagbar" role="group" aria-label="' + esc(D.ui.filter) + '">' +
        '<button type="button" data-cat="*" aria-pressed="true">' + esc(D.ui.all) + "</button>" +
        cats.map(function (c) { return '<button type="button" data-cat="' + c + '" aria-pressed="false">' + esc(D.cats[c] || c) + "</button>"; }).join("") +
      "</div>" +
      '<div id="newslist"></div>' +
      '<div class="updated"><span>' + esc(D.ui.updated) + " " + esc(p.updated || "") + "</span></div>" +
      "</article>" + sideHTML(p.side) + "</div>";

    function draw(cat) {
      var items = cat && cat !== "*" ? D.news.filter(function (n) { return n.cat === cat; }) : D.news;
      q("#newslist").innerHTML = items.length
        ? '<ul class="news">' + rowsHTML(items) + "</ul>"
        : '<p class="empty">' + esc(D.ui.noResult) + "</p>";
    }
    draw("*");
    qa(".tagbar button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        qa(".tagbar button").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        draw(btn.getAttribute("data-cat"));
      });
    });
    document.title = p.title + "｜" + D.meta.site;
  }

  /* ---------------- article page ---------------- */
  function renderArticle() {
    var id = (/[?&]id=([^&]+)/.exec(location.search) || [])[1];
    var main = q("#main");
    var idx = -1;
    D.news.forEach(function (n, i) { if (n.id === id) idx = i; });
    if (idx < 0) { main.innerHTML = pageHead(D.pages.news) + '<div class="layout"><article class="body"><p class="empty">' +
      esc(D.ui.noResult) + ' <a href="news.html">' + esc(D.ui.backList) + "</a></p></article></div>"; return; }
    var n = D.news[idx];
    var prev = D.news[idx + 1], next = D.news[idx - 1];
    main.innerHTML = '<div class="pagehead"><div class="wrap">' +
      '<img class="ph-mark" src="assets/img/emblem.png" alt="" aria-hidden="true">' +
      '<nav class="crumbs" aria-label="' + esc(D.ui.breadcrumb) + '"><a href="index.html">' + esc(D.ui.home) + '</a><span class="sep">/</span>' +
      '<a href="news.html">' + esc(D.pages.news.title) + '</a><span class="sep">/</span><span>' + esc(D.cats[n.cat] || n.cat) + "</span></nav>" +
      '<div class="a-cat">' + esc(D.cats[n.cat] || n.cat) + "</div>" +
      "<h1>" + esc(n.title) + "</h1>" +
      '<div class="article-meta"><span>' + esc(n.date) + "</span><span>" + esc(D.meta.publisher) + "</span></div>" +
      "</div></div>" +
      '<div class="layout"><article class="article-body">' +
      (n.lead ? '<p class="lead">' + inline(n.lead) + "</p>" : "") +
      (n.img ? '<figure class="fig fig--news" style="--figw:100%"><img src="' + n.img + '" alt="' + esc(n.imgAlt || "") + '" loading="lazy">' +
        (n.imgCap ? "<figcaption>" + inline(n.imgCap) + "</figcaption>" : "") + "</figure>" : "") +
      n.body.map(function (t) { return "<p>" + inline(t) + "</p>"; }).join("") +
      '<div class="article-foot"><a href="news.html">\u2190 ' + esc(D.ui.backList) + "</a>" +
      '<span style="font-size:.68rem;color:var(--muted-2)">' + esc(D.ui.updated) + " " + esc(n.date) + "</span></div>" +
      '<div class="pager">' +
        (next ? '<a class="pg-next" href="article.html?id=' + next.id + '"><span class="pg">' + esc(D.ui.next) + "</span>" + esc(next.title) + "</a>" : "") +
        (prev ? '<a class="pg-prev" href="article.html?id=' + prev.id + '"><span class="pg">' + esc(D.ui.prev) + "</span>" + esc(prev.title) + "</a>" : "") +
      "</div></article>" +
      sideHTML([{ title: D.ui.related, items: D.news.filter(function (x) { return x.id !== n.id; }).slice(0, 5).map(function (x) { return [x.title, "article.html?id=" + x.id]; }) }]) +
      "</div>";
    document.title = n.title + "｜" + D.meta.site;
  }

  /* ---------------- press ---------------- */
  function renderPress() {
    var p = D.pages.press, main = q("#main");
    main.innerHTML = pageHead(p) + '<div class="layout"><article class="body">' +
      '<h2 class="h">' + esc(D.ui.schedule) + "</h2>" +
      '<div class="tbl-wrap"><table class="tbl"><thead><tr><th scope="col">' + esc(D.ui.date) + "</th><th scope=\"col\">" +
      esc(D.ui.time) + "</th><th scope=\"col\">" + esc(D.ui.venue) + "</th><th scope=\"col\">" + esc(D.ui.pressTitle) + "</th></tr></thead><tbody>" +
      D.schedule.map(function (s) { return "<tr><td>" + esc(s.date) + "</td><td>" + esc(s.time) + "</td><td>" + esc(s.place) + "</td><td>" + esc(s.title) + "</td></tr>"; }).join("") +
      "</tbody></table></div>" +
      '<p class="tbl-note">' + inline(D.ui.scheduleNote) + "</p>" +
      '<h2 class="h">' + esc(D.ui.transcripts) + "</h2>" +
      D.press.map(function (h) {
        return '<section style="margin-bottom:2.6rem"><h3 class="h3" id="' + h.id + '">' + esc(h.title) + "</h3>" +
          '<div class="article-meta" style="margin-bottom:.9rem"><span>' + esc(h.date) + "</span><span>" + esc(h.place) + "</span><span>" + esc(h.host) + "</span></div>" +
          (h.intro ? '<p style="font-size:.85rem;color:var(--ink-2)">' + inline(h.intro) + "</p>" : "") +
          '<div class="qa">' + h.qa.map(function (x) {
            return '<div class="qa-item"><div class="qa-q"><span>' + esc(x.q) + '</span></div>' +
              '<div class="qa-a"><span>' + esc(x.a) + "</span></div>" +
              '<div class="qa-by">' + esc(x.by) + "</div></div>";
          }).join("") + "</div></section>";
      }).join("") +
      '<div class="updated"><span>' + esc(D.ui.updated) + " " + esc(p.updated || "") + "</span></div>" +
      "</article>" + sideHTML(p.side) + "</div>";
    document.title = p.title + "｜" + D.meta.site;
  }

  /* ---------------- search ---------------- */
  function textOf(blocks, out) {
    blocks.forEach(function (b) {
      ["text", "title", "lead", "intro", "caption"].forEach(function (k) { if (b[k]) out.push(String(b[k])); });
      ["items", "rows", "head"].forEach(function (k) {
        if (Array.isArray(b[k])) b[k].forEach(function (x) {
          if (Array.isArray(x)) out.push(x.join(" ")); else if (typeof x === "string") out.push(x);
        });
      });
    });
    return out.join(" ");
  }
  function renderSearch() {
    var p = D.pages.search, main = q("#main");
    var qq = decodeURIComponent((/[?&]q=([^&]*)/.exec(location.search) || [])[1] || "").replace(/\+/g, " ");
    var hits = [];
    if (qq.trim()) {
      var needle = qq.trim().toLowerCase();
      Object.keys(D.pages).forEach(function (k) {
        var pg = D.pages[k];
        if (k === "search" || k === "article") return;
        var hay = (pg.title + " " + (pg.lead || "") + " " + textOf(pg.blocks || [], [])).toLowerCase();
        if (hay.indexOf(needle) >= 0) hits.push({ cat: D.ui.pages, title: pg.title, href: k + ".html", x: pg.lead || "" });
      });
      D.news.forEach(function (n) {
        var hay = (n.title + " " + (n.lead || "") + " " + n.body.join(" ")).toLowerCase();
        if (hay.indexOf(needle) >= 0) hits.push({ cat: D.cats[n.cat] || n.cat, title: n.title, href: "article.html?id=" + n.id, x: n.lead || "" });
      });
      D.press.forEach(function (h) {
        var hay = (h.title + " " + h.qa.map(function (x) { return x.q + " " + x.a; }).join(" ")).toLowerCase();
        if (hay.indexOf(needle) >= 0) hits.push({ cat: D.ui.transcripts, title: h.title, href: "press.html#" + h.id, x: h.intro || "" });
      });
    }
    main.innerHTML = pageHead(p) + '<div class="layout"><article class="body">' +
      '<form class="search" action="search.html" style="max-width:26rem;margin-bottom:1.4rem">' + ICON.search +
        '<input type="search" name="q" value="' + esc(qq) + '" aria-label="' + esc(D.ui.search) + '">' +
        '<button type="submit">' + esc(D.ui.search) + "</button></form>" +
      (qq.trim()
        ? '<p style="font-size:.8rem;color:var(--muted)">' + esc(D.ui.resultsFor.replace("{q}", qq)) + " · " + esc(D.ui.hits.replace("{n}", hits.length)) + "</p>" +
          (hits.length
            ? '<ul class="hits">' + hits.map(function (h) {
                return '<li><span class="h-cat">' + esc(h.cat) + '</span><a class="h-t" href="' + h.href + '">' + esc(h.title) + "</a>" +
                  '<div class="h-x">' + esc(h.x.slice(0, 110)) + (h.x.length > 110 ? "\u2026" : "") + "</div></li>";
              }).join("") + "</ul>"
            : '<p class="empty">' + esc(D.ui.noResult) + "</p>")
        : '<p style="font-size:.82rem;color:var(--muted)">' + esc(D.ui.searchHint) + "</p>") +
      "</article></div>";
    document.title = p.title + "｜" + D.meta.site;
  }

  /* ---------------- boot ---------------- */
  function renderAll() {
    buildData();
    document.documentElement.setAttribute("lang", D.lang.html);
    document.documentElement.setAttribute("data-lang", L);
    renderChrome();
    var key = document.body.getAttribute("data-page") || "home";
    if (key === "news") renderNews();
    else if (key === "article") renderArticle();
    else if (key === "press") renderPress();
    else if (key === "search") renderSearch();
    else renderPage();
    if (location.hash) {
      var t = document.getElementById(location.hash.slice(1));
      if (t) setTimeout(function () { t.scrollIntoView(); }, 30);
    }
  }

  function setLang(l, focus) {
    if (LANGS.indexOf(l) < 0 || l === L) return;
    L = l;
    saveLang(l);
    renderAll();
    if (focus) {
      var b = q('.lang button[data-lang="' + l + '"]');
      if (b) b.focus();
    }
  }

  document.addEventListener("click", function (ev) {
    var t = ev.target.closest ? ev.target.closest("[data-lang],[data-fs]") : null;
    if (!t) return;
    if (t.hasAttribute("data-lang")) {
      ev.preventDefault();
      setLang(t.getAttribute("data-lang"), true);
    } else if (t.hasAttribute("data-fs")) {
      var v = t.getAttribute("data-fs");
      document.documentElement.setAttribute("data-fs", v);
      try { localStorage.setItem("kantei503.fs", v); } catch (e) {}
      qa("[data-fs]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-fs") === v)); });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    L = readLang();
    try {
      var fs = localStorage.getItem("kantei503.fs");
      if (fs) document.documentElement.setAttribute("data-fs", fs);
    } catch (e) {}
    if (!RAW[L]) L = FB;
    renderAll();

    var nav = q("#nav"), mast = q("#mast");
    var onScroll = function () {
      if (window.scrollY > 300) { q("#totop").classList.add("show"); nav.classList.add("is-stuck"); }
      else { q("#totop").classList.remove("show"); nav.classList.remove("is-stuck"); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    q("#totop").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  });
})();
