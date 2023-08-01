import React from "react";
import Like from "./Like";

const TableBody = ({ paginatedList, onLike, onDelete }) => {
  return (
    <>
      {paginatedList.map((movie) => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
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
