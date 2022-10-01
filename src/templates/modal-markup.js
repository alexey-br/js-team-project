export default function createModalMarkup(movieData, isInWatched, isInQueue) {
  const {
    id,
    title,
    original_title,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
    poster_path,
  } = movieData;

  const watchBtnLabel = isInWatched ? 'remove from watched' : 'add to watched';
  const queueBtnLabel = isInQueue ? 'remove from queue' : 'add to queue';

  let votes = '<span>No votes</span>';
  if (vote_average > 0) {
    votes = `
    <span class="modal__rating-right-item--color">${vote_average}</span> /
    <span class="modal__rating-right-item--shadow">${vote_count}</span>`;
  }

  return `
  <div class="modal__container">
      <div class="modal__close">
        <div class="modal__close-first"></div>
        <div class="modal__close-second"></div>
      </div>
      <div class="modal-wrap" data-movie-details>
        <div class="modal__picture-wrap">
          <img
          class="modal__picture"
          src="${poster_path}"
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
                ${votes}
              </li>
              <li class="modal__rating-right-item">${popularity}</li>
              <li class="modal__rating-right-item modal__rating-right-item--uppercase">${original_title}</li>
              <li class="modal__rating-right-item">${genres}</li>
            </ul>
          </div>
          <div class="modal__content-wrap">
            <h4 class="modal__content-heading">About</h4>
            <p class="modal__content">
              ${overview}
            </p>
          </div>
          <div class="modal__button-wrap" data-id="${id}">
            <button class="modal__button btn-watch" data-watched>${watchBtnLabel}</button>
            <button class="modal__button btn-queue" data-queue>${queueBtnLabel}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
