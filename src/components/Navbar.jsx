import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge bg-primary">{totalCounters}</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
