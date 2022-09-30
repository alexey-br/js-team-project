import MoviesLibrary from './Movies-library';
import createMoviesMarkup from '../templates/movies-markup';
import renderPagination from './render-pagination';
import renderModal from './render-modal';

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
refs.libraryMoviesContainer.addEventListener('click', onMovieCardClick);
refs.libraryMoviesPagination.addEventListener(
  'click',
  onMovieLibraryPaginationClick
);

const userLibrary = new MoviesLibrary(
  refs.libraryMoviesContainer,
  createMoviesMarkup
);

userLibrary.storageName = LS_WATCHED;

updateMoviesLibrary(userLibrary);

function onMovieCardClick(e) {
  const targetEl = e.target.closest('li');
  if (!targetEl) return;

  const movieId = Number(targetEl.dataset.movieId);

  const movieData = getMovieDatafromLS(movieId, userLibrary);

  renderModal(movieData);
}

function getMovieDatafromLS(movieId, libraryName) {
  const moviesList = JSON.parse(localStorage.getItem(libraryName.storageName));
  if (!moviesList) return;

  const movieData = moviesList.find(({ id }) => id === movieId);

  return movieData;
}

function updateMoviesLibrary(moviesLibrary) {
  clearLibraryContainer();

  const moviesList = JSON.parse(
    localStorage.getItem(moviesLibrary.storageName)
  );
  if (!moviesList || moviesList.length < 1) return;

  moviesLibrary.render();

  if (moviesList.length > 20) {
    renderPagination(
      moviesLibrary.page,
      moviesLibrary.pages,
      refs.libraryMoviesPagination
    );
  }
}

function onWatchedBtnClick(e) {
  setWatchedBtnActive();
  userLibrary.storageName = LS_WATCHED;
  updateMoviesLibrary(userLibrary);
}

function onQueueBtnClick(e) {
  setQueueBtnActive();
  userLibrary.storageName = LS_QUEUE;
  updateMoviesLibrary(userLibrary);
}

function onMovieLibraryPaginationClick(e) {
  const target = e.target.closest('button');
  if (!target) return;

  if (target.dataset.page) {
    userLibrary.page = Number(target.dataset.page);
  }
  if (target.dataset.pageStep) {
    userLibrary.page += Number(target.dataset.pageStep);
  }
  updateMoviesLibrary(userLibrary);
}

function setWatchedBtnActive() {
  refs.libraryWatchedBtn.classList.add('active__btn');
  refs.libraryQueueBtn.classList.remove('active__btn');
}

function setQueueBtnActive() {
  refs.libraryQueueBtn.classList.add('active__btn');
  refs.libraryWatchedBtn.classList.remove('active__btn');
}

function clearLibraryContainer() {
  refs.libraryMoviesContainer.innerHTML = '';
  refs.libraryMoviesPagination.innerHTML = '';
}
