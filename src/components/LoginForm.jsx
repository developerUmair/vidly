import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
    // request to the server
    console.log("submitted");
  };

  return (
    <>
      <h2 className="mt-2">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="username">Username</label>
          <input
            autoFocus
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            ref={usernameRef}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-control"
              placeholder="Enter password"
              ref={passwordRef}
            />
            <div
              className="input-group-text"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <BiSolidHide /> : <BiSolidShow />}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
