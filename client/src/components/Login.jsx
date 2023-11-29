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
          <form action="/">
            <p className="login-heading">Log In</p>
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
