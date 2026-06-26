const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const DIR = __dirname;
const OUT = path.join(DIR, "_qa");
fs.mkdirSync(OUT, { recursive: true });

// deck-data.js からノート文字列を取り出す（漏れ検査用）
global.window = {};
require(path.join(DIR, "deck-data.js"));
const DECK = global.window.TRAM_DECK;
const NOTES = DECK.map((s) => s.note).filter(Boolean);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  // ---------- 観客側：全10枚スクショ + ノート漏れ検査 ----------
  await page.goto("file://" + path.join(DIR, "index.html"));
  await page.waitForTimeout(700);

  let leak = [];
  for (let i = 0; i < DECK.length; i++) {
    await page.waitForTimeout(450);
    await page.screenshot({ path: path.join(OUT, `aud_${String(i + 1).padStart(2, "0")}.png`) });

    const visible = await page.evaluate(() => document.body.innerText);
    NOTES.forEach((note, ni) => {
      // ノート全文 or 特徴的な断片が観客DOMに出ていないか
      const frag = note.slice(0, 18);
      if (visible.includes(frag)) leak.push(`slide${i + 1}: note#${ni + 1} 断片漏れ`);
    });
    // 設計思想ワードの直接検査
    ["相手に選ばせる", "今日の肝", "（並べすぎず次へ）", "御社"].forEach((w) => {
      if (visible.includes(w)) leak.push(`slide${i + 1}: 禁止語「${w}」が観客側に出現`);
    });

    if (i < DECK.length - 1) await page.keyboard.press("ArrowRight");
  }

  // ---------- presenter側スクショ ----------
  const p2 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p2.goto("file://" + path.join(DIR, "present.html"));
  await p2.waitForTimeout(700);
  await p2.screenshot({ path: path.join(OUT, "presenter_01.png") });
  await p2.keyboard.press("ArrowRight");
  await p2.keyboard.press("ArrowRight");
  await p2.waitForTimeout(500);
  await p2.screenshot({ path: path.join(OUT, "presenter_03.png") });

  await browser.close();

  console.log("=== ノート漏れ検査 ===");
  console.log(leak.length ? leak.join("\n") : "OK：観客側にノート/禁止語の漏れなし");
})();
