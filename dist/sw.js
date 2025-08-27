const CACHE_NAME = "task-manager-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/src/main.jsx", // ou o caminho do bundle JS se usar build
];

// Instalando o SW e armazenando recursos no cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Ativando o SW e limpando caches antigos
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

// Interceptando requisições para servir do cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
