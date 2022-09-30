export default function createMoviesMarkup(moviesData) {
  return moviesData.reduce((acc, movie) => {
    const { id, genres, poster_path, release_date, title, vote_average } =
      movie;

    let genresList = '';
    if (genres.length === 0) {
      genresList = 'No genre';
    } else if (genres.length < 3) {
      genresList = genres.map(({ name }) => name).join(', ');
    } else {
      genresList = `${genres[0].name}, ${genres[1].name}, Other`;
    }

    const rating = vote_average
      ? `<span class="card__rating   ">${vote_average}</span>`
      : '';

    return `${acc}
      <li class="card__film"  data-movie-id="${id}">
        <img class="card__img"src="${poster_path}" alt="${title} movie poster" >
        <div class="card__info">
        <h2 class="card__title">${title}</h2>
        <p class="card__text">
        <span class="card__genre">${genresList}</span>
        <span class="card__release">${release_date}</span>${rating}
        </p>
        </div>
      </li>
      `;
  }, '');
}
