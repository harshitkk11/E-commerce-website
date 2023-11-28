import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

function Signup() {
  //   const [classname, setClassname] = useState("container");

  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="login-singup">
      <div className="container right-panel-active">
        <div className="form-container sign-up-container">
          <form action="/">
            <h1>Create An Account</h1>
            <div className="social-container">
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "large",
                  margin: "20px",
                }}
                to="/fb"
              >
                facebook
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "large",
                  margin: "20px",
                }}
                to="/goggle"
              >
                goggle
              </Link>
            </div>
            <span>use your email for Regestration</span>
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="E-MAIL" />
            <input type="password" placeholder="PASSWORD" />
            <br />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Have already An Account ?</h1>
              <p>To keep connect with us please login here !</p>
              <button class="ghost" id="signin" onClick={handleClick}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
