export function paginate(items, currentPage = 1, pageSize = 5) {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  const paginatedItems = items.slice(startIndex, endIndex + 1);

  return {
    currentPage,
    pageSize,
    totalItems,
    totalPages,
    startIndex,
    endIndex,
    paginatedItems,
  };
}
