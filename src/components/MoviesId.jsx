import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MoviesId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/movies");
  };
  return (
    <>
      <h1>Movie Form {id}</h1>
      <button className="btn btn-primary" type="submit" onClick={handleSave}>
        Save
      </button>
    </>
  );
};

export default MoviesId;
