
//* make sure service worker is supported
if('serviceWorker' in navigator) {
    console.log('service worker is supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('../sw_cached_site.js')
        .then(reg => console.log('service worker is registerd'))
        .catch(err => console.log(`ERROR: ${err}`))
    })
}

