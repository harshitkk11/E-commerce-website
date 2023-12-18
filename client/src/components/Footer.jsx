import "../assets/css/Footer.css"

function Footer (){
    return(
        <div className="footer">
            <div className="about">
                <span>ABOUT</span>
                <nav className="about-nav">
                    <li>Contact Us</li>
                    <li>About us</li>
                    <li>Carrer</li>
                </nav>
            </div>
            <div className="help">
                <h3>Let Us Help You</h3>
                <nav className="help-nav">
                    <li>Payment</li>
                    <li>Shipping</li>
                    <li>Cancelation & return</li>
                </nav>
            </div>
        </div>
    )
}
export default Footer;