import React from "react";
import Like from "./Like";
import { Link } from "react-router-dom";

const TableBody = ({ paginatedList, onLike, onDelete }) => {
  return (
    <>
      {paginatedList.map((movie) => (
        <tr key={movie._id}>
          {console.log(movie._id)}
          <td>
            <Link to={`movies/${movie._id}`}>{movie.title} </Link>
          </td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like liked={movie.liked} onClick={() => onLike(movie)} />
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(movie._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableBody;
