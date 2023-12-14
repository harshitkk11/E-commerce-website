import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import Verification from "../assets/images/verification.png";
import Verified from "../assets/images/verified.png";
import { BiSolidError } from "react-icons/bi";

const Verify = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [verifyBtn, setVerifyBtn] = useState({
    disabled: false,
    text: "Verify Email",
    verified: false,
    display: "none",
  });

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setVerifyBtn({
        ...verifyBtn,
        disabled: true,
        text: "Please Wait..",
      });
      const verifyReq = await axios.post("/verify", { id });

      if (verifyReq) {
        setVerifyBtn({
          ...verifyBtn,
          disabled: false,
          text: "Verify Email",
          verified: true,
        });
        setSearchParams("");
        localStorage.removeItem("verify");
        // const interval = setInterval(() => {
        //   navigate("/login");
        // }, 1000 * 2.5);
        // return () => clearInterval(interval);
      }
    } catch (err) {
      setVerifyBtn({
        disabled: false,
        text: "Verify Email",
        display: "block",
      });
    }
  };

  return (
    <div className="verifymail">
      <div className="verify-mail-container">
        {!verifyBtn.verified ? (
          <>
            <p className="vmc-heading">Email Verification Page</p>
            <img
              className="vmc-img"
              src={Verification}
              alt="Email Verifiction"
            />
            <p>
              Please click the "Verify Email" button below to verify your email
              address.
            </p>
            <span
              className="input-error"
              style={{ display: verifyBtn.display, marginTop: "20px" }}
            >
              <BiSolidError style={{ fontSize: "20px" }} />
              Something Went Wrong!!
            </span>
            <button
              onClick={(e) => handleClick(e)}
              disabled={verifyBtn.disabled}
              style={{ marginTop: "20px" }}
            >
              {verifyBtn.text}
            </button>
          </>
        ) : (
          <>
            <img
              className="vmc-img"
              src={Verified}
              alt="Email Verifiction"
              style={{ marginTop: "0px" }}
            />
            <p style={{ fontSize: "20px" }}>
              Thank you! Your Email has been verified.
            </p>
            <button
              onClick={() => navigate("/login")}
              disabled={verifyBtn.disabled}
              style={{ marginTop: "20px" }}
            >
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Verify;
