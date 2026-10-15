// Static site generator for reverse-steps-site. No dependencies: `node build.mjs`.
// Reads site.config.json + content/<lang>.mjs, writes public/ (committed; GitHub Pages serves it).
//   public/index.html, public/privacy/, public/support/, public/account-deletion/   (English)
//   public/<lang>/…                                                                 (pl ru de fr es)
import fs from 'node:fs/promises';
import path from 'node:path';

const here = import.meta.dirname;
const out = path.join(here, 'public');
const config = JSON.parse(await fs.readFile(path.join(here, 'site.config.json'), 'utf8'));
const LANGS = ['en', 'pl', 'ru', 'de', 'fr', 'es'];
const PAGES = ['home', 'support', 'privacy', 'deletion'];
const SLUG = { home: '', support: 'support/', privacy: 'privacy/', deletion: 'account-deletion/' };

const content = {};
for (const lang of LANGS) {
  const mod = await import(path.join(here, 'content', `${lang}.mjs`));
  content[lang] = mod.default(config);
}

const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const urlPath = (lang, page) => `${lang === 'en' ? '' : `${lang}/`}${SLUG[page]}`;
const relTo = (fromLang, fromPage, target) => {
  const depth = urlPath(fromLang, fromPage).split('/').filter(Boolean).length;
  const up = depth ? '../'.repeat(depth) : './';
  return up + target;
};

const logo = `<svg viewBox="0 0 40 40" aria-hidden="true">
  <rect x="1" y="1" width="38" height="38" rx="10" fill="var(--text)"/>
  <rect x="8" y="9" width="17" height="21" rx="3" fill="none" stroke="var(--bg)" stroke-width="2" opacity=".45"/>
  <rect x="12" y="13" width="17" height="21" rx="3" fill="var(--text)" stroke="var(--bg)" stroke-width="2"/>
  <path d="M33 13c0-4-3-6-7-6h-6" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
  <path d="M22 3.5 18 7l4 3.5" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="17" cy="18" r="1.6" fill="var(--bg)"/><circle cx="24" cy="18" r="1.6" fill="var(--bg)"/>
  <circle cx="17" cy="29" r="1.6" fill="var(--bg)"/><circle cx="24" cy="29" r="1.6" fill="var(--bg)"/>
</svg>`;

