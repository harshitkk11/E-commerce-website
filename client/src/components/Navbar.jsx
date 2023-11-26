import { NavLink } from "react-router-dom"
import "../assets/css/Navbar.css"

const Navbar = () =>{
    return (
        <>
        <div className="navbar">
            <div className="nav-logo">
                <span>E-commerce</span></div>
            <div className="nav-items">
                <ul>
                    <li>Cart</li>
                    <li><NavLink to="/login" className="nav-item">Log in</NavLink></li>
                    <li><NavLink to="/signup" className="nav-item">Sign up</NavLink></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Navbar;
