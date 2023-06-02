const staticRantanFood = "Rantan-Food-v1";
const assets = [
  "/",
  "/index.html",
  "/productos.html",
  "/servicios.html", 
  "/css/style.css",
  "css/menu.css",
  "/imagenes/arroz-frito.jpg",
  "/imagenes/Arroz-guando.jpg",
  "/imagenes/carimañola.jpg",
  "/imagenes/carne-guisada.jpg",
  "/imagenes/ceviche.jpg",
  "/imagenes/chicheme.jpg",
  "/imagenes/ojaldre.jpg",
  "/imagenes/patacones.jpg",
  "/imagenes/ropa-vieja.jpg",
  "/imagenes/sancocho-panameno.jpg",
  "/imagenes/tamales-panamenos.jpg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticRantanFood).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", activateEvent => {
  activateEvent.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => cacheName !== staticRantanFood)
                  .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(cachedResponse => {
      return cachedResponse || fetch(fetchEvent.request);
    })
  );
});