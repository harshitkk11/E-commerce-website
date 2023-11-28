import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { useState } from "react";
// import { signInButton } from "../assets/js/Login";
function Login() {
//   const [classname, setClassname] = useState("container");
    const navigate = useNavigate()

    function handleClick () {
        navigate("/signup")
    }

  return (
    <div className="login-singup">
      <div className="container">
        <div className="form-container sign-in-container">
          <form action="/">
            <h1>Log In</h1>
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
            <span>Login to your Account</span>
            <input type="email" placeholder="USERNAME" />
            <input type="password" placeholder="PASSWORD" />
            <Link
              style={{
                textDecoration: "none",
                fontSize: "large",
                margin: "20px",
              }}
              to="/forget-password"
            >
              forget your password
            </Link>
            <br />
            <button>Log in</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Create your Account</h1>
              <p>Enter your personal details here</p>
              <button class="ghost" id="signup" onClick={handleClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
