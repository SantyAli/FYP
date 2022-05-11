import React from 'react'
import img1 from '../img/testimonial-1.jpg'
import img2 from '../img/testimonial-2.jpg'
import img3 from '../img/testimonial-3.jpg'
export const Review = () => {
  return (

    <div>

<div class="testimonial wow fadeInUp" data-wow-delay="0.1s" id="review">
      <div class="container">
        <div class="testimonial-icon">
          <i class="fa fa-quote-left"></i>
        </div>
        <div class="owl-carousel testimonials-carousel">
          <div class="testimonial-item">
            <div class="testimonial-img">
              <img src={img1} alt="Image" />
            </div>
            <div class="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums
                lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum
                dolor sit amet consec adipis elit.
              </p>
              <h3>Rabia Zahid</h3>
              <h4>Student</h4>
            </div>
          </div>
          <div class="testimonial-item">
            <div class="testimonial-img">
              <img src={img2} alt="Image" />
            </div>
            <div class="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums
                lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum
                dolor sit amet consec adipis elit.
              </p>
              <h3>Sana Murtaza</h3>
              <h4>Student</h4>
            </div>
          </div>
          <div class="testimonial-item">
            <div class="testimonial-img">
              <img src={img3} alt="Image" />
            </div>
            <div class="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums
                lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum
                dolor sit amet consec adipis elit.
              </p>
              <h3>Maida Maqbool</h3>
              <h4>Student</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
