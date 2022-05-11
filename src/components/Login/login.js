import React from 'react'
import logimg from '../../img/log.svg'
import regimg from '../../img/register.svg'

export const login = () => {

    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });
    
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
    

  return (
        <div class="container">
          <div class="form-container">
              <div class="signin-signup">
              <form action="" class="sign-in-form">
                  <h2 class="title">Sign In</h2>
                  <div class="input-field">
                      <i class='fas fa-user'></i>
                      <input type="text" placeholder="Username"  />
                  </div>

                  <div class="input-field">
                    <i class='fas fa-lock'></i>
                    <input type="password" placeholder="Password" />
                </div>
                
                <input type="submit" value='Login' class='btn solid'  />
            

                <p class="social-text">Or Sign In with Social platforms</p>
                <div class="social-media">
                    <a href="#" class="social-icon">
                        <i class="fab fa-facebook" ></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-twitter" ></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-google" ></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-linkedin-in" ></i>
                    </a>
                </div>
              </form>

              <form action="" class="sign-up-form">
                <h2 class="title">Sign Up</h2>
                <div class="input-field">
                    <i class='fas fa-envelope'></i>
                    <input type="text" placeholder="Email" />
                </div>

                <div class="input-field">
                    <i class='fas fa-user'></i>
                    <input type="text" placeholder="Username" />
                </div>

                <div class="input-field">
                  <i class='fas fa-lock'></i>
                  <input type="password" placeholder="Password" />
              </div>

              <input type="submit" value='Sign up' class='btn solid' />

              <p class="social-text">Or Sign Up with Social platforms</p>
              <div class="social-media">
                  <a href="#" class="social-icon">
                      <i class="fab fa-facebook" ></i>
                  </a>
                  <a href="#" class="social-icon">
                      <i class="fab fa-twitter" ></i>
                  </a>
                  <a href="#" class="social-icon">
                      <i class="fab fa-google" ></i>
                  </a>
                  <a href="#" class="social-icon">
                      <i class="fab fa-linkedin-in" ></i>
                  </a>
              </div>
            </form>
          </div>
          <div class="panels-container">
              <div class="panel left-panel">
                  <div class="content">
                      <h3>New Here ?</h3>
                      <p>If You are new here and want to convert your Dreams into your Desired Home then Do Sign Up here.</p>
                      <button class="btn transparent" id="sign-up-btn" >Sign Up</button>
                  </div>
                  <img src={logimg} class="image" alt="" />
              </div>

              <div class="panel right-panel">
                <div class="content">
                    <h3>One of us ?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam accusantium ratione?</p>
                    <button class="btn transparent" id="sign-in-btn" >Sign In</button>
                </div>
                <img src={regimg} class="image" alt="" />
            </div>

          </div>
      </div>
      </div>
  )
}
