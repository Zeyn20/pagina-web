const STATIC_CACHE = "static-v1";

const APP_SHELL = [
  "/",
  "/index.html",
  "/js/main.js",
  "/imagenes/banner.png"
];

self.addEventListener("install", (e) => {
  const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

  e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
  console.log("fetch! ", e.request);
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        return res || fetch(e.request);
      })
      .catch(console.log)
  );
  //   e.waitUntil(response);
});
// const staticRantanFood = "Rantan-Food-v1";
// const assets = [
//   "/",
//   "/pagina-web/js/app.js",
//   "/pagina-web/index.html",
//   "/pagina-web/productos.html",
//   "/pagina-web/servicios.html"
//   // "/pagina-web/public/css/style.css",
//   // "/pagina-web/public/css/menu.css",
//   // "/pagina-web/public/css/styleP.css",
//   // "/pagina-web/public/css/styleS.css",
  
//   // "/pagina-web/public/imagenes/menu.png",
//   // "/pagina-web/public/imagenes/banner.png",
//   // "/pagina-web/public/imagenes/icons/shopping-cart.svg",
//   // "/pagina-web/public/imagenes/CoPanameñas/arroz-frito.jpg",
//   // "/pagina-web/public/imagenes/CoPanameñas/hamburguesa.jpg",
//   // "/pagina-web/public/imagenes/CoPanameñas/Arroz-guandu.jpg",
//   // "/pagina-web/public/imagenes/camareros.png",
//   // "/pagina-web/public/imagenes/comprasx128.png",
//   // "/pagina-web/public/imagenes/consultax128.png",
//   // "/pagina-web/public/imagenes/domicilio.png",
//   // "/pagina-web/public/imagenes/hombre.png",
//   // "/pagina-web/public/imagenes/mujer.png"
// ];

// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(staticRantanFood).then(cache => {
//       return cache.addAll(assets);
//     })
//   );
// });

// self.addEventListener("activate", activateEvent => {
//   activateEvent.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.filter(cacheName => cacheName !== staticRantanFood)
//                   .map(cacheName => caches.delete(cacheName))
//       );
//     })
//   );
// });

// self.addEventListener("fetch", fetchEvent => {
//   fetchEvent.respondWith(
//     caches.match(fetchEvent.request).then(cachedResponse => {
//       return cachedResponse || fetch(fetchEvent.request);
//     })
//   );
// });
