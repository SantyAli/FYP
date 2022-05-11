import React from 'react'
import '../index.css'

export const Features = () => {
  return (

    <div>
        <div  class="experience" id="experience">
      <div class="container">
        <header
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>E-Planner</p>
          <h2>Features</h2>
        </header>
        <div class="timeline">
          <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date">Core Function</div>
              <h2>Design in 2D</h2>
              <h4>
                Build your template or design in two dimensional plane. 
              </h4>
            </div>
          </div>
          <div
            class="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div class="timeline-text">
              <div class="timeline-date">Basic Function</div>
              <h2>3D View</h2>
              <h4>
               View your designed template in 3D usign a 3D person view.
              </h4>
            </div>
          </div>
          <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date"></div>
              <h2>Catagories Section</h2>
              <h4>
                Buit-In design of different catagories based on building type.
              </h4>
            </div>
          </div>
          <div
            class="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div class="timeline-text">
              <div class="timeline-date">Side Function</div>
              <h2>Community</h2>
              <h4>
                For users interaction with each other.
              </h4>
            </div>
          </div> 
          <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date">Basic Function</div>
              <h2>Editable Templates</h2>
              <h4>
                Select from catagories and edit the design.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}
