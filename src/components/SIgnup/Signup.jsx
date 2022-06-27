import React, { useState } from "react";

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./signup.css";
import { Button } from "@mui/material";

export default function Signup() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");

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
          <p className="register-text">Create Account</p>
          {/* Email input */}
          <div className="password-input">
            <label
              htmlFor="emailInput"
              className={email.length === 0 ? "label" : "label label-active"}
            >
              <span className="placeholder-text">Enter Email </span>
              <span className="star">*</span>
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="emailInput"
            />
          </div>

          {/* Password input */}

          <div className="password-input">
            <label
              htmlFor="passwordInput"
              className={
                passwordInput.length === 0 ? "label" : "label label-active"
              }
            >
              <span className="placeholder-text">Password </span>
              <span className="star">*</span>
            </label>

            <input
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              name="password"
              id="passwordInput"
            />
            <span onClick={togglePassword}>
              {passwordType === "password" ? (
                <AiOutlineEyeInvisible className="icon" />
              ) : (
                <AiOutlineEye className="icon" />
              )}
            </span>
          </div>

          {checked === true && (
            <div className="conditions">
              <ul>
                <li>Contains at least 6 characters</li>
                <li>Contains both lower (a-z) and upper case letters (A-Z)</li>
                <li>Contains at least one number (0-9) or a symbol</li>
              </ul>
            </div>
          )}
          {/* <div className="checkbox">
            <input
              type="checkbox"
              onChange={() => setChecked(!checked)}
              checked={checked}
            />
            <p>I agree to terms & conditions</p>
          </div> */}

          <label for="check" className="container">
            <input
              className="checkbox-input"
              type="checkbox"
              id="check"
              onChange={() => setChecked(!checked)}
              checked={checked}
            />
            <span className="mark"></span>I agree to terms & conditions
          </label>

          <button className="register-button">Register Account</button>
        </form>
      </div>
    </div>
  );
}
