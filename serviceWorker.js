const staticRantanFood = "Rantan-Food-v1";
const assets = [
  "/",
  "/index.html",
  "/productos.html",
  "/servicios.html", 
  "/css/style.css",
  "/css/menu.css",
  "/css/styleP.css",
  "/css/styleS.css",
  "/js/app.js",
  "/imagenes/menu.png",
  "/imagenes/banner.png",
  "/imagenes/camareros.jpg",
  "/imagenes/comprasx128.png",
  "/imagenes/consultax128.png",
  "/imagenes/domicilio.png",
  "/imagenes/hombre.png",
  "/imagenes/mujer.png",
  "/imagenes/hamburguesa.jpg",
  "/imagenes/CoPanameñas/arroz-frito.jpg",
  "/imagenes/CoPanameñas/Arroz-guandu.jpg",
  "/imagenes/icons/shopping-cart.svg"
];

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