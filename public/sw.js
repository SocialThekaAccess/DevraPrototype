// DEVRA Architects — Service Worker
// Cache-first for images/assets, network-first for HTML/JS/CSS

const CACHE_NAME = 'devra-v1';
const IMAGE_CACHE = 'devra-images-v1';

// Cache these on install (app shell)
const PRECACHE_URLS = [
  '/',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== IMAGE_CACHE)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin + Vercel CDN assets
  if (request.method !== 'GET') return;

  // Images — cache-first (serve from cache, update in background)
  if (
    /\.(webp|png|jpg|jpeg|avif|gif|svg|ico)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(cache =>
        cache.match(request).then(cached => {
          const fetchPromise = fetch(request).then(response => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          });
          // Return cached immediately if available, else wait for network
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // JS/CSS chunks — cache-first (Vite adds content hash, safe to cache forever)
  if (
    url.pathname.startsWith('/assets/') &&
    /\.(js|css)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(request).then(cached => {
          if (cached) return cached;
          return fetch(request).then(response => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // HTML — network-first (always get latest page)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }
});
