if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-0ea65fa9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/2631e2f4-ce83470aeaee4052.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/378-107fcdefff4c9b5b.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/479-27da95443b196319.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/698-23fa58bd6fc7eaad.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/749-fd47d61b03860439.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/815-b75dd0d1b5e541f6.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/app/_not-found-ffd01629e6cf5c9e.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/app/autenticar/page-99ebc553975012bf.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/app/clientes/page-ebf2b21a57f93e1e.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/app/layout-a101d97702e93331.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/app/login/page-ef063866066bc59c.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/app/page-4386f87e6f46cef3.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/app/pontos/page-1d3be2cdd3e98260.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/app/whatsapp/page-6c81065c5661bba0.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/fd9d1056-fe61caf79662b697.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/framework-3cc918f8f1284ea2.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/main-app-54d0aa766d570962.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/main-b832adbf7d3042c9.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/pages/wathsapp-89467e3338ebb851.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1c7bb0fc671d8ec0.js",revision:"xSykYANQhP052ztHgCZkU"},{url:"/_next/static/css/31d262ff151c2035.css",revision:"31d262ff151c2035"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/xSykYANQhP052ztHgCZkU/_buildManifest.js",revision:"29deff3779a19c7bc4dc8f293715d44a"},{url:"/_next/static/xSykYANQhP052ztHgCZkU/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/manifest.json",revision:"5c6d200815c19b01660be131ae7dbbe2"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
