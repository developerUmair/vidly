import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import Input from "./common/Input";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (account.username.trim() === "")
      errors.username = "Username is required";

    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }
    return Object.keys(errors).length === 0 ? {} : errors;
  };

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    console.log(errors);
    setErrors(errors);

    if (Object.keys(errors).length !== 0) return; // Check for errors using the length of keys

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
          value={account.username}
          onChange={handleChange}
          placeholder="Enter username"
          type="text"
          error={errors.username}
        />

        <Input
          name="password"
          label="Password"
          value={account.password}
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
