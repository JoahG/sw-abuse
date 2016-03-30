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
  fetch(event.request)
  .then(function(response) {

    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }

    sleep(5000);
    console.log("Sleeping :)");
    return response;
  });
});
