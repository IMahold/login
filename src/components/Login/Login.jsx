import React, { useState } from "react";
import Button from "@mui/material/Button";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Typography } from "@mui/material";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
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
            <div className="placeholder-mail">
              <span class="star">*</span>
            </div>
            <input type="text" placeholder="Enter Email" required />
          </div>

          {/* Password input */}
          <div className="password-input">
            <div className="placeholder-pass">
              <span class="star">*</span>
            </div>
            <input
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              name="password"
              placeholder="Password"
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
            Don't have an account? <span> Register now </span>
          </p>
        </form>
      </div>
    </div>
  );
}
