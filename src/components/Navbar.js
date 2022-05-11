import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div class="navbar navbar-expand-lg bg-light navbar-light">
        <div class="container-fluid">
          <a href="index.html" class="navbar-brand">
            E-Planner
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav ml-auto">
              <a href="#home" class="nav-item nav-link active">
                Home
              </a>
              <a href="#" class="nav-item nav-link">
                Editor
              </a>
              <a href="Login/login.html" class="nav-item nav-link">
                Login
              </a>
              <a href="#experience" class="nav-item nav-link">
                Features
              </a>
              <a href="#portfolio" class="nav-item nav-link">
                Catagories
              </a>
              <a href="#review" class="nav-item nav-link">
                Review
              </a>
              <a href="#team" class="nav-item nav-link">
                Community
              </a>
              <a href="#blog" class="nav-item nav-link">
                Team
              </a>
              <a href="#about" class="nav-item nav-link">
                About
              </a>
              <a href="#contact" class="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
