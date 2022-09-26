import TMDB_Service from './TMDB-Service';
import createMoviesMarkup from './movies-markup';

const refs = {
  searchForm: document.querySelector('[data-search]'),
  moviesContainer: document.querySelector('[data-movies]'),
  paginationContainer: document.querySelector('[data-pages]'),
  movieModal: document.querySelector('[data-movie-modal]'),
  movieModalCloseBtn: document.querySelector('[data-movie-modal-close]'),
  movieDetails: document.querySelector('[data-movie-details]'),
  movieDetails: document.querySelector('[data-movie-details]'),
  moviesQueueContainer: document.querySelector('[data-movies-queue]'),
  moviesQueuePagination: document.querySelector(
    '[data-movies-queue-pagination]'
  ),
  watchedMoviesContainer: document.querySelector('[data-watched-movies]'),
  watchedMoviesPagination: document.querySelector(
    '[data-watched-movies-pagination]'
  ),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.paginationContainer.addEventListener('click', onPaginationClick);
// refs.moviesContainer.addEventListener('click', onMovieCardClick);
// refs.moviesQueueContainer.addEventListener('click', onMovieCardClick);
// refs.watchedMoviesContainer.addEventListener('click', onMovieCardClick);
// refs.movieModalCloseBtn.addEventListener('click', closeMovieModal);
// refs.watchedMoviesPagination.addEventListener(
//   'click',
//   onWatchedMoviesPaginationClick
// );
// refs.moviesQueuePagination.addEventListener(
//   'click',
//   onMoviesQueuePaginationClick
// );

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

function renderPagination(currentPage, totalPages, container) {
  container.innerHTML = paginationMarkup(currentPage, totalPages);
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

function paginationMarkup(currentPage, totalPages) {
  let minPage = currentPage - 2;
  let maxPage = currentPage + 2;

  if (minPage < 1) {
    minPage = 1;
    maxPage = 5 > totalPages ? totalPages : 5;
  }

  if (maxPage > totalPages) {
    maxPage = totalPages;
    minPage = totalPages - 5 < 2 ? 1 : totalPages - 4;
  }

  let pages = '';
  for (let i = minPage; i <= maxPage; i += 1) {
    const btnClass = i === currentPage ? 'class="current"' : '';
    pages += `<button ${btnClass} data-page="${i}">${i}</button>`;
  }

  const firstPage = minPage > 1 ? `<button data-page="1">1_</button>` : '';
  const lastPage =
    maxPage < totalPages
      ? `<button data-page="${totalPages}">_${totalPages}</button>`
      : '';

  const firstSeparator = minPage > 2 ? '<span>...</span>' : '';
  const lastSeparator = maxPage < totalPages - 1 ? '<span>...</span>' : '';

  const goBackBtn =
    currentPage === 1
      ? `<button disabled><span>back</span></button>`
      : `<button data-page-step="-1"><span>back</span></button>`;
  const goForwardBtn =
    currentPage === totalPages
      ? `<button disabled><span>forward</span></button>`
      : `<button data-page-step="1"><span>forward</span></button>`;

  return (
    goBackBtn +
    firstPage +
    firstSeparator +
    pages +
    lastSeparator +
    lastPage +
    goForwardBtn
  );
}

function onSearch(e) {
  e.preventDefault();

  const newQuery = e.currentTarget.searchQuery.value;

  tmdbService.query = newQuery.trim();
  tmdbService.resetPage();
  getMovies();
}
