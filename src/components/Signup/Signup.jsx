import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./signup.css";

export default function Signup() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState(""); //pass target
  const [email, setEmail] = useState(""); // email target
  const [checked, setChecked] = useState(false);

  const [currentClass, setCurrentClass] = useState("defaulList");
  const [numSymbClass, setNumSymbClass] = useState("defaultList");
  const [lengthClass, setLengthClass] = useState("defaultList");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const handleSubmit = (e) => e.preventDefault();

  // When the user starts to type something inside the password field

  const lowCase = /[a-z]/g;
  const upCase = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const symbols = /[!@#\$%\^\&*\)\(+=._-]/g;

  useEffect(() => {
    if (passwordInput.length >= 6) setLengthClass("valid");
    else setLengthClass("invalid");
    if (passwordInput.match(lowCase) && passwordInput.match(upCase)) {
      // setMatch({ ...match, lowUp: true });
      setCurrentClass("valid");
    } else if (!passwordInput.match(lowCase) || !passwordInput.match(upCase))
      // setMatch({ ...match, lowUp: false });
      setCurrentClass("invalid");

    if (passwordInput.match(numbers) || passwordInput.match(symbols))
      // setMatch({ ...match, numSymb: true });
      setNumSymbClass("valid");
    else if (!passwordInput.match(numbers) && !passwordInput.match(symbols))
      // setMatch({ ...match, numSymb: false });
      setNumSymbClass("invalid");

    if (
      passwordInput.length < 6 &&
      !passwordInput.match(lowCase) &&
      !passwordInput.match(numbers) &&
      !passwordInput.match(upCase) &&
      !passwordInput.match(symbols)
    ) {
      setNumSymbClass("defaultList");

      setCurrentClass("defaultList");
      setLengthClass("defaultList");
    }
  }, [passwordInput]);

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
              type="text"
              id="emailInput"
              // required
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
                <li className={lengthClass}>Contains at least 6 characters</li>
                <li className={currentClass}>
                  Contains both lower (a-z) and upper case letters (A-Z)
                </li>
                <li className={numSymbClass}>
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
