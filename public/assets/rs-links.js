/*
 * Store / beta link helpers for the landing page (GitHub Pages, no build step at runtime).
 * Loaded with <script src="…/assets/rs-links.js"></script>; exposes window.ReverseStepsLinks.
 * Also exported for Node tests (tests/rs-links.test.mjs). No cookies, no storage, no requests.
 *
 * Attribution scheme (docs/MARKETING.md in the app repo): channel links are
 *   https://32penkin.github.io/reverse-steps-site/?src=<channel>&cmp=<campaign>
 * Google Play gets them in the install referrer (utm_source / utm_medium=landing / utm_campaign),
 * which the app may read on first launch. iOS: App Store Connect campaign link (pt/ct) once the
 * provider token is known; until then the App Store link carries nothing.
 */
(function (root) {
  'use strict';

  function toToken(value) {
    var token = String(value == null ? '' : value)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_]/g, '')
      .slice(0, 40);
    return token || null;
  }

  /** Reads ?src=&cmp= from a query string. */
  function readParams(search) {
    var params = new URLSearchParams(search || '');
    return { src: toToken(params.get('src')), campaign: toToken(params.get('cmp')) };
  }

  function buildPlayUrl(config, options) {
    var opts = options || {};
    var referrer = new URLSearchParams();
    referrer.set('utm_source', opts.src || 'landing');
    referrer.set('utm_medium', 'landing');
    if (opts.campaign) referrer.set('utm_campaign', opts.campaign);
    return (
      'https://play.google.com/store/apps/details?id=' +
      encodeURIComponent(config.playPackage) +
      '&referrer=' +
      encodeURIComponent(referrer.toString())
    );
  }

  function buildAppStoreUrl(config, options) {
    if (!config.appStoreId) return null;
    var opts = options || {};
    var url = 'https://apps.apple.com/app/id' + config.appStoreId;
    if (config.appStoreProviderToken && opts.src) {
      url +=
        '?pt=' +
        encodeURIComponent(config.appStoreProviderToken) +
        '&ct=' +
        encodeURIComponent(opts.src) +
        '&mt=8';
    }
    return url;
  }

  /**
   * Resolves the href for one store button.
   * @param {'ios'|'android'} platform
   * @param {{phase:'beta'|'live', links:object}} site
   * @returns {string|null} null = not available yet (button stays disabled)
   */
  function resolveStoreHref(platform, site, params) {
    var links = site.links || {};
    if (site.phase === 'beta') {
      return platform === 'ios' ? links.testflight || null : links.playTesting || null;
    }
    return platform === 'ios' ? buildAppStoreUrl(links, params) : buildPlayUrl(links, params);
  }

  /** @param {string} userAgent @param {number} [maxTouchPoints] */
  function detectPlatform(userAgent, maxTouchPoints) {
    var ua = String(userAgent || '');
    if (/android/i.test(ua)) return 'android';
    if (/iphone|ipad|ipod/i.test(ua)) return 'ios';
    if (/macintosh/i.test(ua) && (maxTouchPoints || 0) > 1) return 'ios';
    return 'other';
  }

  /**
   * Rewrites every <a data-store="ios|android"> with the right link for the phase and the
   * visitor's ?src=. Links that are not available yet get aria-disabled and the "soon" class.
   * Also marks the visitor's platform button as primary.
   */
  function decorateStoreLinks(doc, site, search, userAgent, maxTouchPoints) {
    var params = readParams(search);
    var platform = detectPlatform(userAgent, maxTouchPoints);
    var nodes = doc.querySelectorAll('a[data-store]');
    for (var i = 0; i < nodes.length; i += 1) {
      var node = nodes[i];
      var store = node.getAttribute('data-store');
      var href = resolveStoreHref(store, site, params);
      if (href) {
        node.setAttribute('href', href);
        node.removeAttribute('aria-disabled');
        node.classList.remove('soon');
      } else {
        node.removeAttribute('href');
        node.setAttribute('aria-disabled', 'true');
        node.classList.add('soon');
      }
      if (platform !== 'other') node.classList.toggle('primary', store === platform);
    }
    return params;
  }

  var api = {
    toToken: toToken,
    readParams: readParams,
    buildPlayUrl: buildPlayUrl,
    buildAppStoreUrl: buildAppStoreUrl,
    resolveStoreHref: resolveStoreHref,
    detectPlatform: detectPlatform,
    decorateStoreLinks: decorateStoreLinks,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    root.ReverseStepsLinks = api;
  }
})(typeof window !== 'undefined' ? window : this);
