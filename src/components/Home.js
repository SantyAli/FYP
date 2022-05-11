import React from "react";
import imgg from '../img/hero1.svg'
import '../index.css'

export const Home = () => {
  return (
    <div>
      <div class="hero" id="home">
        <div class="container-fluid">
          <div
            class="row align-items-center
        \"
          >
            <div class="col-sm-12 col-md-6">
              <div class="hero-content">
                <div class="hero-text">
                  <h1>E-Planner</h1>
                  <h2></h2>
                  <div class="typed-text">Design Your Dream</div>
                </div>
                <div class="hero-btn">
                  <a class="btn" href="">
                    About Us
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 d-none d-md-block">
              <div class="hero-image">
                <img src={imgg} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
