function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("bRlFp",(function(e,t){var n=o("2bBga"),r=o("djt5d"),i=o("6zSb1"),s=o("d0EKm");var a=function e(t){var o=new i(t),a=r(i.prototype.request,o);return n.extend(a,i.prototype,o),n.extend(a,o),a.create=function(n){return e(s(t,n))},a}(o("hqlPG"));a.Axios=i,a.CanceledError=o("83xK9"),a.CancelToken=o("2sjhC"),a.isCancel=o("ksuZT"),a.VERSION=o("50GW0").version,a.toFormData=o("aewVa"),a.AxiosError=o("121rJ"),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=o("av9gA"),a.isAxiosError=o("gNhGc"),e.exports=a,e.exports.default=a})),o.register("2bBga",(function(e,t){var n,r=o("djt5d"),i=Object.prototype.toString,s=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return s(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=a("ArrayBuffer");function h(e){return null!==e&&"object"==typeof e}function p(e){if("object"!==s(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var f=a("Date"),d=a("File"),g=a("Blob"),m=a("FileList");function v(e){return"[object Function]"===i.call(e)}var y=a("URLSearchParams");function _(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var b,w=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return b&&e instanceof b});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||v(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:h,isPlainObject:p,isUndefined:c,isDate:f,isFile:d,isBlob:g,isFunction:v,isStream:function(e){return h(e)&&v(e.pipe)},isURLSearchParams:y,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:_,merge:function e(){var t={};function n(n,r){p(t[r])&&p(n)?t[r]=e(t[r],n):p(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)_(arguments[r],n);return t},extend:function(e,t,n){return _(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,o,s={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)s[o=r[i]]||(t[o]=e[o],s[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:w,isFileList:m}})),o.register("djt5d",(function(e,t){e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}})),o.register("6zSb1",(function(e,t){var n=o("2bBga"),r=o("2RNjJ"),i=o("5Dm7L"),s=o("eQ5d8"),a=o("d0EKm"),u=o("1ZTQa"),c=o("6zj0X"),l=c.validators;function h(e){this.defaults=e,this.interceptors={request:new i,response:new i}}h.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var h=[s,void 0];for(Array.prototype.unshift.apply(h,r),h=h.concat(u),o=Promise.resolve(t);h.length;)o=o.then(h.shift(),h.shift());return o}for(var p=t;r.length;){var f=r.shift(),d=r.shift();try{p=f(p)}catch(e){d(e);break}}try{o=s(p)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},h.prototype.getUri=function(e){e=a(this.defaults,e);var t=u(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(a(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h})),o.register("2RNjJ",(function(e,t){var n=o("2bBga");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(n.isURLSearchParams(t))o=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("5Dm7L",(function(e,t){var n=o("2bBga");function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r})),o.register("eQ5d8",(function(e,t){var n=o("2bBga"),r=o("bhEpd"),i=o("ksuZT"),s=o("hqlPG"),a=o("83xK9");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("bhEpd",(function(e,t){var n=o("2bBga"),r=o("hqlPG");e.exports=function(e,t,i){var o=this||r;return n.forEach(i,(function(n){e=n.call(o,e,t)})),e}})),o.register("hqlPG",(function(e,t){var n=o("4TNnu"),r=o("2bBga"),i=o("i16eu"),s=o("121rJ"),a=o("2wfLM"),u=o("aewVa"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var h,p={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(h=o("9VVcb")),h),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=r.isObject(e),s=t&&t["Content-Type"];if((n=r.isFileList(e))||o&&"multipart/form-data"===s){var a=this.env&&this.env.FormData;return u(n?{"files[]":e}:e,a&&new a)}return o||"application/json"===s?(l(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||p.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw s.from(e,s.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("1gvAv")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){p.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){p.headers[e]=r.merge(c)})),e.exports=p})),o.register("4TNnu",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,h=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&f())}function f(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||l||a(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("i16eu",(function(e,t){var n=o("2bBga");e.exports=function(e,t){n.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}})),o.register("121rJ",(function(e,t){var n=o("2bBga");function r(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(r,s),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(e,t,o,s,a,u){var c=Object.create(i);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),r.call(c,e.message,t,o,s,a),c.name=e.name,u&&Object.assign(c,u),c},e.exports=r})),o.register("2wfLM",(function(e,t){e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("aewVa",(function(e,t){var n=o("ihoyg").Buffer,r=o("2bBga");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,s){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+s);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var a,u=s?s+"."+i:i;if(n&&!s&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(a=r.toArray(n)))return void a.forEach((function(e){!r.isUndefined(e)&&t.append(u,o(e))}));e(n,u)}})),i.pop()}else t.append(s,o(n))}(e),t}})),o.register("ihoyg",(function(t,n){var r,i;e(t.exports,"Buffer",(function(){return r}),(function(e){return r=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(e){return i=e}));var s=o("hqZtu"),a=o("5WQj6");const u="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=h,i=50;const c=2147483647;function l(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,h.prototype),t}function h(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return d(e)}return p(e,t,n)}function p(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!h.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|y(e,t);let r=l(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Y(e,Uint8Array)){const t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return g(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Y(e,ArrayBuffer)||e&&Y(e.buffer,ArrayBuffer))return m(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Y(e,SharedArrayBuffer)||e&&Y(e.buffer,SharedArrayBuffer)))return m(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return h.from(r,t,n);const i=function(e){if(h.isBuffer(e)){const t=0|v(e.length),n=l(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?l(0):g(e);if("Buffer"===e.type&&Array.isArray(e.data))return g(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return h.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function d(e){return f(e),l(e<0?0:0|v(e))}function g(e){const t=e.length<0?0:0|v(e.length),n=l(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function m(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,h.prototype),r}function v(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function y(e,t){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Y(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return J(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Q(e).length;default:if(i)return r?-1:J(e).length;t=(""+t).toLowerCase(),i=!0}}function _(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return N(this,t,n);case"utf8":case"utf-8":return A(this,t,n);case"ascii":return L(this,t,n);case"latin1":case"binary":return R(this,t,n);case"base64":return C(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function b(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function w(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=h.from(t,r)),h.isBuffer(t))return 0===t.length?-1:E(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):E(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function E(e,t,n,r,i){let o,s=1,a=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;s=2,a/=2,u/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let r=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===r?0:o-r)){if(-1===r&&(r=o),o-r+1===u)return r*s}else-1!==r&&(o-=o-r),r=-1}else for(n+u>a&&(n=a-u),o=n;o>=0;o--){let n=!0;for(let r=0;r<u;r++)if(c(e,o+r)!==c(t,r)){n=!1;break}if(n)return o}return-1}function S(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const o=t.length;let s;for(r>o/2&&(r=o/2),s=0;s<r;++s){const r=parseInt(t.substr(2*s,2),16);if(Z(r))return s;e[n+s]=r}return s}function k(e,t,n,r){return X(J(t,e.length-n),e,n,r)}function I(e,t,n,r){return X(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function P(e,t,n,r){return X(Q(t),e,n,r)}function O(e,t,n,r){return X(function(e,t){let n,r,i;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function C(e,t,n){return 0===t&&n===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,n))}function A(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=n){let n,r,a,u;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[i+1],128==(192&n)&&(u=(31&t)<<6|63&n,u>127&&(o=u));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(u=(15&t)<<12|(63&n)<<6|63&r,u>2047&&(u<55296||u>57343)&&(o=u));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(u=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,u>65535&&u<1114112&&(o=u))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o),i+=s}return function(e){const t=e.length;if(t<=T)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=T));return n}(r)}h.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(e,t,n){return p(e,t,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?l(e):void 0!==t?"string"==typeof n?l(e).fill(t,n):l(e).fill(t):l(e)}(e,t,n)},h.allocUnsafe=function(e){return d(e)},h.allocUnsafeSlow=function(e){return d(e)},h.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function(e,t){if(Y(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),Y(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=h.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(Y(t,Uint8Array))i+t.length>r.length?(h.isBuffer(t)||(t=h.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!h.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},h.byteLength=y,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},h.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},h.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},h.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?A(this,0,e):_.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){let e="";const t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},u&&(h.prototype[u]=h.prototype.inspect),h.prototype.compare=function(e,t,n,r,i){if(Y(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),u=this.slice(r,i),c=e.slice(t,n);for(let e=0;e<a;++e)if(u[e]!==c[e]){o=u[e],s=c[e];break}return o<s?-1:s<o?1:0},h.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},h.prototype.indexOf=function(e,t,n){return w(this,e,t,n,!0)},h.prototype.lastIndexOf=function(e,t,n){return w(this,e,t,n,!1)},h.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let o=!1;for(;;)switch(r){case"hex":return S(this,e,t,n);case"utf8":case"utf-8":return k(this,e,t,n);case"ascii":case"latin1":case"binary":return I(this,e,t,n);case"base64":return P(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const T=4096;function L(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function R(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function N(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=ee[e[r]];return i}function x(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function M(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function D(e,t,n,r,i,o){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function B(e,t,n,r,i){q(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function U(e,t,n,r,i){q(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function j(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function F(e,t,n,r,i){return t=+t,n>>>=0,i||j(e,0,n,4),a.write(e,t,n,r,23,4),n+4}function $(e,t,n,r,i){return t=+t,n>>>=0,i||j(e,0,n,8),a.write(e,t,n,r,52,8),n+8}h.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,h.prototype),r},h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return r},h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e>>>=0,t||M(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e>>>=0,t||M(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e>>>=0,t||M(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e>>>=0,t||M(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e>>>=0,t||M(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readBigUInt64LE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),h.prototype.readBigUInt64BE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),h.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},h.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let r=t,i=1,o=this[e+--r];for(;r>0&&(i*=256);)o+=this[e+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},h.prototype.readInt8=function(e,t){return e>>>=0,t||M(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){e>>>=0,t||M(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(e,t){e>>>=0,t||M(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(e,t){return e>>>=0,t||M(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return e>>>=0,t||M(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readBigInt64LE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),h.prototype.readBigInt64BE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),h.prototype.readFloatLE=function(e,t){return e>>>=0,t||M(e,4,this.length),a.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return e>>>=0,t||M(e,4,this.length),a.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return e>>>=0,t||M(e,8,this.length),a.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return e>>>=0,t||M(e,8,this.length),a.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){D(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){D(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,1,255,0),this[t]=255&e,t+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigUInt64LE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=te((function(e,t=0){return U(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);D(this,e,t,n,r-1,-r)}let i=0,o=1,s=0;for(this[t]=255&e;++i<n&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+n},h.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);D(this,e,t,n,r-1,-r)}let i=n-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+n},h.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},h.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigInt64LE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=te((function(e,t=0){return U(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(e,t,n){return F(this,e,t,!0,n)},h.prototype.writeFloatBE=function(e,t,n){return F(this,e,t,!1,n)},h.prototype.writeDoubleLE=function(e,t,n){return $(this,e,t,!0,n)},h.prototype.writeDoubleBE=function(e,t,n){return $(this,e,t,!1,n)},h.prototype.copy=function(e,t,n,r){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},h.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!h.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const o=h.isBuffer(e)?e:h.from(e,r),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=o[i%s]}return this};const H={};function V(e,t,n){H[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function W(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function q(e,t,n,r,i,o){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(o+1)}${r}`:`>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new H.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||K(t,e.length-(n+1))}(r,i,o)}function z(e,t){if("number"!=typeof e)throw new H.ERR_INVALID_ARG_TYPE(t,"number",e)}function K(e,t,n){if(Math.floor(e)!==e)throw z(e,n),new H.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new H.ERR_BUFFER_OUT_OF_BOUNDS;throw new H.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}V("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),V("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),V("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=W(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=W(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const G=/[^+/0-9A-Za-z-_]/g;function J(e,t){let n;t=t||1/0;const r=e.length;let i=null;const o=[];for(let s=0;s<r;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Q(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(G,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function X(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function Y(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),o.register("hqZtu",(function(t,n){var r,i;e(t.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=h(e),i=r[0],o=r[1],u=new a(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),c=0,l=o>0?i-4:i;for(n=0;n<l;n+=4)t=s[e.charCodeAt(n)]<<18|s[e.charCodeAt(n+1)]<<12|s[e.charCodeAt(n+2)]<<6|s[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=s[e.charCodeAt(n)]<<2|s[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===o&&(t=s[e.charCodeAt(n)]<<10|s[e.charCodeAt(n+1)]<<4|s[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,a=0,u=n-r;a<u;a+=s)i.push(p(e,a,a+s>u?u:a+s));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],s[u.charCodeAt(c)]=c;function h(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function p(e,t,n){for(var r,i,s=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return s.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63})),o.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",(function(){return r}),(function(e){return r=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,h=n?i-1:0,p=n?-1:1,f=e[t+h];for(h+=p,o=f&(1<<-l)-1,f>>=-l,l+=a;l>0;o=256*o+e[t+h],h+=p,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+e[t+h],h+=p,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,r),o-=c}return(f?-1:1)*s*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,h=l>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,d=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),(t+=s+h>=1?p/u:p*Math.pow(2,1-h))*u>=2&&(s++,u/=2),s+h>=l?(a=0,s=l):s+h>=1?(a=(t*u-1)*Math.pow(2,i),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[n+f]=255&a,f+=d,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+f]=255&s,f+=d,s/=256,c-=8);e[n+f-d]|=128*g}})),o.register("9VVcb",(function(e,t){var n=o("2bBga"),r=o("1TQad"),i=o("kTwUV"),s=o("2RNjJ"),a=o("1ZTQa"),u=o("9cPEm"),c=o("g3yOT"),l=o("2wfLM"),h=o("121rJ"),p=o("83xK9"),f=o("8wMQb");e.exports=function(e){return new Promise((function(t,o){var d,g=e.data,m=e.headers,v=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}n.isFormData(g)&&n.isStandardBrowserEnv()&&delete m["Content-Type"];var _=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+w)}var E=a(e.baseURL,e.url);function S(){if(_){var n="getAllResponseHeaders"in _?u(_.getAllResponseHeaders()):null,i={data:v&&"text"!==v&&"json"!==v?_.response:_.responseText,status:_.status,statusText:_.statusText,headers:n,config:e,request:_};r((function(e){t(e),y()}),(function(e){o(e),y()}),i),_=null}}if(_.open(e.method.toUpperCase(),s(E,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,"onloadend"in _?_.onloadend=S:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(S)},_.onabort=function(){_&&(o(new h("Request aborted",h.ECONNABORTED,e,_)),_=null)},_.onerror=function(){o(new h("Network Error",h.ERR_NETWORK,e,_,_)),_=null},_.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new h(t,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,_)),_=null},n.isStandardBrowserEnv()){var k=(e.withCredentials||c(E))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;k&&(m[e.xsrfHeaderName]=k)}"setRequestHeader"in _&&n.forEach(m,(function(e,t){void 0===g&&"content-type"===t.toLowerCase()?delete m[t]:_.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(_.withCredentials=!!e.withCredentials),v&&"json"!==v&&(_.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){_&&(o(!e||e&&e.type?new p:e),_.abort(),_=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),g||(g=null);var I=f(E);I&&-1===["http","https","file"].indexOf(I)?o(new h("Unsupported protocol "+I+":",h.ERR_BAD_REQUEST,e)):_.send(g)}))}})),o.register("1TQad",(function(e,t){var n=o("121rJ");e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),o.register("kTwUV",(function(e,t){var n=o("2bBga");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(i)&&a.push("path="+i),n.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("1ZTQa",(function(e,t){var n=o("iUwU6"),r=o("91vFE");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}})),o.register("iUwU6",(function(e,t){e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("91vFE",(function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("9cPEm",(function(e,t){var n=o("2bBga"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,s={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),i=n.trim(e.substr(o+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([i]):s[t]?s[t]+", "+i:i}})),s):s}})),o.register("g3yOT",(function(e,t){var n=o("2bBga");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),o.register("83xK9",(function(e,t){var n=o("121rJ");function r(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o("2bBga").inherits(r,n,{__CANCEL__:!0}),e.exports=r})),o.register("8wMQb",(function(e,t){e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("1gvAv",(function(e,t){e.exports=null})),o.register("ksuZT",(function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("d0EKm",(function(e,t){var n=o("2bBga");e.exports=function(e,t){t=t||{};var r={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(void 0,t[r])}function u(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);n.isUndefined(i)&&t!==u||(r[e]=i)})),r}})),o.register("6zj0X",(function(e,t){var n=o("50GW0").version,r=o("121rJ"),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};i.transitional=function(e,t,i){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(i?". "+i:"")}return function(n,i,a){if(!1===e)throw new r(o(i," has been removed"+(t?" in "+t:"")),r.ERR_DEPRECATED);return t&&!s[i]&&(s[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new r("options must be an object",r.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),o=i.length;o-- >0;){var s=i[o],a=t[s];if(a){var u=e[s],c=void 0===u||a(u,s,e);if(!0!==c)throw new r("option "+s+" must be "+c,r.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new r("Unknown option "+s,r.ERR_BAD_OPTION)}},validators:i}})),o.register("50GW0",(function(e,t){e.exports={version:"0.27.2"}})),o.register("2sjhC",(function(e,t){var n=o("83xK9");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r})),o.register("av9gA",(function(e,t){e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("gNhGc",(function(e,t){var n=o("2bBga");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),o.register("9QQ9J",(function(t,n){var r,i,s;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e})),e(t.exports,"SourceMapConsumer",(function(){return i}),(function(e){return i=e})),e(t.exports,"SourceNode",(function(){return s}),(function(e){return s=e})),r=o("ic7WM").SourceMapGenerator,i=o("lbXUp").SourceMapConsumer,s=o("Tx9qF").SourceNode})),o.register("ic7WM",(function(t,n){var r;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e}));var i=o("duvZU"),s=o("dQK2c"),a=o("lSTHk").ArraySet,u=o("2EyUB").MappingList;function c(e){e||(e={}),this._file=s.getArg(e,"file",null),this._sourceRoot=s.getArg(e,"sourceRoot",null),this._skipValidation=s.getArg(e,"skipValidation",!1),this._sources=new a,this._names=new a,this._mappings=new u,this._sourcesContents=null}c.prototype._version=3,c.fromSourceMap=function(e){var t=e.sourceRoot,n=new c({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=s.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(r){var i=r;null!==t&&(i=s.relative(t,r)),n._sources.has(i)||n._sources.add(i);var o=e.sourceContentFor(r);null!=o&&n.setSourceContent(r,o)})),n},c.prototype.addMapping=function(e){var t=s.getArg(e,"generated"),n=s.getArg(e,"original",null),r=s.getArg(e,"source",null),i=s.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},c.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=s.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[s.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[s.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},c.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=s.relative(i,r));var o=new a,u=new a;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var a=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=a.source&&(t.source=a.source,null!=n&&(t.source=s.join(n,t.source)),null!=i&&(t.source=s.relative(i,t.source)),t.originalLine=a.line,t.originalColumn=a.column,null!=a.name&&(t.name=a.name))}var c=t.source;null==c||o.has(c)||o.add(c);var l=t.name;null==l||u.has(l)||u.add(l)}),this),this._sources=o,this._names=u,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=s.join(n,t)),null!=i&&(t=s.relative(i,t)),this.setSourceContent(t,r))}),this)},c.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},c.prototype._serializeMappings=function(){for(var e,t,n,r,o=0,a=1,u=0,c=0,l=0,h=0,p="",f=this._mappings.toArray(),d=0,g=f.length;d<g;d++){if(e="",(t=f[d]).generatedLine!==a)for(o=0;t.generatedLine!==a;)e+=";",a++;else if(d>0){if(!s.compareByGeneratedPositionsInflated(t,f[d-1]))continue;e+=","}e+=i.encode(t.generatedColumn-o),o=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=i.encode(r-h),h=r,e+=i.encode(t.originalLine-1-c),c=t.originalLine-1,e+=i.encode(t.originalColumn-u),u=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=i.encode(n-l),l=n)),p+=e}return p},c.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=s.relative(t,e));var n=s.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},c.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},c.prototype.toString=function(){return JSON.stringify(this.toJSON())},r=c})),o.register("duvZU",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var s=o("iJ1ZV");r=function(e){var t,n="",r=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&r,(r>>>=5)>0&&(t|=32),n+=s.encode(t)}while(r>0);return n},i=function(e,t,n){var r,i,o,a,u=e.length,c=0,l=0;do{if(t>=u)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=s.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&i),c+=(i&=31)<<l,l+=5}while(r);n.value=(a=(o=c)>>1,1==(1&o)?-a:a),n.rest=t}})),o.register("iJ1ZV",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");r=function(e){if(0<=e&&e<o.length)return o[e];throw new TypeError("Must be between 0 and 63: "+e)},i=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}})),o.register("dQK2c",(function(t,n){var r,i,o,s,a,u,c,l,h,p,f,d,g;e(t.exports,"getArg",(function(){return r}),(function(e){return r=e})),e(t.exports,"urlParse",(function(){return i}),(function(e){return i=e})),e(t.exports,"isAbsolute",(function(){return a}),(function(e){return a=e})),e(t.exports,"normalize",(function(){return o}),(function(e){return o=e})),e(t.exports,"join",(function(){return s}),(function(e){return s=e})),e(t.exports,"relative",(function(){return u}),(function(e){return u=e})),e(t.exports,"toSetString",(function(){return c}),(function(e){return c=e})),e(t.exports,"fromSetString",(function(){return l}),(function(e){return l=e})),e(t.exports,"compareByOriginalPositions",(function(){return h}),(function(e){return h=e})),e(t.exports,"compareByGeneratedPositionsDeflated",(function(){return p}),(function(e){return p=e})),e(t.exports,"compareByGeneratedPositionsInflated",(function(){return f}),(function(e){return f=e})),e(t.exports,"parseSourceMapInput",(function(){return d}),(function(e){return d=e})),e(t.exports,"computeSourceURL",(function(){return g}),(function(e){return g=e})),r=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var m=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,v=/^data:.+\,.+$/;function y(e){var t=e.match(m);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function _(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function b(e){var t=e,n=y(e);if(n){if(!n.path)return e;t=n.path}for(var r,i=a(t),o=t.split(/\/+/),s=0,u=o.length-1;u>=0;u--)"."===(r=o[u])?o.splice(u,1):".."===r?s++:s>0&&(""===r?(o.splice(u+1,s),s=0):(o.splice(u,2),s--));return""===(t=o.join("/"))&&(t=i?"/":"."),n?(n.path=t,_(n)):t}function w(e,t){""===e&&(e="."),""===t&&(t=".");var n=y(t),r=y(e);if(r&&(e=r.path||"/"),n&&!n.scheme)return r&&(n.scheme=r.scheme),_(n);if(n||t.match(v))return t;if(r&&!r.host&&!r.path)return r.host=t,_(r);var i="/"===t.charAt(0)?t:b(e.replace(/\/+$/,"")+"/"+t);return r?(r.path=i,_(r)):i}i=y,o=b,s=w,a=function(e){return"/"===e.charAt(0)||m.test(e)},u=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var E=!("__proto__"in Object.create(null));function S(e){return e}function k(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function I(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}c=E?S:function(e){return k(e)?"$"+e:e},l=E?S:function(e){return k(e)?e.slice(1):e},h=function(e,t,n){var r=I(e.source,t.source);return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:I(e.name,t.name)},p=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=I(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:I(e.name,t.name)},f=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=I(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:I(e.name,t.name)},d=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},g=function(e,t,n){if(t=t||"",e&&("/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/"),t=e+t),n){var r=y(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var i=r.path.lastIndexOf("/");i>=0&&(r.path=r.path.substring(0,i+1))}t=w(_(r),t)}return b(t)}})),o.register("lSTHk",(function(t,n){var r;e(t.exports,"ArraySet",(function(){return r}),(function(e){return r=e}));var i=o("dQK2c"),s=Object.prototype.hasOwnProperty,a="undefined"!=typeof Map;function u(){this._array=[],this._set=a?new Map:Object.create(null)}u.fromArray=function(e,t){for(var n=new u,r=0,i=e.length;r<i;r++)n.add(e[r],t);return n},u.prototype.size=function(){return a?this._set.size:Object.getOwnPropertyNames(this._set).length},u.prototype.add=function(e,t){var n=a?e:i.toSetString(e),r=a?this.has(e):s.call(this._set,n),o=this._array.length;r&&!t||this._array.push(e),r||(a?this._set.set(e,o):this._set[n]=o)},u.prototype.has=function(e){if(a)return this._set.has(e);var t=i.toSetString(e);return s.call(this._set,t)},u.prototype.indexOf=function(e){if(a){var t=this._set.get(e);if(t>=0)return t}else{var n=i.toSetString(e);if(s.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},u.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},u.prototype.toArray=function(){return this._array.slice()},r=u})),o.register("2EyUB",(function(t,n){var r;e(t.exports,"MappingList",(function(){return r}),(function(e){return r=e}));var i=o("dQK2c");function s(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}s.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},s.prototype.add=function(e){var t,n,r,o,s,a;t=this._last,n=e,r=t.generatedLine,o=n.generatedLine,s=t.generatedColumn,a=n.generatedColumn,o>r||o==r&&a>=s||i.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},s.prototype.toArray=function(){return this._sorted||(this._array.sort(i.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},r=s})),o.register("lbXUp",(function(t,n){var r;e(t.exports,"SourceMapConsumer",(function(){return r}),(function(e){return r=e}));var i=o("dQK2c"),s=o("bTtvB"),a=o("lSTHk").ArraySet,u=o("duvZU"),c=o("76ffZ").quickSort;function l(e,t){var n=e;return"string"==typeof e&&(n=i.parseSourceMapInput(e)),null!=n.sections?new f(n,t):new h(n,t)}function h(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),o=i.getArg(n,"sources"),s=i.getArg(n,"names",[]),u=i.getArg(n,"sourceRoot",null),c=i.getArg(n,"sourcesContent",null),l=i.getArg(n,"mappings"),h=i.getArg(n,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);u&&(u=i.normalize(u)),o=o.map(String).map(i.normalize).map((function(e){return u&&i.isAbsolute(u)&&i.isAbsolute(e)?i.relative(u,e):e})),this._names=a.fromArray(s.map(String),!0),this._sources=a.fromArray(o,!0),this._absoluteSources=this._sources.toArray().map((function(e){return i.computeSourceURL(u,e,t)})),this.sourceRoot=u,this.sourcesContent=c,this._mappings=l,this._sourceMapURL=t,this.file=h}function p(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function f(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),o=i.getArg(n,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new a,this._names=new a;var s={line:-1,column:0};this._sections=o.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var n=i.getArg(e,"offset"),r=i.getArg(n,"line"),o=i.getArg(n,"column");if(r<s.line||r===s.line&&o<s.column)throw new Error("Section offsets must be ordered and non-overlapping.");return s=n,{generatedOffset:{generatedLine:r+1,generatedColumn:o+1},consumer:new l(i.getArg(e,"map"),t)}}))}l.fromSourceMap=function(e,t){return h.fromSourceMap(e,t)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,n){var r,o=t||null;switch(n||l.GENERATED_ORDER){case l.GENERATED_ORDER:r=this._generatedMappings;break;case l.ORIGINAL_ORDER:r=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var s=this.sourceRoot;r.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return{source:t=i.computeSourceURL(s,t,this._sourceMapURL),generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,o)},l.prototype.allGeneratedPositionsFor=function(e){var t=i.getArg(e,"line"),n={source:i.getArg(e,"source"),originalLine:t,originalColumn:i.getArg(e,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var r=[],o=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,s.LEAST_UPPER_BOUND);if(o>=0){var a=this._originalMappings[o];if(void 0===e.column)for(var u=a.originalLine;a&&a.originalLine===u;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o];else for(var c=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==c;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o]}return r},r=l,h.prototype=Object.create(l.prototype),h.prototype.consumer=l,h.prototype._findSourceIndex=function(e){var t,n=e;if(null!=this.sourceRoot&&(n=i.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);for(t=0;t<this._absoluteSources.length;++t)if(this._absoluteSources[t]==e)return t;return-1},h.fromSourceMap=function(e,t){var n=Object.create(h.prototype),r=n._names=a.fromArray(e._names.toArray(),!0),o=n._sources=a.fromArray(e._sources.toArray(),!0);n.sourceRoot=e._sourceRoot,n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=e._file,n._sourceMapURL=t,n._absoluteSources=n._sources.toArray().map((function(e){return i.computeSourceURL(n.sourceRoot,e,t)}));for(var s=e._mappings.toArray().slice(),u=n.__generatedMappings=[],l=n.__originalMappings=[],f=0,d=s.length;f<d;f++){var g=s[f],m=new p;m.generatedLine=g.generatedLine,m.generatedColumn=g.generatedColumn,g.source&&(m.source=o.indexOf(g.source),m.originalLine=g.originalLine,m.originalColumn=g.originalColumn,g.name&&(m.name=r.indexOf(g.name)),l.push(m)),u.push(m)}return c(n.__originalMappings,i.compareByOriginalPositions),n},h.prototype._version=3,Object.defineProperty(h.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),h.prototype._parseMappings=function(e,t){for(var n,r,o,s,a,l=1,h=0,f=0,d=0,g=0,m=0,v=e.length,y=0,_={},b={},w=[],E=[];y<v;)if(";"===e.charAt(y))l++,y++,h=0;else if(","===e.charAt(y))y++;else{for((n=new p).generatedLine=l,s=y;s<v&&!this._charIsMappingSeparator(e,s);s++);if(o=_[r=e.slice(y,s)])y+=r.length;else{for(o=[];y<s;)u.decode(e,y,b),a=b.value,y=b.rest,o.push(a);if(2===o.length)throw new Error("Found a source, but no line and column");if(3===o.length)throw new Error("Found a source and line, but no column");_[r]=o}n.generatedColumn=h+o[0],h=n.generatedColumn,o.length>1&&(n.source=g+o[1],g+=o[1],n.originalLine=f+o[2],f=n.originalLine,n.originalLine+=1,n.originalColumn=d+o[3],d=n.originalColumn,o.length>4&&(n.name=m+o[4],m+=o[4])),E.push(n),"number"==typeof n.originalLine&&w.push(n)}c(E,i.compareByGeneratedPositionsDeflated),this.__generatedMappings=E,c(w,i.compareByOriginalPositions),this.__originalMappings=w},h.prototype._findMapping=function(e,t,n,r,i,o){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return s.search(e,t,i,o)},h.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},h.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",i.compareByGeneratedPositionsDeflated,i.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(n>=0){var r=this._generatedMappings[n];if(r.generatedLine===t.generatedLine){var o=i.getArg(r,"source",null);null!==o&&(o=this._sources.at(o),o=i.computeSourceURL(this.sourceRoot,o,this._sourceMapURL));var s=i.getArg(r,"name",null);return null!==s&&(s=this._names.at(s)),{source:o,line:i.getArg(r,"originalLine",null),column:i.getArg(r,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},h.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},h.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;var n=this._findSourceIndex(e);if(n>=0)return this.sourcesContent[n];var r,o=e;if(null!=this.sourceRoot&&(o=i.relative(this.sourceRoot,o)),null!=this.sourceRoot&&(r=i.urlParse(this.sourceRoot))){var s=o.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(s))return this.sourcesContent[this._sources.indexOf(s)];if((!r.path||"/"==r.path)&&this._sources.has("/"+o))return this.sourcesContent[this._sources.indexOf("/"+o)]}if(t)return null;throw new Error('"'+o+'" is not in the SourceMap.')},h.prototype.generatedPositionFor=function(e){var t=i.getArg(e,"source");if((t=this._findSourceIndex(t))<0)return{line:null,column:null,lastColumn:null};var n={source:t,originalLine:i.getArg(e,"line"),originalColumn:i.getArg(e,"column")},r=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,i.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(r>=0){var o=this._originalMappings[r];if(o.source===n.source)return{line:i.getArg(o,"generatedLine",null),column:i.getArg(o,"generatedColumn",null),lastColumn:i.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},f.prototype=Object.create(l.prototype),f.prototype.constructor=l,f.prototype._version=3,Object.defineProperty(f.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),f.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=s.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),r=this._sections[n];return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},f.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},f.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},f.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer._findSourceIndex(i.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},f.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],o=r.consumer._generatedMappings,s=0;s<o.length;s++){var a=o[s],u=r.consumer._sources.at(a.source);u=i.computeSourceURL(r.consumer.sourceRoot,u,this._sourceMapURL),this._sources.add(u),u=this._sources.indexOf(u);var l=null;a.name&&(l=r.consumer._names.at(a.name),this._names.add(l),l=this._names.indexOf(l));var h={source:u,generatedLine:a.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:a.generatedColumn+(r.generatedOffset.generatedLine===a.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:a.originalLine,originalColumn:a.originalColumn,name:l};this.__generatedMappings.push(h),"number"==typeof h.originalLine&&this.__originalMappings.push(h)}c(this.__generatedMappings,i.compareByGeneratedPositionsDeflated),c(this.__originalMappings,i.compareByOriginalPositions)}})),o.register("bTtvB",(function(t,n){var r,i,o;function s(e,t,n,r,o,a){var u=Math.floor((t-e)/2)+e,c=o(n,r[u],!0);return 0===c?u:c>0?t-u>1?s(u,t,n,r,o,a):a==i?t<r.length?t:-1:u:u-e>1?s(e,u,n,r,o,a):a==i?u:e<0?-1:e}e(t.exports,"GREATEST_LOWER_BOUND",(function(){return r}),(function(e){return r=e})),e(t.exports,"LEAST_UPPER_BOUND",(function(){return i}),(function(e){return i=e})),e(t.exports,"search",(function(){return o}),(function(e){return o=e})),r=1,i=2,o=function(e,t,n,i){if(0===t.length)return-1;var o=s(-1,t.length,e,t,n,i||r);if(o<0)return-1;for(;o-1>=0&&0===n(t[o],t[o-1],!0);)--o;return o}})),o.register("76ffZ",(function(t,n){var r;function i(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function o(e,t,n,r){if(n<r){var s=n-1;i(e,(l=n,h=r,Math.round(l+Math.random()*(h-l))),r);for(var a=e[r],u=n;u<r;u++)t(e[u],a)<=0&&i(e,s+=1,u);i(e,s+1,u);var c=s+1;o(e,t,n,c-1),o(e,t,c+1,r)}var l,h}e(t.exports,"quickSort",(function(){return r}),(function(e){return r=e})),r=function(e,t){o(e,t,0,e.length-1)}})),o.register("Tx9qF",(function(t,n){var r;e(t.exports,"SourceNode",(function(){return r}),(function(e){return r=e}));var i=o("ic7WM").SourceMapGenerator,s=o("dQK2c"),a=/(\r?\n)/;function u(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==i?null:i,this.$$$isSourceNode$$$=!0,null!=r&&this.add(r)}u.fromStringWithSourceMap=function(e,t,n){var r=new u,i=e.split(a),o=0,c=function(){return e()+(e()||"");function e(){return o<i.length?i[o++]:void 0}},l=1,h=0,p=null;return t.eachMapping((function(e){if(null!==p){if(!(l<e.generatedLine)){var t=(n=i[o]||"").substr(0,e.generatedColumn-h);return i[o]=n.substr(e.generatedColumn-h),h=e.generatedColumn,f(p,t),void(p=e)}f(p,c()),l++,h=0}for(;l<e.generatedLine;)r.add(c()),l++;if(h<e.generatedColumn){var n=i[o]||"";r.add(n.substr(0,e.generatedColumn)),i[o]=n.substr(e.generatedColumn),h=e.generatedColumn}p=e}),this),o<i.length&&(p&&f(p,c()),r.add(i.splice(o).join(""))),t.sources.forEach((function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=s.join(n,e)),r.setSourceContent(e,i))})),r;function f(e,t){if(null===e||void 0===e.source)r.add(t);else{var i=n?s.join(n,e.source):e.source;r.add(new u(e.originalLine,e.originalColumn,i,t,e.name))}}},u.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},u.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},u.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n]).$$$isSourceNode$$$?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},u.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},u.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n.$$$isSourceNode$$$?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},u.prototype.setSourceContent=function(e,t){this.sourceContents[s.toSetString(e)]=t},u.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t].$$$isSourceNode$$$&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(s.fromSetString(r[t]),this.sourceContents[r[t]])},u.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},u.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new i(e),r=!1,o=null,s=null,a=null,u=null;return this.walk((function(e,i){t.code+=e,null!==i.source&&null!==i.line&&null!==i.column?(o===i.source&&s===i.line&&a===i.column&&u===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name}),o=i.source,s=i.line,a=i.column,u=i.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),o=null,r=!1);for(var c=0,l=e.length;c<l;c++)10===e.charCodeAt(c)?(t.line++,t.column=0,c+1===l?(o=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},r=u})),o.register("5Io6y",(function(e,t){}));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var a;a=o("bRlFp");class u{async getGenres(){const e={api_key:u.KEY,language:"en-US"},n=await t(a).get(u.BASE_URL+"genre/movie/list",{params:e}),{genres:r}=n.data;this.genresMap=r.reduce(((e,t)=>({...e,[t.id]:t.name})),{})}async fetchMovies(){const e=""===this.searchQuery?"trending/movie/week":"search/movie",n={api_key:u.KEY,page:this.page};""!==this.searchQuery&&(n.query=this.searchQuery);return(await t(a).get(u.BASE_URL+e,{params:n})).data}async fetchMovie(e){const n=`movie/${e}`,r={api_key:u.KEY};return(await t(a).get(u.BASE_URL+n,{params:r})).data}set query(e){this.searchQuery=e}set currentPage(e){this.page=e}resetPage(){this.page=1}constructor(){this.searchQuery="",this.page=1,this.genresMap=[]}}t(s)(u,"KEY","e8f4d647cde955cba1306001955cfd97"),t(s)(u,"BASE_URL","https://api.themoviedb.org/3/");var c=o("5SV25"),l=o("krGWQ"),h=o("22sps"),p=o("99kNq"),f=o("8Ftgf");l=o("krGWQ");l=o("krGWQ");function d(){l.default.spinner.classList.remove("done"),setTimeout((()=>{l.default.spinner.classList.add("done")}),500)}document.body.onload=d;var g=o("dpZmf");l.default.searchForm.addEventListener("submit",(function(e){e.preventDefault(),d(),l.default.errorOutput.classList.add("visually-hidden");const t=e.currentTarget.searchQuery.value;m.query=t.trim(),m.resetPage(),v()})),l.default.paginationContainer.addEventListener("click",(function(e){(0,g.default)();const t=e.target.closest("button");if(!t)return;t.dataset.page&&(m.currentPage=Number(t.dataset.page));t.dataset.pageStep&&(m.currentPage=m.page+Number(t.dataset.pageStep));v()})),l.default.moviesContainer.addEventListener("click",(async function(e){const t=e.target.closest("li");if(!t)return;try{const e=Number(t.dataset.movieId),n=await m.fetchMovie(e);(0,p.default)(n)}catch(e){console.log(e)}}));const m=new u;async function v(){try{const{results:e,page:t,total_pages:n}=await m.fetchMovies();if(0===e.length)return l.default.errorOutput.classList.remove("visually-hidden"),m.query="",void v();!function(e){const t=(0,f.decodeMoviesGenres)(e,m.genresMap);l.default.moviesContainer.innerHTML=(0,c.default)(t)}(e),(0,h.default)(t,n,l.default.paginationContainer)}catch(e){console.log("this is error!",e)}}m.getGenres(),v();var y={};function _(e){return e&&e.__esModule?e:{default:e}}y.__esModule=!0;var b={};function w(e){return e&&e.__esModule?e:{default:e}}function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}b.__esModule=!0;var S,k,I,P,O,C,A,T,L,R={};function N(e){return e&&e.__esModule?e:{default:e}}e(R,"__esModule",(function(){return S}),(function(e){return S=e})),e(R,"HandlebarsEnvironment",(function(){return k}),(function(e){return k=e})),e(R,"VERSION",(function(){return I}),(function(e){return I=e})),e(R,"COMPILER_REVISION",(function(){return P}),(function(e){return P=e})),e(R,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return O}),(function(e){return O=e})),e(R,"REVISION_CHANGES",(function(){return C}),(function(e){return C=e})),e(R,"log",(function(){return A}),(function(e){return A=e})),e(R,"createFrame",(function(){return T}),(function(e){return T=e})),e(R,"logger",(function(){return L}),(function(e){return L=e})),S=!0,k=je;var x,M,D,B,U,j,F,$,H,V,W,q={};e(q,"__esModule",(function(){return x}),(function(e){return x=e})),e(q,"extend",(function(){return M}),(function(e){return M=e})),e(q,"indexOf",(function(){return D}),(function(e){return D=e})),e(q,"escapeExpression",(function(){return B}),(function(e){return B=e})),e(q,"isEmpty",(function(){return U}),(function(e){return U=e})),e(q,"createFrame",(function(){return j}),(function(e){return j=e})),e(q,"blockParams",(function(){return F}),(function(e){return F=e})),e(q,"appendContextPath",(function(){return $}),(function(e){return $=e})),e(q,"toString",(function(){return H}),(function(e){return H=e})),e(q,"isFunction",(function(){return V}),(function(e){return V=e})),e(q,"isArray",(function(){return W}),(function(e){return W=e})),x=!0,M=Q,D=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},B=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return G.test(e)?e.replace(K,J):e},U=function(e){return!e&&0!==e||!(!Z(e)||0!==e.length)},j=function(e){var t=Q({},e);return t._parent=e,t},F=function(e,t){return e.path=t,e},$=function(e,t){return(e?e+".":"")+t};var z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},K=/[&<>"'`=]/g,G=/[&<>"'`=]/;function J(e){return z[e]}function Q(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var X=Object.prototype.toString;H=X;var Y=function(e){return"function"==typeof e};Y(/x/)&&(V=Y=function(e){return"function"==typeof e&&"[object Function]"===X.call(e)}),V=Y;var Z=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===X.call(e)};W=Z;var ee={__esModule:!0},te=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function ne(e,t){var n=t&&t.loc,r=void 0,i=void 0,o=void 0,s=void 0;n&&(r=n.start.line,i=n.end.line,o=n.start.column,s=n.end.column,e+=" - "+r+":"+o);for(var a=Error.prototype.constructor.call(this,e),u=0;u<te.length;u++)this[te[u]]=a[te[u]];Error.captureStackTrace&&Error.captureStackTrace(this,ne);try{n&&(this.lineNumber=r,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:o,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=o,this.endColumn=s))}catch(e){}}ne.prototype=new Error,ee.default=ne;var re,ie,oe=N(ee=ee.default);function se(e){return e&&e.__esModule?e:{default:e}}re=function(e){ue.default(e),pe.default(e),ge.default(e),ye.default(e),be.default(e),Ee.default(e),Pe.default(e)},ie=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var ae={__esModule:!0,default:function(e){e.registerHelper("blockHelperMissing",(function(t,n){var r=n.inverse,i=n.fn;if(!0===t)return i(this);if(!1===t||null==t)return r(this);if(W(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){var o=j(n.data);o.contextPath=$(n.data.contextPath,n.name),n={data:o}}return i(t,n)}))}},ue=se(ae=ae.default),ce={};ce.__esModule=!0;var le,he=(le=ee)&&le.__esModule?le:{default:le};ce.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new he.default("Must pass iterator to #each");var r,i=t.fn,o=t.inverse,s=0,a="",u=void 0,c=void 0;function l(t,n,r){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!r,c&&(u.contextPath=c+t)),a+=i(e[t],{data:u,blockParams:F([e[t],t],[c+t,null])})}if(t.data&&t.ids&&(c=$(t.data.contextPath,t.ids[0])+"."),V(e)&&(e=e.call(this)),t.data&&(u=j(t.data)),e&&"object"==typeof e)if(W(e))for(var h=e.length;s<h;s++)s in e&&l(s,s,s===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var p=[],f=e[n.Symbol.iterator](),d=f.next();!d.done;d=f.next())p.push(d.value);for(h=(e=p).length;s<h;s++)l(s,s,s===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&l(r,s-1),r=e,s++})),void 0!==r&&l(r,s-1,!0);return 0===s&&(a=o(this)),a}))};var pe=se(ce=ce.default),fe={};fe.__esModule=!0;var de=function(e){return e&&e.__esModule?e:{default:e}}(ee);fe.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new de.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))};var ge=se(fe=fe.default),me={};me.__esModule=!0;var ve=function(e){return e&&e.__esModule?e:{default:e}}(ee);me.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new ve.default("#if requires exactly one argument");return V(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||U(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new ve.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))};var ye=se(me=me.default),_e={__esModule:!0,default:function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),t[0]=i,e.log.apply(e,t)}))}},be=se(_e=_e.default),we={__esModule:!0,default:function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}},Ee=se(we=we.default),Se={};Se.__esModule=!0;var ke=function(e){return e&&e.__esModule?e:{default:e}}(ee);Se.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new ke.default("#with requires exactly one argument");V(e)&&(e=e.call(this));var n=t.fn;if(U(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=j(t.data)).contextPath=$(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:F([e],[r&&r.contextPath])})}))};var Ie,Pe=se(Se=Se.default);Ie=function(e){Ce.default(e)};var Oe={__esModule:!0,default:function(e){e.registerDecorator("inline",(function(e,t,n,r){var i=e;return t.partials||(t.partials={},i=function(r,i){var o=n.partials;n.partials=M({},o,t.partials);var s=e(r,i);return n.partials=o,s}),t.partials[r.args[0]]=r.fn,i}))}},Ce=function(e){return e&&e.__esModule?e:{default:e}}(Oe=Oe.default);var Ae={__esModule:!0},Te={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=D(Te.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=Te.lookupLevel(e),"undefined"!=typeof console&&Te.lookupLevel(Te.level)<=e){var t=Te.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[t].apply(console,r)}}};Ae.default=Te;var Le,Re,Ne,xe,Me=N(Ae=Ae.default);Le=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:xe(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:xe(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},Re=function(e,t,n){return Ue("function"==typeof e?t.methods:t.properties,n)},Ne=function(){Object.keys(Be).forEach((function(e){delete Be[e]}))},xe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return M.apply(void 0,[Object.create(null)].concat(t))};var De=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(Ae),Be=Object.create(null);function Ue(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==Be[e]&&(Be[e]=!0,De.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}I="4.7.7";P=8;O=7;C={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function je(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},re(this),Ie(this)}je.prototype={constructor:je,logger:Me.default,log:Me.default.log,registerHelper:function(e,t){if("[object Object]"===H.call(e)){if(t)throw new oe.default("Arg not supported with multiple helpers");M(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===H.call(e))M(this.partials,e);else{if(void 0===t)throw new oe.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===H.call(e)){if(t)throw new oe.default("Arg not supported with multiple decorators");M(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){Ne()}};var Fe=Me.default.log;A=Fe,T=j,L=Me.default;var $e=E(R),He={};function Ve(e){this.string=e}He.__esModule=!0,Ve.prototype.toString=Ve.prototype.toHTML=function(){return""+this.string},He.default=Ve;var We,qe,ze,Ke,Ge,Je,Qe,Xe=w(He=He.default),Ye=w(ee),Ze=E(q),et={};e(et,"__esModule",(function(){return We}),(function(e){return We=e})),e(et,"checkRevision",(function(){return qe}),(function(e){return qe=e})),e(et,"template",(function(){return ze}),(function(e){return ze=e})),e(et,"wrapProgram",(function(){return Ke}),(function(e){return Ke=e})),e(et,"resolvePartial",(function(){return Ge}),(function(e){return Ge=e})),e(et,"invokePartial",(function(){return Je}),(function(e){return Je=e})),e(et,"noop",(function(){return Qe}),(function(e){return Qe=e})),We=!0,qe=function(e){var t=e&&e[0]||1,n=P;if(t>=O&&t<=P)return;if(t<O){var r=C[n],i=C[t];throw new rt.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new rt.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},ze=function(e,t){if(!t)throw new rt.default("No environment passed to template");if(!e||!e.main)throw new rt.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!e||!(t in e))throw new rt.default('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||Re(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,i=0;i<n;i++){if(null!=(e[i]&&r.lookupProperty(e[i],t)))return e[i][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:nt.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=nt.extend({},r,i.hash),i.ids&&(i.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,i);var o=nt.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=t.VM.invokePartial.call(this,n,r,o);if(null==s&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),s=i.partials[i.name](r,o)),null!=s){if(i.indent){for(var a=s.split("\n"),u=0,c=a.length;u<c&&(a[u]||u+1!==c);u++)a[u]=i.indent+a[u];s=a.join("\n")}return s}throw new rt.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,i){var o=this.programs[e],s=this.fn(e);return t||i||r||n?o=it(this,e,s,t,n,r,i):o||(o=this.programs[e]=it(this,e,s)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=nt.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n.data;i._setup(n),!n.partial&&e.useData&&(o=st(t,o));var s=void 0,a=e.useBlockParams?[]:void 0;function u(t){return""+e.main(r,t,r.helpers,r.partials,o,a,s)}return e.useDepths&&(s=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(u=at(e.main,u,r,n.depths||[],o,a))(t,n)}return i.isTop=!0,i._setup=function(i){if(i.partial)r.protoAccessControl=i.protoAccessControl,r.helpers=i.helpers,r.partials=i.partials,r.decorators=i.decorators,r.hooks=i.hooks;else{var o=nt.extend({},t.helpers,i.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return tt(e,(function(e){return nt.extend({lookupProperty:n},e)}))}(r,t)}))}(o,r),r.helpers=o,e.usePartial&&(r.partials=r.mergeIfNeeded(i.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=nt.extend({},t.decorators,i.decorators)),r.hooks={},r.protoAccessControl=Le(i);var s=i.allowCallsToHelperMissing||n;ie(r,"helperMissing",s),ie(r,"blockHelperMissing",s)}},i._child=function(t,n,i,o){if(e.useBlockParams&&!i)throw new rt.default("must pass block params");if(e.useDepths&&!o)throw new rt.default("must pass parent depths");return it(r,t,e[t],n,0,i,o)},i},Ke=it,Ge=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},Je=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==ot&&function(){n.data=T(n.data);var e=n.fn;i=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=T(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=nt.extend({},n.partials,e.partials))}();void 0===e&&i&&(e=i);if(void 0===e)throw new rt.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},Qe=ot;var tt,nt=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(q),rt=function(e){return e&&e.__esModule?e:{default:e}}(ee);function it(e,t,n,r,i,o,s){function a(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=s;return!s||t==s[0]||t===e.nullContext&&null===s[0]||(a=[t].concat(s)),n(e,t,e.helpers,e.partials,i.data||r,o&&[i.blockParams].concat(o),a)}return(a=at(n,a,e,s,r,o)).program=t,a.depth=s?s.length:0,a.blockParams=i||0,a}function ot(){return""}function st(e,t){return t&&"root"in t||((t=t?T(t):{}).root=e),t}function at(e,t,n,r,i,o){if(e.decorator){var s={};t=e.decorator(t,s,n,r&&r[0],i,o,r),nt.extend(t,s)}return t}tt=function(e,t){if("function"!=typeof e)return e;return function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}};var ut=E(et),ct={__esModule:!0,default:function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}}},lt=w(ct=ct.default);function ht(){var e=new $e.HandlebarsEnvironment;return Ze.extend(e,$e),e.SafeString=Xe.default,e.Exception=Ye.default,e.Utils=Ze,e.escapeExpression=Ze.escapeExpression,e.VM=ut,e.template=function(t){return ut.template(t,e)},e}var pt=ht();pt.create=ht,lt.default(pt),pt.default=pt,b.default=pt;var ft=_(b=b.default),dt={__esModule:!0},gt={helpers:{helperExpression:function(e){return"SubExpression"===e.type||("MustacheStatement"===e.type||"BlockStatement"===e.type)&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return 1===e.parts.length&&!gt.helpers.scopedId(e)&&!e.depth}}};dt.default=gt;var mt,vt,yt,_t=_(dt=dt.default);function bt(e){return e&&e.__esModule?e:{default:e}}mt=rn,vt=function(e,t){var n=rn(e,t);return new Gt.default(t).accept(n)};var wt={__esModule:!0},Et=function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(e,t,n,r,i,o,s){var a=o.length-1;switch(i){case 1:return o[a-1];case 2:this.$=r.prepareProgram(o[a]);break;case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=o[a];break;case 9:this.$={type:"CommentStatement",value:r.stripComment(o[a]),strip:r.stripFlags(o[a],o[a]),loc:r.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:o[a],value:o[a],loc:r.locInfo(this._$)};break;case 11:this.$=r.prepareRawBlock(o[a-2],o[a-1],o[a],this._$);break;case 12:this.$={path:o[a-3],params:o[a-2],hash:o[a-1]};break;case 13:this.$=r.prepareBlock(o[a-3],o[a-2],o[a-1],o[a],!1,this._$);break;case 14:this.$=r.prepareBlock(o[a-3],o[a-2],o[a-1],o[a],!0,this._$);break;case 15:this.$={open:o[a-5],path:o[a-4],params:o[a-3],hash:o[a-2],blockParams:o[a-1],strip:r.stripFlags(o[a-5],o[a])};break;case 16:case 17:this.$={path:o[a-4],params:o[a-3],hash:o[a-2],blockParams:o[a-1],strip:r.stripFlags(o[a-5],o[a])};break;case 18:this.$={strip:r.stripFlags(o[a-1],o[a-1]),program:o[a]};break;case 19:var u=r.prepareBlock(o[a-2],o[a-1],o[a],o[a],!1,this._$),c=r.prepareProgram([u],o[a-1].loc);c.chained=!0,this.$={strip:o[a-2].strip,program:c,chain:!0};break;case 21:this.$={path:o[a-1],strip:r.stripFlags(o[a-2],o[a])};break;case 22:case 23:this.$=r.prepareMustache(o[a-3],o[a-2],o[a-1],o[a-4],r.stripFlags(o[a-4],o[a]),this._$);break;case 24:this.$={type:"PartialStatement",name:o[a-3],params:o[a-2],hash:o[a-1],indent:"",strip:r.stripFlags(o[a-4],o[a]),loc:r.locInfo(this._$)};break;case 25:this.$=r.preparePartialBlock(o[a-2],o[a-1],o[a],this._$);break;case 26:this.$={path:o[a-3],params:o[a-2],hash:o[a-1],strip:r.stripFlags(o[a-4],o[a])};break;case 29:this.$={type:"SubExpression",path:o[a-3],params:o[a-2],hash:o[a-1],loc:r.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:o[a],loc:r.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:r.id(o[a-2]),value:o[a],loc:r.locInfo(this._$)};break;case 32:this.$=r.id(o[a-1]);break;case 35:this.$={type:"StringLiteral",value:o[a],original:o[a],loc:r.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(o[a]),original:Number(o[a]),loc:r.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===o[a],original:"true"===o[a],loc:r.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:r.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:r.locInfo(this._$)};break;case 42:this.$=r.preparePath(!0,o[a],this._$);break;case 43:this.$=r.preparePath(!1,o[a],this._$);break;case 44:o[a-2].push({part:r.id(o[a]),original:o[a],separator:o[a-1]}),this.$=o[a-2];break;case 45:this.$=[{part:r.id(o[a]),original:o[a]}];break;case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[];break;case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:o[a-1].push(o[a]);break;case 98:case 100:this.$=[o[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(e,t){throw new Error(e)},parse:function(e){var t=this,n=[0],r=[null],i=[],o=this.table,s="",a=0,u=0,c=0;this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;i.push(l);var h=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var p,f,d,g,m,v,y,_,b,w,E={};;){if(d=n[n.length-1],this.defaultActions[d]?g=this.defaultActions[d]:(null==p&&(w=void 0,"number"!=typeof(w=t.lexer.lex()||1)&&(w=t.symbols_[w]||w),p=w),g=o[d]&&o[d][p]),void 0===g||!g.length||!g[0]){var S="";if(!c){for(v in b=[],o[d])this.terminals_[v]&&v>2&&b.push("'"+this.terminals_[v]+"'");S=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[p]||p)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==p?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(S,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:l,expected:b})}}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+d+", token: "+p);switch(g[0]){case 1:n.push(p),r.push(this.lexer.yytext),i.push(this.lexer.yylloc),n.push(g[1]),p=null,f?(p=f,f=null):(u=this.lexer.yyleng,s=this.lexer.yytext,a=this.lexer.yylineno,l=this.lexer.yylloc,c>0&&c--);break;case 2:if(y=this.productions_[g[1]][1],E.$=r[r.length-y],E._$={first_line:i[i.length-(y||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(y||1)].first_column,last_column:i[i.length-1].last_column},h&&(E._$.range=[i[i.length-(y||1)].range[0],i[i.length-1].range[1]]),void 0!==(m=this.performAction.call(E,s,u,a,this.yy,g[1],r,i)))return m;y&&(n=n.slice(0,-1*y*2),r=r.slice(0,-1*y),i=i.slice(0,-1*y)),n.push(this.productions_[g[1]][0]),r.push(E.$),i.push(E._$),_=o[n[n.length-2]][n[n.length-1]],n.push(_);break;case 3:return!0}}return!0}},t={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t-1),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this},more:function(){return this._more=!0,this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF;var e,t,n,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),s=0;s<o.length&&(!(n=this._input.match(this.rules[o[s]]))||t&&!(n[0].length>t[0].length)||(t=n,r=s,this.options.flex));s++);return t?((i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e||void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return void 0!==e?e:this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(e){this.begin(e)},options:{},performAction:function(e,t,n,r){function i(e,n){return t.yytext=t.yytext.substring(e,t.yyleng-n+e)}switch(n){case 0:if("\\\\"===t.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===t.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),t.yytext)return 15;break;case 1:case 5:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(i(5,9),"END_RAW_BLOCK");case 6:case 22:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:case 23:return 48;case 21:this.unput(t.yytext),this.popState(),this.begin("com");break;case 24:return 73;case 25:case 26:case 41:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return t.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return t.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 42:return t.yytext=t.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}};function n(){this.yy={}}return e.lexer=t,n.prototype=e,e.Parser=n,new n}();wt.default=Et;var St=bt(wt=wt.default),kt={};kt.__esModule=!0;var It={};It.__esModule=!0;var Pt=function(e){return e&&e.__esModule?e:{default:e}}(ee);function Ot(){this.parents=[]}function Ct(e){this.acceptRequired(e,"path"),this.acceptArray(e.params),this.acceptKey(e,"hash")}function At(e){Ct.call(this,e),this.acceptKey(e,"program"),this.acceptKey(e,"inverse")}function Tt(e){this.acceptRequired(e,"name"),this.acceptArray(e.params),this.acceptKey(e,"hash")}Ot.prototype={constructor:Ot,mutating:!1,acceptKey:function(e,t){var n=this.accept(e[t]);if(this.mutating){if(n&&!Ot.prototype[n.type])throw new Pt.default('Unexpected node type "'+n.type+'" found when accepting '+t+" on "+e.type);e[t]=n}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new Pt.default(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,n=e.length;t<n;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,n--)},accept:function(e){if(e){if(!this[e.type])throw new Pt.default("Unknown type: "+e.type,e);this.current&&this.parents.unshift(this.current),this.current=e;var t=this[e.type](e);return this.current=this.parents.shift(),!this.mutating||t?t:!1!==t?e:void 0}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:Ct,Decorator:Ct,BlockStatement:At,DecoratorBlock:At,PartialStatement:Tt,PartialBlockStatement:function(e){Tt.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:Ct,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}},It.default=Ot;var Lt=function(e){return e&&e.__esModule?e:{default:e}}(It=It.default);function Rt(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=e}function Nt(e,t,n){void 0===t&&(t=e.length);var r=e[t-1],i=e[t-2];return r?"ContentStatement"===r.type?(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original):void 0:n}function xt(e,t,n){void 0===t&&(t=-1);var r=e[t+1],i=e[t+2];return r?"ContentStatement"===r.type?(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original):void 0:n}function Mt(e,t,n){var r=e[null==t?0:t+1];if(r&&"ContentStatement"===r.type&&(n||!r.rightStripped)){var i=r.value;r.value=r.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.value!==i}}function Dt(e,t,n){var r=e[null==t?e.length-1:t-1];if(r&&"ContentStatement"===r.type&&(n||!r.leftStripped)){var i=r.value;return r.value=r.value.replace(n?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.value!==i,r.leftStripped}}Rt.prototype=new Lt.default,Rt.prototype.Program=function(e){var t=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var r=e.body,i=0,o=r.length;i<o;i++){var s=r[i],a=this.accept(s);if(a){var u=Nt(r,i,n),c=xt(r,i,n),l=a.openStandalone&&u,h=a.closeStandalone&&c,p=a.inlineStandalone&&u&&c;a.close&&Mt(r,i,!0),a.open&&Dt(r,i,!0),t&&p&&(Mt(r,i),Dt(r,i)&&"PartialStatement"===s.type&&(s.indent=/([ \t]+$)/.exec(r[i-1].original)[1])),t&&l&&(Mt((s.program||s.inverse).body),Dt(r,i)),t&&h&&(Mt(r,i),Dt((s.inverse||s.program).body))}}return e},Rt.prototype.BlockStatement=Rt.prototype.DecoratorBlock=Rt.prototype.PartialBlockStatement=function(e){this.accept(e.program),this.accept(e.inverse);var t=e.program||e.inverse,n=e.program&&e.inverse,r=n,i=n;if(n&&n.chained)for(r=n.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var o={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:xt(t.body),closeStandalone:Nt((r||t).body)};if(e.openStrip.close&&Mt(t.body,null,!0),n){var s=e.inverseStrip;s.open&&Dt(t.body,null,!0),s.close&&Mt(r.body,null,!0),e.closeStrip.open&&Dt(i.body,null,!0),!this.options.ignoreStandalone&&Nt(t.body)&&xt(r.body)&&(Dt(t.body),Mt(r.body))}else e.closeStrip.open&&Dt(t.body,null,!0);return o},Rt.prototype.Decorator=Rt.prototype.MustacheStatement=function(e){return e.strip},Rt.prototype.PartialStatement=Rt.prototype.CommentStatement=function(e){var t=e.strip||{};return{inlineStandalone:!0,open:t.open,close:t.close}},kt.default=Rt;var Bt,Ut,jt,Ft,$t,Ht,Vt,Wt,qt,zt,Kt,Gt=bt(kt=kt.default),Jt={};e(Jt,"__esModule",(function(){return Bt}),(function(e){return Bt=e})),e(Jt,"SourceLocation",(function(){return Ut}),(function(e){return Ut=e})),e(Jt,"id",(function(){return jt}),(function(e){return jt=e})),e(Jt,"stripFlags",(function(){return Ft}),(function(e){return Ft=e})),e(Jt,"stripComment",(function(){return $t}),(function(e){return $t=e})),e(Jt,"preparePath",(function(){return Ht}),(function(e){return Ht=e})),e(Jt,"prepareMustache",(function(){return Vt}),(function(e){return Vt=e})),e(Jt,"prepareRawBlock",(function(){return Wt}),(function(e){return Wt=e})),e(Jt,"prepareBlock",(function(){return qt}),(function(e){return qt=e})),e(Jt,"prepareProgram",(function(){return zt}),(function(e){return zt=e})),e(Jt,"preparePartialBlock",(function(){return Kt}),(function(e){return Kt=e})),Bt=!0,Ut=function(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}},jt=function(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e},Ft=function(e,t){return{open:"~"===e.charAt(2),close:"~"===t.charAt(t.length-3)}},$t=function(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},Ht=function(e,t,n){n=this.locInfo(n);for(var r=e?"@":"",i=[],o=0,s=0,a=t.length;s<a;s++){var u=t[s].part,c=t[s].original!==u;if(r+=(t[s].separator||"")+u,c||".."!==u&&"."!==u&&"this"!==u)i.push(u);else{if(i.length>0)throw new Qt.default("Invalid path: "+r,{loc:n});".."===u&&o++}}return{type:"PathExpression",data:e,depth:o,parts:i,original:r,loc:n}},Vt=function(e,t,n,r,i,o){var s=r.charAt(3)||r.charAt(2),a="{"!==s&&"&"!==s;return{type:/\*/.test(r)?"Decorator":"MustacheStatement",path:e,params:t,hash:n,escaped:a,strip:i,loc:this.locInfo(o)}},Wt=function(e,t,n,r){Xt(e,n),r=this.locInfo(r);var i={type:"Program",body:t,strip:{},loc:r};return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:r}},qt=function(e,t,n,r,i,o){r&&r.path&&Xt(e,r);var s=/\*/.test(e.open);t.blockParams=e.blockParams;var a=void 0,u=void 0;if(n){if(s)throw new Qt.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=r.strip),u=n.strip,a=n.program}i&&(i=a,a=t,t=i);return{type:s?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:a,openStrip:e.strip,inverseStrip:u,closeStrip:r&&r.strip,loc:this.locInfo(o)}},zt=function(e,t){if(!t&&e.length){var n=e[0].loc,r=e[e.length-1].loc;n&&r&&(t={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:r.end.line,column:r.end.column}})}return{type:"Program",body:e,strip:{},loc:t}},Kt=function(e,t,n,r){return Xt(e,n),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:n&&n.strip,loc:this.locInfo(r)}};var Qt=function(e){return e&&e.__esModule?e:{default:e}}(ee);function Xt(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var n={loc:e.path.loc};throw new Qt.default(e.path.original+" doesn't match "+t,n)}}var Yt=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(Jt);yt=St.default;var Zt,en,tn,nn={};function rn(e,t){return"Program"===e.type?e:(St.default.yy=nn,nn.locInfo=function(e){return new nn.SourceLocation(t&&t.srcName,e)},St.default.parse(e))}function on(e){return e&&e.__esModule?e:{default:e}}M(nn,Yt),Zt=cn,en=function(e,t,n){if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new sn.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);"data"in(t=t||{})||(t.data=!0);t.compat&&(t.useDepths=!0);var r=n.parse(e,t),i=(new n.Compiler).compile(r,t);return(new n.JavaScriptCompiler).compile(i,t)},tn=function(e,t,n){void 0===t&&(t={});if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new sn.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);"data"in(t=M({},t))||(t.data=!0);t.compat&&(t.useDepths=!0);var r=void 0;function i(){var r=n.parse(e,t),i=(new n.Compiler).compile(r,t),o=(new n.JavaScriptCompiler).compile(i,t,void 0,!0);return n.template(o)}function o(e,t){return r||(r=i()),r.call(this,e,t)}return o._setup=function(e){return r||(r=i()),r._setup(e)},o._child=function(e,t,n,o){return r||(r=i()),r._child(e,t,n,o)},o};var sn=on(ee),an=on(dt),un=[].slice;function cn(){}function ln(e,t){if(e===t)return!0;if(W(e)&&W(t)&&e.length===t.length){for(var n=0;n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}}function hn(e){if(!e.path.parts){var t=e.path;e.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}cn.prototype={compiler:cn,equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t)return!1;for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||!ln(r.args,i.args))return!1}t=this.children.length;for(n=0;n<t;n++)if(!this.children[n].equals(e.children[n]))return!1;return!0},guid:0,compile:function(e,t){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds,t.blockParams=t.blockParams||[],t.knownHelpers=M(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t.knownHelpers),this.accept(e)},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options),n=this.guid++;return this.usePartial=this.usePartial||t.usePartial,this.children[n]=t,this.useDepths=this.useDepths||t.useDepths,n},accept:function(e){if(!this[e.type])throw new sn.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var t=this[e.type](e);return this.sourceNode.shift(),t},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var t=e.body,n=t.length,r=0;r<n;r++)this.accept(t[r]);return this.options.blockParams.shift(),this.isSimple=1===n,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){hn(e);var t=e.program,n=e.inverse;t=t&&this.compileProgram(t),n=n&&this.compileProgram(n);var r=this.classifySexpr(e);"helper"===r?this.helperSexpr(e,t,n):"simple"===r?(this.simpleSexpr(e),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,t,n),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var t=e.program&&this.compileProgram(e.program),n=this.setupFullMustacheParams(e,t,void 0),r=e.path;this.useDecorators=!0,this.opcode("registerDecorator",n.length,r.original)},PartialStatement:function(e){this.usePartial=!0;var t=e.program;t&&(t=this.compileProgram(e.program));var n=e.params;if(n.length>1)throw new sn.default("Unsupported number of partial arguments: "+n.length,e);n.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):n.push({type:"PathExpression",parts:[],depth:0}));var r=e.name.original,i="SubExpression"===e.name.type;i&&this.accept(e.name),this.setupFullMustacheParams(e,t,void 0,!0);var o=e.indent||"";this.options.preventIndent&&o&&(this.opcode("appendContent",o),o=""),this.opcode("invokePartial",i,r,o),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){hn(e);var t=this.classifySexpr(e);"simple"===t?this.simpleSexpr(e):"helper"===t?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,t,n){var r=e.path,i=r.parts[0],o=null!=t||null!=n;this.opcode("getContext",r.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",n),r.strict=!0,this.accept(r),this.opcode("invokeAmbiguous",i,o)},simpleSexpr:function(e){var t=e.path;t.strict=!0,this.accept(t),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,n){var r=this.setupFullMustacheParams(e,t,n),i=e.path,o=i.parts[0];if(this.options.knownHelpers[o])this.opcode("invokeKnownHelper",r.length,o);else{if(this.options.knownHelpersOnly)throw new sn.default("You specified knownHelpersOnly, but used the unknown helper "+o,e);i.strict=!0,i.falsy=!0,this.accept(i),this.opcode("invokeHelper",r.length,i.original,an.default.helpers.simpleId(i))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0],n=an.default.helpers.scopedId(e),r=!e.depth&&!n&&this.blockParamIndex(t);r?this.opcode("lookupBlockParam",r,e.parts):t?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,n):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var t=e.pairs,n=0,r=t.length;for(this.opcode("pushHash");n<r;n++)this.pushParam(t[n].value);for(;n--;)this.opcode("assignToHash",t[n].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:un.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var t=an.default.helpers.simpleId(e.path),n=t&&!!this.blockParamIndex(e.path.parts[0]),r=!n&&an.default.helpers.helperExpression(e),i=!n&&(r||t);if(i&&!r){var o=e.path.parts[0],s=this.options;s.knownHelpers[o]?r=!0:s.knownHelpersOnly&&(i=!1)}return r?"helper":i?"ambiguous":"simple"},pushParams:function(e){for(var t=0,n=e.length;t<n;t++)this.pushParam(e[t])},pushParam:function(e){var t=null!=e.value?e.value:e.original||"";if(this.stringParams)t.replace&&(t=t.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",t,e.type),"SubExpression"===e.type&&this.accept(e);else{if(this.trackIds){var n=void 0;if(!e.parts||an.default.helpers.scopedId(e)||e.depth||(n=this.blockParamIndex(e.parts[0])),n){var r=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",n,r)}else(t=e.original||t).replace&&(t=t.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,t)}this.accept(e)}},setupFullMustacheParams:function(e,t,n,r){var i=e.params;return this.pushParams(i),this.opcode("pushProgram",t),this.opcode("pushProgram",n),e.hash?this.accept(e.hash):this.opcode("emptyHash",r),i},blockParamIndex:function(e){for(var t=0,n=this.options.blockParams.length;t<n;t++){var r=this.options.blockParams[t],i=r&&D(r,e);if(r&&i>=0)return[t,i]}}};var pn={};function fn(e){return e&&e.__esModule?e:{default:e}}pn.__esModule=!0;var dn=fn(ee),gn={__esModule:!0},mn=void 0;try{if("function"!=typeof define||!define.amd){var vn=o("9QQ9J");mn=vn.SourceNode}}catch(e){}function yn(e,t,n){if(W(e)){for(var r=[],i=0,o=e.length;i<o;i++)r.push(t.wrap(e[i],n));return r}return"boolean"==typeof e||"number"==typeof e?e+"":e}function _n(e){this.srcFile=e,this.source=[]}mn||((mn=function(e,t,n,r){this.src="",r&&this.add(r)}).prototype={add:function(e){W(e)&&(e=e.join("")),this.src+=e},prepend:function(e){W(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),_n.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,t){this.source.unshift(this.wrap(e,t))},push:function(e,t){this.source.push(this.wrap(e,t))},merge:function(){var e=this.empty();return this.each((function(t){e.add(["  ",t,"\n"])})),e},each:function(e){for(var t=0,n=this.source.length;t<n;t++)e(this.source[t])},empty:function(){var e=this.currentLocation||{start:{}};return new mn(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return e instanceof mn?e:(e=yn(e,this,t),new mn(t.start.line,t.start.column,this.srcFile,e))},functionCall:function(e,t,n){return n=this.generateList(n),this.wrap([e,t?"."+t+"(":"(",n,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=this,n=[];Object.keys(e).forEach((function(r){var i=yn(e[r],t);"undefined"!==i&&n.push([t.quotedString(r),":",i])}));var r=this.generateList(n);return r.prepend("{"),r.add("}"),r},generateList:function(e){for(var t=this.empty(),n=0,r=e.length;n<r;n++)n&&t.add(","),t.add(yn(e[n],this));return t},generateArray:function(e){var t=this.generateList(e);return t.prepend("["),t.add("]"),t}},gn.default=_n;var bn=fn(gn=gn.default);function wn(e){this.value=e}function En(){}En.prototype={nameLookup:function(e,t){return this.internalNameLookup(e,t)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){return[P,C[P]]},appendToBuffer:function(e,t,n){return W(e)||(e=[e]),e=this.source.wrap(e,t),this.environment.isSimple?["return ",e,";"]:n?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,t){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(t),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,t,n,r){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!r,this.name=this.environment.name,this.isChild=!!n,this.context=n||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams;var i=e.opcodes,o=void 0,s=void 0,a=void 0,u=void 0;for(a=0,u=i.length;a<u;a++)o=i[a],this.source.currentLocation=o.loc,s=s||o.loc,this[o.opcode].apply(this,o.args);if(this.source.currentLocation=s,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new dn.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),r?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var c=this.createFunctionContext(r);if(this.isChild)return c;var l={compiler:this.compilerInfo(),main:c};this.decorators&&(l.main_d=this.decorators,l.useDecorators=!0);var h=this.context,p=h.programs,f=h.decorators;for(a=0,u=p.length;a<u;a++)p[a]&&(l[a]=p[a],f[a]&&(l[a+"_d"]=f[a],l.useDecorators=!0));return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),r?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),t.srcName?(l=l.toStringWithSourceMap({file:t.destName})).map=l.map&&l.map.toString():l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new bn.default(this.options.srcName),this.decorators=new bn.default(this.options.srcName)},createFunctionContext:function(e){var t=this,n="",r=this.stackVars.concat(this.registers.list);r.length>0&&(n+=", "+r.join(", "));var i=0;Object.keys(this.aliases).forEach((function(e){var r=t.aliases[e];r.children&&r.referenceCount>1&&(n+=", alias"+ ++i+"="+e,r.children[0]="alias"+i)})),this.lookupPropertyFunctionIsUsed&&(n+=", "+this.lookupPropertyFunctionVarDeclaration());var o=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&o.push("blockParams"),this.useDepths&&o.push("depths");var s=this.mergeSource(n);return e?(o.push(s),Function.apply(this,o)):this.source.wrap(["function(",o.join(","),") {\n  ",s,"}"])},mergeSource:function(e){var t=this.environment.isSimple,n=!this.forceBuffer,r=void 0,i=void 0,o=void 0,s=void 0;return this.source.each((function(e){e.appendToBuffer?(o?e.prepend("  + "):o=e,s=e):(o&&(i?o.prepend("buffer += "):r=!0,s.add(";"),o=s=void 0),i=!0,t||(n=!1))})),n?o?(o.prepend("return "),s.add(";")):i||this.source.push('return "";'):(e+=", buffer = "+(r?"":this.initializeBuffer()),o?(o.prepend("return buffer + "),s.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(r?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(e){var t=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs(e,0,n);var r=this.popStack();n.splice(1,0,r),this.push(this.source.functionCall(t,"call",n))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),t=[this.contextName(0)];this.setupHelperArgs("",0,t,!0),this.flushInline();var n=this.topStack();t.splice(1,0,n),this.pushSource(["if (!",this.lastHelper,") { ",n," = ",this.source.functionCall(e,"call",t),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack((function(e){return[" != null ? ",e,' : ""']})),this.pushSource(this.appendToBuffer(this.popStack()));else{var e=this.popStack();this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,n,r){var i=0;r||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(e[i++])),this.resolvePath("context",e,i,t,n)},lookupBlockParam:function(e,t){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",t,1)},lookupData:function(e,t,n){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",t,0,!0,n)},resolvePath:function(e,t,n,r,i){var o=this;if(this.options.strict||this.options.assumeObjects)this.push(function(e,t,n,r){var i=t.popStack(),o=0,s=n.length;e&&s--;for(;o<s;o++)i=t.nameLookup(i,n[o],r);return e?[t.aliasable("container.strict"),"(",i,", ",t.quotedString(n[o]),", ",JSON.stringify(t.source.currentLocation)," )"]:i}(this.options.strict&&i,this,t,e));else for(var s=t.length;n<s;n++)this.replaceStack((function(i){var s=o.nameLookup(i,t[n],e);return r?[" && ",s]:[" != null ? ",s," : ",i]}))},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),"SubExpression"!==t&&("string"==typeof e?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){null!=e?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,t){var n=this.nameLookup("decorators",t,"decorator"),r=this.setupHelperArgs(t,e);this.decorators.push(["fn = ",this.decorators.functionCall(n,"",["fn","props","container",r])," || fn;"])},invokeHelper:function(e,t,n){var r=this.popStack(),i=this.setupHelper(e,t),o=[];n&&o.push(i.name),o.push(r),this.options.strict||o.push(this.aliasable("container.hooks.helperMissing"));var s=["(",this.itemsSeparatedBy(o,"||"),")"],a=this.source.functionCall(s,"call",i.callParams);this.push(a)},itemsSeparatedBy:function(e,t){var n=[];n.push(e[0]);for(var r=1;r<e.length;r++)n.push(t,e[r]);return n},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(this.source.functionCall(n.name,"call",n.callParams))},invokeAmbiguous:function(e,t){this.useRegister("helper");var n=this.popStack();this.emptyHash();var r=this.setupHelper(0,e,t),i=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",e,"helper")," || ",n,")"];this.options.strict||(i[0]="(helper = ",i.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",i,r.paramsInit?["),(",r.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",r.callParams)," : helper))"])},invokePartial:function(e,t,n){var r=[],i=this.setupParams(t,1,r);e&&(t=this.popStack(),delete i.name),n&&(i.indent=JSON.stringify(n)),i.helpers="helpers",i.partials="partials",i.decorators="container.decorators",e?r.unshift(t):r.unshift(this.nameLookup("partials",t,"partial")),this.options.compat&&(i.depths="depths"),i=this.objectLiteral(i),r.push(i),this.push(this.source.functionCall("container.invokePartial","",r))},assignToHash:function(e){var t=this.popStack(),n=void 0,r=void 0,i=void 0;this.trackIds&&(i=this.popStack()),this.stringParams&&(r=this.popStack(),n=this.popStack());var o=this.hash;n&&(o.contexts[e]=n),r&&(o.types[e]=r),i&&(o.ids[e]=i),o.values[e]=t},pushId:function(e,t,n){"BlockParam"===e?this.pushStackLiteral("blockParams["+t[0]+"].path["+t[1]+"]"+(n?" + "+JSON.stringify("."+n):"")):"PathExpression"===e?this.pushString(t):"SubExpression"===e?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:En,compileChildren:function(e,t){for(var n=e.children,r=void 0,i=void 0,o=0,s=n.length;o<s;o++){r=n[o],i=new this.compiler;var a=this.matchExistingProgram(r);if(null==a){this.context.programs.push("");var u=this.context.programs.length;r.index=u,r.name="program"+u,this.context.programs[u]=i.compile(r,t,this.context,!this.precompile),this.context.decorators[u]=i.decorators,this.context.environments[u]=r,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams,r.useDepths=this.useDepths,r.useBlockParams=this.useBlockParams}else r.index=a.index,r.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e))return r}},programExpression:function(e){var t=this.environment.children[e],n=[t.index,"data",t.blockParams];return(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths"),"container.program("+n.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof wn||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new wn(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var t=["("],n=void 0,r=void 0,i=void 0;if(!this.isInline())throw new dn.default("replaceStack on non-inline");var o=this.popStack(!0);if(o instanceof wn)t=["(",n=[o.value]],i=!0;else{r=!0;var s=this.incrStack();t=["((",this.push(s)," = ",o,")"],n=this.topStack()}var a=e.call(this,n);i||this.popStack(),r&&this.stackSlot--,this.push(t.concat(a,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof wn)this.compileStack.push(r);else{var i=this.incrStack();this.pushSource([i," = ",r,";"]),this.compileStack.push(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof wn)return n.value;if(!t){if(!this.stackSlot)throw new dn.default("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1];return t instanceof wn?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var t=this.aliases[e];return t?(t.referenceCount++,t):((t=this.aliases[e]=this.source.wrap(e)).aliasable=!0,t.referenceCount=1,t)},setupHelper:function(e,t,n){var r=[];return{params:r,paramsInit:this.setupHelperArgs(t,e,r,n),name:this.nameLookup("helpers",t,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(r)}},setupParams:function(e,t,n){var r={},i=[],o=[],s=[],a=!n,u=void 0;a&&(n=[]),r.name=this.quotedString(e),r.hash=this.popStack(),this.trackIds&&(r.hashIds=this.popStack()),this.stringParams&&(r.hashTypes=this.popStack(),r.hashContexts=this.popStack());var c=this.popStack(),l=this.popStack();(l||c)&&(r.fn=l||"container.noop",r.inverse=c||"container.noop");for(var h=t;h--;)u=this.popStack(),n[h]=u,this.trackIds&&(s[h]=this.popStack()),this.stringParams&&(o[h]=this.popStack(),i[h]=this.popStack());return a&&(r.args=this.source.generateArray(n)),this.trackIds&&(r.ids=this.source.generateArray(s)),this.stringParams&&(r.types=this.source.generateArray(o),r.contexts=this.source.generateArray(i)),this.options.data&&(r.data="data"),this.useBlockParams&&(r.blockParams="blockParams"),r},setupHelperArgs:function(e,t,n,r){var i=this.setupParams(e,t,n);return i.loc=JSON.stringify(this.source.currentLocation),i=this.objectLiteral(i),r?(this.useRegister("options"),n.push("options"),["options=",i]):n?(n.push(i),""):i}},function(){for(var e="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),t=En.RESERVED_WORDS={},n=0,r=e.length;n<r;n++)t[e[n]]=!0}(),En.isValidJavaScriptVariableName=function(e){return!En.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)},pn.default=En;var Sn=_(pn=pn.default),kn=_(It),In=_(ct),Pn=ft.default.create;function On(){var e=Pn();return e.compile=function(t,n){return tn(t,n,e)},e.precompile=function(t,n){return en(t,n,e)},e.AST=_t.default,e.Compiler=Zt,e.JavaScriptCompiler=Sn.default,e.Parser=yt,e.parse=vt,e.parseWithoutProcessing=mt,e}var Cn=On();Cn.create=On,In.default(Cn),Cn.Visitor=kn.default,Cn.default=Cn,y.default=Cn;var An,Tn,Ln=(y=y.default).default;An=function(e){return(new Nn).accept(e)},Tn=Nn;var Rn=function(e){return e&&e.__esModule?e:{default:e}}(It);function Nn(){this.padding=0}Nn.prototype=new Rn.default,Nn.prototype.pad=function(e){for(var t="",n=0,r=this.padding;n<r;n++)t+="  ";return t+=e+"\n"},Nn.prototype.Program=function(e){var t="",n=e.body,r=void 0,i=void 0;if(e.blockParams){var o="BLOCK PARAMS: [";for(r=0,i=e.blockParams.length;r<i;r++)o+=" "+e.blockParams[r];o+=" ]",t+=this.pad(o)}for(r=0,i=n.length;r<i;r++)t+=this.accept(n[r]);return this.padding--,t},Nn.prototype.MustacheStatement=function(e){return this.pad("{{ "+this.SubExpression(e)+" }}")},Nn.prototype.Decorator=function(e){return this.pad("{{ DIRECTIVE "+this.SubExpression(e)+" }}")},Nn.prototype.BlockStatement=Nn.prototype.DecoratorBlock=function(e){var t="";return t+=this.pad(("DecoratorBlock"===e.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,t+=this.pad(this.SubExpression(e)),e.program&&(t+=this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t+=this.pad("{{^}}"),this.padding++,t+=this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t},Nn.prototype.PartialStatement=function(e){var t="PARTIAL:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")},Nn.prototype.PartialBlockStatement=function(e){var t="PARTIAL BLOCK:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),t+=" "+this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--,this.pad("{{> "+t+" }}")},Nn.prototype.ContentStatement=function(e){return this.pad("CONTENT[ '"+e.value+"' ]")},Nn.prototype.CommentStatement=function(e){return this.pad("{{! '"+e.value+"' }}")},Nn.prototype.SubExpression=function(e){for(var t,n=e.params,r=[],i=0,o=n.length;i<o;i++)r.push(this.accept(n[i]));return n="["+r.join(", ")+"]",t=e.hash?" "+this.accept(e.hash):"",this.accept(e.path)+" "+n+t},Nn.prototype.PathExpression=function(e){var t=e.parts.join("/");return(e.data?"@":"")+"PATH:"+t},Nn.prototype.StringLiteral=function(e){return'"'+e.value+'"'},Nn.prototype.NumberLiteral=function(e){return"NUMBER{"+e.value+"}"},Nn.prototype.BooleanLiteral=function(e){return"BOOLEAN{"+e.value+"}"},Nn.prototype.UndefinedLiteral=function(){return"UNDEFINED"},Nn.prototype.NullLiteral=function(){return"NULL"},Nn.prototype.Hash=function(e){for(var t=e.pairs,n=[],r=0,i=t.length;r<i;r++)n.push(this.accept(t[r]));return"HASH{"+n.join(", ")+"}"},Nn.prototype.HashPair=function(e){return e.key+"="+this.accept(e.value)},Ln.PrintVisitor=Tn,Ln.print=An;var xn=t(Ln).template({1:function(e,t,n,r,i){var o,s=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,u="function",c=e.escapeExpression,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'        <div class="team__item">\n            <div class="front-card">\n                <img class="team__img" src="'+c(typeof(o=null!=(o=l(n,"photo")||(null!=t?l(t,"photo"):t))?o:a)===u?o.call(s,{name:"photo",hash:{},data:i,loc:{start:{line:6,column:44},end:{line:6,column:53}}}):o)+'" alt="'+c(typeof(o=null!=(o=l(n,"role")||(null!=t?l(t,"role"):t))?o:a)===u?o.call(s,{name:"role",hash:{},data:i,loc:{start:{line:6,column:60},end:{line:6,column:68}}}):o)+'" />\n               <div class="team__item-information">\n                <p class="team__item-title">'+c(typeof(o=null!=(o=l(n,"name")||(null!=t?l(t,"name"):t))?o:a)===u?o.call(s,{name:"name",hash:{},data:i,loc:{start:{line:8,column:44},end:{line:8,column:52}}}):o)+" "+c(typeof(o=null!=(o=l(n,"surname")||(null!=t?l(t,"surname"):t))?o:a)===u?o.call(s,{name:"surname",hash:{},data:i,loc:{start:{line:8,column:53},end:{line:8,column:64}}}):o)+'</p>\n                <p class="team__item-text">'+c(typeof(o=null!=(o=l(n,"role")||(null!=t?l(t,"role"):t))?o:a)===u?o.call(s,{name:"role",hash:{},data:i,loc:{start:{line:9,column:43},end:{line:9,column:51}}}):o)+'</p>\n               </div>\n            </div>\n            <div class="back-card">\n                <p class="team__back-title">'+c(typeof(o=null!=(o=l(n,"role")||(null!=t?l(t,"role"):t))?o:a)===u?o.call(s,{name:"role",hash:{},data:i,loc:{start:{line:13,column:44},end:{line:13,column:52}}}):o)+'</p>\n                <p class="team__back-text">'+c(typeof(o=null!=(o=l(n,"tasks")||(null!=t?l(t,"tasks"):t))?o:a)===u?o.call(s,{name:"tasks",hash:{},data:i,loc:{start:{line:14,column:43},end:{line:14,column:52}}}):o)+"</p>\n            </div>\n        </div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var o;return'<div class="modal-team">\n    <div class="team-container">\n'+(null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:3,column:8},end:{line:17,column:17}}}))?o:"")+"    </div>"},useData:!0});l=o("krGWQ");function Mn(e){e.preventDefault(),document.body.classList.toggle("modal-open"),l.default.teamModal.classList.toggle("is-hidden")}!function(e){const t=xn(e);l.default.teamContainer.innerHTML=t}([{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03KFQ30DPH-ccb0372cb398-512",name:"Олексій",surname:"Бражник",role:"Team-lead",tasks:"Реалізовано підвантаження популярних фільмів та відображення частини фільмів при переході на кожну сторінку"},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03L40ET9TL-98a068e6dd7b-512",name:"Анастасія",surname:"Котєльнікова",role:"Scrum-master",tasks:'Реалізовано модальне вікно "GoIT Students"'},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03KPC2S5HV-0d7689a89f3e-512",name:"Сілард",surname:"Гудан",role:"Developer",tasks:"Зверстано шаблон модалки одного фільму"},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03LTNKNLHW-558df94a59cd-512",name:"Олександр",surname:"Веклинець",role:"Developer",tasks:"Зверстано контейнер головної сторінки, реалізована пагінація "},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03LCBHPG65-a943fba29d7e-512",name:"Міша",surname:"Левко",role:"Developer",tasks:"Реалізована реєстрація користувача"},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03LTNNEYBS-2bf24a3690c6-512",name:"Лара",surname:"Білобродська",role:"Developer",tasks:"Зверстано шаблон картки одного фільму"},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03KWPQTBUK-35bb2bb0e703-512",name:"Євгеній",surname:"Прошкін",role:"Developer",tasks:'Зверстано контейнер та хедер для сторінки "My Library"'},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03KQF6QNCE-2653ec731ac4-512",name:"Ольга",surname:"Мисарош",role:"Developer",tasks:"Зверстано футер"},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03L12RAB1B-7ea49a07db43-512",name:"Антон",surname:"Клименко",role:"Developer",tasks:"Реалізований scroll"},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03KRKY1T5K-b31fc2eeccbd-512",name:"Віталій",surname:"Никоненко",role:"Developer",tasks:"Реалізовано Loader"},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03L7B7AR7T-0504ca780745-512",name:"Юрій",surname:"Дуда",role:"Developer",tasks:"Зверстано хедер головної сторінки, реалізований перехід на неї та відображення бібліотеки користувача"},{photo:"https://ca.slack-edge.com/T03L32N8Q9X-U03LBS6P0SW-c93fd144d979-512",name:"Олена",surname:"Гарник",role:"Mentor",tasks:"Реалізоване ревю попередньої версії проєкту"}]),l.default.openModalBtn.addEventListener("click",Mn),l.default.closeModalBtn.addEventListener("click",Mn),[...document.querySelectorAll(".team__item")].forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("click-card")}))}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Bn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,c=i>>2,l=(3&i)<<4|s>>4;let h=(15&s)<<2|u>>6,p=63&u;a||(p=64,o||(h=64)),r.push(n[c],n[l],n[h],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Dn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==a)throw Error();const u=i<<2|o>>4;if(r.push(u),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Un=function(e){return function(e){const t=Dn(e);return Bn.encodeByteArray(t,!0)}(e).replace(/\./g,"")},jn=function(e){try{return Bn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $n(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Hn(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Vn(){const e=$n();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class Wn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(zn,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new Wn(r,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const zn=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Gn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(Jn(n)&&Jn(o)){if(!Gn(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Jn(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Xn(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Yn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e,t){const n=new er(e,t);return n.subscribe.bind(n)}class er{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=tr),void 0===r.error&&(r.error=tr),void 0===r.complete&&(r.complete=tr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function tr(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nr(e){return e&&e._delegate?e._delegate:e}class rr{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Fn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class or{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ir(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=[];var ar,ur;(ur=ar||(ar={}))[ur.DEBUG=0]="DEBUG",ur[ur.VERBOSE=1]="VERBOSE",ur[ur.INFO=2]="INFO",ur[ur.WARN=3]="WARN",ur[ur.ERROR=4]="ERROR",ur[ur.SILENT=5]="SILENT";const cr={debug:ar.DEBUG,verbose:ar.VERBOSE,info:ar.INFO,warn:ar.WARN,error:ar.ERROR,silent:ar.SILENT},lr=ar.INFO,hr={[ar.DEBUG]:"log",[ar.VERBOSE]:"log",[ar.INFO]:"info",[ar.WARN]:"warn",[ar.ERROR]:"error"},pr=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=hr[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class fr{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ar))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?cr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ar.DEBUG,...e),this._logHandler(this,ar.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ar.VERBOSE,...e),this._logHandler(this,ar.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ar.INFO,...e),this._logHandler(this,ar.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ar.WARN,...e),this._logHandler(this,ar.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ar.ERROR,...e),this._logHandler(this,ar.ERROR,...e)}constructor(e){this.name=e,this._logLevel=lr,this._logHandler=pr,this._userLogHandler=null,sr.push(this)}}let dr,gr;const mr=new WeakMap,vr=new WeakMap,yr=new WeakMap,_r=new WeakMap,br=new WeakMap;let wr={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return vr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||yr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Er(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(gr||(gr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ir(this),t),kr(mr.get(this))}:function(...t){return kr(e.apply(Ir(this),t))}:function(t,...n){const r=e.call(Ir(this),t,...n);return yr.set(r,t.sort?t.sort():[t]),kr(r)}}function Sr(e){return"function"==typeof e?Er(e):(e instanceof IDBTransaction&&function(e){if(vr.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));vr.set(e,t)}(e),t=e,(dr||(dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,wr):e);var t}function kr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(kr(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&mr.set(t,e)})).catch((()=>{})),br.set(t,e),t}(e);if(_r.has(e))return _r.get(e);const t=Sr(e);return t!==e&&(_r.set(e,t),br.set(t,e)),t}const Ir=e=>br.get(e);function Pr(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=kr(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(kr(s.result),e.oldVersion,e.newVersion,kr(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Or=["get","getKey","getAll","getAllKeys","count"],Cr=["put","add","delete","clear"],Ar=new Map;function Tr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ar.get(t))return Ar.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Cr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Or.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return Ar.set(t,o),o}wr=(e=>({...e,get:(t,n,r)=>Tr(t,n)||e.get(t,n,r),has:(t,n)=>!!Tr(t,n)||e.has(t,n)}))(wr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Rr=new fr("@firebase/app"),Nr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},xr=new Map,Mr=new Map;function Dr(e,t){try{e.container.addComponent(t)}catch(n){Rr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Br(e){const t=e.name;if(Mr.has(t))return Rr.debug(`There were multiple attempts to register component ${t}.`),!1;Mr.set(t,e);for(const t of xr.values())Dr(t,e);return!0}function Ur(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jr=new qn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new rr("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw jr.create("bad-app-name",{appName:String(r)});const i=xr.get(r);if(i){if(Gn(e,i.options)&&Gn(n,i.config))return i;throw jr.create("duplicate-app",{appName:r})}const o=new or(r);for(const e of Mr.values())o.addComponent(e);const s=new Fr(e,n,o);return xr.set(r,s),s}function Hr(e="[DEFAULT]"){const t=xr.get(e);if(!t)throw jr.create("no-app",{appName:e});return t}function Vr(e,t,n){var r;let i=null!==(r=Nr[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Rr.warn(e.join(" "))}Br(new rr(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Wr=null;function qr(){return Wr||(Wr=Pr("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw jr.create("idb-open",{originalErrorMessage:e.message})}))),Wr}async function zr(e,t){var n;try{const n=(await qr()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,Kr(e)),n.done}catch(e){if(e instanceof Wn)Rr.warn(e.message);else{const t=jr.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});Rr.warn(t.message)}}}function Kr(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Jr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Jr(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Xr(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xr(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Un(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qr(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Jr(){return(new Date).toISOString().substring(0,10)}class Qr{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await qr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Kr(e))}catch(e){if(e instanceof Wn)Rr.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});Rr.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return zr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return zr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Xr(e){return Un(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yr;Yr="",Br(new rr("platform-logger",(e=>new Lr(e)),"PRIVATE")),Br(new rr("heartbeat",(e=>new Gr(e)),"PRIVATE")),Vr("@firebase/app","0.7.33",Yr),Vr("@firebase/app","0.7.33","esm2017"),Vr("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Vr("firebase","9.10.0","app");function Zr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ei(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ti=ei,ni=new qn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ri=new fr("@firebase/auth");function ii(e,...t){ri.logLevel<=ar.ERROR&&ri.error(`Auth (9.10.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e,...t){throw ui(e,...t)}function si(e,...t){return ui(e,...t)}function ai(e,t,n){const r=Object.assign(Object.assign({},ti()),{[t]:n});return new qn("auth","Firebase",r).create(t,{appName:e.name})}function ui(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ni.create(e,...t)}function ci(e,t,...n){if(!e)throw ui(t,...n)}function li(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ii(t),new Error(t)}function hi(e,t){e||li(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Map;function fi(e){hi(e instanceof Function,"Expected a class definition");let t=pi.get(e);return t?(hi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,pi.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function gi(){return"http:"===mi()||"https:"===mi()}function mi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(gi()||Hn()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{get(){return vi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,hi(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($n())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e,t){hi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void li("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void li("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void li("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ei=new yi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ki(e,t,n,r,i={}){return Ii(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=Qn(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),bi.fetch()(Oi(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ii(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},wi),t);try{const t=new Ci(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ai(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ai(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw Ai(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw Ai(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw ai(e,a,s);oi(e,a)}}catch(t){if(t instanceof Wn)throw t;oi(e,"network-request-failed")}}async function Pi(e,t,n,r,i={}){const o=await ki(e,t,n,r,i);return"mfaPendingCredential"in o&&oi(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Oi(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?_i(e.config,i):`${e.config.apiScheme}://${i}`}class Ci{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(si(this.auth,"network-request-failed"))),Ei.get())}))}}function Ai(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=si(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ti(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e){return 1e3*Number(e)}function Ri(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return ii("JWT malformed, contained fewer than 3 sections"),null;try{const e=jn(r);return e?JSON.parse(e):(ii("Failed to decode base64 JWT payload"),null)}catch(e){return ii("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ni(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Wn&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class xi{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{_initializeTime(){this.lastSignInTime=Ti(this.lastLoginAt),this.creationTime=Ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ni(e,async function(e,t){return ki(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));ci(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=Zr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(u=e.providerData,c=s,[...u.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var u,c;const l=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),p=!!l&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Mi(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ci(e.idToken,"internal-error"),ci(void 0!==e.idToken,"internal-error"),ci(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ri(e);return ci(t,"internal-error"),ci(void 0!==t.exp,"internal-error"),ci(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ci(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Ii(e,{},(async()=>{const n=Qn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=Oi(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",bi.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Bi;return n&&(ci("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(ci("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(ci("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return li("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e,t){ci("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ji{async getIdToken(e){const t=await Ni(this,this.stsTokenManager.getToken(this.auth,e));return ci(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=nr(e),r=await n.getIdToken(t),i=Ri(r);ci(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ti(Li(i.auth_time)),issuedAtTime:Ti(Li(i.iat)),expirationTime:Ti(Li(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=nr(e);await Di(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ci(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ji(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ci(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Di(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ni(this,async function(e,t){return ki(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,p=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,d=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=t.createdAt)&&void 0!==u?u:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:E}=t;ci(y&&E,e,"internal-error");const S=Bi.fromJSON(this.name,E);ci("string"==typeof y,e,"internal-error"),Ui(l,e.name),Ui(h,e.name),ci("boolean"==typeof _,e,"internal-error"),ci("boolean"==typeof b,e,"internal-error"),Ui(p,e.name),Ui(f,e.name),Ui(d,e.name),Ui(g,e.name),Ui(m,e.name),Ui(v,e.name);const k=new ji({uid:y,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:p,tenantId:d,stsTokenManager:S,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(k.providerData=w.map((e=>Object.assign({},e)))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new Bi;r.updateFromServerResponse(t);const i=new ji({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Di(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Zr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mi(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Fi.type="NONE";const $i=Fi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e,t,n){return`firebase:${e}:${t}:${n}`}class Vi{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ji._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Vi(fi($i),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||fi($i);const o=Hi(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=ji._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new Vi(i,e,n)):new Vi(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Hi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Hi("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Gi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(qi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Qi(t))return"Blackberry";if(Xi(t))return"Webos";if(zi(t))return"Safari";if((t.includes("chrome/")||Ki(t))&&!t.includes("edge/"))return"Chrome";if(Ji(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function qi(e=$n()){return/firefox\//i.test(e)}function zi(e=$n()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ki(e=$n()){return/crios\//i.test(e)}function Gi(e=$n()){return/iemobile/i.test(e)}function Ji(e=$n()){return/android/i.test(e)}function Qi(e=$n()){return/blackberry/i.test(e)}function Xi(e=$n()){return/webos/i.test(e)}function Yi(e=$n()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Zi(){return Vn()&&10===document.documentMode}function eo(e=$n()){return Yi(e)||Ji(e)||Xi(e)||Qi(e)||/windows phone/i.test(e)||Gi(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function to(e,t=[]){let n;switch(e){case"Browser":n=Wi($n());break;case"Worker":n=`${Wi($n())}-${e}`;break;default:n=e}return`${n}/JsCore/9.10.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fi(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ci(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Di(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?nr(e):null;return t&&ci(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ci(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(fi(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fi(e)||this._popupRedirectResolver;ci(t,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[fi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ci(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ci(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=to(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oo(this),this.idTokenSubscription=new oo(this),this.beforeStateQueue=new no(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ni,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function io(e){return nr(e)}class oo{get next(){return ci(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=Zn((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so{toJSON(){return li("not implemented")}_getIdTokenResponse(e){return li("not implemented")}_linkToIdToken(e,t){return li("not implemented")}_getReauthenticationResolver(e){return li("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(e,t){return ki(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo extends so{static _fromEmailAndPassword(e,t){return new uo(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new uo(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Pi(e,"POST","/v1/accounts:signInWithPassword",Si(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Pi(e,"POST","/v1/accounts:signInWithEmailLink",Si(e,t))}(e,{email:this._email,oobCode:this._password});default:oi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ao(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Pi(e,"POST","/v1/accounts:signInWithEmailLink",Si(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:oi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(e,t){return Pi(e,"POST","/v1/accounts:signInWithIdp",Si(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends so{static _fromParams(e){const t=new lo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):oi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Zr(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new lo(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return co(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,co(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,co(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qn(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po extends so{static _fromVerification(e,t){return new po({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new po({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Pi(e,"POST","/v1/accounts:signInWithPhoneNumber",Si(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Pi(e,"POST","/v1/accounts:signInWithPhoneNumber",Si(e,t));if(n.temporaryProof)throw Ai(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Pi(e,"POST","/v1/accounts:signInWithPhoneNumber",Si(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ho)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new po({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{static parseLink(e){const t=function(e){const t=Xn(Yn(e)).link,n=t?Xn(Yn(t)).deep_link_id:null,r=Xn(Yn(e)).deep_link_id;return(r?Xn(Yn(r)).link:null)||r||n||t||e}(e);try{return new fo(t)}catch(e){return null}}constructor(e){var t,n,r,i,o,s;const a=Xn(Yn(e)),u=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);ci(u&&c&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{static credential(e,t){return uo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=fo.parseLink(t);return ci(n,"argument-error"),uo._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=go.PROVIDER_ID}}go.PROVIDER_ID="password",go.EMAIL_PASSWORD_SIGN_IN_METHOD="password",go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends mo{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yo extends vo{static credential(e){return lo._fromParams({providerId:yo.PROVIDER_ID,signInMethod:yo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yo.credentialFromTaggedObject(e)}static credentialFromError(e){return yo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yo.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}yo.FACEBOOK_SIGN_IN_METHOD="facebook.com",yo.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _o extends vo{static credential(e,t){return lo._fromParams({providerId:_o.PROVIDER_ID,signInMethod:_o.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _o.credentialFromTaggedObject(e)}static credentialFromError(e){return _o.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return _o.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}_o.GOOGLE_SIGN_IN_METHOD="google.com",_o.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo extends vo{static credential(e){return lo._fromParams({providerId:bo.PROVIDER_ID,signInMethod:bo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bo.credentialFromTaggedObject(e)}static credentialFromError(e){return bo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bo.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}bo.GITHUB_SIGN_IN_METHOD="github.com",bo.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wo extends vo{static credential(e,t){return lo._fromParams({providerId:wo.PROVIDER_ID,signInMethod:wo.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wo.credentialFromTaggedObject(e)}static credentialFromError(e){return wo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wo.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Eo(e,t){return Pi(e,"POST","/v1/accounts:signUp",Si(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wo.TWITTER_SIGN_IN_METHOD="twitter.com",wo.PROVIDER_ID="twitter.com";class So{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ji._fromIdTokenResponse(e,n,r),o=ko(n);return new So({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ko(n);return new So({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function ko(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io extends Wn{static _fromErrorAndOperation(e,t,n,r){return new Io(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Po(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Io._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(e,t,n=!1){const r=await Ni(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return So._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Co(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const r=await Ni(e,Po(i,o,t,e),n);ci(r.idToken,i,"internal-error");const s=Ri(r.idToken);ci(s,i,"internal-error");const{sub:a}=s;return ci(e.uid===a,i,"user-mismatch"),So._forOperation(e,o,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&oi(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(e,t,n=!1){const r="signIn",i=await Po(e,r,t),o=await So._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function To(e,t){return Ao(io(e),t)}async function Lo(e,t,n){const r=io(e),i=await Eo(r,{returnSecureToken:!0,email:t,password:n}),o=await So._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Ro(e,t,n){return To(nr(e),go.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class No{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends No{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Zi()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=$n();return zi(e)||Yi(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=eo(),this._shouldAllowMigration=!0}}xo.type="LOCAL";const Mo=xo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends No{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Do.type="SESSION";const Bo=Do;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Uo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jo(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Uo.receivers=[];class Fo{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const u=jo("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ho(){return void 0!==$o().WorkerGlobalScope&&"function"==typeof $o().importScripts}class Vo{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Wo(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function qo(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Vo(e).toPromise()}(),t(await qo()))}))}))}async function zo(e,t,n){const r=Wo(e,!0).put({fbase_key:t,value:n});return new Vo(r).toPromise()}function Ko(e,t){const n=Wo(e,!0).delete(t);return new Vo(n).toPromise()}class Go{async _openDb(){return this.db||(this.db=await qo()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ho()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uo._getInstance(Ho()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Fo(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qo();return await zo(e,"__sak","1"),await Ko(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>zo(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Wo(e,!1).get(t),r=await new Vo(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ko(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Wo(e,!1).getAll();return new Vo(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Go.type="LOCAL";const Jo=Go;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=si("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)}))}function Xo(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xo("rcb"),new yi(3e4,6e4);async function Yo(e,t,n){var r;const i=await n.verify();try{let o;if(ci("string"==typeof i,e,"argument-error"),ci("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){ci("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return ki(e,"POST","/v2/accounts/mfaEnrollment:start",Si(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{ci("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;ci(n,e,"missing-multi-factor-info");const s=await function(e,t){return ki(e,"POST","/v2/accounts/mfaSignIn:start",Si(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ki(e,"POST","/v1/accounts:sendVerificationCode",Si(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zo{verifyPhoneNumber(e,t){return Yo(this.auth,e,nr(t))}static credential(e,t){return po._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Zo.credentialFromTaggedObject(t)}static credentialFromError(e){return Zo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?po._fromTokenResponse(t,n):null}constructor(e){this.providerId=Zo.PROVIDER_ID,this.auth=io(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function es(e,t){return t?fi(t):(ci(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zo.PROVIDER_ID="phone",Zo.PHONE_SIGN_IN_METHOD="phone";class ts extends so{_getIdTokenResponse(e){return co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function ns(e){return Ao(e.auth,new ts(e),e.bypassAuthState)}function rs(e){const{auth:t,user:n}=e;return ci(n,t,"internal-error"),Co(n,new ts(e),e.bypassAuthState)}async function is(e){const{auth:t,user:n}=e;return ci(n,t,"internal-error"),Oo(n,new ts(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ns;case"linkViaPopup":case"linkViaRedirect":return is;case"reauthViaPopup":case"reauthViaRedirect":return rs;default:oi(this.auth,"internal-error")}}resolve(e){hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new yi(2e3,1e4);class as extends os{async executeNotNull(){const e=await this.execute();return ci(e,this.auth,"internal-error"),e}async onExecution(){hi(1===this.filter.length,"Popup operations only handle one event");const e=jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(si(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(si(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(si(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ss.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}}as.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const us=new Map;class cs extends os{async execute(){let e=us.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=ps(t),r=hs(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function ls(e,t){us.set(e._key(),t)}function hs(e){return fi(e._redirectPersistence)}function ps(e){return Hi("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(e,t,n=!1){const r=io(e),i=es(r,t),o=new cs(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}class ds{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ms(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ms(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(si(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(gs(e))}saveEventToCache(e){this.cachedEventUids.add(gs(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function gs(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ms({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ys=/^https?/;async function _s(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ki(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(bs(e))return}catch(e){}oi(e,"unauthorized-domain")}function bs(e){const t=di(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ys.test(n))return!1;if(vs.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new yi(3e4,6e4);function Es(){const e=$o().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ss=null;function ks(e){return Ss=Ss||function(e){return new Promise(((t,n)=>{var r,i,o;function s(){Es(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Es(),n(si(e,"network-request-failed"))},timeout:ws.get()})}if(null===(i=null===(r=$o().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=$o().gapi)||void 0===o?void 0:o.load)){const t=Xo("iframefcb");return $o()[t]=()=>{gapi.load?s():n(si(e,"network-request-failed"))},Qo(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Ss=null,e}))}(e),Ss}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new yi(5e3,15e3),Ps={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Os=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cs(e){const t=e.config;ci(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_i(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.10.0"},i=Os.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Qn(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const As={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ts{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Ls(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},As),{width:r.toString(),height:i.toString(),top:o,left:s}),c=$n().toLowerCase();n&&(a=Ki(c)?"_blank":n),qi(c)&&(t=t||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=$n()){var t;return Yi(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Ts(null);const h=window.open(t||"",a,l);ci(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Ts(h)}function Rs(e,t,n,r,i,o){ci(e.config.authDomain,e,"auth-domain-config-required"),ci(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.10.0",eventId:i};if(t instanceof mo){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Kn(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof vo){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?_i(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Qn(a).slice(1)}`}const Ns=class{async _openPopup(e,t,n,r){var i;hi(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ls(e,Rs(e,t,n,di(),r),jo())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Rs(e,t,n,di(),r),$o().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(hi(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ks(e),n=$o().gapi;return ci(n,e,"internal-error"),t.open({where:document.body,url:Cs(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ps,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=si(e,"network-request-failed"),o=$o().setTimeout((()=>{r(i)}),Is.get());function s(){$o().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new ds(e);return t.register("authEvent",(t=>{ci(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),oi(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_s(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eo()||zi()||Yi()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bo,this._completeRedirectFn=fs,this._overrideRedirectResult=ls}};var xs;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ci(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ds(e=Hr()){const t=Ur(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Ur(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Gn(n.getOptions(),null!=t?t:{}))return e;oi(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ns,persistence:[Jo,Mo,Bo]})}xs="Browser",Br(new rr("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{ci(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),ci(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:xs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:to(xs)},s=new ro(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Br(new rr("auth-internal",(e=>{const t=io(e.getProvider("auth").getImmediate());return new Ms(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Vr("@firebase/auth","0.20.7",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(xs)),Vr("@firebase/auth","0.20.7","esm2017");new class{createUser(e,t){Lo(this.auth,e,t).then((e=>{const t=e.user;console.log(t.uid)})).catch((e=>{e.code,e.message}))}signIn(e,t){Ro(this.auth,e,t).then((e=>{e.user})).catch((e=>{e.code,e.message}))}authState(){var e,t,n,r;e=this.auth,t=e=>{e&&e.uid},nr(e).onAuthStateChanged(t,n,r)}out(){var e;(e=this.auth,nr(e).signOut()).then((()=>{})).catch((e=>{}))}constructor(){this.firebaseConfig={apiKey:"AIzaSyDyyDBXrtypR4LKLi9eobNW0F2AbPIT-0w",authDomain:"js-team-project-bb445.firebaseapp.com",projectId:"js-team-project-bb445",storageBucket:"js-team-project-bb445.appspot.com",messagingSenderId:"772335269944",appId:"1:772335269944:web:f4a41767a7c3556cf60ecd",measurementId:"G-1YF4Z6D4WL"},this.app=$r(this.firebaseConfig),this.auth=Ds(this.app)}};const Bs=document.querySelector("#authentication_backdrop"),Us=document.querySelector("#modal-btn-exit"),js=document.querySelector(".modal-open-btn"),Fs=document.querySelector("#form-container");function $s(e){e.preventDefault(),console.log("нарешті")}function Hs(){Fs.innerHTML="",Fs.innerHTML='  <form class="authentication-form" id="registration-form">\n  <div class="input-form">\n        <input\n          class="auth_input"\n          type="email"\n          name="login"\n          placeholder="Email..."\n        />\n        <input\n          class="auth_input"\n          type="password"\n          name="password"\n          placeholder="Password..."\n          minlength="6"\n        />\n        <input\n          class="auth_input"\n          type="password"\n          name="password"\n          placeholder="Password..."\n          minlength="6"\n        />\n      </div>\n      <button\n        class="auth-submit"\n        type="submit"\n        class="registrationUser"\n        id="registrationUser"\n      >\n        Registration\n      </button>\n      </form>\n      \n     ';document.querySelector("#registration-form").addEventListener("submit",Vs)}function Vs(e){e.preventDefault(),console.log("зареєстровано")}js.addEventListener("click",(function(){console.log("відкриваю"),Fs.innerHTML=' <form class="authentication-form" id="authentication-form">\n  <div class="input-form">\n        <input\n          class="auth_input"\n          type="email"\n          name="login"\n          placeholder="Email..."\n        />\n        <input\n          class="auth_input"\n          type="password"\n          name="password"\n          placeholder="Password..."\n          minlength="6"\n        />\n      </div>\n      <button\n        class="auth-submit"\n        type="submit"\n        class="logine-authentication"\n        id="logine-authentication"\n      >\n        Log in to the site\n      </button>\n      <button type="button" class="btn-recower-password">\n        Recower password\n      </button>\n      <button type="button" class="btn-reg-open-form" id="btn-reg-open-form">\n        Registration\n      </button>\n      </form>';document.querySelector("#btn-reg-open-form").addEventListener("click",Hs),Bs.classList.remove("is_hidden");document.querySelector("#authentication-form").addEventListener("submit",$s)})),Us.addEventListener("click",(function(){Bs.classList.add("is_hidden")})),o("dpZmf"),(l=o("krGWQ")).default.switcher.addEventListener("click",(function(){document.body.classList.toggle("theme-dark")}));
//# sourceMappingURL=index.0ec9f165.js.map