'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "b1f61baba4dc67801b9dc4d2475c367d",
"404.template.html": "843162be6302cdecc1e2773efc4508d4",
"assets/AssetManifest.bin": "f5391a2579843478340925350f041745",
"assets/AssetManifest.bin.json": "a9fe6ce88e8a7b9234cf1f2e1a4af6d2",
"assets/AssetManifest.json": "c2871b1600e05d64f2cac0ed8907e0f0",
"assets/assets/font/Inter.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/font/Poppins-black-italic.otf": "242874089c5dd06f4746659b06e98f51",
"assets/assets/font/Poppins-black.ttf": "2638325e100a2c1c5411c267da4d79b9",
"assets/assets/font/Poppins-bold-italic.otf": "39e02f68500b45efdf9d87f5770ca2cc",
"assets/assets/font/Poppins-bold.ttf": "53f5bf25fd339d41aded7b8a6181196e",
"assets/assets/font/Poppins-italic.otf": "64e838b9ef3275db2341f1b023caf63a",
"assets/assets/font/Poppins-light-italic.otf": "8dc38b6da4179fb6fbd123d815240bb7",
"assets/assets/font/Poppins-light.ttf": "4f5ac5006e88c6bd33ba44bdd71d2c16",
"assets/assets/font/Poppins-medium-italic.otf": "d11c31441864d4a8048a9763160f561b",
"assets/assets/font/Poppins-medium.ttf": "b1f91231be5d2704de64eb59f32c9213",
"assets/assets/font/Poppins-regular.ttf": "cfdac3e045c683955e6bd3afabbb8a60",
"assets/assets/font/Poppins-semi-bold-italic.otf": "9582ae7be5223034f369a722f052e448",
"assets/assets/font/Poppins-semi-bold.ttf": "65f6fb50aafbcd361fc0bfb5b5712f31",
"assets/assets/font/VNM-Sans-Std.otf": "e2855e21f3d74a54a2f9e904fb5dd74a",
"assets/assets/images/en.png": "e667999048e9c8c5c5610d1d33908e52",
"assets/assets/images/footer/facebook.png": "79a461c401a80304d4b0424c7c0e2ea7",
"assets/assets/images/footer/group.png": "6b388bddcd3d5ad7066163fb5ba33ce9",
"assets/assets/images/footer/linkedin.png": "049666eff9682f1076b26f5dcd393ccf",
"assets/assets/images/footer/mail.png": "d7b3ebe706229ecd4d68129bb58662d0",
"assets/assets/images/header.jpg": "9d593d3338d53441765aebc17b006356",
"assets/assets/images/header.png": "4b1149d6a6569681d4aa1de227910474",
"assets/assets/images/header1.png": "92e7f47ac0a7c457b838a15e39d29b08",
"assets/assets/images/header2.png": "4e67258de36742fa78607162f6964d85",
"assets/assets/images/key_visual.png": "485d2eb7aca9c4185c835df0676bb467",
"assets/assets/images/logo.png": "00c6ba2aac6a21e8ab5b1727e7a4082d",
"assets/assets/images/logo_white.png": "00c6ba2aac6a21e8ab5b1727e7a4082d",
"assets/assets/images/vi.png": "7080ff7096fb7e0607b0569e1e2f518f",
"assets/assets/resources/cities.json": "46cfb2e069601aa7d80948e7899e144e",
"assets/assets/resources/districts.json": "00da154d2efc90bd77eb036366d8756d",
"assets/assets/resources/provinces.json": "a43a7bedb773751f85c8bbe9b54185c1",
"assets/assets/resources/wards.json": "77678e7fa71b096112456af01db453a0",
"assets/FontManifest.json": "06c0622921b2f57be49ab588b43bbc64",
"assets/fonts/MaterialIcons-Regular.otf": "76cc90791bea4c49f090bef16624bc90",
"assets/NOTICES": "390b36eb08a38a4d09c6236e6ca1fb13",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"config.json": "04b6c3afda325dc2d74494bb13779b93",
"favicon.png": "00c6ba2aac6a21e8ab5b1727e7a4082d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "177cb5e20483f634ec8561643a13f0a6",
"icons/icon-192.png": "32408964dbd0b2b26c0c74047693d25e",
"icons/Icon-512.png": "32408964dbd0b2b26c0c74047693d25e",
"icons/Icon-maskable-192.png": "32408964dbd0b2b26c0c74047693d25e",
"icons/Icon-maskable-512.png": "32408964dbd0b2b26c0c74047693d25e",
"index.html": "5b71b8907c705d126646e0237a53213d",
"/": "5b71b8907c705d126646e0237a53213d",
"index.template.html": "843162be6302cdecc1e2773efc4508d4",
"main.dart.js": "278302bda464c566b13550550943d17e",
"manifest.json": "3aca5c377a6e75d0321b14a9d8f03080",
"manifest.template.json": "e3586503d8f928a3f8acb94f960ec386",
"version.json": "ff5615fff3996445ac5abcdabfd89500"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
