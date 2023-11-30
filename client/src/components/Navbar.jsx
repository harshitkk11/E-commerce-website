// import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";
import Dropdown from "./Dropdown";

<<<<<<< HEAD
const Navbar = () =>{
    return (
        <>
        <div className="navbar">
            <div className="nav-logo">
                <span>E-commerce</span>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <div className="dropdown">
                           <NavLink className="dropbtn" style={{fontSize:"20px"}} >Login</NavLink>
                             <div className="dropdown-content">
                                 <li><NavLink to="/"  style={{textDecoration:"none" ,color:"black"}}>My profile</NavLink></li>
                                 <li><NavLink to="/"  style={{textDecoration:"none" ,color:"black"}}>Order</NavLink></li>
                                 <li><NavLink to="/" style={{textDecoration:"none" ,color:"black"}}>whisList</NavLink></li>
                                 <li><NavLink to="/" style={{textDecoration:"none" ,color:"black"}}>Log Out</NavLink></li>
                              </div>
                        </div>
                    </li>
                    <li>Cart</li>
                    <li><NavLink to="/login" className="nav-item">Log in</NavLink></li>
                    <li><NavLink to="/signup" className="nav-item">Sign up</NavLink></li>
                </ul>
            </div>
=======
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
>>>>>>> 621bb449df8e0c42f2c4b3a4ac50b362b6bf08da
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
