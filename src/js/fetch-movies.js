import TMDB_Service from './TMDB-Service';
import MoviesLibrary from './Movies-library';
import createMoviesMarkup from '../templates/movies-markup';
import paginationMarkup from '../templates/pagination-markup';
import createMovieDetailsMarkup from '../templates/movie-details-markup';
import refs from './refs';

refs.searchForm.addEventListener('submit', onSearch);
refs.paginationContainer.addEventListener('click', onPaginationClick);
refs.moviesContainer.addEventListener('click', onMovieCardClick);
refs.moviesQueueContainer.addEventListener('click', onMovieCardClick);
refs.watchedMoviesContainer.addEventListener('click', onMovieCardClick);
refs.movieModalCloseBtn.addEventListener('click', closeMovieModal);
refs.watchedMoviesPagination.addEventListener(
  'click',
  onWatchedMoviesPaginationClick
);
refs.moviesQueuePagination.addEventListener(
  'click',
  onMoviesQueuePaginationClick
);

const tmdbService = new TMDB_Service();
tmdbService.getGenres();

getMovies();

async function getMovies() {
  try {
    const { results, page, total_pages } = await tmdbService.fetchMovies();
    renderMovies(results);
    renderPagination(page, total_pages, refs.paginationContainer);
  } catch (error) {
    console.log('this is error!', error);
  }
}

async function onMovieCardClick(e) {
  if (e.target.tagName !== 'IMG') return;

  try {
    const movieId = Number(e.target.dataset.movieId);
    const movieData = await tmdbService.fetchMovie(movieId);

    renderMovieModal(movieData);

    openMovieModal();
  } catch (error) {
    console.log(error);
  }
}

function renderMovieModal(movieData) {
  const { id, genres, poster_path, release_date, title, vote_average } =
    movieData;

  refs.movieDetails.movieData = {
    id,
    genres,
    poster_path,
    release_date,
    title,
    vote_average,
  };

  refs.movieDetails.innerHTML = createMovieDetailsMarkup(movieData);

  const addToWatchedBtnRef = document.querySelector('[data-wathed]');
  const addToQueueBtnRef = document.querySelector('[data-queue]');

  addToWatchedBtnRef.addEventListener('click', addToWatched, { once: true });
  addToQueueBtnRef.addEventListener('click', addToQueue, { once: true });
}

function openMovieModal() {
  refs.movieModal.classList.remove('tmp-backdrop--is-hidden');
}

function closeMovieModal() {
  refs.movieModal.classList.add('tmp-backdrop--is-hidden');
}

function renderMovies(moviesData) {
  const updatedMoviesData = updateMovieGeneres(
    moviesData,
    tmdbService.genresMap
  );
  refs.moviesContainer.innerHTML = createMoviesMarkup(updatedMoviesData);
}

function updateMovieGeneres(moviesData, genresMap) {
  const updatedMoviesData = moviesData.map(
    ({ id, genre_ids, poster_path, release_date, title, vote_average }) => {
      const genres = genre_ids.map(genreId => ({
        id: genreId,
        name: genresMap[genreId],
      }));
      return { id, genres, poster_path, release_date, title, vote_average };
    }
  );
  return updatedMoviesData;
}

function renderPagination(currentPage, totalPages, container) {
  container.innerHTML = paginationMarkup(currentPage, totalPages);
}

function onPaginationClick(e) {
  const target = e.target.closest('button');
  if (!target) return;

  if (target.dataset.page) {
    tmdbService.currentPage = Number(target.dataset.page);
  }
  if (target.dataset.pageStep) {
    tmdbService.currentPage =
      tmdbService.page + Number(target.dataset.pageStep);
  }
  getMovies();
}

function onSearch(e) {
  e.preventDefault();

  const newQuery = e.currentTarget.searchQuery.value;

  tmdbService.query = newQuery.trim();
  tmdbService.resetPage();
  getMovies();
}

function addToWatched(e) {
  const { movieData } = refs.movieDetails;
  addMovieToList(movieData, 'watchedMovies');
  removeMovieFromList(movieData.id, 'queueForWatch');
  updateMoviesQueue();
  updateWatchedMovies();
  closeMovieModal();
}

function addToQueue(e) {
  const { movieData } = refs.movieDetails;
  addMovieToList(movieData, 'queueForWatch');
  updateMoviesQueue();
  closeMovieModal();
}

function addMovieToList(movieData, listName) {
  const prevList = JSON.parse(localStorage.getItem(listName));
  let newList = [];

  if (prevList) {
    const movieIsInList = prevList.some(({ id }) => id === movieData.id);
    if (movieIsInList) return;

    newList = [...prevList, movieData];
  } else {
    newList = [movieData];
  }

  localStorage.setItem(listName, JSON.stringify(newList));
}

function removeMovieFromList(idToRemove, listName) {
  const prevList = JSON.parse(localStorage.getItem(listName));
  if (!prevList) return;

  const newList = prevList.filter(({ id }) => id !== idToRemove);
  localStorage.setItem(listName, JSON.stringify(newList));
}

// ----------------------------------------------------

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

function onMoviesQueuePaginationClick(e) {
  const target = e.target.closest('button');
  if (!target) return;

  if (target.dataset.page) {
    moviesQueue.page = Number(target.dataset.page);
  }
  if (target.dataset.pageStep) {
    moviesQueue.page += Number(target.dataset.pageStep);
  }
  updateMoviesQueue();
}

// ----------------------------------------------------
const watchedMovies = new MoviesLibrary(
  refs.watchedMoviesContainer,
  'watchedMovies',
  createMoviesMarkup
);

updateWatchedMovies();

function updateWatchedMovies() {
  watchedMovies.render();
  renderPagination(
    watchedMovies.page,
    watchedMovies.pages,
    refs.watchedMoviesPagination
  );
}

function onWatchedMoviesPaginationClick(e) {
  const target = e.target.closest('button');
  if (!target) return;

  if (target.dataset.page) {
    watchedMovies.page = Number(target.dataset.page);
  }
  if (target.dataset.pageStep) {
    watchedMovies.page += Number(target.dataset.pageStep);
  }
  updateWatchedMovies();
}
