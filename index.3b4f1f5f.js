function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=n.parcelRequired7c6;null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},n.parcelRequired7c6=r),r.register("kyEFX",(function(e,n){var o,a;t(e.exports,"register",(function(){return o}),(function(t){return o=t})),t(e.exports,"resolve",(function(){return a}),(function(t){return a=t}));var r={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)r[e[n]]=t[e[n]]},a=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r.register("5SV25",(function(e,n){t(e.exports,"default",(function(){return a}));var o=r("8Ftgf");function a(t){return t.reduce(((t,e)=>{const n=(0,o.normalizeMovieData)(e),{id:a,genres:r,poster_path:i,release_date:s,title:l,vote_average:c}=n;return`${t}\n      <li class="card__film"  data-movie-id="${a}">\n        <img class="card__img"src="${i}" alt="${l} movie poster" >\n        <div class="card__info">\n        <h2 class="card__title">${l}</h2>\n        <p class="card__text">\n        <span class="card__genre">${r}</span>\n        <span class="card__release">${s}</span>${c?`<span class="card__rating   ">${c}</span>`:""}\n        </p>\n        </div>\n      </li>\n      `}),"")}})),r.register("8Ftgf",(function(n,o){t(n.exports,"decodeMoviesGenres",(function(){return i})),t(n.exports,"normalizeMovieData",(function(){return s}));var a=r("jeWXt");function i(t,e){return t.map((t=>{const n=t.genre_ids.map((t=>({id:t,name:e[t]})));return{...t,genres:n}}))}function s(t){let n={...t};const{poster_path:o,release_date:r,genres:i}=n;return n.poster_path=o?`https://image.tmdb.org/t/p/w500${o}`:e(a),n.release_date=r?String(parseInt(r)):"No date",0===i.length?n.genres="No genre":i.length<4?n.genres=i.map((({name:t})=>t)).join(", "):n.genres=`${i[0].name}, ${i[1].name}, Other`,n}})),r.register("jeWXt",(function(t,e){t.exports=new URL(r("kyEFX").resolve("9cBl5"),import.meta.url).toString()})),r.register("krGWQ",(function(e,n){t(e.exports,"default",(function(){return o}));var o={teamContainer:document.querySelector(".team-container"),openModalBtn:document.querySelector("[data-modal-team-open]"),closeModalBtn:document.querySelector("[data-modal-team-close]"),teamModal:document.querySelector("[data-modal-team]"),searchForm:document.querySelector("[data-search]"),moviesContainer:document.querySelector("[data-movies]"),paginationContainer:document.querySelector("[data-pages]"),movieModal:document.querySelector("[data-movie-modal]"),movieModalCloseBtn:document.querySelector("[data-movie-modal-close]"),switcher:document.querySelector(".switcher-toggle"),spinner:document.getElementById("page-preloader"),errorOutput:document.querySelector("[data-message]"),goTopBtn:document.querySelector("[data-go-to-top]")}})),r.register("22sps",(function(e,n){t(e.exports,"default",(function(){return a}));var o=r("dw8SQ");function a(t,e,n){n.innerHTML=(0,o.default)(t,e)}})),r.register("dw8SQ",(function(e,n){function o(t,e){let n=t-2,o=t+2;n<1&&(n=1,o=5>e?e:5),o>e&&(o=e,n=e-5<2?1:e-4);let a="";for(let e=n;e<=o;e+=1){a+=`<button ${e===t?'class="pagination-btn current-page"':""} data-page="${e}" class="pagination-btn">${e}</button>`}return(1===t?'<button disabled class="pagination-btn disabled"><svg class="arrow__icon" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n                <path d="M25.334 16h-18.668M16 25.334l-9.334-9.334 9.334-9.334"></path>\n              </svg></button>':'<button data-page-step="-1" class="pagination-btn"><svg class="arrow__icon" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n                <path d="M25.334 16h-18.668M16 25.334l-9.334-9.334 9.334-9.334"></path>\n              </svg></button>')+(n>1?'<button data-page="1" class="pagination-btn">1</button>':"")+(n>2?'<span class="span-btn">...</span>':"")+a+(o<e-1?'<span class="span-btn">...</span>':"")+(o<e?`<button data-page="${e}" class="pagination-btn">${e}</button>`:"")+(t===e?'<button disabled class="pagination-btn disabled"><svg class="arrow__icon" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n                <path d="M6.666 16h18.668M16 25.334l9.334-9.334-9.334-9.334"></path>\n              </svg></button>':'<button data-page-step="1" class="pagination-btn"><svg class="arrow__icon" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n                <path d="M6.666 16h18.668M16 25.334l9.334-9.334-9.334-9.334"></path>\n              </svg></button>')}t(e.exports,"default",(function(){return o}))})),r.register("99kNq",(function(e,n){t(e.exports,"default",(function(){return s}));var o=r("9B8F0"),a=r("krGWQ"),i=r("8Ftgf");function s(t){const e=(0,i.normalizeMovieData)(t),{id:n,title:r,original_title:s,vote_average:d,vote_count:u,popularity:m,genres:g,overview:p,poster_path:f}=e;let v="<span>No votes</span>";d>0&&(v=`\n    <span class="modal__rating-right-item--color">${d}</span> /\n    <span class="modal__rating-right-item--shadow">${u}</span>`);const h=o.create(`\n    <div class="modal__container">\n      <div class="modal__close">\n        <div class="modal__close-first"></div>\n        <div class="modal__close-second"></div>\n      </div>\n      <div class="modal-wrap" data-movie-details>\n        <div class="modal__picture-wrap">\n          <img\n          class="modal__picture"\n          src="${f}"\n          alt="film-picture"\n          />\n          <button class="modal__button-play trailer-button" data-id="${n}">\n            <img class="modal__img-play" src="https://www.freepnglogos.com/uploads/play-button-png/play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-27.png" alt="play trailer" width="100" height="100" />\n          </button>\n        </div>\n        <div class="modal__desc-wrap">\n          <h2 class="modal-heading">${r}</h2>\n          <div class="modal__rating-wrap">\n            <ul class="modal__rating-left-list">\n              <li class="modal__rating-left-item">Vote / Votes</li>\n              <li class="modal__rating-left-item">Popularity</li>\n              <li class="modal__rating-left-item">Original Title</li>\n              <li class="modal__rating-left-item">Genre</li>\n            </ul>\n            <ul class="modal__rating-right-list">\n              <li class="modal__rating-right-item">\n                ${v}\n              </li>\n              <li class="modal__rating-right-item">${m}</li>\n              <li class="modal__rating-right-item modal__rating-right-item--uppercase">${s}</li>\n              <li class="modal__rating-right-item">${g}</li>\n            </ul>\n          </div>\n          <div class="modal__content-wrap">\n            <h4 class="modal__content-heading">About</h4>\n            <p class="modal__content">\n              ${p}\n            </p>\n          </div>\n          <div class="modal__button-wrap" data-id="${n}">\n            <button class="modal__button btn-watch" data-watched>add to watched</button>\n            <button class="modal__button btn-queue" data-queue>add to queue</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  `,{onShow:t=>{window.addEventListener("keydown",_),window.addEventListener("click",b),t.element().querySelector(".modal__close").onclick=t.close,document.body.classList.toggle("modal-open")},onClose:t=>{window.removeEventListener("keydown",_),window.removeEventListener("click",b),document.body.classList.toggle("modal-open")}});function _(t){"Escape"===t.code&&(h.element().classList.contains("visually-hidden")||h.close())}function b(t){"basicLightbox__placeholder"===t.target.classList.value&&h.close()}h.show(),a.default.movieDetails=document.querySelector("[data-movie-details]"),a.default.movieDetails.movieData=t;const w=document.querySelector("[data-watched]"),y=document.querySelector("[data-queue]");w.addEventListener("click",l),y.addEventListener("click",c)}function l(t){const{movieData:e}=a.default.movieDetails;d(e,"watchedMovies"),function(t,e){const n=JSON.parse(localStorage.getItem(e));if(!n)return;const o=n.filter((({id:e})=>e!==t));localStorage.setItem(e,JSON.stringify(o))}(e.id,"queueForWatch")}function c(t){const{movieData:e}=a.default.movieDetails;d(e,"queueForWatch")}function d(t,e){const n=JSON.parse(localStorage.getItem(e));let o=[];if(n){if(n.some((({id:e})=>e===t.id)))return;o=[...n,t]}else o=[t];localStorage.setItem(e,JSON.stringify(o))}})),r.register("9B8F0",(function(t,e){t.exports=function t(e,n,o){function a(i,s){if(!n[i]){if(!e[i]){var l=void 0;if(!s&&l)return l(i,!0);if(r)return r(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[i]={exports:{}};e[i][0].call(d.exports,(function(t){return a(e[i][1][t]||t)}),d,d.exports,t,e,n,o)}return n[i].exports}for(var r=void 0,i=0;i<o.length;i++)a(o[i]);return a}({1:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},a=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=r,n.create=function(t,e){var n=function(t,e){var n=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var i=a(r,"IMG"),s=a(r,"VIDEO"),l=a(r,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),i=function(t){return!1!==e.onClose(s)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(s)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&i()}));var s={element:function(){return n},visible:function(){return r(n)},show:function(t){return!1!==e.onShow(s)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(s)}))},close:i};return s}},{}]},{},[1])(1)})),r.register("dpZmf",(function(e,n){t(e.exports,"default",(function(){return a}));var o=r("krGWQ");function a(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}o.default.goTopBtn.addEventListener("click",a),window.addEventListener("scroll",(function(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e&&o.default.goTopBtn.classList.add("back-to-top-show");t<e&&o.default.goTopBtn.classList.remove("back-to-top-show")}))})),r("kyEFX").register(JSON.parse('{"1378D":"index.3b4f1f5f.js","9cBl5":"noImageAvailable.4bf2d6d5.jpg"}'));
//# sourceMappingURL=index.3b4f1f5f.js.map