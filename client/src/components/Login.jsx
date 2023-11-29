import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Login.css";

function Login() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/signup");
  }

  return (
    <div className="login-signup">
      <div className="container">
        <div className="form-container">
          <div className="flag-div">
            <div className="flag"></div>
          </div>
          <form action="/">
            <p className="heading">Log In</p>
            <span>Login to your Account</span>
            <input type="email" placeholder="USERNAME" />
            <input type="password" placeholder="PASSWORD" />
            <Link
              style={{
                textDecoration: "none",
                fontSize: "17px",
                margin: "15px 0",
              }}
              to="/forget-password"
            >
              Forgot Password?
            </Link>
            <br />
            <button className="submit-button">Log in</button>
          </form>
          <div className="ask">
            <span>
              Need an account?
              <Link
                to="/signup"
                style={{
                  marginLeft: "10px",
                }}
              >
                Sign up
              </Link>
            </span>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <p className="heading">Create your Account</p>
              <span>Enter your personal details here.</span>
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
