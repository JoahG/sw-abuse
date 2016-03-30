// register service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-abuse/sw.js', { scope: '/sw-abuse/' }).then(function(reg) {

    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }

  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
} else {
  console.log('Service worker not supported on this browser');
};

// function for loading each image via XHR

function imgLoad(url) {
  // return a promise for an image loading
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('There was a network error.'));
    };

    // Send the request
    request.send();
  });
};

window.onload = function() {
  var Images = Array.apply(null, Array(1000)).map(function (_, i) {return "img" + i + ".gif";});
  // load each set of image, alt text, name and caption
  for(i = 0; i<=Images.length-1; i++) {
    imgLoad("img/" + Images[i]).then(function(image) {
      console.log(image);
    }, function(Error) {
      console.log(Error);
    });
  };
};
