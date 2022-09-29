import * as basicLightbox from 'basiclightbox';
import refs from './refs';

export default function renderModal({
  id,
  title,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  poster_path,
  release_date,
}) {
  const BASE_URL = 'https://image.tmdb.org/t/p/';
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
      <div class="modal-wrap" data-movie-details>
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
            <button class="modal__button btn-watch" data-watched>add to watched</button>
            <button class="modal__button btn-queue" data-queue>add to queue</button>
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
        document.body.classList.toggle('modal-open');
      },
      onClose: modal => {
        window.removeEventListener('keydown', escapeKeyCloseModal);
        window.removeEventListener('click', clickForCloseModal);
        document.body.classList.toggle('modal-open');
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

  refs.movieDetails = document.querySelector('[data-movie-details]');
  refs.movieDetails.movieData = {
    id,
    title,
    original_title,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
    poster_path,
    release_date,
  };

  const addToWatchedBtnRef = document.querySelector('[data-watched]');
  const addToQueueBtnRef = document.querySelector('[data-queue]');

  addToWatchedBtnRef.addEventListener('click', addToWatched);
  addToQueueBtnRef.addEventListener('click', addToQueue);
}

function addToWatched(e) {
  const { movieData } = refs.movieDetails;
  addMovieToList(movieData, 'watchedMovies');
  removeMovieFromList(movieData.id, 'queueForWatch');
  // updateMoviesQueue();
  // updateWatchedMovies();
}

function addToQueue(e) {
  const { movieData } = refs.movieDetails;
  addMovieToList(movieData, 'queueForWatch');
  // updateMoviesQueue();
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
