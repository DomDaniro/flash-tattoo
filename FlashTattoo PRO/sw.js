self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open('flash-cache').then(cache=>{
      return cache.addAll(['index.html','logo.png']);
    })
  );
});
