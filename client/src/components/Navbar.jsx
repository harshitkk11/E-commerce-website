import { NavLink } from "react-router-dom"
import "../assets/css/Navbar.css"

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
        </div>
        </>
    )
}
export default Navbar;
