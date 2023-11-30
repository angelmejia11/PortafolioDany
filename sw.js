const nombreCache = "PWA"
const archivosCache=[
    "/",
    "/index.html",
    "/css/style.css",
    "/img/imgBlanca.jpeg",
    "/img/imgBlanca1.jpg",
    "/img/imgVerde.jpeg",
    "/img/informatica.jpg",
    "/js/app.js",
    "/js/javaScript.js"
]


self.addEventListener('install', e => {
    console.log("Service worker se instalo correctamente", e);
    e.waitUntil(
        caches.open(nombreCache).then((cache)=>{
            console.log("Cache guardada correctamente")
            cache.addAll(archivosCache);
        })
    )
 });
 
 self.addEventListener('activate', e => {
    console.log("Service worker se activo correctamente", e);
 });

 self.addEventListener('fetch', e=>{
    console.log("fetch..", e)
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache =>{
            return respuestaCache 
        })
    )
 });