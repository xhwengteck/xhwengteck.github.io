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
    "revision": "b2951c4ce47ed7ecfe630a33b1608cd8"
  },
  {
    "url": "about/index.html",
    "revision": "4cbf7107757d6503a393d589b02a6cee"
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
    "url": "assets/js/1.70f464d1.js",
    "revision": "a6dcc6b5f2cd8741832510da7d8c3780"
  },
  {
    "url": "assets/js/10.c4acb1ab.js",
    "revision": "ed7178c31dc2aba3ce9430b36dba461b"
  },
  {
    "url": "assets/js/11.b6e1623a.js",
    "revision": "f12a2996aa5f24e99d42345fe1fe3c36"
  },
  {
    "url": "assets/js/12.a6913bc6.js",
    "revision": "6b75ace47d3609c46cf670f3f5dc98af"
  },
  {
    "url": "assets/js/13.b86bc2ec.js",
    "revision": "3312e80454482868e84831f5898e4b8c"
  },
  {
    "url": "assets/js/14.a22a1a22.js",
    "revision": "625e557cab978cda97057b6ea18c6b59"
  },
  {
    "url": "assets/js/15.0d2e179a.js",
    "revision": "86c8245f750444b408db3000acd07f25"
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
    "url": "assets/js/18.f620e597.js",
    "revision": "c1e74df41966669cd9eb65e609bf9852"
  },
  {
    "url": "assets/js/19.7a8fc6bf.js",
    "revision": "f5f23f27c1e4c15490ac7c51332960c6"
  },
  {
    "url": "assets/js/20.dd560d07.js",
    "revision": "a12a19b19c4215cf7a6901ca47054eac"
  },
  {
    "url": "assets/js/21.ae99e7c3.js",
    "revision": "6a4bf616fd7965e80539ef7e2fc9f2ae"
  },
  {
    "url": "assets/js/22.73f2440c.js",
    "revision": "aad811cc52a88cbf1fd840c86ebd1ac1"
  },
  {
    "url": "assets/js/23.09b338be.js",
    "revision": "4de071fc87789efc2fb1dc418bd0cc5b"
  },
  {
    "url": "assets/js/24.a22ea87a.js",
    "revision": "2f6e55b71645f5d48e45787aa6a9958f"
  },
  {
    "url": "assets/js/25.078e487c.js",
    "revision": "78db6521fb282269535123ae11e42172"
  },
  {
    "url": "assets/js/26.62ebaf23.js",
    "revision": "7a00edbe52e347a6fdcf323592774b99"
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
    "url": "assets/js/3.02faf0a9.js",
    "revision": "541a7a521466800092fda58a6da943d7"
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
    "url": "assets/js/33.ebc3c2b1.js",
    "revision": "bf9aef93f7249873cc4bd2614c4f3eff"
  },
  {
    "url": "assets/js/34.70e1abfa.js",
    "revision": "f674abca3ed23cabb500e774b312fd44"
  },
  {
    "url": "assets/js/35.c3100c3d.js",
    "revision": "4f2c1913b7bbd669b0ee773cd85e8d5d"
  },
  {
    "url": "assets/js/36.b00de4e0.js",
    "revision": "0b8e5bcbe5cd15f4e13bf76b73ad56b0"
  },
  {
    "url": "assets/js/37.d2173478.js",
    "revision": "298845cb734e18164ec5d8becb17fcdc"
  },
  {
    "url": "assets/js/38.9c8a5a8c.js",
    "revision": "96407d029c062e6a431a49e8af028968"
  },
  {
    "url": "assets/js/39.ad817ade.js",
    "revision": "7694c1b92b9658f8ebee2b3a8d3f9934"
  },
  {
    "url": "assets/js/4.0914f68a.js",
    "revision": "82d117c71607bb048c7fbf2ef85e4fbf"
  },
  {
    "url": "assets/js/40.46af5b02.js",
    "revision": "b2827280e5b44c7f7ad0a4bdb7ab202a"
  },
  {
    "url": "assets/js/41.d50ffb75.js",
    "revision": "9eb275ede25a0b2abb71a44bf113c34e"
  },
  {
    "url": "assets/js/42.34aa90b9.js",
    "revision": "76edf11fbad4db7ed6604bff0d461ad9"
  },
  {
    "url": "assets/js/43.c0f36f09.js",
    "revision": "f55fef11f09330a0ae724f62549b15e3"
  },
  {
    "url": "assets/js/44.67db0ddc.js",
    "revision": "9d0253618769f7d617f5932c196c23b1"
  },
  {
    "url": "assets/js/45.66803e00.js",
    "revision": "67e2759b67e73baa69295cc3bb4862bb"
  },
  {
    "url": "assets/js/46.be30ef57.js",
    "revision": "7f5a0b38e3c8c30c85bcf92e3789a934"
  },
  {
    "url": "assets/js/47.0a9b2608.js",
    "revision": "ebae64ff28d240da11a5b782f100e476"
  },
  {
    "url": "assets/js/48.bfec4c49.js",
    "revision": "2bc29fdf10b70424844906f661f8964e"
  },
  {
    "url": "assets/js/49.a07af034.js",
    "revision": "30d637dc420c9e31f7c844bd3bd197eb"
  },
  {
    "url": "assets/js/5.6f84f5b9.js",
    "revision": "8e3567dde0ff159c762c5fbdbbbd5af4"
  },
  {
    "url": "assets/js/50.bbbf5078.js",
    "revision": "334a8f5ec9344a67a4e1a1718ff9542f"
  },
  {
    "url": "assets/js/51.7ab07e83.js",
    "revision": "e49d9d0f20e6824f2293067c5da5c364"
  },
  {
    "url": "assets/js/52.4360fa5e.js",
    "revision": "e53d4377885513d9d093f717730c480f"
  },
  {
    "url": "assets/js/53.b095a242.js",
    "revision": "7b8d5620e7c5a287ead59279db5494bd"
  },
  {
    "url": "assets/js/54.8324ce60.js",
    "revision": "e418a71243ec9737eb9e755f9b70987d"
  },
  {
    "url": "assets/js/55.1618e591.js",
    "revision": "77fecc90a3b72afc0308d8604efec4a4"
  },
  {
    "url": "assets/js/6.1b934c54.js",
    "revision": "a97ddcb089c98efeb129f9a66f723c51"
  },
  {
    "url": "assets/js/7.90dfe70c.js",
    "revision": "69138c98806feee808b65b9ccd2b9028"
  },
  {
    "url": "assets/js/8.d9c40634.js",
    "revision": "09fcfd58be4afc0baf9bfeb3c8370890"
  },
  {
    "url": "assets/js/9.6d516f43.js",
    "revision": "bdaf5999d3b5ca3990ad3ed3a6b3ddca"
  },
  {
    "url": "assets/js/app.911248c3.js",
    "revision": "bdb312f1a0be0e44fa4455e0b4c047ef"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "74eb17d8deda2f5f02805c44ff3d142d"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "e2881eccd08fadcbdc199230cfda7970"
  },
  {
    "url": "categories/工作内容/index.html",
    "revision": "38da265b57da0a754a3b981c12b95774"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "59211d8716d676d8a7332c33af0d447e"
  },
  {
    "url": "categories/视频/index.html",
    "revision": "b27780081b1891cbf784c6b8fbb32dc1"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "d5ad6282d436921936a5f466514ec317"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "363ea92337d0a3be70c97441a1f762f3"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "5e2685213ebd4fe22100fe12ee59f3bd"
  },
  {
    "url": "categories/golang/index.html",
    "revision": "e0812c86a16a52ff2161634d3b6d9e85"
  },
  {
    "url": "categories/index.html",
    "revision": "fd7d003a5ddb92d7d0eb2a12657d84fd"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "92f4021afa394528ea72a6c12a9a4932"
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
    "revision": "7451d9e9f45e05fe4e2a421be6eef06a"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "7127ba65412ce0be4671f876f3e0ef47"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "8741071eec56be107b4fb9ac023951e9"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "90267afcd87a0038c80317fd025f7a85"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "7a04f1f2de7186c918ab531039c93785"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "7ef9c388016caa71669abd15bdd60bb4"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "8ead53ffcda33c53e661ceadd83d5a86"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "42fc7070e59d2496ec13b839b4c4ecd1"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "9ac48f49f46219f974f378fae97d8a5c"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "83e450b2cb37b9e6275eeb31f0556b11"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "c9a5c609d02c59a6b5a2d596c3e11890"
  },
  {
    "url": "note/index.html",
    "revision": "fd2a196b221a3c77d590cc237e2e6b46"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "b1b6896cee8bc697bf15cbe3d9a18483"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "d418dd399c55d92c76ce912cd2b20031"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "9b4732148d420c1e48d9b096e1bffd0e"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "2e5d15714fa4ba10fa01482751066833"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "db80e7e7ce49fa634e0891efc14798ad"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "10978d51f00d0ef5f6f802386842777c"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "09333c845fa5a6663ab7eddbd68ffe4b"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "26b885a2510f97215c2a0f9d16fa83aa"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "1d41318f80a405bbf5519c611ec7725c"
  },
  {
    "url": "tag/工作内容/index.html",
    "revision": "f26c636ad40961dbfd6b9a804a7ba4f2"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "983bf1e7eeeec8972cf3cf1646ba31e0"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "81323b020422740b8d356ff524395f9d"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "bfe7f1b37edd00297710790f13b98b73"
  },
  {
    "url": "tag/视频/index.html",
    "revision": "e105bd54aa115787507e20b8016343e2"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "eec42e5aef2f81335e54edfd85be7060"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "638be1bdd98aa8df4aa3cbf259f05676"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "0f5906baab5fce19961cc7f997431cc2"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "17c7087994347537aeab90ec5d9febf9"
  },
  {
    "url": "tag/go基础知识/index.html",
    "revision": "c6f818f2e602a37e56cec1a7f9702f8c"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "f48e0b8cd976df5e62f75e219762170e"
  },
  {
    "url": "tag/index.html",
    "revision": "6523414249d9bc9d52fef5058b7c7a62"
  },
  {
    "url": "tag/js/index.html",
    "revision": "78daf4255c20391d885402b181cc87d4"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "83e311dcb0e91f67327a91ae8340e4ee"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "0958959ca1ae097605cb7689ccdd11e7"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "f223487a3fd66f03ee8f6991d4021912"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "56db4f911c0ace1acadac03127e09a4e"
  },
  {
    "url": "timeline/index.html",
    "revision": "dc54c0207b1903e870fbb9dbe95eb4a3"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "3ea83412d160b18db53ad82aec1cdc82"
  },
  {
    "url": "views/golangji-chu/goji-chu-zhi-shi-0.html",
    "revision": "9f19ead8d95e62a0dd7ad941ecc63e93"
  },
  {
    "url": "views/golangji-chu/goji-chu-zhi-shi-1.html",
    "revision": "e285e83bd973eb0050884463598021f9"
  },
  {
    "url": "views/golangji-chu/goji-chu-zhi-shi-2.html",
    "revision": "41bdb194145d5d8e270376d91c658161"
  },
  {
    "url": "views/golangji-chu/goji-chu-zhi-shi-3.html",
    "revision": "1e6e352885baec50652c719b0db1fbe5"
  },
  {
    "url": "views/gong-zuo-nei-rong/gong-ju-shi-yong.html",
    "revision": "661837ef02db9505df0788256f2de126"
  },
  {
    "url": "views/gong-zuo-nei-rong/hou-duan.html",
    "revision": "de1e4677c31181d3583adbfa180419a0"
  },
  {
    "url": "views/gong-zuo-nei-rong/qian-duan.html",
    "revision": "0e7891ba51099a5b8151418a6996f108"
  },
  {
    "url": "views/gong-zuo-nei-rong/xiang-mu-ji-he.html",
    "revision": "3553d125be47285bb528e6d854318c25"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "307c83856ac89165036264a56da37413"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "ad5e34901c4424d12e00389d7bea7342"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "b2c5167faf92bb797a4eb14b8ae34f98"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "95e2fd91074045a3e9ac477084946d76"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "71873042211d2d3d7fccf8bad6ecb657"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "0d20e43f62d99bb6a57b713d143104ca"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "2bab8c11391f60a1ef2989c6b8a43452"
  },
  {
    "url": "views/shi-pin/shi-pin-ce-shi.html",
    "revision": "1b7bc957f6f8ce70dcb061f6f1dba39f"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "d8e6215611800073ab009d20bfe3c938"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "104c9e3d48f85c2670b78c7f24ce37c8"
  },
  {
    "url": "views/sui-bi/2020/ji-wo-de-da-xue.html",
    "revision": "281f77208bce98a37f68e7f84eadd186"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "49339566d51b0885d909d9f15058f1ec"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "9baceb45e58c7158681ceb6cccf5b650"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "67fc166208f8e0c15d53bbfda3690289"
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
