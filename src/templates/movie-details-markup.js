const BASE_URL = 'https://image.tmdb.org/t/p/';

export default function createMovieDetailsMarkup(movieData) {
  const {
    title,
    original_title,
    vote_average,
    votes,
    popularity,
    genres,
    overview,
    poster_path,
  } = movieData;

  const movieGenres = genres.map(genre => genre.name).join(', ');
  const poster = poster_path
    ? `${BASE_URL}w500${poster_path}`
    : './default-poster.jpg';

  return `
  <div>
    <img src="${poster}" alt="${title} movie poster"
    />
  </div>
  <div>
    <div >
    <h2>${title}</h2>
    <p>Vote / Votes - ${vote_average} / ${votes}</p>
    <p>Popularity - ${popularity}</p>
    <p>Original Title - ${original_title}</p>
    <p>Genre - ${movieGenres}</p>
    <h3>About</h3>
    <p>${overview}</p>
    </div>
      <button data-wathed>ADD TO WATCHED</button>
      <button data-queue>ADD TO QUEUE</button>
    </div>
  `;
}
