import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./signup.css";
import { SIGN_URL } from "../../api/api";

export default function Signup() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState(""); //pass target
  const [email, setEmail] = useState(""); // email target
  // const [checked, setChecked] = useState(false);

  const [currentClass, setCurrentClass] = useState("defaulList");
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

  // submit function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const items = { email, passwordInput };
    console.log("Items", items);

    try {
      const response = await axios.post(SIGN_URL, JSON.stringify(items), {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
    } catch (error) {
      console.log("Error message", error.message);
    }
  };

  //Test function

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const items = { email, passwordInput };
  //   console.log("Items", items);

  //   fetch(SIGN_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(items),
  //   }).then(() => {
  //     console.log("New user created");
  //   });

  // console.log(JSON.stringify(response?.data));
  // console.log(JSON.stringify(response));
  // };

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
              type="email"
              id="emailInput"
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
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

          <button className="register-button">Register Account</button>
        </form>
      </div>
    </div>
  );
}
