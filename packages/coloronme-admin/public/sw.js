if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>n(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-495fd258"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/125-14878e7b6eeaf53e.js",revision:"14878e7b6eeaf53e"},{url:"/_next/static/chunks/136414c0-0552348ea76bee10.js",revision:"0552348ea76bee10"},{url:"/_next/static/chunks/138-2274d7b37fcc5571.js",revision:"2274d7b37fcc5571"},{url:"/_next/static/chunks/140-a3971bfd5cbb46b2.js",revision:"a3971bfd5cbb46b2"},{url:"/_next/static/chunks/259-7cc1766535c7d7bc.js",revision:"7cc1766535c7d7bc"},{url:"/_next/static/chunks/337-802b34ed32ac254f.js",revision:"802b34ed32ac254f"},{url:"/_next/static/chunks/346-d5f817e28d3b56d2.js",revision:"d5f817e28d3b56d2"},{url:"/_next/static/chunks/451.7b507d4ca7b11414.js",revision:"7b507d4ca7b11414"},{url:"/_next/static/chunks/472.7cce8c972b64126a.js",revision:"7cce8c972b64126a"},{url:"/_next/static/chunks/513.8104826c346db39b.js",revision:"8104826c346db39b"},{url:"/_next/static/chunks/517.eb7d40b9d730e0d4.js",revision:"eb7d40b9d730e0d4"},{url:"/_next/static/chunks/527.eb7d19decf7cc439.js",revision:"eb7d19decf7cc439"},{url:"/_next/static/chunks/66.4c2e33c7182941a1.js",revision:"4c2e33c7182941a1"},{url:"/_next/static/chunks/789-3a6b64def60d06d1.js",revision:"3a6b64def60d06d1"},{url:"/_next/static/chunks/815.0ff8d6d564d503ec.js",revision:"0ff8d6d564d503ec"},{url:"/_next/static/chunks/834-87a6a37071d4876f.js",revision:"87a6a37071d4876f"},{url:"/_next/static/chunks/880-73c9d8d6aeb52494.js",revision:"73c9d8d6aeb52494"},{url:"/_next/static/chunks/922-0f9b7db94edb5358.js",revision:"0f9b7db94edb5358"},{url:"/_next/static/chunks/a4069263-220d755fda32f3c4.js",revision:"220d755fda32f3c4"},{url:"/_next/static/chunks/framework-d18beca3755f0f47.js",revision:"d18beca3755f0f47"},{url:"/_next/static/chunks/main-361747d970a3de1d.js",revision:"361747d970a3de1d"},{url:"/_next/static/chunks/pages/_app-c637b799a73a24fb.js",revision:"c637b799a73a24fb"},{url:"/_next/static/chunks/pages/_error-fa23f3959dba0070.js",revision:"fa23f3959dba0070"},{url:"/_next/static/chunks/pages/colors-26677fc6e70a4632.js",revision:"26677fc6e70a4632"},{url:"/_next/static/chunks/pages/colors/%5Bcolor%5D-0b102893d78f2e84.js",revision:"0b102893d78f2e84"},{url:"/_next/static/chunks/pages/index-8e4907ecca13e424.js",revision:"8e4907ecca13e424"},{url:"/_next/static/chunks/pages/login-ca849d4c51813c94.js",revision:"ca849d4c51813c94"},{url:"/_next/static/chunks/pages/mypage-4c3760ee8baee105.js",revision:"4c3760ee8baee105"},{url:"/_next/static/chunks/pages/mypage/modify-bfef4cffce90cf15.js",revision:"bfef4cffce90cf15"},{url:"/_next/static/chunks/pages/mypage/password-56340fcf8a683259.js",revision:"56340fcf8a683259"},{url:"/_next/static/chunks/pages/register-fb324cb7c979be5e.js",revision:"fb324cb7c979be5e"},{url:"/_next/static/chunks/pages/register/%5Bid%5D-efeb756207287721.js",revision:"efeb756207287721"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-905789866584703b.js",revision:"905789866584703b"},{url:"/_next/static/media/leftArrow.27022969.svg",revision:"0621b67c7bab1c3dbb4838bf31880b86"},{url:"/_next/static/oJTax05S6q9pYA2J0lIlD/_buildManifest.js",revision:"c149842c70aa11a6127964a73147c6f5"},{url:"/_next/static/oJTax05S6q9pYA2J0lIlD/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/Pretendard-Black.otf",revision:"47fbe31c9ec1a228b48323141304e72f"},{url:"/fonts/Pretendard-Bold.otf",revision:"f3189877761796153110738ae129c8a2"},{url:"/fonts/Pretendard-ExtraBold.otf",revision:"83090e76856550278a1694bdf48a2db1"},{url:"/fonts/Pretendard-ExtraLight.otf",revision:"8f1efd7d7991d92aba8d2603456ed570"},{url:"/fonts/Pretendard-Light.otf",revision:"7074e726e0701102a10f0843961e28b6"},{url:"/fonts/Pretendard-Medium.otf",revision:"d88ea6aec529d8945a09a582be9200a2"},{url:"/fonts/Pretendard-Regular.otf",revision:"97b362437880d5cbb01b9305136909ac"},{url:"/fonts/Pretendard-SemiBold.otf",revision:"0bfe99ca0a0e757d2f997561b4b3a020"},{url:"/fonts/Pretendard-Thin.otf",revision:"fe5044d0108c234a2a609a17e920781d"},{url:"/icons/icon-128x128.png",revision:"0166ee4a7f6d786db1e526d6b728ac25"},{url:"/icons/icon-144x144.png",revision:"2e7a3ec4f818ebcea62db53a6c0072bd"},{url:"/icons/icon-152x152.png",revision:"c72038c59a0bb3507db795d4c0f14a80"},{url:"/icons/icon-192x192.png",revision:"3a44d98840f1f02bc09bfcf51d1e39ff"},{url:"/icons/icon-384x384.png",revision:"8ad7a0cf1bc58a705249e19b0ef07c39"},{url:"/icons/icon-48x48.png",revision:"e3a44cb0728c2bc9ae3f5cd17fa74c18"},{url:"/icons/icon-512x512.png",revision:"4f2f6886e4ebc7596f7319cb6ac26055"},{url:"/icons/icon-72x72.png",revision:"9339662b2f2141d82c828527c89ccf96"},{url:"/icons/icon-96x96.png",revision:"e5ca9b8d7991cfd20982c70edb329a06"},{url:"/icons/kakao.svg",revision:"3dbbc121afb1cfbfba47c98f06087795"},{url:"/icons/vector/leftArrow.svg",revision:"0621b67c7bab1c3dbb4838bf31880b86"},{url:"/icons/vector/pencil.svg",revision:"f917a92c472fc72668615308545cf396"},{url:"/images/Pie.png",revision:"ede14dae39bf36ba071091a1aa8eaf95"},{url:"/images/bargraphicon.png",revision:"ea709b047ddd2fe4a7ed6d71ed02bad6"},{url:"/images/bigLogo.png",revision:"153ab48f2ddf26a6d9aecfe153d6c0db"},{url:"/images/mainCircle.png",revision:"a855011536a4f8d04bc08daf0d8fc92b"},{url:"/images/mainLogo.png",revision:"136f7c74106ce6b1953893428f9ca4f9"},{url:"/manifest.json",revision:"2d753e51dbfdc6bad57e46d97e36347e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
