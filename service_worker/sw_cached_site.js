
const cacheName = "v2";

//* call install event listener
self.addEventListener('install', e => {
    console.log('service worker installed');
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
        fetch(e.request)
        .then(res => {
            //* make copy/clone of response
            const resClone = res.clone();
            //* Open Cache
            caches
              .open(cacheName)
              .then(cache => {
                  cache.put(e.request, resClone)
              })
              return res;
        })
        .catch(err => caches.match(e.request).then(res => res))
    );
});

