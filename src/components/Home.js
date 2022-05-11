import React from "react";
import imgg from "../img/hero1.svg";
import "../index.css";

export const Home = () => {
  return (
    <div>
      <div className="hero" id="home">
        <div className="container-fluid">
          <div
            className="row align-items-center
        \"
          >
            <div className="col-sm-12 col-md-6">
              <div className="hero-content">
                <div className="hero-text">
                  <h1>E-Planner</h1>
                  <h2></h2>
                  <div className="typed-text">Design Your Dream</div>
                </div>
                <div className="hero-btn">
                  <a className="btn" href="">
                    About Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 d-none d-md-block">
              <div className="hero-image">
                <img src={imgg} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
