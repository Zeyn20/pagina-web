//Configurar SW
let swLocation = "serviceWorker.js";
// "/beerjs/sw.js";

if (navigator.serviceWorker) {
  if (window.location.href.includes("localhost")) swLocation = "/serviceWorker.js"; //Varia según el host
  navigator.serviceWorker.register(swLocation);
}

//Logic of web app
console.log("Hello world!!");