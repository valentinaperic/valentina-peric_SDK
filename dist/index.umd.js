!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["isomorphic-unfetch"],e):(t||self).lotrSdkValentinacodes=e(t.isomorphicUnfetch)}(this,function(t){function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=/*#__PURE__*/e(t);function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},r.apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}var u,s=/*#__PURE__*/function(){function t(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://the-one-api.dev/v2/"}return t.prototype.request=function(t,e){try{var n=""+this.baseUrl+t,i=r({},e,{headers:{Authorization:"Bearer "+this.apiKey,"Content-Type":"application/json"}});return Promise.resolve(o.default(n,i)).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})}catch(t){return Promise.reject(t)}},t}(),c=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.getMovies=function(){return this.request("/movie")},o.getMovieById=function(t){return this.request("/movie/"+t)},e}(s),p=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.getMovieQuotesById=function(t){return this.request("/movie/"+t+"/quote")},o.getQuotes=function(){return this.request("/quote")},o.getQuoteById=function(t){return this.request("/quote/"+t)},e}(s),f=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e}(s);return u=f,[c,p].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(u.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e))})}),f});
