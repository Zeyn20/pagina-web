const staticRantanFood = "Rantan-Food-v1";
const assets = [
  "/",
  "/pagina-web/public/index.html",
  "/pagina-web/public/productos.html",
  "/pagina-web/public/servicios.html", 
  "/pagina-web/public/css/style.css",
  "/pagina-web/public/css/menu.css",
  "/pagina-web/public/css/styleP.css",
  "/pagina-web/public/css/styleS.css",
  "/pagina-web/public/js/app.js",
  "/pagina-web/public/imagenes/menu.png",
  "/pagina-web/public/imagenes/banner.png",
  "/pagina-web/public/imagenes/icons/shopping-cart.svg",
  "/pagina-web/public/imagenes/CoPanameñas/arroz-frito.jpg",
  "/pagina-web/public/imagenes/CoPanameñas/hamburguesa.jpg",
  "/pagina-web/public/imagenes/CoPanameñas/Arroz-guandu.jpg",
  "/pagina-web/public/imagenes/camareros.png",
  "/pagina-web/public/imagenes/comprasx128.png",
  "/pagina-web/public/imagenes/consultax128.png",
  "/pagina-web/public/imagenes/domicilio.png",
  "/pagina-web/public/imagenes/hombre.png",
  "/pagina-web/public/imagenes/mujer.png"
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
