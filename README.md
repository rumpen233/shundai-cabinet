# 首相官邸503 — 春黛内阁 官方网站

**在线站点：https://rumpen233.github.io/shundai-cabinet/**
**仓库：https://github.com/rumpen233/shundai-cabinet**

架空作品《春黛内阁》的设定网站。纯静态 HTML / CSS / JavaScript，无构建步骤、无外部依赖，
双击 `index.html` 即可在浏览器中打开（也可以放到任意静态服务器上）。

> 本站为虚构创作。页面底部已注明「本网站为架空作品（春黛内阁）的设定网站」。文中人物、
> 机关、政策与数字均出自原作设定，与任何现实政府无关。

## 打开方式

- 直接双击 `index.html`。
- 或在目录内启动任意静态服务器，例如 `python -m http.server 8000`，再访问 `http://localhost:8000/`。

## 部署到 GitHub Pages

仓库已按 Pages 的「Deploy from a branch」方式配置：`main` 分支根目录直接发布，
根目录的 `.nojekyll` 让 Pages 原样输出静态文件。

```bash
git add -A && git commit -m "update" && git push origin main
```


## 语言

简体中文 / 日本語 / English 三种语言，全部页面均完成翻译。

- 页头右上角与页脚底部都能切换语言。
- 语言通过 `?lang=zh|ja|en` 写入地址栏，并记忆在 `localStorage`（键名 `kantei503.lang`）。
  因此可以直接分享带语言的链接，例如 `policies.html?lang=ja`。
- 缺译时自动回退到中文，不会出现空白页面。

## 目录结构

```
kantei503/
├─ index.html            首页
├─ about.html            官邸介绍（建筑、沿革、参观、交通）
├─ pm.html               总理大臣（春黛无知觉）
├─ cabinet.html          内阁（阁僚名单、特别顾问、官房与法制局）
├─ policies.html         政策（六项主要政策）
├─ ministry.html         光棒文化振兴省（光棒省）
├─ osaka.html            大阪都（特设页，藏青配色）
├─ news.html             新闻发布（可按类别筛选）
├─ article.html          稿件正文（article.html?id=<新闻 id>）
├─ press.html            记者会见（日程与问答记录）
├─ search.html           站内搜索（search.html?q=<关键词>）
├─ info.html             网站信息
├─ sitemap.html          网站地图
├─ privacy.html          隐私政策
├─ assets/
│  ├─ css/site.css       全站样式（设计令牌、组件、响应式、打印）
│  ├─ js/app.js          渲染引擎：页头页脚、分块渲染、语言切换、搜索
│  ├─ js/i18n.zh.1.js    中文内容（第一分册）
│  ├─ js/i18n.zh.2.js    中文内容（第二分册：政策、光棒省、大阪都、新闻数据）
│  ├─ js/i18n.ja.1.js    日文内容（同上）
│  ├─ js/i18n.ja.2.js
│  ├─ js/i18n.en.1.js    英文内容（同上）
│  ├─ js/i18n.en.2.js
│  ├─ img/               徽标素材（透明 PNG）与 favicon
│  └─ news.xml           新闻发布的 Atom 订阅
└─ scripts/
   ├─ validate_site.js   结构与链接自检
   ├─ compare_i18n.js    三语文档结构比对（键、块类型、id、链接、图片）
   └─ gen_feed.js        由中文新闻数据生成 assets/news.xml
```

## 改内容

所有文案、表格、新闻都写在 `assets/js/i18n.*.js` 里，HTML 只承担外壳。三种语言文件结构
完全一致，改完中文后在对应语言文件里改同样的位置即可。

页面正文由「块」组成，块用 `t` 声明类型，`app.js` 里的 `B.*` 渲染器负责输出：

| `t` | 用途 | 主要字段 |
| --- | --- | --- |
| `p` / `lead` | 段落 / 导语 | `text` |
| `h2` / `h3` | 小标题（`h2` 会进目录） | `id`, `text` |
| `ul` / `ol` | 列表 | `items[]` |
| `dl` | 名称—内容对照表 | `rows[[名称,内容]]` |
| `table` | 表格 | `head[]`, `rows[][]`, `note` |
| `cards` | 卡片 | `items[{num,tag,title,text,links}]`, `cols` |
| `stats` | 数字栏 | `items[{v,l,n}]` |
| `quote` | 引语 | `text`, `by`, `role`, `date` |
| `note` | 提示框 | `title`, `text` |
| `links` | 链接列表 | `items[[标题,链接]]` |
| `timeline` | 年表 | `items[{time,title,text}]` |
| `people` | 人物卡（带印章字） | `items[{seal,role,name,kana,bio,tags}]` |
| `figure` | 图片 | `img`, `alt`, `cap`, `width` |
| `brandbar` | 徽标横条 | `img`, `title`, `sub`, `cls` |
| `split` | 图文两栏 | `img`, `alt`, `blocks[]` |
| `banner` | 深色行动条 | `title`, `text`, `href`, `label` |

正文里的 `**粗体**` 与 `[文字](链接)` 会被解析。

新闻、记者会见的日程与问答分别写在 `d.news`、`d.schedule`、`d.press` 数组里，
导航、页脚、分类名分别在 `d.nav`、`d.footer`、`d.cats`。

## 自检

```bash
node scripts/validate_site.js .     # 渲染器、链接、锚点、图片、类别、导航
node scripts/compare_i18n.js .      # 三种语言的结构是否完全一致
node scripts/gen_feed.js .          # 改过新闻后重新生成 assets/news.xml
node scripts/stamp.js .             # 改了 css/js 之后，刷新 HTML 里的 ?v= 版本号
```

**改过 `assets/css` 或 `assets/js` 之后一定要跑 `stamp.js`。** GitHub Pages 给
`/assets/*` 的缓存是 10 分钟，版本号不变的话，访客（包括你自己）刷新页面拿到的还是旧脚本。
`stamp.js` 用 CSS/JS 的内容哈希生成版本号，只有内容变了版本才变，同时会写入
`<meta name="build">`；页脚那行小字的 `title` 属性里也能看到 build 号，遇到「点了没反应」
之类的问题可以先对一下版本。

`validate_site.js` 会检查：每个块类型是否有对应渲染器、所有站内链接与锚点是否存在、
图片是否存在、新闻 id 与分类是否齐全、导航与页脚链接是否指向真实页面。
`compare_i18n.js` 会逐页比对三种语言的页面键、块类型顺序、id、新闻条目与记者会见的问答
数量，并检查英文版有没有漏译的中文字符。修改内容后建议两条都跑一遍。

## 设计与实现说明

- 配色取自徽标：官邸红 `#a51d1f`、墨黑 `#17130f`、象牙白 `#fcfaf5`；大阪都页用藏青 `#0b3a6f`。
- 字体使用系统字体栈（明朝体 / ゴシック体 / 衬线），不加载网络字体，离线可用。
- 页头提供字号切换（标准 / 大），设置记在 `localStorage`。
- 全站响应式：1000px 以下单栏、720px 以下移动版式；导航可横向滑动。
- 无障碍：跳转到正文的跳转链接、`aria-current` 标记当前页、表格带 `scope`、
  尊重 `prefers-reduced-motion`，并支持打印样式。
- 不需要构建：`app.js` 为普通脚本（非 ES module），`file://` 协议下也能正常运行。
