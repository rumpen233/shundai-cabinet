// Real-click test through the Chrome DevTools Protocol.
// Launches nothing: expects an Edge already listening on 9333.
const PORT = process.env.CDP_PORT || 9333;
const URL0 = process.argv[2] || "https://rumpen233.github.io/shundai-cabinet/";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
  const page = list.find((t) => t.type === "page");
  if (!page) throw new Error("no page target");

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

  let id = 0;
  const waiters = new Map();
  const events = [];
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && waiters.has(msg.id)) {
      const { res, rej } = waiters.get(msg.id);
      waiters.delete(msg.id);
      msg.error ? rej(new Error(JSON.stringify(msg.error))) : res(msg.result);
    } else if (msg.method) {
      events.push(msg);
    }
  };
  const send = (method, params = {}) =>
    new Promise((res, rej) => { const i = ++id; waiters.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });

  const evalJS = async (expr) => {
    const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) return { error: r.exceptionDetails.text };
    return r.result.value;
  };

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Log.enable");

  console.log("navigating:", URL0);
  await send("Page.navigate", { url: URL0 });
  await sleep(3500);

  console.log("href:", await evalJS("location.href"));
  console.log("app.js bytes:", await evalJS(
    "fetch('assets/js/app.js').then(r=>r.text()).then(t=>t.length + ' | newSelector=' + t.includes('a[data-lang],button[data-lang]'))"
  ));
  const errs = events.filter((e) => e.method === "Log.entryAdded" && e.params.entry.level === "error");
  console.log("console errors:", errs.length, errs.slice(0, 3).map((e) => e.params.entry.text).join(" || "));

  const rect = await evalJS(`(() => {
    const links = [...document.querySelectorAll('.nav a')];
    const a = links.find(x => x.getAttribute('href') === 'pm.html');
    if (!a) return JSON.stringify({error:'link not found', n: links.length});
    const r = a.getBoundingClientRect();
    return JSON.stringify({x: Math.round(r.x + r.width/2), y: Math.round(r.y + r.height/2), text: a.textContent.trim()});
  })()`);
  console.log("link rect:", rect);
  const pos = JSON.parse(rect);
  if (pos.error) { console.log("ABORT"); ws.close(); return; }

  await send("Input.dispatchMouseEvent", { type: "mouseMoved", x: pos.x, y: pos.y, button: "none" });
  await sleep(120);
  await send("Input.dispatchMouseEvent", { type: "mousePressed", x: pos.x, y: pos.y, button: "left", clickCount: 1 });
  await sleep(60);
  await send("Input.dispatchMouseEvent", { type: "mouseReleased", x: pos.x, y: pos.y, button: "left", clickCount: 1 });
  await sleep(1500);

  console.log("after click:", await evalJS("location.pathname + location.search"));
  ws.close();
}

main().catch((e) => { console.error("FAILED:", e.message); process.exit(1); });
