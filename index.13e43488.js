!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){t&&n(e.prototype,t);o&&n(e,o);return e}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o.default(e,t,n[t])}))}return e};var n,o=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("b6vgZ",(function(t,n){e(t.exports,"default",(function(){return r}));var o=a("j8uH5");function r(e){return e.reduce((function(e,t){var n=(0,o.normalizeMovieData)(t),r=n.id,a=n.genres,i=n.poster_path,c=n.release_date,s=n.title,l=n.vote_average,u=l?'<span class="card__rating   ">'.concat(l,"</span>"):"";return"".concat(e,'\n      <li class="card__film"  data-movie-id="').concat(r,'">\n        <img class="card__img"src="').concat(i,'" alt="').concat(s,' movie poster" >\n        <div class="card__info">\n        <h2 class="card__title">').concat(s,'</h2>\n        <p class="card__text">\n        <span class="card__genre">').concat(a,'</span>\n        <span class="card__release">').concat(c,"</span>").concat(u,"\n        </p>\n        </div>\n      </li>\n      ")}),"")}})),a.register("j8uH5",(function(n,o){e(n.exports,"decodeMoviesGenres",(function(){return c})),e(n.exports,"normalizeMovieData",(function(){return s}));var r=a("dDDEV"),i=a("gU07N");function c(e,n){return e.map((function(e){var o=e.genre_ids.map((function(e){return{id:e,name:n[e]}}));return t(r)({},e,{genres:o})}))}function s(e){var n=t(r)({},e),o=n.poster_path,a=n.release_date,c=n.genres;return n.poster_path=o?"".concat("https://image.tmdb.org/t/p/","w500").concat(o):t(i),n.release_date=a?String(parseInt(a)):"No date",0===c.length?n.genres="No genre":c.length<4?n.genres=c.map((function(e){return e.name})).join(", "):n.genres="".concat(c[0].name,", ").concat(c[1].name,", Other"),n}})),a.register("gU07N",(function(e,t){e.exports=a("aNJCr").getBundleURL("bEjec")+a("iE7OH").resolve("4FmL2")})),a.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),r[e]=t),t}})),a.register("4Nugj",(function(t,n){e(t.exports,"default",(function(){return o}));var o={teamContainer:document.querySelector(".team-container"),openModalBtn:document.querySelector("[data-modal-team-open]"),closeModalBtn:document.querySelector("[data-modal-team-close]"),teamModal:document.querySelector("[data-modal-team]"),searchForm:document.querySelector("[data-search]"),moviesContainer:document.querySelector("[data-movies]"),paginationContainer:document.querySelector("[data-pages]"),movieModal:document.querySelector("[data-movie-modal]"),movieModalCloseBtn:document.querySelector("[data-movie-modal-close]"),switcher:document.querySelector(".switcher-toggle"),spinner:document.getElementById("page-preloader"),errorOutput:document.querySelector("[data-message]"),goTopBtn:document.querySelector("[data-go-to-top]")}})),a.register("8ROq3",(function(t,n){e(t.exports,"default",(function(){return r}));var o=a("eW7yj");function r(e,t,n){n.innerHTML=(0,o.default)(e,t)}})),a.register("eW7yj",(function(t,n){function o(e,t){var n=e-2,o=e+2;n<1&&(n=1,o=5>t?t:5),o>t&&(o=t,n=t-5<2?1:t-4);for(var r="",a=n;a<=o;a+=1){r+="<button ".concat(a===e?'class="pagination-btn current-page"':"",' data-page="').concat(a,'" class="pagination-btn">').concat(a,"</button>")}return(1===e?'<button disabled class="pagination-btn disabled"><svg class="arrow__icon" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n                <path d="M25.334 16h-18.668M16 25.334l-9.334-9.334 9.334-9.334"></path>\n              </svg></button>':'<button data-page-step="-1" class="pagination-btn"><svg class="arrow__icon" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n                <path d="M25.334 16h-18.668M16 25.334l-9.334-9.334 9.334-9.334"></path>\n              </svg></button>')+(n>1?'<button data-page="1" class="pagination-btn">1</button>':"")+(n>2?'<span class="span-btn">...</span>':"")+r+(o<t-1?'<span class="span-btn">...</span>':"")+(o<t?'<button data-page="'.concat(t,'" class="pagination-btn">').concat(t,"</button>"):"")+(e===t?'<button disabled class="pagination-btn disabled"><svg class="arrow__icon" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n                <path d="M6.666 16h18.668M16 25.334l9.334-9.334-9.334-9.334"></path>\n              </svg></button>':'<button data-page-step="1" class="pagination-btn"><svg class="arrow__icon" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n                <path d="M6.666 16h18.668M16 25.334l9.334-9.334-9.334-9.334"></path>\n              </svg></button>')}e(t.exports,"default",(function(){return o}))})),a.register("lEOFC",(function(t,n){e(t.exports,"default",(function(){return l}));var o=a("dyT35"),r=a("e0pzE"),i=a("j8uH5"),c=a("4s6iC"),s=a("X6Fz6");function l(e){var t=(0,i.normalizeMovieData)(e),n=t.id,a=(0,s.checkMovieIsInList)(n,c.LS_WATCHED),l=(0,s.checkMovieIsInList)(n,c.LS_QUEUE),u=a?function(){return(0,s.removeMovieFromList)(n,c.LS_WATCHED)}:function(){return(0,s.addMovieToList)(e,c.LS_WATCHED)},d=l?function(){return(0,s.removeMovieFromList)(n,c.LS_QUEUE)}:function(){return(0,s.addMovieToList)(e,c.LS_QUEUE)},f=o.create((0,r.default)(t,a,l),{onShow:function(e){window.addEventListener("keydown",p),window.addEventListener("click",m),e.element().querySelector(".modal__close").onclick=e.close,document.body.classList.toggle("modal-open")},onClose:function(e){window.removeEventListener("keydown",p),window.removeEventListener("click",m),document.body.classList.toggle("modal-open")}});function p(e){"Escape"===e.code&&(f.element().classList.contains("visually-hidden")||f.close())}function m(e){"basicLightbox__placeholder"===e.target.classList.value&&f.close()}f.show();var g=document.querySelector("[data-watched]"),v=document.querySelector("[data-queue]");g.addEventListener("click",u),v.addEventListener("click",d)}})),a.register("dyT35",(function(e,t){e.exports=function e(t,n,o){function r(i,c){if(!n[i]){if(!t[i]){var s=void 0;if(!c&&s)return s(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[i]={exports:{}};t[i][0].call(u.exports,(function(e){return r(t[i][1][e]||e)}),u,u.exports,e,t,n,o)}return n[i].exports}for(var a=void 0,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=r(a,"IMG"),c=r(a,"VIDEO"),s=r(a,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var c={element:function(){return n},visible:function(){return a(n)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(c)}))},close:i};return c}},{}]},{},[1])(1)})),a.register("e0pzE",(function(t,n){function o(e,t,n){var o=e.id,r=e.title,a=e.original_title,i=e.vote_average,c=e.vote_count,s=e.popularity,l=e.genres,u=e.overview,d=e.poster_path,f=t?"remove from watched":"add to watched",p=n?"remove from queue":"add to queue",m="<span>No votes</span>";return i>0&&(m='\n    <span class="modal__rating-right-item--color">'.concat(i,'</span> /\n    <span class="modal__rating-right-item--shadow">').concat(c,"</span>")),'\n  <div class="modal__container">\n      <div class="modal__close">\n        <div class="modal__close-first"></div>\n        <div class="modal__close-second"></div>\n      </div>\n      <div class="modal-wrap" data-movie-details>\n        <div class="modal__picture-wrap">\n          <img\n          class="modal__picture"\n          src="'.concat(d,'"\n          alt="film-picture"\n          />\n          <button class="modal__button-play trailer-button" data-id="').concat(o,'">\n            <img class="modal__img-play" src="https://www.freepnglogos.com/uploads/play-button-png/play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-27.png" alt="play trailer" width="100" height="100" />\n          </button>\n        </div>\n        <div class="modal__desc-wrap">\n          <h2 class="modal-heading">').concat(r,'</h2>\n          <div class="modal__rating-wrap">\n            <ul class="modal__rating-left-list">\n              <li class="modal__rating-left-item">Vote / Votes</li>\n              <li class="modal__rating-left-item">Popularity</li>\n              <li class="modal__rating-left-item">Original Title</li>\n              <li class="modal__rating-left-item">Genre</li>\n            </ul>\n            <ul class="modal__rating-right-list">\n              <li class="modal__rating-right-item">\n                ').concat(m,'\n              </li>\n              <li class="modal__rating-right-item">').concat(s,'</li>\n              <li class="modal__rating-right-item modal__rating-right-item--uppercase">').concat(a,'</li>\n              <li class="modal__rating-right-item">').concat(l,'</li>\n            </ul>\n          </div>\n          <div class="modal__content-wrap">\n            <h4 class="modal__content-heading">About</h4>\n            <p class="modal__content">\n              ').concat(u,'\n            </p>\n          </div>\n          <div class="modal__button-wrap" data-id="').concat(o,'">\n            <button class="modal__button btn-watch" data-watched>').concat(f,'</button>\n            <button class="modal__button btn-queue" data-queue>').concat(p,"</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  ")}e(t.exports,"default",(function(){return o}))})),a.register("4s6iC",(function(t,n){e(t.exports,"LS_QUEUE",(function(){return o})),e(t.exports,"LS_WATCHED",(function(){return r}));var o="queueForWatch",r="watchedMovies"})),a.register("X6Fz6",(function(n,o){e(n.exports,"addMovieToList",(function(){return i})),e(n.exports,"removeMovieFromList",(function(){return c})),e(n.exports,"checkMovieIsInList",(function(){return s}));var r=a("8nrFW");function i(e,n){var o=JSON.parse(localStorage.getItem(n)),a=[];a=o?t(r)(o).concat([e]):[e],localStorage.setItem(n,JSON.stringify(a))}function c(e,t){var n=JSON.parse(localStorage.getItem(t));if(n){var o=n.filter((function(t){return t.id!==e}));localStorage.setItem(t,JSON.stringify(o))}}function s(e,t){var n=JSON.parse(localStorage.getItem(t));return!!n&&n.some((function(t){return t.id===e}))}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||o.default(e)||i.default(e)||r.default()};var n=c(a("kMC0W")),o=c(a("7AJDX")),r=c(a("8CtQK")),i=c(a("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return o.default(e)};var n,o=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o.default(e,t)};var n,o=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8vL8o",(function(t,n){e(t.exports,"default",(function(){return r}));var o=a("4Nugj");function r(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}o.default.goTopBtn.addEventListener("click",r),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&o.default.goTopBtn.classList.add("back-to-top-show");e<t&&o.default.goTopBtn.classList.remove("back-to-top-show")}))})),a("iE7OH").register(JSON.parse('{"bEjec":"index.13e43488.js","4FmL2":"noImageAvailable.4bf2d6d5.jpg"}'))}();
//# sourceMappingURL=index.13e43488.js.map
