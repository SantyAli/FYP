import React from 'react'
import img1 from '../img/blog-1.jpg'
import img2 from '../img/blog-2.jpg'

export const Team = () => {
  return (

    <div>

<div class="blog" id="blog">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>E-Planner</p>
          <h2>Team Members</h2>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="blog-item wow fadeInUp" data-wow-delay="0.1s">
              <div class="blog-img">
                <img src={img1} alt="Blog" />
              </div>
              <div class="blog-text">
                <h2>A Ali</h2>
                <div class="blog-meta">
                  <p><i class="far fa-user"></i>Admin</p>
                  <p><i class="far fa-list-alt"></i>Web Developer</p>
                </div>
                <p>
                  If you're already a front-end developer, well, pretend you're
                  also wearing a pirate hat.
                </p>
                <a class="btn" href=""
                  >Read More <i class="fa fa-angle-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="blog-item wow fadeInUp" data-wow-delay="0.3s">
              <div class="blog-img">
                <img src={img2} alt="Blog" />
              </div>
              <div class="blog-text">
                <h2>IQra Iftkhar</h2>
                <div class="blog-meta">
                  <p><i class="far fa-user"></i>Admin</p>
                  <p><i class="far fa-list-alt"></i>Web Designer</p>
                </div>
                <p>
                  All our dreams can come true, if we have the courage to pursue
                  them.
                </p>
                <a class="btn" href=""
                  >Read More <i class="fa fa-angle-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
