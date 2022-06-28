import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./signup.css";

export default function Signup() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState(""); //pass target
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState(""); // email target

  console.log("Email", email);
  console.log("password", passwordInput);
  // console.log("re-render!!!");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
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
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="emailInput"
              required
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
              onChange={(e) => setPasswordInput(e.target.value)}
              value={passwordInput}
              name="password"
              id="passwordInput"
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$"
              required
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
                <li className="invalid">Contains at least 6 characters</li>
                <li className="invalid">
                  Contains both lower (a-z) and upper case letters (A-Z)
                </li>
                <li className="invalid">
                  Contains at least one number (0-9) or a symbol
                </li>
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

          <label htmlFor="check" className="container">
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