// Four abstract teardown states (no brands, no real device): closed → cover off → board → parts.
const stateSvg = (n) => {
  const screws = (pts) => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="var(--accent)"/>`).join('');
  const shapes = [
    `<rect x="8" y="8" width="64" height="84" rx="8" fill="var(--border-strong)"/>${screws([[16, 16], [64, 16], [16, 84], [64, 84]])}`,
    `<rect x="8" y="8" width="64" height="84" rx="8" fill="none" stroke="var(--border-strong)" stroke-width="3"/><rect x="18" y="20" width="44" height="30" rx="3" fill="var(--muted)" opacity=".5"/>${screws([[24, 60], [56, 60]])}`,
    `<rect x="8" y="8" width="64" height="84" rx="8" fill="none" stroke="var(--border-strong)" stroke-width="3"/><path d="M22 70h36M22 78h24" stroke="var(--muted)" stroke-width="4" stroke-linecap="round"/>`,
    `<rect x="10" y="12" width="26" height="34" rx="4" fill="var(--border-strong)"/><rect x="44" y="12" width="26" height="22" rx="3" fill="var(--muted)" opacity=".5"/>${screws([[18, 62], [28, 62], [38, 62], [48, 62], [24, 76], [40, 76]])}`,
  ];
  return `<svg viewBox="0 0 80 100" aria-hidden="true">${shapes[n]}</svg>`;
};

const illustration = (c) => `
  <div class="reverse" role="img" aria-label="${esc(c.home.illustrationAlt)}">
    <div class="label"><span>${esc(c.home.illustrationTop)}</span><span>1 → 4</span></div>
    <div class="row">${[0, 1, 2, 3].map((i) => `<div class="card"><b>${i + 1}</b>${stateSvg(i)}</div>`).join('')}</div>
    <div class="arrow">${esc(c.home.illustrationArrow)}</div>
    <div class="row back">${[3, 2, 1, 0].map((i) => `<div class="card"><b>${i + 1}</b>${stateSvg(i)}</div>`).join('')}</div>
  </div>`;

const header = (lang, page) => {
  const c = content[lang];
  const nav = [
    ['home', c.nav.home],
    ['support', c.nav.support],
    ['privacy', c.nav.privacy],
    ['deletion', c.nav.deletion],
  ]
    .map(([p, label]) => `<a href="${relTo(lang, page, urlPath(lang, p))}"${p === page ? ' aria-current="page"' : ''}>${esc(label)}</a>`)
    .join('');
  const langs = LANGS.map(
    (l) => `<a href="${relTo(lang, page, urlPath(l, page))}" hreflang="${l}" lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${l.toUpperCase()}</a>`
  ).join('');
  return `<header class="topbar">
    <a class="brand" href="${relTo(lang, page, urlPath(lang, 'home'))}">${logo}<span>Reverse Steps</span></a>
    <nav class="nav" aria-label="${esc(c.nav.label)}">${nav}<span class="lang" aria-label="${esc(c.nav.language)}">${langs}</span></nav>
  </header>`;
};

const footer = (lang, page) => {
  const c = content[lang];
  return `<footer class="footer">
    <p>${c.footer.disclaimer}</p>
    <p>${c.footer.contact} <a href="mailto:${config.contactEmail}">${config.contactEmail}</a> · <a href="${relTo(lang, page, urlPath(lang, 'privacy'))}">${esc(c.nav.privacy)}</a> · <a href="${relTo(lang, page, urlPath(lang, 'support'))}">${esc(c.nav.support)}</a></p>
  </footer>`;
};

const shell = (lang, page, { title, description, body, scripts = '' }) => {
  const alternates = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${config.baseUrl}/${urlPath(l, page)}">`).join('\n  ');
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <link rel="canonical" href="${config.baseUrl}/${urlPath(lang, page)}">
  ${alternates}
  <link rel="alternate" hreflang="x-default" href="${config.baseUrl}/${urlPath('en', page)}">
  <link rel="icon" href="${relTo(lang, page, 'assets/icon.svg')}" type="image/svg+xml">
  <link rel="stylesheet" href="${relTo(lang, page, 'assets/styles.css')}">
</head>
<body>
  <main class="page">
    ${header(lang, page)}
    ${body}
    ${footer(lang, page)}
  </main>
  ${scripts}
