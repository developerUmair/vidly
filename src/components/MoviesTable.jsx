import React from "react";
import TableBody from "./common/TableBody";

const MoviesTable = ({
  arrLength,
  paginatedList,
  Like,
  onLike,
  onDelete,
  onSort,
  sortColumn,
}) => {
  return (
    <>
      {" "}
      {arrLength ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col" onClick={() => onSort("title")}>
                Title
                {renderSortIcon("title", sortColumn)}
              </th>
              <th scope="col" onClick={() => onSort("genre.name")}>
                Genre
                {renderSortIcon("genre.name", sortColumn)}
              </th>
              <th scope="col" onClick={() => onSort("numberInStock")}>
                Stock
                {renderSortIcon("numberInStock", sortColumn)}
              </th>
              <th scope="col" onClick={() => onSort("dailyRentalRate")}>
                Rate
                {renderSortIcon("dailyRentalRate", sortColumn)}
              </th>
              <th scope="col"></th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            <TableBody
              paginatedList={paginatedList}
              onLike={onLike}
              onDelete={onDelete}
            />
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};

const renderSortIcon = (path, sortColumn) => {
  if (sortColumn.path !== path) return null;
  if (sortColumn.order === "asc")
    return <i className="fa fa-sort-asc ml-1"></i>;
  return <i className="fa fa-sort-desc ml-1"></i>;
};

export default MoviesTable;
