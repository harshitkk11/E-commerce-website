import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { IoCartOutline } from "react-icons/io5";

import DropDown from "./DropDown";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContexts";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [dropdown, setDropdown] = useState({
    link: "/login",
    value: "Login",
    displaysignup: "flex",
    displaylogout: "none",
  });

  useEffect(() => {
    if (user) {
      setDropdown({
        ...dropdown,
        link: "#",
        value: user.fname,
        displaysignup: "none",
        displaylogout: "block",
      });
    }
  }, [user]);

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
          <DropDown
            link={dropdown.link}
            value={dropdown.value}
            displaysignup={dropdown.displaysignup}
            displaylogout={dropdown.displaylogout}
          />
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
