/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a50e7524f5fb691c07cc68513e32b860"
  },
  {
    "url": "about/index.html",
    "revision": "f9d822caefc95ff18da6412445ede606"
  },
  {
    "url": "assets/css/0.styles.13e4185b.css",
    "revision": "6d40644b68f1075f731b2b9411c2cd2d"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.8eef8638.svg",
    "revision": "8eef86381d36c7d02ce250e5243b0752"
  },
  {
    "url": "assets/js/1.0b2d738c.js",
    "revision": "9e7a3b05303094d8a1f3b123815c75f7"
  },
  {
    "url": "assets/js/10.554239df.js",
    "revision": "461d7effaeb054cfd1821bed79dd8500"
  },
  {
    "url": "assets/js/11.b1ae768f.js",
    "revision": "b763c203c1affc3be799f76c3f4ffd7f"
  },
  {
    "url": "assets/js/12.a6913bc6.js",
    "revision": "6b75ace47d3609c46cf670f3f5dc98af"
  },
  {
    "url": "assets/js/13.5cbdadef.js",
    "revision": "3b1e58eb078e15ba1f5c08c48ce0a8c8"
  },
  {
    "url": "assets/js/14.f7e32d62.js",
    "revision": "259e96f68050a9b874903aa937955d31"
  },
  {
    "url": "assets/js/15.9cab4bed.js",
    "revision": "dd7a474dfcd6239c052f699d04dfb78f"
  },
  {
    "url": "assets/js/16.c7014d73.js",
    "revision": "172e884fb5867f329898846508707867"
  },
  {
    "url": "assets/js/17.2ab33f24.js",
    "revision": "79d0778ec46e398203471e1f97f96ba6"
  },
  {
    "url": "assets/js/18.b76f3535.js",
    "revision": "c7cf2b75d957d288e0b24e2fcfbabeac"
  },
  {
    "url": "assets/js/19.b1d0ec7a.js",
    "revision": "cf3b324a8fcfd846c98612ed46fc8e22"
  },
  {
    "url": "assets/js/20.771050b7.js",
    "revision": "cf4aadd1f0ee33aeda00ce629ed2acc2"
  },
  {
    "url": "assets/js/21.3a622870.js",
    "revision": "65feb0abc6b597279e0d9e83de2d4728"
  },
  {
    "url": "assets/js/22.b756fd5c.js",
    "revision": "dd913d95207cea71f20202d83b371368"
  },
  {
    "url": "assets/js/23.3a671170.js",
    "revision": "fc4b21ff8d47966533957eeb8c4bd5bc"
  },
  {
    "url": "assets/js/24.949c88fd.js",
    "revision": "dc45c603a0f9adb9eb2610686e558255"
  },
  {
    "url": "assets/js/25.7fb2c1e6.js",
    "revision": "c08b4ec427fa51ace1a4a8bdf63ef215"
  },
  {
    "url": "assets/js/26.415b8eb4.js",
    "revision": "c9a985f4955cf092262eecaf651f3998"
  },
  {
    "url": "assets/js/27.43fece13.js",
    "revision": "ee83d1e9559b68d40ace73b91897460a"
  },
  {
    "url": "assets/js/28.a2ea61de.js",
    "revision": "031fad81e71c664cb8cbf62c4477e049"
  },
  {
    "url": "assets/js/29.352982e3.js",
    "revision": "42dccd36139220adcc7e0d8d0c17830e"
  },
  {
    "url": "assets/js/3.7107bd70.js",
    "revision": "1f9848c1e250e67d13fda4504e7f85d2"
  },
  {
    "url": "assets/js/30.5eb5f530.js",
    "revision": "4734230b4273518312df5bf01d5c3589"
  },
  {
    "url": "assets/js/31.666691bc.js",
    "revision": "3380bf78cedb9e9542879145d4e556f7"
  },
  {
    "url": "assets/js/32.4c8799bb.js",
    "revision": "3a9874e89b67834b4e5c47f2caa8aa7c"
  },
  {
    "url": "assets/js/33.95c2585f.js",
    "revision": "e4e76ef095fd173e6bd26b017f1999b8"
  },
  {
    "url": "assets/js/34.b715e050.js",
    "revision": "e8ec88f653e221e736c4b79fa24b0863"
  },
  {
    "url": "assets/js/35.748e1524.js",
    "revision": "65f80ec0d51b5a6449f36eee2758a9e1"
  },
  {
    "url": "assets/js/36.1021e25a.js",
    "revision": "c58aba79a951ee77455f8e00d7fcdb60"
  },
  {
    "url": "assets/js/37.101a79d5.js",
    "revision": "db5cff24c2dcaf6c6df23646d4688ebd"
  },
  {
    "url": "assets/js/38.7935d0ac.js",
    "revision": "813bfcd2bde685a36921623fb36c1369"
  },
  {
    "url": "assets/js/39.a191c9f0.js",
    "revision": "d18a5d8c7831a3c0cff2c4f4512bc054"
  },
  {
    "url": "assets/js/4.bc769e64.js",
    "revision": "584afb942403431de029a74405be8deb"
  },
  {
    "url": "assets/js/40.f0ed38cf.js",
    "revision": "351828fb35b989922dfb5452996df111"
  },
  {
    "url": "assets/js/41.3ab2583d.js",
    "revision": "fb1833e63f2bbaed260f250391aa2ac4"
  },
  {
    "url": "assets/js/42.aa523595.js",
    "revision": "bb304f234701dac4ded7da18dd545ca4"
  },
  {
    "url": "assets/js/43.d3a03591.js",
    "revision": "67b4af48c2a9956fa462325430c112db"
  },
  {
    "url": "assets/js/44.1dcd6448.js",
    "revision": "70ec2f277ddd902ce4b956a2d1949221"
  },
  {
    "url": "assets/js/5.f012444e.js",
    "revision": "980c3aca056de386060e8643c4fa6f64"
  },
  {
    "url": "assets/js/6.eac9234d.js",
    "revision": "f54f4667aded9a25086f2ac35539ea3d"
  },
  {
    "url": "assets/js/7.372e3a69.js",
    "revision": "28a309fef76e46abbe8fe2586c5ff9c3"
  },
  {
    "url": "assets/js/8.48925834.js",
    "revision": "86028aac2562706630e9bd4d97d78528"
  },
  {
    "url": "assets/js/9.6d516f43.js",
    "revision": "bdaf5999d3b5ca3990ad3ed3a6b3ddca"
  },
  {
    "url": "assets/js/app.14016d1a.js",
    "revision": "4b82e007201b2dbfb5f1fc99bf80bf27"
  },
  {
    "url": "bg.jpg",
    "revision": "b79159169fd064833a2cbfe2802c477d"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "4a3358d902ca471fd3f0d86f39bdc693"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "bfd2c4cc1a4ec20dcd641f2fa6c21981"
  },
  {
    "url": "categories/工作内容/index.html",
    "revision": "eac6023f2208209a58b3654f393c6caf"
  },
  {
    "url": "categories/简历/index.html",
    "revision": "437c777f4cc2abc4d195528bead636eb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "de7ca20f7e629defdd8cef53b62e604f"
  },
  {
    "url": "categories/视频/index.html",
    "revision": "3c8b90a840adcc030e39cf10076e65d6"
  },
  {
    "url": "categories/go语言/index.html",
    "revision": "23f52d0d66f50e79111e2ef5064f5967"
  },
  {
    "url": "categories/index.html",
    "revision": "8f9a61208a8c64246f95eb49a2299f28"
  },
  {
    "url": "head.jpeg",
    "revision": "fefa3d041589e2fe82e88bc10e425f55"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "700851dfdebcd64ca27487c75dc4f1f6"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "3f1966f572f93c729d081b19391b2869"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "162f219b865e07e7abb046aebda1ed22"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "1f67dc7d3ed44ae7cc31c113c4856927"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "9cf19b7e2cc18da9378e5547e592ccec"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "2c5fbbb7ce5fdd45cb09ab3e9b719c72"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "e75d9fa9da671668ce820c7553a6b9ec"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "7c06262a6103e60a7e7dcb21517dbd19"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "c081a6828d4f2347e581f6fc4b5d4a56"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "f4970bd9ad2e444b3836b4a1d9b097fb"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "9f3879142878bcb47fa2edee8e7b8ccd"
  },
  {
    "url": "note/index.html",
    "revision": "5129f27daee8235281be9f3e25fef419"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "906324c5ed66d95eda2e7c7af7036d8f"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "9b201cc3ddab1d2650ea69c3de7b9f34"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "b49f6be69bdc238106230fb0c9dbfed7"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "e8a29657cc5d504f1a60886948e99be5"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "5a41e1320b158419269954e1cd249e60"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "b227359fb3fb810b4e5870ebdbb01d88"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "2b02f0a6c89e900a6fd54621e1596ece"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "9e79b3bce02e73965313f1787457b693"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "e2db9c6d270cafbf16ac11b8dbb10d9f"
  },
  {
    "url": "tag/工作内容/index.html",
    "revision": "afaae7158c2dc8b54b26c0f00201db01"
  },
  {
    "url": "tag/简历/index.html",
    "revision": "04ff9d8a698cf7301e759d1f00a7f9ad"
  },
  {
    "url": "tag/视频/index.html",
    "revision": "79502e44827a08b1ca1f676f0f8a3075"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "d3b22e3a3e410ea1093aab4b5947e7f8"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "2eda833c5b424889350f3f489ef2b22d"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "b0104e5ad4a8fac2ff54170f7666a5b2"
  },
  {
    "url": "tag/go基础知识/index.html",
    "revision": "a230bfc5dc888173b9cdc2ad2c8dc94a"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "1b3370ac20b1c720099185823cb6bbb2"
  },
  {
    "url": "tag/index.html",
    "revision": "a4d4c254e24157fa94509f5d02314f55"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9e798de22ab531af3d6d80dd3c0989a3"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "372d25124e214c8a253690012a90805d"
  },
  {
    "url": "timeline/index.html",
    "revision": "67cc6a36c4b2950a1118265afe05dc1a"
  },
  {
    "url": "views/ge-ren-jian-li/mywork.html",
    "revision": "7a17509c036ad20206b4dcf502557981"
  },
  {
    "url": "views/golangji-chu/goji-chu-zhi-shi-0.html",
    "revision": "0bcf5b8c9665b6d18b677502f9b1470e"
  },
  {
    "url": "views/golangji-chu/goji-chu-zhi-shi-1.html",
    "revision": "fd6234e31959dfc2b0b348fc7a2a9bf0"
  },
  {
    "url": "views/golangji-chu/goji-chu-zhi-shi-2.html",
    "revision": "620dd662d341aadc0e247a9a3f97351a"
  },
  {
    "url": "views/golangji-chu/goji-chu-zhi-shi-3.html",
    "revision": "6a5a6cdbc8877bc57e83d8c781d5b2e9"
  },
  {
    "url": "views/golangji-chu/goji-chu-zhi-shi-4.html",
    "revision": "37d3422b256b1951463a300337478565"
  },
  {
    "url": "views/golangji-chu/goji-chu-zhi-shi-5.html",
    "revision": "c6823f4044cde9936a90c23edccdee20"
  },
  {
    "url": "views/gong-zuo-nei-rong/gong-ju-shi-yong.html",
    "revision": "6af4e8aad880ed570a1adb745e14f30e"
  },
  {
    "url": "views/gong-zuo-nei-rong/hou-duan.html",
    "revision": "376452d2be8bc824f10bcb599bbf8f42"
  },
  {
    "url": "views/gong-zuo-nei-rong/qian-duan.html",
    "revision": "0d9fb92542c76d6d31929ab52ee0dea1"
  },
  {
    "url": "views/gong-zuo-nei-rong/xiang-mu-ji-he.html",
    "revision": "f1061ffdbaa18c58a9c9ecd6fe0dd95f"
  },
  {
    "url": "views/shi-pin/shi-pin-ce-shi.html",
    "revision": "8d68a1be2bc3bc5139e2fa784cd67b62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
