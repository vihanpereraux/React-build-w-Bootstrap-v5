import React from "react";
import {Link} from 'react-router-dom'; 


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <Link to="" class="navbar-brand" href="#">Logo</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <Link to="/" class="nav-link" href="#">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/contact" class="nav-link" href="#">Contact</Link>
            </li>
            <li class="nav-item">
                <Link to="/about" class="nav-link" href="#">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
