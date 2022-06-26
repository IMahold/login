import React, { useState } from "react";
import Button from "@mui/material/Button";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Typography } from "@mui/material";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
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
    <div className="login-container">
      <div className="login-form">
        <form action="">
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", color: "#464646", fontWeight: "600" }}
          >
            Login to your Account
          </Typography>

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
          <p className="forgot">Forgot Password?</p>
          <Link to="/upload" style={{ textDecoration: "none" }}>
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
              Login
            </Button>
          </Link>
          <p className="account">
            Don't have an account?{" "}
            <Link to="/signup">
              <span> Register now </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
