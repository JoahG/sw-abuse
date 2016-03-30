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
  var response;
  event.respondWith(
    img = event.request;
    console.log(img);
    //new Response('<img src=""';)
  );
});
