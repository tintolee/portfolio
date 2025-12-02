const CACHE_NAME = 'portfolio-v3';
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
      fetch(request)
        .catch(() => {
          // On any fetch failure, serve offline page from cache
          return caches.match(OFFLINE_URL).then(response => {
            return response || new Response('Offline', { 
              status: 503, 
              statusText: 'Service Unavailable',
              headers: new Headers({ 'Content-Type': 'text/html' })
            });
          });
        })
    );
    return;
  }
  
  if (request.method !== 'GET' || url.origin !== location.origin) return;
  
  // Network-first for assets, with cache fallback
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone)).catch(() => {});
        }
        return response;
      })
      .catch(() => {
        return caches.match(request).then(cached => {
          return cached || new Response('Not found', { status: 404 });
        });
      })
  );
});
