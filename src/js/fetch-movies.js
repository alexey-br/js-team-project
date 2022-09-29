import * as basicLightbox from 'basiclightbox';
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
// refs.movieModalCloseBtn.addEventListener('click', closeMovieModal);
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
  const targetEl = e.target.closest('li');
  if (!targetEl) return;

  try {
    const movieId = Number(targetEl.dataset.movieId);
    const movieData = await tmdbService.fetchMovie(movieId);

    renderModal(movieData);

    // openMovieModal();
  } catch (error) {
    console.log(error);
  }
}

// -------------------------------------------
function renderModal({
  id,
  title,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  poster_path,
}) {
  const BASE_URL = 'http://image.tmdb.org/t/p/';
  const movieGenres = genres.map(genre => genre.name).join(', ');
  const poster = poster_path
    ? `${BASE_URL}w500${poster_path}`
    : './default-poster.jpg';

  const modal = basicLightbox.create(
    `
  <div class="modal__container">
    <div class="modal__close">
      <div class="modal__close-first"></div>
      <div class="modal__close-second"></div>
    </div>
    <div class="modal-wrap">
      <div class="modal__picture-wrap">
        <img
        class="modal__picture"
        src="${poster}"
        alt="film-picture"
        />
        <button class="modal__button-play trailer-button" data-id="${id}">
          <img class="modal__img-play" src="https://www.freepnglogos.com/uploads/play-button-png/play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-27.png" alt="play trailer" width="100" height="100" />
        </button>
      </div>
      <div class="modal__desc-wrap">
        <h2 class="modal-heading">${title}</h2>
        <div class="modal__rating-wrap">
          <ul class="modal__rating-left-list">
            <li class="modal__rating-left-item">Vote / Votes</li>
            <li class="modal__rating-left-item">Popularity</li>
            <li class="modal__rating-left-item">Original Title</li>
            <li class="modal__rating-left-item">Genre</li>
          </ul>
          <ul class="modal__rating-right-list">
            <li class="modal__rating-right-item">
              <span class="modal__rating-right-item--color">${vote_average}</span> /
              <span class="modal__rating-right-item--shadow">${vote_count}</span>
            </li>
            <li class="modal__rating-right-item">${popularity}</li>
            <li class="modal__rating-right-item modal__rating-right-item--uppercase">${original_title}</li>
            <li class="modal__rating-right-item">${movieGenres}</li>
          </ul>
        </div>
        <div class="modal__content-wrap">
          <h4 class="modal__content-heading">About</h4>
          <p class="modal__content">
            ${overview}
          </p>
        </div>
        <div class="modal__button-wrap" data-id="${id}">
          <button class="modal__button btn-watch">add to watched</button>
          <button class="modal__button btn-queue">add to queue</button>
        </div>
      </div>
    </div>
  </div>
`,
    {
      onShow: modal => {
        window.addEventListener('keydown', escapeKeyCloseModal);
        window.addEventListener('click', clickForCloseModal);
        modal.element().querySelector('.modal__close').onclick = modal.close;
      },
      onClose: modal => {
        window.removeEventListener('keydown', escapeKeyCloseModal);
        window.removeEventListener('click', clickForCloseModal);
      },
    }
  );

  function escapeKeyCloseModal(event) {
    if (event.code === 'Escape') {
      if (!modal.element().classList.contains('visually-hidden')) {
        modal.close();
      }
    }
  }

  function clickForCloseModal(event) {
    // console.log(event.target.classList.value);
    if (event.target.classList.value === 'basicLightbox__placeholder') {
      modal.close();
    }
  }

  modal.show();
  // textContentWatched(id);
  // textContentQueue(id);
}

// async function onClickCard(e) {
//   e.preventDefault();

//   // console.log(e.target);
//   if (e.target.nodeName !== 'DIV' && e.target.nodeName !== 'UL') {
//     if (e.target.nodeName === 'IMG') {
//       const id = e.target.parentElement.parentElement.parentElement.dataset.id;
//       // console.log(e.target.parentElement.parentElement.parentElement);
//       const details = await filmDetails(id);
//       renderModal(details);
//     }
//     if (e.target.nodeName === 'P') {
//       const id = e.target.parentElement.parentElement.parentElement.dataset.id;
//       // console.log(e.target.parentElement.parentElement.parentElement);
//       const details = await filmDetails(id);
//       renderModal(details);
//     }
//   }

//   const id = e.target.parentElement.parentElement.parentElement.dataset.id;
//   addListener(id);

//   addWatched();

//   addQueue();
// }

// -------------------------------------------

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
