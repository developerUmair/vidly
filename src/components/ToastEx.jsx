import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiShow } from "react-icons/bi";

const ToastEx = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState({});

  const handleLike = () => {
    toast.info("You liked this post!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleFetchData = async () => {
    try {
      // Simulating an API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const jsonData = await response.json();
      // Process data
      console.log(jsonData);
      toast.success("Data fetched successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while fetching data.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const handleLogout = () => {
    toast.info("Logged out successfully.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handlePerformAction = () => {
    toast.success("Action completed!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email && data.password && data.name) {
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setData({ email: "", password: "", name: "" });
    } else {
      toast.error("Please fill all the fields.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <h1>React Toastify Examples</h1>

      {/* Like Example */}
      <button onClick={handleLike}>Like</button>

      {/* Fetch Data Example */}
      <button onClick={handleFetchData}>Fetch Data</button>

      {/* Logout Example */}
      <button onClick={handleLogout}>Logout</button>

      {/* Perform Action Example */}
      <button onClick={handlePerformAction}>Perform Action</button>

      {/* Form Submission Example */}
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>

      <BiShow className="text-gray-400" />

      <ToastContainer />
    </div>
  );
};

export default ToastEx;
