import React from "react";
import { genres } from "../services/fakeGenreService";

const Genres = ({ selectedGenre, onGenreSelect }) => {
  return (
    <>
      <ul className="list-group m-4">
        <li
          className={`list-group-item ${
            selectedGenre === null ? "active" : ""
          }`}
          onClick={() => onGenreSelect(null)}
        >
          All Genres
        </li>
        {genres.map((genre) => (
          <li
            key={genre._id}
            className={`list-group-item ${
              selectedGenre === genre ? "active" : ""
            }`}
            onClick={() => onGenreSelect(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Genres;
