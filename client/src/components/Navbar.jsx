import { NavLink } from "react-router-dom"
import "../assets/css/Navbar.css"
import Searchbar from "./Searchbar";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingCartFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <div className="nav-logo">
                <span>E-commerce</span>
                <Searchbar/>
            </div>
            <div className="nav-items">
                        <div className="dropdown">
                           <button className="dropbtn"> <VscAccount/> Login</button>
                             <div className="dropdown-content">
                                 <li><NavLink to="/login"  style={{textDecoration:"none" ,color:"black"}}>Login</NavLink></li>
                                 <li><NavLink to="/"  style={{textDecoration:"none" ,color:"black"}}>My profile</NavLink></li>
                                 <li><NavLink to="/"  style={{textDecoration:"none" ,color:"black"}}>Order</NavLink></li>
                                 <li><NavLink to="/" style={{textDecoration:"none" ,color:"black"}}>whisList</NavLink></li>
                                 <li><NavLink to="/" style={{textDecoration:"none" ,color:"black"}}>Log Out</NavLink></li>
                              </div>
                        </div>
                        <div className="Cart">
                            <button> Cart <RiShoppingCartFill /> </button>
                        </div>
            </div>
        </div>
        </>
    )
}
export default Navbar;
