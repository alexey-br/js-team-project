import noImg from '../images/noImageAvailable.jpg';
const BASE_URL = 'https://image.tmdb.org/t/p/';

export function normalizeMoviesData(moviesData, genresMap) {
  const updatedMoviesData = moviesData.map(
    ({ id, genre_ids, poster_path, release_date, title, vote_average }) => {
      const genres = genre_ids.map(genreId => ({
        id: genreId,
        name: genresMap[genreId],
      }));

      poster_path = poster_path ? `${BASE_URL}w500${poster_path}` : noImg;
      release_date = release_date ? String(parseInt(release_date)) : 'No date';

      return { id, genres, poster_path, release_date, title, vote_average };
    }
  );
  return updatedMoviesData;
}

export function normalizeMovieData(movieData) {
  let normalizedMovieData = { ...movieData };
  const { poster_path, release_date, genres } = normalizedMovieData;

  console.log(normalizedMovieData);

  normalizedMovieData['poster_path'] = poster_path
    ? `${BASE_URL}w500${poster_path}`
    : noImg;

  normalizedMovieData['release_date'] = release_date
    ? String(parseInt(release_date))
    : 'No date';

  if (genres.length === 0) {
    normalizedMovieData.genres = 'No genre';
  } else if (genres.length < 4) {
    normalizedMovieData.genres = genres.map(({ name }) => name).join(', ');
  } else {
    normalizedMovieData.genres = `${genres[0].name}, ${genres[1].name}, Other`;
  }

  // console.log(normalizedMovieData);

  return normalizedMovieData;
}
