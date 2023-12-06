import { Link } from "react-router-dom";
import Verification from "../assets/images/verification.png";
import { useContext } from "react";
import { EmailContext } from "../context/VerifyMailContext";

const VerifyMail = () => {
  const { email } = useContext(EmailContext);
  return (
    <div className="verifymail">
      <div className="verify-mail-container">
        <p className="vmc-heading">Verify Your Email</p>
        <br />
        <p>You will need to verify your email to complete the registration</p>
        <img className="vmc-img" src={Verification} alt="Email Verifiction" />
        <p>
          An email has been sent to <b>{email}</b> with a link to verify your account.
          If you have not received the verification email, please check your
          "Spam" folder.
        </p>
        <span>
          Back to{" "}
          <Link
            to={"/login"}
            style={{ color: "rgb(64, 64, 242)", textDecoration: "none" }}
          >
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default VerifyMail;
