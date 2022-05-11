import React from 'react'
import img1 from '../img/about.jpg'

export const About = () => {
  return (

    <div>
        <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-img">
              <img src={img1} alt="Image" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div class="section-header text-left">
                <p>About Us</p>
              </div>
              <div class="about-text">
                <p>
                  Home design is a complex task that is normally done 
                  by certificated architects, who have to receive several 
                  years of training on designing and then they typically 
                  start by collecting a list of requirements for a building layout. 
                  This usually takes from a couple of days to several weeks and has high
                   requirements for professional knowledge.
                  It will be fantastic if we can design our own home by ourselves.
                   Thus, for time-saving and allowing people without expertise to participate 
                   in the design, we have proposed a solution named E-Planner. Our System will 
                   have the functionalities of designing your home in 2D and visualizing it in 3D and has ability to
                   produce competitive visual results, even compared with the human-made plans.                  
                </p>
              </div>
              <a class="btn" href="">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
