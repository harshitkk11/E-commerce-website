import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="login-signup">
      <div className="container">
        <div className="overlay-container">
          <div className="overlay-panel">
            <p className="overlay-heading">Already have an account?</p>
            <span>To keep connected with us please login here !</span>
            <button className="ghost" id="login" onClick={handleClick}>
              LOG In
            </button>
          </div>
        </div>
        <div className="form-container">
          <div className="flag-div">
            <div className="flag"></div>
          </div>
          <form action="/">
            <p className="form-heading">Create An Account</p>
            <span>Use your email for registration</span>
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL" required />
            <input type="password" placeholder="PASSWORD" />
            <br />
            <button className="submit-button">Sign Up</button>
          </form>
          <div className="ask">
            <span>
              Already have an account?
              <Link
                to="/login"
                style={{
                  marginLeft: "10px",
                  textDecoration: "none",
                }}
              >
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
