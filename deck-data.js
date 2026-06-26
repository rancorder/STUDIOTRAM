/* ============================================================
   STUDIO TRAM — 商談プレゼン（一次商談・10枚）
   このファイルがスライド本文の唯一の原本。
   index.html（観客用）と present.html（手元用）が両方これを読む。
   コピーを直すときは、ここ1か所だけ直せばよい。
   表示テキスト = 「貴社」 / 話し言葉ノート = 「御社」
   ============================================================ */

window.TRAM_META = {
  brand: "STUDIO TRAM",
  slate: "FILM · MUSIC · SOUND",
};

window.TRAM_DECK = [
  /* 1 ---------------------------------------------------------- */
  {
    layout: "hero",
    eyebrow: "STUDIO TRAM",
    kicker: "FILM · MUSIC · SOUND",
    title: "見ればわかる、に変える。",
    sub: "伝わりにくい技術・人・世界観を、音と映像で。",
    note:
      "本日はお時間ありがとうございます。STUDIO TRAMの〇〇です。最初に一点だけ。" +
      "今日は映像制作の売り込みというより、御社の中で「伝わりにくい」と感じている部分を" +
      "一緒に整理できればと思っています。まずそこからお話しさせてください。",
  },

  /* 2 ---------------------------------------------------------- */
  {
    layout: "statements",
    eyebrow: "本日の位置づけ",
    lead: "映像制作の提案では、ありません。",
    lines: [
      "貴社の「伝わりにくい場面」を整理する場です",
      "制作の話は、課題が見えてからで十分です",
    ],
    note:
      "いきなり制作の話はしません。御社が展示会・採用・研修・社外発信のどこで" +
      "「言葉やスライドだけでは伝わりきらない」と感じているか。" +
      "そこを一緒に見つけられたら、今日はそれで十分だと思っています。",
  },

  /* 3 ---------------------------------------------------------- */
  {
    layout: "choices",
    eyebrow: "こんな場面、ありませんか",
    hint: "ひとつ、近いものを選んでください",
    options: [
      { tag: "展示会", text: "ブース前で足は止まるが、中身が伝わらない" },
      { tag: "採用", text: "求人票では職場の空気・人柄が伝わらない" },
      { tag: "研修", text: "内容が難しく、受講者に伝わりにくい" },
      { tag: "周年・発信", text: "きれいだけど、印象に残らない" },
    ],
    note:
      "たとえばこの4つ、どれか近いものはありますか。（相手に選ばせる）。" +
      "どれを選んでも構いません。一番「あるな」と思うものを教えていただけますか。" +
      "ここで相手の口から課題を出させるのが今日の肝。",
  },

  /* 4 ---------------------------------------------------------- */
  {
    layout: "punch",
    eyebrow: "失敗の正体",
    setup: [
      "多くの企業は「どの制作会社に頼むか」で迷う。",
      "でも本当の失敗は、「何を伝えるか」が曖昧なまま作ること。",
    ],
    punchPre: "きれいな動画はできても、",
    punchHl: "誰も動かない。",
    note:
      "映像がうまくいかない原因って、実は制作会社の良し悪しじゃないことが多いんです。" +
      "「誰に・何を・どこで伝えるか」が決まらないまま作ってしまう。だからきれいでも刺さらない。" +
      "御社の場合、そこは社内で整理されている状態ですか。",
  },

  /* 5 ---------------------------------------------------------- */
  {
    layout: "formula",
    eyebrow: "STUDIO TRAM の捉え方",
    parts: ["FILM", "MUSIC", "SOUND"],
    lines: [
      "映像にBGMを後付けするのではない。",
      "最初から「どう見せ、どう聞かせ、どう残すか」を一体で設計する。",
    ],
    note:
      "私たちは映像だけの会社ではありません。音まで含めて、最初から一体で設計します。" +
      "BGMを後で乗せるのと、最初から音で印象を作るのは、伝わり方がまったく違います。" +
      "ここが御社の「印象に残らない」を解く部分になります。",
  },

  /* 6 ---------------------------------------------------------- */
  {
    layout: "figure",
    eyebrow: "何がすごいか — 翻訳する力",
    figure: "30–90秒",
    figureCap: "で「何がすごいか」が伝わる映像に。",
    sub: "難解な技術・サービスを、専門外の人にも、見れば伝わる形へ翻訳する。",
    note:
      "私たちの一番の強みは、難しいことを「見ればわかる」に翻訳することです。" +
      "技術がすごいのに専門用語で伝わらない、という会社さんは多い。" +
      "それを、来場者や応募者が30秒で理解できる形にします。",
  },

  /* 7 ---------------------------------------------------------- */
  {
    layout: "credits",
    eyebrow: "実績",
    lead: "映像も、音楽も。世に出ているものを。",
    credits: [
      { name: "ユビレジ", role: "POS SaaS" },
      { name: "NOLKA", role: "研修動画" },
      { name: "ふるなび", role: "CM楽曲" },
      { name: "NHK「おかあさんといっしょ」", role: "" },
      { name: "萌JAZZ", role: "自社流通音源・メジャー流通" },
    ],
    note:
      "実績は一言だけ。映像も音楽も、世に出ているものを手がけています。" +
      "数で勝負というより、映像と音の両方をこの完成度でやれる会社は多くない、とだけお伝えしておきます。" +
      "（並べすぎず次へ）",
  },

  /* 8 ---------------------------------------------------------- */
  {
    layout: "process",
    eyebrow: "進め方 — ムダ撮りが出ない",
    steps: [
      "「誰の・どの不安を消すか」を決める",
      "そのうえで、映像化すべき対象を絞る",
      "だから「思ってたのと違う」が起きにくい",
    ],
    note:
      "作る前に「誰のどの不安を消すための映像か」を必ず決めます。" +
      "ここを決めるから、ムダな撮影や作り直しが出ない。" +
      "映像は高い、効果が読めない、というご不安は、この進め方で解消できます。",
  },

  /* 9 ---------------------------------------------------------- */
  {
    layout: "reuse",
    eyebrow: "投資対効果",
    title: "1回の撮影を、使い回す。",
    source: "1回の撮影",
    uses: ["展示会", "採用", "HP"],
    sub: "用途ごとに作り直さない。1回の投資で、複数の場面をカバーする。",
    note:
      "1回撮ったものを展示会用・採用用・HP用に展開します。" +
      "毎回ゼロから作らない前提なので、投資対効果が読みやすい。" +
      "ここも「映像は高い」へのお答えになります。",
  },

  /* 10 --------------------------------------------------------- */
  {
    layout: "cta",
    eyebrow: "次の一歩",
    lines: [
      "貴社の「一番伝わりにくい場面」を、1つ選ぶ。",
      "そこを、どう映像化すると刺さるか整理してお見せします。",
    ],
    highlight: "所要30分。次回、貴社専用の整理をお持ちします。",
    dateAsk: "来週、〇日か〇日。ご都合のよい方を。",
    note:
      "今日のお話で、御社の中で一番「伝わりにくい」のがどこか、なんとなく見えてきたと思います。" +
      "次回はそこに絞って、御社の場合どう映像化すれば刺さるかを整理してお見せします。" +
      "30分ほどで見られる内容です。来週ですと〇日か〇日、どちらがご都合よろしいですか。",
  },
];

