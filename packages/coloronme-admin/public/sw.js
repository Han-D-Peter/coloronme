if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-1051b61c"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2ARaXkvxaWjZD6iWI8QKe/_buildManifest.js",revision:"e6e353af8a2b1031f65de215abd6bac4"},{url:"/_next/static/2ARaXkvxaWjZD6iWI8QKe/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/136414c0-34994413b9ea87b0.js",revision:"34994413b9ea87b0"},{url:"/_next/static/chunks/138-3018e4845c519031.js",revision:"3018e4845c519031"},{url:"/_next/static/chunks/215-83a914c6e03d9023.js",revision:"83a914c6e03d9023"},{url:"/_next/static/chunks/394.307f25e25b31694f.js",revision:"307f25e25b31694f"},{url:"/_next/static/chunks/451.046a356c0b674044.js",revision:"046a356c0b674044"},{url:"/_next/static/chunks/517.4d9a5321a5100129.js",revision:"4d9a5321a5100129"},{url:"/_next/static/chunks/577-863af8d9154db283.js",revision:"863af8d9154db283"},{url:"/_next/static/chunks/712-ff072bf587aa75cc.js",revision:"ff072bf587aa75cc"},{url:"/_next/static/chunks/786-c37d4ed28f5dd61b.js",revision:"c37d4ed28f5dd61b"},{url:"/_next/static/chunks/834.ba214c8f4334d3d0.js",revision:"ba214c8f4334d3d0"},{url:"/_next/static/chunks/891-abce5add349d4044.js",revision:"abce5add349d4044"},{url:"/_next/static/chunks/a4069263.7f2cd25dac004b68.js",revision:"7f2cd25dac004b68"},{url:"/_next/static/chunks/framework-8e68d791003f07b8.js",revision:"8e68d791003f07b8"},{url:"/_next/static/chunks/main-0e9e9c5794b6aa30.js",revision:"0e9e9c5794b6aa30"},{url:"/_next/static/chunks/pages/_app-98654ec3cdbbe4c4.js",revision:"98654ec3cdbbe4c4"},{url:"/_next/static/chunks/pages/_error-d8818297dfdeacef.js",revision:"d8818297dfdeacef"},{url:"/_next/static/chunks/pages/colors-57c44a181a9ed0df.js",revision:"57c44a181a9ed0df"},{url:"/_next/static/chunks/pages/colors/%5Bcolor%5D-274a933db314642a.js",revision:"274a933db314642a"},{url:"/_next/static/chunks/pages/index-8c9fc88ea5d7d55c.js",revision:"8c9fc88ea5d7d55c"},{url:"/_next/static/chunks/pages/login-007e163edb79d679.js",revision:"007e163edb79d679"},{url:"/_next/static/chunks/pages/mypage-aff3b34a3abbf791.js",revision:"aff3b34a3abbf791"},{url:"/_next/static/chunks/pages/register-4811dd39c2a2954a.js",revision:"4811dd39c2a2954a"},{url:"/_next/static/chunks/pages/register/%5Bid%5D-5f56d6347089ada6.js",revision:"5f56d6347089ada6"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-2b0cb259bf32ee63.js",revision:"2b0cb259bf32ee63"},{url:"/_next/static/media/leftArrow.27022969.svg",revision:"0621b67c7bab1c3dbb4838bf31880b86"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/Pretendard-Black.otf",revision:"47fbe31c9ec1a228b48323141304e72f"},{url:"/fonts/Pretendard-Bold.otf",revision:"f3189877761796153110738ae129c8a2"},{url:"/fonts/Pretendard-ExtraBold.otf",revision:"83090e76856550278a1694bdf48a2db1"},{url:"/fonts/Pretendard-ExtraLight.otf",revision:"8f1efd7d7991d92aba8d2603456ed570"},{url:"/fonts/Pretendard-Light.otf",revision:"7074e726e0701102a10f0843961e28b6"},{url:"/fonts/Pretendard-Medium.otf",revision:"d88ea6aec529d8945a09a582be9200a2"},{url:"/fonts/Pretendard-Regular.otf",revision:"97b362437880d5cbb01b9305136909ac"},{url:"/fonts/Pretendard-SemiBold.otf",revision:"0bfe99ca0a0e757d2f997561b4b3a020"},{url:"/fonts/Pretendard-Thin.otf",revision:"fe5044d0108c234a2a609a17e920781d"},{url:"/icons/icon-128x128.png",revision:"0166ee4a7f6d786db1e526d6b728ac25"},{url:"/icons/icon-144x144.png",revision:"2e7a3ec4f818ebcea62db53a6c0072bd"},{url:"/icons/icon-152x152.png",revision:"c72038c59a0bb3507db795d4c0f14a80"},{url:"/icons/icon-192x192.png",revision:"3a44d98840f1f02bc09bfcf51d1e39ff"},{url:"/icons/icon-384x384.png",revision:"8ad7a0cf1bc58a705249e19b0ef07c39"},{url:"/icons/icon-48x48.png",revision:"e3a44cb0728c2bc9ae3f5cd17fa74c18"},{url:"/icons/icon-512x512.png",revision:"4f2f6886e4ebc7596f7319cb6ac26055"},{url:"/icons/icon-72x72.png",revision:"9339662b2f2141d82c828527c89ccf96"},{url:"/icons/icon-96x96.png",revision:"e5ca9b8d7991cfd20982c70edb329a06"},{url:"/icons/kakao.svg",revision:"3dbbc121afb1cfbfba47c98f06087795"},{url:"/icons/vector/leftArrow.svg",revision:"0621b67c7bab1c3dbb4838bf31880b86"},{url:"/icons/vector/pencil.svg",revision:"f917a92c472fc72668615308545cf396"},{url:"/images/bigLogo.png",revision:"153ab48f2ddf26a6d9aecfe153d6c0db"},{url:"/images/mainCircle.png",revision:"a855011536a4f8d04bc08daf0d8fc92b"},{url:"/images/mainLogo.png",revision:"136f7c74106ce6b1953893428f9ca4f9"},{url:"/manifest.json",revision:"2d753e51dbfdc6bad57e46d97e36347e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
