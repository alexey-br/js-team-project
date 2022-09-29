import MoviesLibrary from './Movies-library';
import createMoviesMarkup from '../templates/movies-markup';
import renderPagination from './render-pagination';

const refs = {
  moviesQueueContainer: document.querySelector('[data-movies-queue]'),
  moviesQueuePagination: document.querySelector(
    '[data-movies-queue-pagination]'
  ),
  watchedMoviesContainer: document.querySelector('[data-watched-movies]'),
  watchedMoviesPagination: document.querySelector(
    '[data-watched-movies-pagination]'
  ),
};

console.log(refs.moviesQueueContainer)


const moviesQueue = new MoviesLibrary(
  refs.moviesQueueContainer,
  'queueForWatch',
  createMoviesMarkup
);


updateMoviesQueue();

function updateMoviesQueue() {
  moviesQueue.render();
  renderPagination(
    moviesQueue.page,
    moviesQueue.pages,
    refs.moviesQueuePagination
  );
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