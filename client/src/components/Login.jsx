import { Link } from "react-router-dom";
import "../assets/css/Login.css"
import "../assets/js/Login.js"
function Login () {
    return (
        <div className="login-singup">
       <div className="container">
            <div className="form-container sign-up-container">
                <form action="/">
                    <h1>Create An Account</h1>
                    <div className="social-container">
                        <Link to="/fb"> 
                            facebook
                        </Link>
                        <Link to="/goggle"> 
                            goggle
                        </Link>
                    </div>
                    <span>use your email for Regestration</span>
                    <input type="text" placeholder="NAME" />
                    <input type="email" placeholder="E-MAIL"/>
                    <input type="password" placeholder="PASSWORD"/>
                    <br />
                    <button>Sign Up</button>
                </form> 
            </div>
            <div className="form-conatiner sign-in-container">
                <form action="/">
                    <h1>Sign In</h1>
                    <div className="social-container">
                        <Link to="/fb"> 
                            facebook
                        </Link>
                        <Link to="/goggle"> 
                            goggle
                        </Link>
                    </div>
                    <span>Login to your Account</span>
                    <input type="email" placeholder="USERNAME"/>
                    <input type="password" placeholder="PASSWORD"/>
                    <Link to="/forget-password">forget your password</Link>
                    <br />
                    <button>Log in</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Have already An Account ?</h1>
                        <p>To keep connect with us please login here !</p>
                        <button class="ghost" id="signin">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Create your Account</h1>
                        <p>Enter your personal details here</p>
                        <button class="ghost" id="signup">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}
export default Login;