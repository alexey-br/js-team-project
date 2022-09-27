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
      <li>
        <img src="${poster}" alt="${title} movie poster" data-movie-id="${id}" style="width: 200px">
        <p>${title}</p>
        <p><span>${genresList}</span><span>${release_date}</span><span>${vote_average}</span></p>
      </li>
      `;
  }, '');
}
