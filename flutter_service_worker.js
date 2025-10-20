'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8a49224e7ecb78db639dc0016bb58ac9",
"assets/AssetManifest.bin.json": "9d003dbec2091eac7ebf565364737e47",
"assets/AssetManifest.json": "1787ecc39d20209035bd79bca7c76692",
"assets/assets/locale.json": "7120201c3da03d8804e145411d07eeb2",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "c797938689638cb248ec303216aeb107",
"assets/lib/images/1.jpg": "a2ad5b35ea386a76352c4f9eb0226efb",
"assets/lib/images/dis12.jpg": "35e1f12be97fa80d1855bc812dd0a431",
"assets/lib/images/dis_1.jpg": "f14a6e4f2f6014c376f586a2b32f2aee",
"assets/lib/images/dis_11.jpg": "9b987bffaaf4a294f38dedfc52a7dc46",
"assets/lib/images/dis_17.jpg": "99f2a6261070a6d4619ef01c0597dd80",
"assets/lib/images/dis_18.jpg": "e05613f654f557f546259c35d1a262a8",
"assets/lib/images/dis_2.jpg": "46676d477c7f807db0692a42091000cd",
"assets/lib/images/dis_3.jpg": "5bba48e4f4d7c9b5fc236d09b03ba6fd",
"assets/lib/images/dis_4.jpg": "90cc3618a4a9c3cb07fe3ddb57c9b38b",
"assets/lib/images/dis_7.jpg": "8e023ce88135d7cc8267a65b0d65fba6",
"assets/lib/images/dis_8.jpg": "690a47eb96ce423031007d7e2f5bfc7d",
"assets/lib/images/dis_9.jpg": "73a102e0f2f2c8a10d459fb4c8a9e89e",
"assets/lib/images/lang1.png": "2f2942e419d568d8e1d2a4d61d17442f",
"assets/lib/images/logo.png": "b521a73084f9c69ded3935300d73e3c6",
"assets/lib/images/mafruchat_1.jpg": "2e86f1cce8551489f4eb585e3a9c20be",
"assets/lib/images/mafruchat_2.jpg": "bb00243d27db9d5090f0683e0926e1cc",
"assets/lib/images/mafruchat_3.jpg": "e29e21e55473017a7baf11ed1f2b9699",
"assets/lib/images/mafruchat_4.jpg": "ab48ea7beb1fafdf7df9200b69a9afa4",
"assets/lib/images/mafruchat_5.jpg": "aadfc491af6e2bcc0c76e1fe1fc0e1e9",
"assets/lib/images/mafruchat_6.jpg": "2a6bdc57e637bfb03819603b5a413dbb",
"assets/lib/images/mafruchat_8.jpg": "0be31bfb6319cc21b304eb3270fc7b86",
"assets/lib/images/nahas_1.jpg": "c166c9ba4d96e33724b04766da613dfd",
"assets/lib/images/nahas_11.jpg": "65af7a83de85fc024a622e025ec5432a",
"assets/lib/images/nahas_12.jpg": "70746addd3d558bbe3ed4c73fe77e876",
"assets/lib/images/nahas_13.jpg": "0d538ff5e13ec91b8194b7e4ff4cae0b",
"assets/lib/images/nahas_14.jpg": "088b676aad1ab3de36f09fd79241eb03",
"assets/lib/images/nahas_15.jpg": "787e5f672037255b4a4325707c760361",
"assets/lib/images/nahas_2.jpg": "fd379e0f2fa014fd8d46f2771aacaaca",
"assets/lib/images/nahas_3.jpg": "329c328d618e366c1283a6d95cc7cf68",
"assets/lib/images/nahas_4.jpg": "f778f21d3cbba19ac100970b1528acc5",
"assets/lib/images/nahas_5.jpg": "884cb66bdaf4834f0ac0cfb5a966f147",
"assets/lib/images/nahas_6.jpg": "9ead0139de5c4d8d2b0cb068a81941e3",
"assets/lib/images/nahas_66.jpg": "86e53c1aefefbe7dc728a7b188f9bea0",
"assets/lib/images/nahas_7.jpg": "b2da888321e67a3e0559a6cd762db320",
"assets/lib/images/nahas_8.jpg": "30a46a54da361bed3c15452af3cf1e21",
"assets/lib/images/nahas_9.jpg": "513a19e8fffb116a3396e42fda03c217",
"assets/lib/images/nahsw.jpg": "76ad760f25324c029fe958493b85838c",
"assets/lib/images/plat1.jpg": "d8d5da8a6703ec51996de93ab76bd68b",
"assets/lib/images/plat2.jpg": "9dbed1a5275e5efb328951a0c6fce3ef",
"assets/lib/images/plat3.jpg": "363753a47ba4f069979916417439dd65",
"assets/lib/images/plat4.jpg": "092e317838ef517db020f2f18f968d0a",
"assets/lib/images/plat5.jpg": "ff4266a6f03fff2d93452e39b85cdeb4",
"assets/lib/images/plat6.jpg": "c7b3e708a026c2db4247c58a2715756e",
"assets/lib/images/plat7.jpg": "eddc8f17b7839ba23225e5893d5a5591",
"assets/lib/images/plat9.jpg": "f0cb85b0f20e855450c8030fe4c3c149",
"assets/lib/images/vase_1.jpg": "513856893026628466845e53ea07bbc2",
"assets/lib/images/vase_12.jpg": "41e52ebc52f32a64279f9531c98da11c",
"assets/lib/images/vase_13.jpg": "49d44c5e1631abeef777782d1faa0606",
"assets/lib/images/vase_14.jpg": "9584d1fc0d72dd3870a06760d88d1815",
"assets/lib/images/vase_15.jpg": "26edffb4d94e7c6539430a683d81ff98",
"assets/lib/images/vase_2.jpg": "f9df16141d4c261f22632ac193f64f1c",
"assets/lib/images/vase_3.jpg": "7292e204e4f21c0013afb427b0de9bb8",
"assets/lib/images/vase_33.jpg": "d8e201499a384e22850efaa4b5a0f7b5",
"assets/lib/images/vase_4.jpg": "aa6676c6a1b414078bdac9e48d57fce3",
"assets/lib/images/vase_6.jpg": "dcaaed560755072e4aaeb0d47c7b55eb",
"assets/lib/images/vase_7.jpg": "8ae0004b767fe911996b09c06c5e74be",
"assets/lib/images/vase_9.jpg": "5f74b6bdec6491796a0c8953974489dc",
"assets/lib/images/wp_1.png": "5e6704ef3415f0dfb1a518e0329f0d5d",
"assets/NOTICES": "a2545f31c22c8551d51841ff57b607d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "43e78351341deb648f1f98711e488307",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "a6d6100e1a19896e08154e3d70036eb0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bbc6ffe455503ba945a3d48f5c1043c1",
"/": "bbc6ffe455503ba945a3d48f5c1043c1",
"main.dart.js": "0c1a29211dd28afb8906312c215d8d5b",
"manifest.json": "01bfcd1e64b661683ce29c8807324063",
"version.json": "ef09efa7196a5b40630a7a3623185b97"};
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
