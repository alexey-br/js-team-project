import * as basicLightbox from 'basiclightbox';
import createModalMarkup from '../templates/modal-markup';
import { normalizeMovieData } from './data-normalizer';
import { LS_QUEUE, LS_WATCHED } from './constants';
// import {
//   checkMovieIsInList,
//   addMovieToList,
//   removeMovieFromList,
// } from './LS-service';

export default function renderModal(movieDataToRender) {
  const normalizedMovieData = normalizeMovieData(movieDataToRender);
  const { id: movieId } = normalizedMovieData;

  const movieInWatched = checkMovieIsInList(movieId, LS_WATCHED);
  const movieInQueue = checkMovieIsInList(movieId, LS_QUEUE);

  const watchedBtnAction = movieInWatched
    ? () => removeMovieFromList(movieId, LS_WATCHED)
    : () => addMovieToList(movieDataToRender, LS_WATCHED);

  const queueBtnAction = movieInQueue
    ? () => removeMovieFromList(movieId, LS_QUEUE)
    : () => addMovieToList(movieDataToRender, LS_QUEUE);

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

  const addToWatchedBtnRef = document.querySelector('[data-watched]');
  const addToQueueBtnRef = document.querySelector('[data-queue]');

  addToWatchedBtnRef.addEventListener('click', watchedBtnAction);
  addToQueueBtnRef.addEventListener('click', queueBtnAction);
}

function addMovieToList(movieData, listName) {
  const prevList = JSON.parse(localStorage.getItem(listName));
  let newList = [];

  if (prevList) {
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
