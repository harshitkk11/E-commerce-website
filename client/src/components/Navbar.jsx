// import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const handleMenuOne = () => {
    console.log("Login clicked")
  };

  const handleMenuTwo = () => {
    console.log("My Profile clicked")
  };

  const handleMenuThree = () => {
    console.log("Order clicked")
  };

  const handleMenuFour = () => {
    console.log("whisList clicked")
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <span>E-commerce</span>
        </div>
        <div className="nav-items">
          <Dropdown
            trigger={<button className="dropdown-button">Log in</button>}
            menu={[
                <button onClick={handleMenuOne}>Log in</button>,
                <button onClick={handleMenuTwo}>My Profile</button>,
                <button onClick={handleMenuThree}>Order</button>,
                <button onClick={handleMenuFour}>whisList</button>
            ]}
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
