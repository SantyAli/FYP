import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container-fluid">
        <a href="index.html" className="navbar-brand">
          E-Planner
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto">
            {/* <a href="#home" className="nav-item nav-link active"> */}
            <Link to="/">
              <div className="nav-item nav-link active">Home</div>
            </Link>
            {/* </a> */}
            <Link to="/editor">
              <div className="nav-item nav-link">Editor</div>
            </Link>
            {/* <a href="#" className="nav-item nav-link"></a> */}
            {/* <a href="Login/login.html" className="nav-item nav-link"> */}
            <Link to="/login">
              <div className="nav-item nav-link">Login</div>
            </Link>
            {/* </a> */}
            <a href="#experience" className="nav-item nav-link">
              Features
            </a>
            <a href="#portfolio" className="nav-item nav-link">
              Catagories
            </a>
            <a href="#review" className="nav-item nav-link">
              Review
            </a>

            <Link to="/community">
              <div className="nav-item nav-link">Community</div>
            </Link>
            {/* <a href="#team" className="nav-item nav-link">
            </a> */}
            <a href="#blog" className="nav-item nav-link">
              Team
            </a>
            <a href="#about" className="nav-item nav-link">
              About
            </a>
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
