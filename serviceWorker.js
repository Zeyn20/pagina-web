const staticRantanFood = "Rantan-Food-v1";
const assets = [
  "/",
  "/index.html",
  "/productos.html",
  "/servicios.html",
  "/css/menu.css",
  "/css/style.css",
  "/css/styleP.css",
  "/css/styleS.css",
  "/imagenes/CoPanamenas/Arroz-guandu.jpg",
  "/imagenes/CoPanamenas/arroz-frito.jpg",
  "/imagenes/CoPanamenas/hamburguesa.jpg",
  "/imagenes/icons/shopping-cart.svg",
  "/imagenes/banner.png",
  "/imagenes/camareros.png",
  "/imagenes/comprasx128.png",
  "/imagenes/consultax128.png",
  "/imagenes/domicilio.png",
  "/imagenes/hombre.png",
  "/imagenes/menu.png",
  "/imagenes/mujer.png",
  "/js/app.js"
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
