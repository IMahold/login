import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { LOGIN_URL } from "../../api/api";

export default function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, {
        email: email,
        password: passwordInput,
      });
      console.log("Response is", response);

      if (response.status === 200) {
        history.push("/upload");
      } else alert("Wrong email or password");
    } catch (error) {
      console.log("Login Error", error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <p className="main-text">Login to your Account</p>
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
              type="email"
              id="emailInput"
              pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
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
              onChange={handlePasswordChange}
              value={passwordInput}
              name="password"
              id="passwordInput"
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
        </form>

        <p className="forgot">Forgot Password?</p>
        {/* <Link to="/upload" style={{ textDecoration: "none" }}> */}
        <button onClick={handleSubmit} className="login-button">
          Login
        </button>
        {/* </Link> */}
        <p className="account">
          Don't have an account?{" "}
          <Link to="/signup">
            <span> Register now </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
