const CACHE_NAME = 'veracheck-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/cours.html',
  '/simulations.html',
  '/about.html',
  '/verifier.html',
  '/css/style.css',
  '/Js/script.js',
  '/Js/quiz.js',
  '/Js/manifest.JSON',
  '/images/logoVera.jpeg',
  '/images/veraCheck.ico',
  '/images/illustration2.jpeg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .catch(() => console.warn('Cache installation échouée'))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
    ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => cachedResponse || fetch(event.request))
      .catch(() => fetch(event.request))
  );
});
