// Every relative href/src in public/ points to an existing file. Run after `node build.mjs`.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..', 'public');
const pages = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f.endsWith('.html')) pages.push(p); } })(root);
test('built pages exist', () => assert.ok(pages.length >= 24));
for (const page of pages) {
  test(`links in ${path.relative(root, page)}`, () => {
    const html = fs.readFileSync(page, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
    for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:|#|reversesteps:)/.test(url)) continue;
      let target = path.resolve(path.dirname(page), url.split('#')[0]);
      if (url.endsWith('/')) target = path.join(target, 'index.html');
      assert.ok(fs.existsSync(target), `${url} -> ${target}`);
    }
  });
}
