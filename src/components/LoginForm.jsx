import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Input from "./common/Input";
import Joi from "joi";

const LoginForm = () => {
  const [data, setAccount] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  const validate = async () => {
    try {
      await schema.validateAsync(data, { abortEarly: false });
      return {};
    } catch (validationError) {
      const errors = {};
      for (const detail of validationError.details) {
        errors[detail.context.key] = detail.message;
      }
      return errors;
    }
  };

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = await validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    // request to the server
    console.log("submitted");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [id]: value,
    }));
  };

  return (
    <>
      <h2 className="mt-2">Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Username"
          value={data.username}
          onChange={handleChange}
          placeholder="Enter username"
          type="text"
          error={errors.username}
        />

        <Input
          name="password"
          label="Password"
          value={data.password}
          onChange={handleChange}
          placeholder="Enter Password"
          type="password"
          error={errors.password}
        />

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
