
const cacheName = "v1";

const cacheAssets = [
    "index.html",
    "about.html",
    "/css/style.css",
    "/js/main.js"
];

//* call install event listener
self.addEventListener('install', e => {
    console.log('service worker installed');

    e.waitUntil(
        caches
          .open(cacheName)
          .then(cache => {
              console.log("SERVICE WORKER: Caching Files")
              cache.addAll(cacheAssets);
          })
          .then(() => self.skipWaiting())
          .catch(err => console.log(err))
    );
});

//* call activate event
self.addEventListener('activate', e => {
    console.log('service worker activated')
    //* remove unwanted caches
    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('SERVICE WORKER: Clearing old caches');
                        return caches.delete(cache)
                    }
                })
            )
        })
        .catch(err => console.log(err))
    );
});

//* call fetch Event
self.addEventListener('fetch', e => {
    console.log("SERVICE WORKER: Fetching")
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});

