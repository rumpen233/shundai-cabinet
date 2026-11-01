/* Prime Minister's Office 503 — content: English part 2/2 */
(function () {
  var d = (window.I18N.en = window.I18N.en || {});
  d.pages = d.pages || {};

  /* ---------------- policies ---------------- */
  d.pages.policies = {
    title: "Policies", h1: "Policies", lead: "The Shundai Cabinet's long-term axis is the cultural devolution of the capital. This page sets out the history, the figures and the argument behind six policies.",
    crumbs: [{ label: "Policies", href: "policies.html" }], updated: "18 December 2026", toc: true,
    blocks: [
      { t: "h2", id: "kobo", text: "Light-stick culture" },
      { t: "p", text: "In December 2024 the Diet passed the Act Establishing the Ministry of Light-Stick Culture on a recorded vote, with more than two thirds of the House in favour. On 1 January 2025 the ministry opened as a department in its own right, with the Prime Minister as its minister. It is the first ministry in post-war Japan to take a cultural technique as its subject." },
      { t: "p", text: "The policy rests on three pillars: **certification**, which standardises what a performer can do; **the Light-Stick Festival**, held on 10 August as a public holiday; and **industry**, meaning equipment, performance, content and exports." },
      { t: "table", caption: "Key indicators", head: ["Indicator", "Figure", "As at"], rows: [
        ["Certified performers", "1,284,000", "October 2026"],
        ["Light-stick market", "Y842 billion", "Financial year 2025"],
        ["Light-Stick Festival attendance", "410,000", "August 2026"],
        ["Overseas certification classes", "37 (12 countries and regions)", "November 2026"]
      ] },
      { t: "p", text: "For the organisation, the budget and the certification system, see [the light-stick ministry](ministry.html)." },

      { t: "h2", id: "osaka", text: "The Osaka Metropolis" },
      { t: "p", text: "The Osaka Metropolis plan had three steps: first, fix the Prime Minister's Office permanently in Osaka; second, raise Osaka Prefecture to Osaka Metropolis by referendum and by amendment of the law; third, use policy to draw people from Tokyo to Osaka. The first was complete before the Act was passed." },
      { t: "table", caption: "Referendum result, 25 October 2026", head: ["Option", "Votes", "Share"], rows: [
        ["Yes", "2,367,412", "55.6%"],
        ["No", "1,892,308", "44.4%"],
        ["Turnout", "—", "61.4%"]
      ] },
      { t: "ul", items: [
        "Five days before the vote the Prime Minister toured all twenty-four wards. At a takoyaki shop in Tennōji he cooked behind the counter and burnt two batches.",
        "The last street speech was at Ebisu Bridge in Dōtonbori: “Tokyo is a fine city, but Japan cannot have only one Tokyo.”",
        "Eighteen of the twenty-four wards voted Yes. No votes were concentrated in the residential wards to the north and east."
      ] },
      { t: "table", caption: "What the Osaka Metropolis Establishment Act changes", head: ["Item", "Before", "After"], rows: [
        ["Name", "Osaka Prefecture", "Osaka Metropolis"],
        ["Head", "Governor of Osaka Prefecture; Mayor of Osaka", "Governor of Osaka Metropolis"],
        ["Assembly", "Osaka Prefectural Assembly", "Osaka Metropolitan Assembly"],
        ["Wards and municipalities", "33 cities, 9 towns, 1 village, plus 24 wards of Osaka", "Unchanged"],
        ["Powers", "Mainly delegated national business", "Substantially extended, including fiscal autonomy"]
      ] },
      { t: "p", text: "For detail, see [the Osaka Metropolis page](osaka.html)." },
      { t: "note", title: "“Dai moves”", text: "Scholars have coined a term for the new phenomenon: the shift of Japan's political centre of gravity from Tokyo to Osaka, brought about by the policies of Muchikaku Shundai. It is non-violent, driven by culture, and achieved through soft policy. A British political scientist told the BBC: “In human history the transfer of a capital's functions has usually come with war, revolution or serious political crisis. Shundai has done it with something close to absurdity: light sticks, cheung fun and plush dolls.”" },

      { t: "h2", id: "hito", text: "Moving the capital's functions" },
      { t: "p", text: "In the month after the Act came into force, some 120,000 people moved from Tokyo to Osaka and the cities around it. Land prices in the twenty-three wards of Tokyo fell slightly; in Osaka they rose modestly. Technology and games companies moved their headquarters, giving lower office costs and a shorter distance to the light-stick ministry as their reasons." },
      { t: "stats", items: [
        { value: "120", unit: "k", label: "Arrivals in the first month", note: "16 November – 16 December 2026" },
        { value: "47", unit: "firms", label: "Headquarters relocated", note: "32 of them in technology and games" },
        { value: "−2.1", unit: "%", label: "Land prices, 23 wards of Tokyo", note: "On the previous period" }
      ] },
      { t: "ul", items: [
        "Moving costs: up to Y600,000 a household.",
        "Office rent: one third covered for the first three years.",
        "Schools: transfers handled at a single counter, with textbooks free.",
        "Health: the Ministry of Health, Labour and Welfare has added four regional medical centres in Osaka Metropolis."
      ] },
      { t: "note", title: "The argument", text: "The Governor of Tokyo and several business organisations warn of a hollowing out of Tokyo and ask the Government for additional support. The Prime Minister replied at a press conference: “Tokyo will not empty. It will simply stop being the only entrance.”" },

      { t: "h2", id: "shokudo", text: "Charo Diner · Dai, the national canteen" },
      { t: "p", text: "It began as a small shop outside the south gate of Osaka University of Law, Politics and Economics. Cheung fun is the staple; the cheese version uses Hokkaidō cheddar, diced char siu and sweetcorn. Certified performers receive a 10% discount, and the Monster Energy set is Y650." },
      { t: "table", caption: "Branches (11 in Japan, 1 overseas)", head: ["Area", "Branch", "Opened"], rows: [
        ["Osaka", "Branch 1 (south gate, Osaka University of Law, Politics and Economics)", "March 2025"],
        ["Tokyo", "Shinjuku", "June 2025"],
        ["Osaka", "Shinsaibashi", "September 2025"],
        ["Aichi", "Nagoya Sakae", "September 2025"],
        ["Fukuoka", "Tenjin", "September 2025"],
        ["Hokkaidō", "Sapporo Tanukikōji", "September 2025"],
        ["Hong Kong", "Causeway Bay (the first branch overseas)", "July 2026"]
      ] },
      { t: "p", text: "Each region has its own dish: butter and corn in Hokkaidō, miso katsu in Nagoya, mentaiko in Hakata, bitter melon with tofu in Okinawa. The Hong Kong branch sells scallop cheung fun with XO sauce at HK$88 and about 420 portions a day." },
      { t: "p", text: "Branch 1 sells 300 portions of cheese cheung fun a day, and the lunchtime queue runs to about 40 minutes. The Health, Labour and Welfare Minister, Kairei Shō, said of it: “Are you a genius or an idiot?”" },

      { t: "h2", id: "energy", text: "Energy drinks for certified performers" },
      { t: "p", text: "The scheme was drafted by the Minister of Agriculture, Forestry and Fisheries, Raiei. The Japanese subsidiary of Monster Energy pays for it in full; the Government puts in no money, only the certification platform and advertising space at events. In return the company holds the exclusive title of official energy drink of the light-stick ministry." },
      { t: "table", caption: "Allowance", head: ["Certification level", "Monthly allowance", "Notes"], rows: [
        ["Standard", "12 cans (3 a week)", "Issued automatically against the certification number"],
        ["Advanced", "24 cans", "Includes limited edition cans"],
        ["Under 16", "6 cans", "Written consent from a guardian required"]
      ] },
      { t: "ul", items: [
        "A can contains about 80 mg of caffeine. The Ministry of Health, Labour and Welfare sets a daily limit, and the system locks the account when it is exceeded.",
        "Allowances are tied to certification numbers. Resale ends certification.",
        "Applications in the first hour exceeded the capacity of the servers; the system was down for four hours.",
        "Three months after launch, sales of Monster Energy in Japan were up 230% on the year."
      ] },
      { t: "note", title: "Criticism", text: "An Asahi Shimbun editorial criticised the scheme as buying energy drinks with tax money, and noted that milk sales in campus vending machines fell over the same period. The Chief Cabinet Secretary replied: “The cost is zero. We have only made an existing habit manageable.”" },

      { t: "h2", id: "digital", text: "Digital government and open data" },
      { t: "p", text: "The Digital Minister, Kōu Su, has led three reforms: the civil service examination, in which written papers fall from 70% to 40% of the mark and are sat open-book, with new assessments of practical ability and of resilience; the legislation on conspiracy; and open data." },
      { t: "ul", items: [
        "Open data: 1,240 datasets published, including light-stick certification statistics, the referendum count records and budget execution.",
        "Certification: 3.2 days on average from application to certificate, entirely online.",
        "Elections: the Osaka Metropolis referendum was the first to use online advance registration; registration rose to 78%."
      ] },
      { t: "p", text: "[Press conference transcripts](press.html) · [The light-stick ministry](ministry.html)" }
    ],
    side: [
      { title: "Contents", items: [["Light-stick culture", "#kobo"], ["The Osaka Metropolis", "#osaka"], ["Population movement", "#hito"], ["Charo Diner", "#shokudo"], ["Energy drinks", "#energy"], ["Digital and open data", "#digital"]] },
      { title: "Related", items: [["Osaka Metropolis — special page", "osaka.html"], ["Light-stick ministry", "ministry.html"], ["The Cabinet", "cabinet.html"]] }
    ]
  };

  /* ---------------- ministry ---------------- */
  d.pages.ministry = {
    title: "Light-Stick Ministry", h1: "Ministry of Light-Stick Culture", lead: "Known as the light-stick ministry. Opened on 1 January 2025. Certification, the Light-Stick Festival and industry are its three pillars, turning a technique learned in campus clubs into national cultural policy.",
    crumbs: [{ label: "Light-Stick Ministry", href: "ministry.html" }], updated: "18 December 2026", toc: true,
    blocks: [
      { t: "dl", items: [
        ["Formal name", "Ministry of Light-Stick Culture"],
        ["Short name", "MLSC"],
        ["Established", "Act passed 20 December 2024; ministry opened 1 January 2025"],
        ["Minister", "Muchikaku Shundai (Prime Minister)"],
        ["Vice-ministers", "2, nominated by the Moriyama faction of the Liberal Democratic Party"],
        ["Posts", "187"],
        ["Budget, financial year 2026", "Y61.2 billion"],
        ["Address", "Floors 2 and 7, Prime Minister's Office 503 building"]
      ] },
      { t: "h2", id: "org", text: "Organisation" },
      { t: "table", head: ["Division", "Responsibilities"], rows: [
        ["Minister's Secretariat", "Budget, personnel and public relations. Contains the certification review office."],
        ["Light-Stick Technique Promotion Bureau", "Certification, instruction, school curricula, safety standards."],
        ["Idol Industry Promotion Bureau", "Performance facilities, venues, content exports, overseas classes."],
        ["Games secretariat", "Runs the Asia Wotagei Sports Festival."],
        ["Cultural ambassadors", "Two. Promotion at home and abroad; prize-giving."],
        ["Liaison office at the Office", "Day-to-day contact with the Cabinet Secretariat. Seven staff."]
      ] },
      { t: "h2", id: "budget", text: "Budget" },
      { t: "table", caption: "Annual budget (Y billion)", head: ["Year", "Initial budget", "Main items"], rows: [
        ["2025", "48.0", "Set-up costs; development of the certification system"],
        ["2026", "61.2", "Certification, the Festival, the Games, promotion overseas"],
        ["2027 (estimate requested)", "71.2", "The second Games, overseas classes, equipment standards"]
      ] },
      { t: "h2", id: "cert", text: "Performer certification" },
      { t: "p", text: "The system turns “can wave” into “a skill that can be recognised”. There are three levels and every application is made online. As of October 2026 there were 1,284,000 certified performers; 65% of them were women aged between 16 and 25." },
      { t: "table", head: ["Level", "Subjects", "Valid for", "Principal entitlements"], rows: [
        ["Basic", "Safe waving, the basic Lightning Snake, stage etiquette (online)", "3 years", "10% off at Charo Diner; entry to the Games"],
        ["Intermediate", "Practical test (a three-minute routine), rudiments of music theory, first aid", "3 years", "12 cans of energy drink a month"],
        ["Advanced", "Practical test (own routine), choreography, teaching practice", "5 years", "24 cans a month; limited edition cans; seeded entry to the Games"]
      ] },
      { t: "h2", id: "festival", text: "The Light-Stick Festival" },
      { t: "p", text: "Held on 10 August each year, and a public holiday. It was first observed in 2025; the second, in 2026, drew 410,000 people to Osaka Castle Park and Nakanoshima Park. The Prime Minister appeared on stage as a member of WotaGood." },
      { t: "h2", id: "alg", text: "The Asia Wotagei Sports Festival" },
      { t: "brandbar", cls: "alg", img: "assets/img/alg-osaka-full-sym.png", alt: "Emblem of the 1st Osaka Asia Wotagei Sports Festival", title: "The 1st Osaka Asia Wotagei Sports Festival", sub: "12–18 September 2026 · Osaka Castle Park" },
      { t: "p", text: "The first Games were held in Osaka Castle Park from 12 to 18 September 2026. Fourteen countries and regions sent 312 competitors. 32,000 people attended, and the live stream was watched 11.8 million times." },
      { t: "table", caption: "The first Games", head: ["Item", "Detail"], rows: [
        ["Dates", "12–18 September 2026 (7 days)"],
        ["Venue", "Special arena, Osaka Castle Park"],
        ["Competitors", "14 countries and regions; 312"],
        ["Attendance", "32,000"],
        ["Events", "Solo freestyle Lightning Snake, pairs synchronised, team choreography, endurance waving"],
        ["Overall champion", "Tarō Yamada (Osaka, Japan)"],
        ["Champion's prize", "Solid gold light stick (30 cm, 500 g)"]
      ] },
      { t: "p", text: "The prize was made by hand at an old jeweller's in Osaka: one end is engraved “First Asia Wotagei Sports Festival — Champion”, and the other carries the Prime Minister's signature. The prizes were presented by the ministry's cultural ambassadors, Rin Reiseki and Mika Ōhinata." },
      { t: "quote", text: "Osaka is going to be the second heart of this country.", name: "Muchikaku Shundai", role: "Closing ceremony of the first Games, 18 September 2026", src: "" },
      { t: "p", text: "The second Games will be held in the autumn of 2028, and the host city is to be chosen by the international committee in March 2027. The Prime Minister has promised to present the prize to the performer Hina Memiya at the second Games." },
      { t: "h2", id: "band", text: "The official band, WotaGood" },
      { t: "table", head: ["Role", "Name"], rows: [
        ["Vocals and bass", "Muchikaku Shundai"],
        ["Drums", "Keiki Tachi"],
        ["Lead guitar", "Kōu Su"],
        ["Rhythm guitar", "Reiji Hayashi"],
        ["Keyboards", "Kaze Wakaba"],
        ["Percussion and backing vocals", "Kairei Shō"],
        ["Stand-in guitar", "Yuzuki Morise"]
      ] },
      { t: "p", text: "On 15 June 2025, at the Budōkan, WotaGood played a double bill with Hello Happy World to a full house of 12,000. The original song “Sells the World”, and a reworded “Stray Dog Barks”, were much discussed." },
      { t: "h2", id: "ambassador", text: "Cultural ambassadors" },
      { t: "people", items: [
        { role: "Cultural ambassador, light-stick ministry", name: "Rin Reiseki", kana: "Reiseki Rin", seal: "R", bio: "Presented the prizes at the first Games. Runs the opening classes and the coaching of young people in the overseas classrooms.", tags: ["Cultural ambassador", "Overseas classes"] },
        { role: "Cultural ambassador, light-stick ministry", name: "Mika Ōhinata", kana: "Ōhinata Mika", seal: "O", bio: "Presented the prizes at the first Games. Tours all forty-seven prefectures under the slogan “take the light stick into the local theatre”.", tags: ["Cultural ambassador", "Regional touring"] }
      ] },
      { t: "h2", id: "data", text: "Statistics" },
      { t: "stats", items: [
        { value: "1.28", unit: "m", label: "Certified performers", note: "October 2026" },
        { value: "37", unit: "sites", label: "Overseas certification classes", note: "12 countries and regions" },
        { value: "842", unit: "bn yen", label: "Market size", note: "Financial year 2025" },
        { value: "65", unit: "%", label: "Women aged 16–25", note: "Of new certifications" }
      ] },
      { t: "p", text: "[Policies](policies.html) · [Osaka Metropolis](osaka.html) · [Press conferences](press.html)" }
    ],
    side: [
      { title: "Contents", items: [["Organisation", "#org"], ["Budget", "#budget"], ["Certification", "#cert"], ["The Festival", "#festival"], ["The Asia Games", "#alg"], ["The official band", "#band"], ["Cultural ambassadors", "#ambassador"]] },
      { title: "Related", items: [["Policies", "policies.html"], ["The Cabinet", "cabinet.html"], ["About the Light-Stick Festival", "press.html"]] }
    ]
  };

  /* ---------------- osaka ---------------- */
  d.pages.osaka = {
    title: "Osaka Metropolis", h1: "Osaka Metropolis", lead: "On 16 November 2026 Osaka Prefecture became Osaka Metropolis. The Osaka Metropolis Establishment Act came into force, and Japan entered the age of two capitals, Tokyo and Osaka. This is the Cabinet's special page.",
    crumbs: [{ label: "Policies", href: "policies.html" }, { label: "Osaka Metropolis", href: "osaka.html" }], updated: "18 December 2026", toc: true,
    blocks: [
      { t: "brandbar", img: "assets/img/osaka-to-mark.png", alt: "Emblem of Osaka Metropolis", title: "Osaka Metropolis", sub: "Established 16 November 2026" },
      { t: "h2", id: "gaiyo", text: "Overview" },
      { t: "table", rows: [
        ["Name", "Osaka Metropolis"],
        ["Established", "16 November 2026"],
        ["Area", "about 1,905 km²"],
        ["Population", "about 8.78 million"],
        ["Wards and municipalities", "33 cities, 9 towns, 1 village, plus 24 wards of Osaka (unchanged)"],
        ["Seat of government", "Chūō-ku, Osaka (the former prefectural offices)"],
        ["Governor", "The first Governor of Osaka Metropolis (took office 16 November 2026)"],
        ["Assembly", "88 members"]
      ] },
      { t: "p", text: "Administration is carried out by the Osaka Metropolitan Government. The Prime Minister's Office 503 is responsible for coordination between the Government and Osaka Metropolis and takes no part in the day-to-day running of the metropolis." },
      { t: "h2", id: "referendum", text: "The referendum" },
      { t: "p", text: "Voting took place on 25 October 2026. Yes 2,367,412, No 1,892,308: 55.6% in favour, on a turnout of 61.4%. Eighteen of the twenty-four wards voted Yes." },
      { t: "quote", text: "Tokyo is a fine city, but Japan cannot have only one Tokyo.", name: "Muchikaku Shundai", role: "Speech at Ebisu Bridge, Dōtonbori, 24 October 2026", src: "The night before the vote" },
      { t: "h2", id: "shiko", text: "What changed" },
      { t: "table", head: ["Item", "Before", "After"], rows: [
        ["Name", "Osaka Prefecture", "Osaka Metropolis"],
        ["Head", "Governor of Osaka Prefecture; Mayor of Osaka", "Governor of Osaka Metropolis"],
        ["Assembly", "Osaka Prefectural Assembly", "Osaka Metropolitan Assembly"],
        ["Powers", "Mainly delegated national business", "Substantially extended, including fiscal autonomy"],
        ["Revenue", "Local allocation tax and prefectural taxes", "Metropolitan taxes, plus a new cultural promotion grant"],
        ["Wards and municipalities", "33 cities, 9 towns, 1 village, plus 24 wards of Osaka", "Unchanged"]
      ] },
      { t: "h2", id: "souto", text: "Two capitals" },
      { t: "table", head: ["", "Tokyo Metropolis", "Osaka Metropolis"], rows: [
        ["Role", "Politics, finance, international exchange", "Culture, innovation, regional vitality"],
        ["Population", "about 14 million", "about 8.78 million"],
        ["Area", "about 2,194 km²", "about 1,905 km²"],
        ["Distance from the Government", "The former Prime Minister's Office stands here", "Prime Minister's Office 503 stands here"]
      ] },
      { t: "h2", id: "kessan", text: "Finance and powers" },
      { t: "p", text: "Osaka Metropolis gains three new powers: discretion over delegated national business; the allocation of the cultural promotion grant; and the right to conclude cultural exchange agreements directly with Asian cities. Fiscal autonomy has widened at the same time, and the share of national allocation tax has been reduced." },
      { t: "h2", id: "ido", text: "Movement of people" },
      { t: "stats", items: [
        { value: "120", unit: "k", label: "Arrivals in the first month", note: "Tokyo to Osaka and around it" },
        { value: "47", unit: "firms", label: "Headquarters relocated", note: "32 in technology and games" },
        { value: "+1.8", unit: "%", label: "Land prices, Osaka Metropolis", note: "On the previous period" }
      ] },
      { t: "h2", id: "qa", text: "Questions and answers" },
      { t: "dl", items: [
        ["How does Osaka Metropolis relate to Osaka City?", "Osaka City continues to exist as a special ward within Osaka Metropolis. The Governor and the Mayor are not senior and junior to one another; they divide the work between them."],
        ["Does the Governor of Tokyo oppose the change?", "Tokyo Metropolis has asked the Government for additional support to prevent a hollowing out of Tokyo. The Government has decided to include the necessary funding in the financial year 2027 budget."],
        ["Has Nippon Ishin no Kai merged into the Light-Stick Party?", "Ishin has merged into the Kansai branch of the Light-Stick Party and no longer exists as a separate party. The branch is led by Ishin's former leader."],
        ["Will the Prime Minister's Office stay in Osaka?", "Yes. The Osaka Metropolis Establishment Act fixes the seat of the Office in Osaka Metropolis. Changing it requires a two-thirds majority in both Houses of the Diet."],
        ["Can visitors see the metropolitan government building?", "Yes. There is a permanent exhibition on the ground floor, open free of charge. To visit Prime Minister's Office 503, see [About the Office](about.html#visit)."]
      ] },
      { t: "p", text: "[Policies](policies.html) · [The light-stick ministry](ministry.html) · [Press conferences](press.html)" }
    ],
    side: [
      { title: "Contents", items: [["Overview", "#gaiyo"], ["The referendum", "#referendum"], ["What changed", "#shiko"], ["Two capitals", "#souto"], ["Movement of people", "#ido"], ["Questions and answers", "#qa"]] },
      { title: "Related", items: [["Policies", "policies.html"], ["Light-stick ministry", "ministry.html"], ["Office 503", "about.html"]] }
    ]
  };

  /* ---------------- news list / press / search / other ---------------- */
  d.pages.news = { title: "News", lead: "Every release from the Public Relations Office of the Cabinet Secretariat. Filter by category.", crumbs: [{ label: "News", href: "news.html" }], updated: "18 December 2026", blocks: [] };
  d.pages.press = { title: "Press conferences", lead: "Transcripts of press conferences given by the Prime Minister and the Chief Cabinet Secretary. Conferences are normally held in the briefing room on the third floor of the 503 building and streamed live.", crumbs: [{ label: "Press conferences", href: "press.html" }], updated: "16 December 2026", blocks: [] };
  d.pages.article = { title: "News", blocks: [] };
  d.pages.search = { title: "Search", lead: "Search policies, news releases and press conference transcripts.", crumbs: [{ label: "Search", href: "search.html" }], blocks: [] };

  d.pages.info = {
    title: "About this site", h1: "About this site", lead: "How the official website of the Prime Minister's Office 503 is run, and its copyright and disclaimer.",
    crumbs: [{ label: "Site information", href: "info.html" }], updated: "18 December 2026", toc: true,
    blocks: [
      { t: "h2", id: "about", text: "Management" },
      { t: "p", text: "This website is run by the Public Relations Office of the Cabinet Secretariat. Policies, statistics and transcripts are supplied by the ministries and edited by the Office. Pages are updated at 18:00 on weekdays." },
      { t: "dl", items: [
        ["Editor", "Public Relations Office, Cabinet Secretariat (third floor, 503 building)"],
        ["Switchboard", "06-6005-0503 (weekdays 9:30–18:15)"],
        ["Updates", "18:00 on weekdays"],
        ["RSS", "Atom feed of news releases (assets/news.xml)"]
      ] },
      { t: "h2", id: "terms", text: "Terms of use" },
      { t: "ul", items: [
        "Text, images and marks on this website belong to the Cabinet Secretariat unless otherwise stated.",
        "When quoting, please credit “Prime Minister's Office 503, official website”.",
        "The marks (the emblem and the logotype) may not be altered, distorted or used for commercial purposes.",
        "The Osaka Metropolis emblem and the Asia Wotagei Sports Festival emblem are used under licence from Osaka Metropolis and from the organising committee respectively."
      ] },
      { t: "h2", id: "accessibility", text: "Accessibility" },
      { t: "p", text: "This website aims to meet level AA of JIS X 8341-3:2016." },
      { t: "ul", items: [
        "Every function can be used from the keyboard, and a link to skip to the main content is provided.",
        "Text size can be switched between standard and large, and the choice is remembered.",
        "The system setting for reduced motion (prefers-reduced-motion) is respected.",
        "All images carry alternative text; decorative images are marked aria-hidden." ]
      },
      { t: "h2", id: "privacy", text: "Privacy" },
      { t: "p", text: "This website does not collect information that identifies individuals. The language preference is kept in the browser's localStorage and is never sent to a server." },
      { t: "p", text: "See the [privacy policy](privacy.html)." },
      { t: "h2", id: "contact", text: "Contact" },
      { t: "dl", items: [
        ["About policy", "Public Relations Office, Cabinet Secretariat"],
        ["About the light-stick ministry", "Minister's Secretariat, Ministry of Light-Stick Culture"],
        ["About visits", "Office 503 administration"],
        ["Media enquiries", "Secretariat, Cabinet Press Club"]
      ] },
      { t: "note", title: "About the setting", text: "This website is the fictional setting of the work “The Shundai Cabinet”. It has no connection with the Government of Japan, or with any real institution, political party, company or person." }
    ],
    side: [{ title: "Site information", items: [["About this site", "info.html"], ["Site map", "sitemap.html"], ["Privacy policy", "privacy.html"], ["Accessibility", "info.html#accessibility"]] }]
  };

  d.pages.sitemap = {
    title: "Site map", h1: "Site map", lead: "Every page of the official website of the Prime Minister's Office 503.",
    crumbs: [{ label: "Site map", href: "sitemap.html" }], updated: "18 December 2026",
    blocks: [
      { t: "links", items: [
        { label: "Home", href: "index.html", note: "Latest news and key policies" },
        { label: "About the Office", href: "about.html", note: "Building, history, organisation, visits" },
        { label: "The Prime Minister", href: "pm.html", note: "Career, beliefs, quotations" },
        { label: "The Cabinet", href: "cabinet.html", note: "Ministers, special advisers" },
        { label: "Policies", href: "policies.html", note: "Six policies" },
        { label: "Light-stick ministry", href: "ministry.html", note: "Organisation, certification, the Games" },
        { label: "Osaka Metropolis", href: "osaka.html", note: "Special page" },
        { label: "News", href: "news.html", note: "All releases" },
        { label: "Press conferences", href: "press.html", note: "Transcripts" },
        { label: "Search", href: "search.html", note: "Keyword search" },
        { label: "About this site", href: "info.html", note: "Management, terms, accessibility" },
        { label: "Privacy policy", href: "privacy.html", note: "How personal information is handled" }
      ] }
    ],
    side: [{ title: "Site information", items: [["About this site", "info.html"], ["Privacy policy", "privacy.html"]] }]
  };

  d.pages.privacy = {
    title: "Privacy policy", h1: "Privacy policy", lead: "How the official website of the Prime Minister's Office 503 handles information about the people who visit it.",
    crumbs: [{ label: "Privacy policy", href: "privacy.html" }], updated: "18 December 2026",
    blocks: [
      { t: "h2", text: "Principles" },
      { t: "p", text: "This website does not collect names, addresses, telephone numbers, email addresses or any other information that identifies an individual. Applications to visit and applications for press accreditation go through separate systems, which have their own privacy policies." },
      { t: "h2", text: "Information kept in your browser" },
      { t: "ul", items: [
        "Language (kantei503.lang), so that the same language is shown on your next visit.",
        "Text size (kantei503.fs), so that your reading preference is kept.",
        "Both are held in the browser's localStorage, are never sent to a server, and can be deleted at any time in your browser settings."
      ] },
      { t: "h2", text: "Visitor statistics" },
      { t: "p", text: "The Public Relations Office counts visits to each page in a form that does not identify individuals, in order to improve the content. No individual-level data from those counts is provided outside the Office." },
      { t: "p", text: "[Back to About this site](info.html)" }
    ],
    side: [{ title: "Site information", items: [["About this site", "info.html"], ["Site map", "sitemap.html"]] }]
  };

  /* ---------------- news ---------------- */
  d.news = [
    { id: "osaka-month", cat: "osaka", date: "16 December 2026", title: "One month of Osaka Metropolis: 120,000 arrivals, 47 headquarters relocated",
      lead: "The Osaka Metropolis Establishment Act has been in force for one month. Some 120,000 people have moved from Tokyo to Osaka and the cities around it, and 47 companies have moved their headquarters.",
      body: [
        "The Cabinet Secretariat published the figures for the first month on 16 December. Arrivals are mostly in their twenties and thirties, who make up 68% of the total. Most have settled in the Kita and Chūō wards of Osaka and in Suita.",
        "Of the 47 companies, 32 are in technology and games. Several gave lower office costs and a shorter distance to the light-stick ministry as their reasons.",
        "The Prime Minister said at his press conference that day: “The numbers are only a result. What has really changed is that people have begun to feel they can work without living in Tokyo.”"
      ] },
    { id: "support-dec", cat: "toukei", date: "1 December 2026", title: "Cabinet approval at 58.4%, up 1.2 points since Osaka Metropolis",
      lead: "The Public Relations Office reported cabinet approval of 58.4% on 1 December, up 1.2 points on the previous month.",
      body: [
        "The most common reason given for supporting the Cabinet was the Osaka Metropolis plan (34.2%), followed by light-stick policy (28.7%) and the Office being in Osaka (19.4%). The most common reason for not supporting it was one man in four jobs (31.6%).",
        "Party support: the Light-Stick Party 41.2%, the Liberal Democratic Party 22.6%, the Centrist Reform Alliance 9.8%, no party 21.4%."
      ] },
    { id: "osaka-law", cat: "osaka", date: "16 November 2026", title: "The Osaka Metropolis Establishment Act comes into force",
      lead: "The Osaka Metropolis Establishment Act came into force on 16 November. Osaka Prefecture became Osaka Metropolis, the Mayor of Osaka became the Governor of Osaka Metropolis, and the map of wards and municipalities is unchanged.",
      body: [
        "Osaka Metropolis gains discretion over delegated national business, the allocation of the cultural promotion grant, and the right to conclude cultural exchange agreements directly with Asian cities.",
        "The Prime Minister said at Office 503: “Osaka is not here to replace Tokyo. It is here to be the second heart of this country.”",
        "The former Prime Minister's Office in Nagatachō has been a museum, open free of charge, since 2024."
      ] },
    { id: "osaka-bill", cat: "osaka", date: "8 November 2026", title: "The Diet passes the Osaka Metropolis bill: 289 votes in the House of Representatives",
      lead: "On 8 November the House of Representatives passed the Osaka Metropolis bill by 289 votes to 142, with 21 abstentions. The House of Councillors passed it the same day.",
      body: [
        "On the recorded vote the Light-Stick Party and most of the LDP voted in favour; the Centrist Reform Alliance and some independent members voted against. The Act came into force eight days after promulgation.",
        "Nippon Ishin no Kai announced in October that it had merged into the Kansai branch of the Light-Stick Party and no longer exists as a separate party."
      ] },
    { id: "kobo-cert2", cat: "kobo", date: "28 October 2026", title: "Second round of performer certification opens: 187,000 applications on the first day",
      lead: "The light-stick ministry began accepting applications for the second round on 28 October. There were 187,000 on the first day, and capacity was increased at short notice.",
      body: [
        "This round covers the standard, intermediate and advanced levels, all online. The advanced practical tests will be held from February 2027 in Osaka, Tokyo and Fukuoka.",
        "The Ministry of Health, Labour and Welfare reminds applicants under 16 that written consent from a guardian is required, and that their allowance is 6 cans a month."
      ] },
    { id: "osaka-referendum", cat: "osaka", date: "25 October 2026", title: "Osaka Metropolis referendum passes with 55.6%",
      lead: "Voting closed on 25 October. Yes 2,367,412, No 1,892,308: 55.6% in favour, on a turnout of 61.4%.",
      body: [
        "Eighteen of the twenty-four wards voted Yes. No votes were concentrated in the residential wards to the north and east.",
        "“Tokyo is a fine city, but Japan cannot have only one Tokyo,” the Prime Minister said at Ebisu Bridge in Dōtonbori. The line was played again and again on the eve of the vote."
      ] },
    { id: "alg-close", cat: "asia", date: "18 September 2026", title: "The first Asia Wotagei Sports Festival closes: 14 countries and regions, 32,000 spectators",
      lead: "The first Games closed in Osaka Castle Park on 18 September. The overall champion was Tarō Yamada of Japan, whose prize was a solid gold light stick.",
      body: [
        "Over seven days, 312 competitors from 14 countries and regions took part. 32,000 people attended, and the live stream was watched 11.8 million times.",
        "At the closing ceremony the Prime Minister said he would make Osaka the second heart of the country, and promised to present the prize to the performer Hina Memiya at the second Games."
      ] },
    { id: "budget-2027", cat: "kobo", date: "26 August 2026", title: "Light-stick ministry requests Y71.2 billion for the 2027 financial year",
      lead: "On 26 August the light-stick ministry submitted a request of Y71.2 billion for the 2027 financial year, Y10 billion more than this year.",
      body: [
        "The priorities are preparation for the second Asia Games, more overseas certification classes, with 50 as the target, and standards for equipment safety.",
        "The Ministry of Finance said it would examine the request strictly in the year-end budget round. Asked about this, the Prime Minister, who is also finance minister, said: “I will have a serious talk with myself.”"
      ] },
    { id: "festival-2026", cat: "kobo", date: "10 August 2026", title: "The second Light-Stick Festival draws 410,000",
      lead: "The second Light-Stick Festival was held on 10 August in Osaka Castle Park and Nakanoshima Park, with 410,000 visitors.",
      body: [
        "WotaGood, the ministry's official band, closed the main stage. The Prime Minister appeared as bassist and switched to a light stick in the middle of the set to perform the Lightning Snake.",
        "Takings at restaurants across Osaka Metropolis were up 38% on the day, and queues at Charo Diner branches averaged more than an hour."
      ] },
    { id: "shokudo-hk", cat: "shokudo", date: "1 July 2026", title: "Charo Diner · Dai in Hong Kong: one year, 420 portions a day",
      lead: "The first branch overseas, in Causeway Bay, has completed its first year. The signature scallop cheung fun with XO sauce sells for HK$88.",
      body: [
        "The branch sells 420 portions a day, six in ten of them cheese cheung fun. The manager says three customers in ten came because they had seen the Prime Minister on the news.",
        "Branches in Taipei and Seoul will open together in the spring of 2027."
      ] },
    { id: "wotagood-anniv", cat: "kantei", date: "15 June 2026", title: "WotaGood marks its first year at Osaka Castle Hall",
      lead: "The ministry's official band played its first anniversary concert at Osaka Castle Hall on 15 June, to a full house of 8,000.",
      body: [
        "The new song “Two Capitals” was played for the first time. The words, by the Prime Minister, are about two cities and one river.",
        "For the encore the three special advisers were carried on to the stage; Wakun breathed into the microphone and the hall laughed."
      ] },
    { id: "monster-2", cat: "kobo", date: "20 May 2026", title: "Second Monster Energy can, for advanced certification only",
      lead: "The light-stick ministry and the Japanese subsidiary of Monster Energy announced a second collaboration can, issued to advanced performers from 20 May.",
      body: [
        "The can uses the red of the Office emblem and a silhouette of a light stick. The allowance is 24 cans a month, two of them in the limited design.",
        "The company says sales in Japan rose 230% on the year during the first can."
      ] }
  ];

  /* ---------------- press conferences ---------------- */
  d.schedule = [
    { date: "Friday 19 December", time: "15:00", place: "Briefing room, third floor, Office 503", title: "After the extraordinary Cabinet meeting" },
    { date: "Monday 22 December", time: "11:00", place: "Briefing room, third floor, Office 503", title: "Briefing on the certification system" },
    { date: "Tuesday 5 January 2027", time: "14:00", place: "Hall, ground floor, Office 503", title: "New Year press conference" }
  ];

  d.press = [
    { id: "press-1216", date: "16 December 2026", place: "Briefing room, third floor, 503 building", host: "Chief Cabinet Secretary Kamito Buraku",
      title: "Press conference: one month of Osaka Metropolis",
      intro: "The Prime Minister took questions on the figures for the first month, the resettlement programme and preparations for the second Asia Games.",
      qa: [
        { q: "How do you read the figures for the first month?", by: "Kyodo News", a: "120,000 is more than we expected. But I am not going to treat it as a result. People moving here is only the first step; the next is making them want to stay — schools, hospitals, and somewhere to go in the evening." },
        { q: "The Governor of Tokyo speaks of a hollowing out of Tokyo. What do you say to that?", by: "NHK", a: "Tokyo will not empty. The population of Tokyo is still growing, only more slowly. The real problem is that for seventy years we built a single entrance. Now there are two." },
        { q: "The opposition says one man holding four portfolios is incompatible with cabinet government.", by: "Asahi Shimbun", a: "Article 68 does not forbid it. But I know it is not a permanent arrangement. Once the vice-ministers at the light-stick ministry are in place, part of the internal affairs work will be handed over. The timetable is with the Chief Cabinet Secretary." },
        { q: "Does the merger of Ishin into the Kansai branch of the Light-Stick Party mean that party politics is contracting?", by: "Yomiuri Shimbun", a: "Ishin made its own choice. We accepted it. The branch is still led by its former leader and it keeps its commitment to local autonomy. This is not an absorption; it is a merger." },
        { q: "When will the host of the second Asia Games be decided?", by: "Sankei Shimbun", a: "March 2027. Four cities have applied. I would like it to be Osaka again, but that is not for me to say." },
        { q: "Where does the money for the three special advisers come from?", by: "Tokyo Shimbun", a: "Cat food, litter and their stools all come out of the secretariat budget. Last year the total was Y437,000. That figure I can publish." }
      ] },
    { id: "press-0918", date: "18 September 2026", place: "Special arena, Osaka Castle Park", host: "Chief Cabinet Secretary Kamito Buraku",
      title: "Prime Minister's press conference after the first Asia Wotagei Sports Festival",
      intro: "Questions taken at the venue after the closing ceremony.",
      qa: [
        { q: "What did the Games achieve?", by: "Mainichi Shimbun", a: "Fourteen countries, three hundred and twelve people, one kind of light stick. That is more persuasive than any declaration." },
        { q: "Where will the second Games be held?", by: "AFP", a: "That is decided in March 2027. If I had a vote, I would vote for Osaka. But the committee has fourteen countries and regions on it." },
        { q: "Did you really promise to present a prize to Hina Memiya?", by: "Sports Nippon", a: "I did. I have confirmed it with her. She says she will wear a light-up headband." }
      ] }
  ];
})();
