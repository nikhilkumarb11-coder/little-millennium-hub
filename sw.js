/* Offline support for the campus ERP. Bump CACHE_VERSION when changing this file. */
const CACHE_VERSION = "lm-erp-v2";
const CORE_FILES = [
    "./",
    "./index.html",
    "./campuses.js",
    "./pay.html",
    "./lm-logo.png",
    "./Dummy-logo.png",
    "./icons/lm-192.png",
    "./icons/dummy-192.png"
];
const CDN_HOSTS = ["cdn.tailwindcss.com", "cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(cache => Promise.all(CORE_FILES.map(url => cache.add(url).catch(() => null))))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

async function networkFirst(request, fallbackUrl) {
    const cache = await caches.open(CACHE_VERSION);
    try {
        const fresh = await fetch(request);
        if (fresh && fresh.ok) cache.put(request, fresh.clone());
        return fresh;
    } catch (err) {
        const hit = await cache.match(request, { ignoreSearch: true })
            || (fallbackUrl && await cache.match(fallbackUrl));
        if (hit) return hit;
        throw err;
    }
}

async function staleWhileRevalidate(request) {
    const cache = await caches.open(CACHE_VERSION);
    const hit = await cache.match(request);
    const refresh = fetch(request)
        .then(res => {
            if (res && (res.ok || res.type === "opaque")) cache.put(request, res.clone());
            return res;
        })
        .catch(() => null);
    return hit || (await refresh) || Response.error();
}

self.addEventListener("fetch", (event) => {
    const req = event.request;
    if (req.method !== "GET") return;
    const url = new URL(req.url);

    // Live Sheet data always goes to the network; the app keeps its own offline copy.
    if (/(^|\.)google(usercontent)?\.com$/.test(url.hostname)) return;

    if (url.origin === self.location.origin) {
        if (req.mode === "navigate") {
            event.respondWith(networkFirst(req, "./index.html"));
        } else if (/\.(js|html|webmanifest)$/.test(url.pathname)) {
            event.respondWith(networkFirst(req));
        } else {
            event.respondWith(staleWhileRevalidate(req));
        }
        return;
    }

    if (CDN_HOSTS.includes(url.hostname)) {
        event.respondWith(staleWhileRevalidate(req));
    }
});
