!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("mtLinkSdk",[],t):"object"==typeof exports?exports.mtLinkSdk=t():e.mtLinkSdk=t()}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var i=t[o],a=i.obj[i.prop],c=Object.keys(a),l=0;l<c.length;++l){var s=c[l],u=a[s];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:a,prop:s}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(n(r)){for(var o=[],i=0;i<r.length;++i)void 0!==r[i]&&o.push(r[i]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r){if(0===e.length)return e;var o="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var n="",a=0;a<o.length;++a){var c=o.charCodeAt(a);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?n+=o.charAt(a):c<128?n+=i[c]:c<2048?n+=i[192|c>>6]+i[128|63&c]:c<55296||c>=57344?n+=i[224|c>>12]+i[128|c>>6&63]+i[128|63&c]:(a+=1,c=65536+((1023&c)<<10|1023&o.charCodeAt(a)),n+=i[240|c>>18]+i[128|c>>12&63]+i[128|c>>6&63]+i[128|63&c])}return n},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,i){if(!r)return t;if("object"!=typeof r){if(n(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var c=t;return n(t)&&!n(r)&&(c=a(t,i)),n(t)&&n(r)?(r.forEach(function(r,n){if(o.call(t,n)){var a=t[n];a&&"object"==typeof a&&r&&"object"==typeof r?t[n]=e(a,r,i):t.push(r)}else t[n]=r}),t):Object.keys(r).reduce(function(t,n){var a=r[n];return o.call(t,n)?t[n]=e(t[n],a,i):t[n]=a,t},c)}}},function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),i=r(6);function a(e,t){var r=n.stringify(t,{delimiter:";",encode:!1});return n.stringify(o({},e,{configs:r}))}var c=function(){function e(){}return e.prototype.init=function(e){if(!e.clientId)throw new Error("Need a clientId to initialise");var t=e.clientId,r=e.redirectUri,o=void 0===r?location.protocol+"//"+location.host+"/callback":r,n=e.responseType,a=void 0===n?"token":n,c=e.scope,l=void 0===c?[]:c,s=e.locale,u=e.state,f=e.continueTo;this.params={client_id:t,locale:s,continue:f},this.oauthParams={client_id:t,redirect_uri:o,response_type:a,scope:l.join(" ")||void 0,state:u};var p=e.isTestEnvironment?"TEST_SUBDOMAIN":"SUBDOMAIN";this.domains={vault:i.VAULT[p]+"."+i.DOMAIN,myaccount:i.MY_ACCOUNT[p]+"."+i.DOMAIN}},e.prototype.authorize=function(e){void 0===e&&(e={});var t=e.newTab,r=void 0!==t&&t,n=e.email,c=e.authPage,l=e.backTo,s=e.showAuthToggle,u=a(o({},this.oauthParams,this.params),{email:n,sdk_platform:"js",sdk_version:"1.2.2",auth_action:c,back_to:l,show_auth_toggle:s});window.open("https://"+this.domains.myaccount+"/"+i.MY_ACCOUNT.PATHS.OAUTH+"?"+u,r?"_blank":"_self")},e.prototype.openVault=function(e){void 0===e&&(e={});var t=e.newTab,r=void 0!==t&&t,o=e.backTo,n=void 0===o?location.href:o,i=a(this.params,{sdk_platform:"js",sdk_version:"1.2.2",back_to:n});window.open("https://"+this.domains.vault+"?"+i,r?"_blank":"_self")},e.prototype.openSettings=function(e){void 0===e&&(e={});var t=e.newTab,r=void 0!==t&&t,o=e.backTo,n=void 0===o?location.href:o,c=a(this.params,{sdk_platform:"js",sdk_version:"1.2.2",back_to:n});window.open("https://"+this.domains.myaccount+"/"+i.MY_ACCOUNT.PATHS.SETTINGS+"?"+c,r?"_blank":"_self")},e}();t.default=new c},function(e,t,r){"use strict";var o=r(4),n=r(5),i=r(1);e.exports={formats:i,parse:n,stringify:o}},function(e,t,r){"use strict";var o=r(0),n=r(1),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,l=Array.prototype.push,s=function(e,t){l.apply(e,c(t)?t:[t])},u=Date.prototype.toISOString,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,formatter:n.formatters[n.default],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},p=function e(t,r,n,i,a,l,u,p,d,y,m,h,b){var v=t;if("function"==typeof u?v=u(r,v):v instanceof Date?v=y(v):"comma"===n&&c(v)&&(v=v.join(",")),null===v){if(i)return l&&!h?l(r,f.encoder,b):r;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||o.isBuffer(v))return l?[m(h?r:l(r,f.encoder,b))+"="+m(l(v,f.encoder,b))]:[m(r)+"="+m(String(v))];var g,O=[];if(void 0===v)return O;if(c(u))g=u;else{var j=Object.keys(v);g=p?j.sort(p):j}for(var w=0;w<g.length;++w){var S=g[w];a&&null===v[S]||(c(v)?s(O,e(v[S],"function"==typeof n?n(r,S):r,n,i,a,l,u,p,d,y,m,h,b)):s(O,e(v[S],r+(d?"."+S:"["+S+"]"),n,i,a,l,u,p,d,y,m,h,b)))}return O};e.exports=function(e,t){var r,o=e,l=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!i.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=n.formatters[r],a=f.filter;return("function"==typeof e.filter||c(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:void 0===e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:void 0===e.delimiter?f.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:f.encode,encoder:"function"==typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:a,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}}(t);"function"==typeof l.filter?o=(0,l.filter)("",o):c(l.filter)&&(r=l.filter);var u,d=[];if("object"!=typeof o||null===o)return"";u=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var y=a[u];r||(r=Object.keys(o)),l.sort&&r.sort(l.sort);for(var m=0;m<r.length;++m){var h=r[m];l.skipNulls&&null===o[h]||s(d,p(o[h],h,y,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.formatter,l.encodeValuesOnly,l.charset))}var b=d.join(l.delimiter),v=!0===l.addQueryPrefix?"?":"";return l.charsetSentinel&&("iso-8859-1"===l.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),b.length>0?v+b:""}},function(e,t,r){"use strict";var o=r(0),n=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},c=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(o),c=a?o.slice(0,a.index):o,l=[];if(c){if(!r.plainObjects&&n.call(Object.prototype,c)&&!r.allowPrototypes)return;l.push(c)}for(var s=0;null!==(a=i.exec(o))&&s<r.depth;){if(s+=1,!r.plainObjects&&n.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(a[1])}return a&&l.push("["+o.slice(a.index)+"]"),function(e,t,r){for(var o=t,n=e.length-1;n>=0;--n){var i,a=e[n];if("[]"===a&&r.parseArrays)i=[].concat(o);else{i=r.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,l=parseInt(c,10);r.parseArrays||""!==c?!isNaN(l)&&a!==c&&String(l)===c&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(i=[])[l]=o:i[c]=o:i={0:o}}o=i}return o}(l,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth?e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){var r,c={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,s=t.parameterLimit===1/0?void 0:t.parameterLimit,u=l.split(t.delimiter,s),f=-1,p=t.charset;if(t.charsetSentinel)for(r=0;r<u.length;++r)0===u[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===u[r]?p="utf-8":"utf8=%26%2310003%3B"===u[r]&&(p="iso-8859-1"),f=r,r=u.length);for(r=0;r<u.length;++r)if(r!==f){var d,y,m=u[r],h=m.indexOf("]="),b=-1===h?m.indexOf("="):h+1;-1===b?(d=t.decoder(m,i.decoder,p),y=t.strictNullHandling?null:""):(d=t.decoder(m.slice(0,b),i.decoder,p),y=t.decoder(m.slice(b+1),i.decoder,p)),y&&t.interpretNumericEntities&&"iso-8859-1"===p&&(y=a(y)),y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(",")),n.call(c,d)?c[d]=o.combine(c[d],y):c[d]=y}return c}(e,r):e,s=r.plainObjects?Object.create(null):{},u=Object.keys(l),f=0;f<u.length;++f){var p=u[f],d=c(p,l[p],r);s=o.merge(s,d,r)}return o.compact(s)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DOMAIN="getmoneytree.com",t.VAULT={SUBDOMAIN:"vault",TEST_SUBDOMAIN:"vault-staging"},t.MY_ACCOUNT={SUBDOMAIN:"myaccount",TEST_SUBDOMAIN:"myaccount-staging",PATHS:{OAUTH:"oauth/authorize",SETTINGS:"settings"}}}]).default});