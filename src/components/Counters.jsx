import React, { useState } from "react";
import Counter from "./Counter";

const Counters = ({
  onReset,
  onDelete,
  onIncrement,
  counters,
  onDecrement,
}) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary m-2 px-4 py-2"
        onClick={onReset}
      >
        Reset
      </button>
      <br />
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </>
  );
};

export default Counters;
