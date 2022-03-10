import React from "react";
import {Link} from 'react-router-dom'; 
import "../partials/styles/Fonts.css"
import "./NavbarStyles.css"



function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">

        <Link to="" class="navbar-brand" href="#">
          <span class="logo">Logo</span>
        </Link>

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
                <Link to="/" class="nav-link" href="#">
                  <span class="nav-items current-one">Home</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/contact" class="nav-link" href="#">
                  <span class="nav-items">About</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/about" class="nav-link" href="#">
                  <span class="nav-items">Life</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link to="" class="nav-link" href="#">
                  <span class="nav-items">Work</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link to="" class="nav-link" href="#">
                  <span class="nav-items">About</span>
                </Link>
            </li>

          </ul>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
