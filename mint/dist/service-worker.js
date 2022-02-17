const CACHE = 'da56daca1f026474fa935836759d1c99ec7b70737d294f557878cfbf52194589'
const PRECACHE_URLS = [
  '/external-stylesheets.css',
  '/index.html',
  '/index.js',
  '/manifest.webmanifest'
]

// On install precache all static resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then(cache =>
        Promise.all(
          PRECACHE_URLS.map(url =>
            cache
              .add(url)
              .catch(error => console.log(`Could not cache: ${url} - ${error}!`))
          )
        )
      )
      .then(() => self.skipWaiting())
  )
})

// On activate remove all unused caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => cacheNames.filter(cacheName => cacheName !== CACHE))
      .then(cachesToDelete =>
        Promise.all(
          cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete))
        )
      )
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  const url = event.request.url
  const origin = self.location.origin
  const isSameOrigin = url.startsWith(origin)

  let response = null

  // If we are on the same origin
  if (isSameOrigin) {
    // Try to get the response from the cache, and if not available
    // fall back to the "index.html" file.
    response =
      caches
        .match(event.request)
        .then(cachedResponse => cachedResponse || caches.match('/index.html'))
  } else {
    response = fetch(event.request)
  }

  event.respondWith(response)
})
