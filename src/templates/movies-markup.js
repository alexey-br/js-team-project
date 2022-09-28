const BASE_URL = 'http://image.tmdb.org/t/p/';

export default function createMoviesMarkup(moviesData) {
  return moviesData.reduce((acc, movie) => {
    const { id, genres, poster_path, release_date, title, vote_average } =
      movie;

    const genresList = genres.map(({ name }) => name).join(', ');
    const poster = poster_path
      ? `${BASE_URL}w500${poster_path}`
      : './default-poster.jpg';

    return `${acc}
      <li class="card__film"  data-movie-id="${id}">
        <img class="card__img"src="${poster}" alt="${title} movie poster" >
        <div class="card__info">
        <h2 class="card__title">${title}</h2>
        <p class="card__text">
        <span class="card__genre">${genresList}</span>
        <span class="card__release">${release_date}</span><span class="card__rating   ">${vote_average}</span>
        </p>
        </div>
      </li>
      `;
  }, '');
}
