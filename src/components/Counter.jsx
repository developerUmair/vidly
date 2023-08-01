import React from "react";

/* 
        Props vs State
        Props contains data that we give to the component while
        State contains data that are local/private to that component, so other component cannot access that state
*/
const Counter = (props) => {
  function formatCount() {
    return props.counter.value === 0 ? "Zero" : props.counter.value;
  }

  return (
    <>
      <div className="row">
        <div className="col-1">
          <span className={getBadgeStyles()}>{formatCount()}</span>
        </div>
        <div className="col-11">
          <button
            type="button"
            className="btn btn-secondary m-2 font-weight-bold"
            onClick={() => props.onIncrement(props.counter)}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-secondary m-2 font-weight-bold"
            onClick={() => props.onDecrement(props.counter)}
            disabled={props.counter.value === 0} 
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-danger m-2 font-weight-bold"
            onClick={() => props.onDelete(props.counter.id)}
          >
            X
          </button>
          <br />
        </div>
      </div>
    </>
  );

  function getBadgeStyles() {
    let classes = "badge m-2 bg-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
};

export default Counter;
