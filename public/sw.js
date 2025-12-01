const CACHE_NAME = 'portfolio-v2';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([
      OFFLINE_URL,
      '/og-image.svg'
    ])).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Only handle same-origin navigations for offline fallback
  if (request.mode === 'navigate' && url.origin === location.origin) {
    event.respondWith(
      Promise.race([
        fetch(request),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 8000))
      ]).catch(err => {
        // Only show offline page for network failures, not TLS/SSL errors
        if (err.message === 'Failed to fetch' || err.message === 'timeout' || !navigator.onLine) {
          return caches.open(CACHE_NAME).then(cache => cache.match(OFFLINE_URL));
        }
        throw err; // Let browser show native error for TLS/certificate issues
      })
    );
    return;
  }
  
  if (request.method !== 'GET' || url.origin !== location.origin) return;
  
  // Network-first for assets, with cache fallback
  event.respondWith(
    fetch(request, { cache: 'no-cache' })
      .then(response => {
        if (response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});
