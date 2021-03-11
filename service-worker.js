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
    "revision": "59910f02c02931c933d66468553cf0c1"
  },
  {
    "url": "数据库img/数据类型.png",
    "revision": "11bc00f7df4c118598068cd106eb9f55"
  },
  {
    "url": "数据库img/UML.png",
    "revision": "7a79233e1858a5e3ee5cacfaf91d5e87"
  },
  {
    "url": "assets/css/0.styles.0fb15128.css",
    "revision": "c706752328be6ea6fc959d1fe7e44bb0"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.a6af09f2.js",
    "revision": "d7642dbf76dfde68b76a324c7148a627"
  },
  {
    "url": "assets/js/10.09c3fd2e.js",
    "revision": "f2f8f83aa80712a9293122388a7f0f0e"
  },
  {
    "url": "assets/js/11.1ae12a39.js",
    "revision": "a633392af66c4adb92f2d6e6a62a9be2"
  },
  {
    "url": "assets/js/12.e83897d0.js",
    "revision": "177fb9e3f589d0bd07dd283537f275ee"
  },
  {
    "url": "assets/js/13.944c53f1.js",
    "revision": "d768fa3e032dd3070bf50dbdbb36d822"
  },
  {
    "url": "assets/js/14.70cda7ac.js",
    "revision": "d2f41460d14e4ce9f8ee9987676e5cb5"
  },
  {
    "url": "assets/js/15.d923b1b7.js",
    "revision": "7576b242d9339c82722928060c8ad2a4"
  },
  {
    "url": "assets/js/16.89e738c1.js",
    "revision": "f486bea380816fd295aa412f070e347a"
  },
  {
    "url": "assets/js/17.c31c2ebe.js",
    "revision": "aba5ebf8a76cf6639ace6d35a780d44d"
  },
  {
    "url": "assets/js/18.1d151b88.js",
    "revision": "892b28d0874e68a40917cc45d494f652"
  },
  {
    "url": "assets/js/19.6df9af93.js",
    "revision": "e8a305f0102933ff317e4fbefa60e178"
  },
  {
    "url": "assets/js/20.a92051f2.js",
    "revision": "239a50cbfdecb91f1824c46def1ce664"
  },
  {
    "url": "assets/js/21.0a6c43da.js",
    "revision": "a8dbf74037864350ed2528f194f44c26"
  },
  {
    "url": "assets/js/22.514b33f1.js",
    "revision": "60bc6aea61bead44a6e8bcff20b37f3d"
  },
  {
    "url": "assets/js/23.46235149.js",
    "revision": "0787a8711466a120416847db3ca46b6a"
  },
  {
    "url": "assets/js/24.d0658788.js",
    "revision": "3abb66deebe646218b668b32baebc61b"
  },
  {
    "url": "assets/js/25.53ecc311.js",
    "revision": "8ea1595f470b7ede4c94f9b139b435aa"
  },
  {
    "url": "assets/js/26.737a6683.js",
    "revision": "a19956c1649a036d9ee63f9e36abc42b"
  },
  {
    "url": "assets/js/27.6714c331.js",
    "revision": "86cc89daff54fca411918366fb4ce611"
  },
  {
    "url": "assets/js/28.2c0d8e09.js",
    "revision": "c50c34462750d06b2c887500ff4023f9"
  },
  {
    "url": "assets/js/29.97aa35d7.js",
    "revision": "2f4d6cb64184bad0ed41bba8ff555475"
  },
  {
    "url": "assets/js/3.b5323629.js",
    "revision": "d1bc5e428afe7d2ae4d4b08b76d38cab"
  },
  {
    "url": "assets/js/30.0d69152d.js",
    "revision": "b578ed533a8c942d0d200ca467e278c8"
  },
  {
    "url": "assets/js/31.2422b379.js",
    "revision": "824f0fcb634c14ba43986db1f574bf10"
  },
  {
    "url": "assets/js/4.d7886a50.js",
    "revision": "e97a5c256bbd8813f7e8198db74135a3"
  },
  {
    "url": "assets/js/5.c70c804d.js",
    "revision": "479b1133c6bf34597c14b18dfbc98356"
  },
  {
    "url": "assets/js/6.9caeff5c.js",
    "revision": "ad55afe8a50c8123884958310b0b374b"
  },
  {
    "url": "assets/js/7.570a9aea.js",
    "revision": "71ab06683b17098c10499ed55a7ba220"
  },
  {
    "url": "assets/js/8.505ae810.js",
    "revision": "f7898ba03238c587fd6b896ead6fa08d"
  },
  {
    "url": "assets/js/9.48f90e53.js",
    "revision": "d1c3bf98e714aa8d9bf30ab5259356e6"
  },
  {
    "url": "assets/js/app.312c4761.js",
    "revision": "0ed03916ee43028c0a1df161243764de"
  },
  {
    "url": "avatar.png",
    "revision": "6fb48e7352045d1550bedcfa9f19fa95"
  },
  {
    "url": "blogs/back end/database/database.html",
    "revision": "f4b86155cc71edcd2d352795046a894c"
  },
  {
    "url": "blogs/back end/network/network.html",
    "revision": "62656bebb6242ecacc6fcda44b7c46fa"
  },
  {
    "url": "blogs/front end/BFC/BFC.html",
    "revision": "2067af5b66860283da73aa1af2852ede"
  },
  {
    "url": "blogs/front end/CSS3/CSS3.html",
    "revision": "0b9b96d653561117cb81b1af1500ddf5"
  },
  {
    "url": "blogs/front end/CSS3/flex.html",
    "revision": "0eea7d6ea458553150f759e5d238341b"
  },
  {
    "url": "blogs/front end/CSS3/media.html",
    "revision": "dded61bb79aa654323489fca7173596a"
  },
  {
    "url": "blogs/front end/CSS3/Responsive.html",
    "revision": "126e653e3f2b57808096ab7613a6b22b"
  },
  {
    "url": "blogs/front end/ES6/ES6.html",
    "revision": "bdb2620f93ca2022073cf521c547ddef"
  },
  {
    "url": "blogs/front end/Git/Git.html",
    "revision": "60590db9367ab8c292b24d282f173dee"
  },
  {
    "url": "blogs/front end/JavaScript/JavaScript.html",
    "revision": "d1fa70d6e508d5c5f7fce0458fef4c0f"
  },
  {
    "url": "blogs/front end/md/MD.html",
    "revision": "fe37f8cb9a5640b7079340df12e14a04"
  },
  {
    "url": "blogs/front end/Regular Expression/正则表达式.html",
    "revision": "46b2daf1b7d6d84495a6b3c0b37bb519"
  },
  {
    "url": "blogs/front end/webpack/webpack.html",
    "revision": "60590db9367ab8c292b24d282f173dee"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "0aa97588470162f22b2edf4ffc48b70c"
  },
  {
    "url": "categories/back end/index.html",
    "revision": "33bf833bfbe085cf6f4094b2ba61b14b"
  },
  {
    "url": "categories/front end/index.html",
    "revision": "656627a50a860108d578ed0a347f3d7c"
  },
  {
    "url": "categories/front end/page/2/index.html",
    "revision": "1d69d8e56e2c17ee2b32534b8007414e"
  },
  {
    "url": "categories/index.html",
    "revision": "5007eab747931a5a796d2191fbba3fa0"
  },
  {
    "url": "docs/theme-reco/haha.html",
    "revision": "f81602b3a791e4df2258f4f448583e1b"
  },
  {
    "url": "docs/theme-reco/jieshao.html",
    "revision": "9213d826fce835e8b2be8feb39b53b57"
  },
  {
    "url": "index.html",
    "revision": "7efe129bd94ed372c873d48cd775e105"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "b886467864d6c72f123b56526c99c4a6"
  },
  {
    "url": "js/type.js",
    "revision": "6d167055aeca6a070d1c781eb1c26dc9"
  },
  {
    "url": "tag/BFC/index.html",
    "revision": "22b4a6f43848bd425da62b47a29ee213"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "bbdccfd416971075397623154b7c444d"
  },
  {
    "url": "tag/database/index.html",
    "revision": "bdd49a85e39a76a9259012d674ea8ea9"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "2524aa549fa19e3bfbc7fc78f0df3c39"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "250ee39e865b67a64c36184cab1f2882"
  },
  {
    "url": "tag/index.html",
    "revision": "982330764a5baed957997c2808536967"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "dabfb2542acb320e282838808d8d4730"
  },
  {
    "url": "tag/network/index.html",
    "revision": "4706e96f1023f1323b7fa2a372929ba6"
  },
  {
    "url": "tag/Regular Expression/index.html",
    "revision": "dd724d8f4b68adc0c0455f2479ea4259"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "7fe18dcd0f6ea2735a1bb714023b5ece"
  },
  {
    "url": "timeline/index.html",
    "revision": "86ce7820c385ab5603648f27bd071479"
  },
  {
    "url": "ys.jpg",
    "revision": "c86918850fa234f5c9e2434e2e0543b7"
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
