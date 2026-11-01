# -*- coding: utf-8 -*-
"""Reorder d.news items newest-first, for each of the three language packs."""
import io, re, sys, os

JS = r"C:\Users\49877\Documents\deepseek-harness\default-workspace\kantei503\assets\js"
MONTHS = {m: i + 1 for i, m in enumerate(
    ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"])}

def key_of(item):
    m = re.search(r'date:\s*"([^"]+)"', item)
    if not m:
        return (0, 0, 0)
    d = m.group(1)
    zh = re.match(r"(\d{4})年(\d{1,2})月(\d{1,2})日", d)
    if zh:
        return (int(zh.group(1)), int(zh.group(2)), int(zh.group(3)))
    en = re.match(r"(\d{1,2})\s+([A-Z][a-z]+)\s+(\d{4})", d)
    if en:
        return (int(en.group(3)), MONTHS.get(en.group(2), 0), int(en.group(1)))
    print("  ? unparsed date:", d)
    return (0, 0, 0)

def process(name):
    p = os.path.join(JS, name)
    lines = io.open(p, encoding="utf-8").read().split("\n")
    try:
        start = next(i for i, l in enumerate(lines) if l.startswith("  d.news = ["))
        end = next(i for i, l in enumerate(lines) if i > start and l.startswith("  ];"))
    except StopIteration:
        print(name, "no d.news array"); return
    body = lines[start + 1:end]
    items, cur = [], []
    for l in body:
        if re.match(r'^    \{ id: "', l):
            if cur:
                items.append(cur)
            cur = [l]
        else:
            cur.append(l)
    if cur:
        items.append(cur)
    titles = {}
    normalized = []
    for it in items:
        text = "\n".join(it).rstrip()
        tid = re.match(r'^    \{ id: "([^"]+)"', text).group(1)
        titles[tid] = text
        normalized.append(text)
    norm = []
    for t in normalized:
        if t.endswith("] }"):
            t = t[:-3] + "] },"
        norm.append(t)
    order = sorted(range(len(norm)), key=lambda i: key_of(norm[i]), reverse=True)
    norm = [norm[i] for i in order]
    norm[-1] = norm[-1][:-1] if norm[-1].endswith("] },") else norm[-1]
    new_lines = lines[:start + 1] + "\n".join(norm).split("\n") + lines[end:]
    io.open(p, "w", encoding="utf-8", newline="").write("\n".join(new_lines))
    print(name, "->", ", ".join(re.match(r'^    \{ id: "([^"]+)"', t).group(1) for t in norm))

for f in sys.argv[1:]:
    process(f)
