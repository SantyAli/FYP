import React from 'react'
import img1 from '../img/portfolio-1.jpg'
import img2 from '../img/portfolio-2.jpg'
import img3 from '../img/portfolio-3.jpg'
import img4 from '../img/portfolio-4.jpg'
import img5 from '../img/portfolio-5.jpg'
import img6 from '../img/portfolio-6.jpg'


export const Catagories = () => {
  return (
      
    <div>

<div class="portfolio" id="portfolio">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          
          <p>Catagories</p>
        </div>
        <div class="row">
          <div class="col-12">
            <ul id="portfolio-filter">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-1">Exterior Design</li>
              <li data-filter=".filter-2">Interior Design</li>
              <li data-filter=".filter-3">Other Templates</li>
            </ul>
          </div>
        </div>
        <div class="row portfolio-container">
          <div
            class="
              col-lg-4 col-md-6 col-sm-12
              portfolio-item
              filter-1
              wow
              fadeInUp
            "
            data-wow-delay="0.0s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src={img1} alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>Exterior-1</h3>
                <a
                  class="btn"
                  href="img/portfolio-1.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="
              col-lg-4 col-md-6 col-sm-12
              portfolio-item
              filter-2
              wow
              fadeInUp
            "
            data-wow-delay="0.2s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src={img2} alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>Interior-1</h3>
                <a
                  class="btn"
                  href="img/portfolio-2.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="
              col-lg-4 col-md-6 col-sm-12
              portfolio-item
              filter-3
              wow
              fadeInUp
            "
            data-wow-delay="0.4s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src={img3} alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>Template-1</h3>
                <a
                  class="btn"
                  href="img/portfolio-3.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="
              col-lg-4 col-md-6 col-sm-12
              portfolio-item
              filter-1
              wow
              fadeInUp
            "
            data-wow-delay="0.6s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src={img4} alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>Exterior-2</h3>
                <a
                  class="btn"
                  href="img/portfolio-4.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="
              col-lg-4 col-md-6 col-sm-12
              portfolio-item
              filter-2
              wow
              fadeInUp
            "
            data-wow-delay="0.8s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src={img5} alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>Interior-2</h3>
                <a
                  class="btn"
                  href="img/portfolio-5.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="
              col-lg-4 col-md-6 col-sm-12
              portfolio-item
              filter-3
              wow
              fadeInUp
            "
            data-wow-delay="1s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src={img6} alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>Template-2</h3>
                <a
                  class="btn"
                  href="img/portfolio-6.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
