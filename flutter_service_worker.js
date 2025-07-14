'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2866984f309e98828c0d22f63086eb46",
".git/config": "fa2f3ebf28b0661093c1cc838b9d39df",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e17632cc31cfe8c3f475e6bd247a9b14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19794b589908ab23968ef60272513e52",
".git/logs/refs/heads/gh-pages": "19794b589908ab23968ef60272513e52",
".git/logs/refs/remotes/origin/gh-pages": "f0b21a629cdfc17ae025615d4d4d7848",
".git/objects/00/6d6f84999fb2e0ca200c570aa9f6579ce44350": "e7b4e1953876fc2abfdfbdc8b8c13594",
".git/objects/00/d73c1f3db0708f12ad5616e15c0417937270cb": "01ec802ef44a94ee588179d5ae4aa404",
".git/objects/05/7bbbe0e175a004ab3dec11f0208601a1f54793": "1121167ba82e71762ae8c8057fa5878d",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/09/23be25797efe7eec138e57ab5d59a5bbbc297e": "0305b920475a938266850fa6020d96ad",
".git/objects/17/56bad461cf8d0648b79541eb61b3e396d96fed": "5920442ed26c247359244faf0bccb071",
".git/objects/1a/c552d0b333dc6cd3c6ec30db00be843ed77255": "d35c60c0ffe191f888d5d4ff98121ddf",
".git/objects/1e/e9da3e4bf1813704b6bb28c2e600beb8d35374": "454f35ec855b282602b6fb1c0cdb5b60",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/0254f9b7601dc2fe0506c11add062c26444035": "ce96c284081d5cf7f584a329b30aa42f",
".git/objects/27/a1eb744149fa32799c32ae0b951efd96552fc6": "78d3c8ab6de52f37e366e98927535ca6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/8b658355da59697e17ce72946d1f9bb1642631": "2f99c7ac4029a658db41e0ccc9a6346b",
".git/objects/36/901755f9b27d8e8bbbdbe24c98ff88ca122149": "fe3a0a86a5438e996f38e102f835a185",
".git/objects/38/3e5a25104f9f66e6906e86de4c294a463df77a": "37e836e68a864580605ebdac083b6401",
".git/objects/3b/dc44fe72e90697772b0c852946ed22a4005d2a": "6420e1469c482d3c1069cb1dbd8fb3cf",
".git/objects/41/28e1d019071b0e465a63578b707892017c3000": "ceec4e2ed9288c4445c950b1a9451d70",
".git/objects/42/9dc745a76846763e6c967539a53bbd00128440": "74c3beba25977a2d372f8b253efe5114",
".git/objects/43/4f590f619571d42f24d09dfc658332041e6ed8": "57671a8c748d9c85011c6dedb18a9265",
".git/objects/47/784905b6a03e3617260763e727193e75dbb81a": "fb3229f4a5aa355876b2913b401bfd40",
".git/objects/48/2cba064f2b84709764e9156a698464d087910a": "71d573d11fff00ab875eb2e83e6d56e5",
".git/objects/48/412fa79749ce829ace1b025a5d5fed8019cb2b": "61ddbde6c0abcbdfde4f675168c9a2ac",
".git/objects/4a/4e05ac1876c4b9f2cb6a508a11ae99baff0dfd": "81266257354cfad2728990e732d42702",
".git/objects/4e/693066e41c7a2a955b4ea688ec8316b582ae66": "d835dcabd608989e1593a241fd027d3f",
".git/objects/51/8cda6b0f1b9ca86b6a53c0d5bcbe69a2558fec": "96741705b01f8489f588de315bbf0b40",
".git/objects/52/6be56c0354e6a353ba6d31ddfa137e45b33830": "61c984a861c15358085f29ef04eda254",
".git/objects/56/e56901391f613a7a499817c8558abc755ba805": "b47750b901d35ad916c5c9625a33ecfa",
".git/objects/5e/5f326d21906d1baf30047fdf2ba8e95559c2a7": "a72f41c3db52e3e8579f29bebbe136a0",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/9f6d0aec1b3a11af730f4d93e181a4aecffebb": "2ed0ee5988c52cb17577b777b947b9ca",
".git/objects/6a/53784e6691f3d7419cd79fcea2995abad577c2": "ab907e7f717e9a4a47e7efdae23e0d76",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/6e/42cf7a20da43799537e245f1bf7247757cc8bf": "45409723b139c53bcabdb8b88f704eea",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/42d84d1ff0ca543965d0396c8286bbacf6beab": "01450a65e17590eb7f84e742f8e3e0dc",
".git/objects/76/2fc9d986c42cf51a90729cd579c455680180b8": "8ab48c82e348431f15505d3d0bff2a2f",
".git/objects/79/7cedbd4e68d622ae4dd8538002f68eeafb3501": "353bf62e774d4bd9a68874e66ddb184d",
".git/objects/7f/abe9ad87c5fb5bf390321ea9f48dfb889ce3f9": "c5e81983b3ed81f48d62475de991d6b0",
".git/objects/80/cec8fc0fe9213845e936de82919403b2249cae": "18465d6277ba891282d5d46c1a4493c3",
".git/objects/81/7d1f07d0f1d84aa9b76d074bf176e42ca8d09b": "fc1f8f956b99205002de360769f61bac",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/db583b47befa09453479a65eb6ea6b9c54ca0d": "7d460fcd35b03efc147ff76299959ab5",
".git/objects/88/ae39232d8b7b3b35bf6fcea4e9b0feeaa7bd04": "145e80a3b889ed4972090e316e3768b6",
".git/objects/89/1a11ea3a6733e3122e7ddedcbe0e8de83f36c3": "ff56b565eab0fded341e42c281cfcbc4",
".git/objects/8a/11c16f728225e49f82ac531d8ed44f8e21146d": "4ea806932c1d9f77dd4d8b2f2bef3007",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/b42df00eace87047cf1b766741ebe59b3d7bf2": "586a6e0a5c9f1e51a833d1d4ca3ee4ba",
".git/objects/8f/1f43598ac66665c3c225a95cef177c73010459": "ad017d63bd82eae28d262e89b5c17899",
".git/objects/90/a7ebe71dcce5a7ee639369e5d74af9bd1928fd": "d74706ed6307f8b931e858645cca6b8d",
".git/objects/92/e3ad3650523313dc8ace37f050bb921cc7aaab": "52d0492a8276006de5545f1b1f495fc5",
".git/objects/94/9fb2c4eb0269dc81c8541f1493bb2bd38b4616": "c97da158bd17e6fad1da9991010a5bff",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/78cb58009720274984846624562e6b4f72177b": "a8050123e5e409273690acae69d3cce7",
".git/objects/9c/1b40c2c2e6b58423d98c94d9694cbc43de70e8": "2024aa9901924d935d092a3837460dbe",
".git/objects/9d/7a4bc940eb8a36865c1c7dcdc7902be52ca39d": "a842a3dc33e96cf8bb1568b9424df464",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/1a5f1e70491b129d7394da2d805326b3b2e31d": "a46471f0dd3e68a9857481c17ef48f12",
".git/objects/b7/f9f8441dcdcb3f7f6bb032d237c288b9c0fb9a": "2692d7f3cf7b184ad819f5691623ac30",
".git/objects/ba/1873b6a685def286f882372600e572bed2137a": "f7a56d23c037a07dc9c16c2b4031b496",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/789dc4bb3b5fca5c6a9b1e6bcfa734f5c3bc99": "1f7cbca3ee43e3f122beaff6c4c6a944",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/434efd3b9c1ccf69de72c5cd2c0e53fe15d47f": "92fb2f19ff863788f0081286555523ba",
".git/objects/c8/0b0a6aa4cfe1cd9ebf7ecb7de4a7eb62e4dcf2": "3f9bbfc15cecc34fc2f0287a5c11a3e2",
".git/objects/c8/59e152f93cb351e3bbdd8c8e1678b150aa8de9": "019a4607a23dcda0952b3a8f5421797d",
".git/objects/ca/565d76c1341071a9a910d7fcc6e1c2db07a247": "a6da729588a9a748e8a7211758e5fe86",
".git/objects/cb/5e71aad7430b53ef35934f3ad90578f58ca462": "6606508b2f173441dec92f5df8b92411",
".git/objects/ce/59179e66d617e69b72ed932e9f007ebf933c76": "a35583a0eda44b296238e1b3fe37808e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/5a91d5e5210c1c5655e0ae069928ff7d76cb91": "f580a71072307b717b0f610e071ccea5",
".git/objects/d7/5e68c944e982a2d70b995a553b22b4efbca20f": "ebb13f87045d730dcf56e9b81276330c",
".git/objects/e4/dbbf390f90a0cf5c7375fd46ce93905ccd3274": "d537d3941eea7563b2febb6b52f68e6d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/d57ef283679729612c4a5891c2624cad0ff15f": "c8dd111d60d2d996d97fb8dc20632b1a",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f1/1f0a4175ad6faecd0e7f99bb685bc6acd1bed9": "a40c2c8ebe1aa1c8e08bc497b17291c8",
".git/objects/f1/dec2067750d9742fb6ba48422639f8bc542d88": "7b8f2e1e91b9f544efee5e3781d6bdf6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/47c83547579fbdd3d2e92a97b2f9a4ba8169a0": "8315cf45a3d525d956ab0e3d20a26d66",
".git/objects/f3/878270cf03ca69b6d1b7347669a427d53a352a": "1b2749f38b40f0dedd2436bb10d11982",
".git/objects/f7/3205abb64998bccf8d46047ebc362186d531a3": "c71f018d1e77016610f47a957940b7f3",
".git/objects/fe/474f5624f4d5a2eafa796f8448abba80064827": "7f823d1658ecc467185f520bbfd17931",
".git/refs/heads/gh-pages": "d08be102c8c89f19c1e1da8fc2845ff0",
".git/refs/remotes/origin/gh-pages": "d08be102c8c89f19c1e1da8fc2845ff0",
"assets/AssetManifest.bin": "5940e6ffcf7e12828c4118f6f924ce6d",
"assets/AssetManifest.bin.json": "c536f12c5fe1d338dc973609ee646452",
"assets/AssetManifest.json": "2770c599e648eca5707e638288ae136e",
"assets/assets/contact_me/constant/location-dark.png": "08a65e7c79b85fbcb40e8fce00953e47",
"assets/assets/contact_me/constant/location.png": "dbc10b089546daaee5c45d9bb754f989",
"assets/assets/contact_me/constant/picture.png": "1a817a95a42d8c43031378d122a05ffe",
"assets/assets/contact_me/picture.jpg": "bebe382b13235ea80ba983b19254ed1e",
"assets/assets/dotenv": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/education/constant/education.png": "1ebc9c3cdde631ddd2f356001c79eceb",
"assets/assets/education/jec.png": "69cd54806ef2470d20a1a20ab0bc6331",
"assets/assets/education/picture.jpg": "bebe382b13235ea80ba983b19254ed1e",
"assets/assets/experience/constant/experience.png": "8f6a768aa1f3a803088eff838313f7b0",
"assets/assets/experience/techtesser.jpg": "86623ef234ec918cbf8702a2c117bd38",
"assets/assets/fonts/FjallaOne-Regular.ttf": "4fa3683005fa20dd058f47b9cfd411df",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/assets/home/constant/email.png": "b4ac60cde3dabbe4bc1b8b7c88dc4585",
"assets/assets/home/constant/facebook.png": "9c8bf990645fc6189df6caedab34628c",
"assets/assets/home/constant/github.png": "9b1ceae0aa31486938531880614681a3",
"assets/assets/home/constant/instagram.png": "6a5e75ccceace8a900c3ca017bb5933b",
"assets/assets/home/constant/leetcode.png": "b76f662706530971dccaf8281a0acc45",
"assets/assets/home/constant/link.png": "6bd16f15b5c2d30c08557a84b776f3a6",
"assets/assets/home/constant/linkedin.png": "f23f5409fa61de28d92d02527411c140",
"assets/assets/home/constant/medium.png": "5a77eaa1f4fc98e76a2129c5ebaa119a",
"assets/assets/home/constant/stackoverflow.png": "c9fe76704b498db68c7d263216b9e680",
"assets/assets/home/constant/twitter.png": "babebb599190a8bd5bb5417e4f7fdcad",
"assets/assets/portfolio.json": "926f46e5789cddb32de704cf23ba1da1",
"assets/assets/projects/constant/forks.png": "84f1baf0bcf3b4cf3ea5edb36548e069",
"assets/assets/projects/constant/stars.png": "449614124a2ef5910c35e1e9d62aec5e",
"assets/assets/what_i_do/android.png": "daad23fa2bde02a7a8af63073166cbfc",
"assets/assets/what_i_do/constant/checklist-light.png": "c6a80a3ff27e7db249fb88159383f74d",
"assets/assets/what_i_do/constant/checklist.png": "bce0e7781492fe752297f8369c666494",
"assets/assets/what_i_do/cpp.png": "efeec8be519a45426ed24cd91b86fc53",
"assets/assets/what_i_do/docker.png": "76fa05ea8b2ca76ca156080a1b42a119",
"assets/assets/what_i_do/firebase.png": "823e48d60a387d9dd01219334f829792",
"assets/assets/what_i_do/flutter.png": "5b26614dbdbcf4b3ecb80bed00ad3702",
"assets/assets/what_i_do/git.png": "2f2db226d2f03acc82b77c7fe652fd3b",
"assets/assets/what_i_do/ios.png": "d6ea56100faa23e74365bd716757ed88",
"assets/assets/what_i_do/java.png": "53b82a97cf4e13fac807691e7b0be082",
"assets/assets/what_i_do/mysql.png": "e0ebc6232e760ff4d183c6287b0ebe3c",
"assets/assets/what_i_do/spring-boot.png": "586166a8aa48e4690dbd8de3951c0ac1",
"assets/FontManifest.json": "f0f4be009d67b49f6afb66286f706923",
"assets/fonts/MaterialIcons-Regular.otf": "26ece5be8a8d6a5a31d2504092e10d51",
"assets/NOTICES": "74cbad77b6f976efcfbaca47e9bf18ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "113c726274f245d4e82e3a53b43e462c",
"index.html": "e5ba4c68974bc8ad024a49148b19f643",
"/": "e5ba4c68974bc8ad024a49148b19f643",
"main.dart.js": "659f7ca1f4194dc246b342adf46c5bf3",
"manifest.json": "6cbe41637e331ef626d9a50c26f95fc1",
"style.css": "ffba23ff301032bec9a3922e763ddcca",
"version.json": "db8990b8a733cdd52065ba1549ba9aa5"};
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
