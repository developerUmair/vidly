import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
      <a class="navbar-brand" href="#">
        Vidly
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link active" to="#">
             <span class="sr-only">(current)</span>
          </Link>
          <Link class="nav-item nav-link" to="/">
            Movies
          </Link>
          <Link class="nav-item nav-link" to="/customers">
            Customers
          </Link>
          <Link class="nav-item nav-link" to="/rentals">
            Rentals
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
