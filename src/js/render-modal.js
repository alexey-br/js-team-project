import * as basicLightbox from 'basiclightbox';
import refs from './refs';
import createModalMarkup from '../templates/modal-markup';
import { normalizeMovieData } from './data-normalizer';
import { LS_QUEUE, LS_WATCHED } from './constants';

export default function renderModal(movieDataToRender) {
  const normalizedMovieData = normalizeMovieData(movieDataToRender);
  const { id: movieId } = normalizedMovieData;

  const movieInWatched = checkMovieIsInList(movieId, LS_WATCHED);
  const movieInQueue = checkMovieIsInList(movieId, LS_QUEUE);

  console.log(movieInWatched, movieInQueue);

  const modal = basicLightbox.create(
    createModalMarkup(normalizedMovieData, movieInWatched, movieInQueue),
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
    if (event.target.classList.value === 'basicLightbox__placeholder') {
      modal.close();
    }
  }

  modal.show();

  refs.movieDetails = document.querySelector('[data-movie-details]');
  refs.movieDetails.movieData = movieDataToRender;

  const addToWatchedBtnRef = document.querySelector('[data-watched]');
  const addToQueueBtnRef = document.querySelector('[data-queue]');

  addToWatchedBtnRef.addEventListener('click', addToWatched);
  addToQueueBtnRef.addEventListener('click', addToQueue);
}

function addToWatched(e) {
  const { movieData } = refs.movieDetails;
  addMovieToList(movieData, 'watchedMovies');
  removeMovieFromList(movieData.id, 'queueForWatch');
}

function addToQueue(e) {
  const { movieData } = refs.movieDetails;
  addMovieToList(movieData, 'queueForWatch');
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

function checkMovieIsInList(movieId, listName) {
  console.log(movieId);
  const moviesList = JSON.parse(localStorage.getItem(listName));
  const movieIsInList = moviesList.some(({ id }) => id === movieId);
  return movieIsInList;
}
