// //Configurar SW
// let swLocation = "serviceWorker.js";
// // "/beerjs/sw.js";

// if (navigator.serviceWorker) {
//   if (window.location.href.includes("localhost")) swLocation = "/serviceWorker.js"; //Varia según el host
//   navigator.serviceWorker.register(swLocation);
// }

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
          })
      }

//Logic of web app
console.log("Xd");