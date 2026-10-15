# reverse-steps-site

Public pages of Reverse Steps on GitHub Pages: landing, privacy policy, support/FAQ and account
deletion, in English (root), Polish, Russian, German, French and Spanish (`/pl/`, `/ru/`, …).

Owned by agent M1 of the app project (`32penkin/reverse-steps`, private). The app repo links here
from `store-listing/README.md`; this repository is the only source of the pages.

Expected URLs (repository `reverse-steps-site`, Pages from GitHub Actions):

```text
https://32penkin.github.io/reverse-steps-site/                    landing (en)
https://32penkin.github.io/reverse-steps-site/privacy/            privacy policy  ← store "Privacy Policy URL"
https://32penkin.github.io/reverse-steps-site/support/            support / FAQ  ← store "Support URL"
https://32penkin.github.io/reverse-steps-site/account-deletion/   account deletion ← Play "Delete account URL"
https://32penkin.github.io/reverse-steps-site/pl/…                same pages in Polish (ru, de, fr, es)
```

## Build

No dependencies:

```sh
node build.mjs                    # site.config.json + content/<lang>.mjs → public/
node --test tests/*.test.cjs      # link helpers + every relative link in public/ resolves
```

`public/` is committed; the workflow `.github/workflows/deploy-pages.yml` rebuilds, tests, fails if
`public/` is stale and deploys it. In the repository settings set Pages → Source: GitHub Actions.

## What to change where

| Change | File |
|---|---|
| Facts the texts depend on: quota numbers, AI provider name, analytics retention, phase (`beta`/`live`), TestFlight/Play/App Store links | `site.config.json` |
| Texts | `content/en.mjs` (source), `content/pl.mjs`, then `ru/de/fr/es` (AI translations, D16) |
| Layout | `build.mjs`, `assets/styles.css` |
| Store links and `?src=` attribution | `assets/rs-links.js` |

`aiProvider: null` → the privacy policy says "the AI provider named on the consent screen". **Set the
real provider (A8) before reassembly hints are enabled for testers** and bump `lastUpdated`.

## Attribution

Channel links: `https://32penkin.github.io/reverse-steps-site/?src=<channel>&cmp=<campaign>`
(`src`/`cmp`: lowercase `a-z0-9_`, ≤ 40 chars). In the `live` phase the Google Play button carries them
in the install referrer (`utm_source`, `utm_medium=landing`, `utm_campaign`); the App Store button
gets `pt`/`ct` once `appStoreProviderToken` is known. In the `beta` phase buttons point to TestFlight
and the Play testing opt-in page (no attribution possible there). No cookies, no storage, no requests.

## Demo video

M2 delivers the clip: put `assets/demo.mp4` (+ `assets/demo-poster.jpg`), copy them in `build.mjs`
next to `styles.css`, and replace the placeholder block in `homePage()` (comment marks the spot).
