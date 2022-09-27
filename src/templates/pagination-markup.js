export default function paginationMarkup(currentPage, totalPages) {
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
    const btnClass = i === currentPage ? 'class="current-page"' : '';
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
