import * as basicLightbox from 'basiclightbox';
import TMDB_Service from './TMDB-Service';
import createMoviesMarkup from '../templates/movies-markup';
import createMovieDetailsMarkup from '../templates/movie-details-markup';
import refs from './refs';
import renderPagination from './render-pagination';
import renderModal from './render-modal';

refs.searchForm.addEventListener('submit', onSearch);
refs.paginationContainer.addEventListener('click', onPaginationClick);
refs.moviesContainer.addEventListener('click', onMovieCardClick);

const tmdbService = new TMDB_Service();
tmdbService.getGenres();

getMovies();

async function getMovies() {
  try {
    const { results, page, total_pages } = await tmdbService.fetchMovies();
    renderMovies(results);
    renderPagination(page, total_pages, refs.paginationContainer);
  } catch (error) {
    console.log('this is error!', error);
  }
}

async function onMovieCardClick(e) {
  const targetEl = e.target.closest('li');
  if (!targetEl) return;

  try {
    const movieId = Number(targetEl.dataset.movieId);
    const movieData = await tmdbService.fetchMovie(movieId);

    renderModal(movieData);

    // openMovieModal();
  } catch (error) {
    console.log(error);
  }
}

function renderMovies(moviesData) {
  const updatedMoviesData = updateMovieGeneres(
    moviesData,
    tmdbService.genresMap
  );
  refs.moviesContainer.innerHTML = createMoviesMarkup(updatedMoviesData);
}

function updateMovieGeneres(moviesData, genresMap) {
  const updatedMoviesData = moviesData.map(
    ({ id, genre_ids, poster_path, release_date, title, vote_average }) => {
      const genres = genre_ids.map(genreId => ({
        id: genreId,
        name: genresMap[genreId],
      }));
      return { id, genres, poster_path, release_date, title, vote_average };
    }
  );
  return updatedMoviesData;
}

function onPaginationClick(e) {
  const target = e.target.closest('button');
  if (!target) return;

  if (target.dataset.page) {
    tmdbService.currentPage = Number(target.dataset.page);
  }
  if (target.dataset.pageStep) {
    tmdbService.currentPage =
      tmdbService.page + Number(target.dataset.pageStep);
  }
  getMovies();
}

function onSearch(e) {
  e.preventDefault();

  const newQuery = e.currentTarget.searchQuery.value;

  tmdbService.query = newQuery.trim();
  tmdbService.resetPage();
  getMovies();
}