</body>
</html>
`;
};

const homePage = (lang) => {
  const c = content[lang];
  const h = c.home;
  const body = `
  <section class="hero">
    <div>
      <p class="eyebrow">${esc(h.eyebrow)}</p>
      <h1>${esc(h.h1)}</h1>
      <p class="lede">${h.lede}</p>
      <div class="stores">
        <!-- href is set by assets/rs-links.js from site.config.json (phase, links) and ?src=&cmp= -->
        <a class="button primary" data-store="ios" data-soon=" · ${esc(h.soon)}">${esc(config.phase === 'beta' ? h.iosBeta : h.iosLive)}</a>
        <a class="button" data-store="android" data-soon=" · ${esc(h.soon)}">${esc(config.phase === 'beta' ? h.androidBeta : h.androidLive)}</a>
      </div>
      <p class="beta-note">${h.storesNote}</p>
    </div>
    ${illustration(c)}
  </section>

  <h2>${esc(h.stepsTitle)}</h2>
  <ol class="steps">${h.steps.map((s) => `<li><strong>${esc(s.t)}</strong><span>${s.d}</span></li>`).join('')}</ol>

  <h2>${esc(h.videoTitle)}</h2>
  <!-- M2 delivers the demo clip: replace this block with
       <video controls playsinline preload="metadata" poster="assets/demo-poster.jpg" src="assets/demo.mp4"></video> -->
  <div class="video"><div><strong>${esc(h.videoSoon)}</strong>${esc(h.videoNote)}</div></div>

  <h2>${esc(h.whyTitle)}</h2>
  <div class="grid2">${h.why.map((w) => `<div class="tile"><strong>${esc(w.t)}</strong><p>${w.d}</p></div>`).join('')}</div>

  <h2>${esc(h.honestTitle)}</h2>
  <p class="note">${h.honest}</p>
  <p>${h.more.replace('{support}', relTo(lang, 'home', urlPath(lang, 'support')))}</p>`;
  const site = JSON.stringify({ phase: config.phase, links: config.links });
  return shell(lang, 'home', {
    title: h.title,
    description: h.description,
    body,
    scripts: `<script src="${relTo(lang, 'home', 'assets/rs-links.js')}"></script>
  <script>window.ReverseStepsLinks.decorateStoreLinks(document, ${site}, location.search, navigator.userAgent, navigator.maxTouchPoints);</script>`,
  });
};

const policyPage = (lang, page) => {
  const c = content[lang];
  const p = c[page];
  const sections = p.sections.map((s) => `<h2>${esc(s.h)}</h2>${s.body}`).join('\n');
  const extra = page === 'deletion' ? deletionButton(c) : '';
  const faq =
    page === 'support'
      ? `<div class="faq">${p.faq.map((f) => `<details><summary>${esc(f.q)}</summary>${f.a}</details>`).join('')}</div>`
      : '';
  const body = `<article class="policy">
    <p class="eyebrow">${esc(p.eyebrow)}</p>
    <h1>${esc(p.h1)}</h1>
    ${p.updated ? `<p class="meta">${esc(p.updated)}</p>` : ''}
    <p class="lede">${p.lede}</p>
    ${faq}
    ${extra}
    ${sections}
  </article>`;
  return shell(lang, page, { title: p.title, description: p.description, body });
};

const deletionButton = (c) => {
  const d = c.deletion;
  const href = `mailto:${config.contactEmail}?subject=${encodeURIComponent(d.mailSubject)}&body=${encodeURIComponent(d.mailBody)}`;
  return `<p class="stores"><a class="button primary" href="${href}">${esc(d.button)}</a></p>`;
};

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><style>:root{--text:#1c1915;--bg:#f6f3ee;--accent:#e8590c}</style>${logo
  .replace(' aria-hidden="true"', '')
  .replace(/^<svg[^>]*>/, '')}`;

await fs.rm(out, { recursive: true, force: true });
await fs.mkdir(path.join(out, 'assets'), { recursive: true });
for (const f of ['styles.css', 'rs-links.js']) await fs.copyFile(path.join(here, 'assets', f), path.join(out, 'assets', f));
await fs.writeFile(path.join(out, 'assets', 'icon.svg'), iconSvg);
await fs.writeFile(path.join(out, '.nojekyll'), '');

let count = 0;
for (const lang of LANGS) {
  for (const page of PAGES) {
    const html = page === 'home' ? homePage(lang) : policyPage(lang, page);
    if (/\{\{|undefined|\[object Object\]/.test(html)) throw new Error(`Unfilled value in ${lang}/${page}`);
    const dir = path.join(out, urlPath(lang, page));
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, 'index.html'), html);
    count += 1;
  }
}
await fs.writeFile(
  path.join(out, '404.html'),
  shell('en', 'home', {
    title: 'Reverse Steps – page not found',
    description: 'Page not found.',
    body: `<h1>Page not found</h1><p><a href="${config.baseUrl}/">Reverse Steps home</a></p>`,
  }).replaceAll('href="./', `href="${config.baseUrl}/`).replaceAll('src="./', `src="${config.baseUrl}/`)
);
console.log(`Built ${count} pages into public/`);
