import React from 'react'
import img1 from '../img/team-1.jpg'
import img2 from '../img/team-2.jpg'
import img3 from '../img/team-3.jpg'

export const Community = () => {
  return (
    <div>

<div class="team" id="team">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>Community</p>
        </div>
        <div class="row">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
            <div class="team-item">
              <div class="team-img">
                <img src={img1} alt="Image" />
              </div>
              <div class="team-text">
                <h2>Rabia Zahid</h2>
                <h4>Student</h4>
                <p>Guides them to the main services or product you offer.</p>
                <div class="team-social">
                  <a class="btn" href=""><i class="fab fa-twitter"></i></a>
                  <a class="btn" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn" href=""><i class="fab fa-linkedin-in"></i></a>
                  <a class="btn" href=""><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="team-item">
              <div class="team-img">
                <img src={img2} alt="Image" />
              </div>
              <div class="team-text">
                <h2>Sana Murtaza</h2>
                <h4>Student</h4>
                <p>
                  All our dreams can come true, if we have the courage to pursue
                  them.
                </p>
                <div class="team-social">
                  <a class="btn" href=""><i class="fab fa-twitter"></i></a>
                  <a class="btn" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn" href=""><i class="fab fa-linkedin-in"></i></a>
                  <a class="btn" href=""><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
            <div class="team-item">
              <div class="team-img">
                <img src={img3} alt="Image" />
              </div>
              <div class="team-text">
                <h2>Maida Maqbool</h2>
                <h4>Student</h4>
                <p>
                  Our greatest glory is not in never falling, but in rising
                  every time we fall.
                </p>
                <div class="team-social">
                  <a class="btn" href=""><i class="fab fa-twitter"></i></a>
                  <a class="btn" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn" href=""><i class="fab fa-linkedin-in"></i></a>
                  <a class="btn" href=""><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
