import "../assets/css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="about">
          <span>ABOUT</span>
          <nav className="nav">
            <li>Contact Us</li>
            <li>About us</li>
            <li>Carrer</li>
          </nav>
        </div>
        <div className="help">
          <span>Let Us Help You</span>
          <nav className="nav">
            <li>Payment</li>
            <li>Shipping</li>
            <li>Cancelation & return</li>
          </nav>
        </div>
        <div className="consumer">
          <span>Consumer Policy</span>
          <nav className="nav">
            <li>Term and Use</li>
            <li>Security</li>
            <li>Privacy</li>
          </nav>
        </div>
        <div className="social">
          <span>Social</span>
          <nav className="nav">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
          </nav>
        </div>
      </div>
      <div className="footer-right">
        <div className="Mail">
          <span>Mail Us</span>
        </div>
        <div className="register">
            <div className="add">
               <span>Register offcie Address</span>
               <p>Knowledge Park 2</p>
               <p>Greater Noida , Uttar Pardesh</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
