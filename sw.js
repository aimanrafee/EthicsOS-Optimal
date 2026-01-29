/**
 * EthicsOS Optimal - Service Worker (Solid 2050)
 * Logic for Offline Data Sovereignty and Asset Persistence.
 */

const CACHE_NAME = 'ethicsos-v1';

// Assets to be cached for 100% Offline Capability
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json'
];

/**
 * 1. INSTALL EVENT
 * Triggered when the browser first registers the Service Worker.
 * This caches the Sovereign Core assets locally.
 */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('EthicsOS: Caching Sovereign Core Assets...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

/**
 * 2. ACTIVATE EVENT
 * Triggered when a new Service Worker takes control.
 * It cleans up old cache versions to ensure system integrity.
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
});

/**
 * 3. FETCH EVENT
 * The heart of the Offline-First experience.
 * It intercepts network requests and serves cached files if the device is offline.
 */
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return the cached version if available, otherwise fetch from the network
            return cachedResponse || fetch(event.request);
        }).catch(() => {
            // Sovereign Fallback: If network fails and request is a page, show index.html
            if (event.request.mode === 'navigate') {
                return caches.match('./index.html');
            }
        })
    );
});
