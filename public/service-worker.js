importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );
  
  // This will work!
  workbox.routing.registerRoute(
    ({request}) => true,
    new workbox.strategies.CacheFirst()
  );