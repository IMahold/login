import React, { useState } from "react";

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./signup.css";
import { Button } from "@mui/material";

export default function Signup() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form action="">
          {/* Email input */}

          <div className="email-input">
            <p>
              Email address <span className="star">*</span>
            </p>
            <input type="text" placeholder="Enter email address" />
          </div>

          {/* Password input */}
          <div>
            <p>
              Create password <span className="star">*</span>
            </p>
            <div className="pass-input">
              <input
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
                placeholder="Enter password"
              />
              <span onClick={togglePassword}>
                {passwordType === "password" ? (
                  <AiOutlineEyeInvisible className="show-icon" />
                ) : (
                  <AiOutlineEye className="show-icon" />
                )}
              </span>
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>I agree to terms & conditions</p>
          </div>

          <Button
            fullWidth
            variant="contained"
            sx={{
              fontSize: "0.8rem",
              padding: "7px",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Register Account
          </Button>
        </form>
      </div>
    </div>
  );
}
