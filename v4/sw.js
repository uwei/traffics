/*
 * Service Worker für Traffics 4 (PWA)
 * Strategie: „Netzwerk zuerst, Cache als Rückfall“ –
 *   online wird immer die aktuelle Version geladen (und im Cache aufgefrischt),
 *   offline läuft das Spiel aus dem Cache weiter.
 * Pfade sind relativ zum Ort dieser Datei (funktioniert z. B. unter /traffics/v4/).
 */
const CACHE = 'traffics4';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // nur eigene Dateien

  event.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then(hit => hit || (req.mode === 'navigate' ? caches.match('./index.html') : undefined))
      )
      .then(res => res || new Response('Offline', { status: 503, statusText: 'Offline' }))
  );
});
