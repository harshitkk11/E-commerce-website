import { NavLink, useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import axios from "axios";

const DropDown = (props) => {
  const navigate = useNavigate();

  const sendLogoutreq = async () => {
    const res = await axios
      .post("/logout", null, {
        withCredentials: true,
      })
      .catch((err) => {
        return err;
      });
    return res;
  };

  const handleLogout = (e) => {
    e.preventDefault();
    sendLogoutreq().then(() => {
      localStorage.removeItem("isauth");
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => navigate(props.link)}>
        {" "}
        <VscAccount style={{ fontSize: "21px" }} /> {props.value}
      </button>
      <div className="dropdown-content">
        <li style={{ display: props.displaysignup }}>
          <div className="option1">
            {/* <button onClick={() => navigate("/login")}>Login</button> */}
            <span>
              New Customer?
              <NavLink
                to="/signup"
                style={{ textDecoration: "none", color: "dodgerblue" }}
              >
                Sign Up
              </NavLink>
            </span>
          </div>
        </li>
        <li>
          <button className="option" onClick={() => navigate("/profile")}>
            My profile
          </button>
          {/* <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  My profile
                </NavLink> */}
        </li>
        <li>
          <button className="option" onClick={() => navigate("/order")}>
            Order
          </button>
          {/* <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Order
                </NavLink> */}
        </li>
        <li>
          <button className="option" onClick={() => navigate("/wishlist")}>
            Wishlist
          </button>
          {/* <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  whisList
                </NavLink> */}
        </li>
        <li style={{ display: props.displaylogout }}>
          <button className="option" onClick={(e) => handleLogout(e)}>
            Logout
          </button>
          {/* <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Log Out
                </NavLink> */}
        </li>
      </div>
    </div>
  );
};

export default DropDown;
