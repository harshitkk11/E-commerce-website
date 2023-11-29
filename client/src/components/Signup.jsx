import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="login-signup">
      <div className="container right-panel-active">
        <div className="form-container sign-up-container">
          <div className="flag-div">
            <div className="flag"></div>
          </div>
          <form action="/">
            <p className="heading">Create An Account</p>
            <span>Use your email for registration</span>
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL" required autoComplete="none"/>
            <input type="password" placeholder="PASSWORD" />
            <br />
            <button>Sign Up</button>
          </form>
          <div className="ask">
            <span>
              Already have an account?
              <Link
                to="/login"
                style={{
                  marginLeft: "10px",
                }}
              >
                Log in
              </Link>
            </span>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <p className="heading">Have already An Account ?</p>
              <span>To keep connect with us please login here !</span>
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
