// import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <span>E-commerce</span>
        </div>
        <div className="nav-items">
            <div className="dropdown">
          <button  className="dropdown-button" onClick={handleOpen}>Log in</button>
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                <button>Log in</button>
              </li>
              <li className="menu-item">
                <button>My Profile</button>
              </li>
              <li className="menu-item">
                <button>Order</button>
              </li>
              <li className="menu-item">
                <button>Order</button>
              </li>
              <li className="menu-item">
                <button>Order</button>
              </li>
            </ul>
          ) : null}
          </div>
          {/* <select value="Login">
                    <option value="Login">Login</option>
                    <option value="My Profile">My Profile</option>
                    <option value="My Profile">Order</option>
                    <option value="My Profile">whisList</option>
                    <option value="My Profile">Log Out</option>
                </select> */}
          {/* <ul>
                    <div className="dropdown">
                        <button className="dropbtn">Login</button>
                        <ul>
                            <li><NavLink>My profile</NavLink></li>
                            <li><NavLink>Order</NavLink></li>
                             <li><NavLink>whisList</NavLink></li>
                             <li><NavLink>Log Out</NavLink></li>
                         </ul>
                    </div>
                    <li>Cart</li>
                    <li><NavLink to="/login" className="nav-item">Log in</NavLink></li>
                    <li><NavLink to="/signup" className="nav-item">Sign up</NavLink></li>
                </ul> */}
        </div>
      </div>
    </>
  );
};
export default Navbar;
