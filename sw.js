// Autolupa – minimalus service worker: įdiegiamumas (PWA) ir veikimas be interneto. Tinklas pirmiausia, talpykla – tik atsarginis variantas.
const C = 'autolupa-v34';
self.addEventListener('install', (e) => { self.skipWaiting(); e.waitUntil(caches.open(C).then((c) => c.addAll(['./', './manifest.webmanifest', './icon-192.png', './icon-512.png'])).catch(() => {})); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== C).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const q = e.request; if (q.method !== 'GET') return;
  const u = new URL(q.url); if (u.origin !== location.origin) return;
  const nav = q.mode === 'navigate';
  e.respondWith(fetch(q).then((r) => { if (r.ok && (nav || /\.(json|png|svg|webmanifest)$/.test(u.pathname))) { const cp = r.clone(); caches.open(C).then((c) => c.put(nav ? './' : q, cp)); } return r; })
    .catch(() => caches.match(nav ? './' : q, { ignoreSearch: nav }).then((r) => r || caches.match('./'))));
});
