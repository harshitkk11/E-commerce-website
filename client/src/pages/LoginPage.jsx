import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiSolidError } from "react-icons/bi";
import "../assets/css/loginPage.css"

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    button: "Log In",
    disabled: false,
    error: "",
    display: "none",
  });

  const handleonChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendRequest = async () => {
    const res = await axios
      .post("/login", {
        email: form.email,
        password: form.password,
      })
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      button: "Please Wait..",
      disabled: true,
    });
    sendRequest().then((data) => {
      if (data.message === "Logged in successfully") {
        setForm({
          ...form,
          email: "",
          password: "",
          button: "Log in",
          disabled: false,
          error: "",
          display: "none",
        });
        console.log("logged in successfully");
        localStorage.setItem("isauth", true);
        navigate("/");
        window.location.reload();
      } else if (data.message === "Not verified") {
        sessionStorage.setItem("email", form.email);
        localStorage.setItem("verify", "true");
        navigate("/verifymail");
        window.location.reload();
      } else {
        console.log(data.user);
        setForm({
          ...form,
          button: "Log in",
          disabled: false,
          error: data.message,
          display: "flex",
        });
        // toast.error(data.message);
      }
    });
  };

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
          <form onSubmit={handleSubmit}>
            <p className="form-heading">Log In</p>
            <span>Login to your Account</span>
            <span className="input-error" style={{ display: form.display }}>
              <BiSolidError style={{ fontSize: "20px" }} />
              {form.error}
            </span>
            <input
              name="email"
              type="email"
              placeholder="EMAIL"
              value={form.email}
              required
              autoComplete="email"
              onChange={(e) => handleonChange(e)}
              disabled={form.disabled}
              autoFocus
            />
            <input
              name="password"
              type="password"
              placeholder="PASSWORD"
              value={form.password}
              required
              autoComplete="current-password"
              onChange={(e) => handleonChange(e)}
              disabled={form.disabled}
            />
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
            <button className="submit-button" disabled={form.disabled}>
              {form.button}
            </button>
          </form>
          <div className="ask">
            <span>
              Need an account?
              <Link
                to="/signup"
                style={{
                  marginLeft: "10px",
                  textDecoration: "none",
                }}
              >
                Sign up
              </Link>
            </span>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay-panel">
            <p className="overlay-heading">Create your Account</p>
            <span>Enter your personal details here.</span>
            <button className="ghost" id="signup" onClick={handleClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
