import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { SIGN_URL } from "../../api/api";
import { Link, useHistory } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const history = useHistory();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState(""); //pass target
  const [email, setEmail] = useState(""); // email target
  // const [checked, setChecked] = useState(false);

  const [currentClass, setCurrentClass] = useState("defaultList");
  const [numSymbClass, setNumSymbClass] = useState("defaultList");
  const [lengthClass, setLengthClass] = useState("defaultList");

  // toggle password
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(SIGN_URL, {
        email: email,
        password: passwordInput,
      });
      console.log("Response is", response);

      if (response.status === 200) {
        history.push("/registration");
      } else alert("Error registering");
    } catch (error) {
      console.log("Login Error", error.message);
    }
  };

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
          <div className="email-input">
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
              pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
              required
            />
          </div>
          <p className="email-address">
            An account with this email address already exists.{" "}
            <Link to="/">
              <span>Sign in</span>{" "}
            </Link>{" "}
          </p>

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

          {/* {checked === false && ( */}
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
          {/* )} */}

          <label htmlFor="check" className="container">
            <input
              className="checkbox-input"
              type="checkbox"
              id="check"
              // onChange={() => setChecked(!checked)}
              // checked={checked}
            />
            <span className="mark"></span>I agree to terms & conditions
          </label>
          {/* <Link to="/registration"> */}
          <button className="register-button">Register Account</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}
