import { NavLink, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <span>E-commerce</span>
          <div className="searchbar-1">
            <Searchbar />
          </div>
        </div>
        <div className="nav-items">
          <div className="dropdown">
            <button className="dropbtn" onClick={() => navigate("/login")}>
              {" "}
              <VscAccount style={{ fontSize: "21px" }} /> Login
            </button>
            <div className="dropdown-content">
              <li>
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
                <button
                  className="option"
                  onClick={() => navigate("/wishlist")}
                >
                  Wishlist
                </button>
                {/* <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  whisList
                </NavLink> */}
              </li>
              <li>
                <button className="option" onClick={() => navigate("/")}>
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
          <div className="Cart">
            <button onClick={() => navigate("/cart")}>
              <IoCartOutline style={{ fontSize: "23px", height: "100%" }} />
              <p className="text">Cart</p>
            </button>
          </div>
        </div>
        <div className="searchbar-2">
          <Searchbar />
        </div>
      </div>
    </>
  );
};
export default Navbar;
