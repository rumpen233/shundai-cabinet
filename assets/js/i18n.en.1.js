/* Prime Minister's Office 503 — content: English part 1/2 */
window.I18N = window.I18N || {};
(function () {
  var d = (window.I18N.en = window.I18N.en || {});
  d.pages = d.pages || {};

  d.langs = { zh: "中文", ja: "日本語", en: "English" };
  d.lang = { code: "en", html: "en" };

  d.meta = {
    site: "Prime Minister's Office 503",
    siteFull: "Office of the Prime Minister of Japan",
    en: "PRIME MINISTER'S OFFICE OF JAPAN",
    emblemAlt: "Emblem",
    kanteiNo: "104th",
    cabinetName: "Shundai Cabinet",
    address: "Prime Minister's Office 503 Building, 5-3 Ōtemae 3-chōme, Chūō-ku, Osaka Metropolis",
    telLabel: "Switchboard",
    tel: "06-6005-0503",
    hours: "Office hours: weekdays 9:30–18:15 (closed at weekends, on public holidays and over the New Year period)",
    copyright: "© 2026 Prime Minister's Office 503 (Office of the Prime Minister)",
    disclaimer: "This website is the fictional setting of the work “The Shundai Cabinet”.",
    publisher: "Public Relations Office, Cabinet Secretariat"
  };

  d.ui = {
    fontsize: "Text size", normal: "Standard", large: "Large",
    aboutSite: "About this site", sitemap: "Site map", privacy: "Privacy policy", langLabel: "Language",
    searchPlaceholder: "Search this site", search: "Search",
    mainNav: "Main navigation", skip: "Skip to main content", top: "Back to top", breadcrumb: "You are here",
    home: "Home", toc: "Contents", updated: "Last updated", filter: "Filter by category", all: "All",
    noResult: "No results were found.", backList: "Back to the list of releases", related: "Related releases",
    schedule: "Press conference schedule", date: "Date", time: "Time", venue: "Venue", pressTitle: "Subject",
    scheduleNote: "Press conferences are normally held in the briefing room on the third floor of the 503 building and streamed live online. Accreditation is required in advance.",
    transcripts: "Transcripts", pages: "Pages",
    resultsFor: "Results for “{q}”", hits: "{n} results",
    searchHint: "Enter a keyword. You can search policies, news releases and press conference transcripts.",
    pressRoom: "Press conferences", next: "Next", prev: "Previous"
  };

  d.cats = { osaka: "Osaka Metropolis", kobo: "Light-Stick Culture", kantei: "The Office", press: "Press conferences", jinken: "Personnel", toukei: "Statistics", asia: "Asia Wotagei", shokudo: "Charo Diner" };

  d.nav = [
    { key: "home", href: "index.html", label: "Home" },
    { key: "about", href: "about.html", label: "About the Office" },
    { key: "pm", href: "pm.html", label: "Prime Minister" },
    { key: "cabinet", href: "cabinet.html", label: "The Cabinet" },
    { key: "policies", href: "policies.html", label: "Policies" },
    { key: "ministry", href: "ministry.html", label: "Wota-Gei Ministry" },
    { key: "osaka", href: "osaka.html", label: "Osaka Metropolis" },
    { key: "news", href: "news.html", label: "News" },
    { key: "info", href: "info.html", label: "Site information" }
  ];

  d.footer = {
    office: { title: "The Office", items: [
      ["About the Office", "about.html"], ["Structure and functions", "about.html#org"], ["Visits and attendance", "about.html#visit"], ["Location and access", "about.html#access"]
    ] },
    links: { title: "Key links", items: [
      ["Light-stick ministry", "ministry.html"], ["The Osaka Metropolis plan", "policies.html#osaka"], ["Asia Wotagei Sports Festival", "ministry.html#alg"], ["Charo Diner · Dai", "policies.html#shokudo"], ["Press conferences", "press.html"]
    ] },
    info: { title: "Site information", items: [
      ["About this site", "info.html"], ["Site map", "sitemap.html"], ["Privacy policy", "privacy.html"], ["Accessibility", "info.html#accessibility"], ["Terms of use", "info.html#terms"]
    ] },
    langTitle: "Language"
  };

  /* ---------------- home ---------------- */
  d.pages.home = {
    title: "Home", noHead: true, updated: "18 December 2026",
    blocks: [
      { t: "hero",
        kicker: "Prime Minister's Office 503 | Osaka",
        title: "Let light<br><em>become a language</em>.",
        lead: "The first Asia Wotagei Sports Festival has closed and the Osaka Metropolis Establishment Act is in force. From the Office at 503 in central Osaka, the Cabinet publishes all of its official information, to Japan and to Asia.",
        actions: [
          { label: "Message from the Prime Minister", href: "pm.html" },
          { label: "Latest releases", href: "news.html" }
        ],
        caption: "Office emblem, adopted in Reiwa 7" },
      { t: "notices", label: "Notices", items: [
        { date: "16 Dec", text: "One month of Osaka Metropolis: 120,000 arrivals, 47 headquarters relocated", href: "article.html?id=osaka-month" },
        { date: "16 Nov", text: "The Osaka Metropolis Establishment Act comes into force", href: "policies.html#osaka" },
        { date: "28 Oct", text: "Second round of light-stick performer certification opens", href: "article.html?id=kobo-cert2" }
      ] },
      { t: "sec", over: "News", title: "Latest releases", more: { label: "All releases", href: "news.html" },
        blocks: [{ t: "news", count: 6 }] },
      { t: "sec", cls: "sec--white", over: "Message", title: "Message from the Prime Minister",
        blocks: [
          { t: "quote", text: "Tokyo is a fine city, but Japan cannot have only one Tokyo. A light stick is not a toy. It is the cheapest sentence in this country — raise it, and the person opposite will answer.", name: "Muchikaku Shundai", role: "Prime Minister", src: "Speech at Ebisu Bridge, Dōtonbori, October 2026" },
          { t: "p", text: "Since taking office we have moved the Office to Osaka, built the light-stick ministry beside a university campus, and put the referendum ballot boxes in the shopping streets. Institutions do not grow out of documents. They grow at the moment people raise their arms. This website is the Cabinet's workbench: every policy, every record, every figure is here." },
          { t: "p", text: "[Read the full message](pm.html) · [List of Ministers](cabinet.html)" }
        ] },
      { t: "sec", over: "Policies", title: "Key policies", intro: "The Shundai Cabinet works to a single long-term idea — the cultural devolution of the capital — and six policies that follow from it.",
        blocks: [{ t: "cards", cols: 3, items: [
          { title: "Light-stick culture", tag: "Light-stick ministry", text: "A ministry of its own, a certification system for performers, and a public holiday for the Light-Stick Festival. Registered performers rose by 120% in six months.", href: "ministry.html", foot: "About the ministry" },
          { title: "The Osaka Metropolis", tag: "Osaka Metropolis", text: "A referendum and an Act of the Diet raised Osaka Prefecture to Osaka Metropolis, on a Yes vote of 55.6%. Japan now has two capitals.", href: "policies.html#osaka", foot: "About the Metropolis" },
          { title: "Charo Diner · Dai, the national canteen", tag: "Food culture", text: "A national canteen built on cheung fun: 11 branches in Japan and one in Hong Kong. The cheese cheung fun sells 300 portions a day.", href: "policies.html#shokudo", foot: "See the branches" },
          { title: "Moving the capital's functions", tag: "Regional renewal", text: "In the first month of the Act, some 120,000 people moved from Tokyo to Osaka and its surroundings. Technology and games companies followed.", href: "policies.html#hito", foot: "See the figures" },
          { title: "Energy drinks for certified performers", tag: "Health and labour", text: "Paid for in full by a company: free energy drinks for certified performers. Under-16s need written consent from a guardian.", href: "policies.html#energy", foot: "About the scheme" },
          { title: "The Asia Wotagei Sports Festival", tag: "International exchange", text: "The first Games were held in Osaka Castle Park: 14 countries and regions, 32,000 spectators. The second will be in 2028.", href: "ministry.html#alg", foot: "About the Games" }
        ] }] },
      { t: "sec", cls: "sec--paper2", over: "Data", title: "The Cabinet in numbers",
        blocks: [
          { t: "stats", items: [
            { value: "58.4", unit: "%", label: "Cabinet approval", note: "Office survey, December 2026" },
            { value: "1.28", unit: "m", label: "Certified performers", note: "October 2026" },
            { value: "842", unit: "bn yen", label: "Light-stick market", note: "Financial year 2025" },
            { value: "120", unit: "k", label: "Moved from Tokyo to Osaka", note: "First month after the Act" }
          ] }
        ] },
      { t: "sec", over: "The Office", title: "Office 503",
        blocks: [{ t: "split", img: "assets/img/emblem.png", alt: "Emblem of the Prime Minister's Office 503",
          blocks: [
            { t: "p", text: "The Prime Minister's Office 503 stands in Ōtemae, in the Chūō ward of Osaka. Its twelve floors hold the Prime Minister's office, the Cabinet room, seven permanent staff of the light-stick ministry, and three low stools for cats." },
            { t: "dl", items: [
              ["Location", "5-3 Ōtemae 3-chōme, Chūō-ku, Osaka Metropolis"],
              ["Size", "12 floors above ground, one below"],
              ["Completed", "1998 (originally a private office building)"],
              ["Visits", "Second and fourth Friday of each month (application required)"]
            ] },
            { t: "p", text: "[About the Office](about.html) · [Request a visit](about.html#visit)" }
          ] }] },
      { t: "sec", cls: "sec--white", over: "Press", title: "Press conferences",
        blocks: [{ t: "banner", kicker: "Next briefing", title: "Press conference after the extraordinary Cabinet meeting", text: "Friday 19 December, 15:00. Briefing room, third floor, 503 building. The Prime Minister and the Chief Cabinet Secretary will attend.", href: "press.html", label: "Transcripts" }] },
      { t: "sec", over: "Links", title: "Related information",
        blocks: [{ t: "links", items: [
          { label: "Ministry of Wota-Gei Affairs", href: "ministry.html", note: "Certification · Games · Budget" },
          { label: "Osaka Metropolis — special page", href: "osaka.html", note: "Referendum result · Coming into force" },
          { label: "The 1st Asia Wotagei Sports Festival", href: "ministry.html#alg", note: "12–18 September 2026" },
          { label: "Visits to the Office", href: "about.html#visit", note: "Second and fourth Friday" },
          { label: "Press conference transcripts", href: "press.html", note: "Full text" }
        ] }] }
    ]
  };

  /* ---------------- about ---------------- */
  d.pages.about = {
    title: "About the Office", h1: "Office 503", lead: "The Prime Minister's Office 503 stands in Ōtemae, Chūō-ku, Osaka: a twelve-storey building that houses the Prime Minister's office, the headquarters of the Light-Stick Party and the room in which the Cabinet meets.",
    crumbs: [{ label: "About the Office", href: "about.html" }], updated: "18 December 2026", toc: true,
    blocks: [
      { t: "p", text: "In June of Reiwa 6, the 104th Prime Minister, Muchikaku Shundai, set up his office in Room 503 of a student dormitory at Osaka University of Law, Politics and Economics. In July the room was given a plaque: Office of the Prime Minister (provisional), Room 503. The old residence in Nagatachō became a museum, open free of charge, saving close to Y1 billion a year in maintenance." },
      { t: "p", text: "In March of Reiwa 7 the Office moved to its present address, a twelve-storey office block in the Chūō ward of Osaka. A brass plaque by the entrance reads, in Japanese and in English, “Prime Minister's Office 503 / Prime Minister's Office of Japan”. The building code, 503, is taken from that dormitory room." },
      { t: "h2", id: "building", text: "The building" },
      { t: "table", rows: [
        ["Name", "Prime Minister's Office 503 (Office of the Prime Minister)"],
        ["Location", "5-3 Ōtemae 3-chōme, Chūō-ku, Osaka Metropolis"],
        ["Completed", "1998 (originally a private office building)"],
        ["Size", "12 floors above ground, one below"],
        ["Floor area", "18,640 m²"],
        ["Principal facilities", "Prime Minister's office (11th floor), Cabinet room (10th), briefing room (3rd), crisis management centre (basement)"],
        ["Tenants", "Light-Stick Party headquarters (4th–6th floors), Cabinet Secretariat (7th–9th), light-stick ministry liaison office (2nd)"],
        ["Roof", "Light tower, 12 m, lit on public holidays and on sitting days of the Diet"]
      ] },
      { t: "note", title: "On the name", text: "The formal name is the Office of the Prime Minister. Because of the building code and the plaque, the Government and the press generally say “the Office at 503” or “Prime Minister's Office 503”. “The 503 building” means the structure itself. Since Reiwa 7, official documents have used a single form: Prime Minister's Office 503." },
      { t: "h2", id: "history", text: "History" },
      { t: "timeline", items: [
        { date: "June 2024", title: "The 104th Cabinet takes office", text: "Muchikaku Shundai becomes Prime Minister. The office is set up provisionally in Room 503 at Osaka University of Law, Politics and Economics." },
        { date: "July 2024", title: "A plaque for the provisional office", text: "Office of the Prime Minister (provisional), Room 503. The former residence in Nagatachō becomes a museum." },
        { date: "December 2024", title: "Light-stick ministry established by law", text: "The Diet passes the Act Establishing the Ministry of Wota-Gei Affairs. The Prime Minister also serves as light-stick minister." },
        { date: "January 2025", title: "The ministry opens", text: "187 posts, in two bureaux: the Light-Stick Technique Promotion Bureau and the Idol Industry Promotion Bureau." },
        { date: "March 2025", title: "The 503 building opens", text: "The Office moves to its present address in Chūō-ku, Osaka. The brass plaque is unveiled." },
        { date: "June 2025", title: "Concert at the Budōkan", text: "The ministry's official band, WotaGood, plays a double bill with Hello Happy World to a full house of 12,000." },
        { date: "August 2025", title: "The first Light-Stick Festival", text: "10 August is observed as a public holiday for the first time." },
        { date: "October 2026", title: "The Osaka Metropolis referendum", text: "55.6% vote Yes. The establishment bill passes the Diet two weeks later." },
        { date: "November 2026", title: "Osaka Metropolis is established", text: "The Osaka Metropolis Establishment Act comes into force. The Office is fixed in Osaka." }
      ] },
      { t: "h2", id: "org", text: "Structure and functions" },
      { t: "p", text: "The Office is made up of the Cabinet Secretariat, the Cabinet Legislation Bureau and a small number of advisers reporting directly to the Prime Minister. The light-stick ministry is a separate ministry with a liaison office in the building." },
      { t: "dl", items: [
        ["Cabinet Secretariat", "The command post of the Cabinet: policy coordination, intelligence, crisis management and public relations. The Chief Cabinet Secretary is Kamito Buraku."],
        ["Cabinet Legislation Bureau", "Reviews bills and cabinet orders for constitutionality and legality. Chisato Kiryū, a counsellor, prepares the answers for questioning in the Diet."],
        ["Advisers to the Prime Minister", "Five posts, covering culture, the regions, digital policy, international affairs and “other”."],
        ["Office 503 administration", "Building management, visits, security and vehicles. 41 staff."],
        ["Light-stick ministry liaison office", "The Office's point of contact for certification, the Games and the budget. Seven staff."],
        ["Security office", "Close protection for the Prime Minister and security for the building. Staffed round the clock."]
      ] },
      { t: "h2", id: "visit", text: "Visits and attendance" },
      { t: "p", text: "The Office opens to visitors on the second and fourth Friday of each month, 40 people at a time. Applications are made online two weeks in advance. The route takes in the briefing room on the third floor, the Cabinet room on the tenth floor and the light tower on the roof." },
      { t: "ul", items: [
        "How to apply: the visit request form on this website, or the switchboard.",
        "Opening hours: 13:30–15:00, assembling at 13:15 in the ground-floor hall.",
        "Guests: children of primary school age or younger must be with a guardian; up to three guests for each applicant.",
        "Not permitted: light-emitting equipment other than light sticks, photography in the Cabinet room, touching the brass plaque.",
        "Light sticks: visitors' light sticks are kept at the entrance to the third-floor briefing room. Please return them when you leave."
      ] },
      { t: "note", title: "Attendance", text: "Cabinet meetings are held in private. Press conferences are open to accredited correspondents; accreditation is arranged through the Cabinet Press Club. For dates while the Diet is sitting, see [Press conferences](press.html)." },
      { t: "h2", id: "symbol", text: "The Office as a symbol" },
      { t: "p", text: "The White House, 10 Downing Street, the Kremlin — and now an address in Osaka on the map of world politics. This is not a figure of speech. Fixing the Office in Osaka was the first of the three steps in the Osaka Metropolis Establishment Act, and the only one already complete when the Act passed." },
      { t: "figure", src: "assets/img/mark.png", alt: "Emblem and logotype of the Prime Minister's Office 503", caption: "The Office emblem and logotype, adopted in Reiwa 7. Formed from 503, the sun disc and a wave." },
      { t: "h2", id: "access", text: "Location and access" },
      { t: "dl", items: [
        ["Address", "5-3 Ōtemae 3-chōme, Chūō-ku, Osaka Metropolis"],
        ["Train", "Osaka Metro Tanimachi and Chūō lines, Tanimachi 4-chōme station, exit 1-B, six minutes on foot"],
        ["Bus", "Osaka City Bus, Ōtemae stop, two minutes on foot"],
        ["Parking", "There is no visitor parking. Please use public transport."],
        ["Switchboard", "06-6005-0503 (weekdays 9:30–18:15)"]
      ] }
    ],
    side: [
      { title: "In this section", items: [["The building", "#building"], ["History", "#history"], ["Structure and functions", "#org"], ["Visits and attendance", "#visit"], ["Location and access", "#access"]] },
      { title: "Related", items: [["List of Ministers", "cabinet.html"], ["The Prime Minister", "pm.html"], ["Press conferences", "press.html"]] }
    ]
  };

  /* ---------------- prime minister ---------------- */
  d.pages.pm = {
    title: "Prime Minister", h1: "Muchikaku Shundai, Prime Minister", lead: "The 104th Prime Minister. Twenty-one years old, from Osaka. He is also light-stick minister and, under Article 68 of the Constitution, the minister responsible for the three departments of internal affairs, finance, and education and science.",
    crumbs: [{ label: "Prime Minister", href: "pm.html" }], updated: "18 December 2026", toc: true,
    blocks: [
      { t: "dl", items: [
        ["Name", "Muchikaku Shundai"],
        ["Date of birth", "10 August 2005 (21)"],
        ["Born", "Osaka. Third-generation Japanese of Chinese descent."],
        ["Education", "Faculty of Law, Osaka University of Law, Politics and Economics (on leave)"],
        ["Party", "The Light-Stick Party (leader)"],
        ["In office since", "23 June 2024, as the 104th Prime Minister"],
        ["Other portfolios", "Light-stick minister; internal affairs; finance; education and science"],
        ["Interests", "Cheung fun, double-skin milk pudding, BanG Dream!, wotagei"],
        ["Family", "Father, mother and grandmother; three special advisers (Kohaku Aota, Sei B and Wakun)"]
      ] },
      { t: "h2", id: "profile", text: "Career" },
      { t: "timeline", items: [
        { date: "August 2005", title: "Born", text: "Born in Osaka. The family runs a Chinese restaurant." },
        { date: "April 2023", title: "Osaka University of Law, Politics and Economics", text: "Faculty of Law. Joins the Nanboku Cheering Club." },
        { date: "April 2024", title: "Captain, Nanboku Cheering Club", text: "Captain and club president. Known in the Kansai region for his “Lightning Snake” routine." },
        { date: "June 2024", title: "Prime Minister", text: "Chosen as party leader at an extraordinary party conference and nominated as Prime Minister the same day." },
        { date: "December 2024", title: "Light-stick ministry established by law", text: "Passed on a recorded vote, with more than two thirds of the House in favour." },
        { date: "January 2025", title: "Also light-stick minister", text: "Breaks the convention that a Prime Minister does not hold a particular portfolio." },
        { date: "August 2025", title: "The first Light-Stick Festival", text: "10 August becomes a public holiday." },
        { date: "November 2026", title: "Osaka Metropolis is established", text: "The Office is permanently fixed in Osaka." }
      ] },
      { t: "h2", id: "creed", text: "Beliefs" },
      { t: "ul", items: [
        "**Politics is the art of leaving room.** Institutions must leave a gap in which people want to raise a hand.",
        "**The regions are not a substitute for the capital.** Osaka does not need to become a second Tokyo. It needs to become the first Osaka.",
        "**A mechanism that still works tomorrow is worth more than a handsome measure today.** The ministry's first budget ran to three pages."
      ] },
      { t: "h2", id: "words", text: "Quotations" },
      { t: "quote", text: "The Self-Defence Forces? They are there to stop people being squashed by monsters, aren't they?", name: "Muchikaku Shundai", role: "Extraordinary conference of the Light-Stick Party, June 2024", src: "The prepared text read: “upholding the constitutional principle of pacifism while facing present-day security requirements”" },
      { t: "quote", text: "Tokyo is a fine city, but Japan cannot have only one Tokyo.", name: "Muchikaku Shundai", role: "Speech at Ebisu Bridge, Dōtonbori, October 2026", src: "The last street speech before the Osaka Metropolis referendum" },
      { t: "quote", text: "Let all of Asia learn to raise a light stick.", name: "Muchikaku Shundai", role: "Celebration in Osaka Metropolis Central Park, November 2026", src: "" },
      { t: "h2", id: "day", text: "A day in the life" },
      { t: "table", head: ["Time", "Engagement"], rows: [
        ["07:30", "Wakes. Greets the three special advisers, one by one."],
        ["08:20", "Arrives at Office 503. Reads the day's briefing in the office on the eleventh floor."],
        ["09:00", "Cabinet meeting, tenth floor. The three advisers use their own low stools."],
        ["10:30", "Briefing by the vice-ministers. This week, the light-stick ministry budget."],
        ["12:00", "Lunch: the cheese cheung fun set in the staff canteen (Y620)."],
        ["13:30", "Meetings, inspections, preparation for questions in the Diet."],
        ["17:00", "Press conference or policy briefing."],
        ["19:30", "Party meetings; dinner with visiting ministers."],
        ["22:00", "Practice room on the third floor. Light-stick practice and band rehearsal."],
        ["24:30", "Returns to the flat in the building. Sleeps."]
      ] },
      { t: "note", title: "On the concurrent portfolios", text: "The portfolios of internal affairs, finance, and education and science are held by the Prime Minister under the power to appoint and dismiss ministers in Article 68 of the Constitution. Policy in the three ministries is advised by the special advisers — Kohaku Aota, Sei B and Wakun — and carried out by the vice-ministers. The arrangement has been in place since July of Reiwa 6. The opposition continues to call it one man in four jobs." },
      { t: "h2", id: "office", text: "The Prime Minister's office" },
      { t: "p", text: "Eleventh floor, south side, about 62 m². Three things are always on the desk: a light stick, a can of Monster Energy, and a convenience-store notepad full of things to do. On the wall hangs a copy of the nameplate from the old residence in Nagatachō." },
      { t: "p", text: "[List of Ministers](cabinet.html) · [Press conference transcripts](press.html) · [Policies](policies.html)" }
    ],
    side: [
      { title: "Contents", items: [["Career", "#profile"], ["Beliefs", "#creed"], ["Quotations", "#words"], ["A day", "#day"]] },
      { title: "Related", items: [["List of Ministers", "cabinet.html"], ["Office 503", "about.html"], ["Light-stick ministry", "ministry.html"]] }
    ]
  };

  /* ---------------- cabinet ---------------- */
  d.pages.cabinet = {
    title: "The Cabinet", h1: "The Shundai Cabinet", lead: "Formed on 23 June 2024. Fifteen ministers of state, four of those posts held by the Prime Minister, and three special advisers. The average age of the Cabinet is 20.6.",
    crumbs: [{ label: "The Cabinet", href: "cabinet.html" }], updated: "18 December 2026", toc: true,
    blocks: [
      { t: "table", caption: "The Cabinet at a glance", rows: [
        ["Formed", "23 June 2024"],
        ["Prime Minister", "Muchikaku Shundai (104th)"],
        ["Ministers of state", "15 (4 held concurrently)"],
        ["Average age", "20.6"],
        ["Special advisers", "3 (a calico, a ginger and a black cat)"],
        ["Party", "The Light-Stick Party, with outside support from sections of the LDP"]
      ] },
      { t: "h2", id: "list", text: "Ministers" },
      { t: "people", items: [
        { role: "Prime Minister", name: "Muchikaku Shundai", kana: "Shundai Muchikaku", seal: "S", bio: "A student in the Faculty of Law at Osaka University of Law, Politics and Economics. The driving force behind the light-stick ministry and the Osaka Metropolis plan. Also light-stick minister and minister for three other departments.", tags: ["!Light-stick minister", "From Osaka", "21"] },
        { role: "Chief Cabinet Secretary", name: "Kamito Buraku", kana: "Buraku Kamito", seal: "B", bio: "An old friend of the Prime Minister. Responsible for intelligence, crisis management and public relations. Known for reproducing the cats' meows with precision at press conferences.", tags: ["Chief Cabinet Secretary", "Close to the Prime Minister"] },
        { role: "Justice Minister", name: "Yuzuki Morise", kana: "Morise Yuzuki", seal: "M", bio: "Faculty of Law, Osaka University of Law, Politics and Economics. Led the legislation on conspiracy and the drafting of the Osaka Metropolis Establishment Act.", tags: ["Justice", "From Rizhao, Shandong"] },
        { role: "Foreign Minister", name: "Kaze Wakaba", kana: "Wakaba Kaze", seal: "W", bio: "A former secondary-school teacher. Negotiated the cultural exchange agreement with the fourteen countries and regions of the Asia Wotagei Sports Festival.", tags: ["Foreign affairs", "International exchange"] },
        { role: "Health, Labour and Welfare Minister", name: "Kairei Shō", kana: "Shō Kairei", seal: "S", bio: "A former teacher. Designed the caffeine limits and the consent procedure for minors. Argues with the Prime Minister about caffeine once a week.", tags: ["Health and labour", "Caffeine portfolio"] },
        { role: "Agriculture, Forestry and Fisheries Minister", name: "Raiei", kana: "Raiei", seal: "R", bio: "A senior member of the Nanboku Cheering Club and a graduate student at Osaka Metropolitan University. Drafted the energy drink scheme for certified performers.", tags: ["Agriculture", "Cheering club senior"] },
        { role: "Economy, Trade and Industry Minister", name: "Shūrei Nagasaki", kana: "Nagasaki Shūrei", seal: "N", bio: "A former teacher, returned from study abroad. Responsible for light-stick industry promotion and content exports. Designed the referendum campaign.", tags: ["Trade and industry", "Campaign"] },
        { role: "Land, Infrastructure, Transport and Tourism Minister", name: "Keiki Tachi", kana: "Tachi Keiki", seal: "T", bio: "A former teacher. Oversaw the refit of Office 503 and the transport network of Osaka Metropolis. Frequently at odds with Minister Shō.", tags: ["Infrastructure", "Office refit"] },
        { role: "Environment Minister", name: "Kazu Kondō", kana: "Kondō Kazu", seal: "K", bio: "Set the standards for recycling and disposing of light sticks. His first act in post was to change the lighting in the Office to LEDs.", tags: ["Environment", "Resource circulation"] },
        { role: "Defence Minister", name: "Reiji Hayashi", kana: "Hayashi Reiji", seal: "H", bio: "Osaka University of Law, Politics and Economics. Wrote the security plan for the referendum polling stations. Owns seventeen figma figures and is nicknamed “Reizman”.", tags: ["Defence", "Security"] },
        { role: "Digital Minister", name: "Kōu Su", kana: "Su Kōu", seal: "S", bio: "A third-year student of artificial intelligence. Designed the certification system, the open data portal and the election system.", tags: ["Digital", "Certification"] }
      ] },
      { t: "h2", id: "concurrent", text: "The three portfolios held by the Prime Minister" },
      { t: "p", text: "The portfolios of internal affairs, finance, and education and science are held by the Prime Minister under the power of appointment in Article 68 of the Constitution, which requires no consent from the Diet. Policy in the three ministries is advised by the special advisers." },
      { t: "table", head: ["Ministry", "Minister", "Special adviser", "Main policy"], rows: [
        ["Internal Affairs and Communications", "Muchikaku Shundai (concurrent)", "Kohaku Aota (calico)", "Local allocation tax; administrative reform in the host city"],
        ["Finance", "Muchikaku Shundai (concurrent)", "Sei B (ginger)", "The light-stick ministry budget; fiscal autonomy for Osaka Metropolis"],
        ["Education, Science and Technology", "Muchikaku Shundai (concurrent)", "Wakun (black)", "Light-stick technique in schools; protection of cultural property"]
      ] },
      { t: "note", title: "The opposition's criticism", text: "“One man in four jobs”, the opposition argues, breaches the sharing of responsibility on which cabinet government rests. The Chief Cabinet Secretary answered at a press conference: “On the Prime Minister's timetable those four posts sit in the same box. It is a question of efficiency, not of constitution.”" },
      { t: "h2", id: "advisors", text: "Special advisers to the Cabinet" },
      { t: "p", text: "Animals cannot be ministers of state. Under an interpretation of the Cabinet Legislation Bureau, the three cats are appointed special advisers to the Cabinet. They attend Cabinet meetings, may speak, and do not vote." },
      { t: "people", items: [
        { role: "Special adviser (internal affairs)", name: "Kohaku Aota", kana: "Aota Kohaku", seal: "A", ink: true, bio: "A calico, female. Has attended every Cabinet meeting since appointment. Prefers the window seat and takes a visible interest in the allocation of the local allocation tax.", tags: ["Calico", "Internal affairs"] },
        { role: "Special adviser (finance)", name: "Sei B", kana: "Sei B", seal: "B", ink: true, bio: "A ginger tom. Sleeps on the table during budget hearings, but Finance Ministry officials describe his nose for figures as abnormal.", tags: ["Ginger", "Finance"] },
        { role: "Special adviser (education and science)", name: "Wakun", kana: "Wakun", seal: "W", ink: true, bio: "A black tom. Fond of the top of the bookcase. Puffed himself up at the camera during his first press conference; the photograph ran on front pages around the world.", tags: ["Black cat", "Education and science"] }
      ] },
      { t: "h2", id: "officials", text: "Secretariat and Legislation Bureau" },
      { t: "table", head: ["Post", "Name", "Notes"], rows: [
        ["Deputy Chief Cabinet Secretary (administrative)", "Takahashi", "A former acting Chief Cabinet Secretary. Liaison with the ministries."],
        ["Assistant to the Deputy Chief Cabinet Secretary", "Hideki Kōno", "Accompanies the Prime Minister at all times. Before appointment he handled the Prime Minister's arrivals and diary."],
        ["Counsellor, Cabinet Legislation Bureau", "Chisato Kiryū", "Prepares answers for questioning in the Diet and reviews bills. Rimless glasses."],
        ["Director-General for Public Relations", "(vacant)", "The Public Relations Office reports directly to the Chief Cabinet Secretary."]
      ] },
      { t: "h2", id: "former", text: "Former ministers" },
      { t: "table", head: ["Name", "Post", "In office", "Reason"], rows: [
        ["Shinjirō Koizumi", "Minister of Agriculture, Forestry and Fisheries", "June 2024 – June 2025", "Dismissed on 16 June 2025 and referred to the special investigation squad of the Tokyo District Public Prosecutors Office."]
      ] },
      { t: "p", text: "[Cabinet meetings and policy](policies.html) · [Press conference transcripts](press.html)" }
    ],
    side: [
      { title: "Contents", items: [["Ministers", "#list"], ["Concurrent portfolios", "#concurrent"], ["Special advisers", "#advisors"], ["Secretariat and Legislation Bureau", "#officials"]] },
      { title: "Related", items: [["The Prime Minister", "pm.html"], ["How the Office is run", "about.html#org"], ["Light-stick ministry", "ministry.html"]] }
    ]
  };

})();
