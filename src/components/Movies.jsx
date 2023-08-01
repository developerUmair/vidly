import React, { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/Paginate";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./MoviesTable";

const Movies = () => {
  const [moviesList, setMoviesList] = useState({
    totalMovies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "",
  });

  const handleDeleteMovie = (movieId) => {
    const updatedMovieList = moviesList.totalMovies.filter(
      (movie) => movie._id !== movieId
    );
    setMoviesList({ ...moviesList, totalMovies: updatedMovieList });
  };

  const handleLike = (movie) => {
    const movies = [...moviesList.totalMovies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    setMoviesList({ ...moviesList, totalMovies: movies });
  };

  let filteredMovies = moviesList.totalMovies;
  const arrLength = filteredMovies.length;

  const handlePageChange = (page) => {
    setMoviesList({ ...moviesList, currentPage: page });
  };

  // List code below
  useEffect(() => {
    setMoviesList({
      ...moviesList,
      totalMovies: getMovies(),
      genres: getGenres(),
    });
  }, []);

  const handleListChange = (genraName) => {
    setMoviesList({ ...moviesList, selectedGenre: genraName });

    if (genraName === "All Genres") {
      // Show all movies when "All Genres" is selected
      setMoviesList({
        ...moviesList,
        currentPage: 1,
        totalMovies: getMovies(),
      });
    } else {
      // Filter the movies based on the selected genre
      const filteredMovies = getMovies().filter(
        (movie) => movie.genre.name === genraName
      );
      setMoviesList({
        ...moviesList,
        currentPage: 1,
        totalMovies: filteredMovies,
      });
    }
  };

  const paginatedList = paginate(moviesList);

  // Sorting

  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  const handleSort = (path) => {
    console.log(path);
    const order =
      sortColumn.path === path
        ? sortColumn.order === "asc"
          ? "desc"
          : "asc"
        : "asc";
    setSortColumn({ path, order });

    const sortedMovies = [...moviesList.totalMovies].sort((a, b) => {
      if (path.includes(".")) {
        // Handle nested property sorting
        const [nestedKey, nestedValue] = path.split(".");
        if (a[nestedKey][nestedValue] < b[nestedKey][nestedValue])
          return order === "asc" ? -1 : 1;
        if (a[nestedKey][nestedValue] > b[nestedKey][nestedValue])
          return order === "asc" ? 1 : -1;
      } else {
        if (a[path] < b[path]) return order === "asc" ? -1 : 1;
        if (a[path] > b[path]) return order === "asc" ? 1 : -1;
      }
      return 0;
    });
    setMoviesList({ ...moviesList, totalMovies: sortedMovies });
  };

  return (
    <>
      <div className="row">
        <div className="col-2 mt-4">
          <ListGroup
            onItemSelect={handleListChange}
            items={moviesList.genres}
            selectedItem={moviesList.selectedGenre}
          />
        </div>
        <div className="col">
          <h5 className="py-3">
            There are {arrLength ? arrLength : "no"} movies in the database.
          </h5>
          <MoviesTable
            arrLength={arrLength}
            paginatedList={paginatedList}
            Like={Like}
            onLike={handleLike}
            onDelete={handleDeleteMovie}
            onSort={handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={arrLength}
            pageSize={moviesList.pageSize}
            onPageChange={handlePageChange}
            currentPage={moviesList.currentPage}
            handleDeleteMovie={handleDeleteMovie}
          />
        </div>
      </div>
    </>
  );
};

export default Movies;
