import React, { useState } from "react";

import Input from "../components/common/Input";
import Joi from "joi";

const MovieForm = () => {
  const initialValues = {
    title: "",
    genra: "",
    stocks: "",
    rate: "",
  };
  const [data, setData] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let { error } = movieSchema.validate(data, { abortEarly: false });

    if (error) {
      const newErrors = {};
      error.details.forEach((detail) => {
        newErrors[detail.path[[0]]] = detail.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      setData(initialValues);
    }
  };

  const movieSchema = Joi.object({
    title: Joi.string().required().label("Title"),
    genra: Joi.string().required().label("Genra"),
    stocks: Joi.string().min(1).max(100).required().label("Stocks"),
    rate: Joi.string().min(1).max(10).required().label("Rate"),
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  return (
    <>
      <h1>Movie Form</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          label="Title"
          value={data.title}
          onChange={handleChange}
          placeholder="Enter Title"
          type="text"
          error={errors.title}
        />

        <div className="form-group">
          <label htmlFor="genre" className="my-2">
            Genre
          </label>
          <select
            className="form-control"
            id="genra"
            value={data.genra}
            onChange={handleChange}
          >
            <option value="">Select a Genra</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Action">Action</option>
          </select>
          {errors.genra && (
            <div className="alert alert-danger">{errors.genra}</div>
          )}
        </div>
        <Input
          name="stocks"
          label="Number In Stocks"
          value={data.stocks}
          onChange={handleChange}
          placeholder="Stocks"
          type="number"
          error={errors.stocks}
        />

        <Input
          name="rate"
          label="Rating"
          value={data.rate}
          onChange={handleChange}
          placeholder="Movie Rating"
          type="number"
          error={errors.rate}
        />

        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
    </>
  );
};

export default MovieForm;
