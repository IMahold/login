import React from "react";
import "./registration.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="registration-container">
      <div className="reg-successful">
        <div className="reg-check">
          <CheckCircleRoundedIcon sx={{ fontSize: "120px" }} />
        </div>
        <p className="reg-text">Registration Successful</p>
        <div className="box-message">
          <CheckCircleRoundedIcon
            sx={{ fontSize: "40px", marginRight: "10px" }}
          />
          <p className="">
            Thank you.We have sent you an email to example@email.com. Please
            click the link in that message to activate your account
          </p>
        </div>
        <Link to="/">
          <button className="continue-button">Continue</button>
        </Link>
      </div>
    </div>
  );
}