/* ============================================================
   renderSlide(slide, i, total) -> スライド1枚分のHTML文字列
   observer = "audience"（既定）| "presenter"
   ※ ノートは絶対にここから出力しない（観客に漏らさない）
   ============================================================ */
window.renderSlide = function (slide, i, total) {
  const meta = window.TRAM_META;
  const idx = String(i + 1).padStart(2, "0");
  const tot = String(total).padStart(2, "0");
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  let body = "";

  switch (slide.layout) {
    case "hero":
      body = `
        <div class="c-hero">
          <div class="hero-kicker mono">${esc(slide.kicker)}</div>
          <h1 class="hero-title serif">${esc(slide.title).replace("、", "、<br>")}</h1>
          <p class="hero-sub">${esc(slide.sub)}</p>
        </div>`;
      break;

    case "statements":
      body = `
        <div class="c-statements">
          <h2 class="stmt-lead serif">${esc(slide.lead)}</h2>
          <ul class="stmt-list">
            ${slide.lines.map((l) => `<li>${esc(l)}</li>`).join("")}
          </ul>
        </div>`;
      break;

    case "choices":
      body = `
        <div class="c-choices">
          <div class="choices-hint mono">▸ ${esc(slide.hint)}</div>
          <div class="choice-grid" role="list">
            ${slide.options
              .map(
                (o, k) => `
              <button class="choice" data-k="${k}" role="listitem" tabindex="-1">
                <span class="choice-tag mono">${esc(o.tag)}</span>
                <span class="choice-text">${esc(o.text)}</span>
              </button>`
              )
              .join("")}
          </div>
        </div>`;
      break;

    case "punch":
      body = `
        <div class="c-punch">
          <div class="punch-setup">
            ${slide.setup.map((s) => `<p>${esc(s)}</p>`).join("")}
          </div>
          <p class="punch-line serif"><span class="pp">${esc(
            slide.punchPre
          )}</span><span class="hl ph">${esc(slide.punchHl)}</span></p>
        </div>`;
      break;

    case "formula":
      body = `
        <div class="c-formula">
          <div class="formula-row serif">
            ${slide.parts
              .map(
                (p, k) =>
                  `<span class="f-part">${esc(p)}</span>` +
                  (k < slide.parts.length - 1
                    ? `<span class="f-x">×</span>`
                    : "")
              )
              .join("")}
          </div>
          <div class="formula-lines">
            ${slide.lines.map((l) => `<p>${esc(l)}</p>`).join("")}
          </div>
        </div>`;
      break;

    case "figure":
      body = `
        <div class="c-figure">
          <div class="figure-row">
            <span class="figure-num serif hl">${esc(slide.figure)}</span>
            <span class="figure-cap">${esc(slide.figureCap)}</span>
          </div>
          <p class="figure-sub">${esc(slide.sub)}</p>
        </div>`;
      break;

    case "credits":
      body = `
        <div class="c-credits">
          <h2 class="credits-lead serif">${esc(slide.lead)}</h2>
          <ul class="credits-list mono">
            ${slide.credits
              .map(
                (c) =>
                  `<li><span class="cr-name">${esc(c.name)}</span>${
                    c.role ? `<span class="cr-role">${esc(c.role)}</span>` : ""
                  }</li>`
              )
              .join("")}
          </ul>
        </div>`;
      break;

    case "process":
      body = `
        <div class="c-process">
          ${slide.steps
            .map(
              (s, k) => `
            <div class="step">
              <span class="step-no mono">${String(k + 1).padStart(2, "0")}</span>
              <span class="step-text">${esc(s)}</span>
            </div>`
            )
            .join("")}
        </div>`;
      break;

    case "reuse":
      body = `
        <div class="c-reuse">
          <h2 class="reuse-title serif">${esc(slide.title)}</h2>
          <div class="reuse-diagram">
            <span class="reuse-src">${esc(slide.source)}</span>
            <span class="reuse-arrow" aria-hidden="true"></span>
            <span class="reuse-uses">
              ${slide.uses.map((u) => `<span class="use">${esc(u)}</span>`).join("")}
            </span>
          </div>
          <p class="reuse-sub">${esc(slide.sub)}</p>
        </div>`;
      break;

    case "cta":
      body = `
        <div class="c-cta">
          <ul class="cta-lines">
            ${slide.lines.map((l) => `<li>${esc(l)}</li>`).join("")}
          </ul>
          <p class="cta-highlight serif">${esc(slide.highlight)}</p>
          <p class="cta-date mono">${esc(slide.dateAsk)}</p>
        </div>`;
      break;

    default:
      body = `<div class="c-statements"><h2 class="stmt-lead serif">${esc(
        slide.title || ""
      )}</h2></div>`;
  }

  return `
    <div class="slide" data-layout="${esc(slide.layout)}">
      <div class="chrome-top">
        <span class="eyebrow mono">${esc(slide.eyebrow)}</span>
        <span class="slate mono">${esc(meta.brand)} · ${esc(meta.slate)}</span>
      </div>
      <div class="content">${body}</div>
      <div class="chrome-bottom">
        <span class="idx mono">${idx} <span class="idx-sep">/</span> ${tot}</span>
      </div>
    </div>`;
};
