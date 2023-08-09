import React from "react";

const Input = ({ name, label, placeholder, type, value, onChange, error }) => {
  return (
    <div className="form-group mb-2">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
