this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-abuse/',
        '/sw-abuse/index.html',
        '/sw-abuse/app.js',
        '/sw-abuse/img/img0.gif'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    return fetch(event.request).then(function(response) {
      return caches.open('v1').then(function(cache) {
        cache.put(event.request, response.clone());
        return response;
      })
    })
  );
});
