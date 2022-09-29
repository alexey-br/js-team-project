import MoviesLibrary from './Movies-library';
import createMoviesMarkup from '../templates/movies-markup';
import renderPagination from './render-pagination';

const LS_QUEUE = 'queueForWatch';
const LS_WATCHED = 'watchedMovies';

const refs = {
  libraryMoviesContainer: document.querySelector('[data-user-library]'),
  libraryMoviesPagination: document.querySelector(
    '[data-user-library-pagination]'
  ),
  libraryWatchedBtn: document.querySelector('[data-library="watched"]'),
  libraryQueueBtn: document.querySelector('[data-library="queue"]'),
};

refs.libraryWatchedBtn.addEventListener('click', onWatchedBtnClick);
refs.libraryQueueBtn.addEventListener('click', onQueueBtnClick);

const userLibrary = new MoviesLibrary(
  refs.libraryMoviesContainer,
  createMoviesMarkup
);

userLibrary.storageName = LS_WATCHED;

updateUserLibrary();

function updateUserLibrary() {
  userLibrary.render();
  renderPagination(
    userLibrary.page,
    userLibrary.pages,
    refs.libraryMoviesPagination
  );
}

function onWatchedBtnClick(e) {
  userLibrary.storageName = LS_WATCHED;
  updateUserLibrary();
}

function onQueueBtnClick(e) {
  userLibrary.storageName = LS_QUEUE;
  updateUserLibrary();
}

// function onMoviesQueuePaginationClick(e) {
//   const target = e.target.closest('button');
//   if (!target) return;

//   if (target.dataset.page) {
//     moviesQueue.page = Number(target.dataset.page);
//   }
//   if (target.dataset.pageStep) {
//     moviesQueue.page += Number(target.dataset.pageStep);
//   }
//   updateMoviesQueue();
// }

// // ----------------------------------------------------
// const watchedMovies = new MoviesLibrary(
//   refs.watchedMoviesContainer,
//   'watchedMovies',
//   createMoviesMarkup
// );

// updateWatchedMovies();

// function updateWatchedMovies() {
//   watchedMovies.render();
//   renderPagination(
//     watchedMovies.page,
//     watchedMovies.pages,
//     refs.watchedMoviesPagination
//   );
// }

// function onWatchedMoviesPaginationClick(e) {
//   const target = e.target.closest('button');
//   if (!target) return;

//   if (target.dataset.page) {
//     watchedMovies.page = Number(target.dataset.page);
//   }
//   if (target.dataset.pageStep) {
//     watchedMovies.page += Number(target.dataset.pageStep);
//   }
//   updateWatchedMovies();
// }
