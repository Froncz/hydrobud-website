"use strict";var precacheConfig=[["/hydrobud-website/index.html","4242396ed9e550d0ab42c64e075ae0f3"],["/hydrobud-website/static/css/main.70de7b4b.css","80b7a4d3d40816bbdddbf25dae1e0e85"],["/hydrobud-website/static/js/main.0060d431.js","84f3838c39c1e0f39942e2a590abfea1"],["/hydrobud-website/static/media/background_mid.756fdcc4.jpg","756fdcc49dbe513bfc5187505085d784"],["/hydrobud-website/static/media/image1.acffc220.jpg","acffc2200797c7cecf804f96cf9ecc88"],["/hydrobud-website/static/media/image2-low.a8d37c6a.jpg","a8d37c6adb245ac1f0b5a6770adb9c4d"],["/hydrobud-website/static/media/image2.756fdcc4.jpg","756fdcc49dbe513bfc5187505085d784"],["/hydrobud-website/static/media/image3-low.66bbbc82.jpg","66bbbc828a32cebff20ba7c54d4c735b"],["/hydrobud-website/static/media/image3.d17ba8c5.jpg","d17ba8c5cd8fbf6e9b5963827636490b"],["/hydrobud-website/static/media/image4-low.6695df24.jpg","6695df24f95247751a0a80631af58f93"],["/hydrobud-website/static/media/image4.31d2bf88.jpg","31d2bf88dba973d7fb3ad103150d754b"],["/hydrobud-website/static/media/image5.caf9623f.jpg","caf9623ffc52cd230ddda06ad9a2f402"],["/hydrobud-website/static/media/image6.f7654c3f.jpg","f7654c3fa367a89c8fb3a67fc83bab12"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/hydrobud-website/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});