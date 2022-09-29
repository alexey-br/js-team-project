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
      //   if (vote_average === 0) {
      //     vote_average = 'No rating';
      //   }

      return { id, genres, poster_path, release_date, title, vote_average };
    }
  );
  return updatedMoviesData;
}
