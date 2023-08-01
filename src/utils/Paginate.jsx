// export const paginate = (moviesList) => {
//   const paginatedMovies = moviesList.totalMovies.slice(
//     (moviesList.currentPage - 1) * moviesList.pageSize,
//     moviesList.currentPage * moviesList.pageSize
//   );
//   return paginatedMovies;
// };

export const paginate = (moviesList) => {
  const startIndex = (moviesList.currentPage - 1) * moviesList.pageSize;
  const lastIndex = moviesList.currentPage * moviesList.pageSize;
  const paginatedMovies = moviesList.totalMovies.slice(startIndex, lastIndex);
  return paginatedMovies;
};
