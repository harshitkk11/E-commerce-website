import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiSolidError } from "react-icons/bi";
import { EmailContext } from "../context/VerifyMailContext";

function Signup() {
  const navigate = useNavigate();

  const { setEmail } = useContext(EmailContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    button: "Sign Up",
    disabled: false,
    error: "",
    display: "none",
    border: "",
  });

  const handleClick = () => {
    navigate("/login");
  };

  const handleonChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendRequest = async () => {
    const res = await axios
      .post("/signup", {
        name: form.name,
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
      if (data.message === "Signed up successfully") {
        setEmail(form.email);
        setForm({
          ...form,
          name: "",
          email: "",
          password: "",
          button: "Sign Up",
          disabled: false,
          error: "",
          display: "none",
          border: "",
        });
        // localStorage.setItem("verify", "true");
        navigate("/verifymail");
        // window.location.reload()
        // toast.success(data.message);
      } else {
        console.log(data.message);
        setForm({
          ...form,
          button: "Sign Up",
          disabled: false,
          error: data.message,
          display: "flex",
          border: "1px solid #b30000",
        });
        // toast.error(data.message);
      }
    });
  };

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
          <form onSubmit={handleSubmit}>
            <p className="form-heading">Create An Account</p>
            <span>Use your email for registration</span>
            <span className="input-error" style={{ display: form.display }}>
              <BiSolidError style={{ fontSize: "20px" }} />
              {form.error}
            </span>
            <input
              name="name"
              type="text"
              placeholder="NAME"
              value={form.name}
              onChange={handleonChange}
              required
              disabled={form.disabled}
            />
            <input
              name="email"
              type="email"
              placeholder="EMAIL"
              value={form.email}
              onChange={handleonChange}
              required
              disabled={form.disabled}
              style={{
                border: form.border,
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="PASSWORD"
              value={form.password}
              onChange={handleonChange}
              required
              disabled={form.disabled}
            />
            <br />
            <button className="submit-button" disabled={form.disabled}>
              {form.button}
            </button>
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
