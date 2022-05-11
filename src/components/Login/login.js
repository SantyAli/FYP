import React from "react";
import logimg from "../../img/log.svg";
import regimg from "../../img/register.svg";
import "./style.css";

const Login = () => {
  let [loginSignupClasses, setLoginSignupClasses] = React.useState([
    "btn transparent",
  ]);
  //   const sign_in_btn = document.querySelector("#sign-in-btn");
  //   const sign_up_btn = document.querySelector("#sign-up-btn");
  //   const container = document.querySelector(".container");
  const signUpHandler = () => {
    setLoginSignupClasses([...loginSignupClasses, "sign-up-mode"]);
  };

  const signIpHandler = () => {
    setLoginSignupClasses(["btn transparent"]);
  };
  //   sign_up_btn.addEventListener("click", () => {
  //     container.classList.add("sign-up-mode");
  //   });

  //   sign_in_btn.addEventListener("click", () => {
  //     container.classList.remove("sign-up-mode");
  //   });

  return (
    <div className="container">
      <div className="form-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>

            <input type="submit" value="Login" className="btn solid" />

            <p className="social-text">Or Sign In with Social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form action="" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>

            <input type="submit" value="Sign up" className="btn solid" />

            <p className="social-text">Or Sign Up with Social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New Here ?</h3>
              <p>
                If You are new here and want to convert your Dreams into your
                Desired Home then Do Sign Up here.
              </p>
              <button
                className={loginSignupClasses.join(" ")}
                onClick={signUpHandler}
                id="sign-up-btn"
              >
                Sign Up
              </button>
            </div>
            <img src={logimg} className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum numquam accusantium ratione?
              </p>

              <button
                className={loginSignupClasses.join(" ")}
                onClick={signIpHandler}
                id="sign-in-btn"
              >
                Sign In
              </button>
            </div>
            <img src={regimg} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
