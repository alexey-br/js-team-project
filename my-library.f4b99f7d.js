var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var i=r("5SV25"),n=r("22sps"),o=r("99kNq"),s=r("dpZmf");const c={libraryMoviesContainer:document.querySelector("[data-user-library]"),libraryMoviesPagination:document.querySelector("[data-user-library-pagination]"),libraryWatchedBtn:document.querySelector('[data-library="watched"]'),libraryQueueBtn:document.querySelector('[data-library="queue"]')};c.libraryWatchedBtn.addEventListener("click",(function(e){c.libraryWatchedBtn.classList.add("active__btn"),c.libraryQueueBtn.classList.remove("active__btn"),l.storageName="watchedMovies",d(l)})),c.libraryQueueBtn.addEventListener("click",(function(e){c.libraryQueueBtn.classList.add("active__btn"),c.libraryWatchedBtn.classList.remove("active__btn"),l.storageName="queueForWatch",d(l)})),c.libraryMoviesContainer.addEventListener("click",(function(e){const t=e.target.closest("li");if(!t)return;const a=function(e,t){const a=JSON.parse(localStorage.getItem(t.storageName));if(!a)return;return a.find((({id:t})=>t===e))}(Number(t.dataset.movieId),l);(0,o.default)(a)})),c.libraryMoviesPagination.addEventListener("click",(function(e){(0,s.default)();const t=e.target.closest("button");if(!t)return;t.dataset.page&&(l.page=Number(t.dataset.page));t.dataset.pageStep&&(l.page+=Number(t.dataset.pageStep));d(l)}));const l=new class{render(){const e=JSON.parse(localStorage.getItem(this.storageName));if(!e)return;this.pages=Math.ceil(e.length/20);const t=e.reduce(((e,t,a)=>a<20*this.page&&a>=20*(this.page-1)?[...e,t]:e),[]),a=this.createMarkup(t);this.container.innerHTML=a}constructor(e,t){this.container=e,this.storageName="",this.page=1,this.pages=1,this.createMarkup=t}}(c.libraryMoviesContainer,i.default);function d(e){c.libraryMoviesContainer.innerHTML="",c.libraryMoviesPagination.innerHTML="";const t=JSON.parse(localStorage.getItem(e.storageName));!t||t.length<1||(e.render(),t.length>20&&(0,n.default)(e.page,e.pages,c.libraryMoviesPagination))}l.storageName="watchedMovies",d(l);
//# sourceMappingURL=my-library.f4b99f7d.js.map
