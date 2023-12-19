import "../assets/css/Forget.css"
import { Link } from "react-router-dom";
function Forget(){
    return(
        <div className="forget">
            <div className="container-f">
                <h3>Forget your Password ?</h3>
                <span>
                    Back to 
                    <Link 
                    to="/login"
                    style={{
                    paddingLeft:"5px",
                    textDecoration:"none",
                    }}
                    >
                    Login</Link>
                </span>
                <div className="form">
                    <h4>Email</h4>
                    <input className="input-f" type="email"
                    placeholder="Email" 
                    />
                </div>
                <button className="reset">Reset</button>
            </div>
        </div>

    )
}
export default Forget;