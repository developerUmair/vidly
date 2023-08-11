import React, { useState } from "react";
import Input from "./common/Input";
import Joi from "joi";
import { BiShow } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = registrationSchema.validate(data, { abortEarly: false });

    if (result.error) {
      const newErrors = {};
      result.error.details.forEach((detail) => {
        newErrors[detail.path[0]] = detail.message;
      });
      setErrors(newErrors);
      toast.error("Please fill all the fields.", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      toast.success("Form submitted successfully.", {
        position: "top-right",
        autoClose: 3000,
      });

      setErrors({});
      setData(initialValues);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const registrationSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().min(3).max(10).required().label("Password"),
    name: Joi.string().required().label("Name"),
  });

  return (
    <>
      <h1>Register</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter email"
          type="email"
          error={errors.email}
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
        <div style={{ position: "relative" }}>
          <Input
            name="name"
            label="Name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter Name"
            type="text"
            error={errors.name}
          />
          <BiShow
            style={{
              position: "absolute",
              top: 0,
              right: 10,
              zIndex: 99,
              transform: "translateY(220%)",
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>

      <ToastContainer />
    </>
  );
};

export default Register;
