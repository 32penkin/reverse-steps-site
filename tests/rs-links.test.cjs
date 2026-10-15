// node --test tests/
const test = require('node:test');
const assert = require('node:assert/strict');
const links = require('../assets/rs-links.js');

const live = {
  phase: 'live',
  links: { playPackage: 'com.reversesteps.app', appStoreId: '123', appStoreProviderToken: null },
};

test('toToken keeps only safe characters', () => {
  assert.equal(links.toToken(' Reddit-BikeWrench! '), 'redditbikewrench');
  assert.equal(links.toToken(''), null);
  assert.equal(links.toToken('<script>'), 'script');
  assert.equal(links.toToken('a'.repeat(60)).length, 40);
});

test('readParams reads src and cmp', () => {
  assert.deepEqual(links.readParams('?src=r_fixit&cmp=beta1'), { src: 'r_fixit', campaign: 'beta1' });
  assert.deepEqual(links.readParams(''), { src: null, campaign: null });
});

test('Play link carries the referrer', () => {
  const url = links.buildPlayUrl(live.links, { src: 'reddit', campaign: 'launch' });
  assert.ok(url.startsWith('https://play.google.com/store/apps/details?id=com.reversesteps.app&referrer='));
  const ref = new URLSearchParams(decodeURIComponent(url.split('&referrer=')[1]));
  assert.equal(ref.get('utm_source'), 'reddit');
  assert.equal(ref.get('utm_medium'), 'landing');
  assert.equal(ref.get('utm_campaign'), 'launch');
});

test('Play link defaults to landing source', () => {
  const ref = new URLSearchParams(decodeURIComponent(links.buildPlayUrl(live.links, {}).split('&referrer=')[1]));
  assert.equal(ref.get('utm_source'), 'landing');
  assert.equal(ref.get('utm_campaign'), null);
});

test('App Store link adds campaign only with a provider token', () => {
  assert.equal(links.buildAppStoreUrl(live.links, { src: 'reddit' }), 'https://apps.apple.com/app/id123');
  const withToken = { ...live.links, appStoreProviderToken: '999' };
  assert.equal(
    links.buildAppStoreUrl(withToken, { src: 'reddit' }),
    'https://apps.apple.com/app/id123?pt=999&ct=reddit&mt=8'
  );
  assert.equal(links.buildAppStoreUrl({ appStoreId: null }, {}), null);
});

test('beta phase uses TestFlight and Play testing links, null when missing', () => {
  const beta = { phase: 'beta', links: { testflight: null, playTesting: 'https://play.google.com/apps/testing/x' } };
  assert.equal(links.resolveStoreHref('ios', beta, {}), null);
  assert.equal(links.resolveStoreHref('android', beta, {}), 'https://play.google.com/apps/testing/x');
});

test('detectPlatform', () => {
  assert.equal(links.detectPlatform('Mozilla/5.0 (Linux; Android 14)'), 'android');
  assert.equal(links.detectPlatform('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)'), 'ios');
  assert.equal(links.detectPlatform('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 5), 'ios');
  assert.equal(links.detectPlatform('Mozilla/5.0 (Windows NT 10.0)'), 'other');
});
