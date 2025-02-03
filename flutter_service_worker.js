'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0ee9b22e9d57b0c3fe48855800dbdb26",
".git/config": "4263e44eebda3fb231ab67dc22b7973d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "70f64114ac0a77910e63f467efe9440a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ef397f1e7e4b260f00e71945646a3467",
".git/logs/refs/heads/master": "fcc00ab66c03b4346d1cfe452aaaa24f",
".git/logs/refs/remotes/origin/master": "52d3b259c5e1501bd19ee40cab4b8028",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "9a2741a9017f3e943ec0b7f327c2c020",
".git/objects/08/166d3a7b20e40dc75c146f5021cf4dff437fe0": "2ea56731ddf0ea65f155cc3744a39fa4",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/0f/43881a86d9635a98113045c2b9e600b544c1e4": "4fa739fd48459ed68fb2b3d0ddbf5dfb",
".git/objects/1b/8c383a5b59e09dd6936c19e2b91a4ff630fa04": "c7cb5b3b0bf063e434e24917d4fa8379",
".git/objects/1e/b4da339ff3ecfca769552521b7308bc5b733fa": "9b1e4595a3d323087e48593683825184",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/20/dec6cd12c603787b23b2a99ad07ef6ac4eb9ee": "3e6eff2ca64039e84635b4dd82a2254d",
".git/objects/21/d56eb23f4e49386eb33bbaaf164d1406cab5fc": "313e1c71de7eb48ffbda07f402bb6b46",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "fe2d8e778b22f092b9152a9ff9b15c75",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "fa4c27ff04e74c2c338492eb3bdc51ba",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/37/6f163e6a315af0f65be15e97bf6ac219a04a10": "6ee33c3b6711a65678d878e950e23c20",
".git/objects/37/9afaf2f1011318e703a9465d1329de81502b98": "fe901a42c519d9b6e88ade40e586f7b1",
".git/objects/39/113253aef786cb83c5c7955cbb970d42686f95": "c53580536f71a25c4cbb63009a5a140c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "7a45402238decbda5a1817c517e1f276",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f4bd21272233e9cbbf4112d6f064a4ae",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/48/8756102af76cd4851c4fb555bbe787fce99e0e": "ad01f1c115365e3388972b5525e0d411",
".git/objects/4d/a954bb54a85c589176b4ee7bad77bd0a7027de": "8c76312e1afbe65ccc918aeb130ebae8",
".git/objects/50/1bd85ca2e78f596fc568c82a701d2789f03474": "a16b4f46330472a4a777ac84a54e4f2a",
".git/objects/55/9a0af84564eb5278ff689d18c851de7f881713": "85e804eac86209927beb9d8d03c913a4",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "24411772d8b0f34b9cf2c819e0da6719",
".git/objects/5d/255d9d5f465b736914d8c45390ea2972f54094": "bf3494aecf8db29003eb9a4d192e5b49",
".git/objects/5d/3254cb4a40a347a0786873151778fc577cff26": "a84303e7ea6694ef0a2b8da43de3ddf8",
".git/objects/63/bb8c469369408d383b299b408c09e0286c06f3": "716be8509dc99da3265021efc8f842f2",
".git/objects/64/b74f1288d79594ffec84211c8176aba7e22a57": "be94a468c9e420a3a636403bb85f519d",
".git/objects/65/bc9a6e4f53d500cc693f880f3aca7a93927c74": "5443d19369377570839a15f65c239ac0",
".git/objects/6a/26bd75572d5fa8334a406164c673df930b3b2b": "8b791e9ca8bf2f5ecd7aca9c31d9b8b3",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/7d/d82623a9bebe45fa5ad6080e16aac3adb313b0": "c2dd813defd57a10c0b48d82d02104ab",
".git/objects/80/a3a95c18411bc4f1cfb63e7e8e15fbc7420317": "eec5e93f36ca7459b453ac048fcf7b0d",
".git/objects/81/f911ecfd00c9ff83f1b0529873c5b2384ede95": "edaef95d6104744d31227c5ad9244d9c",
".git/objects/81/fab9595f8c7d16e2aeaaee2bab80b0f017fda2": "bd588e178c2f8c94f6c56a742dd2d988",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "0bc19006a42d012c63c8b1207e68a80c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/91/73c716195dd262920b1f5efd61827db09e8563": "3657f1ec09d5d3c91f685ffcb545dcd0",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/9e/7207a5020ac70b8681f3e4e95b56b1bad846f9": "20b7de8148b70bac692cdaa623906f55",
".git/objects/9f/b8146c8049bd46ba47bf3deed21e218d7636b1": "5e675505fd119352a857e999793d8dcd",
".git/objects/a6/7a5d2179c3c6a5359d2533475358fb0ac1e80f": "ffbe4c6d984f591f1589498d3e2c8852",
".git/objects/ae/5ab3dec632ebe605d07ad898eb4f2e17f36e5c": "93c715cd7561ebb809419b1613926437",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b5/bbd9f68be47848b58effc6080f74477ef9d9f8": "77bd8d03d6a4ebbfdc19d9c1899eac2a",
".git/objects/b6/7b2ccae4ec9779fd970454816fdba97c2b09be": "39a586c49843d98a1fe4a3991af9d07c",
".git/objects/b8/7ef5a67eb0ec01986a9e992b4da842fac2143f": "a584e049413aec7f123bcd9dadfd171c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/bc/ca647b80c468b6384c2db619c04a4464125722": "7e87bdee79871ba909cd5d5bb21921ca",
".git/objects/be/cf253ddaa9452655685bd14202d0b2496d1da8": "373de6422889752f34436871deed9933",
".git/objects/bf/8f3819687cc049af847a66ba8e920ae6053fa6": "a733841081b98abb8140821a865a5900",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "26e88664696468ae8d5ce0608760da7a",
".git/objects/c9/a9fe3a794a0804d8bcf9024bc157f688b9bb69": "fcb1f263a866c9a549ca4dd94da7911d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "6cf3aab7645fb18478693de335133497",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/db/0a92a8a470f08561175bbc7aedc5f09577f5bf": "26f961019dfa15635662071242982937",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/4f0ba7d2651f8fd084e4b19bbf5214cb899e8d": "479eeee455f79334887e78a9a45f3209",
".git/objects/ed/77f9ffe10faba9db2ae3f9a05445d7118eb90b": "c0c1191ae92a3dda34e9292b3c7931ab",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f9/34272532baeca0424f9874065668b6b9bb1cfd": "a608830fe25704d76aa0524da28c8ea1",
".git/objects/f9/af34b357130ec13b0817e52073c875ee119fb9": "830f14732db12de376a5afc0bb9ef1d3",
".git/refs/heads/master": "ca5d0196ebcbc88d827426423f7d13ad",
".git/refs/remotes/origin/master": "ca5d0196ebcbc88d827426423f7d13ad",
"assets/AssetManifest.bin": "54b4d81b2e9075dec80414907eaa21b3",
"assets/AssetManifest.bin.json": "84a218eece39c10e0dc9de63e05adf6c",
"assets/AssetManifest.json": "0cc7c0e29cf8178fea6d88641cd9bdf8",
"assets/assets/images/app1.jpeg": "eba8a79ca6c9293d43a5268ed8a5019f",
"assets/assets/images/app2.png": "529dc01500754ec8d355ed3a5484ff3d",
"assets/assets/images/app3.jpg": "3c3cc5f5adf734904d3c402a726b54d3",
"assets/assets/images/app4.jpg": "db044ab16f63227268ff5bfe6b875cef",
"assets/assets/images/app5.png": "2f3be22138687cad1e8c66946f438821",
"assets/assets/images/app6.png": "563f2a9c2d2fa377867d75cc8fd0cd10",
"assets/assets/images/logo.png": "8129841afef1c157c3fc3720e99097ea",
"assets/assets/images/roun.png": "2ab18a597e1facacb1403a2895d5b9e6",
"assets/assets/images/ROUNIA%252022.png": "2943d71018bba6d7bc2c6ce45b1524e5",
"assets/assets/images/rounia.jpeg": "87dcd5a19041e08ce6342b0c27313cf5",
"assets/assets/images/rounia1.png": "b743708814572d7aea1fdcd72d94f539",
"assets/assets/images/rounia2.png": "f009a32e3cdc6aa9ad517b1e7b9eea09",
"assets/assets/images/rouniaa.png": "454c9df35d65eb3490dcaf5d592753ea",
"assets/assets/Rounia_Resume.pdf": "89428b774c2c1904303f0f211bf2d684",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "eea026baf77cd903f2bea0daedac05f1",
"assets/NOTICES": "47b65c957cbf16500131ed25d14f8415",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0d8e702c06285c4a97a0a80369d32dc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "332315cd3de904398bd4a8de00e7b0e8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "cfa7f35e43114a5b848cca764d828bdd",
"icons/Icon-192.png": "946c2c84c4ea6773cf1e7507371f036e",
"icons/Icon-512.png": "e22f9ec5d232c8c9cb7b0baf52a70653",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "92abdccea988d5eb39c1db4acd34ba8a",
"/": "92abdccea988d5eb39c1db4acd34ba8a",
"main.dart.js": "fee07812fe6bf5b1ab302b61a4b6dbbe",
"manifest.json": "3aace6bfad317cda124809614e063ef8",
"version.json": "3a3edd65f7c8dfc6c0ee1d7b9e896050"};
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
